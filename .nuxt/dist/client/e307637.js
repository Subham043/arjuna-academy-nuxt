(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{399:function(e,l,t){"use strict";t.r(l);t(22);var o=t(2),n=(t(30),t(371)),r={name:"AdmissionPucPage",layout:"MainPageLayout",data:function(){return{centerOptions:[{value:"Hebbal (PU)",label:"Hebbal (PU)"},{value:"Vijaynagar (PU)",label:"Vijaynagar (PU)"},{value:"Kengeri (CBSE)",label:"Kengeri (CBSE)"},{value:"Uttarahalli Road (PU)",label:"Uttarahalli Road (PU)"},{value:"Kanakpura Road(Residential Campus)",label:"Kanakpura Road(Residential Campus)"}],batchOptions:[{value:"2-Years Full-Time Super 30 Classroom Program(Day Scholar)",label:"2-Years Full-Time Super 30 Classroom Program(Day Scholar)"},{value:"2-Year Full-Time Super 30 Classroom Program (Residential)",label:"2-Year Full-Time Super 30 Classroom Program (Residential)"},{value:"JEE Evening Batch",label:"JEE Evening Batch"},{value:"NEET Evening Batch",label:"NEET Evening Batch"},{value:"KVPY Weekend Batch",label:"KVPY Weekend Batch"},{value:"JEE+NEET+KVPY (7 Days a week)",label:"JEE+NEET+KVPY (7 Days a week)"}],name:"",school_name:"",aadhar:"",father_name:"",father_occupation:"",father_phone:"",mother_name:"",mother_occupation:"",mother_phone:"",center:"",batch:"",address:"",sibling:!1,sibling_occupation:!1,no_of_sibling:"",sibling_school:"",sibling_class:"",marks:[],loading:!1,seo:{meta_title:"",meta_description:"",meta_keywords:"",meta_scripts:""}}},head:function(){return{title:this.seo.meta_title,meta:[{hid:"og:title",name:"og:title",content:this.seo.meta_title},{hid:"og:type",name:"og:type",content:"website"},{hid:"description",name:"description",content:this.seo.meta_description},{hid:"keywords",name:"keywords",content:this.seo.meta_keywords}],script:[{type:"application/ld+json",innerHTML:this.seo.meta_scripts}],__dangerouslyDisableSanitizers:["script"]}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.getSeo();case 2:case"end":return l.stop()}}),l)})))()},methods:{formHandler:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function l(){var t,o,r,d,c,v,m,_,h,f,C,k,y,w,P,S,x,V,E,N,R,F,Y,O,B,U,j,D,A,T,K,$,J,M,z,H,W,G,L,I,Q;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return e.loading=!0,l.prev=1,(t=new FormData).append("name",e.name),t.append("school_name",e.school_name),t.append("aadhar",e.aadhar),t.append("father_name",e.father_name),t.append("father_occupation",e.father_occupation),t.append("father_phone",e.father_phone),t.append("mother_name",e.mother_name),t.append("mother_occupation",e.mother_occupation),t.append("mother_phone",e.mother_phone),t.append("center",e.center),t.append("batch",e.batch),t.append("address",e.address),t.append("sibling",e.sibling?"Yes":"No"),e.sibling&&(t.append("sibling_occupation",e.sibling_occupation?"studying":"working"),e.sibling_occupation&&(t.append("no_of_sibling",e.no_of_sibling),t.append("sibling_school",e.sibling_school),t.append("sibling_class",e.sibling_class))),t.append("marks",e.marks),l.next=20,e.$publicApi.post(n.a.admission_puc,t);case 20:e.name="",e.school_name="",e.aadhar="",e.father_name="",e.father_occupation="",e.father_phone="",e.mother_name="",e.mother_occupation="",e.mother_phone="",e.center="",e.batch="",e.address="",e.no_of_sibling="",e.sibling_school="",e.sibling_class="",e.sibling=!1,e.sibling_occupation=!1,e.marks=[],e.$refs.form.reset(),e.$toast.success("Admission Recieved Successfully."),l.next=47;break;case 42:l.prev=42,l.t0=l.catch(1),e.$refs.form.setErrors({school_name:(null===l.t0||void 0===l.t0||null===(o=l.t0.response)||void 0===o||null===(o=o.data)||void 0===o||null===(o=o.errors)||void 0===o||null===(o=o.school_name)||void 0===o?void 0:o.length)>0&&(null===l.t0||void 0===l.t0||null===(r=l.t0.response)||void 0===r||null===(r=r.data)||void 0===r||null===(r=r.errors)||void 0===r?void 0:r.school_name[0]),name:(null===l.t0||void 0===l.t0||null===(d=l.t0.response)||void 0===d||null===(d=d.data)||void 0===d||null===(d=d.errors)||void 0===d||null===(d=d.name)||void 0===d?void 0:d.length)>0&&(null===l.t0||void 0===l.t0||null===(c=l.t0.response)||void 0===c||null===(c=c.data)||void 0===c||null===(c=c.errors)||void 0===c?void 0:c.name[0]),aadhar:(null===l.t0||void 0===l.t0||null===(v=l.t0.response)||void 0===v||null===(v=v.data)||void 0===v||null===(v=v.errors)||void 0===v||null===(v=v.aadhar)||void 0===v?void 0:v.length)>0&&(null===l.t0||void 0===l.t0||null===(m=l.t0.response)||void 0===m||null===(m=m.data)||void 0===m||null===(m=m.errors)||void 0===m?void 0:m.aadhar[0]),father_name:(null===l.t0||void 0===l.t0||null===(_=l.t0.response)||void 0===_||null===(_=_.data)||void 0===_||null===(_=_.errors)||void 0===_||null===(_=_.father_name)||void 0===_?void 0:_.length)>0&&(null===l.t0||void 0===l.t0||null===(h=l.t0.response)||void 0===h||null===(h=h.data)||void 0===h||null===(h=h.errors)||void 0===h?void 0:h.father_name[0]),father_phone:(null===l.t0||void 0===l.t0||null===(f=l.t0.response)||void 0===f||null===(f=f.data)||void 0===f||null===(f=f.errors)||void 0===f||null===(f=f.father_phone)||void 0===f?void 0:f.length)>0&&(null===l.t0||void 0===l.t0||null===(C=l.t0.response)||void 0===C||null===(C=C.data)||void 0===C||null===(C=C.errors)||void 0===C?void 0:C.father_name[0]),father_occupation:(null===l.t0||void 0===l.t0||null===(k=l.t0.response)||void 0===k||null===(k=k.data)||void 0===k||null===(k=k.errors)||void 0===k||null===(k=k.father_occupation)||void 0===k?void 0:k.length)>0&&(null===l.t0||void 0===l.t0||null===(y=l.t0.response)||void 0===y||null===(y=y.data)||void 0===y||null===(y=y.errors)||void 0===y?void 0:y.father_name[0]),mother_name:(null===l.t0||void 0===l.t0||null===(w=l.t0.response)||void 0===w||null===(w=w.data)||void 0===w||null===(w=w.errors)||void 0===w||null===(w=w.mother_name)||void 0===w?void 0:w.length)>0&&(null===l.t0||void 0===l.t0||null===(P=l.t0.response)||void 0===P||null===(P=P.data)||void 0===P||null===(P=P.errors)||void 0===P?void 0:P.mother_name[0]),mother_phone:(null===l.t0||void 0===l.t0||null===(S=l.t0.response)||void 0===S||null===(S=S.data)||void 0===S||null===(S=S.errors)||void 0===S||null===(S=S.mother_phone)||void 0===S?void 0:S.length)>0&&(null===l.t0||void 0===l.t0||null===(x=l.t0.response)||void 0===x||null===(x=x.data)||void 0===x||null===(x=x.errors)||void 0===x?void 0:x.mother_name[0]),mother_occupation:(null===l.t0||void 0===l.t0||null===(V=l.t0.response)||void 0===V||null===(V=V.data)||void 0===V||null===(V=V.errors)||void 0===V||null===(V=V.mother_occupation)||void 0===V?void 0:V.length)>0&&(null===l.t0||void 0===l.t0||null===(E=l.t0.response)||void 0===E||null===(E=E.data)||void 0===E||null===(E=E.errors)||void 0===E?void 0:E.mother_name[0]),center:(null===l.t0||void 0===l.t0||null===(N=l.t0.response)||void 0===N||null===(N=N.data)||void 0===N||null===(N=N.errors)||void 0===N||null===(N=N.center)||void 0===N?void 0:N.length)>0&&(null===l.t0||void 0===l.t0||null===(R=l.t0.response)||void 0===R||null===(R=R.data)||void 0===R||null===(R=R.errors)||void 0===R?void 0:R.center[0]),batch:(null===l.t0||void 0===l.t0||null===(F=l.t0.response)||void 0===F||null===(F=F.data)||void 0===F||null===(F=F.errors)||void 0===F||null===(F=F.batch)||void 0===F?void 0:F.length)>0&&(null===l.t0||void 0===l.t0||null===(Y=l.t0.response)||void 0===Y||null===(Y=Y.data)||void 0===Y||null===(Y=Y.errors)||void 0===Y?void 0:Y.batch[0]),marks:(null===l.t0||void 0===l.t0||null===(O=l.t0.response)||void 0===O||null===(O=O.data)||void 0===O||null===(O=O.errors)||void 0===O||null===(O=O.marks)||void 0===O?void 0:O.length)>0&&(null===l.t0||void 0===l.t0||null===(B=l.t0.response)||void 0===B||null===(B=B.data)||void 0===B||null===(B=B.errors)||void 0===B?void 0:B.marks[0]),address:(null===l.t0||void 0===l.t0||null===(U=l.t0.response)||void 0===U||null===(U=U.data)||void 0===U||null===(U=U.errors)||void 0===U||null===(U=U.address)||void 0===U?void 0:U.length)>0&&(null===l.t0||void 0===l.t0||null===(j=l.t0.response)||void 0===j||null===(j=j.data)||void 0===j||null===(j=j.errors)||void 0===j?void 0:j.address[0]),sibling:(null===l.t0||void 0===l.t0||null===(D=l.t0.response)||void 0===D||null===(D=D.data)||void 0===D||null===(D=D.errors)||void 0===D||null===(D=D.sibling)||void 0===D?void 0:D.length)>0&&(null===l.t0||void 0===l.t0||null===(A=l.t0.response)||void 0===A||null===(A=A.data)||void 0===A||null===(A=A.errors)||void 0===A?void 0:A.sibling[0]),sibling_occupation:(null===l.t0||void 0===l.t0||null===(T=l.t0.response)||void 0===T||null===(T=T.data)||void 0===T||null===(T=T.errors)||void 0===T||null===(T=T.sibling_occupation)||void 0===T?void 0:T.length)>0&&(null===l.t0||void 0===l.t0||null===(K=l.t0.response)||void 0===K||null===(K=K.data)||void 0===K||null===(K=K.errors)||void 0===K?void 0:K.sibling_occupation[0]),sibling_school:(null===l.t0||void 0===l.t0||null===($=l.t0.response)||void 0===$||null===($=$.data)||void 0===$||null===($=$.errors)||void 0===$||null===($=$.sibling_school)||void 0===$?void 0:$.length)>0&&(null===l.t0||void 0===l.t0||null===(J=l.t0.response)||void 0===J||null===(J=J.data)||void 0===J||null===(J=J.errors)||void 0===J?void 0:J.sibling_school[0]),sibling_class:(null===l.t0||void 0===l.t0||null===(M=l.t0.response)||void 0===M||null===(M=M.data)||void 0===M||null===(M=M.errors)||void 0===M||null===(M=M.sibling_class)||void 0===M?void 0:M.length)>0&&(null===l.t0||void 0===l.t0||null===(z=l.t0.response)||void 0===z||null===(z=z.data)||void 0===z||null===(z=z.errors)||void 0===z?void 0:z.sibling_class[0]),no_of_sibling:(null===l.t0||void 0===l.t0||null===(H=l.t0.response)||void 0===H||null===(H=H.data)||void 0===H||null===(H=H.errors)||void 0===H||null===(H=H.no_of_sibling)||void 0===H?void 0:H.length)>0&&(null===l.t0||void 0===l.t0||null===(W=l.t0.response)||void 0===W||null===(W=W.data)||void 0===W||null===(W=W.errors)||void 0===W?void 0:W.no_of_sibling[0])}),null!==l.t0&&void 0!==l.t0&&null!==(G=l.t0.response)&&void 0!==G&&null!==(G=G.data)&&void 0!==G&&G.message&&e.$toast.error(null===l.t0||void 0===l.t0||null===(L=l.t0.response)||void 0===L||null===(L=L.data)||void 0===L?void 0:L.message),null!==l.t0&&void 0!==l.t0&&null!==(I=l.t0.response)&&void 0!==I&&null!==(I=I.data)&&void 0!==I&&I.error&&e.$toast.error(null===l.t0||void 0===l.t0||null===(Q=l.t0.response)||void 0===Q||null===(Q=Q.data)||void 0===Q?void 0:Q.error);case 47:return l.prev=47,e.loading=!1,l.finish(47);case 50:case"end":return l.stop()}}),l,null,[[1,42,47,50]])})))()},handleFileChnage:function(e){this.marks=e.target.files[0]},getSeo:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function l(){var t;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,e.$publicApi.get(n.a.seo+"/puc-page");case 3:t=l.sent,e.seo=t.data.seo,l.next=10;break;case 7:l.prev=7,l.t0=l.catch(0),e.$nuxt.context.error({status:l.t0.response.status,message:l.t0.response.data.message});case 10:case"end":return l.stop()}}),l,null,[[0,7]])})))()}},components:{Breadcrumb:function(){return Promise.all([t.e(1),t.e(2)]).then(t.bind(null,417))}}},d=t(29),component=Object(d.a)(r,(function(){var e=this,l=e._self._c;return l("div",[l("Breadcrumb",{attrs:{title:"Admission for Class 11 or 1st PUC",pages:[{link:"",name:"Admission for Class 11 or 1st PUC"}]}}),e._v(" "),l("div",{staticClass:"faq-area pt-70 pb-70"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-5"},[l("div",{staticClass:"faq-img"},[l("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"/images/faq-img.jpg",alt:"faq"}}),e._v(" "),l("div",{staticClass:"shape"},[l("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"/images/faq-shape.png",alt:"Faq"}})])])]),e._v(" "),l("div",{staticClass:"col-lg-7"},[l("div",{staticClass:"contact-widget-area pb-70"},[l("div",{staticClass:"container"},[l("div",{staticClass:"register-form"},[e._m(0),e._v(" "),l("div",{staticClass:"contact-form"},[l("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(t){var o=t.handleSubmit;return[l("form",{attrs:{id:"contactForm"},on:{submit:function(l){return l.preventDefault(),o(e.formHandler)}}},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|alpha_spaces",name:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Name"},model:{value:e.name,callback:function(l){e.name=l},expression:"name"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"school_name"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"School's Name"},model:{value:e.school_name,callback:function(l){e.school_name=l},expression:"school_name"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"aadhar"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Aadhar Card Detail"},model:{value:e.aadhar,callback:function(l){e.aadhar=l},expression:"aadhar"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|alpha_spaces",name:"father_name"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Father's Name"},model:{value:e.father_name,callback:function(l){e.father_name=l},expression:"father_name"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|phone",name:"father_phone"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Father's Phone"},model:{value:e.father_phone,callback:function(l){e.father_phone=l},expression:"father_phone"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"father_occupation"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Father's Occupation"},model:{value:e.father_occupation,callback:function(l){e.father_occupation=l},expression:"father_occupation"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|alpha_spaces",name:"mother_name"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Mother's Name"},model:{value:e.mother_name,callback:function(l){e.mother_name=l},expression:"mother_name"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|phone",name:"mother_phone"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Mother's Phone"},model:{value:e.mother_phone,callback:function(l){e.mother_phone=l},expression:"mother_phone"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"mother_occupation"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Mother's Occupation"},model:{value:e.mother_occupation,callback:function(l){e.mother_occupation=l},expression:"mother_occupation"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-6 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-select",{staticClass:"w-100",attrs:{placeholder:"Choose Your Center"},model:{value:e.center,callback:function(l){e.center=l},expression:"center"}},e._l(e.centerOptions,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{class:"col-lg-6 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"batch"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-select",{staticClass:"w-100",attrs:{placeholder:"Select Your Batch"},model:{value:e.batch,callback:function(l){e.batch=l},expression:"batch"}},e._l(e.batchOptions,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-12 col-md-12"},[l("ValidationProvider",{attrs:{rules:"required|ext:jpg,jpeg,png,webp",name:"marks"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label"},[e._v("Class 10 Preparatory Marks* "),l("br"),e._v(" "),l("code",[e._v("(Only PDF | JPG | PNG files are allowed. Max-size 512kb)")])]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.marks,expression:"marks"}],attrs:{type:"hidden"},domProps:{value:e.marks},on:{input:function(l){l.target.composing||(e.marks=l.target.value)}}}),e._v(" "),l("input",{staticClass:"form-control",attrs:{type:"file"},on:{change:e.handleFileChnage}})]),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1),e._v(" "),l("div",{staticClass:"col-lg-12 col-md-12"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"address"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Permanenet Address",type:"textarea",rows:5},model:{value:e.address,callback:function(l){e.address=l},expression:"address"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-6 col-md-12"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"sibling"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("label",[e._v("Do you have sibling?")]),l("br"),e._v(" "),l("el-switch",{attrs:{"active-text":"Yes","inactive-text":"No"},model:{value:e.sibling,callback:function(l){e.sibling=l},expression:"sibling"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),e.sibling?[l("div",{staticClass:"col-lg-6 col-md-12"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"sibling_occupation"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("label",[e._v("What are they doing?")]),l("br"),e._v(" "),l("el-switch",{attrs:{"active-text":"Studying","inactive-text":"Working"},model:{value:e.sibling_occupation,callback:function(l){e.sibling_occupation=l},expression:"sibling_occupation"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),e.sibling_occupation?[l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"no_of_sibling"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Number of Siblings"},model:{value:e.no_of_sibling,callback:function(l){e.no_of_sibling=l},expression:"no_of_sibling"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"sibling_class"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"If Studying, which grade are they studying in?"},model:{value:e.sibling_class,callback:function(l){e.sibling_class=l},expression:"sibling_class"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)]),e._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"form-group"},[l("ValidationProvider",{attrs:{rules:"required|custom_message",name:"sibling_school"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.classes,n=t.errors;return[l("el-input",{staticClass:"w-100",attrs:{placeholder:"Your Siblings School Name"},model:{value:e.sibling_school,callback:function(l){e.sibling_school=l},expression:"sibling_school"}}),e._v(" "),l("div",{class:o},[e._v(e._s(n[0]))])]}}],null,!0)})],1)])]:e._e()]:e._e(),e._v(" "),l("div",{staticClass:"col-lg-12 col-md-12"},[l("button",{staticClass:"default-btn",attrs:{type:"submit",disabled:e.loading}},[e.loading?l("div",{staticClass:"spinner-border",attrs:{role:"status"}}):[e._v("\n                                                            Submit\n                                                        ")]],2)])],2)])]}}])})],1)])])])])])])])],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"top-header"},[e("h3",[this._v("\n                                        Admission for Class 11 or 1st PUC\n                                    ")])])}],!1,null,null,null);l.default=component.exports}}]);