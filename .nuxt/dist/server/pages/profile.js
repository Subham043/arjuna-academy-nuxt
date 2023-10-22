exports.ids = [42];
exports.modules = {

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/profile.vue?vue&type=template&id=074f4e16&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Profile",
      "pages": [{
        link: '',
        name: 'Profile'
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"user-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center justify-content-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"user-all-form\">", "</div>", [_vm._ssrNode("<div class=\"contact-form\">", "</div>", [_vm._ssrNode("<h3 class=\"user-title\">Profile</h3> "), _c('ValidationObserver', {
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
          staticClass: "col-lg-12"
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
              return [_c('div', {
                staticClass: "form-group"
              }, [_c('input', {
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
                  "data-error": "Name*",
                  "placeholder": "Name*"
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
              })]), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12"
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
              return [_c('div', {
                staticClass: "form-group"
              }, [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }],
                staticClass: "form-control",
                attrs: {
                  "type": "text",
                  "name": "email",
                  "id": "email",
                  "data-error": "Email Address*",
                  "placeholder": "Email Address*"
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
              })]), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12"
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
              return [_c('div', {
                staticClass: "form-group"
              }, [_c('input', {
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
                  "data-error": "Phone Number*",
                  "placeholder": "Phone Number*"
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
        }, [!_vm.loading ? [_vm._v("\n                                                    Update Now\n                                                ")] : _c('div', {
          staticClass: "spinner-border",
          attrs: {
            "role": "status"
          }
        })], 2)])])])];
      }
    }])
  })], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"user-all-form\">", "</div>", [_vm._ssrNode("<div class=\"contact-form\">", "</div>", [_vm._ssrNode("<h3 class=\"user-title\">Password</h3> "), _c('ValidationObserver', {
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
              return handleSubmit(_vm.passwordFormHandler);
            }
          }
        }, [_c('div', {
          staticClass: "row"
        }, [_c('div', {
          staticClass: "col-12"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required",
            "name": "old_password"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('div', {
                staticClass: "form-group"
              }, [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.old_password,
                  expression: "old_password"
                }],
                staticClass: "form-control",
                attrs: {
                  "type": "password",
                  "name": "old_password",
                  "placeholder": "Current Password*"
                },
                domProps: {
                  "value": _vm.old_password
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.old_password = $event.target.value;
                  }
                }
              })]), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c('div', {
          staticClass: "col-12"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required",
            "vid": "password",
            "name": "password"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('div', {
                staticClass: "form-group"
              }, [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password,
                  expression: "password"
                }],
                staticClass: "form-control",
                attrs: {
                  "type": "password",
                  "name": "password",
                  "placeholder": "New Password*"
                },
                domProps: {
                  "value": _vm.password
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.password = $event.target.value;
                  }
                }
              })]), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c('div', {
          staticClass: "col-12"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|confirmed:password",
            "name": "confirm_password"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('div', {
                staticClass: "form-group"
              }, [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.confirm_password,
                  expression: "confirm_password"
                }],
                staticClass: "form-control",
                attrs: {
                  "type": "password",
                  "name": "password",
                  "placeholder": "Confirm Password*"
                },
                domProps: {
                  "value": _vm.confirm_password
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.confirm_password = $event.target.value;
                  }
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
        }, [!_vm.loading ? [_vm._v("\n                                                    Update Now\n                                                ")] : _c('div', {
          staticClass: "spinner-border",
          attrs: {
            "role": "status"
          }
        })], 2)])])])];
      }
    }])
  })], 2)])])], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/profile.vue?vue&type=template&id=074f4e16&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/profile.vue?vue&type=script&lang=js&

/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  name: "SignupPage",
  layout: "MainPageLayout",
  middleware: ['auth'],
  data() {
    return {
      email: this.$auth.user.email,
      name: this.$auth.user.name,
      phone: this.$auth.user.phone,
      old_password: '',
      password: '',
      confirm_password: '',
      loading: false
    };
  },
  head() {
    return {
      title: 'Arjunaa Academy - Profile',
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Arjunaa Academy - Profile'
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }, {
        hid: 'description',
        name: 'description',
        content: 'Arjunaa Academy - Profile'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: 'Arjunaa Academy - Profile'
      }]
    };
  },
  methods: {
    async formHandler() {
      this.loading = true;
      try {
        await this.$privateApi.post(api_routes["a" /* API_ROUTES */].profile_update, {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          confirm_password: this.confirm_password
        });
        this.$toast.success('Profile Updated successfully');
        this.$auth.setUser({
          email: this.email,
          name: this.name,
          phone: this.phone
        });
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
        this.loading = false;
      }
    },
    async passwordFormHandler() {
      this.loading = true;
      try {
        const response = await this.$privateApi.post(api_routes["a" /* API_ROUTES */].password_update, {
          old_password: this.old_password,
          password: this.password,
          confirm_password: this.confirm_password
        });
        this.$toast.success('Password Updated successfully');
        this.old_password = '';
        this.password = '';
        this.confirm_password = '';
        this.$refs.form.reset();
      } catch (err) {
        var _err$response11, _err$response11$data, _err$response11$data$, _err$response11$data$2, _err$response12, _err$response12$data, _err$response12$data$, _err$response13, _err$response13$data, _err$response13$data$, _err$response13$data$2, _err$response14, _err$response14$data, _err$response14$data$, _err$response15, _err$response15$data, _err$response15$data$, _err$response15$data$2, _err$response16, _err$response16$data, _err$response16$data$, _err$response17, _err$response17$data, _err$response18, _err$response18$data, _err$response19, _err$response19$data, _err$response20, _err$response20$data;
        this.$refs.form.setErrors({
          old_password: (err === null || err === void 0 ? void 0 : (_err$response11 = err.response) === null || _err$response11 === void 0 ? void 0 : (_err$response11$data = _err$response11.data) === null || _err$response11$data === void 0 ? void 0 : (_err$response11$data$ = _err$response11$data.errors) === null || _err$response11$data$ === void 0 ? void 0 : (_err$response11$data$2 = _err$response11$data$.old_password) === null || _err$response11$data$2 === void 0 ? void 0 : _err$response11$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response12 = err.response) === null || _err$response12 === void 0 ? void 0 : (_err$response12$data = _err$response12.data) === null || _err$response12$data === void 0 ? void 0 : (_err$response12$data$ = _err$response12$data.errors) === null || _err$response12$data$ === void 0 ? void 0 : _err$response12$data$.old_password[0]),
          password: (err === null || err === void 0 ? void 0 : (_err$response13 = err.response) === null || _err$response13 === void 0 ? void 0 : (_err$response13$data = _err$response13.data) === null || _err$response13$data === void 0 ? void 0 : (_err$response13$data$ = _err$response13$data.errors) === null || _err$response13$data$ === void 0 ? void 0 : (_err$response13$data$2 = _err$response13$data$.password) === null || _err$response13$data$2 === void 0 ? void 0 : _err$response13$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response14 = err.response) === null || _err$response14 === void 0 ? void 0 : (_err$response14$data = _err$response14.data) === null || _err$response14$data === void 0 ? void 0 : (_err$response14$data$ = _err$response14$data.errors) === null || _err$response14$data$ === void 0 ? void 0 : _err$response14$data$.password[0]),
          confirm_password: (err === null || err === void 0 ? void 0 : (_err$response15 = err.response) === null || _err$response15 === void 0 ? void 0 : (_err$response15$data = _err$response15.data) === null || _err$response15$data === void 0 ? void 0 : (_err$response15$data$ = _err$response15$data.errors) === null || _err$response15$data$ === void 0 ? void 0 : (_err$response15$data$2 = _err$response15$data$.confirm_password) === null || _err$response15$data$2 === void 0 ? void 0 : _err$response15$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response16 = err.response) === null || _err$response16 === void 0 ? void 0 : (_err$response16$data = _err$response16.data) === null || _err$response16$data === void 0 ? void 0 : (_err$response16$data$ = _err$response16$data.errors) === null || _err$response16$data$ === void 0 ? void 0 : _err$response16$data$.confirm_password[0])
        });
        if (err !== null && err !== void 0 && (_err$response17 = err.response) !== null && _err$response17 !== void 0 && (_err$response17$data = _err$response17.data) !== null && _err$response17$data !== void 0 && _err$response17$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response18 = err.response) === null || _err$response18 === void 0 ? void 0 : (_err$response18$data = _err$response18.data) === null || _err$response18$data === void 0 ? void 0 : _err$response18$data.message);
        if (err !== null && err !== void 0 && (_err$response19 = err.response) !== null && _err$response19 !== void 0 && (_err$response19$data = _err$response19.data) !== null && _err$response19$data !== void 0 && _err$response19$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response20 = err.response) === null || _err$response20 === void 0 ? void 0 : (_err$response20$data = _err$response20.data) === null || _err$response20$data === void 0 ? void 0 : _err$response20$data.error);
      } finally {
        this.loading = false;
      }
    }
  },
  components: {
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 142))
  }
});
// CONCATENATED MODULE: ./pages/profile.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/profile.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "349fd253"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
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

/***/ })

};;
//# sourceMappingURL=profile.js.map