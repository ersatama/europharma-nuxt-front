<template>
  <div class="carousel">
    <swiper ref="swiper" :options="swiperOptions">
      <div class="swiper-slide slide" :key="slide.url" v-for="slide in slider">
        <img :src="slide.url" width="100%">
        <div class="slide-content">
          <div class="slide-title">{{slide.title}}</div>
          <div class="slide-desc">{{slide.desc}}</div>
        </div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="slider-prev"></div>
    <div class="slider-next"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
export default {
  components: {
    Swiper,
    SwiperSlide,
    directive
  },
  directives: {
    swiper: directive
  },
  name: "carousel-slider",
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.slider-prev',
          prevEl: '.slider-next'
        },
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
      },
      slider: [
        {
          url: 'img/bg.svg',
          title: 'Покупай иначе',
          desc: 'Тысячи товаров со скидкой',
        },
        {
          url: 'img/bg.png',
          title: 'Турба продажа',
          desc: 'Головокружительные акции'
        },
        {
          url: 'img/bg-2.svg',
          title: 'Детские товары',
          desc: 'Порадует мам и малышей'
        },
        {
          url: 'img/bg-1.svg',
          title: 'Турба продажа',
          desc: 'Порадует мам и малышей'
        },
      ],
    }
  },
  computed: {
    swiper() {
      return this.$refs.swiper.$swiper
    }
  },
  mounted() {
    this.swiper.slideTo(2, 1000, false)
  },
}
</script>

<style>
@import 'assets/header/swiper/swiper.min.css';
@import 'assets/header/carousel-slider.css';
</style>
