<template>
  <div class="auth-form">
    <div class="auth-form-title">Восстановление пароля</div>
    <div class="auth-form-input-list">
      <div>
        <input type="text" class="auth-form-input-text" placeholder="Телефон или email">
      </div>
    </div>
    <div class="auth-form-button-list">
      <div>
        <button class="auth-form-btn">Восстановить доступ</button>
      </div>
      <div class="auth-form-button-double">
        <NuxtLink to="/login">
          <button class="auth-form-btn auth-form-btn-disabled">Войти</button>
        </NuxtLink>
        <NuxtLink to="/register">
          <button class="auth-form-btn auth-form-btn-disabled">Регистарция</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "restore"
}
</script>

<style scoped>
@import "assets/auth/auth.css";
</style>
