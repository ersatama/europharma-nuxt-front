<template>
  <div>
    <div class="profile-title">Карты оплаты</div>
    <div class="profile-description">Здесь вы можете просмотреть список ранее оформленных заказов. Имеется фильтр для удобного отображения.</div>
    <div class="profile-addresses">
      <div class="profile-address">
        <div class="profile-payment">
          <div class="profile-payment-logo" style="background-image: url('http://127.0.0.1:8000/img/visa.svg')"></div>
          <div class="profile-payment-delete">Удалить</div>
        </div>
        <div class="profile-payment-digit">
          <div class="profile-payment-digit-code">XXXX</div>
          <div class="profile-payment-digit-code">XXXX</div>
          <div class="profile-payment-digit-code">XXXX</div>
          <div class="profile-payment-digit-code">1234</div>
        </div>
        <div class="profile-address-button profile-address-button-sel">Карта по умолчанию</div>
      </div>
      <div class="profile-address">
        <div class="profile-payment">
          <div class="profile-payment-logo" style="background-image: url('http://127.0.0.1:8000/img/mastercard.svg')"></div>
          <div class="profile-payment-delete">Удалить</div>
        </div>
        <div class="profile-payment-digit">
          <div class="profile-payment-digit-code">XXXX</div>
          <div class="profile-payment-digit-code">XXXX</div>
          <div class="profile-payment-digit-code">XXXX</div>
          <div class="profile-payment-digit-code">1234</div>
        </div>
        <div class="profile-address-button">Использовать по умолчанию</div>
      </div>
    </div>
    <div class="profile-edit">Добавить новую карту</div>
  </div>
</template>

<script>
export default {
  name: "payment"
}
</script>

<style>
@import "assets/cabinet/profile.css";
</style>
