<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <breadCrumb :path="path"></breadCrumb>
    <div class="container-fluid m-0 p-0">
      <catalogBody></catalogBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from '/layouts/header/header-content.vue'
import subMenu from '/layouts/header/sub-menu.vue'
import breadCrumb from '/layouts/header/bread-crumb.vue'
import catalogBody from '/layouts/body/catalog-body'
import footerContent from '/layouts/footer/footer-content.vue'

export default {
  components: {
    headerContent,
    subMenu,
    catalogBody,
    footerContent,
    breadCrumb,
  },
  name: "catalog",
  data() {
    return {
      path:   [['Главная',''],['Каталог','/catalog']],
    }
  }
}
</script>

<style scoped>

</style>
