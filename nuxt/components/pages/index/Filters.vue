<template>
  <div class="img-bg mt-8 p-3 md:py-4 lg:py-8">
    <div class="lg:max-w-6xl lg:w-full lg:mx-auto">
      <h1 class="uppercase font-bold text-lg md:text-3xl lg:text-4xl mb-3 md:mb-4 lg:mb-8 text-center">
        {{ h1 }}
      </h1>
      <div class="text-sm md:text-base lg:text-xl" v-html="seoText" />
      <shared-feedback-forms />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    h1: {
      type: String,
      required: true,
    },
    seoText: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.img-bg {
  background-image: url('/images/pages/index/filters-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
