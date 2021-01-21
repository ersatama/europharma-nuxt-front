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
.catalog-main {
  margin-top: 32px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 40px;
}
.catalog-item {
  width: 160px;
  height: 160px;
  border-radius: 8px;
  border: 2px solid #EDECEE;
  position: relative;
  cursor: pointer;
}
.catalog-item:hover {
  color: #C5E319;
  background: rgba(197, 227, 25, 0.05);
  border: 2px solid #6FC52B;
}
.catalog-item-img {
  width: 136px;
  height: 80px;
  background: no-repeat center;
  background-size: contain;
  margin: 16px auto 0 auto;
}
.catalog-item-content {
  font-weight: bold;
  font-size: 16px;
  color: #37424D;
  height: 60px;
  position: absolute;
  bottom: 0;
  left: 16px;
  right: 16px;
}
.catalog-item:hover > .catalog-item-content {
  color: #6FC52B;
}
.catalog-item-content > div {
  position: absolute;
  transform: translate(-50%,-50%);
  text-align: center;
  top: 50%;
  left: 50%;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
</style>
