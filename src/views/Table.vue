<template>
    <div>
        <v-container>
            <v-row>
                <Tile v-for="tile in player1_hand" :key="tile.Name" :suit="tile.Suit" :num="tile.Num" />
                <Tile v-if="player1_tsumori_tile.Name" :key="player1_tsumori_tile.Name" :suit="player1_tsumori_tile.Suit"
                    :num="player1_tsumori_tile.Num" />
            </v-row>
            <v-row>
                <Tile v-for="tile in player2_hand" :key="tile.Name" :suit="tile.Suit" :num="tile.Num" />
                <Tile v-if="player2_tsumori_tile.Name" :key="player2_tsumori_tile.Name" :suit="player2_tsumori_tile.Suit"
                    :num="player2_tsumori_tile.Num" />
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
import OperatorType from '@/nimar/OperatorType';
import { Vue, Options } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import Tile from '../components/Tile.vue'

@Options({
    components: {
        Tile
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
    player1_hand: any = []
    player1_tsumori_tile: any = {}
    player2_hand: any = []
    player2_tsumori_tile: any = {}

    @Watch('table')
    updateHhand() {
        this.player1_hand.splice(0)
        if (this.table && this.table.Player1 && this.table.Player1.Hand) {
            this.table.Player1.Hand.forEach(element => {
                this.player1_hand.push(element)
            });
        }
        if (this.table && this.table.Player1 && this.table.Player1.TsumoriTile) {
            this.player1_tsumori_tile = this.table.Player1.TsumoriTile
        }
        this.player2_hand.splice(0)
        if (this.table && this.table.Player2 && this.table.Player2.Hand) {
            this.table.Player2.Hand.forEach(element => {
                this.player2_hand.push(element)
            });
        }
        if (this.table && this.table.Player2 && this.table.Player2.TsumoriTile) {
            this.player2_tsumori_tile = this.table.Player2.TsumoriTile
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
            }).then(() => {
                this.operators_socket = api.generate_operators_socket(this.get_room_id(), this.player_id)
                this.operators_socket.onmessage = (e: MessageEvent) => {
                    console.log(JSON.parse(e.data))
                    //TODO
                }
            })
    }

    to_table_list() {
        this.$router.push('/')
    }
}
</script>

<style scoped>

</style>
