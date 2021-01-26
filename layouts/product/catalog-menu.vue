<template>
  <div class="catalog-all">
    <div class="catalog-menu">
      <div class="catalog-menu-item">
        <label class="catalog-menu-item-title">Цена</label>
        <div class="catalog-menu-price-input">
          <button class="text-secondary">от <span class="text-dark font-weight-bold">25 000 ₸ </span></button>
          <button class="text-secondary">до <span class="text-dark font-weight-bold">75 000 ₸ </span></button>
        </div>
        <div class="catalog-menu-price-range">
          <div class="catalog-menu-price-range-line">
            <div class="catalog-menu-price-range-line-in">
              <div class="catalog-menu-price-range-line-in-min"></div>
              <div class="catalog-menu-price-range-line-in-max"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="catalog-menu-item">
        <label class="catalog-menu-item-title">Производитель</label>
        <div class="catalog-menu-options">
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">Apple</div>
          </div>
          <div class="catalog-menu-option catalog-menu-option-checked">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">Honor</div>
          </div>
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">Huawei</div>
          </div>
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">Meizu</div>
          </div>
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">Oppo</div>
          </div>
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">Xiaomi</div>
          </div>
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">Samsung</div>
          </div>
        </div>
      </div>
      <div class="catalog-menu-item">
        <label class="catalog-menu-item-title">Платформа</label>
        <div class="catalog-menu-options">
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">Android</div>
          </div>
          <div class="catalog-menu-option catalog-menu-option-checked">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">iOS</div>
          </div>
        </div>
      </div>
      <div class="catalog-menu-item">
        <label class="catalog-menu-item-title">Диагональ экрана</label>
        <div class="catalog-menu-options">
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">До 4</div>
          </div>
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">4.1 - 5</div>
          </div>
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">5 - 6</div>
          </div>
        </div>
      </div>
      <div class="catalog-menu-item">
        <label class="catalog-menu-item-title">Рейтинг товара</label>
        <div class="catalog-menu-options">
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">
              <div class="catalog-menu-option-rating">
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star-disabled"></div>
              </div>
            </div>
          </div>
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">
              <div class="catalog-menu-option-rating">
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star-disabled"></div>
              </div>
            </div>
          </div>
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">
              <div class="catalog-menu-option-rating">
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star-disabled"></div>
              </div>
            </div>
          </div>
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">
              <div class="catalog-menu-option-rating">
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star-disabled"></div>
              </div>
            </div>
          </div>
          <div class="catalog-menu-option">
            <div class="catalog-menu-option-checkbox"></div>
            <div class="catalog-menu-option-checkbox-title">
              <div class="catalog-menu-option-rating">
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star"></div>
                <div class="catalog-menu-option-rating-star-disabled"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
name: "catalog-menu"
}
</script>

<style>
@import 'assets/product/catalog-menu.css';
</style>
