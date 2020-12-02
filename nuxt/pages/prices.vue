<template>
  <div>
    <div class="px-3">
      <h1 class="uppercase font-bold text-center text-xl md:text-2xl lg:text-4xl">
        {{ $t('pages.prices.title') }}
      </h1>
      <div
        class="mt-8 md:mt-12 lg:mt-16 flex flex-col lg:flex-row lg:items-center gap-8 md:gap-12 lg:max-w-6xl lg:w-full lg:mx-auto"
      >
        <div class="px-4 py-6 md:py-4 border border-black shadow-lg text-sm md:text-base lg:text-lg lg:w-1/2">
          {{ $t('pages.prices.aside.main-text') }}:
          <div class="mt-2 space-y-2">
            <div v-for="(item, index) in $t('pages.prices.aside.list')" :key="`list-${index}`">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="md:max-w-lg md:w-full md:mx-auto lg:w-1/2">
          <shared-discount-form />
        </div>
      </div>
    </div>
    <div class="max-w-6xl w-full mx-auto pb-8 md:pb-12 lg:pb-16 px-3">
      <shared-feedback-forms />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ app }) {
    const lang = app.i18n.locale
    const articlesPage = await app.$strapi.find('prices-page')
    return {
      title: articlesPage.pageMetaTags[`title_${lang}`],
      description: articlesPage.pageMetaTags[`description_${lang}`],
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
