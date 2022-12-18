<template>
  <v-container class="pa-3">
    <v-container>
      <v-row>
        <h1>NimaR</h1>
        <v-spacer />
        <v-btn class="mt-3" @click="show_add_table_dialog">
          部屋を作成
        </v-btn>
      </v-row>
    </v-container>
    <v-card class="table_list pa-2" v-for="table in tables" :key="table.table_id ">
      <div class="table">
        <v-card-title>{{ table.Name }}</v-card-title>
        <v-card-text class="pa-2">
          <div class="player_name" v-if="table.Player1">
            <li>{{ table.Player1.Name }}</li>
          </div>
          <div class="player_name" v-if="table.Player2">
            <li>{{ table.Player2.Name }}</li>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="() => join_table(table.ID)" :disabled="table.Player2 !== null">参加</v-btn>
        </v-card-actions>
      </div>
    </v-card>
    <v-container>
      <v-row>
      </v-row>
    </v-container>
    <v-dialog v-model="is_show_add_table_dialog">
      <v-card class="pa-3">
        <v-text-field @keypress.enter="add_table" v-model="create_table_name" placeholder="部屋名" autofocus />
        <v-card-actions>
          <v-spacer />
          <v-btn @click="add_table">部屋を作成</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import api from '@/api'
import { Vue } from 'vue-class-component'


export default class TableList extends Vue {
  tables: Array<any> = []
  table_socket: WebSocket = api.generate_list_table_socket()

  is_show_add_table_dialog = false
  create_table_name = ""

  created(): void {
    this.table_socket.onmessage = (e: MessageEvent) => {
      let table = JSON.parse(e.data)
      table ? this.tables = table : this.tables = new Array<any>()
    }
  }

  show_add_table_dialog() {
    this.is_show_add_table_dialog = true
  }

  add_table() {
    let create_table_name: string = this.create_table_name
    this.create_table_name = ""
    this.is_show_add_table_dialog = false

    api.create_table_promise(create_table_name)
  }

  join_table(tableID: string) {
    this.table_socket.close()
    this.$router.push('/table?tableid=' + tableID)
  }
}
</script>

<style scoped>

</style>
