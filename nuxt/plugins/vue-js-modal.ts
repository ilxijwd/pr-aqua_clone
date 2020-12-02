import Vue from 'vue'
// @ts-ignore
import VModal from 'vue-js-modal/dist/ssr.nocss'
import 'vue-js-modal/dist/styles.css'

Vue.use(VModal, { dialog: true })

declare module 'vue/types/vue' {
  interface Vue {
    $modal: VModal
  }
}
