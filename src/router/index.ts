import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TableList from '../views/TableList.vue'
import Table from '../views/Table.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'tablelist',
    component: TableList,
  },
  {
    path: "/table",
    name: "table",
    component: Table,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
