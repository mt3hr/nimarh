<template>
  <h1>NimaR</h1>
  <div
      class="room_list"
      v-for="room in rooms"
      :key="room.getRoomid()">
    <div class="room">
      <h2>{{ room.getRoomname() }}</h2>
      <div
          class="player_list"
          v-for="player_name in room.getPlayernameList()"
          :key="player_name"
          >
          <div class="player_name">
            {{ player_name }}
          </div>
      </div>
      <v-btn @click="join_room(room.getRoomid())"></v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import empty from 'google-protobuf/google/protobuf/empty_pb'
import { NimaRClient } from '../NimarServiceClientPb';
import { Room } from '../nimar_pb.d';


let metadata = {"access-control-expose-headers": "x-grpc-web,grpc-timeout", "content-type": "application/grpc+json"} 

export default class RoomList extends Vue {
  private api: NimaRClient = new NimaRClient("https://"+location.host+"/api")
  rooms: Array<Room> = new Array<Room>()

  created(): void {
    this.api.listRooms(new empty.Empty(), metadata, (error, res) => {
      this.rooms = res.getRoomsList()
    })
  }
}
</script>

<style scoped>
</style>
