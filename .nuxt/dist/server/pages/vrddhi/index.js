exports.ids = [26];
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

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/vrddhi/index.vue?vue&type=template&id=befbd39c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Vrddhi",
      "pages": [{
        link: '',
        name: 'Vrddhi'
      }]
    }
  }), _vm._ssrNode(" <div class=\"enrolled-area-two pt-70 pb-70\"><div class=\"container\"><div class=\"col-lg-12\"><div class=\"enrolled-content mb-30\"><div class=\"section-title\"><div class=\"text-center\"><span>History of Vrddhi</span> <h2>\n                                Inter-School Talent Search Exam\n                            </h2> <p>\n                                Vrddhi is an Inter-school Talent search Examination conducted by Arjunaa Academy For\n                                Achievers (AAA) since 2012 in the name of Young Ramanujan Inter school contest. Young\n                                Ramanujan Inter school contest was renamed as Vrddhi, which symbolizes Prosperity,\n                                Development or Improvement in the career of a child.\n                            </p></div></div></div></div></div></div> <div class=\"enrolled-area pt-70 pb-70\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-5\"><div data-speed=\"0.05\" data-revert=\"true\" class=\"enrolled-img-two mb-30\"><img src=\"/images/parent-say.png\" alt=\"Enrolled\"></div></div> <div class=\"col-lg-7\"><div class=\"enrolled-content mb-30\"><div class=\"section-title\"><h2>\n                                Objectives of vrddhi\n                            </h2> <p>\n                                The normal tendency of the Parents' &amp; Students' is to be happy being a &quot;BIG FISH IN A\n                                SMALL POND&quot;. Vrddhi helps in giving Students' a true reflection as to where they stand\n                                in this competitive world. Vrddhi also helps in Inspiring Students' to become competent\n                                which would help them to develop in all facets of life.\n                            </p> <p>\n                                The Objectives of Vrddhi are:\n                            </p></div> <div class=\"row\"><div class=\"col-lg-12 col-12\"><ul class=\"enrolled-list\"><li><i class=\"flaticon-check\"></i> To create awareness about the competitive exams\n                                        and the benefits of taking up these exams.</li> <li><i class=\"flaticon-check\"></i> To Educate the Students' &amp; the Parents' about the\n                                        scholarship competitive exams which would be beneficial for the future of the\n                                        Students.\n                                    </li> <li><i class=\"flaticon-check\"></i> To provide new opportunities to the Students' by\n                                        understanding the Strengths' by career guidance and career mapping.\n                                    </li> <li><i class=\"flaticon-check\"></i> To instill confidence &amp; improve on the competency\n                                        level of the students\n                                    </li></ul></div></div></div></div></div></div></div> "), _vm._ssrNode("<div class=\"testimonials-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title text-center\"><span>TESTIMONIAL</span> <h2>What Parents say...</h2></div> "), _vm._ssrNode("<div class=\"testimonials-slider-two owl-carousel owl-theme\">", "</div>", [_c('VueSlickCarousel', _vm._b({
    ref: "slickTestimonial"
  }, 'VueSlickCarousel', _vm.slickTestimonialOptions, false), _vm._l(_vm.testimonials, function (item, i) {
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
  }), 1)], 1)], 2)]), _vm._ssrNode(" <div class=\"enrolled-area pt-70 pb-70\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-7\"><div class=\"enrolled-content mb-30\"><div class=\"section-title\"><h2>\n                                Vrddhi Format\n                            </h2> <p>\n                                Vrddhi is an objective based Examination consisting of 35 questions and the duration of\n                                the Exam is 1 hour.\n                            </p> <p>\n                                Subjects Involved:\n                            </p></div> <div class=\"row\"><div class=\"col-lg-6 col-6\"><ul class=\"enrolled-list\"><li><i class=\"flaticon-check\"></i> Mental Ability Test</li> <li><i class=\"flaticon-check\"></i> Mathematics</li> <li><i class=\"flaticon-check\"></i> Physics</li></ul></div> <div class=\"col-lg-6 col-6\"><ul class=\"enrolled-list\"><li><i class=\"flaticon-check\"></i> Chemistry</li> <li><i class=\"flaticon-check\"></i> Biology</li></ul></div></div></div></div> <div class=\"col-lg-5\"><div data-speed=\"0.05\" data-revert=\"true\" class=\"enrolled-img-two mb-30\"><img src=\"/images/objective-of-vrddhi.jpg\" alt=\"Enrolled\"></div></div></div></div></div> "), _vm._ssrNode("<div class=\"footer-contact-area ptb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-9 col-md-9\"><div class=\"section-title\"><h2>To View the Syllabus &amp; the Model Paper</h2></div></div> "), _vm._ssrNode("<div class=\"col-lg-3 col-md-3 text-end\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/vrddhi/syllabus"
    }
  }, [_vm._v("Click Here")])], 1)], 2)])]), _vm._ssrNode(" <div class=\"faq-area pt-70 pb-70\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-6\"><div class=\"faq-img\"><img src=\"/images/faq-img.jpg\" alt=\"faq\"> <div class=\"shape\"><img src=\"/images/faq-shape.png\" alt=\"Faq\"></div></div></div> <div class=\"col-lg-6\"><div class=\"faq-accordion pl-20\"><div class=\"section-title mb-45\"><h2>Rewards</h2> <span>( Subjects Involved )</span></div> <div class=\"enrolled-content mb-30\"><div class=\"row\"><div class=\"col-lg-12 col-12\"><ul class=\"enrolled-list\"><li><i class=\"flaticon-check\"></i> Best school of each streams in the zone would be presented with a Rolling Trophy.</li> <li><i class=\"flaticon-check\"></i> The School Toppers would receive Medals.</li> <li><i class=\"flaticon-check\"></i> The Zonal Toppers would receive a Trophy.</li> <li><i class=\"flaticon-check\"></i> All the Participants would receive a participation certificate.</li></ul></div></div></div></div></div></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/vrddhi/index.vue?vue&type=template&id=befbd39c&

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(210);

// EXTERNAL MODULE: ./components/TestimonialCard.vue + 4 modules
var TestimonialCard = __webpack_require__(211);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/vrddhi/index.vue?vue&type=script&lang=js&


/* harmony default export */ var vrddhivue_type_script_lang_js_ = ({
  name: "VrddhiPage",
  layout: "MainPageLayout",
  data() {
    return {
      testimonials: [{
        name: 'SREEJA',
        image: '/images/logos/logo-sm.png',
        star: 5,
        designation: 'parent',
        message: `My daughter was not planning to join any coaching class 9 as she had been pretty
                                comfortable studying on her own. only because it started as an after school class within
                                the school premises, we thought of exploring it and I'm happy that it worked out well
                                for her.
                                AAA provided her with a lot of practice materials. Also, all the practice worksheets
                                which were done as homework were corrected and alterative or easier solution, missing
                                steps, etc. were given and mentioned in her solution sheet i.e all the
                                problems were corrected thoroughly making sure that the children followed all the steps.
                                Also, whenever she missed any class, upon request, the concerned teacher used to take
                                extra hours after class even if it is for just 1or 2 students. I'm very happy that AAA
                                helped my daughter with her studies significantly.
                                Thanks to all the faculty at AAA.
                            `
      }, {
        name: 'PRASHANT PAI B',
        image: '/images/logos/logo-sm.png',
        star: 5,
        designation: 'parent',
        message: `Arjuna Academy for Achievers is doing a great job in coaching your mind. The teachers are
                                highly qualified, dedicated, and work hard to help the students understand the basics.
                                The class homework, student materials, and assignments are excellent. as they are
                                conducting the classes in the same school where my son Nandish pai studies, I am very
                                happy that he does not has to travel to the coaching center.
                                It saves his time and we, parent feel safe about our child.
                            `
      }, {
        name: 'B C KESHAV',
        image: '/images/logos/logo-sm.png',
        star: 5,
        designation: 'parent',
        message: `The Interaction Between Teacher and children is very convincing. it has helped to Bring
                                up the Interests of the Child and motivate Hime To Achieve His Goal. AAA Has Played an
                                Important Role in our child's LIfe in shaping his future.
                            `
      }],
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
      }
    };
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  },
  methods: {},
  components: {
    Breadcrumb: Breadcrumb["a" /* default */],
    TestimonialCard: TestimonialCard["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/vrddhi/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_vrddhivue_type_script_lang_js_ = (vrddhivue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/vrddhi/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_vrddhivue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e5d2f2b8"
  
)

/* harmony default export */ var vrddhi = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map