<template>
  <div class="header">
    <div class="header-content">
      <div class="header-left">
        <NuxtLink to="/">
          <div class="logo"></div>
        </NuxtLink>
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
        <NuxtLink to="/about">
          <div class="header-title">О компании</div>
        </NuxtLink>
        <div class="header-title">Хочу в <span>e</span>club</div>
        <NuxtLink to="/catalog/special">
          <div class="header-title">Акции</div>
        </NuxtLink>
        <NuxtLink to="/favorites">
          <div class="header-title">Избранное</div>
        </NuxtLink>
        <button class="login-button-address" @click="modalMap()">
          <div class="login-address-icon"></div>
          <div>Алматы, пр Аль-Фараби 77/8</div>
        </button>
        <button class="login-button">Войти</button>
      </div>
    </div>
    <modalMap></modalMap>
  </div>
</template>

<script>
import modalMap from '/layouts/modal/map/map.vue'
import MenuList from '/layouts/header/menu-list.vue'
export default {
  components: {
    modalMap,
    MenuList,
  },
  name: "header-content",
  data() {
    return {
      menu: false,
    }
  },
  methods: {
  },
}
</script>

<style>
@import 'assets/header/header-content.css';
</style>
