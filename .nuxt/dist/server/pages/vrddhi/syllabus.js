exports.ids = [45];
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

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/vrddhi/syllabus.vue?vue&type=template&id=252f4239&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Syllabus",
      "pages": [{
        link: '/vrddhi',
        name: 'Vrddhi'
      }, {
        link: '',
        name: 'Syllabus'
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
  }, [])])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-7\">", "</div>", [_vm._ssrNode("<div class=\"contact-widget-area pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"register-form\">", "</div>", [_vm._ssrNode("<div class=\"top-header\"><h3>\n                                        Vrddhi Syllabus\n                                    </h3></div> "), _vm._ssrNode("<div class=\"contact-form\">", "</div>", [_c('ValidationObserver', {
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
                  "placeholder": "Whatsapp Number"
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
            "rules": "required|email",
            "name": "father_email"
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
                  "placeholder": "Father's Email"
                },
                model: {
                  value: _vm.father_email,
                  callback: function ($$v) {
                    _vm.father_email = $$v;
                  },
                  expression: "father_email"
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
            "name": "mother_email"
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
                  "placeholder": "Mother's Email"
                },
                model: {
                  value: _vm.mother_email,
                  callback: function ($$v) {
                    _vm.mother_email = $$v;
                  },
                  expression: "mother_email"
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
            "name": "standard"
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
                  "placeholder": "Choose Your Class"
                },
                model: {
                  value: _vm.standard,
                  callback: function ($$v) {
                    _vm.standard = $$v;
                  },
                  expression: "standard"
                }
              }, _vm._l(_vm.standardOptions, function (item) {
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
            "name": "syllabus"
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
                  "placeholder": "Select Your Syllabus"
                },
                model: {
                  value: _vm.syllabus,
                  callback: function ($$v) {
                    _vm.syllabus = $$v;
                  },
                  expression: "syllabus"
                }
              }, _vm._l(_vm.syllabusOptions, function (item) {
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
            "name": "card"
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
              }, [_vm._v("Student's ID Cards * "), _c('br'), _vm._v(" "), _c('code', [_vm._v("(Only PDF | JPG | PNG files are allowed. Max-size 512kb)")])]), _vm._v(" "), _c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.card,
                  expression: "card"
                }],
                attrs: {
                  "type": "hidden"
                },
                domProps: {
                  "value": _vm.card
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.card = $event.target.value;
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

// CONCATENATED MODULE: ./pages/vrddhi/syllabus.vue?vue&type=template&id=252f4239&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(204);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/vrddhi/syllabus.vue?vue&type=script&lang=js&

/* harmony default export */ var syllabusvue_type_script_lang_js_ = ({
  name: "VrddhiSyllabusPage",
  layout: "MainPageLayout",
  data() {
    return {
      standardOptions: [{
        value: '8th',
        label: '8th'
      }, {
        value: '9th',
        label: '9th'
      }, {
        value: '10th',
        label: '10th'
      }],
      syllabusOptions: [{
        value: 'ICSE',
        label: 'ICSE'
      }, {
        value: 'CBSE',
        label: 'CBSE'
      }, {
        value: 'State',
        label: 'State'
      }],
      name: '',
      school_name: '',
      phone: '',
      father_name: '',
      father_email: '',
      father_phone: '',
      mother_name: '',
      mother_email: '',
      mother_phone: '',
      standard: '',
      syllabus: '',
      card: [],
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
        formData.append('phone', this.phone);
        formData.append('father_name', this.father_name);
        formData.append('father_email', this.father_email);
        formData.append('father_phone', this.father_phone);
        formData.append('mother_name', this.mother_name);
        formData.append('mother_email', this.mother_email);
        formData.append('mother_phone', this.mother_phone);
        formData.append('class', this.standard);
        formData.append('syllabus', this.syllabus);
        formData.append('card', this.card);
        const response = await this.$publicApi.post(api_routes["a" /* API_ROUTES */].vrddhi, formData);
        this.name = '';
        this.school_name = '';
        this.phone = '';
        this.father_name = '';
        this.father_email = '';
        this.father_phone = '';
        this.mother_name = '';
        this.mother_email = '';
        this.mother_phone = '';
        this.standard = '';
        this.syllabus = '';
        this.card = [];
        this.$refs.form.reset();
        this.$toast.success('Admission Recieved Successfully.');
        window.open(response.data.file_link, '_blank');
      } catch (err) {
        var _err$response, _err$response$data, _err$response$data$er, _err$response$data$er2, _err$response2, _err$response2$data, _err$response2$data$e, _err$response3, _err$response3$data, _err$response3$data$e, _err$response3$data$e2, _err$response4, _err$response4$data, _err$response4$data$e, _err$response5, _err$response5$data, _err$response5$data$e, _err$response5$data$e2, _err$response6, _err$response6$data, _err$response6$data$e, _err$response7, _err$response7$data, _err$response7$data$e, _err$response7$data$e2, _err$response8, _err$response8$data, _err$response8$data$e, _err$response9, _err$response9$data, _err$response9$data$e, _err$response9$data$e2, _err$response10, _err$response10$data, _err$response10$data$, _err$response11, _err$response11$data, _err$response11$data$, _err$response11$data$2, _err$response12, _err$response12$data, _err$response12$data$, _err$response13, _err$response13$data, _err$response13$data$, _err$response13$data$2, _err$response14, _err$response14$data, _err$response14$data$, _err$response15, _err$response15$data, _err$response15$data$, _err$response15$data$2, _err$response16, _err$response16$data, _err$response16$data$, _err$response17, _err$response17$data, _err$response17$data$, _err$response17$data$2, _err$response18, _err$response18$data, _err$response18$data$, _err$response19, _err$response19$data, _err$response19$data$, _err$response19$data$2, _err$response20, _err$response20$data, _err$response20$data$, _err$response21, _err$response21$data, _err$response21$data$, _err$response21$data$2, _err$response22, _err$response22$data, _err$response22$data$, _err$response23, _err$response23$data, _err$response23$data$, _err$response23$data$2, _err$response24, _err$response24$data, _err$response24$data$, _err$response25, _err$response25$data, _err$response26, _err$response26$data, _err$response27, _err$response27$data, _err$response28, _err$response28$data;
        this.$refs.form.setErrors({
          school_name: (err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : (_err$response$data$er = _err$response$data.errors) === null || _err$response$data$er === void 0 ? void 0 : (_err$response$data$er2 = _err$response$data$er.school_name) === null || _err$response$data$er2 === void 0 ? void 0 : _err$response$data$er2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : (_err$response2$data$e = _err$response2$data.errors) === null || _err$response2$data$e === void 0 ? void 0 : _err$response2$data$e.school_name[0]),
          name: (err === null || err === void 0 ? void 0 : (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : (_err$response3$data = _err$response3.data) === null || _err$response3$data === void 0 ? void 0 : (_err$response3$data$e = _err$response3$data.errors) === null || _err$response3$data$e === void 0 ? void 0 : (_err$response3$data$e2 = _err$response3$data$e.name) === null || _err$response3$data$e2 === void 0 ? void 0 : _err$response3$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : (_err$response4$data = _err$response4.data) === null || _err$response4$data === void 0 ? void 0 : (_err$response4$data$e = _err$response4$data.errors) === null || _err$response4$data$e === void 0 ? void 0 : _err$response4$data$e.name[0]),
          phone: (err === null || err === void 0 ? void 0 : (_err$response5 = err.response) === null || _err$response5 === void 0 ? void 0 : (_err$response5$data = _err$response5.data) === null || _err$response5$data === void 0 ? void 0 : (_err$response5$data$e = _err$response5$data.errors) === null || _err$response5$data$e === void 0 ? void 0 : (_err$response5$data$e2 = _err$response5$data$e.phone) === null || _err$response5$data$e2 === void 0 ? void 0 : _err$response5$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response6 = err.response) === null || _err$response6 === void 0 ? void 0 : (_err$response6$data = _err$response6.data) === null || _err$response6$data === void 0 ? void 0 : (_err$response6$data$e = _err$response6$data.errors) === null || _err$response6$data$e === void 0 ? void 0 : _err$response6$data$e.phone[0]),
          father_name: (err === null || err === void 0 ? void 0 : (_err$response7 = err.response) === null || _err$response7 === void 0 ? void 0 : (_err$response7$data = _err$response7.data) === null || _err$response7$data === void 0 ? void 0 : (_err$response7$data$e = _err$response7$data.errors) === null || _err$response7$data$e === void 0 ? void 0 : (_err$response7$data$e2 = _err$response7$data$e.father_name) === null || _err$response7$data$e2 === void 0 ? void 0 : _err$response7$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response8 = err.response) === null || _err$response8 === void 0 ? void 0 : (_err$response8$data = _err$response8.data) === null || _err$response8$data === void 0 ? void 0 : (_err$response8$data$e = _err$response8$data.errors) === null || _err$response8$data$e === void 0 ? void 0 : _err$response8$data$e.father_name[0]),
          father_phone: (err === null || err === void 0 ? void 0 : (_err$response9 = err.response) === null || _err$response9 === void 0 ? void 0 : (_err$response9$data = _err$response9.data) === null || _err$response9$data === void 0 ? void 0 : (_err$response9$data$e = _err$response9$data.errors) === null || _err$response9$data$e === void 0 ? void 0 : (_err$response9$data$e2 = _err$response9$data$e.father_phone) === null || _err$response9$data$e2 === void 0 ? void 0 : _err$response9$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response10 = err.response) === null || _err$response10 === void 0 ? void 0 : (_err$response10$data = _err$response10.data) === null || _err$response10$data === void 0 ? void 0 : (_err$response10$data$ = _err$response10$data.errors) === null || _err$response10$data$ === void 0 ? void 0 : _err$response10$data$.father_name[0]),
          father_email: (err === null || err === void 0 ? void 0 : (_err$response11 = err.response) === null || _err$response11 === void 0 ? void 0 : (_err$response11$data = _err$response11.data) === null || _err$response11$data === void 0 ? void 0 : (_err$response11$data$ = _err$response11$data.errors) === null || _err$response11$data$ === void 0 ? void 0 : (_err$response11$data$2 = _err$response11$data$.father_email) === null || _err$response11$data$2 === void 0 ? void 0 : _err$response11$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response12 = err.response) === null || _err$response12 === void 0 ? void 0 : (_err$response12$data = _err$response12.data) === null || _err$response12$data === void 0 ? void 0 : (_err$response12$data$ = _err$response12$data.errors) === null || _err$response12$data$ === void 0 ? void 0 : _err$response12$data$.father_name[0]),
          mother_name: (err === null || err === void 0 ? void 0 : (_err$response13 = err.response) === null || _err$response13 === void 0 ? void 0 : (_err$response13$data = _err$response13.data) === null || _err$response13$data === void 0 ? void 0 : (_err$response13$data$ = _err$response13$data.errors) === null || _err$response13$data$ === void 0 ? void 0 : (_err$response13$data$2 = _err$response13$data$.mother_name) === null || _err$response13$data$2 === void 0 ? void 0 : _err$response13$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response14 = err.response) === null || _err$response14 === void 0 ? void 0 : (_err$response14$data = _err$response14.data) === null || _err$response14$data === void 0 ? void 0 : (_err$response14$data$ = _err$response14$data.errors) === null || _err$response14$data$ === void 0 ? void 0 : _err$response14$data$.mother_name[0]),
          mother_phone: (err === null || err === void 0 ? void 0 : (_err$response15 = err.response) === null || _err$response15 === void 0 ? void 0 : (_err$response15$data = _err$response15.data) === null || _err$response15$data === void 0 ? void 0 : (_err$response15$data$ = _err$response15$data.errors) === null || _err$response15$data$ === void 0 ? void 0 : (_err$response15$data$2 = _err$response15$data$.mother_phone) === null || _err$response15$data$2 === void 0 ? void 0 : _err$response15$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response16 = err.response) === null || _err$response16 === void 0 ? void 0 : (_err$response16$data = _err$response16.data) === null || _err$response16$data === void 0 ? void 0 : (_err$response16$data$ = _err$response16$data.errors) === null || _err$response16$data$ === void 0 ? void 0 : _err$response16$data$.mother_name[0]),
          mother_email: (err === null || err === void 0 ? void 0 : (_err$response17 = err.response) === null || _err$response17 === void 0 ? void 0 : (_err$response17$data = _err$response17.data) === null || _err$response17$data === void 0 ? void 0 : (_err$response17$data$ = _err$response17$data.errors) === null || _err$response17$data$ === void 0 ? void 0 : (_err$response17$data$2 = _err$response17$data$.mother_email) === null || _err$response17$data$2 === void 0 ? void 0 : _err$response17$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response18 = err.response) === null || _err$response18 === void 0 ? void 0 : (_err$response18$data = _err$response18.data) === null || _err$response18$data === void 0 ? void 0 : (_err$response18$data$ = _err$response18$data.errors) === null || _err$response18$data$ === void 0 ? void 0 : _err$response18$data$.mother_name[0]),
          standard: (err === null || err === void 0 ? void 0 : (_err$response19 = err.response) === null || _err$response19 === void 0 ? void 0 : (_err$response19$data = _err$response19.data) === null || _err$response19$data === void 0 ? void 0 : (_err$response19$data$ = _err$response19$data.errors) === null || _err$response19$data$ === void 0 ? void 0 : (_err$response19$data$2 = _err$response19$data$.class) === null || _err$response19$data$2 === void 0 ? void 0 : _err$response19$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response20 = err.response) === null || _err$response20 === void 0 ? void 0 : (_err$response20$data = _err$response20.data) === null || _err$response20$data === void 0 ? void 0 : (_err$response20$data$ = _err$response20$data.errors) === null || _err$response20$data$ === void 0 ? void 0 : _err$response20$data$.class[0]),
          syllabus: (err === null || err === void 0 ? void 0 : (_err$response21 = err.response) === null || _err$response21 === void 0 ? void 0 : (_err$response21$data = _err$response21.data) === null || _err$response21$data === void 0 ? void 0 : (_err$response21$data$ = _err$response21$data.errors) === null || _err$response21$data$ === void 0 ? void 0 : (_err$response21$data$2 = _err$response21$data$.syllabus) === null || _err$response21$data$2 === void 0 ? void 0 : _err$response21$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response22 = err.response) === null || _err$response22 === void 0 ? void 0 : (_err$response22$data = _err$response22.data) === null || _err$response22$data === void 0 ? void 0 : (_err$response22$data$ = _err$response22$data.errors) === null || _err$response22$data$ === void 0 ? void 0 : _err$response22$data$.syllabus[0]),
          card: (err === null || err === void 0 ? void 0 : (_err$response23 = err.response) === null || _err$response23 === void 0 ? void 0 : (_err$response23$data = _err$response23.data) === null || _err$response23$data === void 0 ? void 0 : (_err$response23$data$ = _err$response23$data.errors) === null || _err$response23$data$ === void 0 ? void 0 : (_err$response23$data$2 = _err$response23$data$.card) === null || _err$response23$data$2 === void 0 ? void 0 : _err$response23$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response24 = err.response) === null || _err$response24 === void 0 ? void 0 : (_err$response24$data = _err$response24.data) === null || _err$response24$data === void 0 ? void 0 : (_err$response24$data$ = _err$response24$data.errors) === null || _err$response24$data$ === void 0 ? void 0 : _err$response24$data$.card[0])
        });
        if (err !== null && err !== void 0 && (_err$response25 = err.response) !== null && _err$response25 !== void 0 && (_err$response25$data = _err$response25.data) !== null && _err$response25$data !== void 0 && _err$response25$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response26 = err.response) === null || _err$response26 === void 0 ? void 0 : (_err$response26$data = _err$response26.data) === null || _err$response26$data === void 0 ? void 0 : _err$response26$data.message);
        if (err !== null && err !== void 0 && (_err$response27 = err.response) !== null && _err$response27 !== void 0 && (_err$response27$data = _err$response27.data) !== null && _err$response27$data !== void 0 && _err$response27$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response28 = err.response) === null || _err$response28 === void 0 ? void 0 : (_err$response28$data = _err$response28.data) === null || _err$response28$data === void 0 ? void 0 : _err$response28$data.error);
      } finally {
        this.loading = false;
      }
    },
    handleFileChnage(event) {
      this.card = event.target.files[0];
    },
    async getSeo() {
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/vrddhi-syllabus-page`); // eslint-disable-line
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
// CONCATENATED MODULE: ./pages/vrddhi/syllabus.vue?vue&type=script&lang=js&
 /* harmony default export */ var vrddhi_syllabusvue_type_script_lang_js_ = (syllabusvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/vrddhi/syllabus.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  vrddhi_syllabusvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "56b45921"
  
)

/* harmony default export */ var syllabus = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=syllabus.js.map