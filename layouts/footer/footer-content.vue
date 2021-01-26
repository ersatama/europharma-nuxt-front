<template>
  <div>
    <FooterHeaderContent></FooterHeaderContent>
    <FooterBodyContent></FooterBodyContent>
    <FooterFooterContent></FooterFooterContent>
  </div>
</template>

<script>
import FooterHeaderContent from '/layouts/footer/header/footer-header-content.vue';
import FooterBodyContent from '/layouts/footer/body/footer-body-content.vue';
import FooterFooterContent from '/layouts/footer/footer/footer-footer-content.vue';
export default {
  components: {
    FooterHeaderContent,
    FooterBodyContent,
    FooterFooterContent
  },
  name: "footer-content"
}
</script>
<style>
  @import 'assets/footer/footer-content.css';
</style>
