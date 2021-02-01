<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <breadCrumb :path="path"></breadCrumb>
    <div class="container-fluid m-0 p-0">
      <verifyBody></verifyBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from "@/layouts/header/header-content"
import subMenu from "@/layouts/header/sub-menu"
import breadCrumb from "@/layouts/header/bread-crumb"
import verifyBody from "@/layouts/restore/verify/verify";
import footerContent from "@/layouts/footer/footer-content";
export default {
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    verifyBody,
    footerContent,
  },
name: "index",
  data() {
    return {
      path:   [['Главная',''],['Восстановление пароля','/restore'],['Код для сброса пароля','/verify']],
    }
  }
}
</script>

<style>

</style>
