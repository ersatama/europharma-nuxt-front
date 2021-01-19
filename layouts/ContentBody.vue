<template>
  <div class="content-body">
    <div class="content-body-main">
      <div class="list">
        <div class="options">
          <div class="options-menu">
            <div>
              <button class="options-button options-button-icon"></button>
              <button class="options-button">Подгузники</button>
              <button class="options-button">Питание</button>
              <button class="options-button">Вода</button>
              <button class="options-button">Детская посуда</button>
              <button class="options-button">Для купание</button>
              <button class="options-button">Детские крема, лосьоны</button>
              <button class="options-button">Для малышей</button>
            </div>
          </div>
          <div class="options-list"></div>
        </div>
        <div class="list-content">
          <div class="list-content-header">
            <div class="list-content-title">Подгузники 5</div>
            <div class="list-content-options">
              <div class="list-content-description">78 товаров</div>
              <div class="list-content-item">
                <div class="list-content-item-title">Сортировать по:</div>
                <div class="list-content-item-dropdown">Популярности</div>
              </div>
              <div class="list-content-item-single">
                <div class="list-content-item-dropdown">Названию</div>
              </div>
              <div class="list-content-item-single">
                <div class="list-content-item-dropdown">Цене</div>
              </div>
            </div>
            <div class="list-content-item-dropdown">
            </div>
          </div>

        </div>
      </div>
      <div class="basket">
        <div class="basket-menu">
          <div class="basket-menu-header">
            <div class="basket-menu-header-title">Мои заказы</div>
            <div class="basket-menu-header-clear"></div>
          </div>
          <div class="basket-body" v-if="basket.length > 0">
            <div class="basket-body-item" v-for="(item,id) in basket" :key="id">
              <div class="basket-body-item-title">{{item.title}}</div>
              <div class="basket-body-item-count">
                <button class="button-green basket-count-remove">-</button>
                <div>{{item.count}}</div>
                <button class="button-green basket-count-add">+</button>
              </div>
              <div class="basket-body-item-price">{{item.count * item.price}}₸</div>
            </div>
          </div>
          <div class="basket-body" v-else>
            <div class="basket-body-empty">Пусто</div>
          </div>
          <div class="basket-delivery">
            <div class="basket-menu-header">
              <div class="basket-menu-header-title">Доставка</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      basket: [
        {
          id: 1,
          title: 'Huggies Ultra Comfortе для мальчиков 4 (8-14) 45шт',
          count: 45,
          price: 250,
        },
        {
          id: 2,
          title: 'Подгузники Huggies Elite M (3) 23шт',
          count: 20,
          price: 150,
        },
        {
          id: 2,
          title: 'Подгузники Huggies Elite M (3) 23шт',
          count: 20,
          price: 150,
        },
        {
          id: 2,
          title: 'Подгузники Huggies Elite M (3) 23шт',
          count: 20,
          price: 150,
        },
        {
          id: 2,
          title: 'Подгузники Huggies Elite M (3) 23шт',
          count: 20,
          price: 150,
        },
        {
          id: 2,
          title: 'Подгузники Huggies Elite M (3) 23шт',
          count: 20,
          price: 150,
        },
        {
          id: 2,
          title: 'Подгузники Huggies Elite M (3) 23шт',
          count: 20,
          price: 150,
        },
        {
          id: 2,
          title: 'Подгузники Huggies Elite M (3) 23шт',
          count: 20,
          price: 150,
        }
      ]
    }
  }
}
</script>
<style>
@import '../assets/contentBody.css';
@import '../assets/basket.css';
@import '../assets/options.css';
@import '../assets/list.css';
</style>

