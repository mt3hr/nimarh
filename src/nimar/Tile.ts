import Suit from "./Suit"

export default interface Tile {
    ID: number;
    Name: string;
    Num: number;
    Dora: number;
    UraDora: number;
    Akadora: boolean;
    Suit?: Suit;
    DoraHyoujiHai: boolean;
}