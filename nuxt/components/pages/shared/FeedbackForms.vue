<template>
  <div class="feedback-forms mt-8 md:mt-12 flex flex-col md:flex-row md:justify-between gap-8">
    <div class="md:max-w-xs md:w-full lg:max-w-sm">
      <div class="heading">{{ $t('shared.feedback-forms.manager') }}</div>
      <form class="space-y-2" @submit.prevent="formSubmit(managerFormData)">
        <div class="space-y-1 flex flex-col">
          <label for="name">{{ $t('shared.feedback-forms.name') }}</label>
          <input v-model="managerFormData.name" class="focus:shadow-outline" type="text" name="name" required />
        </div>
        <div class="space-y-1 flex flex-col">
          <label for="phone">{{ $t('shared.feedback-forms.phone') }}</label>
          <input
            v-model="managerFormData.phone"
            v-mask="'+380 (##) ###-####'"
            class="focus:shadow-outline"
            type="text"
            name="phone"
            required
          />
        </div>
        <button
          class="border px-4 py-1 bg-yellow-500 hover:bg-yellow-600 rounded shadow-lg text-white overflow-hidden focus:outline-none focus:shadow-outline transition duration-200"
          type="submit"
        >
          {{ $t('shared.feedback-forms.send') }}
        </button>
      </form>
    </div>
    <div class="md:max-w-xs md:w-full lg:max-w-sm">
      <div class="heading">{{ $t('shared.feedback-forms.ask') }}</div>
      <form class="space-y-2" @submit.prevent="formSubmit(questionFormData)">
        <div class="space-y-1 flex flex-col">
          <label for="name">{{ $t('shared.feedback-forms.name') }}</label>
          <input v-model="questionFormData.name" class="focus:shadow-outline" type="text" name="name" required />
        </div>
        <div class="space-y-1 flex flex-col">
          <label for="phone">{{ $t('shared.feedback-forms.phone') }}</label>
          <input
            v-model="questionFormData.phone"
            v-mask="'+380 (##) ###-####'"
            class="focus:shadow-outline"
            type="tel"
            name="phone"
            required
          />
        </div>
        <div class="md:flex md:justify-end">
          <button
            class="border px-4 py-1 bg-blue-600 hover:bg-blue-700 rounded shadow-lg text-white overflow-hidden focus:outline-none focus:shadow-outline transition duration-200"
            type="submit"
          >
            {{ $t('shared.feedback-forms.send') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IPostNewAppeal } from '~/plugins/post-new-appeal'
export default Vue.extend({
  data() {
    return {
      managerFormData: {
        request: 'Запрос на обратную связь с менеджером',
        name: '',
        phone: '+380',
      },
      questionFormData: {
        request: 'Запрос на задание вопроса',
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
.feedback-forms {
  .heading {
    @apply uppercase font-bold text-sm text-center mb-4;

    @screen md {
      @apply text-lg mb-5;
    }

    @screen lg {
      @apply text-2xl mb-8;
    }
  }

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
