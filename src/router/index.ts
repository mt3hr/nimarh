import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import RoomList from '../views/RoomList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'roomlist',
    component: RoomList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
