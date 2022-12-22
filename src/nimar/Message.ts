import Agari from "./Agari"
import MatchResult from "./MatchResult";
import MessageType from "./MessageType"
import NagashiMangan from "./NagashiMangan";
import Ryukyoku from "./Ryukyoku"

export default interface Message {
    MessageType?: MessageType;
    Agari?: Agari;
    Ryukyoku?: Ryukyoku;
    MatchResult?: MatchResult
    NagashiMangan?: NagashiMangan
}