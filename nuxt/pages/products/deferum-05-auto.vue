<template>
  <div class="px-3 space-y-8 md:space-y-12 lg:space-y-16 max-w-6xl mx-auto">
    <h1 class="text-center font-bold text-lg md:text-2xl lg:text-4xl">
      {{ $t('pages.products.deferum-05-auto.title') }}
    </h1>
    <div
      class="border border-black shadow-lg p-2 md:p-5 lg:p-6 space-y-3 md:space-y-4 lg:space-y-6 leading-5 md:leading-normal text-sm md:text-xl"
    >
      <h2 class="font-bold text-center text-base md:text-lg lg:text-2xl">
        {{ $t('pages.products.deferum-05-auto.tech-process.title') }}
      </h2>
      <div>
        {{ seoText1 }}
      </div>
      <h3 class="font-bold text-center lg:text-2xl">
        {{ $t('pages.products.deferum-05-auto.deferum-05.title') }}
      </h3>
      <div>
        {{ seoText2 }}
      </div>
    </div>
    <div class="text-center font-bold md:text-xl lg:text-4xl">
      {{ $t('pages.products.deferum-05-auto.specs') }}
    </div>
    <table class="info-table">
      <tbody>
        <tr v-for="(row, row_index) in $t('pages.products.deferum-05-auto.table')" :key="`table-row-${row_index}`">
          <td v-for="(col, col_index) in row" :key="`table-cell-${col_index}`">
            {{ col }}
          </td>
        </tr>
      </tbody>
    </table>
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
    const deferum05AutoPage = await app.$strapi.find('deferum-05-auto-page')
    return {
      seoText1: deferum05AutoPage[`seoText_1_${lang}`],
      seoText2: deferum05AutoPage[`seoText_2_${lang}`],
      title: deferum05AutoPage.pageMetaTags[`title_${lang}`],
      description: deferum05AutoPage.pageMetaTags[`description_${lang}`],
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
.info-table {
  @apply table-fixed text-sm mx-auto;

  @screen md {
    @apply max-w-xl text-base;
  }

  td {
    @apply border px-2 py-1;
  }

  tbody {
    @apply text-center text-xs;

    @screen md {
      @apply text-sm;
    }

    @screen lg {
      @apply text-lg;
    }

    & > tr:nth-child(2n + 1) {
      @apply bg-gray-100;
    }

    & > tr:nth-child(2n) {
      @apply bg-gray-200;
    }
  }
}
</style>
