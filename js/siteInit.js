import{$ as z,A as M,B as R,C as pe,D as N,E as K,F as ge,G as we,H as ve,I as ye,J as Ee,K as be,L as Le,M as Ce,N as Se,O as Te,P as xe,Q as ke,R as _e,S as He,T as Ae,U as Ie,V as qe,W as Oe,X as p,Y as E,Z as P,a as f,aa as Me,ba as Re,c as D,ca as Ne,da as Pe,e as x,ea as Be,f as le,fa as Q,h as I,i as de,j as u,k as Z,l as q,m as O,n as ue,o as me,p as V,q as U,r as he,s as L,t as w,u as j,v as C,w as J,x as m,y as fe,z as y}from"./chunk-7UMYINI5.js";import"./chunk-D4ZSMMI3.js";import"./chunk-IO5IHPYC.js";de();var k=(e,t)=>{m.hasClass("on")?(m.removeClass("on"),C.removeClass("close"),t?m.style="":p(m,"slideRightOut")):t?m.style="":p(m,"slideRightIn",()=>{m.addClass("on"),C.addClass("close")})},De=()=>{let e=m.querySelector(".inner");m.querySelector(".tab")&&e.removeChild(m.querySelector(".tab"));let t=document.createElement("ul"),o="active";t.className="tab",["contents","related","overview"].forEach(s=>{let n=m.querySelector(".panel."+s);if(n.innerHTML.trim().length<1){s==="contents"&&I(N,"none");return}s==="contents"&&I(N,"");let a=document.createElement("li"),c=document.createElement("span"),i=document.createTextNode(n.getAttribute("data-title"));c.appendChild(i),a.appendChild(c),a.addClass(s+" item"),o?(n.addClass(o),a.addClass(o)):n.removeClass("active"),a.addEventListener("click",r=>{let l=r.currentTarget;l.hasClass("active")||(m.find(".tab .item").forEach(d=>{d.removeClass("active")}),m.find(".panel").forEach(d=>{d.removeClass("active")}),m.querySelector(".panel."+l.className.replace(" item","")).addClass("active"),l.addClass("active"))}),t.appendChild(a),o=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),m.querySelector(".panels").style.paddingTop=""):m.querySelector(".panels").style.paddingTop=".625rem"},Ue=()=>{let e=i=>{let r=t[i];if(!r||r.hasClass("current"))return;f.each(".toc .active",d=>{d&&d.removeClass("active current")}),o.forEach(d=>{d&&d.removeClass("active")}),r.addClass("active current"),o[i]&&o[i].addClass("active");let l=r.parentNode;for(;!l.matches(".contents");){if(l.matches("li")){l.addClass("active");let d=document.getElementById(decodeURIComponent(l.querySelector("a.toc-link").getAttribute("href").replace("#","")));d&&d.addClass("active")}l=l.parentNode}getComputedStyle(m).display!=="none"&&n.hasClass("active")&&E(n,r.offsetTop-n.offsetHeight/4)},t=f.all(".contents li");if(t.length<1)return;let o=[...t],s=null;o=o.map((i,r)=>{let l=i.querySelector("a.toc-link"),d=l.getAttribute("href");if(!d)return null;let T=document.getElementById(decodeURI(d.replace("#","")));if(!T)return null;let H=T.querySelector("a.anchor"),B=A=>{A.preventDefault();let dt=document.getElementById(decodeURI(A.currentTarget.getAttribute("href").replace("#","")));s=r,E(dt,null,()=>{e(r),s=null})};return l.addEventListener("click",B),H&&H.addEventListener("click",A=>{B(A),Re(u.hostname+"/"+LOCAL.path+A.currentTarget.getAttribute("href"))}),T});let n=m.querySelector(".contents.panel"),a=i=>{let r=0,l=i[r];if(l.boundingClientRect.top>0)return r=o.indexOf(l.target),r===0?0:r-1;for(;r<i.length;r++)if(i[r].boundingClientRect.top<=0)l=i[r];else return o.indexOf(l.target);return o.indexOf(l.target)};(()=>{let i=new IntersectionObserver(r=>{let l=a(r)+(O<0?1:0);s===null&&e(l)},{rootMargin:"0px 0px -100% 0px",threshold:0});o.forEach(r=>{r&&i.observe(r)})})()},ee=()=>{E(0)},je=()=>{E(parseInt(String(x(he))))},ze=()=>{E(document.getElementById("comments"))},Fe=()=>{f.each(".menu .item:not(.title)",e=>{let t=e.querySelector("a[href]"),o=e.parentNode.parentNode;if(!t)return;let s=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),n=!u.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),a=!t.onclick&&t.hostname===location.hostname&&(s||n);e.toggleClass("active",a),e.parentNode.querySelector(".active")&&o.hasClass("dropdown")?o.removeClass("active").addClass("expand"):o.removeClass("expand")})};var g={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),L.setAttribute("style","display:block"),g.lock=!1},hide(e){u.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){g.lock||(u.loader.start&&p(L,0),document.body.addClass("loaded"),g.lock=!0)}};function te(){f.each(".overview .menu > .item",t=>{w.querySelector(".menu").appendChild(t.cloneNode(!0))}),L.addEventListener("click",g.vanish),C.addEventListener("click",k),document.querySelector(".dimmer").addEventListener("click",k),J.querySelector(".down").addEventListener("click",je),J.querySelector(".up").addEventListener("click",ee),y||Oe(D(j,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),He(y.querySelector(".player")),Ae(y.querySelector(".back-to-top")),Ie(y.querySelector(".chat")),qe(y.querySelector(".contents")),R.addEventListener("click",ee),pe.addEventListener("click",ze),N.addEventListener("click",k),Pe(M),document.querySelector("main").addEventListener("click",()=>{M.player.mini()}),(()=>{new IntersectionObserver(([t])=>{t.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([t])=>{t.isIntersecting?document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))})()}var Ge=()=>{if(!document.querySelector(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(o=>{o.target.hasClass("show")?e.unobserve(o.target):(o.isIntersecting||o.intersectionRatio>0)&&(o.target.addClass("show"),e.unobserve(o.target))})},{root:null,threshold:[.3]});f.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),document.querySelector(".index.wrap .item:first-child").addClass("show"),f.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(o=>{t.addEventListener(o,()=>{let s=document.querySelector(".cards .item.active");s&&s.removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(o=>{t.addEventListener(o,()=>{t.removeClass("active")},{passive:!0})})})};var v=e=>{let t=document.querySelector(".theme .ic");e==="dark"?(U.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(U.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},We=()=>{u.auto_dark.enable&&(new Date().getHours()>=u.auto_dark.start||new Date().getHours()<=u.auto_dark.end?v("dark"):v())},oe=e=>{U.getAttribute("data-theme")==="dark"&&(e="#222"),document.querySelector('meta[name="theme-color"]').setAttribute("content",e)},$e=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?v("dark"):v()});let e=P.get("theme");e?v(e):u.darkmode&&v("dark")};var ut=document.getElementById("waves"),F=()=>{ve(x(w)),ye(x(j)),Ee(K+x(ut)),we!==window.innerWidth&&k(null,1),be(window.innerHeight),Le(window.innerWidth)},Ye=()=>{let e=window.innerHeight,t=document.querySelector("main > .inner").offsetHeight,o=t>e?t-e:document.body.scrollHeight-e,s=window.scrollY>K,n=window.scrollY>0;s?oe("#FFF"):oe("#222"),w.toggleClass("show",s),y.toggleClass("affix",n),fe.toggleClass("affix",n),m.toggleClass("affix",window.scrollY>ge&&document.body.offsetWidth>=991),typeof q.y>"u"&&(q.y=window.scrollY),Ce(q.y-window.scrollY),O<0?(w.removeClass("up"),w.toggleClass("down",s)):O>0&&(w.removeClass("down"),w.toggleClass("up",s)),q.y=window.scrollY;let a=Math.round(Math.min(100*window.scrollY/o,100))+"%";R.querySelector("span").innerText!==a&&(R.querySelector("span").innerText=a),(document.getElementById("sidebar").hasClass("affix")||document.getElementById("sidebar").hasClass("on"))&&le(document.querySelector(".percent"),a)},Xe=()=>{let e=document.querySelector('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",Z+u.favicon.hidden),document.title=LOCAL.favicon.hide,u.loader.switch&&g.show(),clearTimeout(me);break;case"visible":e.setAttribute("href",Z+u.favicon.normal),document.title=LOCAL.favicon.show,u.loader.switch&&g.hide(1e3),Se(setTimeout(()=>{document.title=ue},2e3));break}},{passive:!0})};var mt=new Uint8Array(128);for(let e=0;e<83;e++)mt["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".charCodeAt(e)]=e;var ht=Math.PI,lo=ht*2;var Ze=32,Ve="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E";var Je=typeof window>"u",Ke=!Je&&"loading"in HTMLImageElement.prototype,Qe=!Je&&(!("onscroll"in window)||/(?:gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function ft(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function pt(e){let t=Date.now();return Ve.replace(/\s/,` data-id='${t}-${e}' `)}function gt(e,t){let o;return function(...s){o!=null&&clearTimeout(o),o=setTimeout(()=>{e(...s),o=void 0},t)}}function re(e='img[loading="lazy"]',{hash:t=!0,hashType:o="blurhash",placeholderSize:s=Ze,updateSizesOnResize:n=!1,onImageLoad:a}={}){let c=new Set;for(let[i,r]of ft(e).entries()){let l=ne(r,{updateOnResize:n});if(n&&l&&c.add(l),!r.dataset.src&&!r.dataset.srcset)continue;if(Qe||!Ke){et(r),$(r),W(r);continue}if(r.src||(r.src=pt(i)),r.complete&&r.naturalWidth>0){se(r,a);continue}let d=()=>se(r,a);r.addEventListener("load",d,{once:!0}),c.add(()=>r.removeEventListener("load",d))}return()=>{for(let i of c)i();c.clear()}}function se(e,t){if(ot(e)){et(e),$(e),W(e),t?.(e);return}let o=new Image,{srcset:s,src:n,sizes:a}=e.dataset;if(a==="auto"){let c=tt(e);c&&(o.sizes=`${c}px`)}else e.sizes&&(o.sizes=e.sizes);s&&(o.srcset=s),n&&(o.src=n),o.addEventListener("load",()=>{$(e),W(e),t?.(e)},{once:!0})}var G=new WeakMap;function ne(e,t){if(e.dataset.sizes!=="auto")return;let o=tt(e);if(o&&(e.sizes=`${o}px`),ot(e)&&t?.processSourceElements)for(let s of[...e.parentElement.getElementsByTagName("source")])ne(s,{processSourceElements:!0});if(t?.updateOnResize){if(!G.has(e)){let s=gt(()=>ne(e),500),n=new ResizeObserver(s);G.set(e,n),n.observe(e)}return()=>{let s=G.get(e);s&&(s.disconnect(),G.delete(e))}}}function W(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function $(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function et(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach($),[...t.querySelectorAll("source[data-src]")].forEach(W))}function tt(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}function ot(e){return e.parentElement?.tagName.toLowerCase()==="picture"}var st=()=>{z(),m.hasClass("on")&&p(m,0,()=>{m.removeClass("on"),C.removeClass("close")});let e=document.getElementById("main");e.innerHTML="",e.appendChild(L.lastChild.cloneNode(!0)),E(0)},ie=async e=>{if(window.location.origin!==u.hostname&&window.location.origin!=="http://localhost:4000"){window.location.href=u.hostname;alert(`\u68C0\u6D4B\u5230\u975E\u6CD5\u4EFF\u5192\u7F51\u7AD9\uFF0C\u5DF2\u81EA\u52A8\u8DF3\u8F6C\u56DE\u6B63\u786E\u9996\u9875;
We have detected a fake website, and you have been redirected to the correct homepage.`)}Te(0),xe(window.location.href),Q("katex"),await import("./copy-tex-Z6HIHJZI.js"),Q("mermaid");let t=new IntersectionObserver(function(s,n){s.forEach(a=>{if(a.isIntersecting){let c=a.target;c.style.backgroundImage=`url("${c.getAttribute("data-background-image")}")`,c.removeAttribute("data-background-image"),n.unobserve(c)}})},{root:null,threshold:.2});document.querySelectorAll("[data-background-image]").forEach(s=>{t.observe(s)}),e!==1&&f.each("script[data-pjax]",Be),_e(document.title),F(),Fe(),De(),Ue(),import("./post-I63MFOFZ.js").then(({postBeauty:s})=>{s()});let o=document.getElementById("copyright");if(o){let s=new IntersectionObserver(n=>{n.forEach(a=>{a.isIntersecting&&s.disconnect()})},{root:null,threshold:.2});s.observe(o)}re(),Ne(),M.player.load(LOCAL.audio||u.audio||{}),g.hide(100),setTimeout(()=>{Me()},500),Ge()};function ae(){let e=!0;window.addEventListener("DOMContentLoaded",function(){e=!1}),document.readyState==="loading"&&window.addEventListener("load",function(){e&&(window.dispatchEvent(new Event("DOMContentLoaded")),console.log("%c \u2601\uFE0Fcloudflare patch %c running","color: white; background: #ff8c00; padding: 5px 3px;","padding: 4px;border:1px solid #ff8c00"))})}ae();function S(e,t,o){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,o):t.call(o,e,0,[e])}var at=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function ce(e,t,o,s){at(t,n=>{S(e,a=>{a.addEventListener(n,o,s)})})}function _(e,t,o={}){at(t,s=>{let n=new CustomEvent(s,{bubbles:!0,cancelable:!0,...o});S(e,a=>{a.dispatchEvent(n)})})}function nt(e){let t=e.text||e.textContent||e.innerHTML||"",o=e.src||"",s=e.parentNode||document.querySelector("head")||document.documentElement,n=document.createElement("script");return t.match("document.write")?!1:(n.type="text/javascript",n.id=e.id,o!==""&&(n.src=o,n.async=!1),t!==""&&n.appendChild(document.createTextNode(t)),s.appendChild(n),(s instanceof HTMLHeadElement||s instanceof HTMLBodyElement)&&s.contains(n)&&s.removeChild(n),!0)}function wt(e){e.tagName.toLowerCase()==="script"&&nt(e),S(e.querySelectorAll("script"),t=>{let o=t;(!o.type||o.type.toLowerCase()==="text/javascript")&&(o.parentNode&&o.parentNode.removeChild(o),nt(o))})}function vt(e,t,o,s=document){e.forEach(n=>{S(s.querySelectorAll(n),t,o)})}var Y=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function ct(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function yt(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function rt(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let o=t.attributes;for(let s=0;s<o.length;s++)e.attributes.setNamedItem(o[s].cloneNode())}this.onSwitch()}function Et({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:o={},switchesOptions:s={},history:n=!0,scrollTo:a=0,scrollRestoration:c=!0,cacheBust:i=!0,timeout:r=0,currentUrlFullReload:l=!1}={}){let d={elements:e,selectors:t,switches:o,switchesOptions:s,history:n,scrollTo:a,scrollRestoration:c,cacheBust:i,timeout:r,currentUrlFullReload:l};return d.switches.head||(d.switches.head=rt),d.switches.body||(d.switches.body=rt),d}var X="data-pjax-state";function it(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let o={...this.options},s=bt(e,t);if(s){e.setAttribute(X,s);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(X,"reload"),this.reload();return}e.setAttribute(X,"load"),o.triggerElement=e,this.loadUrl(e.href,o)}function bt(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function Lt(e){e.setAttribute(X,""),ce(e,"click",t=>it.call(this,e,t)),ce(e,"keyup",t=>{let o=t;o.keyCode===13&&it.call(this,e,o)})}function Ct(e,t,o,s){if(s={...s||this.options},s.request=t,e===!1){_(document,"pjax:complete pjax:error",s);return}let n=window.history.state||{};window.history.replaceState({url:n.url||window.location.href,title:n.title||document.title,uid:n.uid||Y(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let a=o;t.responseURL?o!==t.responseURL&&(o=t.responseURL):t.getResponseHeader("X-PJAX-URL")?o=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(o=t.getResponseHeader("X-XHR-Redirected-To"));let c=document.createElement("a");c.href=a;let i=c.hash;c.href=o,i&&!c.hash&&(c.hash=i,o=c.href),this.state.href=o,this.state.options=s;try{this.loadContent(e,s)}catch(r){return _(document,"pjax:error",s),console.error("Pjax switch fail: ",r),this.latestChance(o)}}function St(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function Tt(e,t,o){let s=new RegExp("([?&])"+t+"=.*?(&|$)","i"),n=e.indexOf("?")!==-1?"&":"?";return e.match(s)?e.replace(s,"$1"+t+"="+o+"$2"):e+n+t+"="+o}function xt(e,t={},o){let s=t.requestOptions||{},n=(s.requestMethod||"GET").toUpperCase(),a=s.requestParams||null,c=null,i=new XMLHttpRequest,r=t.timeout;if(i.onreadystatechange=()=>{i.readyState===4&&(i.status===200?o(i.responseText,i,e,t):i.status!==0&&o(null,i,e,t))},i.onerror=l=>{console.error(l),o(null,i,e,t)},i.ontimeout=()=>{o(null,i,e,t)},a&&a.length){let l=a.map(d=>d.name+"="+d.value).join("&");switch(n){case"GET":e=e.split("?")[0],e+="?"+l;break;case"POST":c=l;break}}return t.cacheBust&&(e=Tt(e,"t",Date.now())),i.open(n,e,!0),i.timeout=r,i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.setRequestHeader("X-PJAX","true"),i.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),i.send(c),i}function kt(e,t,o,s,n,a){let c=[];o.forEach(i=>{let r=s.querySelectorAll(i),l=n.querySelectorAll(i);if(r.length!==l.length)throw new Error(`DOM doesn't look the same on new loaded page: '${i}' - new ${r.length}, old ${l.length}`);S(r,(d,T)=>{let H=l[T],B=e[i]?e[i].bind(this,H,d,a,t[i]):ct.bind(this,H,d,a);c.push(B)},this)},this),this.state.numPendingSwitches=c.length,c.forEach(i=>{i()})}function _t(e,t,o){for(let s of t){let n=e.querySelectorAll(s);for(let a=0;a<n.length;a++)if(n[a].contains(o))return!0}return!1}var b=class{constructor(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=Et(t),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=Y(),this.parseDOM(document),ce(window,"popstate",o=>{let s=o;if(s.state){let n={...this.options};n.url=s.state.url,n.title=s.state.title,n.history=!1,n.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?n.backward=!0:n.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,n)}})}getElements(t){return t.querySelectorAll(this.options.elements)}parseDOM(t){S(this.getElements(t),St,this)}refresh(t){this.parseDOM(t||document)}reload(){window.location.reload()}forEachSelectors(t,o,s){return vt.bind(this)(this.options.selectors,t,o,s)}switchSelectors(t,o,s,n){return kt.bind(this)(this.options.switches,this.options.switchesOptions,t,o,s,n)}latestChance(t){window.location=t}onSwitch(){_(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(t,o){if(typeof t!="string"){_(document,"pjax:complete pjax:error",o);return}let s=document.implementation.createHTMLDocument("pjax"),n=/<html[^>]+>/gi,a=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,c=t.match(n);if(c&&c.length&&(c=c[0].match(a),c.length&&(c.shift(),c.forEach(i=>{let r=i.trim().split("=");r.length===1?s.documentElement.setAttribute(r[0],"true"):s.documentElement.setAttribute(r[0],r[1].slice(1,-1))}))),s.documentElement.innerHTML=t,document.activeElement&&_t(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,o)}loadUrl(t,o){o=typeof o=="object"?{...this.options,...o}:{...this.options},this.abortRequest(this.request),_(document,"pjax:send",o),this.request=this.doRequest(t,o,this.handleResponse.bind(this))}afterAllSwitches(){var t,o,s;this.options.selectors.forEach(a=>{S(document.querySelectorAll(a),c=>{wt(c)})});let n=this.state;if(!((t=n.options)===null||t===void 0)&&t.history&&(window.history.state||(this.lastUid=this.maxUid=Y(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=Y(),window.history.pushState({url:n.href,title:n.options.title,uid:this.maxUid,scrollPos:[0,0]},n.options.title,n.href)),this.forEachSelectors(a=>{this.parseDOM(a)},this),_(document,"pjax:complete pjax:success",n.options),!((o=n.options)===null||o===void 0)&&o.history){let a=document.createElement("a");if(a.href=this.state.href,a.hash){let c=a.hash.slice(1);c=decodeURIComponent(c);let i=0,r=document.getElementById(c)||document.getElementsByName(c)[0];if(r&&r.offsetParent)do i+=r.offsetTop,r=r.offsetParent;while(r);window.scrollTo(0,i)}else n.options.scrollTo!==!1&&(Array.isArray(n.options.scrollTo)?window.scrollTo(n.options.scrollTo[0],n.options.scrollTo[1]):window.scrollTo(0,n.options.scrollTo))}else!((s=n.options)===null||s===void 0)&&s.scrollRestoration&&n.options.scrollPos&&window.scrollTo(n.options.scrollPos[0],n.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(t){t&&t.readyState<4&&(t.onreadystatechange=()=>{},t.abort())}};b.prototype.attachLink=Lt;b.prototype.doRequest=xt;b.prototype.handleResponse=Ct;b.switches={innerHTML:yt,outerHTML:ct};function lt(){function e(){let t,o=document.querySelector(".theme").querySelector(".ic"),s=D(V,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),n=()=>{p(s,{delay:2500,opacity:0},()=>{V.removeChild(s)})};o.hasClass("i-sun")?t=()=>{s.addClass("dark"),v("dark"),P.set("theme","dark"),n()}:(s.addClass("dark"),t=()=>{s.removeClass("dark"),v(),P.set("theme","light"),n()}),p(s,1,()=>{setTimeout(t,210)},()=>{I(s,"block")})}document.getElementById("rightNav").querySelector(".theme .ic").addEventListener("click",e)}var Ht=async()=>{lt(),te(),ke(new b({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),u.quicklink.ignores=LOCAL.ignores,import("./quicklink-5IHU5767.js").then(({listen:e})=>{e(u.quicklink)}),We(),Xe(),$e(),import("./index.esm-VUCBCAGT.js").then(e=>{e.default(u.fireworks)}),window.addEventListener("scroll",Ye,{passive:!0}),window.addEventListener("resize",F,{passive:!0}),window.addEventListener("pjax:send",st,{passive:!0}),window.addEventListener("pjax:success",ie,{passive:!0}),window.addEventListener("beforeunload",()=>{z()}),await ie(1)};ae();if(window.location.origin!==u.hostname&&window.location.origin!=="http://localhost:4000"){window.location.href=u.hostname;alert(`\u68C0\u6D4B\u5230\u975E\u6CD5\u4EFF\u5192\u7F51\u7AD9\uFF0C\u5DF2\u81EA\u52A8\u8DF3\u8F6C\u56DE\u6B63\u786E\u9996\u9875;
We have detected a fake website, and you have been redirected to the correct homepage.`)}window.addEventListener("DOMContentLoaded",Ht,{passive:!0});console.log("%c Theme.ShokaX v"+u.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
/*! For license information please see siteInit.js.LEGAL.txt */
