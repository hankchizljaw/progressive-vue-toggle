(function(t){function e(e){for(var r,l,i=e[0],u=e[1],s=e[2],d=0,f=[];d<i.length;d++)l=i[d],o[l]&&f.push(o[l][0]),o[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},o={app:0},a=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("ba4c"),o=n.n(r),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",{staticClass:"trigger"},[n("button",{attrs:{"aria-expanded":"open"===t.toggleStatus?"true":"false"},on:{click:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("trigger")],2),n("svg",{attrs:{viewBox:"0 0 512 512","aria-hidden":"true"}},[n("path",{attrs:{d:"M60 99.333l196 196 196-196 60 60-256 256-256-256z"}})])]),n("div",{staticClass:"panel",class:{open:"open"===t.toggleStatus}},[t._t("panel")],2)])},l=[],i=(n("ac6a"),{data:function(){return{toggleStatus:"collapsed"}},methods:{toggle:function(){this.toggleStatus="collapsed"===this.toggleStatus?"open":"collapsed",this.handleFocusability()},handleFocusability:function(){var t=this;this.$slots.panel.forEach(function(e){e.elm.querySelectorAll("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").forEach(function(e){var n="collapsed"===t.toggleStatus?"-1":"0";e.setAttribute("tab-index",n)})})}},mounted:function(){this.handleFocusability()}}),u=i,s=n("2877"),c=Object(s["a"])(u,a,l,!1,null,null,null),d=c.exports;o.a.config.productionTip=!1,new o.a({components:{TogglePanel:d},data:function(){return{}}}).$mount("main")}});
//# sourceMappingURL=app.c499a3f6.js.map