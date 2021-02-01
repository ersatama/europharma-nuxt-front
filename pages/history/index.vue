<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <breadCrumb :path="path"></breadCrumb>
    <div class="container-fluid m-0 p-0">
      <historyBody></historyBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from "/layouts/header/header-content"
import subMenu from "/layouts/header/sub-menu"
import breadCrumb from '/layouts/header/bread-crumb.vue'
import historyBody from "/layouts/body/history-body"
import footerContent from "/layouts/footer/footer-content"

export default {
  name: "index",
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    historyBody,
    footerContent,
  },
  data() {
    return {
      path:   [['Главная',''],['Истории','/history']],
    }
  },
}
</script>

<style scoped>

</style>
