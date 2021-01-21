<template>
  <div class="product-menu">
      <div class="product-menu-list">
        <div class="product-slide" :class="[(url === slide.url)?'product-slide-sel':'']">
          <div class="product-slide-img" :style="{'background-image':'url('+slide.logo+')'}"></div>
          <div class="product-slide-content">
            <div>{{slide.title}}</div>
          </div>
        </div>
        <NuxtLink :to="prefix+slide.url" v-for="(slide,index) in slider" :key="index">
          <div class="product-slide" :class="[(url === slide.url)?'product-slide-sel':'']">
            <div class="product-slide-img" :style="{'background-image':'url('+slide.logo+')'}"></div>
            <div class="product-slide-content">
              <div>{{slide.title}}</div>
            </div>
          </div>
        </NuxtLink>
      </div>
    <div class="product-slide-next"></div>
    <div class="product-slide-prev"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ['url'],
  name: "productMenu",
  data() {
    return {
      prefix: '/catalog',
      slide: {
        url: '/',
        logo: '../img/emart-logo.png',
        title: 'Все товары',
      },
      slider: []
    }
  },
  created() {
    this.getMenu();
  },
  methods: {
    getMenu() {
      let self  = this;
      axios.get('http://127.0.0.1:8000/web/menu')
        .then(function (response) {
          let menu = response.data;
          menu.forEach(function callback(currentValue, index, array) {
            self.slider.push(currentValue);
          });
        });
    }
  }
}
</script>

<style>
@import 'assets/product/productMenu.css';
@import 'assets/swiper.min.css';
@import 'assets/carousel.css';
</style>
