exports.ids = [5];
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

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(223);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b165a48e", content, true, context)
};

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_2aa3c4fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_2aa3c4fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_2aa3c4fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_2aa3c4fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_2aa3c4fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".achiever-detail[data-v-2aa3c4fa]{background-color:#f9f9f9;-webkit-clip-path:polygon(50% 0,100% 0,100% 99%,50% 85%,0 100%,0 0);clip-path:polygon(50% 0,100% 0,100% 99%,50% 85%,0 100%,0 0);height:375px;margin-bottom:30px;min-height:375px;text-align:center}.achiever-detail-container[data-v-2aa3c4fa]{padding:15px 30px}.achiever-detail img[data-v-2aa3c4fa]{border:2px solid #d7c167;width:55%}.achiever-detail h5[data-v-2aa3c4fa]{font-size:17px;font-weight:700;margin:0;padding:10px 0}.achiever-detail h3[data-v-2aa3c4fa]{background:#304557;color:#fff;font-size:15px;font-weight:700;padding:10px;text-align:center}.tab-filter p[data-v-2aa3c4fa]{font-size:14px;font-weight:620;padding:0 10%;text-align:center}.achiever-detail p[data-v-2aa3c4fa]{font-weight:700}@media only screen and (max-width:767px){.achiever-detail[data-v-2aa3c4fa]{height:445px;min-height:445px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/achievers/:slug.vue?vue&type=template&id=2aa3c4fa&scoped=true&
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"blog-area pt-70 pb-70\" data-v-2aa3c4fa>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-2aa3c4fa>", "</div>", [_vm._ssrNode((!_vm.achieverCategoryLoading ? "<div class=\"section-title mb-45 text-center\" data-v-2aa3c4fa><h2 data-v-2aa3c4fa>" + _vm._ssrEscape(_vm._s((_vm$achieverCategory3 = _vm.achieverCategory) === null || _vm$achieverCategory3 === void 0 ? void 0 : _vm$achieverCategory3.heading)) + "</h2> <p data-v-2aa3c4fa>" + _vm._ssrEscape("\n                    " + _vm._s((_vm$achieverCategory4 = _vm.achieverCategory) === null || _vm$achieverCategory4 === void 0 ? void 0 : _vm$achieverCategory4.description) + "\n                ") + "</p></div>" : "<!---->") + " "), _vm.achieverCategoryLoading ? _vm._ssrNode("<div class=\"section-title mb-45 text-center\" data-v-2aa3c4fa>", "</div>", [_c('el-skeleton', {
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
  })], 1)], 2)], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row justify-content-center\" data-v-2aa3c4fa>", "</div>", [_vm._l(8, function (i) {
    return _vm.achieverStudentLoading ? _vm._ssrNode("<div class=\"col-lg-3 col-md-6\" data-v-2aa3c4fa>", "</div>", [_c('el-skeleton', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "animated": ""
      }
    }, [_c('template', {
      slot: "template"
    }, [_c('div', {
      staticClass: "achiever-detail"
    }, [_c('div', {
      staticClass: "achiever-detail-container pb-0 text-center"
    }, [_c('el-skeleton-item', {
      staticStyle: {
        "width": "50%",
        "height": "150px",
        "margin": "auto"
      },
      attrs: {
        "variant": "image"
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-skeleton-item', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "variant": "p"
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-skeleton-item', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "variant": "p"
      }
    })], 1)])])], 2)], 1) : _vm._e();
  }), _vm._ssrNode(" " + _vm._ssrList(_vm.achieverStudent, function (item, i) {
    return !_vm.achieverStudentLoading && _vm.achieverStudent.length > 0 ? "<div class=\"col-lg-3 col-md-6\" data-v-2aa3c4fa><div class=\"achiever-detail\" data-v-2aa3c4fa><div class=\"achiever-detail-container pb-0\" data-v-2aa3c4fa><img" + _vm._ssrAttr("src", item.image) + _vm._ssrAttr("alt", item.image_alt) + _vm._ssrAttr("title", item.image_title) + " class=\"img-responsive\" data-v-2aa3c4fa> <h5 data-v-2aa3c4fa>" + _vm._ssrEscape(_vm._s(item.name)) + "</h5></div> <h3 data-v-2aa3c4fa>" + _vm._ssrEscape(" " + _vm._s(item.rank)) + "</h3> <div class=\"achiever-detail-container pt-0\" data-v-2aa3c4fa><p data-v-2aa3c4fa>" + _vm._ssrEscape(_vm._s(item.college) + " ") + "</p></div></div></div>" : "<!---->";
  }) + " "), !_vm.achieverStudentLoading && _vm.achieverStudent.length > 0 ? _vm._ssrNode("<div class=\"col-12 text-center\" data-v-2aa3c4fa>", "</div>", [_c('pagination', {
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
  })], 1) : _vm._e()], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/achievers/:slug.vue?vue&type=template&id=2aa3c4fa&scoped=true&

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(210);

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/achievers/:slug.vue?vue&type=script&lang=js&


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
    Breadcrumb: Breadcrumb["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/achievers/:slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var achievers_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/achievers/:slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(222)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  achievers_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2aa3c4fa",
  "0a7b8b74"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=:slug.js.map