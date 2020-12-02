import axios from 'axios'
import _ from 'lodash'

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337'
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export default {
  env: {
    STRAPI_URL,
    BASE_URL,
  },

  target: 'server',

  serverMiddleware: [
    '~/serverMiddleware/maintenance-mode',
    { path: '/api', handler: '~/serverMiddleware/new-appeal.js' },
  ],

  head: {
    title: 'pr-aqua',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/images/layout/logo.png' }],
  },

  css: ['@/assets/css/global.scss'],

  plugins: ['~plugins/vue-js-modal', '~/plugins/post-new-appeal', '~plugins/vue-the-mask'],

  components: [
    { path: '~/components/layout', prefix: 'layout' },
    { path: '~/components/modals', prefix: 'modals' },
    { path: '~/components/pages/shared', prefix: 'shared' },
    { path: '~/components/pages/index', prefix: 'index' },
    { path: '~/components/pages/contacts', prefix: 'contacts' },
  ],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        icons: {
          solid: ['faTimes'],
          brands: ['faViber', 'faTelegram', 'faInstagram', 'faFacebook', 'faYoutubeSquare'],
        },
      },
    ],
    ['@nuxtjs/google-analytics', { id: 'UA-XXXXX-X' }],
  ],

  modules: [
    ['@nuxtjs/axios', { baseURL: BASE_URL }],
    ['@nuxtjs/strapi', { url: STRAPI_URL }],
    [
      'nuxt-i18n',
      {
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          onlyOnRoot: true,
        },
        locales: [
          { code: 'ua', iso: 'uk-UA' },
          { code: 'ru', iso: 'ru-RU' },
          { code: 'en', iso: 'en-US' },
        ],
        defaultLocale: 'ua',
        vueI18n: {
          fallbackLocale: 'ru',
          messages: {
            ua: require('./locales/ua.json'),
            ru: require('./locales/ru.json'),
            en: require('./locales/en.json'),
          },
        },
      },
    ],
    [
      '@nuxtjs/sitemap',
      {
        hostname: BASE_URL,
        path: '/sitemap.xml',
        exclude: ['/maintenance'],
        gzip: true,
        i18n: {
          locales: ['ua', 'ru', 'en'],
          routesNameSeparator: '___',
        },
        defaults: {
          changefreq: 'always',
          lastmod: new Date(),
        },
        async routes() {
          const res = await axios.get(`${STRAPI_URL}/articles`)
          return _.flatten(res.data.map((a) => ['/', '/ru/', '/en/'].map((l) => `${l}articles/${a.slug}`)))
        },
      },
    ],
    [
      '@nuxtjs/robots',
      () => {
        const locales = ['/', '/ru/', '/en/']
        const routes = ['maintenance']

        return {
          UserAgent: '*',
          Host: BASE_URL,
          Disallow: _.flatten(routes.map((r) => locales.map((l) => `${l}${r}`))),
        }
      },
    ],
  ],

  build: {},
}
