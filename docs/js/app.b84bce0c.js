(function(){"use strict";var t={4768:function(t,n,o){var e=o(7764),r=o(4108);function l(t,n,o,e,l,u){const c=(0,r.E1)("HelloWorld");return(0,r.Wz)(),(0,r.Az)(c,{msg:"Welcome to Your Vue.js App"})}var u=o(9096);const c=t=>((0,r.ED)("data-v-82fee326"),t=t(),(0,r.ii)(),t),i={class:"hello"},a=c((()=>(0,r.QD)("h1",null,"OBS Helper (Draft)",-1))),s=c((()=>(0,r.QD)("h2",null,"Links(Vook)",-1))),p=c((()=>(0,r.QD)("ul",null,[(0,r.QD)("li",null,[(0,r.QD)("a",{href:"https://vook.vc/n/5455",target:"_blank",rel:"noopener"},"Setting")]),(0,r.QD)("li",null,[(0,r.QD)("a",{href:"https://vook.vc/n/5462",target:"_blank",rel:"noopener"},"Comment")])],-1))),f=c((()=>(0,r.QD)("h2",null,"chat URL",-1))),v=c((()=>(0,r.QD)("p",null," 配信URL ",-1))),h=c((()=>(0,r.QD)("p",null," チャットURL ",-1))),d={class:"output"},b={class:"output__text"};function y(t,n,o,l,c,y){return(0,r.Wz)(),(0,r.An)("div",i,[a,s,p,f,v,(0,r.wt)((0,r.QD)("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>c.liveUrl=t)},null,512),[[e.Og,c.liveUrl]]),h,(0,r.wt)((0,r.QD)("div",d,[(0,r.QD)("p",b,(0,u.WA)(y.chat),1),(0,r.QD)("span",{class:"output__copy",onClick:n[1]||(n[1]=(...t)=>y.copyTextToClipboard&&y.copyTextToClipboard(...t))})],512),[[e.Ub,y.chat]])])}var g={name:"HelloWorld",data(){return{liveUrl:""}},computed:{chat(){console.log(this.liveUrl);const t=/https:\/\/youtube\.com\/live\/(\w+)\?feature=share/,n=t.exec(this.liveUrl);return n?`https://studio.youtube.com/live_chat?is_popout=1&v=${n[1]}`:""}},methods:{copyTextToClipboard(){navigator.clipboard.writeText(this.chat).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(t){console.error("Async: Could not copy text: ",t)}))}}},m=o(4100);const D=(0,m.c)(g,[["render",y],["__scopeId","data-v-82fee326"]]);var Q=D,_={name:"App",components:{HelloWorld:Q}};const w=(0,m.c)(_,[["render",l]]);var O=w;(0,e.W0)(O).mount("#app")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e].call(l.exports,l,l.exports,o),l.exports}o.m=t,function(){var t=[];o.O=function(n,e,r,l){if(!e){var u=1/0;for(s=0;s<t.length;s++){e=t[s][0],r=t[s][1],l=t[s][2];for(var c=!0,i=0;i<e.length;i++)(!1&l||u>=l)&&Object.keys(o.O).every((function(t){return o.O[t](e[i])}))?e.splice(i--,1):(c=!1,l<u&&(u=l));if(c){t.splice(s--,1);var a=r();void 0!==a&&(n=a)}}return n}l=l||0;for(var s=t.length;s>0&&t[s-1][2]>l;s--)t[s]=t[s-1];t[s]=[e,r,l]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var r,l,u=e[0],c=e[1],i=e[2],a=0;if(u.some((function(n){return 0!==t[n]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(i)var s=i(o)}for(n&&n(e);a<u.length;a++)l=u[a],o.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return o.O(s)},e=self["webpackChunkobs_helper"]=self["webpackChunkobs_helper"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[999],(function(){return o(4768)}));e=o.O(e)})();
//# sourceMappingURL=app.b84bce0c.js.map