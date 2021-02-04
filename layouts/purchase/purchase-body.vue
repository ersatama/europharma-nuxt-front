<template>
  <div class="purchase-body">
    <template v-if="step === 0">
      <div class="purchase-form">
        <div class="purchase-form-title">Личные данные</div>
        <div class="purchase-form-split">
          <div class="purchase-form-group">
            <div class="purchase-form-group-title">Фамилия Имя</div>
            <input type="text" class="purchase-form-group-input" ref="name" v-model="name" maxlength="255">
          </div>
          <div class="purchase-form-group">
            <div class="purchase-form-group-title">Номер телефона</div>
            <input type="text" class="purchase-form-group-input" ref="phone" v-model="phone" maxlength="255">
          </div>
        </div>
        <div class="purchase-form-title">Адрес доставки</div>
        <div class="purchase-form-single">
          <div class="purchase-form-group">
            <div class="purchase-form-group-title">Улица, дом</div>
            <input type="text" class="purchase-form-group-input" ref="address" v-model="address" maxlength="255">
          </div>
        </div>
        <div class="purchase-form-split">
          <div class="purchase-form-group">
            <div class="purchase-form-group-title">Кв./офис</div>
            <input type="text" class="purchase-form-group-input" v-model="apartment">
          </div>
          <div class="purchase-form-group">
            <div class="purchase-form-group-title">Домофон</div>
            <input type="text" class="purchase-form-group-input" v-model="intercom">
          </div>
        </div>
        <div class="purchase-form-split">
          <div class="purchase-form-group">
            <div class="purchase-form-group-title">Подъезд</div>
            <input type="text" class="purchase-form-group-input" v-model="entrance">
          </div>
          <div class="purchase-form-group">
            <div class="purchase-form-group-title">Этаж</div>
            <input type="text" class="purchase-form-group-input" v-model="floor">
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
    <template v-else-if="step === 1">
      <div class="purchase-form">
        <div class="purchase-form-title">Адрес доставки</div>
        <div class="purchase-form-desc">{{address}} {{apartment}} {{intercom}} {{entrance}} {{floor}}</div>
        <div class="purchase-form-desc">{{name}}, {{phone}}</div>
        <div class="purchase-form-title">Метод оплаты</div>
        <div class="purchase-form-list" :class="[(payment===0?'purchase-form-list-sel':'')]" @click="payment = 0">
          <div>
            <div class="purchase-form-list-icon"></div>
            <div class="purchase-form-list-title">
              <div class="purchase-form-list-name">Оплата банковской картой</div>
              <div class="purchase-form-list-desc">Оплата черз сервиса ePay</div>
            </div>
            <div class="purchase-form-list-img"></div>
          </div>
        </div>
        <div class="purchase-form-list" :class="[(payment===1?'purchase-form-list-sel':'')]" @click="payment = 1">
          <div>
            <div class="purchase-form-list-icon"></div>
            <div class="purchase-form-list-title">
              <div class="purchase-form-list-name">Оплата наличными</div>
              <div class="purchase-form-list-desc">Надо заранее указать сдачу</div>
            </div>
            <div class="purchase-form-list-img"></div>
          </div>
        </div>
        <div class="purchase-form-surrender" v-if="payment === 1">
          <div class="purchase-form-surrender-title">Сдача от суммы</div>
          <input type="text" class="purchase-form-surrender-input">
        </div>
        <div class="purchase-form-list" :class="[(payment===2?'purchase-form-list-sel':'')]" @click="payment = 2">
          <div>
            <div class="purchase-form-list-icon"></div>
            <div class="purchase-form-list-title">
              <div class="purchase-form-list-name">POS-термирнал</div>
              <div class="purchase-form-list-desc">Оплата картой курьеру через POS-термирнал</div>
            </div>
            <div class="purchase-form-list-img"></div>
          </div>
        </div>
      </div>
      <div class="purchase-map">
        <div class="purchase-map-content-payment">
          <yandex-map :behaviors="[]" :controls="[]" :settings="settings" :coords="coords" zoom="17" style="width: 100%; height: 100%;" @boundschange="onBoundsChange"></yandex-map>
        </div>
        <button class="purchase-map-return" @click="step = 0">Изменить адрес доставки</button>
      </div>
    </template>
    <template v-else>
      <div>спс за покупку =)</div>
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
      <button class="purchase-footer-button" @click="next()" v-if="step === 0">Перейти к оплате</button>
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
      apartment: '',
      intercom: '',
      entrance: '',
      floor: '',
      address: this.$store.state.localStorage.address,
      payment: 0,
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
    },
    next() {
      let name = this.$refs.name;
      if (name.value.trim() === '') {
        return name.focus();
      }

      let phone = this.$refs.phone;
      if (phone.value.trim() === '') {
        return phone.focus();
      }

      let address = this.$refs.address;
      if (address.value.trim() === '') {
        return address.focus();
      }

      this.step = 1;
    }
  }
}
</script>

<style scoped>
@import 'assets/purchase/purchase-body.css';
</style>
