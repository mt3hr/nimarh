class API {
    private _hostname = location.hostname
    private get hostname(): string { return this._hostname }
    private _port = "2222"
    // port = location.port
    private get port(): string { return this._port }


    get_player_id_promise(): Promise<any> {
        return fetch("http://" + this.hostname + ":" + this.port + "/nimar/get_player_id")
            .then((res) => res.json())
    }

    generate_list_table_socket(): WebSocket {
        return new WebSocket("ws://" + this.hostname + ":" + this.port + "/nimar/ws_list_table")
    }

    generate_join_room_socket(tableid: string, playerid: string, playername: string): WebSocket {
        return new WebSocket("ws://" + this.hostname + ":" + this.port + "/nimar/ws_game_table?tableid=" + tableid + "&playerid=" + playerid + "&playername=" + playername)
    }

    generate_operators_socket(tableid: string, playerid: string): WebSocket {
        return new WebSocket("ws://" + this.hostname + ":" + this.port + "/nimar/ws_operators?tableid=" + tableid + "&playerid=" + playerid)
    }

    generate_message_socket(tableid: string, playerid: string): WebSocket {
        return new WebSocket("ws://" + this.hostname + ":" + this.port + "/nimar/ws_message?tableid=" + tableid + "&playerid=" + playerid)
    }

    generate_flush_socket(tableid: string, playerid: string): WebSocket {
        return new WebSocket("ws://" + this.hostname + ":" + this.port + "/nimar/ws_flush?tableid=" + tableid + "&playerid=" + playerid)
    }

    create_table_promise(table_name: string): Promise<any> {
        return fetch("http://" + this.hostname + ":" + this.port + "/nimar/create_table?tablename=" + table_name)
    }

    execute_operator_promise(operator: any): Promise<any> {
        return fetch("http://" + this.hostname + ":" + this.port + "/nimar/execute_operator", { method: "POST", body: JSON.stringify(operator) })
    }
}
export default new API()