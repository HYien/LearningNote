// import {
//   createRouter,
//   createWebHashHistory
// } from 'vue-router'
import {
  createRouter,
  createWebHashHistory
} from './mini-router/index'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import VuexTest from '../pages/vuex.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/vuex-test',
    name: 'VuexTest',
    component: VuexTest
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router