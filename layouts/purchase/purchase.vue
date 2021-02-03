<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>Оформление товара</span></div>
      <purchase-body></purchase-body>
    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>

<script>
import basket from '/layouts/basket/basket.vue'
import purchaseBody from '/layouts/purchase/purchase-body'
export default {
  name: "purchase",
  components: {
    basket,
    purchaseBody
  }
}
</script>

<style scoped>
@import 'assets/main/content-body.css';
</style>
