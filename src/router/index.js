import { createRouter, createWebHistory } from 'vue-router'
import Almacen from '../views/Almacen.vue'

const routes = [
  {
    path: '/',
    name: 'Almacen',
    component: Almacen
  },
  {
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    path: '/ventas',
    name: 'Ventas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ventas.vue')
  },
  {
    path: '/estadisticas',
    name: 'Estadisticas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Estadisticas.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
