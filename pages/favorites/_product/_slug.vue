<template>
  <productItem :path="path"></productItem>
</template>

<script>
import productItem from "/layouts/product/product";
export default {
  components: {
    productItem
  },
  data() {
    return {
      path: [['Главная',''],['Избранное','/favorites']]
    }
  }
}
</script>

<style scoped>

</style>
