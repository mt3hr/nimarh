<template>
  <div>
    <h1>NimaR</h1>
    <div class="room_list" v-for="room in rooms" :key="room.roomID">
      <div class="room">
        <h2>{{ room.roomName }}</h2>
        <div class="player_list" v-for="player_name in room.playerNames" :key="player_name">
          <div class="player_name">
            {{ player_name }}
          </div>
        </div>
        <v-btn @click="join_room(room.roomID)"></v-btn>
      </div>
    </div>
    <v-btn @click="show_add_room_dialog">
      部屋を作成
    </v-btn>
    <v-dialog v-model="is_show_add_room_dialog">
      <v-text-field v-model="add_room_name" value="部屋名" />
      <v-btn @click="add_room">部屋を作成</v-btn>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { google } from '../google/protobuf/empty'
import { NimaRClient, Room, CreateRoomRequest } from '../nimar'
import { ChannelCredentials } from '@grpc/grpc-js'

export default class RoomList extends Vue {
  // private api: NimaRClient = new NimaRClient("https://"+location.host+"/api")
  private api: NimaRClient = new NimaRClient("https://localhost:2222/api", ChannelCredentials.createInsecure())

  private _rooms: Array<Room> = new Array<Room>()
  get rooms(): Array<Room> { return this._rooms }
  set rooms(rooms: Array<Room>) { this._rooms = rooms }

  private _is_show_add_room_dialog = false
  set is_show_add_room_dialog(b: boolean) { this._is_show_add_room_dialog = b }
  get is_show_add_room_dialog(): boolean { return this.is_show_add_room_dialog }

  private _add_room_name = ""
  get add_room_name(): string { return this._add_room_name }
  set add_room_name(room_name: string) { this._add_room_name = room_name }

  created(): void {
    this.reload_room_list()
  }

  reload_room_list() {
    this.api.ListRooms(new google.protobuf.Empty(), ((res: any) => {
      let rooms: Array<Room> = new Array<Room>()
      if (res) {
        rooms = res.response.rooms
      }
      rooms === null ? this.rooms = new Array<Room>() : this.rooms = rooms
    }))
  }

  show_add_room_dialog() {
    this.is_show_add_room_dialog = true
  }

  add_room() {
    let room_name: string = this.add_room_name
    this.add_room_name = ""
    this.is_show_add_room_dialog = false

    let create_room_request: CreateRoomRequest = new CreateRoomRequest();
    create_room_request.roomName = room_name
    this.api.CreateRoom(create_room_request, () => {
      this.reload_room_list()
    })
  }
  join_room(roomName: string) {
    //TODO 
  }
}
</script>

<style scoped>

</style>
