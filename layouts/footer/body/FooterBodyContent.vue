<template>
  <div class="footer-body">
    <div>
      <div class="footer-body-left">
        <div class="footer-body-left-title font-weight-bold">Регионы</div>
        <div class="footer-body-left-title" v-for="(region,index) in regions" :key="index">{{region.title}}</div>
        <div class="footer-body-left-title">Показать все ></div>
      </div>
      <div class="footer-body-right">
        <div class="footer-body-right-title font-weight-bold">О компании</div>
        <div class="footer-body-right-title">Стать партнёром</div>
        <div class="footer-body-right-title">Контакты</div>
        <div class="footer-body-right-title">Стать курьером</div>
        <div class="footer-body-right-title">Доставка</div>
        <div class="footer-body-right-title">Для бизнеса</div>
        <div class="footer-body-right-title">Пользовательское соглашение</div>
        <div class="footer-body-right-title">Переработка пластика</div>
        <div class="footer-body-right-title">Вопросы и ответы</div>
        <div class="footer-body-right-title">Обратная связь</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterBodyContent",
  data() {
    return {
      regions: [
        {
          title: 'Алматы',
        },
        {
          title: 'Нур-Султан',
        },
        {
          title: 'Шымкент',
        },
        {
          title: 'Актау',
        },
        {
          title: 'Атырау',
        },
        {
          title: 'Караганды',
        },
      ]
    }
  }
}
</script>
<style>
@import 'assets/footer/body/body.css';
</style>
