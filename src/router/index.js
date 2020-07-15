import Vue from 'vue'
import VueRouter from 'vue-router'
import Lists from '../components/ListComponent'
import Login from '../components/Login'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Lists',
    component: Lists
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
