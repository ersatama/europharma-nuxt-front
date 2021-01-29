<template>
  <div class="list">
    <div class="list-product-all" v-if="status === 1">
      <div class="list-product-item" v-for="(item,index) in list" :key="index">
        <NuxtLink :to="$route.path+item.url">
          <div class="list-product-item-title">{{ item.title }}</div>
        </NuxtLink>
      </div>
    </div>
    <div v-else-if="status === 0">
      <loader></loader>
    </div>
    <div v-else>
      <notFound></notFound>
    </div>
  </div>
</template>

<script>
import loader from '/layouts/loader/loader'
import notFound from '/layouts/not-found/not-found'
export default {
  components: {
    loader,
    notFound
  },
  props: ['list','status'],
  name: "list-menu-product"
}
</script>

<style>
@import 'assets/body/list-menu-product.css';
</style>
