<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <carouselSlider></carouselSlider>
    <breadCrumb :path="path"></breadCrumb>
    <div class="container-fluid m-0 p-0">
      <contentBody></contentBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>
<script>

import headerContent from '/layouts/header/header-content.vue'
import subMenu from '/layouts/header/sub-menu.vue'
import carouselSlider from '/layouts/header/carouselSlider.vue'
import breadCrumb from '/layouts/header/bread-crumb.vue'
import contentBody from '/layouts/main/contentMain.vue'
import footerContent from '/layouts/footer/FooterContent.vue'

export default {
  components: {
    headerContent,
    subMenu,
    carouselSlider,
    breadCrumb,
    contentBody,
    footerContent,
  },
  data() {
    return {
      path: ['Главная']
    }
  },
};
</script>
<style>

</style>

