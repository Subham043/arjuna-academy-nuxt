exports.ids = [12];
exports.modules = {

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/InstructorCard.vue?vue&type=template&id=037de945&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "instructors-card"
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": _vm.image,
      "alt": _vm.image_alt,
      "title": _vm.image_title,
      "width": "286",
      "height": "180"
    }
  }, []), _vm._ssrNode(" <div class=\"content\"><h3>" + _vm._s(_vm.name) + "</h3> <span>" + _vm._s(_vm.designation) + "</span></div> <div class=\"instructor-detail\"><p>" + _vm._s(_vm.description) + "</p></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/InstructorCard.vue?vue&type=template&id=037de945&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/InstructorCard.vue?vue&type=script&lang=js&
/* harmony default export */ var InstructorCardvue_type_script_lang_js_ = ({
  name: 'InstructorCardComponent',
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
    image_alt: {
      type: String,
      default: ''
    },
    image_title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/InstructorCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InstructorCardvue_type_script_lang_js_ = (InstructorCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/InstructorCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InstructorCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "57b88dfb"
  
)

/* harmony default export */ var InstructorCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=12.js.map