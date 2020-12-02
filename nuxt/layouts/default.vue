<template>
  <div>
    <v-dialog />
    <modals-call-back />
    <modals-leave-review />
    <layout-header />
    <div class="page-bg spacer">
      <div class="mb-8 md:mb-12 lg:mb-16"></div>
      <nuxt />
    </div>
    <layout-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.page-bg {
  background-image: url('/images/pages/contacts/water-bg.png');
  @apply w-full bg-center bg-no-repeat bg-cover;
}
</style>
