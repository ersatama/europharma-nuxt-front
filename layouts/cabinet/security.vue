<template>
  <div>
    <div class="profile-title">Безопасность</div>
    <div class="profile-subtitle">Данные для авторизации</div>
    <div class="profile-description">Данные необходимые для входа в личную учетную запись, а также информация необходимая при восстановлении доступа.</div>
    <div class="profile-form">
      <div class="profile-form-input">
        <label class="profile-form-label" for="profile-phone">Номер телефона</label>
        <input type="text" class="profile-form-text" value="+ 7 (7ХХ) ХХХ ХХХХ" id="profile-phone" readonly>
      </div>
      <div class="profile-form-input">
        <label class="profile-form-label" for="profile-email">Email адрес</label>
        <input type="text" class="profile-form-text" value="constantineivanya228@mail.ru" id="profile-email" readonly>
      </div>
    </div>
    <div class="profile-edit">Изменить</div>
    <div class="profile-subtitle">Пароль и двухфакторная аутентификация</div>
    <div class="profile-description">Пароль для входа в учетную запись при авторизации. Двухфакторная аутентификация - это дополнительный (опциональный) шаг для защиты вашего аккаунта от злоумышленников.</div>
    <div class="profile-description">Двухфакторная аутентификация</div>
    <div class="profile-subtitle">Отключена</div>
    <div class="profile-edit">Включить двухфакторную аутентификацию</div>
    <div class="profile-edit">Изменить пароль</div>
    <div class="profile-edit">Выйти на всех устройствах</div>
    <div class="profile-edit">Удалить аккаунт</div>
  </div>
</template>

<script>
export default {
  name: "security"
}
</script>

<style scoped>

</style>
