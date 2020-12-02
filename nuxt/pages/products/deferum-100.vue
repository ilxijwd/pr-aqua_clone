<template>
  <div class="px-3 max-w-6xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
    <h1 class="font-bold text-center text-lg md:text-2xl lg:text-4xl">
      {{ $t('pages.products.deferum-100.title') }}
    </h1>
    <div class="border border-black shadow-2xl p-2 md:p-5 lg:p-8 text-sm md:text-lg lg:text-xl">
      {{ seoText }}
    </div>
    <div class="flex flex-col items-center gap-8 md:flex-row md:justify-between">
      <img src="/images/pages/products/deferum-100/def-1.png" alt="Deferum 100 1" />
      <img src="/images/pages/products/deferum-100/def-2.png" alt="Deferum 100 2" />
      <img src="/images/pages/products/deferum-100/def-3.png" alt="Deferum 100 3" />
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
    const deferum100Page = await app.$strapi.find('deferum-100-page')
    return {
      seoText: deferum100Page[`seoText_${lang}`],
      title: deferum100Page.pageMetaTags[`title_${lang}`],
      description: deferum100Page.pageMetaTags[`description_${lang}`],
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
