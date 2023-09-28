exports.ids = [21];
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

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/leadership-team.vue?vue&type=template&id=f89a2bb2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": "Leadership Team",
      "pages": [{
        link: '',
        name: 'Leadership Team'
      }]
    }
  }), _vm._ssrNode(" "), _vm.managementLoading ? _vm._l(4, function (i) {
    return _vm._ssrNode("<div" + _vm._ssrClass(null, `instructors-details-area ${i === 1 && 'pt-100'} pb-70`) + ">", "</div>", [(i + 1) % 2 === 0 ? _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-5\">", "</div>", [_vm._ssrNode("<div class=\"instructors-details-img faq-img\">", "</div>", [_c('el-skeleton', {
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
    })], 1)], 2)], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-7\">", "</div>", [_vm._ssrNode("<div class=\"instructors-details-content pl-20\">", "</div>", [_c('el-skeleton', {
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
        "width": "30%"
      },
      attrs: {
        "variant": "h2"
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-skeleton-item', {
      staticStyle: {
        "width": "20%"
      },
      attrs: {
        "variant": "text"
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
        "width": "100%"
      },
      attrs: {
        "variant": "text"
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
        "width": "100%"
      },
      attrs: {
        "variant": "text"
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
        "width": "100%"
      },
      attrs: {
        "variant": "text"
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
        "width": "100%"
      },
      attrs: {
        "variant": "text"
      }
    })], 1)], 2)], 1)])], 2)]) : _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-7\">", "</div>", [_vm._ssrNode("<div class=\"instructors-details-content pl-20\">", "</div>", [_c('el-skeleton', {
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
        "width": "30%"
      },
      attrs: {
        "variant": "h2"
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-skeleton-item', {
      staticStyle: {
        "width": "20%"
      },
      attrs: {
        "variant": "text"
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
        "width": "100%"
      },
      attrs: {
        "variant": "text"
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
        "width": "100%"
      },
      attrs: {
        "variant": "text"
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
        "width": "100%"
      },
      attrs: {
        "variant": "text"
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
        "width": "100%"
      },
      attrs: {
        "variant": "text"
      }
    })], 1)], 2)], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-5\">", "</div>", [_vm._ssrNode("<div class=\"instructors-details-img faq-img\">", "</div>", [_c('el-skeleton', {
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
    })], 1)], 2)], 1)])], 2)])]);
  }) : _vm._e(), _vm._ssrNode(" "), !_vm.managementLoading && _vm.management.length > 0 ? _vm._l(_vm.management, function (item, i) {
    return _vm._ssrNode("<div" + _vm._ssrClass(null, `instructors-details-area ${i === 0 && 'pt-70'} pb-70`) + ">", "</div>", [(i + 1) % 2 === 0 ? _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-5\"><div class=\"instructors-details-img faq-img\"><img" + _vm._ssrAttr("src", item.image) + _vm._ssrAttr("alt", item.image_alt) + _vm._ssrAttr("title", item.image_title) + "> <div class=\"shape\"><h2><span class=\"badge bg-warning\">" + _vm._ssrEscape(_vm._s(item.designation)) + "</span></h2></div></div></div> "), _vm._ssrNode("<div class=\"col-lg-7\">", "</div>", [_vm._ssrNode("<div class=\"instructors-details-content pl-20\">", "</div>", [_vm._ssrNode("<h2>" + _vm._ssrEscape(_vm._s(item.name)) + "</h2> <i class=\"d-inline-flex mb-3 fw-semibold text-success-emphasis bg-success-subtle\">" + _vm._ssrEscape(_vm._s(item.qualification)) + "</i> "), _c('div', {
      directives: [{
        name: "html-safe",
        rawName: "v-html-safe",
        value: item.description,
        expression: "item.description"
      }]
    }, [])], 2)])], 2)]) : _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-7\">", "</div>", [_vm._ssrNode("<div class=\"instructors-details-content pl-20\">", "</div>", [_vm._ssrNode("<h2>" + _vm._ssrEscape(_vm._s(item.name)) + "</h2> <i class=\"d-inline-flex mb-3 fw-semibold text-success-emphasis bg-success-subtle\">" + _vm._ssrEscape(_vm._s(item.qualification)) + "</i> "), _c('div', {
      directives: [{
        name: "html-safe",
        rawName: "v-html-safe",
        value: item.description,
        expression: "item.description"
      }]
    }, [])], 2)]), _vm._ssrNode(" <div class=\"col-lg-5\"><div class=\"instructors-details-img faq-img\"><img" + _vm._ssrAttr("src", item.image) + _vm._ssrAttr("alt", item.image_alt) + _vm._ssrAttr("title", item.image_title) + "> <div class=\"shape\"><h2><span class=\"badge bg-warning\">" + _vm._ssrEscape(_vm._s(item.designation)) + "</span></h2></div></div></div>")], 2)])]);
  }) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"instructors-area instructors-area-rs pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title text-center mb-45\"><h2>Our Faculties</h2></div> "), _vm.staffLoading ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l(8, function (i) {
    return _vm._ssrNode("<div class=\"col-lg-3 col-md-6\">", "</div>", [_c('el-skeleton', {
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
        "width": "30%"
      },
      attrs: {
        "variant": "text"
      }
    })], 1)], 1)], 2)], 1);
  }), 0) : _vm._e(), _vm._ssrNode(" "), !_vm.staffLoading && _vm.staff.length > 0 ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", [_vm._l(_vm.staff, function (item, i) {
    return _vm._ssrNode("<div class=\"col-lg-3 col-md-4\">", "</div>", [_vm._ssrNode("<div class=\"instructors-card\">", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", item.image) + _vm._ssrAttr("alt", item.alt) + _vm._ssrAttr("title", item.title) + "> <div class=\"content\"><h3>" + _vm._ssrEscape(_vm._s(item.name)) + "</h3> <span>" + _vm._ssrEscape(_vm._s(item.designation)) + "</span></div> "), _vm._ssrNode("<div class=\"instructor-detail\">", "</div>", [_c('p', {
      directives: [{
        name: "html-safe",
        rawName: "v-html-safe",
        value: item.description,
        expression: "item.description"
      }]
    }, [])])], 2)]);
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-12 text-center\">", "</div>", [_c('pagination', {
    attrs: {
      "records": _vm.staffCount,
      "per-page": _vm.staffPerPage,
      "options": {
        edgeNavigation: false
      }
    },
    on: {
      "paginate": _vm.handlePaginationChnage
    },
    model: {
      value: _vm.staffCurrentPage,
      callback: function ($$v) {
        _vm.staffCurrentPage = $$v;
      },
      expression: "staffCurrentPage"
    }
  })], 1)], 2) : _vm._e()], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/leadership-team.vue?vue&type=template&id=f89a2bb2&

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(210);

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/leadership-team.vue?vue&type=script&lang=js&


/* harmony default export */ var leadership_teamvue_type_script_lang_js_ = ({
  name: "LeadershipPage",
  layout: "MainPageLayout",
  data() {
    return {
      managementLoading: false,
      management: [],
      staffLoading: false,
      staff: [],
      staffCount: 1,
      staffCurrentPage: 1,
      staffPerPage: 1,
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
    await this.getManagement();
    await this.getStaff(this.$route.query.page ? Number(this.$route.query.page) : 1);
    await this.getSeo();
  },
  watch: {
    $route(to, from) {
      if (false) {}
      this.handlePageChnage();
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  },
  methods: {
    async getManagement() {
      this.managementLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].management); // eslint-disable-line
        this.management = response.data.data;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.managementLoading = false;
      }
    },
    async getStaff(page = 0) {
      this.staffLoading = true;
      try {
        var _response$data, _response$data$meta, _response$data2, _response$data2$meta;
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].staff + `?total=12&page=${page}`); // eslint-disable-line
        this.staff = response.data.data;
        this.staffCount = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$meta = _response$data.meta) === null || _response$data$meta === void 0 ? void 0 : _response$data$meta.total;
        this.staffPerPage = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$meta = _response$data2.meta) === null || _response$data2$meta === void 0 ? void 0 : _response$data2$meta.per_page;
        this.staffCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.staffLoading = false;
      }
    },
    async getSeo() {
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].seo + `/leadership-page`); // eslint-disable-line
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
      this.staffCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      this.getStaff(this.$route.query.page ? Number(this.$route.query.page) : 1);
    }
  },
  components: {
    Breadcrumb: Breadcrumb["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/leadership-team.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_leadership_teamvue_type_script_lang_js_ = (leadership_teamvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/leadership-team.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_leadership_teamvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f387b91e"
  
)

/* harmony default export */ var leadership_team = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=leadership-team.js.map