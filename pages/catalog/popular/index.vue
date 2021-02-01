<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <breadCrumb :path="path"></breadCrumb>
    <div class="container-fluid m-0 p-0">
      <popularBody :path="path"></popularBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>
<script>

import headerContent from '@/layouts/header/header-content.vue'
import subMenu from "@/layouts/header/sub-menu"
import breadCrumb from '/layouts/header/bread-crumb.vue'
import popularBody from '@/layouts/body/popular-body'
import footerContent from "@/layouts/footer/footer-content"

export default {
  name: "index",
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    popularBody,
    footerContent,
  },
  data() {
    return {
      path:   [['Главная',''],['Каталог','/catalog'],['Популярные товары','/popular']],
    }
  },
}
</script>

<style scoped>

</style>
