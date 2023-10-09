import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_toast_357e9c2c from 'nuxt_plugin_toast_357e9c2c' // Source: ./toast.js (mode: 'client')
import nuxt_plugin_vlazyload_5aec69e9 from 'nuxt_plugin_vlazyload_5aec69e9' // Source: ./v-lazy-load.js (mode: 'all')
import nuxt_plugin_gtm_2ecf3ed1 from 'nuxt_plugin_gtm_2ecf3ed1' // Source: ./gtm.js (mode: 'all')
import nuxt_plugin_vuescrollto_05ec586e from 'nuxt_plugin_vuescrollto_05ec586e' // Source: ./vue-scrollto.js (mode: 'client')
import nuxt_plugin_workbox_cf4710d2 from 'nuxt_plugin_workbox_cf4710d2' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_fca790ac from 'nuxt_plugin_metaplugin_fca790ac' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_f35845c4 from 'nuxt_plugin_iconplugin_f35845c4' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_1910653b from 'nuxt_plugin_axios_1910653b' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_fontawesome_0093bf86 from 'nuxt_plugin_fontawesome_0093bf86' // Source: ./fontawesome.js (mode: 'all')
import nuxt_plugin_elementui_d905880e from 'nuxt_plugin_elementui_d905880e' // Source: ../plugins/element-ui (mode: 'all')
import nuxt_plugin_imageviewer_01887d2c from 'nuxt_plugin_imageviewer_01887d2c' // Source: ../plugins/image_viewer (mode: 'all')
import nuxt_plugin_validationprovider_53910e08 from 'nuxt_plugin_validationprovider_53910e08' // Source: ../plugins/validation-provider.js (mode: 'all')
import nuxt_plugin_publicApi_634fd7dc from 'nuxt_plugin_publicApi_634fd7dc' // Source: ../plugins/publicApi.js (mode: 'all')
import nuxt_plugin_privateApi_1da1ad6c from 'nuxt_plugin_privateApi_1da1ad6c' // Source: ../plugins/privateApi.js (mode: 'all')
import nuxt_plugin_vueslickcarousel_1c6345a5 from 'nuxt_plugin_vueslickcarousel_1c6345a5' // Source: ../plugins/vue-slick-carousel.js (mode: 'all')
import nuxt_plugin_pagination_0c55d867 from 'nuxt_plugin_pagination_0c55d867' // Source: ../plugins/pagination.js (mode: 'all')
import nuxt_plugin_auth_6fe43095 from 'nuxt_plugin_auth_6fe43095' // Source: ./auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Arjunaa Academy","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"},{"hid":"description","name":"description","content":""},{"name":"format-detection","content":"telephone=no"},{"httpEquiv":"X-UA-Compatible","content":"IE=edge"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[{"hid":"gtm-script","innerHTML":"if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https:\u002F\u002Fwww.googletagmanager.com\u002Fgtm.js?id='+i;f.parentNode.insertBefore(j,f);};w[y]('GTM-N5WS2TC')})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}"}],"noscript":[{"hid":"gtm-noscript","pbody":true,"innerHTML":"\u003Ciframe src=\"https:\u002F\u002Fwww.googletagmanager.com\u002Fns.html?id=GTM-N5WS2TC&\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\" title=\"gtm\"\u003E\u003C\u002Fiframe\u003E"}],"__dangerouslyDisableSanitizersByTagID":{"gtm-script":["innerHTML"],"gtm-noscript":["innerHTML"]}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_toast_357e9c2c === 'function') {
    await nuxt_plugin_toast_357e9c2c(app.context, inject)
  }

  if (typeof nuxt_plugin_vlazyload_5aec69e9 === 'function') {
    await nuxt_plugin_vlazyload_5aec69e9(app.context, inject)
  }

  if (typeof nuxt_plugin_gtm_2ecf3ed1 === 'function') {
    await nuxt_plugin_gtm_2ecf3ed1(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_05ec586e === 'function') {
    await nuxt_plugin_vuescrollto_05ec586e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_cf4710d2 === 'function') {
    await nuxt_plugin_workbox_cf4710d2(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_fca790ac === 'function') {
    await nuxt_plugin_metaplugin_fca790ac(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_f35845c4 === 'function') {
    await nuxt_plugin_iconplugin_f35845c4(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_1910653b === 'function') {
    await nuxt_plugin_axios_1910653b(app.context, inject)
  }

  if (typeof nuxt_plugin_fontawesome_0093bf86 === 'function') {
    await nuxt_plugin_fontawesome_0093bf86(app.context, inject)
  }

  if (typeof nuxt_plugin_elementui_d905880e === 'function') {
    await nuxt_plugin_elementui_d905880e(app.context, inject)
  }

  if (typeof nuxt_plugin_imageviewer_01887d2c === 'function') {
    await nuxt_plugin_imageviewer_01887d2c(app.context, inject)
  }

  if (typeof nuxt_plugin_validationprovider_53910e08 === 'function') {
    await nuxt_plugin_validationprovider_53910e08(app.context, inject)
  }

  if (typeof nuxt_plugin_publicApi_634fd7dc === 'function') {
    await nuxt_plugin_publicApi_634fd7dc(app.context, inject)
  }

  if (typeof nuxt_plugin_privateApi_1da1ad6c === 'function') {
    await nuxt_plugin_privateApi_1da1ad6c(app.context, inject)
  }

  if (typeof nuxt_plugin_vueslickcarousel_1c6345a5 === 'function') {
    await nuxt_plugin_vueslickcarousel_1c6345a5(app.context, inject)
  }

  if (typeof nuxt_plugin_pagination_0c55d867 === 'function') {
    await nuxt_plugin_pagination_0c55d867(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_6fe43095 === 'function') {
    await nuxt_plugin_auth_6fe43095(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
