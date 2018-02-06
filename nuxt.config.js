const nodeExternals = require('webpack-node-externals')

module.exports = {
  plugins: ['~/plugins/vue-awesome'],
  modules: ['@nuxtjs/markdownit'],
  css: ['~/assets/css/reset.scss', '~/assets/css/base.scss'],
  /*
  ** Headers of the page
  */
  head: {
    title: 'miyaoka',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'profile' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vue-awesome/]
          })
        ]
      }
    }
  }
}
