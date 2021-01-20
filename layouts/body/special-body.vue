<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>Акции и специальные предложения</span></div>
      <div class="menu">
        <button class="menu-item" :class="[(sel === index)?'menu-item-sel':'']" v-for="(field,index) in menu" :key="index" @click="sel = index">{{field.title}}</button>
      </div>
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
  name: "special-body",
  components: {
    basket,
    productMenu,
    listBody,
  },
  data() {
    return {
      sel: 0,
      menu: [
        {
          title: 'Все акции',
        },
        {
          title: 'Членам eClub',
        },
        {
          title: 'Комплекты',
        },
      ],
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
.menu {
  overflow: hidden;
  margin-top: 16px;
  cursor: pointer;
  outline: none;
}
.menu-item {
  border: 2px solid #EDECEE;
  font-size: 18px;
  float: left;
  margin-right: 16px;
  padding: 0 16px 0 16px;
  height: 40px;
  border-radius: 40px;
  background: white;
  color: #989898;
  font-weight: 600;
  outline: none;
}
.menu-item:hover, .menu-item-sel {
  background: rgba(197, 227, 25, 0.2);
  color: #6FC52B;
  border: 2px solid #C5E319;
}
</style>
