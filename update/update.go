package update

import (
	"time"

	uuid "github.com/satori/go.uuid"
	log "github.com/sirupsen/logrus"
	context "golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
)

type Worker struct {
	input  chan *Id
	output chan Job
	ctx    context.Context
	cancel context.CancelFunc
}

type Server struct {
	concurrency int
	workers     map[string]*Worker
}

func NewServer(concurrency int, verbose bool) *Server {
	server := &Server{
		concurrency: concurrency,
		workers:     make(map[string]*Worker),
	}

	return server
}

func (s *Server) Start(ctx context.Context, req *Options) (*Id, error) {
	log.WithFields(log.Fields{
		"request": req,
	}).Debug("Start request")

	if len(s.workers) >= s.concurrency {
		err := grpc.Errorf(codes.ResourceExhausted, "no workers available")
		log.WithFields(log.Fields{
			"error": err,
		}).Warn("Start request warn")
		return nil, err
	}

	ctx, cancel := context.WithCancel(context.Background())
	if value, ok := req.Extra["timeout"]; ok {
		if timeout := value.GetNumberValue(); timeout != 0 {
			ctx, cancel = context.WithTimeout(ctx, time.Duration(int64(timeout))*time.Second)
		}
	}

	id := uuid.NewV4().String()
	worker := &Worker{
		input:  make(chan *Id),
		output: make(chan Job),
		ctx:    ctx,
		cancel: cancel,
	}
	s.workers[id] = worker

	s.update(req, id, worker)

	return &Id{Id: id}, nil
}

func (s *Server) Status(ctx context.Context, req *Id) (*Jobs, error) {
	log.WithFields(log.Fields{
		"request": req,
	}).Debug("Status request")

	resp := &Jobs{}
	if req.Id == "" {
		for _, worker := range s.workers {
			worker.input <- req
			r := <-worker.output
			s.cleanup(worker, req)
			resp.Jobs = append(resp.Jobs, &r)
		}
	} else {
		if worker, err := s.findWorker(req); err != nil {
			return nil, err
		} else {
			worker.input <- req
			r := <-worker.output
			s.cleanup(worker, req)
			resp.Jobs = append(resp.Jobs, &r)
		}
	}

	return resp, nil
}

func (s *Server) Cancel(ctx context.Context, req *Id) (*Job, error) {
	log.WithFields(log.Fields{
		"request": req,
	}).Debug("Cancel request")

	worker, err := s.findWorker(req)
	if err != nil {
		return nil, err
	}

	worker.cancel()

	worker.input <- req
	resp := <-worker.output

	s.cleanup(worker, req)

	return &resp, nil
}

func (s *Server) update(req *Options, id string, worker *Worker) {
	go func(req *Options, id string, worker *Worker) {
		defer worker.cancel()

		resp := Job{
			Id:      id,
			Options: req,
			State:   State_STARTED,
			Progress: &Progress{
				Started: time.Now().UTC().Unix(),
			},
		}

		sync := make(chan Job)

		go func(worker *Worker, sync chan Job, resp Job) {
			for {
				select {
				case resp = <-sync:
				case <-worker.input:
					if resp.Progress.Completed != 0 {
						resp.Progress.Duration = resp.Progress.Completed - resp.Progress.Started
					} else {
						resp.Progress.Duration = time.Now().UTC().Unix() - resp.Progress.Started
					}
					worker.output <- resp
					select {
					case <-worker.ctx.Done():
						return
					default:
					}
				default:
				}
			}
		}(worker, sync, resp)

		// This function is implemented inside lib.go
		// Each dependent device will have a different update function
		// update(worker, sync, resp)

	}(req, id, worker)
}

func (s *Server) findWorker(req *Id) (*Worker, error) {
	worker, ok := s.workers[req.Id]
	if !ok {
		err := grpc.Errorf(codes.NotFound, "worker not found")
		log.WithFields(log.Fields{
			"error": err,
		}).Warn("Status request warn")
		return nil, err
	}

	return worker, nil
}

func (s *Server) cleanup(worker *Worker, req *Id) {
	select {
	case <-worker.ctx.Done():
		delete(s.workers, req.Id)
	default:
	}
}

// import (
// 	"time"

// 	uuid "github.com/satori/go.uuid"
// 	log "github.com/sirupsen/logrus"
// 	context "golang.org/x/net/context"
// 	"google.golang.org/grpc"
// 	"google.golang.org/grpc/codes"
// )

// type Worker struct {
// 	input  chan *StatusRequest
// 	output chan StatusResponse
// 	ctx    context.Context
// 	cancel context.CancelFunc
// }

// type Server struct {
// 	concurrency int
// 	workers     map[string]*Worker
// }

// func NewServer(concurrency int, verbose bool) *Server {
// 	server := &Server{
// 		concurrency: concurrency,
// 		workers:     make(map[string]*Worker),
// 	}

// 	return server
// }

// func (s *Server) Start(ctx context.Context, req *StartRequest) (*StartResponse, error) {
// 	log.WithFields(log.Fields{
// 		"request": req,
// 	}).Debug("Start request received")

// 	if req.Address == "" || req.Payload == "" || req.Timeout == 0 {
// 		err := grpc.Errorf(codes.InvalidArgument, "must specify address, payload and timeout")
// 		log.WithFields(log.Fields{
// 			"error": err,
// 		}).Error("Start request error")
// 		return nil, err
// 	}

// 	if len(s.workers) >= s.concurrency {
// 		err := grpc.Errorf(codes.ResourceExhausted, "no workers available")
// 		log.WithFields(log.Fields{
// 			"error": err,
// 		}).Warn("Start request warn")
// 		return nil, err
// 	}

// 	id := uuid.NewV4().String()
// 	ctx, cancel := context.WithTimeout(context.Background(), time.Duration(req.Timeout)*time.Second)
// 	worker := &Worker{
// 		input:  make(chan *StatusRequest),
// 		output: make(chan StatusResponse),
// 		ctx:    ctx,
// 		cancel: cancel,
// 	}
// 	s.workers[id] = worker

// 	s.update(req, id, worker)

// 	return &StartResponse{Id: id}, nil
// }

// func (s *Server) Status(ctx context.Context, req *StatusRequest) (*StatusResponse, error) {
// 	log.WithFields(log.Fields{
// 		"request": req,
// 	}).Debug("Status request")

// 	worker, err := s.findWorker(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	worker.input <- req
// 	resp := <-worker.output

// 	s.cleanup(worker, req)

// 	return &resp, nil
// }

// func (s *Server) Workers(ctx context.Context, req *WorkersRequest) (*WorkersResponse, error) {
// 	log.WithFields(log.Fields{
// 		"request": req,
// 	}).Debug("Workers request")

// 	resp := WorkersResponse{}
// 	for key := range s.workers {
// 		worker := &WorkersResponse_Worker{Id: key}
// 		resp.Workers = append(resp.Workers, worker)
// 	}

// 	return &resp, nil
// }

// func (s *Server) Cancel(ctx context.Context, req *StatusRequest) (*StatusResponse, error) {
// 	log.WithFields(log.Fields{
// 		"request": req,
// 	}).Debug("Cancel request")

// 	worker, err := s.findWorker(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	worker.cancel()

// 	worker.input <- req
// 	resp := <-worker.output

// 	s.cleanup(worker, req)

// 	return &resp, nil
// }

// func (s *Server) update(req *StartRequest, id string, worker *Worker) {
// 	go func(req *StartRequest, id string, worker *Worker) {
// 		defer worker.cancel()

// 		resp := StatusResponse{
// 			Id:           id,
// 			StartRequest: req,
// 			State:        StatusResponse_STARTED,
// 			Started:      time.Now().UTC().Unix(),
// 		}

// 		sync := make(chan StatusResponse)

// 		go func(worker *Worker, sync chan StatusResponse, resp StatusResponse) {
// 			for {
// 				select {
// 				case resp = <-sync:
// 				case <-worker.input:
// 					worker.output <- resp
// 					select {
// 					case <-worker.ctx.Done():
// 						return
// 					default:
// 					}
// 				default:
// 				}
// 			}
// 		}(worker, sync, resp)

// 		// This function is implemented inside lib.go
// 		// Each dependent device will have a different scan function
// 		update(worker, sync, resp)

// 	}(req, id, worker)
// }

// func (s *Server) findWorker(req *StatusRequest) (*Worker, error) {
// 	worker, ok := s.workers[req.Id]
// 	if !ok {
// 		err := grpc.Errorf(codes.NotFound, "worker not found")
// 		log.WithFields(log.Fields{
// 			"error": err,
// 		}).Warn("Status request warn")
// 		return nil, err
// 	}

// 	return worker, nil
// }

// func (s *Server) cleanup(worker *Worker, req *StatusRequest) {
// 	select {
// 	case <-worker.ctx.Done():
// 		delete(s.workers, req.Id)
// 	default:
// 	}
// }
