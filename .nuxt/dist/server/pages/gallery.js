exports.ids = [17];
exports.modules = {

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=template&id=3fa16c5c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "inner-banner inner-banner-bg"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"inner-title text-center\">", "</div>", [_vm._ssrNode("<h3>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h3> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm._l(_vm.pages, function (item, i) {
    return _vm._ssrNode("<li>", "</li>", [i + 1 != _vm.pages.length ? _c('NuxtLink', {
      attrs: {
        "to": item.link
      }
    }, [_vm._v(_vm._s(item.name))]) : [_vm._v("\n                         " + _vm._s(item.name) + "\n                    ")]], 2);
  })], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=template&id=3fa16c5c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=script&lang=js&
/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({
  name: 'BreadcrumbComponent',
  props: {
    title: {
      type: String,
      default: ''
    },
    pages: {
      type: Array,
      default: []
    }
  }
});
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Breadcrumb.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "588da9da"
  
)

/* harmony default export */ var Breadcrumb = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery.vue?vue&type=template&id=7405e2ba&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Gallery",
      "pages": [{
        link: '',
        name: 'Gallery'
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"blog-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title mb-45 text-center\"><h2>Photo Gallery</h2> <p>\n                    &quot;Photographs open doors into the past &amp; also allow a look into the future.&quot;\n                </p> <p>\n                    &quot;Reliving some of the happiest &amp; memorable moments here&quot;\n                </p></div> "), _c('viewer', {
    staticClass: "row justify-content-center",
    attrs: {
      "options": {
        zoom_in: false
      },
      "images": _vm.gallery
    }
  }, [_vm.galleryLoading ? _c('div', {
    staticClass: "row justify-content-center"
  }, _vm._l(9, function (i) {
    return _c('div', {
      key: i,
      staticClass: "col-lg-4 col-md-6"
    }, [_c('el-skeleton', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "animated": ""
      }
    }, [_c('template', {
      slot: "template"
    }, [_c('el-skeleton-item', {
      staticStyle: {
        "width": "100%",
        "height": "240px"
      },
      attrs: {
        "variant": "image"
      }
    }), _vm._v(" "), _c('div', {
      staticStyle: {
        "padding": "14px"
      }
    }, [_c('el-skeleton-item', {
      staticStyle: {
        "width": "50%"
      },
      attrs: {
        "variant": "p"
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-skeleton-item', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "variant": "text"
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-skeleton-item', {
      staticStyle: {
        "width": "50%"
      },
      attrs: {
        "variant": "text"
      }
    })], 1)], 1)], 2)], 1);
  }), 0) : _vm._e(), _vm._v(" "), _vm._l(_vm.gallery, function (item, i) {
    return !_vm.galleryLoading && _vm.gallery.length > 0 ? _c('div', {
      key: i,
      staticClass: "col-lg-4 col-md-6"
    }, [_c('div', {
      staticClass: "blog-card"
    }, [_c('img', {
      staticStyle: {
        "cursor": "pointer"
      },
      attrs: {
        "src": item.image,
        "alt": item.image_alt,
        "title": item.image_title
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('h3', [_vm._v("\n                                " + _vm._s(item.title) + "\n                            ")]), _vm._v(" "), _c('p', [_vm._v("\n                                " + _vm._s(item.description) + "\n                            ")])])])]) : _vm._e();
  }), _vm._v(" "), !_vm.galleryLoading && _vm.gallery.length > 0 ? _c('div', {
    staticClass: "col-12 text-center"
  }, [_c('pagination', {
    attrs: {
      "records": _vm.galleryCount,
      "per-page": _vm.galleryPerPage,
      "options": {
        edgeNavigation: false
      }
    },
    on: {
      "paginate": _vm.handlePaginationChnage
    },
    model: {
      value: _vm.galleryCurrentPage,
      callback: function ($$v) {
        _vm.galleryCurrentPage = $$v;
      },
      expression: "galleryCurrentPage"
    }
  })], 1) : _vm._e()], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/gallery.vue?vue&type=template&id=7405e2ba&

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(210);

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery.vue?vue&type=script&lang=js&


/* harmony default export */ var galleryvue_type_script_lang_js_ = ({
  name: "BlogPage",
  layout: "MainPageLayout",
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  },
  data() {
    return {
      galleryLoading: false,
      gallery: [],
      galleryCount: 1,
      galleryCurrentPage: 1,
      galleryPerPage: 1
    };
  },
  async fetch() {
    await this.getGallery(this.$route.query.page ? Number(this.$route.query.page) : 1);
  },
  watch: {
    $route(to, from) {
      if (false) {}
      this.handlePageChnage();
    }
  },
  methods: {
    async getGallery(page = 0) {
      this.galleryLoading = true;
      try {
        var _response$data, _response$data$meta, _response$data2, _response$data2$meta;
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].gallery + `?total=9&page=${page}`); // eslint-disable-line
        this.gallery = response.data.data;
        this.galleryCount = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$meta = _response$data.meta) === null || _response$data$meta === void 0 ? void 0 : _response$data$meta.total;
        this.galleryPerPage = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$meta = _response$data2.meta) === null || _response$data2$meta === void 0 ? void 0 : _response$data2$meta.per_page;
        this.galleryCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.galleryLoading = false;
      }
    },
    handlePaginationChnage(page) {
      this.$router.push({
        query: {
          page
        }
      });
    },
    handlePageChnage() {
      this.galleryCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      this.getGallery(this.$route.query.page ? Number(this.$route.query.page) : 1);
    }
  },
  components: {
    Breadcrumb: Breadcrumb["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/gallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_galleryvue_type_script_lang_js_ = (galleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/gallery.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_galleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "355babde"
  
)

/* harmony default export */ var gallery = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=gallery.js.map