exports.ids = [15];
exports.modules = {

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/WhatWeDoCard.vue?vue&type=template&id=f863886c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "featured-area pt-70 pb-70"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center mb-45\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8 col-md-9\"><div class=\"section-title mt-rs-20\"><span>WHAT WE DO</span> <h2>" + _vm._ssrEscape(_vm._s(_vm.heading)) + "</h2></div></div> "), _vm._ssrNode("<div class=\"col-lg-4 col-md-3 text-end\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn border-radius-50",
    attrs: {
      "to": "/mission-vision",
      "aria-label": "Mission & Vision"
    }
  }, [_vm._v("Mission & Vision")])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm.loading ? _c('FeatureCardLoading', {
    attrs: {
      "count": 6
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm._l(_vm.feature, function (item, i) {
    return !_vm.loading && _vm.feature.length > 0 ? _vm._ssrNode("<div class=\"col-lg-4 col-6\">", "</div>", [_vm._ssrNode("<div class=\"featured-item-two\">", "</div>", [_vm._ssrNode("<div class=\"feature-icon-holder\">", "</div>", [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": item.image,
        "alt": item.title,
        "title": item.title
      }
    }, []), _vm._ssrNode(" <h3>" + _vm._s(item.title) + "</h3>")], 2), _vm._ssrNode(" <p>" + _vm._s(item.description) + "</p>")], 2)]) : _vm._e();
  })], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/WhatWeDoCard.vue?vue&type=template&id=f863886c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/WhatWeDoCard.vue?vue&type=script&lang=js&
/* harmony default export */ var WhatWeDoCardvue_type_script_lang_js_ = ({
  name: 'WhatWeDoCardComponent',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    heading: {
      type: String,
      default: ''
    },
    feature: {
      type: Array,
      default: []
    }
  },
  components: {
    FeatureCardLoading: () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 259))
  }
});
// CONCATENATED MODULE: ./components/WhatWeDoCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WhatWeDoCardvue_type_script_lang_js_ = (WhatWeDoCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/WhatWeDoCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WhatWeDoCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9957b88a"
  
)

/* harmony default export */ var WhatWeDoCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=15.js.map