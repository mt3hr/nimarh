<template>
    <div>
        <v-container :class="playerclass">
            <v-row class="hand" :class="playerclass">
                <v-spacer />
                <v-row class="handtiles">
                    <Tile v-for="(tile, index) in player2_hand" :key="index" :suit="tile.Suit" :num="tile.Num"
                        :state="tile.State" @click="tile_on_click(tile)" />
                    <Tile v-if="player2_tsumori_tile.Name" :key="player2_tsumori_tile.Name"
                        :suit="player2_tsumori_tile.Suit" :num="player2_tsumori_tile.Num"
                        :state="player2_tsumori_tile.State" @click="tile_on_click(player2_tsumori_tile)" />
                </v-row>
                <v-spacer />

            </v-row>
            <v-row>
                <v-spacer />
                <Tsumo :table="table" />
                <v-spacer />
            </v-row>
            <v-row class="hand" :class="playerclass">
                <v-spacer />
                <v-row class="handtiles">
                    <Tile v-for="(tile, index) in player1_hand" :key="index" :suit="tile.Suit" :num="tile.Num"
                        :state="tile.State" @click="tile_on_click(tile)" />
                    <Tile v-if="player1_tsumori_tile.Name" :key="player1_tsumori_tile.Name"
                        :suit="player1_tsumori_tile.Suit" :num="player1_tsumori_tile.Num"
                        :state="player1_tsumori_tile.State" @click="tile_on_click(player1_tsumori_tile)" />
                </v-row>
                <v-spacer />
            </v-row>
        </v-container>
        <v-dialog v-model="is_show_player_name_dialog" persistent>
            <v-card class="pa-3">
                <v-text-field @keypress.enter="join_room" v-model="player_name" placeholder="名前" autofocus />
                <v-card-actions>
                    <v-btn @click="to_table_list">戻る</v-btn>
                    <v-spacer />
                    <v-btn @click="join_room">入室</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="is_show_wait_player_dialog" persistent>
            <v-card class="pa-3">
                プレイヤーの参加を待っています
                <v-card-actions>
                    <v-btn @click="to_table_list">戻る</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import api from '@/api';
import Tsumo from '@/components/Tsumo.vue';
import OperatorType from '@/nimar/OperatorType';
import TileState from '@/nimar/TileState';
import { Vue, Options } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import Tile from '../components/Tile.vue'

@Options({
    components: {
        Tile,
        Tsumo,
    },
})

export default class Table extends Vue {
    game_table_socket: WebSocket
    operators_socket: WebSocket
    table_socket = api.generate_list_table_socket()
    is_show_player_name_dialog = false
    is_show_wait_player_dialog = false
    player_name = ""
    player_id = ""
    started_game = false

    table: any = {}
    operators = []
    player1_hand: any = []
    player1_tsumori_tile: any = {}
    player2_hand: any = []
    player2_tsumori_tile: any = {}
    tsumo: any = []

    playerclass = "player1"

    tile_on_click(tile: any): void {
        for (let i = 0; i < this.operators.length; i++) {
            let operator = this.operators[i]
            if (operator.OperatorType === new OperatorType().OPERATOR_DAHAI) {
                let target_tile = operator.TargetTiles[0]
                if (tile.Name === target_tile.Name) {
                    console.log(tile.Name)
                    this.operators.splice(0)
                    api.execute_operator_promise(operator)
                    break
                }
            }
        }
    }

    @Watch('table')
    updateHhand() {
        let playerIndex = this.table.Player1.ID === this.player_id ? 1 : 2
        this.playerclass = playerIndex === 1 ? "player1" : "player2"
        this.player1_hand = []
        this.player2_hand = []
        this.tsumo = []
        if (this.table && this.table.Player1 && this.table.Player1.Hand) {
            this.table.Player1.Hand.forEach(element => {
                if (playerIndex == 1) {
                    element.State = new TileState().PLAYER
                } else {
                    element.State = new TileState().OPPONENT
                }
                this.player1_hand.push(element)
            });
        }
        if (this.table && this.table.Player1 && this.table.Player1.TsumoriTile) {
            let tile = this.table.Player1.TsumoriTile
            if (playerIndex == 1) {
                tile.State = new TileState().PLAYER
            } else {
                tile.State = new TileState().OPPONENT
            }
            this.player1_tsumori_tile = tile
        } else {
            this.player1_tsumori_tile = {}
        }
        if (this.table && this.table.Player1 && this.table.Player1.Hand) {
            this.table.Player2.Hand.forEach((tile) => {
                if (playerIndex == 2) {
                    tile.State = new TileState().PLAYER
                } else {
                    tile.State = new TileState().OPPONENT
                }
                this.player2_hand.push(tile)
            });
        }
        if (this.table && this.table.Player2 && this.table.Player2.TsumoriTile) {
            let tile = this.table.Player2.TsumoriTile
            if (playerIndex == 2) {
                tile.State = new TileState().PLAYER
            } else {
                tile.State = new TileState().OPPONENT
            }
            this.player2_tsumori_tile = tile
        } else {
            this.player2_tsumori_tile = {}
        }
        if (this.table && this.table.Tsumo && this.table.Tsumo.Tiles) {
            this.table.Tsumo.Tiles.forEach((tile) => {
                tile.State = new TileState().DOWN
                this.tsumo.push(tile)
            });
        }
    }

    created() {
        this.is_show_player_name_dialog = true
    }

    get_room_id(): string {
        return String(this.$route.query.tableid)
    }

    join_room() {
        api.get_player_id_promise()
            .then((player_id: any) => {
                this.player_id = player_id
                this.game_table_socket = api.generate_join_room_socket(this.get_room_id(), this.player_id, this.player_name)
                this.is_show_player_name_dialog = false
                this.is_show_wait_player_dialog = true
                this.game_table_socket.onmessage = (e: MessageEvent) => {
                    this.table = JSON.parse(e.data)
                    console.log(this.table)
                }

                this.operators_socket = api.generate_operators_socket(this.get_room_id(), this.player_id)
                this.operators_socket.onmessage = (e: MessageEvent) => {
                    this.operators = JSON.parse(e.data)
                }
            }).then(() => {
                this.table_socket = api.generate_list_table_socket()
                this.table_socket.onmessage = (e: MessageEvent) => {
                    let data = JSON.parse(e.data)
                    let room = data[this.get_room_id()]
                    if (room && room.Player2 && !this.started_game) {
                        this.is_show_wait_player_dialog = false
                        this.started_game = true
                        api.execute_operator_promise({
                            RoomID: this.get_room_id(),
                            PlayerID: this.player_id,
                            TargetTiles: [],
                            OperatorType: new OperatorType().OPERATOR_START_GAME
                        })
                    }
                }
            })
    }

    to_table_list() {
        this.$router.replace('/')
    }
}
</script>

<style scoped>
.player1 {}

.player2 {
    transform: rotate(180deg);
}

.hand {
    height: 60px;
    margin: 20px;
}

.handtiles {
    height: 60px;
    width: 462px;
}
</style>
