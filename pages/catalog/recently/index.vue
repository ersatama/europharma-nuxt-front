<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <breadCrumb :path="path"></breadCrumb>
    <div class="container-fluid m-0 p-0">
      <recentlyBody></recentlyBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from "/layouts/header/header-content"
import subMenu from "/layouts/header/sub-menu"
import breadCrumb from '/layouts/header/bread-crumb.vue'
import recentlyBody from "/layouts/body/recently-body"
import footerContent from "/layouts/footer/footer-content"

export default {
  name: "index",
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    recentlyBody,
    footerContent,
  },
  data() {
    return {
      path:   [['Главная',''],['Каталог','/catalog'],['Недавно просмотренные товары','/recently']],
    }
  },
}
</script>

<style scoped>

</style>
