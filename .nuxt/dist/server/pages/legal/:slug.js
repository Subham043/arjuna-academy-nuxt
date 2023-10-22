exports.ids = [40];
exports.modules = {

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/legal/:slug.vue?vue&type=template&id=567b78ba&
var render = function render() {
  var _vm$legal, _vm$legal2, _vm$legal3, _vm$legal4;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": (_vm$legal = _vm.legal) === null || _vm$legal === void 0 ? void 0 : _vm$legal.page_name,
      "pages": [{
        link: '',
        name: 'Legal'
      }, {
        link: '',
        name: (_vm$legal2 = _vm.legal) === null || _vm$legal2 === void 0 ? void 0 : _vm$legal2.page_name
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"blog-details-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_vm._ssrNode("<div class=\"blog-details-content pr-20\">", "</div>", [!_vm.legalLoading ? [_vm._ssrNode("<h1>" + _vm._s((_vm$legal3 = _vm.legal) === null || _vm$legal3 === void 0 ? void 0 : _vm$legal3.heading) + "</h1> <div>" + _vm._s((_vm$legal4 = _vm.legal) === null || _vm$legal4 === void 0 ? void 0 : _vm$legal4.description) + "</div>")] : [_c('PageDetailLoading', {
    attrs: {
      "image": false
    }
  })]], 2)])])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/legal/:slug.vue?vue&type=template&id=567b78ba&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/legal/:slug.vue?vue&type=script&lang=js&

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: "ExpertTipDetailPage",
  layout: "MainPageLayout",
  data() {
    return {
      legalLoading: false,
      legal: null
    };
  },
  head() {
    var _this$legal, _this$legal2, _this$legal3, _this$legal4, _this$legal5;
    return {
      title: (_this$legal = this.legal) === null || _this$legal === void 0 ? void 0 : _this$legal.meta_title,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'og:title',
        name: 'og:title',
        content: (_this$legal2 = this.legal) === null || _this$legal2 === void 0 ? void 0 : _this$legal2.meta_title
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }, {
        hid: 'description',
        name: 'description',
        content: (_this$legal3 = this.legal) === null || _this$legal3 === void 0 ? void 0 : _this$legal3.meta_description
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: (_this$legal4 = this.legal) === null || _this$legal4 === void 0 ? void 0 : _this$legal4.meta_keywords
      }],
      script: [{
        type: 'application/ld+json',
        innerHTML: (_this$legal5 = this.legal) === null || _this$legal5 === void 0 ? void 0 : _this$legal5.meta_scripts // <- set jsonld object in data or wherever you want
      }],

      __dangerouslyDisableSanitizers: ['script']
    };
  },
  async fetch() {
    await this.getLegal();
  },
  methods: {
    async getLegal() {
      this.legalLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].legal + `/${this.$route.params.slug}`); // eslint-disable-line
        this.legal = response.data.legal;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.legalLoading = false;
      }
    }
  },
  components: {
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 142)),
    PageDetailLoading: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 154))
  }
});
// CONCATENATED MODULE: ./pages/legal/:slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var legal_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/legal/:slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  legal_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "774c43b9"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=:slug.js.map