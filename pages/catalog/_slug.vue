<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <breadCrumb :path="path"></breadCrumb>
    <div class="container-fluid m-0 p-0">
      <dynamicCatalogBody :title="title"></dynamicCatalogBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from '/layouts/header/headerContent.vue'
import subMenu from '/layouts/header/subMenu.vue'
import breadCrumb from '/layouts/header/breadCrumb.vue'
import footerContent from "@/layouts/footer/FooterContent";
import dynamicCatalogBody from '/layouts/body/dynamic-catalog-body'
import axios from "axios";
export default {
  components: {
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
      path:   ['Главная','Каталог'],
      title: ''
    }
  },
  methods: {
    getCatalogBySlug(slug) {
      let self  = this;
      let path  = this.$route.path.split('/');
      axios.get('http://127.0.0.1:8000/web/menu/slug/'+path[2])
        .then(function (response) {
          let data    = response.data;
          self.title  = data;
          self.path.push(data);
        });
    }
  }
}
</script>
