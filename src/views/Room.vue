<template>
    <div>
        <v-dialog v-model="is_show_player_name_dialog">
            <v-card class="pa-3">
                <v-text-field v-model="player_name" placeholder="名前" />
                <v-card-actions>
                    <v-spacer />
                    <v-btn @click="join_room">入室</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Room extends Vue {
    game_table_socket
    is_show_player_name_dialog = false
    player_name = ""

    created() {
        this.is_show_player_name_dialog = true
    }

    join_room() {
        fetch("http://localhost:2222/nimar/get_player_id")
            .then((res: Response) => {
                return res.json()
            })
            .then((json) => {
                let player_id = json.player_id
                this.game_table_socket = new WebSocket("ws://localhost:2222/nimar/ws_game_table?roomid=" + this.$route.query.roomid)
                this.is_show_player_name_dialog = false
                this.game_table_socket.onmessage = (e: MessageEvent) => {
                    console.log(e)
                }
            })
    }
}
</script>

<style scoped>

</style>