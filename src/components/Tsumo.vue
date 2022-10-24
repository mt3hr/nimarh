<template>
    <div>
        <v-container>
            <v-row :class="tiles1upclass">
                <Tile :class="playerclass" v-for="(tile, index) in tiles1up" :key="index" :suit="tile.Suit"
                    :num="tile.Num" :state="tile.State" />
            </v-row>
            <v-row :class="tiles1downclass">
                <Tile :class="playerclass" v-for="(tile, index) in tiles1down" :key="index" :suit="tile.Suit"
                    :num="tile.Num" :state="tile.State" />
            </v-row>
            <v-row :class="tiles2upclass">
                <Tile :class="playerclass" v-for="(tile, index) in tiles2up" :key="index" :suit="tile.Suit"
                    :num="tile.Num" :state="tile.State" />
            </v-row>
            <v-row :class="tiles2downclass">
                <Tile :class="playerclass" v-for="(tile, index) in tiles2down" :key="index" :suit="tile.Suit"
                    :num="tile.Num" :state="tile.State" />
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">import api from '@/api';
import TileState from '@/nimar/TileState';
import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import Tile from './Tile.vue';


@Options({
    components: {
        Tile
    },
})
export default class Tsumo extends Vue {
    @Prop() table: any
    playerclass = "player1"

    tiles1up = []
    tiles1down = []
    tiles2up = []
    tiles2down = []

    tiles1upclass = "tiles1upforplayer1"
    tiles1downclass = "tiles1downforplayer1"
    tiles2upclass = "tiles2upforplayer1"
    tiles2downclass = "tiles2downforplayer1"

    player_id: string

    @Watch("table")
    updateTiles() {
        api.get_player_id_promise()
            .then((player_id: any) => {
                this.player_id = player_id
                let playerIndex = this.table.Player1.ID == this.player_id ? 1 : 2
                this.playerclass = playerIndex == 1 ? "player1" : "player2"
                this.tiles1upclass = playerIndex == 1 ? "tiles1upforplayer1" : "tiles1upforplayer2"
                this.tiles1downclass = playerIndex == 1 ? "tiles1downforplayer1" : "tiles1downforplayer2"
                this.tiles2upclass = playerIndex == 1 ? "tiles2upforplayer1" : "tiles2upforplayer2"
                this.tiles2downclass = playerIndex == 1 ? "tiles2downforplayer1" : "tiles2downforplayer2"
            })

        this.tiles1up.splice(0)
        this.tiles1down.splice(0)
        this.tiles2up.splice(0)
        this.tiles2down.splice(0)

        for (let i = 0; i < this.table.Tsumo.Tiles.length; i++) {
            let tile = this.table.Tsumo.Tiles[i]
            tile.State = new TileState().DOWN
            if (i < 40) {
                if (i % 2 == 0) {
                    this.tiles1down.push(tile)
                } else {
                    this.tiles1up.push(tile)
                }
            } else {
                if (i % 2 == 0) {
                    this.tiles2down.push(tile)
                } else {
                    this.tiles2up.push(tile)
                }
            }
        }
    }
}
</script>

<style>
.player1 {}

.player2 {
    transform: rotate(180deg);
}

.tiles1upforplayer1 {
    position: relative;
    top: 0px;
    z-index: 2;
}

.tiles1downforplayer1 {
    position: relative;
    top: -35px;
    z-index: 1;
}

.tiles2upforplayer1 {
    position: relative;
    top: 0px;
    z-index: 2;
}

.tiles2downforplayer1 {
    position: relative;
    top: -35px;
    z-index: 1;
}

.tiles1upforplayer2 {
    position: relative;
    top: 35px;
    z-index: 2;
}

.tiles1downforplayer2 {
    position: relative;
    top: -35px;
    z-index: 1;
}

.tiles2upforplayer2 {
    position: relative;
    top: 35px;
    z-index: 2;
}

.tiles2downforplayer2 {
    position: relative;
    top: -35px;
    z-index: 1;
}
</style>