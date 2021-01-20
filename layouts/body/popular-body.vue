<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>Популярные товары</span></div>
      <productMenu :id="0"></productMenu>
      <listBody :list="items"></listBody>
    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>

<script>
import basket from '/layouts/basket/Basket.vue'
import productMenu from '/layouts/product/productMenu'
import listBody from '/layouts/body/list'
export default {
  name: "popular-body",
  components: {
    basket,
    productMenu,
    listBody
  },
  data() {
    return {
      items: [
      {
        id: 1,
        img: '../img/img.jpg',
        title: 'Подгузники Huggies Elite L (5)',
        stars: ['1','1','1','1','0.5'],
        feedback: 12,
        price: '1 780',
        limit: 10,
      },
      {
        id: 1,
        img: '../img/img.jpg',
        title: 'Подгузники Huggies Elite L (5)',
        stars: ['1','1','1','1','0.5'],
        feedback: 12,
        price: '1 780',
        limit: 10,
      },
      {
        id: 1,
        img: '../img/img.jpg',
        title: 'Подгузники Huggies Elite L (5)',
        stars: ['1','1','1','1','0.5'],
        feedback: 12,
        price: '1 780',
        limit: 10,
      },
      {
        id: 1,
        img: '../img/img.jpg',
        title: 'Подгузники Huggies Elite L (5)',
        stars: ['1','1','1','1','0.5'],
        feedback: 12,
        price: '1 780',
        limit: 10,
      },
      {
        id: 1,
        img: '../img/img.jpg',
        title: 'Подгузники Huggies Elite L (5)',
        stars: ['1','1','1','1','0.5'],
        feedback: 12,
        price: '1 780',
        limit: 10,
      },
      {
        id: 1,
        img: '../img/img.jpg',
        title: 'Подгузники Huggies Elite L (5)',
        stars: ['1','1','1','1','0.5'],
        feedback: 12,
        price: '1 780',
        limit: 10,
      },
      {
        id: 1,
        img: '../img/img.jpg',
        title: 'Подгузники Huggies Elite L (5)',
        stars: ['1','1','1','1','0.5'],
        feedback: 12,
        price: '1 780',
        limit: 10,
      },
      {
        id: 1,
        img: '../img/img.jpg',
        title: 'Подгузники Huggies Elite L (5)',
        stars: ['1','1','1','1','0.5'],
        feedback: 12,
        price: '1 780',
        limit: 10,
      }
    ]
    }
  }
}
</script>

<style scoped>

</style>
