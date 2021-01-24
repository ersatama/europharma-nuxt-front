<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <template v-if="status === 0">
      <loader></loader>
    </template>
    <template v-else-if="status === 1">
      <breadCrumb :path="path"></breadCrumb>
      <div class="container-fluid m-0 p-0">
        <dynamicCatalogProductBody :title="title"></dynamicCatalogProductBody>
      </div>
    </template>
    <template v-else>
      <notFound></notFound>
    </template>
    <footerContent></footerContent>
  </div>
</template>

<script>
import axios from "axios";
import headerContent from '/layouts/header/header-content.vue'
import subMenu from '/layouts/header/sub-menu.vue'
import breadCrumb from '/layouts/header/bread-crumb.vue'
import loader from '/layouts/loader/loader'
import notFound from '/layouts/not-found/not-found'
import dynamicCatalogProductBody from "/layouts/body/dynamic-catalog-product-body";
import footerContent from "@/layouts/footer/footer-content";
export default {
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    loader,
    notFound,
    dynamicCatalogProductBody,
    footerContent,
  },
  created() {
    this.getCatalogBySlugAndProduct();
  },
  data() {
    return {
      status: 0,
      path:   [['Главная',''],['Каталог','/catalog']],
      title:  '',
    }
  },
  methods: {
    getCatalogBySlugAndProduct() {
      let self  = this;
      let path  = this.$route.path.split('/');
      axios.get('http://127.0.0.1:8000/web/menu/slug/'+path[2]+'/'+path[3])
        .then(function (response) {
          let data    = response.data;
          if (typeof data === 'object' && data.length > 0) {
            let arr     = self.path.concat(data);
            self.status = 1;
            self.title  = data[(data.length - 1)][0];
            self.path   = arr;
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
