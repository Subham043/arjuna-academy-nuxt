exports.ids = [25];
exports.modules = {

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=template&id=3fa16c5c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "inner-banner inner-banner-bg"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"inner-title text-center\">", "</div>", [_vm._ssrNode("<h3>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h3> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm._l(_vm.pages, function (item, i) {
    return _vm._ssrNode("<li>", "</li>", [i + 1 != _vm.pages.length ? _c('NuxtLink', {
      attrs: {
        "to": item.link
      }
    }, [_vm._v(_vm._s(item.name))]) : [_vm._v("\n                         " + _vm._s(item.name) + "\n                    ")]], 2);
  })], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=template&id=3fa16c5c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=script&lang=js&
/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({
  name: 'BreadcrumbComponent',
  props: {
    title: {
      type: String,
      default: ''
    },
    pages: {
      type: Array,
      default: []
    }
  }
});
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Breadcrumb.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "588da9da"
  
)

/* harmony default export */ var Breadcrumb = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialCard.vue?vue&type=template&id=5ae81481&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "testimonials-card-two"
  }, [_vm._ssrNode("<div class=\"rating\">" + _vm._ssrList(_vm.star, function (i) {
    return "<i class=\"ri-star-fill\"></i>";
  }) + "</div> <div class=\"quote\"><i class=\"flaticon-quote\"></i></div> <p>" + _vm._ssrEscape("\n        “" + _vm._s(_vm.message) + "”\n    ") + "</p> <div class=\"content\"><img" + _vm._ssrAttr("src", _vm.image) + " alt=\"testimonials\"> <h3>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</h3> <span>" + _vm._ssrEscape(_vm._s(_vm.designation)) + "</span></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TestimonialCard.vue?vue&type=template&id=5ae81481&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialCard.vue?vue&type=script&lang=js&
/* harmony default export */ var TestimonialCardvue_type_script_lang_js_ = ({
  name: 'TestimonialCardComponent',
  props: {
    image: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    designation: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    star: {
      type: Number,
      default: 5
    }
  }
});
// CONCATENATED MODULE: ./components/TestimonialCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TestimonialCardvue_type_script_lang_js_ = (TestimonialCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/TestimonialCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TestimonialCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3599186f"
  
)

/* harmony default export */ var TestimonialCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/testimonial.vue?vue&type=template&id=1ecca312&
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"testimonials-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title text-center\"><span>TESTIMONIAL</span> <h2>What our learers have to say</h2></div> "), _vm.testimonialLoading ? _vm._ssrNode("<div class=\"row justify-content-center testimonials-slider-two\">", "</div>", _vm._l(9, function (i) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\">", "</div>", [_c('el-skeleton', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "animated": ""
      }
    }, [_c('template', {
      slot: "template"
    }, [_c('div', {
      staticClass: "testimonials-card-two"
    }, [_c('div', {
      staticClass: "rating"
    }, _vm._l(5, function (i) {
      return _c('i', {
        key: i,
        staticClass: "ri-star-fill"
      });
    }), 0), _vm._v(" "), _c('el-skeleton-item', {
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
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
      staticClass: "content px-0"
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
    }), _vm._v(" "), _c('br')], 1), _vm._v(" "), _c('div', {
      staticClass: "quote"
    }, [_c('i', {
      staticClass: "flaticon-quote"
    })])], 1)])], 2)], 1);
  }), 0) : _vm._e(), _vm._ssrNode(" "), !_vm.testimonialLoading && _vm.testimonial.length > 0 ? _vm._ssrNode("<div class=\"testimonials-slider-two row\">", "</div>", _vm._l(_vm.testimonial, function (item, i) {
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

// CONCATENATED MODULE: ./pages/testimonial.vue?vue&type=template&id=1ecca312&

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(210);

// EXTERNAL MODULE: ./components/TestimonialCard.vue + 4 modules
var TestimonialCard = __webpack_require__(211);

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/testimonial.vue?vue&type=script&lang=js&



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
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  },
  async fetch() {
    await this.getTestimonial(this.$route.query.page ? Number(this.$route.query.page) : 1);
    await this.getSeo();
  },
  watch: {
    $route(to, from) {
      if (false) {}
      this.handlePageChnage();
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
    TestimonialCard: TestimonialCard["a" /* default */],
    Breadcrumb: Breadcrumb["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/testimonial.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testimonialvue_type_script_lang_js_ = (testimonialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/testimonial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testimonialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4aee50ab"
  
)

/* harmony default export */ var testimonial = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=testimonial.js.map