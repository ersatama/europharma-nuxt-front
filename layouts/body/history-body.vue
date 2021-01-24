<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>Истории</span></div>
    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>

<script>
import basket from "@/layouts/basket/basket";
export default {
  name: "history-body",
  components: {
    basket
  }
}
</script>

<style scoped>

</style>
