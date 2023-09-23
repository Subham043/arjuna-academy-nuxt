import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _323a344e = () => interopDefault(import('../pages/2-year-integrated-day-scholar-and-residential-program.vue' /* webpackChunkName: "pages/2-year-integrated-day-scholar-and-residential-program" */))
const _02f35e3d = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _1665cc8a = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _0b57818a = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _45b3e722 = () => interopDefault(import('../pages/expert-tips/index.vue' /* webpackChunkName: "pages/expert-tips/index" */))
const _d4f0f6f2 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _16735e43 = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _b228822c = () => interopDefault(import('../pages/knowledge-desk/index.vue' /* webpackChunkName: "pages/knowledge-desk/index" */))
const _7481a0d6 = () => interopDefault(import('../pages/leadership-team.vue' /* webpackChunkName: "pages/leadership-team" */))
const _16673c30 = () => interopDefault(import('../pages/mission-vision.vue' /* webpackChunkName: "pages/mission-vision" */))
const _bdb325cc = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _cb276ee0 = () => interopDefault(import('../pages/testimonial.vue' /* webpackChunkName: "pages/testimonial" */))
const _2d578b5f = () => interopDefault(import('../pages/vrddhi/index.vue' /* webpackChunkName: "pages/vrddhi/index" */))
const _77b854fc = () => interopDefault(import('../pages/admission/class-8-9-10.vue' /* webpackChunkName: "pages/admission/class-8-9-10" */))
const _406e0dae = () => interopDefault(import('../pages/admission/puc.vue' /* webpackChunkName: "pages/admission/puc" */))
const _32ff8b06 = () => interopDefault(import('../pages/auth/forgot-password.vue' /* webpackChunkName: "pages/auth/forgot-password" */))
const _f5b218a6 = () => interopDefault(import('../pages/auth/sign-in.vue' /* webpackChunkName: "pages/auth/sign-in" */))
const _cc856bba = () => interopDefault(import('../pages/auth/sign-up.vue' /* webpackChunkName: "pages/auth/sign-up" */))
const _49333ce8 = () => interopDefault(import('../pages/vrddhi/syllabus.vue' /* webpackChunkName: "pages/vrddhi/syllabus" */))
const _0e7dee4e = () => interopDefault(import('../pages/achievers/:slug.vue' /* webpackChunkName: "pages/achievers/:slug" */))
const _ea8cda64 = () => interopDefault(import('../pages/events/:slug.vue' /* webpackChunkName: "pages/events/:slug" */))
const _6d8b6002 = () => interopDefault(import('../pages/expert-tips/:slug.vue' /* webpackChunkName: "pages/expert-tips/:slug" */))
const _3751127d = () => interopDefault(import('../pages/knowledge-desk/:slug.vue' /* webpackChunkName: "pages/knowledge-desk/:slug" */))
const _031ad203 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _d8ffb4d4 = () => interopDefault(import('../pages/:slug.vue' /* webpackChunkName: "pages/:slug" */))
const _62645c84 = () => interopDefault(import('../pages/:branch_slug/courses/:course_slug.vue' /* webpackChunkName: "pages/:branch_slug/courses/:course_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/2-year-integrated-day-scholar-and-residential-program",
    component: _323a344e,
    name: "2-year-integrated-day-scholar-and-residential-program"
  }, {
    path: "/about-us",
    component: _02f35e3d,
    name: "about-us"
  }, {
    path: "/contact-us",
    component: _1665cc8a,
    name: "contact-us"
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
    path: "/gallery",
    component: _16735e43,
    name: "gallery"
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
    path: "/profile",
    component: _bdb325cc,
    name: "profile"
  }, {
    path: "/testimonial",
    component: _cb276ee0,
    name: "testimonial"
  }, {
    path: "/vrddhi",
    component: _2d578b5f,
    name: "vrddhi"
  }, {
    path: "/admission/class-8-9-10",
    component: _77b854fc,
    name: "admission-class-8-9-10"
  }, {
    path: "/admission/puc",
    component: _406e0dae,
    name: "admission-puc"
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
    path: "/vrddhi/syllabus",
    component: _49333ce8,
    name: "vrddhi-syllabus"
  }, {
    path: "/achievers/:slug",
    component: _0e7dee4e,
    name: "achievers-:slug"
  }, {
    path: "/events/:slug",
    component: _ea8cda64,
    name: "events-:slug"
  }, {
    path: "/expert-tips/:slug",
    component: _6d8b6002,
    name: "expert-tips-:slug"
  }, {
    path: "/knowledge-desk/:slug",
    component: _3751127d,
    name: "knowledge-desk-:slug"
  }, {
    path: "/",
    component: _031ad203,
    name: "index"
  }, {
    path: "/:slug",
    component: _d8ffb4d4,
    name: ":slug"
  }, {
    path: "/:branch_slug/courses/:course_slug",
    component: _62645c84,
    name: ":branch_slug-courses-:course_slug"
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
