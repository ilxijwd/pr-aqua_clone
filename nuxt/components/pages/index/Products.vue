<template>
  <div class="px-3">
    <div class="uppercase font-bold text-sm md:text-2xl mb-6 text-center">
      {{ $t('pages.index.products.title') }}
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-9 md:gap-y-8 lg:gap-x-40 lg:gap-y-12 products lg:max-w-6xl lg:mx-auto"
    >
      <div v-for="(product, index) in $t('pages.index.products.list')" :key="`product-${index}`">
        <div>
          <div>{{ product.name }}</div>
          <div>
            <button @click="$modal.show('call-back-modal')">{{ $t('pages.index.products.price') }}</button>
            <nuxt-link :to="localePath(`/products/${product.slug}`)">{{
              $t('pages.index.products.details')
            }}</nuxt-link>
          </div>
        </div>
        <div>
          <img :src="`/images/pages/index/product-${index + 1}.png`" :alt="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products {
  & > :nth-child(2n) {
    & > :first-child {
      @apply order-2;
    }

    & > :last-child {
      @apply order-1;
    }
  }

  & > div {
    @apply flex border border-black rounded-md shadow-lg p-3;

    & > :first-child {
      @apply w-1/2 flex flex-col justify-around;

      & > :first-child {
        @apply uppercase font-bold text-xxs text-center;

        @screen md {
          @apply text-sm;
        }

        @screen lg {
          @apply text-lg;
        }
      }

      & > :last-child {
        @apply flex flex-col gap-5 items-center;

        & > * {
          @apply rounded border border-black shadow text-white text-center text-xs w-24 font-semibold;

          @screen md {
            @apply text-sm w-32;
          }
        }

        & > :first-child {
          @apply bg-red-600;
        }

        & > :last-child {
          @apply bg-green-600;
        }
      }
    }

    & > :last-child {
      @apply w-1/2 flex justify-center;

      & > img {
        @apply h-48;

        @screen md {
          @apply h-56;
        }

        @screen lg {
          @apply h-64;
        }
      }
    }
  }
}
</style>
