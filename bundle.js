!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([r]).join("\n")}var a,c,u;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);o&&r[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),n.push(u))}},n}},function(t,n,e){"use strict";e.r(n);e(2);const o=document.createElement("div");o.classList.add("carousel-container");const r=["dblPrev","prev","view","next","dblNext"],i=Array(5).fill(null).map((function(){const t=document.createElement("div");return t.classList.add("carousel-window"),t})),a=document.createElement("div");a.classList.add("advance-button"),a.classList.add("nav-button"),a.addEventListener("click",()=>{u=m(u+1,s.length),i.map(g),f()});const c=document.createElement("div");c.classList.add("regress-button"),c.classList.add("nav-button"),c.addEventListener("click",()=>{u=m(u-1,s.length),i.map(b),f()});let u=2;const s=[];var l;(l=e(5)).keys().forEach(t=>s.push("url(."+l(t).default.match(/(?<=^\/dist).+/)[0]+")"));const d=document.createElement("div");d.classList.add("quick-nav-container");for(let t=0;t<s.length;t++){const n=document.createElement("div");n.classList.add("quick-nav-button"),n.addEventListener("click",()=>{p(t),f()}),d.appendChild(n)}function f(){const t=m(u-2,s.length);Array.from(d.getElementsByClassName("quick-nav-button")).map((n,e)=>{e===t?n.setAttribute("highlighted",!0):n.setAttribute("highlighted",!1)})}function p(t){u=t+2,Array.from(o.getElementsByClassName("carousel-window")).map(n=>{const e=r.indexOf(n.getAttribute("carousel-position")),o=m(t+e,s.length);n.style.backgroundImage=s[o]})}function b(t){let n=r.indexOf(t.getAttribute("carousel-position"))+1;n>4&&(n=0,v(t,"advancing")),t.setAttribute("carousel-position",r[n])}function g(t){let n=r.indexOf(t.getAttribute("carousel-position"))-1;n<0&&(n=4,v(t,"regressing")),t.setAttribute("carousel-position",r[n])}function v(t,n){const e=m("advancing"===n?u-2:u+2,s.length);t.style.backgroundImage=s[e]}function m(t,n){return(t%n+n)%n}o.appendChild(d),f(),i.map((t,n)=>{o.appendChild(t),t.setAttribute("carousel-position",r[n]),t.style.backgroundImage=s[n]}),document.body.appendChild(o),o.appendChild(c),o.appendChild(a)},function(t,n,e){var o=e(3),r=e(4);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);t.exports=r.locals||{}},function(t,n,e){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function c(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function u(t,n){for(var e={},o=[],r=0;r<t.length;r++){var i=t[r],u=n.base?i[0]+n.base:i[0],s=e[u]||0,l="".concat(u," ").concat(s);e[u]=s+1;var d=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:v(f,n),references:1}),o.push(l)}return o}function s(t){var n=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=e.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){n.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(n);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function f(t,n,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=d(n,r);else{var i=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function p(t,n,e){var o=e.css,r=e.media,i=e.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var b=null,g=0;function v(t,n){var e,o,r;if(n.singleton){var i=g++;e=b||(b=s(n)),o=f.bind(null,e,i,!1),r=f.bind(null,e,i,!0)}else e=s(n),o=p.bind(null,e,n),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var e=u(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<e.length;o++){var r=c(e[o]);a[r].references--}for(var i=u(t,n),s=0;s<e.length;s++){var l=c(e[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=i}}}},function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o)()(!1);r.push([t.i,'.carousel-container {\n\tposition: absolute;\n\ttop: 10vh;\n\twidth: 90vw;\n\theight: 18vw;\n}\n\n.quick-nav-container{\n\tposition: absolute;\n\theight: 10%;\n\twidth: 30%;\n\ttop: 75%;\n\tleft: 34%;\n\topacity: 0.7;\n\tz-index: 1;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.quick-nav-button{\n\twidth: 4%;\n\tpadding-top: 4%;\n\tborder-radius: 50%;\n\tmargin: 2%;\n\tbackground-color: #000;\n\tz-index: 1;\n}\n\n.quick-nav-button[highlighted=true]{\n\tbackground-color: #777;\n}\n\n.nav-button {\n\tposition: absolute;\n\tbackground: linear-gradient(\n\t\t45deg,\n\t\trgba(0, 0, 0, 0),\n\t\trgba(0, 0, 0, 0) 45%,\n\t\trgba(0, 0, 0, 0.6) 45%,\n\t\trgba(0, 0, 0, 0.6)\n\t);\n\tz-index: 1;\n\theight: 20%;\n\twidth: 4%;\n\ttop: 30%;\n\tborder-radius: 3px;\n}\n\n.advance-button {\n\tleft: 66%;\n\ttransform: rotate(45deg);\n}\n\n.regress-button {\n\tleft: 28%;\n\ttransform: rotate(225deg);\n}\n\n.carousel-window {\n\tposition: absolute;\n\twidth: 17%;\n\theight: 85%;\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\ttransition: all 0.5s ease-out;\n\tbackground-position: center;\n\tz-index: 0;\n}\n\n.carousel-window[carousel-position="dblPrev"] {\n\tleft: 0;\n\topacity: 0;\n}\n\n.carousel-window[carousel-position="prev"] {\n\tleft: 20%;\n\topacity: 0.1;\n}\n\n.carousel-window[carousel-position="view"] {\n\tleft: 40%;\n}\n\n.carousel-window[carousel-position="next"] {\n\tleft: 60%;\n\topacity: 0.1;\n}\n\n.carousel-window[carousel-position="dblNext"] {\n\tleft: 80%;\n\topacity: 0;\n}\n',""]),n.default=r},function(t,n,e){var o={"./animals_wikimedia_cc-900x580.jpg":6,"./cute-baby-animals-10.jpg":7,"./cute-baby-animals-2.jpg":8,"./lionel-animals-to-follow-on-instagram-1568319926.jpg":9,"./maxresdefault (1).jpg":10,"./maxresdefault (2).jpg":11,"./maxresdefault.jpg":12};function r(t){var n=i(t);return e(n)}function i(t){if(!e.o(o,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=5},function(t,n,e){"use strict";e.r(n),n.default=e.p+"ae65e81f0050e52331afd3de31e9e47f.jpg"},function(t,n,e){"use strict";e.r(n),n.default=e.p+"c03102eae8483a1bee4c3b2c9839c7f6.jpg"},function(t,n,e){"use strict";e.r(n),n.default=e.p+"bd27face96e9feaa4ef1360298c3f14e.jpg"},function(t,n,e){"use strict";e.r(n),n.default=e.p+"8aff6f955b0d68c0bb2810ca6215a162.jpg"},function(t,n,e){"use strict";e.r(n),n.default=e.p+"8b141ae53445d65b9828c627cece29e6.jpg"},function(t,n,e){"use strict";e.r(n),n.default=e.p+"eb067ff3c9e0b63c9bbe2b08f5c5de92.jpg"},function(t,n,e){"use strict";e.r(n),n.default=e.p+"29c00375b7364cc0deba2115fd340958.jpg"}]);