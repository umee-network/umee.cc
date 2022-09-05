export default {
  env: {
    strapiBaseUri: process.env.API_URL || 'http://localhost:1337',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  dev: process.env.NODE_ENV !== 'production',
  devServerHandlers: [],
  target: 'static',
  ssr: true,
  head: {
    title: 'Umee - Cross the Defi Waves',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'google-site-verification',
        content: 'ZiDrNgg_i6VgvqT0pCV08rpNgOAGuE0CQpKma_SzNLs',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: 'Umee' },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { name: 'msapplication-TileImage', content: 'mstile-144x144.png' },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Umee - Cross Chain Defi Hub',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Umee is a cross chain borrowing and lending DeFi hub built on the Cosmos SDK that interconnects between blockchains, Supports Bridge Technology, Interoperable Base Layer Blockchain And Facilitate Defi Lending & Borrowing. Umee is powered by the UMEE native token.',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${process.env.BASE_URL || 'localhost:3000'}/umee-card.jpg`,
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Umee DeFi Logo',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@Umee_CrossChain',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Umee is a cross chain borrowing and lending DeFi hub built on the Cosmos SDK that interconnects between blockchains, Supports Bridge Technology, Interoperable Base Layer Blockchain And Facilitate Defi Lending & Borrowing. Umee is powered by the UMEE native token.',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: `${process.env.BASE_URL || 'localhost:3000'}/umee.png`,
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Umee is a cross chain borrowing and lending DeFi hub built on the Cosmos SDK that interconnects between blockchains, Supports Bridge Technology, Interoperable Base Layer Blockchain And Facilitate Defi Lending & Borrowing. Umee is powered by the UMEE native token.',
      },

      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '57x57',
        type: 'image/x-icon',
        href: '/apple-touch-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '114x114',
        type: 'image/x-icon',
        href: '/apple-touch-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '72x72',
        type: 'image/x-icon',
        href: '/apple-touch-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '144x144',
        type: 'image/x-icon',
        href: '/apple-touch-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '120x120',
        type: 'image/x-icon',
        href: '/apple-touch-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '152x152',
        type: 'image/x-icon',
        href: '/apple-touch-icon-152x152.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/favicon-16x16.png',
      },
    ],
  },

  router: {
    scrollBehavior(to) {
      if (to.hash) {
        const offset = document.querySelector(to.hash).getBoundingClientRect()
        return window.scrollTo({
          top: offset.top + document.documentElement.scrollTop,
          behavior: 'smooth',
        })
      } else {
        return window.scrollTo({ top: 0 })
      }
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/v-waypoint.client.js',
      mode: 'client',
    },
    '~plugins/truncate.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    'nuxt-gsap-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/moment',
    'nuxt-graphql-request',
    '@nuxtjs/robots',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/markdownit',
    '@nuxtjs/gtm',
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],
  gtm: {
    enabled: true /* see below */,
    debug: false,

    id: 'GTM-N3TTX43',
    layer: 'dataLayer',
    variables: {},

    pageTracking: false,
    pageViewEventName: 'nuxtRoute',

    autoInit: true,
    respectDoNotTrack: true,

    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    crossOrigin: false,

    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html',
  },
  colorMode: {
    classSuffix: '',
  },
  markdownit: {
    html: 'true',
    runtime: true,
  },
  generate: {
    fallback: true,
  },
  graphql: {
    clients: {
      default: {
        endpoint: process.env.BACKEND_URL || 'http://localhost:1337/graphql',
      },
    },
  },
}
