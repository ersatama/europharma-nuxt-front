<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>{{title}}</span></div>
      <productMenu :url="url"></productMenu>
      <listMenu :list="items" :status="status"></listMenu>
    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>

<script>

import basket from '/layouts/basket/basket.vue'
import productMenu from '/layouts/product/productMenu'
import listMenu from '/layouts/body/list-menu'
export default {
  props: ['title','items','status'],
  components: {
    basket,
    productMenu,
    listMenu
  },
  name: "dynamic-catalog-body",
  data() {
    return {
      url:  '/'+this.$route.path.split('/')[2],
    }
  },
}

</script>

<style scoped>

</style>
