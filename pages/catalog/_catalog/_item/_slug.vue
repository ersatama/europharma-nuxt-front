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
        <dynamicItemBody :title="title" :items="items" :status="status" :filter="filter" :path="path"></dynamicItemBody>
      </div>
    </template>
    <template v-else>
      <notFound></notFound>
    </template>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from '/layouts/header/header-content.vue'
import subMenu from '/layouts/header/sub-menu.vue'
import breadCrumb from '/layouts/header/bread-crumb.vue'
import loader from '/layouts/loader/loader'
import notFound from '/layouts/not-found/not-found'
import dynamicItemBody from '/layouts/body/dynamic-item-body'
import footerContent from "@/layouts/footer/footer-content";
import axios from "axios";
export default {
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    loader,
    notFound,
    dynamicItemBody,
    footerContent
  },
  data() {
    return {
      status: 0,
      path:   [['Главная',''],['Каталог','/catalog']],
      title:  '',
      items:  [],
      filter: {}
    }
  },
  created() {
    this.getItemBySlugAndProductAndItem();
  },
  methods: {
    getItemBySlugAndProductAndItem() {
      let self  = this;
      let path  = this.$route.path.split('/');
      axios.get('http://127.0.0.1:8000/web/menu/slug/'+path[2]+'/'+path[3]+'/'+path[4])
        .then(function (response) {
          let data    = response.data;
          if (data.path.length > 2) {
            self.status = 1;
            data.path.forEach(function (value,key,arr) {
              self.path.push(arr[key]);
            });
            self.title  = data.path[2][0];
            self.filter = data.menu.filter;
            self.items  = data.list;
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
