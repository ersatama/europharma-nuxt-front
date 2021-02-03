<template>
  <div class="purchase-body">
    <template v-if="step === 0">
      <div class="purchase-form">
        <div class="purchase-form-title">Личные данные</div>
        <div class="purchase-form-split">
          <div class="purchase-form-group">
            <div class="purchase-form-group-title">Фамилия Имя</div>
            <input type="text" class="purchase-form-group-input" v-model="name" maxlength="255">
          </div>
          <div class="purchase-form-group">
            <div class="purchase-form-group-title">Номер телефона</div>
            <input type="text" class="purchase-form-group-input" v-model="phone" maxlength="255">
          </div>
        </div>
        <div class="purchase-form-title">Адрес доставки</div>
        <div class="purchase-form-single">
          <div class="purchase-form-group">
            <div class="purchase-form-group-title">Улица, дом</div>
            <input type="text" class="purchase-form-group-input" v-model="address" maxlength="255">
          </div>
        </div>
        <div class="purchase-form-split">
          <div class="purchase-form-group">
            <div class="purchase-form-group-title">Кв./офис</div>
            <input type="text" class="purchase-form-group-input">
          </div>
          <div class="purchase-form-group">
            <div class="purchase-form-group-title">Домофон</div>
            <input type="text" class="purchase-form-group-input">
          </div>
        </div>
        <div class="purchase-form-split">
          <div class="purchase-form-group">
            <div class="purchase-form-group-title">Подъезд</div>
            <input type="text" class="purchase-form-group-input">
          </div>
          <div class="purchase-form-group">
            <div class="purchase-form-group-title">Этаж</div>
            <input type="text" class="purchase-form-group-input">
          </div>
        </div>
      </div>
      <div class="purchase-map">
        <div class="purchase-map-marker"></div>
        <div class="purchase-map-content">
          <yandex-map :behaviors="behaviors" :controls="controls" :settings="settings" :coords="coords" zoom="16" style="width: 100%; height: 100%;" @boundschange="onBoundsChange"></yandex-map>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="purchase-form">
        <div class="purchase-form-title">Метод оплаты</div>
      </div>
      <div class="purchase-map">
        <yandex-map :behaviors="{}" :controls="{}" :settings="settings" :coords="coords" zoom="17" style="width: 100%; height: 100%;" @boundschange="onBoundsChange"></yandex-map>
      </div>
    </template>
    <div class="purchase-footer">
      <div class="purchase-footer-time">
        <div class="purchase-footer-time-title">Время доставки: 20-30 мин</div>
        <div class="purchase-footer-time-change">выбрать время доставки</div>
      </div>
      <div class="purchase-footer-price" v-if="check()">
        <div class="purchase-footer-price-title">Итого к оплате</div>
        <div class="purchase-footer-price-sum">{{ $store.state.localStorage.price }} ₸</div>
      </div>
      <button class="purchase-footer-button" @click="step = 1" v-if="step === 0">Перейти к оплате</button>
      <button class="purchase-footer-button" @click="step = 2" v-if="step === 1">Оформить заказ</button>
    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  components: {
    yandexMap,
    ymapMarker
  },
  name: "purchase-body",
  data() {
    return {
      controls: ["zoomControl","geolocationControl"],
      behaviors: ["scrollZoom", "drag"],
      settings: {
        apiKey: '8e90d07a-e408-4093-96da-6926fde0422b',
        lang: 'ru_RU',
        version: '2.1'
      },
      step: 0,
      name: '',
      phone: '',
      address: this.$store.state.localStorage.address,
      coords: this.$store.state.localStorage.coords
    }
  },
  methods: {
    onBoundsChange(e) {
      this.coords = e.originalEvent.newCenter;
      this.getAddress();
    },
    getAddress() {
      let self = this;
      ymaps.geocode(this.coords).then(function (res) {
        let firstGeoObject = res.geoObjects.get(0);
        self.address = firstGeoObject.getAddressLine();
      });
    },
    check() {
      if (this.$store.state.localStorage.price === 0) {
        return this.$router.push('/');
      }
      return true;
    }
  }
}
</script>

<style scoped>
@import 'assets/purchase/purchase-body.css';
</style>
