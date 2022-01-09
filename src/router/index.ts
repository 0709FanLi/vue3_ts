import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Shopping from '@/views/shoppingCart/index.vue'
import Product from '@/views/shoppingCart/product.vue'
import ShoppingCart from '@/views/shoppingCart/shoppingCart.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping,
    children:[
      {
        path: 'product',
        name: 'Product',
        component: Product,
      },
      {
        path: 'shoppingCart',
        name: 'ShoppingCart',
        component: ShoppingCart,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
