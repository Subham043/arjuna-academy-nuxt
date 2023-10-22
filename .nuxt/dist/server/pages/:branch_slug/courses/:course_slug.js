exports.ids = [19];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/:branch_slug/courses/:course_slug.vue?vue&type=template&id=75689674&
var render = function render() {
  var _vm$course, _vm$course2, _vm$course3, _vm$course4, _vm$course5, _vm$course6, _vm$course7, _vm$course8, _vm$course9, _vm$course10, _vm$course12, _vm$course13, _vm$course14, _vm$course15, _vm$course16, _vm$course18, _vm$course19, _vm$course20, _vm$course21, _vm$course22, _vm$course23, _vm$course24, _vm$course25, _this$course, _vm$course26, _vm$course27, _this$course2, _vm$course28, _vm$course29, _vm$course30, _vm$course31, _vm$course32, _vm$course33, _vm$course34;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"inner-banner inner-banner-bg9\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"inner-title\">", "</div>", [_vm._ssrNode("<h3>" + _vm._s((_vm$course = _vm.course) === null || _vm$course === void 0 ? void 0 : _vm$course.name) + "</h3> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" <li>Courses</li> <li>" + _vm._s((_vm$course2 = _vm.course) === null || _vm$course2 === void 0 ? void 0 : _vm$course2.name) + "</li>")], 2)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"courses-details-area pt-70 pb-70\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8\">", "</div>", [!_vm.courseLoading ? [_vm._ssrNode("<div class=\"courses-details-contact\">", "</div>", [_vm._ssrNode("<div class=\"tab courses-details-tab\">", "</div>", [_vm._ssrNode("<div class=\"tab_content current active\">", "</div>", [_vm._ssrNode("<div class=\"tabs_item\">", "</div>", [_vm._ssrNode("<div class=\"courses-details-tab-content\">", "</div>", [_vm._ssrNode((((_vm$course3 = _vm.course) === null || _vm$course3 === void 0 ? void 0 : _vm$course3.branch_details.length) > 0 ? "<div class=\"courses-details-into\">" + _vm._s((_vm$course4 = _vm.course) === null || _vm$course4 === void 0 ? void 0 : _vm$course4.branch_details[0].description) + "</div>" : "<!---->") + " <div class=\"courses-details-into\">" + _vm._s((_vm$course5 = _vm.course) === null || _vm$course5 === void 0 ? void 0 : _vm$course5.description) + "</div> "), ((_vm$course6 = _vm.course) === null || _vm$course6 === void 0 ? void 0 : _vm$course6.branch_details.length) > 0 && ((_vm$course7 = _vm.course) === null || _vm$course7 === void 0 ? void 0 : _vm$course7.branch_details[0].include_staff) === true ? [_vm._ssrNode("<div class=\"section-title text-center\"><span>STAFFS</span> <h2>" + _vm._s((_vm$course8 = _vm.course) === null || _vm$course8 === void 0 ? void 0 : _vm$course8.branch_details[0].staff_heading) + "</h2></div> "), ((_vm$course9 = _vm.course) === null || _vm$course9 === void 0 ? void 0 : _vm$course9.branch_details[0].staffs.length) > 0 ? _vm._ssrNode("<div class=\"instructor-row row justify-content-center mt-4\">", "</div>", _vm._l((_vm$course10 = _vm.course) === null || _vm$course10 === void 0 ? void 0 : _vm$course10.branch_details[0].staffs, function (item, i) {
    var _vm$course11;
    return ((_vm$course11 = _vm.course) === null || _vm$course11 === void 0 ? void 0 : _vm$course11.branch_details[0].staffs.length) > 0 ? _vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-6\">", "</div>", [_c('InstructorCard', {
      attrs: {
        "image": item.image,
        "image_alt": item.image_alt,
        "image_title": item.image_title,
        "name": item.name,
        "designation": item.designation,
        "description": item.description
      }
    })], 1) : _vm._e();
  }), 0) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), ((_vm$course12 = _vm.course) === null || _vm$course12 === void 0 ? void 0 : _vm$course12.branch_details.length) > 0 && ((_vm$course13 = _vm.course) === null || _vm$course13 === void 0 ? void 0 : _vm$course13.branch_details[0].include_topper) === true ? [_vm._ssrNode("<div class=\"section-title text-center\"><span>ACHIEVERS</span> <h2>" + _vm._s((_vm$course14 = _vm.course) === null || _vm$course14 === void 0 ? void 0 : _vm$course14.branch_details[0].topper_heading) + "</h2></div> "), ((_vm$course15 = _vm.course) === null || _vm$course15 === void 0 ? void 0 : _vm$course15.branch_details[0].achievers.length) > 0 ? _vm._ssrNode("<div class=\"achiever-row row justify-content-center mt-4\">", "</div>", _vm._l((_vm$course16 = _vm.course) === null || _vm$course16 === void 0 ? void 0 : _vm$course16.branch_details[0].achievers, function (item, i) {
    var _vm$course17;
    return ((_vm$course17 = _vm.course) === null || _vm$course17 === void 0 ? void 0 : _vm$course17.branch_details[0].achievers.length) > 0 ? _vm._ssrNode("<div class=\"col-lg-3 col-md-4 col-sm-6\">", "</div>", [_c('AchieverStudentCard', {
      attrs: {
        "image": item.image,
        "image_alt": item.image_alt,
        "image_title": item.image_title,
        "name": item.name,
        "rank": item.rank,
        "college": item.college
      }
    })], 1) : _vm._e();
  }), 0) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), ((_vm$course18 = _vm.course) === null || _vm$course18 === void 0 ? void 0 : _vm$course18.branch_details.length) > 0 && ((_vm$course19 = _vm.course) === null || _vm$course19 === void 0 ? void 0 : _vm$course19.branch_details[0].include_testimonial) === true ? [_vm._ssrNode("<div class=\"section-title text-center\"><span>TESTIMONIAL</span> <h2>" + _vm._s((_vm$course20 = _vm.course) === null || _vm$course20 === void 0 ? void 0 : _vm$course20.branch_details[0].testimonial_heading) + "</h2></div> "), ((_vm$course21 = _vm.course) === null || _vm$course21 === void 0 ? void 0 : _vm$course21.branch_details[0].testimonials.length) > 0 ? _vm._ssrNode("<div class=\"testimonials-slider-two row justify-content-center mt-4\">", "</div>", _vm._l((_vm$course22 = _vm.course) === null || _vm$course22 === void 0 ? void 0 : _vm$course22.branch_details[0].testimonials, function (item, i) {
    return _vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-sm-12\">", "</div>", [_c('TestimonialCard', {
      attrs: {
        "image": item.image,
        "name": item.name,
        "star": item.star,
        "message": item.message,
        "designation": item.designation
      }
    })], 1);
  }), 0) : _vm._e()] : _vm._e()], 2)])])])])] : [_c('PageDetailLoading', {
    attrs: {
      "image": false
    }
  })]], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-4\">", "</div>", [!_vm.courseLoading ? [_vm._ssrNode("<div class=\"courses-details-sidebar\">", "</div>", [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "w-100",
    attrs: {
      "data-src": (_vm$course23 = _vm.course) === null || _vm$course23 === void 0 ? void 0 : _vm$course23.image,
      "alt": (_vm$course24 = _vm.course) === null || _vm$course24 === void 0 ? void 0 : _vm$course24.image_alt,
      "title": (_vm$course25 = _vm.course) === null || _vm$course25 === void 0 ? void 0 : _vm$course25.image_title,
      "do-not-lazy": ""
    }
  }, []), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<span class=\"d-flex justify-content-between align-items-center\">" + (((_this$course = this.course) === null || _this$course === void 0 ? void 0 : _this$course.branch_details.length) > 0 && ((_vm$course26 = _vm.course) === null || _vm$course26 === void 0 ? void 0 : _vm$course26.branch_details[0].discount) != 0 ? "<small class=\"d-inline-flex m-0 px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2\">" + _vm._ssrEscape(_vm._s((_vm$course27 = _vm.course) === null || _vm$course27 === void 0 ? void 0 : _vm$course27.branch_details[0].discount) + "% OFF") + "</small>" : "<!---->") + " <h5 class=\"d-inline m-0\">" + (((_this$course2 = this.course) === null || _this$course2 === void 0 ? void 0 : _this$course2.branch_details.length) > 0 && ((_vm$course28 = _vm.course) === null || _vm$course28 === void 0 ? void 0 : _vm$course28.branch_details[0].discount) != 0 ? "<code><del>" + _vm._ssrEscape("₹" + _vm._s((_vm$course29 = _vm.course) === null || _vm$course29 === void 0 ? void 0 : _vm$course29.branch_details[0].amount)) + "</del></code>" : "<!---->") + " <span>" + _vm._ssrEscape("₹" + _vm._s((_vm$course30 = _vm.course) === null || _vm$course30 === void 0 ? void 0 : _vm$course30.branch_details[0].discounted_amount)) + "</span></h5></span> <hr> "), _vm._ssrNode("<div>", "</div>", [_c('ValidationObserver', {
    ref: "form"
  }, [_c('form', {
    attrs: {
      "id": "contactForm"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h3', {
    staticClass: "user-title"
  }, [_vm._v("Fill in your details")])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-12 col-md-12 mb-2"
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
        return [_c('el-input', {
          staticClass: "w-100",
          attrs: {
            "placeholder": "Name"
          },
          model: {
            value: _vm.name,
            callback: function ($$v) {
              _vm.name = $$v;
            },
            expression: "name"
          }
        }), _vm._v(" "), _c('div', {
          class: classes
        }, [_vm._v(_vm._s(errors[0]))])];
      }
    }], null, false, 3584023574)
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-12 col-md-12 mb-2"
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
        return [_c('el-input', {
          staticClass: "w-100",
          attrs: {
            "placeholder": "Email"
          },
          model: {
            value: _vm.email,
            callback: function ($$v) {
              _vm.email = $$v;
            },
            expression: "email"
          }
        }), _vm._v(" "), _c('div', {
          class: classes
        }, [_vm._v(_vm._s(errors[0]))])];
      }
    }], null, false, 2382466294)
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-12 col-md-12 mb-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('ValidationProvider', {
    attrs: {
      "rules": "required|phone",
      "name": "phone"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        classes,
        errors
      }) {
        return [_c('el-input', {
          staticClass: "w-100",
          attrs: {
            "placeholder": "Phone"
          },
          model: {
            value: _vm.phone,
            callback: function ($$v) {
              _vm.phone = $$v;
            },
            expression: "phone"
          }
        }), _vm._v(" "), _c('div', {
          class: classes
        }, [_vm._v(_vm._s(errors[0]))])];
      }
    }], null, false, 2728152054)
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-12 col-md-12"
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('button', {
    staticClass: "default-btn",
    attrs: {
      "type": "button",
      "disabled": _vm.enrollmentLoading
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.formHandler.apply(null, arguments);
      }
    }
  }, [!_vm.enrollmentLoading ? [_vm._v("\n                                                                Enroll Now\n                                                            ")] : _c('div', {
    staticClass: "spinner-border",
    attrs: {
      "role": "status"
    }
  })], 2), _vm._v(" "), _c('button', {
    staticClass: "default-btn mx-1",
    attrs: {
      "type": "button",
      "disabled": _vm.enrollmentLoading
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.formCallbackHandler.apply(null, arguments);
      }
    }
  }, [!_vm.enrollmentLoading ? [_vm._v("\n                                                                Request Callback\n                                                            ")] : _c('div', {
    staticClass: "spinner-border",
    attrs: {
      "role": "status"
    }
  })], 2)])])])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"social-link\">", "</ul>", [_vm._ssrNode("<li class=\"social-title\">Share this course:</li> "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a aria-label=\"facebook share\"" + _vm._ssrAttr("href", `https://www.facebook.com/share.php?u=https://www.aaaedu.in/${_vm.$route.params.branch_slug}/courses/${_vm.$route.params.course_slug}&title=${(_vm$course31 = _vm.course) === null || _vm$course31 === void 0 ? void 0 : _vm$course31.name}`) + " target=\"_blank\">", "</a>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fab', 'facebook-f']
    }
  })], 1)])]), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a aria-label=\"twitter share\"" + _vm._ssrAttr("href", `https://twitter.com/share?text=${(_vm$course32 = _vm.course) === null || _vm$course32 === void 0 ? void 0 : _vm$course32.name}&url=https://www.aaaedu.in/${_vm.$route.params.branch_slug}/courses/${_vm.$route.params.course_slug}`) + " target=\"_blank\">", "</a>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fab', 'twitter']
    }
  })], 1)])]), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a aria-label=\"linkedin share\"" + _vm._ssrAttr("href", `https://www.linkedin.com/shareArticle?mini=true&url=https://www.aaaedu.in/${_vm.$route.params.branch_slug}/courses/${_vm.$route.params.course_slug}&title=${(_vm$course33 = _vm.course) === null || _vm$course33 === void 0 ? void 0 : _vm$course33.name}&source=${(_vm$course34 = _vm.course) === null || _vm$course34 === void 0 ? void 0 : _vm$course34.name}`) + " target=\"_blank\">", "</a>", [_vm._ssrNode("<span class=\"svg-icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fab', 'linkedin']
    }
  })], 1)])])], 2)], 2)], 2)] : [_c('el-skeleton', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "animated": ""
    }
  }, [_c('template', {
    slot: "template"
  }, [_c('div', {
    staticClass: "courses-details-sidebar"
  }, [_c('el-skeleton-item', {
    staticStyle: {
      "width": "100%",
      "height": "440px"
    },
    attrs: {
      "variant": "rect"
    }
  })], 1)])], 2)]], 2)], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/:branch_slug/courses/:course_slug.vue?vue&type=template&id=75689674&

// EXTERNAL MODULE: ./helper/api_routes.js
var api_routes = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/:branch_slug/courses/:course_slug.vue?vue&type=script&lang=js&

/* harmony default export */ var _course_slugvue_type_script_lang_js_ = ({
  name: "CourseDetailPage",
  layout: "MainPageLayout",
  data() {
    return {
      courseLoading: false,
      course: null,
      enrollmentLoading: false,
      name: this.$auth.loggedIn ? this.$auth.user.name : '',
      email: this.$auth.loggedIn ? this.$auth.user.email : '',
      phone: this.$auth.loggedIn ? this.$auth.user.phone : ''
    };
  },
  head() {
    var _this$course, _this$course2, _this$course3, _this$course4, _this$course5, _this$course6, _this$course7, _this$course8, _this$course9, _this$course10;
    return {
      title: ((_this$course = this.course) === null || _this$course === void 0 ? void 0 : _this$course.branch_details.length) > 0 ? (_this$course2 = this.course) === null || _this$course2 === void 0 ? void 0 : _this$course2.branch_details[0].meta_title : '',
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'og:title',
        name: 'og:title',
        content: ((_this$course3 = this.course) === null || _this$course3 === void 0 ? void 0 : _this$course3.branch_details.length) > 0 ? (_this$course4 = this.course) === null || _this$course4 === void 0 ? void 0 : _this$course4.branch_details[0].meta_title : ''
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }, {
        hid: 'description',
        name: 'description',
        content: ((_this$course5 = this.course) === null || _this$course5 === void 0 ? void 0 : _this$course5.branch_details.length) > 0 ? (_this$course6 = this.course) === null || _this$course6 === void 0 ? void 0 : _this$course6.branch_details[0].meta_description : ''
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: ((_this$course7 = this.course) === null || _this$course7 === void 0 ? void 0 : _this$course7.branch_details.length) > 0 ? (_this$course8 = this.course) === null || _this$course8 === void 0 ? void 0 : _this$course8.branch_details[0].meta_keywords : ''
      }],
      script: [{
        type: 'application/ld+json',
        innerHTML: ((_this$course9 = this.course) === null || _this$course9 === void 0 ? void 0 : _this$course9.branch_details.length) > 0 ? (_this$course10 = this.course) === null || _this$course10 === void 0 ? void 0 : _this$course10.branch_details[0].meta_scripts : '' // <- set jsonld object in data or wherever you want
      }, {
        src: 'https://checkout.razorpay.com/v1/checkout.js',
        async: true
      }],
      __dangerouslyDisableSanitizers: ['script']
    };
  },
  async fetch() {
    await this.getCourse();
  },
  methods: {
    async getCourse() {
      this.courseLoading = true;
      try {
        const response = await this.$publicApi.get(api_routes["a" /* API_ROUTES */].course + `/${this.$route.params.course_slug}/branch/${this.$route.params.branch_slug}`); // eslint-disable-line
        this.course = response.data.course;
      } catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.$nuxt.context.error({
          status: err.response.status,
          message: err.response.data.message
        });
      } finally {
        this.courseLoading = false;
      }
    },
    async formHandler() {
      this.$refs.form.validate().then(async success => {
        if (!success) {
          return;
        }
        this.enrollmentLoading = true;
        try {
          const response = await this.$publicApi.post(api_routes["a" /* API_ROUTES */].course + `/${this.$route.params.course_slug}/branch/${this.$route.params.branch_slug}/enroll`, {
            name: this.name,
            email: this.email,
            phone: this.phone
          });
          this.$refs.form.reset();
          this.loadRazorpay(response.data.enrollmentForm);
        } catch (err) {
          var _err$response, _err$response$data, _err$response$data$er, _err$response$data$er2, _err$response2, _err$response2$data, _err$response2$data$e, _err$response3, _err$response3$data, _err$response3$data$e, _err$response3$data$e2, _err$response4, _err$response4$data, _err$response4$data$e, _err$response5, _err$response5$data, _err$response5$data$e, _err$response5$data$e2, _err$response6, _err$response6$data, _err$response6$data$e, _err$response7, _err$response7$data, _err$response8, _err$response8$data, _err$response9, _err$response9$data, _err$response10, _err$response10$data;
          this.$refs.form.setErrors({
            email: (err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : (_err$response$data$er = _err$response$data.errors) === null || _err$response$data$er === void 0 ? void 0 : (_err$response$data$er2 = _err$response$data$er.email) === null || _err$response$data$er2 === void 0 ? void 0 : _err$response$data$er2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : (_err$response2$data$e = _err$response2$data.errors) === null || _err$response2$data$e === void 0 ? void 0 : _err$response2$data$e.email[0]),
            name: (err === null || err === void 0 ? void 0 : (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : (_err$response3$data = _err$response3.data) === null || _err$response3$data === void 0 ? void 0 : (_err$response3$data$e = _err$response3$data.errors) === null || _err$response3$data$e === void 0 ? void 0 : (_err$response3$data$e2 = _err$response3$data$e.name) === null || _err$response3$data$e2 === void 0 ? void 0 : _err$response3$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : (_err$response4$data = _err$response4.data) === null || _err$response4$data === void 0 ? void 0 : (_err$response4$data$e = _err$response4$data.errors) === null || _err$response4$data$e === void 0 ? void 0 : _err$response4$data$e.name[0]),
            phone: (err === null || err === void 0 ? void 0 : (_err$response5 = err.response) === null || _err$response5 === void 0 ? void 0 : (_err$response5$data = _err$response5.data) === null || _err$response5$data === void 0 ? void 0 : (_err$response5$data$e = _err$response5$data.errors) === null || _err$response5$data$e === void 0 ? void 0 : (_err$response5$data$e2 = _err$response5$data$e.phone) === null || _err$response5$data$e2 === void 0 ? void 0 : _err$response5$data$e2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response6 = err.response) === null || _err$response6 === void 0 ? void 0 : (_err$response6$data = _err$response6.data) === null || _err$response6$data === void 0 ? void 0 : (_err$response6$data$e = _err$response6$data.errors) === null || _err$response6$data$e === void 0 ? void 0 : _err$response6$data$e.phone[0])
          });
          if (err !== null && err !== void 0 && (_err$response7 = err.response) !== null && _err$response7 !== void 0 && (_err$response7$data = _err$response7.data) !== null && _err$response7$data !== void 0 && _err$response7$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response8 = err.response) === null || _err$response8 === void 0 ? void 0 : (_err$response8$data = _err$response8.data) === null || _err$response8$data === void 0 ? void 0 : _err$response8$data.message);
          if (err !== null && err !== void 0 && (_err$response9 = err.response) !== null && _err$response9 !== void 0 && (_err$response9$data = _err$response9.data) !== null && _err$response9$data !== void 0 && _err$response9$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response10 = err.response) === null || _err$response10 === void 0 ? void 0 : (_err$response10$data = _err$response10.data) === null || _err$response10$data === void 0 ? void 0 : _err$response10$data.error);
        } finally {
          this.enrollmentLoading = false;
        }
      });
    },
    async formCallbackHandler() {
      this.$refs.form.validate().then(async success => {
        if (!success) {
          return;
        }
        this.enrollmentLoading = true;
        try {
          await this.$publicApi.post(api_routes["a" /* API_ROUTES */].course + `/${this.$route.params.course_slug}/branch/${this.$route.params.branch_slug}/request`, {
            name: this.name,
            email: this.email,
            phone: this.phone
          });
          this.$refs.form.reset();
          this.$toast.success('We have received your request. Our team will contact you soon.');
        } catch (err) {
          var _err$response11, _err$response11$data, _err$response11$data$, _err$response11$data$2, _err$response12, _err$response12$data, _err$response12$data$, _err$response13, _err$response13$data, _err$response13$data$, _err$response13$data$2, _err$response14, _err$response14$data, _err$response14$data$, _err$response15, _err$response15$data, _err$response15$data$, _err$response15$data$2, _err$response16, _err$response16$data, _err$response16$data$, _err$response17, _err$response17$data, _err$response18, _err$response18$data, _err$response19, _err$response19$data, _err$response20, _err$response20$data;
          this.$refs.form.setErrors({
            email: (err === null || err === void 0 ? void 0 : (_err$response11 = err.response) === null || _err$response11 === void 0 ? void 0 : (_err$response11$data = _err$response11.data) === null || _err$response11$data === void 0 ? void 0 : (_err$response11$data$ = _err$response11$data.errors) === null || _err$response11$data$ === void 0 ? void 0 : (_err$response11$data$2 = _err$response11$data$.email) === null || _err$response11$data$2 === void 0 ? void 0 : _err$response11$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response12 = err.response) === null || _err$response12 === void 0 ? void 0 : (_err$response12$data = _err$response12.data) === null || _err$response12$data === void 0 ? void 0 : (_err$response12$data$ = _err$response12$data.errors) === null || _err$response12$data$ === void 0 ? void 0 : _err$response12$data$.email[0]),
            name: (err === null || err === void 0 ? void 0 : (_err$response13 = err.response) === null || _err$response13 === void 0 ? void 0 : (_err$response13$data = _err$response13.data) === null || _err$response13$data === void 0 ? void 0 : (_err$response13$data$ = _err$response13$data.errors) === null || _err$response13$data$ === void 0 ? void 0 : (_err$response13$data$2 = _err$response13$data$.name) === null || _err$response13$data$2 === void 0 ? void 0 : _err$response13$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response14 = err.response) === null || _err$response14 === void 0 ? void 0 : (_err$response14$data = _err$response14.data) === null || _err$response14$data === void 0 ? void 0 : (_err$response14$data$ = _err$response14$data.errors) === null || _err$response14$data$ === void 0 ? void 0 : _err$response14$data$.name[0]),
            phone: (err === null || err === void 0 ? void 0 : (_err$response15 = err.response) === null || _err$response15 === void 0 ? void 0 : (_err$response15$data = _err$response15.data) === null || _err$response15$data === void 0 ? void 0 : (_err$response15$data$ = _err$response15$data.errors) === null || _err$response15$data$ === void 0 ? void 0 : (_err$response15$data$2 = _err$response15$data$.phone) === null || _err$response15$data$2 === void 0 ? void 0 : _err$response15$data$2.length) > 0 && (err === null || err === void 0 ? void 0 : (_err$response16 = err.response) === null || _err$response16 === void 0 ? void 0 : (_err$response16$data = _err$response16.data) === null || _err$response16$data === void 0 ? void 0 : (_err$response16$data$ = _err$response16$data.errors) === null || _err$response16$data$ === void 0 ? void 0 : _err$response16$data$.phone[0])
          });
          if (err !== null && err !== void 0 && (_err$response17 = err.response) !== null && _err$response17 !== void 0 && (_err$response17$data = _err$response17.data) !== null && _err$response17$data !== void 0 && _err$response17$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response18 = err.response) === null || _err$response18 === void 0 ? void 0 : (_err$response18$data = _err$response18.data) === null || _err$response18$data === void 0 ? void 0 : _err$response18$data.message);
          if (err !== null && err !== void 0 && (_err$response19 = err.response) !== null && _err$response19 !== void 0 && (_err$response19$data = _err$response19.data) !== null && _err$response19$data !== void 0 && _err$response19$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response20 = err.response) === null || _err$response20 === void 0 ? void 0 : (_err$response20$data = _err$response20.data) === null || _err$response20$data === void 0 ? void 0 : _err$response20$data.error);
        } finally {
          this.enrollmentLoading = false;
        }
      });
    },
    loadRazorpay(data) {
      const options = {
        key: this.$config.RAZORPAY_KEY_ID,
        amount: data.discounted_amount * 100,
        currency: 'INR',
        description: "Payment description",
        order_id: data.razorpay_order_id,
        prefill: {
          name: data.name,
          email: data.email,
          contact: data.phone
        },
        theme: {
          color: "#000000" // Set your website theme color
        },

        handler: async response => {
          await this.verifyPayment(response);
        }
      };
      // eslint-disable-next-line no-undef
      const rzp = new Razorpay(options);
      rzp.open();
    },
    async verifyPayment(data) {
      const loading = this.$loading({
        lock: true,
        fullscreen: true
      });
      try {
        const response = await this.$privateApi.post('/api/v1/enrollment/verify', {
          razorpay_order_id: data.razorpay_order_id,
          razorpay_payment_id: data.razorpay_payment_id,
          razorpay_signature: data.razorpay_signature
        }); // eslint-disable-line
        this.$toast.success(response.data.message);
      } catch (err) {
        var _err$response21, _err$response21$data, _err$response22, _err$response22$data, _err$response23, _err$response23$data, _err$response24, _err$response24$data;
        if (err !== null && err !== void 0 && (_err$response21 = err.response) !== null && _err$response21 !== void 0 && (_err$response21$data = _err$response21.data) !== null && _err$response21$data !== void 0 && _err$response21$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response22 = err.response) === null || _err$response22 === void 0 ? void 0 : (_err$response22$data = _err$response22.data) === null || _err$response22$data === void 0 ? void 0 : _err$response22$data.message);
        if (err !== null && err !== void 0 && (_err$response23 = err.response) !== null && _err$response23 !== void 0 && (_err$response23$data = _err$response23.data) !== null && _err$response23$data !== void 0 && _err$response23$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response24 = err.response) === null || _err$response24 === void 0 ? void 0 : (_err$response24$data = _err$response24.data) === null || _err$response24$data === void 0 ? void 0 : _err$response24$data.error);
      } finally {
        loading.close();
      }
    }
  },
  components: {
    TestimonialCard: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 99)),
    AchieverStudentCard: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 153)),
    InstructorCard: () => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, 147)),
    PageDetailLoading: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 154))
  }
});
// CONCATENATED MODULE: ./pages/:branch_slug/courses/:course_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var courses_course_slugvue_type_script_lang_js_ = (_course_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/:branch_slug/courses/:course_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  courses_course_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4bafb1b7"
  
)

/* harmony default export */ var _course_slug = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
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

/***/ })

};;
//# sourceMappingURL=:course_slug.js.map