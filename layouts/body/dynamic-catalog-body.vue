<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>{{title}}</span></div>

    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import basket from '/layouts/basket/Basket.vue'
import catalogBody from "@/layouts/body/catalog";

export default {
  props: ['title'],
  components: {
    basket,
  },
  name: "dynamic-catalog-body",
  data() {
    return {}
  },
}

</script>

<style scoped>

</style>
