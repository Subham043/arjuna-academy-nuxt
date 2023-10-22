/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{155:function(n,e,t){n.exports=function(){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(e)}function e(){return e=Object.assign||function(n){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(n[e]=source[e])}return n},e.apply(this,arguments)}var t=4,o=.001,r=1e-7,f=10,c=11,l=1/(c-1),d="function"==typeof Float32Array;function v(n,e){return 1-3*e+3*n}function y(n,e){return 3*e-6*n}function w(n){return 3*n}function m(n,e,t){return((v(e,t)*n+y(e,t))*n+w(e))*n}function h(n,e,t){return 3*v(e,t)*n*n+2*y(e,t)*n+w(e)}function O(n,e,t,o,c){var l,d,i=0;do{(l=m(d=e+(t-e)/2,o,c)-n)>0?t=d:e=d}while(Math.abs(l)>r&&++i<f);return d}function S(n,e,o,r){for(var i=0;i<t;++i){var f=h(e,o,r);if(0===f)return e;e-=(m(e,o,r)-n)/f}return e}function L(n){return n}var T=function(n,e,t,r){if(!(0<=n&&n<=1&&0<=t&&t<=1))throw new Error("bezier x values must be in [0, 1] range");if(n===e&&t===r)return L;for(var f=d?new Float32Array(c):new Array(c),i=0;i<c;++i)f[i]=m(i*l,n,t);function v(e){for(var r=0,d=1,v=c-1;d!==v&&f[d]<=e;++d)r+=l;--d;var y=r+(e-f[d])/(f[d+1]-f[d])*l,w=h(y,n,t);return w>=o?S(e,y,n,t):0===w?y:O(e,r,r+l,n,t)}return function(n){return 0===n?0:1===n?1:m(v(n),e,r)}},E={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},P=!1;try{var A=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,A)}catch(n){}var C={$:function(n){return"string"!=typeof n?n:document.querySelector(n)},on:function(element,n,e){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};n instanceof Array||(n=[n]);for(var i=0;i<n.length;i++)element.addEventListener(n[i],e,!!P&&t)},off:function(element,n,e){n instanceof Array||(n=[n]);for(var i=0;i<n.length;i++)element.removeEventListener(n[i],e)},cumulativeOffset:function(element){var n=0,e=0;do{n+=element.offsetTop||0,e+=element.offsetLeft||0,element=element.offsetParent}while(element);return{top:n,left:e}}},x=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],D={container:"body",duration:500,lazy:!0,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function V(n){D=e({},D,n)}var k=function(){var element,e,t,o,r,f,c,l,d,v,y,w,m,h,O,S,L,P,A,V,k,z,M,j,F,H,progress,N=function(n){l&&(M=n,V=!0)};function $(n){var e=n.scrollTop;return"body"===n.tagName.toLowerCase()&&(e=e||document.documentElement.scrollTop),e}function J(n){var e=n.scrollLeft;return"body"===n.tagName.toLowerCase()&&(e=e||document.documentElement.scrollLeft),e}function B(){k=C.cumulativeOffset(e),z=C.cumulativeOffset(element),w&&(O=z.left-k.left+f,P=O-h),m&&(L=z.top-k.top+f,A=L-S)}function G(n){if(V)return I();F||(F=n),r||B(),H=n-F,progress=Math.min(H/t,1),progress=j(progress),K(e,S+A*progress,h+P*progress),H<t?window.requestAnimationFrame(G):I()}function I(){V||K(e,L,O),F=!1,C.off(e,x,N),V&&y&&y(M,element),!V&&v&&v(element)}function K(element,n,e){m&&(element.scrollTop=n),w&&(element.scrollLeft=e),"body"===element.tagName.toLowerCase()&&(m&&(document.documentElement.scrollTop=n),w&&(document.documentElement.scrollLeft=e))}function Q(O,k){var z=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===n(k)?z=k:"number"==typeof k&&(z.duration=k),!(element=C.$(O)))return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+O);if(e=C.$(z.container||D.container),t=z.hasOwnProperty("duration")?z.duration:D.duration,r=z.hasOwnProperty("lazy")?z.lazy:D.lazy,o=z.easing||D.easing,f=z.hasOwnProperty("offset")?z.offset:D.offset,c=z.hasOwnProperty("force")?!1!==z.force:D.force,l=z.hasOwnProperty("cancelable")?!1!==z.cancelable:D.cancelable,d=z.onStart||D.onStart,v=z.onDone||D.onDone,y=z.onCancel||D.onCancel,w=void 0===z.x?D.x:z.x,m=void 0===z.y?D.y:z.y,"function"==typeof f&&(f=f(element,e)),h=J(e),S=$(e),B(),V=!1,!c){var F="body"===e.tagName.toLowerCase()?document.documentElement.clientHeight||window.innerHeight:e.offsetHeight,H=S,I=H+F,K=L-f,Q=K+element.offsetHeight;if(K>=H&&Q<=I)return void(v&&v(element))}if(d&&d(element),A||P)return"string"==typeof o&&(o=E[o]||E.ease),j=T.apply(T,o),C.on(e,x,N,{passive:!0}),window.requestAnimationFrame(G),function(){M=null,V=!0};v&&v(element)}return Q},z=k(),M=[];function j(n){for(var i=0;i<M.length;++i)if(M[i].el===n)return M.splice(i,1),!0;return!1}function F(n){for(var i=0;i<M.length;++i)if(M[i].el===n)return M[i]}function H(n){var e=F(n);return e||(M.push(e={el:n,binding:{}}),e)}function N(n){var e=H(this).binding;if(e.value){if(n.preventDefault(),"string"==typeof e.value)return z(e.value);z(e.value.el||e.value.element,e.value)}}var $={bind:function(n,e){H(n).binding=e,C.on(n,"click",N)},unbind:function(n){j(n),C.off(n,"click",N)},update:function(n,e){H(n).binding=e}},J={bind:$.bind,unbind:$.unbind,update:$.update,beforeMount:$.bind,unmounted:$.unbind,updated:$.update,scrollTo:z,bindings:M},B=function(n,e){e&&V(e),n.directive("scroll-to",J),(n.config.globalProperties||n.prototype).$scrollTo=J.scrollTo};return"undefined"!=typeof window&&window.Vue&&(window.VueScrollTo=J,window.VueScrollTo.setDefaults=V,window.VueScrollTo.scroller=k,window.Vue.use&&window.Vue.use(B)),J.install=B,J}()}}]);