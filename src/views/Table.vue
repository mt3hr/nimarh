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
                            {{ operatorTypeToString.to_string(operator.OperatorType) }}
                            <v-container>
                                <v-row>
                                    <v-col :cols="'auto'" v-for="(tile, jndex) in operator.TargetTiles" :key="jndex">
                                        <Tile :suit="tile.Suit" :num="tile.Num" :state="TileState.OPEN"
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
    </div>
    <v-card v-if="table && table.Status" class="game_info pa-0 ma-0">
        <v-card-title>
            {{ table.Name }}
        </v-card-title>
        <v-card-text>
            <span v-if="table.Status.Kaze == TON">東</span>
            <span v-if="table.Status.Kaze == NAN">南</span>
            <span v-if="table.Status.Kaze == SHA">西</span>
            <span v-if="table.Status.Kaze == PE">北</span>
            <span>{{ table.Status.NumberOfKyoku }}局</span>
            <span>{{ table.Status.NumberOfHonba }}本場</span>
            <span>（リーチ棒{{ table.Status.ReachTablePoint / 1000 }}本）</span>
        </v-card-text>
        <v-card-text>
            <span>{{ table.Player1.Name }} : {{ table.Player1.Point }} 点</span>
        </v-card-text>
        <v-card-text>
            <span>{{ table.Player2.Name }} : {{ table.Player2.Point }} 点</span>
        </v-card-text>
        <v-card-text>
            <span>親: {{ table.Status.Oya.Name }}</span>
        </v-card-text>
        <v-card-text>
            <span>手番: {{ table.Status.PlayerWithTurn.Name }}</span>
        </v-card-text>
    </v-card>
    <v-dialog class="dialog pa-0 ma-0" v-model="is_show_player_name_dialog" persistent>
        <v-card class="pa-3">
            <v-text-field @keypress.enter="join_room" v-model="player_name" placeholder="名前" autofocus />
            <v-card-actions>
                <v-btn @click="to_table_list">戻る</v-btn>
                <v-spacer />
                <v-btn @click="join_room">入室</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog class="dialog pa-0 ma-0" v-model="is_show_wait_player_dialog" persistent>
        <v-card class="pa-3">
            プレイヤーの参加を待っています
            <v-card-actions>
                <v-btn @click="to_table_list">戻る</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog class="dialog pa-0 ma-0" v-model="show_message" persistent>
        <v-card class="pa-3">
            <v-card-text v-if="message && message.Agari && message.MessageType == MessageAgari">
                <p>{{ message.Agari.Name }}</p>
                <v-container>
                    <v-row>
                        <v-spacer />
                        <Tile v-for="(tile) in message.Agari.DoraHyoujiHais" :key="tile.Name" :suit="tile.Suit"
                            :num="tile.Num" :state="TileState.OPEN" :table="table" />
                    </v-row>
                    <v-row v-if="message.Agari.Player.Status.Reach">
                        <v-spacer />
                        <Tile v-for="(tile) in message.Agari.UraDoraHyoujiHais" :key="tile.Name" :suit="tile.Suit"
                            :num="tile.Num" :state="TileState.OPEN" :table="table" />
                    </v-row>
                    <v-row>
                        <v-col>
                            <Tile v-for="(tile) in message.Agari.Hand" :key="tile.Name" :suit="tile.Suit"
                                :num="tile.Num" :state="TileState.OPEN" :table="table" />
                            <Tile :suit="nulltile.Suit" :num="nulltile.Num" :state="nulltile.State" :table="table" />

                            <span v-if="message.Agari.OpenedTile1.Tiles">
                                <Tile v-for="(tile) in message.Agari.OpenedTile1.Tiles" :key="tile.Name"
                                    :suit="tile.Suit" :num="tile.Num" :state="TileState.OPEN" :table="table" />
                            </span>
                            <Tile v-if="message.Agari.OpenedTile1.Tiles" :suit="nulltile.Suit" :num="nulltile.Num"
                                :state="nulltile.State" :table="table" />

                            <span v-if="message.Agari.OpenedTile2.Tiles">
                                <Tile v-for="(tile) in message.Agari.OpenedTile2.Tiles" :key="tile.Name"
                                    :suit="tile.Suit" :num="tile.Num" :state="TileState.OPEN" :table="table" />
                            </span>
                            <Tile v-if="message.Agari.OpenedTile2.Tiles" :suit="nulltile.Suit" :num="nulltile.Num"
                                :state="nulltile.State" :table="table" />

                            <span v-if="message.Agari.OpenedTile3.Tiles">
                                <Tile v-for="(tile) in message.Agari.OpenedTile3.Tiles" :key="tile.Name"
                                    :suit="tile.Suit" :num="tile.Num" :state="TileState.OPEN" :table="table" />
                            </span>
                            <Tile v-if="message.Agari.OpenedTile3.Tiles" :suit="nulltile.Suit" :num="nulltile.Num"
                                :state="nulltile.State" :table="table" />

                            <span v-if="message.Agari.OpenedTile4.Tiles">
                                <Tile v-for="(tile) in message.Agari.OpenedTile4.Tiles" :key="tile.Name"
                                    :suit="tile.Suit" :num="tile.Num" :state="TileState.OPEN" :table="table" />
                            </span>
                            <Tile v-if="message.Agari.OpenedTile4.Tiles" :suit="nulltile.Suit" :num="nulltile.Num"
                                :state="nulltile.State" :table="table" />

                            <span v-if="message.Agari.Pe.Tiles">
                                <Tile v-for="(tile) in message.Agari.Pe.Tiles" :key="tile.Name" :suit="tile.Suit"
                                    :num="tile.Num" :state="TileState.OPEN" :table="table" />
                            </span>
                            <Tile v-if="message.Agari.Pe.Tiles" :suit="nulltile.Suit" :num="nulltile.Num"
                                :state="nulltile.State" :table="table" />
                            <Tile v-if="message.Agari.TsumoriTile" :key="message.Agari.TsumoriTile.Name"
                                :suit="message.Agari.TsumoriTile.Suit" :num="message.Agari.TsumoriTile.Num"
                                :state="TileState.OPEN" :table="table" />
                            <Tile v-if="message.Agari.RonTile" :key="message.Agari.RonTile.Name"
                                :suit="message.Agari.RonTile.Suit" :num="message.Agari.RonTile.Num"
                                :state="TileState.OPEN" :table="table" />
                        </v-col>
                    </v-row>
                </v-container>
                <p v-for="yaku in message.Agari.Point.MatchYakusForMessage" :key="yaku.Name"> {{ yaku.Name }}
                    {{ yaku.Han }}翻</p>
                <p>{{ message.Agari.Point.Hu }}符 {{ message.Agari.Point.Han }}翻 {{ message.Agari.Point.Point }}点</p>
            </v-card-text>
            <v-card-text v-if="message && message.MessageType == MessageKyushuKyuhai">
                <p>九種九牌</p>
            </v-card-text>
            <v-card-text v-if="message && message.MessageType == MessageSukaikan">
                <p>四開槓</p>
            </v-card-text>
            <v-card-text v-if="message && message.MessageType == MessageRyukyoku">
                <p>流局</p>
                <p>
                    <span>{{ table.Player1.Name }}:</span>
                    <span v-if="message.Ryukyoku.Player1Tempai">聴牌</span>
                    <span v-else>ノーテン</span>
                    <span>{{ message.Ryukyoku.Player1Bappu }}</span>
                </p>
                <p>
                    <span>{{ table.Player2.Name }}:</span>
                    <span v-if="message.Ryukyoku.Player2Tempai">聴牌</span>
                    <span v-else>ノーテン</span>
                    <span>{{ message.Ryukyoku.Player2Bappu }}</span>
                </p>
            </v-card-text>
            <v-card-text v-if="message && message.MessageType == MessageMatchResult">
                <p>終局</p>
                <p>勝者: {{ message.MatchResult.WinnerPlayer.Name }}: {{ message.MatchResult.WinnerPlayer.Point }}</p>
                <p>敗者: {{ message.MatchResult.LoserPlayer.Name }}: {{ message.MatchResult.LoserPlayer.Point }}</p>
            </v-card-text>
            <v-card-actions>
                <v-btn :disabled="disabled_ok_button" @click="send_ok_operator">OK</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-snackbar class="flush" v-model="show_flush" :timeout="2000" :location="'left bottom'" :width="'auto'">
        <p class="flushmessage">{{ flush.Player.Name }} : {{ flush.Message }}</p>
    </v-snackbar>
</template>

<script lang="ts">
import api from '@/api';
import Tsumo from '@/components/Tsumo.vue';
import Kawa from '@/components/Kawa.vue';
import OperatorType, { OperatorTypeToString } from '@/nimar/OperatorType';
import TileState from '@/nimar/TileState';
import { Vue, Options } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import Tile, { NullTile } from '../components/Tile.vue'
import Message from '@/nimar/Message';
import MessageType from '@/nimar/MessageType';
import Kaze from '@/nimar/Kaze';
import Operator from '@/nimar/Operator';
import Flush from '@/nimar/Flush';
import dahai_se_url from '@/assets/dahai_se.wav'
const dahai_se = new Audio(dahai_se_url)

@Options({
    components: {
        Tile,
        Tsumo,
        Kawa,
    },
})

//TODO OpenedTilesのそれぞれのVueComonent用意したほうがいいかもしれない。牌倒すやつないと暗槓がわからん

export default class Table extends Vue {
    game_table_socket: WebSocket
    operators_socket: WebSocket
    message_socket: WebSocket
    flush_socket: WebSocket
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

    nulltile = NullTile
    operatorTypeToString = new OperatorTypeToString()
    TileState = TileState

    show_message = false
    message: Message

    flush: Flush
    show_flush = false

    disabled_ok_button: boolean

    MessageAgari = MessageType.MessageAgari
    MessageKyushuKyuhai = MessageType.MessageKyushuKyuhai
    MessageSukaikan = MessageType.MessageSukaikan
    MessageRyukyoku = MessageType.MessageRyukyoku
    MessageMatchResult = MessageType.MessageMatchResult

    TON = Kaze.TON
    NAN = Kaze.NAN
    SHA = Kaze.SHA
    PE = Kaze.PE

    tile_on_click(tile: any): void {
        for (let i = 0; i < this.operators.length; i++) {
            let operator = this.operators[i]
            if (operator.OperatorType == OperatorType.OPERATOR_DAHAI) {
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
        this.player1_id = this.table.Player1.ID
        this.player2_id = this.table.Player2.ID

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
                    if (this.message && this.message.MessageType == MessageType.MessageAgari && this.message.Agari && this.message.Agari.ID == this.player1_id) {
                        tile.State = TileState.OPEN
                    } else {
                        tile.State = TileState.PLAYER
                    }
                } else {
                    if (this.message && this.message.MessageType == MessageType.MessageAgari && this.message.Agari.ID == this.player1_id) {
                        tile.State = TileState.OPEN
                    } else {
                        tile.State = TileState.OPPONENT
                    }
                }
                this.player1_hand.push(tile)
            });
        }
        if (this.table && this.table.Player1 && this.table.Player1.TsumoriTile) {
            let tile = this.table.Player1.TsumoriTile
            if (this.is_player1) {
                if (this.message && this.message.MessageType == MessageType.MessageAgari && this.message.Agari.ID == this.player1_id) {
                    tile.State = TileState.OPEN
                } else {
                    tile.State = TileState.PLAYER
                }
            } else {
                if (this.message && this.message.MessageType == MessageType.MessageAgari && this.message.Agari.ID == this.player1_id) {
                    tile.State = TileState.OPEN
                } else {
                    tile.State = TileState.OPPONENT
                }
            }
            this.player1_tsumori_tile = tile
        } else {
            this.player1_tsumori_tile = {}
        }
        if (this.table && this.table.Player1 && this.table.Player1.OpenedTile1 && this.table.Player1.OpenedTile1.Tiles) {
            this.table.Player1.OpenedTile1.Tiles.forEach((tile: any) => {
                tile.State = TileState.OPEN
                this.player1_opened_tiles1.push(tile)
            });
        }
        if (this.table && this.table.Player1 && this.table.Player1.OpenedTile2 && this.table.Player1.OpenedTile2.Tiles) {
            this.table.Player1.OpenedTile2.Tiles.forEach((tile: any) => {
                tile.State = TileState.OPEN
                this.player1_opened_tiles2.push(tile)
            });
        }
        if (this.table && this.table.Player1 && this.table.Player1.OpenedTile3 && this.table.Player1.OpenedTile3.Tiles) {
            this.table.Player1.OpenedTile3.Tiles.forEach((tile: any) => {
                tile.State = TileState.OPEN
                this.player1_opened_tiles3.push(tile)
            });
        }
        if (this.table && this.table.Player1 && this.table.Player1.OpenedTile4 && this.table.Player1.OpenedTile4.Tiles) {
            this.table.Player1.OpenedTile4.Tiles.forEach((tile: any) => {
                tile.State = TileState.OPEN
                this.player1_opened_tiles4.push(tile)
            });
        }
        if (this.table && this.table.Player1 && this.table.Player1.OpenedPe && this.table.Player1.OpenedPe.Tiles) {
            this.table.Player1.OpenedPe.Tiles.forEach((tile: any) => {
                tile.State = TileState.OPEN
                this.player1_pe_tiles.push(tile)
            });
        }

        if (this.table && this.table.Player2 && this.table.Player2.Hand) {
            this.table.Player2.Hand.forEach((tile: any) => {
                if (!tile) {
                    return
                }
                if (!this.is_player1) {
                    if (this.message && this.message.MessageType == MessageType.MessageAgari && this.message.Agari.ID == this.player2_id) {
                        tile.State = TileState.OPEN
                    } else {
                        tile.State = TileState.PLAYER
                    }
                } else {
                    if (this.message && this.message.MessageType == MessageType.MessageAgari && this.message.Agari.ID == this.player2_id) {
                        tile.State = TileState.OPEN
                    } else {
                        tile.State = TileState.OPPONENT
                    }
                }
                this.player2_hand.push(tile)
            });
        }
        if (this.table && this.table.Player2 && this.table.Player2.TsumoriTile) {
            let tile = this.table.Player2.TsumoriTile
            if (!this.is_player1) {
                if (this.message && this.message.MessageType == MessageType.MessageAgari && this.message.Agari.ID == this.player2_id) {
                    tile.State = TileState.OPEN
                } else {
                    tile.State = TileState.PLAYER
                }
            } else {
                if (this.message && this.message.MessageType == MessageType.MessageAgari && this.message.Agari.ID == this.player2_id) {
                    tile.State = TileState.OPEN
                } else {
                    tile.State = TileState.OPPONENT
                }
            }
            this.player2_tsumori_tile = tile
        } else {
            this.player2_tsumori_tile = {}
        }
        if (this.table && this.table.Player2 && this.table.Player2.OpenedTile1.Tiles) {
            this.table.Player2.OpenedTile1.Tiles.forEach((tile: any) => {
                tile.State = TileState.OPEN
                this.player2_opened_tiles1.push(tile)
            });
        }
        if (this.table && this.table.Player2 && this.table.Player2.OpenedTile2 && this.table.Player2.OpenedTile2.Tiles) {
            this.table.Player2.OpenedTile2.Tiles.forEach((tile: any) => {
                tile.State = TileState.OPEN
                this.player2_opened_tiles2.push(tile)
            });
        }
        if (this.table && this.table.Player2 && this.table.Player2.OpenedTile3 && this.table.Player2.OpenedTile3.Tiles) {
            this.table.Player2.OpenedTile3.Tiles.forEach((tile: any) => {
                tile.State = TileState.OPEN
                this.player2_opened_tiles3.push(tile)
            });
        }
        if (this.table && this.table.Player2 && this.table.Player2.OpenedTile4 && this.table.Player2.OpenedTile4.Tiles) {
            this.table.Player2.OpenedTile4.Tiles.forEach((tile: any) => {
                tile.State = TileState.OPEN
                this.player2_opened_tiles4.push(tile)
            });
        }
        if (this.table && this.table.Player2 && this.table.Player2.OpenedPe && this.table.Player2.OpenedPe.Tiles) {
            this.table.Player2.OpenedPe.Tiles.forEach((tile: any) => {
                tile.State = TileState.OPEN
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
                    tile.State = TileState.NULL
                    tile.Suit = -1
                }
                if (tile.DoraHyoujiHai) {
                    tile.State = TileState.OPEN
                } else {
                    tile.State = TileState.DOWN
                }
                this.tsumo.push(tile)
            });
        }
        dahai_se.play()
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
                }

                this.operators_socket = api.generate_operators_socket(this.get_room_id(), this.player_id)
                this.operators_socket.onmessage = (e: MessageEvent) => {
                    this.operators.splice(0);
                    this.operatorsWithoutDahai.splice(0);
                    let operators: Array<Operator> = JSON.parse(e.data)
                    if (!operators) {
                        return
                    }
                    if ((player_id == this.table.Player1.ID ? this.table.Player1 : this.table.Player2).Status.Reach &&
                        operators.length == 1 && operators[0].OperatorType == OperatorType.OPERATOR_DAHAI) {
                        api.execute_operator_promise(operators[0])
                    } else {
                        operators.forEach((operator: any) => {
                            this.operators.push(operator);
                            if (operator.OperatorType != OperatorType.OPERATOR_DAHAI) {
                                this.operatorsWithoutDahai.push(operator);
                            }
                        });
                    }
                }

                this.message_socket = api.generate_message_socket(this.get_room_id(), player_id)
                this.message_socket.onmessage = (e: MessageEvent) => {
                    this.message = JSON.parse(e.data)
                    this.show_message = true
                    this.disabled_ok_button = false
                    this.updateTable()
                }

                this.flush_socket = api.generate_flush_socket(this.get_room_id(), player_id)
                this.flush_socket.onmessage = (e: MessageEvent) => {
                    this.flush = JSON.parse(e.data)
                    this.show_flush = true
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
                            OperatorType: OperatorType.OPERATOR_START_GAME
                        })
                    }
                }
            })
    }

    to_table_list() {
        this.$router.replace('/')
    }

    send_ok_operator() {
        this.disabled_ok_button = true
        api.get_player_id_promise()
            .then((player_id) => {
                let ok_operator = new Operator()
                ok_operator.OperatorType = OperatorType.OPERATOR_OK
                ok_operator.PlayerID = player_id
                ok_operator.RoomID = this.get_room_id()
                api.execute_operator_promise(ok_operator)
            })
            .then(() => {
                if (this.message.MessageType == this.MessageMatchResult) {
                    location.href = "/"
                }
                this.show_message = false
                this.message = null
            })
    }
}
</script>

<style scoped>
.table {
    position: absolute;
    top: 0;
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



.table_wrap {
    position: absolute;
    top: 0px;
    height: 100vh;
    width: 100vw;
    background-color: rgb(86, 106, 79);
}

.dialog {}

.game_info {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 1000;
}

.flush {
    width: 200px;
}

.flushmessage {
    width: fit-content;
}
</style>
<style>
.v-snackbar__wrapper {
    min-width: fit-content !important;
}
</style>
