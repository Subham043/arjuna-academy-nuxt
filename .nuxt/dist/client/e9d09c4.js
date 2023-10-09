(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{477:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={mission_vision:"/api/v1/mission-vision",seo:"/api/v1/seo",faq:"/api/v1/faq",legal:"/api/v1/legal",branch:"/api/v1/branch",course:"/api/v1/course",gallery:"/api/v1/gallery",campaign:"/api/v1/campaign",event:"/api/v1/event",testimonial:"/api/v1/testimonial",counter:"/api/v1/counter",feature:"/api/v1/feature",achieverCategory:"/api/v1/achiever/category",achieverStudent:"/api/v1/achiever/student",aboutSection:"/api/v1/about-section",bannerSection:"/api/v1/home-page-banner",blog:"/api/v1/blog",expertTip:"/api/v1/expert-tip",management:"/api/v1/team-member/management",staff:"/api/v1/team-member/staff",contact:"/api/v1/contact-form",day_scholar:"/api/v1/day-scholar-form",subscription:"/api/v1/subscription-form",register:"/api/v1/auth/register",forgot_password:"/api/v1/auth/forgot-password",reset_password:"/api/v1/auth/reset-password",vrddhi:"/api/v1/vrddhi-form",admission_puc:"/api/v1/admission/puc",password_update:"/api/v1/profile/update-password",profile_update:"/api/v1/profile/update",admission_not_puc:"/api/v1/admission/not-puc"}},516:function(t,e,n){"use strict";n.r(e);n(24);var r=n(2),o=(n(32),n(477)),l={name:"ExpertTipDetailPage",layout:"MainPageLayout",data:function(){return{expertTipLoading:!1,expertTip:null,prev_expertTip:null,next_expertTip:null}},head:function(){var t,e,n,r,o;return{title:null===(t=this.expertTip)||void 0===t?void 0:t.meta_title,meta:[{hid:"og:title",name:"og:title",content:null===(e=this.expertTip)||void 0===e?void 0:e.meta_title},{hid:"og:type",name:"og:type",content:"website"},{hid:"description",name:"description",content:null===(n=this.expertTip)||void 0===n?void 0:n.meta_description},{hid:"keywords",name:"keywords",content:null===(r=this.expertTip)||void 0===r?void 0:r.meta_keywords}],script:[{type:"application/ld+json",innerHTML:null===(o=this.expertTip)||void 0===o?void 0:o.meta_scripts}],__dangerouslyDisableSanitizers:["script"]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getExpertTip();case 2:case"end":return e.stop()}}),e)})))()},methods:{getExpertTip:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.expertTipLoading=!0,e.prev=1,e.next=4,t.$publicApi.get(o.a.expertTip+"/".concat(t.$route.params.slug));case 4:n=e.sent,t.expertTip=n.data.expertTip,t.next_expertTip=n.data.next_expertTip,t.prev_expertTip=n.data.prev_expertTip,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.$nuxt.context.error({status:e.t0.response.status,message:e.t0.response.data.message});case 13:return e.prev=13,t.expertTipLoading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()}},components:{Breadcrumb:function(){return n.e(0).then(n.bind(null,526))},PageDetailLoading:function(){return n.e(1).then(n.bind(null,538))}}},c=n(31),component=Object(c.a)(l,(function(){var t,e,n,r,o,l,c,v,d,m,x,f,h,_,T,w=this,C=w._self._c;return C("div",[C("Breadcrumb",{attrs:{title:null===(t=w.expertTip)||void 0===t?void 0:t.name,pages:[{link:"/expert-tips",name:"Expert Tips"},{link:"",name:null===(e=w.expertTip)||void 0===e?void 0:e.name}]}}),w._v(" "),C("div",{staticClass:"blog-details-area pt-70 pb-70"},[C("div",{staticClass:"container"},[C("div",{staticClass:"row"},[C("div",{staticClass:"col-lg-12"},[C("div",{staticClass:"blog-details-content pr-20"},[w.expertTipLoading?[C("PageDetailLoading",{attrs:{image:!1}})]:[C("ul",{staticClass:"tag-list"},[C("li",[C("span",{staticClass:"svg-icon"},[C("font-awesome-icon",{attrs:{icon:["fa","user"]}}),w._v("  "+w._s(null===(n=w.expertTip)||void 0===n?void 0:n.published)+"\n                                    ")],1)]),w._v(" "),C("li",[C("span",{staticClass:"svg-icon"},[C("font-awesome-icon",{attrs:{icon:["fa","user"]}}),w._v(" \n                                        "),C("NuxtLink",{attrs:{to:"/leadership-team"},domProps:{innerHTML:w._s(null===(r=w.expertTip)||void 0===r?void 0:r.author_name)}})],1)])]),w._v(" "),C("h1",{domProps:{innerHTML:w._s(null===(o=w.expertTip)||void 0===o?void 0:o.heading)}}),w._v(" "),C("div",{domProps:{innerHTML:w._s(null===(l=w.expertTip)||void 0===l?void 0:l.description)}}),w._v(" "),C("div",{staticClass:"article-share"},[C("div",{staticClass:"row align-items-center justify-content-between"},[null!==w.prev_expertTip?C("div",{staticClass:"col-lg-auto col-md-auto"},[C("div",{staticClass:"pagination-area m-0"},[C("NuxtLink",{staticClass:"prev page-numbers",attrs:{to:null!==w.prev_expertTip?"/expert-tips/".concat(null===(c=w.prev_expertTip)||void 0===c?void 0:c.slug):"#",title:"previous expert tip"}},[C("i",{staticClass:"flaticon-left-arrow"})])],1)]):w._e(),w._v(" "),C("div",{staticClass:"col-lg-auto col-md-auto"},[C("div",{staticClass:"article-social-icon"},[C("ul",{staticClass:"social-icon"},[C("li",{staticClass:"title"},[w._v("Share :")]),w._v(" "),C("li",[C("a",{attrs:{href:"https://www.facebook.com/share.php?u=https://www.aaaedu.in/expert-tips/".concat(null===(v=w.expertTip)||void 0===v?void 0:v.slug,"&title=").concat(null===(d=w.expertTip)||void 0===d?void 0:d.name),target:"_blank"}},[C("span",{staticClass:"svg-icon"},[C("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1)])]),w._v(" "),C("li",[C("a",{attrs:{href:"https://twitter.com/share?text=".concat(null===(m=w.expertTip)||void 0===m?void 0:m.name,"&url=https://www.aaaedu.in/expert-tips/").concat(null===(x=w.expertTip)||void 0===x?void 0:x.slug),target:"_blank"}},[C("span",{staticClass:"svg-icon"},[C("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])]),w._v(" "),C("li",[C("a",{attrs:{href:"https://www.linkedin.com/shareArticle?mini=true&url=https://www.aaaedu.in/expert-tips/".concat(null===(f=w.expertTip)||void 0===f?void 0:f.slug,"&title=").concat(null===(h=w.expertTip)||void 0===h?void 0:h.name,"&source=").concat(null===(_=w.expertTip)||void 0===_?void 0:_.name),target:"_blank"}},[C("span",{staticClass:"svg-icon"},[C("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)])])])])]),w._v(" "),null!==w.next_expertTip?C("div",{staticClass:"col-lg-auto col-md-auto"},[C("div",{staticClass:"pagination-area m-0"},[C("NuxtLink",{staticClass:"next page-numbers",attrs:{to:null!==w.next_expertTip?"/expert-tips/".concat(null===(T=w.next_expertTip)||void 0===T?void 0:T.slug):"#",title:"next expert tip"}},[C("i",{staticClass:"flaticon-chevron"})])],1)]):w._e()])])]],2)])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);