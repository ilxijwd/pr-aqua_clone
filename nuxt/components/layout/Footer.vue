<template>
  <div class="bg-footer text-white p-2 pt-6">
    <div class="grid grid-cols-12 gap-1 md:gap-0 lg:max-w-6xl lg:mx-auto">
      <div class="col-span-6 flex flex-col justify-between md:flex-row-reverse md:col-span-7">
        <div class="flex flex-col md:mr-3 lg:mr-12">
          <div class="sm:hidden md:block md:mb-2">
            {{ $t('footer.water-purification') }}
          </div>
          <nuxt-link :to="localePath('/')" class="self-center">
            <img src="/images/layout/logo.png" style="width: 46px; height: 49px" alt="logo" />
          </nuxt-link>
        </div>
        <div>
          <div class="mb-2">{{ $t('footer.we-are-close') }}</div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2531.4917376713124!2d26.2285518!3d50.6179813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x224630005cd63fb1!2sPiar%20-%20Akva!5e0!3m2!1sru!2sua!4v1603821423388!5m2!1sru!2sua"
            class="w-full lg:h-48"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
      <div
        class="col-span-6 footer-info flex flex-col text-center md:text-left md:grid grid-cols-12 md:col-span-5 md:ml-3 lg:text-base lg:place-self-end lg:self-start"
        style="font-size: 10px"
      >
        <div>{{ $t('footer.address.title') }}:</div>
        <div>{{ $t('footer.address.content') }}</div>
        <div>E-mail:</div>
        <div>praqua12@gmail.com</div>
        <div>{{ $t('footer.contacts.title') }}:</div>
        <div>
          <div v-for="contact in $t('footer.contacts.content')" :key="contact">
            {{ contact }}
          </div>
        </div>
        <div>{{ $t('footer.socials') }}:</div>
        <div class="icons space-x-2 md:space-x-4">
          <fa :icon="['fab', 'viber']" />
          <fa :icon="['fab', 'telegram']" />
          <fa :icon="['fab', 'instagram']" />
          <fa :icon="['fab', 'facebook']" />
          <fa :icon="['fab', 'youtube-square']" />
        </div>
        <div class="md:place-self-end md:mt-4">
          <button class="bg-gray-500 text-black rounded-lg px-2 md:text-base" @click="$modal.show('call-back-modal')">
            {{ $t('footer.request-a-call') }}
          </button>
        </div>
      </div>
    </div>
    <div class="text-center text-xs mt-2">
      {{ $t('footer.all-rights-reserved') }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.footer-info {
  & > :nth-child(2n) {
    @apply col-span-8 mb-2;

    @media (min-width: 768px) {
      font-size: 12px;
    }

    @media (min-width: 1366px) {
      font-size: 16px;
      grid-column: span 9 / span 9;
    }
  }

  & > :nth-child(2n + 1) {
    @apply col-span-4 text-xs mb-1;

    @media (min-width: 1366px) {
      font-size: 14px;
      grid-column: span 3 / span 3;
    }
  }

  & > :last-child {
    @apply col-span-12;
  }
}

.icons {
  & > * {
    @apply text-lg;

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

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
</style>
