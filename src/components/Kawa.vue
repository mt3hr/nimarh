<template>
    <v-container class="kawa pa-0 ma-0" :class="playerclass">
        <v-row class="kawatiles kawa1 ma-0 pa-0">
            <Tile v-for="(tile, index) in tiles1" :key="index" :suit="tile.Suit" :num="tile.Num" :state="tile.State"
                :class="kawa1class" :rotate180="rotate180tile" :reverse="reversetile" :table="table" />
        </v-row>
        <v-row class="kawatiles kawa2 ma-0 pa-0">
            <Tile v-for="(tile, index) in tiles2" :key="index" :suit="tile.Suit" :num="tile.Num" :state="tile.State"
                :class="kawa2class" :rotate180="rotate180tile" :reverse="reversetile" :table="table" />
        </v-row>
        <v-row class="kawatiles kawa3 ma-0 pa-0">
            <Tile v-for="(tile, index) in tiles3" :key="index" :suit="tile.Suit" :num="tile.Num" :state="tile.State"
                :class="kawa3class" :rotate180="rotate180tile" :reverse="reversetile" :table="table" />
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Player from '@/nimar/Player';
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
    @Prop() kawa_player_id: string
    @Prop() player_id: string
    @Prop() reversetile: boolean
    @Prop() rotate180tile: boolean
    playerclass = "player1"
    kawa1class = "up"
    kawa2class = "center"
    kawa3class = "down"

    tiles1 = []
    tiles2 = []
    tiles3 = []

    @Watch("table")
    callUpdateTiles1() {
        this.updateTiles()
    }

    @Watch("player_id")
    callUpdateTiles2() {
        this.updateTiles()
    }

    @Watch("kawa_player_id")
    callUpdateTiles3() {
        this.updateTiles()
    }

    updateTiles() {
        this.playerclass = this.table.Player1.ID == this.kawa_player_id ? "player1" : "player2"

        this.tiles1.splice(0)
        this.tiles2.splice(0)
        this.tiles3.splice(0)

        let tiles = this.kawa_player_id == this.table.Player1.ID ? this.table.Player1.Kawa : this.table.Player2.Kawa
        if (this.kawa_player_id == this.table.Player1.ID) {
            if (this.player_id == this.table.Player1.ID) {
                this.kawa1class = "up"
                this.kawa2class = "center"
                this.kawa3class = "down"
            } else {
                this.kawa1class = "down"
                this.kawa2class = "center"
                this.kawa3class = "up"
            }
        } else {
            if (this.player_id == this.table.Player1.ID) {
                this.kawa1class = "down"
                this.kawa2class = "center"
                this.kawa3class = "up"
            } else {
                this.kawa1class = "up"
                this.kawa2class = "center"
                this.kawa3class = "down"
            }
        }
        if (tiles) {
            let player:Player = this.player_id == this.table.Player1.ID ? this.table.Player1 : this.table.Player2
            for (let i = 0; i < tiles.length; i++) {
                let tile = tiles[i]
                tile.State = TileState.OPEN
                if (i == player.Status.ReachTiming) {
                    tile.State = TileState.OPEN_LEFT
                }

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
    rotate: 180deg;
}

.kawatiles {
    height: 60px;
    width: 198px;
}

.kawa {
    height: 160px;
    width: 198px;
}

.up {
    z-index: 11;
}

.center {
    z-index: 12;
}

.down {
    z-index: 13;
}

.kawa1 {
    position: relative;
    top: 0px;
}

.kawa2 {
    position: relative;
    top: -10px;
}

.kawa3 {
    position: relative;
    top: -20px;
}
</style>