import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _02f35e3d = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _ff8385fa = () => interopDefault(import('../pages/achievers.vue' /* webpackChunkName: "pages/achievers" */))
const _1665cc8a = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _5b07cb6c = () => interopDefault(import('../pages/courses/index.vue' /* webpackChunkName: "pages/courses/index" */))
const _0b57818a = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _45b3e722 = () => interopDefault(import('../pages/expert-tips/index.vue' /* webpackChunkName: "pages/expert-tips/index" */))
const _d4f0f6f2 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _b228822c = () => interopDefault(import('../pages/knowledge-desk/index.vue' /* webpackChunkName: "pages/knowledge-desk/index" */))
const _7481a0d6 = () => interopDefault(import('../pages/leadership-team.vue' /* webpackChunkName: "pages/leadership-team" */))
const _16673c30 = () => interopDefault(import('../pages/mission-vision.vue' /* webpackChunkName: "pages/mission-vision" */))
const _cb276ee0 = () => interopDefault(import('../pages/testimonial.vue' /* webpackChunkName: "pages/testimonial" */))
const _32ff8b06 = () => interopDefault(import('../pages/auth/forgot-password.vue' /* webpackChunkName: "pages/auth/forgot-password" */))
const _f5b218a6 = () => interopDefault(import('../pages/auth/sign-in.vue' /* webpackChunkName: "pages/auth/sign-in" */))
const _cc856bba = () => interopDefault(import('../pages/auth/sign-up.vue' /* webpackChunkName: "pages/auth/sign-up" */))
const _c3769cb2 = () => interopDefault(import('../pages/courses/detail.vue' /* webpackChunkName: "pages/courses/detail" */))
const _2ef29090 = () => interopDefault(import('../pages/events/detail.vue' /* webpackChunkName: "pages/events/detail" */))
const _5fee9104 = () => interopDefault(import('../pages/expert-tips/detail.vue' /* webpackChunkName: "pages/expert-tips/detail" */))
const _6241a42e = () => interopDefault(import('../pages/knowledge-desk/detail.vue' /* webpackChunkName: "pages/knowledge-desk/detail" */))
const _031ad203 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _02f35e3d,
    name: "about-us"
  }, {
    path: "/achievers",
    component: _ff8385fa,
    name: "achievers"
  }, {
    path: "/contact-us",
    component: _1665cc8a,
    name: "contact-us"
  }, {
    path: "/courses",
    component: _5b07cb6c,
    name: "courses"
  }, {
    path: "/events",
    component: _0b57818a,
    name: "events"
  }, {
    path: "/expert-tips",
    component: _45b3e722,
    name: "expert-tips"
  }, {
    path: "/faq",
    component: _d4f0f6f2,
    name: "faq"
  }, {
    path: "/knowledge-desk",
    component: _b228822c,
    name: "knowledge-desk"
  }, {
    path: "/leadership-team",
    component: _7481a0d6,
    name: "leadership-team"
  }, {
    path: "/mission-vision",
    component: _16673c30,
    name: "mission-vision"
  }, {
    path: "/testimonial",
    component: _cb276ee0,
    name: "testimonial"
  }, {
    path: "/auth/forgot-password",
    component: _32ff8b06,
    name: "auth-forgot-password"
  }, {
    path: "/auth/sign-in",
    component: _f5b218a6,
    name: "auth-sign-in"
  }, {
    path: "/auth/sign-up",
    component: _cc856bba,
    name: "auth-sign-up"
  }, {
    path: "/courses/detail",
    component: _c3769cb2,
    name: "courses-detail"
  }, {
    path: "/events/detail",
    component: _2ef29090,
    name: "events-detail"
  }, {
    path: "/expert-tips/detail",
    component: _5fee9104,
    name: "expert-tips-detail"
  }, {
    path: "/knowledge-desk/detail",
    component: _6241a42e,
    name: "knowledge-desk-detail"
  }, {
    path: "/",
    component: _031ad203,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
