<template>
  <div>
    <div class="main-body-title main-body-title-main">
      <span>Популярные товары</span>
    </div>
    <product-list :list="items" :path="path"></product-list>
    <NuxtLink to="/catalog/popular">
      <div class="main-body-title-bottom">Посмотреть все</div>
    </NuxtLink>
  </div>
</template>
<script>
import axios from 'axios'
import productList from '/layouts/product/main/list'

export default {
  name: "popular",
  components: {
    productList
  },
  data() {
    return {
      items: [],
      path: [['Главная',''],['Каталог','/catalog'],['Популярные товары','/popular']]
    }
  },
  created() {
    this.getPopularProducts();
  },
  methods: {
    getPopularProducts() {
      let self  = this;
      axios.get('http://127.0.0.1:8000/web/products/popular').then(function(response) {
        self.items  = response.data;
      });
    }
  }
}
</script>
