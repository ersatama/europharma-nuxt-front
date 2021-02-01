<template>
  <div class="main-body">
    <div class="main-body-left">
      <div class="main-body-title"><span>{{ item.title }}</span></div>
      <div class="detail-info">
        <div class="detail-stars">
          <div class="detail-star"></div>
          <div class="detail-star"></div>
          <div class="detail-star"></div>
          <div class="detail-star"></div>
          <div class="detail-star"></div>
        </div>
        <div class="detail-reviews">12 отзыва</div>
        <div class="detail-brand">
          <div class="detail-brand-title">{{item.brand.title}}</div>
          <div class="detail-brand-icon" :style="{'background-image':'url('+item.brand.icon+')'}"></div>
        </div>
      </div>
      <div class="detail-main">
        <div class="detail-main-img">
          <div class="detail-main-img-list">
            <div class="detail-main-img-list-item" :class="[(index === img_index)? 'detail-main-img-list-item-sel':'']" :style="{'background-image':'url('+img.img+')'}" v-for="(img,index) in item.img" :key="index" @click="img_index = index"></div>
          </div>
          <div class="detail-main-img-view" :style="{'background-image':'url('+item.img[img_index].img+')'}"></div>
        </div>
        <div class="detail-main-info">
          <div class="detail-main-article">Артикул товара: {{item.id}}</div>
          <div class="detail-main-info-title">Описание</div>
          <div class="detail-main-info-description">{{item.description}}</div>
          <div class="detail-main-info-title">Характеристики</div>
          <div class="detail-main-table">
            <div class="detail-main-table-tr" v-for="(characteristic,index) in item.characteristics" :key="index" v-if="characteristic.title">
              <div class="detail-main-table-td">{{characteristic.filter_id.title}}</div>
              <div class="detail-main-table-td">{{characteristic.title}}</div>
            </div>
          </div>
          <div class="detail-main-delivery">
            <div class="detail-main-description">Время доставки: в пределах города 30-60 минут<br>Наличие: есть в наличии (количество ограничено)</div>
            <div class="detail-main-price">
              <div>
                <span>Стоимость товара:</span>
                <div>{{item.price}} ₸</div>
              </div>
            </div>
            <div class="detail-main-button">
              <div>
                <button class="detail-main-button-add">Добавить в корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-footer">
        <div class="detail-footer-title">
          <div class="detail-footer-title-item">Отзывы (12)</div>
        </div>
        <div class="detail-footer-reviews">
          <div class="profile-review">
            <div class="profile-review-name">
              <div>КИ</div>
            </div>
            <div class="profile-review-content">
              <div class="profile-review-content-title">
                Константин Иванов
                <div class="profile-review-content-stars">
                  <div class="profile-review-content-star-title">23 октября 2020</div>
                  <div class="profile-review-content-star-list">
                    <div class="profile-review-content-star"></div>
                    <div class="profile-review-content-star"></div>
                    <div class="profile-review-content-star"></div>
                    <div class="profile-review-content-star"></div>
                    <div class="profile-review-content-star"></div>
                  </div>
                </div>
              </div>
              <div class="profile-review-content-subtitle">Достоинства</div>
              <div class="profile-review-content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
              <div class="profile-review-content-subtitle">Недостатки</div>
              <div class="profile-review-content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div class="profile-review-content-subtitle">Комментарий</div>
              <div class="profile-review-content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
              <div class="profile-review-content-help">
                <div class="profile-review-content-help-title">Помог ли людям этот отзыв?</div>
                <div class="profile-review-content-help-btn">Да (12)</div>
                <div class="profile-review-content-help-btn">Нет (3)</div>
              </div>
            </div>
          </div>
          <div class="profile-review">
            <div class="profile-review-name">
              <div>КИ</div>
            </div>
            <div class="profile-review-content">
              <div class="profile-review-content-title">
                Константин Иванов
                <div class="profile-review-content-stars">
                  <div class="profile-review-content-star-title">23 октября 2020</div>
                  <div class="profile-review-content-star-list">
                    <div class="profile-review-content-star"></div>
                    <div class="profile-review-content-star"></div>
                    <div class="profile-review-content-star"></div>
                    <div class="profile-review-content-star"></div>
                    <div class="profile-review-content-star"></div>
                  </div>
                </div>
              </div>
              <div class="profile-review-content-subtitle">Достоинства</div>
              <div class="profile-review-content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
              <div class="profile-review-content-subtitle">Недостатки</div>
              <div class="profile-review-content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div class="profile-review-content-subtitle">Комментарий</div>
              <div class="profile-review-content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
              <div class="profile-review-content-help">
                <div class="profile-review-content-help-title">Помог ли людям этот отзыв?</div>
                <div class="profile-review-content-help-btn">Да (12)</div>
                <div class="profile-review-content-help-btn">Нет (3)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-body-right">
      <basket></basket>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import basket from '/layouts/basket/basket'

export default {
  components: {
    basket
  },
  props: ['item'],
  name: "detail",
  data() {
    return {
      img_index: 0
    }
  }
}
</script>

<style scoped>
@import "assets/product/detail.css";
</style>
