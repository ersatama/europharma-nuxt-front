<template>
  <div class="products-body">
    <productItem :item="item" v-for="(item,index) in items" :key="index" :path="path"></productItem>
  </div>
</template>

<script>
import productItem  from '/layouts/product/product-item'
export default {
  props: ['items','path'],
  components: {
    productItem
  },
  name: "products-body"
}
</script>

<style>
@import 'assets/product/products-body.css';
</style>
