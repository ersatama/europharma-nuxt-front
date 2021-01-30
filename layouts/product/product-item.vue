<template>
  <div class="products-body-item">
    <div class="products-body-discount" v-if="item.discount">-75%</div>
    <div class="products-body-eclub" v-if="item.eclub">eClub -15%</div>
    <div class="products-body-img" :style="{'background-image':'url('+item.img[0].img+')'}"></div>
    <div class="products-body-title">{{item.title}}</div>
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
      <button class="products-body-price-button text-white">В корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  name: "product-item"
}
/*

  {
  "id": 1,
  "menu_id": 25,
  "brand_id": 16,
  "barcode": "000000001",
  "url": "/iphone-x",
  "title": "iPhone X",
  "description": null,
  "price": "11111",
  "discount": "11111",
  "limit": "1",
  "quantity": "1",
  "quantity_type": "шт",
  "eclub": null,
  "eclub_limit": null,
  "eclub_discount": null,
  "parent_id": 0,
  "lft": 0,
  "rgt": 0,
  "depth": 0,
  "status": "active",
  "created_at": "2021-01-28T07:13:20.000000Z",
  "updated_at": "2021-01-28T07:13:20.000000Z",
  "img": [
    {
      "img": "http://127.0.0.1:8000/img/img.png"
    },
    {
      "img": "http://127.0.0.1:8000/img/img.png"
    },
    {
      "img": "http://127.0.0.1:8000/img/img.png"
    },
    {
      "img": "http://127.0.0.1:8000/img/img.png"
    }
  ]
}
 */
</script>

<style>
@import 'assets/product/products-item.css';
</style>
