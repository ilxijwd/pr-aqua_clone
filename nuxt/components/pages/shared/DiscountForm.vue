<template>
  <div>
    <div class="text-sm md:text-2xl text-red-700 font-bold mb-3 text-center">
      {{ $t('shared.discount-form.discount') }}
    </div>
    <div class="text-sm md:text-lg font-bold mb-4 text-center">
      {{ $t('shared.discount-form.leave-application') }}
    </div>
    <form
      class="feedback-form space-y-4 flex flex-col md:max-w-sm md:mx-auto"
      @submit.prevent="formSubmit(discountFormData)"
    >
      <div class="space-y-1 flex flex-col">
        <label for="name"> {{ $t('shared.discount-form.form.name') }}</label>
        <input v-model="discountFormData.name" class="focus:shadow-outline" type="text" name="name" required />
      </div>
      <div class="space-y-1 flex flex-col">
        <label for="phone">{{ $t('shared.discount-form.form.phone') }}</label>
        <input
          v-model="discountFormData.phone"
          v-mask="'+380 (##) ###-####'"
          class="focus:shadow-outline"
          type="tel"
          name="phone"
          required
        />
      </div>
      <button
        class="border px-4 py-1 bg-green-600 hover:bg-green-700 rounded shadow-lg text-white overflow-hidden focus:outline-none focus:shadow-outline self-end transition duration-200"
        type="submit"
      >
        {{ $t('shared.discount-form.form.send') }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IPostNewAppeal } from '~/plugins/post-new-appeal'
export default Vue.extend({
  data() {
    return {
      discountFormData: {
        request: 'Запрос на скидку',
        name: '',
        phone: '+380',
      },
    }
  },
  methods: {
    async formSubmit(objectToSend: IPostNewAppeal) {
      await this.$postNewAppeal(objectToSend)
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

<style lang="scss" scoped>
.feedback-form {
  input {
    @apply border border-black rounded outline-none px-1;
  }

  label {
    @apply text-sm;

    @screen md {
      @apply text-base;
    }
  }
}
</style>
