<template>

<swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="h-[500px] first-carousel"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>

   
</template>

<script setup>
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper.min.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
const modules = [Navigation, Pagination, Scrollbar, A11y]
 function onSwiper (swiper) {
        console.log(swiper);
      }
      function onSlideChange  ()  {
        console.log('slide change');
      }

</script>
<style scoped>
 
</style>