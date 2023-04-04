<template>
  <h1>useMouse</h1>
  <h2>{{ x }}，{{ y }}</h2>
</template>

<script setup lang="ts">
import useMouse from './mouse'
const { x, y } = useMouse()
</script>
