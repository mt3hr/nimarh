import Tile from "./Tile";
import OperatorType from "./OperatorType";

export default interface Operator {
    RoomID: string;
    PlayerID: string;
    TargetTiles: (Tile | undefined)[];
    OperatorType?: OperatorType;
}