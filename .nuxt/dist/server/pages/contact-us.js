exports.ids = [29];
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

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/contact-us.vue?vue&type=template&id=5fde1507&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Contact Us",
      "pages": [{
        link: '',
        name: 'Contact Us'
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"faq-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"contact-info-area pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-12 col-sm-8\">", "</div>", [_vm._ssrNode("<div class=\"contact-info-card\">", "</div>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fa', 'map-pin']
    }
  })], 1), _vm._ssrNode(" <h3>Our location</h3> <p>3rd Floor, No.02, CHBCS 1st Layout, 1st Floor, 5th Main, Vijaya Nagar</p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-6 col-6\">", "</div>", [_vm._ssrNode("<div class=\"contact-info-card\">", "</div>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fa', 'envelope']
    }
  })], 1), _vm._ssrNode(" <h3>Email us</h3> <p><a aria-label=\"info@aaaedu.in\" href=\"mailto:info@aaaedu.in\"><span>info@aaaedu.in</span></a></p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-6 col-6\">", "</div>", [_vm._ssrNode("<div class=\"contact-info-card\">", "</div>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fa', 'phone']
    }
  })], 1), _vm._ssrNode(" <h3>Phone</h3> <p><a href=\"tel:+917676642258\" aria-label=\"+91 7676642258\">+91 7676642258</a></p>")], 2)])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"contact-map-area pb-100\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", _vm._l(_vm.maps, function (item, i) {
    return _vm._ssrNode("<div class=\"contact-map mb-20\">", "</div>", [_vm._ssrNode("<div class=\"contact-info-card p-4 rounded\">", "</div>", [_c('iframe', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": item
      }
    }, [])])]);
  }), 0)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"contact-widget-area faq-contact\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"register-form\">", "</div>", [_vm._ssrNode("<div class=\"top-header\"><h3>Get in Touch with us</h3></div> "), _vm._ssrNode("<div class=\"contact-form\">", "</div>", [_c('ValidationObserver', {
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
          staticClass: "col-12"
        }, [_c('h3', {
          staticClass: "user-title"
        }, [_vm._v("Personal Information")])]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-6 col-md-6"
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
          staticClass: "col-lg-6 col-md-6"
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
              return [_c('el-input', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Email"
                },
                model: {
                  value: _vm.email,
                  callback: function ($$v) {
                    _vm.email = $$v;
                  },
                  expression: "email"
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
            "rules": "required|phone",
            "name": "phone"
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
                  "placeholder": "Phone"
                },
                model: {
                  value: _vm.phone,
                  callback: function ($$v) {
                    _vm.phone = $$v;
                  },
                  expression: "phone"
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
            "name": "course"
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
                  "placeholder": "Select Your Course"
                },
                model: {
                  value: _vm.course,
                  callback: function ($$v) {
                    _vm.course = $$v;
                  },
                  expression: "course"
                }
              }, _vm._l(_vm.courseOptions, function (item) {
                return _c('el-option', {
                  key: item.id,
                  attrs: {
                    "label": item.name,
                    "value": item.name
                  }
                });
              }), 1), _vm._v(" "), _c('div', {
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
            "name": "location"
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
                  "placeholder": "Location"
                },
                model: {
                  value: _vm.location,
                  callback: function ($$v) {
                    _vm.location = $$v;
                  },
                  expression: "location"
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
            "name": "request_type"
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
                  "placeholder": "Select Your Request"
                },
                model: {
                  value: _vm.request_type,
                  callback: function ($$v) {
                    _vm.request_type = $$v;
                  },
                  expression: "request_type"
                }
              }, _vm._l(_vm.requestOptions, function (item) {
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
          staticClass: "col-12 mb-3"
        }, [_c('h3', {
          staticClass: "user-title"
        }, [_vm._v("Please give us your comfortable date & time to contact you")])]), _vm._v(" "), _c('div', {
          class: `${_vm.request_type === 'Visit Our Center' ? 'col-lg-4' : 'col-lg-6'} col-md-6`
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "date"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-date-picker', {
                staticClass: "w-100",
                attrs: {
                  "type": "date",
                  "placeholder": "Pick A Date"
                },
                model: {
                  value: _vm.date,
                  callback: function ($$v) {
                    _vm.date = $$v;
                  },
                  expression: "date"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          class: `${_vm.request_type === 'Visit Our Center' ? 'col-lg-4' : 'col-lg-6'} col-md-6`
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "time"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('el-time-picker', {
                staticClass: "w-100",
                attrs: {
                  "placeholder": "Pick A Time"
                },
                model: {
                  value: _vm.time,
                  callback: function ($$v) {
                    _vm.time = $$v;
                  },
                  expression: "time"
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _vm.request_type === 'Visit Our Center' ? _c('div', {
          staticClass: "col-lg-4 col-md-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": _vm.request_type === 'Visit Our Center' ? 'required|custom_message' : '',
            "name": "branch"
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
                  "placeholder": "Select Branch"
                },
                model: {
                  value: _vm.branch,
                  callback: function ($$v) {
                    _vm.branch = $$v;
                  },
                  expression: "branch"
                }
              }, _vm._l(_vm.branchOptions, function (item) {
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
        })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
          staticClass: "col-12 mb-3"
        }, [_vm.request_type === 'Home Visit' ? _c('h3', {
          staticClass: "user-title"
        }, [_vm._v("Please provide the address where you would like our executive to meet you")]) : _vm.request_type === 'Connect Online' ? _c('h3', {
          staticClass: "user-title"
        }, [_vm._v("Please provide us the details to connect online")]) : _c('h3', {
          staticClass: "user-title"
        }, [_vm._v("Please provide us the reason for contacting us")])]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12 col-md-12"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "detail"
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
                  "placeholder": _vm.request_type === 'Home Visit' ? 'Address' : 'Detail',
                  "type": "textarea",
                  "rows": 5
                },
                model: {
                  value: _vm.message,
                  callback: function ($$v) {
                    _vm.message = $$v;
                  },
                  expression: "message"
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
            "disabled": _vm.loading
          }
        }, [!_vm.loading ? [_vm._v("\n                                                            Submit\n                                                        ")] : _c('div', {
          staticClass: "spinner-border",
          attrs: {
            "role": "status"
          }
        })], 2)])])])];
      }
    }])
  })], 1)], 2)])])])], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contact-us.vue?vue&type=template&id=5fde1507&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(204);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/contact-us.vue?vue&type=script&lang=js&

/* harmony default export */ var contact_usvue_type_script_lang_js_ = ({
  name: "ContactPage",
  layout: "MainPageLayout",
  data() {
    return {
      requestOptions: [{
        value: 'Call Back',
        label: 'Call Back'
      }, {
        value: 'Home Visit',
        label: 'Home Visit'
      }, {
        value: 'Visit Our Center',
        label: 'Visit Our Center'
      }, {
        value: 'Connect Online',
        label: 'Connect Online'
      }],
      branchOptions: [{
        value: 'Vijaynagar',
        label: 'Vijaynagar'
      }, {
        value: 'Hebbal',
        label: 'Hebbal'
      }, {
        value: 'Kanakapura Road',
        label: 'Kanakapura Road'
      }],
      courseOptions: [],
      courseLoading: false,
      name: '',
      email: '',
      phone: '',
      course: '',
      location: '',
      date: '',
      time: '',
      message: '',
      request_type: '',
      branch: '',
      loading: false,
      seo: {
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
        meta_scripts: ''
      },
      maps: ['https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.00140800217!2d77.538494!3d12.971829!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x515d5069e0a4fce1!2sArjunaa%20Academy%20for%20Achievers(AAA)%20JEE%2C%20NEET%20-%20Vijayanagar!5e0!3m2!1sen!2sin!4v1586440325192!5m2!1sen!2sin', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.776319452084!2d77.48676211403486!3d12.922093090888328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ede984f1f27%3A0x7f696ad5a4030d9a!2sNational%20Public%20School%20Kengeri%2C%20Volagalahalli%2C%20Stage%20II%2C%20Kengeri%20Satellite%20Town%2C%20Bengaluru%2C%20Karnataka%20560060!5e0!3m2!1sen!2sin!4v1635591023182!5m2!1sen!2sin', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.454024789481!2d77.49268751403518!3d12.942773490874773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e950bc53455%3A0x35253b19d0cb96fa!2sVSS%20INTERNATIONAL%20PUBLIC%20SCHOOL!5e0!3m2!1sen!2sin!4v1635595187330!5m2!1sen!2sin', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2062541862324!2d77.55329661403454!3d12.894455090906535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fe6d9b96d51%3A0x650acbdfbeb1f043!2sVedantha%20College!5e0!3m2!1sen!2sin!4v1635595849883!5m2!1sen!2sin', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1679844355695!2d77.49364961403452!3d12.896917590904888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f16953a6b8b%3A0xfb95d40f56b02c16!2sBGS%20Public%20School!5e0!3m2!1sen!2sin!4v1635595752947!5m2!1sen!2sin', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8786673860386!2d77.54884191403657!3d13.043394290808772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d5aa542f7bf%3A0xec9cb3775d5f49e2!2sMother%20Teresa%20Public%20School!5e0!3m2!1sen!2sin!4v1635595631174!5m2!1sen!2sin', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.4942777478095!2d76.67923811402815!3d12.41675259122155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf771b52ccebd7%3A0x4ce0c7b1507fd22f!2sParivarthana%20School%20%26%20College!5e0!3m2!1sen!2sin!4v1635595569553!5m2!1sen!2sin', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.2380873874727!2d76.62523931402662!3d12.299746891299138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7ab9ffafcf89%3A0xbe58a7b82c389e52!2sVijaya%20Vittala%20Composite%20Pre%20University%20College!5e0!3m2!1sen!2sin!4v1635595501547!5m2!1sen!2sin', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.917965171257!2d77.45936461403389!3d12.848574890936664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae474832a8c011%3A0x5ff56b36d7a4247b!2sBGS%20International%20Residential%20School!5e0!3m2!1sen!2sin!4v1635595447580!5m2!1sen!2sin']
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
    await this.getCourse();
  },
  methods: {
    async formHandler() {
      this.loading = true;
      try {
        await this.$publicApi.post(api_routes["a" /* API_ROUTES */].contact, {
          name: this.name,
          email: this.email,
          phone: this.phone,
          course: this.course,
          location: this.location,
          date: this.date,
          time: this.time,
          branch: this.branch,
          detail: this.message,
          request_type: this.request_type,
          page_url: window.location.href
        });
        this.name = '';
        this.email = '';
        this.phone = '';
        this.message = '';
        this.course = '';
        this.location = '';
        this.date = '';
        this.time = '';
        this.branch = '';
        this.request_type = '';
        this.$refs.form.reset();
        this.$toast.success('Message Recieved Successfully.');
      } catch (err) {
        var _err$response, _err$response$data, _err$response$data$er, _err$response$data$er2, _err$response2, _err$response2$data, _err$response2$data$e, _err$response3, _err$response3$data, _err$response3$data$e, _err$response3$data$e2, _err$response4, _err$response4$data, _err$response4$data$e, _err$response5, _err$response5$data, _err$response5$data$e, _err$response5$data$e2, _err$response6, _err$response6$data, _err$response6$data$e, _err$response7, _err$response7$data, _err$response7$data$e, _err$response7$data$e2, _err$response8, _err$response8$data, _err$response8$data$e, _err$response9, _err$response9$data, _err$response9$data$e, _err$response9$data$e2, _err$response10, _err$response10$data, _err$response10$data$, _err$response11, _err$response11$data, _err$response11$data$, _err$response11$data$2, _err$response12, _err$response12$data, _err$response12$data$, _err$response13, _err$response13$data, _err$response13$data$, _err$response13$data$2, _err$response14, _err$response14$data, _err$response14$data$, _err$response15, _err$response15$data, _err$response15$data$, _err$response15$data$2, _err$response16, _err$response16$data, _err$response16$data$, _err$response17, _err$response17$data, _err$response17$data$, _err$response17$data$2, _err$response18, _err$response18$data, _err$response18$data$, _err$response19, _err$response19$data, _err$response19$data$, _err$response19$data$2, _err$response20, _err$response20$data, _err$response20$data$, _err$response21, _err$response21$data, _err$response22, _err$response22$data, _err$response23, _err$response23$data, _err$response24, _err$response24$data;
        this.$refs.form.setErrors({
          email: (err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : (_err$response$data$er = _err$response$data.errors) === null || _err$response$data$er === void 0 ? void 0 : (_err$response$data$er2 = _err$response$data$er.email) === null || _err$response$data$er2 === void 0 ? void 0 : _err$response$data$er2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : (_err$response2$data$e = _err$response2$data.errors) === null || _err$response2$data$e === void 0 ? void 0 : _err$response2$data$e.email[0]),
          name: (err === null || err === void 0 ? void 0 : (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : (_err$response3$data = _err$response3.data) === null || _err$response3$data === void 0 ? void 0 : (_err$response3$data$e = _err$response3$data.errors) === null || _err$response3$data$e === void 0 ? void 0 : (_err$response3$data$e2 = _err$response3$data$e.name) === null || _err$response3$data$e2 === void 0 ? void 0 : _err$response3$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : (_err$response4$data = _err$response4.data) === null || _err$response4$data === void 0 ? void 0 : (_err$response4$data$e = _err$response4$data.errors) === null || _err$response4$data$e === void 0 ? void 0 : _err$response4$data$e.name[0]),
          phone: (err === null || err === void 0 ? void 0 : (_err$response5 = err.response) === null || _err$response5 === void 0 ? void 0 : (_err$response5$data = _err$response5.data) === null || _err$response5$data === void 0 ? void 0 : (_err$response5$data$e = _err$response5$data.errors) === null || _err$response5$data$e === void 0 ? void 0 : (_err$response5$data$e2 = _err$response5$data$e.phone) === null || _err$response5$data$e2 === void 0 ? void 0 : _err$response5$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response6 = err.response) === null || _err$response6 === void 0 ? void 0 : (_err$response6$data = _err$response6.data) === null || _err$response6$data === void 0 ? void 0 : (_err$response6$data$e = _err$response6$data.errors) === null || _err$response6$data$e === void 0 ? void 0 : _err$response6$data$e.phone[0]),
          course: (err === null || err === void 0 ? void 0 : (_err$response7 = err.response) === null || _err$response7 === void 0 ? void 0 : (_err$response7$data = _err$response7.data) === null || _err$response7$data === void 0 ? void 0 : (_err$response7$data$e = _err$response7$data.errors) === null || _err$response7$data$e === void 0 ? void 0 : (_err$response7$data$e2 = _err$response7$data$e.course) === null || _err$response7$data$e2 === void 0 ? void 0 : _err$response7$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response8 = err.response) === null || _err$response8 === void 0 ? void 0 : (_err$response8$data = _err$response8.data) === null || _err$response8$data === void 0 ? void 0 : (_err$response8$data$e = _err$response8$data.errors) === null || _err$response8$data$e === void 0 ? void 0 : _err$response8$data$e.course[0]),
          location: (err === null || err === void 0 ? void 0 : (_err$response9 = err.response) === null || _err$response9 === void 0 ? void 0 : (_err$response9$data = _err$response9.data) === null || _err$response9$data === void 0 ? void 0 : (_err$response9$data$e = _err$response9$data.errors) === null || _err$response9$data$e === void 0 ? void 0 : (_err$response9$data$e2 = _err$response9$data$e.location) === null || _err$response9$data$e2 === void 0 ? void 0 : _err$response9$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response10 = err.response) === null || _err$response10 === void 0 ? void 0 : (_err$response10$data = _err$response10.data) === null || _err$response10$data === void 0 ? void 0 : (_err$response10$data$ = _err$response10$data.errors) === null || _err$response10$data$ === void 0 ? void 0 : _err$response10$data$.location[0]),
          date: (err === null || err === void 0 ? void 0 : (_err$response11 = err.response) === null || _err$response11 === void 0 ? void 0 : (_err$response11$data = _err$response11.data) === null || _err$response11$data === void 0 ? void 0 : (_err$response11$data$ = _err$response11$data.errors) === null || _err$response11$data$ === void 0 ? void 0 : (_err$response11$data$2 = _err$response11$data$.date) === null || _err$response11$data$2 === void 0 ? void 0 : _err$response11$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response12 = err.response) === null || _err$response12 === void 0 ? void 0 : (_err$response12$data = _err$response12.data) === null || _err$response12$data === void 0 ? void 0 : (_err$response12$data$ = _err$response12$data.errors) === null || _err$response12$data$ === void 0 ? void 0 : _err$response12$data$.date[0]),
          time: (err === null || err === void 0 ? void 0 : (_err$response13 = err.response) === null || _err$response13 === void 0 ? void 0 : (_err$response13$data = _err$response13.data) === null || _err$response13$data === void 0 ? void 0 : (_err$response13$data$ = _err$response13$data.errors) === null || _err$response13$data$ === void 0 ? void 0 : (_err$response13$data$2 = _err$response13$data$.time) === null || _err$response13$data$2 === void 0 ? void 0 : _err$response13$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response14 = err.response) === null || _err$response14 === void 0 ? void 0 : (_err$response14$data = _err$response14.data) === null || _err$response14$data === void 0 ? void 0 : (_err$response14$data$ = _err$response14$data.errors) === null || _err$response14$data$ === void 0 ? void 0 : _err$response14$data$.time[0]),
          branch: (err === null || err === void 0 ? void 0 : (_err$response15 = err.response) === null || _err$response15 === void 0 ? void 0 : (_err$response15$data = _err$response15.data) === null || _err$response15$data === void 0 ? void 0 : (_err$response15$data$ = _err$response15$data.errors) === null || _err$response15$data$ === void 0 ? void 0 : (_err$response15$data$2 = _err$response15$data$.branch) === null || _err$response15$data$2 === void 0 ? void 0 : _err$response15$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response16 = err.response) === null || _err$response16 === void 0 ? void 0 : (_err$response16$data = _err$response16.data) === null || _err$response16$data === void 0 ? void 0 : (_err$response16$data$ = _err$response16$data.errors) === null || _err$response16$data$ === void 0 ? void 0 : _err$response16$data$.branch[0]),
          message: (err === null || err === void 0 ? void 0 : (_err$response17 = err.response) === null || _err$response17 === void 0 ? void 0 : (_err$response17$data = _err$response17.data) === null || _err$response17$data === void 0 ? void 0 : (_err$response17$data$ = _err$response17$data.errors) === null || _err$response17$data$ === void 0 ? void 0 : (_err$response17$data$2 = _err$response17$data$.message) === null || _err$response17$data$2 === void 0 ? void 0 : _err$response17$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response18 = err.response) === null || _err$response18 === void 0 ? void 0 : (_err$response18$data = _err$response18.data) === null || _err$response18$data === void 0 ? void 0 : (_err$response18$data$ = _err$response18$data.errors) === null || _err$response18$data$ === void 0 ? void 0 : _err$response18$data$.message[0]),
          request_type: (err === null || err === void 0 ? void 0 : (_err$response19 = err.response) === null || _err$response19 === void 0 ? void 0 : (_err$response19$data = _err$response19.data) === null || _err$response19$data === void 0 ? void 0 : (_err$response19$data$ = _err$response19$data.errors) === null || _err$response19$data$ === void 0 ? void 0 : (_err$response19$data$2 = _err$response19$data$.request_type) === null || _err$response19$data$2 === void 0 ? void 0 : _err$response19$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response20 = err.response) === null || _err$response20 === void 0 ? void 0 : (_err$response20$data = _err$response20.data) === null || _err$response20$data === void 0 ? void 0 : (_err$response20$data$ = _err$response20$data.errors) === null || _err$response20$data$ === void 0 ? void 0 : _err$response20$data$.request_type[0])
        });
        if (err !== null && err !== void 0 && (_err$response21 = err.response) !== null && _err$response21 !== void 0 && (_err$response21$data = _err$response21.data) !== null && _err$response21$data !== void 0 && _err$response21$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response22 = err.response) === null || _err$response22 === void 0 ? void 0 : (_err$response22$data = _err$response22.data) === null || _err$response22$data === void 0 ? void 0 : _err$response22$data.message);
        if (err !== null && err !== void 0 && (_err$response23 = err.response) !== null && _err$response23 !== void 0 && (_err$response23$data = _err$response23.data) !== null && _err$response23$data !== void 0 && _err$response23$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response24 = err.response) === null || _err$response24 === void 0 ? void 0 : (_err$response24$data = _err$response24.data) === null || _err$response24$data === void 0 ? void 0 : _err$response24$data.error);
      } finally {
        this.loading = false;
      }
    },
    async getSeo() {
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/contact-page`); // eslint-disable-line
        this.seo = response.data.seo;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      }
    },
    async getCourse() {
      this.courseLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].course); // eslint-disable-line
        this.courseOptions = response.data.course;
      } catch (err) {
        var _err$response25, _err$response25$data, _err$response26, _err$response26$data, _err$response27, _err$response27$data, _err$response28, _err$response28$data;
        // console.log(err.response);// eslint-disable-line
        if (err !== null && err !== void 0 && (_err$response25 = err.response) !== null && _err$response25 !== void 0 && (_err$response25$data = _err$response25.data) !== null && _err$response25$data !== void 0 && _err$response25$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response26 = err.response) === null || _err$response26 === void 0 ? void 0 : (_err$response26$data = _err$response26.data) === null || _err$response26$data === void 0 ? void 0 : _err$response26$data.message);
        if (err !== null && err !== void 0 && (_err$response27 = err.response) !== null && _err$response27 !== void 0 && (_err$response27$data = _err$response27.data) !== null && _err$response27$data !== void 0 && _err$response27$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response28 = err.response) === null || _err$response28 === void 0 ? void 0 : (_err$response28$data = _err$response28.data) === null || _err$response28$data === void 0 ? void 0 : _err$response28$data.error);
      } finally {
        this.courseLoading = false;
      }
    }
  },
  components: {
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 251))
  }
});
// CONCATENATED MODULE: ./pages/contact-us.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contact_usvue_type_script_lang_js_ = (contact_usvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/contact-us.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contact_usvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5b5f9e9e"
  
)

/* harmony default export */ var contact_us = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact-us.js.map