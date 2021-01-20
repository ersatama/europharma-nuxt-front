<template>
  <div class="footer-body">
    <div>
      <div class="footer-body-left">
        <div class="footer-body-left-title font-weight-bold">Регионы</div>
        <div class="footer-body-left-title" v-for="(region,index) in regions" :key="index">{{region.title}}</div>
        <div class="footer-body-left-title">Показать все ></div>
      </div>
      <div class="footer-body-right">
        <NuxtLink :to="item.url" v-for="(item,index) in menu" :key="index">
          <div class="footer-body-right-title" :class="[(item.url === sel)?'font-weight-bold':'']">{{ item.title }}</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterBodyContent",
  data() {
    return {
      sel: '',
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
      ],
      menu: [
        {
          url: '/about',
          title: 'О компании',
        },
        {
          url: '/partner',
          title: 'Стать партнёром',
        },
        {
          url: '/contacts',
          title: 'Контакты',
        },
        {
          url: '/courier',
          title: 'Стать курьером',
        },
        {
          url: '/delivery',
          title: 'Доставка',
        },
        {
          url: '/business',
          title: 'Для бизнеса',
        },
        {
          url: '/terms',
          title: 'Пользовательское соглашение',
        },
        {
          url: '/recycling',
          title: 'Переработка пластика',
        },
        {
          url: '/faq',
          title: 'Вопросы и ответы',
        },
        {
          url: '/feedback',
          title: 'Обратная связь'
        }
      ]
    }
  },
  mounted() {
    this.sel  = window.location.pathname;
  }
}
</script>
<style>
@import 'assets/footer/body/body.css';
</style>
