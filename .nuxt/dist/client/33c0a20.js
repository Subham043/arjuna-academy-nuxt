(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{508:function(e,l,t){"use strict";t(509)("link",(function(e){return function(l){return e(this,"a","href",l)}}))},509:function(e,l,t){var o=t(10),n=t(20),r=t(60),d=/"/g,v=function(e,l,t,o){var n=String(r(e)),v="<"+l;return""!==t&&(v+=" "+t+'="'+String(o).replace(d,"&quot;")+'"'),v+">"+n+"</"+l+">"};e.exports=function(e,l){var t={};t[e]=l(v),o(o.P+o.F*n((function(){var l=""[e]('"');return l!==l.toLowerCase()||l.split('"').length>3})),"String",t)}},510:function(e,l,t){"use strict";t(508),t(25);var o={name:"BreadcrumbComponent",props:{title:{type:String,default:""},pages:{type:Array,default:[]}}},n=t(12),component=Object(n.a)(o,(function(){var e=this,l=e._self._c;return l("div",{staticClass:"inner-banner inner-banner-bg"},[l("div",{staticClass:"container"},[l("div",{staticClass:"inner-title text-center"},[l("h3",[e._v(e._s(e.title))]),e._v(" "),l("ul",[l("li",[l("NuxtLink",{attrs:{to:"/"}},[e._v("Home")])],1),e._v(" "),e._l(e.pages,(function(t,i){return l("li",{key:i},[i+1!=e.pages.length?l("NuxtLink",{attrs:{to:t.link}},[e._v(e._s(t.name))]):[e._v("\n                         "+e._s(t.name)+"\n                    ")]],2)}))],2)])])])}),[],!1,null,null,null);l.a=component.exports},548:function(e,l,t){"use strict";t.r(l);t(25);var o=t(8),n=(t(23),t(510)),r=t(61),d={name:"VrddhiSyllabusPage",layout:"MainPageLayout",data:function(){return{standardOptions:[{value:"8th",label:"8th"},{value:"9th",label:"9th"},{value:"10th",label:"10th"}],syllabusOptions:[{value:"ICSE",label:"ICSE"},{value:"CBSE",label:"CBSE"},{value:"State",label:"State"}],name:"",school_name:"",phone:"",father_name:"",father_email:"",father_phone:"",mother_name:"",mother_email:"",mother_phone:"",standard:"",syllabus:"",card:[],loading:!1}},mounted:function(){this.$scrollTo("#__nuxt",0,{force:!0})},methods:{formHandler:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function l(){var t,o,n,d,v,c,m,h,_,f,C,y,k,S,w,x,P,V,F,N,O,E,$,j,B,M,D,L,A,H,I,J,R,G,Y,z,T,W,K,Q,U,X,Z,ee,le,ae,te,se,oe,ne,re,ie,de,ue,ve,ce,me,pe,he,_e,fe,ge,be,Ce,ye,ke,Se,we,xe,Pe,qe,Ve,Fe,Ne,Oe,Ee,$e,je,Be,Me,De,Le,Ae,He,Ie,Je,Re,Ge,Ye,ze,Te,We,Ke,Qe;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return e.loading=!0,l.prev=1,(t=new FormData).append("name",e.name),t.append("school_name",e.school_name),t.append("phone",e.phone),t.append("father_name",e.father_name),t.append("father_email",e.father_email),t.append("father_phone",e.father_phone),t.append("mother_name",e.mother_name),t.append("mother_email",e.mother_email),t.append("mother_phone",e.mother_phone),t.append("class",e.standard),t.append("syllabus",e.syllabus),t.append("card",e.card),l.next=17,e.$publicApi.post(r.a.vrddhi,t);case 17:o=l.sent,e.name="",e.school_name="",e.phone="",e.father_name="",e.father_email="",e.father_phone="",e.mother_name="",e.mother_email="",e.mother_phone="",e.standard="",e.syllabus="",e.card=[],e.$refs.form.reset(),e.$toast.success("Admission Recieved Successfully."),window.open(o.data.file_link,"_blank"),l.next=40;break;case 35:l.prev=35,l.t0=l.catch(1),e.$refs.form.setErrors({school_name:(null===l.t0||void 0===l.t0||null===(n=l.t0.response)||void 0===n||null===(d=n.data)||void 0===d||null===(v=d.errors)||void 0===v||null===(c=v.school_name)||void 0===c?void 0:c.length)>0&&(null===l.t0||void 0===l.t0||null===(m=l.t0.response)||void 0===m||null===(h=m.data)||void 0===h||null===(_=h.errors)||void 0===_?void 0:_.school_name[0]),name:(null===l.t0||void 0===l.t0||null===(f=l.t0.response)||void 0===f||null===(C=f.data)||void 0===C||null===(y=C.errors)||void 0===y||null===(k=y.name)||void 0===k?void 0:k.length)>0&&(null===l.t0||void 0===l.t0||null===(S=l.t0.response)||void 0===S||null===(w=S.data)||void 0===w||null===(x=w.errors)||void 0===x?void 0:x.name[0]),phone:(null===l.t0||void 0===l.t0||null===(P=l.t0.response)||void 0===P||null===(V=P.data)||void 0===V||null===(F=V.errors)||void 0===F||null===(N=F.phone)||void 0===N?void 0:N.length)>0&&(null===l.t0||void 0===l.t0||null===(O=l.t0.response)||void 0===O||null===(E=O.data)||void 0===E||null===($=E.errors)||void 0===$?void 0:$.phone[0]),father_name:(null===l.t0||void 0===l.t0||null===(j=l.t0.response)||void 0===j||null===(B=j.data)||void 0===B||null===(M=B.errors)||void 0===M||null===(D=M.father_name)||void 0===D?void 0:D.length)>0&&(null===l.t0||void 0===l.t0||null===(L=l.t0.response)||void 0===L||null===(A=L.data)||void 0===A||null===(H=A.errors)||void 0===H?void 0:H.father_name[0]),father_phone:(null===l.t0||void 0===l.t0||null===(I=l.t0.response)||void 0===I||null===(J=I.data)||void 0===J||null===(R=J.errors)||void 0===R||null===(G=R.father_phone)||void 0===G?void 0:G.length)>0&&(null===l.t0||void 0===l.t0||null===(Y=l.t0.response)||void 0===Y||null===(z=Y.data)||void 0===z||null===(T=z.errors)||void 0===T?void 0:T.father_name[0]),father_email:(null===l.t0||void 0===l.t0||null===(W=l.t0.response)||void 0===W||null===(K=W.data)||void 0===K||null===(Q=K.errors)||void 0===Q||null===(U=Q.father_email)||void 0===U?void 0:U.length)>0&&(null===l.t0||void 0===l.t0||null===(X=l.t0.response)||void 0===X||null===(Z=X.data)||void 0===Z||null===(ee=Z.errors)||void 0===ee?void 0:ee.father_name[0]),mother_name:(null===l.t0||void 0===l.t0||null===(le=l.t0.response)||void 0===le||null===(ae=le.data)||void 0===ae||null===(te=ae.errors)||void 0===te||null===(se=te.mother_name)||void 0===se?void 0:se.length)>0&&(null===l.t0||void 0===l.t0||null===(oe=l.t0.response)||void 0===oe||null===(ne=oe.data)||void 0===ne||null===(re=ne.errors)||void 0===re?void 0:re.mother_name[0]),mother_phone:(null===l.t0||void 0===l.t0||null===(ie=l.t0.response)||void 0===ie||null===(de=ie.data)||void 0===de||null===(ue=de.errors)||void 0===ue||null===(ve=ue.mother_phone)||void 0===ve?void 0:ve.length)>0&&(null===l.t0||void 0===l.t0||null===(ce=l.t0.response)||void 0===ce||null===(me=ce.data)||void 0===me||null===(pe=me.errors)||void 0===pe?void 0:pe.mother_name[0]),mother_email:(null===l.t0||void 0===l.t0||null===(he=l.t0.response)||void 0===he||null===(_e=he.data)||void 0===_e||null===(fe=_e.errors)||void 0===fe||null===(ge=fe.mother_email)||void 0===ge?void 0:ge.length)>0&&(null===l.t0||void 0===l.t0||null===(be=l.t0.response)||void 0===be||null===(Ce=be.data)||void 0===Ce||null===(ye=Ce.errors)||void 0===ye?void 0:ye.mother_name[0]),standard:(null===l.t0||void 0===l.t0||null===(ke=l.t0.response)||void 0===ke||null===(Se=ke.data)||void 0===Se||null===(we=Se.errors)||void 0===we||null===(xe=we.class)||void 0===xe?void 0:xe.length)>0&&(null===l.t0||void 0===l.t0||null===(Pe=l.t0.response)||void 0===Pe||null===(qe=Pe.data)||void 0===qe||null===(Ve=qe.errors)||void 0===Ve?void 0:Ve.class[0]),syllabus:(null===l.t0||void 0===l.t0||null===(Fe=l.t0.response)||void 0===Fe||null===(Ne=Fe.data)||void 0===Ne||null===(Oe=Ne.errors)||void 0===Oe||null===(Ee=Oe.syllabus)||void 0===Ee?void 0:Ee.length)>0&&(null===l.t0||void 0===l.t0||null===($e=l.t0.response)||void 0===$e||null===(je=$e.data)||void 0===je||null===(Be=je.errors)||void 0===Be?void 0:Be.syllabus[0]),card:(null===l.t0||void 0===l.t0||null===(Me=l.t0.response)||void 0===Me||null===(De=Me.data)||void 0===De||null===(Le=De.errors)||void 0===Le||null===(Ae=Le.card)||void 0===Ae?void 0:Ae.length)>0&&(null===l.t0||void 0===l.t0||null===(He=l.t0.response)||void 0===He||null===(Ie=He.data)||void 0===Ie||null===(Je=Ie.errors)||void 0===Je?void 0:Je.card[0])}),null!==l.t0&&void 0!==l.t0&&null!==(Re=l.t0.response)&&void 0!==Re&&null!==(Ge=Re.data)&&void 0!==Ge&&Ge.message&&e.$toast.error(null===l.t0||void 0===l.t0||null===(Ye=l.t0.response)||void 0===Ye||null===(ze=Ye.data)||void 0===ze?void 0:ze.message),null!==l.t0&&void 0!==l.t0&&null!==(Te=l.t0.response)&&void 0!==Te&&null!==(We=Te.data)&&void 0!==We&&We.error&&e.$toast.error(null===l.t0||void 0===l.t0||null===(Ke=l.t0.response)||void 0===Ke||null===(Qe=Ke.data)||void 0===Qe?void 0:Qe.error);case 40:return l.prev=40,e.loading=!1,l.finish(40);case 43:case"end":return l.stop()}}),l,null,[[1,35,40,43]])})))()},handleFileChnage:function(e){this.card=e.target.files[0]}},components:{Breadcrumb:n.a}},v=t(12),component=Object(v.a)(d,(function(){var e=this,l=e._self._c;return l("div",[l("Breadcrumb",{attrs:{title:"Syllabus",pages:[{link:"/vrddhi",name:"Vrddhi"},{link:"",name:"Syllabus"}]}}),e._v(" "),l("div",{staticClass:"faq-area pt-70 pb-70"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[e._m(0),e._v(" "),l("div",{staticClass:"col-lg-7"},[l("div",{staticClass:"contact-widget-area pb-70"},[l("div",{staticClass:"container"},[l("div",{staticClass:"register-form"},[e._m(1),e._v(" "),l("div",{staticClass:"contact-form"},[l("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(t){var o=t.handleSubmit;return[l("form",{attrs:{id:"contactForm"},on:{submit:function(l){return l.preventDefault(),o(e.formHandler)}}},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|alpha_spaces",name:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Name"},model:{value:e.name,callback:function(l){e.name=l},expression:"name"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"school_name"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"School's Name"},model:{value:e.school_name,callback:function(l){e.school_name=l},expression:"school_name"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|phone",name:"phone"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Whatsapp Number"},model:{value:e.phone,callback:function(l){e.phone=l},expression:"phone"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|alpha_spaces",name:"father_name"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Father's Name"},model:{value:e.father_name,callback:function(l){e.father_name=l},expression:"father_name"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|phone",name:"father_phone"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Father's Phone"},model:{value:e.father_phone,callback:function(l){e.father_phone=l},expression:"father_phone"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|email",name:"father_email"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Father's Email"},model:{value:e.father_email,callback:function(l){e.father_email=l},expression:"father_email"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|alpha_spaces",name:"mother_name"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Mother's Name"},model:{value:e.mother_name,callback:function(l){e.mother_name=l},expression:"mother_name"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|phone",name:"mother_phone"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Mother's Phone"},model:{value:e.mother_phone,callback:function(l){e.mother_phone=l},expression:"mother_phone"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"mother_email"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Mother's Email"},model:{value:e.mother_email,callback:function(l){e.mother_email=l},expression:"mother_email"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-6 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"standard"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-select",{staticClass:"w-100",attrs:{placeholder:"Choose Your Class"},model:{value:e.standard,callback:function(l){e.standard=l},expression:"standard"}},e._l(e.standardOptions,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{class:"col-lg-6 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"syllabus"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-select",{staticClass:"w-100",attrs:{placeholder:"Select Your Syllabus"},model:{value:e.syllabus,callback:function(l){e.syllabus=l},expression:"syllabus"}},e._l(e.syllabusOptions,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-12 col-md-12"},[l("ValidationProvider",{attrs:{rules:"required|ext:jpg,jpeg,png,webp",name:"card"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label"},[e._v("Student's ID Cards * "),l("br"),e._v(" "),l("code",[e._v("(Only PDF | JPG | PNG files are allowed. Max-size 512kb)")])]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.card,expression:"card"}],attrs:{type:"hidden"},domProps:{value:e.card},on:{input:function(l){l.target.composing||(e.card=l.target.value)}}}),e._v(" "),l("input",{staticClass:"form-control",attrs:{type:"file"},on:{change:e.handleFileChnage}})]),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1),e._v(" "),l("div",{staticClass:"col-lg-12 col-md-12"},[l("button",{staticClass:"default-btn",attrs:{type:"submit",disabled:e.loading}},[e.loading?l("div",{staticClass:"spinner-border",attrs:{role:"status"}}):[e._v("\n                                                            Submit\n                                                        ")]],2)])])])]}}])})],1)])])])])])])])],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"faq-img"},[e("img",{attrs:{src:"/images/faq-img.jpg",alt:"faq"}}),this._v(" "),e("div",{staticClass:"shape"},[e("img",{attrs:{src:"/images/faq-shape.png",alt:"Faq"}})])])])},function(){var e=this._self._c;return e("div",{staticClass:"top-header"},[e("h3",[this._v("\n                                        Vrddhi Syllabus\n                                    ")])])}],!1,null,null,null);l.default=component.exports}}]);