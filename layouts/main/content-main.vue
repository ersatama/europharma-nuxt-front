<template>
  <div class="main-body">
    <div class="main-body-left">
      <popular></popular>
      <special></special>
      <recently></recently>
      <history></history>
      <brands></brands>
    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>
<script>

import popular from '/layouts/main/popular/popular.vue';
import special from '/layouts/main/special/special.vue';
import recently from '/layouts/main/recently/recently.vue';
import history from '/layouts/main/history/history.vue';
import brands from '/layouts/main/brands/brands.vue';
import basket from '/layouts/basket/basket.vue';

export default {
  name: "content-main",
  components: {
    popular,
    special,
    recently,
    history,
    brands,
    basket,
  },
}
</script>
<style>
@import '../../assets/main/content-body.css';
</style>
