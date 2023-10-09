exports.ids = [21];
exports.modules = {

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_ROUTES; });
const API_ROUTES = {
  mission_vision: "/api/v1/mission-vision",
  seo: "/api/v1/seo",
  faq: "/api/v1/faq",
  legal: "/api/v1/legal",
  branch: "/api/v1/branch",
  course: "/api/v1/course",
  gallery: "/api/v1/gallery",
  campaign: "/api/v1/campaign",
  event: "/api/v1/event",
  testimonial: "/api/v1/testimonial",
  counter: "/api/v1/counter",
  feature: "/api/v1/feature",
  achieverCategory: "/api/v1/achiever/category",
  achieverStudent: "/api/v1/achiever/student",
  aboutSection: "/api/v1/about-section",
  bannerSection: "/api/v1/home-page-banner",
  blog: "/api/v1/blog",
  expertTip: "/api/v1/expert-tip",
  management: "/api/v1/team-member/management",
  staff: "/api/v1/team-member/staff",
  contact: "/api/v1/contact-form",
  day_scholar: "/api/v1/day-scholar-form",
  subscription: "/api/v1/subscription-form",
  register: "/api/v1/auth/register",
  forgot_password: "/api/v1/auth/forgot-password",
  reset_password: "/api/v1/auth/reset-password",
  vrddhi: "/api/v1/vrddhi-form",
  admission_puc: "/api/v1/admission/puc",
  password_update: "/api/v1/profile/update-password",
  profile_update: "/api/v1/profile/update",
  admission_not_puc: "/api/v1/admission/not-puc"
};

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/about-us.vue?vue&type=template&id=49bd8db6&
var render = function render() {
  var _vm$about, _vm$about2, _vm$about3, _vm$about4, _vm$about5, _vm$about6, _vm$about7, _vm$about8, _vm$about9;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "About us",
      "pages": [{
        link: '',
        name: 'About us'
      }]
    }
  }), _vm._ssrNode(" "), _c('WhoWeAreCard', {
    attrs: {
      "first": true,
      "loading": _vm.aboutLoading,
      "image_alt": (_vm$about = _vm.about) === null || _vm$about === void 0 ? void 0 : _vm$about.image_alt,
      "image": (_vm$about2 = _vm.about) === null || _vm$about2 === void 0 ? void 0 : _vm$about2.image,
      "image_title": (_vm$about3 = _vm.about) === null || _vm$about3 === void 0 ? void 0 : _vm$about3.image_title,
      "heading": (_vm$about4 = _vm.about) === null || _vm$about4 === void 0 ? void 0 : _vm$about4.heading,
      "detail": (_vm$about5 = _vm.about) === null || _vm$about5 === void 0 ? void 0 : _vm$about5.description,
      "counter_description": (_vm$about6 = _vm.about) === null || _vm$about6 === void 0 ? void 0 : _vm$about6.counter_description,
      "counter_image": (_vm$about7 = _vm.about) === null || _vm$about7 === void 0 ? void 0 : _vm$about7.counter_image,
      "counter_title": (_vm$about8 = _vm.about) === null || _vm$about8 === void 0 ? void 0 : _vm$about8.counter_title,
      "title": (_vm$about9 = _vm.about) === null || _vm$about9 === void 0 ? void 0 : _vm$about9.title
    }
  }), _vm._ssrNode(" <div class=\"play-area ptb-100\"><div class=\"container\"><div class=\"title text-center mb-45\"><h2>\n                    &quot;A <span>leader</span> is one who knows the way, goes the way &amp; shows the way&quot;\n                </h2></div> <div class=\"play-btn-area\"><a href=\"javascript:void(0)\" aria-label=\"Video Popup\" class=\"play-btn\"><i class=\"flaticon-play-button-arrowhead\"></i></a></div></div></div> "), _vm._ssrNode("<div class=\"counter-area-three pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm.counterLoading ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l(4, function (i) {
    return _vm._ssrNode("<div class=\"col-lg-3 col-md-6 col-sm-12\">", "</div>", [_c('el-skeleton', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "animated": ""
      }
    }, [_c('template', {
      slot: "template"
    }, [_c('div', {
      staticClass: "counter-card box-shadow px-1"
    }, [_c('el-skeleton-item', {
      staticStyle: {
        "width": "100px",
        "height": "100px"
      },
      attrs: {
        "variant": "circle"
      }
    }), _vm._v(" "), _c('el-skeleton-item', {
      staticStyle: {
        "width": "50%"
      },
      attrs: {
        "variant": "p"
      }
    }), _vm._v(" "), _c('br')], 1)])], 2)], 1);
  }), 0) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.counter, function (item, i) {
    return !_vm.counterLoading && _vm.counter.length > 0 ? _vm._ssrNode("<div class=\"col-lg-3 col-6\">", "</div>", [_vm._ssrNode("<div class=\"counter-card box-shadow\">", "</div>", [_vm._ssrNode("<div class=\"row align-item-center\">", "</div>", [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticStyle: {
        "height": "80px",
        "object-fit": "contain",
        "width": "auto !important"
      },
      attrs: {
        "data-src": item.image,
        "alt": item.image_alt,
        "title": item.image_title
      }
    }, []), _vm._ssrNode(" <div class=\"col-auto\"><h3><span class=\"odometer\">" + _vm._ssrEscape(_vm._s(item.counter)) + "</span>+</h3> <p>" + _vm._s(item.title) + "</p></div>")], 2)])]) : _vm._e();
  }), 0)], 2)]), _vm._ssrNode(" "), _c('WhatWeDoCard', {
    attrs: {
      "heading": "Why choose Arjunaa Academy for Achievers?",
      "loading": _vm.featureLoading,
      "feature": _vm.feature
    }
  }), _vm._ssrNode(" "), _c('el-dialog', {
    attrs: {
      "title": "Hareesh PK",
      "visible": _vm.dialogVideoVisible,
      "width": "90%",
      "top": "20px"
    },
    on: {
      "update:visible": function ($event) {
        _vm.dialogVideoVisible = $event;
      }
    }
  }, [_vm.dialogVideoVisible ? _c('iframe', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": "https://www.youtube.com/embed/sfCJJZ0Wmi8?rel=0&autoplay=1&loop=1",
      "frameborder": "0",
      "width": "100%",
      "height": "550",
      "allowfullscreen": ""
    }
  }) : _vm._e()]), _vm._ssrNode(" "), _c('el-dialog', {
    attrs: {
      "title": "ARJUNAA ACADEMY FOR ACHIEVERS",
      "visible": _vm.dialogBannerVisible,
      "width": "80%",
      "top": "10vh"
    },
    on: {
      "update:visible": function ($event) {
        _vm.dialogBannerVisible = $event;
      }
    }
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "w-100",
    attrs: {
      "data-src": "/images/jee-main.webp",
      "title": "ARJUNAA ACADEMY FOR ACHIEVERS",
      "alt": "ARJUNAA ACADEMY FOR ACHIEVERS"
    }
  })])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/about-us.vue?vue&type=template&id=49bd8db6&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(204);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/about-us.vue?vue&type=script&lang=js&

/* harmony default export */ var about_usvue_type_script_lang_js_ = ({
  name: "AboutPage",
  layout: "MainPageLayout",
  data() {
    return {
      counterLoading: false,
      counter: [],
      aboutLoading: false,
      about: null,
      featureLoading: false,
      feature: [],
      dialogVideoVisible: false,
      dialogBannerVisible: true,
      seo: {
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
        meta_scripts: ''
      }
    };
  },
  head() {
    return {
      title: this.seo.meta_title,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'og:title',
        name: 'og:title',
        content: this.seo.meta_title
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }, {
        hid: 'description',
        name: 'description',
        content: this.seo.meta_description
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: this.seo.meta_keywords
      }],
      script: [{
        type: 'application/ld+json',
        innerHTML: this.seo.meta_scripts // <- set jsonld object in data or wherever you want
      }],

      __dangerouslyDisableSanitizers: ['script']
    };
  },
  mounted() {
    this.getCounter();
  },
  async fetch() {
    await this.getAboutSection();
    await this.getFeature();
    await this.getSeo();
  },
  methods: {
    async getCounter() {
      this.counterLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].counter); // eslint-disable-line
        this.counter = response.data.counter;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.counterLoading = false;
      }
    },
    async getAboutSection() {
      this.aboutLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].aboutSection + `/about-page`); // eslint-disable-line
        this.about = response.data.about;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.aboutLoading = false;
      }
    },
    async getFeature() {
      this.featureLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].feature + `/about-page`); // eslint-disable-line
        this.feature = response.data.feature;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.featureLoading = false;
      }
    },
    async getSeo() {
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/about-page`); // eslint-disable-line
        this.seo = response.data.seo;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      }
    }
  },
  components: {
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 251)),
    WhoWeAreCard: () => __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, 252)),
    WhatWeDoCard: () => __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, 253))
  }
});
// CONCATENATED MODULE: ./pages/about-us.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_about_usvue_type_script_lang_js_ = (about_usvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/about-us.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_about_usvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "42b2bfb8"
  
)

/* harmony default export */ var about_us = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about-us.js.map