// package: 
// file: nimar.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Yaku extends jspb.Message { 
    getName(): string;
    setName(value: string): Yaku;
    getHan(): number;
    setHan(value: number): Yaku;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Yaku.AsObject;
    static toObject(includeInstance: boolean, msg: Yaku): Yaku.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Yaku, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Yaku;
    static deserializeBinaryFromReader(message: Yaku, reader: jspb.BinaryReader): Yaku;
}

export namespace Yaku {
    export type AsObject = {
        name: string,
        han: number,
    }
}

export class Point extends jspb.Message { 
    getTotalhu(): number;
    setTotalhu(value: number): Point;
    getTotalhan(): number;
    setTotalhan(value: number): Point;
    getTotalpoint(): number;
    setTotalpoint(value: number): Point;
    clearMatchyakusList(): void;
    getMatchyakusList(): Array<Yaku>;
    setMatchyakusList(value: Array<Yaku>): Point;
    addMatchyakus(value?: Yaku, index?: number): Yaku;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Point.AsObject;
    static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Point;
    static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
    export type AsObject = {
        totalhu: number,
        totalhan: number,
        totalpoint: number,
        matchyakusList: Array<Yaku.AsObject>,
    }
}

export class Agari extends jspb.Message { 
    getId(): string;
    setId(value: string): Agari;
    getName(): string;
    setName(value: string): Agari;

    hasHand(): boolean;
    clearHand(): void;
    getHand(): Tiles | undefined;
    setHand(value?: Tiles): Agari;

    hasTsumoritile(): boolean;
    clearTsumoritile(): void;
    getTsumoritile(): Tile | undefined;
    setTsumoritile(value?: Tile): Agari;

    hasRontile(): boolean;
    clearRontile(): void;
    getRontile(): Tile | undefined;
    setRontile(value?: Tile): Agari;

    hasOpenedtile1(): boolean;
    clearOpenedtile1(): void;
    getOpenedtile1(): OpenedTiles | undefined;
    setOpenedtile1(value?: OpenedTiles): Agari;

    hasOpenedtile2(): boolean;
    clearOpenedtile2(): void;
    getOpenedtile2(): OpenedTiles | undefined;
    setOpenedtile2(value?: OpenedTiles): Agari;

    hasOpenedtile3(): boolean;
    clearOpenedtile3(): void;
    getOpenedtile3(): OpenedTiles | undefined;
    setOpenedtile3(value?: OpenedTiles): Agari;

    hasOpenedtile4(): boolean;
    clearOpenedtile4(): void;
    getOpenedtile4(): OpenedTiles | undefined;
    setOpenedtile4(value?: OpenedTiles): Agari;

    hasPe(): boolean;
    clearPe(): void;
    getPe(): OpenedTiles | undefined;
    setPe(value?: OpenedTiles): Agari;

    hasPoint(): boolean;
    clearPoint(): void;
    getPoint(): Point | undefined;
    setPoint(value?: Point): Agari;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Agari.AsObject;
    static toObject(includeInstance: boolean, msg: Agari): Agari.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Agari, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Agari;
    static deserializeBinaryFromReader(message: Agari, reader: jspb.BinaryReader): Agari;
}

export namespace Agari {
    export type AsObject = {
        id: string,
        name: string,
        hand?: Tiles.AsObject,
        tsumoritile?: Tile.AsObject,
        rontile?: Tile.AsObject,
        openedtile1?: OpenedTiles.AsObject,
        openedtile2?: OpenedTiles.AsObject,
        openedtile3?: OpenedTiles.AsObject,
        openedtile4?: OpenedTiles.AsObject,
        pe?: OpenedTiles.AsObject,
        point?: Point.AsObject,
    }
}

export class Message extends jspb.Message { 
    getMessagetype(): MessageType;
    setMessagetype(value: MessageType): Message;

    hasAgari(): boolean;
    clearAgari(): void;
    getAgari(): Agari | undefined;
    setAgari(value?: Agari): Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        messagetype: MessageType,
        agari?: Agari.AsObject,
    }
}

export class CreateRoomRequest extends jspb.Message { 
    getRoomname(): string;
    setRoomname(value: string): CreateRoomRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRoomRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRoomRequest): CreateRoomRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    clearPlayernamesList(): void;
    getPlayernamesList(): Array<string>;
    setPlayernamesList(value: Array<string>): Room;
    addPlayernames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Room.AsObject;
    static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    clearRoomsList(): void;
    getRoomsList(): Array<Room>;
    setRoomsList(value: Array<Room>): Rooms;
    addRooms(value?: Room, index?: number): Room;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rooms.AsObject;
    static toObject(includeInstance: boolean, msg: Rooms): Rooms.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

export class TableStatus extends jspb.Message { 
    getKaze(): Kaze;
    setKaze(value: Kaze): TableStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TableStatus.AsObject;
    static toObject(includeInstance: boolean, msg: TableStatus): TableStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TableStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TableStatus;
    static deserializeBinaryFromReader(message: TableStatus, reader: jspb.BinaryReader): TableStatus;
}

export namespace TableStatus {
    export type AsObject = {
        kaze: Kaze,
    }
}

export class GameTable extends jspb.Message { 

    hasTsumo(): boolean;
    clearTsumo(): void;
    getTsumo(): Tsumo | undefined;
    setTsumo(value?: Tsumo): GameTable;

    hasPlayer1(): boolean;
    clearPlayer1(): void;
    getPlayer1(): Player | undefined;
    setPlayer1(value?: Player): GameTable;

    hasPlayer2(): boolean;
    clearPlayer2(): void;
    getPlayer2(): Player | undefined;
    setPlayer2(value?: Player): GameTable;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameTable.AsObject;
    static toObject(includeInstance: boolean, msg: GameTable): GameTable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasTiles(): boolean;
    clearTiles(): void;
    getTiles(): Tiles | undefined;
    setTiles(value?: Tiles): Tsumo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tsumo.AsObject;
    static toObject(includeInstance: boolean, msg: Tsumo): Tsumo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    clearTilesList(): void;
    getTilesList(): Array<Tile>;
    setTilesList(value: Array<Tile>): Tiles;
    addTiles(value?: Tile, index?: number): Tile;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tiles.AsObject;
    static toObject(includeInstance: boolean, msg: Tiles): Tiles.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    getId(): number;
    setId(value: number): Tile;
    getName(): string;
    setName(value: string): Tile;
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tile;
    static deserializeBinaryFromReader(message: Tile, reader: jspb.BinaryReader): Tile;
}

export namespace Tile {
    export type AsObject = {
        id: number,
        name: string,
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

    hasHand(): boolean;
    clearHand(): void;
    getHand(): Tiles | undefined;
    setHand(value?: Tiles): Player;

    hasTsumoritile(): boolean;
    clearTsumoritile(): void;
    getTsumoritile(): Tile | undefined;
    setTsumoritile(value?: Tile): Player;

    hasOpenedtile1(): boolean;
    clearOpenedtile1(): void;
    getOpenedtile1(): OpenedTiles | undefined;
    setOpenedtile1(value?: OpenedTiles): Player;

    hasOpenedtile2(): boolean;
    clearOpenedtile2(): void;
    getOpenedtile2(): OpenedTiles | undefined;
    setOpenedtile2(value?: OpenedTiles): Player;

    hasOpenedtile3(): boolean;
    clearOpenedtile3(): void;
    getOpenedtile3(): OpenedTiles | undefined;
    setOpenedtile3(value?: OpenedTiles): Player;

    hasOpenedtile4(): boolean;
    clearOpenedtile4(): void;
    getOpenedtile4(): OpenedTiles | undefined;
    setOpenedtile4(value?: OpenedTiles): Player;

    hasPe(): boolean;
    clearPe(): void;
    getPe(): OpenedTiles | undefined;
    setPe(value?: OpenedTiles): Player;

    hasKawa(): boolean;
    clearKawa(): void;
    getKawa(): Tiles | undefined;
    setKawa(value?: Tiles): Player;
    getKaze(): Kaze;
    setKaze(value: Kaze): Player;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Player.AsObject;
    static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
        pe?: OpenedTiles.AsObject,
        kawa?: Tiles.AsObject,
        kaze: Kaze,
    }
}

export class OpenedTiles extends jspb.Message { 
    getOpentype(): OpenType;
    setOpentype(value: OpenType): OpenedTiles;

    hasTiles(): boolean;
    clearTiles(): void;
    getTiles(): Tiles | undefined;
    setTiles(value?: Tiles): OpenedTiles;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenedTiles.AsObject;
    static toObject(includeInstance: boolean, msg: OpenedTiles): OpenedTiles.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    clearOperatorsList(): void;
    getOperatorsList(): Array<Operator>;
    setOperatorsList(value: Array<Operator>): Operators;
    addOperators(value?: Operator, index?: number): Operator;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Operators.AsObject;
    static toObject(includeInstance: boolean, msg: Operators): Operators.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasTargettiles(): boolean;
    clearTargettiles(): void;
    getTargettiles(): Tiles | undefined;
    setTargettiles(value?: Tiles): Operator;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Operator.AsObject;
    static toObject(includeInstance: boolean, msg: Operator): Operator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

export enum MessageType {
    MESSAGEAGARI = 0,
    MESSAGEKYUSHUKYUHAI = 1,
    MESSAGESUKAIKAN = 2,
    MESSAGERYUKYOKU = 3,
}

export enum Suit {
    NONE = 0,
    MANZU = 1,
    SOZU = 2,
    PINZU = 3,
    TON = 4,
    NAN = 5,
    SHA = 6,
    PE = 7,
    HAKU = 8,
    HATSU = 9,
    CHUN = 10,
}

export enum Kaze {
    KAZE_TON = 0,
    KAZE_NAN = 2,
    KAZE_SHA = 3,
    KAZE_PE = 4,
}

export enum OpenType {
    OPEN_NULL = 0,
    OPEN_PON = 1,
    OPEN_CHI = 2,
    OPEN_ANKAN = 3,
    OPEN_DAIMINKAN = 4,
    OPEN_KAKAN = 5,
    OPEN_PE = 6,
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
    OPERATOR_KYUSHUKYUHAI = 12,
    OPERATOR_REACH = 13,
    OPERATOR_OK = 14,
}
