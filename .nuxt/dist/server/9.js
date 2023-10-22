exports.ids = [9];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/EventCard.vue?vue&type=template&id=35863cd6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "event-item"
  }, [_vm.image !== '' ? _vm._ssrNode("<div class=\"event-img\">", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": _vm.is_event ? `/events/${_vm.slug}` : `/expert-tips/${_vm.slug}`,
      "aria-label": _vm.title
    }
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": _vm.image,
      "alt": _vm.image_alt,
      "title": _vm.image_title
    }
  })])], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"event-content\">", "</div>", [_vm._ssrNode("<ul class=\"event-list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fa', 'calendar-days']
    }
  }), _vm._ssrNode(_vm._ssrEscape("  " + _vm._s(_vm.date) + "\n                "))], 2)]), _vm._ssrNode(" "), !_vm.is_event ? _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fa', 'user']
    }
  }), _vm._ssrNode(_vm._ssrEscape("  " + _vm._s(_vm.author) + "\n                "))], 2)]) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<h3>", "</h3>", [_c('NuxtLink', {
    attrs: {
      "to": _vm.is_event ? `/events/${_vm.slug}` : `/expert-tips/${_vm.slug}`,
      "aria-label": _vm.title
    },
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  })], 1), _vm._ssrNode(" <p>" + _vm._s(_vm.description) + "</p>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/EventCard.vue?vue&type=template&id=35863cd6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/EventCard.vue?vue&type=script&lang=js&
/* harmony default export */ var EventCardvue_type_script_lang_js_ = ({
  name: 'EventCardComponent',
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
    slug: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    image_title: {
      type: String,
      default: ''
    },
    image_alt: {
      type: String,
      default: ''
    },
    is_event: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./components/EventCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EventCardvue_type_script_lang_js_ = (EventCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/EventCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EventCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d88347e8"
  
)

/* harmony default export */ var EventCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=9.js.map