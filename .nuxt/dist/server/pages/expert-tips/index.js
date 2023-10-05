exports.ids = [33];
exports.modules = {

/***/ 206:
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

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/expert-tips/index.vue?vue&type=template&id=721a72d4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Expert Tips",
      "pages": [{
        link: '',
        name: 'Expert Tips'
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"blog-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title mb-45 text-center\"><h2>Latest from our <b>expert tips</b></h2> <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                    eiusmod tempor incididunt ut labore et dolore.\n                </p></div> "), _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", [_vm._l(8, function (i) {
    return _vm.expertTipLoading ? _vm._ssrNode("<div class=\"col-lg-6 col-md-6\">", "</div>", [_c('el-skeleton', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "animated": ""
      }
    }, [_c('template', {
      slot: "template"
    }, [_c('el-skeleton-item', {
      staticStyle: {
        "width": "30%"
      },
      attrs: {
        "variant": "text"
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-skeleton-item', {
      staticStyle: {
        "width": "50%"
      },
      attrs: {
        "variant": "p"
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-skeleton-item', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "variant": "text"
      }
    })], 1)], 2)], 1) : _vm._e();
  }), _vm._ssrNode(" "), _vm._l(_vm.expertTip, function (item, i) {
    return !_vm.expertTipLoading && _vm.expertTip.length > 0 ? _vm._ssrNode("<div class=\"col-lg-6 col-md-6\">", "</div>", [_c('EventCard', {
      attrs: {
        "title": item.name,
        "description": item.short_description,
        "date": item.published,
        "author": item.author_name,
        "slug": item.slug,
        "is_event": false
      }
    })], 1) : _vm._e();
  }), _vm._ssrNode(" "), !_vm.expertTipLoading && _vm.expertTip.length > 0 ? _vm._ssrNode("<div class=\"col-12 text-center\">", "</div>", [_c('pagination', {
    attrs: {
      "records": _vm.expertTipCount,
      "per-page": _vm.expertTipPerPage,
      "options": {
        edgeNavigation: false
      }
    },
    on: {
      "paginate": _vm.handlePaginationChnage
    },
    model: {
      value: _vm.expertTipCurrentPage,
      callback: function ($$v) {
        _vm.expertTipCurrentPage = $$v;
      },
      expression: "expertTipCurrentPage"
    }
  })], 1) : _vm._e()], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/expert-tips/index.vue?vue&type=template&id=721a72d4&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/expert-tips/index.vue?vue&type=script&lang=js&

/* harmony default export */ var expert_tipsvue_type_script_lang_js_ = ({
  name: "ExpertTipPage",
  layout: "MainPageLayout",
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  },
  data() {
    return {
      expertTipLoading: false,
      expertTip: [],
      expertTipCount: 1,
      expertTipCurrentPage: 1,
      expertTipPerPage: 1,
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
    await this.getExpertTip(this.$route.query.page ? Number(this.$route.query.page) : 1);
    await this.getSeo();
  },
  watch: {
    $route(to, from) {
      if (false) {}
      this.handlePageChnage();
    }
  },
  methods: {
    async getExpertTip(page = 0) {
      this.expertTipLoading = true;
      try {
        var _response$data, _response$data$meta, _response$data2, _response$data2$meta;
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].expertTip + `?total=8&page=${page}`); // eslint-disable-line
        this.expertTip = response.data.data;
        this.expertTipCount = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$meta = _response$data.meta) === null || _response$data$meta === void 0 ? void 0 : _response$data$meta.total;
        this.expertTipPerPage = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$meta = _response$data2.meta) === null || _response$data2$meta === void 0 ? void 0 : _response$data2$meta.per_page;
        this.expertTipCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.expertTipLoading = false;
      }
    },
    async getSeo() {
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/expert-tips-page`); // eslint-disable-line
        this.seo = response.data.seo;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      }
    },
    handlePaginationChnage(page) {
      this.$router.push({
        query: {
          page
        }
      });
    },
    handlePageChnage() {
      this.expertTipCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      this.getExpertTip(this.$route.query.page ? Number(this.$route.query.page) : 1);
    }
  },
  components: {
    EventCard: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 213)),
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 253))
  }
});
// CONCATENATED MODULE: ./pages/expert-tips/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_expert_tipsvue_type_script_lang_js_ = (expert_tipsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/expert-tips/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_expert_tipsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e25e0330"
  
)

/* harmony default export */ var expert_tips = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map