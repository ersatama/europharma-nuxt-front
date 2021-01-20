<template>
  <div>
    <div class="main-body-title main-body-title-next">
      <span>Истории</span>
      <NuxtLink to="/history">
        <div class="main-body-title-all">Перейти к историям</div>
      </NuxtLink>
    </div>
    <div class="history-main">
      <swiper ref="swiper" :options="historyOptions">
        <div class="swiper-slide history-slide" :key="slide.url" v-for="slide in slider">
          <div class="history-slide-title">{{slide.title}}</div>
          <img :src="slide.url" width="184" height="244" alt="">
        </div>
      </swiper>
      <div class="history-prev"></div>
      <div class="history-next"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
export default {
  data() {
    return {
      historyOptions: {
        navigation: {
          nextEl: '.history-prev',
          prevEl: '.history-next'
        },
        freeMode: true,
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        loopFillGroupWithBlank: true,
      },
      slider: [
        {
          url: 'img/h-1.png',
          title: 'Выгодная покупка',
          desc: 'Тысячи товаров со скидкой',
        },
        {
          url: 'img/h-2.png',
          title: 'Доставка без уловок',
          desc: 'Тысячи товаров со скидкой',
        },
        {
          url: 'img/h-3.png',
          title: 'Интерьер на даче',
          desc: 'Тысячи товаров со скидкой',
        },
        {
          url: 'img/h-4.png',
          title: 'Скидки каждый день',
          desc: 'Тысячи товаров со скидкой',
        },
        {
          url: 'img/h-5.png',
          title: 'По городу ветерком',
          desc: 'Тысячи товаров со скидкой',
        },
        {
          url: 'img/h-5.png',
          title: 'По городу ветерком',
          desc: 'Тысячи товаров со скидкой',
        },
        {
          url: 'img/h-5.png',
          title: 'По городу ветерком',
          desc: 'Тысячи товаров со скидкой',
        },
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive
  },
  name: "history",
}
</script>

<style scoped>
  .history-slide {
    width: 184px;
    height: 244px;
    position: relative;
    margin: 0 10px 0 10px;
    cursor: pointer;
  }
  .history-slide:first-child {
    margin-left: 0;
  }
  .history-slide:last-child {
    margin-right: 0;
  }
  .history-slide-title {
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 15px;
  }
  .history-main {
    margin-top: 32px;
    position: relative;
  }
  .history-next, .history-prev {
    width: 40px;
    height: 40px;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    z-index: 10;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
    transform: translate(0,-40%);
    background: url('/img/next.svg') #fff no-repeat center;
    cursor: pointer;
  }
  .history-next {
    left: 0;
  }
  .history-prev {
    right: 0;
    transform: translate(0,-40%) rotate(180deg);
  }
</style>
