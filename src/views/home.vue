<template>
  <div class="box">
    <el-card
      shadow="hover"
      v-for="(item,key) in routerPathes"
      :key="key"
      class="box-card"
    >
      <router-link :to="item">{{item}}</router-link>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue';

const store = useStore();

const routerPathes = computed(():string[]=>store.state.routerPathes)

</script>
<style>
.box{
  padding: 20px;
}
.box-card{
  display: inline-block;
  margin-left: 30px;
  float:left;
}

</style>
