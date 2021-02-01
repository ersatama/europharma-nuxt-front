<template>
  <div class="sub-menu">
    <NuxtLink :to="prefix+menu[1]" v-for="(menu,index) in submenu" :key="index">
      <div class="sub-menu-item">{{menu[0]}}</div>
    </NuxtLink>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "sub-menu",
  data() {
    return {
      prefix: '/catalog',
      submenu: [
        ['Новинки','/new_items'],
        ['Электроника','/electronics'],
        ['Здоровье','/health'],
        ['Бытовая химия','/household_chemicals'],
        ['Спорт и хобби','/gym'],
        ['Продукты','/products'],
        ['Строительство и ремонт','/construction_and_repair'],
        ['Мать и дитя','/for_children'],
      ]
    }
  }
}
</script>

<style>
@import "assets/header/sub-menu.css";
</style>
