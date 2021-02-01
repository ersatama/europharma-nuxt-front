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

<style scoped>
  .brands-main {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto 0 auto;
  }
  .brands {
    margin-top: 20px;
    gap: 20px;
    display: flex;
    justify-content: space-between;
    grid-gap: 20px;
  }
  .brand {
    height: 120px;
    width: 300px;
    background: no-repeat center;
    background-size: contain;
  }
</style>
