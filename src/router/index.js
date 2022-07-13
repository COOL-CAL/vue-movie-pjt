import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import BoxOfficeByDay from '../views/BoxOfficeByDay.vue';

const routes = [
  {
    path: '/',
    name: 'name',
    components: Home
  },
  {
    path: '/boxOfficeByDay',
    name: 'boxOfficeByDay',
    components: BoxOfficeByDay
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
