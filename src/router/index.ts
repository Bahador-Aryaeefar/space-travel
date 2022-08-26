import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/destination',
    name: 'destination',
    component: () => import('../views/DestinationView.vue')
  },
  {
    path: '/crew',
    name: 'crew',
    component: () => import('../views/CrewView.vue')
  },
  {
    path: '/technology',
    name: 'technology',
    component: () => import('../views/TechnologyView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
