<template>
  <div>
    <FooterHeaderContent></FooterHeaderContent>
    <FooterBodyContent></FooterBodyContent>
    <FooterFooterContent></FooterFooterContent>
  </div>
</template>

<script>
import FooterHeaderContent from '/layouts/footer/header/FooterHeaderContent.vue';
import FooterBodyContent from '/layouts/footer/body/FooterBodyContent.vue';
import FooterFooterContent from '/layouts/footer/footer/FooterFooterContent.vue';
export default {
  components: {
    FooterHeaderContent,
    FooterBodyContent,
    FooterFooterContent
  },
  name: "FooterContent"
}
</script>
<style>
  @import 'assets/footer/footer.css';
</style>
