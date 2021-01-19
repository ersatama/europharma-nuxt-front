<template>
  <div>
    <div class="main-body-title main-body-title-next">
      <span>Популярные бренды</span>
      <div class="main-body-title-all">посмотреть все</div>
    </div>
    <div class="brands">
      <div class="brand" v-for="(brand,index) in brands" :key="index" :style="{'background-image': 'url('+brand.url+')'}"></div>
    </div>
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
  .brands {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-column-gap: 30px;
    margin-top: 20px;
  }
  .brand {
    height: 120px;
    background: no-repeat center;
    background-size: contain;
  }
</style>
