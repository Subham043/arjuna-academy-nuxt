exports.ids = [37];
exports.modules = {

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_ROUTES; });
const API_ROUTES = {
  mission_vision: "/api/v1/mission-vision",
  seo: "/api/v1/seo",
  faq: "/api/v1/faq",
  legal: "/api/v1/legal",
  branch: "/api/v1/branch",
  course: "/api/v1/course",
  gallery: "/api/v1/gallery",
  campaign: "/api/v1/campaign",
  event: "/api/v1/event",
  testimonial: "/api/v1/testimonial",
  counter: "/api/v1/counter",
  feature: "/api/v1/feature",
  achieverCategory: "/api/v1/achiever/category",
  achieverStudent: "/api/v1/achiever/student",
  aboutSection: "/api/v1/about-section",
  bannerSection: "/api/v1/home-page-banner",
  blog: "/api/v1/blog",
  expertTip: "/api/v1/expert-tip",
  management: "/api/v1/team-member/management",
  staff: "/api/v1/team-member/staff",
  contact: "/api/v1/contact-form",
  day_scholar: "/api/v1/day-scholar-form",
  subscription: "/api/v1/subscription-form",
  register: "/api/v1/auth/register",
  forgot_password: "/api/v1/auth/forgot-password",
  reset_password: "/api/v1/auth/reset-password",
  vrddhi: "/api/v1/vrddhi-form",
  admission_puc: "/api/v1/admission/puc",
  password_update: "/api/v1/profile/update-password",
  profile_update: "/api/v1/profile/update",
  admission_not_puc: "/api/v1/admission/not-puc"
};

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/knowledge-desk/:slug.vue?vue&type=template&id=e6194174&
var render = function render() {
  var _vm$blog, _vm$blog2, _vm$blog3, _vm$blog4, _vm$blog5, _vm$blog6, _vm$blog7, _vm$blog8, _vm$blog9, _vm$blog10, _vm$prev_blog, _vm$blog11, _vm$blog12, _vm$blog13, _vm$blog14, _vm$blog15, _vm$blog16, _vm$blog17, _vm$next_blog;
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"blog-details-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8\">", "</div>", [_vm._ssrNode("<div class=\"blog-details-content pr-20\">", "</div>", [!_vm.blogLoading ? [_vm._ssrNode("<div class=\"blog-preview-img\">", "</div>", [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": (_vm$blog3 = _vm.blog) === null || _vm$blog3 === void 0 ? void 0 : _vm$blog3.image,
      "alt": (_vm$blog4 = _vm.blog) === null || _vm$blog4 === void 0 ? void 0 : _vm$blog4.image_alt,
      "title": (_vm$blog5 = _vm.blog) === null || _vm$blog5 === void 0 ? void 0 : _vm$blog5.image_title
    }
  }, [])]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"tag-list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fa', 'user']
    }
  }), _vm._ssrNode(_vm._ssrEscape("  " + _vm._s((_vm$blog6 = _vm.blog) === null || _vm$blog6 === void 0 ? void 0 : _vm$blog6.published) + "\n                                    "))], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fa', 'user']
    }
  }), _vm._ssrNode(" \n                                        "), _c('NuxtLink', {
    attrs: {
      "to": "/leadership-team",
      "aria-label": (_vm$blog7 = _vm.blog) === null || _vm$blog7 === void 0 ? void 0 : _vm$blog7.author_name
    },
    domProps: {
      "innerHTML": _vm._s((_vm$blog8 = _vm.blog) === null || _vm$blog8 === void 0 ? void 0 : _vm$blog8.author_name)
    }
  })], 2)])], 2), _vm._ssrNode(" <h1>" + _vm._s((_vm$blog9 = _vm.blog) === null || _vm$blog9 === void 0 ? void 0 : _vm$blog9.heading) + "</h1> <div>" + _vm._s((_vm$blog10 = _vm.blog) === null || _vm$blog10 === void 0 ? void 0 : _vm$blog10.description) + "</div> "), _vm._ssrNode("<div class=\"article-share\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center justify-content-between\">", "</div>", [_vm.prev_blog !== null ? _vm._ssrNode("<div class=\"col-lg-auto col-md-auto\">", "</div>", [_vm._ssrNode("<div class=\"pagination-area m-0\">", "</div>", [_c('NuxtLink', {
    staticClass: "prev page-numbers",
    attrs: {
      "to": _vm.prev_blog !== null ? `/knowledge-desk/${(_vm$prev_blog = _vm.prev_blog) === null || _vm$prev_blog === void 0 ? void 0 : _vm$prev_blog.slug}` : '#',
      "title": "previous blog",
      "aria-label": "previos blog"
    }
  }, [_c('i', {
    staticClass: "flaticon-left-arrow"
  })])], 1)]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-auto col-md-auto\">", "</div>", [_vm._ssrNode("<div class=\"article-social-icon\">", "</div>", [_vm._ssrNode("<ul class=\"social-icon\">", "</ul>", [_vm._ssrNode("<li class=\"title\">Share :</li> "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a" + _vm._ssrAttr("href", `https://www.facebook.com/share.php?u=https://www.aaaedu.in/knowledge-desk/${(_vm$blog11 = _vm.blog) === null || _vm$blog11 === void 0 ? void 0 : _vm$blog11.slug}&title=${(_vm$blog12 = _vm.blog) === null || _vm$blog12 === void 0 ? void 0 : _vm$blog12.name}`) + " target=\"_blank\">", "</a>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fab', 'facebook-f']
    }
  })], 1)])]), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a" + _vm._ssrAttr("href", `https://twitter.com/share?text=${(_vm$blog13 = _vm.blog) === null || _vm$blog13 === void 0 ? void 0 : _vm$blog13.name}&url=https://www.aaaedu.in/knowledge-desk/${(_vm$blog14 = _vm.blog) === null || _vm$blog14 === void 0 ? void 0 : _vm$blog14.slug}`) + " target=\"_blank\">", "</a>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fab', 'twitter']
    }
  })], 1)])]), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a" + _vm._ssrAttr("href", `https://www.linkedin.com/shareArticle?mini=true&url=https://www.aaaedu.in/knowledge-desk/${(_vm$blog15 = _vm.blog) === null || _vm$blog15 === void 0 ? void 0 : _vm$blog15.slug}&title=${(_vm$blog16 = _vm.blog) === null || _vm$blog16 === void 0 ? void 0 : _vm$blog16.name}&source=${(_vm$blog17 = _vm.blog) === null || _vm$blog17 === void 0 ? void 0 : _vm$blog17.name}`) + " target=\"_blank\">", "</a>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fab', 'linkedin']
    }
  })], 1)])])], 2)])]), _vm._ssrNode(" "), _vm.next_blog !== null ? _vm._ssrNode("<div class=\"col-lg-auto col-md-auto\">", "</div>", [_vm._ssrNode("<div class=\"pagination-area m-0\">", "</div>", [_c('NuxtLink', {
    staticClass: "next page-numbers",
    attrs: {
      "to": _vm.next_blog !== null ? `/knowledge-desk/${(_vm$next_blog = _vm.next_blog) === null || _vm$next_blog === void 0 ? void 0 : _vm$next_blog.slug}` : '#',
      "title": "next blog",
      "aria-label": "next blog"
    }
  }, [_c('i', {
    staticClass: "flaticon-chevron"
  })])], 1)]) : _vm._e()], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"blog-comment-area\" class=\"courses-details-area pb-70\">", "</div>", [_vm._ssrNode("<div class=\"courses-details-contact\">", "</div>", [_vm._ssrNode("<div class=\"tab courses-details-tab\">", "</div>", [_vm._ssrNode("<div class=\"tab_content current active\">", "</div>", [_vm._ssrNode("<div class=\"tabs_item\">", "</div>", [_vm._ssrNode("<div class=\"courses-details-tab-content\">", "</div>", [_vm._ssrNode("<div class=\"courses-details-review-form\">", "</div>", [_vm._ssrNode("<h3>Comments:</h3> "), _vm.blogComment.length > 0 ? [_vm._l(_vm.blogComment, function (item, i) {
    return _vm._ssrNode("<div class=\"review-comments\">", "</div>", [_vm._ssrNode("<div class=\"review-item\">", "</div>", [_vm._ssrNode("<div class=\"content\">", "</div>", [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": "/images/avatar.webp",
        "alt": "Images"
      }
    }, []), _vm._ssrNode(" <div class=\"content-dtls\"><h4>" + _vm._s(item.name) + "</h4> <span>" + _vm._s(item.comment_on) + "</span></div>")], 2), _vm._ssrNode(" <p>" + _vm._s(item.comment) + "</p>")], 2)]);
  }), _vm._ssrNode(" " + (_vm.blogCommentLastPage !== _vm.blogCommentPage ? "<div class=\"text-center\"><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.blogCommentLoading) + " class=\"default-btn\">" + (!_vm.blogCommentLoading ? "\n                                                                        Load More Comments\n                                                                    " : "<div role=\"status\" class=\"spinner-border\"></div>") + "</button></div>" : "<!---->"))] : _vm._e()], 2)])])])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"comments-form\">", "</div>", [_vm._ssrNode("<div class=\"contact-form\">", "</div>", [_vm._ssrNode("<h4>Leave A Comment</h4> "), _c('ValidationObserver', {
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
  })], 2)])] : [_c('PageDetailLoading')]], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"popular-blog-area\" class=\"col-lg-4\">", "</div>", [_vm._ssrNode("<div class=\"side-bar-area\">", "</div>", [_vm._ssrNode("<div class=\"side-bar-widget\">", "</div>", [_vm._ssrNode("<h3 class=\"title\">Popular post</h3> "), _vm._ssrNode("<div class=\"widget-popular-post\">", "</div>", [_vm.popularBlogLoading ? _c('PopularPostLoading') : _vm._e(), _vm._ssrNode(" "), _vm._l(_vm.popularBlog, function (item, i) {
    return !_vm.popularBlogLoading && _vm.popularBlog.length > 0 ? _vm._ssrNode("<article class=\"item\">", "</article>", [_vm._ssrNode("<div class=\"info\">", "</div>", [_vm._ssrNode("<p>" + _vm._ssrEscape(_vm._s(item.published)) + "</p> "), _vm._ssrNode("<h4 class=\"title-text\">", "</h4>", [_c('NuxtLink', {
      attrs: {
        "aria-label": item.name,
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

// CONCATENATED MODULE: ./pages/knowledge-desk/:slug.vue?vue&type=template&id=e6194174&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(204);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/knowledge-desk/:slug.vue?vue&type=script&lang=js&

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: "BlogDetailPage",
  layout: "MainPageLayout",
  mounted() {
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
      if (false) {}
    },
    blog(to, from) {
      this.getBlogComment();
    },
    blogCommentPage(to, from) {
      this.getBlogComment(to);
      if (false) {}
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
    Breadcrumb: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 251)),
    PageDetailLoading: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 263)),
    PopularPostLoading: () => __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, 264))
  }
});
// CONCATENATED MODULE: ./pages/knowledge-desk/:slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var knowledge_desk_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/knowledge-desk/:slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  knowledge_desk_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c9349c38"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=:slug.js.map