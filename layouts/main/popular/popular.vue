<template>
  <div>
    <div class="main-body-title">
      <span>Популярные товары</span>
      <NuxtLink to="/catalog/popular">
        <div class="main-body-title-all">Посмотреть все</div>
      </NuxtLink>
    </div>
    <product-list :list="items"></product-list>
  </div>
</template>
<script>
import productList from '/layouts/product/main/list'
export default {
  name: "popular",
  components: {
    productList
  },
  data() {
    return {
      items: [
        {
          id: 1,
          img: 'img/img.jpg',
          title: 'Подгузники Huggies Elite L (5)',
          stars: ['1','1','1','1','0.5'],
          feedback: 12,
          price: '1 780',
          limit: 10,
        },
        {
          id: 1,
          img: 'img/img.jpg',
          title: 'Подгузники Huggies Elite L (5)',
          stars: ['1','1','1','1','0.5'],
          feedback: 12,
          price: '1 780',
          limit: 10,
        },
        {
          id: 1,
          img: 'img/img.jpg',
          title: 'Подгузники Huggies Elite L (5)',
          stars: ['1','1','1','1','0.5'],
          feedback: 12,
          price: '1 780',
          limit: 10,
        },
        {
          id: 1,
          img: 'img/img.jpg',
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
