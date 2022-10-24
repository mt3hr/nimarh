<template>
    <div>
        <img :src="require(`@/assets/${filename}`)" />
    </div>
</template>

<script lang="ts">
import Suit from '@/nimar/Suit';
import { Vue } from 'vue-class-component';
import { Prop } from "vue-property-decorator"

export default class Tile extends Vue {
    @Prop() suit: number
    @Prop() num: number
    filename: string

    created(): void {
        let filename = ""
        filename += "p_"
        switch (this.suit) {
            case new Suit().MANZU:
                filename += "ms"
                filename += this.num
                filename += "_1"
                break
            case new Suit().PINZU:
                filename += "ps"
                filename += this.num
                filename += "_1"
                break
            case new Suit().SOZU:
                filename += "ss"
                filename += this.num
                filename += "_1"
                break
            case new Suit().TON:
                filename += "ji_e_1"
                break
            case new Suit().NAN:
                filename += "ji_s_1"
                break
            case new Suit().SHA:
                filename += "ji_w_1"
                break
            case new Suit().PE:
                filename += "ji_n_1"
                break
            case new Suit().HAKU:
                filename += "no_1"
                break
            case new Suit().HATSU:
                filename += "ji_h_1"
                break
            case new Suit().CHUN:
                filename += "ji_c_1"
                break
        }
        filename += ".gif"
        this.filename = filename
    }
}
</script>

<style>

</style>