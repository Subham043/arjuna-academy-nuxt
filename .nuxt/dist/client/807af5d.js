(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{508:function(t,e,r){"use strict";r(509)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},509:function(t,e,r){var n=r(10),o=r(20),l=r(60),d=/"/g,c=function(t,e,r,n){var o=String(l(t)),c="<"+e;return""!==r&&(c+=" "+r+'="'+String(n).replace(d,"&quot;")+'"'),c+">"+o+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(c),n(n.P+n.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",r)}},510:function(t,e,r){"use strict";r(508),r(25);var n={name:"BreadcrumbComponent",props:{title:{type:String,default:""},pages:{type:Array,default:[]}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"inner-banner inner-banner-bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"inner-title text-center"},[e("h3",[t._v(t._s(t.title))]),t._v(" "),e("ul",[e("li",[e("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t._l(t.pages,(function(r,i){return e("li",{key:i},[i+1!=t.pages.length?e("NuxtLink",{attrs:{to:r.link}},[t._v(t._s(r.name))]):[t._v("\n                         "+t._s(r.name)+"\n                    ")]],2)}))],2)])])])}),[],!1,null,null,null);e.a=component.exports},546:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(23),{name:"SigninPage",layout:"MainPageLayout",middleware:["Unauthenticated"],data:function(){return{email:"",password:"",loading:!1}},mounted:function(){this.$scrollTo("#__nuxt",0,{force:!0})},methods:{formHandler:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,d,c,v,m,f,_,h,w,C,x,k,y,S,P,L,N,$,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$auth.loginWith("local",{data:{email:t.email,password:t.password}});case 4:t.email="",t.password="",t.$refs.form.reset(),t.$toast.success("Logged in successfully"),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.response),t.$refs.form.setErrors({email:(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||null===(n=r.data)||void 0===n||null===(o=n.errors)||void 0===o||null===(l=o.email)||void 0===l?void 0:l.length)>0&&(null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d||null===(c=d.data)||void 0===c||null===(v=c.errors)||void 0===v?void 0:v.email[0]),password:(null===e.t0||void 0===e.t0||null===(m=e.t0.response)||void 0===m||null===(f=m.data)||void 0===f||null===(_=f.errors)||void 0===_||null===(h=_.password)||void 0===h?void 0:h.length)>0&&(null===e.t0||void 0===e.t0||null===(w=e.t0.response)||void 0===w||null===(C=w.data)||void 0===C||null===(x=C.errors)||void 0===x?void 0:x.password[0])}),null!==e.t0&&void 0!==e.t0&&null!==(k=e.t0.response)&&void 0!==k&&null!==(y=k.data)&&void 0!==y&&y.message&&t.$toast.error(null===e.t0||void 0===e.t0||null===(S=e.t0.response)||void 0===S||null===(P=S.data)||void 0===P?void 0:P.message),null!==e.t0&&void 0!==e.t0&&null!==(L=e.t0.response)&&void 0!==L&&null!==(N=L.data)&&void 0!==N&&N.error&&t.$toast.error(null===e.t0||void 0===e.t0||null===($=e.t0.response)||void 0===$||null===(j=$.data)||void 0===j?void 0:j.error);case 16:return e.prev=16,t.loading=!1,e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,10,16,19]])})))()}},components:{Breadcrumb:r(510).a}}),l=r(12),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("Breadcrumb",{attrs:{title:"Sign In",pages:[{link:"",name:"Sign In"}]}}),t._v(" "),e("div",{staticClass:"user-area pt-70 pb-70"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center justify-content-center"},[e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"user-all-form"},[e("div",{staticClass:"register-form"},[t._m(0),t._v(" "),e("div",{staticClass:"contact-form"},[e("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(r){var n=r.handleSubmit;return[e("form",{attrs:{id:"contactForm"},on:{submit:function(e){return e.preventDefault(),n(t.formHandler)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("ValidationProvider",{attrs:{rules:"required|email",name:"email"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.classes,o=r.errors;return[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"email","data-error":"Email Address*",placeholder:"Email Address*"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),e("div",{class:n},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-12"},[e("ValidationProvider",{attrs:{rules:"required",name:"password"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.classes,o=r.errors;return[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"Password",placeholder:"Password*"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),e("div",{class:n},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"col-lg-12 form-condition"},[e("div",{staticClass:"agree-label"},[e("input",{attrs:{type:"checkbox",id:"chb1"}}),t._v(" "),e("label",{attrs:{for:"chb1"}},[t._v("\n                                                        Remember Me\n                                                        "),e("NuxtLink",{staticClass:"forget",attrs:{to:"/auth/forgot-password"}},[t._v("Forgot Password?")])],1)])]),t._v(" "),e("div",{staticClass:"col-lg-12 col-md-12 text-center"},[e("button",{staticClass:"default-btn",attrs:{type:"submit",disabled:t.loading}},[t.loading?e("div",{staticClass:"spinner-border",attrs:{role:"status"}}):[t._v("\n                                                        Login Now\n                                                    ")]],2)]),t._v(" "),e("div",{staticClass:"col-lg-12 mt-3 text-center"},[e("label",{attrs:{for:"chb1"}},[t._v("\n                                                    Don't have an account?\n                                                    "),e("NuxtLink",{staticClass:"forget",attrs:{to:"/auth/sign-up"}},[t._v("Register")])],1)])])])]}}])})],1)])])])])])])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"top-header"},[t("h3",[this._v("Sign in")])])}],!1,null,null,null);e.default=component.exports}}]);