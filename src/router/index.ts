import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Product from '@/views/shoppingCart/product.vue'
import ShoppingCart from '@/views/shoppingCart/shoppingCart.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Product',
    component: Product
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
