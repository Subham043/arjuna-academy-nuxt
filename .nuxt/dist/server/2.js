exports.ids = [2];
exports.modules = {

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(217);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("683110a0", content, true, context)
};

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_AchieverStudentCard_vue_vue_type_style_index_0_id_8dc803f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(209);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_AchieverStudentCard_vue_vue_type_style_index_0_id_8dc803f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_AchieverStudentCard_vue_vue_type_style_index_0_id_8dc803f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_AchieverStudentCard_vue_vue_type_style_index_0_id_8dc803f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_AchieverStudentCard_vue_vue_type_style_index_0_id_8dc803f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".achiever-detail[data-v-8dc803f2]{background-color:#f9f9f9;-webkit-clip-path:polygon(50% 0,100% 0,100% 99%,50% 85%,0 100%,0 0);clip-path:polygon(50% 0,100% 0,100% 99%,50% 85%,0 100%,0 0);height:375px;margin-bottom:30px;min-height:375px;text-align:center}.achiever-detail-container[data-v-8dc803f2]{padding:15px 30px}.achiever-detail img[data-v-8dc803f2]{border:2px solid #d7c167;width:55%}.achiever-detail h5[data-v-8dc803f2]{font-size:17px;font-weight:700;margin:0;padding:10px 0}.achiever-detail h3[data-v-8dc803f2]{background:#304557;color:#fff;font-size:15px;font-weight:700;padding:10px;text-align:center}.tab-filter p[data-v-8dc803f2]{font-size:14px;font-weight:620;padding:0 10%;text-align:center}.achiever-detail p[data-v-8dc803f2]{font-weight:700}@media only screen and (max-width:767px){.achiever-detail[data-v-8dc803f2]{height:445px;min-height:445px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/AchieverStudentCard.vue?vue&type=template&id=8dc803f2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "achiever-detail"
  }, [_vm._ssrNode("<div class=\"achiever-detail-container pb-0\" data-v-8dc803f2>", "</div>", [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "img-responsive",
    attrs: {
      "data-src": _vm.image,
      "alt": _vm.image_alt,
      "title": _vm.image_title
    }
  }, []), _vm._ssrNode(" <h5 data-v-8dc803f2>" + _vm._s(_vm.name) + "</h5>")], 2), _vm._ssrNode(" <h3 data-v-8dc803f2>" + _vm._s(_vm.rank) + "</h3> <div class=\"achiever-detail-container pt-0\" data-v-8dc803f2><p data-v-8dc803f2>" + _vm._s(_vm.college) + "</p></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AchieverStudentCard.vue?vue&type=template&id=8dc803f2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/AchieverStudentCard.vue?vue&type=script&lang=js&
/* harmony default export */ var AchieverStudentCardvue_type_script_lang_js_ = ({
  name: 'AchieverStudentCardComponent',
  props: {
    image: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    rank: {
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
    college: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/AchieverStudentCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AchieverStudentCardvue_type_script_lang_js_ = (AchieverStudentCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/AchieverStudentCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(216)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AchieverStudentCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8dc803f2",
  "067e7bac"
  
)

/* harmony default export */ var AchieverStudentCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map