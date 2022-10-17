import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Room from '../views/RoomList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'roomlist',
    component: Room
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
