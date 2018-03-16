const contentful = require('contentful')

export default ({ isDev, env }, inject) => {
  const config = {
    space: env.CTF_SPACE_ID,
    accessToken: isDev ? env.CTF_CPA_TOKEN : env.CTF_CDA_TOKEN,
    host: isDev ? 'preview.contentful.com' : 'cdn.contentful.com'
  }
  inject('contentful', contentful.createClient(config))
}
