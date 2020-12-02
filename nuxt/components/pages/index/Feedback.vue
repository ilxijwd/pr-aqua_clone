<template>
  <div class="px-3 py-8 md:py-12 lg:py-16">
    <div class="text-sm md:text-2xl text-center uppercase font-bold mb-6 md:mb-12">
      {{ $t('pages.index.feedback.title') }}
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:max-w-lg md:mx-auto lg:max-w-6xl">
      <iframe
        class="lg:h-full lg:w-full place-self-center"
        src="https://www.youtube-nocookie.com/embed/by0x2abuRQI"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <shared-discount-form />
    </div>
  </div>
</template>
