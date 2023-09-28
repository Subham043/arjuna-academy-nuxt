exports.ids = [20];
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

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogCard.vue?vue&type=template&id=c320783e&
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
    attrs: {
      "src": _vm.image,
      "alt": "Blog"
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li class=\"one-line-text\"><i class=\"ri-calendar-todo-fill\"></i>" + _vm._ssrEscape(" " + _vm._s(_vm.date)) + "</li> "), _vm._ssrNode("<li class=\"one-line-text\">", "</li>", [_vm._ssrNode("<i class=\"ri-user-fill\"></i> "), _c('NuxtLink', {
    attrs: {
      "to": `/leadership-team`
    }
  }, [_vm._v(_vm._s(_vm.author))])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<h3>", "</h3>", [_c('NuxtLink', {
    attrs: {
      "to": `/knowledge-desk/${_vm.slug}`
    }
  }, [_vm._v(_vm._s(_vm.title))])], 1), _vm._ssrNode(" <p>" + _vm._ssrEscape("\n            " + _vm._s(_vm.description) + "\n        ") + "</p> "), _c('NuxtLink', {
    staticClass: "read-btn",
    attrs: {
      "to": `/knowledge-desk/${_vm.slug}`
    }
  }, [_vm._v("Read More")])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BlogCard.vue?vue&type=template&id=c320783e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogCard.vue?vue&type=script&lang=js&
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
    }
  }
});
// CONCATENATED MODULE: ./components/BlogCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogCardvue_type_script_lang_js_ = (BlogCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BlogCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a4ebd13c"
  
)

/* harmony default export */ var BlogCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/knowledge-desk/index.vue?vue&type=template&id=2f46d8c1&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Knowledge Desk",
      "pages": [{
        link: '',
        name: 'Knowledge Desk'
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"blog-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title mb-45 text-center\"><h2>Latest from our <b>blogs</b></h2> <p>\n                    Explore The Latest Updates About NEET, JEE, IIT Exams And Foundation Courses\n                </p></div> "), _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", [_vm.blogLoading ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l(9, function (i) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6\">", "</div>", [_c('el-skeleton', {
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
  }), 0) : _vm._e(), _vm._ssrNode(" "), _vm._l(_vm.blog, function (item, i) {
    return !_vm.blogLoading && _vm.blog.length > 0 ? _vm._ssrNode("<div class=\"col-lg-4 col-md-6\">", "</div>", [_c('BlogCard', {
      attrs: {
        "image": item.image,
        "title": item.name,
        "description": item.short_description,
        "date": item.published,
        "slug": item.slug,
        "author": item.author_name
      }
    })], 1) : _vm._e();
  }), _vm._ssrNode(" "), !_vm.blogLoading && _vm.blog.length > 0 ? _vm._ssrNode("<div class=\"col-12 text-center\">", "</div>", [_c('pagination', {
    attrs: {
      "records": _vm.blogCount,
      "per-page": _vm.blogPerPage,
      "options": {
        edgeNavigation: false
      }
    },
    on: {
      "paginate": _vm.handlePaginationChnage
    },
    model: {
      value: _vm.blogCurrentPage,
      callback: function ($$v) {
        _vm.blogCurrentPage = $$v;
      },
      expression: "blogCurrentPage"
    }
  })], 1) : _vm._e()], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/knowledge-desk/index.vue?vue&type=template&id=2f46d8c1&

// EXTERNAL MODULE: ./components/BlogCard.vue + 4 modules
var BlogCard = __webpack_require__(213);

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(210);

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/knowledge-desk/index.vue?vue&type=script&lang=js&



/* harmony default export */ var knowledge_deskvue_type_script_lang_js_ = ({
  name: "BlogPage",
  layout: "MainPageLayout",
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  },
  data() {
    return {
      blogLoading: false,
      blog: [],
      blogCount: 1,
      blogCurrentPage: 1,
      blogPerPage: 1,
      seo: {
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
        meta_scripts: ''
      }
    };
  },
  head() {
    return {
      title: this.seo.meta_title,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'og:title',
        name: 'og:title',
        content: this.seo.meta_title
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }, {
        hid: 'description',
        name: 'description',
        content: this.seo.meta_description
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: this.seo.meta_keywords
      }],
      script: [{
        type: 'application/ld+json',
        innerHTML: this.seo.meta_scripts // <- set jsonld object in data or wherever you want
      }],

      __dangerouslyDisableSanitizers: ['script']
    };
  },
  async fetch() {
    await this.getBlog(this.$route.query.page ? Number(this.$route.query.page) : 1);
    await this.getSeo();
  },
  watch: {
    $route(to, from) {
      if (false) {}
      this.handlePageChnage();
    }
  },
  methods: {
    async getBlog(page = 0) {
      this.blogLoading = true;
      try {
        var _response$data, _response$data$meta, _response$data2, _response$data2$meta;
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].blog + `?total=9&page=${page}`); // eslint-disable-line
        this.blog = response.data.data;
        this.blogCount = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$meta = _response$data.meta) === null || _response$data$meta === void 0 ? void 0 : _response$data$meta.total;
        this.blogPerPage = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$meta = _response$data2.meta) === null || _response$data2$meta === void 0 ? void 0 : _response$data2$meta.per_page;
        this.blogCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.blogLoading = false;
      }
    },
    async getSeo() {
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/blogs-page`); // eslint-disable-line
        this.seo = response.data.seo;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
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
      this.blogCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      this.getBlog(this.$route.query.page ? Number(this.$route.query.page) : 1);
    }
  },
  components: {
    BlogCard: BlogCard["a" /* default */],
    Breadcrumb: Breadcrumb["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/knowledge-desk/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_knowledge_deskvue_type_script_lang_js_ = (knowledge_deskvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/knowledge-desk/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_knowledge_deskvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "77f1a52f"
  
)

/* harmony default export */ var knowledge_desk = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map