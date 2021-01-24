<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>Недавно просмотренные товары</span></div>
    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>

<script>
import basket from '/layouts/basket/basket.vue';
export default {
  name: "recently-body",
  components: {
    basket
  }
}
</script>

<style scoped>

</style>
