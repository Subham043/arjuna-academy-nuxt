exports.ids = [24];
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

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/admission/puc.vue?vue&type=template&id=1e26aaa1&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Admission for Class 11 or 1st PUC",
      "pages": [{
        link: '',
        name: 'Admission for Class 11 or 1st PUC'
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"faq-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-5\">", "</div>", [_vm._ssrNode("<div class=\"faq-img\">", "</div>", [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": "/images/faq-img.jpg",
      "alt": "faq"
    }
  }, []), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"shape\">", "</div>", [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": "/images/faq-shape.png",
      "alt": "Faq"
    }
  }, [])])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-7\">", "</div>", [_vm._ssrNode("<div class=\"contact-widget-area pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"register-form\">", "</div>", [_vm._ssrNode("<div class=\"top-header\"><h3>\n                                        Admission for Class 11 or 1st PUC\n                                    </h3></div> "), _vm._ssrNode("<div class=\"contact-form\">", "</div>", [_c('ValidationObserver', {
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
          staticClass: "col-lg-4 col-md-6"
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
              return [_c('el-input', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Name"
                },
                model: {
                  value: _vm.name,
                  callback: function ($$v) {
                    _vm.name = $$v;
                  },
                  expression: "name"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-4 col-md-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "school_name"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-input', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "School's Name"
                },
                model: {
                  value: _vm.school_name,
                  callback: function ($$v) {
                    _vm.school_name = $$v;
                  },
                  expression: "school_name"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-4 col-md-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "aadhar"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-input', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Aadhar Card Detail"
                },
                model: {
                  value: _vm.aadhar,
                  callback: function ($$v) {
                    _vm.aadhar = $$v;
                  },
                  expression: "aadhar"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-4 col-md-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|alpha_spaces",
            "name": "father_name"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-input', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Father's Name"
                },
                model: {
                  value: _vm.father_name,
                  callback: function ($$v) {
                    _vm.father_name = $$v;
                  },
                  expression: "father_name"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-4 col-md-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|phone",
            "name": "father_phone"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-input', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Father's Phone"
                },
                model: {
                  value: _vm.father_phone,
                  callback: function ($$v) {
                    _vm.father_phone = $$v;
                  },
                  expression: "father_phone"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-4 col-md-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "father_occupation"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-input', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Father's Occupation"
                },
                model: {
                  value: _vm.father_occupation,
                  callback: function ($$v) {
                    _vm.father_occupation = $$v;
                  },
                  expression: "father_occupation"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-4 col-md-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|alpha_spaces",
            "name": "mother_name"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-input', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Mother's Name"
                },
                model: {
                  value: _vm.mother_name,
                  callback: function ($$v) {
                    _vm.mother_name = $$v;
                  },
                  expression: "mother_name"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-4 col-md-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|phone",
            "name": "mother_phone"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-input', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Mother's Phone"
                },
                model: {
                  value: _vm.mother_phone,
                  callback: function ($$v) {
                    _vm.mother_phone = $$v;
                  },
                  expression: "mother_phone"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-4 col-md-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "mother_occupation"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-input', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Mother's Occupation"
                },
                model: {
                  value: _vm.mother_occupation,
                  callback: function ($$v) {
                    _vm.mother_occupation = $$v;
                  },
                  expression: "mother_occupation"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-6 col-md-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "center"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-select', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Choose Your Center"
                },
                model: {
                  value: _vm.center,
                  callback: function ($$v) {
                    _vm.center = $$v;
                  },
                  expression: "center"
                }
              }, _vm._l(_vm.centerOptions, function (item) {
                return _c('el-option', {
                  key: item.value,
                  attrs: {
                    "label": item.label,
                    "value": item.value
                  }
                });
              }), 1), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          class: `col-lg-6 col-md-6`
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "batch"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-select', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Select Your Batch"
                },
                model: {
                  value: _vm.batch,
                  callback: function ($$v) {
                    _vm.batch = $$v;
                  },
                  expression: "batch"
                }
              }, _vm._l(_vm.batchOptions, function (item) {
                return _c('el-option', {
                  key: item.value,
                  attrs: {
                    "label": item.label,
                    "value": item.value
                  }
                });
              }), 1), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12 col-md-12"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|ext:jpg,jpeg,png,webp",
            "name": "marks"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('div', {
                staticClass: "form-group"
              }, [_c('label', {
                staticClass: "form-label"
              }, [_vm._v("Class 10 Preparatory Marks* "), _c('br'), _vm._v(" "), _c('code', [_vm._v("(Only PDF | JPG | PNG files are allowed. Max-size 512kb)")])]), _vm._v(" "), _c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.marks,
                  expression: "marks"
                }],
                attrs: {
                  "type": "hidden"
                },
                domProps: {
                  "value": _vm.marks
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.marks = $event.target.value;
                  }
                }
              }), _vm._v(" "), _c('input', {
                staticClass: "form-control",
                attrs: {
                  "type": "file"
                },
                on: {
                  "change": _vm.handleFileChnage
                }
              })]), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12 col-md-12"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "address"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-input', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Permanenet Address",
                  "type": "textarea",
                  "rows": 5
                },
                model: {
                  value: _vm.address,
                  callback: function ($$v) {
                    _vm.address = $$v;
                  },
                  expression: "address"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-6 col-md-12"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "sibling"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('label', [_vm._v("Do you have sibling?")]), _c('br'), _vm._v(" "), _c('el-switch', {
                attrs: {
                  "active-text": "Yes",
                  "inactive-text": "No"
                },
                model: {
                  value: _vm.sibling,
                  callback: function ($$v) {
                    _vm.sibling = $$v;
                  },
                  expression: "sibling"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _vm.sibling ? [_c('div', {
          staticClass: "col-lg-6 col-md-12"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "sibling_occupation"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('label', [_vm._v("What are they doing?")]), _c('br'), _vm._v(" "), _c('el-switch', {
                attrs: {
                  "active-text": "Studying",
                  "inactive-text": "Working"
                },
                model: {
                  value: _vm.sibling_occupation,
                  callback: function ($$v) {
                    _vm.sibling_occupation = $$v;
                  },
                  expression: "sibling_occupation"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _vm.sibling_occupation ? [_c('div', {
          staticClass: "col-lg-4 col-md-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "no_of_sibling"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-input', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Number of Siblings"
                },
                model: {
                  value: _vm.no_of_sibling,
                  callback: function ($$v) {
                    _vm.no_of_sibling = $$v;
                  },
                  expression: "no_of_sibling"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-4 col-md-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "sibling_class"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-input', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "If Studying, which grade are they studying in?"
                },
                model: {
                  value: _vm.sibling_class,
                  callback: function ($$v) {
                    _vm.sibling_class = $$v;
                  },
                  expression: "sibling_class"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-4 col-md-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "sibling_school"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-input', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Your Siblings School Name"
                },
                model: {
                  value: _vm.sibling_school,
                  callback: function ($$v) {
                    _vm.sibling_school = $$v;
                  },
                  expression: "sibling_school"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)])] : _vm._e()] : _vm._e(), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12 col-md-12"
        }, [_c('button', {
          staticClass: "default-btn",
          attrs: {
            "type": "submit",
            "disabled": _vm.loading
          }
        }, [!_vm.loading ? [_vm._v("\n                                                            Submit\n                                                        ")] : _c('div', {
          staticClass: "spinner-border",
          attrs: {
            "role": "status"
          }
        })], 2)])], 2)])];
      }
    }])
  })], 1)], 2)])])])], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admission/puc.vue?vue&type=template&id=1e26aaa1&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(204);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/admission/puc.vue?vue&type=script&lang=js&

/* harmony default export */ var pucvue_type_script_lang_js_ = ({
  name: "AdmissionPucPage",
  layout: "MainPageLayout",
  data() {
    return {
      centerOptions: [{
        value: 'Hebbal (PU)',
        label: 'Hebbal (PU)'
      }, {
        value: 'Vijaynagar (PU)',
        label: 'Vijaynagar (PU)'
      }, {
        value: 'Kengeri (CBSE)',
        label: 'Kengeri (CBSE)'
      }, {
        value: 'Uttarahalli Road (PU)',
        label: 'Uttarahalli Road (PU)'
      }, {
        value: 'Kanakpura Road(Residential Campus)',
        label: 'Kanakpura Road(Residential Campus)'
      }],
      batchOptions: [{
        value: '2-Years Full-Time Super 30 Classroom Program(Day Scholar)',
        label: '2-Years Full-Time Super 30 Classroom Program(Day Scholar)'
      }, {
        value: '2-Year Full-Time Super 30 Classroom Program (Residential)',
        label: '2-Year Full-Time Super 30 Classroom Program (Residential)'
      }, {
        value: 'JEE Evening Batch',
        label: 'JEE Evening Batch'
      }, {
        value: 'NEET Evening Batch',
        label: 'NEET Evening Batch'
      }, {
        value: 'KVPY Weekend Batch',
        label: 'KVPY Weekend Batch'
      }, {
        value: 'JEE+NEET+KVPY (7 Days a week)',
        label: 'JEE+NEET+KVPY (7 Days a week)'
      }],
      name: '',
      school_name: '',
      aadhar: '',
      father_name: '',
      father_occupation: '',
      father_phone: '',
      mother_name: '',
      mother_occupation: '',
      mother_phone: '',
      center: '',
      batch: '',
      address: '',
      sibling: false,
      sibling_occupation: false,
      no_of_sibling: '',
      sibling_school: '',
      sibling_class: '',
      marks: [],
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
    await this.getSeo();
  },
  methods: {
    async formHandler() {
      this.loading = true;
      try {
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('school_name', this.school_name);
        formData.append('aadhar', this.aadhar);
        formData.append('father_name', this.father_name);
        formData.append('father_occupation', this.father_occupation);
        formData.append('father_phone', this.father_phone);
        formData.append('mother_name', this.mother_name);
        formData.append('mother_occupation', this.mother_occupation);
        formData.append('mother_phone', this.mother_phone);
        formData.append('center', this.center);
        formData.append('batch', this.batch);
        formData.append('address', this.address);
        formData.append('sibling', this.sibling ? 'Yes' : 'No');
        if (this.sibling) {
          formData.append('sibling_occupation', this.sibling_occupation ? 'studying' : 'working');
          if (this.sibling_occupation) {
            formData.append('no_of_sibling', this.no_of_sibling);
            formData.append('sibling_school', this.sibling_school);
            formData.append('sibling_class', this.sibling_class);
          }
        }
        formData.append('marks', this.marks);
        await this.$publicApi.post(api_routes["a" /* API_ROUTES */].admission_puc, formData);
        this.name = '';
        this.school_name = '';
        this.aadhar = '';
        this.father_name = '';
        this.father_occupation = '';
        this.father_phone = '';
        this.mother_name = '';
        this.mother_occupation = '';
        this.mother_phone = '';
        this.center = '';
        this.batch = '';
        this.address = '';
        this.no_of_sibling = '';
        this.sibling_school = '';
        this.sibling_class = '';
        this.sibling = false;
        this.sibling_occupation = false;
        this.marks = [];
        this.$refs.form.reset();
        this.$toast.success('Admission Recieved Successfully.');
      } catch (err) {
        var _err$response, _err$response$data, _err$response$data$er, _err$response$data$er2, _err$response2, _err$response2$data, _err$response2$data$e, _err$response3, _err$response3$data, _err$response3$data$e, _err$response3$data$e2, _err$response4, _err$response4$data, _err$response4$data$e, _err$response5, _err$response5$data, _err$response5$data$e, _err$response5$data$e2, _err$response6, _err$response6$data, _err$response6$data$e, _err$response7, _err$response7$data, _err$response7$data$e, _err$response7$data$e2, _err$response8, _err$response8$data, _err$response8$data$e, _err$response9, _err$response9$data, _err$response9$data$e, _err$response9$data$e2, _err$response10, _err$response10$data, _err$response10$data$, _err$response11, _err$response11$data, _err$response11$data$, _err$response11$data$2, _err$response12, _err$response12$data, _err$response12$data$, _err$response13, _err$response13$data, _err$response13$data$, _err$response13$data$2, _err$response14, _err$response14$data, _err$response14$data$, _err$response15, _err$response15$data, _err$response15$data$, _err$response15$data$2, _err$response16, _err$response16$data, _err$response16$data$, _err$response17, _err$response17$data, _err$response17$data$, _err$response17$data$2, _err$response18, _err$response18$data, _err$response18$data$, _err$response19, _err$response19$data, _err$response19$data$, _err$response19$data$2, _err$response20, _err$response20$data, _err$response20$data$, _err$response21, _err$response21$data, _err$response21$data$, _err$response21$data$2, _err$response22, _err$response22$data, _err$response22$data$, _err$response23, _err$response23$data, _err$response23$data$, _err$response23$data$2, _err$response24, _err$response24$data, _err$response24$data$, _err$response25, _err$response25$data, _err$response25$data$, _err$response25$data$2, _err$response26, _err$response26$data, _err$response26$data$, _err$response27, _err$response27$data, _err$response27$data$, _err$response27$data$2, _err$response28, _err$response28$data, _err$response28$data$, _err$response29, _err$response29$data, _err$response29$data$, _err$response29$data$2, _err$response30, _err$response30$data, _err$response30$data$, _err$response31, _err$response31$data, _err$response31$data$, _err$response31$data$2, _err$response32, _err$response32$data, _err$response32$data$, _err$response33, _err$response33$data, _err$response33$data$, _err$response33$data$2, _err$response34, _err$response34$data, _err$response34$data$, _err$response35, _err$response35$data, _err$response35$data$, _err$response35$data$2, _err$response36, _err$response36$data, _err$response36$data$, _err$response37, _err$response37$data, _err$response38, _err$response38$data, _err$response39, _err$response39$data, _err$response40, _err$response40$data;
        this.$refs.form.setErrors({
          school_name: (err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : (_err$response$data$er = _err$response$data.errors) === null || _err$response$data$er === void 0 ? void 0 : (_err$response$data$er2 = _err$response$data$er.school_name) === null || _err$response$data$er2 === void 0 ? void 0 : _err$response$data$er2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : (_err$response2$data$e = _err$response2$data.errors) === null || _err$response2$data$e === void 0 ? void 0 : _err$response2$data$e.school_name[0]),
          name: (err === null || err === void 0 ? void 0 : (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : (_err$response3$data = _err$response3.data) === null || _err$response3$data === void 0 ? void 0 : (_err$response3$data$e = _err$response3$data.errors) === null || _err$response3$data$e === void 0 ? void 0 : (_err$response3$data$e2 = _err$response3$data$e.name) === null || _err$response3$data$e2 === void 0 ? void 0 : _err$response3$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : (_err$response4$data = _err$response4.data) === null || _err$response4$data === void 0 ? void 0 : (_err$response4$data$e = _err$response4$data.errors) === null || _err$response4$data$e === void 0 ? void 0 : _err$response4$data$e.name[0]),
          aadhar: (err === null || err === void 0 ? void 0 : (_err$response5 = err.response) === null || _err$response5 === void 0 ? void 0 : (_err$response5$data = _err$response5.data) === null || _err$response5$data === void 0 ? void 0 : (_err$response5$data$e = _err$response5$data.errors) === null || _err$response5$data$e === void 0 ? void 0 : (_err$response5$data$e2 = _err$response5$data$e.aadhar) === null || _err$response5$data$e2 === void 0 ? void 0 : _err$response5$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response6 = err.response) === null || _err$response6 === void 0 ? void 0 : (_err$response6$data = _err$response6.data) === null || _err$response6$data === void 0 ? void 0 : (_err$response6$data$e = _err$response6$data.errors) === null || _err$response6$data$e === void 0 ? void 0 : _err$response6$data$e.aadhar[0]),
          father_name: (err === null || err === void 0 ? void 0 : (_err$response7 = err.response) === null || _err$response7 === void 0 ? void 0 : (_err$response7$data = _err$response7.data) === null || _err$response7$data === void 0 ? void 0 : (_err$response7$data$e = _err$response7$data.errors) === null || _err$response7$data$e === void 0 ? void 0 : (_err$response7$data$e2 = _err$response7$data$e.father_name) === null || _err$response7$data$e2 === void 0 ? void 0 : _err$response7$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response8 = err.response) === null || _err$response8 === void 0 ? void 0 : (_err$response8$data = _err$response8.data) === null || _err$response8$data === void 0 ? void 0 : (_err$response8$data$e = _err$response8$data.errors) === null || _err$response8$data$e === void 0 ? void 0 : _err$response8$data$e.father_name[0]),
          father_phone: (err === null || err === void 0 ? void 0 : (_err$response9 = err.response) === null || _err$response9 === void 0 ? void 0 : (_err$response9$data = _err$response9.data) === null || _err$response9$data === void 0 ? void 0 : (_err$response9$data$e = _err$response9$data.errors) === null || _err$response9$data$e === void 0 ? void 0 : (_err$response9$data$e2 = _err$response9$data$e.father_phone) === null || _err$response9$data$e2 === void 0 ? void 0 : _err$response9$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response10 = err.response) === null || _err$response10 === void 0 ? void 0 : (_err$response10$data = _err$response10.data) === null || _err$response10$data === void 0 ? void 0 : (_err$response10$data$ = _err$response10$data.errors) === null || _err$response10$data$ === void 0 ? void 0 : _err$response10$data$.father_name[0]),
          father_occupation: (err === null || err === void 0 ? void 0 : (_err$response11 = err.response) === null || _err$response11 === void 0 ? void 0 : (_err$response11$data = _err$response11.data) === null || _err$response11$data === void 0 ? void 0 : (_err$response11$data$ = _err$response11$data.errors) === null || _err$response11$data$ === void 0 ? void 0 : (_err$response11$data$2 = _err$response11$data$.father_occupation) === null || _err$response11$data$2 === void 0 ? void 0 : _err$response11$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response12 = err.response) === null || _err$response12 === void 0 ? void 0 : (_err$response12$data = _err$response12.data) === null || _err$response12$data === void 0 ? void 0 : (_err$response12$data$ = _err$response12$data.errors) === null || _err$response12$data$ === void 0 ? void 0 : _err$response12$data$.father_name[0]),
          mother_name: (err === null || err === void 0 ? void 0 : (_err$response13 = err.response) === null || _err$response13 === void 0 ? void 0 : (_err$response13$data = _err$response13.data) === null || _err$response13$data === void 0 ? void 0 : (_err$response13$data$ = _err$response13$data.errors) === null || _err$response13$data$ === void 0 ? void 0 : (_err$response13$data$2 = _err$response13$data$.mother_name) === null || _err$response13$data$2 === void 0 ? void 0 : _err$response13$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response14 = err.response) === null || _err$response14 === void 0 ? void 0 : (_err$response14$data = _err$response14.data) === null || _err$response14$data === void 0 ? void 0 : (_err$response14$data$ = _err$response14$data.errors) === null || _err$response14$data$ === void 0 ? void 0 : _err$response14$data$.mother_name[0]),
          mother_phone: (err === null || err === void 0 ? void 0 : (_err$response15 = err.response) === null || _err$response15 === void 0 ? void 0 : (_err$response15$data = _err$response15.data) === null || _err$response15$data === void 0 ? void 0 : (_err$response15$data$ = _err$response15$data.errors) === null || _err$response15$data$ === void 0 ? void 0 : (_err$response15$data$2 = _err$response15$data$.mother_phone) === null || _err$response15$data$2 === void 0 ? void 0 : _err$response15$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response16 = err.response) === null || _err$response16 === void 0 ? void 0 : (_err$response16$data = _err$response16.data) === null || _err$response16$data === void 0 ? void 0 : (_err$response16$data$ = _err$response16$data.errors) === null || _err$response16$data$ === void 0 ? void 0 : _err$response16$data$.mother_name[0]),
          mother_occupation: (err === null || err === void 0 ? void 0 : (_err$response17 = err.response) === null || _err$response17 === void 0 ? void 0 : (_err$response17$data = _err$response17.data) === null || _err$response17$data === void 0 ? void 0 : (_err$response17$data$ = _err$response17$data.errors) === null || _err$response17$data$ === void 0 ? void 0 : (_err$response17$data$2 = _err$response17$data$.mother_occupation) === null || _err$response17$data$2 === void 0 ? void 0 : _err$response17$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response18 = err.response) === null || _err$response18 === void 0 ? void 0 : (_err$response18$data = _err$response18.data) === null || _err$response18$data === void 0 ? void 0 : (_err$response18$data$ = _err$response18$data.errors) === null || _err$response18$data$ === void 0 ? void 0 : _err$response18$data$.mother_name[0]),
          center: (err === null || err === void 0 ? void 0 : (_err$response19 = err.response) === null || _err$response19 === void 0 ? void 0 : (_err$response19$data = _err$response19.data) === null || _err$response19$data === void 0 ? void 0 : (_err$response19$data$ = _err$response19$data.errors) === null || _err$response19$data$ === void 0 ? void 0 : (_err$response19$data$2 = _err$response19$data$.center) === null || _err$response19$data$2 === void 0 ? void 0 : _err$response19$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response20 = err.response) === null || _err$response20 === void 0 ? void 0 : (_err$response20$data = _err$response20.data) === null || _err$response20$data === void 0 ? void 0 : (_err$response20$data$ = _err$response20$data.errors) === null || _err$response20$data$ === void 0 ? void 0 : _err$response20$data$.center[0]),
          batch: (err === null || err === void 0 ? void 0 : (_err$response21 = err.response) === null || _err$response21 === void 0 ? void 0 : (_err$response21$data = _err$response21.data) === null || _err$response21$data === void 0 ? void 0 : (_err$response21$data$ = _err$response21$data.errors) === null || _err$response21$data$ === void 0 ? void 0 : (_err$response21$data$2 = _err$response21$data$.batch) === null || _err$response21$data$2 === void 0 ? void 0 : _err$response21$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response22 = err.response) === null || _err$response22 === void 0 ? void 0 : (_err$response22$data = _err$response22.data) === null || _err$response22$data === void 0 ? void 0 : (_err$response22$data$ = _err$response22$data.errors) === null || _err$response22$data$ === void 0 ? void 0 : _err$response22$data$.batch[0]),
          marks: (err === null || err === void 0 ? void 0 : (_err$response23 = err.response) === null || _err$response23 === void 0 ? void 0 : (_err$response23$data = _err$response23.data) === null || _err$response23$data === void 0 ? void 0 : (_err$response23$data$ = _err$response23$data.errors) === null || _err$response23$data$ === void 0 ? void 0 : (_err$response23$data$2 = _err$response23$data$.marks) === null || _err$response23$data$2 === void 0 ? void 0 : _err$response23$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response24 = err.response) === null || _err$response24 === void 0 ? void 0 : (_err$response24$data = _err$response24.data) === null || _err$response24$data === void 0 ? void 0 : (_err$response24$data$ = _err$response24$data.errors) === null || _err$response24$data$ === void 0 ? void 0 : _err$response24$data$.marks[0]),
          address: (err === null || err === void 0 ? void 0 : (_err$response25 = err.response) === null || _err$response25 === void 0 ? void 0 : (_err$response25$data = _err$response25.data) === null || _err$response25$data === void 0 ? void 0 : (_err$response25$data$ = _err$response25$data.errors) === null || _err$response25$data$ === void 0 ? void 0 : (_err$response25$data$2 = _err$response25$data$.address) === null || _err$response25$data$2 === void 0 ? void 0 : _err$response25$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response26 = err.response) === null || _err$response26 === void 0 ? void 0 : (_err$response26$data = _err$response26.data) === null || _err$response26$data === void 0 ? void 0 : (_err$response26$data$ = _err$response26$data.errors) === null || _err$response26$data$ === void 0 ? void 0 : _err$response26$data$.address[0]),
          sibling: (err === null || err === void 0 ? void 0 : (_err$response27 = err.response) === null || _err$response27 === void 0 ? void 0 : (_err$response27$data = _err$response27.data) === null || _err$response27$data === void 0 ? void 0 : (_err$response27$data$ = _err$response27$data.errors) === null || _err$response27$data$ === void 0 ? void 0 : (_err$response27$data$2 = _err$response27$data$.sibling) === null || _err$response27$data$2 === void 0 ? void 0 : _err$response27$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response28 = err.response) === null || _err$response28 === void 0 ? void 0 : (_err$response28$data = _err$response28.data) === null || _err$response28$data === void 0 ? void 0 : (_err$response28$data$ = _err$response28$data.errors) === null || _err$response28$data$ === void 0 ? void 0 : _err$response28$data$.sibling[0]),
          sibling_occupation: (err === null || err === void 0 ? void 0 : (_err$response29 = err.response) === null || _err$response29 === void 0 ? void 0 : (_err$response29$data = _err$response29.data) === null || _err$response29$data === void 0 ? void 0 : (_err$response29$data$ = _err$response29$data.errors) === null || _err$response29$data$ === void 0 ? void 0 : (_err$response29$data$2 = _err$response29$data$.sibling_occupation) === null || _err$response29$data$2 === void 0 ? void 0 : _err$response29$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response30 = err.response) === null || _err$response30 === void 0 ? void 0 : (_err$response30$data = _err$response30.data) === null || _err$response30$data === void 0 ? void 0 : (_err$response30$data$ = _err$response30$data.errors) === null || _err$response30$data$ === void 0 ? void 0 : _err$response30$data$.sibling_occupation[0]),
          sibling_school: (err === null || err === void 0 ? void 0 : (_err$response31 = err.response) === null || _err$response31 === void 0 ? void 0 : (_err$response31$data = _err$response31.data) === null || _err$response31$data === void 0 ? void 0 : (_err$response31$data$ = _err$response31$data.errors) === null || _err$response31$data$ === void 0 ? void 0 : (_err$response31$data$2 = _err$response31$data$.sibling_school) === null || _err$response31$data$2 === void 0 ? void 0 : _err$response31$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response32 = err.response) === null || _err$response32 === void 0 ? void 0 : (_err$response32$data = _err$response32.data) === null || _err$response32$data === void 0 ? void 0 : (_err$response32$data$ = _err$response32$data.errors) === null || _err$response32$data$ === void 0 ? void 0 : _err$response32$data$.sibling_school[0]),
          sibling_class: (err === null || err === void 0 ? void 0 : (_err$response33 = err.response) === null || _err$response33 === void 0 ? void 0 : (_err$response33$data = _err$response33.data) === null || _err$response33$data === void 0 ? void 0 : (_err$response33$data$ = _err$response33$data.errors) === null || _err$response33$data$ === void 0 ? void 0 : (_err$response33$data$2 = _err$response33$data$.sibling_class) === null || _err$response33$data$2 === void 0 ? void 0 : _err$response33$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response34 = err.response) === null || _err$response34 === void 0 ? void 0 : (_err$response34$data = _err$response34.data) === null || _err$response34$data === void 0 ? void 0 : (_err$response34$data$ = _err$response34$data.errors) === null || _err$response34$data$ === void 0 ? void 0 : _err$response34$data$.sibling_class[0]),
          no_of_sibling: (err === null || err === void 0 ? void 0 : (_err$response35 = err.response) === null || _err$response35 === void 0 ? void 0 : (_err$response35$data = _err$response35.data) === null || _err$response35$data === void 0 ? void 0 : (_err$response35$data$ = _err$response35$data.errors) === null || _err$response35$data$ === void 0 ? void 0 : (_err$response35$data$2 = _err$response35$data$.no_of_sibling) === null || _err$response35$data$2 === void 0 ? void 0 : _err$response35$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response36 = err.response) === null || _err$response36 === void 0 ? void 0 : (_err$response36$data = _err$response36.data) === null || _err$response36$data === void 0 ? void 0 : (_err$response36$data$ = _err$response36$data.errors) === null || _err$response36$data$ === void 0 ? void 0 : _err$response36$data$.no_of_sibling[0])
        });
        if (err !== null && err !== void 0 && (_err$response37 = err.response) !== null && _err$response37 !== void 0 && (_err$response37$data = _err$response37.data) !== null && _err$response37$data !== void 0 && _err$response37$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response38 = err.response) === null || _err$response38 === void 0 ? void 0 : (_err$response38$data = _err$response38.data) === null || _err$response38$data === void 0 ? void 0 : _err$response38$data.message);
        if (err !== null && err !== void 0 && (_err$response39 = err.response) !== null && _err$response39 !== void 0 && (_err$response39$data = _err$response39.data) !== null && _err$response39$data !== void 0 && _err$response39$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response40 = err.response) === null || _err$response40 === void 0 ? void 0 : (_err$response40$data = _err$response40.data) === null || _err$response40$data === void 0 ? void 0 : _err$response40$data.error);
      } finally {
        this.loading = false;
      }
    },
    handleFileChnage(event) {
      this.marks = event.target.files[0];
    },
    async getSeo() {
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/puc-page`); // eslint-disable-line
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
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 251))
  }
});
// CONCATENATED MODULE: ./pages/admission/puc.vue?vue&type=script&lang=js&
 /* harmony default export */ var admission_pucvue_type_script_lang_js_ = (pucvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/admission/puc.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admission_pucvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5db460bc"
  
)

/* harmony default export */ var puc = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=puc.js.map