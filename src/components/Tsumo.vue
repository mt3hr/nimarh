<template>
    <v-container class="tsumo no-gutters ma-0 pa-0">
        <v-row class="tiles1 ma-0 pa-0">
            <v-col :cols="'auto'" class="pa-0 ma-0">
                <v-row class="tsumotiles pa-0 ma-0" :class="tiles1upclass">
                    <v-col :cols="'auto'" class="ma-0 pa-0">
                        <Tile :class="tile1upclass" v-for="(tile, index) in tiles1up" :key="index" :suit="tile.Suit"
                            :num="tile.Num" :state="tile.State" :table="table" />
                    </v-col>
                </v-row>
                <v-row class="tsumotiles pa-0 ma-0" :class="tiles1downclass">
                    <v-col :cols="'auto'" class="ma-0 pa-0">
                        <Tile :class="tile1downclass" v-for="(tile, index) in tiles1down" :key="index" :suit="tile.Suit"
                            :num="tile.Num" :state="tile.State" :table="table" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row class="tiles2 ma-0 pa-0">
            <v-col :cols="'auto'" class="pa-0 ma-0">
                <v-row class="tsumotiles pa-0 ma-0" :class="tiles2upclass">
                    <v-col :cols="'auto'" class="ma-0 pa-0">
                        <Tile :class="tile2upclass" v-for="(tile, index) in tiles2up" :key="index" :suit="tile.Suit"
                            :num="tile.Num" :state="tile.State" :table="table" />
                    </v-col>
                </v-row>
                <v-row class="tsumotiles pa-0 ma-0" :class="tiles2downclass">
                    <v-col :cols="'auto'" class="ma-0 pa-0">
                        <Tile :class="tile2downclass" v-for="(tile, index) in tiles2down" :key="index" :suit="tile.Suit"
                            :num="tile.Num" :state="tile.State" :table="table" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import Tile, { NullTile } from './Tile.vue';


@Options({
    components: {
        Tile
    },
})
export default class Tsumo extends Vue {
    @Prop() table: any
    @Prop() player_id: string
    playerclass = "player1"

    tiles1up = []
    tiles1down = []
    tiles2up = []
    tiles2down = []

    tiles1upclass = "tiles1upforplayer1"
    tiles1downclass = "tiles1downforplayer1"
    tiles2upclass = "tiles2upforplayer1"
    tiles2downclass = "tiles2downforplayer1"

    tile1upclass = "tile1upforplayer1"
    tile1downclass = "tile1downforplayer1"
    tile2upclass = "tile2upforplayer1"
    tile2downclass = "tile2downforplayer1"



    @Watch("table")
    updateTiles() {
        let playerIndex = this.table.Player1.ID == this.player_id ? 1 : 2
        this.tiles1upclass = playerIndex == 1 ? "tiles1upforplayer1" : "tiles1upforplayer2"
        this.tiles1downclass = playerIndex == 1 ? "tiles1downforplayer1" : "tiles1downforplayer2"
        this.tiles2upclass = playerIndex == 1 ? "tiles2upforplayer1" : "tiles2upforplayer2"
        this.tiles2downclass = playerIndex == 1 ? "tiles2downforplayer1" : "tiles2downforplayer2"
        this.tile1upclass = playerIndex == 1 ? "tile1upforplayer1" : "tile1upforplayer2"
        this.tile1downclass = playerIndex == 1 ? "tile1downforplayer1" : "tile1downforplayer2"
        this.tile2upclass = playerIndex == 1 ? "tile2upforplayer1" : "tile2upforplayer2"
        this.tile2downclass = playerIndex == 1 ? "tile2downforplayer1" : "tile2downforplayer2"

        this.tiles1up.splice(0)
        this.tiles1down.splice(0)
        this.tiles2up.splice(0)
        this.tiles2down.splice(0)
        let nullCnt = 80 - this.table.Tsumo.Tiles.length
        let i = 0
        for (; i < nullCnt; i++) {
            let tile: any = NullTile
            if (i < 40) {
                if (i % 2 == 0) {
                    this.tiles1up.push(tile)
                } else {
                    this.tiles1down.push(tile)
                }
            } else {
                if (i % 2 == 0) {
                    this.tiles2up.unshift(tile)
                } else {
                    this.tiles2down.unshift(tile)
                }
            }
        }
        for (; i < this.table.Tsumo.Tiles.length + nullCnt; i++) {
            let tile: any
            let index = i - nullCnt
            if (!this.table.Tsumo.Tiles[index]) {
                tile = NullTile
            } else {
                tile = this.table.Tsumo.Tiles[index]
            }

            if (i < 40) {
                if (i % 2 == 0) {
                    this.tiles1up.push(tile)
                } else {
                    this.tiles1down.push(tile)
                }
            } else {
                if (i % 2 == 0) {
                    this.tiles2up.unshift(tile)
                } else {
                    this.tiles2down.unshift(tile)
                }
            }
        }
    }
}
</script>

<style scoped>
.rotate180 {
    rotate: 180deg;
}

.tiles1upforplayer1 {
    position: relative;
    top: 0px;
    z-index: 2;
}

.tiles1downforplayer1 {
    position: relative;
    top: -40px;
    z-index: 1;
}

.tiles2upforplayer1 {
    position: relative;
    top: 0px;
    z-index: 2;
}

.tiles2downforplayer1 {
    position: relative;
    top: -40px;
    z-index: 1;
}

.tiles1upforplayer2 {
    position: relative;
    top: 40px;
    z-index: 2;
}

.tiles1downforplayer2 {
    position: relative;
    top: -40px;
    z-index: 1;
}

.tiles2upforplayer2 {
    position: relative;
    top: 40px;
    z-index: 2;
}

.tiles2downforplayer2 {
    position: relative;
    top: -40px;
    z-index: 1;
}

.tile1upforplayer1 {
    rotate: 0deg;
}

.tile1downforplayer1 {
    rotate: 0deg;
}

.tile2upforplayer1 {}

.tile2downforplayer1 {}

.tile1upforplayer2 {
    rotate: 180deg;
}

.tile1downforplayer2 {
    rotate: 180deg;
}

.tile2upforplayer2 {
    rotate: 180deg;
}

.tile2downforplayer2 {
    rotate: 180deg;
}

.tsumo {
    z-index: 20;
    width: 660px;
    height: 150px;
    position: relative;
    top: -40px;
}

.tsumotiles {
    height: 60px;
    max-height: 60px;
    min-height: 60px;
}

.tiles1 {
    width: 660px;
    max-width: 660px;
    min-width: 660px;
    position:relative;
    bottom: -20px;
}

.tiles2 {
    width: 660px;
    max-width: 660px;
    min-width: 660px;
    position:relative;
    top: -20px;
}
</style>