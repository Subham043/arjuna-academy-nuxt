exports.ids = [12];
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

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/events/:slug.vue?vue&type=template&id=00c61ef3&
var render = function render() {
  var _vm$event, _vm$event2, _vm$event3, _vm$event4, _vm$event5, _vm$event6, _vm$event7, _vm$event8, _vm$event9, _vm$event10, _vm$event11, _vm$event12;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": (_vm$event = _vm.event) === null || _vm$event === void 0 ? void 0 : _vm$event.name,
      "pages": [{
        link: '/events',
        name: 'Events'
      }, {
        link: '',
        name: (_vm$event2 = _vm.event) === null || _vm$event2 === void 0 ? void 0 : _vm$event2.name
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"event-details-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8\">", "</div>", [!_vm.eventLoading ? [_vm._ssrNode("<div class=\"event-details-content pr-20\">", "</div>", [_vm._ssrNode("<div class=\"event-preview-img\"><img" + _vm._ssrAttr("src", (_vm$event3 = _vm.event) === null || _vm$event3 === void 0 ? void 0 : _vm$event3.image) + _vm._ssrAttr("alt", (_vm$event4 = _vm.event) === null || _vm$event4 === void 0 ? void 0 : _vm$event4.image_alt) + _vm._ssrAttr("title", (_vm$event5 = _vm.event) === null || _vm$event5 === void 0 ? void 0 : _vm$event5.image_title) + "></div> <h1>" + _vm._ssrEscape(_vm._s((_vm$event6 = _vm.event) === null || _vm$event6 === void 0 ? void 0 : _vm$event6.heading)) + "</h1> "), _c('div', {
    directives: [{
      name: "html-safe",
      rawName: "v-html-safe",
      value: (_vm$event7 = _vm.event) === null || _vm$event7 === void 0 ? void 0 : _vm$event7.description,
      expression: "event?.description"
    }]
  }, []), _vm._ssrNode(" " + (((_vm$event8 = _vm.event) === null || _vm$event8 === void 0 ? void 0 : _vm$event8.speakers.length) > 0 ? "<h3 class=\"event-details-mt-30\">Our speakers</h3>" : "<!---->") + " " + (((_vm$event9 = _vm.event) === null || _vm$event9 === void 0 ? void 0 : _vm$event9.speakers.length) > 0 ? "<div class=\"row justify-content-center event-details-mt-30\">" + _vm._ssrList((_vm$event10 = _vm.event) === null || _vm$event10 === void 0 ? void 0 : _vm$event10.speakers, function (item, i) {
    return "<div class=\"col-lg-3 col-md-6\"><div class=\"instructors-item instructors-item-bg\"><div class=\"instructors-img\"><img" + _vm._ssrAttr("src", item.image) + _vm._ssrAttr("alt", item.image_alt) + _vm._ssrAttr("title", item.image_title) + "></div> <div class=\"content\"><h3>" + _vm._ssrEscape("\n                                                " + _vm._s(item.name) + "\n                                            ") + "</h3> <span>" + _vm._ssrEscape(_vm._s(item.designation)) + "</span></div></div></div>";
  }) + "</div>" : "<!---->"))], 2)] : [_c('el-skeleton', {
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
      "height": "440px"
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
      "width": "50%"
    },
    attrs: {
      "variant": "text"
    }
  })], 1)], 1)], 2)]], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-4\">", "</div>", [_vm._ssrNode((!_vm.eventLoading ? "<div class=\"event-sidebar\"><h3 class=\"title\">Events description</h3> <ul><li>Date: <span>" + _vm._ssrEscape(_vm._s((_vm$event11 = _vm.event) === null || _vm$event11 === void 0 ? void 0 : _vm$event11.event_date_on)) + "</span></li> " + _vm._ssrList((_vm$event12 = _vm.event) === null || _vm$event12 === void 0 ? void 0 : _vm$event12.specifications, function (item, i) {
    return "<li>" + _vm._ssrEscape("\n                                    " + _vm._s(item.title) + ": ") + "<span>" + _vm._ssrEscape(_vm._s(item.description)) + "</span></li>";
  }) + "</ul></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"event-sidebar\">", "</div>", [_vm._ssrNode("<h3 class=\"title\">Upcoming Events</h3> "), _vm.popularEventLoading ? _vm._ssrNode("<article class=\"item\">", "</article>", _vm._l(8, function (i) {
    return _vm._ssrNode("<div class=\"info\">", "</div>", [_c('el-skeleton', {
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
    })], 1)], 2), _vm._ssrNode(" <hr>")], 2);
  }), 0) : _vm._e(), _vm._ssrNode(" "), _vm._l(_vm.popularEvent, function (item, i) {
    return !_vm.popularEventLoading && _vm.popularEvent.length > 0 ? _vm._ssrNode("<article class=\"item\">", "</article>", [_vm._ssrNode("<div class=\"info\">", "</div>", [_c('NuxtLink', {
      attrs: {
        "to": `/events/${item.slug}`
      }
    }, [_c('h4', {
      staticClass: "title-text"
    }, [_vm._v("\n                                        " + _vm._s(item.name) + "\n                                    ")])]), _vm._ssrNode(" <p>" + _vm._ssrEscape("\n                                    " + _vm._s(item.short_description) + "\n                                ") + "</p> <hr>")], 2)]) : _vm._e();
  }), _vm._ssrNode(" "), !_vm.popularEventLoading && _vm.popularEvent.length > 0 ? _vm._ssrNode("<div class=\"col-12 text-center\">", "</div>", [_c('pagination', {
    attrs: {
      "records": _vm.popularEventCount,
      "per-page": _vm.popularEventPerPage,
      "options": {
        edgeNavigation: false
      }
    },
    on: {
      "paginate": _vm.handlePopularEventPaginationChnage
    },
    model: {
      value: _vm.popularEventCurrentPage,
      callback: function ($$v) {
        _vm.popularEventCurrentPage = $$v;
      },
      expression: "popularEventCurrentPage"
    }
  })], 1) : _vm._e()], 2)], 2)], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/events/:slug.vue?vue&type=template&id=00c61ef3&

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(210);

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/events/:slug.vue?vue&type=script&lang=js&


/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: "EventDetailPage",
  layout: "MainPageLayout",
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
    this.getPopluarEvent();
  },
  data() {
    return {
      eventLoading: false,
      event: null,
      popularEventLoading: false,
      popularEvent: [],
      popularEventCount: 1,
      popularEventCurrentPage: 1,
      popularEventPerPage: 1
    };
  },
  head() {
    var _this$event, _this$event2, _this$event3, _this$event4, _this$event5;
    return {
      title: (_this$event = this.event) === null || _this$event === void 0 ? void 0 : _this$event.meta_title,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'og:title',
        name: 'og:title',
        content: (_this$event2 = this.event) === null || _this$event2 === void 0 ? void 0 : _this$event2.meta_title
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }, {
        hid: 'description',
        name: 'description',
        content: (_this$event3 = this.event) === null || _this$event3 === void 0 ? void 0 : _this$event3.meta_description
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: (_this$event4 = this.event) === null || _this$event4 === void 0 ? void 0 : _this$event4.meta_keywords
      }],
      script: [{
        type: 'application/ld+json',
        innerHTML: (_this$event5 = this.event) === null || _this$event5 === void 0 ? void 0 : _this$event5.meta_scripts // <- set jsonld object in data or wherever you want
      }],

      __dangerouslyDisableSanitizers: ['script']
    };
  },
  async fetch() {
    await this.getEvent();
  },
  watch: {
    $route(to, from) {
      this.handlePopularEventPageChnage();
    }
  },
  methods: {
    async getEvent() {
      this.eventLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].event + `/${this.$route.params.slug}`); // eslint-disable-line
        this.event = response.data.event;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.eventLoading = false;
      }
    },
    async getPopluarEvent(page = 0) {
      this.popularEventLoading = true;
      try {
        var _response$data, _response$data$meta, _response$data2, _response$data2$meta;
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].event + `?total=8&page=${page}`); // eslint-disable-line
        this.popularEvent = response.data.data;
        this.popularEventCount = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$meta = _response$data.meta) === null || _response$data$meta === void 0 ? void 0 : _response$data$meta.total;
        this.popularEventPerPage = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$meta = _response$data2.meta) === null || _response$data2$meta === void 0 ? void 0 : _response$data2$meta.per_page;
        this.popularEventCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.popularEventLoading = false;
      }
    },
    handlePopularEventPaginationChnage(page) {
      this.$router.push({
        query: {
          page
        }
      });
    },
    handlePopularEventPageChnage() {
      this.popularEventCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      this.getPopluarEvent(this.$route.query.page ? Number(this.$route.query.page) : 1);
    }
  },
  components: {
    Breadcrumb: Breadcrumb["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/events/:slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var events_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/events/:slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  events_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2b0ee3da"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=:slug.js.map