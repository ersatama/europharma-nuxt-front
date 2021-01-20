<template>
  <div class="basket-content">
    <div class="basket-content-menu">
      <yandex-map :settings="settings" :coords="[54.7, 39.7]" zoom="10"
                   style="width: 360px; height: 700px;">
        <!--Markers-->
      </yandex-map>
    </div>
    <div class="btn basket-content-button font-weight-bold text-white w-100">Уточнить адрес доставки</div>
  </div>
</template>
<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  components: { yandexMap, ymapMarker },
  name: "Basket.vue",
  data() {
    return {
      settings: {
        apiKey: '8e90d07a-e408-4093-96da-6926fde0422b',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      }
    }
  }

}
</script>
<style>
@import '../../assets/basket/basket.css';
</style>
