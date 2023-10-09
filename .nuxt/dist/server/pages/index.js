exports.ids = [36,4,9,48];
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

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/TestimonialCard.vue?vue&type=template&id=20cb441b&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "testimonials-card-two"
  }, [_vm._ssrNode("<div class=\"rating\">", "</div>", _vm._l(_vm.star, function (i) {
    return _vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
      attrs: {
        "icon": ['fa', 'star']
      }
    })], 1);
  }), 0), _vm._ssrNode(" <div class=\"quote\"><i class=\"flaticon-quote\"></i></div> <p>\n        “<span>" + _vm._s(_vm.message) + "</span>”\n    </p> "), _vm._ssrNode("<div class=\"content\">", "</div>", [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": _vm.image,
      "alt": _vm.name,
      "title": _vm.name
    }
  }, []), _vm._ssrNode(" <h3>" + _vm._s(_vm.name) + "</h3> <span>" + _vm._s(_vm.designation) + "</span>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TestimonialCard.vue?vue&type=template&id=20cb441b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/TestimonialCard.vue?vue&type=script&lang=js&
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
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/TestimonialCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TestimonialCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6eb05cde"
  
)

/* harmony default export */ var TestimonialCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slickBannerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slickCourseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return slickTestimonialOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return slickEventOptions; });
const slickBannerOptions = {
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
};
const slickCourseOptions = {
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
};
const slickTestimonialOptions = {
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
};
const slickEventOptions = {
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
};

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/BlogCard.vue?vue&type=template&id=1150055e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-card"
  }, [_c('NuxtLink', {
    attrs: {
      "to": `/knowledge-desk/${_vm.slug}`,
      "aria-hidden": "true",
      "aria-label": _vm.title
    }
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": _vm.image,
      "alt": _vm.image_alt,
      "title": _vm.image_title
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li class=\"one-line-text\">", "</li>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fa', 'calendar-days']
    }
  }), _vm._ssrNode(_vm._ssrEscape("  " + _vm._s(_vm.date) + "\n                "))], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"one-line-text\">", "</li>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fa', 'user']
    }
  }), _vm._ssrNode(_vm._ssrEscape("  " + _vm._s(_vm.author) + "\n                "))], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<h3>", "</h3>", [_c('NuxtLink', {
    attrs: {
      "to": `/knowledge-desk/${_vm.slug}`,
      "aria-hidden": "true",
      "aria-label": _vm.title
    },
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  })], 1), _vm._ssrNode(" <p>" + _vm._s(_vm.description) + "</p>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BlogCard.vue?vue&type=template&id=1150055e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/BlogCard.vue?vue&type=script&lang=js&
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
    },
    image_alt: {
      type: String,
      default: ''
    },
    image_title: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/BlogCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogCardvue_type_script_lang_js_ = (BlogCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/BlogCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "06c68080"
  
)

/* harmony default export */ var BlogCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/EventCard.vue?vue&type=template&id=35863cd6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "event-item"
  }, [_vm.image !== '' ? _vm._ssrNode("<div class=\"event-img\">", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": _vm.is_event ? `/events/${_vm.slug}` : `/expert-tips/${_vm.slug}`,
      "aria-label": _vm.title
    }
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": _vm.image,
      "alt": _vm.image_alt,
      "title": _vm.image_title
    }
  })])], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"event-content\">", "</div>", [_vm._ssrNode("<ul class=\"event-list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fa', 'calendar-days']
    }
  }), _vm._ssrNode(_vm._ssrEscape("  " + _vm._s(_vm.date) + "\n                "))], 2)]), _vm._ssrNode(" "), !_vm.is_event ? _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fa', 'user']
    }
  }), _vm._ssrNode(_vm._ssrEscape("  " + _vm._s(_vm.author) + "\n                "))], 2)]) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<h3>", "</h3>", [_c('NuxtLink', {
    attrs: {
      "to": _vm.is_event ? `/events/${_vm.slug}` : `/expert-tips/${_vm.slug}`,
      "aria-label": _vm.title
    },
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  })], 1), _vm._ssrNode(" <p>" + _vm._s(_vm.description) + "</p>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/EventCard.vue?vue&type=template&id=35863cd6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/EventCard.vue?vue&type=script&lang=js&
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
    image_title: {
      type: String,
      default: ''
    },
    image_alt: {
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
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/EventCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EventCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d88347e8"
  
)

/* harmony default export */ var EventCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/index.vue?vue&type=template&id=23608dac&
var render = function render() {
  var _vm$about, _vm$about2, _vm$about3, _vm$about4, _vm$about5, _vm$about6, _vm$about7, _vm$about8, _vm$about9;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"hero-slider-area\">", "</div>", [_vm.bannerLoading ? _c('BannerCardLoading') : _vm._e(), _vm._ssrNode(" "), !_vm.bannerLoading && _vm.banner.length > 0 ? _vm._ssrNode("<div class=\"hero-slider owl-carousel owl-theme\">", "</div>", [_c('VueSlickCarousel', _vm._b({
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
      staticClass: "top-title",
      domProps: {
        "innerHTML": _vm._s(item.title)
      }
    }), _vm._v(" "), _c('h1', {
      domProps: {
        "innerHTML": _vm._s(item.heading)
      }
    }), _vm._v(" "), _c('p', {
      domProps: {
        "innerHTML": _vm._s(item.description)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "banner-btn"
    }, [_c('a', {
      staticClass: "default-btn border-radius-50",
      attrs: {
        "href": item.button_link,
        "target": "_blank",
        "aria-label": item.button_text
      },
      domProps: {
        "innerHTML": _vm._s(item.button_text)
      }
    })])])]), _vm._v(" "), _c('div', {
      staticClass: "col-lg-6"
    }, [_c('div', {
      staticClass: "hero-img"
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "hero",
      attrs: {
        "data-src": item.banner_image,
        "alt": item.banner_image_alt,
        "title": item.banner_image_title,
        "data-not-lazy": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "hero-bg-shape"
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "bg-img-shape1",
      attrs: {
        "data-src": "/images/home-three/bg-shape1.png",
        "alt": "Hero"
      }
    }), _vm._v(" "), _c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "bg-img-shape2",
      attrs: {
        "data-src": "/images/home-three/bg-shape2.png",
        "alt": "Hero"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "top-content"
    }, [_c('div', {
      staticClass: "hero-img-content"
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": item.counter_image_1,
        "alt": item.counter_title_1,
        "title": item.counter_title_1
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('h3', {
      domProps: {
        "innerHTML": _vm._s(item.counter_title_1)
      }
    }), _vm._v(" "), _c('p', {
      domProps: {
        "innerHTML": _vm._s(item.counter_description_1)
      }
    })])])]), _vm._v(" "), _c('div', {
      staticClass: "right-content"
    }, [_c('div', {
      staticClass: "hero-img-content"
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": item.counter_image_2,
        "alt": item.counter_title_2,
        "title": item.counter_title_2
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('h3', {
      domProps: {
        "innerHTML": _vm._s(item.counter_title_2)
      }
    }), _vm._v(" "), _c('p', {
      domProps: {
        "innerHTML": _vm._s(item.counter_description_2)
      }
    })])])])])])])])]);
  }), 0)], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"hero-shape\">", "</div>", [_vm._ssrNode("<div class=\"shape1\">", "</div>", [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": "/images/home-three/shape.png",
      "alt": "Shape"
    }
  }, [])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"shape2\">", "</div>", [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": "/images/home-three/shape2.png",
      "alt": "Shape"
    }
  }, [])])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"featured-area featured-area-mt pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm.commonFeatureLoading ? _c('FeatureCardLoading', {
    attrs: {
      "count": 3
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l(_vm.commonFeature, function (item, i) {
    return !_vm.commonFeatureLoading && _vm.commonFeature.length > 0 ? _vm._ssrNode("<div class=\"col-lg-4 col-6\">", "</div>", [_vm._ssrNode("<div class=\"featured-item\">", "</div>", [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "featured-img",
      attrs: {
        "data-src": item.image,
        "alt": item.title,
        "title": item.title
      }
    }, []), _vm._ssrNode(" <h3>" + _vm._s(item.title) + "</h3> <p>" + _vm._s(item.description) + "</p>")], 2)]) : _vm._e();
  }), 0)], 2)]), _vm._ssrNode(" "), _c('WhoWeAreCard', {
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
  }), _vm._ssrNode(" "), _vm.course.length > 0 ? _vm._ssrNode("<div class=\"courses-area-two section-bg pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-end mb-45\"><div class=\"col-lg-12\"><div class=\"section-title mt-rs-20 text-center\"><span>COURSES</span> <h2>What are the courses offered by Arjunaa Academy?</h2></div></div></div> "), _vm.courseLoading ? _c('CourseCardLoading', {
    attrs: {
      "count": 3
    }
  }) : _vm._e(), _vm._ssrNode(" "), !_vm.courseLoading && _vm.course.length > 0 ? _vm._ssrNode("<div class=\"course-slider-two owl-carousel owl-theme\">", "</div>", [_c('VueSlickCarousel', _vm._b({
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"register-area pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_vm._ssrNode("<div class=\"play-btn-area-two\">", "</div>", [_vm._ssrNode("<div class=\"hero-content text-center\" style=\"max-width: 100% !important; position:relative\">", "</div>", [_vm._ssrNode("<span class=\"top-title\">START LEARNING</span> <h1 style=\"color: white !important;\">" + _vm._ssrEscape("Admission Open For " + _vm._s(new Date().getFullYear() - 1) + " - " + _vm._s(new Date().getFullYear())) + "</h1> "), _vm._ssrNode("<div class=\"banner-btn justify-content-center\">", "</div>", [_vm._ssrNode("<a href=\"/pdf/brochure.pdf\" target=\"_blank\" aria-label=\"Download Brochure\" class=\"default-btn two border-radius-50 mr-2\">Download Brochure</a> "), _c('el-dropdown', [_c('NuxtLink', {
    staticClass: "default-btn border-radius-50 m-0",
    attrs: {
      "to": "/",
      "aria-label": "Admission Form"
    }
  }, [_vm._v("Admission Form")]), _vm._v(" "), _c('el-dropdown-menu', {
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, [_c('el-dropdown-item', [_c('NuxtLink', {
    staticClass: "text-dark",
    attrs: {
      "to": "/admission/class-8-9-10",
      "aria-label": "Class 8, 9 & 10"
    }
  }, [_vm._v("\n                                                Class 8, 9 & 10\n                                            ")])], 1), _vm._v(" "), _c('el-dropdown-item', [_c('NuxtLink', {
    staticClass: "text-dark",
    attrs: {
      "to": "/admission/puc",
      "aria-label": "Class 11 or 1st PUC"
    }
  }, [_vm._v("\n                                                Class 11 or 1st PUC\n                                            ")])], 1)], 1)], 1)], 2)], 2)])])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"testimonials-area pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center mb-20\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8 col-md-9\"><div class=\"section-title mt-rs-20\"><span>TESTIMONIAL</span> <h2>Testimonials describe what has been, &amp; are a promise of what is to come</h2></div></div> "), _vm._ssrNode("<div class=\"col-lg-4 col-md-3 text-end\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn border-radius-50",
    attrs: {
      "to": "/testimonial",
      "aria-label": "View all Testimonial"
    }
  }, [_vm._v("View all Testimonial")])], 1)], 2), _vm._ssrNode(" "), _vm.testimonialLoading ? _c('TestimonialCardLoading', {
    attrs: {
      "count": 3
    }
  }) : _vm._e(), _vm._ssrNode(" "), !_vm.testimonialLoading && _vm.testimonial.length > 0 ? _vm._ssrNode("<div class=\"testimonials-slider-two owl-carousel owl-theme\">", "</div>", [_c('VueSlickCarousel', _vm._b({
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
      "to": "/events",
      "aria-label": "View all Events"
    }
  }, [_vm._v("View all Events")])], 1)], 2), _vm._ssrNode(" "), _vm.eventLoading ? _c('EventCardLoading', {
    attrs: {
      "count": 2
    }
  }) : _vm._e(), _vm._ssrNode(" "), !_vm.eventLoading && _vm.event.length > 0 ? _vm._ssrNode("<div class=\"event-slider owl-carousel owl-theme\">", "</div>", [_c('VueSlickCarousel', _vm._b({
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
      "to": "/knowledge-desk",
      "aria-label": "View all Blogs"
    }
  }, [_vm._v("View all Blogs")])], 1)], 2), _vm._ssrNode(" "), _vm.blogLoading ? _c('BlogCardLoading', {
    attrs: {
      "count": 3
    }
  }) : _vm._e(), _vm._ssrNode(" "), !_vm.blogLoading && _vm.blog.length > 0 ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", [_c('VueSlickCarousel', _vm._b({
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

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=23608dac&

// EXTERNAL MODULE: ./components/BlogCard.vue + 4 modules
var BlogCard = __webpack_require__(210);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/CourseCard.vue?vue&type=template&id=25215615&
var CourseCardvue_type_template_id_25215615_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "courses-item"
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": _vm.image,
      "alt": _vm.image_alt,
      "title": _vm.image_title
    }
  }, []), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<div class=\"bottom-content align-items-center\"><p class=\"tag-btn\">" + _vm._s(_vm.className) + "</p></div> <h3>" + _vm._s(_vm.title) + "</h3> <p>" + _vm._s(_vm.description) + "</p> <hr> "), _vm._ssrNode("<div class=\"bottom-content align-items-center\">", "</div>", [_c('el-dropdown', [_c('NuxtLink', {
    staticClass: "default-btn two border-radius-50 m-0",
    attrs: {
      "to": "/",
      "target": "_blank",
      "aria-hidden": "true",
      "aria-label": "Enroll Now"
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
        "to": `/${item.slug}/courses/${_vm.slug}`,
        "aria-hidden": "true",
        "aria-label": item.name
      },
      domProps: {
        "innerHTML": _vm._s(item.name)
      }
    })], 1);
  }), 1)], 1), _vm._ssrNode(" "), _c('el-dropdown', [_c('NuxtLink', {
    staticClass: "default-btn border-radius-50 mr-2",
    attrs: {
      "to": "/",
      "aria-hidden": "true",
      "aria-label": "Request Callback"
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
        "to": `/${item.slug}/courses/${_vm.slug}`,
        "aria-hidden": "true",
        "aria-label": item.name
      },
      domProps: {
        "innerHTML": _vm._s(item.name)
      }
    })], 1);
  }), 1)], 1)], 2)], 2)], 2);
};
var CourseCardvue_type_template_id_25215615_staticRenderFns = [];

// CONCATENATED MODULE: ./components/CourseCard.vue?vue&type=template&id=25215615&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/CourseCard.vue?vue&type=script&lang=js&
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
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/CourseCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CourseCardvue_type_script_lang_js_,
  CourseCardvue_type_template_id_25215615_render,
  CourseCardvue_type_template_id_25215615_staticRenderFns,
  false,
  null,
  null,
  "dd748b0e"
  
)

/* harmony default export */ var CourseCard = (component.exports);
// EXTERNAL MODULE: ./components/EventCard.vue + 4 modules
var EventCard = __webpack_require__(211);

// EXTERNAL MODULE: ./components/TestimonialCard.vue + 4 modules
var TestimonialCard = __webpack_require__(205);

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(204);

// EXTERNAL MODULE: ./helper/slick_options.js
var slick_options = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/index.vue?vue&type=script&lang=js&






/* harmony default export */ var string_replace_loader_ref_12_pagesvue_type_script_lang_js_ = ({
  name: "IndexPage",
  layout: "MainPageLayout",
  mounted() {
    if (this.$route.query.verified && this.$route.query.verified == 'true') {
      this.$toast.success('Email verified successfully.');
    }
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
      }, {
        type: 'application/ld+json',
        innerHTML: `{
                        "@context": "https://schema.org/",
                        "@type": "WebSite",
                        "name": "Arjunaa Academy for Achievers",

                        "url": "https://www.aaaedu.in/",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://www.aaaedu.in/?s={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                        }` // <- set jsonld object in data or wherever you want
      }, {
        type: 'application/ld+json',
        innerHTML: `{
                        "@context": "https://schema.org",
                        "@type": "CollegeOrUniversity",
                        "name": "Arjunaa Academy for Achievers",
                        "alternateName": "Arjunaa Academy",
                        "url": "https://www.aaaedu.in/",
                        "logo": "https://www.aaaedu.in/assets/img/new-logo.jpg",
                        "sameAs": [
                            "https://www.facebook.com/www.aaaedu.in/",
                            "https://twitter.com/academy_arjunaa",
                            "https://www.instagram.com/arjunaa_academy_for_achievers/",
                            "https://www.youtube.com/channel/UCcPOkcZ_YGpTMcVnLJQYLPA",
                            "https://in.linkedin.com/company/arjunaa-academy-for-achievers"
                        ]
                        }` // <- set jsonld object in data or wherever you want
      }, {
        type: 'application/ld+json',
        innerHTML: `{
                            "@context": "https://schema.org",
                            "@type": "VideoObject",
                            "name": "Arjunaa Academy Feedback of Achievers",
                            "description": "Students of Arjunaa Academy speak about institute and coaching style and practice. How the institute and coaches help them in preparation of studies and exams.",
                            "thumbnailUrl": "",
                            "uploadDate": "2020-05-08",  
                            "publisher": {
                                "@type": "Organization",
                                "name": "Arjunaa Academy for Achievers",
                                "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.aaaedu.in/assets/img/new-logo.webp",
                                "width": "",
                                "height": ""
                                }
                            },
                            "contentUrl": "https://www.youtube.com/watch?v=S9Z9BR_KAz4&list=TLGG6RaqinZghqAxMjExMjAyMQ"
                            }` // <- set jsonld object in data or wherever you want
      }],

      __dangerouslyDisableSanitizers: ['script']
    };
  },
  computed: {
    slickTestimonialOptions() {
      return slick_options["d" /* slickTestimonialOptions */];
    },
    slickEventOptions() {
      return slick_options["c" /* slickEventOptions */];
    },
    slickCourseOptions() {
      return slick_options["b" /* slickCourseOptions */];
    },
    slickBannerOptions() {
      return slick_options["a" /* slickBannerOptions */];
    }
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
    BlogCard: BlogCard["default"],
    CourseCard: CourseCard,
    TestimonialCard: TestimonialCard["default"],
    EventCard: EventCard["default"],
    WhoWeAreCard: () => __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, 252)),
    WhatWeDoCard: () => __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, 253)),
    BannerCardLoading: () => __webpack_require__.e(/* import() */ 47).then(__webpack_require__.bind(null, 258)),
    FeatureCardLoading: () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 259)),
    CourseCardLoading: () => __webpack_require__.e(/* import() */ 49).then(__webpack_require__.bind(null, 260)),
    TestimonialCardLoading: () => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, 257)),
    EventCardLoading: () => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 254)),
    BlogCardLoading: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 255))
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (string_replace_loader_ref_12_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "04239d08"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map