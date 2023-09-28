exports.ids = [19];
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

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/knowledge-desk/:slug.vue?vue&type=template&id=5a0650bc&
var render = function render() {
  var _vm$blog, _vm$blog2, _vm$blog3, _vm$blog4, _vm$blog5, _vm$blog6, _vm$blog7, _vm$blog8, _vm$blog9, _vm$prev_blog, _vm$blog10, _vm$blog11, _vm$blog12, _vm$blog13, _vm$blog14, _vm$blog15, _vm$blog16, _vm$next_blog;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Breadcrumb', {
    attrs: {
      "title": (_vm$blog = _vm.blog) === null || _vm$blog === void 0 ? void 0 : _vm$blog.name,
      "pages": [{
        link: '/knowledge-desk',
        name: 'Knowledge Desk'
      }, {
        link: '',
        name: (_vm$blog2 = _vm.blog) === null || _vm$blog2 === void 0 ? void 0 : _vm$blog2.name
      }]
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"blog-details-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8\">", "</div>", [_vm._ssrNode("<div class=\"blog-details-content pr-20\">", "</div>", [!_vm.blogLoading ? [_vm._ssrNode("<div class=\"blog-preview-img\"><img" + _vm._ssrAttr("src", (_vm$blog3 = _vm.blog) === null || _vm$blog3 === void 0 ? void 0 : _vm$blog3.image) + _vm._ssrAttr("alt", (_vm$blog4 = _vm.blog) === null || _vm$blog4 === void 0 ? void 0 : _vm$blog4.image_alt) + _vm._ssrAttr("title", (_vm$blog5 = _vm.blog) === null || _vm$blog5 === void 0 ? void 0 : _vm$blog5.image_title) + "></div> "), _vm._ssrNode("<ul class=\"tag-list\">", "</ul>", [_vm._ssrNode("<li><i class=\"ri-calendar-todo-fill\"></i>" + _vm._ssrEscape(" " + _vm._s((_vm$blog6 = _vm.blog) === null || _vm$blog6 === void 0 ? void 0 : _vm$blog6.published)) + "</li> "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<i class=\"ri-user-fill\"></i> "), _c('NuxtLink', {
    attrs: {
      "to": "/leadership-team"
    }
  }, [_vm._v(_vm._s((_vm$blog7 = _vm.blog) === null || _vm$blog7 === void 0 ? void 0 : _vm$blog7.author_name))])], 2)], 2), _vm._ssrNode(" <h1>" + _vm._ssrEscape(_vm._s((_vm$blog8 = _vm.blog) === null || _vm$blog8 === void 0 ? void 0 : _vm$blog8.heading)) + "</h1> "), _c('div', {
    directives: [{
      name: "html-safe",
      rawName: "v-html-safe",
      value: (_vm$blog9 = _vm.blog) === null || _vm$blog9 === void 0 ? void 0 : _vm$blog9.description,
      expression: "blog?.description"
    }]
  }, []), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"article-share\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center justify-content-between\">", "</div>", [_vm.prev_blog !== null ? _vm._ssrNode("<div class=\"col-lg-auto col-md-auto\">", "</div>", [_vm._ssrNode("<div class=\"pagination-area m-0\">", "</div>", [_c('NuxtLink', {
    staticClass: "prev page-numbers",
    attrs: {
      "to": _vm.prev_blog !== null ? `/knowledge-desk/${(_vm$prev_blog = _vm.prev_blog) === null || _vm$prev_blog === void 0 ? void 0 : _vm$prev_blog.slug}` : '#',
      "title": "previous blog"
    }
  }, [_c('i', {
    staticClass: "flaticon-left-arrow"
  })])], 1)]) : _vm._e(), _vm._ssrNode(" <div class=\"col-lg-auto col-md-auto\"><div class=\"article-social-icon\"><ul class=\"social-icon\"><li class=\"title\">Share :</li> <li><a" + _vm._ssrAttr("href", `https://www.facebook.com/share.php?u=https://www.aaaedu.in/knowledge-desk/${(_vm$blog10 = _vm.blog) === null || _vm$blog10 === void 0 ? void 0 : _vm$blog10.slug}&title=${(_vm$blog11 = _vm.blog) === null || _vm$blog11 === void 0 ? void 0 : _vm$blog11.name}`) + " target=\"_blank\"><i class=\"ri-facebook-fill\"></i></a></li> <li><a" + _vm._ssrAttr("href", `https://twitter.com/share?text=${(_vm$blog12 = _vm.blog) === null || _vm$blog12 === void 0 ? void 0 : _vm$blog12.name}&url=https://www.aaaedu.in/knowledge-desk/${(_vm$blog13 = _vm.blog) === null || _vm$blog13 === void 0 ? void 0 : _vm$blog13.slug}`) + " target=\"_blank\"><i class=\"ri-twitter-fill\"></i></a></li> <li><a" + _vm._ssrAttr("href", `https://www.linkedin.com/shareArticle?mini=true&url=https://www.aaaedu.in/knowledge-desk/${(_vm$blog14 = _vm.blog) === null || _vm$blog14 === void 0 ? void 0 : _vm$blog14.slug}&title=${(_vm$blog15 = _vm.blog) === null || _vm$blog15 === void 0 ? void 0 : _vm$blog15.name}&source=${(_vm$blog16 = _vm.blog) === null || _vm$blog16 === void 0 ? void 0 : _vm$blog16.name}`) + " target=\"_blank\"><i class=\"ri-linkedin-fill\"></i></a></li></ul></div></div> "), _vm.next_blog !== null ? _vm._ssrNode("<div class=\"col-lg-auto col-md-auto\">", "</div>", [_vm._ssrNode("<div class=\"pagination-area m-0\">", "</div>", [_c('NuxtLink', {
    staticClass: "next page-numbers",
    attrs: {
      "to": _vm.next_blog !== null ? `/knowledge-desk/${(_vm$next_blog = _vm.next_blog) === null || _vm$next_blog === void 0 ? void 0 : _vm$next_blog.slug}` : '#',
      "title": "next blog"
    }
  }, [_c('i', {
    staticClass: "flaticon-chevron"
  })])], 1)]) : _vm._e()], 2)]), _vm._ssrNode(" <div class=\"courses-details-area pb-70\"><div class=\"courses-details-contact\"><div class=\"tab courses-details-tab\"><div class=\"tab_content current active\"><div class=\"tabs_item\"><div class=\"courses-details-tab-content\"><div class=\"courses-details-review-form\"><h3>Comments:</h3> " + (_vm.blogComment.length > 0 ? _vm._ssrList(_vm.blogComment, function (item, i) {
    return "<div class=\"review-comments\"><div class=\"review-item\"><div class=\"content\"><img src=\"/images/avatar.webp\" alt=\"Images\"> <div class=\"content-dtls\"><h4>" + _vm._ssrEscape(_vm._s(item.name)) + "</h4> <span>" + _vm._ssrEscape(_vm._s(item.comment_on)) + "</span></div></div> <p>" + _vm._ssrEscape("\n                                                                        " + _vm._s(item.comment) + "\n                                                                    ") + "</p></div></div>";
  }) + " " + (_vm.blogCommentLastPage !== _vm.blogCommentPage ? "<div class=\"text-center\"><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.blogCommentLoading) + " class=\"default-btn\">" + (!_vm.blogCommentLoading ? "\n                                                                        Load More Comments\n                                                                    " : "<div role=\"status\" class=\"spinner-border\"></div>") + "</button></div>" : "<!---->") : "<!---->") + "</div></div></div></div></div></div></div> "), _vm._ssrNode("<div class=\"comments-form\">", "</div>", [_vm._ssrNode("<div class=\"contact-form\">", "</div>", [_vm._ssrNode("<h4>Leave A Comment</h4> "), _c('ValidationObserver', {
    ref: "form",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        handleSubmit
      }) {
        return [_c('form', {
          attrs: {
            "id": "contactForm"
          },
          on: {
            "submit": function ($event) {
              $event.preventDefault();
              return handleSubmit(_vm.formHandler);
            }
          }
        }, [_c('div', {
          staticClass: "row"
        }, [_c('div', {
          staticClass: "col-lg-6 col-sm-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|alpha_spaces",
            "name": "name"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name"
                }],
                staticClass: "form-control",
                attrs: {
                  "type": "text",
                  "name": "name",
                  "id": "name",
                  "data-error": "Please enter your name",
                  "placeholder": "Your Name"
                },
                domProps: {
                  "value": _vm.name
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.name = $event.target.value;
                  }
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-6 col-sm-6"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|email",
            "name": "email"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }],
                staticClass: "form-control",
                attrs: {
                  "type": "email",
                  "name": "email",
                  "id": "email",
                  "data-error": "Please enter your email",
                  "placeholder": "Your Email"
                },
                domProps: {
                  "value": _vm.email
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.email = $event.target.value;
                  }
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12 col-md-12"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "required|custom_message",
            "name": "comment"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              classes,
              errors
            }) {
              return [_c('textarea', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.comment,
                  expression: "comment"
                }],
                staticClass: "form-control",
                attrs: {
                  "name": "message",
                  "id": "message",
                  "cols": "30",
                  "rows": "8",
                  "data-error": "Write your message",
                  "placeholder": "Comment..."
                },
                domProps: {
                  "value": _vm.comment
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.comment = $event.target.value;
                  }
                }
              }), _vm._v(" "), _c('div', {
                class: classes
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-lg-12 col-md-12"
        }, [_c('button', {
          staticClass: "default-btn",
          attrs: {
            "type": "submit",
            "disabled": _vm.commentPostLoading
          }
        }, [!_vm.commentPostLoading ? [_vm._v("\n                                                            Post A Comment\n                                                        ")] : _c('div', {
          staticClass: "spinner-border",
          attrs: {
            "role": "status"
          }
        })], 2)])])])];
      }
    }], null, false, 2733263923)
  })], 2)])] : [_c('el-skeleton', {
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
  })], 1)], 1)], 2)]], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-4\">", "</div>", [_vm._ssrNode("<div class=\"side-bar-area\">", "</div>", [_vm._ssrNode("<div class=\"side-bar-widget\">", "</div>", [_vm._ssrNode("<h3 class=\"title\">Popular post</h3> "), _vm._ssrNode("<div class=\"widget-popular-post\">", "</div>", [_vm.popularBlogLoading ? _vm._ssrNode("<article class=\"item\">", "</article>", _vm._l(8, function (i) {
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
  }), 0) : _vm._e(), _vm._ssrNode(" "), _vm._l(_vm.popularBlog, function (item, i) {
    return !_vm.popularBlogLoading && _vm.popularBlog.length > 0 ? _vm._ssrNode("<article class=\"item\">", "</article>", [_vm._ssrNode("<div class=\"info\">", "</div>", [_vm._ssrNode("<p>" + _vm._ssrEscape(_vm._s(item.published)) + "</p> "), _vm._ssrNode("<h4 class=\"title-text\">", "</h4>", [_c('NuxtLink', {
      attrs: {
        "to": `/knowledge-desk/${item.slug}`
      }
    }, [_vm._v("\n                                                " + _vm._s(item.name) + "\n                                            ")])], 1), _vm._ssrNode(" <p>" + _vm._ssrEscape("\n                                            " + _vm._s(item.short_description) + "\n                                        ") + "</p> <hr>")], 2)]) : _vm._e();
  }), _vm._ssrNode(" "), !_vm.popularBlogLoading && _vm.popularBlog.length > 0 ? _vm._ssrNode("<div class=\"col-12 text-center\">", "</div>", [_c('pagination', {
    attrs: {
      "records": _vm.popularBlogCount,
      "per-page": _vm.popularBlogPerPage,
      "options": {
        edgeNavigation: false
      }
    },
    on: {
      "paginate": _vm.handlePopularBlogPaginationChnage
    },
    model: {
      value: _vm.popularBlogCurrentPage,
      callback: function ($$v) {
        _vm.popularBlogCurrentPage = $$v;
      },
      expression: "popularBlogCurrentPage"
    }
  })], 1) : _vm._e()], 2)], 2)])])], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/knowledge-desk/:slug.vue?vue&type=template&id=5a0650bc&

// EXTERNAL MODULE: ./components/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(210);

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/knowledge-desk/:slug.vue?vue&type=script&lang=js&


/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: "BlogDetailPage",
  layout: "MainPageLayout",
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
    this.getPopluarBlog(this.$route.query.page ? Number(this.$route.query.page) : 1);
  },
  data() {
    return {
      blogLoading: false,
      blog: null,
      prev_blog: null,
      next_blog: null,
      popularBlogLoading: false,
      popularBlog: [],
      popularBlogCount: 1,
      popularBlogCurrentPage: 1,
      popularBlogPerPage: 1,
      blogCommentLoading: false,
      blogComment: [],
      blogCommentPage: 1,
      blogCommentCount: 1,
      blogCommentPerPage: 1,
      blogCommentLastPage: 1,
      commentPostLoading: false,
      name: this.$auth.loggedIn ? this.$auth.user.name : '',
      email: this.$auth.loggedIn ? this.$auth.user.email : '',
      comment: ''
    };
  },
  head() {
    var _this$blog, _this$blog2, _this$blog3, _this$blog4, _this$blog5;
    return {
      title: (_this$blog = this.blog) === null || _this$blog === void 0 ? void 0 : _this$blog.meta_title,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'og:title',
        name: 'og:title',
        content: (_this$blog2 = this.blog) === null || _this$blog2 === void 0 ? void 0 : _this$blog2.meta_title
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }, {
        hid: 'description',
        name: 'description',
        content: (_this$blog3 = this.blog) === null || _this$blog3 === void 0 ? void 0 : _this$blog3.meta_description
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: (_this$blog4 = this.blog) === null || _this$blog4 === void 0 ? void 0 : _this$blog4.meta_keywords
      }],
      script: [{
        type: 'application/ld+json',
        innerHTML: (_this$blog5 = this.blog) === null || _this$blog5 === void 0 ? void 0 : _this$blog5.meta_scripts // <- set jsonld object in data or wherever you want
      }],

      __dangerouslyDisableSanitizers: ['script']
    };
  },
  async fetch() {
    await this.getBlog();
  },
  watch: {
    $route(to, from) {
      this.handlePopularBlogPageChnage();
    },
    blog(to, from) {
      this.getBlogComment();
    },
    blogCommentPage(to, from) {
      this.getBlogComment(to);
    }
  },
  methods: {
    async getBlog() {
      this.blogLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].blog + `/${this.$route.params.slug}`); // eslint-disable-line
        this.blog = response.data.blog;
        this.next_blog = response.data.next_blog;
        this.prev_blog = response.data.prev_blog;
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
    async getPopluarBlog(page = 0) {
      this.popularBlogLoading = true;
      try {
        var _response$data, _response$data$meta, _response$data2, _response$data2$meta;
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].blog + `?total=8&page=${page}&filter[is_popular]=true`); // eslint-disable-line
        this.popularBlog = response.data.data;
        this.popularBlogCount = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$meta = _response$data.meta) === null || _response$data$meta === void 0 ? void 0 : _response$data$meta.total;
        this.popularBlogPerPage = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$meta = _response$data2.meta) === null || _response$data2$meta === void 0 ? void 0 : _response$data2$meta.per_page;
        this.popularBlogCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.popularBlogLoading = false;
      }
    },
    handlePopularBlogPaginationChnage(page) {
      this.$router.push({
        query: {
          page
        }
      });
    },
    handlePopularBlogPageChnage() {
      this.popularBlogCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
      this.getPopluarBlog(this.$route.query.page ? Number(this.$route.query.page) : 1);
    },
    async formHandler() {
      this.commentPostLoading = true;
      try {
        var _this$blog6;
        const response = await this.$publicApi.post(api_routes["a" /* API_ROUTES */].blog + `/comment/${(_this$blog6 = this.blog) === null || _this$blog6 === void 0 ? void 0 : _this$blog6.id}/create`, {
          name: this.name,
          email: this.email,
          comment: this.comment
        });
        this.comment = '';
        this.$refs.form.reset();
        this.$toast.success('Commented Successfully.');
      } catch (err) {
        var _err$response, _err$response$data, _err$response$data$er, _err$response$data$er2, _err$response2, _err$response2$data, _err$response2$data$e, _err$response3, _err$response3$data, _err$response3$data$e, _err$response3$data$e2, _err$response4, _err$response4$data, _err$response4$data$e, _err$response5, _err$response5$data, _err$response5$data$e, _err$response5$data$e2, _err$response6, _err$response6$data, _err$response6$data$e, _err$response7, _err$response7$data, _err$response8, _err$response8$data, _err$response9, _err$response9$data, _err$response10, _err$response10$data;
        this.$refs.form.setErrors({
          email: (err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : (_err$response$data$er = _err$response$data.errors) === null || _err$response$data$er === void 0 ? void 0 : (_err$response$data$er2 = _err$response$data$er.email) === null || _err$response$data$er2 === void 0 ? void 0 : _err$response$data$er2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : (_err$response2$data$e = _err$response2$data.errors) === null || _err$response2$data$e === void 0 ? void 0 : _err$response2$data$e.email[0]),
          name: (err === null || err === void 0 ? void 0 : (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : (_err$response3$data = _err$response3.data) === null || _err$response3$data === void 0 ? void 0 : (_err$response3$data$e = _err$response3$data.errors) === null || _err$response3$data$e === void 0 ? void 0 : (_err$response3$data$e2 = _err$response3$data$e.name) === null || _err$response3$data$e2 === void 0 ? void 0 : _err$response3$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : (_err$response4$data = _err$response4.data) === null || _err$response4$data === void 0 ? void 0 : (_err$response4$data$e = _err$response4$data.errors) === null || _err$response4$data$e === void 0 ? void 0 : _err$response4$data$e.name[0]),
          comment: (err === null || err === void 0 ? void 0 : (_err$response5 = err.response) === null || _err$response5 === void 0 ? void 0 : (_err$response5$data = _err$response5.data) === null || _err$response5$data === void 0 ? void 0 : (_err$response5$data$e = _err$response5$data.errors) === null || _err$response5$data$e === void 0 ? void 0 : (_err$response5$data$e2 = _err$response5$data$e.comment) === null || _err$response5$data$e2 === void 0 ? void 0 : _err$response5$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response6 = err.response) === null || _err$response6 === void 0 ? void 0 : (_err$response6$data = _err$response6.data) === null || _err$response6$data === void 0 ? void 0 : (_err$response6$data$e = _err$response6$data.errors) === null || _err$response6$data$e === void 0 ? void 0 : _err$response6$data$e.comment[0])
        });
        if (err !== null && err !== void 0 && (_err$response7 = err.response) !== null && _err$response7 !== void 0 && (_err$response7$data = _err$response7.data) !== null && _err$response7$data !== void 0 && _err$response7$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response8 = err.response) === null || _err$response8 === void 0 ? void 0 : (_err$response8$data = _err$response8.data) === null || _err$response8$data === void 0 ? void 0 : _err$response8$data.message);
        if (err !== null && err !== void 0 && (_err$response9 = err.response) !== null && _err$response9 !== void 0 && (_err$response9$data = _err$response9.data) !== null && _err$response9$data !== void 0 && _err$response9$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response10 = err.response) === null || _err$response10 === void 0 ? void 0 : (_err$response10$data = _err$response10.data) === null || _err$response10$data === void 0 ? void 0 : _err$response10$data.error);
      } finally {
        this.commentPostLoading = false;
      }
    },
    async getBlogComment(page = 1) {
      if (this.blog) {
        this.blogCommentLoading = true;
        try {
          var _this$blog7, _response$data3, _response$data3$meta, _response$data4, _response$data4$meta, _response$data5, _response$data5$meta;
          const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].blog + `/comment/${(_this$blog7 = this.blog) === null || _this$blog7 === void 0 ? void 0 : _this$blog7.id}/paginate?total=8&page=${page}`); // eslint-disable-line
          this.blogComment = [...this.blogComment, ...response.data.data];
          this.blogCommentCount = response === null || response === void 0 ? void 0 : (_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : (_response$data3$meta = _response$data3.meta) === null || _response$data3$meta === void 0 ? void 0 : _response$data3$meta.total;
          this.blogCommentPerPage = response === null || response === void 0 ? void 0 : (_response$data4 = response.data) === null || _response$data4 === void 0 ? void 0 : (_response$data4$meta = _response$data4.meta) === null || _response$data4$meta === void 0 ? void 0 : _response$data4$meta.per_page;
          this.blogCommentLastPage = response === null || response === void 0 ? void 0 : (_response$data5 = response.data) === null || _response$data5 === void 0 ? void 0 : (_response$data5$meta = _response$data5.meta) === null || _response$data5$meta === void 0 ? void 0 : _response$data5$meta.last_page;
        } catch (err) {
          // console.log(err.response);// eslint-disable-line
          this.$nuxt.context.error({
            status: err.response.status,
            message: err.response.data.message
          });
        } finally {
          this.blogCommentLoading = false;
        }
      }
    }
  },
  components: {
    Breadcrumb: Breadcrumb["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/knowledge-desk/:slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var knowledge_desk_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/knowledge-desk/:slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  knowledge_desk_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0856f8c2"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=:slug.js.map