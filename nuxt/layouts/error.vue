<template>
  <div
    class="w-screen h-screen bg-center bg-no-repeat bg-cover flex justify-center items-center error-page-bg"
    style="background-image: url('/images/pages/index/sea.png')"
  >
    <div class="bg-white rounded-lg p-5 text-center space-y-4">
      <div class="font-bold sm:text-2xl md:text-3xl">
        {{ $t(`pages.error.${error.statusCode}`) }}. {{ $t('pages.error.code') }}: {{ error.statusCode }}.
      </div>
      <div class="text-lg">{{ $t('pages.error.sorry') }}</div>
    </div>
    <script>
      $(document).ready(function () {
        $('.error-page-bg').ripples({
          resolution: 256,
          dropRadius: 20,
          interactive: true,
          perturbance: 0.04,
        })
      })
    </script>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  head() {
    return {
      title: this.$tc(`pages.error.${this.error.statusCode}`),
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
          integrity: 'sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=',
          crossOrigin: 'anonymous',
        },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js' },
      ],
    }
  },
})
</script>
