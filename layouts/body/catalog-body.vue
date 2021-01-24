<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>Каталог</span></div>
      <catalogBody :list="items"></catalogBody>
    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import basket from '/layouts/basket/basket'
import catalogBody from '/layouts/body/catalog'

export default {
  components: {
    basket,
    catalogBody
  },
  name: "catalog-body",
  data() {
    return {
      items: []
    }
  },
  created() {
    this.getMenu();
  },
  methods: {
    getMenu() {
      let self  = this;
      axios.get('http://127.0.0.1:8000/web/menu')
        .then(function (response) {
          self.items = response.data;
        });
    }
  }
}
</script>

<style scoped>

</style>
