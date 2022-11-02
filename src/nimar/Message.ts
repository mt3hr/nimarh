import Agari from "./Agari"
import MessageType from "./MessageType"
export default interface Message {
    MessageType?: MessageType;
    Agari?: Agari;
}