<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <breadCrumb :path="path"></breadCrumb>
    <div class="container-fluid m-0 p-0">
      <purchaseBody></purchaseBody>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from "@/layouts/header/header-content";
import subMenu from "@/layouts/header/sub-menu";
import footerContent from "@/layouts/footer/footer-content";
import purchaseBody from '/layouts/purchase/purchase';
import breadCrumb from "@/layouts/header/bread-crumb";
export default {
  name: "index",
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    purchaseBody,
    footerContent,
  },
  data() {
    return {
      path: [['Главная',''],['Оформление товара','/purchase']]
    }
  },
}
</script>

<style scoped>

</style>
