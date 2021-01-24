<template>
  <div>
    <FooterHeaderContent></FooterHeaderContent>
    <FooterBodyContent></FooterBodyContent>
    <FooterFooterContent></FooterFooterContent>
  </div>
</template>

<script>
import FooterHeaderContent from '/layouts/footer/header/FooterHeaderContent.vue';
import FooterBodyContent from '/layouts/footer/body/footer-body-content.vue';
import FooterFooterContent from '/layouts/footer/footer/FooterFooterContent.vue';
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
