<template>
  <div class="sub-menu">
    <div class="sub-menu-item" v-for="(menu,index) in submenu" :key="index">
      {{menu.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "sub-menu",
  data() {
    return {
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
  }
}
</script>

<style>
@import "assets/header/sub-menu.css";
</style>
