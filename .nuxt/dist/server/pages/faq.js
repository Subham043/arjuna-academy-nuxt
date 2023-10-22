exports.ids = [34];
exports.modules = {

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/faq.vue?vue&type=template&id=72754ca8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "FAQ",
      "pages": [{
        link: '',
        name: 'FAQ'
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"faq-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"faq-img\">", "</div>", [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "faq-page-img",
    attrs: {
      "data-src": "/images/faq.webp",
      "alt": "faq",
      "title": "faq"
    }
  }, []), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"shape\">", "</div>", [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": "/images/faq-shape.png",
      "alt": "Faq",
      "title": "Faq"
    }
  }, [])])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"faq-area\" class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"faq-accordion pl-20\">", "</div>", [_vm._ssrNode("<div class=\"section-title mb-45\"><span>FAQ</span> <h2>Frequently asked question</h2></div> "), _vm.faqLoading ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l(9, function (i) {
    return _vm._ssrNode("<div class=\"col-lg-12 col-md-12\">", "</div>", [_c('el-skeleton', {
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
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-skeleton-item', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "variant": "text"
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-skeleton-item', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "variant": "text"
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')], 1)], 2)], 1);
  }), 0) : _vm._e(), _vm._ssrNode(" " + (!_vm.faqLoading && _vm.faq.length > 0 ? "<ul class=\"accordion\">" + _vm._ssrList(_vm.faq, function (item, i) {
    return "<li class=\"accordion-item\"><h4 class=\"accordion-title active\">" + _vm._s(item.question) + "</h4> <div class=\"accordion-content show\">" + _vm._s(item.answer) + "</div></li>";
  }) + "</ul>" : "<!---->") + " "), !_vm.faqLoading && _vm.faq.length > 0 ? _vm._ssrNode("<div class=\"col-12 text-center mt-5\">", "</div>", [_c('pagination', {
    attrs: {
      "records": _vm.faqCount,
      "per-page": _vm.faqPerPage,
      "options": {
        edgeNavigation: false
      }
    },
    on: {
      "paginate": _vm.handlePaginationChnage
    },
    model: {
      value: _vm.faqCurrentPage,
      callback: function ($$v) {
        _vm.faqCurrentPage = $$v;
      },
      expression: "faqCurrentPage"
    }
  })], 1) : _vm._e()], 2)])], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/faq.vue?vue&type=template&id=72754ca8&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/faq.vue?vue&type=script&lang=js&

/* harmony default export */ var faqvue_type_script_lang_js_ = ({
  name: "FaqPage",
  layout: "MainPageLayout",
  data() {
    return {
      faqLoading: false,
      faq: [],
      faqCount: 1,
      faqCurrentPage: 1,
      faqPerPage: 1,
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
    await this.getFaq(this.$route.query.page ? Number(this.$route.query.page) : 1);
    await this.getSeo();
  },
  watch: {
    $route(to, from) {
      this.handlePageChnage();
      if (false) {}
    }
  },
  methods: {
    async getFaq(page = 0) {
      this.faqLoading = true;
      try {
        var _response$data, _response$data$meta, _response$data2, _response$data2$meta;
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].faq + `?total=12&page=${page}`); // eslint-disable-line
        this.faq = response.data.data;
        this.faqCount = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$meta = _response$data.meta) === null || _response$data$meta === void 0 ? void 0 : _response$data$meta.total;
        this.faqPerPage = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$meta = _response$data2.meta) === null || _response$data2$meta === void 0 ? void 0 : _response$data2$meta.per_page;
        this.faqCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.faqLoading = false;
      }
    },
    async getSeo() {
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/faq-page`); // eslint-disable-line
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
      this.faqCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      this.getFaq(this.$route.query.page ? Number(this.$route.query.page) : 1);
    }
  },
  components: {
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 142))
  }
});
// CONCATENATED MODULE: ./pages/faq.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_faqvue_type_script_lang_js_ = (faqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/faq.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_faqvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e6e6e40"
  
)

/* harmony default export */ var faq = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=faq.js.map