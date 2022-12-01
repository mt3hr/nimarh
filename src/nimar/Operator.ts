import Tile from "./Tile";
import OperatorType from "./OperatorType";

export default class Operator {
    RoomID: string;
    PlayerID: string;
    TargetTiles: (Tile | undefined)[];
    OperatorType?: OperatorType;
}