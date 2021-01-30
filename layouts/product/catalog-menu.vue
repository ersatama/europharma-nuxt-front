<template>
  <div class="catalog-menu" v-if="filter">
    <div class="catalog-menu-item">
      <label class="catalog-menu-item-title">{{ filter.price.title }}</label>
      <div class="catalog-menu-price-input">
        <button class="text-secondary">от <span class="text-dark font-weight-bold">{{filter.price.min}} ₸ </span></button>
        <button class="text-secondary">до <span class="text-dark font-weight-bold">{{filter.price.max}} ₸ </span></button>
      </div>
      <div class="catalog-menu-price-range">
        <div class="catalog-menu-price-range-line">
          <div class="catalog-menu-price-range-line-in">
            <div class="catalog-menu-price-range-line-in-min"></div>
            <div class="catalog-menu-price-range-line-in-max"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="catalog-menu-item" v-for="(item,index) in filter.options" :key="index" onselectstart="return false" v-if="item.list.length > 0">
      <div class="catalog-menu-button" :class="[item.status?'catalog-menu-button-hide':'']" @click="hideOptions(index)"></div>
      <label class="catalog-menu-item-title" @click="hideOptions(index)">{{item.title}}</label>
      <div class="catalog-menu-options" :class="[item.status?'catalog-menu-options-hide':'']">
        <button class="catalog-menu-option" v-for="(option,id) in item.list" :key="id">
          <div class="catalog-menu-option-title">{{ option.title }}</div>
        </button>
      </div>
    </div>
    <div class="catalog-menu-item" v-if="filter.rating && filter.rating.list.length > 0">
      <div class="catalog-menu-button" :class="[filter.rating.status?'catalog-menu-button-hide':'']" @click="hideRating()"></div>
      <label class="catalog-menu-item-title" @click="hideRating()">{{filter.rating.title}}</label>
      <div class="catalog-menu-options" :class="[filter.rating.status?'catalog-menu-options-hide':'']">
        <button class="catalog-menu-option" v-for="(star,id) in filter.rating.list" :key="id">
          <div class="catalog-menu-option-rating">
            <div class="catalog-menu-option-rating-star" v-for="(n,index) in star" :key="index"></div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['filter'],
  name: "catalog-menu",
  methods: {
    hideOptions(index) {
      this.$set(this.filter.options[index], 'status', !this.filter.options[index].status);
    },
    hideRating() {
      this.$set(this.filter.rating, 'status', !this.filter.rating.status);
    }
  }
}
</script>

<style>

</style>
