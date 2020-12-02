<template>
  <div class="px-3 max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
    <h1 class="text-lg md:text-2xl lg:text-4xl font-bold text-center">
      {{ $t('pages.products.container-station.title') }}
    </h1>
    <div
      class="border border-black shadow-lg p-2 md:p-5 lg:p-6 text-sm md:text-lg lg:text-xl space-y-1 md:space-y-2 lg:space-y-3"
    >
      <div v-html="seoText" />
    </div>
    <div class="flex justify-center">
      <img src="/images/pages/products/container-station/container.png" alt="Container station" />
    </div>
    <div class="md:text-center text-sm md:text-lg lg:text-xl space-y-2 md:space-y-3 lg:space-y-4 list-2">
      <div v-for="(item, index) in $t('pages.products.container-station.list-2')" :key="`list-2-${index}`">
        {{ item }}
      </div>
    </div>
    <div class="pb-8 md:pb-12 lg:pb-16">
      <shared-feedback-forms />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ app }) {
    const lang = app.i18n.locale
    const containerStationPage = await app.$strapi.find('container-station-page')
    return {
      title: containerStationPage.pageMetaTags[`title_${lang}`],
      description: containerStationPage.pageMetaTags[`description_${lang}`],
      seoText: containerStationPage[`seoText_${lang}`],
    }
  },
  head() {
    return {
      title: this.$data.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$data.description,
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.list-2 {
  & > :first-child {
    @apply text-green-500;
  }
}
</style>
