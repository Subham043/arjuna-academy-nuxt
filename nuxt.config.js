import { API_ROUTES } from './helper/api_routes'

const axios = require('axios')

export default {
  server: {
    port: 3300, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Arjunaa Academy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/static/css/bootstrap.min.css',
    '~/static/fonts/remixicon.css',
    '~/static/fonts/flaticon.css',
    '~/static/css/style.css',
    '~/static/css/responsive.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/image_viewer',
    '~/plugins/validation-provider.js',
    '~/plugins/publicApi.js',
    '~/plugins/privateApi.js',
    '~/plugins/vue-slick-carousel.js',
    '~/plugins/pagination.js',
    { src: '~/plugins/safeHtml.js', mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/date-fns',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    'nuxt-helmet',
    'vue-scrollto/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
    'nuxt-robots-module',
    ["vue-toastification/nuxt", {
      timeout: 8000,
      position: "bottom-center"
    }],
  ],

  publicRuntimeConfig: {
    apiURL: process.env.API_BASE_URL,
    mainURL: process.env.MAIN_BASE_URL,
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  },
  privateRuntimeConfig: {
    apiURL: process.env.API_BASE_URL,
    mainURL: process.env.MAIN_BASE_URL,
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE_URL,
    credentials: false
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/,"vee-validate/dist/rules"],
  },

  auth: {
    redirect: {
      login: '/auth/sign-in',
      logout: '/auth/sign-in',
      callback: '/auth/sign-in',
      home: '/profile'
    },
    localStorage: false, // REALLY not secure, so nah
    resetOnError: true, // kick the user if any error happens w/ the auth
    strategies: {
      local: {
        scheme: 'local',
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer',
          name: 'Authorization'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/api/v1/auth/login', method: 'post' },
          logout: { url: '/api/v1/auth/logout', method: 'get' },
          user: { url: '/api/v1/profile', method: 'get' }
        },
        tokenRequired: true,
        tokenType: 'JWT',
      }
    }
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.MAIN_BASE_URL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: async () => {
      const achiever = await axios.get(process.env.API_BASE_URL+API_ROUTES.achieverCategory)
      const achievers = achiever.data.achiverCategory.map((item) => `/achievers/${item.slug}`)
      const legal = await axios.get(process.env.API_BASE_URL+API_ROUTES.legal)
      const legals = legal.data.legal.map((item) => `/legal/${item.slug}`)
      const branch = await axios.get(process.env.API_BASE_URL+API_ROUTES.branch + '/all')
      const branches = branch.data.branch.map((item) => item.courses.map((i) => `/${item.slug}/courses/${i.slug}`))
      const courses = []; branches.map((item) => item.map((i) => courses.push(i)));
      const blog = await axios.get(process.env.API_BASE_URL+API_ROUTES.blog + '/all')
      const blogs = blog.data.blogs.map((item) => `/knowledge-desk/${item.slug}`)
      const event = await axios.get(process.env.API_BASE_URL+API_ROUTES.event + '/all')
      const events = event.data.events.map((item) => `/events/${item.slug}`)
      const expertTip = await axios.get(process.env.API_BASE_URL+API_ROUTES.expertTip + '/all')
      const expertTips = expertTip.data.expertTips.map((item) => `/expert-tips/${item.slug}`)
      const campaign = await axios.get(process.env.API_BASE_URL+API_ROUTES.campaign + '/all')
      const campaigns = campaign.data.campaigns.map((item) => `/${item.slug}`)
      return [...achievers, ...courses, ...blogs, expertTips, ...events, ...campaigns, ...legals]
    },
  },

  gtm: {
    // Options
    id: 'GTM-N5WS2TC',
    enabled: true
  },

  robots: {
    /* module options */
    UserAgent: '*',
    Allow: '/',
    Sitemap: process.env.MAIN_BASE_URL+`/sitemap.xml`
  },

  helmet: {
    /*
    frameguard: false,
    ...
    */
    contentSecurityPolicy: false,
    crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" },
    crossOriginResourcePolicy: true,
    referrerPolicy: {policy: "no-referrer"},
    frameguard: {action: "sameorigin"},
    hidePoweredBy: true,
    hsts: {
      maxAge: 15552000,
      includeSubDomains: true,
      preload: true,
    },
    xssFilter: true,
  },

  googleFonts: {
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      Jost: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      },
    }
  },

}
