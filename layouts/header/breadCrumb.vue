<template>
  <div class="breadcrumb-title" v-html="url"></div>
</template>
<script>
export default {
  name: "breadCrumb",
  props: ['path'],
  data() {
    return {
      url: ''
    }
  },
  mounted() {
    this.path.forEach(function callback(currentValue, index, array) {
      array[index] = '<span>'+currentValue+'</span>';
    });
    this.url  = this.path.join(' > ');
  }
}
</script>

<style>
.breadcrumb-title {
  font-size: 18px;
  line-height: 20px;
  color: #A2A2A2;
  margin: 30px 0 30px 64px;
}
.breadcrumb-title > span:last-child {
  color: #C5E319;
}
</style>
