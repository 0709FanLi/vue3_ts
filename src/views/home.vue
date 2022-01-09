<template>
  <h1 v-for="(item,key) in routerNames" :key="key">{{item}}</h1>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue';

const store = useStore();

const routerNames = computed(():string[]=>store.state.routerNames)

</script>
