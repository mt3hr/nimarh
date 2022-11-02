import OpenedTiles from "./OpenedTiles";
import Point from "./Point";
import Tile from "./Tile";

export default interface Agari {
    ID: string;
    Name: string;
    Hand: (Tile | undefined)[];
    TsumoriTile?: Tile;
    RonTile?: Tile;
    OpenedTile1?: OpenedTiles;
    OpenedTile2?: OpenedTiles;
    OpenedTile3?: OpenedTiles;
    OpenedTile4?: OpenedTiles;
    Pe?: OpenedTiles;
    Point?: Point;
}