(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{388:function(e,t,n){"use strict";n.r(t);n(22);var r=n(2),o=(n(30),n(159),n(371)),c={name:"EventTipPage",layout:"MainPageLayout",data:function(){return{eventLoading:!1,event:[],eventCount:1,eventCurrentPage:1,eventPerPage:1,seo:{meta_title:"",meta_description:"",meta_keywords:"",meta_scripts:""}}},head:function(){return{title:this.seo.meta_title,meta:[{hid:"og:title",name:"og:title",content:this.seo.meta_title},{hid:"og:type",name:"og:type",content:"website"},{hid:"description",name:"description",content:this.seo.meta_description},{hid:"keywords",name:"keywords",content:this.seo.meta_keywords}],script:[{type:"application/ld+json",innerHTML:this.seo.meta_scripts}],__dangerouslyDisableSanitizers:["script"]}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getEvent(e.$route.query.page?Number(e.$route.query.page):1);case 2:return t.next=4,e.getSeo();case 4:case"end":return t.stop()}}),t)})))()},watch:{$route:function(e,t){this.handlePageChnage(),this.$scrollTo("#event-area",0,{force:!0})}},methods:{getEvent:function(){var e=arguments,t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:0,t.eventLoading=!0,n.prev=2,n.next=5,t.$publicApi.get(o.a.event+"?total=8&page=".concat(r,"&sort=-id"));case 5:d=n.sent,t.event=d.data.data,t.eventCount=null==d||null===(c=d.data)||void 0===c||null===(c=c.meta)||void 0===c?void 0:c.total,t.eventPerPage=null==d||null===(l=d.data)||void 0===l||null===(l=l.meta)||void 0===l?void 0:l.per_page,t.eventCurrentPage=t.$route.query.page?Number(t.$route.query.page):1,n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),t.$nuxt.context.error({status:n.t0.response.status,message:n.t0.response.data.message});case 15:return n.prev=15,t.eventLoading=!1,n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[2,12,15,18]])})))()},getSeo:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$publicApi.get(o.a.seo+"/events-page");case 3:n=t.sent,e.seo=n.data.seo,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.$nuxt.context.error({status:t.t0.response.status,message:t.t0.response.data.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},handlePaginationChnage:function(e){this.$router.push({query:{page:e}})},handlePageChnage:function(){this.eventCurrentPage=this.$route.query.page?Number(this.$route.query.page):1,this.getEvent(this.$route.query.page?Number(this.$route.query.page):1)}},components:{EventCard:function(){return n.e(7).then(n.bind(null,383))},Breadcrumb:function(){return Promise.all([n.e(1),n.e(2)]).then(n.bind(null,417))},EventCardLoading:function(){return n.e(10).then(n.bind(null,420))}}},l=c,d=n(29),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("Breadcrumb",{attrs:{title:"Events",pages:[{link:"",name:"Events"}]}}),e._v(" "),t("div",{staticClass:"blog-area pt-70 pb-70",attrs:{id:"event-area"}},[t("div",{staticClass:"container"},[e._m(0),e._v(" "),t("div",{staticClass:"row justify-content-center"},[e.eventLoading?t("EventCardLoading",{attrs:{count:8}}):e._e(),e._v(" "),e._l(e.event,(function(n,i){return!e.eventLoading&&e.event.length>0?t("div",{key:i,staticClass:"col-lg-6 col-md-6"},[t("EventCard",{attrs:{image:n.image,title:n.name,description:n.short_description,date:n.event_date_on,image_alt:n.image_alt,image_title:n.image_title,slug:n.slug}})],1):e._e()})),e._v(" "),!e.eventLoading&&e.event.length>0?t("div",{staticClass:"col-12 text-center"},[t("pagination",{attrs:{records:e.eventCount,"per-page":e.eventPerPage,options:{edgeNavigation:!1}},on:{paginate:e.handlePaginationChnage},model:{value:e.eventCurrentPage,callback:function(t){e.eventCurrentPage=t},expression:"eventCurrentPage"}})],1):e._e()],2)])])],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"section-title mb-45 text-center"},[t("h2",[e._v("Latest from our "),t("b",[e._v("events")])]),e._v(" "),t("p",[e._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                    eiusmod tempor incididunt ut labore et dolore.\n                ")])])}],!1,null,null,null);t.default=component.exports}}]);