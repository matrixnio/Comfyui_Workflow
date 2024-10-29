!function(){"use strict";var t={91:function(t,e,n){var o=n(81),r=n.n(o),i=n(645),c=n.n(i)()(r());c.push([t.id,".icon-container{-moz-column-gap:1px;column-gap:1px;display:flex;position:absolute;z-index:1000}.icon-container--top-right{right:1px;top:1px}.icon-container--top-left{left:1px;top:1px}.icon-container--bottom-right{bottom:1px;right:1px}.icon-container--bottom-left{bottom:1px;left:1px}.icon-container--hidden{display:none}.icon{background-color:transparent;background-repeat:no-repeat,no-repeat;border:0;cursor:pointer;height:15px;padding:0;width:15px}.icon:active,.icon:focus,.icon:hover{background-position-y:-15px,0}.icon--Info{background-image:url(https://cr.adsappier.com/4QGDNtuHG/icon/Info.svg),url(https://cr.adsappier.com/4QGDNtuHG/icon/Info_hover_focus.svg)}.feedback-page-iframe{border:0;bottom:0;height:100%;left:0;position:fixed;right:0;top:0;width:100%;z-index:1001}",""]),e.Z=c},645:function(t){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);o&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},81:function(t){t.exports=function(t){return t[1]}},379:function(t){var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},c=[],a=0;a<t.length;a++){var s=t[a],d=o.base?s[0]+o.base:s[0],u=i[d]||0,p="".concat(d," ").concat(u);i[d]=u+1;var f=n(p),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(l);else{var m=r(l,o);o.byIndex=a,e.splice(a,0,{identifier:p,updater:m,references:1})}c.push(p)}return c}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var a=n(i[c]);e[a].references--}for(var s=o(t,r),d=0;d<i.length;d++){var u=n(i[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},569:function(t){var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:function(t){t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.nc=void 0,function(){var t,e,o,r,i=n(379),c=n.n(i),a=n(795),s=n.n(a),d=n(569),u=n.n(d),p=n(565),f=n.n(p),l=n(216),m=n.n(l),v=n(589),h=n.n(v),g=n(91),b={};b.styleTagTransform=h(),b.setAttributes=f(),b.insert=u().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=m(),c()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals,function(t){t.TopLeft="top-left",t.TopRight="top-right",t.BottomLeft="bottom-left",t.BottomRight="bottom-right",t.Hidden="hidden"}(r||(r={}));const y=null===(t=document.currentScript)||void 0===t?void 0:t.dataset.position,x=function(t){return[r.TopLeft,r.TopRight,r.BottomLeft,r.BottomRight,r.Hidden].includes(t)}(y)?y:r.BottomRight,w=(null===(e=document.currentScript)||void 0===e?void 0:e.dataset.bidobjid)??"",T="staging"===(null===(o=document.currentScript)||void 0===o?void 0:o.dataset.env),k=T?"td-pixel-stg.c.appier.net":"td-pixel.c.appier.net",L="https://cr.adsappier.com",E=T?"/feedback/staging/index.html":"/feedback/index.html",S=document.createElement("div");S.classList.add("icon-container",`icon-container--${x}`),S.id="question_mark";const C=document.createElement("iframe");C.classList.add("feedback-page-iframe"),C.src=`${L}${E}?bidobjid=${w}`;const I="Info",$=document.createElement("button");function j(t){t.origin===L&&"AppierCloseIframe"===t.data&&(window.removeEventListener("message",j),C.remove())}$.type="button",$.classList.add("icon","icon--Info"),$.id=I.toLowerCase(),$.dataset.ignoreEventHandler="",$.addEventListener("click",(()=>{!function(t){const e={bidobjid:w,click:t};fetch(`https://${k}/creative-feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),keepalive:!0})}(I),document.contains(C)||function(){const t=document.querySelector("[data-creative-container]");if(t){const e=t.getBoundingClientRect();C.style.left=`${e.x}px`,C.style.top=`${e.y}px`,C.style.width=`${e.width}px`,C.style.height=`${e.height}px`}document.body.append(C),window.addEventListener("message",j)}()})),S.append($),document.body.append(S)}()}();