import Kaze from "./Kaze"

export default interface PlayerStatus {
    Reach: boolean;
    Ippatsu: boolean;
    Chankan: boolean;
    Rinshan: boolean;
    Haitei: boolean;
    Hotei: boolean;
    Tenho: boolean;
    Chiho: boolean;
    Renho: boolean;
    DoubleReach: boolean;
    Nakare: boolean;
    NakareWhenAround: boolean;
    KyushuKyuhai: boolean;
    Kaze?: Kaze;
    ReachTiming: number;
}