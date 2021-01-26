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

import axios from "axios";
import basket from '/layouts/basket/basket.vue'
import productMenu from '/layouts/product/productMenu'
import listBody from '/layouts/body/list'
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
  created() {
    this.getProductsBySlug();
  },
  methods: {
    getProductsBySlug() {
      /*let slug  = this.$route.path.split('/')[2];
      let self  = this;
      axios.get('http://127.0.0.1:8000/web/menu/slug/'+slug)
        .then(function (response) {
          self.items = response.data;
        });*/
    }
  }
}

</script>

<style scoped>

</style>
