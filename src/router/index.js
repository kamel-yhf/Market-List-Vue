import Vue from 'vue'
import VueRouter from 'vue-router'
import Lists from '../components/ListComponent'
import Login from '../components/Login'
import NewList from '../components/CreateList'
import TestList from '../components/TestList'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/lists',
    name: 'Lists',
    component: Lists
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/new-list',
    name: 'newList',
    component: NewList
  },
  {
    path: '/test', 
    name: 'Test',
    component: TestList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
