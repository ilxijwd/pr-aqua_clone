<template>
  <div>
    <contacts-panel />
    <div class="max-w-6xl w-full mx-auto pb-8 md:pb-12 lg:pb-16 px-3">
      <shared-feedback-forms />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ app }) {
    const lang = app.i18n.locale
    const contactsPage = await app.$strapi.find('contacts-page')
    return {
      title: contactsPage.pageMetaTags[`title_${lang}`],
      description: contactsPage.pageMetaTags[`description_${lang}`],
    }
  },
  head() {
    return {
      title: this.$data.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$data.description,
        },
      ],
    }
  },
})
</script>
