<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <div class="container-fluid m-0 p-0">
      <historyBody></historyBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from "/layouts/header/header-content"
import subMenu from "/layouts/header/sub-menu"
import historyBody from "/layouts/body/history-body"
import footerContent from "/layouts/footer/FooterContent"

export default {
  name: "history",
  components: {
    headerContent,
    subMenu,
    historyBody,
    footerContent,
  },
}
</script>

<style scoped>

</style>
