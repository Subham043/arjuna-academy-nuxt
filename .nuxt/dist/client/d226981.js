(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{508:function(t,e,n){"use strict";n(509)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},509:function(t,e,n){var r=n(10),l=n(20),o=n(60),v=/"/g,c=function(t,e,n,r){var l=String(o(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(r).replace(v,"&quot;")+'"'),c+">"+l+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(c),r(r.P+r.F*l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},510:function(t,e,n){"use strict";n(508),n(25);var r={name:"BreadcrumbComponent",props:{title:{type:String,default:""},pages:{type:Array,default:[]}}},l=n(12),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"inner-banner inner-banner-bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"inner-title text-center"},[e("h3",[t._v(t._s(t.title))]),t._v(" "),e("ul",[e("li",[e("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t._l(t.pages,(function(n,i){return e("li",{key:i},[i+1!=t.pages.length?e("NuxtLink",{attrs:{to:n.link}},[t._v(t._s(n.name))]):[t._v("\n                         "+t._s(n.name)+"\n                    ")]],2)}))],2)])])])}),[],!1,null,null,null);e.a=component.exports},550:function(t,e,n){"use strict";n.r(e);n(25);var r=n(8),l=(n(181),n(23),n(510)),o=n(61),v={name:"EventDetailPage",layout:"MainPageLayout",mounted:function(){this.$scrollTo("#__nuxt",0,{force:!0}),this.getPopluarEvent()},data:function(){return{eventLoading:!1,event:null,popularEventLoading:!1,popularEvent:[],popularEventCount:1,popularEventCurrentPage:1,popularEventPerPage:1}},head:function(){var t,e,n,r,l;return{title:null===(t=this.event)||void 0===t?void 0:t.meta_title,meta:[{hid:"og:title",name:"og:title",content:null===(e=this.event)||void 0===e?void 0:e.meta_title},{hid:"og:type",name:"og:type",content:"website"},{hid:"description",name:"description",content:null===(n=this.event)||void 0===n?void 0:n.meta_description},{hid:"keywords",name:"keywords",content:null===(r=this.event)||void 0===r?void 0:r.meta_keywords}],script:[{type:"application/ld+json",innerHTML:null===(l=this.event)||void 0===l?void 0:l.meta_scripts}],__dangerouslyDisableSanitizers:["script"]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getEvent();case 2:case"end":return e.stop()}}),e)})))()},watch:{$route:function(t,e){this.handlePopularEventPageChnage()}},methods:{getEvent:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.eventLoading=!0,e.prev=1,e.next=4,t.$publicApi.get(o.a.event+"/".concat(t.$route.params.slug));case 4:n=e.sent,t.event=n.data.event,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.$nuxt.context.error({status:e.t0.response.status,message:e.t0.response.data.message});case 11:return e.prev=11,t.eventLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()},getPopluarEvent:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,l,v,c,d,_;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:0,e.popularEventLoading=!0,n.prev=2,n.next=5,e.$publicApi.get(o.a.event+"?total=8&page=".concat(r));case 5:_=n.sent,e.popularEvent=_.data.data,e.popularEventCount=null==_||null===(l=_.data)||void 0===l||null===(v=l.meta)||void 0===v?void 0:v.total,e.popularEventPerPage=null==_||null===(c=_.data)||void 0===c||null===(d=c.meta)||void 0===d?void 0:d.per_page,e.popularEventCurrentPage=e.$route.query.page?Number(e.$route.query.page):1,n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),e.$nuxt.context.error({status:n.t0.response.status,message:n.t0.response.data.message});case 15:return n.prev=15,e.popularEventLoading=!1,n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[2,12,15,18]])})))()},handlePopularEventPaginationChnage:function(t){this.$router.push({query:{page:t}})},handlePopularEventPageChnage:function(){this.popularEventCurrentPage=this.$route.query.page?Number(this.$route.query.page):1,this.getPopluarEvent(this.$route.query.page?Number(this.$route.query.page):1)}},components:{Breadcrumb:l.a}},c=v,d=n(12),component=Object(d.a)(c,(function(){var t,e,n,r,l,o,v,c,d,_,m,h,f=this,C=f._self._c;return C("div",[C("Breadcrumb",{attrs:{title:null===(t=f.event)||void 0===t?void 0:t.name,pages:[{link:"/events",name:"Events"},{link:"",name:null===(e=f.event)||void 0===e?void 0:e.name}]}}),f._v(" "),C("div",{staticClass:"event-details-area pt-70 pb-70"},[C("div",{staticClass:"container"},[C("div",{staticClass:"row"},[C("div",{staticClass:"col-lg-8"},[f.eventLoading?[C("el-skeleton",{staticStyle:{width:"100%"},attrs:{animated:""}},[C("template",{slot:"template"},[C("el-skeleton-item",{staticStyle:{width:"100%",height:"440px"},attrs:{variant:"image"}}),f._v(" "),C("div",{staticStyle:{padding:"14px"}},[C("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"p"}}),f._v(" "),C("br"),f._v(" "),C("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),f._v(" "),C("br"),f._v(" "),C("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),f._v(" "),C("br"),f._v(" "),C("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),f._v(" "),C("br"),f._v(" "),C("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),f._v(" "),C("br"),f._v(" "),C("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),f._v(" "),C("br"),f._v(" "),C("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"text"}})],1)],1)],2)]:[C("div",{staticClass:"event-details-content pr-20"},[C("div",{staticClass:"event-preview-img"},[C("img",{attrs:{src:null===(n=f.event)||void 0===n?void 0:n.image,alt:null===(r=f.event)||void 0===r?void 0:r.image_alt,title:null===(l=f.event)||void 0===l?void 0:l.image_title}})]),f._v(" "),C("h1",[f._v(f._s(null===(o=f.event)||void 0===o?void 0:o.heading))]),f._v(" "),C("div",{directives:[{name:"html-safe",rawName:"v-html-safe",value:null===(v=f.event)||void 0===v?void 0:v.description,expression:"event?.description"}]}),f._v(" "),(null===(c=f.event)||void 0===c?void 0:c.speakers.length)>0?C("h3",{staticClass:"event-details-mt-30"},[f._v("Our speakers")]):f._e(),f._v(" "),(null===(d=f.event)||void 0===d?void 0:d.speakers.length)>0?C("div",{staticClass:"row justify-content-center event-details-mt-30"},f._l(null===(_=f.event)||void 0===_?void 0:_.speakers,(function(t,i){return C("div",{key:i,staticClass:"col-lg-3 col-md-6"},[C("div",{staticClass:"instructors-item instructors-item-bg"},[C("div",{staticClass:"instructors-img"},[C("img",{attrs:{src:t.image,alt:t.image_alt,title:t.image_title}})]),f._v(" "),C("div",{staticClass:"content"},[C("h3",[f._v("\n                                                "+f._s(t.name)+"\n                                            ")]),f._v(" "),C("span",[f._v(f._s(t.designation))])])])])})),0):f._e()])]],2),f._v(" "),C("div",{staticClass:"col-lg-4"},[f.eventLoading?f._e():[C("div",{staticClass:"event-sidebar"},[C("h3",{staticClass:"title"},[f._v("Events description")]),f._v(" "),C("ul",[C("li",[f._v("Date: "),C("span",[f._v(f._s(null===(m=f.event)||void 0===m?void 0:m.event_date_on))])]),f._v(" "),f._l(null===(h=f.event)||void 0===h?void 0:h.specifications,(function(t,i){return C("li",{key:i},[f._v("\n                                    "+f._s(t.title)+": "),C("span",[f._v(f._s(t.description))])])}))],2)])],f._v(" "),C("div",{staticClass:"event-sidebar"},[C("h3",{staticClass:"title"},[f._v("Upcoming Events")]),f._v(" "),f.popularEventLoading?C("article",{staticClass:"item"},f._l(8,(function(i){return C("div",{key:i,staticClass:"info"},[C("el-skeleton",{staticStyle:{width:"100%"},attrs:{animated:""}},[C("template",{slot:"template"},[C("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"p"}}),f._v(" "),C("br"),f._v(" "),C("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}})],1)],2),f._v(" "),C("hr")],1)})),0):f._e(),f._v(" "),f._l(f.popularEvent,(function(t,i){return!f.popularEventLoading&&f.popularEvent.length>0?C("article",{key:i,staticClass:"item"},[C("div",{staticClass:"info"},[C("NuxtLink",{attrs:{to:"/events/".concat(t.slug)}},[C("h4",{staticClass:"title-text"},[f._v("\n                                        "+f._s(t.name)+"\n                                    ")])]),f._v(" "),C("p",[f._v("\n                                    "+f._s(t.short_description)+"\n                                ")]),f._v(" "),C("hr")],1)]):f._e()})),f._v(" "),!f.popularEventLoading&&f.popularEvent.length>0?C("div",{staticClass:"col-12 text-center"},[C("pagination",{attrs:{records:f.popularEventCount,"per-page":f.popularEventPerPage,options:{edgeNavigation:!1}},on:{paginate:f.handlePopularEventPaginationChnage},model:{value:f.popularEventCurrentPage,callback:function(t){f.popularEventCurrentPage=t},expression:"popularEventCurrentPage"}})],1):f._e()],2)],2)])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);