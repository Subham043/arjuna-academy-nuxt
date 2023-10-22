exports.ids = [43];
exports.modules = {

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/testimonial.vue?vue&type=template&id=769209d8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Testimonial",
      "pages": [{
        link: '',
        name: 'Testimonial'
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"testimonial-area\" class=\"testimonials-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title text-center\"><span>TESTIMONIAL</span> <h2>What our learers have to say</h2></div> "), _vm.testimonialLoading ? _c('TestimonialCardLoading', {
    attrs: {
      "count": 9
    }
  }) : _vm._e(), _vm._ssrNode(" "), !_vm.testimonialLoading && _vm.testimonial.length > 0 ? _vm._ssrNode("<div class=\"testimonials-slider-two row\">", "</div>", _vm._l(_vm.testimonial, function (item, i) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\">", "</div>", [_c('TestimonialCard', {
      attrs: {
        "image": item.image,
        "name": item.name,
        "star": item.star,
        "message": item.message,
        "designation": item.designation
      }
    })], 1);
  }), 0) : _vm._e(), _vm._ssrNode(" "), !_vm.testimonialLoading && _vm.testimonial.length > 0 ? _vm._ssrNode("<div class=\"col-12 text-center\">", "</div>", [_c('pagination', {
    attrs: {
      "records": _vm.testimonialCount,
      "per-page": _vm.testimonialPerPage,
      "options": {
        edgeNavigation: false
      }
    },
    on: {
      "paginate": _vm.handlePaginationChnage
    },
    model: {
      value: _vm.testimonialCurrentPage,
      callback: function ($$v) {
        _vm.testimonialCurrentPage = $$v;
      },
      expression: "testimonialCurrentPage"
    }
  })], 1) : _vm._e()], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/testimonial.vue?vue&type=template&id=769209d8&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/testimonial.vue?vue&type=script&lang=js&

/* harmony default export */ var testimonialvue_type_script_lang_js_ = ({
  name: "TestimonialPage",
  layout: "MainPageLayout",
  data() {
    return {
      testimonialLoading: false,
      testimonial: [],
      testimonialCount: 1,
      testimonialCurrentPage: 1,
      testimonialPerPage: 1,
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
    await this.getTestimonial(this.$route.query.page ? Number(this.$route.query.page) : 1);
    await this.getSeo();
  },
  watch: {
    $route(to, from) {
      this.handlePageChnage();
      if (false) {}
    }
  },
  methods: {
    async getTestimonial(page = 0) {
      this.testimonialLoading = true;
      try {
        var _response$data, _response$data$meta, _response$data2, _response$data2$meta;
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].testimonial + `?total=9&page=${page}`); // eslint-disable-line
        this.testimonial = response.data.data;
        this.testimonialCount = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$meta = _response$data.meta) === null || _response$data$meta === void 0 ? void 0 : _response$data$meta.total;
        this.testimonialPerPage = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$meta = _response$data2.meta) === null || _response$data2$meta === void 0 ? void 0 : _response$data2$meta.per_page;
        this.testimonialCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.testimonialLoading = false;
      }
    },
    async getSeo() {
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/testimonial-page`); // eslint-disable-line
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
      this.testimonialCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      this.getTestimonial(this.$route.query.page ? Number(this.$route.query.page) : 1);
    }
  },
  components: {
    TestimonialCard: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 99)),
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 142)),
    TestimonialCardLoading: () => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, 148))
  }
});
// CONCATENATED MODULE: ./pages/testimonial.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testimonialvue_type_script_lang_js_ = (testimonialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/testimonial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testimonialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5bce6949"
  
)

/* harmony default export */ var testimonial = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=testimonial.js.map