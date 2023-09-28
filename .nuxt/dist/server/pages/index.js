exports.ids = [18];
exports.modules = {

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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/EventCard.vue?vue&type=template&id=6c439a98&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "event-item"
  }, [_vm.image !== '' ? _vm._ssrNode("<div class=\"event-img\">", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": _vm.is_event ? `/events/${_vm.slug}` : `/expert-tips/${_vm.slug}`
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.image,
      "alt": "Events"
    }
  })])], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"event-content\">", "</div>", [_vm._ssrNode("<ul class=\"event-list\"><li><i class=\"ri-calendar-todo-fill\"></i>" + _vm._ssrEscape(" " + _vm._s(_vm.date)) + "</li> " + (!_vm.is_event ? "<li><i class=\"ri-user-fill\"></i>" + _vm._ssrEscape(" " + _vm._s(_vm.author)) + "</li>" : "<!---->") + "</ul> "), _vm._ssrNode("<h3>", "</h3>", [_c('NuxtLink', {
    attrs: {
      "to": _vm.is_event ? `/events/${_vm.slug}` : `/expert-tips/${_vm.slug}`
    }
  }, [_vm._v(_vm._s(_vm.title))])], 1), _vm._ssrNode(" <p>" + _vm._ssrEscape("\n            " + _vm._s(_vm.description) + "\n        ") + "</p>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/EventCard.vue?vue&type=template&id=6c439a98&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EventCard.vue?vue&type=script&lang=js&
/* harmony default export */ var EventCardvue_type_script_lang_js_ = ({
  name: 'EventCardComponent',
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    is_event: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./components/EventCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EventCardvue_type_script_lang_js_ = (EventCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/EventCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EventCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7524bd2c"
  
)

/* harmony default export */ var EventCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogCard.vue?vue&type=template&id=c320783e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-card"
  }, [_c('NuxtLink', {
    attrs: {
      "to": `/knowledge-desk/${_vm.slug}`
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.image,
      "alt": "Blog"
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li class=\"one-line-text\"><i class=\"ri-calendar-todo-fill\"></i>" + _vm._ssrEscape(" " + _vm._s(_vm.date)) + "</li> "), _vm._ssrNode("<li class=\"one-line-text\">", "</li>", [_vm._ssrNode("<i class=\"ri-user-fill\"></i> "), _c('NuxtLink', {
    attrs: {
      "to": `/leadership-team`
    }
  }, [_vm._v(_vm._s(_vm.author))])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<h3>", "</h3>", [_c('NuxtLink', {
    attrs: {
      "to": `/knowledge-desk/${_vm.slug}`
    }
  }, [_vm._v(_vm._s(_vm.title))])], 1), _vm._ssrNode(" <p>" + _vm._ssrEscape("\n            " + _vm._s(_vm.description) + "\n        ") + "</p> "), _c('NuxtLink', {
    staticClass: "read-btn",
    attrs: {
      "to": `/knowledge-desk/${_vm.slug}`
    }
  }, [_vm._v("Read More")])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BlogCard.vue?vue&type=template&id=c320783e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogCard.vue?vue&type=script&lang=js&
/* harmony default export */ var BlogCardvue_type_script_lang_js_ = ({
  name: 'BlogCardComponent',
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/BlogCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogCardvue_type_script_lang_js_ = (BlogCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BlogCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a4ebd13c"
  
)

/* harmony default export */ var BlogCard = __webpack_exports__["a"] = (component.exports);

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

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=4eeaf4df&
var render = function render() {
  var _vm$about, _vm$about2, _vm$about3, _vm$about4, _vm$about5, _vm$about6, _vm$about7, _vm$about8, _vm$about9;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"hero-slider-area\">", "</div>", [_vm.bannerLoading ? _vm._ssrNode("<div class=\"row justify-content-center hero-slider\">", "</div>", _vm._l(1, function (i) {
    return _vm._ssrNode("<div class=\"col-lg-12 col-md-12 col-sm-12\">", "</div>", [_c('el-skeleton', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "animated": ""
      }
    }, [_c('template', {
      slot: "template"
    }, [_c('div', {
      staticClass: "container-fluid"
    }, [_c('div', {
      staticClass: "row align-items-center"
    }, [_c('div', {
      staticClass: "col-lg-6"
    }, [_c('div', {
      staticClass: "hero-content"
    }, [_c('el-skeleton-item', {
      staticStyle: {
        "width": "30%"
      },
      attrs: {
        "variant": "p"
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-skeleton-item', {
      staticStyle: {
        "width": "50%"
      },
      attrs: {
        "variant": "h1"
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
    }), _vm._v(" "), _c('br')], 1)]), _vm._v(" "), _c('div', {
      staticClass: "col-lg-6"
    }, [_c('div', {
      staticClass: "hero-img"
    }, [_c('el-skeleton-item', {
      staticStyle: {
        "width": "100%",
        "height": "400px"
      },
      attrs: {
        "variant": "image"
      }
    })], 1)])])])])], 2)], 1);
  }), 0) : _vm._e(), _vm._ssrNode(" "), !_vm.bannerLoading && _vm.banner.length > 0 ? _vm._ssrNode("<div class=\"hero-slider owl-carousel owl-theme\">", "</div>", [_c('VueSlickCarousel', _vm._b({
    ref: "slickBanner"
  }, 'VueSlickCarousel', _vm.slickBannerOptions, false), _vm._l(_vm.banner, function (item, i) {
    return _c('div', {
      key: i,
      staticClass: "hero-item"
    }, [_c('div', {
      staticClass: "container-fluid"
    }, [_c('div', {
      staticClass: "row align-items-center"
    }, [_c('div', {
      staticClass: "col-lg-6"
    }, [_c('div', {
      staticClass: "hero-content"
    }, [_c('span', {
      staticClass: "top-title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('h1', [_vm._v(_vm._s(item.heading))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.description))]), _vm._v(" "), _c('div', {
      staticClass: "banner-btn"
    }, [_c('a', {
      staticClass: "default-btn border-radius-50",
      attrs: {
        "href": item.button_link,
        "target": "_blank"
      }
    }, [_vm._v(_vm._s(item.button_text))])])])]), _vm._v(" "), _c('div', {
      staticClass: "col-lg-6"
    }, [_c('div', {
      staticClass: "hero-img"
    }, [_c('img', {
      staticClass: "hero",
      attrs: {
        "src": item.banner_image,
        "alt": item.banner_image_alt,
        "title": item.banner_image_title
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "hero-bg-shape"
    }, [_c('img', {
      staticClass: "bg-img-shape1",
      attrs: {
        "src": "/images/home-three/bg-shape1.png",
        "alt": "Hero"
      }
    }), _vm._v(" "), _c('img', {
      staticClass: "bg-img-shape2",
      attrs: {
        "src": "/images/home-three/bg-shape2.png",
        "alt": "Hero"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "top-content"
    }, [_c('div', {
      staticClass: "hero-img-content"
    }, [_c('img', {
      attrs: {
        "src": item.counter_image_1
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('h3', [_vm._v(_vm._s(item.counter_title_1))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.counter_description_1))])])])]), _vm._v(" "), _c('div', {
      staticClass: "right-content"
    }, [_c('div', {
      staticClass: "hero-img-content"
    }, [_c('img', {
      attrs: {
        "src": item.counter_image_2
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('h3', [_vm._v(_vm._s(item.counter_title_2))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.counter_description_2))])])])])])])])])]);
  }), 0)], 1) : _vm._e(), _vm._ssrNode(" <div class=\"hero-shape\"><div class=\"shape1\"><img src=\"/images/home-three/shape.png\" alt=\"Shape\"></div> <div class=\"shape2\"><img src=\"/images/home-three/shape2.png\" alt=\"Shape\"></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"featured-area featured-area-mt pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", [_vm._l(3, function (i) {
    return _vm.commonFeatureLoading ? _vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-12\">", "</div>", [_c('el-skeleton', {
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
        "width": "50px",
        "height": "50px"
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
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-skeleton-item', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "variant": "p"
      }
    }), _vm._v(" "), _c('br')], 1)])], 2)], 1) : _vm._e();
  }), _vm._ssrNode(" " + _vm._ssrList(_vm.commonFeature, function (item, i) {
    return !_vm.commonFeatureLoading && _vm.commonFeature.length > 0 ? "<div class=\"col-lg-4 col-6\"><div class=\"featured-item\"><img" + _vm._ssrAttr("src", item.image) + " class=\"featured-img\"> <h3>" + _vm._ssrEscape(_vm._s(item.title)) + "</h3> <p>" + _vm._ssrEscape("\n                    " + _vm._s(item.description) + "\n                ") + "</p></div></div>" : "<!---->";
  }))], 2)])]), _vm._ssrNode(" "), _c('WhoWeAreCard', {
    attrs: {
      "loading": _vm.aboutLoading,
      "image_alt": (_vm$about = _vm.about) === null || _vm$about === void 0 ? void 0 : _vm$about.image_alt,
      "image": (_vm$about2 = _vm.about) === null || _vm$about2 === void 0 ? void 0 : _vm$about2.image,
      "image_title": (_vm$about3 = _vm.about) === null || _vm$about3 === void 0 ? void 0 : _vm$about3.image_title,
      "heading": (_vm$about4 = _vm.about) === null || _vm$about4 === void 0 ? void 0 : _vm$about4.heading,
      "detail": (_vm$about5 = _vm.about) === null || _vm$about5 === void 0 ? void 0 : _vm$about5.description,
      "counter_description": (_vm$about6 = _vm.about) === null || _vm$about6 === void 0 ? void 0 : _vm$about6.counter_description,
      "counter_image": (_vm$about7 = _vm.about) === null || _vm$about7 === void 0 ? void 0 : _vm$about7.counter_image,
      "counter_title": (_vm$about8 = _vm.about) === null || _vm$about8 === void 0 ? void 0 : _vm$about8.counter_title,
      "title": (_vm$about9 = _vm.about) === null || _vm$about9 === void 0 ? void 0 : _vm$about9.title,
      "heading_center": true
    }
  }), _vm._ssrNode(" "), _vm.course_data.length > 0 ? _vm._ssrNode("<div class=\"courses-area-two section-bg pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-end mb-45\"><div class=\"col-lg-12\"><div class=\"section-title mt-rs-20 text-center\"><span>COURSES</span> <h2>What are the courses offered by Arjunaa Academy?</h2></div></div></div> "), _vm.courseLoading ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l(3, function (i) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6\">", "</div>", [_c('el-skeleton', {
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
        "width": "100%",
        "height": "340px"
      },
      attrs: {
        "variant": "rect"
      }
    })], 1)], 2)], 1);
  }), 0) : _vm._e(), _vm._ssrNode(" "), !_vm.courseLoading && _vm.course.length > 0 ? _vm._ssrNode("<div class=\"course-slider-two owl-carousel owl-theme\">", "</div>", [_c('VueSlickCarousel', _vm._b({
    ref: "slickCourse"
  }, 'VueSlickCarousel', _vm.slickCourseOptions, false), _vm._l(_vm.course, function (item, i) {
    return _c('CourseCard', {
      key: i,
      attrs: {
        "image": item.image,
        "image_alt": item.image_alt,
        "image_title": item.image_title,
        "description": item.short_description,
        "title": item.name,
        "branches": item.branches,
        "slug": item.slug,
        "className": item.class
      }
    });
  }), 1)], 1) : _vm._e()], 2)]) : _vm._e(), _vm._ssrNode(" "), _c('WhatWeDoCard', {
    attrs: {
      "heading": "Why Arjunaa Academy for Achievers is the Top Coaching Centre in Bangalore?",
      "loading": _vm.featureLoading,
      "feature": _vm.feature
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"register-area pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_vm._ssrNode("<div class=\"play-btn-area-two\">", "</div>", [_vm._ssrNode("<div class=\"hero-content text-center\" style=\"max-width: 100% !important; position:relative\">", "</div>", [_vm._ssrNode("<span class=\"top-title\">START LEARNING</span> <h1 style=\"color: white !important;\">" + _vm._ssrEscape("Admission Open For " + _vm._s(new Date().getFullYear() - 1) + " - " + _vm._s(new Date().getFullYear())) + "</h1> "), _vm._ssrNode("<div class=\"banner-btn justify-content-center\">", "</div>", [_vm._ssrNode("<a href=\"/pdf/brochure.pdf\" target=\"_blank\" class=\"default-btn two border-radius-50 mr-2\">Download Brochure</a> "), _c('el-dropdown', [_c('NuxtLink', {
    staticClass: "default-btn border-radius-50 m-0",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Admission Form")]), _vm._v(" "), _c('el-dropdown-menu', {
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, [_c('el-dropdown-item', [_c('NuxtLink', {
    staticClass: "text-dark",
    attrs: {
      "to": "/admission/class-8-9-10"
    }
  }, [_vm._v("\n                                                Class 8, 9 & 10\n                                            ")])], 1), _vm._v(" "), _c('el-dropdown-item', [_c('NuxtLink', {
    staticClass: "text-dark",
    attrs: {
      "to": "/admission/puc"
    }
  }, [_vm._v("\n                                                Class 11 or 1st PUC\n                                            ")])], 1)], 1)], 1)], 2)], 2)])])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"testimonials-area pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center mb-20\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8 col-md-9\"><div class=\"section-title mt-rs-20\"><span>TESTIMONIAL</span> <h2>Testimonials describe what has been, &amp; are a promise of what is to come</h2></div></div> "), _vm._ssrNode("<div class=\"col-lg-4 col-md-3 text-end\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn border-radius-50",
    attrs: {
      "to": "/testimonial"
    }
  }, [_vm._v("View all Testimonial")])], 1)], 2), _vm._ssrNode(" "), _vm.testimonialLoading ? _vm._ssrNode("<div class=\"row justify-content-center testimonials-slider-two\">", "</div>", _vm._l(3, function (i) {
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
  }), 0) : _vm._e(), _vm._ssrNode(" "), !_vm.testimonialLoading && _vm.testimonial.length > 0 ? _vm._ssrNode("<div class=\"testimonials-slider-two owl-carousel owl-theme\">", "</div>", [_c('VueSlickCarousel', _vm._b({
    ref: "slickTestimonial"
  }, 'VueSlickCarousel', _vm.slickTestimonialOptions, false), _vm._l(_vm.testimonial, function (item, i) {
    return _c('TestimonialCard', {
      key: i,
      attrs: {
        "image": item.image,
        "name": item.name,
        "star": item.star,
        "message": item.message,
        "designation": item.designation
      }
    });
  }), 1)], 1) : _vm._e()], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"event-area section-bg pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-end mb-45\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8\"><div class=\"section-title mt-rs-20\"><span>EVENTS</span> <h2>Upcoming events schedule</h2></div></div> "), _vm._ssrNode("<div class=\"col-lg-4 text-end\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn border-radius-50",
    attrs: {
      "to": "/events"
    }
  }, [_vm._v("View all Events")])], 1)], 2), _vm._ssrNode(" "), _vm.eventLoading ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l(2, function (i) {
    return _vm._ssrNode("<div class=\"col-lg-6 col-md-6\">", "</div>", [_c('el-skeleton', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "animated": ""
      }
    }, [_c('template', {
      slot: "template"
    }, [_c('div', {
      staticClass: "event-item"
    }, [_c('div', {
      staticClass: "event-img",
      staticStyle: {
        "width": "40%"
      }
    }, [_c('el-skeleton-item', {
      staticStyle: {
        "width": "100%",
        "height": "140px"
      },
      attrs: {
        "variant": "image"
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "event-content",
      staticStyle: {
        "width": "60%"
      }
    }, [_c('el-skeleton-item', {
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
    }), _vm._v(" "), _c('br')], 1)])])], 2)], 1);
  }), 0) : _vm._e(), _vm._ssrNode(" "), !_vm.eventLoading && _vm.event.length > 0 ? _vm._ssrNode("<div class=\"event-slider owl-carousel owl-theme\">", "</div>", [_c('VueSlickCarousel', _vm._b({
    ref: "slickEvent"
  }, 'VueSlickCarousel', _vm.slickEventOptions, false), _vm._l(_vm.event, function (item, i) {
    return _c('EventCard', {
      key: i,
      attrs: {
        "image": item.image,
        "title": item.name,
        "description": item.short_description,
        "date": item.event_date_on,
        "slug": item.slug
      }
    });
  }), 1)], 1) : _vm._e()], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"blog-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-end mb-45\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8\"><div class=\"section-title mt-rs-20\"><span>KNOWLEDGE DESK</span> <h2>Latest from our blogs</h2></div></div> "), _vm._ssrNode("<div class=\"col-lg-4 text-end\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn border-radius-50",
    attrs: {
      "to": "/knowledge-desk"
    }
  }, [_vm._v("View all Blogs")])], 1)], 2), _vm._ssrNode(" "), _vm.blogLoading ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l(3, function (i) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6\">", "</div>", [_c('el-skeleton', {
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
        "width": "100%",
        "height": "240px"
      },
      attrs: {
        "variant": "image"
      }
    }), _vm._v(" "), _c('div', {
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
        "width": "50%"
      },
      attrs: {
        "variant": "text"
      }
    })], 1)], 1)], 2)], 1);
  }), 0) : _vm._e(), _vm._ssrNode(" "), !_vm.blogLoading && _vm.blog.length > 0 ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", [_c('VueSlickCarousel', _vm._b({
    ref: "slickBlog"
  }, 'VueSlickCarousel', _vm.slickCourseOptions, false), _vm._l(_vm.blog, function (item, i) {
    return _c('div', {
      key: i,
      staticClass: "col-lg-12 col-md-12"
    }, [_c('BlogCard', {
      attrs: {
        "image": item.image,
        "title": item.name,
        "description": item.short_description,
        "date": item.published,
        "slug": item.slug,
        "author": item.author_name
      }
    })], 1);
  }), 0)], 1) : _vm._e()], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=4eeaf4df&

// EXTERNAL MODULE: ./components/BlogCard.vue + 4 modules
var BlogCard = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/CourseCard.vue?vue&type=template&id=90f3018c&
var CourseCardvue_type_template_id_90f3018c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "courses-item"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.image) + _vm._ssrAttr("alt", _vm.image_alt) + _vm._ssrAttr("title", _vm.image_title) + "> "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<div class=\"bottom-content align-items-center\"><a href=\"javascript:void(0)\" class=\"tag-btn\">" + _vm._ssrEscape(_vm._s(_vm.className)) + "</a></div> <h3>" + _vm._ssrEscape("\n            " + _vm._s(_vm.title) + "\n        ") + "</h3> <p>" + _vm._ssrEscape(_vm._s(_vm.description)) + "</p> <hr> "), _vm._ssrNode("<div class=\"bottom-content align-items-center\">", "</div>", [_c('el-dropdown', [_c('NuxtLink', {
    staticClass: "default-btn two border-radius-50 m-0",
    attrs: {
      "to": "/",
      "target": "_blank"
    }
  }, [_vm._v("Enroll Now")]), _vm._v(" "), _c('el-dropdown-menu', {
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, _vm._l(_vm.branches, function (item, i) {
    return _c('el-dropdown-item', {
      key: i
    }, [_c('NuxtLink', {
      staticClass: "text-dark",
      attrs: {
        "to": `/${item.slug}/courses/${_vm.slug}`
      }
    }, [_vm._v("\n                            " + _vm._s(item.name) + "\n                        ")])], 1);
  }), 1)], 1), _vm._ssrNode(" "), _c('el-dropdown', [_c('NuxtLink', {
    staticClass: "default-btn border-radius-50 mr-2",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Request Callback")]), _vm._v(" "), _c('el-dropdown-menu', {
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, _vm._l(_vm.branches, function (item, i) {
    return _c('el-dropdown-item', {
      key: i
    }, [_c('NuxtLink', {
      staticClass: "text-dark",
      attrs: {
        "to": `/${item.slug}/courses/${_vm.slug}`
      }
    }, [_vm._v("\n                            " + _vm._s(item.name) + "\n                        ")])], 1);
  }), 1)], 1)], 2)], 2)], 2);
};
var CourseCardvue_type_template_id_90f3018c_staticRenderFns = [];

// CONCATENATED MODULE: ./components/CourseCard.vue?vue&type=template&id=90f3018c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CourseCard.vue?vue&type=script&lang=js&
/* harmony default export */ var CourseCardvue_type_script_lang_js_ = ({
  name: 'CourseCardComponent',
  props: {
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
    className: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    },
    branches: {
      type: Array,
      default: []
    }
  }
});
// CONCATENATED MODULE: ./components/CourseCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CourseCardvue_type_script_lang_js_ = (CourseCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/CourseCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CourseCardvue_type_script_lang_js_,
  CourseCardvue_type_template_id_90f3018c_render,
  CourseCardvue_type_template_id_90f3018c_staticRenderFns,
  false,
  null,
  null,
  "d501be4a"
  
)

/* harmony default export */ var CourseCard = (component.exports);
// EXTERNAL MODULE: ./components/EventCard.vue + 4 modules
var EventCard = __webpack_require__(212);

// EXTERNAL MODULE: ./components/TestimonialCard.vue + 4 modules
var TestimonialCard = __webpack_require__(211);

// EXTERNAL MODULE: ./components/WhatWeDoCard.vue + 4 modules
var WhatWeDoCard = __webpack_require__(214);

// EXTERNAL MODULE: ./components/WhoWeAreCard.vue + 4 modules
var WhoWeAreCard = __webpack_require__(215);

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&







/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "IndexPage",
  layout: "MainPageLayout",
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
    this.getCourse();
    this.getTestimonial();
    this.getEvent();
    this.getBlog();
  },
  async fetch() {
    await this.getBannerSection();
    await this.getAboutSection();
    await this.getFeature();
    await this.getCommonFeature();
    await this.getSeo();
  },
  data() {
    return {
      aboutLoading: false,
      about: null,
      bannerLoading: false,
      banner: [],
      featureLoading: false,
      feature: [],
      commonFeatureLoading: false,
      commonFeature: [],
      testimonialLoading: false,
      testimonial: [],
      blogLoading: false,
      blog: [],
      eventLoading: false,
      event: [],
      courseLoading: false,
      course: [],
      slickBannerOptions: {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        pauseOnHover: true,
        swipe: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }]
      },
      slickCourseOptions: {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        pauseOnHover: true,
        swipe: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }]
      },
      slickTestimonialOptions: {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        pauseOnHover: true,
        swipe: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }]
      },
      slickEventOptions: {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        pauseOnHover: true,
        swipe: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }]
      },
      banner_data: [{
        title: "CHOOSE YOUR BEST COURSE",
        heading: "A course is essential for building career",
        description: "Flexible easy to access learning opportunities can bring a significant change in how to learn! The Ellen can offer you to enjoy the beauty of eLearning!",
        image: "/images/home-three/hero-img1.jpg"
      }, {
        title: "CHOOSE YOUR BEST COURSE",
        heading: "Start learning from best platform",
        description: "Flexible easy to access learning opportunities can bring a significant change in how to learn! The Ellen can offer you to enjoy the beauty of eLearning!",
        image: "/images/home-three/hero-img3.jpg"
      }, {
        title: "CHOOSE YOUR BEST COURSE",
        heading: "Improve your skills by study with us",
        description: "Flexible easy to access learning opportunities can bring a significant change in how to learn! The Ellen can offer you to enjoy the beauty of eLearning!",
        image: "/images/home-three/hero-img2.jpg"
      }],
      course_data: [{
        course_image: "/images/courses/courses-img7.jpg",
        instructor_image: "/images/courses/instructors1.jpg",
        category: "Finance",
        title: "The complete business plan course includes 50 templates",
        duration: "10 hr 07 min",
        lectures: "67 lectures",
        price: "120"
      }, {
        course_image: "/images/courses/courses-img8.jpg",
        instructor_image: "/images/courses/instructors2.jpg",
        category: "Banking",
        title: "Full web designing course with 20 web template designing",
        duration: "10 hr 07 min",
        lectures: "67 lectures",
        price: "400"
      }, {
        course_image: "/images/courses/courses-img9.jpg",
        instructor_image: "/images/courses/instructors3.jpg",
        category: "Physics",
        title: "Visual effects for games in unity beginner to intermediate",
        duration: "10 hr 07 min",
        lectures: "67 lectures",
        price: "200"
      }, {
        course_image: "/images/courses/courses-img2.jpg",
        instructor_image: "/images/courses/instructors4.jpg",
        category: "Accounting",
        title: "Basic knowledge about hibernal bharat in history",
        duration: "10 hr 07 min",
        lectures: "67 lectures",
        price: "300"
      }],
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
  methods: {
    async getAboutSection() {
      this.aboutLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].aboutSection + `/home-page`); // eslint-disable-line
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
    async getBannerSection() {
      this.bannerLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].bannerSection); // eslint-disable-line
        this.banner = response.data.banner;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.bannerLoading = false;
      }
    },
    async getFeature() {
      this.featureLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].feature + `/home-page`); // eslint-disable-line
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
    async getCommonFeature() {
      this.commonFeatureLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].feature + `/common`); // eslint-disable-line
        this.commonFeature = response.data.feature;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.commonFeatureLoading = false;
      }
    },
    async getCourse() {
      this.courseLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].course); // eslint-disable-line
        this.course = response.data.course;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.courseLoading = false;
      }
    },
    async getTestimonial(page = 0) {
      this.testimonialLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].testimonial + `?total=9&page=${page}`); // eslint-disable-line
        this.testimonial = response.data.data;
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
    async getBlog(page = 0) {
      this.blogLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].blog + `?total=6&page=${page}&filter[is_popular]=true`); // eslint-disable-line
        this.blog = response.data.data;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.blogLoading = false;
      }
    },
    async getEvent(page = 0) {
      this.eventLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].event + `?total=6&page=${page}`); // eslint-disable-line
        this.event = response.data.data;
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
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/home-page`); // eslint-disable-line
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
    BlogCard: BlogCard["a" /* default */],
    CourseCard: CourseCard,
    TestimonialCard: TestimonialCard["a" /* default */],
    EventCard: EventCard["a" /* default */],
    WhoWeAreCard: WhoWeAreCard["a" /* default */],
    WhatWeDoCard: WhatWeDoCard["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1f5fca5e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map