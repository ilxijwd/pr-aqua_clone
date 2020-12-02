import { Middleware } from '@nuxt/types'

const findArticle: Middleware = async ({ redirect, app }) => {
  const articlePage = await app.$strapi.find('articles-page')
  const articleSlug: String = articlePage.article.slug
  const currentLocale: String = app.i18n.locale === 'ua' ? '' : `/${app.i18n.locale}`
  return redirect(`${currentLocale}/articles/${articleSlug}`)
}

export default findArticle
