(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{405:function(e,t,r){"use strict";r.r(t);r(22);var n=r(2),o=(r(30),r(159),r(371)),c={name:"AchieversPage",layout:"MainPageLayout",data:function(){return{achieverCategoryLoading:!1,achieverCategory:null,achieverStudentLoading:!1,achieverStudent:[],achieverStudentCount:1,achieverStudentCurrentPage:1,achieverStudentPerPage:1}},head:function(){var e,t,r,n,o;return{title:null===(e=this.achieverCategory)||void 0===e?void 0:e.meta_title,meta:[{hid:"og:title",name:"og:title",content:null===(t=this.achieverCategory)||void 0===t?void 0:t.meta_title},{hid:"og:type",name:"og:type",content:"website"},{hid:"description",name:"description",content:null===(r=this.achieverCategory)||void 0===r?void 0:r.meta_description},{hid:"keywords",name:"keywords",content:null===(n=this.achieverCategory)||void 0===n?void 0:n.meta_keywords}],script:[{type:"application/ld+json",innerHTML:null===(o=this.achieverCategory)||void 0===o?void 0:o.meta_scripts}],__dangerouslyDisableSanitizers:["script"]}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getAchieverCategory();case 2:return t.next=4,e.getAchieverStudent(e.$route.query.page?Number(e.$route.query.page):1);case 4:case"end":return t.stop()}}),t)})))()},watch:{$route:function(e,t){this.handleAchieverStudentPageChnage(),this.$scrollTo("#achiever-area",0,{force:!0})}},methods:{getAchieverCategory:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.achieverCategoryLoading=!0,t.prev=1,t.next=4,e.$publicApi.get(o.a.achieverCategory+"/".concat(e.$route.params.slug));case 4:r=t.sent,e.achieverCategory=r.data.achiverCategory,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.$nuxt.context.error({status:t.t0.response.status,message:t.t0.response.data.message});case 11:return t.prev=11,e.achieverCategoryLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()},getAchieverStudent:function(){var e=arguments,t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,d,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:0,t.achieverStudentLoading=!0,r.prev=2,r.next=5,t.$publicApi.get(o.a.achieverStudent+"?total=12&page=".concat(n,"&filter[has_categories]=").concat(t.$route.params.slug));case 5:v=r.sent,t.achieverStudent=v.data.data,t.achieverStudentCount=null==v||null===(c=v.data)||void 0===c||null===(c=c.meta)||void 0===c?void 0:c.total,t.achieverStudentPerPage=null==v||null===(d=v.data)||void 0===d||null===(d=d.meta)||void 0===d?void 0:d.per_page,t.achieverStudentCurrentPage=t.$route.query.page?Number(t.$route.query.page):1,r.next=15;break;case 12:r.prev=12,r.t0=r.catch(2),t.$nuxt.context.error({status:r.t0.response.status,message:r.t0.response.data.message});case 15:return r.prev=15,t.achieverStudentLoading=!1,r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[2,12,15,18]])})))()},handleAchieverStudentPaginationChnage:function(e){this.$router.push({query:{page:e}})},handleAchieverStudentPageChnage:function(){this.achieverStudentCurrentPage=this.$route.query.page?Number(this.$route.query.page):1,this.getAchieverStudent(this.$route.query.page?Number(this.$route.query.page):1)}},components:{Breadcrumb:function(){return Promise.all([r.e(1),r.e(2)]).then(r.bind(null,417))},AchieverStudentLoading:function(){return r.e(78).then(r.bind(null,427))},AchieverStudentCard:function(){return r.e(5).then(r.bind(null,428))}}},d=c,v=r(29),component=Object(v.a)(d,(function(){var e,t,r,n,o=this,c=o._self._c;return c("div",[c("Breadcrumb",{attrs:{title:null===(e=o.achieverCategory)||void 0===e?void 0:e.name,pages:[{link:"",name:null===(t=o.achieverCategory)||void 0===t?void 0:t.name}]}}),o._v(" "),c("div",{staticClass:"blog-area pt-70 pb-70",attrs:{id:"achiever-area"}},[c("div",{staticClass:"container"},[o.achieverCategoryLoading?o._e():c("div",{staticClass:"section-title mb-45 text-center"},[c("h2",{domProps:{innerHTML:o._s(null===(r=o.achieverCategory)||void 0===r?void 0:r.heading)}}),o._v(" "),c("p",{domProps:{innerHTML:o._s(null===(n=o.achieverCategory)||void 0===n?void 0:n.description)}})]),o._v(" "),o.achieverCategoryLoading?c("div",{staticClass:"section-title mb-45 text-center"},[c("el-skeleton",{staticStyle:{width:"100%"},attrs:{animated:""}},[c("template",{slot:"template"},[c("el-skeleton-item",{staticStyle:{width:"30%"},attrs:{variant:"h1"}}),o._v(" "),c("br"),o._v(" "),c("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"text"}}),o._v(" "),c("br"),o._v(" "),c("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"text"}})],1)],2)],1):o._e(),o._v(" "),o.achieverStudentLoading?c("AchieverStudentLoading",{attrs:{count:8}}):o._e(),o._v(" "),!o.achieverStudentLoading&&o.achieverStudent.length>0?c("div",{staticClass:"achiever-row row justify-content-center"},[o._l(o.achieverStudent,(function(e,i){return c("div",{key:i,staticClass:"col-lg-2 col-md-4 col-sm-6"},[c("AchieverStudentCard",{attrs:{image:e.image,image_alt:e.image_alt,image_title:e.image_title,name:e.name,rank:e.rank,college:e.college}})],1)})),o._v(" "),!o.achieverStudentLoading&&o.achieverStudent.length>0?c("div",{staticClass:"col-12 text-center"},[c("pagination",{attrs:{records:o.achieverStudentCount,"per-page":o.achieverStudentPerPage,options:{edgeNavigation:!1}},on:{paginate:o.handleAchieverStudentPaginationChnage},model:{value:o.achieverStudentCurrentPage,callback:function(e){o.achieverStudentCurrentPage=e},expression:"achieverStudentCurrentPage"}})],1):o._e()],2):o._e()],1)])],1)}),[],!1,null,null,null);t.default=component.exports}}]);