import Vue from 'vue'
import VueRouter from 'vue-router'
import rejest from '../views/rejest/rejest'
const home = () => import('../views/home/home')
const login = () => import('../views/login/login')
const profile = () => import('../views/profile/profile.vue')
const edit = () => import('../views/edit/edit.vue')
const article = () => import('../views/article/article')
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      keepalive: true
    }
  },
  {
    path: '/article/:id',
    name: 'article',
    component: article
  },
  {
    path: '/rejest',
    name: 'rejest',
    component: rejest
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      keepalive: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    meta: {
      istoken: true
    }
  },
  {
    path: '/edit',
    name: 'edit',
    component: edit,
    meta: {
      istoken: true
    }
  }
 
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to , from , next) =>{
  if(!localStorage.getItem('token') && !localStorage.getItem('id') && to.meta.istoken == true){
    Vue.prototype.$msg.fail("请重新登录")
    router.push('/login')
    return
  }
  next()
})

export default router
