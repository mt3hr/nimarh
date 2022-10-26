<template>
    <div class="tile" v-if="filename">
        <img :src="require(`@/assets/${filename}`)" />
    </div>
</template>

<script lang="ts">
import Suit from '@/nimar/Suit';
import TileState from '@/nimar/TileState';
import { Vue } from 'vue-class-component';
import { Prop, Watch } from "vue-property-decorator"

export default class Tile extends Vue {
    @Prop() suit: number
    @Prop() num: number
    @Prop() state: number
    filename: string

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

    created(): void {
        this.update_filename()
    }

    update_filename() {
        let filename = ""
        filename += "p_"
        switch (this.suit) {
            case new Suit().MANZU:
                filename += "ms"
                filename += this.num
                break
            case new Suit().PINZU:
                filename += "ps"
                filename += this.num
                break
            case new Suit().SOZU:
                filename += "ss"
                filename += this.num
                break
            case new Suit().TON:
                filename += "ji_e"
                break
            case new Suit().NAN:
                filename += "ji_s"
                break
            case new Suit().SHA:
                filename += "ji_w"
                break
            case new Suit().PE:
                filename += "ji_n"
                break
            case new Suit().HAKU:
                filename += "no"
                break
            case new Suit().HATSU:
                filename += "ji_h"
                break
            case new Suit().CHUN:
                filename += "ji_c"
                break
        }
        switch (this.state) {
            case new TileState().PLAYER:
                filename += "_0"
                break
            case new TileState().OPPONENT:
                filename = "p_bk_5.gif"
                this.filename = filename
                return
            case new TileState().OPEN_LEFT:
                filename += "_3"
                break
            case new TileState().OPEN_RIGHT:
                filename += "_4"
                break
            case new TileState().DOWN:
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
    height: 60px;
}
</style>