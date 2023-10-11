exports.ids = [31];
exports.modules = {

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/events/index.vue?vue&type=template&id=521a6dcc&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Events",
      "pages": [{
        link: '',
        name: 'Events'
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"event-area\" class=\"blog-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title mb-45 text-center\"><h2>Latest from our <b>events</b></h2> <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                    eiusmod tempor incididunt ut labore et dolore.\n                </p></div> "), _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", [_vm.eventLoading ? _c('EventCardLoading', {
    attrs: {
      "count": 8
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm._l(_vm.event, function (item, i) {
    return !_vm.eventLoading && _vm.event.length > 0 ? _vm._ssrNode("<div class=\"col-lg-6 col-md-6\">", "</div>", [_c('EventCard', {
      attrs: {
        "image": item.image,
        "title": item.name,
        "description": item.short_description,
        "date": item.event_date_on,
        "image_alt": item.image_alt,
        "image_title": item.image_title,
        "slug": item.slug
      }
    })], 1) : _vm._e();
  }), _vm._ssrNode(" "), !_vm.eventLoading && _vm.event.length > 0 ? _vm._ssrNode("<div class=\"col-12 text-center\">", "</div>", [_c('pagination', {
    attrs: {
      "records": _vm.eventCount,
      "per-page": _vm.eventPerPage,
      "options": {
        edgeNavigation: false
      }
    },
    on: {
      "paginate": _vm.handlePaginationChnage
    },
    model: {
      value: _vm.eventCurrentPage,
      callback: function ($$v) {
        _vm.eventCurrentPage = $$v;
      },
      expression: "eventCurrentPage"
    }
  })], 1) : _vm._e()], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/events/index.vue?vue&type=template&id=521a6dcc&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/events/index.vue?vue&type=script&lang=js&

/* harmony default export */ var eventsvue_type_script_lang_js_ = ({
  name: "EventTipPage",
  layout: "MainPageLayout",
  data() {
    return {
      eventLoading: false,
      event: [],
      eventCount: 1,
      eventCurrentPage: 1,
      eventPerPage: 1,
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
    await this.getEvent(this.$route.query.page ? Number(this.$route.query.page) : 1);
    await this.getSeo();
  },
  watch: {
    $route(to, from) {
      this.handlePageChnage();
      if (false) {}
    }
  },
  methods: {
    async getEvent(page = 0) {
      this.eventLoading = true;
      try {
        var _response$data, _response$data$meta, _response$data2, _response$data2$meta;
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].event + `?total=8&page=${page}&sort=-id`); // eslint-disable-line
        this.event = response.data.data;
        this.eventCount = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$meta = _response$data.meta) === null || _response$data$meta === void 0 ? void 0 : _response$data$meta.total;
        this.eventPerPage = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$meta = _response$data2.meta) === null || _response$data2$meta === void 0 ? void 0 : _response$data2$meta.per_page;
        this.eventCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.eventLoading = false;
      }
    },
    async getSeo() {
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/events-page`); // eslint-disable-line
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
      this.eventCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      this.getEvent(this.$route.query.page ? Number(this.$route.query.page) : 1);
    }
  },
  components: {
    EventCard: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 105)),
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 142)),
    EventCardLoading: () => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 145))
  }
});
// CONCATENATED MODULE: ./pages/events/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_eventsvue_type_script_lang_js_ = (eventsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/events/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_eventsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "653635a2"
  
)

/* harmony default export */ var events = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=index.js.map