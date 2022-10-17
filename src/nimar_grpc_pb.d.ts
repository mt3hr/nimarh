// package: 
// file: nimar.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as nimar_pb from "./nimar_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface INimaRService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listRooms: INimaRService_IListRooms;
    createRoom: INimaRService_ICreateRoom;
    gameTableStream: INimaRService_IGameTableStream;
    getPlayerID: INimaRService_IGetPlayerID;
    messageStream: INimaRService_IMessageStream;
    operatorsStream: INimaRService_IOperatorsStream;
    operate: INimaRService_IOperate;
}

interface INimaRService_IListRooms extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, nimar_pb.Rooms> {
    path: "/NimaR/ListRooms";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<nimar_pb.Rooms>;
    responseDeserialize: grpc.deserialize<nimar_pb.Rooms>;
}
interface INimaRService_ICreateRoom extends grpc.MethodDefinition<nimar_pb.CreateRoomRequest, nimar_pb.Room> {
    path: "/NimaR/CreateRoom";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<nimar_pb.CreateRoomRequest>;
    requestDeserialize: grpc.deserialize<nimar_pb.CreateRoomRequest>;
    responseSerialize: grpc.serialize<nimar_pb.Room>;
    responseDeserialize: grpc.deserialize<nimar_pb.Room>;
}
interface INimaRService_IGameTableStream extends grpc.MethodDefinition<nimar_pb.JoinRoomRequest, nimar_pb.GameTable> {
    path: "/NimaR/GameTableStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<nimar_pb.JoinRoomRequest>;
    requestDeserialize: grpc.deserialize<nimar_pb.JoinRoomRequest>;
    responseSerialize: grpc.serialize<nimar_pb.GameTable>;
    responseDeserialize: grpc.deserialize<nimar_pb.GameTable>;
}
interface INimaRService_IGetPlayerID extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, nimar_pb.PlayerID> {
    path: "/NimaR/GetPlayerID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<nimar_pb.PlayerID>;
    responseDeserialize: grpc.deserialize<nimar_pb.PlayerID>;
}
interface INimaRService_IMessageStream extends grpc.MethodDefinition<nimar_pb.JoinRoomRequest, nimar_pb.Message> {
    path: "/NimaR/MessageStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<nimar_pb.JoinRoomRequest>;
    requestDeserialize: grpc.deserialize<nimar_pb.JoinRoomRequest>;
    responseSerialize: grpc.serialize<nimar_pb.Message>;
    responseDeserialize: grpc.deserialize<nimar_pb.Message>;
}
interface INimaRService_IOperatorsStream extends grpc.MethodDefinition<nimar_pb.JoinRoomRequest, nimar_pb.Operators> {
    path: "/NimaR/OperatorsStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<nimar_pb.JoinRoomRequest>;
    requestDeserialize: grpc.deserialize<nimar_pb.JoinRoomRequest>;
    responseSerialize: grpc.serialize<nimar_pb.Operators>;
    responseDeserialize: grpc.deserialize<nimar_pb.Operators>;
}
interface INimaRService_IOperate extends grpc.MethodDefinition<nimar_pb.Operator, google_protobuf_empty_pb.Empty> {
    path: "/NimaR/Operate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<nimar_pb.Operator>;
    requestDeserialize: grpc.deserialize<nimar_pb.Operator>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const NimaRService: INimaRService;

export interface INimaRServer {
    listRooms: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, nimar_pb.Rooms>;
    createRoom: grpc.handleUnaryCall<nimar_pb.CreateRoomRequest, nimar_pb.Room>;
    gameTableStream: grpc.handleServerStreamingCall<nimar_pb.JoinRoomRequest, nimar_pb.GameTable>;
    getPlayerID: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, nimar_pb.PlayerID>;
    messageStream: grpc.handleServerStreamingCall<nimar_pb.JoinRoomRequest, nimar_pb.Message>;
    operatorsStream: grpc.handleServerStreamingCall<nimar_pb.JoinRoomRequest, nimar_pb.Operators>;
    operate: grpc.handleUnaryCall<nimar_pb.Operator, google_protobuf_empty_pb.Empty>;
}

export interface INimaRClient {
    listRooms(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: nimar_pb.Rooms) => void): grpc.ClientUnaryCall;
    listRooms(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nimar_pb.Rooms) => void): grpc.ClientUnaryCall;
    listRooms(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nimar_pb.Rooms) => void): grpc.ClientUnaryCall;
    createRoom(request: nimar_pb.CreateRoomRequest, callback: (error: grpc.ServiceError | null, response: nimar_pb.Room) => void): grpc.ClientUnaryCall;
    createRoom(request: nimar_pb.CreateRoomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nimar_pb.Room) => void): grpc.ClientUnaryCall;
    createRoom(request: nimar_pb.CreateRoomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nimar_pb.Room) => void): grpc.ClientUnaryCall;
    gameTableStream(request: nimar_pb.JoinRoomRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<nimar_pb.GameTable>;
    gameTableStream(request: nimar_pb.JoinRoomRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<nimar_pb.GameTable>;
    getPlayerID(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: nimar_pb.PlayerID) => void): grpc.ClientUnaryCall;
    getPlayerID(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nimar_pb.PlayerID) => void): grpc.ClientUnaryCall;
    getPlayerID(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nimar_pb.PlayerID) => void): grpc.ClientUnaryCall;
    messageStream(request: nimar_pb.JoinRoomRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<nimar_pb.Message>;
    messageStream(request: nimar_pb.JoinRoomRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<nimar_pb.Message>;
    operatorsStream(request: nimar_pb.JoinRoomRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<nimar_pb.Operators>;
    operatorsStream(request: nimar_pb.JoinRoomRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<nimar_pb.Operators>;
    operate(request: nimar_pb.Operator, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    operate(request: nimar_pb.Operator, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    operate(request: nimar_pb.Operator, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class NimaRClient extends grpc.Client implements INimaRClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listRooms(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: nimar_pb.Rooms) => void): grpc.ClientUnaryCall;
    public listRooms(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nimar_pb.Rooms) => void): grpc.ClientUnaryCall;
    public listRooms(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nimar_pb.Rooms) => void): grpc.ClientUnaryCall;
    public createRoom(request: nimar_pb.CreateRoomRequest, callback: (error: grpc.ServiceError | null, response: nimar_pb.Room) => void): grpc.ClientUnaryCall;
    public createRoom(request: nimar_pb.CreateRoomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nimar_pb.Room) => void): grpc.ClientUnaryCall;
    public createRoom(request: nimar_pb.CreateRoomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nimar_pb.Room) => void): grpc.ClientUnaryCall;
    public gameTableStream(request: nimar_pb.JoinRoomRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<nimar_pb.GameTable>;
    public gameTableStream(request: nimar_pb.JoinRoomRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<nimar_pb.GameTable>;
    public getPlayerID(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: nimar_pb.PlayerID) => void): grpc.ClientUnaryCall;
    public getPlayerID(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nimar_pb.PlayerID) => void): grpc.ClientUnaryCall;
    public getPlayerID(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nimar_pb.PlayerID) => void): grpc.ClientUnaryCall;
    public messageStream(request: nimar_pb.JoinRoomRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<nimar_pb.Message>;
    public messageStream(request: nimar_pb.JoinRoomRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<nimar_pb.Message>;
    public operatorsStream(request: nimar_pb.JoinRoomRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<nimar_pb.Operators>;
    public operatorsStream(request: nimar_pb.JoinRoomRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<nimar_pb.Operators>;
    public operate(request: nimar_pb.Operator, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public operate(request: nimar_pb.Operator, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public operate(request: nimar_pb.Operator, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
