import { Plugin } from '@nuxt/types'

export interface IPostNewAppeal {
  request: string
  name: string
  phone: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $postNewAppeal({ request, name, phone }: IPostNewAppeal): Promise<void>
  }
}

const postNewAppeal: Plugin = ({ $axios }, inject) =>
  inject(
    'postNewAppeal',
    async ({ request, name, phone }: IPostNewAppeal) =>
      await $axios.$post('/api/new-appeal', {
        request,
        name,
        phone,
      })
  )

export default postNewAppeal
