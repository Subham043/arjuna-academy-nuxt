exports.ids = [4];
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

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/WhatWeDoCard.vue?vue&type=template&id=21a8e778&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "featured-area pt-70 pb-70"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center mb-45\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8 col-md-9\"><div class=\"section-title mt-rs-20\"><span>WHAT WE DO</span> <h2>" + _vm._ssrEscape(_vm._s(_vm.heading)) + "</h2></div></div> "), _vm._ssrNode("<div class=\"col-lg-4 col-md-3 text-end\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn border-radius-50",
    attrs: {
      "to": "/mission-vision"
    }
  }, [_vm._v("Mission & Vision")])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._l(6, function (i) {
    return _vm.loading ? _vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\">", "</div>", [_c('el-skeleton', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "animated": ""
      }
    }, [_c('template', {
      slot: "template"
    }, [_c('div', {
      staticClass: "counter-card box-shadow px-1"
    }, [_c('el-skeleton-item', {
      staticStyle: {
        "width": "100px",
        "height": "100px"
      },
      attrs: {
        "variant": "rect"
      }
    }), _vm._v(" "), _c('el-skeleton-item', {
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
        "variant": "p"
      }
    }), _vm._v(" "), _c('br')], 1)])], 2)], 1) : _vm._e();
  }), _vm._ssrNode(" " + _vm._ssrList(_vm.feature, function (item, i) {
    return !_vm.loading && _vm.feature.length > 0 ? "<div class=\"col-lg-4 col-6\"><div class=\"featured-item-two\"><div class=\"feature-icon-holder\"><img" + _vm._ssrAttr("src", item.image) + "> <h3>" + _vm._ssrEscape(_vm._s(item.title)) + "</h3></div> <p>" + _vm._ssrEscape(_vm._s(item.description)) + "</p></div></div>" : "<!---->";
  }))], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/WhatWeDoCard.vue?vue&type=template&id=21a8e778&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WhatWeDoCard.vue?vue&type=script&lang=js&
/* harmony default export */ var WhatWeDoCardvue_type_script_lang_js_ = ({
  name: 'WhatWeDoCardComponent',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    heading: {
      type: String,
      default: ''
    },
    feature: {
      type: Array,
      default: []
    }
  }
});
// CONCATENATED MODULE: ./components/WhatWeDoCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WhatWeDoCardvue_type_script_lang_js_ = (WhatWeDoCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/WhatWeDoCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WhatWeDoCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e2650cc6"
  
)

/* harmony default export */ var WhatWeDoCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/WhoWeAreCard.vue?vue&type=template&id=1cae1887&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [!_vm.loading ? [_vm._ssrNode("<div" + _vm._ssrClass(null, `enrolled-area-two ${_vm.first ? 'pt-70' : ''} pb-70`) + ">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode((_vm.heading_center ? "<div class=\"col-lg-12\"><div class=\"section-title text-center mb-3\"><span>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</span> <h2>" + _vm._ssrEscape("\n                                " + _vm._s(_vm.heading) + "\n                            ") + "</h2></div></div>" : "<!---->") + " <div class=\"col-lg-6\"><div class=\"enrolled-img-three mb-30 pr-20\"><img" + _vm._ssrAttr("src", _vm.image) + _vm._ssrAttr("alt", _vm.image_alt) + _vm._ssrAttr("title", _vm.image_title) + "> <div class=\"enrolled-img-content\"><img" + _vm._ssrAttr("src", _vm.counter_image) + "> <div class=\"content\"><h3>" + _vm._ssrEscape(_vm._s(_vm.counter_title)) + "</h3> <p>" + _vm._ssrEscape(_vm._s(_vm.counter_description)) + "</p></div></div></div></div> "), _vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"enrolled-content mb-30\">", "</div>", [_vm._ssrNode("<div class=\"section-title\">", "</div>", [_vm._ssrNode((!_vm.heading_center ? "<span>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</span>" : "<!---->") + " " + (!_vm.heading_center ? "<h2>" + _vm._ssrEscape("\n                                    " + _vm._s(_vm.heading) + "\n                                ") + "</h2>" : "<!---->") + " "), _c('div', {
    directives: [{
      name: "html-safe",
      rawName: "v-html-safe",
      value: _vm.detail,
      expression: "detail"
    }]
  }, [])], 2), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "default-btn border-radius-50",
    attrs: {
      "to": "/leadership-team"
    }
  }, [_vm._v("View Leaders")])], 2)])], 2)])])] : [_c('el-skeleton', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "animated": ""
    }
  }, [_c('template', {
    slot: "template"
  }, [_c('div', {
    class: `enrolled-area-two pt-100 pb-70`
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [_c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "enrolled-img-three mb-30 pr-20"
  }, [_c('el-skeleton-item', {
    staticStyle: {
      "width": "100%",
      "height": "440px"
    },
    attrs: {
      "variant": "image"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "enrolled-content mb-30"
  }, [_c('div', {
    staticClass: "section-title"
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
  })], 1)])])])])])])], 2)]], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/WhoWeAreCard.vue?vue&type=template&id=1cae1887&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WhoWeAreCard.vue?vue&type=script&lang=js&
/* harmony default export */ var WhoWeAreCardvue_type_script_lang_js_ = ({
  name: 'WhoWeAreCardComponent',
  props: {
    heading_center: {
      type: Boolean,
      default: false
    },
    first: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: true
    },
    image: {
      type: String,
      default: ''
    },
    image_alt: {
      type: String,
      default: ''
    },
    image_title: {
      type: String,
      default: ''
    },
    heading: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    counter_description: {
      type: String,
      default: ''
    },
    counter_title: {
      type: String,
      default: ''
    },
    counter_image: {
      type: String,
      default: ''
    },
    detail: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/WhoWeAreCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WhoWeAreCardvue_type_script_lang_js_ = (WhoWeAreCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/WhoWeAreCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WhoWeAreCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7a2aa948"
  
)

/* harmony default export */ var WhoWeAreCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-us.vue?vue&type=template&id=92d3cdf4&
var render = function render() {
  var _vm$about, _vm$about2, _vm$about3, _vm$about4, _vm$about5, _vm$about6, _vm$about7, _vm$about8, _vm$about9;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "About us",
      "pages": [{
        link: '',
        name: 'About us'
      }]
    }
  }), _vm._ssrNode(" "), _c('WhoWeAreCard', {
    attrs: {
      "first": true,
      "loading": _vm.aboutLoading,
      "image_alt": (_vm$about = _vm.about) === null || _vm$about === void 0 ? void 0 : _vm$about.image_alt,
      "image": (_vm$about2 = _vm.about) === null || _vm$about2 === void 0 ? void 0 : _vm$about2.image,
      "image_title": (_vm$about3 = _vm.about) === null || _vm$about3 === void 0 ? void 0 : _vm$about3.image_title,
      "heading": (_vm$about4 = _vm.about) === null || _vm$about4 === void 0 ? void 0 : _vm$about4.heading,
      "detail": (_vm$about5 = _vm.about) === null || _vm$about5 === void 0 ? void 0 : _vm$about5.description,
      "counter_description": (_vm$about6 = _vm.about) === null || _vm$about6 === void 0 ? void 0 : _vm$about6.counter_description,
      "counter_image": (_vm$about7 = _vm.about) === null || _vm$about7 === void 0 ? void 0 : _vm$about7.counter_image,
      "counter_title": (_vm$about8 = _vm.about) === null || _vm$about8 === void 0 ? void 0 : _vm$about8.counter_title,
      "title": (_vm$about9 = _vm.about) === null || _vm$about9 === void 0 ? void 0 : _vm$about9.title
    }
  }), _vm._ssrNode(" <div class=\"play-area ptb-100\"><div class=\"container\"><div class=\"title text-center mb-45\"><h2>\n                    &quot;A <span>leader</span> is one who knows the way, goes the way &amp; shows the way&quot;\n                </h2></div> <div class=\"play-btn-area\"><a href=\"javascript:void(0)\" class=\"play-btn\"><i class=\"flaticon-play-button-arrowhead\"></i></a></div></div></div> "), _vm._ssrNode("<div class=\"counter-area-three pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm.counterLoading ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l(4, function (i) {
    return _vm._ssrNode("<div class=\"col-lg-3 col-md-6 col-sm-12\">", "</div>", [_c('el-skeleton', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "animated": ""
      }
    }, [_c('template', {
      slot: "template"
    }, [_c('div', {
      staticClass: "counter-card box-shadow px-1"
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
    }), _vm._v(" "), _c('br')], 1)])], 2)], 1);
  }), 0) : _vm._e(), _vm._ssrNode(" <div class=\"row\">" + _vm._ssrList(_vm.counter, function (item, i) {
    return !_vm.counterLoading && _vm.counter.length > 0 ? "<div class=\"col-lg-3 col-6\"><div class=\"counter-card box-shadow\"><div class=\"row align-item-center\"><img" + _vm._ssrAttr("src", item.image) + _vm._ssrAttr("alt", item.image_alt) + _vm._ssrAttr("title", item.image_title) + " style=\"height: 80px; object-fit: contain; width: auto !important;\"> <div class=\"col-auto\"><h3><span class=\"odometer\">" + _vm._ssrEscape(_vm._s(item.counter)) + "</span>+</h3> <p>" + _vm._ssrEscape(_vm._s(item.title)) + "</p></div></div></div></div>" : "<!---->";
  }) + "</div>")], 2)]), _vm._ssrNode(" "), _c('WhatWeDoCard', {
    attrs: {
      "heading": "Why choose Arjunaa Academy for Achievers?",
      "loading": _vm.featureLoading,
      "feature": _vm.feature
    }
  }), _vm._ssrNode(" "), _c('el-dialog', {
    attrs: {
      "title": "Hareesh PK",
      "visible": _vm.dialogVideoVisible,
      "width": "90%",
      "top": "20px"
    },
    on: {
      "update:visible": function ($event) {
        _vm.dialogVideoVisible = $event;
      }
    }
  }, [_vm.dialogVideoVisible ? _c('iframe', {
    attrs: {
      "src": "https://www.youtube.com/embed/sfCJJZ0Wmi8?rel=0&autoplay=1&loop=1",
      "frameborder": "0",
      "width": "100%",
      "height": "550",
      "allowfullscreen": ""
    }
  }) : _vm._e()]), _vm._ssrNode(" "), _c('el-dialog', {
    attrs: {
      "title": "ARJUNAA ACADEMY FOR ACHIEVERS",
      "visible": _vm.dialogBannerVisible,
      "width": "80%",
      "top": "10vh"
    },
    on: {
      "update:visible": function ($event) {
        _vm.dialogBannerVisible = $event;
      }
    }
  }, [_c('img', {
    staticClass: "w-100",
    attrs: {
      "src": "/images/jee-main.webp"
    }
  })])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/about-us.vue?vue&type=template&id=92d3cdf4&

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(210);

// EXTERNAL MODULE: ./components/WhatWeDoCard.vue + 4 modules
var WhatWeDoCard = __webpack_require__(214);

// EXTERNAL MODULE: ./components/WhoWeAreCard.vue + 4 modules
var WhoWeAreCard = __webpack_require__(215);

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-us.vue?vue&type=script&lang=js&




/* harmony default export */ var about_usvue_type_script_lang_js_ = ({
  name: "AboutPage",
  layout: "MainPageLayout",
  data() {
    return {
      counterLoading: false,
      counter: [],
      aboutLoading: false,
      about: null,
      featureLoading: false,
      feature: [],
      dialogVideoVisible: false,
      dialogBannerVisible: true,
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
    this.getCounter();
  },
  async fetch() {
    await this.getAboutSection();
    await this.getFeature();
    await this.getSeo();
  },
  methods: {
    async getCounter() {
      this.counterLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].counter); // eslint-disable-line
        this.counter = response.data.counter;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.counterLoading = false;
      }
    },
    async getAboutSection() {
      this.aboutLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].aboutSection + `/about-page`); // eslint-disable-line
        this.about = response.data.about;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.aboutLoading = false;
      }
    },
    async getFeature() {
      this.featureLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].feature + `/about-page`); // eslint-disable-line
        this.feature = response.data.feature;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.featureLoading = false;
      }
    },
    async getSeo() {
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/about-page`); // eslint-disable-line
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
    Breadcrumb: Breadcrumb["a" /* default */],
    WhoWeAreCard: WhoWeAreCard["a" /* default */],
    WhatWeDoCard: WhatWeDoCard["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/about-us.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_about_usvue_type_script_lang_js_ = (about_usvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/about-us.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_about_usvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7dd677fc"
  
)

/* harmony default export */ var about_us = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about-us.js.map