import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dodajCitat',
    name: 'Dodaj Citat',
    component: () => import('../views/DodajCitat.vue')
  },
  {
    path: '/randomCitati',
    name: 'Random Citati',
    component: () => import('../views/RandomCitati.vue')
  },
  {
    path: '/poAnimeu',
    name: 'Pretrazi citate po seriji',
    component: () => import('../views/PoAnimeu.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
