<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <breadCrumb :path="path"></breadCrumb>
    <div class="container-fluid m-0 p-0">
      <div class="main-body">
        <div class="main-body-left cabinet">
          <cabinetMenu :path="path"></cabinetMenu>
          <cabinetReview></cabinetReview>
        </div>
        <div class="main-body-right">
          <basket></basket>
        </div>
      </div>
    </div>
    <footerContent></footerContent>
  </div>
</template>

<script>
import headerContent from '/layouts/header/header-content.vue'
import subMenu from '/layouts/header/sub-menu.vue'
import breadCrumb from '/layouts/header/bread-crumb.vue'
import cabinetMenu from "@/layouts/cabinet/menu/cabinet-menu";
import cabinetReview from "@/layouts/cabinet/review";
import basket from "@/layouts/basket/basket";
import footerContent from "@/layouts/footer/footer-content";
export default {
  name: "index",
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    cabinetMenu,
    cabinetReview,
    basket,
    footerContent,
  },
  data() {
    return {
      path:   [['Главная',''],['Профиль','/cabinet'],['Список отзывов','/reviews']],
    }
  }
}
</script>

<style scoped>

</style>
