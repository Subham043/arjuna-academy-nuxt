(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{508:function(t,e,r){"use strict";r(509)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},509:function(t,e,r){var n=r(10),o=r(20),l=r(60),d=/"/g,c=function(t,e,r,n){var o=String(l(t)),c="<"+e;return""!==r&&(c+=" "+r+'="'+String(n).replace(d,"&quot;")+'"'),c+">"+o+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(c),n(n.P+n.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",r)}},510:function(t,e,r){"use strict";r(508),r(25);var n={name:"BreadcrumbComponent",props:{title:{type:String,default:""},pages:{type:Array,default:[]}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"inner-banner inner-banner-bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"inner-title text-center"},[e("h3",[t._v(t._s(t.title))]),t._v(" "),e("ul",[e("li",[e("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t._l(t.pages,(function(r,i){return e("li",{key:i},[i+1!=t.pages.length?e("NuxtLink",{attrs:{to:r.link}},[t._v(t._s(r.name))]):[t._v("\n                         "+t._s(r.name)+"\n                    ")]],2)}))],2)])])])}),[],!1,null,null,null);e.a=component.exports},545:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(23),r(510)),l=r(61),d={name:"ForgotPasswordPage",layout:"MainPageLayout",middleware:["Unauthenticated"],data:function(){return{email:"",loading:!1}},mounted:function(){this.$scrollTo("#__nuxt",0,{force:!0})},methods:{formHandler:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,d,c,v,m,f,_,h,C,w,x,k,y,P;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$publicApi.post(l.a.forgot_password,{email:t.email});case 4:r=e.sent,t.email="",t.$refs.form.reset(),t.$toast.success(r.data.message),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),t.$refs.form.setErrors({email:(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(o=n.data)||void 0===o||null===(d=o.errors)||void 0===d||null===(c=d.email)||void 0===c?void 0:c.length)>0&&(null===e.t0||void 0===e.t0||null===(v=e.t0.response)||void 0===v||null===(m=v.data)||void 0===m||null===(f=m.errors)||void 0===f?void 0:f.email[0])}),null!==e.t0&&void 0!==e.t0&&null!==(_=e.t0.response)&&void 0!==_&&null!==(h=_.data)&&void 0!==h&&h.message&&t.$toast.error(null===e.t0||void 0===e.t0||null===(C=e.t0.response)||void 0===C||null===(w=C.data)||void 0===w?void 0:w.message),null!==e.t0&&void 0!==e.t0&&null!==(x=e.t0.response)&&void 0!==x&&null!==(k=x.data)&&void 0!==k&&k.error&&t.$toast.error(null===e.t0||void 0===e.t0||null===(y=e.t0.response)||void 0===y||null===(P=y.data)||void 0===P?void 0:P.error);case 15:return e.prev=15,t.loading=!1,e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,10,15,18]])})))()}},components:{Breadcrumb:o.a}},c=r(12),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("Breadcrumb",{attrs:{title:"Forgot Password",pages:[{link:"",name:"Forgot Password"}]}}),t._v(" "),e("div",{staticClass:"user-area pt-70 pb-70"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center justify-content-center"},[e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"user-all-form"},[e("div",{staticClass:"register-form"},[t._m(0),t._v(" "),e("div",{staticClass:"contact-form"},[e("h3",{staticClass:"user-title"},[t._v("Forgot Password")]),t._v(" "),e("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(r){var n=r.handleSubmit;return[e("form",{attrs:{id:"contactForm"},on:{submit:function(e){return e.preventDefault(),n(t.formHandler)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("ValidationProvider",{attrs:{rules:"required|email",name:"email"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.classes,o=r.errors;return[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"email","data-error":"Email Address*",placeholder:"Email Address*"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),e("div",{class:n},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-lg-12 col-md-12 text-center"},[e("button",{staticClass:"default-btn",attrs:{type:"submit",disabled:t.loading}},[t.loading?e("div",{staticClass:"spinner-border",attrs:{role:"status"}}):[t._v("\n                                                        Reset Password\n                                                    ")]],2)]),t._v(" "),e("div",{staticClass:"col-lg-12 mt-3 text-center"},[e("label",{attrs:{for:"chb1"}},[t._v("\n                                                    Remember your password?\n                                                    "),e("NuxtLink",{staticClass:"forget",attrs:{to:"/auth/sign-in"}},[t._v("Login")])],1)])])])]}}])})],1)])])])])])])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"top-header"},[t("h3",[this._v("Forgot Password")])])}],!1,null,null,null);e.default=component.exports}}]);