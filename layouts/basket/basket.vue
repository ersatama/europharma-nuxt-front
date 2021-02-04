<template>
  <div class="basket-content" ref="basket" :class="[[top?'basket-content-fixed':''],[bottom?'basket-content-bottom':'']]">
    <template v-if="$store.state.localStorage.products.length > 0">
      <div class="basket-content-menu">
        <div class="basket-clear" @click="clearBasket()">Очистить</div>
        <div class="basket-content-title">Мой заказ</div>
        <div class="basket-content-sub-title">бесплатная доставка при сумме заказа от 10000 ₸</div>
        <div class="basket-content-list">
          <div class="basket-content-item" v-for="(product,index) in $store.state.localStorage.products" :key="index">
            <div class="basket-content-item-icon" :style="{'background-image':'url('+product.item.img[0].img+')'}"></div>
            <div class="basket-content-item-title">
              <div>{{product.item.title}}</div>
            </div>
            <div class="basket-content-item-limit">
              <div class="basket-content-item-limit-control">
                <div class="basket-content-item-limit-control-add" @click="$store.commit('localStorage/addProduct',product.item)"></div>
                <div class="basket-content-item-limit-control-sum">{{product.limit}} {{product.item.quantity_type}}</div>
                <div class="basket-content-item-limit-control-remove" @click="$store.commit('localStorage/removeProduct',product.item)"></div>
              </div>
            </div>

            <div class="basket-content-item-price">
              <div>{{product.item.price * product.limit}} ₸</div>
            </div>
          </div>
        </div>
      </div>
      <template v-if="$route.path !== '/purchase'">
        <NuxtLink to="/purchase">
          <button class="basket-content-button text-white w-100">Сумма заказа {{$store.state.localStorage.price}} ₸</button>
        </NuxtLink>
      </template>
    </template>
    <template v-else>
      <div class="basket-content-menu">
        <div class="basket-content-title">Мой заказ</div>
        <div class="basket-content-sub-title">Добавьте товары в корзину</div>
        <div class="basket-content-list">
          <div class="basket-content-list-empty">
            <div class="basket-content-list-empty-icon"></div>
            <div class="basket-content-list-empty-title">Корзина пуста</div>
          </div>
        </div>
      </div>
      <button class="basket-content-button-disabled w-100">Оформить заказ</button>
    </template>
  </div>
</template>
<script>
export default {
  name: "basket",
  data() {
    return {
      top: false,
      bottom: false
    }
  },
  mounted() {
    this.handleScroll();
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
  },
  methods: {
    clearBasket() {
      this.$store.commit('localStorage/clearProduct');
    },
    handleScroll () {
      let basket       = this.$refs.basket;
      let height       = basket.offsetHeight;
      let parent       = basket.parentNode.getBoundingClientRect();
      let parentTop    = parent.top;
      let parentHeight = basket.parentNode.offsetHeight;
      let heightDiff   = parentHeight - height;
      if (heightDiff > 0 && parentTop < 20) {
        let parentFinalHeight = parentHeight + parentTop;
        let finalHeight       = 20 + height;
        if (finalHeight < parentFinalHeight) {
          this.top    = true;
          this.bottom = false;
        } else {
          this.top    = false;
          this.bottom = true;
        }
      } else {
        this.top    = false;
        this.bottom = false;
      }
    }
  }
}
</script>
<style>
@import '../../assets/basket/basket.css';
</style>
