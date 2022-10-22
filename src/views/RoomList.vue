<template>
  <v-container class="pa-3">
    <v-container>
      <v-row>
        <h1>NimaR</h1>
        <v-spacer />
        <v-btn class="mt-3" @click="show_add_room_dialog">
          部屋を作成
        </v-btn>
      </v-row>
    </v-container>
    <v-card class="room_list pa-2" v-for="room in rooms" :key="room.table_id ">
      <div class="room">
        <v-card-title>{{ room.table_name }}</v-card-title>
        <v-card-text class="pa-2">
          <div class="player_list" v-for="player_name in room.player_names" :key="player_name">
            <div class="player_name">
              <li>{{ player_name }}</li>
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="() => join_room(room.table_id)">参加</v-btn>
        </v-card-actions>
      </div>
    </v-card>
    <v-container>
      <v-row>
      </v-row>
    </v-container>
    <v-dialog v-model="is_show_add_table_dialog">
      <v-card class="pa-3">
        <v-text-field v-model="add_table_name" placeholder="部屋名" />
        <v-card-actions>
          <v-spacer />
          <v-btn @click="add_room">部屋を作成</v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class RoomList extends Vue {
  rooms: Array<any> = []
  table_socket: WebSocket

  is_show_add_table_dialog = false
  add_table_name = ""

  created(): void {
    this.table_socket = new WebSocket("ws://localhost:2222/nimar/ws_list_table")
    this.table_socket.onmessage = (e: MessageEvent) => {
      this.rooms = JSON.parse(e.data)
    }
  }

  show_add_room_dialog() {
    this.is_show_add_table_dialog = true
  }

  add_room() {
    let add_table_name: string = this.add_table_name
    this.add_table_name = ""
    this.is_show_add_table_dialog = false

    fetch("http://localhost:2222/nimar/create_table?table_name=" + add_table_name)
  }

  join_room(roomID: string) {
    this.$router.push('/room?tableid=' + roomID)
  }
}
</script>

<style scoped>

</style>
