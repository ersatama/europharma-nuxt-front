<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>{{title}}</span></div>
      <div class="catalog-body">
        <catalogMenu :filter="filter"></catalogMenu>
        <productsBody :items="items"></productsBody>
      </div>
    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>

<script>

import loader from '/layouts/loader/loader'
import notFound from '/layouts/not-found/not-found'
import catalogMenu from '/layouts/product/catalog-menu'
import productsBody from '/layouts/product/products-body'
import basket from '/layouts/basket/basket.vue'

export default {
  name: "dynamic-item-body",
  props: ['title','items','status','filter'],
  components: {
    loader,
    notFound,
    catalogMenu,
    productsBody,
    basket
  }
}

</script>

<style>
@import 'assets/product/catalog-menu.css';
</style>
