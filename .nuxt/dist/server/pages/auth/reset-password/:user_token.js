exports.ids = [26];
exports.modules = {

/***/ 206:
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

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/auth/reset-password/:user_token.vue?vue&type=template&id=750e3327&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Reset Password",
      "pages": [{
        link: '',
        name: 'Reset Password'
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"user-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center justify-content-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-5\">", "</div>", [_vm._ssrNode("<div class=\"user-all-form\">", "</div>", [_vm._ssrNode("<div class=\"register-form\">", "</div>", [_vm._ssrNode("<div class=\"top-header\"><h3>Reset Password</h3></div> "), _vm._ssrNode("<div class=\"contact-form\">", "</div>", [_vm._ssrNode("<h3 class=\"user-title\">Reset Password</h3> "), _c('ValidationObserver', {
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
                  "type": "email",
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
                  "placeholder": "Password*"
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
            "name": "password_confirmation"
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
                  value: _vm.password_confirmation,
                  expression: "password_confirmation"
                }],
                staticClass: "form-control",
                attrs: {
                  "type": "password",
                  "name": "password_confirmation",
                  "placeholder": "Confirm Password*"
                },
                domProps: {
                  "value": _vm.password_confirmation
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.password_confirmation = $event.target.value;
                  }
                }
              })]), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12 col-md-12 text-center"
        }, [_c('button', {
          staticClass: "default-btn",
          attrs: {
            "type": "submit",
            "disabled": _vm.loading
          }
        }, [!_vm.loading ? [_vm._v("\n                                                        Reset Password\n                                                    ")] : _c('div', {
          staticClass: "spinner-border",
          attrs: {
            "role": "status"
          }
        })], 2)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12 mt-3 text-center"
        }, [_c('label', {
          attrs: {
            "for": "chb1"
          }
        }, [_vm._v("\n                                                    Remember your password?\n                                                    "), _c('NuxtLink', {
          staticClass: "forget",
          attrs: {
            "to": "/auth/sign-in"
          }
        }, [_vm._v("Login")])], 1)])])])];
      }
    }])
  })], 2)], 2)])])])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/auth/reset-password/:user_token.vue?vue&type=template&id=750e3327&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/auth/reset-password/:user_token.vue?vue&type=script&lang=js&

/* harmony default export */ var _user_tokenvue_type_script_lang_js_ = ({
  name: "ResetPasswordPage",
  layout: "MainPageLayout",
  middleware: ['Unauthenticated'],
  data() {
    return {
      email: '',
      password: '',
      password_confirmation: '',
      loading: false
    };
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  },
  methods: {
    async formHandler() {
      this.loading = true;
      try {
        const response = await this.$publicApi.post(api_routes["a" /* API_ROUTES */].reset_password + `/${this.$route.params.user_token}`, {
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        });
        this.email = '';
        this.password = '';
        this.password_confirmation = '';
        this.$refs.form.reset();
        this.$toast.success(response.data.message);
        this.$router.push('/auth/sign-in');
      } catch (err) {
        var _err$response, _err$response$data, _err$response$data$er, _err$response$data$er2, _err$response2, _err$response2$data, _err$response2$data$e, _err$response3, _err$response3$data, _err$response3$data$e, _err$response3$data$e2, _err$response4, _err$response4$data, _err$response4$data$e, _err$response5, _err$response5$data, _err$response5$data$e, _err$response5$data$e2, _err$response6, _err$response6$data, _err$response6$data$e, _err$response7, _err$response7$data, _err$response8, _err$response8$data, _err$response9, _err$response9$data, _err$response10, _err$response10$data;
        this.$refs.form.setErrors({
          email: (err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : (_err$response$data$er = _err$response$data.errors) === null || _err$response$data$er === void 0 ? void 0 : (_err$response$data$er2 = _err$response$data$er.email) === null || _err$response$data$er2 === void 0 ? void 0 : _err$response$data$er2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : (_err$response2$data$e = _err$response2$data.errors) === null || _err$response2$data$e === void 0 ? void 0 : _err$response2$data$e.email[0]),
          password: (err === null || err === void 0 ? void 0 : (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : (_err$response3$data = _err$response3.data) === null || _err$response3$data === void 0 ? void 0 : (_err$response3$data$e = _err$response3$data.errors) === null || _err$response3$data$e === void 0 ? void 0 : (_err$response3$data$e2 = _err$response3$data$e.password) === null || _err$response3$data$e2 === void 0 ? void 0 : _err$response3$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : (_err$response4$data = _err$response4.data) === null || _err$response4$data === void 0 ? void 0 : (_err$response4$data$e = _err$response4$data.errors) === null || _err$response4$data$e === void 0 ? void 0 : _err$response4$data$e.password[0]),
          password_confirmation: (err === null || err === void 0 ? void 0 : (_err$response5 = err.response) === null || _err$response5 === void 0 ? void 0 : (_err$response5$data = _err$response5.data) === null || _err$response5$data === void 0 ? void 0 : (_err$response5$data$e = _err$response5$data.errors) === null || _err$response5$data$e === void 0 ? void 0 : (_err$response5$data$e2 = _err$response5$data$e.password_confirmation) === null || _err$response5$data$e2 === void 0 ? void 0 : _err$response5$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response6 = err.response) === null || _err$response6 === void 0 ? void 0 : (_err$response6$data = _err$response6.data) === null || _err$response6$data === void 0 ? void 0 : (_err$response6$data$e = _err$response6$data.errors) === null || _err$response6$data$e === void 0 ? void 0 : _err$response6$data$e.password[0])
        });
        if (err !== null && err !== void 0 && (_err$response7 = err.response) !== null && _err$response7 !== void 0 && (_err$response7$data = _err$response7.data) !== null && _err$response7$data !== void 0 && _err$response7$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response8 = err.response) === null || _err$response8 === void 0 ? void 0 : (_err$response8$data = _err$response8.data) === null || _err$response8$data === void 0 ? void 0 : _err$response8$data.message);
        if (err !== null && err !== void 0 && (_err$response9 = err.response) !== null && _err$response9 !== void 0 && (_err$response9$data = _err$response9.data) !== null && _err$response9$data !== void 0 && _err$response9$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response10 = err.response) === null || _err$response10 === void 0 ? void 0 : (_err$response10$data = _err$response10.data) === null || _err$response10$data === void 0 ? void 0 : _err$response10$data.error);
      } finally {
        this.loading = false;
      }
    }
  },
  components: {
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 253))
  }
});
// CONCATENATED MODULE: ./pages/auth/reset-password/:user_token.vue?vue&type=script&lang=js&
 /* harmony default export */ var reset_password_user_tokenvue_type_script_lang_js_ = (_user_tokenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/auth/reset-password/:user_token.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  reset_password_user_tokenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9cfbff0c"
  
)

/* harmony default export */ var _user_token = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=:user_token.js.map