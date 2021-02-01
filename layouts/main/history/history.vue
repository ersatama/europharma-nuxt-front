<template>
  <div class="history">
    <div class="main-body-title main-body-title-next main-body-title-main main-body-title-center">
      <span>Истории</span>
    </div>
    <div class="history-main">
      <NuxtLink :to="prefix+slide.url" :key="index" v-for="(slide,index) in slider">
        <div class="swiper-slide history-slide">
          <div class="history-slide-title">{{slide.title}}</div>
          <img :src="slide.img" width="100%" alt="">
        </div>
      </NuxtLink>
    </div>
    <NuxtLink :to="prefix">
      <div class="main-body-title-bottom">Перейти к историям</div>
    </NuxtLink>
  </div>
</template>

<script>
import axios from "axios";
import { Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
export default {
  data() {
    return {
      prefix: '/history',
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

<style>
.history {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto 0 auto;
}
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
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: min-content;
    margin: 30px auto 0 auto;
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
