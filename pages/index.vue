<template>
  <div>
    <div class="header">
      <div class="header-content">
        <div class="header-left">
          <div class="logo"></div>
          <div class="catalog" :class="{'catalog-selected':menu}" onselectstart="return false" @click="menu = !menu">
            <div class="catalog-icon"></div>
            <div class="catalog-text">Каталог</div>
          </div>
          <MenuList :menu="menu"></MenuList>
          <div class="search">
            <input class="search-input" type="text" placeholder="Искать на emart..">
            <button class="search-button">Найти</button>
          </div>
        </div>
        <div class="header-right">
          <div class="header-title">О компании</div>
          <div class="header-title">Хочу в <span>e</span>club</div>
          <div class="header-title">Акции</div>
          <button class="login-button-address" @click="modalMap()">
            <div class="login-address-icon"></div>
            <div>Алматы, пр Аль-Фараби 77/8</div>
          </button>
          <button class="login-button">Войти</button>
        </div>
      </div>
      <modalMap></modalMap>
    </div>
    <div class="sub-menu">
      <div class="sub-menu-item" v-for="(menu,index) in submenu" :key="index">
        {{menu.title}}
      </div>
    </div>
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
    <div class="breadcrumb-title">
      <span>Главная</span>
      <span> > </span>
      <span>Растим малыша</span>
      <span> > </span>
      <span>Подгузники для детей</span>
    </div>
    <div class="container-fluid m-0 p-0">
      <MainBody></MainBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
import MainBody from '/layouts/main/MainBody.vue'
import MenuList from '/layouts/MenuList.vue'
import footerContent from '/layouts/footer/FooterContent.vue';
import modalMap from '/layouts/modal/map/map.vue';
export default {
  components: {
    Swiper,
    SwiperSlide,
    MainBody,
    MenuList,
    footerContent,
    modalMap
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      menu: false,
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
      submenu: [
        {
          title: 'Новинки',
        },
        {
          title: 'Электроника',
        },
        {
          title: 'Здоровье',
        },
        {
          title: 'Бытовая химия',
        },
        {
          title: 'Спорт и отдых',
        },
        {
          title: 'Продукты питания',
        },
        {
          title: 'Строительство и ремонт',
        },
        {
          title: 'Детям',
        },
        {
          title: 'Мамам',
        },
      ]
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
  methods: {
    modalMap() {
      //$('.bd-example-modal-lg').modal('toggle');
    }
  }
};
</script>
<style>
@import 'assets/header.css';
@import 'assets/carousel.css';
@import 'assets/swiper.min.css';
@import 'assets/slider.css';
body {
  background: #fff !important;
}
</style>

