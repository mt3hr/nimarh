import OpenedTiles from "./OpenedTiles";
import Player from "./Player";
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
    DoraHyoujiHais?: Array<Tile>;
    UraDoraHyoujiHais?: Array<Tile>;
    Player: Player
}
