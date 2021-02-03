export const state = () => ({
  address: 'не выбрано',
  coords: [43.238293, 76.945465],
  products: [],
  price: 0
})
export const mutations = {
  setAddress(state,value) {
    state.address = value
  },
  setCoords(state,coords) {
    state.coords = coords
  },
  removeProduct(state, product) {
    let price = 0;
    state.products.forEach(function(value,key,array) {
      if (array[key].item.id === product.id) {
        array[key].limit--;
        price += array[key].limit * product.price;
        if (array[key].limit === 0) {
          array.splice(key, 1);
        }
      }
    });
    state.price = price;
  },
  addProduct(state,product) {
    if (state.address !== 'Не выбрано') {
      let status  = true;
      let price   = 0;
      let priceStatus = false;
      state.products.forEach(function(value,key,array) {
        if (array[key].item.id === product.id) {
          status = false;
          if (array[key].limit < product.quantity) {
            array[key].limit++;
            price += product.price * array[key].limit;
            priceStatus = true;
          }
        }
      });
      if (status) {
        priceStatus = true;
        price += product.price * 1;
        state.products.push({
          limit: 1,
          item: product
        });
      }
      if (priceStatus) {
        state.price = price;
      }
    } else {
      this.$bvModal.show('map');
    }
  }
}
