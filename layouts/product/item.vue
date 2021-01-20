<template>
  <div class="col-3 m-0 p-0 box">
    <div class="main-body-item">
      <div class="main-body-item-screen" :style="{'background-image':'url('+product.img+')'}"></div>
      <div class="main-body-item-title">{{product.title}}</div>
      <div class="main-body-item-rating">
        <div class="main-body-item-stars">
          <div class="main-body-item-star"></div>
          <div class="main-body-item-star"></div>
          <div class="main-body-item-star"></div>
          <div class="main-body-item-star"></div>
          <div class="main-body-item-star"></div>
        </div>
        <div class="main-body-item-feedback">{{product.feedback}} отзывов</div>
      </div>
      <div class="main-body-item-footer">
        <div class="main-body-item-footer-price">
          <div>{{product.price}} ₸</div>
        </div>
        <div class="main-body-item-footer-button">
          <button class="btn basket-btn text-white w-100">В корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item",
  props: ['product']
}
</script>

<style scoped>

</style>
