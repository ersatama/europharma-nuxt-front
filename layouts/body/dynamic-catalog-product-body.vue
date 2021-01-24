<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>{{title}}</span></div>
      <template v-if="status === 0">
        <loader></loader>
      </template>
      <template v-else>
        <div>hello world</div>
      </template>
    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import loader from '/layouts/loader/loader'
import notFound from '/layouts/not-found/not-found'
import basket from '/layouts/basket/basket.vue'

export default {
name: "dynamic-catalog-product-body",
  props: ['title'],
  components: {
    loader,
    notFound,
    basket
  },
  data() {
    return {
      status: 0,
      items: []
    }
  },
  created() {
    this.getProductsBySlugAndProduct();
  },
  methods: {
    getProductsBySlugAndProduct() {
      let self    = this;
      let slug    = this.$route.path.split('/')[2];
      let product = this.$route.path.split('/')[3];
      axios.get('http://127.0.0.1:8000/web/products/slug/'+slug+'/'+product)
        .then(function (response) {
          let data    = response.data;
          self.items = response.data;
        });
    }
  }
}
</script>

<style scoped>

</style>
