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
@import "assets/main/history.css";
</style>
