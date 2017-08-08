/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.exportSymbol('proto.update.Destination', null, global);
goog.exportSymbol('proto.update.Id', null, global);
goog.exportSymbol('proto.update.Job', null, global);
goog.exportSymbol('proto.update.Jobs', null, global);
goog.exportSymbol('proto.update.Options', null, global);
goog.exportSymbol('proto.update.Progress', null, global);
goog.exportSymbol('proto.update.State', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.update.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.update.Options.repeatedFields_, null);
};
goog.inherits(proto.update.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.update.Options.displayName = 'proto.update.Options';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.update.Options.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.update.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.update.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.update.Options} msg The msg instance to transform.
 * @return {!Object}
 */
proto.update.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: jspb.Message.getFieldWithDefault(msg, 1, ""),
    destinationsList: jspb.Message.toObjectList(msg.getDestinationsList(),
    proto.update.Destination.toObject, includeInstance),
    extraMap: (f = msg.getExtraMap()) ? f.toObject(includeInstance, proto.google.protobuf.Value.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.update.Options}
 */
proto.update.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.update.Options;
  return proto.update.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.update.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.update.Options}
 */
proto.update.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 2:
      var value = new proto.update.Destination;
      reader.readMessage(value,proto.update.Destination.deserializeBinaryFromReader);
      msg.addDestinations(value);
      break;
    case 3:
      var value = msg.getExtraMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Value.deserializeBinaryFromReader);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.update.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.update.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.update.Options} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.update.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDestinationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.update.Destination.serializeBinaryToWriter
    );
  }
  f = message.getExtraMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Value.serializeBinaryToWriter);
  }
};


/**
 * optional string image = 1;
 * @return {string}
 */
proto.update.Options.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.update.Options.prototype.setImage = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated Destination destinations = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.update.Destination>}
 */
proto.update.Options.prototype.getDestinationsList = function() {
  return /** @type{!Array.<!proto.update.Destination>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.update.Destination, 2));
};


/** @param {!Array.<!proto.update.Destination>} value */
proto.update.Options.prototype.setDestinationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.update.Destination=} opt_value
 * @param {number=} opt_index
 * @return {!proto.update.Destination}
 */
proto.update.Options.prototype.addDestinations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.update.Destination, opt_index);
};


proto.update.Options.prototype.clearDestinationsList = function() {
  this.setDestinationsList([]);
};


/**
 * map<string, google.protobuf.Value> extra = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Value>}
 */
proto.update.Options.prototype.getExtraMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Value>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.google.protobuf.Value));
};


proto.update.Options.prototype.clearExtraMap = function() {
  this.getExtraMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.update.Id = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.update.Id, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.update.Id.displayName = 'proto.update.Id';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.update.Id.prototype.toObject = function(opt_includeInstance) {
  return proto.update.Id.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.update.Id} msg The msg instance to transform.
 * @return {!Object}
 */
proto.update.Id.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.update.Id}
 */
proto.update.Id.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.update.Id;
  return proto.update.Id.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.update.Id} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.update.Id}
 */
proto.update.Id.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.update.Id.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.update.Id.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.update.Id} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.update.Id.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.update.Id.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.update.Id.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.update.Destination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.update.Destination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.update.Destination.displayName = 'proto.update.Destination';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.update.Destination.prototype.toObject = function(opt_includeInstance) {
  return proto.update.Destination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.update.Destination} msg The msg instance to transform.
 * @return {!Object}
 */
proto.update.Destination.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    extraMap: (f = msg.getExtraMap()) ? f.toObject(includeInstance, proto.google.protobuf.Value.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.update.Destination}
 */
proto.update.Destination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.update.Destination;
  return proto.update.Destination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.update.Destination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.update.Destination}
 */
proto.update.Destination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = msg.getExtraMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Value.deserializeBinaryFromReader);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.update.Destination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.update.Destination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.update.Destination} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.update.Destination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExtraMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Value.serializeBinaryToWriter);
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.update.Destination.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.update.Destination.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * map<string, google.protobuf.Value> extra = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Value>}
 */
proto.update.Destination.prototype.getExtraMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Value>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.google.protobuf.Value));
};


proto.update.Destination.prototype.clearExtraMap = function() {
  this.getExtraMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.update.Progress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.update.Progress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.update.Progress.displayName = 'proto.update.Progress';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.update.Progress.prototype.toObject = function(opt_includeInstance) {
  return proto.update.Progress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.update.Progress} msg The msg instance to transform.
 * @return {!Object}
 */
proto.update.Progress.toObject = function(includeInstance, msg) {
  var f, obj = {
    started: jspb.Message.getFieldWithDefault(msg, 1, 0),
    completed: jspb.Message.getFieldWithDefault(msg, 2, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.update.Progress}
 */
proto.update.Progress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.update.Progress;
  return proto.update.Progress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.update.Progress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.update.Progress}
 */
proto.update.Progress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStarted(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCompleted(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.update.Progress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.update.Progress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.update.Progress} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.update.Progress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStarted();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCompleted();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 started = 1;
 * @return {number}
 */
proto.update.Progress.prototype.getStarted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.update.Progress.prototype.setStarted = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 completed = 2;
 * @return {number}
 */
proto.update.Progress.prototype.getCompleted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.update.Progress.prototype.setCompleted = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 duration = 3;
 * @return {number}
 */
proto.update.Progress.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.update.Progress.prototype.setDuration = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.update.Job = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.update.Job.repeatedFields_, null);
};
goog.inherits(proto.update.Job, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.update.Job.displayName = 'proto.update.Job';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.update.Job.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.update.Job.prototype.toObject = function(opt_includeInstance) {
  return proto.update.Job.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.update.Job} msg The msg instance to transform.
 * @return {!Object}
 */
proto.update.Job.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    options: (f = msg.getOptions()) && proto.update.Options.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 3, 0),
    destinationsList: jspb.Message.toObjectList(msg.getDestinationsList(),
    proto.update.Destination.toObject, includeInstance),
    progress: (f = msg.getProgress()) && proto.update.Progress.toObject(includeInstance, f),
    message: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.update.Job}
 */
proto.update.Job.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.update.Job;
  return proto.update.Job.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.update.Job} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.update.Job}
 */
proto.update.Job.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.update.Options;
      reader.readMessage(value,proto.update.Options.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 3:
      var value = /** @type {!proto.update.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 4:
      var value = new proto.update.Destination;
      reader.readMessage(value,proto.update.Destination.deserializeBinaryFromReader);
      msg.addDestinations(value);
      break;
    case 5:
      var value = new proto.update.Progress;
      reader.readMessage(value,proto.update.Progress.deserializeBinaryFromReader);
      msg.setProgress(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.update.Job.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.update.Job.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.update.Job} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.update.Job.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.update.Options.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getDestinationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.update.Destination.serializeBinaryToWriter
    );
  }
  f = message.getProgress();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.update.Progress.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.update.Job.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.update.Job.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Options options = 2;
 * @return {?proto.update.Options}
 */
proto.update.Job.prototype.getOptions = function() {
  return /** @type{?proto.update.Options} */ (
    jspb.Message.getWrapperField(this, proto.update.Options, 2));
};


/** @param {?proto.update.Options|undefined} value */
proto.update.Job.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.update.Job.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.update.Job.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional State state = 3;
 * @return {!proto.update.State}
 */
proto.update.Job.prototype.getState = function() {
  return /** @type {!proto.update.State} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.update.State} value */
proto.update.Job.prototype.setState = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * repeated Destination destinations = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.update.Destination>}
 */
proto.update.Job.prototype.getDestinationsList = function() {
  return /** @type{!Array.<!proto.update.Destination>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.update.Destination, 4));
};


/** @param {!Array.<!proto.update.Destination>} value */
proto.update.Job.prototype.setDestinationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.update.Destination=} opt_value
 * @param {number=} opt_index
 * @return {!proto.update.Destination}
 */
proto.update.Job.prototype.addDestinations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.update.Destination, opt_index);
};


proto.update.Job.prototype.clearDestinationsList = function() {
  this.setDestinationsList([]);
};


/**
 * optional Progress progress = 5;
 * @return {?proto.update.Progress}
 */
proto.update.Job.prototype.getProgress = function() {
  return /** @type{?proto.update.Progress} */ (
    jspb.Message.getWrapperField(this, proto.update.Progress, 5));
};


/** @param {?proto.update.Progress|undefined} value */
proto.update.Job.prototype.setProgress = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.update.Job.prototype.clearProgress = function() {
  this.setProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.update.Job.prototype.hasProgress = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.update.Job.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.update.Job.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.update.Jobs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.update.Jobs.repeatedFields_, null);
};
goog.inherits(proto.update.Jobs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.update.Jobs.displayName = 'proto.update.Jobs';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.update.Jobs.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.update.Jobs.prototype.toObject = function(opt_includeInstance) {
  return proto.update.Jobs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.update.Jobs} msg The msg instance to transform.
 * @return {!Object}
 */
proto.update.Jobs.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobsList: jspb.Message.toObjectList(msg.getJobsList(),
    proto.update.Job.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.update.Jobs}
 */
proto.update.Jobs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.update.Jobs;
  return proto.update.Jobs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.update.Jobs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.update.Jobs}
 */
proto.update.Jobs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.update.Job;
      reader.readMessage(value,proto.update.Job.deserializeBinaryFromReader);
      msg.addJobs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.update.Jobs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.update.Jobs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.update.Jobs} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.update.Jobs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.update.Job.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Job jobs = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.update.Job>}
 */
proto.update.Jobs.prototype.getJobsList = function() {
  return /** @type{!Array.<!proto.update.Job>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.update.Job, 1));
};


/** @param {!Array.<!proto.update.Job>} value */
proto.update.Jobs.prototype.setJobsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.update.Job=} opt_value
 * @param {number=} opt_index
 * @return {!proto.update.Job}
 */
proto.update.Jobs.prototype.addJobs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.update.Job, opt_index);
};


proto.update.Jobs.prototype.clearJobsList = function() {
  this.setJobsList([]);
};


/**
 * @enum {number}
 */
proto.update.State = {
  _: 0,
  STARTED: 1,
  COMPLETED: 2,
  CANCELLED: 3,
  FAILED: 4,
  TIMED_OUT: 5
};

goog.object.extend(exports, proto.update);
