exports.ids = [22];
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

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/achievers/:slug.vue?vue&type=template&id=6509570c&
var render = function render() {
  var _vm$achieverCategory, _vm$achieverCategory2, _vm$achieverCategory3, _vm$achieverCategory4;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": (_vm$achieverCategory = _vm.achieverCategory) === null || _vm$achieverCategory === void 0 ? void 0 : _vm$achieverCategory.name,
      "pages": [{
        link: '',
        name: (_vm$achieverCategory2 = _vm.achieverCategory) === null || _vm$achieverCategory2 === void 0 ? void 0 : _vm$achieverCategory2.name
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"blog-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode((!_vm.achieverCategoryLoading ? "<div class=\"section-title mb-45 text-center\"><h2>" + _vm._s((_vm$achieverCategory3 = _vm.achieverCategory) === null || _vm$achieverCategory3 === void 0 ? void 0 : _vm$achieverCategory3.heading) + "</h2> <p>" + _vm._s((_vm$achieverCategory4 = _vm.achieverCategory) === null || _vm$achieverCategory4 === void 0 ? void 0 : _vm$achieverCategory4.description) + "</p></div>" : "<!---->") + " "), _vm.achieverCategoryLoading ? _vm._ssrNode("<div class=\"section-title mb-45 text-center\">", "</div>", [_c('el-skeleton', {
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
      "variant": "h1"
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-skeleton-item', {
    staticStyle: {
      "width": "50%"
    },
    attrs: {
      "variant": "text"
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-skeleton-item', {
    staticStyle: {
      "width": "50%"
    },
    attrs: {
      "variant": "text"
    }
  })], 1)], 2)], 1) : _vm._e(), _vm._ssrNode(" "), _vm.achieverStudentLoading ? _c('AchieverStudentLoading', {
    attrs: {
      "count": 8
    }
  }) : _vm._e(), _vm._ssrNode(" "), !_vm.achieverStudentLoading && _vm.achieverStudent.length > 0 ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", [_vm._l(_vm.achieverStudent, function (item, i) {
    return _vm._ssrNode("<div class=\"col-lg-3 col-md-6\">", "</div>", [_c('AchieverStudentCard', {
      attrs: {
        "image": item.image,
        "image_alt": item.image_alt,
        "image_title": item.image_title,
        "name": item.name,
        "rank": item.rank,
        "college": item.college
      }
    })], 1);
  }), _vm._ssrNode(" "), !_vm.achieverStudentLoading && _vm.achieverStudent.length > 0 ? _vm._ssrNode("<div class=\"col-12 text-center\">", "</div>", [_c('pagination', {
    attrs: {
      "records": _vm.achieverStudentCount,
      "per-page": _vm.achieverStudentPerPage,
      "options": {
        edgeNavigation: false
      }
    },
    on: {
      "paginate": _vm.handleAchieverStudentPaginationChnage
    },
    model: {
      value: _vm.achieverStudentCurrentPage,
      callback: function ($$v) {
        _vm.achieverStudentCurrentPage = $$v;
      },
      expression: "achieverStudentCurrentPage"
    }
  })], 1) : _vm._e()], 2) : _vm._e()], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/achievers/:slug.vue?vue&type=template&id=6509570c&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/achievers/:slug.vue?vue&type=script&lang=js&

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: "AchieversPage",
  layout: "MainPageLayout",
  data() {
    return {
      achieverCategoryLoading: false,
      achieverCategory: null,
      achieverStudentLoading: false,
      achieverStudent: [],
      achieverStudentCount: 1,
      achieverStudentCurrentPage: 1,
      achieverStudentPerPage: 1
    };
  },
  head() {
    var _this$achieverCategor, _this$achieverCategor2, _this$achieverCategor3, _this$achieverCategor4, _this$achieverCategor5;
    return {
      title: (_this$achieverCategor = this.achieverCategory) === null || _this$achieverCategor === void 0 ? void 0 : _this$achieverCategor.meta_title,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'og:title',
        name: 'og:title',
        content: (_this$achieverCategor2 = this.achieverCategory) === null || _this$achieverCategor2 === void 0 ? void 0 : _this$achieverCategor2.meta_title
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }, {
        hid: 'description',
        name: 'description',
        content: (_this$achieverCategor3 = this.achieverCategory) === null || _this$achieverCategor3 === void 0 ? void 0 : _this$achieverCategor3.meta_description
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: (_this$achieverCategor4 = this.achieverCategory) === null || _this$achieverCategor4 === void 0 ? void 0 : _this$achieverCategor4.meta_keywords
      }],
      script: [{
        type: 'application/ld+json',
        innerHTML: (_this$achieverCategor5 = this.achieverCategory) === null || _this$achieverCategor5 === void 0 ? void 0 : _this$achieverCategor5.meta_scripts // <- set jsonld object in data or wherever you want
      }],

      __dangerouslyDisableSanitizers: ['script']
    };
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  },
  async fetch() {
    await this.getAchieverCategory();
    await this.getAchieverStudent(this.$route.query.page ? Number(this.$route.query.page) : 1);
  },
  watch: {
    $route(to, from) {
      this.handleAchieverStudentPageChnage();
    }
  },
  methods: {
    async getAchieverCategory() {
      this.achieverCategoryLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].achieverCategory + `/${this.$route.params.slug}`); // eslint-disable-line
        this.achieverCategory = response.data.achiverCategory;
      } catch (err) {
        // console.log(err);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.achieverCategoryLoading = false;
      }
    },
    async getAchieverStudent(page = 0) {
      this.achieverStudentLoading = true;
      try {
        var _response$data, _response$data$meta, _response$data2, _response$data2$meta;
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].achieverStudent + `?total=12&page=${page}&filter[has_categories]=${this.$route.params.slug}`); // eslint-disable-line
        this.achieverStudent = response.data.data;
        this.achieverStudentCount = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$meta = _response$data.meta) === null || _response$data$meta === void 0 ? void 0 : _response$data$meta.total;
        this.achieverStudentPerPage = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$meta = _response$data2.meta) === null || _response$data2$meta === void 0 ? void 0 : _response$data2$meta.per_page;
        this.achieverStudentCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.achieverStudentLoading = false;
      }
    },
    handleAchieverStudentPaginationChnage(page) {
      this.$router.push({
        query: {
          page
        }
      });
    },
    handleAchieverStudentPageChnage() {
      this.achieverStudentCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      this.getAchieverStudent(this.$route.query.page ? Number(this.$route.query.page) : 1);
    }
  },
  components: {
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 253)),
    AchieverStudentLoading: () => __webpack_require__.e(/* import() */ 46).then(__webpack_require__.bind(null, 260)),
    AchieverStudentCard: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 261))
  }
});
// CONCATENATED MODULE: ./pages/achievers/:slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var achievers_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/achievers/:slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  achievers_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "06422512"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=:slug.js.map