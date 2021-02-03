<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>Акции и специальные предложения</span></div>
      <div class="menu">
        <button class="menu-item" :class="[(sel === index)?'menu-item-sel':'']" v-for="(field,index) in menu" :key="index" @click="sel = index">{{field.title}}</button>
      </div>
      <productMenu :url="url"></productMenu>
      <listBody :list="items" :path="path"></listBody>
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

export default {
  props: ['path'],
  name: "special-body",
  components: {
    basket,
    productMenu,
    listBody,
  },
  data() {
    return {
      url: '/',
      sel: 0,
      menu: [
        {
          title: 'Все акции',
        },
        {
          title: 'Членам eClub',
        },
        {
          title: 'Комплекты',
        },
      ],
      items: []
    }
  },
  created() {
    this.getSpecialProducts();
  },
  methods: {
    getSpecialProducts() {
      let self  = this;
      axios.get('http://127.0.0.1:8000/web/products/special')
        .then(function (response) {
          self.items = response.data;
        });
    }
  }
}
</script>

<style scoped>
@import 'assets/body/special-body.css';
</style>
