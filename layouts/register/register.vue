<template>
  <div class="auth-form">
    <div class="auth-form-title">Регистрация</div>
    <div class="auth-form-input-list">
      <div class="auth-form-input">
        <input type="text" class="auth-form-input-text" placeholder="Имя">
        <input type="text" class="auth-form-input-text" placeholder="Фамилия">
      </div>
      <div>
        <input type="text" class="auth-form-input-text" placeholder="Телефон">
      </div>
      <div>
        <input type="password" class="auth-form-input-text" placeholder="Пароль">
      </div>
    </div>
    <div class="auth-form-button-list">
      <div>
        <button class="auth-form-btn">Зарегистрироваться</button>
      </div>
      <div class="auth-form-button-double">
        <NuxtLink to="/login">
          <button class="auth-form-btn auth-form-btn-disabled">Войти</button>
        </NuxtLink>
        <NuxtLink to="/restore">
          <button class="auth-form-btn auth-form-btn-disabled">Забыл пароль</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register"
}
</script>

<style scoped>
@import "assets/auth/auth.css";
</style>
