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
        <dynamicCatalogBody :title="title" :items="items" :status="status"></dynamicCatalogBody>
      </div>
    </template>
    <template v-else>
      <not-found></not-found>
    </template>
    <footerContent></footerContent>
  </div>
</template>

<script>

import axios from "axios";
import headerContent from '/layouts/header/header-content.vue'
import subMenu from '/layouts/header/sub-menu.vue'
import breadCrumb from '/layouts/header/bread-crumb.vue'
import footerContent from "@/layouts/footer/footer-content";
import dynamicCatalogBody from '/layouts/body/dynamic-catalog-body'
import Loader from "@/layouts/loader/loader";
import NotFound from "@/layouts/not-found/not-found";

export default {

  components: {
    NotFound,
    Loader,
    headerContent,
    subMenu,
    breadCrumb,
    footerContent,
    dynamicCatalogBody
  },
  created() {
    this.getCatalogBySlug();
  },
  data() {
    return {
      path:   [['Главная',''],['Каталог','/catalog']],
      title: '',
      items: [],
      status: 0
    }
  },
  methods: {
    getCatalogBySlug(slug) {
      let self  = this;
      let path  = this.$route.path.split('/');
      axios.get('http://127.0.0.1:8000/web/menu/slug/'+path[2])
        .then(function (response) {
          let data    = response.data;
          if (Object.keys(data).length > 0) {
            self.status = 1;
            self.title  = data.path[0];
            self.path.push(data.path);
            self.items  = data.list;
          } else {
            self.status = 2;
          }
        });
    }
  }
}
</script>
