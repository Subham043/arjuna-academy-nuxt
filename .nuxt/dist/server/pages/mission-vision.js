exports.ids = [41];
exports.modules = {

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/mission-vision.vue?vue&type=template&id=019f507c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Mission & Vision",
      "pages": [{
        link: '',
        name: 'Mission & Vision'
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"faq-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-4\">", "</div>", [_vm._ssrNode("<div class=\"faq-img\">", "</div>", [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": "/images/mission-vision.webp",
      "alt": "faq"
    }
  }, []), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"shape\">", "</div>", [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": "/images/faq-shape.png",
      "alt": "Faq"
    }
  }, [])])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-8\">", "</div>", [_vm._ssrNode("<div class=\"faq-accordion pl-20\">", "</div>", [_vm._ssrNode("<ul class=\"accordion\">", "</ul>", [_vm._ssrNode("<li class=\"accordion-item\">", "</li>", [_vm._ssrNode("<h2 class=\"accordion-title active\">\n                                    Mission\n                                </h2> "), _vm._ssrNode("<div class=\"accordion-content show\">", "</div>", [_vm.loading ? _c('el-skeleton', {
    attrs: {
      "rows": 6,
      "animated": ""
    }
  }) : _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.mission)
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"accordion-item\">", "</li>", [_vm._ssrNode("<h2 class=\"accordion-title active\">\n                                    Vision\n                                </h2> "), _vm._ssrNode("<div class=\"accordion-content show\">", "</div>", [_vm.loading ? _c('el-skeleton', {
    attrs: {
      "rows": 6,
      "animated": ""
    }
  }) : _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.vision)
    }
  })], 1)], 2)], 2)])])], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/mission-vision.vue?vue&type=template&id=019f507c&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/mission-vision.vue?vue&type=script&lang=js&

/* harmony default export */ var mission_visionvue_type_script_lang_js_ = ({
  name: "FaqPage",
  layout: "MainPageLayout",
  data() {
    return {
      mission: "",
      vision: "",
      loading: false,
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
  async fetch() {
    await this.getMissionVision();
    await this.getSeo();
  },
  methods: {
    async getMissionVision() {
      this.loading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].mission_vision); // eslint-disable-line
        this.mission = response.data.mission.mission;
        this.vision = response.data.mission.vision;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.loading = false;
      }
    },
    async getSeo() {
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/mission-vision-page`); // eslint-disable-line
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
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 142))
  }
});
// CONCATENATED MODULE: ./pages/mission-vision.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_mission_visionvue_type_script_lang_js_ = (mission_visionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/mission-vision.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_mission_visionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2f0a5a8f"
  
)

/* harmony default export */ var mission_vision = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
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

/***/ })

};;
//# sourceMappingURL=mission-vision.js.map