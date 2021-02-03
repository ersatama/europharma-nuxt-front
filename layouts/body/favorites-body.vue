<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>Избранное</span></div>
      <listBody :list="items" :path="path"></listBody>
    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import basket from '/layouts/basket/basket.vue'
import listBody from '/layouts/body/list'
export default {
  props: ['path'],
  name: "favorites-body",
  components: {
    basket,
    listBody
  },
  data() {
    return {
      items: []
    }
  },
  created() {
    this.getFavouriteProducts();
  },
  methods: {
    getFavouriteProducts() {
      let self  = this;
      axios.get('http://127.0.0.1:8000/web/products/popular?limit=4')
        .then(function (response) {
          self.items = response.data;
        });
    }
  }
}
</script>

<style scoped>

</style>
