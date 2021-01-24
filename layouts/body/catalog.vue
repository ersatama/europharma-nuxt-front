<template>
  <div class="catalog-main">
    <NuxtLink :to="prefix+item.url" v-for="(item,index) in list" :key="index">
      <div class="catalog-item">
        <div class="catalog-item-img" :style="{'background-image': 'url('+item.logo+')'}"></div>
        <div class="catalog-item-content">
          <div>{{ item.title }}</div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['list'],
  name: "catalog",
  data() {
    return {
      prefix: '/catalog'
    }
  }
}
</script>

<style scoped>
@import 'assets/body/catalog.css';
</style>
