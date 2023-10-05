exports.ids = [27];
exports.modules = {

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/auth/sign-in.vue?vue&type=template&id=1cf0ca1e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Sign In",
      "pages": [{
        link: '',
        name: 'Sign In'
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"user-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center justify-content-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-5\">", "</div>", [_vm._ssrNode("<div class=\"user-all-form\">", "</div>", [_vm._ssrNode("<div class=\"register-form\">", "</div>", [_vm._ssrNode("<div class=\"top-header\"><h3>Sign in</h3></div> "), _vm._ssrNode("<div class=\"contact-form\">", "</div>", [_c('ValidationObserver', {
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
                  "name": "Password",
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
          staticClass: "col-lg-12 form-condition"
        }, [_c('div', {
          staticClass: "agree-label"
        }, [_c('input', {
          attrs: {
            "type": "checkbox",
            "id": "chb1"
          }
        }), _vm._v(" "), _c('label', {
          attrs: {
            "for": "chb1"
          }
        }, [_vm._v("\n                                                        Remember Me\n                                                        "), _c('NuxtLink', {
          staticClass: "forget",
          attrs: {
            "to": "/auth/forgot-password"
          }
        }, [_vm._v("Forgot Password?")])], 1)])]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12 col-md-12 text-center"
        }, [_c('button', {
          staticClass: "default-btn",
          attrs: {
            "type": "submit",
            "disabled": _vm.loading
          }
        }, [!_vm.loading ? [_vm._v("\n                                                        Login Now\n                                                    ")] : _c('div', {
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
        }, [_vm._v("\n                                                    Don't have an account?\n                                                    "), _c('NuxtLink', {
          staticClass: "forget",
          attrs: {
            "to": "/auth/sign-up"
          }
        }, [_vm._v("Register")])], 1)])])])];
      }
    }])
  })], 1)], 2)])])])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/auth/sign-in.vue?vue&type=template&id=1cf0ca1e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/auth/sign-in.vue?vue&type=script&lang=js&
/* harmony default export */ var sign_invue_type_script_lang_js_ = ({
  name: "SigninPage",
  layout: "MainPageLayout",
  middleware: ['Unauthenticated'],
  data() {
    return {
      email: '',
      password: '',
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
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        }); // eslint-disable-line
        this.email = '';
        this.password = '';
        this.$refs.form.reset();
        this.$toast.success('Logged in successfully');
        // console.log(this.$store.state.auth);// eslint-disable-line
      } catch (err) {
        var _err$response, _err$response$data, _err$response$data$er, _err$response$data$er2, _err$response2, _err$response2$data, _err$response2$data$e, _err$response3, _err$response3$data, _err$response3$data$e, _err$response3$data$e2, _err$response4, _err$response4$data, _err$response4$data$e, _err$response5, _err$response5$data, _err$response6, _err$response6$data, _err$response7, _err$response7$data, _err$response8, _err$response8$data;
        console.log(err.response); // eslint-disable-line
        this.$refs.form.setErrors({
          email: (err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : (_err$response$data$er = _err$response$data.errors) === null || _err$response$data$er === void 0 ? void 0 : (_err$response$data$er2 = _err$response$data$er.email) === null || _err$response$data$er2 === void 0 ? void 0 : _err$response$data$er2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : (_err$response2$data$e = _err$response2$data.errors) === null || _err$response2$data$e === void 0 ? void 0 : _err$response2$data$e.email[0]),
          password: (err === null || err === void 0 ? void 0 : (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : (_err$response3$data = _err$response3.data) === null || _err$response3$data === void 0 ? void 0 : (_err$response3$data$e = _err$response3$data.errors) === null || _err$response3$data$e === void 0 ? void 0 : (_err$response3$data$e2 = _err$response3$data$e.password) === null || _err$response3$data$e2 === void 0 ? void 0 : _err$response3$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : (_err$response4$data = _err$response4.data) === null || _err$response4$data === void 0 ? void 0 : (_err$response4$data$e = _err$response4$data.errors) === null || _err$response4$data$e === void 0 ? void 0 : _err$response4$data$e.password[0])
        });
        if (err !== null && err !== void 0 && (_err$response5 = err.response) !== null && _err$response5 !== void 0 && (_err$response5$data = _err$response5.data) !== null && _err$response5$data !== void 0 && _err$response5$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response6 = err.response) === null || _err$response6 === void 0 ? void 0 : (_err$response6$data = _err$response6.data) === null || _err$response6$data === void 0 ? void 0 : _err$response6$data.message);
        if (err !== null && err !== void 0 && (_err$response7 = err.response) !== null && _err$response7 !== void 0 && (_err$response7$data = _err$response7.data) !== null && _err$response7$data !== void 0 && _err$response7$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response8 = err.response) === null || _err$response8 === void 0 ? void 0 : (_err$response8$data = _err$response8.data) === null || _err$response8$data === void 0 ? void 0 : _err$response8$data.error);
      } finally {
        this.loading = false;
      }
    }
  },
  components: {
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 253))
  }
});
// CONCATENATED MODULE: ./pages/auth/sign-in.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_sign_invue_type_script_lang_js_ = (sign_invue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/auth/sign-in.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_sign_invue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1fee2bd8"
  
)

/* harmony default export */ var sign_in = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sign-in.js.map