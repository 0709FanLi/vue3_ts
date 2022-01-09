<template>
  <nav-bar :cartGoodsCount="cartGoodsCount" :activeRouteName="activeRouteName" />
  <router-view />
</template>

<script setup lang="ts">
import NavBar from '@/components/navBar/index.vue'
import { useStore } from '@/store'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()
const cartGoodsCount = computed((): number => {
  return store.state.shoppingCart.length
})
const activeRouteName = computed((): string => {
  console.log('route.name', route.name)
  return route.name?.toString() || ''
})
</script>
