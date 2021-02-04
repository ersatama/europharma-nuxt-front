<template>
  <div>
    <NuxtLink to="/catalog/special">
      <div class="main-body-title main-body-title-next main-body-title-main">
        <span>Акции и специальные предложения</span>
      </div>
    </NuxtLink>
    <product-list :list="items" :path="path"></product-list>
    <NuxtLink to="/catalog/special">
      <div class="main-body-title-bottom">Посмотреть все</div>
    </NuxtLink>
  </div>
</template>

<script>
import productList from '/layouts/product/main/list'
import axios from "axios";
export default {
  name: "special",
  components: {
    productList
  },
  data() {
    return {
      items: [],
      path: [['Главная',''],['Каталог','/catalog'],['Акции и специальные предложения','/special']]
    }
  },
  created() {
    this.getSpecialProducts();
  },
  methods: {
    getSpecialProducts() {
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
