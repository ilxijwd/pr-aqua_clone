<template>
  <div class="bg-header-primary fixed z-50 w-full">
    <div class="w-full flex flex-wrap justify-between md:items-center md:px-4 md:py-2 lg:mx-auto lg:max-w-6xl">
      <nuxt-link :to="localePath('/')" class="order-1 ml-2 my-2 md:m-0">
        <img class="logo" src="/images/layout/logo.png" alt="logo" />
      </nuxt-link>
      <nav class="order-3 md:order-2 w-full bg-header-secondary md:bg-header-primary md:max-w-md lg:max-w-xl">
        <ul class="flex justify-between p-2 text-xs font-semibold text-white lg:text-base">
          <li>
            <nuxt-link :to="localePath('/customer')">{{ $t('header.navigation.for-customers') }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/diller')">{{ $t('header.navigation.for-diller') }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/articles')">{{ $t('header.navigation.articles') }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/prices')">{{ $t('header.navigation.prices') }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/contacts')">{{ $t('header.navigation.contacts') }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/about-us')">{{ $t('header.navigation.about-us') }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="flex mr-2 my-2 order-2 md:order-3 space-x-3 md:m-0">
        <img
          class="language-sphere"
          src="/images/layout/languages/ua.png"
          alt="Украинский язык"
          @click="$i18n.setLocale('ua')"
        />
        <img
          class="language-sphere"
          src="/images/layout/languages/ru.png"
          alt="Русский язык"
          @click="$i18n.setLocale('ru')"
        />
        <img
          class="language-sphere"
          src="/images/layout/languages/en.png"
          alt="Английский язык"
          @click="$i18n.setLocale('en')"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  @media (min-width: 320px) {
    height: 32px;
    width: 30px;
  }

  @media (min-width: 768px) {
    height: 62px;
    width: 58px;
  }

  @media (min-width: 1366px) {
    height: 72px;
    width: 68px;
  }
}

.language-sphere {
  cursor: pointer;

  @media (min-width: 320px) {
    height: 30px;
    width: 30px;
  }

  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
  }

  @media (min-width: 1366px) {
    height: 58px;
    width: 58px;
  }
}
</style>
