(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{477:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var n={mission_vision:"/api/v1/mission-vision",seo:"/api/v1/seo",faq:"/api/v1/faq",legal:"/api/v1/legal",branch:"/api/v1/branch",course:"/api/v1/course",gallery:"/api/v1/gallery",campaign:"/api/v1/campaign",event:"/api/v1/event",testimonial:"/api/v1/testimonial",counter:"/api/v1/counter",feature:"/api/v1/feature",achieverCategory:"/api/v1/achiever/category",achieverStudent:"/api/v1/achiever/student",aboutSection:"/api/v1/about-section",bannerSection:"/api/v1/home-page-banner",blog:"/api/v1/blog",expertTip:"/api/v1/expert-tip",management:"/api/v1/team-member/management",staff:"/api/v1/team-member/staff",contact:"/api/v1/contact-form",day_scholar:"/api/v1/day-scholar-form",subscription:"/api/v1/subscription-form",register:"/api/v1/auth/register",forgot_password:"/api/v1/auth/forgot-password",reset_password:"/api/v1/auth/reset-password",vrddhi:"/api/v1/vrddhi-form",admission_puc:"/api/v1/admission/puc",password_update:"/api/v1/profile/update-password",profile_update:"/api/v1/profile/update",admission_not_puc:"/api/v1/admission/not-puc"}},517:function(t,e,o){"use strict";o.r(e);o(24);var n=o(111),l=o(2),r=(o(32),o(162),o(477)),d={name:"BlogDetailPage",layout:"MainPageLayout",mounted:function(){this.getPopluarBlog(this.$route.query.page?Number(this.$route.query.page):1)},data:function(){return{blogLoading:!1,blog:null,prev_blog:null,next_blog:null,popularBlogLoading:!1,popularBlog:[],popularBlogCount:1,popularBlogCurrentPage:1,popularBlogPerPage:1,blogCommentLoading:!1,blogComment:[],blogCommentPage:1,blogCommentCount:1,blogCommentPerPage:1,blogCommentLastPage:1,commentPostLoading:!1,name:this.$auth.loggedIn?this.$auth.user.name:"",email:this.$auth.loggedIn?this.$auth.user.email:"",comment:""}},head:function(){var t,e,o,n,l;return{title:null===(t=this.blog)||void 0===t?void 0:t.meta_title,meta:[{hid:"og:title",name:"og:title",content:null===(e=this.blog)||void 0===e?void 0:e.meta_title},{hid:"og:type",name:"og:type",content:"website"},{hid:"description",name:"description",content:null===(o=this.blog)||void 0===o?void 0:o.meta_description},{hid:"keywords",name:"keywords",content:null===(n=this.blog)||void 0===n?void 0:n.meta_keywords}],script:[{type:"application/ld+json",innerHTML:null===(l=this.blog)||void 0===l?void 0:l.meta_scripts}],__dangerouslyDisableSanitizers:["script"]}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getBlog();case 2:case"end":return e.stop()}}),e)})))()},watch:{$route:function(t,e){this.handlePopularBlogPageChnage(),this.$scrollTo("#popular-blog-area",0,{force:!0})},blog:function(t,e){this.getBlogComment()},blogCommentPage:function(t,e){this.getBlogComment(t),this.$scrollTo("#blog-comment-area",0,{force:!0})}},methods:{getBlog:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.blogLoading=!0,e.prev=1,e.next=4,t.$publicApi.get(r.a.blog+"/".concat(t.$route.params.slug));case 4:o=e.sent,t.blog=o.data.blog,t.next_blog=o.data.next_blog,t.prev_blog=o.data.prev_blog,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.$nuxt.context.error({status:e.t0.response.status,message:e.t0.response.data.message});case 13:return e.prev=13,t.blogLoading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()},getPopluarBlog:function(){var t=arguments,e=this;return Object(l.a)(regeneratorRuntime.mark((function o(){var n,l,d,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:0,e.popularBlogLoading=!0,o.prev=2,o.next=5,e.$publicApi.get(r.a.blog+"?total=8&page=".concat(n,"&filter[is_popular]=true"));case 5:c=o.sent,e.popularBlog=c.data.data,e.popularBlogCount=null==c||null===(l=c.data)||void 0===l||null===(l=l.meta)||void 0===l?void 0:l.total,e.popularBlogPerPage=null==c||null===(d=c.data)||void 0===d||null===(d=d.meta)||void 0===d?void 0:d.per_page,e.popularBlogCurrentPage=e.$route.query.page?Number(e.$route.query.page):1,o.next=15;break;case 12:o.prev=12,o.t0=o.catch(2),e.$nuxt.context.error({status:o.t0.response.status,message:o.t0.response.data.message});case 15:return o.prev=15,e.popularBlogLoading=!1,o.finish(15);case 18:case"end":return o.stop()}}),o,null,[[2,12,15,18]])})))()},handlePopularBlogPaginationChnage:function(t){this.$router.push({query:{page:t}})},handlePopularBlogPageChnage:function(){this.popularBlogCurrentPage=this.$route.query.page?Number(this.$route.query.page):1,this.getPopluarBlog(this.$route.query.page?Number(this.$route.query.page):1)},formHandler:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var o,n,l,d,c,v,m,f,h,_,C;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.commentPostLoading=!0,e.prev=1,e.next=4,t.$publicApi.post(r.a.blog+"/comment/".concat(null===(o=t.blog)||void 0===o?void 0:o.id,"/create"),{name:t.name,email:t.email,comment:t.comment});case 4:e.sent,t.comment="",t.$refs.form.reset(),t.$toast.success("Commented Successfully."),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),t.$refs.form.setErrors({email:(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(n=n.data)||void 0===n||null===(n=n.errors)||void 0===n||null===(n=n.email)||void 0===n?void 0:n.length)>0&&(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l||null===(l=l.data)||void 0===l||null===(l=l.errors)||void 0===l?void 0:l.email[0]),name:(null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d||null===(d=d.data)||void 0===d||null===(d=d.errors)||void 0===d||null===(d=d.name)||void 0===d?void 0:d.length)>0&&(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c||null===(c=c.data)||void 0===c||null===(c=c.errors)||void 0===c?void 0:c.name[0]),comment:(null===e.t0||void 0===e.t0||null===(v=e.t0.response)||void 0===v||null===(v=v.data)||void 0===v||null===(v=v.errors)||void 0===v||null===(v=v.comment)||void 0===v?void 0:v.length)>0&&(null===e.t0||void 0===e.t0||null===(m=e.t0.response)||void 0===m||null===(m=m.data)||void 0===m||null===(m=m.errors)||void 0===m?void 0:m.comment[0])}),null!==e.t0&&void 0!==e.t0&&null!==(f=e.t0.response)&&void 0!==f&&null!==(f=f.data)&&void 0!==f&&f.message&&t.$toast.error(null===e.t0||void 0===e.t0||null===(h=e.t0.response)||void 0===h||null===(h=h.data)||void 0===h?void 0:h.message),null!==e.t0&&void 0!==e.t0&&null!==(_=e.t0.response)&&void 0!==_&&null!==(_=_.data)&&void 0!==_&&_.error&&t.$toast.error(null===e.t0||void 0===e.t0||null===(C=e.t0.response)||void 0===C||null===(C=C.data)||void 0===C?void 0:C.error);case 15:return e.prev=15,t.commentPostLoading=!1,e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,10,15,18]])})))()},getBlogComment:function(){var t=arguments,e=this;return Object(l.a)(regeneratorRuntime.mark((function o(){var l,d,c,v,m,f;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(l=t.length>0&&void 0!==t[0]?t[0]:1,!e.blog){o.next=19;break}return e.blogCommentLoading=!0,o.prev=3,o.next=6,e.$publicApi.get(r.a.blog+"/comment/".concat(null===(d=e.blog)||void 0===d?void 0:d.id,"/paginate?total=8&page=").concat(l));case 6:f=o.sent,e.blogComment=[].concat(Object(n.a)(e.blogComment),Object(n.a)(f.data.data)),e.blogCommentCount=null==f||null===(c=f.data)||void 0===c||null===(c=c.meta)||void 0===c?void 0:c.total,e.blogCommentPerPage=null==f||null===(v=f.data)||void 0===v||null===(v=v.meta)||void 0===v?void 0:v.per_page,e.blogCommentLastPage=null==f||null===(m=f.data)||void 0===m||null===(m=m.meta)||void 0===m?void 0:m.last_page,o.next=16;break;case 13:o.prev=13,o.t0=o.catch(3),e.$nuxt.context.error({status:o.t0.response.status,message:o.t0.response.data.message});case 16:return o.prev=16,e.blogCommentLoading=!1,o.finish(16);case 19:case"end":return o.stop()}}),o,null,[[3,13,16,19]])})))()}},components:{Breadcrumb:function(){return o.e(0).then(o.bind(null,526))},PageDetailLoading:function(){return o.e(1).then(o.bind(null,538))},PopularPostLoading:function(){return o.e(13).then(o.bind(null,539))}}},c=d,v=o(31),component=Object(v.a)(c,(function(){var t,e,o,n,l,r,d,c,v,m,f,h,_,C,w,P,k,x,y=this,L=y._self._c;return L("div",[L("Breadcrumb",{attrs:{title:null===(t=y.blog)||void 0===t?void 0:t.name,pages:[{link:"/knowledge-desk",name:"Knowledge Desk"},{link:"",name:null===(e=y.blog)||void 0===e?void 0:e.name}]}}),y._v(" "),L("div",{staticClass:"blog-details-area pt-70 pb-70"},[L("div",{staticClass:"container"},[L("div",{staticClass:"row"},[L("div",{staticClass:"col-lg-8"},[L("div",{staticClass:"blog-details-content pr-20"},[y.blogLoading?[L("PageDetailLoading")]:[L("div",{staticClass:"blog-preview-img"},[L("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":null===(o=y.blog)||void 0===o?void 0:o.image,alt:null===(n=y.blog)||void 0===n?void 0:n.image_alt,title:null===(l=y.blog)||void 0===l?void 0:l.image_title}})]),y._v(" "),L("ul",{staticClass:"tag-list"},[L("li",[L("span",{staticClass:"svg-icon"},[L("font-awesome-icon",{attrs:{icon:["fa","user"]}}),y._v("  "+y._s(null===(r=y.blog)||void 0===r?void 0:r.published)+"\n                                    ")],1)]),y._v(" "),L("li",[L("span",{staticClass:"svg-icon"},[L("font-awesome-icon",{attrs:{icon:["fa","user"]}}),y._v(" \n                                        "),L("NuxtLink",{attrs:{to:"/leadership-team"},domProps:{innerHTML:y._s(null===(d=y.blog)||void 0===d?void 0:d.author_name)}})],1)])]),y._v(" "),L("h1",{domProps:{innerHTML:y._s(null===(c=y.blog)||void 0===c?void 0:c.heading)}}),y._v(" "),L("div",{domProps:{innerHTML:y._s(null===(v=y.blog)||void 0===v?void 0:v.description)}}),y._v(" "),L("div",{staticClass:"article-share"},[L("div",{staticClass:"row align-items-center justify-content-between"},[null!==y.prev_blog?L("div",{staticClass:"col-lg-auto col-md-auto"},[L("div",{staticClass:"pagination-area m-0"},[L("NuxtLink",{staticClass:"prev page-numbers",attrs:{to:null!==y.prev_blog?"/knowledge-desk/".concat(null===(m=y.prev_blog)||void 0===m?void 0:m.slug):"#",title:"previous blog"}},[L("i",{staticClass:"flaticon-left-arrow"})])],1)]):y._e(),y._v(" "),L("div",{staticClass:"col-lg-auto col-md-auto"},[L("div",{staticClass:"article-social-icon"},[L("ul",{staticClass:"social-icon"},[L("li",{staticClass:"title"},[y._v("Share :")]),y._v(" "),L("li",[L("a",{attrs:{href:"https://www.facebook.com/share.php?u=https://www.aaaedu.in/knowledge-desk/".concat(null===(f=y.blog)||void 0===f?void 0:f.slug,"&title=").concat(null===(h=y.blog)||void 0===h?void 0:h.name),target:"_blank"}},[L("span",{staticClass:"svg-icon"},[L("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1)])]),y._v(" "),L("li",[L("a",{attrs:{href:"https://twitter.com/share?text=".concat(null===(_=y.blog)||void 0===_?void 0:_.name,"&url=https://www.aaaedu.in/knowledge-desk/").concat(null===(C=y.blog)||void 0===C?void 0:C.slug),target:"_blank"}},[L("span",{staticClass:"svg-icon"},[L("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])]),y._v(" "),L("li",[L("a",{attrs:{href:"https://www.linkedin.com/shareArticle?mini=true&url=https://www.aaaedu.in/knowledge-desk/".concat(null===(w=y.blog)||void 0===w?void 0:w.slug,"&title=").concat(null===(P=y.blog)||void 0===P?void 0:P.name,"&source=").concat(null===(k=y.blog)||void 0===k?void 0:k.name),target:"_blank"}},[L("span",{staticClass:"svg-icon"},[L("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)])])])])]),y._v(" "),null!==y.next_blog?L("div",{staticClass:"col-lg-auto col-md-auto"},[L("div",{staticClass:"pagination-area m-0"},[L("NuxtLink",{staticClass:"next page-numbers",attrs:{to:null!==y.next_blog?"/knowledge-desk/".concat(null===(x=y.next_blog)||void 0===x?void 0:x.slug):"#",title:"next blog"}},[L("i",{staticClass:"flaticon-chevron"})])],1)]):y._e()])]),y._v(" "),L("div",{staticClass:"courses-details-area pb-70",attrs:{id:"blog-comment-area"}},[L("div",{staticClass:"courses-details-contact"},[L("div",{staticClass:"tab courses-details-tab"},[L("div",{staticClass:"tab_content current active"},[L("div",{staticClass:"tabs_item"},[L("div",{staticClass:"courses-details-tab-content"},[L("div",{staticClass:"courses-details-review-form"},[L("h3",[y._v("Comments:")]),y._v(" "),y.blogComment.length>0?[y._l(y.blogComment,(function(t,i){return L("div",{key:i,staticClass:"review-comments"},[L("div",{staticClass:"review-item"},[L("div",{staticClass:"content"},[L("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"/images/avatar.webp",alt:"Images"}}),y._v(" "),L("div",{staticClass:"content-dtls"},[L("h4",{domProps:{innerHTML:y._s(t.name)}}),y._v(" "),L("span",{domProps:{innerHTML:y._s(t.comment_on)}})])]),y._v(" "),L("p",{domProps:{innerHTML:y._s(t.comment)}})])])})),y._v(" "),y.blogCommentLastPage!==y.blogCommentPage?L("div",{staticClass:"text-center"},[L("button",{staticClass:"default-btn",attrs:{type:"button",disabled:y.blogCommentLoading},on:{click:function(t){++y.blogCommentPage}}},[y.blogCommentLoading?L("div",{staticClass:"spinner-border",attrs:{role:"status"}}):[y._v("\n                                                                        Load More Comments\n                                                                    ")]],2)]):y._e()]:y._e()],2)])])])])])]),y._v(" "),L("div",{staticClass:"comments-form"},[L("div",{staticClass:"contact-form"},[L("h4",[y._v("Leave A Comment")]),y._v(" "),L("ValidationObserver",{ref:"form",scopedSlots:y._u([{key:"default",fn:function(t){var e=t.handleSubmit;return[L("form",{attrs:{id:"contactForm"},on:{submit:function(t){return t.preventDefault(),e(y.formHandler)}}},[L("div",{staticClass:"row"},[L("div",{staticClass:"col-lg-6 col-sm-6"},[L("div",{staticClass:"form-group"},[L("ValidationProvider",{attrs:{rules:"required|alpha_spaces",name:"name"},scopedSlots:y._u([{key:"default",fn:function(t){var e=t.classes,o=t.errors;return[L("input",{directives:[{name:"model",rawName:"v-model",value:y.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"name","data-error":"Please enter your name",placeholder:"Your Name"},domProps:{value:y.name},on:{input:function(t){t.target.composing||(y.name=t.target.value)}}}),y._v(" "),L("div",{class:e},[y._v(y._s(o[0]))])]}}],null,!0)})],1)]),y._v(" "),L("div",{staticClass:"col-lg-6 col-sm-6"},[L("div",{staticClass:"form-group"},[L("ValidationProvider",{attrs:{rules:"required|email",name:"email"},scopedSlots:y._u([{key:"default",fn:function(t){var e=t.classes,o=t.errors;return[L("input",{directives:[{name:"model",rawName:"v-model",value:y.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"email","data-error":"Please enter your email",placeholder:"Your Email"},domProps:{value:y.email},on:{input:function(t){t.target.composing||(y.email=t.target.value)}}}),y._v(" "),L("div",{class:e},[y._v(y._s(o[0]))])]}}],null,!0)})],1)]),y._v(" "),L("div",{staticClass:"col-lg-12 col-md-12"},[L("div",{staticClass:"form-group"},[L("ValidationProvider",{attrs:{rules:"required|custom_message",name:"comment"},scopedSlots:y._u([{key:"default",fn:function(t){var e=t.classes,o=t.errors;return[L("textarea",{directives:[{name:"model",rawName:"v-model",value:y.comment,expression:"comment"}],staticClass:"form-control",attrs:{name:"message",id:"message",cols:"30",rows:"8","data-error":"Write your message",placeholder:"Comment..."},domProps:{value:y.comment},on:{input:function(t){t.target.composing||(y.comment=t.target.value)}}}),y._v(" "),L("div",{class:e},[y._v(y._s(o[0]))])]}}],null,!0)})],1)]),y._v(" "),L("div",{staticClass:"col-lg-12 col-md-12"},[L("button",{staticClass:"default-btn",attrs:{type:"submit",disabled:y.commentPostLoading}},[y.commentPostLoading?L("div",{staticClass:"spinner-border",attrs:{role:"status"}}):[y._v("\n                                                            Post A Comment\n                                                        ")]],2)])])])]}}],null,!1,2733263923)})],1)])]],2)]),y._v(" "),L("div",{staticClass:"col-lg-4",attrs:{id:"popular-blog-area"}},[L("div",{staticClass:"side-bar-area"},[L("div",{staticClass:"side-bar-widget"},[L("h3",{staticClass:"title"},[y._v("Popular post")]),y._v(" "),L("div",{staticClass:"widget-popular-post"},[y.popularBlogLoading?L("PopularPostLoading"):y._e(),y._v(" "),y._l(y.popularBlog,(function(t,i){return!y.popularBlogLoading&&y.popularBlog.length>0?L("article",{key:i,staticClass:"item"},[L("div",{staticClass:"info"},[L("p",[y._v(y._s(t.published))]),y._v(" "),L("h4",{staticClass:"title-text"},[L("NuxtLink",{attrs:{to:"/knowledge-desk/".concat(t.slug)}},[y._v("\n                                                "+y._s(t.name)+"\n                                            ")])],1),y._v(" "),L("p",[y._v("\n                                            "+y._s(t.short_description)+"\n                                        ")]),y._v(" "),L("hr")])]):y._e()})),y._v(" "),!y.popularBlogLoading&&y.popularBlog.length>0?L("div",{staticClass:"col-12 text-center"},[L("pagination",{attrs:{records:y.popularBlogCount,"per-page":y.popularBlogPerPage,options:{edgeNavigation:!1}},on:{paginate:y.handlePopularBlogPaginationChnage},model:{value:y.popularBlogCurrentPage,callback:function(t){y.popularBlogCurrentPage=t},expression:"popularBlogCurrentPage"}})],1):y._e()],2)])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);