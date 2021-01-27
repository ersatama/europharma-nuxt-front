<template>
  <div class="list">
    <div class="list-all" v-if="status === 1">
      <div class="list-item" v-for="(item,index) in list" :key="index">
        <div>
          <NuxtLink :to="$route.path+item.url">
            <div class="list-item-title">{{ item.title }}</div>
          </NuxtLink>
          <div class="list-sub">
            <template v-if="!item.limit">
              <NuxtLink :to="$route.path+item.url+sub.url" v-for="(sub,id) in item.list" :key="id" v-show="id < 6">
                <div class="list-sub-item" >{{sub.title}}</div>
              </NuxtLink>
              <div class="list-sub-item text-dark font-weight-bold" v-show="(item.list.length-6) > 1" @click="change(index)">Показать ещё {{item.list.length - 6}} категории</div>
            </template>
            <template v-else>
              <NuxtLink :to="$route.path+item.url+sub.url" v-for="(sub,id) in item.list" :key="id">
                <div class="list-sub-item" >{{sub.title}}</div>
              </NuxtLink>
            </template>
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
  methods: {
    change(index) {
      this.$set(this.list[index], 'limit', true);
    }
  }
}
</script>

<style>
@import 'assets/body/list-menu.css';
</style>
