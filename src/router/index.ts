import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import RoomList from '../views/RoomList.vue'
import Room from '../views/Room.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'roomlist',
    component: RoomList
  },
  {
    path: "/room",
    name: "room",
    component: Room,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
