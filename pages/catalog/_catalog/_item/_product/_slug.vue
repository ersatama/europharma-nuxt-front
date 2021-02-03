<template>
  <productItem :path="path"></productItem>
</template>

<script>
import axios from 'axios'
import productItem from "/layouts/product/product";
export default {
  components: {
    productItem
  },
  data() {
    return {
      path:   [['Главная',''],['Каталог','/catalog']],
    }
  },
  created() {
    this.getCatalogPath();
  },
  methods: {
    getCatalogPath() {
      let self = this;
      let path = this.$route.path.split('/');
      axios.get('http://127.0.0.1:8000/web/catalog/'+path[2]+'/'+path[3]+'/'+path[4]).then(function(response) {
        let data  = response.data;
        data.forEach(function(value,index,array) {
          self.path.push([array[index].title,array[index].url]);
        })
      });
    }
  }
}
</script>

<style scoped>

</style>
