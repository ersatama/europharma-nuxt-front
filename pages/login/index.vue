<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <breadCrumb :path="path"></breadCrumb>
    <div class="container-fluid m-0 p-0">
      <loginBody></loginBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from '/layouts/header/header-content.vue'
import subMenu from '/layouts/header/sub-menu.vue'
import breadCrumb from '/layouts/header/bread-crumb.vue'
import loginBody from '/layouts/login/login'
import footerContent from '/layouts/footer/footer-content.vue'
export default {
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    loginBody,
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
