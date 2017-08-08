package adapter

import (
	"fmt"
	"time"

	structpb "github.com/golang/protobuf/ptypes/struct"
)

func scan(req *ScanOptions, worker *Worker, sync chan Job, resp Job) {
	// This is just an example which simulates finding one device per second
	for i := 0; i < 100; i++ {
		select {
		case <-worker.ctx.Done():
			return
		case <-time.After(time.Second * 1):
			extra := make(map[string]*structpb.Value)
			extra["application"] = &structpb.Value{
				Kind: &structpb.Value_StringValue{StringValue: fmt.Sprintf("Application: %d", i)},
			}
			extra["MAC"] = &structpb.Value{
				Kind: &structpb.Value_StringValue{StringValue: fmt.Sprintf("MAC: %d", i)},
			}
			destination := &Destination{
				Id:    fmt.Sprintf("IP: %d", i),
				Extra: extra,
			}

			resp.Destinations = append(resp.Destinations, destination)
			sync <- resp
		}
	}
}

func update(req *UpdateOptions, worker *Worker, sync chan Job, resp Job) {
	// This is just an example which simulates increasing the progress percentage by one per second
	for i := 0; i < 100; i++ {
		select {
		case <-worker.ctx.Done():
			return
		case <-time.After(time.Second * 1):
			// resp.State = StatusResponse_FLASHING
			// resp.Progress = int32(i)
			resp.Message = fmt.Sprintf("message: %d", i)
			sync <- resp
		}
	}
}

// func scan(worker *Worker, sync chan StatusResponse, resp StatusResponse) {
// 	hosts, err := wifi.Scan(worker.ctx)
// 	if err != nil {
// 		if errors.Cause(err) == context.DeadlineExceeded {
// 			resp.State = StatusResponse_TIMED_OUT
// 		} else if errors.Cause(err) == context.Canceled {
// 			resp.State = StatusResponse_CANCELLED
// 		} else {
// 			resp.Message = err.Error()
// 			resp.State = StatusResponse_FAILED
// 		}
// 		sync <- resp
// 		return
// 	}

// 	for _, host := range hosts {
// 		if resp.StartRequest.Application != "" && !strings.EqualFold(host.Application, resp.StartRequest.Application) {
// 			continue
// 		} else if resp.StartRequest.Mac != "" && !strings.EqualFold(host.Mac, resp.StartRequest.Mac) {
// 			continue
// 		}

// 		result := &StatusResponse_Result{
// 			Application: host.Application,
// 			Ip:          host.Ip,
// 			Mac:         host.Mac,
// 		}
// 		resp.Results = append(resp.Results, result)
// 		resp.State = StatusResponse_COMPLETED
// 		resp.Completed = time.Now().UTC().Unix()
// 		sync <- resp
// 	}
// }

// func update(worker *Worker, sync chan StatusResponse, resp StatusResponse) {
// 	hosts, err := wifi.Scan(worker.ctx)
// 	if err != nil {
// 		if errors.Cause(err) == context.DeadlineExceeded {
// 			resp.State = StatusResponse_TIMED_OUT
// 		} else if errors.Cause(err) == context.Canceled {
// 			resp.State = StatusResponse_CANCELLED
// 		} else {
// 			resp.Message = err.Error()
// 			resp.State = StatusResponse_FAILED
// 		}
// 		sync <- resp
// 		return
// 	}

// 	ip := ""
// 	for _, host := range hosts {
// 		if strings.EqualFold(host.Mac, resp.StartRequest.Address) {
// 			ip = host.Ip
// 			break
// 		}
// 	}

// 	if ip == "" {
// 		resp.Message = "device is offline"
// 		resp.State = StatusResponse_FAILED
// 		sync <- resp
// 		return
// 	}

// 	if err := wifi.PostForm("http://"+ip+"/update", resp.StartRequest.Payload); err != nil {
// 		resp.Message = err.Error()
// 		resp.State = StatusResponse_FAILED
// 		sync <- resp
// 		return
// 	}

// 	resp.State = StatusResponse_COMPLETED
// 	resp.Completed = time.Now().UTC().Unix()
// 	sync <- resp
// }