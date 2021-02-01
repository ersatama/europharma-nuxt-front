<template>
  <div>
    <div class="main-body-title main-body-title-next main-body-title-main">
      <span>Недавно просмотренные товары</span>
    </div>
    <product-list :list="items"></product-list>
    <NuxtLink to="/catalog/recently">
      <div class="main-body-title-bottom">Посмотреть все</div>
    </NuxtLink>
  </div>
</template>

<script>
import productList from '/layouts/product/main/list'
import axios from "axios";
export default {
  components: {
    productList
  },
  name: "recently",
  data() {
    return {
      items: []
    }
  },
  created() {
    this.getRecentlyProducts();
  },
  methods: {
    getRecentlyProducts() {
      let self  = this;
      axios.get('http://127.0.0.1:8000/web/products/popular').then(function(response) {
        self.items  = response.data;
      });
    }
  }
}
</script>
<style scoped>

</style>
