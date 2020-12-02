<template>
  <div class="px-3 text-sm md:text-lg lg:text-xl max-w-6xl mx-auto">
    <h1 class="text-xl md:text-2xl lg:text-4xl font-bold text-center">
      {{ $t('pages.about-us.title') }}
    </h1>
    <div class="mt-4 md:mt-8 lg:mt-12 max-w-3xl ml-auto">{{ $t('pages.about-us.equipment') }}:</div>
    <div class="font-bold flex flex-col items-center md:items-start mt-6 md:mt-5 lg:mt-8">
      <div>
        {{ $t('pages.about-us.developer') }}:
        <div class="md:inline">
          {{ $t('pages.about-us.developer-fullname') }}
        </div>
      </div>
      <div>
        {{ $t('pages.about-us.manufacturer') }}:
        <span class="text-green-500">{{ $t('pages.about-us.manufacturer-name') }}</span>
      </div>
      <div>
        {{ $t('pages.about-us.director') }}:
        <span class="text-green-500">{{ $t('pages.about-us.director-name') }}</span>
      </div>
    </div>
    <div class="custom-grid">
      <div style="grid-area: image">
        <img src="/images/pages/about-us/worker.png" alt="Worker" />
      </div>
      <div style="grid-area: we-made" v-html="$t('pages.about-us.we-made')" />
      <div style="grid-area: we-ship" class="md:col-span-2" v-html="$t('pages.about-us.sell')" />
    </div>
    <div class="mt-6 md:mt-8 lg:mt-12 flex flex-col lg:flex-row-reverse lg:justify-between">
      <div class="max-w-3xl">
        <div class="text-center lg:text-left text-green-500 md:text-xl lg:text-2xl">
          {{ $t('pages.about-us.capabilities.title') }}
          :
        </div>
        <ul class="list-inside list-disc mt-4 md:mt-12 lg:mt-0 space-y-3">
          <li v-for="(item, index) in $t('pages.about-us.capabilities.list')" :key="`list-${index}`">
            {{ item }}
          </li>
        </ul>
        <div class="text-center md:text-left text-green-500 mt-6 md:mt-8 lg:mt-20">
          {{ $t('pages.about-us.20-years') }}
        </div>
        <div class="mt-4 md:m-0">
          {{ $t('pages.about-us.our-job') }}
        </div>
      </div>
      <div
        class="mt-5 md:mt-8 lg:m-0 flex flex-col md:flex-row lg:flex-col md:justify-between space-y-5 md:space-y-0 lg:space-y-5"
      >
        <img class="self-start w-40 md:w-48" src="/images/pages/about-us/gramota-1.png" alt="Diploma 1" />
        <img class="self-center w-40 md:w-48" src="/images/pages/about-us/gramota-2.png" alt="Diploma 2" />
        <img class="self-end w-40 md:w-48" src="/images/pages/about-us/gramota-3.png" alt="Diploma 3" />
      </div>
    </div>
    <div class="text-center mt-4 md:mt-8 lg:mt-12 pb-4 md:pb-8 lg:pb-12">
      <div class="text-green-500 md:text-xl">
        {{ $t('pages.about-us.we-value') }}
      </div>
      <div class="text-red-600 mt-2 md:mt-8 lg:mt-16">{{ $t('pages.about-us.attention') }}!</div>
      <div class="mt-4 md:mt-5 lg:mt-4 max-w-sm mx-auto text-left">{{ $t('pages.about-us.counterfeits') }}:</div>
      <div class="text-green-500 mt-2 md:mt-5 lg:mt-4 text-left">{{ $t('pages.about-us.certificate') }}:</div>
      <div class="text-green-500 mt-2 md:mt-5 lg:mt-4 text-base md:text-2xl font-bold">
        {{ $t('pages.about-us.certificated-manufacturers') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ app }) {
    const lang = app.i18n.locale
    const aboutUsPage = await app.$strapi.find('about-us-page')
    return {
      title: aboutUsPage.pageMetaTags[`title_${lang}`],
      description: aboutUsPage.pageMetaTags[`description_${lang}`],
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
.custom-grid {
  @apply grid mt-6 gap-5;
  grid-template-areas:
    'we-made'
    'image'
    'we-ship';

  @screen md {
    @apply gap-x-12 gap-y-8 mt-8;
    grid-template-areas:
      'image we-made'
      'we-ship we-ship';
  }

  @screen lg {
    @apply gap-x-12 gap-y-1 mt-8;
    grid-template-areas:
      'image we-made'
      'image we-ship';

    & > :first-child {
      @apply flex items-center;
    }

    & > :not(:first-child) {
      @apply max-w-3xl ml-auto;
    }
  }
}
</style>
