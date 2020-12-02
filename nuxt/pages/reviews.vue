<template>
  <div class="md:max-w-md lg:max-w-lg w-full mx-auto space-y-8 md:space-y-12 lg:space-y-16 pb-8 md:pb-12 lg:pb-16">
    <modals-leave-review />
    <div class="uppercase font-bold text-center text-xl md:text-2xl lg:text-4xl">{{ $t('pages.reviews.title') }}</div>
    <div class="reviews space-y-4 md:space-y-5 lg:space-y-6">
      <div v-for="(review, index) in reviews" :key="`review-${index}`">
        <div>{{ review.content }}</div>
        <div>
          <div>{{ review.name }}</div>
          <div>{{ review.publishDate }}</div>
        </div>
      </div>
    </div>
    <button
      class="bg-yellow-600 hover:bg-yellow-700 rounded-lg border border-black shadow-lg px-2 py-1 w-full"
      @click="$modal.show('leave-review-modal')"
    >
      {{ $t('pages.reviews.leave-review') }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Review from '~/types/Review'
export default Vue.extend({
  async asyncData({ app }) {
    const reviews = await app.$strapi.find('reviews', { _limit: 50 })
    return {
      reviews: reviews.map(
        (r: any): Review => ({
          name: r.name,
          content: r.content,
          publishDate: r.publish_date,
        })
      ),
    }
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
</style>
