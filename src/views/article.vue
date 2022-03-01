<template>
  <div v-html="typeCheckChange"></div>
</template>

<script lang="ts" setup>
import typeCheckChange from '@/views/md/typeCheckChange.md?raw'
console.log('typeCheckChange', typeCheckChange)

</script>
