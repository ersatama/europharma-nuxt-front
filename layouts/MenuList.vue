<template>
  <div class="menu-list" v-show="menu">
    <div v-if="items.length > 0">
      <div class="menu-list-content">
        <button class="menu-list-content-item w-100" :class="{'menu-list-content-item-sel':(sel===index?true:false)}" v-for="(item,index) in items" :key="index" @click="sel = index">
          <div class="menu-list-content-item-icon" :style="{'background-image': 'url('+item.icon+')'}"></div><div>{{item.title}}</div>
        </button>
      </div>
      <div>
        <NuxtLink :to="prefix+items[sel].url">
          <div class="menu-list-right-title">{{items[sel].title}}</div>
        </NuxtLink>
        <div class="menu-list-right-all">
          <div class="menu-list-right-item" v-for="(item,index) in items[sel].submenu" :key="index">
            <NuxtLink :to="prefix+items[sel].url+item.url">
              <div class="menu-list-right-item-title">{{item.title}}</div>
            </NuxtLink>
            <div class="menu-list-right-item-all">
              <NuxtLink :to="prefix+items[sel].url+item.url+submenu.url" v-for="(submenu,id) in item.list" :key="id">
                <div class="menu-list-right-item-self">{{submenu.title}}</div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ['menu'],
  data() {
    return {
      sel: 0,
      prefix: '/catalog',
      items: []
    }
  },
  created() {
    this.getMenu();
  },
  methods: {
    getMenu() {
      let self  = this;
      axios.get('http://127.0.0.1:8000/web/menu/all')
        .then(function (response) {
          self.items = response.data;
        });
    }
  }
}
</script>
<style>
@import 'assets/menu/list.css';
</style>

