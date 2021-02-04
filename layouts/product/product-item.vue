<template>
  <div class="products-body-item">
    <div class="products-body-discount" v-if="item.discount">-75%</div>
    <div class="products-body-eclub" v-if="item.eclub">eClub -15%</div>
    <NuxtLink :to="url+item.url">
      <div class="products-body-img" :style="{'background-image':'url('+item.img[0].img+')'}"></div>
      <div class="products-body-title">{{item.title}}</div>
    </NuxtLink>
    <div class="products-body-rating">
      <div class="products-body-stars">
        <div class="products-body-star"></div>
        <div class="products-body-star"></div>
        <div class="products-body-star"></div>
        <div class="products-body-star"></div>
        <div class="products-body-star"></div>
      </div>
      <div class="products-body-feedback">12 отзыва</div>
    </div>
    <div class="products-body-price">
      <div class="products-body-price-sum">
        <div class="products-body-price-line" v-if="item.discount">{{item.discount}} ₸</div>
        <div class="products-body-price-eclub" v-if="item.eclub_discount">{{item.eclub_discount}} ₸</div>
        <div class="products-body-price-all">{{item.price}} ₸</div>
      </div>
      <template v-if="this.$store.state.localStorage.products.length > 0">
        <template v-for="(product,index) in $store.state.localStorage.products">
          <div class="products-body-price-button-list" v-if="product.item.id === item.id" :key="index">
            <button @click="$store.commit('localStorage/addProduct',item)">+</button>
            <button>{{product.limit}}</button>
            <button @click="$store.commit('localStorage/removeProduct',item)">-</button>
          </div>
        </template>
      </template>
      <template v-if="check()">
        <button class="products-body-price-button text-white" @click="add(item)">В корзину</button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item','path'],
  name: "product-item",
  data() {
    return {
      url: '',
    }
  },
  created() {
    let self  = this;
    if (this.path) {
      this.path.forEach(function(value, index, arr) {
        self.url += value[1];
      });
    }
  },
  methods: {
    check() {
      let status  = true;
      let self    = this;
      this.$store.state.localStorage.products.forEach(function(value,key,array) {
        if (array[key].item.id === self.item.id) {
          status = false;
        }
      });
      return status;
    },
    add(item) {
      if (this.$store.state.localStorage.address !== 'не выбрано') {
        this.$store.commit('localStorage/addProduct',item);
      } else {
        this.$bvModal.show('map')
      }
    }
  }
}
</script>

<style>
@import 'assets/product/products-item.css';
</style>
