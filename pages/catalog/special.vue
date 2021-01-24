<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <div class="container-fluid m-0 p-0">
      <specialBody></specialBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from "@/layouts/header/header-content";
import subMenu from "@/layouts/header/sub-menu";
import specialBody from '@/layouts/body/special-body';
import footerContent from "@/layouts/footer/footer-content";

export default {
  name: "special",
  components: {
    headerContent,
    subMenu,
    specialBody,
    footerContent,
  },
}
</script>

<style scoped>

</style>
