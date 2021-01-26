<template>
  <div class="catalog-main">
      <div class="catalog-item" v-for="(item,index) in list" :key="index">
        <div class="catalog-item-content">
          <NuxtLink :to="prefix+item.url">
            <div class="catalog-item-content-title">{{ item.title }}</div>
          </NuxtLink>
          <div class="catalog-item-content-list">
            <NuxtLink :to="prefix+item.url+category.url" v-for="(category,id) in item.categories" :key="id" v-show="id < 6">
              <div class="catalog-item-content-category">{{category.title}}</div>
            </NuxtLink>
            <div class="catalog-item-content-category text-dark font-weight-bold" v-show="(item.categories.length-6) > 1">ещё {{item.categories.length - 6}} категории</div>
          </div>
        </div>
        <div class="catalog-item-img" :style="{'background-image': 'url('+item.img+')'}"></div>
      </div>

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
  },
}
</script>

<style>
@import 'assets/body/catalog.css';
</style>
