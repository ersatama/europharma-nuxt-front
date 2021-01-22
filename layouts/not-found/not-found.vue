<template>
  <div class="not-found">
    <div class="not-found-code">4<span>0</span>4</div>
    <div class="not-found-title">Страница не найдена</div>
  </div>
</template>

<script>
export default {
name: "not-found"
}
</script>

<style scoped>
.not-found {
  margin: 150px auto 150px auto;
  display: table;
  text-align: center;
  color: #37424D;
}
.not-found-code {
  font-size: 100px;
}
.not-found-code > span {
  color: #C5DA5A;
}
.not-found-title {
  font-size: 20px;
  color: #92939B;
}
</style>
