<template>
  <div>
    <div class="main-body-title main-body-title-next">
      <span>Истории</span>
      <NuxtLink :to="prefix">
        <div class="main-body-title-all">Перейти к историям</div>
      </NuxtLink>
    </div>
    <div class="history-main">

      <swiper ref="swiper" :options="historyOptions">
        <NuxtLink :to="prefix+slide.url" :key="index" v-for="(slide,index) in slider">
          <div class="swiper-slide history-slide">
            <div class="history-slide-title">{{slide.title}}</div>
            <img :src="slide.img" width="184" height="244" alt="">
          </div>
        </NuxtLink>
      </swiper>
      <div class="history-prev"></div>
      <div class="history-next"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
export default {
  data() {
    return {
      prefix: '/history',
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
      slider: []
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
  created() {
    this.getStories();
  },
  methods: {
    getStories() {
      let self  = this;
      axios.get('http://127.0.0.1:8000/web/stories')
        .then(function (response) {
          self.slider = response.data;
        });
    }
  }
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
