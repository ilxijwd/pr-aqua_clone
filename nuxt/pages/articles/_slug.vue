<template>
  <div class="px-3 max-w-6xl mx-auto">
    <div class="py-5 px-2 md:py-8 md:px-5 lg:py-10 lg:px-6 border border-black shadow-xl" v-html="content" />
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 articles mt-8 md:mt-12 lg:mt-16 pb-8 md:pb-12 lg:pb-16"
    >
      <nuxt-link
        v-for="article in articles"
        :key="`article-${article.slug}`"
        :to="localePath(`/articles/${article.slug}`)"
        class="text-center cursor-pointer border border-black py-5 px-2 max-w-md w-full"
      >
        <div class="font-bold text-lg text-fixed">{{ article.name }}</div>
        <div class="mt-10 underline">{{ $t('pages.articles.read-more') }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ params, app }) {
    const lang = app.i18n.locale
    const [articlesPage] = await app.$strapi.find('articles', params)
    return {
      title: articlesPage.pageMetaTags[`title_${lang}`],
      description: articlesPage.pageMetaTags[`description_${lang}`],
      content: articlesPage[`content_${lang}`],
      name: articlesPage[`name_${lang}`],
      articles: articlesPage.articles.map((a: any) => ({
        name: a[`name_${lang}`],
        slug: a.slug,
      })),
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

<style lang="scss" scoped>
.text-fixed {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.articles {
  & > :nth-child(2n) {
    justify-self: end;
  }
}
</style>
