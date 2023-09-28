exports.ids = [23];
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

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/mission-vision.vue?vue&type=template&id=5c6d68a2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Mission & Vision",
      "pages": [{
        link: '',
        name: 'Mission & Vision'
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"faq-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-4\"><div class=\"faq-img\"><img src=\"/images/mission-vision.png\" alt=\"faq\"> <div class=\"shape\"><img src=\"/images/faq-shape.png\" alt=\"Faq\"></div></div></div> "), _vm._ssrNode("<div class=\"col-lg-8\">", "</div>", [_vm._ssrNode("<div class=\"faq-accordion pl-20\">", "</div>", [_vm._ssrNode("<ul class=\"accordion\">", "</ul>", [_vm._ssrNode("<li class=\"accordion-item\">", "</li>", [_vm._ssrNode("<h2 class=\"accordion-title active\">\n                                    Mission\n                                </h2> "), _vm._ssrNode("<div class=\"accordion-content show\">", "</div>", [_vm.loading ? _c('el-skeleton', {
    attrs: {
      "rows": 6,
      "animated": ""
    }
  }) : _c('p', [_vm._v("\n                                        " + _vm._s(_vm.mission) + "\n                                    ")])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"accordion-item\">", "</li>", [_vm._ssrNode("<h2 class=\"accordion-title active\">\n                                    Vision\n                                </h2> "), _vm._ssrNode("<div class=\"accordion-content show\">", "</div>", [_vm.loading ? _c('el-skeleton', {
    attrs: {
      "rows": 6,
      "animated": ""
    }
  }) : _c('p', [_vm._v("\n                                        " + _vm._s(_vm.vision) + "\n                                    ")])], 1)], 2)], 2)])])], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/mission-vision.vue?vue&type=template&id=5c6d68a2&

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(210);

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/mission-vision.vue?vue&type=script&lang=js&


/* harmony default export */ var mission_visionvue_type_script_lang_js_ = ({
  name: "FaqPage",
  layout: "MainPageLayout",
  data() {
    return {
      mission: "",
      vision: "",
      loading: false,
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
    await this.getMissionVision();
    await this.getSeo();
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  },
  methods: {
    async getMissionVision() {
      this.loading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].mission_vision); // eslint-disable-line
        this.mission = response.data.mission.mission;
        this.vision = response.data.mission.vision;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.loading = false;
      }
    },
    async getSeo() {
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/mission-vision-page`); // eslint-disable-line
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
    Breadcrumb: Breadcrumb["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/mission-vision.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_mission_visionvue_type_script_lang_js_ = (mission_visionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/mission-vision.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_mission_visionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "60b99fed"
  
)

/* harmony default export */ var mission_vision = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mission-vision.js.map