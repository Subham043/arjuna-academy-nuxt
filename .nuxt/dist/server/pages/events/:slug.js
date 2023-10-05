exports.ids = [30];
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

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/events/:slug.vue?vue&type=template&id=5ec24099&
var render = function render() {
  var _vm$event, _vm$event2, _vm$event3, _vm$event4, _vm$event5, _vm$event6, _vm$event7, _vm$event8, _vm$event9, _vm$event10, _vm$event11, _vm$event12;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": (_vm$event = _vm.event) === null || _vm$event === void 0 ? void 0 : _vm$event.name,
      "pages": [{
        link: '/events',
        name: 'Events'
      }, {
        link: '',
        name: (_vm$event2 = _vm.event) === null || _vm$event2 === void 0 ? void 0 : _vm$event2.name
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"event-details-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8\">", "</div>", [!_vm.eventLoading ? [_vm._ssrNode("<div class=\"event-details-content pr-20\">", "</div>", [_vm._ssrNode("<div class=\"event-preview-img\">", "</div>", [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": (_vm$event3 = _vm.event) === null || _vm$event3 === void 0 ? void 0 : _vm$event3.image,
      "alt": (_vm$event4 = _vm.event) === null || _vm$event4 === void 0 ? void 0 : _vm$event4.image_alt,
      "title": (_vm$event5 = _vm.event) === null || _vm$event5 === void 0 ? void 0 : _vm$event5.image_title
    }
  }, [])]), _vm._ssrNode(" <h1>" + _vm._s((_vm$event6 = _vm.event) === null || _vm$event6 === void 0 ? void 0 : _vm$event6.heading) + "</h1> <div>" + _vm._s((_vm$event7 = _vm.event) === null || _vm$event7 === void 0 ? void 0 : _vm$event7.description) + "</div> " + (((_vm$event8 = _vm.event) === null || _vm$event8 === void 0 ? void 0 : _vm$event8.speakers.length) > 0 ? "<h3 class=\"event-details-mt-30\">Our speakers</h3>" : "<!---->") + " "), ((_vm$event9 = _vm.event) === null || _vm$event9 === void 0 ? void 0 : _vm$event9.speakers.length) > 0 ? _vm._ssrNode("<div class=\"row justify-content-center event-details-mt-30\">", "</div>", _vm._l((_vm$event10 = _vm.event) === null || _vm$event10 === void 0 ? void 0 : _vm$event10.speakers, function (item, i) {
    return _vm._ssrNode("<div class=\"col-lg-3 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"instructors-item instructors-item-bg\">", "</div>", [_vm._ssrNode("<div class=\"instructors-img\">", "</div>", [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": item.image,
        "alt": item.image_alt,
        "title": item.image_title
      }
    }, [])]), _vm._ssrNode(" <div class=\"content\"><h3>" + _vm._s(item === null || item === void 0 ? void 0 : item.name) + "</h3> <span>" + _vm._s(item === null || item === void 0 ? void 0 : item.designation) + "</span></div>")], 2)]);
  }), 0) : _vm._e()], 2)] : [_c('PageDetailLoading')]], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-4\">", "</div>", [_vm._ssrNode((!_vm.eventLoading ? "<div class=\"event-sidebar\"><h3 class=\"title\">Events description</h3> <ul><li>Date: <span>" + _vm._ssrEscape(_vm._s((_vm$event11 = _vm.event) === null || _vm$event11 === void 0 ? void 0 : _vm$event11.event_date_on)) + "</span></li> " + _vm._ssrList((_vm$event12 = _vm.event) === null || _vm$event12 === void 0 ? void 0 : _vm$event12.specifications, function (item, i) {
    return "<li>" + _vm._ssrEscape("\n                                    " + _vm._s(item.title) + ": ") + "<span>" + _vm._s(item.description) + "</span></li>";
  }) + "</ul></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"event-sidebar\">", "</div>", [_vm._ssrNode("<h3 class=\"title\">Upcoming Events</h3> "), _vm.popularEventLoading ? _c('PopularPostLoading') : _vm._e(), _vm._ssrNode(" "), _vm._l(_vm.popularEvent, function (item, i) {
    return !_vm.popularEventLoading && _vm.popularEvent.length > 0 ? _vm._ssrNode("<article class=\"item\">", "</article>", [_vm._ssrNode("<div class=\"info\">", "</div>", [_c('NuxtLink', {
      attrs: {
        "to": `/events/${item.slug}`
      }
    }, [_c('h4', {
      staticClass: "title-text",
      domProps: {
        "innerHTML": _vm._s(item.name)
      }
    })]), _vm._ssrNode(" <p>" + _vm._s(item.short_description) + "</p> <hr>")], 2)]) : _vm._e();
  }), _vm._ssrNode(" "), !_vm.popularEventLoading && _vm.popularEvent.length > 0 ? _vm._ssrNode("<div class=\"col-12 text-center\">", "</div>", [_c('pagination', {
    attrs: {
      "records": _vm.popularEventCount,
      "per-page": _vm.popularEventPerPage,
      "options": {
        edgeNavigation: false
      }
    },
    on: {
      "paginate": _vm.handlePopularEventPaginationChnage
    },
    model: {
      value: _vm.popularEventCurrentPage,
      callback: function ($$v) {
        _vm.popularEventCurrentPage = $$v;
      },
      expression: "popularEventCurrentPage"
    }
  })], 1) : _vm._e()], 2)], 2)], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/events/:slug.vue?vue&type=template&id=5ec24099&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/events/:slug.vue?vue&type=script&lang=js&

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: "EventDetailPage",
  layout: "MainPageLayout",
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
    this.getPopluarEvent();
  },
  data() {
    return {
      eventLoading: false,
      event: null,
      popularEventLoading: false,
      popularEvent: [],
      popularEventCount: 1,
      popularEventCurrentPage: 1,
      popularEventPerPage: 1
    };
  },
  head() {
    var _this$event, _this$event2, _this$event3, _this$event4, _this$event5;
    return {
      title: (_this$event = this.event) === null || _this$event === void 0 ? void 0 : _this$event.meta_title,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'og:title',
        name: 'og:title',
        content: (_this$event2 = this.event) === null || _this$event2 === void 0 ? void 0 : _this$event2.meta_title
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }, {
        hid: 'description',
        name: 'description',
        content: (_this$event3 = this.event) === null || _this$event3 === void 0 ? void 0 : _this$event3.meta_description
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: (_this$event4 = this.event) === null || _this$event4 === void 0 ? void 0 : _this$event4.meta_keywords
      }],
      script: [{
        type: 'application/ld+json',
        innerHTML: (_this$event5 = this.event) === null || _this$event5 === void 0 ? void 0 : _this$event5.meta_scripts // <- set jsonld object in data or wherever you want
      }],

      __dangerouslyDisableSanitizers: ['script']
    };
  },
  async fetch() {
    await this.getEvent();
  },
  watch: {
    $route(to, from) {
      this.handlePopularEventPageChnage();
    }
  },
  methods: {
    async getEvent() {
      this.eventLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].event + `/${this.$route.params.slug}`); // eslint-disable-line
        this.event = response.data.event;
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
    async getPopluarEvent(page = 0) {
      this.popularEventLoading = true;
      try {
        var _response$data, _response$data$meta, _response$data2, _response$data2$meta;
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].event + `?total=8&page=${page}`); // eslint-disable-line
        this.popularEvent = response.data.data;
        this.popularEventCount = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$meta = _response$data.meta) === null || _response$data$meta === void 0 ? void 0 : _response$data$meta.total;
        this.popularEventPerPage = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$meta = _response$data2.meta) === null || _response$data2$meta === void 0 ? void 0 : _response$data2$meta.per_page;
        this.popularEventCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.popularEventLoading = false;
      }
    },
    handlePopularEventPaginationChnage(page) {
      this.$router.push({
        query: {
          page
        }
      });
    },
    handlePopularEventPageChnage() {
      this.popularEventCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      this.getPopluarEvent(this.$route.query.page ? Number(this.$route.query.page) : 1);
    }
  },
  components: {
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 253)),
    PageDetailLoading: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 262)),
    PopularPostLoading: () => __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, 263))
  }
});
// CONCATENATED MODULE: ./pages/events/:slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var events_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/events/:slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  events_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "14c8ed96"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=:slug.js.map