(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{409:function(e,t,n){"use strict";n.r(t);var l=n(2),r=(n(30),n(371)),o={name:"ExpertTipDetailPage",layout:"MainPageLayout",data:function(){return{legalLoading:!1,legal:null}},head:function(){var e,t,n,l,r;return{title:null===(e=this.legal)||void 0===e?void 0:e.meta_title,meta:[{hid:"og:title",name:"og:title",content:null===(t=this.legal)||void 0===t?void 0:t.meta_title},{hid:"og:type",name:"og:type",content:"website"},{hid:"description",name:"description",content:null===(n=this.legal)||void 0===n?void 0:n.meta_description},{hid:"keywords",name:"keywords",content:null===(l=this.legal)||void 0===l?void 0:l.meta_keywords}],script:[{type:"application/ld+json",innerHTML:null===(r=this.legal)||void 0===r?void 0:r.meta_scripts}],__dangerouslyDisableSanitizers:["script"]}},fetch:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getLegal();case 2:case"end":return t.stop()}}),t)})))()},methods:{getLegal:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.legalLoading=!0,t.prev=1,t.next=4,e.$publicApi.get(r.a.legal+"/".concat(e.$route.params.slug));case 4:n=t.sent,e.legal=n.data.legal,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.$nuxt.context.error({status:t.t0.response.status,message:t.t0.response.data.message});case 11:return t.prev=11,e.legalLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()}},components:{Breadcrumb:function(){return Promise.all([n.e(1),n.e(2)]).then(n.bind(null,417))},PageDetailLoading:function(){return n.e(3).then(n.bind(null,429))}}},d=n(29),component=Object(d.a)(o,(function(){var e,t,n,l,r=this,o=r._self._c;return o("div",[o("Breadcrumb",{attrs:{title:null===(e=r.legal)||void 0===e?void 0:e.page_name,pages:[{link:"",name:"Legal"},{link:"",name:null===(t=r.legal)||void 0===t?void 0:t.page_name}]}}),r._v(" "),o("div",{staticClass:"blog-details-area pt-70 pb-70"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"blog-details-content pr-20"},[r.legalLoading?[o("PageDetailLoading",{attrs:{image:!1}})]:[o("h1",{domProps:{innerHTML:r._s(null===(n=r.legal)||void 0===n?void 0:n.heading)}}),r._v(" "),o("div",{domProps:{innerHTML:r._s(null===(l=r.legal)||void 0===l?void 0:l.description)}})]],2)])])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);