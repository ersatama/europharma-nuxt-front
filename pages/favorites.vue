<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <div class="container-fluid m-0 p-0">
      <favoritesBody></favoritesBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>

import headerContent from '/layouts/header/header-content.vue'
import subMenu from '/layouts/header/sub-menu.vue'
import favoritesBody from '/layouts/body/favorites-body.vue'
import footerContent from '/layouts/footer/FooterContent.vue'

export default {
  name: "favorites",
  components: {
    headerContent,
    subMenu,
    footerContent,
    favoritesBody
  }
}
</script>

<style scoped>

</style>
