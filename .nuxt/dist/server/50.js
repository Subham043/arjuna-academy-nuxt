exports.ids = [50];
exports.modules = {

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/VerifyNotification.vue?vue&type=template&id=fb6b1090&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.$auth.loggedIn && _vm.$auth.user.verified === 'VERIFICATION PENDING' && _vm.display ? _c('div', {
    staticClass: "alert alert-warning mb-0",
    attrs: {
      "role": "alert"
    }
  }, [_vm._ssrNode("<div class=\"row justify-content-between\"><h4 class=\"alert-heading col-auto\">Verification Pending!</h4> <button type=\"button\" data-bs-dismiss=\"alert\" aria-label=\"Close\" class=\"btn-close col-auto\"></button></div> <p>Your email verification is still pending. Kindly verify your email by clicking on the link we had emailed to you? If you didn't receive the email, we will gladly send you another</p> <hr> <button" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-sm btn-dark\">" + (!_vm.loading ? "\n            Resend Verification Email\n        " : "<div role=\"status\" class=\"spinner-border\"></div>") + "</button>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VerifyNotification.vue?vue&type=template&id=fb6b1090&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/VerifyNotification.vue?vue&type=script&lang=js&
/* harmony default export */ var VerifyNotificationvue_type_script_lang_js_ = ({
  name: 'VerifyNotification',
  data() {
    return {
      display: true,
      loading: false
    };
  },
  methods: {
    async resend_verification_mail() {
      this.loading = true;
      try {
        const response = await this.$privateApi.post('/api/v1/email/verify/resend-notification', {});
        this.$toast.success(response.data.message);
      } catch (err) {
        var _err$response, _err$response$data, _err$response2, _err$response2$data, _err$response3, _err$response3$data, _err$response4, _err$response4$data;
        if (err !== null && err !== void 0 && (_err$response = err.response) !== null && _err$response !== void 0 && (_err$response$data = _err$response.data) !== null && _err$response$data !== void 0 && _err$response$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : _err$response2$data.message);
        if (err !== null && err !== void 0 && (_err$response3 = err.response) !== null && _err$response3 !== void 0 && (_err$response3$data = _err$response3.data) !== null && _err$response3$data !== void 0 && _err$response3$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : (_err$response4$data = _err$response4.data) === null || _err$response4$data === void 0 ? void 0 : _err$response4$data.error);
      } finally {
        this.loading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/VerifyNotification.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VerifyNotificationvue_type_script_lang_js_ = (VerifyNotificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/VerifyNotification.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VerifyNotificationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "57c92e32"
  
)

/* harmony default export */ var VerifyNotification = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=50.js.map