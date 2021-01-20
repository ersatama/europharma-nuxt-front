<template>
  <div class="product-menu">
      <div class="product-menu-list">
        <div class="product-slide" :class="[(id === index)?'product-slide-sel':'']" v-for="(slide,index) in slider" :key="index">
          <div class="product-slide-img" :style="{'background-image':'url('+slide.url+')'}"></div>
          <div class="product-slide-content">
            <div>
              {{slide.title}}
            </div>
          </div>
        </div>
      </div>
    <div class="product-slide-next"></div>
    <div class="product-slide-prev"></div>
  </div>
</template>

<script>

export default {
  props: ['id'],
  name: "productMenu",
  data() {
    return {
      slider: [
        {
          url: '../img/emart-logo.png',
          title: 'Все товары',
        },
      ]
    }
  },
  mounted() {
    this.get();
  },
  methods: {
    get() {
      let menu  = [
        {
          url: '../img/smartphone.svg',
          title: 'Смартфоны и гаджеты',
        },
        {
          url: '../img/laptop-computer.svg',
          title: 'Ноутбуки и компьютеры',
        },
        {
          url: '../img/game.svg',
          title: 'Игры',
        },
        {
          url: '../img/home.svg',
          title: 'Все для дома',
        },
        {
          url: '../img/bread.svg',
          title: 'Продукты',
        },
        {
          url: '../img/open-book.svg',
          title: 'Книги',
        },
        {
          url: '../img/gym.svg',
          title: 'Спорт и хобби',
        },
        {
          url: '',
          title: 'Детям',
        },
        {
          url: '',
          title: 'Красота',
        }
      ];
      let self  = this;
      menu.forEach(function callback(currentValue, index, array) {
        self.slider.push(currentValue);
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
