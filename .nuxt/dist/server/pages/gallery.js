exports.ids = [35];
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

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/gallery.vue?vue&type=template&id=6a20c31b&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Gallery",
      "pages": [{
        link: '',
        name: 'Gallery'
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"gallery-area\" class=\"blog-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title mb-45 text-center\"><h2>Photo Gallery</h2> <p>\n                    &quot;Photographs open doors into the past &amp; also allow a look into the future.&quot;\n                </p> <p>\n                    &quot;Reliving some of the happiest &amp; memorable moments here&quot;\n                </p></div> "), _c('viewer', {
    staticClass: "row justify-content-center",
    attrs: {
      "options": {
        zoom_in: false
      },
      "images": _vm.gallery
    }
  }, [_vm.galleryLoading ? _c('BlogCardLoading', {
    attrs: {
      "count": 6
    }
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.gallery, function (item, i) {
    return !_vm.galleryLoading && _vm.gallery.length > 0 ? _c('div', {
      key: i,
      staticClass: "col-lg-4 col-md-6"
    }, [_c('div', {
      staticClass: "blog-card"
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticStyle: {
        "cursor": "pointer"
      },
      attrs: {
        "data-src": item.image,
        "data-not-lazy": "",
        "alt": item.image_alt,
        "title": item.image_title
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('h3', {
      directives: [{
        name: "html-safe",
        rawName: "v-html-safe",
        value: item.title,
        expression: "item.title"
      }]
    }), _vm._v(" "), _c('p', {
      directives: [{
        name: "html-safe",
        rawName: "v-html-safe",
        value: item.description,
        expression: "item.description"
      }]
    })])])]) : _vm._e();
  }), _vm._v(" "), !_vm.galleryLoading && _vm.gallery.length > 0 ? _c('div', {
    staticClass: "col-12 text-center"
  }, [_c('pagination', {
    attrs: {
      "records": _vm.galleryCount,
      "per-page": _vm.galleryPerPage,
      "options": {
        edgeNavigation: false
      }
    },
    on: {
      "paginate": _vm.handlePaginationChnage
    },
    model: {
      value: _vm.galleryCurrentPage,
      callback: function ($$v) {
        _vm.galleryCurrentPage = $$v;
      },
      expression: "galleryCurrentPage"
    }
  })], 1) : _vm._e()], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/gallery.vue?vue&type=template&id=6a20c31b&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(204);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/gallery.vue?vue&type=script&lang=js&

/* harmony default export */ var galleryvue_type_script_lang_js_ = ({
  name: "BlogPage",
  layout: "MainPageLayout",
  data() {
    return {
      galleryLoading: false,
      gallery: [],
      galleryCount: 1,
      galleryCurrentPage: 1,
      galleryPerPage: 1,
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
    await this.getGallery(this.$route.query.page ? Number(this.$route.query.page) : 1);
    await this.getSeo();
  },
  watch: {
    $route(to, from) {
      this.handlePageChnage();
      if (false) {}
    }
  },
  methods: {
    async getGallery(page = 0) {
      this.galleryLoading = true;
      try {
        var _response$data, _response$data$meta, _response$data2, _response$data2$meta;
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].gallery + `?total=9&page=${page}`); // eslint-disable-line
        this.gallery = response.data.data;
        this.galleryCount = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$meta = _response$data.meta) === null || _response$data$meta === void 0 ? void 0 : _response$data$meta.total;
        this.galleryPerPage = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$meta = _response$data2.meta) === null || _response$data2$meta === void 0 ? void 0 : _response$data2$meta.per_page;
        this.galleryCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.galleryLoading = false;
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
      this.galleryCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      this.getGallery(this.$route.query.page ? Number(this.$route.query.page) : 1);
    },
    async getSeo() {
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/gallery-page`); // eslint-disable-line
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
    BlogCardLoading: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 255))
  }
});
// CONCATENATED MODULE: ./pages/gallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_galleryvue_type_script_lang_js_ = (galleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/gallery.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_galleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ac267908"
  
)

/* harmony default export */ var gallery = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=gallery.js.map