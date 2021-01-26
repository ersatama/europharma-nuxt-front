<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>Каталог</span></div>
      <template v-if="status === 0">
        <loader></loader>
      </template>
      <template v-else-if="status === 1">
        <catalogBody :list="items"></catalogBody>
      </template>
      <template v-else>
        <not-found></not-found>
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
import catalogBody from '/layouts/body/catalog'
import Loader from "@/layouts/loader/loader";
import NotFound from "@/layouts/not-found/not-found";
export default {
  components: {
    NotFound,
    Loader,
    basket,
    catalogBody
  },
  name: "catalog-body",
  data() {
    return {
      status: 0,
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
          self.status = 1;
          self.items  = response.data;
        });
    }
  }
}
</script>

<style scoped>

</style>
