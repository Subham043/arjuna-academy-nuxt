exports.ids = [22];
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

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/legal/:slug.vue?vue&type=template&id=38bbe15c&
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"blog-details-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_vm._ssrNode("<div class=\"blog-details-content pr-20\">", "</div>", [!_vm.legalLoading ? [_vm._ssrNode("<h1>" + _vm._ssrEscape(_vm._s((_vm$legal3 = _vm.legal) === null || _vm$legal3 === void 0 ? void 0 : _vm$legal3.heading)) + "</h1> "), _c('div', {
    directives: [{
      name: "html-safe",
      rawName: "v-html-safe",
      value: (_vm$legal4 = _vm.legal) === null || _vm$legal4 === void 0 ? void 0 : _vm$legal4.description,
      expression: "legal?.description"
    }]
  }, [])] : [_c('el-skeleton', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "animated": ""
    }
  }, [_c('template', {
    slot: "template"
  }, [_c('div', {
    staticStyle: {
      "padding": "14px"
    }
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
      "width": "50%"
    },
    attrs: {
      "variant": "text"
    }
  })], 1)])], 2)]], 2)])])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/legal/:slug.vue?vue&type=template&id=38bbe15c&

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(210);

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/legal/:slug.vue?vue&type=script&lang=js&


/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: "ExpertTipDetailPage",
  layout: "MainPageLayout",
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  },
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
    Breadcrumb: Breadcrumb["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/legal/:slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var legal_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/legal/:slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  legal_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "666c2b1b"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=:slug.js.map