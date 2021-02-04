<template>
  <div class="brands-main">
    <div class="main-body-title main-body-title-next main-body-title-main main-body-title-center">
      <span>Популярные бренды</span>
    </div>
    <div class="brands">
      <div class="brand" v-for="(brand,index) in brands" :key="index" :style="{'background-image': 'url('+brand.url+')'}"></div>
    </div>
    <NuxtLink to="/brands">
      <div class="main-body-title-bottom">посмотреть все</div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "brands",
  data() {
    return  {
      brands: [
        {
          url: 'img/samsung.png'
        },
        {
          url: 'img/apple.png'
        },
        {
          url: 'img/huawei.png'
        },
        {
          url: 'img/meizu.png'
        },
        {
          url: 'img/lg.png'
        },
        {
          url: 'img/oppo.png'
        },
        {
          url: 'img/sony.png'
        },
        {
          url: 'img/lenovo.png'
        }
      ]
    }
  }
}
</script>

<style>
@import "assets/main/brands.css";
</style>
