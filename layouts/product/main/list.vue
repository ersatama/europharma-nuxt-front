<template>
  <div class="row main-body-items">
    <item v-for="(item,index) in list" :key="index" :product="item"></item>
  </div>
</template>

<script>
import item from '/layouts/product/item.vue'
export default {
  components: {
    item
  },
  props: ['list'],
  name: "list",
}
</script>
<style scoped>

</style>
