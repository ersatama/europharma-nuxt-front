<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <div class="container-fluid m-0 p-0">
      <recentlyBody></recentlyBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from "/layouts/header/header-content";
import subMenu from "/layouts/header/sub-menu";
import recentlyBody from "/layouts/body/recently-body";
import footerContent from "/layouts/footer/FooterContent";

export default {
  name: "recently",
  components: {
    headerContent,
    subMenu,
    recentlyBody,
    footerContent,
  },
}
</script>

<style scoped>

</style>
