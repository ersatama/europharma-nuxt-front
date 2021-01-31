<template>
  <div class="cabinet-menu">
    <div class="cabinet-photo">
      <div class="cabinet-photo-name">КИ</div>
    </div>
    <div class="cabinet-name">Константин Иванов</div>
    <div class="cabinet-menu-list">
      <NuxtLink to="/cabinet">
        <div class="cabinet-menu-item" :class="[path[path.length - 1][1]==='/cabinet'?'cabinet-menu-item-sel':'']">Профиль</div>
      </NuxtLink>
      <NuxtLink to="/cabinet/address">
        <div class="cabinet-menu-item" :class="[path[path.length - 1][1]==='/address'?'cabinet-menu-item-sel':'']">Список адресов доставки</div>
      </NuxtLink>
      <NuxtLink to="/cabinet/history">
        <div class="cabinet-menu-item" :class="[path[path.length - 1][1]==='/history'?'cabinet-menu-item-sel':'']">История покупок</div>
      </NuxtLink>
      <NuxtLink to="/cabinet/reviews">
        <div class="cabinet-menu-item" :class="[path[path.length - 1][1]==='/reviews'?'cabinet-menu-item-sel':'']">Список отзывов</div>
      </NuxtLink>
      <NuxtLink to="/cabinet/payment">
        <div class="cabinet-menu-item" :class="[path[path.length - 1][1]==='/payment'?'cabinet-menu-item-sel':'']">Карты оплаты</div>
      </NuxtLink>
      <NuxtLink to="/cabinet/eclub">
        <div class="cabinet-menu-item" :class="[path[path.length - 1][1]==='/eclub'?'cabinet-menu-item-sel':'']">eclub</div>
      </NuxtLink>
      <NuxtLink to="/cabinet/security">
        <div class="cabinet-menu-item" :class="[path[path.length - 1][1]==='/security'?'cabinet-menu-item-sel':'']">Безопасность</div>
      </NuxtLink>
      <div class="cabinet-menu-item">Выйти</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['path'],
  name: "cabinet-menu"
}
</script>

<style>
@import "assets/cabinet/menu/menu.css";
</style>
