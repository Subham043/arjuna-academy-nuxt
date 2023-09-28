(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{511:function(t,e,n){"use strict";n(25),n(181);var r={name:"TestimonialCardComponent",props:{image:{type:String,default:""},name:{type:String,default:""},designation:{type:String,default:""},message:{type:String,default:""},star:{type:Number,default:5}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"testimonials-card-two"},[e("div",{staticClass:"rating"},t._l(t.star,(function(i){return e("i",{key:i,staticClass:"ri-star-fill"})})),0),t._v(" "),t._m(0),t._v(" "),e("p",[t._v("\n        “"+t._s(t.message)+"”\n    ")]),t._v(" "),e("div",{staticClass:"content"},[e("img",{attrs:{src:t.image,alt:"testimonials"}}),t._v(" "),e("h3",[t._v(t._s(t.name))]),t._v(" "),e("span",[t._v(t._s(t.designation))])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"quote"},[t("i",{staticClass:"flaticon-quote"})])}],!1,null,null,null);e.a=component.exports},512:function(t,e,n){"use strict";var r={name:"EventCardComponent",props:{image:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},slug:{type:String,default:""},author:{type:String,default:""},date:{type:String,default:""},is_event:{type:Boolean,default:!0}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"event-item"},[""!==t.image?e("div",{staticClass:"event-img"},[e("NuxtLink",{attrs:{to:t.is_event?"/events/".concat(t.slug):"/expert-tips/".concat(t.slug)}},[e("img",{attrs:{src:t.image,alt:"Events"}})])],1):t._e(),t._v(" "),e("div",{staticClass:"event-content"},[e("ul",{staticClass:"event-list"},[e("li",[e("i",{staticClass:"ri-calendar-todo-fill"}),t._v(" "+t._s(t.date))]),t._v(" "),t.is_event?t._e():e("li",[e("i",{staticClass:"ri-user-fill"}),t._v(" "+t._s(t.author))])]),t._v(" "),e("h3",[e("NuxtLink",{attrs:{to:t.is_event?"/events/".concat(t.slug):"/expert-tips/".concat(t.slug)}},[t._v(t._s(t.title))])],1),t._v(" "),e("p",[t._v("\n            "+t._s(t.description)+"\n        ")])])])}),[],!1,null,null,null);e.a=component.exports},513:function(t,e,n){"use strict";var r={name:"BlogCardComponent",props:{image:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},date:{type:String,default:""},author:{type:String,default:""},slug:{type:String,default:""}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-card"},[e("NuxtLink",{attrs:{to:"/knowledge-desk/".concat(t.slug)}},[e("img",{attrs:{src:t.image,alt:"Blog"}})]),t._v(" "),e("div",{staticClass:"content"},[e("ul",[e("li",{staticClass:"one-line-text"},[e("i",{staticClass:"ri-calendar-todo-fill"}),t._v(" "+t._s(t.date))]),t._v(" "),e("li",{staticClass:"one-line-text"},[e("i",{staticClass:"ri-user-fill"}),t._v(" "),e("NuxtLink",{attrs:{to:"/leadership-team"}},[t._v(t._s(t.author))])],1)]),t._v(" "),e("h3",[e("NuxtLink",{attrs:{to:"/knowledge-desk/".concat(t.slug)}},[t._v(t._s(t.title))])],1),t._v(" "),e("p",[t._v("\n            "+t._s(t.description)+"\n        ")]),t._v(" "),e("NuxtLink",{staticClass:"read-btn",attrs:{to:"/knowledge-desk/".concat(t.slug)}},[t._v("Read More")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},514:function(t,e,n){"use strict";var r={name:"WhatWeDoCardComponent",props:{loading:{type:Boolean,default:!0},heading:{type:String,default:""},feature:{type:Array,default:[]}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"featured-area pt-70 pb-70"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center mb-45"},[e("div",{staticClass:"col-lg-8 col-md-9"},[e("div",{staticClass:"section-title mt-rs-20"},[e("span",[t._v("WHAT WE DO")]),t._v(" "),e("h2",[t._v(t._s(t.heading))])])]),t._v(" "),e("div",{staticClass:"col-lg-4 col-md-3 text-end"},[e("NuxtLink",{staticClass:"default-btn border-radius-50",attrs:{to:"/mission-vision"}},[t._v("Mission & Vision")])],1)]),t._v(" "),e("div",{staticClass:"row"},[t._l(6,(function(i){return t.loading?e("div",{key:i,staticClass:"col-lg-4 col-md-6 col-sm-12"},[e("el-skeleton",{staticStyle:{width:"100%"},attrs:{animated:""}},[e("template",{slot:"template"},[e("div",{staticClass:"counter-card box-shadow px-1"},[e("el-skeleton-item",{staticStyle:{width:"100px",height:"100px"},attrs:{variant:"rect"}}),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"p"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"p"}}),t._v(" "),e("br")],1)])],2)],1):t._e()})),t._v(" "),t._l(t.feature,(function(n,i){return!t.loading&&t.feature.length>0?e("div",{key:i,staticClass:"col-lg-4 col-6"},[e("div",{staticClass:"featured-item-two"},[e("div",{staticClass:"feature-icon-holder"},[e("img",{attrs:{src:n.image}}),t._v(" "),e("h3",[t._v(t._s(n.title))])]),t._v(" "),e("p",[t._v(t._s(n.description))])])]):t._e()}))],2)])])}),[],!1,null,null,null);e.a=component.exports},515:function(t,e,n){"use strict";var r={name:"WhoWeAreCardComponent",props:{heading_center:{type:Boolean,default:!1},first:{type:Boolean,default:!1},loading:{type:Boolean,default:!0},image:{type:String,default:""},image_alt:{type:String,default:""},image_title:{type:String,default:""},heading:{type:String,default:""},title:{type:String,default:""},counter_description:{type:String,default:""},counter_title:{type:String,default:""},counter_image:{type:String,default:""},detail:{type:String,default:""}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t.loading?[e("el-skeleton",{staticStyle:{width:"100%"},attrs:{animated:""}},[e("template",{slot:"template"},[e("div",{class:"enrolled-area-two pt-100 pb-70"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"enrolled-img-three mb-30 pr-20"},[e("el-skeleton-item",{staticStyle:{width:"100%",height:"440px"},attrs:{variant:"image"}})],1)]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"enrolled-content mb-30"},[e("div",{staticClass:"section-title"},[e("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"p"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"text"}})],1)])])])])])])],2)]:[e("div",{class:"enrolled-area-two ".concat(t.first?"pt-70":""," pb-70")},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[t.heading_center?e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"section-title text-center mb-3"},[e("span",[t._v(t._s(t.title))]),t._v(" "),e("h2",[t._v("\n                                "+t._s(t.heading)+"\n                            ")])])]):t._e(),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"enrolled-img-three mb-30 pr-20"},[e("img",{attrs:{src:t.image,alt:t.image_alt,title:t.image_title}}),t._v(" "),e("div",{staticClass:"enrolled-img-content"},[e("img",{attrs:{src:t.counter_image}}),t._v(" "),e("div",{staticClass:"content"},[e("h3",[t._v(t._s(t.counter_title))]),t._v(" "),e("p",[t._v(t._s(t.counter_description))])])])])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"enrolled-content mb-30"},[e("div",{staticClass:"section-title"},[t.heading_center?t._e():e("span",[t._v(t._s(t.title))]),t._v(" "),t.heading_center?t._e():e("h2",[t._v("\n                                    "+t._s(t.heading)+"\n                                ")]),t._v(" "),e("div",{directives:[{name:"html-safe",rawName:"v-html-safe",value:t.detail,expression:"detail"}]})]),t._v(" "),e("NuxtLink",{staticClass:"default-btn border-radius-50",attrs:{to:"/leadership-team"}},[t._v("View Leaders")])],1)])])])])]],2)}),[],!1,null,null,null);e.a=component.exports},528:function(t,e,n){"use strict";n.r(e);n(25);var r=n(8),o=(n(23),n(513)),l={name:"CourseCardComponent",props:{image:{type:String,default:""},image_alt:{type:String,default:""},image_title:{type:String,default:""},className:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},slug:{type:String,default:""},branches:{type:Array,default:[]}}},c=n(12),d=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"courses-item"},[e("img",{attrs:{src:t.image,alt:t.image_alt,title:t.image_title}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"bottom-content align-items-center"},[e("a",{staticClass:"tag-btn",attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.className))])]),t._v(" "),e("h3",[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),e("p",[t._v(t._s(t.description))]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"bottom-content align-items-center"},[e("el-dropdown",[e("NuxtLink",{staticClass:"default-btn two border-radius-50 m-0",attrs:{to:"/",target:"_blank"}},[t._v("Enroll Now")]),t._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.branches,(function(n,i){return e("el-dropdown-item",{key:i},[e("NuxtLink",{staticClass:"text-dark",attrs:{to:"/".concat(n.slug,"/courses/").concat(t.slug)}},[t._v("\n                            "+t._s(n.name)+"\n                        ")])],1)})),1)],1),t._v(" "),e("el-dropdown",[e("NuxtLink",{staticClass:"default-btn border-radius-50 mr-2",attrs:{to:"/"}},[t._v("Request Callback")]),t._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.branches,(function(n,i){return e("el-dropdown-item",{key:i},[e("NuxtLink",{staticClass:"text-dark",attrs:{to:"/".concat(n.slug,"/courses/").concat(t.slug)}},[t._v("\n                            "+t._s(n.name)+"\n                        ")])],1)})),1)],1)],1)])])}),[],!1,null,null,null).exports,v=n(512),m=n(511),_=n(514),h=n(515),f=n(61),C={name:"IndexPage",layout:"MainPageLayout",mounted:function(){this.$scrollTo("#__nuxt",0,{force:!0}),this.getCourse(),this.getTestimonial(),this.getEvent(),this.getBlog()},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getBannerSection();case 2:return e.next=4,t.getAboutSection();case 4:return e.next=6,t.getFeature();case 6:return e.next=8,t.getCommonFeature();case 8:return e.next=10,t.getSeo();case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{aboutLoading:!1,about:null,bannerLoading:!1,banner:[],featureLoading:!1,feature:[],commonFeatureLoading:!1,commonFeature:[],testimonialLoading:!1,testimonial:[],blogLoading:!1,blog:[],eventLoading:!1,event:[],courseLoading:!1,course:[],slickBannerOptions:{arrows:!1,dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:3e3,draggable:!0,pauseOnHover:!0,swipe:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]},slickCourseOptions:{arrows:!1,dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:3e3,draggable:!0,pauseOnHover:!0,swipe:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]},slickTestimonialOptions:{arrows:!1,dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:3e3,draggable:!0,pauseOnHover:!0,swipe:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]},slickEventOptions:{arrows:!1,dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:3e3,draggable:!0,pauseOnHover:!0,swipe:!0,slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]},banner_data:[{title:"CHOOSE YOUR BEST COURSE",heading:"A course is essential for building career",description:"Flexible easy to access learning opportunities can bring a significant change in how to learn! The Ellen can offer you to enjoy the beauty of eLearning!",image:"/images/home-three/hero-img1.jpg"},{title:"CHOOSE YOUR BEST COURSE",heading:"Start learning from best platform",description:"Flexible easy to access learning opportunities can bring a significant change in how to learn! The Ellen can offer you to enjoy the beauty of eLearning!",image:"/images/home-three/hero-img3.jpg"},{title:"CHOOSE YOUR BEST COURSE",heading:"Improve your skills by study with us",description:"Flexible easy to access learning opportunities can bring a significant change in how to learn! The Ellen can offer you to enjoy the beauty of eLearning!",image:"/images/home-three/hero-img2.jpg"}],course_data:[{course_image:"/images/courses/courses-img7.jpg",instructor_image:"/images/courses/instructors1.jpg",category:"Finance",title:"The complete business plan course includes 50 templates",duration:"10 hr 07 min",lectures:"67 lectures",price:"120"},{course_image:"/images/courses/courses-img8.jpg",instructor_image:"/images/courses/instructors2.jpg",category:"Banking",title:"Full web designing course with 20 web template designing",duration:"10 hr 07 min",lectures:"67 lectures",price:"400"},{course_image:"/images/courses/courses-img9.jpg",instructor_image:"/images/courses/instructors3.jpg",category:"Physics",title:"Visual effects for games in unity beginner to intermediate",duration:"10 hr 07 min",lectures:"67 lectures",price:"200"},{course_image:"/images/courses/courses-img2.jpg",instructor_image:"/images/courses/instructors4.jpg",category:"Accounting",title:"Basic knowledge about hibernal bharat in history",duration:"10 hr 07 min",lectures:"67 lectures",price:"300"}],seo:{meta_title:"",meta_description:"",meta_keywords:"",meta_scripts:""}}},head:function(){return{title:this.seo.meta_title,meta:[{hid:"og:title",name:"og:title",content:this.seo.meta_title},{hid:"og:type",name:"og:type",content:"website"},{hid:"description",name:"description",content:this.seo.meta_description},{hid:"keywords",name:"keywords",content:this.seo.meta_keywords}],script:[{type:"application/ld+json",innerHTML:this.seo.meta_scripts}],__dangerouslyDisableSanitizers:["script"]}},methods:{getAboutSection:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.aboutLoading=!0,e.prev=1,e.next=4,t.$publicApi.get(f.a.aboutSection+"/home-page");case 4:n=e.sent,t.about=n.data.about,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.$nuxt.context.error({status:e.t0.response.status,message:e.t0.response.data.message});case 11:return e.prev=11,t.aboutLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},getBannerSection:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.bannerLoading=!0,e.prev=1,e.next=4,t.$publicApi.get(f.a.bannerSection);case 4:n=e.sent,t.banner=n.data.banner,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.$nuxt.context.error({status:e.t0.response.status,message:e.t0.response.data.message});case 11:return e.prev=11,t.bannerLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},getFeature:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.featureLoading=!0,e.prev=1,e.next=4,t.$publicApi.get(f.a.feature+"/home-page");case 4:n=e.sent,t.feature=n.data.feature,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.$nuxt.context.error({status:e.t0.response.status,message:e.t0.response.data.message});case 11:return e.prev=11,t.featureLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},getCommonFeature:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.commonFeatureLoading=!0,e.prev=1,e.next=4,t.$publicApi.get(f.a.feature+"/common");case 4:n=e.sent,t.commonFeature=n.data.feature,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.$nuxt.context.error({status:e.t0.response.status,message:e.t0.response.data.message});case 11:return e.prev=11,t.commonFeatureLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},getCourse:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.courseLoading=!0,e.prev=1,e.next=4,t.$publicApi.get(f.a.course);case 4:n=e.sent,t.course=n.data.course,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.$nuxt.context.error({status:e.t0.response.status,message:e.t0.response.data.message});case 11:return e.prev=11,t.courseLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},getTestimonial:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:0,e.testimonialLoading=!0,n.prev=2,n.next=5,e.$publicApi.get(f.a.testimonial+"?total=9&page=".concat(r));case 5:o=n.sent,e.testimonial=o.data.data,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),e.$nuxt.context.error({status:n.t0.response.status,message:n.t0.response.data.message});case 12:return n.prev=12,e.testimonialLoading=!1,n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[2,9,12,15]])})))()},getBlog:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:0,e.blogLoading=!0,n.prev=2,n.next=5,e.$publicApi.get(f.a.blog+"?total=6&page=".concat(r,"&filter[is_popular]=true"));case 5:o=n.sent,e.blog=o.data.data,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),e.$nuxt.context.error({status:n.t0.response.status,message:n.t0.response.data.message});case 12:return n.prev=12,e.blogLoading=!1,n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[2,9,12,15]])})))()},getEvent:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:0,e.eventLoading=!0,n.prev=2,n.next=5,e.$publicApi.get(f.a.event+"?total=6&page=".concat(r));case 5:o=n.sent,e.event=o.data.data,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),e.$nuxt.context.error({status:n.t0.response.status,message:n.t0.response.data.message});case 12:return n.prev=12,e.eventLoading=!1,n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[2,9,12,15]])})))()},getSeo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$publicApi.get(f.a.seo+"/home-page");case 3:n=e.sent,t.seo=n.data.seo,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$nuxt.context.error({status:e.t0.response.status,message:e.t0.response.data.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},components:{BlogCard:o.a,CourseCard:d,TestimonialCard:m.a,EventCard:v.a,WhoWeAreCard:h.a,WhatWeDoCard:_.a}},w=C,y=Object(c.a)(w,(function(){var t,e,n,r,o,l,c,d,v,m=this,_=m._self._c;return _("div",[_("div",{staticClass:"hero-slider-area"},[m.bannerLoading?_("div",{staticClass:"row justify-content-center hero-slider"},m._l(1,(function(i){return _("div",{key:i,staticClass:"col-lg-12 col-md-12 col-sm-12"},[_("el-skeleton",{staticStyle:{width:"100%"},attrs:{animated:""}},[_("template",{slot:"template"},[_("div",{staticClass:"container-fluid"},[_("div",{staticClass:"row align-items-center"},[_("div",{staticClass:"col-lg-6"},[_("div",{staticClass:"hero-content"},[_("el-skeleton-item",{staticStyle:{width:"30%"},attrs:{variant:"p"}}),m._v(" "),_("br"),m._v(" "),_("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"h1"}}),m._v(" "),_("br"),m._v(" "),_("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),m._v(" "),_("br"),m._v(" "),_("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),m._v(" "),_("br")],1)]),m._v(" "),_("div",{staticClass:"col-lg-6"},[_("div",{staticClass:"hero-img"},[_("el-skeleton-item",{staticStyle:{width:"100%",height:"400px"},attrs:{variant:"image"}})],1)])])])])],2)],1)})),0):m._e(),m._v(" "),!m.bannerLoading&&m.banner.length>0?_("div",{staticClass:"hero-slider owl-carousel owl-theme"},[_("VueSlickCarousel",m._b({ref:"slickBanner"},"VueSlickCarousel",m.slickBannerOptions,!1),m._l(m.banner,(function(t,i){return _("div",{key:i,staticClass:"hero-item"},[_("div",{staticClass:"container-fluid"},[_("div",{staticClass:"row align-items-center"},[_("div",{staticClass:"col-lg-6"},[_("div",{staticClass:"hero-content"},[_("span",{staticClass:"top-title"},[m._v(m._s(t.title))]),m._v(" "),_("h1",[m._v(m._s(t.heading))]),m._v(" "),_("p",[m._v(m._s(t.description))]),m._v(" "),_("div",{staticClass:"banner-btn"},[_("a",{staticClass:"default-btn border-radius-50",attrs:{href:t.button_link,target:"_blank"}},[m._v(m._s(t.button_text))])])])]),m._v(" "),_("div",{staticClass:"col-lg-6"},[_("div",{staticClass:"hero-img"},[_("img",{staticClass:"hero",attrs:{src:t.banner_image,alt:t.banner_image_alt,title:t.banner_image_title}}),m._v(" "),_("div",{staticClass:"hero-bg-shape"},[_("img",{staticClass:"bg-img-shape1",attrs:{src:"/images/home-three/bg-shape1.png",alt:"Hero"}}),m._v(" "),_("img",{staticClass:"bg-img-shape2",attrs:{src:"/images/home-three/bg-shape2.png",alt:"Hero"}})]),m._v(" "),_("div",{staticClass:"top-content"},[_("div",{staticClass:"hero-img-content"},[_("img",{attrs:{src:t.counter_image_1}}),m._v(" "),_("div",{staticClass:"content"},[_("h3",[m._v(m._s(t.counter_title_1))]),m._v(" "),_("p",[m._v(m._s(t.counter_description_1))])])])]),m._v(" "),_("div",{staticClass:"right-content"},[_("div",{staticClass:"hero-img-content"},[_("img",{attrs:{src:t.counter_image_2}}),m._v(" "),_("div",{staticClass:"content"},[_("h3",[m._v(m._s(t.counter_title_2))]),m._v(" "),_("p",[m._v(m._s(t.counter_description_2))])])])])])])])])])})),0)],1):m._e(),m._v(" "),m._m(0)]),m._v(" "),_("div",{staticClass:"featured-area featured-area-mt pb-70"},[_("div",{staticClass:"container"},[_("div",{staticClass:"row justify-content-center"},[m._l(3,(function(i){return m.commonFeatureLoading?_("div",{key:i,staticClass:"col-lg-4 col-md-6 col-sm-12"},[_("el-skeleton",{staticStyle:{width:"100%"},attrs:{animated:""}},[_("template",{slot:"template"},[_("div",{staticClass:"counter-card box-shadow px-1"},[_("el-skeleton-item",{staticStyle:{width:"50px",height:"50px"},attrs:{variant:"circle"}}),m._v(" "),_("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"p"}}),m._v(" "),_("br"),m._v(" "),_("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"p"}}),m._v(" "),_("br")],1)])],2)],1):m._e()})),m._v(" "),m._l(m.commonFeature,(function(t,i){return!m.commonFeatureLoading&&m.commonFeature.length>0?_("div",{key:i,staticClass:"col-lg-4 col-6"},[_("div",{staticClass:"featured-item"},[_("img",{staticClass:"featured-img",attrs:{src:t.image}}),m._v(" "),_("h3",[m._v(m._s(t.title))]),m._v(" "),_("p",[m._v("\n                    "+m._s(t.description)+"\n                ")])])]):m._e()}))],2)])]),m._v(" "),_("WhoWeAreCard",{attrs:{loading:m.aboutLoading,image_alt:null===(t=m.about)||void 0===t?void 0:t.image_alt,image:null===(e=m.about)||void 0===e?void 0:e.image,image_title:null===(n=m.about)||void 0===n?void 0:n.image_title,heading:null===(r=m.about)||void 0===r?void 0:r.heading,detail:null===(o=m.about)||void 0===o?void 0:o.description,counter_description:null===(l=m.about)||void 0===l?void 0:l.counter_description,counter_image:null===(c=m.about)||void 0===c?void 0:c.counter_image,counter_title:null===(d=m.about)||void 0===d?void 0:d.counter_title,title:null===(v=m.about)||void 0===v?void 0:v.title,heading_center:!0}}),m._v(" "),m.course_data.length>0?_("div",{staticClass:"courses-area-two section-bg pt-70 pb-70"},[_("div",{staticClass:"container"},[m._m(1),m._v(" "),m.courseLoading?_("div",{staticClass:"row justify-content-center"},m._l(3,(function(i){return _("div",{key:i,staticClass:"col-lg-4 col-md-6"},[_("el-skeleton",{staticStyle:{width:"100%"},attrs:{animated:""}},[_("template",{slot:"template"},[_("el-skeleton-item",{staticStyle:{width:"100%",height:"340px"},attrs:{variant:"rect"}})],1)],2)],1)})),0):m._e(),m._v(" "),!m.courseLoading&&m.course.length>0?_("div",{staticClass:"course-slider-two owl-carousel owl-theme"},[_("VueSlickCarousel",m._b({ref:"slickCourse"},"VueSlickCarousel",m.slickCourseOptions,!1),m._l(m.course,(function(t,i){return _("CourseCard",{key:i,attrs:{image:t.image,image_alt:t.image_alt,image_title:t.image_title,description:t.short_description,title:t.name,branches:t.branches,slug:t.slug,className:t.class}})})),1)],1):m._e()])]):m._e(),m._v(" "),_("WhatWeDoCard",{attrs:{heading:"Why Arjunaa Academy for Achievers is the Top Coaching Centre in Bangalore?",loading:m.featureLoading,feature:m.feature}}),m._v(" "),_("div",{staticClass:"register-area pb-70"},[_("div",{staticClass:"container"},[_("div",{staticClass:"row"},[_("div",{staticClass:"col-lg-12"},[_("div",{staticClass:"play-btn-area-two"},[_("div",{staticClass:"hero-content text-center",staticStyle:{"max-width":"100% !important",position:"relative"}},[_("span",{staticClass:"top-title"},[m._v("START LEARNING")]),m._v(" "),_("h1",{staticStyle:{color:"white !important"}},[m._v("Admission Open For "+m._s((new Date).getFullYear()-1)+" - "+m._s((new Date).getFullYear()))]),m._v(" "),_("div",{staticClass:"banner-btn justify-content-center"},[_("a",{staticClass:"default-btn two border-radius-50 mr-2",attrs:{href:"/pdf/brochure.pdf",target:"_blank"}},[m._v("Download Brochure")]),m._v(" "),_("el-dropdown",[_("NuxtLink",{staticClass:"default-btn border-radius-50 m-0",attrs:{to:"/"}},[m._v("Admission Form")]),m._v(" "),_("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[_("el-dropdown-item",[_("NuxtLink",{staticClass:"text-dark",attrs:{to:"/admission/class-8-9-10"}},[m._v("\n                                                Class 8, 9 & 10\n                                            ")])],1),m._v(" "),_("el-dropdown-item",[_("NuxtLink",{staticClass:"text-dark",attrs:{to:"/admission/puc"}},[m._v("\n                                                Class 11 or 1st PUC\n                                            ")])],1)],1)],1)],1)])])])])])]),m._v(" "),_("div",{staticClass:"testimonials-area pb-70"},[_("div",{staticClass:"container"},[_("div",{staticClass:"row align-items-center mb-20"},[m._m(2),m._v(" "),_("div",{staticClass:"col-lg-4 col-md-3 text-end"},[_("NuxtLink",{staticClass:"default-btn border-radius-50",attrs:{to:"/testimonial"}},[m._v("View all Testimonial")])],1)]),m._v(" "),m.testimonialLoading?_("div",{staticClass:"row justify-content-center testimonials-slider-two"},m._l(3,(function(i){return _("div",{key:i,staticClass:"col-lg-4 col-md-6 col-sm-12"},[_("el-skeleton",{staticStyle:{width:"100%"},attrs:{animated:""}},[_("template",{slot:"template"},[_("div",{staticClass:"testimonials-card-two"},[_("div",{staticClass:"rating"},m._l(5,(function(i){return _("i",{key:i,staticClass:"ri-star-fill"})})),0),m._v(" "),_("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),m._v(" "),_("br"),m._v(" "),_("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),m._v(" "),_("br"),m._v(" "),_("div",{staticClass:"content px-0"},[_("el-skeleton-item",{staticStyle:{width:"100px",height:"100px"},attrs:{variant:"circle"}}),m._v(" "),_("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"p"}}),m._v(" "),_("br")],1),m._v(" "),_("div",{staticClass:"quote"},[_("i",{staticClass:"flaticon-quote"})])],1)])],2)],1)})),0):m._e(),m._v(" "),!m.testimonialLoading&&m.testimonial.length>0?_("div",{staticClass:"testimonials-slider-two owl-carousel owl-theme"},[_("VueSlickCarousel",m._b({ref:"slickTestimonial"},"VueSlickCarousel",m.slickTestimonialOptions,!1),m._l(m.testimonial,(function(t,i){return _("TestimonialCard",{key:i,attrs:{image:t.image,name:t.name,star:t.star,message:t.message,designation:t.designation}})})),1)],1):m._e()])]),m._v(" "),_("div",{staticClass:"event-area section-bg pt-70 pb-70"},[_("div",{staticClass:"container"},[_("div",{staticClass:"row align-items-end mb-45"},[m._m(3),m._v(" "),_("div",{staticClass:"col-lg-4 text-end"},[_("NuxtLink",{staticClass:"default-btn border-radius-50",attrs:{to:"/events"}},[m._v("View all Events")])],1)]),m._v(" "),m.eventLoading?_("div",{staticClass:"row justify-content-center"},m._l(2,(function(i){return _("div",{key:i,staticClass:"col-lg-6 col-md-6"},[_("el-skeleton",{staticStyle:{width:"100%"},attrs:{animated:""}},[_("template",{slot:"template"},[_("div",{staticClass:"event-item"},[_("div",{staticClass:"event-img",staticStyle:{width:"40%"}},[_("el-skeleton-item",{staticStyle:{width:"100%",height:"140px"},attrs:{variant:"image"}})],1),m._v(" "),_("div",{staticClass:"event-content",staticStyle:{width:"60%"}},[_("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"p"}}),m._v(" "),_("br"),m._v(" "),_("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),m._v(" "),_("br"),m._v(" "),_("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),m._v(" "),_("br"),m._v(" "),_("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),m._v(" "),_("br")],1)])])],2)],1)})),0):m._e(),m._v(" "),!m.eventLoading&&m.event.length>0?_("div",{staticClass:"event-slider owl-carousel owl-theme"},[_("VueSlickCarousel",m._b({ref:"slickEvent"},"VueSlickCarousel",m.slickEventOptions,!1),m._l(m.event,(function(t,i){return _("EventCard",{key:i,attrs:{image:t.image,title:t.name,description:t.short_description,date:t.event_date_on,slug:t.slug}})})),1)],1):m._e()])]),m._v(" "),_("div",{staticClass:"blog-area pt-70 pb-70"},[_("div",{staticClass:"container"},[_("div",{staticClass:"row align-items-end mb-45"},[m._m(4),m._v(" "),_("div",{staticClass:"col-lg-4 text-end"},[_("NuxtLink",{staticClass:"default-btn border-radius-50",attrs:{to:"/knowledge-desk"}},[m._v("View all Blogs")])],1)]),m._v(" "),m.blogLoading?_("div",{staticClass:"row justify-content-center"},m._l(3,(function(i){return _("div",{key:i,staticClass:"col-lg-4 col-md-6"},[_("el-skeleton",{staticStyle:{width:"100%"},attrs:{animated:""}},[_("template",{slot:"template"},[_("el-skeleton-item",{staticStyle:{width:"100%",height:"240px"},attrs:{variant:"image"}}),m._v(" "),_("div",{staticStyle:{padding:"14px"}},[_("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"p"}}),m._v(" "),_("br"),m._v(" "),_("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),m._v(" "),_("br"),m._v(" "),_("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"text"}})],1)],1)],2)],1)})),0):m._e(),m._v(" "),!m.blogLoading&&m.blog.length>0?_("div",{staticClass:"row justify-content-center"},[_("VueSlickCarousel",m._b({ref:"slickBlog"},"VueSlickCarousel",m.slickCourseOptions,!1),m._l(m.blog,(function(t,i){return _("div",{key:i,staticClass:"col-lg-12 col-md-12"},[_("BlogCard",{attrs:{image:t.image,title:t.name,description:t.short_description,date:t.published,slug:t.slug,author:t.author_name}})],1)})),0)],1):m._e()])])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"hero-shape"},[t("div",{staticClass:"shape1"},[t("img",{attrs:{src:"/images/home-three/shape.png",alt:"Shape"}})]),this._v(" "),t("div",{staticClass:"shape2"},[t("img",{attrs:{src:"/images/home-three/shape2.png",alt:"Shape"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row align-items-end mb-45"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"section-title mt-rs-20 text-center"},[e("span",[t._v("COURSES")]),t._v(" "),e("h2",[t._v("What are the courses offered by Arjunaa Academy?")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-8 col-md-9"},[e("div",{staticClass:"section-title mt-rs-20"},[e("span",[t._v("TESTIMONIAL")]),t._v(" "),e("h2",[t._v("Testimonials describe what has been, & are a promise of what is to come")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-8"},[e("div",{staticClass:"section-title mt-rs-20"},[e("span",[t._v("EVENTS")]),t._v(" "),e("h2",[t._v("Upcoming events schedule")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-8"},[e("div",{staticClass:"section-title mt-rs-20"},[e("span",[t._v("KNOWLEDGE DESK")]),t._v(" "),e("h2",[t._v("Latest from our blogs")])])])}],!1,null,null,null);e.default=y.exports}}]);