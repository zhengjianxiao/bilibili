import Vue from 'vue'
import VueRouter from 'vue-router'
import rejest from '../views/rejest/rejest'
const home = () => import('../views/Home')
const login = () => import('../views/login/login')
const profile = () => import('../views/profile/profile.vue')
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'rejest',
    component: profile
  },
  {
    path: '/rejest',
    name: 'rejest',
    component: rejest
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
