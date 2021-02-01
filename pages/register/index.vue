<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <breadCrumb :path="path"></breadCrumb>
    <div class="container-fluid m-0 p-0">
      <registerBody></registerBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from '/layouts/header/header-content.vue'
import subMenu from '/layouts/header/sub-menu.vue'
import breadCrumb from '/layouts/header/bread-crumb.vue'
import registerBody from '/layouts/register/register'
import footerContent from '/layouts/footer/footer-content.vue'
export default {
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    registerBody,
    footerContent,
  },
  name: "index",
  data() {
    return {
      path:   [['Главная',''],['Регистрация','/register']],
    }
  }
}
</script>

<style >

</style>
