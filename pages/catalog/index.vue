<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <div class="container-fluid m-0 p-0">
      <catalogBody></catalogBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from '/layouts/header/headerContent.vue'
import subMenu from '/layouts/header/subMenu.vue'
import catalogBody from '/layouts/body/catalog-body'
import footerContent from '/layouts/footer/FooterContent.vue'
export default {
  components: {
    headerContent,
    subMenu,
    catalogBody,
    footerContent,
  },
  name: "catalog"
}
</script>

<style scoped>

</style>
