(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{508:function(t,e,n){"use strict";n(509)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},509:function(t,e,n){var r=n(10),o=n(20),l=n(60),c=/"/g,v=function(t,e,n,r){var o=String(l(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),v+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(v),r(r.P+r.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},510:function(t,e,n){"use strict";n(508),n(25);var r={name:"BreadcrumbComponent",props:{title:{type:String,default:""},pages:{type:Array,default:[]}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"inner-banner inner-banner-bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"inner-title text-center"},[e("h3",[t._v(t._s(t.title))]),t._v(" "),e("ul",[e("li",[e("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t._l(t.pages,(function(n,i){return e("li",{key:i},[i+1!=t.pages.length?e("NuxtLink",{attrs:{to:n.link}},[t._v(t._s(n.name))]):[t._v("\n                         "+t._s(n.name)+"\n                    ")]],2)}))],2)])])])}),[],!1,null,null,null);e.a=component.exports},512:function(t,e,n){"use strict";var r={name:"EventCardComponent",props:{image:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},slug:{type:String,default:""},author:{type:String,default:""},date:{type:String,default:""},is_event:{type:Boolean,default:!0}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"event-item"},[""!==t.image?e("div",{staticClass:"event-img"},[e("NuxtLink",{attrs:{to:t.is_event?"/events/".concat(t.slug):"/expert-tips/".concat(t.slug)}},[e("img",{attrs:{src:t.image,alt:"Events"}})])],1):t._e(),t._v(" "),e("div",{staticClass:"event-content"},[e("ul",{staticClass:"event-list"},[e("li",[e("i",{staticClass:"ri-calendar-todo-fill"}),t._v(" "+t._s(t.date))]),t._v(" "),t.is_event?t._e():e("li",[e("i",{staticClass:"ri-user-fill"}),t._v(" "+t._s(t.author))])]),t._v(" "),e("h3",[e("NuxtLink",{attrs:{to:t.is_event?"/events/".concat(t.slug):"/expert-tips/".concat(t.slug)}},[t._v(t._s(t.title))])],1),t._v(" "),e("p",[t._v("\n            "+t._s(t.description)+"\n        ")])])])}),[],!1,null,null,null);e.a=component.exports},533:function(t,e,n){"use strict";n.r(e);n(25);var r=n(8),o=(n(23),n(181),n(510)),l=n(512),c=n(61),v={name:"EventTipPage",layout:"MainPageLayout",mounted:function(){this.$scrollTo("#__nuxt",0,{force:!0})},data:function(){return{eventLoading:!1,event:[],eventCount:1,eventCurrentPage:1,eventPerPage:1,seo:{meta_title:"",meta_description:"",meta_keywords:"",meta_scripts:""}}},head:function(){return{title:this.seo.meta_title,meta:[{hid:"og:title",name:"og:title",content:this.seo.meta_title},{hid:"og:type",name:"og:type",content:"website"},{hid:"description",name:"description",content:this.seo.meta_description},{hid:"keywords",name:"keywords",content:this.seo.meta_keywords}],script:[{type:"application/ld+json",innerHTML:this.seo.meta_scripts}],__dangerouslyDisableSanitizers:["script"]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getEvent(t.$route.query.page?Number(t.$route.query.page):1);case 2:return e.next=4,t.getSeo();case 4:case"end":return e.stop()}}),e)})))()},watch:{$route:function(t,e){this.$scrollTo("#__nuxt",0,{force:!0}),this.handlePageChnage()}},methods:{getEvent:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l,v,d,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:0,e.eventLoading=!0,n.prev=2,n.next=5,e.$publicApi.get(c.a.event+"?total=8&page=".concat(r));case 5:m=n.sent,e.event=m.data.data,e.eventCount=null==m||null===(o=m.data)||void 0===o||null===(l=o.meta)||void 0===l?void 0:l.total,e.eventPerPage=null==m||null===(v=m.data)||void 0===v||null===(d=v.meta)||void 0===d?void 0:d.per_page,e.eventCurrentPage=e.$route.query.page?Number(e.$route.query.page):1,n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),e.$nuxt.context.error({status:n.t0.response.status,message:n.t0.response.data.message});case 15:return n.prev=15,e.eventLoading=!1,n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[2,12,15,18]])})))()},getSeo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$publicApi.get(c.a.seo+"/events-page");case 3:n=e.sent,t.seo=n.data.seo,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$nuxt.context.error({status:e.t0.response.status,message:e.t0.response.data.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},handlePaginationChnage:function(t){this.$router.push({query:{page:t}})},handlePageChnage:function(){this.eventCurrentPage=this.$route.query.page?Number(this.$route.query.page):1,this.getEvent(this.$route.query.page?Number(this.$route.query.page):1)}},components:{EventCard:l.a,Breadcrumb:o.a}},d=v,m=n(12),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("Breadcrumb",{attrs:{title:"Events",pages:[{link:"",name:"Events"}]}}),t._v(" "),e("div",{staticClass:"blog-area pt-70 pb-70"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row justify-content-center"},[t.eventLoading?e("div",{staticClass:"row justify-content-center"},t._l(8,(function(i){return e("div",{key:i,staticClass:"col-lg-6 col-md-6"},[e("el-skeleton",{staticStyle:{width:"100%"},attrs:{animated:""}},[e("template",{slot:"template"},[e("div",{staticClass:"event-item"},[e("div",{staticClass:"event-img",staticStyle:{width:"40%"}},[e("el-skeleton-item",{staticStyle:{width:"100%",height:"240px"},attrs:{variant:"image"}})],1),t._v(" "),e("div",{staticClass:"event-content",staticStyle:{width:"60%"}},[e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"p"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),t._v(" "),e("br"),t._v(" "),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),t._v(" "),e("br")],1)])])],2)],1)})),0):t._e(),t._v(" "),t._l(t.event,(function(n,i){return!t.eventLoading&&t.event.length>0?e("div",{key:i,staticClass:"col-lg-6 col-md-6"},[e("EventCard",{attrs:{image:n.image,title:n.name,description:n.short_description,date:n.event_date_on,slug:n.slug}})],1):t._e()})),t._v(" "),!t.eventLoading&&t.event.length>0?e("div",{staticClass:"col-12 text-center"},[e("pagination",{attrs:{records:t.eventCount,"per-page":t.eventPerPage,options:{edgeNavigation:!1}},on:{paginate:t.handlePaginationChnage},model:{value:t.eventCurrentPage,callback:function(e){t.eventCurrentPage=e},expression:"eventCurrentPage"}})],1):t._e()],2)])])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-title mb-45 text-center"},[e("h2",[t._v("Latest from our "),e("b",[t._v("events")])]),t._v(" "),e("p",[t._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                    eiusmod tempor incididunt ut labore et dolore.\n                ")])])}],!1,null,null,null);e.default=component.exports}}]);