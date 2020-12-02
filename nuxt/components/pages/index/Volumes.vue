<template>
  <div class="mt-8 md:mt-12 lg:mt-16 px-3 lg:px-0 lg:max-w-6xl lg:mx-auto">
    <div class="uppercase text-sm md:text-2xl font-bold text-center mb-3 md:mb-8 lg:mb-12">
      {{ $t('pages.index.volumes.title') }}
    </div>
    <div class="flex flex-col">
      <div class="text-sm md:text-base">
        {{ $t('pages.index.volumes.description') }}
      </div>
      <div class="flex flex-col md:flex-row md:justify-center items-center mt-6 md:mt-8">
        <img src="/images/pages/index/volume-1.png" alt="Volume one" />
        <img src="/images/pages/index/volume-2.png" alt="Volume two" />
      </div>
    </div>
    <div class="text-sm md:text-base mt-6 md:mt-8" v-html="$t('pages.index.volumes.note')" />
  </div>
</template>
