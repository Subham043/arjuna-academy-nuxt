(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{111:function(o,n,e){"use strict";var t=function(o,n=!0){const e=n&&o.headers?o.headers["x-forwarded-proto"]:void 0,t="string"==typeof e?e.includes("https"):void 0;if(t)return!0;const d=o.connection?o.connection.encrypted:void 0,r=void 0!==d?!0===d:void 0;return!!r||void 0===t&&void 0===r&&void 0};const d="undefined"!=typeof location?location:{origin:"",pathname:"/"};o.exports=function(o,n){return o?encodeURI("http"+(t(o)?"s":"")+"://"+(o.headers["x-forwarded-host"]||o.headers.host)+(n?o.url:"")):d.origin+(n?d.pathname:"")}}}]);