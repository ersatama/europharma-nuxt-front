<template>
  <div class="breadcrumb-title">
    <NuxtLink :to="getUrl(index)" v-for="(title,index) in path" :key="index">
      <span>{{title[0]}}</span><div v-if="path.length !== (index+1)" class="divider"></div>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  name: "bread-crumb",
  props: ['path'],
  data() {
    return {
      url: [],
    }
  },
  methods: {
    getUrl(index) {
      let url = '';
      for (let i = 0; i <= index; i++) {
        url += this.path[i][1]
      }
      if (!url) {
        url   = '/';
      }
      return url;
    }
  }
}
</script>

<style>
@import 'assets/header/bread-crumb.css';
</style>
