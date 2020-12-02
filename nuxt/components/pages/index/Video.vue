<template>
  <div class="py-8 md:py-12 lg:py-16 px-2 flex flex-col">
    <div class="font-bold uppercase text-sm mb-6 md:mb-12 lg:mb-16 text-center md:text-2xl lg:text-4xl">
      {{ $t('pages.index.video.title') }}
    </div>
    <div class="flex justify-center">
      <iframe
        class="video"
        src="https://www.youtube.com/embed/2PqFZ-G9or4"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video {
  @screen md {
    width: 583px;
    height: 326px;
  }

  @screen lg {
    width: 705px;
    height: 394px;
  }
}
</style>
