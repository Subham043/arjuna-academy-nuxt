exports.ids = [48];
exports.modules = {

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/BlogCard.vue?vue&type=template&id=0fcf6479&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-card"
  }, [_c('NuxtLink', {
    attrs: {
      "to": `/knowledge-desk/${_vm.slug}`
    }
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": _vm.image,
      "alt": _vm.image_alt,
      "title": _vm.image_title,
      "width": "412",
      "height": "215"
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<ul><li class=\"one-line-text\"><i class=\"ri-calendar-todo-fill\"></i>" + _vm._ssrEscape(" " + _vm._s(_vm.date)) + "</li> <li class=\"one-line-text\"><i class=\"ri-user-fill\"></i>" + _vm._ssrEscape(" " + _vm._s(_vm.author)) + "</li></ul> "), _vm._ssrNode("<h3>", "</h3>", [_c('NuxtLink', {
    attrs: {
      "to": `/knowledge-desk/${_vm.slug}`
    },
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  })], 1), _vm._ssrNode(" <p>" + _vm._s(_vm.description) + "</p> "), _c('NuxtLink', {
    staticClass: "read-btn",
    attrs: {
      "to": `/knowledge-desk/${_vm.slug}`
    }
  }, [_vm._v("Read More")])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BlogCard.vue?vue&type=template&id=0fcf6479&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/BlogCard.vue?vue&type=script&lang=js&
/* harmony default export */ var BlogCardvue_type_script_lang_js_ = ({
  name: 'BlogCardComponent',
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    slug: {
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
    }
  }
});
// CONCATENATED MODULE: ./components/BlogCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogCardvue_type_script_lang_js_ = (BlogCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/BlogCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "06c68080"
  
)

/* harmony default export */ var BlogCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=48.js.map