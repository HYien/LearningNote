import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import AddGood from '@/views/AddGood'
import Good from '@/views/Good'
import Login from '@/views/Login'
import Swiper from '@/views/Swiper'
import IndexConfig from '@/views/IndexConfig'
import Category from '@/views/Category.vue'
import Order from '@/views/Order.vue'
import OrderDetail from '@/views/OrderDetail.vue'
import Guest from '@/views/Guest.vue'
import Account from '@/views/Account.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/add',
      name: 'add',
      component: AddGood
    },
    {
      path: '/good',
      name: 'good',
      component: Good
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: Swiper
    },
    {
      path: '/hot',
      name: 'hot',
      component: IndexConfig
    },
    {
      path: '/new',
      name: 'new',
      component: IndexConfig
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: IndexConfig
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      children: [
        {
          path: '/category/level2',
          name: 'level2',
          component: Category
        },
        {
          path: '/category/level3',
          name: 'level3',
          component: Category
        },
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/order_detail',
      name: 'order_detail',
      component: OrderDetail
    },
    {
      path: '/guest',
      name: 'guest',
      component: Guest
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
  ]
})

export default router