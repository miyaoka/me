const nodeExternals = require('webpack-node-externals')

module.exports = {
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: false,
    use: [
      [
        'markdown-it-link-attributes',
        {
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        }
      ]
    ]
  },
  plugins: ['~/plugins/vue-awesome'],
  modules: [
    '@nuxtjs/markdownit',
    ['@nuxtjs/google-analytics', { id: 'UA-3536169-19' }],
    [
      'nuxt-sass-resources-loader',
      [
        'node_modules/bootstrap/scss/_functions.scss',
        'node_modules/bootstrap/scss/_variables.scss',
        'node_modules/bootstrap/scss/_mixins.scss'
      ]
    ]
  ],
  css: ['node_modules/bootstrap/scss/_reboot.scss'],
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk} - ` : '') + 'miyaoka',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `@miyaoka's profile`
      },
      {
        property: 'og:title',
        content: 'miyaoka',
        hid: 'ogTitle'
      },
      { property: 'og:site_name', content: 'miyaoka' },
      { property: 'og:url', content: 'https://miyaoka.github.io/', hid: 'ogUrl' },
      { property: 'og:type', content: 'article' },
      { property: 'og:locale', content: 'ja_JP' },
      {
        property: 'og:description',
        content: `@miyaoka's profile`,
        hid: 'ogDesc'
      },
      {
        property: 'og:image',
        content: 'https://pbs.twimg.com/media/DHQakk0UIAAsIZ0.jpg',
        hid: 'ogImage'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' }
    ]
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
