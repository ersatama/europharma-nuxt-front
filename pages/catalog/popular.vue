<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <div class="container-fluid m-0 p-0">
      <popularBody></popularBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>
<script>

import headerContent from '@/layouts/header/header-content.vue'
import subMenu from "@/layouts/header/sub-menu"
import popularBody from '~/layouts/body/popular-body';
import footerContent from "@/layouts/footer/footer-content"

export default {
  name: "popular.vue",
  components: {
    headerContent,
    subMenu,
    popularBody,
    footerContent,
  },
}
</script>

<style scoped>

</style>
