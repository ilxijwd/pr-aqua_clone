<template>
  <div>
    <v-dialog />
    <modals-call-back />
    <modals-leave-review />
    <layout-header />
    <nuxt />
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
