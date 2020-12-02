<template>
  <div class="px-3 max-w-4xl lg:w-full mx-auto">
    <h1 class="uppercase text-sm md:text-2xl lg:text-4xl font-bold text-center">
      {{ $t('pages.contacts.title') }}
    </h1>
    <div class="mt-8 md:mt-12 lg:mt-16 border border-black shadow px-2 py-5 md:py-12">
      <div class="text-sm md:text-xl lg:text-2xl font-bold text-center mb-2 md:mb-4 lg:mb-8">
        {{ $t('pages.contacts.table-title') }}
      </div>
      <div
        class="panel flex flex-col md:grid md:grid-cols-12 md:gap-y-8 text-center md:text-left md:max-w-lg md:mx-auto"
      >
        <div>{{ $t('pages.contacts.address.title') }}:</div>
        <div>{{ $t('pages.contacts.address.content') }}</div>
        <div>E-mail:</div>
        <div>praqua12@gmail.com</div>
        <div>{{ $t('pages.contacts.title') }}:</div>
        <div>
          <div v-for="contact in $t('pages.contacts.contacts.content')" :key="contact">
            {{ contact }}
          </div>
        </div>
        <div>{{ $t('pages.contacts.socials') }}:</div>
        <div class="flex justify-around">
          <fa :icon="['fab', 'viber']" />
          <fa :icon="['fab', 'telegram']" />
          <fa :icon="['fab', 'instagram']" />
          <fa :icon="['fab', 'facebook']" />
          <fa :icon="['fab', 'youtube-square']" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.panel {
  & > :nth-child(2n) {
    @apply mb-4 text-base;

    @screen md {
      @apply col-span-8 text-lg;
    }

    @screen lg {
      @apply col-span-9 text-xl;
    }
  }

  & > :nth-child(2n + 1) {
    @apply mb-3 text-lg;

    @screen md {
      @apply col-span-4 text-xl;
    }

    @screen lg {
      @apply col-span-3;
    }
  }

  & > :last-child {
    @apply text-4xl mb-0;

    & > :nth-child(1) {
      color: #7360f2;
    }

    & > :nth-child(2) {
      color: #0088cc;
    }

    & > :nth-child(3) {
      color: #d6249f;
    }

    & > :nth-child(4) {
      color: #3b5998;
    }

    & > :nth-child(5) {
      color: #ff0000;
    }
  }
}
</style>
