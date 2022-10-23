import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TableList from '../views/TableList.vue'
import Table from '../views/Table.vue'
import api from '@/api'

const table_socket = api.generate_list_table_socket()

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'tablelist',
    component: TableList,
    props: {
      table_socket: table_socket,
    }
  },
  {
    path: "/table",
    name: "table",
    component: Table,
    props: {
      table_socket: table_socket,
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
