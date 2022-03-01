import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Shopping from '@/views/shoppingCart/index.vue'
import Product from '@/views/shoppingCart/product.vue'
import ShoppingCart from '@/views/shoppingCart/shoppingCart.vue'
import Home from '@/views/home.vue'
import DayKnowledgeWeb from '@/views/dkw.vue'
import Article from '@/views/article.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/article',
    name: 'article',
    component: Article
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
