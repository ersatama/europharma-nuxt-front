<template>
  <div>
    <div class="profile-title">Список адресов доставки</div>
    <div class="profile-description">Здесь вы можете просмотреть список адресов доставки добавленных вами при оформлении заказов. При желании здесь вы можете их удалить, редактировать или добавить новые.</div>
    <div class="profile-addresses">
      <div class="profile-address">
        <div class="profile-address-title">г. Алматы, ул Шумный 2, кв. 7</div>
        <div class="profile-address-desc">Иван Иванов, +7 (ХХХ) ХХХ ХХХХ</div>
        <div class="profile-address-options">
          <div class="profile-address-edit">Изменить</div>
          <div class="profile-address-delete">Удалить</div>
        </div>
        <div class="profile-address-button profile-address-button-sel">Адрес по умолчанию</div>
      </div>
      <div class="profile-address">
        <div class="profile-address-title">г. Алматы, ул Шумный 2, кв. 7</div>
        <div class="profile-address-desc">Иван Иванов, +7 (ХХХ) ХХХ ХХХХ</div>
        <div class="profile-address-options">
          <div class="profile-address-edit">Изменить</div>
          <div class="profile-address-delete">Удалить</div>
        </div>
        <div class="profile-address-button">Использовать по умолчанию</div>
      </div>
      <div class="profile-address">
        <div class="profile-address-title">г. Алматы, ул Шумный 2, кв. 7</div>
        <div class="profile-address-desc">Иван Иванов, +7 (ХХХ) ХХХ ХХХХ</div>
        <div class="profile-address-options">
          <div class="profile-address-edit">Изменить</div>
          <div class="profile-address-delete">Удалить</div>
        </div>
        <div class="profile-address-button">Использовать по умолчанию</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "address-cabinet"
}
</script>

<style>
@import "assets/cabinet/profile.css";
</style>
