<template>
  <div class="sub-menu">
    <div class="sub-menu-item" v-for="(menu,index) in submenu" :key="index">
      {{menu.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "subMenu",
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
.sub-menu {
  margin: 20px auto 20px auto;
  display: flex;
  justify-content: center;
}
.sub-menu-item {
  font-size: 18px;
  color: #37424D;
  margin: 0 10px 0 10px;
}
</style>
