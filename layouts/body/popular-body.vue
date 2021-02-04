<template>
  <div class="main-body">
    <div class="main-body-left">
      <template v-if="status === 0">
        <Loader></Loader>
      </template>
      <template v-else-if="status === 1">
        <div class="main-body-title"><span>Популярные товары</span></div>
        <productMenu :url="url"></productMenu>
        <listBody :list="items" :path="path"></listBody>
      </template>
    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import basket from '/layouts/basket/basket'
import Loader from "@/layouts/loader/loader"
import productMenu from '/layouts/product/productMenu'
import listBody from '/layouts/body/list'

export default {
  props: ['path'],
  name: "popular-body",
  components: {
    basket,
    Loader,
    productMenu,
    listBody
  },
  data() {
    return {
      url: '/',
      status: 0,
      items: []
    }
  },
  created() {
    this.getPopularProducts();
  },
  methods: {
    getPopularProducts() {
      let self  = this;
      axios.get('http://127.0.0.1:8000/web/products/popular')
        .then(function (response) {
          self.status = 1;
          self.items = response.data;
        });
    }
  }
}
</script>

<style>

</style>
