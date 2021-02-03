module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'catchall',
        path: '/products/',
        component: resolve(__dirname, 'pages/products/catchallpage.vue')
      })
    }
  },
  modules: ['bootstrap-vue/nuxt','nuxt-vuex-localstorage'],
  head: {
    title: 'europharma',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'europharma - сеть аптек' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~/plugins/vue-agile', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

