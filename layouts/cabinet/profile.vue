<template>
  <div>
    <div class="profile-title">Профиль</div>
    <div class="profile-subtitle">Личные данные</div>
    <div class="profile-description">Это ваши личные данные, которые не видны никому кроме вас и используются для доступа к учетной записи, восстановления доступа к учетной записи, связи наших работников с вами в случае необходимости (например для уточнения проезда до вашего адреса).</div>
    <div class="profile-form">
      <div class="profile-form-input">
        <label class="profile-form-label" for="profile-name">Имя</label>
        <input type="text" class="profile-form-text" value="Константин" id="profile-name" readonly>
      </div>
      <div class="profile-form-input">
        <label class="profile-form-label" for="profile-surname">Фамилия</label>
        <input type="text" class="profile-form-text" value="Иванов" id="profile-surname" readonly>
      </div>
      <div class="profile-form-input">
        <label class="profile-form-label" for="profile-phone">Номер телефона</label>
        <input type="text" class="profile-form-text" value="+ 7 (7ХХ) ХХХ ХХХХ" id="profile-phone" readonly>
      </div>
      <div class="profile-form-input">
        <label class="profile-form-label" for="profile-email">Email адрес</label>
        <input type="text" class="profile-form-text" value="constantineivanya228@mail.ru" id="profile-email" readonly>
      </div>
      <div class="profile-form-input">
        <label class="profile-form-label" for="profile-birthdate">Дата рождения</label>
        <input type="text" class="profile-form-text" value="Не указано" id="profile-birthdate" readonly>
      </div>
      <div class="profile-form-input">
        <label class="profile-form-label" for="profile-gender">Пол</label>
        <input type="text" class="profile-form-text" value="Не указано" id="profile-gender" readonly>
      </div>
    </div>
    <div class="profile-edit">Изменить</div>
    <div class="profile-subtitle">Публичные данные</div>
    <div class="profile-description">Информация о Вас, отображаемая рядом с вашими отззывами на странице приобретенных вами товаров.</div>
    <div class="profile-form">
      <div class="profile-form-input">
        <label class="profile-form-label" for="profile-public-name">Имя</label>
        <input type="text" class="profile-form-text" value="Константин" id="profile-public-name" readonly>
      </div>
      <div class="profile-form-input">
        <label class="profile-form-label" for="profile-city">Город</label>
        <input type="text" class="profile-form-text" value="Не указано" id="profile-city" readonly>
      </div>
    </div>
    <div class="profile-edit">Изменить</div>
  </div>
</template>

<script>
export default {
  name: "profile"
}
</script>

<style>
  @import "assets/cabinet/profile.css";
</style>
