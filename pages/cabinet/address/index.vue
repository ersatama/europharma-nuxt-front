<template>
  <div>
    <headerContent></headerContent>
    <subMenu></subMenu>
    <breadCrumb :path="path"></breadCrumb>
    <div class="container-fluid m-0 p-0">
      <div class="main-body">
        <div class="main-body-left cabinet">
          <cabinetMenu :path="path"></cabinetMenu>
          <cabinetAddress></cabinetAddress>
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
import cabinetMenu from '/layouts/cabinet/menu/cabinet-menu'
import cabinetAddress from '/layouts/cabinet/address-cabinet'
import basket from '/layouts/basket/basket.vue'
import footerContent from '/layouts/footer/footer-content.vue'
export default {
  name: "index",
  components: {
    headerContent,
    subMenu,
    breadCrumb,
    cabinetMenu,
    cabinetAddress,
    basket,
    footerContent,
  },
  data() {
    return {
      path:   [['Главная',''],['Профиль','/cabinet'],['Список адресов доставки','/address']],
    }
  }
}
</script>

<style scoped>

</style>
