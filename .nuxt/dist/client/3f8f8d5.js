(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{477:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={mission_vision:"/api/v1/mission-vision",seo:"/api/v1/seo",faq:"/api/v1/faq",legal:"/api/v1/legal",branch:"/api/v1/branch",course:"/api/v1/course",gallery:"/api/v1/gallery",campaign:"/api/v1/campaign",event:"/api/v1/event",testimonial:"/api/v1/testimonial",counter:"/api/v1/counter",feature:"/api/v1/feature",achieverCategory:"/api/v1/achiever/category",achieverStudent:"/api/v1/achiever/student",aboutSection:"/api/v1/about-section",bannerSection:"/api/v1/home-page-banner",blog:"/api/v1/blog",expertTip:"/api/v1/expert-tip",management:"/api/v1/team-member/management",staff:"/api/v1/team-member/staff",contact:"/api/v1/contact-form",day_scholar:"/api/v1/day-scholar-form",subscription:"/api/v1/subscription-form",register:"/api/v1/auth/register",forgot_password:"/api/v1/auth/forgot-password",reset_password:"/api/v1/auth/reset-password",vrddhi:"/api/v1/vrddhi-form",admission_puc:"/api/v1/admission/puc",password_update:"/api/v1/profile/update-password",profile_update:"/api/v1/profile/update",admission_not_puc:"/api/v1/admission/not-puc"}},501:function(e,t,n){"use strict";n.r(t);n(24);var r=n(2),o=(n(32),n(162),n(477)),l={name:"BlogPage",layout:"MainPageLayout",data:function(){return{blogLoading:!1,blog:[],blogCount:1,blogCurrentPage:1,blogPerPage:1,seo:{meta_title:"",meta_description:"",meta_keywords:"",meta_scripts:""}}},head:function(){return{title:this.seo.meta_title,meta:[{hid:"og:title",name:"og:title",content:this.seo.meta_title},{hid:"og:type",name:"og:type",content:"website"},{hid:"description",name:"description",content:this.seo.meta_description},{hid:"keywords",name:"keywords",content:this.seo.meta_keywords}],script:[{type:"application/ld+json",innerHTML:this.seo.meta_scripts}],__dangerouslyDisableSanitizers:["script"]}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getBlog(e.$route.query.page?Number(e.$route.query.page):1);case 2:return t.next=4,e.getSeo();case 4:case"end":return t.stop()}}),t)})))()},watch:{$route:function(e,t){this.handlePageChnage(),this.$scrollTo("#blog-area",0,{force:!0})}},methods:{getBlog:function(){var e=arguments,t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,l,c,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:0,t.blogLoading=!0,n.prev=2,n.next=5,t.$publicApi.get(o.a.blog+"?total=9&page=".concat(r));case 5:d=n.sent,t.blog=d.data.data,t.blogCount=null==d||null===(l=d.data)||void 0===l||null===(l=l.meta)||void 0===l?void 0:l.total,t.blogPerPage=null==d||null===(c=d.data)||void 0===c||null===(c=c.meta)||void 0===c?void 0:c.per_page,t.blogCurrentPage=t.$route.query.page?Number(t.$route.query.page):1,n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),t.$nuxt.context.error({status:n.t0.response.status,message:n.t0.response.data.message});case 15:return n.prev=15,t.blogLoading=!1,n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[2,12,15,18]])})))()},getSeo:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$publicApi.get(o.a.seo+"/blogs-page");case 3:n=t.sent,e.seo=n.data.seo,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.$nuxt.context.error({status:t.t0.response.status,message:t.t0.response.data.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},handlePaginationChnage:function(e){this.$router.push({query:{page:e}})},handlePageChnage:function(){this.blogCurrentPage=this.$route.query.page?Number(this.$route.query.page):1,this.getBlog(this.$route.query.page?Number(this.$route.query.page):1)}},components:{BlogCard:function(){return n.e(51).then(n.bind(null,483))},Breadcrumb:function(){return n.e(0).then(n.bind(null,526))},BlogCardLoading:function(){return n.e(3).then(n.bind(null,530))}}},c=l,d=n(31),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("Breadcrumb",{attrs:{title:"Knowledge Desk",pages:[{link:"",name:"Knowledge Desk"}]}}),e._v(" "),t("div",{staticClass:"blog-area pt-70 pb-70",attrs:{id:"blog-area"}},[t("div",{staticClass:"container"},[e._m(0),e._v(" "),t("div",{staticClass:"row justify-content-center"},[e.blogLoading?t("BlogCardLoading",{attrs:{count:9}}):e._e(),e._v(" "),e._l(e.blog,(function(n,i){return!e.blogLoading&&e.blog.length>0?t("div",{key:i,staticClass:"col-lg-4 col-md-6"},[t("BlogCard",{attrs:{image:n.image,title:n.name,description:n.short_description,date:n.published,slug:n.slug,author:n.author_name,image_alt:n.image_alt,image_title:n.image_title}})],1):e._e()})),e._v(" "),!e.blogLoading&&e.blog.length>0?t("div",{staticClass:"col-12 text-center"},[t("pagination",{attrs:{records:e.blogCount,"per-page":e.blogPerPage,options:{edgeNavigation:!1}},on:{paginate:e.handlePaginationChnage},model:{value:e.blogCurrentPage,callback:function(t){e.blogCurrentPage=t},expression:"blogCurrentPage"}})],1):e._e()],2)])])],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"section-title mb-45 text-center"},[t("h2",[e._v("Latest from our "),t("b",[e._v("blogs")])]),e._v(" "),t("p",[e._v("\n                    Explore The Latest Updates About NEET, JEE, IIT Exams And Foundation Courses\n                ")])])}],!1,null,null,null);t.default=component.exports}}]);