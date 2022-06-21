export default {
  // Target: https://go.nuxtjs.dev/config-target
  treeShake:true,

  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - xidps',
    title: 'xidps',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://webfontworld.github.io/sunn/SUIT.css'
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/reset.scss',
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', pathPrefix: false }],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },
  storybook: {
    decorators: [
      // VApp decorator for Vuetify
      '<v-app><story/></v-app>'
    ],
    stories: [
      '~/components/**/**/*.stories.@(js|jsx|ts|tsx)',
      ],
    parameters: {
    },
    webpackFinal (config) {
      return config
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    assetsPublicPath:"./"
  }
  // 절대 경로 설정
  /*router: {
    base: '/jh_dist/dist/'
  }*/

}
