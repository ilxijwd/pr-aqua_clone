<template>
  <div class="w-screen h-screen flex flex-col justify-center text-center space-y-4">
    <div class="font-bold sm:text-2xl md:text-3xl">{{ $t('pages.maintenance.tech-job') }}</div>
    <div class="text-lg">{{ $t('pages.maintenance.sorry') }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'empty',
})
</script>
