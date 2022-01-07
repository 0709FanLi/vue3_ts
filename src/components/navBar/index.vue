<template>
  <div class="nav-bar">
    <router-link to="/" :class="{ activeRouteName: activeRouteName === 'Product' }">
      商品列表
    </router-link>
    <router-link
      to="/shoppingCart"
      :class="{ activeRouteName: activeRouteName === 'ShoppingCart' }"
    >
      购物车({{ cartGoodsCount }})
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
// cartGoodsCount
const props = defineProps({
  cartGoodsCount: Number,
  activeRouteName: String
})
</script>

<style lang="less">
.nav-bar {
  color: red;
  background: #ff9800;
  height: 40px;
  line-height: 40px;
  a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    padding: 0 20px;
    &.activeRouteName {
      background: red;
    }
  }
}
</style>
