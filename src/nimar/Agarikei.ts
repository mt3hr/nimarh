import MentsuType from "./MentsuType"
import Machi from "./Machi"

export default interface Agarikei {
    Janto?: Array<number>;
    Mentsu1?: Array<number>;
    Mentsu2?: Array<number>;
    Mentsu3?: Array<number>;
    Mentsu4?: Array<number>;
    Mentsu1Type: MentsuType;
    Mentsu2Type: MentsuType;
    Mentsu3Type: MentsuType;
    Mentsu4Type: MentsuType;
    MachiHai: { [key: number]: any };
    Machi?: Machi;
    JantoType: MentsuType;
}