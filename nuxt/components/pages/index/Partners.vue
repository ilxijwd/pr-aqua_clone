<template>
  <div class="mt-8 md:mt-12 lg:mt-16 px-3 max-w-6xl mx-auto">
    <div class="uppercase font-bold text-sm md:text-xl lg:text-2xl text-center mb-6 md:mb-12 lg:mb-16">
      {{ $t('pages.index.partners.title') }}
    </div>
    <div class="cards flex flex-col items-center md:grid md:grid-cols-3 md:justify-items-center gap-6 md:gap-0">
      <a
        v-for="(partner, index) in partners"
        :key="`index-${index}-${partner.name}`"
        :href="partner.url"
        target="_blank"
        rel="noopener noreferrer"
        class="space-y-2"
      >
        <div>
          <img :src="partner.imageSrc" :alt="partner.name" />
          <div>{{ partner.name }}</div>
          <div>{{ partner.content }}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import Partner from '~/types/Partner'
export default Vue.extend({
  props: {
    partners: {
      type: Array,
      required: true,
    } as PropOptions<Partner[]>,
  },
})
</script>

<style lang="scss" scoped>
.cards {
  & > a {
    & > div {
      @apply p-3 w-48 border border-black rounded shadow-lg flex flex-col items-center;

      & > :first-child {
        @screen md {
          @apply h-24;
        }
      }

      & > :nth-child(2) {
        @apply font-bold;
      }

      & > :nth-child(3) {
        @apply text-center text-sm;
      }
    }
  }
}
</style>
