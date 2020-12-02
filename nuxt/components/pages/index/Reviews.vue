<template>
  <div class="my-8 md:my-12 lg:my-16 px-3">
    <div class="uppercase font-bold text-sm md:text-xl lg:text-2xl text-center mb-6 md:mb-8">
      {{ $t('pages.index.reviews.title') }}
    </div>
    <div class="md:max-w-md lg:max-w-lg w-full mx-auto">
      <div class="reviews space-y-4 md:space-y-5 lg:space-y-6">
        <div v-for="(review, index) in reviews" :key="`review-${index}`">
          <div>{{ review.content }}</div>
          <div>
            <div>{{ review.name }}</div>
            <div>{{ review.publishDate }}</div>
          </div>
        </div>
      </div>
      <div class="buttons space-x-2 md:space-x-12 lg:space-x-24">
        <button class="bg-yellow-600 hover:bg-yellow-700" @click="$modal.show('leave-review-modal')">
          {{ $t('pages.index.reviews.leave-review') }}
        </button>
        <nuxt-link :to="localePath('/reviews')" class="bg-green-600 hover:bg-green-700">
          {{ $t('pages.index.reviews.all-reviews') }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import Review from '~/types/Review'
export default Vue.extend({
  props: {
    reviews: {
      type: Array,
      required: true,
    } as PropOptions<Review[]>,
  },
})
</script>

<style lang="scss" scoped>
.reviews {
  & > div {
    @apply border border-black rounded-xl shadow-lg p-4;

    & > :first-child {
      @apply text-sm;
    }

    & > :last-child {
      @apply flex justify-around mt-3;
    }
  }
}

.buttons {
  @apply mt-4 flex justify-between;

  @screen md {
    @apply mt-8;
  }

  * {
    @apply rounded-lg border border-black shadow-lg px-2 py-1 w-1/2 text-center;
  }
}
</style>
