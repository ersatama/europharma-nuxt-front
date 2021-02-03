<template>
  <div class="row main-body-items">
    <item v-for="(item,index) in list" :key="index" :item="item" :path="path"></item>
  </div>
</template>

<script>
import item from '/layouts/product/product-item.vue'
export default {
  components: {
    item
  },
  props: ['list','path'],
}
</script>
<style scoped>

</style>
