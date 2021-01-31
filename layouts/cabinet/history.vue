<template>
  <div>
    <div class="profile-title">История покупок</div>
    <div class="profile-description">Здесь вы можете просмотреть список ранее оформленных заказов. Имеется фильтр для удобного отображения.</div>
    <div class="profile-table">
      <div class="profile-table-header">
        <div class="profile-table-header-item">Номер заказа</div>
        <div class="profile-table-header-item">Краткий список товаров</div>
        <div class="profile-table-header-item">Дата</div>
        <div class="profile-table-header-item">Статус заказа</div>
        <div class="profile-table-header-item">Сумма заказа</div>
      </div>
      <div class="profile-table-list">
        <div class="profile-table-list-item">
          <div class="profile-table-list-item-field">12345678</div>
          <div class="profile-table-list-item-field">“Gerber Пюре Морковь (80 гр)” и 3 др.</div>
          <div class="profile-table-list-item-field">01.11.2020</div>
          <div class="profile-table-list-item-field profile-table-list-item-field-delivery">В процессе доставки</div>
          <div class="profile-table-list-item-field">156 000 ₸</div>
        </div>
        <div class="profile-table-list-item">
          <div class="profile-table-list-item-field">12345678</div>
          <div class="profile-table-list-item-field">“Gerber Пюре Морковь (80 гр)” и 3 др.</div>
          <div class="profile-table-list-item-field">01.11.2020</div>
          <div class="profile-table-list-item-field profile-table-list-item-field-delivered">Доставлен</div>
          <div class="profile-table-list-item-field">156 000 ₸</div>
        </div>
        <div class="profile-table-list-item">
          <div class="profile-table-list-item-field">12345678</div>
          <div class="profile-table-list-item-field">“Gerber Пюре Морковь (80 гр)” и 3 др.</div>
          <div class="profile-table-list-item-field">01.11.2020</div>
          <div class="profile-table-list-item-field profile-table-list-item-field-delivered">Доставлен</div>
          <div class="profile-table-list-item-field">156 000 ₸</div>
        </div>
        <div class="profile-table-list-item">
          <div class="profile-table-list-item-field">12345678</div>
          <div class="profile-table-list-item-field">“Gerber Пюре Морковь (80 гр)” и 3 др.</div>
          <div class="profile-table-list-item-field">01.11.2020</div>
          <div class="profile-table-list-item-field profile-table-list-item-field-delivered">Доставлен</div>
          <div class="profile-table-list-item-field">156 000 ₸</div>
        </div>
        <div class="profile-table-list-item">
          <div class="profile-table-list-item-field">12345678</div>
          <div class="profile-table-list-item-field">“Gerber Пюре Морковь (80 гр)” и 3 др.</div>
          <div class="profile-table-list-item-field">01.11.2020</div>
          <div class="profile-table-list-item-field profile-table-list-item-field-canceled">Отменен</div>
          <div class="profile-table-list-item-field">156 000 ₸</div>
        </div>
        <div class="profile-table-list-item">
          <div class="profile-table-list-item-field">12345678</div>
          <div class="profile-table-list-item-field">“Gerber Пюре Морковь (80 гр)” и 3 др.</div>
          <div class="profile-table-list-item-field">01.11.2020</div>
          <div class="profile-table-list-item-field profile-table-list-item-field-delivered">Доставлен</div>
          <div class="profile-table-list-item-field">156 000 ₸</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "history"
}
</script>

<style>
@import "assets/cabinet/profile.css";
</style>
