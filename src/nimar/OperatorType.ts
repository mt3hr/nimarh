export default class OperatorType {
    OPERATOR_START_GAME = 1
    OPERATOR_SKIP = 2
    OPERATOR_DRAW = 3
    OPERATOR_DAHAI = 4
    OPERATOR_RON = 5
    OPERATOR_PON = 6
    OPERATOR_CHI = 7
    OPERATOR_DAIMINKAN = 8
    OPERATOR_TSUMO = 9
    OPERATOR_ANKAN = 10
    OPERATOR_KAKAN = 11
    OPERATOR_PE = 12
    OPERATOR_KYUSHUKYUHAI = 13
    OPERATOR_REACH = 14
    OPERATOR_OK = 15

    to_string(num: number): string {
        switch (num) {
            case this.OPERATOR_START_GAME:
                return "ゲーム開始"
            case this.OPERATOR_SKIP:
                return "スキップ"
            case this.OPERATOR_DRAW:
                return "引く"
            case this.OPERATOR_DAHAI:
                return "打牌"
            case this.OPERATOR_RON:
                return "ロン"
            case this.OPERATOR_PON:
                return "ポン"
            case this.OPERATOR_CHI:
                return "チー"
            case this.OPERATOR_DAIMINKAN:
                return "カン"
            case this.OPERATOR_TSUMO:
                return "ツモ"
            case this.OPERATOR_ANKAN:
                return "カン"
            case this.OPERATOR_KAKAN:
                return "カン"
            case this.OPERATOR_PE:
                return "北抜き"
            case this.OPERATOR_KYUSHUKYUHAI:
                return "九種九牌"
            case this.OPERATOR_REACH:
                return "リーチ"
            case this.OPERATOR_OK:
                return "OK"
        }
        return "????"
    }
}

