<template>
  <div>
    <index-hero />
    <index-video />
    <index-about />
    <index-feedback />
    <index-products />
    <index-volumes />
    <index-filters :h1="h1" :seo-text="seoText" />
    <index-partners :partners="partners" />
    <index-reviews :reviews="reviews" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Partner from '~/types/Partner'
import Review from '~/types/Review'
export default Vue.extend({
  layout: 'index',
  async asyncData({ app }) {
    const lang: String = app.i18n.locale
    const indexPage = await app.$strapi.find('index-page')
    return {
      title: indexPage.pageMetaTags[`title_${lang}`],
      description: indexPage.pageMetaTags[`description_${lang}`],
      h1: indexPage[`h1_${lang}`],
      seoText: indexPage[`seoText_${lang}`],
      partners: indexPage.partners.map(
        (p: any): Partner => ({
          url: p.url,
          imageSrc: `${process.env.STRAPI_URL}${p.image.url}`,
          name: p[`name_${lang}`],
          content: p[`content_${lang}`],
        })
      ),
      reviews: (indexPage.reviews as Review[])
        .map(
          (r: any): Review => ({
            name: r.name,
            content: r.content,
            publishDate: r.publish_date,
          })
        )
        .sort((a, b) => Date.parse(a.publishDate as string) - Date.parse(b.publishDate as string)),
    }
  },
  mounted() {
    if (document.getElementById('rippler')) return
    const script = document.createElement('script')
    script.id = 'rippler'
    script.innerHTML = `
      $(document).ready(function () {
        $('.hero-background').ripples({
          resolution: 256,
          dropRadius: 20,
          interactive: true,
          perturbance: 0.04,
        })
      })
    `
    document.body.appendChild(script)
  },
  destroyed() {
    document.getElementById('rippler')?.remove()
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
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
          integrity: 'sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=',
          crossOrigin: 'anonymous',
          body: true,
        },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js', body: true },
      ],
    }
  },
})
</script>
