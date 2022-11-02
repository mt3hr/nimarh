import Suit from "./Suit"

export default interface Tile {
    ID: number;
    Name: string;
    Num: number;
    Dora: boolean;
    Akadora: boolean;
    Suit?: Suit;
}