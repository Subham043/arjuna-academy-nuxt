exports.ids = [14];
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

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/expert-tips/:slug.vue?vue&type=template&id=4ce18051&
var render = function render() {
  var _vm$expertTip, _vm$expertTip2, _vm$expertTip3, _vm$expertTip4, _vm$expertTip5, _vm$expertTip6, _vm$prev_expertTip, _vm$expertTip7, _vm$expertTip8, _vm$expertTip9, _vm$expertTip10, _vm$expertTip11, _vm$expertTip12, _vm$expertTip13, _vm$next_expertTip;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": (_vm$expertTip = _vm.expertTip) === null || _vm$expertTip === void 0 ? void 0 : _vm$expertTip.name,
      "pages": [{
        link: '/expert-tips',
        name: 'Expert Tips'
      }, {
        link: '',
        name: (_vm$expertTip2 = _vm.expertTip) === null || _vm$expertTip2 === void 0 ? void 0 : _vm$expertTip2.name
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"blog-details-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_vm._ssrNode("<div class=\"blog-details-content pr-20\">", "</div>", [!_vm.expertTipLoading ? [_vm._ssrNode("<ul class=\"tag-list\">", "</ul>", [_vm._ssrNode("<li><i class=\"ri-calendar-todo-fill\"></i>" + _vm._ssrEscape(" " + _vm._s((_vm$expertTip3 = _vm.expertTip) === null || _vm$expertTip3 === void 0 ? void 0 : _vm$expertTip3.published)) + "</li> "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<i class=\"ri-user-fill\"></i> "), _c('NuxtLink', {
    attrs: {
      "to": "/leadership-team"
    }
  }, [_vm._v(_vm._s((_vm$expertTip4 = _vm.expertTip) === null || _vm$expertTip4 === void 0 ? void 0 : _vm$expertTip4.author_name))])], 2)], 2), _vm._ssrNode(" <h1>" + _vm._ssrEscape(_vm._s((_vm$expertTip5 = _vm.expertTip) === null || _vm$expertTip5 === void 0 ? void 0 : _vm$expertTip5.heading)) + "</h1> "), _c('div', {
    directives: [{
      name: "html-safe",
      rawName: "v-html-safe",
      value: (_vm$expertTip6 = _vm.expertTip) === null || _vm$expertTip6 === void 0 ? void 0 : _vm$expertTip6.description,
      expression: "expertTip?.description"
    }]
  }, []), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"article-share\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center justify-content-between\">", "</div>", [_vm.prev_expertTip !== null ? _vm._ssrNode("<div class=\"col-lg-auto col-md-auto\">", "</div>", [_vm._ssrNode("<div class=\"pagination-area m-0\">", "</div>", [_c('NuxtLink', {
    staticClass: "prev page-numbers",
    attrs: {
      "to": _vm.prev_expertTip !== null ? `/expert-tips/${(_vm$prev_expertTip = _vm.prev_expertTip) === null || _vm$prev_expertTip === void 0 ? void 0 : _vm$prev_expertTip.slug}` : '#',
      "title": "previous expert tip"
    }
  }, [_c('i', {
    staticClass: "flaticon-left-arrow"
  })])], 1)]) : _vm._e(), _vm._ssrNode(" <div class=\"col-lg-auto col-md-auto\"><div class=\"article-social-icon\"><ul class=\"social-icon\"><li class=\"title\">Share :</li> <li><a" + _vm._ssrAttr("href", `https://www.facebook.com/share.php?u=https://www.aaaedu.in/expert-tips/${(_vm$expertTip7 = _vm.expertTip) === null || _vm$expertTip7 === void 0 ? void 0 : _vm$expertTip7.slug}&title=${(_vm$expertTip8 = _vm.expertTip) === null || _vm$expertTip8 === void 0 ? void 0 : _vm$expertTip8.name}`) + " target=\"_blank\"><i class=\"ri-facebook-fill\"></i></a></li> <li><a" + _vm._ssrAttr("href", `https://twitter.com/share?text=${(_vm$expertTip9 = _vm.expertTip) === null || _vm$expertTip9 === void 0 ? void 0 : _vm$expertTip9.name}&url=https://www.aaaedu.in/expert-tips/${(_vm$expertTip10 = _vm.expertTip) === null || _vm$expertTip10 === void 0 ? void 0 : _vm$expertTip10.slug}`) + " target=\"_blank\"><i class=\"ri-twitter-fill\"></i></a></li> <li><a" + _vm._ssrAttr("href", `https://www.linkedin.com/shareArticle?mini=true&url=https://www.aaaedu.in/expert-tips/${(_vm$expertTip11 = _vm.expertTip) === null || _vm$expertTip11 === void 0 ? void 0 : _vm$expertTip11.slug}&title=${(_vm$expertTip12 = _vm.expertTip) === null || _vm$expertTip12 === void 0 ? void 0 : _vm$expertTip12.name}&source=${(_vm$expertTip13 = _vm.expertTip) === null || _vm$expertTip13 === void 0 ? void 0 : _vm$expertTip13.name}`) + " target=\"_blank\"><i class=\"ri-linkedin-fill\"></i></a></li></ul></div></div> "), _vm.next_expertTip !== null ? _vm._ssrNode("<div class=\"col-lg-auto col-md-auto\">", "</div>", [_vm._ssrNode("<div class=\"pagination-area m-0\">", "</div>", [_c('NuxtLink', {
    staticClass: "next page-numbers",
    attrs: {
      "to": _vm.next_expertTip !== null ? `/expert-tips/${(_vm$next_expertTip = _vm.next_expertTip) === null || _vm$next_expertTip === void 0 ? void 0 : _vm$next_expertTip.slug}` : '#',
      "title": "next expert tip"
    }
  }, [_c('i', {
    staticClass: "flaticon-chevron"
  })])], 1)]) : _vm._e()], 2)])] : [_c('el-skeleton', {
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

// CONCATENATED MODULE: ./pages/expert-tips/:slug.vue?vue&type=template&id=4ce18051&

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(210);

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/expert-tips/:slug.vue?vue&type=script&lang=js&


/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: "ExpertTipDetailPage",
  layout: "MainPageLayout",
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  },
  data() {
    return {
      expertTipLoading: false,
      expertTip: null,
      prev_expertTip: null,
      next_expertTip: null
    };
  },
  head() {
    var _this$expertTip, _this$expertTip2, _this$expertTip3, _this$expertTip4, _this$expertTip5;
    return {
      title: (_this$expertTip = this.expertTip) === null || _this$expertTip === void 0 ? void 0 : _this$expertTip.meta_title,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'og:title',
        name: 'og:title',
        content: (_this$expertTip2 = this.expertTip) === null || _this$expertTip2 === void 0 ? void 0 : _this$expertTip2.meta_title
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }, {
        hid: 'description',
        name: 'description',
        content: (_this$expertTip3 = this.expertTip) === null || _this$expertTip3 === void 0 ? void 0 : _this$expertTip3.meta_description
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: (_this$expertTip4 = this.expertTip) === null || _this$expertTip4 === void 0 ? void 0 : _this$expertTip4.meta_keywords
      }],
      script: [{
        type: 'application/ld+json',
        innerHTML: (_this$expertTip5 = this.expertTip) === null || _this$expertTip5 === void 0 ? void 0 : _this$expertTip5.meta_scripts // <- set jsonld object in data or wherever you want
      }],

      __dangerouslyDisableSanitizers: ['script']
    };
  },
  async fetch() {
    await this.getExpertTip();
  },
  methods: {
    async getExpertTip() {
      this.expertTipLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].expertTip + `/${this.$route.params.slug}`); // eslint-disable-line
        this.expertTip = response.data.expertTip;
        this.next_expertTip = response.data.next_expertTip;
        this.prev_expertTip = response.data.prev_expertTip;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.expertTipLoading = false;
      }
    }
  },
  components: {
    Breadcrumb: Breadcrumb["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/expert-tips/:slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var expert_tips_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/expert-tips/:slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  expert_tips_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0aa0b046"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=:slug.js.map