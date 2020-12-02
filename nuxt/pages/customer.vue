<template>
  <div class="px-3 lg:max-w-6xl lg:mx-auto">
    <h1 class="text-green-600 text-xs md:text-2xl uppercase text-center font-bold">
      {{ $t('pages.customer.title') }}
    </h1>
    <div class="mt-6 md:mt-12 lg:mt-16 flex justify-center">
      <img src="/images/pages/customer/preview-image.png" alt="Water purification" />
    </div>
    <ul class="text-green-500 list-inside list-disc mt-5 lg:mt-16 text-sm md:text-lg">
      <li v-for="item in $t('pages.customer.green-list')" :key="item">
        {{ item }}
      </li>
    </ul>
    <div class="text-sm md:text-lg mt-5">
      {{ $t('pages.customer.another-list.title') }}
      <ul class="list-inside list-decimal">
        <li v-for="(item, index) in $t('pages.customer.another-list.list')" :key="`another-list-${index}`">
          {{ item }}
        </li>
      </ul>
      {{ $t('pages.customer.another-list.description') }}
    </div>
    <div class="mt-8 md:mt-10 lg:mt-16 uppercase text-green-600 text-center font-bold text-xxs md:text-lg">
      {{ $t('pages.customer.example-waterpure-title') }}
    </div>
    <div
      class="mt-4 md:mt-8 lg:mt-16 pb-4 md:pb-8 lg:pb-16 flex flex-col md:flex-row items-center md:item space-y-5 md:space-y-0 md:space-x-5 md:items-start md:justify-center"
    >
      <div>
        <div>
          <img src="/images/pages/customer/prod-1.png" alt="Water purification product 1" />
        </div>
        <div class="text-xs md:text-sm text-center mt-3">
          <div>
            {{ $t('pages.customer.images-descriptions.0.0') }}
          </div>
          <div>{{ $t('pages.customer.images-descriptions.0.1') }}</div>
        </div>
      </div>
      <div>
        <img src="/images/pages/customer/prod-2.png" alt="Water purification product 2" />
      </div>
      <div>
        <div>
          <img src="/images/pages/customer/prod-3.png" alt="Water purification product 3" />
        </div>
        <div class="text-xs md:text-sm text-center mt-3">
          <div>{{ $t('pages.customer.images-descriptions.1.0') }}</div>
          <div>{{ $t('pages.customer.images-descriptions.1.1') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ app }) {
    const lang = app.i18n.locale
    const customerPage = await app.$strapi.find('customer-page')
    return {
      title: customerPage.pageMetaTags[`title_${lang}`],
      description: customerPage.pageMetaTags[`description_${lang}`],
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
