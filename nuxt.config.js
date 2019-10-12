export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: '大岡山スクール',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      {
        hid: 'description',
        name: 'description',
        content:
          '【そろばん塾・学習科・受験生の駆け込み塾】　学校の授業で苦手な所があっても、マンツーマンで克服し学力を伸ばせます。短期集中１０ヶ月で偏差値２０ＵＰの実績あり。そろばんの授業は塾が開いてる時間なら何回でも参加可能です。まずはお試しから始めよう!'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#5bbad5' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/core-components.js'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/eslint-module', 'nuxt-purgecss'],
  /*
   ** Build configuration
   */
  purgeCSS: {},
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    fallback: true
  }
}
