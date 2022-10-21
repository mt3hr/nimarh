<template>
  <div>
    <h1>NimaR</h1>
    <div class="room_list" v-for="room in rooms" :key="room.getRoomid() ">
      <div class="room">
        <h2>{{ room.getRoomname() }}</h2>
        <div class="player_list" v-for="player_name in room.getPlayernamesList()" :key="player_name">
          <div class="player_name">
            {{ player_name }}
          </div>
        </div>
        <v-btn @click="join_room(room.getRoomid())">参加</v-btn>
      </div>
    </div>
    <v-btn @click="show_add_room_dialog">
      部屋を作成
    </v-btn>
    <v-dialog v-model="is_show_add_room_dialog">
      <v-text-field v-model="add_room_name" placeholder="部屋名" />
      <v-btn @click="add_room">部屋を作成</v-btn>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { Room, Rooms, CreateRoomRequest } from '../nimar_pb'
import { NimaRClient } from '../NimarServiceClientPb'

export default class RoomList extends Vue {
  private metadata = { "access-control-expose-headers": "x-grpc-web,grpc-timeout", "content-type": "application/grpc+json" } // apiの第2引数

  private api: NimaRClient = new NimaRClient("https://" + location.host, null, null)

  private _rooms: Array<Room> = new Array<Room>()
  get rooms(): Array<Room> { return this._rooms }
  set rooms(rooms: Array<Room>) { this._rooms = rooms }

  is_show_add_room_dialog = false

  private _add_room_name = ""
  get add_room_name(): string { return this._add_room_name }
  set add_room_name(room_name: string) { this._add_room_name = room_name }

  created(): void {
    this.reload_room_list()
  }

  reload_room_list() {
    this.api.listRooms(new Empty(), this.metadata)
      .then((rooms: Rooms) => {
        rooms ? this.rooms = rooms.getRoomsList() : this.rooms = new Array<Room>()
      })
  }

  show_add_room_dialog() {
    this.is_show_add_room_dialog = true
  }

  add_room() {
    let room_name: string = this.add_room_name
    this.add_room_name = ""
    this.is_show_add_room_dialog = false

    let create_room_request: CreateRoomRequest = new CreateRoomRequest();
    create_room_request.setRoomname(room_name)

    this.api.createRoom(create_room_request, this.metadata)
      .then((room: Room) => {
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
