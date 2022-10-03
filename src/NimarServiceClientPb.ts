/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as nimar_pb from './nimar_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class NimaRClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListRooms = new grpcWeb.MethodDescriptor(
    '/NimaR/ListRooms',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nimar_pb.Rooms,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nimar_pb.Rooms.deserializeBinary
  );

  listRooms(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nimar_pb.Rooms>;

  listRooms(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nimar_pb.Rooms) => void): grpcWeb.ClientReadableStream<nimar_pb.Rooms>;

  listRooms(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nimar_pb.Rooms) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/NimaR/ListRooms',
        request,
        metadata || {},
        this.methodInfoListRooms,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/NimaR/ListRooms',
    request,
    metadata || {},
    this.methodInfoListRooms);
  }

  methodInfoCreateRoom = new grpcWeb.MethodDescriptor(
    '/NimaR/CreateRoom',
    grpcWeb.MethodType.UNARY,
    nimar_pb.CreateRoomRequest,
    nimar_pb.Room,
    (request: nimar_pb.CreateRoomRequest) => {
      return request.serializeBinary();
    },
    nimar_pb.Room.deserializeBinary
  );

  createRoom(
    request: nimar_pb.CreateRoomRequest,
    metadata: grpcWeb.Metadata | null): Promise<nimar_pb.Room>;

  createRoom(
    request: nimar_pb.CreateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nimar_pb.Room) => void): grpcWeb.ClientReadableStream<nimar_pb.Room>;

  createRoom(
    request: nimar_pb.CreateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nimar_pb.Room) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/NimaR/CreateRoom',
        request,
        metadata || {},
        this.methodInfoCreateRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/NimaR/CreateRoom',
    request,
    metadata || {},
    this.methodInfoCreateRoom);
  }

  methodInfoGameTableStream = new grpcWeb.MethodDescriptor(
    '/NimaR/GameTableStream',
    grpcWeb.MethodType.SERVER_STREAMING,
    nimar_pb.JoinRoomRequest,
    nimar_pb.GameTable,
    (request: nimar_pb.JoinRoomRequest) => {
      return request.serializeBinary();
    },
    nimar_pb.GameTable.deserializeBinary
  );

  gameTableStream(
    request: nimar_pb.JoinRoomRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/NimaR/GameTableStream',
      request,
      metadata || {},
      this.methodInfoGameTableStream);
  }

  methodInfoGetPlayerID = new grpcWeb.MethodDescriptor(
    '/NimaR/GetPlayerID',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    nimar_pb.PlayerID,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    nimar_pb.PlayerID.deserializeBinary
  );

  getPlayerID(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<nimar_pb.PlayerID>;

  getPlayerID(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nimar_pb.PlayerID) => void): grpcWeb.ClientReadableStream<nimar_pb.PlayerID>;

  getPlayerID(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nimar_pb.PlayerID) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/NimaR/GetPlayerID',
        request,
        metadata || {},
        this.methodInfoGetPlayerID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/NimaR/GetPlayerID',
    request,
    metadata || {},
    this.methodInfoGetPlayerID);
  }

  methodInfoOperatorsStream = new grpcWeb.MethodDescriptor(
    '/NimaR/OperatorsStream',
    grpcWeb.MethodType.SERVER_STREAMING,
    nimar_pb.JoinRoomRequest,
    nimar_pb.Operators,
    (request: nimar_pb.JoinRoomRequest) => {
      return request.serializeBinary();
    },
    nimar_pb.Operators.deserializeBinary
  );

  operatorsStream(
    request: nimar_pb.JoinRoomRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/NimaR/OperatorsStream',
      request,
      metadata || {},
      this.methodInfoOperatorsStream);
  }

  methodInfoOperate = new grpcWeb.MethodDescriptor(
    '/NimaR/Operate',
    grpcWeb.MethodType.UNARY,
    nimar_pb.Operator,
    google_protobuf_empty_pb.Empty,
    (request: nimar_pb.Operator) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  operate(
    request: nimar_pb.Operator,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  operate(
    request: nimar_pb.Operator,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  operate(
    request: nimar_pb.Operator,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/NimaR/Operate',
        request,
        metadata || {},
        this.methodInfoOperate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/NimaR/Operate',
    request,
    metadata || {},
    this.methodInfoOperate);
  }

}

