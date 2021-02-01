<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <breadCrumb :path="path"></breadCrumb>
    <div class="container-fluid m-0 p-0">
      <restoreBody></restoreBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from "@/layouts/header/header-content"
import subMenu from "@/layouts/header/sub-menu"
import breadCrumb from "@/layouts/header/bread-crumb"
import restoreBody from "@/layouts/restore/restore";
import footerContent from "@/layouts/footer/footer-content";

export default {
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    restoreBody,
    footerContent,
  },
  name: "index",
  data() {
    return {
      path:   [['Главная',''],['Восстановление пароля','/restore']],
    }
  }
}
</script>

<style scoped>

</style>
