<template>
  <h1>我的购物车</h1>
  <div class="box" v-for="(item, key) in carProducts" :key="key" style="padding: 10px">
    <div style="width: 100px">{{ item.title }}</div>
    <div class="box" style="width: 100px">
      <el-button
        type="primary"
        @click="changeGoodsCount('reduce', item.id)"
        :disabled="item.count == 1"
        :icon="SemiSelect"
        circle
      ></el-button>
      <span>{{ item.count }}</span>
      <el-button
        type="primary"
        @click="changeGoodsCount('add', item.id)"
        :icon="Select"
        circle
      ></el-button>
    </div>
    <el-button type="primary" :icon="Delete" circle></el-button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed, ref } from 'vue'
import { Delete, Select, SemiSelect } from '@element-plus/icons-vue'
import { Product } from '@/interface'

const store = useStore()
const carProducts = computed((): Product[] => {
  console.log('store.state.shoppingCart', store.state.shoppingCart)
  return store.state.shoppingCart
})

const { commit } = useStore()
const changeGoodsCount = (type: string, id: number): void => {
  commit('CHANGE_GOODS_COUNT', {
    type,
    id
  })
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.padding {
  padding: 20px;
}
</style>
