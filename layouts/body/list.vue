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
  .list {
    margin-top: 40px;
  }
  .list-filter {
    position: relative;
    height: 24px;
  }
  .list-filter-type {
    float: left;
  }
  .list-filter-type-title {
    color: #6FC52B;
  }
  .list-filter-type-title > span {
    color: #37424D;
    font-weight: bold;
  }
  .list-filter-sort {
    float: right;
    display: grid;
    grid-template-columns: auto auto;
  }
  .list-filter-sort-dropdown {
    color: #6FC52B;
    margin-left: 16px;
    cursor: pointer;
    padding-right: 20px;
  }
  .list-filter-sort-dropdown:after {
    content: '';
    position: absolute;
    border: 4px solid transparent;
    border-top-color: #6FC52B;
    top: 50%;
    right: 0;
    transform: translate(-50%,0);
  }
  .list-filter-sort-dropdown-list {
    position: relative;
    z-index: 10;
    width: auto;
  }
  .list-filter-sort-dropdown-list > div {
    background: white;
    border: 1px solid #EDECEE;
    position: absolute;
    width: 150%;
    right: -20px;
    top: 5px;
    min-height: 50px;
    border-radius: 4px;
    display: none;
  }
  .list-filter-sort-dropdown-list-item {
    cursor: pointer;
    font-size: 14px;
    color: #989898;
    font-weight: normal;
    padding: 8px 16px 8px 16px;
  }
  .list-filter-sort-dropdown-list-item:hover {
    background: #EDECEE;
  }
</style>
