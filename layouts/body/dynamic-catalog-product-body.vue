<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>{{title}}</span></div>
      <productMenu :url="url"></productMenu>
      <listMenuProduct :list="items" :status="status"></listMenuProduct>
    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>

<script>

import productMenu from '/layouts/product/productMenu'
import loader from '/layouts/loader/loader'
import notFound from '/layouts/not-found/not-found'
import basket from '/layouts/basket/basket.vue'
import listMenuProduct from '/layouts/body/list-menu-product'
/*
import catalogMenu from '/layouts/product/catalog-menu'
import productsBody from '/layouts/product/products-body'

<catalogMenu :filter="filter"></catalogMenu>
          <productsBody :items="items"></productsBody>
 */
export default {
  name: "dynamic-catalog-product-body",
  props: ['title','items','status'],
  components: {
    loader,
    notFound,
    basket,
    productMenu,
    listMenuProduct
  },
  data() {
    return {
      url:  '/'+this.$route.path.split('/')[2],
    }
  },
  methods: {
    getProductsBySlugAndProduct() {
      /*let self    = this;
      let product = this.$route.path.split('/')[3];
      axios.get('http://127.0.0.1:8000/web/products/category/'+product)
        .then(function (response) {
          let data    = response.data;
          self.status = 1;
          self.filter = data.filter;
          self.items  = data.items;
        });*/
    }
  }
}
</script>

<style>
@import 'assets/product/catalog-menu.css';
</style>
