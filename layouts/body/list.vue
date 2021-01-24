<template>
  <div class="list">
    <div class="list-filter">
      <div class="list-filter-type">
        <div class="list-filter-type-title">Фильтр: <span>все</span></div>
      </div>
      <div class="list-filter-sort">
        <div class="list-filter-sort-title">Отсортировать:</div>
        <div class="list-filter-sort-dropdown" @click="sort.view = !sort.view" onselectstart="return false">
          <span>{{sort.list[sort.index].title}}</span>
          <div class="list-filter-sort-dropdown-list">
            <div :style="{'display':(sort.view?'block':'none')}">
              <div class="list-filter-sort-dropdown-list-item" v-for="(item,index) in sort.list" :key="index" @click="sort.index = index">{{item.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row main-body-items">
      <item v-for="(item,index) in list" :key="index" :product="item"></item>
    </div>
  </div>
</template>

<script>
import item from '/layouts/product/item.vue'
export default {
  props: ['list'],
  components: {
    item
  },
  name: "list",
  data() {
    return {
      sort: {
        index: 0,
        view: false,
        list: [
          {
            title: 'по популярности',
          },
          {
            title: 'сначала новые',
          },
          {
            title: 'сначала старые',
          },
          {
            title: 'сначала дешевле',
          },
          {
            title: 'сначала дороже',
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
@import 'assets/body/list.css';
</style>
