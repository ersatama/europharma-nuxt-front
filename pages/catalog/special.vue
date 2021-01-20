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
import headerContent from "@/layouts/header/headerContent";
import subMenu from "@/layouts/header/subMenu";
import specialBody from '@/layouts/body/special-body';
import footerContent from "@/layouts/footer/FooterContent";

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
