<template>
    <div class="multiply"></div>
    <div class="table_wrap">
        <v-container class="table" :class="playerrotateclass">
            <v-spacer />
            <v-row class="hand pa-0 ma-0" :class="playerrotateclass">
                <v-spacer />
                <v-col :cols="'auto'" class="handtiles ma-0 pa-0">
                    <Tile v-if="is_player1 && !player2_tsumori_tile.Name" :suit="nulltile.Suit" :num="nulltile.Num"
                        :state="nulltile.State" :table="table" />
                    <Tile v-for="(tile) in player2_hand" :key="tile.Name" :suit="tile.Suit" :num="tile.Num"
                        :state="tile.State" @click="tile_on_click(tile)" :table="table" />
                    <Tile v-if="player2_tsumori_tile.Name" :key="player2_tsumori_tile.Name"
                        :suit="player2_tsumori_tile.Suit" :num="player2_tsumori_tile.Num"
                        :state="player2_tsumori_tile.State" @click="tile_on_click(player2_tsumori_tile)"
                        :table="table" />
                    <Tile v-if="!is_player1 && !player2_tsumori_tile.Name" :suit="nulltile.Suit" :num="nulltile.Num"
                        :state="nulltile.State" :table="table" />
                </v-col>
                <v-spacer />
            </v-row>
            <v-row :align-content="'center'" class="opened_tiles_wrap down pa-0 ma-0"
                :class="[playerclass, flexreverse]">
                <v-spacer />
                <v-col :cols="'auto'" class="ma-0 pa-0 opened_tiles down" :class="playerclass">
                    <Tile class="tile" v-for="(tile) in player2_opened_tiles1" :key="tile.Name" :suit="tile.Suit"
                        :num="tile.Num" :state="tile.State" @click="tile_on_click(tile)" :reverse="is_player1"
                        :rotate180="!is_player1" :table="table" />
                    <Tile class="tile" v-for="(tile) in player2_opened_tiles2" :key="tile.Name" :suit="tile.Suit"
                        :num="tile.Num" :state="tile.State" @click="tile_on_click(tile)" :reverse="is_player1"
                        :rotate180="!is_player1" :table="table" />
                    <Tile class="tile" v-for="(tile) in player2_opened_tiles3" :key="tile.Name" :suit="tile.Suit"
                        :num="tile.Num" :state="tile.State" @click="tile_on_click(tile)" :reverse="is_player1"
                        :rotate180="!is_player1" :table="table" />
                    <Tile class="tile" v-for="(tile) in player2_opened_tiles4" :key="tile.Name" :suit="tile.Suit"
                        :num="tile.Num" :state="tile.State" @click="tile_on_click(tile)" :reverse="is_player1"
                        :rotate180="!is_player1" :table="table" />
                    <Tile class="tile" v-for="(tile) in player2_pe_tiles" :key="tile.Name" :suit="tile.Suit"
                        :num="tile.Num" :state="tile.State" :reverse="is_player1" @click="tile_on_click(tile)"
                        :rotate180="!is_player1" :table="table" />
                </v-col>
                <v-spacer />
            </v-row>
            <v-row class="pa-0 ma-0">
                <v-spacer />
                <v-col v-if="player_id !== ''" :cols="'auto'" class="pa-0 ma-0">
                    <Kawa class="kawa" :table="table" :player_id="player_id" :kawa_player_id="player2_id"
                        :rotate180tile="is_player1" :reversetile="is_player1" />
                </v-col>
                <v-spacer />
            </v-row>
            <v-row class="pa-0 ma-0">
                <v-spacer />
                <v-col :cols="'auto'" class="ma-0 pa-0">
                    <Tsumo class="tsumo" :table="table" :player_id="player_id" />
                </v-col>
                <v-spacer />
            </v-row>
            <v-row class="pa-0 ma-0">
                <v-spacer />
                <v-col v-if="player_id !== ''" :cols="'auto'" class="ma-0 pa-0">
                    <Kawa class="kawa" :table="table" :player_id="player_id" :kawa_player_id="player1_id"
                        :rotate180tile="!is_player1" :reversetile="!is_player1" />
                </v-col>
                <v-spacer />
            </v-row>
            <v-row :align-content="'center'" class="opened_tiles_wrap up pa-0 ma-0" :class="[playerclass, flexreverse]">
                <v-spacer />
                <v-col :cols="'auto'" class="ma-0 pa-0 opened_tiles up" :class="playerclass">
                    <Tile class="tile" v-for="(tile) in player1_opened_tiles1" :key="tile.Name" :suit="tile.Suit"
                        :num="tile.Num" :state="tile.State" @click="tile_on_click(tile)" :reverse="!is_player1"
                        :rotate180="!is_player1" :table="table" />
                    <Tile class="tile" v-for="(tile) in player1_opened_tiles2" :key="tile.Name" :suit="tile.Suit"
                        :num="tile.Num" :state="tile.State" @click="tile_on_click(tile)" :reverse="!is_player1"
                        :rotate180="!is_player1" :table="table" />
                    <Tile class="tile" v-for="(tile) in player1_opened_tiles3" :key="tile.Name" :suit="tile.Suit"
                        :num="tile.Num" :state="tile.State" @click="tile_on_click(tile)" :reverse="!is_player1"
                        :rotate180="!is_player1" :table="table" />
                    <Tile class="tile" v-for="(tile) in player1_opened_tiles4" :key="tile.Name" :suit="tile.Suit"
                        :num="tile.Num" :state="tile.State" @click="tile_on_click(tile)" :reverse="!is_player1"
                        :rotate180="!is_player1" :table="table" />
                    <Tile class="tile" v-for="(tile) in player1_pe_tiles" :key="tile.Name" :reverse="!is_player1"
                        :suit="tile.Suit" :num="tile.Num" :state="tile.State" :rotate180="!is_player1"
                        @click="tile_on_click(tile)" :table="table" />
                </v-col>
                <v-spacer />
            </v-row>
            <v-row class="hand pa-0 ma-0" :class="playerrotateclass">
                <v-spacer />
                <v-col :cols="'auto'" class="handtiles ma-0 pa-0">
                    <Tile v-if="!is_player1 && !player1_tsumori_tile.Name" :suit="nulltile.Suit" :num="nulltile.Num"
                        :state="nulltile.State" :table="table" />
                    <Tile v-for="(tile) in player1_hand" :key="tile.Name" :suit="tile.Suit" :num="tile.Num"
                        :state="tile.State" @click="tile_on_click(tile)" :table="table" />
                    <Tile v-if="player1_tsumori_tile.Name" :key="player1_tsumori_tile.Name"
                        :suit="player1_tsumori_tile.Suit" :num="player1_tsumori_tile.Num"
                        :state="player1_tsumori_tile.State" @click="tile_on_click(player1_tsumori_tile)"
                        :table="table" />
                    <Tile v-if="is_player1 && !player1_tsumori_tile.Name" :suit="nulltile.Suit" :num="nulltile.Num"
                        :state="nulltile.State" :table="table" />
                </v-col>
                <v-spacer />
            </v-row>
            <v-spacer />
        </v-container>
        <v-container class="operators">
            <v-row>
                <v-col>
                    <v-spacer />
                </v-col>
                <v-row v-for="(operator, index) in operatorsWithoutDahai" :key="index" class="operator">
                    <v-col>
                        <v-card @click="operator_on_click(operator)">
                            {{ operator_type.to_string(operator.OperatorType) }}
                            <v-container>
                                <v-row>
                                    <v-col :cols="'auto'" v-for="(tile, jndex) in operator.TargetTiles" :key="jndex">
                                        <Tile :suit="tile.Suit" :num="tile.Num" :state="tile_state.OPEN"
                                            :table="table" />
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
                <v-spacer />
            </v-row>
        </v-container>
        <v-dialog class="dialog" v-model="is_show_player_name_dialog" persistent>
            <v-card class="pa-3">
                <v-text-field @keypress.enter="join_room" v-model="player_name" placeholder="名前" autofocus />
                <v-card-actions>
                    <v-btn @click="to_table_list">戻る</v-btn>
                    <v-spacer />
                    <v-btn @click="join_room">入室</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog class="dialog" v-model="is_show_wait_player_dialog" persistent>
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
import Kawa from '@/components/Kawa.vue';
import OperatorType from '@/nimar/OperatorType';
import TileState from '@/nimar/TileState';
import { Vue, Options } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import Tile, { NullTile } from '../components/Tile.vue'
import { isPlaceholder } from '@babel/types';
import { watch } from 'vue';

@Options({
    components: {
        Tile,
        Tsumo,
        Kawa,
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

    is_player1 = false

    table: any = {}
    operators = []
    operatorsWithoutDahai = []
    player1_hand: any = []
    player1_tsumori_tile: any = {}
    player1_opened_tiles1: any = []
    player1_opened_tiles2: any = []
    player1_opened_tiles3: any = []
    player1_opened_tiles4: any = []
    player1_pe_tiles: any = []
    player2_hand: any = []
    player2_tsumori_tile: any = {}
    player2_opened_tiles1: any = []
    player2_opened_tiles2: any = []
    player2_opened_tiles3: any = []
    player2_opened_tiles4: any = []
    player2_pe_tiles: any = []
    tsumo: any = []
    player1_id = ""
    player2_id = ""

    playerrotateclass = "player1_rotate"
    playerclass = "player1"
    flexreverse = ""

    operator_type = new OperatorType()
    tile_state = new TileState()
    nulltile = NullTile

    tile_on_click(tile: any): void {
        for (let i = 0; i < this.operators.length; i++) {
            let operator = this.operators[i]
            if (operator.OperatorType == this.operator_type.OPERATOR_DAHAI) {
                let target_tile = operator.TargetTiles[0]
                if (tile.Name == target_tile.Name) {
                    this.operators.splice(0)
                    this.operatorsWithoutDahai.splice(0)
                    api.execute_operator_promise(operator)
                    break
                }
            }
        }
    }
    operator_on_click(operator: any) {
        this.operators.splice(0)
        this.operatorsWithoutDahai.splice(0)
        api.execute_operator_promise(operator)
    }

    @Watch('table')
    updateTable() {
        this.is_player1 = this.table.Player1.ID == this.player_id
        if (this.is_player1) {
            this.playerrotateclass = "player1_rotate"
            this.playerclass = "player1"
            this.flexreverse = "flex-row-reverse"
        } else {
            this.playerrotateclass = "player2_rotate"
            this.playerclass = "player2"
            this.flexreverse = ""
        }

        this.tsumo.splice(0)
        this.player1_hand.splice(0)
        this.player1_opened_tiles1.splice(0)
        this.player1_opened_tiles2.splice(0)
        this.player1_opened_tiles3.splice(0)
        this.player1_opened_tiles4.splice(0)
        this.player1_pe_tiles.splice(0)
        this.player2_hand.splice(0)
        this.player2_opened_tiles1.splice(0)
        this.player2_opened_tiles2.splice(0)
        this.player2_opened_tiles3.splice(0)
        this.player2_opened_tiles4.splice(0)
        this.player2_pe_tiles.splice(0)

        if (this.table && this.table.Player1 && this.table.Player1.Hand) {
            this.table.Player1.Hand.forEach((tile: any) => {
                if (!tile) {
                    return
                }
                if (this.is_player1) {
                    tile.State = this.tile_state.PLAYER
                } else {
                    tile.State = this.tile_state.OPPONENT
                }
                this.player1_hand.push(tile)
            });
        }
        if (this.table && this.table.Player1 && this.table.Player1.TsumoriTile) {
            let tile = this.table.Player1.TsumoriTile
            if (this.is_player1) {
                tile.State = this.tile_state.PLAYER
            } else {
                tile.State = this.tile_state.OPPONENT
            }
            this.player1_tsumori_tile = tile
        } else {
            this.player1_tsumori_tile = {}
        }
        if (this.table && this.table.Player1 && this.table.Player1.OpenedTile1 && this.table.Player1.OpenedTile1.Tiles) {
            this.table.Player1.OpenedTile1.Tiles.forEach((tile: any) => {
                tile.State = this.tile_state.OPEN
                this.player1_opened_tiles1.push(tile)
            });
        }
        if (this.table && this.table.Player1 && this.table.Player1.OpenedTile2 && this.table.Player1.OpenedTile2.Tiles) {
            this.table.Player1.OpenedTile2.Tiles.forEach((tile: any) => {
                tile.State = this.tile_state.OPEN
                this.player1_opened_tiles2.push(tile)
            });
        }
        if (this.table && this.table.Player1 && this.table.Player1.OpenedTile3 && this.table.Player1.OpenedTile3.Tiles) {
            this.table.Player1.OpenedTile3.Tiles.forEach((tile:any) => {
                tile.State = this.tile_state.OPEN
                this.player1_opened_tiles3.push(tile)
            });
        }
        if (this.table && this.table.Player1 && this.table.Player1.OpenedTile4 && this.table.Player1.OpenedTile4.Tiles) {
            this.table.Player1.OpenedTile4.Tiles.forEach((tile: any) => {
                tile.State = this.tile_state.OPEN
                this.player1_opened_tiles4.push(tile)
            });
        }
        if (this.table && this.table.Player1 && this.table.Player1.OpenedPe && this.table.Player1.OpenedPe.Tiles) {
            this.table.Player1.OpenedPe.Tiles.forEach((tile: any) => {
                tile.State = this.tile_state.OPEN
                this.player1_pe_tiles.push(tile)
            });
        }

        if (this.table && this.table.Player2 && this.table.Player2.Hand) {
            this.table.Player2.Hand.forEach((tile: any) => {
                if (!tile) {
                    return
                }
                if (!this.is_player1) {
                    tile.State = this.tile_state.PLAYER
                } else {
                    tile.State = this.tile_state.OPPONENT
                }
                this.player2_hand.push(tile)
            });
        }
        if (this.table && this.table.Player2 && this.table.Player2.TsumoriTile) {
            let tile = this.table.Player2.TsumoriTile
            if (!this.is_player1) {
                tile.State = this.tile_state.PLAYER
            } else {
                tile.State = this.tile_state.OPPONENT
            }
            this.player2_tsumori_tile = tile
        } else {
            this.player2_tsumori_tile = {}
        }
        if (this.table && this.table.Player2 && this.table.Player2.OpenedTile1.Tiles) {
            this.table.Player2.OpenedTile1.Tiles.forEach((tile: any) => {
                tile.State = this.tile_state.OPEN
                this.player2_opened_tiles1.push(tile)
            });
        }
        if (this.table && this.table.Player2 && this.table.Player2.OpenedTile2 && this.table.Player2.OpenedTile2.Tiles) {
            this.table.Player2.OpenedTile2.Tiles.forEach((tile: any) => {
                tile.State = this.tile_state.OPEN
                this.player2_opened_tiles2.push(tile)
            });
        }
        if (this.table && this.table.Player2 && this.table.Player2.OpenedTile3 && this.table.Player2.OpenedTile3.Tiles) {
            this.table.Player2.OpenedTile3.Tiles.forEach((tile: any) => {
                tile.State = this.tile_state.OPEN
                this.player2_opened_tiles3.push(tile)
            });
        }
        if (this.table && this.table.Player2 && this.table.Player2.OpenedTile4 && this.table.Player2.OpenedTile4.Tiles) {
            this.table.Player2.OpenedTile4.Tiles.forEach((tile: any) => {
                tile.State = this.tile_state.OPEN
                this.player2_opened_tiles4.push(tile)
            });
        }
        if (this.table && this.table.Player2 && this.table.Player2.OpenedPe && this.table.Player2.OpenedPe.Tiles) {
            this.table.Player2.OpenedPe.Tiles.forEach((tile: any) => {
                tile.State = this.tile_state.OPEN
                this.player2_pe_tiles.push(tile)
            });
        }

        if (this.table && this.table.Tsumo && this.table.Tsumo.Tiles) {
            this.table.Tsumo.Tiles.forEach((tile: any) => {
                if (!tile) {
                    tile = {}
                    tile.Akadora = false
                    tile.Dora = false
                    tile.ID = -1
                    tile.Name = "null"
                    tile.Num = -1
                    tile.State = this.tile_state.NULL
                    tile.Suit = -1
                }
                tile.State = this.tile_state.DOWN
                this.tsumo.push(tile)
            });
        }

        this.player1_id = this.table.Player1.ID
        this.player2_id = this.table.Player2.ID
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
                    this.operators.splice(0);
                    this.operatorsWithoutDahai.splice(0);
                    let operators = JSON.parse(e.data)
                    if (!operators) {
                        return
                    }
                    operators.forEach((operator: any) => {
                        this.operators.push(operator);
                        if (operator.OperatorType !== this.operator_type.OPERATOR_DAHAI) {
                            this.operatorsWithoutDahai.push(operator);
                        }
                    });
                    console.log(this.operatorsWithoutDahai)
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
                            OperatorType: this.operator_type.OPERATOR_START_GAME
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
.player1_rotate {}

.player2_rotate {
    transform: rotate(180deg);
}

.hand {
    height: 60px;
    margin: 10px;
}

.tsumo {}

.kawa {
    margin: 10px;
}

.handtiles {
    height: 60px;
    width: 462px;
}

.operators {
    z-index: 1000;
    position: absolute;
    top: 42vh;
}

.operator {
    z-index: 10;
}

.opened_tiles_wrap {
    height: 60px;
    min-height: 60px;
    max-height: 60px;
    /* width: 462px; */
    /* min-width: 462px; */
    /* max-width: 462px; */
    /* width: 660px; */
    /* min-width: 660px; */
    /* max-width: 660px; */
}

.opened_tiles.player1.up,
.opened_tiles.player2.up {
    margin-right: -600px !important;
}

.opened_tiles.player1.down,
.opened_tiles.player2.down {
    margin-right: 600px !important;
}


.opened_tiles {
    height: 59px;
}

.table {
    position: absolute;
    top: 0;
    width: 100vw;
    max-width: 100vw;
    min-width: 100vw;
    padding-top: calc((100vh - 710px)/ 2);
    padding-bottom: calc((100vh - 710px)/ 2);
    padding-left: 0px;
    padding-right: 0px;
    /* 
    border-inline: solid 50px;
    border-image:
        repeating-radial-gradient(rgb(76 54 37) 3%,
            rgb(81, 46, 19) 41%,
            rgb(66 55 47) 48%) 1/0 50px; 
    */
}

.tbale .multiply {
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    mix-blend-mode: multiply;
    background-color: rgba(150, 183, 157, 44%);
}

.table_wrap {
    height: 100vh;
    width: 100vw;
    background-color: rgb(86, 106, 79);
}

.dialog {
}
</style>