import { log } from 'console'
import { ref, onMounted, onUnmounted } from 'vue'

type mouseRes = {
  x: string
  y: string
}

export default function useMouse(): mouseRes {
  // 被组合式函数封装和管理的状态
  const x: any = ref(0)
  const y: any = ref(0)

  // 组合式函数可以随时更改其状态
  function update(event: any) {
    x.value = event.pageX
    y.value = event.pageY
    console.log(x.value, y.value)
  }
  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  onMounted(() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })
  return { x, y }
}
