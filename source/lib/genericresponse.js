// source: messages.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.vdcapi.GenericResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.vdcapi.ErrorType');
goog.forwardDeclare('proto.vdcapi.ResultCode');
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
proto.vdcapi.GenericResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vdcapi.GenericResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vdcapi.GenericResponse.displayName = 'proto.vdcapi.GenericResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vdcapi.GenericResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vdcapi.GenericResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vdcapi.GenericResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vdcapi.GenericResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    errortype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    usermessagetobetranslated: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.vdcapi.GenericResponse}
 */
proto.vdcapi.GenericResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vdcapi.GenericResponse;
  return proto.vdcapi.GenericResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vdcapi.GenericResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vdcapi.GenericResponse}
 */
proto.vdcapi.GenericResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.vdcapi.ResultCode} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {!proto.vdcapi.ErrorType} */ (reader.readEnum());
      msg.setErrortype(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsermessagetobetranslated(value);
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
proto.vdcapi.GenericResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vdcapi.GenericResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vdcapi.GenericResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vdcapi.GenericResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.vdcapi.ResultCode} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!proto.vdcapi.ErrorType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * required ResultCode code = 1;
 * @return {!proto.vdcapi.ResultCode}
 */
proto.vdcapi.GenericResponse.prototype.getCode = function() {
  return /** @type {!proto.vdcapi.ResultCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.vdcapi.ResultCode} value
 * @return {!proto.vdcapi.GenericResponse} returns this
 */
proto.vdcapi.GenericResponse.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vdcapi.GenericResponse} returns this
 */
proto.vdcapi.GenericResponse.prototype.clearCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vdcapi.GenericResponse.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.vdcapi.GenericResponse.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vdcapi.GenericResponse} returns this
 */
proto.vdcapi.GenericResponse.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vdcapi.GenericResponse} returns this
 */
proto.vdcapi.GenericResponse.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vdcapi.GenericResponse.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ErrorType errorType = 3;
 * @return {!proto.vdcapi.ErrorType}
 */
proto.vdcapi.GenericResponse.prototype.getErrortype = function() {
  return /** @type {!proto.vdcapi.ErrorType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.vdcapi.ErrorType} value
 * @return {!proto.vdcapi.GenericResponse} returns this
 */
proto.vdcapi.GenericResponse.prototype.setErrortype = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vdcapi.GenericResponse} returns this
 */
proto.vdcapi.GenericResponse.prototype.clearErrortype = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vdcapi.GenericResponse.prototype.hasErrortype = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string userMessageToBeTranslated = 4;
 * @return {string}
 */
proto.vdcapi.GenericResponse.prototype.getUsermessagetobetranslated = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vdcapi.GenericResponse} returns this
 */
proto.vdcapi.GenericResponse.prototype.setUsermessagetobetranslated = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vdcapi.GenericResponse} returns this
 */
proto.vdcapi.GenericResponse.prototype.clearUsermessagetobetranslated = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vdcapi.GenericResponse.prototype.hasUsermessagetobetranslated = function() {
  return jspb.Message.getField(this, 4) != null;
};


