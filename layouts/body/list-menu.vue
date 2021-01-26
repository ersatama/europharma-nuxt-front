<template>
  <div class="list">
    <div class="list-all" v-if="status === 1">
      <div class="list-item" v-for="(item,index) in list" :key="index">
        <div>
          <NuxtLink :to="$route.path+item.url">
            <div class="list-item-title">{{ item.title }}</div>
          </NuxtLink>
          <div class="list-sub">
            <NuxtLink :to="$route.path+item.url+sub.url" v-for="(sub,id) in item.list" :key="id">
              <div class="list-sub-item" >{{sub.title}}</div>
            </NuxtLink>
          </div>
        </div>
        <div :style="{'background-image':'url('+item.img+')'}"></div>
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
  name: "list-menu",
}
</script>

<style>
@import 'assets/body/list-menu.css';
</style>
