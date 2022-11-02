import Player from "./Player";
import TableStatus from "./TableStatus";
import Tsumo from "./Tsumo";

export default interface Table {
    ID: string;
    Name: string;
    Tsumo?: Tsumo;
    Player2?: Player;
    Player1?: Player;
    Status?: TableStatus;
}