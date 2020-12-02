<template>
  <modal name="call-back-modal" adaptive>
    <div class="p-10 text-black">
      <div class="flex justify-between">
        <div class="text-lg lg:text-2xl">{{ $t('modals.call-back.header') }}</div>
        <button class="self-end" @click="$modal.hide('call-back-modal')">
          <fa :icon="['fas', 'times']" class="text-3xl" />
        </button>
      </div>
      <form class="mt-4" @submit.prevent="formSubmit(callBackFormData)">
        <div class="space-y-1 flex flex-col">
          <label for="name">{{ $t('modals.call-back.name') }}</label>
          <input
            v-model="callBackFormData.name"
            class="focus:shadow-outline border-black border-2 px-1"
            type="text"
            name="name"
            required
          />
        </div>
        <div class="mt-2 space-y-1 flex flex-col">
          <label for="phone">{{ $t('modals.call-back.phone') }}</label>
          <input
            v-model="callBackFormData.phone"
            v-mask="'+380 (##) ###-####'"
            class="focus:shadow-outline border-black border-2 px-1"
            type="text"
            name="phone"
            required
          />
        </div>
        <button
          class="border mt-4 px-4 py-1 bg-green-500 hover:bg-green-600 rounded shadow-lg text-black overflow-hidden focus:outline-none focus:shadow-outline transition duration-200"
          type="submit"
        >
          {{ $t('modals.call-back.send') }}
        </button>
      </form>
    </div>
  </modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { IPostNewAppeal } from '~/plugins/post-new-appeal'
export default Vue.extend({
  data() {
    return {
      callBackFormData: {
        request: 'Заказ звонка',
        name: '',
        phone: '+380',
      },
    }
  },
  methods: {
    async formSubmit(objectToSend: IPostNewAppeal) {
      await this.$postNewAppeal(objectToSend)
      this.$modal.hide('call-back-modal')
      this.$modal.show('dialog', {
        title: 'PR-Aqua',
        text: 'Спасибо за обращение!',
        buttons: [
          {
            title: 'OK',
            handler: () => {
              this.$modal.hide('dialog')
            },
          },
        ],
      })
    },
  },
})
</script>
