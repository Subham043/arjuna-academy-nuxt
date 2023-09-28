exports.ids = [3];
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

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(225);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("986c3e2c", content, true, context)
};

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_25742be0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(218);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_25742be0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_25742be0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_25742be0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_25742be0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".achiever-detail[data-v-25742be0]{background-color:#f9f9f9;-webkit-clip-path:polygon(50% 0,100% 0,100% 99%,50% 85%,0 100%,0 0);clip-path:polygon(50% 0,100% 0,100% 99%,50% 85%,0 100%,0 0);height:375px;margin-bottom:30px;min-height:375px;text-align:center}.achiever-detail-container[data-v-25742be0]{padding:15px 30px}.achiever-detail img[data-v-25742be0]{border:2px solid #d7c167;width:55%}.achiever-detail h5[data-v-25742be0]{font-size:17px;font-weight:700;margin:0;padding:10px 0}.achiever-detail h3[data-v-25742be0]{background:#304557;color:#fff;font-size:15px;font-weight:700;padding:10px;text-align:center}.tab-filter p[data-v-25742be0]{font-size:14px;font-weight:620;padding:0 10%;text-align:center}.achiever-detail p[data-v-25742be0]{font-weight:700}@media only screen and (max-width:767px){.achiever-detail[data-v-25742be0]{height:445px;min-height:445px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/:slug.vue?vue&type=template&id=25742be0&scoped=true&
var render = function render() {
  var _vm$campaign, _vm$campaign2, _vm$campaign3, _vm$campaign4, _vm$campaign5, _vm$campaign6, _vm$campaign7, _vm$campaign8, _vm$campaign9, _vm$campaign10, _vm$campaign11, _vm$campaign12, _vm$campaign13, _vm$campaign14, _vm$campaign15, _vm$campaign16, _vm$campaign18, _vm$campaign19, _vm$campaign20, _vm$campaign21, _vm$campaign22, _vm$campaign23, _vm$campaign24;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"blog-details-area pb-70\" data-v-25742be0>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-25742be0>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-25742be0>", "</div>", [!_vm.campaignLoading ? [_vm._ssrNode("<div class=\"col-lg-12\" data-v-25742be0><div class=\"blog-details-content\" data-v-25742be0><div class=\"blog-preview-img\" data-v-25742be0><img" + _vm._ssrAttr("src", (_vm$campaign = _vm.campaign) === null || _vm$campaign === void 0 ? void 0 : _vm$campaign.image) + _vm._ssrAttr("alt", (_vm$campaign2 = _vm.campaign) === null || _vm$campaign2 === void 0 ? void 0 : _vm$campaign2.image_alt) + _vm._ssrAttr("title", (_vm$campaign3 = _vm.campaign) === null || _vm$campaign3 === void 0 ? void 0 : _vm$campaign3.image_title) + " data-v-25742be0></div></div></div> "), ((_vm$campaign4 = _vm.campaign) === null || _vm$campaign4 === void 0 ? void 0 : _vm$campaign4.include_form) === true ? _vm._ssrNode("<div class=\"col-lg-3\" data-v-25742be0>", "</div>", [_vm._ssrNode("<div class=\"register-form form-sticky\" data-v-25742be0>", "</div>", [_vm._ssrNode("<div class=\"top-header\" data-v-25742be0><h3 class=\"size\" data-v-25742be0>" + _vm._ssrEscape(_vm._s((_vm$campaign5 = _vm.campaign) === null || _vm$campaign5 === void 0 ? void 0 : _vm$campaign5.form_heading)) + "</h3></div> "), _vm._ssrNode("<div class=\"contact-form px-3\" data-v-25742be0>", "</div>", [_vm._ssrNode("<h5 class=\"text-center\" data-v-25742be0>Fill in your details</h5> "), _c('ValidationObserver', {
    ref: "form",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        handleSubmit
      }) {
        return [_c('form', {
          attrs: {
            "id": "contactForm"
          },
          on: {
            "submit": function ($event) {
              $event.preventDefault();
              return handleSubmit(_vm.formHandler);
            }
          }
        }, [_c('div', {
          staticClass: "row"
        }, [_c('div', {
          staticClass: "col-lg-12 col-sm-12"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|alpha_spaces",
            "name": "name"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name"
                }],
                staticClass: "form-control",
                attrs: {
                  "type": "text",
                  "name": "name",
                  "id": "name",
                  "data-error": "Please enter your name",
                  "placeholder": "Your Name"
                },
                domProps: {
                  "value": _vm.name
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.name = $event.target.value;
                  }
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12 col-sm-12"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|email",
            "name": "email"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }],
                staticClass: "form-control",
                attrs: {
                  "type": "email",
                  "name": "email",
                  "id": "email",
                  "data-error": "Please enter your email",
                  "placeholder": "Your Email"
                },
                domProps: {
                  "value": _vm.email
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.email = $event.target.value;
                  }
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12 col-sm-12"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|phone",
            "name": "phone"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.phone,
                  expression: "phone"
                }],
                staticClass: "form-control",
                attrs: {
                  "type": "text",
                  "name": "phone",
                  "id": "phone",
                  "data-error": "Please enter your phone",
                  "placeholder": "Your Phone"
                },
                domProps: {
                  "value": _vm.phone
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.phone = $event.target.value;
                  }
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12 col-md-12"
        }, [_c('button', {
          staticClass: "default-btn",
          attrs: {
            "type": "submit",
            "disabled": _vm.enquiryLoading
          }
        }, [!_vm.enquiryLoading ? [_vm._v("\n                                                        Submit\n                                                    ")] : _c('div', {
          staticClass: "spinner-border",
          attrs: {
            "role": "status"
          }
        })], 2)])])])];
      }
    }], null, false, 1011202348)
  })], 2)], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass(null, ((_vm$campaign6 = _vm.campaign) === null || _vm$campaign6 === void 0 ? void 0 : _vm$campaign6.include_form) === true ? 'col-lg-9' : 'col-lg-12') + " data-v-25742be0>", "</div>", [_vm._ssrNode("<div class=\"blog-details-content pr-20 main-content\" data-v-25742be0>", "</div>", [!_vm.campaignLoading ? [_vm._ssrNode("<h1 data-v-25742be0>" + _vm._ssrEscape(_vm._s((_vm$campaign7 = _vm.campaign) === null || _vm$campaign7 === void 0 ? void 0 : _vm$campaign7.heading)) + "</h1> "), _c('div', {
    directives: [{
      name: "html-safe",
      rawName: "v-html-safe",
      value: (_vm$campaign8 = _vm.campaign) === null || _vm$campaign8 === void 0 ? void 0 : _vm$campaign8.description,
      expression: "campaign?.description"
    }]
  }, []), _vm._ssrNode(" "), ((_vm$campaign9 = _vm.campaign) === null || _vm$campaign9 === void 0 ? void 0 : _vm$campaign9.include_testimonial) === true ? [_vm._ssrNode("<div class=\"section-title text-center\" data-v-25742be0><span data-v-25742be0>TESTIMONIAL</span> <h2 data-v-25742be0>" + _vm._ssrEscape(_vm._s((_vm$campaign10 = _vm.campaign) === null || _vm$campaign10 === void 0 ? void 0 : _vm$campaign10.testimonial_heading)) + "</h2></div> "), ((_vm$campaign11 = _vm.campaign) === null || _vm$campaign11 === void 0 ? void 0 : _vm$campaign11.testimonials.length) > 0 ? _vm._ssrNode("<div class=\"testimonials-slider-two row justify-content-center mt-4\" data-v-25742be0>", "</div>", _vm._l((_vm$campaign12 = _vm.campaign) === null || _vm$campaign12 === void 0 ? void 0 : _vm$campaign12.testimonials, function (item, i) {
    return _vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-sm-12\" data-v-25742be0>", "</div>", [_c('TestimonialCard', {
      attrs: {
        "image": item.image,
        "name": item.name,
        "star": item.star,
        "message": item.message,
        "designation": item.designation
      }
    })], 1);
  }), 0) : _vm._e()] : _vm._e(), _vm._ssrNode(" " + (((_vm$campaign13 = _vm.campaign) === null || _vm$campaign13 === void 0 ? void 0 : _vm$campaign13.include_topper) === true ? "<div class=\"section-title text-center\" data-v-25742be0><span data-v-25742be0>ACHIEVERS</span> <h2 data-v-25742be0>" + _vm._ssrEscape(_vm._s((_vm$campaign14 = _vm.campaign) === null || _vm$campaign14 === void 0 ? void 0 : _vm$campaign14.topper_heading)) + "</h2></div> " + (((_vm$campaign15 = _vm.campaign) === null || _vm$campaign15 === void 0 ? void 0 : _vm$campaign15.achievers.length) > 0 ? "<div class=\"row justify-content-center mt-4\" data-v-25742be0>" + _vm._ssrList((_vm$campaign16 = _vm.campaign) === null || _vm$campaign16 === void 0 ? void 0 : _vm$campaign16.achievers, function (item, i) {
    var _vm$campaign17;
    return ((_vm$campaign17 = _vm.campaign) === null || _vm$campaign17 === void 0 ? void 0 : _vm$campaign17.achievers.length) > 0 ? "<div class=\"col-lg-4 col-md-4\" data-v-25742be0><div class=\"achiever-detail\" data-v-25742be0><div class=\"achiever-detail-container pb-0\" data-v-25742be0><img" + _vm._ssrAttr("src", item.image) + _vm._ssrAttr("alt", item.image_alt) + _vm._ssrAttr("title", item.image_title) + " class=\"img-responsive\" data-v-25742be0> <h5 data-v-25742be0>" + _vm._ssrEscape(_vm._s(item.name)) + "</h5></div> <h3 data-v-25742be0>" + _vm._ssrEscape(" " + _vm._s(item.rank)) + "</h3> <div class=\"achiever-detail-container pt-0\" data-v-25742be0><p data-v-25742be0>" + _vm._ssrEscape(_vm._s(item.college) + " ") + "</p></div></div></div>" : "<!---->";
  }) + "</div>" : "<!---->") : "<!---->") + " <div class=\"article-share\" data-v-25742be0><div class=\"row align-items-center justify-content-center\" data-v-25742be0><div class=\"col-lg-auto col-md-auto\" data-v-25742be0><div class=\"article-social-icon\" data-v-25742be0><ul class=\"social-icon\" data-v-25742be0><li class=\"title\" data-v-25742be0>Share :</li> <li data-v-25742be0><a" + _vm._ssrAttr("href", `https://www.facebook.com/share.php?u=https://www.aaaedu.in/${(_vm$campaign18 = _vm.campaign) === null || _vm$campaign18 === void 0 ? void 0 : _vm$campaign18.slug}&title=${(_vm$campaign19 = _vm.campaign) === null || _vm$campaign19 === void 0 ? void 0 : _vm$campaign19.name}`) + " target=\"_blank\" data-v-25742be0><i class=\"ri-facebook-fill\" data-v-25742be0></i></a></li> <li data-v-25742be0><a" + _vm._ssrAttr("href", `https://twitter.com/share?text=${(_vm$campaign20 = _vm.campaign) === null || _vm$campaign20 === void 0 ? void 0 : _vm$campaign20.name}&url=https://www.aaaedu.in/${(_vm$campaign21 = _vm.campaign) === null || _vm$campaign21 === void 0 ? void 0 : _vm$campaign21.slug}`) + " target=\"_blank\" data-v-25742be0><i class=\"ri-twitter-fill\" data-v-25742be0></i></a></li> <li data-v-25742be0><a" + _vm._ssrAttr("href", `https://www.linkedin.com/shareArticle?mini=true&url=https://www.aaaedu.in/${(_vm$campaign22 = _vm.campaign) === null || _vm$campaign22 === void 0 ? void 0 : _vm$campaign22.slug}&title=${(_vm$campaign23 = _vm.campaign) === null || _vm$campaign23 === void 0 ? void 0 : _vm$campaign23.name}&source=${(_vm$campaign24 = _vm.campaign) === null || _vm$campaign24 === void 0 ? void 0 : _vm$campaign24.name}`) + " target=\"_blank\" data-v-25742be0><i class=\"ri-linkedin-fill\" data-v-25742be0></i></a></li></ul></div></div></div></div>")] : _vm._e()], 2)])] : [_c('el-skeleton', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "animated": ""
    }
  }, [_c('template', {
    slot: "template"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "blog-details-content pr-20"
  }, [_c('div', {
    staticClass: "blog-preview-img"
  }, [_c('el-skeleton-item', {
    staticStyle: {
      "width": "100%",
      "height": "440px"
    },
    attrs: {
      "variant": "image"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-3"
  }, [_c('el-skeleton-item', {
    staticStyle: {
      "width": "100%",
      "height": "400px"
    },
    attrs: {
      "variant": "rect"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-lg-9"
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
  })], 1)])])], 2)]], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/:slug.vue?vue&type=template&id=25742be0&scoped=true&

// EXTERNAL MODULE: ./components/TestimonialCard.vue + 4 modules
var TestimonialCard = __webpack_require__(211);

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/:slug.vue?vue&type=script&lang=js&


/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: "CampaignDetailPage",
  layout: "MainPageLayout",
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  },
  data() {
    return {
      campaignLoading: false,
      campaign: null,
      name: '',
      email: '',
      phone: '',
      enquiryLoading: false
    };
  },
  head() {
    var _this$campaign, _this$campaign2, _this$campaign3, _this$campaign4, _this$campaign5;
    return {
      title: (_this$campaign = this.campaign) === null || _this$campaign === void 0 ? void 0 : _this$campaign.meta_title,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'og:title',
        name: 'og:title',
        content: (_this$campaign2 = this.campaign) === null || _this$campaign2 === void 0 ? void 0 : _this$campaign2.meta_title
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }, {
        hid: 'description',
        name: 'description',
        content: (_this$campaign3 = this.campaign) === null || _this$campaign3 === void 0 ? void 0 : _this$campaign3.meta_description
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: (_this$campaign4 = this.campaign) === null || _this$campaign4 === void 0 ? void 0 : _this$campaign4.meta_keywords
      }],
      script: [{
        type: 'application/ld+json',
        innerHTML: (_this$campaign5 = this.campaign) === null || _this$campaign5 === void 0 ? void 0 : _this$campaign5.meta_scripts // <- set jsonld object in data or wherever you want
      }],

      __dangerouslyDisableSanitizers: ['script']
    };
  },
  async fetch() {
    await this.getEvent();
  },
  methods: {
    async getEvent() {
      this.campaignLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].campaign + `/${this.$route.params.slug}`); // eslint-disable-line
        this.campaign = response.data.campaign;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.campaignLoading = false;
      }
    },
    async formHandler() {
      this.enquiryLoading = true;
      try {
        var _this$campaign6;
        await this.$publicApi.post(api_routes["a" /* API_ROUTES */].campaign + `/enquiry/${(_this$campaign6 = this.campaign) === null || _this$campaign6 === void 0 ? void 0 : _this$campaign6.id}`, {
          name: this.name,
          email: this.email,
          phone: this.phone
        });
        this.name = '';
        this.email = '';
        this.phone = '';
        this.$refs.form.reset();
        this.$toast.success('Enquiry Recieved Successfully.');
      } catch (err) {
        var _err$response, _err$response$data, _err$response$data$er, _err$response$data$er2, _err$response2, _err$response2$data, _err$response2$data$e, _err$response3, _err$response3$data, _err$response3$data$e, _err$response3$data$e2, _err$response4, _err$response4$data, _err$response4$data$e, _err$response5, _err$response5$data, _err$response5$data$e, _err$response5$data$e2, _err$response6, _err$response6$data, _err$response6$data$e, _err$response7, _err$response7$data, _err$response8, _err$response8$data, _err$response9, _err$response9$data, _err$response10, _err$response10$data;
        this.$refs.form.setErrors({
          email: (err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : (_err$response$data$er = _err$response$data.errors) === null || _err$response$data$er === void 0 ? void 0 : (_err$response$data$er2 = _err$response$data$er.email) === null || _err$response$data$er2 === void 0 ? void 0 : _err$response$data$er2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : (_err$response2$data$e = _err$response2$data.errors) === null || _err$response2$data$e === void 0 ? void 0 : _err$response2$data$e.email[0]),
          name: (err === null || err === void 0 ? void 0 : (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : (_err$response3$data = _err$response3.data) === null || _err$response3$data === void 0 ? void 0 : (_err$response3$data$e = _err$response3$data.errors) === null || _err$response3$data$e === void 0 ? void 0 : (_err$response3$data$e2 = _err$response3$data$e.name) === null || _err$response3$data$e2 === void 0 ? void 0 : _err$response3$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : (_err$response4$data = _err$response4.data) === null || _err$response4$data === void 0 ? void 0 : (_err$response4$data$e = _err$response4$data.errors) === null || _err$response4$data$e === void 0 ? void 0 : _err$response4$data$e.name[0]),
          phone: (err === null || err === void 0 ? void 0 : (_err$response5 = err.response) === null || _err$response5 === void 0 ? void 0 : (_err$response5$data = _err$response5.data) === null || _err$response5$data === void 0 ? void 0 : (_err$response5$data$e = _err$response5$data.errors) === null || _err$response5$data$e === void 0 ? void 0 : (_err$response5$data$e2 = _err$response5$data$e.phone) === null || _err$response5$data$e2 === void 0 ? void 0 : _err$response5$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response6 = err.response) === null || _err$response6 === void 0 ? void 0 : (_err$response6$data = _err$response6.data) === null || _err$response6$data === void 0 ? void 0 : (_err$response6$data$e = _err$response6$data.errors) === null || _err$response6$data$e === void 0 ? void 0 : _err$response6$data$e.phone[0])
        });
        if (err !== null && err !== void 0 && (_err$response7 = err.response) !== null && _err$response7 !== void 0 && (_err$response7$data = _err$response7.data) !== null && _err$response7$data !== void 0 && _err$response7$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response8 = err.response) === null || _err$response8 === void 0 ? void 0 : (_err$response8$data = _err$response8.data) === null || _err$response8$data === void 0 ? void 0 : _err$response8$data.message);
        if (err !== null && err !== void 0 && (_err$response9 = err.response) !== null && _err$response9 !== void 0 && (_err$response9$data = _err$response9.data) !== null && _err$response9$data !== void 0 && _err$response9$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response10 = err.response) === null || _err$response10 === void 0 ? void 0 : (_err$response10$data = _err$response10.data) === null || _err$response10$data === void 0 ? void 0 : _err$response10$data.error);
      } finally {
        this.enquiryLoading = false;
      }
    }
  },
  components: {
    TestimonialCard: TestimonialCard["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/:slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/:slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(224)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "25742be0",
  "a075c41e"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=:slug.js.map