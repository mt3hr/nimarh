import OpenedTiles from "./OpenedTiles";
import PlayerStatus from "./PlayerStatus";
import Tile from "./Tile";

export default interface Player {
    Name: string;
    ID: string;
    Point: number;
    Hand: (Tile | undefined)[];
    TsumoriTile?: Tile;
    OpenedTile1?: OpenedTiles;
    OpenedTile2?: OpenedTiles;
    OpenedTile3?: OpenedTiles;
    OpenedTile4?: OpenedTiles;
    Kawa: (Tile | undefined)[];
    Status?: PlayerStatus;
    RonTile?: Tile;
    OpenedPe?: OpenedTiles;
}