(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function w(){}function J(e){return e()}function W(){return Object.create(null)}function A(e){e.forEach(J)}function K(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function et(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function T(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function U(e){return document.createTextNode(e)}function L(){return U(" ")}function O(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function nt(e){return Array.from(e.childNodes)}function rt(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function B(e,t){e.value=t??""}function st(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,i,t),r}let M;function C(e){M=e}function it(){if(!M)throw new Error("Function called outside component initialization");return M}function ot(){const e=it();return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t];if(r){const s=st(t,n,{cancelable:i});return r.slice().forEach(l=>{l.call(e,s)}),!s.defaultPrevented}return!0}}const S=[],Q=[],P=[],z=[],lt=Promise.resolve();let D=!1;function ct(){D||(D=!0,lt.then(V))}function I(e){P.push(e)}const j=new Set;let E=0;function V(){if(E!==0)return;const e=M;do{try{for(;E<S.length;){const t=S[E];E++,C(t),at(t.$$)}}catch(t){throw S.length=0,E=0,t}for(C(null),S.length=0,E=0;Q.length;)Q.pop()();for(let t=0;t<P.length;t+=1){const n=P[t];j.has(n)||(j.add(n),n())}P.length=0}while(S.length);for(;z.length;)z.pop()();D=!1,j.clear(),C(e)}function at(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const H=new Set;let ut;function G(e,t){e&&e.i&&(H.delete(e),e.i(t))}function ft(e,t,n,i){if(e&&e.o){if(H.has(e))return;H.add(e),ut.c.push(()=>{H.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function dt(e){e&&e.c()}function X(e,t,n,i){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),i||I(()=>{const l=e.$$.on_mount.map(J).filter(K);e.$$.on_destroy?e.$$.on_destroy.push(...l):A(l),e.$$.on_mount=[]}),s.forEach(I)}function Y(e,t){const n=e.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(e,t){e.$$.dirty[0]===-1&&(S.push(e),ct(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,i,r,s,l,h=[-1]){const c=M;C(e);const o=e.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:W(),dirty:h,skip_bound:!1,root:t.target||c.$$.root};l&&l(o.root);let b=!1;if(o.ctx=n?n(e,t.props||{},(f,d,..._)=>{const x=_.length?_[0]:d;return o.ctx&&r(o.ctx[f],o.ctx[f]=x)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](x),b&&_t(e,f)),d}):[],o.update(),b=!0,A(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){const f=nt(t.target);o.fragment&&o.fragment.l(f),f.forEach($)}else o.fragment&&o.fragment.c();t.intro&&G(e.$$.fragment),X(e,t.target,t.anchor,t.customElement),V()}C(c)}class tt{$destroy(){Y(this,1),this.$destroy=w}$on(t,n){if(!K(n))return w;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!et(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function pt(e){let t,n,i,r,s,l,h;return{c(){t=m("div"),n=m("input"),i=L(),r=m("button"),s=U(e[1]),a(n,"class","bg-slate-700 w-3/4 text-white m-1"),a(n,"placeholder",e[0]),a(r,"class","bg-green-300 rounded-sm text-black m-1 h-12 w-12"),a(t,"id","barContainer"),a(t,"class","mb-10 flex justify-between")},m(c,o){T(c,t,o),p(t,n),B(n,e[2]),p(t,i),p(t,r),p(r,s),l||(h=[O(n,"input",e[4]),O(r,"click",e[3])],l=!0)},p(c,[o]){o&1&&a(n,"placeholder",c[0]),o&4&&n.value!==c[2]&&B(n,c[2]),o&2&&rt(s,c[1])},i:w,o:w,d(c){c&&$(t),l=!1,A(h)}}}function mt(e,t,n){let{input_placeholder_text:i}=t,{submit_button_text:r}=t,s="";const l=ot();function h(){l("inputSubmitted",{data:s})}function c(){s=this.value,n(2,s)}return e.$$set=o=>{"input_placeholder_text"in o&&n(0,i=o.input_placeholder_text),"submit_button_text"in o&&n(1,r=o.submit_button_text)},[i,r,s,h,c]}class ht extends tt{constructor(t){super(),Z(this,t,mt,pt,q,{input_placeholder_text:0,submit_button_text:1})}}function gt(e){let t,n,i;return{c(){t=m("button"),t.textContent="( Show registrants [?] )",a(t,"class","font-mono text-xs text-slate-500 svelte-156vgo7"),a(t,"id","registrants")},m(r,s){T(r,t,s),n||(i=O(t,"click",e[4]),n=!0)},p:w,d(r){r&&$(t),n=!1,i()}}}function yt(e){let t;return{c(){t=m("div"),t.innerHTML='<textarea disabled="" class="bg-slate-600 font-mono w-full h-full text-slate-100 rounded-lg text-center svelte-156vgo7" id="registrants" name="registrants"></textarea>',a(t,"id","registrants_container"),a(t,"class","flex flex-col items-center svelte-156vgo7")},m(n,i){T(n,t,i)},p:w,d(n){n&&$(t)}}}function bt(e){let t,n,i;return{c(){t=m("button"),t.textContent="(Show last winner)",a(t,"class","font-mono text-xs text-slate-500")},m(r,s){T(r,t,s),n||(i=O(t,"click",e[5]),n=!0)},p:w,d(r){r&&$(t),n=!1,i()}}}function xt(e){let t;return{c(){t=m("div"),t.innerHTML=`<p id="last_winner_reward" class="font-mono text-xs text-slate-100 svelte-156vgo7">[last_winner_reward]</p> 
          <p id="last_winner_address" class="font-mono text-xs text-slate-100 svelte-156vgo7">[last_winner_address]</p>`,a(t,"id","last_winner"),a(t,"class","flex flex-col items-center m-5")},m(n,i){T(n,t,i)},p:w,d(n){n&&$(t)}}}function wt(e){let t,n,i,r,s,l,h,c,o,b,f,d,_;n=new ht({props:{input_placeholder_text:"Enter lottery address",submit_button_text:"Load"}}),n.$on("inputSubmitted",e[2]);function x(u,k){return u[1]?yt:gt}let v=x(e),g=v(e);function R(u,k){return u[0]?xt:bt}let N=R(e),y=N(e);return{c(){t=m("body"),dt(n.$$.fragment),i=L(),r=m("div"),s=m("div"),l=m("p"),l.textContent="[address]",h=L(),c=m("p"),c.textContent="[ticket_price]",o=L(),b=m("p"),b.textContent="[registration_open]",f=L(),g.c(),d=L(),y.c(),a(l,"id","address"),a(l,"class","font-mono m-2 text-slate-100 scaletext svelte-156vgo7"),a(c,"id","ticket_price"),a(c,"class","font-mono text-slate-100 scaletext svelte-156vgo7"),a(b,"id","registration_open"),a(b,"class","font-mono text-slate-100 scaletext svelte-156vgo7"),a(s,"id","lotteryDisplay"),a(s,"class","flex flex-col items-center bg-zinc-900 rounded-lg w-11/12"),a(r,"class","flex flex-col items-center")},m(u,k){T(u,t,k),X(n,t,null),p(t,i),p(t,r),p(r,s),p(s,l),p(s,h),p(s,c),p(s,o),p(s,b),p(s,f),g.m(s,null),p(s,d),y.m(s,null),_=!0},p(u,[k]){v===(v=x(u))&&g?g.p(u,k):(g.d(1),g=v(u),g&&(g.c(),g.m(s,d))),N===(N=R(u))&&y?y.p(u,k):(y.d(1),y=N(u),y&&(y.c(),y.m(s,null)))},i(u){_||(G(n.$$.fragment,u),_=!0)},o(u){ft(n.$$.fragment,u),_=!1},d(u){u&&$(t),Y(n),g.d(),y.d()}}}const vt="https://testnet-1.kryolite.io",F="kryo:null";async function $t(e,t,n){return new Promise((i,r)=>{fetch(`${e}${t}`,{body:JSON.stringify(n),headers:{"Content-Type":"application/json"},method:"POST"}).then(s=>s.json().catch(l=>{console.error(l)})).then(s=>{i(s)}).catch(s=>{r(s)})})}function kt(e,t,n){const i=new URLSearchParams(window.location.search);let r,s=i.get("showWin")==="true"||!1,l=i.get("showReg")==="true"||!1;i.get("address")!=null&&h({detail:{data:i.get("address")}});async function h(f){let d=f.detail.data;d&&d.startsWith("kryo:")&&(d==="kryo:test"&&(d=F),$t(vt,`/contract/${d}/call`,{method:"get_state"}).then(_=>{if(JSON.stringify(_),_.address=d,d===F){let x=[];x.push("kryo:5VWxQp616QM9k21RumcbKpA3kmAe2QoPDpdv");for(let v=0;v<32;v++)x.push(`kryo:${(Math.random().toString(36)+"0").slice(2,10+2)}`);_.registrants=x}r=_,c()}).catch(_=>{console.error(_)}))}async function c(){if(r){if(address.innerHTML=`${r.address}`,ticket_price.innerHTML=`ticket_price : ${r.ticket_price}`,registration_open.innerHTML=`registration_open : ${r.registration_open}`,l){let f="";r.registrants.forEach(d=>{f+=`${d}
`}),registrants.textContent=f}else registrants.innerHTML=`( Show registrants [${r.registrants.length}] )`;s&&(last_winner_reward.innerHTML=`last_winner_reward : ${r.last_winner.reward}`,last_winner_address.innerHTML=`last_winner_address : ${r.last_winner.address}`)}}return[s,l,h,c,()=>{n(1,l=!l),setTimeout(c,1)},()=>{n(0,s=!0),setTimeout(c,1)}]}class Et extends tt{constructor(t){super(),Z(this,t,kt,wt,q,{})}}new Et({target:document.getElementById("app")});
