<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <breadCrumb :path="path"></breadCrumb>

    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from '/layouts/header/header-content.vue'
import subMenu from '/layouts/header/sub-menu.vue'
import breadCrumb from '/layouts/header/bread-crumb.vue'
import footerContent from '/layouts/footer/footer-content.vue'
export default {
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    footerContent,
  },
  name: "index",
  data() {
    return {
      path:   [['Главная',''],['Логин','/login']],
    }
  }
}
</script>

<style scoped>

</style>
