<template>

  <div>
    <div class="header">
      <div class="header-content">
        <div class="header-left">
          <div class="logo"></div>
          <div class="catalog">
            <div class="catalog-icon"></div>
            <div class="catalog-text">Каталог</div>
            <div class="catalog-dropdown"></div>
          </div>
          <div class="search">
            <div class="search-icon"></div>
            <div class="search-input">
              <input type="text" placeholder="Искать на emart..">
            </div>
          </div>
        </div>
        <div class="header-right">
          <div class="header-title">О компании</div>
          <div class="header-title">Хочу в <span>e</span>club</div>
          <div class="header-title">Акции</div>
          <button class="login-button-address">Алматы, пр Аль-Фараби 77/8</button>
          <button class="login-button">Войти</button>
        </div>
      </div>
    </div>
    <div class="carousel">
      <agile>
        <div class="slide" v-for="(item, index) in slider" :key="index" :style="{'background-image':  item.url }">
          <h3>{{item.url}}</h3>
        </div>
      </agile>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      slider: [
        {
          url: '/img/bg.png'
        },
        {
          url: '/img/bg-1.svg'
        }
      ]
    }
  },
};
</script>
<style>
@import 'assets/header.css';
@import 'assets/carousel.css';
@import 'assets/swiper.min.css';
</style>

