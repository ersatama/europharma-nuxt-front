<template>
  <b-modal id="map" size="lg" title="Адрес доставки" :hide-footer="true">
    <div class="map">
      <div class="map-header">
        <div class="map-header-search">
          <button class="map-header-search-button">Местоположение</button>
          <input type="text" class="map-header-search-input" placeholder="Адрес на карте" v-model="map.title">
        </div>
        <button class="map-header-btn" @click="setAddress()">Подтвердить</button>
      </div>
      <div class="map-body">
        <div class="map-marker"></div>
        <yandex-map :behaviors="behaviors" :controls="controls" :settings="settings" :coords="coords" zoom="13" style="width: 100%; height: 350px;" @boundschange="onBoundsChange"></yandex-map>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  components: {
    yandexMap,
    ymapMarker
  },
  name: "map.vue",
  data() {
    return {
      controls: ["zoomControl","geolocationControl"],
      behaviors: ["scrollZoom", "drag"],
      settings: {
        apiKey: '8e90d07a-e408-4093-96da-6926fde0422b',
        lang: 'ru_RU',
        version: '2.1'
      },
      coords: [43.238293, 76.945465],
      map: {
        title: '',
        coords: this.coords
      }
    }
  },
  created() {
    if (this.$store.state.localStorage.address) {
      this.map.title  = this.$store.state.localStorage.address;
      this.map.coords = this.$store.state.localStorage.coords;
    }
  },
  methods: {
    setAddress() {
      this.$bvModal.hide('map');
      this.$store.commit('localStorage/setAddress',this.map.title);
      this.$store.commit('localStorage/setCoords',this.map.coords);
    },
    onBoundsChange(e) {
      this.coords = e.originalEvent.newCenter;
      this.getAddress();
    },
    getAddress() {
      let self = this;
        ymaps.geocode(this.coords).then(function (res) {
          let firstGeoObject = res.geoObjects.get(0);
          self.map.title = firstGeoObject.getAddressLine();
      });
    }
  }
}
</script>

<style>
  @import "assets/modal/map.css";
</style>
