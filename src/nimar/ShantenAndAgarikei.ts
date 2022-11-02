import Agarikei from "./Agarikei";

export default interface ShantenAndAgarikei {
    Shanten: number;
    Agarikei?: Agarikei;
    Machihai: { [key: number]: any};
}