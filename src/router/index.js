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
    path: '/introduction',
    name: '',
    component: () => import('../views/GroadIntroduction')
  },
  {
    path: '/helper',
    name: '',
    component: () => import('../views/GroadHelper')
  },
  {
    path: '/story',
    name: '',
    component: () => import('../views/GroadStory')
  },
  {
    path: '/information',
    name: '',
    component: () => import('../views/GroadInformation')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
