<template>
  <div class="inputBox">
    <el-input v-model="kWord" @input="inputChange" placeholder="在 5 day knowledge web 上搜索">
      <template #suffix>
        <el-icon color="#606266" class="el-input__icon"><search /></el-icon>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'

const kWord = ref('')

const inputChange = (val: string | number): void => {
  console.log(kWord.value)
}
</script>

<style lang="less">
.inputBox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-input {
    width: 41vw;
    margin-bottom: 10vh;
    border-radius: 30px;
    box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
  }
  input {
    width: 41vw;
    height: 7.6vh;
    min-width: 20vw;
    border-radius: 30px;
  }
}
</style>
