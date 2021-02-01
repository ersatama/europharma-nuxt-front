<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <template v-if="status === 0">
      <loader></loader>
    </template>
    <template v-else-if="status === 1">
      <bread-crumb :path="path"></bread-crumb>
      <productDetail :item="item"></productDetail>
    </template>
    <template v-else>
      <notFound></notFound>
    </template>
    <footerContent></footerContent>
  </div>
</template>

<script>

import axios from 'axios'
import headerContent from '@/layouts/header/header-content.vue'
import subMenu from "@/layouts/header/sub-menu"
import breadCrumb from "@/layouts/header/bread-crumb";
import loader from "@/layouts/loader/loader";
import notFound from '/layouts/not-found/not-found'
import productDetail from '/layouts/product/detail'
import footerContent from "@/layouts/footer/footer-content";

export default {
  props: ['path'],
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    loader,
    notFound,
    productDetail,
    footerContent,
  },
  name: "product",
  data() {
    return {
      status: 0,
      url: '',
      item: {}
    }
  },
  created() {
    let path  = this.$route.path.split('/');
    this.url  = path[path.length - 1];
    this.getProductBySlug();
  },
  methods: {
    getProductBySlug() {
      let self  = this;
      axios.get('http://127.0.0.1:8000/web/product/slug/'+this.url).then(function(response) {
        let data  = response.data;
        if (Object.keys(data).length > 0) {
          self.path.push([data.title,data.url]);
          self.item = data;
          self.status = 1;
        } else {
          self.status = 2;
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
