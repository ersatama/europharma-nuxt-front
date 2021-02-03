<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <breadCrumb :path="path"></breadCrumb>
    <div class="container-fluid m-0 p-0">
      <favoritesBody :path="path"></favoritesBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>

import headerContent from '/layouts/header/header-content.vue'
import subMenu from '/layouts/header/sub-menu.vue'
import breadCrumb from '/layouts/header/bread-crumb.vue'
import favoritesBody from '/layouts/body/favorites-body.vue'
import footerContent from '/layouts/footer/footer-content.vue'

export default {
  name: "index",
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    footerContent,
    favoritesBody
  },
  data() {
    return {
      path: [['Главная',''],['Избранное','/favorites']]
    }
  },
}
</script>

<style scoped>

</style>
