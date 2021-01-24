<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <carouselSlider></carouselSlider>
    <div class="container-fluid m-0 p-0">
      <contentBody></contentBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>
<script>

import headerContent from '/layouts/header/header-content.vue'
import subMenu from '/layouts/header/sub-menu.vue'
import carouselSlider from '/layouts/header/carousel-slider.vue'
import contentBody from '/layouts/main/contentMain.vue'
import footerContent from '/layouts/footer/footer-content.vue'

export default {
  components: {
    headerContent,
    subMenu,
    carouselSlider,
    contentBody,
    footerContent,
  },
};
</script>
<style>

</style>

