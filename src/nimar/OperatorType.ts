enum OperatorType {
    OPERATOR_START_GAME = 1,
    OPERATOR_SKIP = 2,
    OPERATOR_DRAW = 3,
    OPERATOR_DAHAI = 4,
    OPERATOR_RON = 5,
    OPERATOR_PON = 6,
    OPERATOR_CHI = 7,
    OPERATOR_DAIMINKAN = 8,
    OPERATOR_TSUMO = 9,
    OPERATOR_ANKAN = 10,
    OPERATOR_KAKAN = 11,
    OPERATOR_PE = 12,
    OPERATOR_KYUSHUKYUHAI = 13,
    OPERATOR_REACH = 14,
    OPERATOR_OK = 15,
}

export default OperatorType

export class OperatorTypeToString {
    to_string(num: OperatorType): string {
        switch (num) {
            case OperatorType.OPERATOR_START_GAME:
                return "ゲーム開始"
            case OperatorType.OPERATOR_SKIP:
                return "スキップ"
            case OperatorType.OPERATOR_DRAW:
                return "引く"
            case OperatorType.OPERATOR_DAHAI:
                return "打牌"
            case OperatorType.OPERATOR_RON:
                return "ロン"
            case OperatorType.OPERATOR_PON:
                return "ポン"
            case OperatorType.OPERATOR_CHI:
                return "チー"
            case OperatorType.OPERATOR_DAIMINKAN:
                return "カン"
            case OperatorType.OPERATOR_TSUMO:
                return "ツモ"
            case OperatorType.OPERATOR_ANKAN:
                return "カン"
            case OperatorType.OPERATOR_KAKAN:
                return "カン"
            case OperatorType.OPERATOR_PE:
                return "北抜き"
            case OperatorType.OPERATOR_KYUSHUKYUHAI:
                return "九種九牌"
            case OperatorType.OPERATOR_REACH:
                return "リーチ"
            case OperatorType.OPERATOR_OK:
                return "OK"
        }
        return "????"
    }
}