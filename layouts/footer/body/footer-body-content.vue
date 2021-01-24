<template>
  <div class="footer-body">
    <div>
      <div class="footer-body-left">
        <div class="footer-body-left-title font-weight-bold">Регионы</div>
        <div class="footer-body-left-title" v-for="(region,index) in regions" :key="index">{{region.title}}</div>
        <div class="footer-body-left-title">Показать все ></div>
      </div>
      <div class="footer-body-right">
        <NuxtLink :to="item.url" v-for="(item,index) in menu" :key="index">
          <div class="footer-body-right-title" :class="[(item.url === sel)?'font-weight-bold':'']">{{ item.title }}</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "footer-body-content",
  data() {
    return {
      sel: '',
      regions: [],
      menu: []
    }
  },
  mounted() {
    this.sel  = window.location.pathname;
    this.getFooterContent();
  },
  methods: {
    getFooterContent() {
      let self  = this;
      axios.get('http://127.0.0.1:8000/web/footer')
        .then(function (response) {
          let data      = response.data;
          self.regions  = data.regions;
          self.menu     = data.menu;
        });
    }
  }
}
</script>
<style>
@import 'assets/footer/body/body.css';
</style>
