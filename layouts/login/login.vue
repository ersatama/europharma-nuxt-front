<template>
  <div class="auth-form">
    <div class="auth-form-title">Вход в <span>e</span>mart</div>
    <div class="auth-form-input-list">
      <div>
        <input type="text" class="auth-form-input-text" placeholder="Телефон или email">
      </div>
      <div>
        <input type="password" class="auth-form-input-text" placeholder="Пароль">
      </div>
    </div>
    <div class="auth-form-button-list">
      <div>
        <button class="auth-form-btn">Войти в <span>e</span>mart</button>
      </div>
      <div class="auth-form-button-double">
        <NuxtLink to="/register">
          <button class="auth-form-btn auth-form-btn-disabled">Регистрация</button>
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
name: "login"
}
</script>

<style>
  @import "assets/auth/auth.css";
</style>
