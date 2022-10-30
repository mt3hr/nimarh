<template>
    <v-container class="kawa" :class="playerclass">
        <v-row class="kawatiles">
            <Tile v-for="(tile, index) in tiles1" :key="index" :suit="tile.Suit" :num="tile.Num" :state="tile.State"
                :rotate180="rotate180tile" :reverse="reversetile" :table="table" />
        </v-row>
        <v-row class="kawatiles">
            <Tile v-for="(tile, index) in tiles2" :key="index" :suit="tile.Suit" :num="tile.Num" :state="tile.State"
                :rotate180="rotate180tile" :reverse="reversetile" :table="table" />
        </v-row>
        <v-row class="kawatiles">
            <Tile v-for="(tile, index) in tiles3" :key="index" :suit="tile.Suit" :num="tile.Num" :state="tile.State"
                :rotate180="rotate180tile" :reverse="reversetile" :table="table" />
        </v-row>
    </v-container>
</template>

<script lang="ts">
import TileState from '@/nimar/TileState';
import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import Tile from './Tile.vue';

@Options({
    components: {
        Tile,
    },
})
export default class Kawa extends Vue {
    @Prop() table: any
    @Prop() player_id: string
    @Prop() reversetile: boolean
    @Prop() rotate180tile: boolean
    playerclass = "player1"

    tiles1 = []
    tiles2 = []
    tiles3 = []

    @Watch("table")
    updateTiles() {
        this.playerclass = this.table.Player1.ID === this.player_id ? "player1" : "player2"

        this.tiles1.splice(0)
        this.tiles2.splice(0)
        this.tiles3.splice(0)

        let tiles = this.player_id === this.table.Player1.ID ? this.table.Player1.Kawa : this.table.Player2.Kawa
        if (tiles) {
            for (let i = 0; i < tiles.length; i++) {
                let tile = tiles[i]
                tile.State = new TileState().OPEN
                if (i < 6) {
                    this.tiles1.push(tile)
                } else if (i < 12) {
                    this.tiles2.push(tile)
                } else {
                    this.tiles3.push(tile)
                }
            }
        }
    }
}
</script>

<style scoped>
.player1 {}

.player2 {
    transform: rotate(180deg);
}

.kawatiles {
    height: 60px;
}

.kawa {
    height: 180px;
    width: 231px;
}
</style>