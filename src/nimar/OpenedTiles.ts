import Tile from "./Tile";
import OpenType from "./OpenType"

export default interface OpenedTiles {
    Tiles: (Tile | undefined)[];
    OpenType?: OpenType;
}