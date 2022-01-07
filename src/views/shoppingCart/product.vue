<template>
  <el-table :data="products" v-loading.fullscreen.lock="!products.length" style="width: 100%">
    <el-table-column label="Date">
      <template #default="scope">
        <span>{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Name">
      <template #default="scope">
        <span>{{ scope.row.price }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" type="danger" @click="addProduct(scope.row)">添加</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { apiGetProducts } from '@/api'
import { Product } from '@/interface'
import { useStore } from '@/store'
import { ElMessage } from 'element-plus'

let products = ref<Product[]>([])
const { commit, getters } = useStore()

let addProduct = (product: Product): void => {
  if (isInCart(product.id)) {
    ElMessage({
      message: `购物车已存在${product.title}`,
      type: 'warning'
    })
  } else {
    commit('ADD_TO_CARD', { product })
  }
}

const isInCart = (id: number): boolean => {
  return getters.isInCart(id)
}

apiGetProducts().then(
  (res) => {
    products.value = res
    console.log('products', products)
  },
  (err) => {
    console.log(err)
  }
)
</script>
