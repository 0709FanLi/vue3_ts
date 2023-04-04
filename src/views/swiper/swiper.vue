<template>
  <div>
    <swiper
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :effect="'cube'"
      :grabCursor="true"
      :cubeEffect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
      ref="swiperRef"
    >
      <swiper-slide>
        <!-- <img src="../../assets/nature-1.jpg" /> -->
        <news1 />
      </swiper-slide>
      <swiper-slide>
        <news2 />
        <!-- <img src="../../assets/nature-2.jpg" /> -->
      </swiper-slide>
      <swiper-slide>
        <news3 />
        <!-- <img src="../../assets/nature-3.jpg" /> -->
      </swiper-slide>
      <swiper-slide>
        <news4 />
        <!-- <img src="../../assets/nature-4.jpg" /> -->
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-cube'
import { EffectCube } from 'swiper'
import news1 from './news1.vue'
import news2 from './news2.vue'
import news3 from './news3.vue'
import news4 from './news4.vue'

const modules: any = [EffectCube]
// const

function onSwiper(swiper: any) {
  console.log('onSwiper--->', swiper)
}
function onSlideChange(swiper: any) {
  console.log('onSlideChange--->', swiper)
}

const swiperRef: any = ref(null)
const swiperObj: any = useSwiper()
console.log('swiperObj---', swiperObj)

// watch(
//   () => swiperRef.value,
//   (cur: any, prev: any) => {
//     console.log('cur, prev', cur, prev)
//     // slideToClickedSlide
//     // if (cur.slideTo) {
//     if (!cur.slideToClickedSlide) return
//     cur.slideToClickedSlide(2)
//     console.log(typeof cur.slideToClickedSlide)

//     // }
//   }
// )
</script>

<style lang="less" scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100vw;
  height: 100vh;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100vh;
}
.swiper-3d,
.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1500px;
}
</style>
