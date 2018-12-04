<template>
  <div class="jiao">
    <swiper :options="swiperOption">
      <swiper-slide style="width: 100%">
        <img src="../assets/image/b1.jpg" alt="">
      </swiper-slide>
      <swiper-slide style="width: 100%">
        <img src="../assets/image/b2.jpg" alt="">
      </swiper-slide>
      <swiper-slide style="width: 100%">
        <img src="../assets/image/b3.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: true,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          noSwiping: true,
          preventInteractionOnTransition: true
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
  .swiper-container {
    border-radius: 15px;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>
