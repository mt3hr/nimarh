import Player from "./Player";
import Kaze from "./Kaze"

export default interface TableStatus {
    Sukaikan: boolean;
    NumberOfKyoku: number;
    NumberOfHonba: number;
    ReachTablePoint: number;
    Oya?: Player;
    Ko?: Player;
    ChichaPlayer?: Player;
    PlayerWithTurn?: Player;
    PlayerWithNotTurn?: Player;
    Kaze?: Kaze;
}