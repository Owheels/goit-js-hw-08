!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}}));var o,u=i("l5bVx"),a="Expected a function",f=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,m=v||p||Function("return this")(),b=Object.prototype.toString,g=Math.max,y=Math.min,x=function(){return m.Date.now()};function O(e,t,n){var r,i,o,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(a);function p(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function m(e){return c=e,f=setTimeout(O,t),s?p(e):u}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function O(){var e=x();if(b(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?y(n,o-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?p(e):(r=i=void 0,u)}function T(){var e=x(),n=b(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return m(l);if(d)return f=setTimeout(O,t),p(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=w(t)||0,j(n)&&(s=!!n.leading,o=(d="maxWait"in n)?g(w(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:h(x())},T}function j(t){var n=void 0===t?"undefined":e(u)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(u)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==b.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var r=c.test(t);return r||s.test(t)?d(t.slice(2),r?2:8):l.test(t)?NaN:+t}o=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(a);return j(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),O(e,t,{leading:r,maxWait:t,trailing:i})};var h,T=document.querySelector(".feedback-form"),S=T.elements.email,N=T.elements.message;T.addEventListener("input",e(o)((function(e){localStorage.setItem("feedback-form-state",JSON.stringify({email:S.value,message:N.value}))}),500));var E=localStorage.getItem("feedback-form-state");E?(h=JSON.parse(E),S.value=h.email,N.value=h.message):(S.value="",N.value=""),T.addEventListener("submit",(function(e){T.reset(),e.preventDefault(),console.log(h),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.c2580e22.js.map
