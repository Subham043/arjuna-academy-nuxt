(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{508:function(t,e,n){"use strict";n(509)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},509:function(t,e,n){var r=n(10),l=n(20),o=n(60),c=/"/g,v=function(t,e,n,r){var l=String(o(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),v+">"+l+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(v),r(r.P+r.F*l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},510:function(t,e,n){"use strict";n(508),n(25);var r={name:"BreadcrumbComponent",props:{title:{type:String,default:""},pages:{type:Array,default:[]}}},l=n(12),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"inner-banner inner-banner-bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"inner-title text-center"},[e("h3",[t._v(t._s(t.title))]),t._v(" "),e("ul",[e("li",[e("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t._l(t.pages,(function(n,i){return e("li",{key:i},[i+1!=t.pages.length?e("NuxtLink",{attrs:{to:n.link}},[t._v(t._s(n.name))]):[t._v("\n                         "+t._s(n.name)+"\n                    ")]],2)}))],2)])])])}),[],!1,null,null,null);e.a=component.exports},552:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(23),n(510)),o=n(61),c={name:"ExpertTipDetailPage",layout:"MainPageLayout",mounted:function(){this.$scrollTo("#__nuxt",0,{force:!0})},data:function(){return{legalLoading:!1,legal:null}},head:function(){var t,e,n,r,l;return{title:null===(t=this.legal)||void 0===t?void 0:t.meta_title,meta:[{hid:"og:title",name:"og:title",content:null===(e=this.legal)||void 0===e?void 0:e.meta_title},{hid:"og:type",name:"og:type",content:"website"},{hid:"description",name:"description",content:null===(n=this.legal)||void 0===n?void 0:n.meta_description},{hid:"keywords",name:"keywords",content:null===(r=this.legal)||void 0===r?void 0:r.meta_keywords}],script:[{type:"application/ld+json",innerHTML:null===(l=this.legal)||void 0===l?void 0:l.meta_scripts}],__dangerouslyDisableSanitizers:["script"]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getLegal();case 2:case"end":return e.stop()}}),e)})))()},methods:{getLegal:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.legalLoading=!0,e.prev=1,e.next=4,t.$publicApi.get(o.a.legal+"/".concat(t.$route.params.slug));case 4:n=e.sent,t.legal=n.data.legal,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.$nuxt.context.error({status:e.t0.response.status,message:e.t0.response.data.message});case 11:return e.prev=11,t.legalLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()}},components:{Breadcrumb:l.a}},v=n(12),component=Object(v.a)(c,(function(){var t,e,n,r,l=this,o=l._self._c;return o("div",[o("Breadcrumb",{attrs:{title:null===(t=l.legal)||void 0===t?void 0:t.page_name,pages:[{link:"",name:"Legal"},{link:"",name:null===(e=l.legal)||void 0===e?void 0:e.page_name}]}}),l._v(" "),o("div",{staticClass:"blog-details-area pt-70 pb-70"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"blog-details-content pr-20"},[l.legalLoading?[o("el-skeleton",{staticStyle:{width:"100%"},attrs:{animated:""}},[o("template",{slot:"template"},[o("div",{staticStyle:{padding:"14px"}},[o("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"p"}}),l._v(" "),o("br"),l._v(" "),o("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),l._v(" "),o("br"),l._v(" "),o("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),l._v(" "),o("br"),l._v(" "),o("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),l._v(" "),o("br"),l._v(" "),o("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),l._v(" "),o("br"),l._v(" "),o("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),l._v(" "),o("br"),l._v(" "),o("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),l._v(" "),o("br"),l._v(" "),o("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),l._v(" "),o("br"),l._v(" "),o("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),l._v(" "),o("br"),l._v(" "),o("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"text"}})],1)])],2)]:[o("h1",[l._v(l._s(null===(n=l.legal)||void 0===n?void 0:n.heading))]),l._v(" "),o("div",{directives:[{name:"html-safe",rawName:"v-html-safe",value:null===(r=l.legal)||void 0===r?void 0:r.description,expression:"legal?.description"}]})]],2)])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);