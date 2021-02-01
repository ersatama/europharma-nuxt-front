<template>
  <div class="product-menu">
      <div class="product-menu-list">
        <div class="product-slide" :class="[(url === slide.url)?'product-slide-sel':'']">
          <div class="product-slide-img" :style="{'background-image':'url('+slide.img+')'}"></div>
          <div class="product-slide-content">{{slide.title}}</div>
        </div>
        <NuxtLink :to="prefix+slide.url" v-for="(slide,index) in slider" :key="index">
          <div class="product-slide" :class="[(url === slide.url)?'product-slide-sel':'']">
            <div class="product-slide-img" :style="{'background-image':'url('+slide.img+')'}"></div>
            <div class="product-slide-content">{{slide.title}}</div>
          </div>
        </NuxtLink>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ['url','path'],
  name: "productMenu",
  data() {
    return {
      prefix: '/catalog',
      slide: {
        url: '/',
        img: '/img/emart-logo.png',
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
</style>
