!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.mailgo=a():e.mailgo=a()}(window,(function(){return function(e){var a={};function t(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,o){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(o,n,function(a){return e[a]}.bind(null,n));return o},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){"use strict";var o=document.createElement("style");o.id="mailgo-style",o.type="text/css";var n=document.createTextNode('.mailgo-modal{position:fixed;top:0;right:0;bottom:0;left:0;justify-content:center;align-items:center;flex-direction:column;overflow:hidden;font-size:15px;z-index:10000}.mailgo-modal a,.mailgo-modal p,.mailgo-modal span,.mailgo-modal strong{margin:0;padding:0;font-size:100%;line-height:1;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.mailgo-modal strong{font-weight:700}.mailgo-modal .mailgo-modal-background{position:absolute;z-index:10001;top:0;right:0;bottom:0;left:0;background-color:rgba(32,35,42,.75);opacity:.8}.mailgo-modal .mailgo-modal-content{position:relative;z-index:10002;box-sizing:content-box;text-align:center;min-width:200px;max-width:240px;background-color:#fff;opacity:.97;border-radius:5px;box-shadow:0 3px 8px 0 rgba(32,35,42,.12);color:#4a4a4a;display:block;overflow:auto;padding:20px}.mailgo-modal .mailgo-modal-content:hover{opacity:1;box-shadow:0 18px 30px 0 rgba(32,35,42,.23)}.mailgo-modal .mailgo-modal-content .mailgo-title{display:block;margin-bottom:5px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.mailgo-modal .mailgo-modal-content .mailgo-details{margin-bottom:10px}.mailgo-modal .mailgo-modal-content .mailgo-details p{font-size:12px;margin-top:3px;margin-bottom:3px}.mailgo-modal .mailgo-modal-content a{display:block;padding:10px;color:#4a4a4a;border-radius:5px;text-decoration:none}.mailgo-modal .mailgo-modal-content a.mailgo-gmail{color:#d44638}.mailgo-modal .mailgo-modal-content a.mailgo-outlook{color:#0072c6}.mailgo-modal .mailgo-modal-content a.mailgo-copy{padding:16px 10px;font-size:16px}.mailgo-modal .mailgo-modal-content a.mailgo-copy:hover,.mailgo-modal .mailgo-modal-content a.mailgo-default:hover{background-color:rgba(0,0,0,.08);color:#4a4a4a}.mailgo-modal .mailgo-modal-content a.mailgo-outlook:hover{background-color:rgba(0,114,198,.08);color:#0072c6}.mailgo-modal .mailgo-modal-content a.mailgo-gmail:hover{background-color:rgba(212,70,56,.08);color:#d44638}.mailgo-modal .mailgo-modal-content a.mailgo-by{display:block;font-size:8px;margin-top:1rem;padding:0;color:#4a4a4a;opacity:.5}.mailgo-modal .mailgo-modal-content a.mailgo-by:hover{opacity:1}.mailgo-modal .mailgo-modal-content .mailgo-weight-500{font-weight:500}');o.appendChild(n),document.head.appendChild(o);var l={openGmail:function(e,a,t,o,n){var l="https://mail.google.com/mail/u/0/?view=cm&source=mailto&to="+encodeURIComponent(e);a&&(l=l.concat("&cc="+encodeURIComponent(a))),t&&(l=l.concat("&bcc="+encodeURIComponent(t))),o&&(l=l.concat("&subject="+o)),n&&(l=l.concat("&body="+n)),window.open(l,"_blank")},openOutlook:function(e,a,t){var o="https://outlook.live.com/owa/?path=/mail/action/compose&to="+encodeURIComponent(e);a&&(o=o.concat("&subject="+a)),t&&(o=o.concat("&body="+t)),window.open(o,"_blank")},openDefault:function(e){p(e)},openWhatsApp:function(e,a){var t="https://wa.me/"+e;window.open(t,"_blank")},openTelegram:function(e,a){var t="tg://msg?text="+(1<arguments.length&&void 0!==a?a:"")+"&to="+e;window.open(t,"_blank")},copy:function(e,a){v(e),a.textContent="copied",setTimeout((function(){return a.textContent="copy"}),999)}},i=function(e,a,t,o,n,i,d){if(r())switch(event.keyCode){case 27:m();break;case 71:l.openGmail(e,a,t,o,n);break;case 79:l.openOutlook(e,o,n);break;case 32:case 13:l.openDefault(i);break;case 67:l.copy(e,d);break;default:return}};document.addEventListener("DOMContentLoaded",(function(){var e=document.createElement("div");e.style.display="none",e.id="mailgo",e.classList.add("mailgo-modal");var a=document.createElement("div");a.className="mailgo-modal-background",e.appendChild(a);var t=document.createElement("div");t.className="mailgo-modal-content",e.appendChild(t);var o=document.createElement("strong");o.id="mailgo-title",o.className="mailgo-title",t.appendChild(o);var n=document.createElement("div");n.id="mailgo-details",n.className="mailgo-details";var l=document.createElement("p");l.id="mailgo-cc";var i=document.createElement("span");i.className="mailgo-weight-500";var d=document.createTextNode("cc ");i.appendChild(d);var c=document.createElement("span");c.id="mailgo-cc-value",l.appendChild(i),l.appendChild(c),n.appendChild(l);var r=document.createElement("p");r.id="mailgo-bcc";var p=document.createElement("span");p.className="mailgo-weight-500";var s=document.createTextNode("bcc ");p.appendChild(s);var g=document.createElement("span");g.id="mailgo-bcc-value",r.appendChild(p),r.appendChild(g),n.appendChild(r);var u=document.createElement("p");u.id="mailgo-subject";var h=document.createElement("span");h.className="mailgo-weight-500";var v=document.createTextNode("subject ");h.appendChild(v);var f=document.createElement("span");f.id="mailgo-subject-value",u.appendChild(h),u.appendChild(f),n.appendChild(u);var b=document.createElement("p");b.id="mailgo-body";var y=document.createElement("span");y.className="mailgo-weight-500";var C=document.createTextNode("body ");y.appendChild(C);var x=document.createElement("span");x.id="mailgo-body-value",b.appendChild(y),b.appendChild(x),n.appendChild(b),t.appendChild(n);var E=document.createElement("a");E.id="mailgo-gmail",E.href="#mailgo-gmail",E.classList.add("mailgo-open"),E.classList.add("mailgo-gmail");var w=document.createTextNode("open in ");E.appendChild(w);var N=document.createElement("span");N.className="mailgo-weight-500";var k=document.createTextNode("Gmail");N.appendChild(k),E.appendChild(N),t.appendChild(E);var L=document.createElement("a");L.id="mailgo-outlook",L.href="#mailgo-outlook",L.classList.add("mailgo-open"),L.classList.add("mailgo-outlook");var T=document.createTextNode("open in ");L.appendChild(T);var j=document.createElement("span");j.className="mailgo-weight-500";var A=document.createTextNode("Outlook");j.appendChild(A),L.appendChild(j),t.appendChild(L);var S=document.createElement("a");S.id="mailgo-open",S.href="#mailgo-open",S.classList.add("mailgo-open"),S.classList.add("mailgo-default");var O=document.createElement("span");O.className="mailgo-weight-500";var R=document.createTextNode("open");O.appendChild(R);var U=document.createTextNode(" default");S.appendChild(O),S.appendChild(U),t.appendChild(S);var _=document.createElement("a");_.id="mailgo-copy",_.href="#mailgo-copy",_.classList.add("mailgo-copy"),_.classList.add("mailgo-weight-500");var z=document.createTextNode("copy");_.appendChild(z),t.appendChild(_);var M=document.createElement("a");M.href="https://mailgo.js.org?ref=mailgo-modal",M.className="mailgo-by",M.target="_blank",M.rel="noopener noreferrer";var I=document.createTextNode("mailgo.js.org");M.appendChild(I),t.appendChild(M),document.body.appendChild(e),a.addEventListener("click",m)})),document.addEventListener("DOMContentLoaded",(function(){var e=document.createElement("div");e.style.display="none",e.id="mailgo-tel",e.classList.add("mailgo-modal");var a=document.createElement("div");a.className="mailgo-modal-background",e.appendChild(a);var t=document.createElement("div");t.className="mailgo-modal-content",e.appendChild(t);var o=document.createElement("strong");o.id="mailgo-title",o.className="mailgo-title",t.appendChild(o);var n=document.createElement("div");n.id="mailgo-details",n.className="mailgo-details";var l=document.createElement("p");l.id="mailgo-cc";var i=document.createElement("span");i.className="mailgo-weight-500";var d=document.createTextNode("cc ");i.appendChild(d);var c=document.createElement("span");c.id="mailgo-cc-value",l.appendChild(i),l.appendChild(c),n.appendChild(l);var r=document.createElement("p");r.id="mailgo-bcc";var p=document.createElement("span");p.className="mailgo-weight-500";var s=document.createTextNode("bcc ");p.appendChild(s);var g=document.createElement("span");g.id="mailgo-bcc-value",r.appendChild(p),r.appendChild(g),n.appendChild(r);var u=document.createElement("p");u.id="mailgo-subject";var h=document.createElement("span");h.className="mailgo-weight-500";var v=document.createTextNode("subject ");h.appendChild(v);var f=document.createElement("span");f.id="mailgo-subject-value",u.appendChild(h),u.appendChild(f),n.appendChild(u);var b=document.createElement("p");b.id="mailgo-body";var y=document.createElement("span");y.className="mailgo-weight-500";var C=document.createTextNode("body ");y.appendChild(C);var x=document.createElement("span");x.id="mailgo-body-value",b.appendChild(y),b.appendChild(x),n.appendChild(b),t.appendChild(n);var E=document.createElement("a");E.id="mailgo-wa",E.href="#mailgo-wa",E.classList.add("mailgo-open"),E.classList.add("mailgo-wa");var w=document.createTextNode("open in ");E.appendChild(w);var N=document.createElement("span");N.className="mailgo-weight-500";var k=document.createTextNode("WhatsApp");N.appendChild(k),E.appendChild(N),t.appendChild(E);var L=document.createElement("a");L.id="mailgo-telegram",L.href="#mailgo-telegram",L.classList.add("mailgo-open"),L.classList.add("mailgo-telegram");var T=document.createTextNode("open in ");L.appendChild(T);var j=document.createElement("span");j.className="mailgo-weight-500";var A=document.createTextNode("Telegram");j.appendChild(A),L.appendChild(j),t.appendChild(L);var S=document.createElement("a");S.id="mailgo-open",S.href="#mailgo-open",S.classList.add("mailgo-open"),S.classList.add("mailgo-default");var O=document.createElement("span");O.className="mailgo-weight-500";var R=document.createTextNode("call");O.appendChild(R);var U=document.createTextNode(" default");S.appendChild(O),S.appendChild(U),t.appendChild(S);var _=document.createElement("a");_.id="mailgo-copy",_.href="#mailgo-copy",_.classList.add("mailgo-copy"),_.classList.add("mailgo-weight-500");var z=document.createTextNode("copy");_.appendChild(z),t.appendChild(_);var M=document.createElement("a");M.href="https://mailgo.js.org?ref=mailgo-modal",M.className="mailgo-by",M.target="_blank",M.rel="noopener noreferrer";var I=document.createTextNode("mailgo.js.org");M.appendChild(I),t.appendChild(M),document.body.appendChild(e),a.addEventListener("click",m)})),document.addEventListener("click",(function(e){if(document.contains(g("mailgo"))){var a=e.path||e.composedPath&&e.composedPath()||u(e.target);a&&a.forEach((function(a){if(function(e){return e.href&&e.href.toLowerCase().startsWith("mailto:")&&!e.classList.contains("no-mailgo")||e.href&&"#mailgo"===e.getAttribute("href").toLowerCase()||e.classList&&e.classList.contains("mailgo")}(a))return e.preventDefault(),void function(e){var a="",t="",o="",n="",d="",m="";if(e.href&&e.href.toLowerCase().startsWith("mailto:")){t=decodeURIComponent(e.href.split("?")[0].split("mailto:")[1].trim()),a=new URL(e.href);var r=new URLSearchParams(a.search);o=r.get("cc"),n=r.get("bcc"),d=r.get("subject"),m=r.get("body")}else t=e.getAttribute("data-address")+"@"+e.getAttribute("data-domain"),a=new URL("mailto:"+encodeURIComponent(t)),o=e.getAttribute("data-cc-address")+"@"+e.getAttribute("data-cc-domain"),n=e.getAttribute("data-bcc-address")+"@"+e.getAttribute("data-bcc-domain"),d=e.getAttribute("data-subject"),m=e.getAttribute("data-body");if(h(t.split(","))){o&&!h(o.split(","))&&(o=""),n&&!h(n.split(","))&&(n="");var p=g("mailgo-title"),u=(g("mailgo-details"),g("mailgo-cc")),v=g("mailgo-cc-value"),f=g("mailgo-bcc"),b=g("mailgo-bcc-value"),y=g("mailgo-subject"),C=g("mailgo-subject-value"),x=g("mailgo-body"),E=g("mailgo-body-value"),w=g("mailgo-gmail"),N=g("mailgo-outlook"),k=g("mailgo-open"),L=g("mailgo-copy");p.innerHTML=t.split(",").join("<br/>"),o?(u.style.display="block",v.innerHTML=o.split(",").join("<br/>")):u.style.display="none",n?(f.style.display="block",b.innerHTML=n.split(",").join("<br/>")):f.style.display="none",d?(y.style.display="block",C.textContent=d):y.style.display="none",m?(x.style.display="block",E.textContent=m):x.style.display="none",w.addEventListener("click",(function(){return l.openGmail(t,o,n,d,m)})),N.addEventListener("click",(function(){return l.openOutlook(t,d,m)}));var T=s(t);k.addEventListener("click",(function(){return l.openDefault(T)})),L.addEventListener("click",(function(){return l.copy(t,L)})),c(),document.addEventListener("keydown",(function(){return i(t,o,n,d,m,T,L)}))}}(a)}))}}));var d=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},c=function(){return g("mailgo").style.display="flex"},m=function(){return g("mailgo").style.display="none"},r=function(){return"flex"===g("mailgo").style.display},p=function(e){return window.location.href="mailto:"+atob(e)},s=function(e){return btoa(e)},g=function(e){return document.getElementById(e)},u=function(e){for(var a=[];e;){if(a.push(e),"HTML"===e.tagName)return a.push(document),a.push(window),a;e=e.parentElement}},h=function(e){return e.every(d)},v=function(e){var a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a);var t=0<document.getSelection().rangeCount&&document.getSelection().getRangeAt(0);a.select(),document.execCommand("copy"),document.body.removeChild(a),t&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(t))}}])}));