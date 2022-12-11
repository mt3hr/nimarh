<template>
    <div class="tile" :class="rotate180class" v-if="filename">
        <img :src="require(`@/assets/${filename}`)" :height="height" :width="width" />
    </div>
</template>

<script lang="ts">
import Suit from '@/nimar/Suit';
import TileState from '@/nimar/TileState';
import { Vue } from 'vue-class-component';
import { Prop, Watch } from "vue-property-decorator"

export const NullTile = {
    Akadora: false,
    Dora: false,
    ID: -1,
    Name: "null",
    Num: -1,
    State: TileState.NULL,
    Suit: -1,
}
export default class Tile extends Vue {
    @Prop() table: any
    @Prop({default: NullTile.Suit}) suit: number
    @Prop({default: NullTile.Name}) name: string
    @Prop({default: NullTile.Num}) num: number
    @Prop({default: NullTile.State}) state: number
    @Prop({ default: false }) rotate180: boolean
    @Prop({ default: false }) reverse: boolean
    filename: string
    rotate180class = "rotate0"

    height = 59
    width = 33

    @Watch("suit")
    update_filename1() {
        this.update_filename()
    }

    @Watch("num")
    update_filename2() {
        this.update_filename()
    }

    @Watch("state")
    update_filename3() {
        this.update_filename()
    }

    @Watch("rotate180")
    update_filename5() {
        this.update_filename()
    }

    @Watch("reverse")
    update_filename6() {
        this.update_filename()
    }

    created(): void {
        this.update_filename()
    }

    update_filename() {
        if (this.state == TileState.NULL) {
            this.filename = "p_null.gif"
            return
        }
        this.rotate180class = this.rotate180 ? "rotate180" : "rotate0"
        let filename = ""
        filename += "p_"

        switch (this.suit) {
            case Suit.MANZU:
                filename += "ms"
                filename += this.num
                break
            case Suit.PINZU:
                filename += "ps"
                filename += this.num
                break
            case Suit.SOZU:
                filename += "ss"
                filename += this.num
                break
            case Suit.TON:
                filename += "ji_e"
                break
            case Suit.NAN:
                filename += "ji_s"
                break
            case Suit.SHA:
                filename += "ji_w"
                break
            case Suit.PE:
                filename += "ji_n"
                break
            case Suit.HAKU:
                filename += "no"
                break
            case Suit.HATSU:
                filename += "ji_h"
                break
            case Suit.CHUN:
                filename += "ji_c"
                break
        }
        switch (this.state) {
            case TileState.PLAYER:
                filename += "_0"
                break
            case TileState.OPPONENT:
                filename = "p_bk_5.gif"
                this.filename = filename
                return
            case TileState.OPEN:
                if (this.reverse) {
                    filename += "_2"
                } else {
                    filename += "_1"
                }
                break
            case TileState.OPEN_LEFT:
                filename += "_3"
                break
            case TileState.OPEN_RIGHT:
                filename += "_4"
                break
            case TileState.DOWN:
                filename = "p_bk_1.gif"
                this.filename = filename
                return
        }
        filename += ".gif"
        this.filename = filename
    }
}
</script>

<style scoped>
.tile {
    width: 33px;
    min-width: 33px;
    max-width: 33px;
    height: 59px;
    min-height: 59px;
    max-height: 59px;
    display: inline-block;
}

.rotate180 {
    rotate: 180deg;
}

.rotate0 {
    rotate: 0deg;
}
</style>