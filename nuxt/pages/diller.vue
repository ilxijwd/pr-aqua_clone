<template>
  <div class="mx-3 text-sm md:text-lg lg:text-xl pb-8 md:pb-12 lg:pb-16 lg:max-w-6xl lg:mx-auto">
    <div class="flex flex-col md:flex-row items-center md:justify-center md:gap-16 mb-8 md:mb-12 lg:mb-16">
      <div class="mx-2 mb-8 md:max-w-xs lg:max-w-2xl md:m-0">
        <div v-for="(item, index) in $t('pages.diller.hero')" :key="`list-1-${index}`">
          {{ item }}
        </div>
      </div>
      <div>
        <img src="/images/pages/diller/дед.png" alt="Old man" />
      </div>
    </div>
    <div>
      <div class="font-bold text-center md:text-left">{{ $t('pages.diller.offers') }}:</div>
      <div>{{ $t('pages.diller.legal-entity.title') }}:</div>
      <ul class="list-disc list-inside">
        <li v-for="(item, index) in $t('pages.diller.legal-entity.list')" :key="`list-2-${index}`">
          {{ item }}
        </li>
      </ul>
      <div>{{ $t('pages.diller.individual-entity.title') }}:</div>
      <ul class="list-disc list-inside">
        <li v-for="(item, index) in $t('pages.diller.individual-entity.list')" :key="`list-3-${index}`">
          {{ item }}
        </li>
      </ul>
      <div class="text-green-500 italic text-center md:text-left">{{ $t('pages.diller.note') }}:</div>
      <div>
        {{ $t('pages.diller.manufacturer') }}
      </div>
      <div>{{ $t('pages.diller.waiting') }}:</div>
      <div>{{ $t('pages.diller.meeting') }}:</div>
      <ul class="list-disc list-inside">
        <li v-for="(item, index) in $t('pages.diller.meeting-progress')" :key="`list-4-${index}`">
          {{ item }}
        </li>
      </ul>
      <div>{{ $t('pages.diller.meeting-results-title') }}:</div>
      <ul class="list-disc list-inside">
        <li v-for="(item, index) in $t('pages.diller.meeting-results')" :key="`list-5-${index}`">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ app }) {
    const lang = app.i18n.locale
    const dillerPage = await app.$strapi.find('diller-page')
    return {
      title: dillerPage.pageMetaTags[`title_${lang}`],
      description: dillerPage.pageMetaTags[`description_${lang}`],
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
