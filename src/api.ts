class API {
    private _hostname = location.hostname
    private get hostname(): string { return this._hostname }
    private _port = "2222"
    private get port(): string { return this._port }

    // port = location.port

    get_player_id_promise(): Promise<any> {
        return fetch("http://" + this.hostname + ":" + this.port + "/nimar/get_player_id")
    }

    generate_list_table_socket(): WebSocket {
        return new WebSocket("ws://" + this.hostname + ":" + this.port + "/nimar/ws_list_table")
    }

    generate_join_room_socket(tableid: string, playerid: string, playername: string): WebSocket {
        return new WebSocket("ws://" + this.hostname + ":" + this.port + "/nimar/ws_game_table?tableid=" + tableid + "&playerid=" + playerid + "" + "&playername=" + playername)
    }

    create_table_promise(table_name: string): Promise<any> {
        return fetch("http://" + this.hostname + ":" + this.port + "/nimar/create_table?tablename=" + table_name)
    }
}
export default new API()