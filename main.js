(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),c=t.n(i)()(o());c.push([e.id,"body {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n}\n\n#content {\n    /* background: url('./sushi.jpg'); */\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: auto;\n}\n.title {\n    align-self: stretch;\n    font-family: Arial, Helvetica, sans-serif;\n    color: azure;\n    font-size: 100px;\n    height: 200px;\n    background-color: grey;\n    opacity: 0.9;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.buttoncontainer {\n    align-self: stretch;\n    background-color: gray;\n    opacity: 0.9;\n    display: flex;\n    justify-content: center;\n    gap: 40px;\n    margin-bottom: 30px;\n}\n\n.buttoncontainer > button {\n    font-size: 30px;\n    color: blue;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.homecontainer,\n.menucontainer {\n    background-color: gray;\n    opacity: 0.9;\n    min-height: 800px;\n    min-width: 800px;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    \n}\n\n.homecontainer > div {\n    height: 200px;\n    width: 500px;\n    border: 3px solid black;\n    border-radius: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n    font-size: 25px;\n}\n\n.hours,\n.location {\n    display: flex;\n    flex-direction: column;\n}\n\n.container1,\n.street {\n    flex: 1 1 auto;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.menucontainer {\n\n}",""]);const a=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},c=[],a=0;a<e.length;a++){var s=e[a],u=r.base?s[0]+r.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=t(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=a,n.splice(a,0,{identifier:d,updater:f,references:1})}c.push(d)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=t(i[c]);n[a].references--}for(var s=r(e,o),u=0;u<i.length;u++){var l=t(i[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),c=t.n(i),a=t(565),s=t.n(a),u=t(216),l=t.n(u),d=t(589),p=t.n(d),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"d7b175e0149700ad0bd5.jpg";function y(e,n){const t=document.createElement("div");t.classList.add(e),n.appendChild(t)}function g(){y("homecontainer",document.getElementById("content"));const e=document.querySelector(".homecontainer");y("introduction",e),y("hours",e),y("location",e),document.querySelector(".introduction").innerHTML="Our goal is to make you feel like eating like you are in Japan. Enjoy the best sushi in town. We provide a huge selection of sushi, sashimi, hand-make rolls and our house specialty rolls. Come for the food. Stay for the experience!";const n=document.querySelector(".hours");y("hourstitle",n),document.querySelector(".hourstitle").innerHTML="Hours",y("container1",n);const t=document.querySelector(".container1");y("montofri",t),document.querySelector(".montofri").innerHTML="Monday to Friday: 9am - 9pm",y("sattosun",t),document.querySelector(".sattosun").innerHTML="Saturday to Sunday: 10am - 11pm";const r=document.querySelector(".location");y("locationtitle",r),document.querySelector(".locationtitle").innerHTML="Location",y("street",r),document.querySelector(".street").innerHTML="123 Forest Drive, Forestville, Maine"}function v(){const e=document.getElementById("content");e.style.backgroundImage=`url(${h})`;const n=document.createElement("div");n.classList.add("title"),n.innerHTML="Let's Sushi",e.appendChild(n);const t=document.createElement("div");function r(e){const n=document.createElement("button");n.innerHTML=e,n.classList.add(e),t.appendChild(n)}t.classList.add("buttoncontainer"),r("home"),r("menu"),r("contact"),e.appendChild(t)}v(),g(),document.querySelectorAll(".buttoncontainer > button").forEach((e=>{e.addEventListener("click",(e=>{document.getElementById("content").replaceChildren(),v(),"home"===e.target.innerHTML&&g(),"menu"===e.target.innerHTML&&function(){y("menucontainer",document.getElementById("content"));const e=document.querySelector(".menucontainer");function n(e,n){const t=e.split(" ").join("").toLowerCase();y(`${t}container`,n);const r=document.querySelector(`.${t}container`);y(t,r),document.querySelector(`.${t}`).innerHTML=e,y(`${t}price`,r),document.querySelector(`.${t}price`).innerHTML=function(e){switch(e.trim().toLowerCase()){case"edamame":case"squid":case"yellowtail":case"unagi":return"$3";case"chickenwing":return"$6";case"misosoup":case"redtuna":return"$1";case"salmon":case"greenteaicecream":case"strawberryicecream":return"$2";case"dragonroll":case"spiderroll":case"dynamiteroll":return"$8";default:return"not found"}}(t)}function t(e,t){const r=document.querySelector(`.${e}`);y(`${e}title`,r),document.querySelector(`.${e}title`).innerHTML=e.toUpperCase(),y(`${e}items`,r);const o=document.querySelector(`.${e}items`);for(let e of t)n(e,o)}y("appetizer",e),y("sashimi",e),y("sushi",e),y("specialtyroll",e),y("dessert",e),t("appetizer",["Edamame","Chicken Wing","Miso Soup"]),t("sashimi",["Salmon","Red Tuna"]),t("sushi",["Squid","Yellowtail","Unagi"]),t("specialtyroll",["Dragon Roll","Spider Roll","Dynamite Roll"]),t("dessert",["Green Tea Icecream","Strawberry Icecream"])}()}))}))})()})();