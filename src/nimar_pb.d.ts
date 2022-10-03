import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class CreateRoomRequest extends jspb.Message {
  getRoomname(): string;
  setRoomname(value: string): CreateRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomRequest): CreateRoomRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomRequest;
  static deserializeBinaryFromReader(message: CreateRoomRequest, reader: jspb.BinaryReader): CreateRoomRequest;
}

export namespace CreateRoomRequest {
  export type AsObject = {
    roomname: string,
  }
}

export class Room extends jspb.Message {
  getRoomid(): string;
  setRoomid(value: string): Room;

  getRoomname(): string;
  setRoomname(value: string): Room;

  getPlayernamesList(): Array<string>;
  setPlayernamesList(value: Array<string>): Room;
  clearPlayernamesList(): Room;
  addPlayernames(value: string, index?: number): Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room.AsObject;
  static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
  static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room;
  static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
  export type AsObject = {
    roomid: string,
    roomname: string,
    playernamesList: Array<string>,
  }
}

export class Rooms extends jspb.Message {
  getRoomsList(): Array<Room>;
  setRoomsList(value: Array<Room>): Rooms;
  clearRoomsList(): Rooms;
  addRooms(value?: Room, index?: number): Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rooms.AsObject;
  static toObject(includeInstance: boolean, msg: Rooms): Rooms.AsObject;
  static serializeBinaryToWriter(message: Rooms, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rooms;
  static deserializeBinaryFromReader(message: Rooms, reader: jspb.BinaryReader): Rooms;
}

export namespace Rooms {
  export type AsObject = {
    roomsList: Array<Room.AsObject>,
  }
}

export class JoinRoomRequest extends jspb.Message {
  getPlayerid(): string;
  setPlayerid(value: string): JoinRoomRequest;

  getPlayername(): string;
  setPlayername(value: string): JoinRoomRequest;

  getRoomid(): string;
  setRoomid(value: string): JoinRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinRoomRequest): JoinRoomRequest.AsObject;
  static serializeBinaryToWriter(message: JoinRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinRoomRequest;
  static deserializeBinaryFromReader(message: JoinRoomRequest, reader: jspb.BinaryReader): JoinRoomRequest;
}

export namespace JoinRoomRequest {
  export type AsObject = {
    playerid: string,
    playername: string,
    roomid: string,
  }
}

export class GameTable extends jspb.Message {
  getTsumo(): Tsumo | undefined;
  setTsumo(value?: Tsumo): GameTable;
  hasTsumo(): boolean;
  clearTsumo(): GameTable;

  getPlayer1(): Player | undefined;
  setPlayer1(value?: Player): GameTable;
  hasPlayer1(): boolean;
  clearPlayer1(): GameTable;

  getPlayer2(): Player | undefined;
  setPlayer2(value?: Player): GameTable;
  hasPlayer2(): boolean;
  clearPlayer2(): GameTable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameTable.AsObject;
  static toObject(includeInstance: boolean, msg: GameTable): GameTable.AsObject;
  static serializeBinaryToWriter(message: GameTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameTable;
  static deserializeBinaryFromReader(message: GameTable, reader: jspb.BinaryReader): GameTable;
}

export namespace GameTable {
  export type AsObject = {
    tsumo?: Tsumo.AsObject,
    player1?: Player.AsObject,
    player2?: Player.AsObject,
  }
}

export class Tsumo extends jspb.Message {
  getTiles(): Tiles | undefined;
  setTiles(value?: Tiles): Tsumo;
  hasTiles(): boolean;
  clearTiles(): Tsumo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tsumo.AsObject;
  static toObject(includeInstance: boolean, msg: Tsumo): Tsumo.AsObject;
  static serializeBinaryToWriter(message: Tsumo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tsumo;
  static deserializeBinaryFromReader(message: Tsumo, reader: jspb.BinaryReader): Tsumo;
}

export namespace Tsumo {
  export type AsObject = {
    tiles?: Tiles.AsObject,
  }
}

export class Tiles extends jspb.Message {
  getTilesList(): Array<Tile>;
  setTilesList(value: Array<Tile>): Tiles;
  clearTilesList(): Tiles;
  addTiles(value?: Tile, index?: number): Tile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tiles.AsObject;
  static toObject(includeInstance: boolean, msg: Tiles): Tiles.AsObject;
  static serializeBinaryToWriter(message: Tiles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tiles;
  static deserializeBinaryFromReader(message: Tiles, reader: jspb.BinaryReader): Tiles;
}

export namespace Tiles {
  export type AsObject = {
    tilesList: Array<Tile.AsObject>,
  }
}

export class Tile extends jspb.Message {
  getId(): string;
  setId(value: string): Tile;

  getNum(): number;
  setNum(value: number): Tile;

  getSuit(): Suit;
  setSuit(value: Suit): Tile;

  getDora(): boolean;
  setDora(value: boolean): Tile;

  getAkadora(): boolean;
  setAkadora(value: boolean): Tile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tile.AsObject;
  static toObject(includeInstance: boolean, msg: Tile): Tile.AsObject;
  static serializeBinaryToWriter(message: Tile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tile;
  static deserializeBinaryFromReader(message: Tile, reader: jspb.BinaryReader): Tile;
}

export namespace Tile {
  export type AsObject = {
    id: string,
    num: number,
    suit: Suit,
    dora: boolean,
    akadora: boolean,
  }
}

export class Player extends jspb.Message {
  getId(): string;
  setId(value: string): Player;

  getName(): string;
  setName(value: string): Player;

  getHand(): Tiles | undefined;
  setHand(value?: Tiles): Player;
  hasHand(): boolean;
  clearHand(): Player;

  getTsumoritile(): Tile | undefined;
  setTsumoritile(value?: Tile): Player;
  hasTsumoritile(): boolean;
  clearTsumoritile(): Player;

  getOpenedtile1(): OpenedTiles | undefined;
  setOpenedtile1(value?: OpenedTiles): Player;
  hasOpenedtile1(): boolean;
  clearOpenedtile1(): Player;

  getOpenedtile2(): OpenedTiles | undefined;
  setOpenedtile2(value?: OpenedTiles): Player;
  hasOpenedtile2(): boolean;
  clearOpenedtile2(): Player;

  getOpenedtile3(): OpenedTiles | undefined;
  setOpenedtile3(value?: OpenedTiles): Player;
  hasOpenedtile3(): boolean;
  clearOpenedtile3(): Player;

  getOpenedtile4(): OpenedTiles | undefined;
  setOpenedtile4(value?: OpenedTiles): Player;
  hasOpenedtile4(): boolean;
  clearOpenedtile4(): Player;

  getKawa(): Tiles | undefined;
  setKawa(value?: Tiles): Player;
  hasKawa(): boolean;
  clearKawa(): Player;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Player.AsObject;
  static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
  static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Player;
  static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
  export type AsObject = {
    id: string,
    name: string,
    hand?: Tiles.AsObject,
    tsumoritile?: Tile.AsObject,
    openedtile1?: OpenedTiles.AsObject,
    openedtile2?: OpenedTiles.AsObject,
    openedtile3?: OpenedTiles.AsObject,
    openedtile4?: OpenedTiles.AsObject,
    kawa?: Tiles.AsObject,
  }
}

export class OpenedTiles extends jspb.Message {
  getOpentype(): OpenType;
  setOpentype(value: OpenType): OpenedTiles;

  getTiles(): Tiles | undefined;
  setTiles(value?: Tiles): OpenedTiles;
  hasTiles(): boolean;
  clearTiles(): OpenedTiles;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenedTiles.AsObject;
  static toObject(includeInstance: boolean, msg: OpenedTiles): OpenedTiles.AsObject;
  static serializeBinaryToWriter(message: OpenedTiles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenedTiles;
  static deserializeBinaryFromReader(message: OpenedTiles, reader: jspb.BinaryReader): OpenedTiles;
}

export namespace OpenedTiles {
  export type AsObject = {
    opentype: OpenType,
    tiles?: Tiles.AsObject,
  }
}

export class PlayerID extends jspb.Message {
  getPlayerid(): string;
  setPlayerid(value: string): PlayerID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerID.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerID): PlayerID.AsObject;
  static serializeBinaryToWriter(message: PlayerID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerID;
  static deserializeBinaryFromReader(message: PlayerID, reader: jspb.BinaryReader): PlayerID;
}

export namespace PlayerID {
  export type AsObject = {
    playerid: string,
  }
}

export class Operators extends jspb.Message {
  getOperatorsList(): Array<Operator>;
  setOperatorsList(value: Array<Operator>): Operators;
  clearOperatorsList(): Operators;
  addOperators(value?: Operator, index?: number): Operator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operators.AsObject;
  static toObject(includeInstance: boolean, msg: Operators): Operators.AsObject;
  static serializeBinaryToWriter(message: Operators, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operators;
  static deserializeBinaryFromReader(message: Operators, reader: jspb.BinaryReader): Operators;
}

export namespace Operators {
  export type AsObject = {
    operatorsList: Array<Operator.AsObject>,
  }
}

export class Operator extends jspb.Message {
  getRoomid(): string;
  setRoomid(value: string): Operator;

  getPlayerid(): string;
  setPlayerid(value: string): Operator;

  getOperatortype(): OperatorType;
  setOperatortype(value: OperatorType): Operator;

  getTargettiles(): Tiles | undefined;
  setTargettiles(value?: Tiles): Operator;
  hasTargettiles(): boolean;
  clearTargettiles(): Operator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operator.AsObject;
  static toObject(includeInstance: boolean, msg: Operator): Operator.AsObject;
  static serializeBinaryToWriter(message: Operator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operator;
  static deserializeBinaryFromReader(message: Operator, reader: jspb.BinaryReader): Operator;
}

export namespace Operator {
  export type AsObject = {
    roomid: string,
    playerid: string,
    operatortype: OperatorType,
    targettiles?: Tiles.AsObject,
  }
}

export enum Suit { 
  NONE = 0,
  MANZU = 1,
  SOZU = 2,
  PINZU = 3,
}
export enum OpenType { 
  OPEN_PON = 0,
  OPEN_CHI = 1,
  OPEN_ANKAN = 2,
  OPEN_DAIMINKAN = 3,
  OPEN_KAKAN = 4,
  OPEN_PE = 5,
}
export enum OperatorType { 
  OPERATOR_START_GAME = 0,
  OPERATOR_SKIP = 1,
  OPERATOR_DRAW = 2,
  OPERATOR_DAHAI = 3,
  OPERATOR_RON = 4,
  OPERATOR_PON = 5,
  OPERATOR_CHI = 6,
  OPERATOR_DAIMINKAN = 7,
  OPERATOR_TSUMO = 8,
  OPERATOR_ANKAN = 9,
  OPERATOR_KAKAN = 10,
  OPERATOR_PE = 11,
}
