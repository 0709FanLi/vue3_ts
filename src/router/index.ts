import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Shopping from '@/views/shoppingCart/index.vue'
import Product from '@/views/shoppingCart/product.vue'
import ShoppingCart from '@/views/shoppingCart/shoppingCart.vue'
import Home from '@/views/home.vue'
import DayKnowledgeWeb from '@/views/dkw.vue'
import HookView from '@/views/hook/index.vue'
import Article from '@/views/article.vue'
import Swiper from '@/views/swiper/swiper.vue'
import News1 from '@/views/swiper/news1.vue'
import News2 from '@/views/swiper/news2.vue'
import News3 from '@/views/swiper/news3.vue'
import News4 from '@/views/swiper/news4.vue'
import UseMouse from '../hooks/useMouse/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: Swiper
  },
  {
    path: '/news1',
    name: 'news1',
    component: News1
  },
  {
    path: '/news2',
    name: 'news2',
    component: News2
  },
  {
    path: '/news3',
    name: 'news3',
    component: News3
  },
  {
    path: '/news4',
    name: 'news4',
    component: News4
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping,
    children: [
      {
        path: 'product',
        name: 'Product',
        component: Product
      },
      {
        path: 'shoppingCart',
        name: 'ShoppingCart',
        component: ShoppingCart
      }
    ]
  },
  {
    path: '/5dkw',
    name: '5dkw',
    component: DayKnowledgeWeb
  },
  {
    path: '/hooks',
    name: 'hooks',
    children: [
      {
        path: 'useMouse',
        name: 'useMouse',
        component: UseMouse
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
