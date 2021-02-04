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
  clearProduct(state) {
    state.products  = [];
    state.price     = 0;
  },
  removeProduct(state, product) {
    state.products.forEach(function(value,key,array) {
      if (array[key].item.id === product.id) {
        array[key].limit--;
        if (array[key].limit === 0) {
          array.splice(key, 1);
        }
      }
    });
    let price   = 0;
    state.products.forEach(function(value,key,array) {
      price += array[key].limit * array[key].item.price;
    });
    state.price = price;
  },
  addProduct(state,product) {
    let status  = true;
    state.products.forEach(function(value,key,array) {
      if (array[key].item.id === product.id) {
        status = false;
        if (array[key].limit < product.quantity) {
          array[key].limit++;
        }
      }
    });
    if (status) {
      if (0 < product.quantity) {
        state.products.push({
          limit: 1,
          item: product
        });
      }
    }
    let price   = 0;
    state.products.forEach(function(value,key,array) {
      price += array[key].limit * array[key].item.price;
    });
    state.price = price;
  }
}
