<template>
  <div class="main-body">
    <div class="main-body-left">
      <popularItems></popularItems>
      <specialItems></specialItems>
      <recentlyItems></recentlyItems>
      <historyItems></historyItems>
      <brands></brands>
    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>
<script>
import popularItems from '/layouts/PopularItems.vue';
import specialItems from '/layouts/SpecialItems.vue';
import recentlyItems from '/layouts/RecentlyItems.vue';
import historyItems from '/layouts/main/history/HistoryItems.vue';
import brands from '/layouts/main/brands/brands.vue';
import Basket from '/layouts/basket/Basket.vue';
export default {
  name: "MainBody",
  components: {
    popularItems,
    specialItems,
    recentlyItems,
    Basket,
    historyItems,
    brands
  },
  data() {
    return {
    }
  }
}
</script>
<style>
@import '../../assets/mainbody.css';
</style>
