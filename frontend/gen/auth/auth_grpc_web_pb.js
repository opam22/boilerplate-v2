/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v5.26.1
// source: auth/auth.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.auth = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.auth.AuthClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.auth.AuthPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.RegisterRequest,
 *   !proto.auth.RegisterResponse>}
 */
const methodDescriptor_Auth_Register = new grpc.web.MethodDescriptor(
  '/auth.Auth/Register',
  grpc.web.MethodType.UNARY,
  proto.auth.RegisterRequest,
  proto.auth.RegisterResponse,
  /**
   * @param {!proto.auth.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.RegisterResponse.deserializeBinary
);


/**
 * @param {!proto.auth.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.RegisterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.RegisterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthClient.prototype.register =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.Auth/Register',
      request,
      metadata || {},
      methodDescriptor_Auth_Register,
      callback);
};


/**
 * @param {!proto.auth.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.RegisterResponse>}
 *     Promise that resolves to the response
 */
proto.auth.AuthPromiseClient.prototype.register =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.Auth/Register',
      request,
      metadata || {},
      methodDescriptor_Auth_Register);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.LoginRequest,
 *   !proto.auth.LoginResponse>}
 */
const methodDescriptor_Auth_Login = new grpc.web.MethodDescriptor(
  '/auth.Auth/Login',
  grpc.web.MethodType.UNARY,
  proto.auth.LoginRequest,
  proto.auth.LoginResponse,
  /**
   * @param {!proto.auth.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.auth.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.Auth/Login',
      request,
      metadata || {},
      methodDescriptor_Auth_Login,
      callback);
};


/**
 * @param {!proto.auth.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.auth.AuthPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.Auth/Login',
      request,
      metadata || {},
      methodDescriptor_Auth_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.VerificationRequest,
 *   !proto.auth.VerificationResponse>}
 */
const methodDescriptor_Auth_Verification = new grpc.web.MethodDescriptor(
  '/auth.Auth/Verification',
  grpc.web.MethodType.UNARY,
  proto.auth.VerificationRequest,
  proto.auth.VerificationResponse,
  /**
   * @param {!proto.auth.VerificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.VerificationResponse.deserializeBinary
);


/**
 * @param {!proto.auth.VerificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.VerificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.VerificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthClient.prototype.verification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.Auth/Verification',
      request,
      metadata || {},
      methodDescriptor_Auth_Verification,
      callback);
};


/**
 * @param {!proto.auth.VerificationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.VerificationResponse>}
 *     Promise that resolves to the response
 */
proto.auth.AuthPromiseClient.prototype.verification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.Auth/Verification',
      request,
      metadata || {},
      methodDescriptor_Auth_Verification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.MeRequest,
 *   !proto.auth.MeResponse>}
 */
const methodDescriptor_Auth_Me = new grpc.web.MethodDescriptor(
  '/auth.Auth/Me',
  grpc.web.MethodType.UNARY,
  proto.auth.MeRequest,
  proto.auth.MeResponse,
  /**
   * @param {!proto.auth.MeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.MeResponse.deserializeBinary
);


/**
 * @param {!proto.auth.MeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.MeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.MeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthClient.prototype.me =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.Auth/Me',
      request,
      metadata || {},
      methodDescriptor_Auth_Me,
      callback);
};


/**
 * @param {!proto.auth.MeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.MeResponse>}
 *     Promise that resolves to the response
 */
proto.auth.AuthPromiseClient.prototype.me =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.Auth/Me',
      request,
      metadata || {},
      methodDescriptor_Auth_Me);
};


module.exports = proto.auth;

