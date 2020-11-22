export default {
  target: 'static',
  env: {
    graphcmsEndpoint: process.env.GRAPHCMS_ENDPOINT
  },
  plugins: ['~/plugins/graphcms.js'],
  css: ['normalize.css', 'sakura.css/css/sakura-vader.css'],
  components: true,
  loading: false,
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    titleTemplate: '%s - My Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
}