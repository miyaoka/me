const nodeExternals = require('webpack-node-externals')
const contentful = require('contentful')

module.exports = {
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_TOKEN: process.env.CTF_CDA_TOKEN,
    CTF_CPA_TOKEN: process.env.CTF_CPA_TOKEN,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID
  },
  generate: {
    async routes() {
      try {
        const entries = await contentful
          .createClient({
            space: process.env.CTF_SPACE_ID,
            accessToken: process.env.CTF_CDA_TOKEN
          })
          .getEntries({
            content_type: process.env.CTF_BLOG_POST_TYPE_ID,
            order: '-fields.date',
            limit: 100,
            skip: 0
          })
        return entries.items.map((post) => ({
          route: `posts/${post.sys.id}`,
          payload: post
        }))
      } catch (err) {
        console.error(err)
      }
    }
  },
  markdownit: {
    injected: true,
    html: true,
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
  manifest: {
    name: '@miyaoka',
    lang: 'ja'
  },
  plugins: ['~/plugins/vue-awesome', '~/plugins/contentful', '~/plugins/vue-lazyload'],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    ['@nuxtjs/google-analytics', { id: 'UA-3536169-19' }],
    [
      'nuxt-sass-resources-loader',
      [
        'node_modules/bootstrap/scss/_functions.scss',
        'node_modules/bootstrap/scss/_variables.scss',
        'node_modules/bootstrap/scss/_mixins.scss',
        'assets/css/_vars.scss'
      ]
    ],
    '@miyaoka/nuxt-twitter-widgets-module'
  ],
  css: ['node_modules/bootstrap/scss/_reboot.scss', 'assets/css/base.scss'],
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk} - ` : '') + '@miyaoka',
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
    vendor: ['contentful'],
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
