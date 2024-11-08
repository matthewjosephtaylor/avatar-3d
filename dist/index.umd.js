(function(an,At){typeof exports=="object"&&typeof module<"u"?At(exports,require("@mjtdev/engine"),require("react")):typeof define=="function"&&define.amd?define(["exports","@mjtdev/engine","react"],At):(an=typeof globalThis<"u"?globalThis:an||self,At(an.Avatar3d={},an.engine,an.React))})(this,function(an,At,tt){"use strict";var CP=Object.defineProperty;var PP=(an,At,tt)=>At in an?CP(an,At,{enumerable:!0,configurable:!0,writable:!0,value:tt}):an[At]=tt;var tn=(an,At,tt)=>PP(an,typeof At!="symbol"?At+"":At,tt);function P_(n){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(n){for(const t in n)if(t!=="default"){const i=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:()=>n[t]})}}return e.default=n,Object.freeze(e)}const Ge=P_(tt);var ad=Symbol.for("immer-nothing"),ld=Symbol.for("immer-draftable"),Tn=Symbol.for("immer-state"),I_=process.env.NODE_ENV!=="production"?[function(n){return`The plugin for '${n}' has not been loaded into Immer. To enable the plugin, import and call \`enable${n}()\` when initializing your application.`},function(n){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${n}'`},"This object has been frozen and should not be mutated",function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(n){return`'current' expects a draft, got: ${n}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(n){return`'original' expects a draft, got: ${n}`}]:[];function xn(n,...e){if(process.env.NODE_ENV!=="production"){const t=I_[n],i=typeof t=="function"?t.apply(null,e):t;throw new Error(`[Immer] ${i}`)}throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var Nr=Object.getPrototypeOf;function Or(n){return!!n&&!!n[Tn]}function or(n){var e;return n?cd(n)||Array.isArray(n)||!!n[ld]||!!((e=n.constructor)!=null&&e[ld])||Xo(n)||jo(n):!1}var L_=Object.prototype.constructor.toString();function cd(n){if(!n||typeof n!="object")return!1;const e=Nr(n);if(e===null)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===L_}function Wo(n,e){$o(n)===0?Reflect.ownKeys(n).forEach(t=>{e(t,n[t],n)}):n.forEach((t,i)=>e(i,t,n))}function $o(n){const e=n[Tn];return e?e.type_:Array.isArray(n)?1:Xo(n)?2:jo(n)?3:0}function Ul(n,e){return $o(n)===2?n.has(e):Object.prototype.hasOwnProperty.call(n,e)}function ud(n,e,t){const i=$o(n);i===2?n.set(e,t):i===3?n.add(t):n[e]=t}function D_(n,e){return n===e?n!==0||1/n===1/e:n!==n&&e!==e}function Xo(n){return n instanceof Map}function jo(n){return n instanceof Set}function ar(n){return n.copy_||n.base_}function Fl(n,e){if(Xo(n))return new Map(n);if(jo(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);const t=cd(n);if(e===!0||e==="class_only"&&!t){const i=Object.getOwnPropertyDescriptors(n);delete i[Tn];let r=Reflect.ownKeys(i);for(let s=0;s<r.length;s++){const o=r[s],a=i[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(i[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:n[o]})}return Object.create(Nr(n),i)}else{const i=Nr(n);if(i!==null&&t)return{...n};const r=Object.create(i);return Object.assign(r,n)}}function Bl(n,e=!1){return Yo(n)||Or(n)||!or(n)||($o(n)>1&&(n.set=n.add=n.clear=n.delete=N_),Object.freeze(n),e&&Object.entries(n).forEach(([t,i])=>Bl(i,!0))),n}function N_(){xn(2)}function Yo(n){return Object.isFrozen(n)}var O_={};function lr(n){const e=O_[n];return e||xn(0,n),e}var Gs;function hd(){return Gs}function U_(n,e){return{drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function dd(n,e){e&&(lr("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=e)}function kl(n){Vl(n),n.drafts_.forEach(F_),n.drafts_=null}function Vl(n){n===Gs&&(Gs=n.parent_)}function fd(n){return Gs=U_(Gs,n)}function F_(n){const e=n[Tn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function pd(n,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return n!==void 0&&n!==t?(t[Tn].modified_&&(kl(e),xn(4)),or(n)&&(n=qo(e,n),e.parent_||Ko(e,n)),e.patches_&&lr("Patches").generateReplacementPatches_(t[Tn].base_,n,e.patches_,e.inversePatches_)):n=qo(e,t,[]),kl(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),n!==ad?n:void 0}function qo(n,e,t){if(Yo(e))return e;const i=e[Tn];if(!i)return Wo(e,(r,s)=>md(n,i,e,r,s,t)),e;if(i.scope_!==n)return e;if(!i.modified_)return Ko(n,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const r=i.copy_;let s=r,o=!1;i.type_===3&&(s=new Set(r),r.clear(),o=!0),Wo(s,(a,l)=>md(n,i,r,a,l,t,o)),Ko(n,r,!1),t&&n.patches_&&lr("Patches").generatePatches_(i,t,n.patches_,n.inversePatches_)}return i.copy_}function md(n,e,t,i,r,s,o){if(process.env.NODE_ENV!=="production"&&r===t&&xn(5),Or(r)){const a=s&&e&&e.type_!==3&&!Ul(e.assigned_,i)?s.concat(i):void 0,l=qo(n,r,a);if(ud(t,i,l),Or(l))n.canAutoFreeze_=!1;else return}else o&&t.add(r);if(or(r)&&!Yo(r)){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1)return;qo(n,r),(!e||!e.scope_.parent_)&&typeof i!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,i)&&Ko(n,r)}}function Ko(n,e,t=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&Bl(e,t)}function B_(n,e){const t=Array.isArray(n),i={type_:t?1:0,scope_:e?e.scope_:hd(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=i,s=zl;t&&(r=[i],s=Ws);const{revoke:o,proxy:a}=Proxy.revocable(r,s);return i.draft_=a,i.revoke_=o,a}var zl={get(n,e){if(e===Tn)return n;const t=ar(n);if(!Ul(t,e))return k_(n,t,e);const i=t[e];return n.finalized_||!or(i)?i:i===Hl(n.base_,e)?(Wl(n),n.copy_[e]=$l(i,n)):i},has(n,e){return e in ar(n)},ownKeys(n){return Reflect.ownKeys(ar(n))},set(n,e,t){const i=gd(ar(n),e);if(i!=null&&i.set)return i.set.call(n.draft_,t),!0;if(!n.modified_){const r=Hl(ar(n),e),s=r==null?void 0:r[Tn];if(s&&s.base_===t)return n.copy_[e]=t,n.assigned_[e]=!1,!0;if(D_(t,r)&&(t!==void 0||Ul(n.base_,e)))return!0;Wl(n),Gl(n)}return n.copy_[e]===t&&(t!==void 0||e in n.copy_)||Number.isNaN(t)&&Number.isNaN(n.copy_[e])||(n.copy_[e]=t,n.assigned_[e]=!0),!0},deleteProperty(n,e){return Hl(n.base_,e)!==void 0||e in n.base_?(n.assigned_[e]=!1,Wl(n),Gl(n)):delete n.assigned_[e],n.copy_&&delete n.copy_[e],!0},getOwnPropertyDescriptor(n,e){const t=ar(n),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&{writable:!0,configurable:n.type_!==1||e!=="length",enumerable:i.enumerable,value:t[e]}},defineProperty(){xn(11)},getPrototypeOf(n){return Nr(n.base_)},setPrototypeOf(){xn(12)}},Ws={};Wo(zl,(n,e)=>{Ws[n]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ws.deleteProperty=function(n,e){return process.env.NODE_ENV!=="production"&&isNaN(parseInt(e))&&xn(13),Ws.set.call(this,n,e,void 0)},Ws.set=function(n,e,t){return process.env.NODE_ENV!=="production"&&e!=="length"&&isNaN(parseInt(e))&&xn(14),zl.set.call(this,n[0],e,t,n[0])};function Hl(n,e){const t=n[Tn];return(t?ar(t):n)[e]}function k_(n,e,t){var r;const i=gd(e,t);return i?"value"in i?i.value:(r=i.get)==null?void 0:r.call(n.draft_):void 0}function gd(n,e){if(!(e in n))return;let t=Nr(n);for(;t;){const i=Object.getOwnPropertyDescriptor(t,e);if(i)return i;t=Nr(t)}}function Gl(n){n.modified_||(n.modified_=!0,n.parent_&&Gl(n.parent_))}function Wl(n){n.copy_||(n.copy_=Fl(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var V_=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,i)=>{if(typeof e=="function"&&typeof t!="function"){const s=t;t=e;const o=this;return function(l=s,...c){return o.produce(l,h=>t.call(this,h,...c))}}typeof t!="function"&&xn(6),i!==void 0&&typeof i!="function"&&xn(7);let r;if(or(e)){const s=fd(this),o=$l(e,void 0);let a=!0;try{r=t(o),a=!1}finally{a?kl(s):Vl(s)}return dd(s,i),pd(r,s)}else if(!e||typeof e!="object"){if(r=t(e),r===void 0&&(r=e),r===ad&&(r=void 0),this.autoFreeze_&&Bl(r,!0),i){const s=[],o=[];lr("Patches").generateReplacementPatches_(e,r,s,o),i(s,o)}return r}else xn(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let i,r;return[this.produce(e,t,(o,a)=>{i=o,r=a}),i,r]},typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof(n==null?void 0:n.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy)}createDraft(n){or(n)||xn(8),Or(n)&&(n=z_(n));const e=fd(this),t=$l(n,void 0);return t[Tn].isManual_=!0,Vl(e),t}finishDraft(n,e){const t=n&&n[Tn];(!t||!t.isManual_)&&xn(9);const{scope_:i}=t;return dd(i,e),pd(void 0,i)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}applyPatches(n,e){let t;for(t=e.length-1;t>=0;t--){const r=e[t];if(r.path.length===0&&r.op==="replace"){n=r.value;break}}t>-1&&(e=e.slice(t+1));const i=lr("Patches").applyPatches_;return Or(n)?i(n,e):this.produce(n,r=>i(r,e))}};function $l(n,e){const t=Xo(n)?lr("MapSet").proxyMap_(n,e):jo(n)?lr("MapSet").proxySet_(n,e):B_(n,e);return(e?e.scope_:hd()).drafts_.push(t),t}function z_(n){return Or(n)||xn(10,n),_d(n)}function _d(n){if(!or(n)||Yo(n))return n;const e=n[Tn];let t;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=Fl(n,e.scope_.immer_.useStrictShallowCopy_)}else t=Fl(n,!0);return Wo(t,(i,r)=>{ud(t,i,_d(r))}),e&&(e.finalized_=!1),t}var bn=new V_,H_=bn.produce;bn.produceWithPatches.bind(bn),bn.setAutoFreeze.bind(bn),bn.setUseStrictShallowCopy.bind(bn),bn.applyPatches.bind(bn),bn.createDraft.bind(bn),bn.finishDraft.bind(bn);let Xn=0,$s=.05,vd=Math.random()*8+4,Fi=0,Xl=Math.random()*.05,jl=Math.random()*.05;function G_(n,e){if(Xn+=e,Fi===0)Xn>=vd&&(Fi=1,Xn=0);else if(Fi===1){const t=(Xn-Xl)/$s,i=(Xn-jl)/$s,r=t>=1,s=i>=1;r&&s?(Fi=2,Xn=0,n.leftClosed(1),n.rightClosed(1)):(n.leftClosed(Math.min(t,1)),n.rightClosed(Math.min(i,1)))}else if(Fi===2)Xn>=.05&&(Fi=3,Xn=0);else if(Fi===3){const t=1-(Xn-Xl)/$s,i=1-(Xn-jl)/$s,r=t<=0,s=i<=0;r&&s?(Fi=0,Xn=0,n.leftClosed(0),n.rightClosed(0),vd=Math.random()*8+4,$s=Math.random()*.05+.05,Xl=Math.random()*.05,jl=Math.random()*.05):(n.leftClosed(Math.max(t,0)),n.rightClosed(Math.max(i,0)))}}const W_=({analyserNode:n,model:e})=>{if(!n)return;const t=new Uint8Array(n.frequencyBinCount);n.getByteTimeDomainData(t),Math.max(...t)},$_=async({path:n,canvas:e,idleAnimationUrl:t,cameraOptions:i={}})=>{const r=At.Babs.createEngine({canvas:e,premultipliedAlpha:!1,antialias:!0}),s=At.Scenes.createScene(r);s.clearColor=At.Babs.c4(At.Colors.from("black").alpha(0).toString());const o=At.Cameras.getArcRotateCamera(s,"Camera",{alpha:Math.PI/2,beta:Math.PI/2,radius:.5,target:[0,1.67,0],...i});o.minZ=.001,o.inertia=0,o.attachControl(e,!0),At.Lights.getHemisphericLight(s,"light1",{direction:[10,1,1],intensity:.5}),At.Lights.getPointLight(s,"light2",{position:[1,1,2],intensity:15}),e.onkeyup=d=>{d.ctrlKey&&d.keyCode===73&&At.Scenes.toggleInspector(s)};const a=await At.Models.builder({path:n,scene:s}),l=a.getMorphs();console.log("morphs",l);const c={audioEnabled:!0};let h={};const u={leftClosed:d=>{a.morph({EyesClosedL:d})},rightClosed:d=>{a.morph({EyesClosedR:d})},updateState:d=>{h=H_(h,d)},getState:()=>h};return{destroy:()=>{s.dispose(),r.dispose()},model:a,update:({tick:d,analyserNode:f})=>{s.render(),c.audioEnabled&&W_({analyserNode:f,model:a}),G_(u,(d==null?void 0:d.deltaMs)/1e3)},toggleAudio:()=>{c.audioEnabled=!c.audioEnabled},disableAudio:()=>{c.audioEnabled=!1},enableAudio:()=>{c.audioEnabled=!0},isAudioEnabled:()=>c.audioEnabled}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cr="169",X_=0,yd=1,j_=2,xd=1,Y_=2,vi=3,yi=0,dn=1,On=2,Bi=0,Ur=1,Md=2,Sd=3,Ed=4,q_=5,ur=100,K_=101,Z_=102,Q_=103,J_=104,ev=200,tv=201,nv=202,iv=203,Yl=204,ql=205,rv=206,sv=207,ov=208,av=209,lv=210,cv=211,uv=212,hv=213,dv=214,Kl=0,Zl=1,Ql=2,Fr=3,Jl=4,ec=5,tc=6,nc=7,Zo=0,fv=1,pv=2,ki=0,mv=1,gv=2,_v=3,vv=4,yv=5,xv=6,Mv=7,Td="attached",Sv="detached",bd=300,Br=301,kr=302,Qo=303,ic=304,Jo=306,Vi=1e3,ri=1001,ea=1002,fn=1003,Ad=1004,Xs=1005,An=1006,ta=1007,xi=1008,Mi=1009,wd=1010,Rd=1011,js=1012,rc=1013,hr=1014,jn=1015,Ys=1016,sc=1017,oc=1018,Vr=1020,Cd=35902,Pd=1021,Id=1022,Un=1023,Ld=1024,Dd=1025,zr=1026,Hr=1027,ac=1028,lc=1029,Nd=1030,cc=1031,uc=1033,na=33776,ia=33777,ra=33778,sa=33779,hc=35840,dc=35841,fc=35842,pc=35843,mc=36196,gc=37492,_c=37496,vc=37808,yc=37809,xc=37810,Mc=37811,Sc=37812,Ec=37813,Tc=37814,bc=37815,Ac=37816,wc=37817,Rc=37818,Cc=37819,Pc=37820,Ic=37821,oa=36492,Lc=36494,Dc=36495,Od=36283,Nc=36284,Oc=36285,Uc=36286,Ev=2200,Tv=2201,bv=2202,qs=2300,Ks=2301,Fc=2302,Gr=2400,Wr=2401,aa=2402,Bc=2500,Av=2501,wv=0,Ud=1,kc=2,Rv=3200,Cv=3201,Zs=0,Pv=1,zi="",Ct="srgb",nn="srgb-linear",Vc="display-p3",la="display-p3-linear",ca="linear",Lt="srgb",ua="rec709",ha="p3",$r=7680,Fd=519,Iv=512,Lv=513,Dv=514,Bd=515,Nv=516,Ov=517,Uv=518,Fv=519,zc=35044,Bv=35048,kd="300 es",Si=2e3,da=2001;class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vd=1234567;const Qs=Math.PI/180,Xr=180/Math.PI;function Yn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Jt(n,e,t){return Math.max(e,Math.min(t,n))}function Hc(n,e){return(n%e+e)%e}function kv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Vv(n,e,t){return n!==e?(t-n)/(e-n):0}function Js(n,e,t){return(1-t)*n+t*e}function zv(n,e,t,i){return Js(n,e,1-Math.exp(-t*i))}function Hv(n,e=1){return e-Math.abs(Hc(n,e*2)-e)}function Gv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Wv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $v(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Xv(n,e){return n+Math.random()*(e-n)}function jv(n){return n*(.5-Math.random())}function Yv(n){n!==void 0&&(Vd=n);let e=Vd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qv(n){return n*Qs}function Kv(n){return n*Xr}function Zv(n){return(n&n-1)===0&&n!==0}function Qv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Jv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function e0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ot={DEG2RAD:Qs,RAD2DEG:Xr,generateUUID:Yn,clamp:Jt,euclideanModulo:Hc,mapLinear:kv,inverseLerp:Vv,lerp:Js,damp:zv,pingpong:Hv,smoothstep:Gv,smootherstep:Wv,randInt:$v,randFloat:Xv,randFloatSpread:jv,seededRandom:Yv,degToRad:qv,radToDeg:Kv,isPowerOfTwo:Zv,ceilPowerOfTwo:Qv,floorPowerOfTwo:Jv,setQuaternionFromProperEuler:e0,normalize:wt,denormalize:qn};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],v=r[0],p=r[3],g=r[6],T=r[1],y=r[4],M=r[7],E=r[2],I=r[5],P=r[8];return s[0]=o*v+a*T+l*E,s[3]=o*p+a*y+l*I,s[6]=o*g+a*M+l*P,s[1]=c*v+h*T+u*E,s[4]=c*p+h*y+u*I,s[7]=c*g+h*M+u*P,s[2]=d*v+f*T+m*E,s[5]=d*p+f*y+m*I,s[8]=d*g+f*M+m*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=t*u+i*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(r*c-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gc.makeScale(e,t)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new Ve;function zd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function t0(){const n=eo("canvas");return n.style.display="block",n}const Hd={};function fa(n){n in Hd||(Hd[n]=!0,console.warn(n))}function n0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function i0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function r0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gd=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wd=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),to={[nn]:{transfer:ca,primaries:ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Ct]:{transfer:Lt,primaries:ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[la]:{transfer:ca,primaries:ha,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Wd),fromReference:n=>n.applyMatrix3(Gd)},[Vc]:{transfer:Lt,primaries:ha,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Wd),fromReference:n=>n.applyMatrix3(Gd).convertLinearToSRGB()}},s0=new Set([nn,la]),Ze={enabled:!0,_workingColorSpace:nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!s0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=to[e].toReference,r=to[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return to[n].primaries},getTransfer:function(n){return n===zi?ca:to[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(to[e].luminanceCoefficients)}};function jr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yr;class o0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yr===void 0&&(Yr=eo("canvas")),Yr.width=e.width,Yr.height=e.height;const i=Yr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(jr(t[i]/255)*255):t[i]=jr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let a0=0;class $d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($c(r[o].image)):s.push($c(r[o]))}else s=$c(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $c(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?o0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let l0=0;class Yt extends dr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=ri,r=ri,s=An,o=xi,a=Un,l=Mi,c=Yt.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Yn(),this.name="",this.source=new $d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=bd,Yt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(f+1)/2,E=(g+1)/2,I=(h+d)/4,P=(u+v)/4,B=(m+p)/4;return y>M&&y>E?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=I/i,s=P/i):M>E?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=I/r,s=B/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=P/s,r=B/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-m)*(p-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(p-m)/T,this.y=(u-v)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c0 extends dr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $d(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fr extends c0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xd extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u0 extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ue{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=s[o+0],f=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==m){let p=1-a;const g=l*d+c*f+h*m+u*v,T=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const E=Math.sqrt(y),I=Math.atan2(E,g*T);p=Math.sin(p*I)/E,a=Math.sin(a*I)/E}const M=a*T;if(l=l*p+d*M,c=c*p+f*M,h=h*p+m*M,u=u*p+v*M,p===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),d=l(i/2),f=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new N,jd=new Ue;class Ei{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),ma.subVectors(this.max,no),qr.subVectors(e.a,no),Kr.subVectors(e.b,no),Zr.subVectors(e.c,no),Hi.subVectors(Kr,qr),Gi.subVectors(Zr,Kr),pr.subVectors(qr,Zr);let t=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-pr.z,pr.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,pr.z,0,-pr.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-pr.y,pr.x,0];return!jc(t,qr,Kr,Zr,ma)||(t=[1,0,0,0,1,0,0,0,1],!jc(t,qr,Kr,Zr,ma))?!1:(ga.crossVectors(Hi,Gi),t=[ga.x,ga.y,ga.z],jc(t,qr,Kr,Zr,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new N,new N,new N,new N,new N,new N,new N,new N],Kn=new N,pa=new Ei,qr=new N,Kr=new N,Zr=new N,Hi=new N,Gi=new N,pr=new N,no=new N,ma=new N,ga=new N,mr=new N;function jc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){mr.fromArray(n,s);const a=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=t.dot(mr),h=i.dot(mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const h0=new Ei,io=new N,Yc=new N;class si{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):h0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);const t=io.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(io,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(Yc)),this.expandByPoint(io.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new N,qc=new N,_a=new N,Wi=new N,Kc=new N,va=new N,Zc=new N;class ya{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qc.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(qc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_a),a=Wi.dot(this.direction),l=-Wi.dot(_a),c=Wi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(qc).addScaledVector(_a,d),f}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,r,s){Kc.subVectors(t,e),va.subVectors(i,e),Zc.crossVectors(Kc,va);let o=this.direction.dot(Zc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(va.crossVectors(Wi,va));if(l<0)return null;const c=a*this.direction.dot(Kc.cross(Wi));if(c<0||l+c>o)return null;const h=-a*Wi.dot(Zc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(e,t,i,r,s,o,a,l,c,h,u,d,f,m,v,p){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,u,d,f,m,v,p)}set(e,t,i,r,s,o,a,l,c,h,u,d,f,m,v,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d+v*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d0,e,f0)}lookAt(e,t,i){const r=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),$i.crossVectors(i,wn),$i.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),$i.crossVectors(i,wn)),$i.normalize(),xa.crossVectors(wn,$i),r[0]=$i.x,r[4]=xa.x,r[8]=wn.x,r[1]=$i.y,r[5]=xa.y,r[9]=wn.y,r[2]=$i.z,r[6]=xa.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],v=i[6],p=i[10],g=i[14],T=i[3],y=i[7],M=i[11],E=i[15],I=r[0],P=r[4],B=r[8],Z=r[12],_=r[1],S=r[5],H=r[9],A=r[13],b=r[2],L=r[6],C=r[10],U=r[14],O=r[3],te=r[7],V=r[11],W=r[15];return s[0]=o*I+a*_+l*b+c*O,s[4]=o*P+a*S+l*L+c*te,s[8]=o*B+a*H+l*C+c*V,s[12]=o*Z+a*A+l*U+c*W,s[1]=h*I+u*_+d*b+f*O,s[5]=h*P+u*S+d*L+f*te,s[9]=h*B+u*H+d*C+f*V,s[13]=h*Z+u*A+d*U+f*W,s[2]=m*I+v*_+p*b+g*O,s[6]=m*P+v*S+p*L+g*te,s[10]=m*B+v*H+p*C+g*V,s[14]=m*Z+v*A+p*U+g*W,s[3]=T*I+y*_+M*b+E*O,s[7]=T*P+y*S+M*L+E*te,s[11]=T*B+y*H+M*C+E*V,s[15]=T*Z+y*A+M*U+E*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],p=e[11],g=e[15];return m*(+s*l*u-r*c*u-s*a*d+i*c*d+r*a*f-i*l*f)+v*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*h-s*l*h)+p*(+t*c*u-t*a*f-s*o*u+i*o*f+s*a*h-i*c*h)+g*(-r*a*h-t*l*u+t*a*d+r*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],p=e[14],g=e[15],T=u*p*c-v*d*c+v*l*f-a*p*f-u*l*g+a*d*g,y=m*d*c-h*p*c-m*l*f+o*p*f+h*l*g-o*d*g,M=h*v*c-m*u*c+m*a*f-o*v*f-h*a*g+o*u*g,E=m*u*l-h*v*l-m*a*d+o*v*d+h*a*p-o*u*p,I=t*T+i*y+r*M+s*E;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=T*P,e[1]=(v*d*s-u*p*s-v*r*f+i*p*f+u*r*g-i*d*g)*P,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*g+i*l*g)*P,e[3]=(u*l*s-a*d*s-u*r*c+i*d*c+a*r*f-i*l*f)*P,e[4]=y*P,e[5]=(h*p*s-m*d*s+m*r*f-t*p*f-h*r*g+t*d*g)*P,e[6]=(m*l*s-o*p*s-m*r*c+t*p*c+o*r*g-t*l*g)*P,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*f+t*l*f)*P,e[8]=M*P,e[9]=(m*u*s-h*v*s-m*i*f+t*v*f+h*i*g-t*u*g)*P,e[10]=(o*v*s-m*a*s+m*i*c-t*v*c-o*i*g+t*a*g)*P,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*f-t*a*f)*P,e[12]=E*P,e[13]=(h*v*r-m*u*r+m*i*d-t*v*d-h*i*p+t*u*p)*P,e[14]=(m*a*r-o*v*r-m*i*l+t*v*l+o*i*p-t*a*p)*P,e[15]=(o*u*r-h*a*r+h*i*l-t*u*l-o*i*d+t*a*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,v=o*h,p=o*u,g=a*u,T=l*c,y=l*h,M=l*u,E=i.x,I=i.y,P=i.z;return r[0]=(1-(v+g))*E,r[1]=(f+M)*E,r[2]=(m-y)*E,r[3]=0,r[4]=(f-M)*I,r[5]=(1-(d+g))*I,r[6]=(p+T)*I,r[7]=0,r[8]=(m+y)*P,r[9]=(p-T)*P,r[10]=(1-(d+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),a=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const c=1/s,h=1/o,u=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,t.setFromRotationMatrix(Zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Si){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r);let f,m;if(a===Si)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===da)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Si){const l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(o-s),d=(t+e)*c,f=(i+r)*h;let m,v;if(a===Si)m=(o+s)*u,v=-2*u;else if(a===da)m=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qr=new N,Zn=new we,d0=new N(0,0,0),f0=new N(1,1,1),$i=new N,xa=new N,wn=new N,Yd=new we,qd=new Ue;class Bt{constructor(e=0,t=0,i=0,r=Bt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qd.setFromEuler(this),this.setFromQuaternion(qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bt.DEFAULT_ORDER="XYZ";class Kd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p0=0;const Zd=new N,Jr=new Ue,Ai=new we,Ma=new N,ro=new N,m0=new N,g0=new Ue,Qd=new N(1,0,0),Jd=new N(0,1,0),ef=new N(0,0,1),tf={type:"added"},_0={type:"removed"},es={type:"childadded",child:null},Qc={type:"childremoved",child:null};class dt extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new N,t=new Bt,i=new Ue,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new Ve}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Qd,e)}rotateY(e){return this.rotateOnAxis(Jd,e)}rotateZ(e){return this.rotateOnAxis(ef,e)}translateOnAxis(e,t){return Zd.copy(e).applyQuaternion(this.quaternion),this.position.add(Zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qd,e)}translateY(e){return this.translateOnAxis(Jd,e)}translateZ(e){return this.translateOnAxis(ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ma.copy(e):Ma.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(ro,Ma,this.up):Ai.lookAt(Ma,ro,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(Ai),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tf),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_0),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tf),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,m0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dt.DEFAULT_UP=new N(0,1,0),dt.DEFAULT_MATRIX_AUTO_UPDATE=!0,dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new N,wi=new N,Jc=new N,Ri=new N,ts=new N,ns=new N,nf=new N,eu=new N,tu=new N,nu=new N,iu=new at,ru=new at,su=new at;class Jn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qn.subVectors(e,t),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qn.subVectors(r,t),wi.subVectors(i,t),Jc.subVectors(e,t);const o=Qn.dot(Qn),a=Qn.dot(wi),l=Qn.dot(Jc),c=wi.dot(wi),h=wi.dot(Jc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return iu.setScalar(0),ru.setScalar(0),su.setScalar(0),iu.fromBufferAttribute(e,t),ru.fromBufferAttribute(e,i),su.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(iu,s.x),o.addScaledVector(ru,s.y),o.addScaledVector(su,s.z),o}static isFrontFacing(e,t,i,r){return Qn.subVectors(i,t),wi.subVectors(e,t),Qn.cross(wi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Qn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ts.subVectors(r,i),ns.subVectors(s,i),eu.subVectors(e,i);const l=ts.dot(eu),c=ns.dot(eu);if(l<=0&&c<=0)return t.copy(i);tu.subVectors(e,r);const h=ts.dot(tu),u=ns.dot(tu);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ts,o);nu.subVectors(e,s);const f=ts.dot(nu),m=ns.dot(nu);if(m>=0&&f<=m)return t.copy(s);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(ns,a);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return nf.subVectors(s,r),a=(u-h)/(u-h+(f-m)),t.copy(r).addScaledVector(nf,a);const g=1/(p+v+d);return o=v*g,a=d*g,t.copy(i).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function ou(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Hc(e,1),t=Jt(t,0,1),i=Jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ou(o,s,e+1/3),this.g=ou(o,s,e),this.b=ou(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Ct){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const i=rf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=Wc(e.r),this.g=Wc(e.g),this.b=Wc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Ze.fromWorkingColorSpace(cn.copy(this),e),Math.round(Jt(cn.r*255,0,255))*65536+Math.round(Jt(cn.g*255,0,255))*256+Math.round(Jt(cn.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(cn.copy(this),t);const i=cn.r,r=cn.g,s=cn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Ct){Ze.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,i=cn.g,r=cn.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Sa);const i=Js(Xi.h,Sa.h,t),r=Js(Xi.s,Sa.s,t),s=Js(Xi.l,Sa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Re;Re.NAMES=rf;let v0=0;class Rn extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Ur,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=ql,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yl&&(i.blendSrc=this.blendSrc),this.blendDst!==ql&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ci extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new N,Ea=new qe;class ft{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zc,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),e}}class au extends ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sf extends ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rn extends ft{constructor(e,t,i){super(new Float32Array(e),t,i)}}let y0=0;const Fn=new we,lu=new dt,is=new N,Cn=new Ei,so=new Ei,en=new N;class kt extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?sf:au)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];so.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Cn.min,so.min),Cn.expandByPoint(en),en.addVectors(Cn.max,so.max),Cn.expandByPoint(en)):(Cn.expandByPoint(so.min),Cn.expandByPoint(so.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(en));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),en.add(is)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new N,l[B]=new N;const c=new N,h=new N,u=new N,d=new qe,f=new qe,m=new qe,v=new N,p=new N;function g(B,Z,_){c.fromBufferAttribute(i,B),h.fromBufferAttribute(i,Z),u.fromBufferAttribute(i,_),d.fromBufferAttribute(s,B),f.fromBufferAttribute(s,Z),m.fromBufferAttribute(s,_),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const S=1/(f.x*m.y-m.x*f.y);isFinite(S)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(S),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(S),a[B].add(v),a[Z].add(v),a[_].add(v),l[B].add(p),l[Z].add(p),l[_].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let B=0,Z=T.length;B<Z;++B){const _=T[B],S=_.start,H=_.count;for(let A=S,b=S+H;A<b;A+=3)g(e.getX(A+0),e.getX(A+1),e.getX(A+2))}const y=new N,M=new N,E=new N,I=new N;function P(B){E.fromBufferAttribute(r,B),I.copy(E);const Z=a[B];y.copy(Z),y.sub(E.multiplyScalar(E.dot(Z))).normalize(),M.crossVectors(I,Z);const S=M.dot(l[B])<0?-1:1;o.setXYZW(B,y.x,y.y,y.z,S)}for(let B=0,Z=T.length;B<Z;++B){const _=T[B],S=_.start,H=_.count;for(let A=S,b=S+H;A<b;A+=3)P(e.getX(A+0)),P(e.getX(A+1)),P(e.getX(A+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new ft(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const of=new we,gr=new ya,Ta=new si,af=new N,ba=new N,Aa=new N,wa=new N,cu=new N,Ra=new N,lf=new N,Ca=new N;class un extends dt{constructor(e=new kt,t=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(cu.fromBufferAttribute(u,e),o?Ra.addScaledVector(cu,h):Ra.addScaledVector(cu.sub(t),h))}t.add(Ra)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Ta.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Ta,af)===null||gr.origin.distanceToSquared(af)>(e.far-e.near)**2))&&(of.copy(s).invert(),gr.copy(e.ray).applyMatrix4(of),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const p=d[m],g=o[p.materialIndex],T=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=T,E=y;M<E;M+=3){const I=a.getX(M),P=a.getX(M+1),B=a.getX(M+2);r=Pa(this,g,e,i,c,h,u,I,P,B),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const T=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);r=Pa(this,o,e,i,c,h,u,T,y,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const p=d[m],g=o[p.materialIndex],T=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=T,E=y;M<E;M+=3){const I=M,P=M+1,B=M+2;r=Pa(this,g,e,i,c,h,u,I,P,B),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const T=p,y=p+1,M=p+2;r=Pa(this,o,e,i,c,h,u,T,y,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function x0(n,e,t,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===yi,a),l===null)return null;Ca.copy(a),Ca.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ca);return c<t.near||c>t.far?null:{distance:c,point:Ca.clone(),object:n}}function Pa(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ba),n.getVertexPosition(l,Aa),n.getVertexPosition(c,wa);const h=x0(n,e,t,i,ba,Aa,wa,lf);if(h){const u=new N;Jn.getBarycoord(lf,ba,Aa,wa,u),r&&(h.uv=Jn.getInterpolatedAttribute(r,a,l,c,u,new qe)),s&&(h.uv1=Jn.getInterpolatedAttribute(s,a,l,c,u,new qe)),o&&(h.normal=Jn.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Jn.getNormal(ba,Aa,wa,d.normal),h.face=d,h.barycoord=u}return h}class oo extends kt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(u,2));function m(v,p,g,T,y,M,E,I,P,B,Z){const _=M/P,S=E/B,H=M/2,A=E/2,b=I/2,L=P+1,C=B+1;let U=0,O=0;const te=new N;for(let V=0;V<C;V++){const W=V*S-A;for(let ne=0;ne<L;ne++){const ae=ne*_-H;te[v]=ae*T,te[p]=W*y,te[g]=b,c.push(te.x,te.y,te.z),te[v]=0,te[p]=0,te[g]=I>0?1:-1,h.push(te.x,te.y,te.z),u.push(ne/P),u.push(1-V/B),U+=1}}for(let V=0;V<B;V++)for(let W=0;W<P;W++){const ne=d+W+L*V,ae=d+W+L*(V+1),$=d+(W+1)+L*(V+1),Y=d+(W+1)+L*V;l.push(ne,ae,Y),l.push(ae,$,Y),O+=6}a.addGroup(f,O,Z),f+=O,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function pn(n){const e={};for(let t=0;t<n.length;t++){const i=rs(n[t]);for(const r in i)e[r]=i[r]}return e}function M0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const uf={clone:rs,merge:pn};var S0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S0,this.fragmentShader=E0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=M0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hf extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new N,df=new qe,ff=new qe;class mn extends hf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,df,ff),t.subVectors(ff,df)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,os=1;class T0 extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(ss,os,e,t);r.layers=this.layers,this.add(r);const s=new mn(ss,os,e,t);s.layers=this.layers,this.add(s);const o=new mn(ss,os,e,t);o.layers=this.layers,this.add(o);const a=new mn(ss,os,e,t);a.layers=this.layers,this.add(a);const l=new mn(ss,os,e,t);l.layers=this.layers,this.add(l);const c=new mn(ss,os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===da)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class pf extends Yt{constructor(e,t,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Br,super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b0 extends fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oo(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Bi});s.uniforms.tEquirect.value=t;const o=new un(r,s),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=An),new T0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const uu=new N,A0=new N,w0=new Ve;class _r{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=uu.subVectors(i,t).cross(A0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(uu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||w0.getNormalMatrix(e),r=this.coplanarPoint(uu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new si,Ia=new N;class hu{constructor(e=new _r,t=new _r,i=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],f=r[8],m=r[9],v=r[10],p=r[11],g=r[12],T=r[13],y=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,p-f,M-g).normalize(),i[1].setComponents(l+s,d+c,p+f,M+g).normalize(),i[2].setComponents(l+o,d+h,p+m,M+T).normalize(),i[3].setComponents(l-o,d-h,p-m,M-T).normalize(),i[4].setComponents(l-a,d-u,p-v,M-y).normalize(),t===Si)i[5].setComponents(l+a,d+u,p+v,M+y).normalize();else if(t===da)i[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ia.x=r.normal.x>0?e.max.x:e.min.x,Ia.y=r.normal.y>0?e.max.y:e.min.y,Ia.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function R0(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class La extends kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],v=[],p=[];for(let g=0;g<h;g++){const T=g*d-o;for(let y=0;y<c;y++){const M=y*u-s;m.push(M,-T,0),v.push(0,0,1),p.push(y/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let T=0;T<a;T++){const y=T+c*g,M=T+c*(g+1),E=T+1+c*(g+1),I=T+1+c*g;f.push(y,M,I),f.push(M,E,I)}this.setIndex(f),this.setAttribute("position",new rn(m,3)),this.setAttribute("normal",new rn(v,3)),this.setAttribute("uv",new rn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}var C0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,I0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,B0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,H0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,G0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ey=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sy="gl_FragColor = linearToOutputTexel( gl_FragColor );",oy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ly=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,my=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,My=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ey=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ay=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ry=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ly=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ny=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,By=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ky=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ix=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_x=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ex=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qe={alphahash_fragment:C0,alphahash_pars_fragment:P0,alphamap_fragment:I0,alphamap_pars_fragment:L0,alphatest_fragment:D0,alphatest_pars_fragment:N0,aomap_fragment:O0,aomap_pars_fragment:U0,batching_pars_vertex:F0,batching_vertex:B0,begin_vertex:k0,beginnormal_vertex:V0,bsdfs:z0,iridescence_fragment:H0,bumpmap_pars_fragment:G0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:j0,color_fragment:Y0,color_pars_fragment:q0,color_pars_vertex:K0,color_vertex:Z0,common:Q0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:ey,displacementmap_pars_vertex:ty,displacementmap_vertex:ny,emissivemap_fragment:iy,emissivemap_pars_fragment:ry,colorspace_fragment:sy,colorspace_pars_fragment:oy,envmap_fragment:ay,envmap_common_pars_fragment:ly,envmap_pars_fragment:cy,envmap_pars_vertex:uy,envmap_physical_pars_fragment:My,envmap_vertex:hy,fog_vertex:dy,fog_pars_vertex:fy,fog_fragment:py,fog_pars_fragment:my,gradientmap_pars_fragment:gy,lightmap_pars_fragment:_y,lights_lambert_fragment:vy,lights_lambert_pars_fragment:yy,lights_pars_begin:xy,lights_toon_fragment:Sy,lights_toon_pars_fragment:Ey,lights_phong_fragment:Ty,lights_phong_pars_fragment:by,lights_physical_fragment:Ay,lights_physical_pars_fragment:wy,lights_fragment_begin:Ry,lights_fragment_maps:Cy,lights_fragment_end:Py,logdepthbuf_fragment:Iy,logdepthbuf_pars_fragment:Ly,logdepthbuf_pars_vertex:Dy,logdepthbuf_vertex:Ny,map_fragment:Oy,map_pars_fragment:Uy,map_particle_fragment:Fy,map_particle_pars_fragment:By,metalnessmap_fragment:ky,metalnessmap_pars_fragment:Vy,morphinstance_vertex:zy,morphcolor_vertex:Hy,morphnormal_vertex:Gy,morphtarget_pars_vertex:Wy,morphtarget_vertex:$y,normal_fragment_begin:Xy,normal_fragment_maps:jy,normal_pars_fragment:Yy,normal_pars_vertex:qy,normal_vertex:Ky,normalmap_pars_fragment:Zy,clearcoat_normal_fragment_begin:Qy,clearcoat_normal_fragment_maps:Jy,clearcoat_pars_fragment:ex,iridescence_pars_fragment:tx,opaque_fragment:nx,packing:ix,premultiplied_alpha_fragment:rx,project_vertex:sx,dithering_fragment:ox,dithering_pars_fragment:ax,roughnessmap_fragment:lx,roughnessmap_pars_fragment:cx,shadowmap_pars_fragment:ux,shadowmap_pars_vertex:hx,shadowmap_vertex:dx,shadowmask_pars_fragment:fx,skinbase_vertex:px,skinning_pars_vertex:mx,skinning_vertex:gx,skinnormal_vertex:_x,specularmap_fragment:vx,specularmap_pars_fragment:yx,tonemapping_fragment:xx,tonemapping_pars_fragment:Mx,transmission_fragment:Sx,transmission_pars_fragment:Ex,uv_pars_fragment:Tx,uv_pars_vertex:bx,uv_vertex:Ax,worldpos_vertex:wx,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ye={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},oi={basic:{uniforms:pn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:pn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Re(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:pn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:pn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:pn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Re(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:pn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:pn([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:pn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:pn([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:pn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:pn([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:pn([ye.common,ye.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:pn([ye.lights,ye.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};oi.physical={uniforms:pn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Da={r:0,b:0,g:0},yr=new Bt,Rx=new we;function Cx(n,e,t,i,r,s,o){const a=new Re(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function v(T){let y=!1;const M=m(T);M===null?g(a,l):M&&M.isColor&&(g(M,1),y=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(T,y){const M=m(y);M&&(M.isCubeTexture||M.mapping===Jo)?(h===void 0&&(h=new un(new oo(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:rs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),yr.copy(y.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rx.makeRotationFromEuler(yr)),h.material.toneMapped=Ze.getTransfer(M.colorSpace)!==Lt,(u!==M||d!==M.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new un(new La(2,2),new Pi({name:"BackgroundMaterial",uniforms:rs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==Lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function g(T,y){T.getRGB(Da,cf(n)),i.buffers.color.setClear(Da.r,Da.g,Da.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),l=y,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,g(a,l)},render:v,addToRenderList:p}}function Px(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(_,S,H,A,b){let L=!1;const C=u(A,H,S);s!==C&&(s=C,c(s.object)),L=f(_,A,H,b),L&&m(_,A,H,b),b!==null&&e.update(b,n.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,M(_,S,H,A),b!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(b).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function u(_,S,H){const A=H.wireframe===!0;let b=i[_.id];b===void 0&&(b={},i[_.id]=b);let L=b[S.id];L===void 0&&(L={},b[S.id]=L);let C=L[A];return C===void 0&&(C=d(l()),L[A]=C),C}function d(_){const S=[],H=[],A=[];for(let b=0;b<t;b++)S[b]=0,H[b]=0,A[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:H,attributeDivisors:A,object:_,attributes:{},index:null}}function f(_,S,H,A){const b=s.attributes,L=S.attributes;let C=0;const U=H.getAttributes();for(const O in U)if(U[O].location>=0){const V=b[O];let W=L[O];if(W===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(W=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(W=_.instanceColor)),V===void 0||V.attribute!==W||W&&V.data!==W.data)return!0;C++}return s.attributesNum!==C||s.index!==A}function m(_,S,H,A){const b={},L=S.attributes;let C=0;const U=H.getAttributes();for(const O in U)if(U[O].location>=0){let V=L[O];V===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(V=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(V=_.instanceColor));const W={};W.attribute=V,V&&V.data&&(W.data=V.data),b[O]=W,C++}s.attributes=b,s.attributesNum=C,s.index=A}function v(){const _=s.newAttributes;for(let S=0,H=_.length;S<H;S++)_[S]=0}function p(_){g(_,0)}function g(_,S){const H=s.newAttributes,A=s.enabledAttributes,b=s.attributeDivisors;H[_]=1,A[_]===0&&(n.enableVertexAttribArray(_),A[_]=1),b[_]!==S&&(n.vertexAttribDivisor(_,S),b[_]=S)}function T(){const _=s.newAttributes,S=s.enabledAttributes;for(let H=0,A=S.length;H<A;H++)S[H]!==_[H]&&(n.disableVertexAttribArray(H),S[H]=0)}function y(_,S,H,A,b,L,C){C===!0?n.vertexAttribIPointer(_,S,H,b,L):n.vertexAttribPointer(_,S,H,A,b,L)}function M(_,S,H,A){v();const b=A.attributes,L=H.getAttributes(),C=S.defaultAttributeValues;for(const U in L){const O=L[U];if(O.location>=0){let te=b[U];if(te===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(te=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(te=_.instanceColor)),te!==void 0){const V=te.normalized,W=te.itemSize,ne=e.get(te);if(ne===void 0)continue;const ae=ne.buffer,$=ne.type,Y=ne.bytesPerElement,oe=$===n.INT||$===n.UNSIGNED_INT||te.gpuType===rc;if(te.isInterleavedBufferAttribute){const re=te.data,ue=re.stride,me=te.offset;if(re.isInstancedInterleavedBuffer){for(let he=0;he<O.locationSize;he++)g(O.location+he,re.meshPerAttribute);_.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let he=0;he<O.locationSize;he++)p(O.location+he);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let he=0;he<O.locationSize;he++)y(O.location+he,W/O.locationSize,$,V,ue*Y,(me+W/O.locationSize*he)*Y,oe)}else{if(te.isInstancedBufferAttribute){for(let re=0;re<O.locationSize;re++)g(O.location+re,te.meshPerAttribute);_.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let re=0;re<O.locationSize;re++)p(O.location+re);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let re=0;re<O.locationSize;re++)y(O.location+re,W/O.locationSize,$,V,W*Y,W/O.locationSize*re*Y,oe)}}else if(C!==void 0){const V=C[U];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(O.location,V);break;case 3:n.vertexAttrib3fv(O.location,V);break;case 4:n.vertexAttrib4fv(O.location,V);break;default:n.vertexAttrib1fv(O.location,V)}}}}T()}function E(){B();for(const _ in i){const S=i[_];for(const H in S){const A=S[H];for(const b in A)h(A[b].object),delete A[b];delete S[H]}delete i[_]}}function I(_){if(i[_.id]===void 0)return;const S=i[_.id];for(const H in S){const A=S[H];for(const b in A)h(A[b].object),delete A[b];delete S[H]}delete i[_.id]}function P(_){for(const S in i){const H=i[S];if(H[_.id]===void 0)continue;const A=H[_.id];for(const b in A)h(A[b].object),delete A[b];delete H[_.id]}}function B(){Z(),o=!0,s!==r&&(s=r,c(s.object))}function Z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:Z,dispose:E,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:p,disableUnusedAttributes:T}}function Ix(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];for(let v=0;v<d.length;v++)t.update(m,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Lx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Un&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const B=P===Ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Mi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==jn&&!B)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:E,maxSamples:I}}function Dx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new _r,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,g=n.get(u);if(!r||m===null||m.length===0||s&&!p)s?h(null):c();else{const T=s?0:i,y=T*4;let M=g.clippingState||null;l.value=M,M=h(m,d,y,f);for(let E=0;E!==y;++E)M[E]=t[E];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=f+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,M=f;y!==v;++y,M+=4)o.copy(u[y]).applyMatrix4(T,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Nx(n){let e=new WeakMap;function t(o,a){return a===Qo?o.mapping=Br:a===ic&&(o.mapping=kr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qo||a===ic)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new b0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Na extends hf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const as=4,gf=[.125,.215,.35,.446,.526,.582],xr=20,du=new Na,_f=new Re;let fu=null,pu=0,mu=0,gu=!1;const Mr=(1+Math.sqrt(5))/2,ls=1/Mr,vf=[new N(-Mr,ls,0),new N(Mr,ls,0),new N(-ls,0,Mr),new N(ls,0,Mr),new N(0,Mr,-ls),new N(0,Mr,ls),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class yf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,pu,mu),this._renderer.xr.enabled=gu,e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ys,format:Un,colorSpace:nn,depthBuffer:!1},r=xf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ox(s)),this._blurMaterial=Ux(s,e,t)}return r}_compileMaterial(e){const t=new un(this._lodPlanes[0],e);this._renderer.compile(t,du)}_sceneToCubeUV(e,t,i,r){const a=new mn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_f),h.toneMapping=ki,h.autoClear=!1;const f=new Ci({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new un(new oo,f);let v=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(_f),v=!0);for(let g=0;g<6;g++){const T=g%3;T===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):T===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const y=this._cubeSize;Oa(r,T*y,g>2?y:0,y,y),h.setRenderTarget(r),v&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Br||e.mapping===kr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Oa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,du)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vf[(r-s-1)%vf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new un(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*xr-1),v=s/m,p=isFinite(s)?1+Math.floor(h*v):xr;p>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xr}`);const g=[];let T=0;for(let P=0;P<xr;++P){const B=P/v,Z=Math.exp(-B*B/2);g.push(Z),P===0?T+=Z:P<p&&(T+=2*Z)}for(let P=0;P<g.length;P++)g[P]=g[P]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-i;const M=this._sizeLods[r],E=3*M*(r>y-as?r-y+as:0),I=4*(this._cubeSize-M);Oa(t,E,I,3*M,2*M),l.setRenderTarget(t),l.render(u,du)}}function Ox(n){const e=[],t=[],i=[];let r=n;const s=n-as+1+gf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-as?l=gf[o-n+as-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,p=2,g=1,T=new Float32Array(v*m*f),y=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let I=0;I<f;I++){const P=I%3*2/3-1,B=I>2?0:-1,Z=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];T.set(Z,v*m*I),y.set(d,p*m*I);const _=[I,I,I,I,I,I];M.set(_,g*m*I)}const E=new kt;E.setAttribute("position",new ft(T,v)),E.setAttribute("uv",new ft(y,p)),E.setAttribute("faceIndex",new ft(M,g)),e.push(E),r>as&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xf(n,e,t){const i=new fr(n,e,t);return i.texture.mapping=Jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ux(n,e,t){const i=new Float32Array(xr),r=new N(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Mf(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Sf(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function _u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qo||l===ic,h=l===Br||l===kr;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new yf(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new yf(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Bx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&fa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kx(n,e,t,i){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let p=0,g=v.length;p<g;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const v=f[m];for(let p=0,g=v.length;p<g;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const T=f.array;v=f.version;for(let y=0,M=T.length;y<M;y+=3){const E=T[y+0],I=T[y+1],P=T[y+2];d.push(E,I,I,P,P,E)}}else if(m!==void 0){const T=m.array;v=m.version;for(let y=0,M=T.length/3-1;y<M;y+=3){const E=y+0,I=y+1,P=y+2;d.push(E,I,I,P,P,E)}}else return;const p=new(zd(d)?sf:au)(d,1);p.version=v;const g=s.get(u);g&&e.remove(g),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Vx(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function c(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,s,d*o,m),t.update(f,i,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,i,1)}function u(d,f,m,v){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],v[g]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,v,0,m);let g=0;for(let T=0;T<m;T++)g+=f[T];for(let T=0;T<v.length;T++)t.update(g,i,v[T])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Hx(n,e,t){const i=new WeakMap,r=new at;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let Z=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",Z)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),m===!0&&(y=2),v===!0&&(y=3);let M=a.attributes.position.count*y,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const I=new Float32Array(M*E*4*u),P=new Xd(I,M,E,u);P.type=jn,P.needsUpdate=!0;const B=y*4;for(let _=0;_<u;_++){const S=p[_],H=g[_],A=T[_],b=M*E*4*_;for(let L=0;L<S.count;L++){const C=L*B;f===!0&&(r.fromBufferAttribute(S,L),I[b+C+0]=r.x,I[b+C+1]=r.y,I[b+C+2]=r.z,I[b+C+3]=0),m===!0&&(r.fromBufferAttribute(H,L),I[b+C+4]=r.x,I[b+C+5]=r.y,I[b+C+6]=r.z,I[b+C+7]=0),v===!0&&(r.fromBufferAttribute(A,L),I[b+C+8]=r.x,I[b+C+9]=r.y,I[b+C+10]=r.z,I[b+C+11]=A.itemSize===4?r.w:1)}}d={count:u,texture:P,size:new qe(M,E)},i.set(a,d),a.addEventListener("dispose",Z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Gx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ef extends Yt{constructor(e,t,i,r,s,o,a,l,c,h=zr){if(h!==zr&&h!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===zr&&(i=hr),i===void 0&&h===Hr&&(i=Vr),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tf=new Yt,bf=new Ef(1,1),Af=new Xd,wf=new u0,Rf=new pf,Cf=[],Pf=[],If=new Float32Array(16),Lf=new Float32Array(9),Df=new Float32Array(4);function cs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cf[r];if(s===void 0&&(s=new Float32Array(r),Cf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ua(n,e){let t=Pf[e];t===void 0&&(t=new Int32Array(e),Pf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function Yx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(qt(t,i))return;Df.set(i),n.uniformMatrix2fv(this.addr,!1,Df),Kt(t,i)}}function qx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(qt(t,i))return;Lf.set(i),n.uniformMatrix3fv(this.addr,!1,Lf),Kt(t,i)}}function Kx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(qt(t,i))return;If.set(i),n.uniformMatrix4fv(this.addr,!1,If),Kt(t,i)}}function Zx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function eM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function tM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function sM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(bf.compareFunction=Bd,s=bf):s=Tf,t.setTexture2D(e||s,r)}function oM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wf,r)}function aM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rf,r)}function lM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Af,r)}function cM(n){switch(n){case 5126:return Wx;case 35664:return $x;case 35665:return Xx;case 35666:return jx;case 35674:return Yx;case 35675:return qx;case 35676:return Kx;case 5124:case 35670:return Zx;case 35667:case 35671:return Qx;case 35668:case 35672:return Jx;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}function uM(n,e){n.uniform1fv(this.addr,e)}function hM(n,e){const t=cs(e,this.size,2);n.uniform2fv(this.addr,t)}function dM(n,e){const t=cs(e,this.size,3);n.uniform3fv(this.addr,t)}function fM(n,e){const t=cs(e,this.size,4);n.uniform4fv(this.addr,t)}function pM(n,e){const t=cs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mM(n,e){const t=cs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gM(n,e){const t=cs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _M(n,e){n.uniform1iv(this.addr,e)}function vM(n,e){n.uniform2iv(this.addr,e)}function yM(n,e){n.uniform3iv(this.addr,e)}function xM(n,e){n.uniform4iv(this.addr,e)}function MM(n,e){n.uniform1uiv(this.addr,e)}function SM(n,e){n.uniform2uiv(this.addr,e)}function EM(n,e){n.uniform3uiv(this.addr,e)}function TM(n,e){n.uniform4uiv(this.addr,e)}function bM(n,e,t){const i=this.cache,r=e.length,s=Ua(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Tf,s[o])}function AM(n,e,t){const i=this.cache,r=e.length,s=Ua(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||wf,s[o])}function wM(n,e,t){const i=this.cache,r=e.length,s=Ua(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Rf,s[o])}function RM(n,e,t){const i=this.cache,r=e.length,s=Ua(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Af,s[o])}function CM(n){switch(n){case 5126:return uM;case 35664:return hM;case 35665:return dM;case 35666:return fM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return vM;case 35668:case 35672:return yM;case 35669:case 35673:return xM;case 5125:return MM;case 36294:return SM;case 36295:return EM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return RM}}class PM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cM(t.type)}}class IM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CM(t.type)}}class LM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const vu=/(\w+)(\])?(\[|\.)?/g;function Nf(n,e){n.seq.push(e),n.map[e.id]=e}function DM(n,e,t){const i=n.name,r=i.length;for(vu.lastIndex=0;;){const s=vu.exec(i),o=vu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Nf(t,c===void 0?new PM(a,n,e):new IM(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new LM(a),Nf(t,u)),t=u}}}class Fa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);DM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Of(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const NM=37297;let OM=0;function UM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function FM(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===ha&&t===ua?i="LinearDisplayP3ToLinearSRGB":e===ua&&t===ha&&(i="LinearSRGBToLinearDisplayP3"),n){case nn:case la:return[i,"LinearTransferOETF"];case Ct:case Vc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Uf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+UM(n.getShaderSource(e),o)}else return r}function BM(n,e){const t=FM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kM(n,e){let t;switch(e){case mv:t="Linear";break;case gv:t="Reinhard";break;case _v:t="Cineon";break;case vv:t="ACESFilmic";break;case xv:t="AgX";break;case Mv:t="Neutral";break;case yv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ba=new N;function VM(){Ze.getLuminanceCoefficients(Ba);const n=Ba.x.toFixed(4),e=Ba.y.toFixed(4),t=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function HM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function GM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ao(n){return n!==""}function Ff(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yu(n){return n.replace(WM,XM)}const $M=new Map;function XM(n,e){let t=Qe[e];if(t===void 0){const i=$M.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yu(t)}const jM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(n){return n.replace(jM,YM)}function YM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Y_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function KM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Br:case kr:e="ENVMAP_TYPE_CUBE";break;case Jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case kr:e="ENVMAP_MODE_REFRACTION";break}return e}function QM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zo:e="ENVMAP_BLENDING_MULTIPLY";break;case fv:e="ENVMAP_BLENDING_MIX";break;case pv:e="ENVMAP_BLENDING_ADD";break}return e}function JM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function eS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qM(t),c=KM(t),h=ZM(t),u=QM(t),d=JM(t),f=zM(t),m=HM(s),v=r.createProgram();let p,g,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ao).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ao).join(`
`),g.length>0&&(g+=`
`)):(p=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),g=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ki?kM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,BM("linearToOutputTexel",t.outputColorSpace),VM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),o=yu(o),o=Ff(o,t),o=Bf(o,t),a=yu(a),a=Ff(a,t),a=Bf(a,t),o=kf(o),a=kf(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=T+p+o,M=T+g+a,E=Of(r,r.VERTEX_SHADER,y),I=Of(r,r.FRAGMENT_SHADER,M);r.attachShader(v,E),r.attachShader(v,I),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(S){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(v).trim(),A=r.getShaderInfoLog(E).trim(),b=r.getShaderInfoLog(I).trim();let L=!0,C=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,E,I);else{const U=Uf(r,E,"vertex"),O=Uf(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+H+`
`+U+`
`+O)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(A===""||b==="")&&(C=!1);C&&(S.diagnostics={runnable:L,programLog:H,vertexShader:{log:A,prefix:p},fragmentShader:{log:b,prefix:g}})}r.deleteShader(E),r.deleteShader(I),B=new Fa(r,v),Z=GM(r,v)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let Z;this.getAttributes=function(){return Z===void 0&&P(this),Z};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,NM)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=I,this}let tS=0;class nS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new iS(e),t.set(e,i)),i}}class iS{constructor(e){this.id=tS++,this.code=e,this.usedTimes=0}}function rS(n,e,t,i,r,s,o){const a=new Kd,l=new nS,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,S,H,A,b){const L=A.fog,C=b.geometry,U=_.isMeshStandardMaterial?A.environment:null,O=(_.isMeshStandardMaterial?t:e).get(_.envMap||U),te=O&&O.mapping===Jo?O.image.height:null,V=v[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const W=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ne=W!==void 0?W.length:0;let ae=0;C.morphAttributes.position!==void 0&&(ae=1),C.morphAttributes.normal!==void 0&&(ae=2),C.morphAttributes.color!==void 0&&(ae=3);let $,Y,oe,re;if(V){const Qt=oi[V];$=Qt.vertexShader,Y=Qt.fragmentShader}else $=_.vertexShader,Y=_.fragmentShader,l.update(_),oe=l.getVertexShaderID(_),re=l.getFragmentShaderID(_);const ue=n.getRenderTarget(),me=b.isInstancedMesh===!0,he=b.isBatchedMesh===!0,be=!!_.map,j=!!_.matcap,F=!!O,_e=!!_.aoMap,Fe=!!_.lightMap,Xe=!!_.bumpMap,Be=!!_.normalMap,st=!!_.displacementMap,Ne=!!_.emissiveMap,D=!!_.metalnessMap,R=!!_.roughnessMap,J=_.anisotropy>0,ee=_.clearcoat>0,de=_.dispersion>0,le=_.iridescence>0,De=_.sheen>0,ve=_.transmission>0,Ie=J&&!!_.anisotropyMap,it=ee&&!!_.clearcoatMap,ge=ee&&!!_.clearcoatNormalMap,Ce=ee&&!!_.clearcoatRoughnessMap,He=le&&!!_.iridescenceMap,We=le&&!!_.iridescenceThicknessMap,Le=De&&!!_.sheenColorMap,et=De&&!!_.sheenRoughnessMap,Ye=!!_.specularMap,Et=!!_.specularColorMap,X=!!_.specularIntensityMap,Ae=ve&&!!_.transmissionMap,ie=ve&&!!_.thicknessMap,ce=!!_.gradientMap,Ee=!!_.alphaMap,Me=_.alphaTest>0,Ke=!!_.alphaHash,Nt=!!_.extensions;let Zt=ki;_.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Zt=n.toneMapping);const rt={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:$,fragmentShader:Y,defines:_.defines,customVertexShaderID:oe,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:he,batchingColor:he&&b._colorsTexture!==null,instancing:me,instancingColor:me&&b.instanceColor!==null,instancingMorph:me&&b.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:nn,alphaToCoverage:!!_.alphaToCoverage,map:be,matcap:j,envMap:F,envMapMode:F&&O.mapping,envMapCubeUVHeight:te,aoMap:_e,lightMap:Fe,bumpMap:Xe,normalMap:Be,displacementMap:f&&st,emissiveMap:Ne,normalMapObjectSpace:Be&&_.normalMapType===Pv,normalMapTangentSpace:Be&&_.normalMapType===Zs,metalnessMap:D,roughnessMap:R,anisotropy:J,anisotropyMap:Ie,clearcoat:ee,clearcoatMap:it,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ce,dispersion:de,iridescence:le,iridescenceMap:He,iridescenceThicknessMap:We,sheen:De,sheenColorMap:Le,sheenRoughnessMap:et,specularMap:Ye,specularColorMap:Et,specularIntensityMap:X,transmission:ve,transmissionMap:Ae,thicknessMap:ie,gradientMap:ce,opaque:_.transparent===!1&&_.blending===Ur&&_.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Me,alphaHash:Ke,combine:_.combine,mapUv:be&&p(_.map.channel),aoMapUv:_e&&p(_.aoMap.channel),lightMapUv:Fe&&p(_.lightMap.channel),bumpMapUv:Xe&&p(_.bumpMap.channel),normalMapUv:Be&&p(_.normalMap.channel),displacementMapUv:st&&p(_.displacementMap.channel),emissiveMapUv:Ne&&p(_.emissiveMap.channel),metalnessMapUv:D&&p(_.metalnessMap.channel),roughnessMapUv:R&&p(_.roughnessMap.channel),anisotropyMapUv:Ie&&p(_.anisotropyMap.channel),clearcoatMapUv:it&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:We&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:et&&p(_.sheenRoughnessMap.channel),specularMapUv:Ye&&p(_.specularMap.channel),specularColorMapUv:Et&&p(_.specularColorMap.channel),specularIntensityMapUv:X&&p(_.specularIntensityMap.channel),transmissionMapUv:Ae&&p(_.transmissionMap.channel),thicknessMapUv:ie&&p(_.thicknessMap.channel),alphaMapUv:Ee&&p(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Be||J),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!C.attributes.uv&&(be||Ee),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:b.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ae,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:be&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===Lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===On,flipSided:_.side===dn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Nt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&_.extensions.multiDraw===!0||he)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function T(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const H in _.defines)S.push(H),S.push(_.defines[H]);return _.isRawShaderMaterial===!1&&(y(S,_),M(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function y(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),_.push(a.mask)}function E(_){const S=v[_.type];let H;if(S){const A=oi[S];H=uf.clone(A.uniforms)}else H=_.uniforms;return H}function I(_,S){let H;for(let A=0,b=h.length;A<b;A++){const L=h[A];if(L.cacheKey===S){H=L,++H.usedTimes;break}}return H===void 0&&(H=new eS(n,S,_,s),h.push(H)),H}function P(_){if(--_.usedTimes===0){const S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function B(_){l.remove(_)}function Z(){l.dispose()}return{getParameters:g,getProgramCacheKey:T,getUniforms:E,acquireProgram:I,releaseProgram:P,releaseShaderCache:B,programs:h,dispose:Z}}function sS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function oS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,d,f,m,v,p){let g=n[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:p},n[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=v,g.group=p),e++,g}function a(u,d,f,m,v,p){const g=o(u,d,f,m,v,p);f.transmission>0?i.push(g):f.transparent===!0?r.push(g):t.push(g)}function l(u,d,f,m,v,p){const g=o(u,d,f,m,v,p);f.transmission>0?i.unshift(g):f.transparent===!0?r.unshift(g):t.unshift(g)}function c(u,d){t.length>1&&t.sort(u||oS),i.length>1&&i.sort(d||zf),r.length>1&&r.sort(d||zf)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function aS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Hf,n.set(i,[o])):r>=s.length?(o=new Hf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function lS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Re};break;case"SpotLight":t={position:new N,direction:new N,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function cS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let uS=0;function hS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dS(n){const e=new lS,t=cS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new we,o=new we;function a(c){let h=0,u=0,d=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,T=0,y=0,M=0,E=0,I=0,P=0;c.sort(hS);for(let Z=0,_=c.length;Z<_;Z++){const S=c[Z],H=S.color,A=S.intensity,b=S.distance,L=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=H.r*A,u+=H.g*A,d+=H.b*A;else if(S.isLightProbe){for(let C=0;C<9;C++)i.probe[C].addScaledVector(S.sh.coefficients[C],A);P++}else if(S.isDirectionalLight){const C=e.get(S);if(C.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const U=S.shadow,O=t.get(S);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,i.directionalShadow[f]=O,i.directionalShadowMap[f]=L,i.directionalShadowMatrix[f]=S.shadow.matrix,T++}i.directional[f]=C,f++}else if(S.isSpotLight){const C=e.get(S);C.position.setFromMatrixPosition(S.matrixWorld),C.color.copy(H).multiplyScalar(A),C.distance=b,C.coneCos=Math.cos(S.angle),C.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),C.decay=S.decay,i.spot[v]=C;const U=S.shadow;if(S.map&&(i.spotLightMap[E]=S.map,E++,U.updateMatrices(S),S.castShadow&&I++),i.spotLightMatrix[v]=U.matrix,S.castShadow){const O=t.get(S);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=L,M++}v++}else if(S.isRectAreaLight){const C=e.get(S);C.color.copy(H).multiplyScalar(A),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=C,p++}else if(S.isPointLight){const C=e.get(S);if(C.color.copy(S.color).multiplyScalar(S.intensity),C.distance=S.distance,C.decay=S.decay,S.castShadow){const U=S.shadow,O=t.get(S);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,O.shadowCameraNear=U.camera.near,O.shadowCameraFar=U.camera.far,i.pointShadow[m]=O,i.pointShadowMap[m]=L,i.pointShadowMatrix[m]=S.shadow.matrix,y++}i.point[m]=C,m++}else if(S.isHemisphereLight){const C=e.get(S);C.skyColor.copy(S.color).multiplyScalar(A),C.groundColor.copy(S.groundColor).multiplyScalar(A),i.hemi[g]=C,g++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const B=i.hash;(B.directionalLength!==f||B.pointLength!==m||B.spotLength!==v||B.rectAreaLength!==p||B.hemiLength!==g||B.numDirectionalShadows!==T||B.numPointShadows!==y||B.numSpotShadows!==M||B.numSpotMaps!==E||B.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=p,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+E-I,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,B.directionalLength=f,B.pointLength=m,B.spotLength=v,B.rectAreaLength=p,B.hemiLength=g,B.numDirectionalShadows=T,B.numPointShadows=y,B.numSpotShadows=M,B.numSpotMaps=E,B.numLightProbes=P,i.version=uS++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0;const p=h.matrixWorldInverse;for(let g=0,T=c.length;g<T;g++){const y=c[g];if(y.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),u++}else if(y.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Gf(n){const e=new dS(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function fS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Gf(n),e.set(r,[a])):s>=o.length?(a=new Gf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class pS extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mS extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_S=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vS(n,e,t){let i=new hu;const r=new qe,s=new qe,o=new at,a=new pS({depthPacking:Cv}),l=new mS,c={},h=t.maxTextureSize,u={[yi]:dn,[dn]:yi,[On]:On},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:gS,fragmentShader:_S}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new kt;m.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new un(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let g=this.type;this.render=function(I,P,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;const Z=n.getRenderTarget(),_=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Bi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const A=g!==vi&&this.type===vi,b=g===vi&&this.type!==vi;for(let L=0,C=I.length;L<C;L++){const U=I[L],O=U.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const te=O.getFrameExtents();if(r.multiply(te),s.copy(O.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,O.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,O.mapSize.y=s.y)),O.map===null||A===!0||b===!0){const W=this.type!==vi?{minFilter:fn,magFilter:fn}:{};O.map!==null&&O.map.dispose(),O.map=new fr(r.x,r.y,W),O.map.texture.name=U.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const V=O.getViewportCount();for(let W=0;W<V;W++){const ne=O.getViewport(W);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),H.viewport(o),O.updateMatrices(U,W),i=O.getFrustum(),M(P,B,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===vi&&T(O,B),O.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(Z,_,S)};function T(I,P){const B=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new fr(r.x,r.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(P,null,B,d,v,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(P,null,B,f,v,null)}function y(I,P,B,Z){let _=null;const S=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(S!==void 0)_=S;else if(_=B.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const H=_.uuid,A=P.uuid;let b=c[H];b===void 0&&(b={},c[H]=b);let L=b[A];L===void 0&&(L=_.clone(),b[A]=L,P.addEventListener("dispose",E)),_=L}if(_.visible=P.visible,_.wireframe=P.wireframe,Z===vi?_.side=P.shadowSide!==null?P.shadowSide:P.side:_.side=P.shadowSide!==null?P.shadowSide:u[P.side],_.alphaMap=P.alphaMap,_.alphaTest=P.alphaTest,_.map=P.map,_.clipShadows=P.clipShadows,_.clippingPlanes=P.clippingPlanes,_.clipIntersection=P.clipIntersection,_.displacementMap=P.displacementMap,_.displacementScale=P.displacementScale,_.displacementBias=P.displacementBias,_.wireframeLinewidth=P.wireframeLinewidth,_.linewidth=P.linewidth,B.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const H=n.properties.get(_);H.light=B}return _}function M(I,P,B,Z,_){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&_===vi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const A=e.update(I),b=I.material;if(Array.isArray(b)){const L=A.groups;for(let C=0,U=L.length;C<U;C++){const O=L[C],te=b[O.materialIndex];if(te&&te.visible){const V=y(I,te,Z,_);I.onBeforeShadow(n,I,P,B,A,V,O),n.renderBufferDirect(B,null,A,V,I,O),I.onAfterShadow(n,I,P,B,A,V,O)}}}else if(b.visible){const L=y(I,b,Z,_);I.onBeforeShadow(n,I,P,B,A,L,null),n.renderBufferDirect(B,null,A,L,I,null),I.onAfterShadow(n,I,P,B,A,L,null)}}const H=I.children;for(let A=0,b=H.length;A<b;A++)M(H[A],P,B,Z,_)}function E(I){I.target.removeEventListener("dispose",E);for(const B in c){const Z=c[B],_=I.target.uuid;_ in Z&&(Z[_].dispose(),delete Z[_])}}}const yS={[Kl]:Zl,[Ql]:tc,[Jl]:nc,[Fr]:ec,[Zl]:Kl,[tc]:Ql,[nc]:Jl,[ec]:Fr};function xS(n){function e(){let X=!1;const Ae=new at;let ie=null;const ce=new at(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!X&&(n.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){X=Ee},setClear:function(Ee,Me,Ke,Nt,Zt){Zt===!0&&(Ee*=Nt,Me*=Nt,Ke*=Nt),Ae.set(Ee,Me,Ke,Nt),ce.equals(Ae)===!1&&(n.clearColor(Ee,Me,Ke,Nt),ce.copy(Ae))},reset:function(){X=!1,ie=null,ce.set(-1,0,0,0)}}}function t(){let X=!1,Ae=!1,ie=null,ce=null,Ee=null;return{setReversed:function(Me){Ae=Me},setTest:function(Me){Me?oe(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(Me){ie!==Me&&!X&&(n.depthMask(Me),ie=Me)},setFunc:function(Me){if(Ae&&(Me=yS[Me]),ce!==Me){switch(Me){case Kl:n.depthFunc(n.NEVER);break;case Zl:n.depthFunc(n.ALWAYS);break;case Ql:n.depthFunc(n.LESS);break;case Fr:n.depthFunc(n.LEQUAL);break;case Jl:n.depthFunc(n.EQUAL);break;case ec:n.depthFunc(n.GEQUAL);break;case tc:n.depthFunc(n.GREATER);break;case nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Me}},setLocked:function(Me){X=Me},setClear:function(Me){Ee!==Me&&(n.clearDepth(Me),Ee=Me)},reset:function(){X=!1,ie=null,ce=null,Ee=null}}}function i(){let X=!1,Ae=null,ie=null,ce=null,Ee=null,Me=null,Ke=null,Nt=null,Zt=null;return{setTest:function(rt){X||(rt?oe(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(rt){Ae!==rt&&!X&&(n.stencilMask(rt),Ae=rt)},setFunc:function(rt,Qt,En){(ie!==rt||ce!==Qt||Ee!==En)&&(n.stencilFunc(rt,Qt,En),ie=rt,ce=Qt,Ee=En)},setOp:function(rt,Qt,En){(Me!==rt||Ke!==Qt||Nt!==En)&&(n.stencilOp(rt,Qt,En),Me=rt,Ke=Qt,Nt=En)},setLocked:function(rt){X=rt},setClear:function(rt){Zt!==rt&&(n.clearStencil(rt),Zt=rt)},reset:function(){X=!1,Ae=null,ie=null,ce=null,Ee=null,Me=null,Ke=null,Nt=null,Zt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,m=!1,v=null,p=null,g=null,T=null,y=null,M=null,E=null,I=new Re(0,0,0),P=0,B=!1,Z=null,_=null,S=null,H=null,A=null;const b=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,C=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(U)[1]),L=C>=1):U.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),L=C>=2);let O=null,te={};const V=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),ne=new at().fromArray(V),ae=new at().fromArray(W);function $(X,Ae,ie,ce){const Ee=new Uint8Array(4),Me=n.createTexture();n.bindTexture(X,Me),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<ie;Ke++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(Ae+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return Me}const Y={};Y[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),s.setFunc(Fr),Fe(!1),Xe(yd),oe(n.CULL_FACE),F(Bi);function oe(X){c[X]!==!0&&(n.enable(X),c[X]=!0)}function re(X){c[X]!==!1&&(n.disable(X),c[X]=!1)}function ue(X,Ae){return h[X]!==Ae?(n.bindFramebuffer(X,Ae),h[X]=Ae,X===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ae),X===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function me(X,Ae){let ie=d,ce=!1;if(X){ie=u.get(Ae),ie===void 0&&(ie=[],u.set(Ae,ie));const Ee=X.textures;if(ie.length!==Ee.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Ke=Ee.length;Me<Ke;Me++)ie[Me]=n.COLOR_ATTACHMENT0+Me;ie.length=Ee.length,ce=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,ce=!0);ce&&n.drawBuffers(ie)}function he(X){return f!==X?(n.useProgram(X),f=X,!0):!1}const be={[ur]:n.FUNC_ADD,[K_]:n.FUNC_SUBTRACT,[Z_]:n.FUNC_REVERSE_SUBTRACT};be[Q_]=n.MIN,be[J_]=n.MAX;const j={[ev]:n.ZERO,[tv]:n.ONE,[nv]:n.SRC_COLOR,[Yl]:n.SRC_ALPHA,[lv]:n.SRC_ALPHA_SATURATE,[ov]:n.DST_COLOR,[rv]:n.DST_ALPHA,[iv]:n.ONE_MINUS_SRC_COLOR,[ql]:n.ONE_MINUS_SRC_ALPHA,[av]:n.ONE_MINUS_DST_COLOR,[sv]:n.ONE_MINUS_DST_ALPHA,[cv]:n.CONSTANT_COLOR,[uv]:n.ONE_MINUS_CONSTANT_COLOR,[hv]:n.CONSTANT_ALPHA,[dv]:n.ONE_MINUS_CONSTANT_ALPHA};function F(X,Ae,ie,ce,Ee,Me,Ke,Nt,Zt,rt){if(X===Bi){m===!0&&(re(n.BLEND),m=!1);return}if(m===!1&&(oe(n.BLEND),m=!0),X!==q_){if(X!==v||rt!==B){if((p!==ur||y!==ur)&&(n.blendEquation(n.FUNC_ADD),p=ur,y=ur),rt)switch(X){case Ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Md:n.blendFunc(n.ONE,n.ONE);break;case Sd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ed:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Md:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ed:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}g=null,T=null,M=null,E=null,I.set(0,0,0),P=0,v=X,B=rt}return}Ee=Ee||Ae,Me=Me||ie,Ke=Ke||ce,(Ae!==p||Ee!==y)&&(n.blendEquationSeparate(be[Ae],be[Ee]),p=Ae,y=Ee),(ie!==g||ce!==T||Me!==M||Ke!==E)&&(n.blendFuncSeparate(j[ie],j[ce],j[Me],j[Ke]),g=ie,T=ce,M=Me,E=Ke),(Nt.equals(I)===!1||Zt!==P)&&(n.blendColor(Nt.r,Nt.g,Nt.b,Zt),I.copy(Nt),P=Zt),v=X,B=!1}function _e(X,Ae){X.side===On?re(n.CULL_FACE):oe(n.CULL_FACE);let ie=X.side===dn;Ae&&(ie=!ie),Fe(ie),X.blending===Ur&&X.transparent===!1?F(Bi):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),s.setFunc(X.depthFunc),s.setTest(X.depthTest),s.setMask(X.depthWrite),r.setMask(X.colorWrite);const ce=X.stencilWrite;o.setTest(ce),ce&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),st(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(X){Z!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),Z=X)}function Xe(X){X!==X_?(oe(n.CULL_FACE),X!==_&&(X===yd?n.cullFace(n.BACK):X===j_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),_=X}function Be(X){X!==S&&(L&&n.lineWidth(X),S=X)}function st(X,Ae,ie){X?(oe(n.POLYGON_OFFSET_FILL),(H!==Ae||A!==ie)&&(n.polygonOffset(Ae,ie),H=Ae,A=ie)):re(n.POLYGON_OFFSET_FILL)}function Ne(X){X?oe(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function D(X){X===void 0&&(X=n.TEXTURE0+b-1),O!==X&&(n.activeTexture(X),O=X)}function R(X,Ae,ie){ie===void 0&&(O===null?ie=n.TEXTURE0+b-1:ie=O);let ce=te[ie];ce===void 0&&(ce={type:void 0,texture:void 0},te[ie]=ce),(ce.type!==X||ce.texture!==Ae)&&(O!==ie&&(n.activeTexture(ie),O=ie),n.bindTexture(X,Ae||Y[X]),ce.type=X,ce.texture=Ae)}function J(){const X=te[O];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function le(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function De(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(X){ne.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),ne.copy(X))}function Le(X){ae.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),ae.copy(X))}function et(X,Ae){let ie=l.get(Ae);ie===void 0&&(ie=new WeakMap,l.set(Ae,ie));let ce=ie.get(X);ce===void 0&&(ce=n.getUniformBlockIndex(Ae,X.name),ie.set(X,ce))}function Ye(X,Ae){const ce=l.get(Ae).get(X);a.get(Ae)!==ce&&(n.uniformBlockBinding(Ae,ce,X.__bindingPointIndex),a.set(Ae,ce))}function Et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},O=null,te={},h={},u=new WeakMap,d=[],f=null,m=!1,v=null,p=null,g=null,T=null,y=null,M=null,E=null,I=new Re(0,0,0),P=0,B=!1,Z=null,_=null,S=null,H=null,A=null,ne.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:oe,disable:re,bindFramebuffer:ue,drawBuffers:me,useProgram:he,setBlending:F,setMaterial:_e,setFlipSided:Fe,setCullFace:Xe,setLineWidth:Be,setPolygonOffset:st,setScissorTest:Ne,activeTexture:D,bindTexture:R,unbindTexture:J,compressedTexImage2D:ee,compressedTexImage3D:de,texImage2D:Ce,texImage3D:He,updateUBOMapping:et,uniformBlockBinding:Ye,texStorage2D:it,texStorage3D:ge,texSubImage2D:le,texSubImage3D:De,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ie,scissor:We,viewport:Le,reset:Et}}function Wf(n,e,t,i){const r=MS(i);switch(t){case Pd:return n*e;case Ld:return n*e;case Dd:return n*e*2;case ac:return n*e/r.components*r.byteLength;case lc:return n*e/r.components*r.byteLength;case Nd:return n*e*2/r.components*r.byteLength;case cc:return n*e*2/r.components*r.byteLength;case Id:return n*e*3/r.components*r.byteLength;case Un:return n*e*4/r.components*r.byteLength;case uc:return n*e*4/r.components*r.byteLength;case na:case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ra:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dc:case pc:return Math.max(n,16)*Math.max(e,8)/4;case hc:case fc:return Math.max(n,8)*Math.max(e,8)/2;case mc:case gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case oa:case Lc:case Dc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Od:case Nc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Oc:case Uc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function MS(n){switch(n){case Mi:case wd:return{byteLength:1,components:1};case js:case Rd:case Ys:return{byteLength:2,components:1};case sc:case oc:return{byteLength:2,components:4};case hr:case rc:case jn:return{byteLength:4,components:1};case Cd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function SS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,R){return f?new OffscreenCanvas(D,R):eo("canvas")}function v(D,R,J){let ee=1;const de=Ne(D);if((de.width>J||de.height>J)&&(ee=J/Math.max(de.width,de.height)),ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const le=Math.floor(ee*de.width),De=Math.floor(ee*de.height);u===void 0&&(u=m(le,De));const ve=R?m(le,De):u;return ve.width=le,ve.height=De,ve.getContext("2d").drawImage(D,0,0,le,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+le+"x"+De+")."),ve}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),D;return D}function p(D){return D.generateMipmaps&&D.minFilter!==fn&&D.minFilter!==An}function g(D){n.generateMipmap(D)}function T(D,R,J,ee,de=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let le=R;if(R===n.RED&&(J===n.FLOAT&&(le=n.R32F),J===n.HALF_FLOAT&&(le=n.R16F),J===n.UNSIGNED_BYTE&&(le=n.R8)),R===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(le=n.R8UI),J===n.UNSIGNED_SHORT&&(le=n.R16UI),J===n.UNSIGNED_INT&&(le=n.R32UI),J===n.BYTE&&(le=n.R8I),J===n.SHORT&&(le=n.R16I),J===n.INT&&(le=n.R32I)),R===n.RG&&(J===n.FLOAT&&(le=n.RG32F),J===n.HALF_FLOAT&&(le=n.RG16F),J===n.UNSIGNED_BYTE&&(le=n.RG8)),R===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(le=n.RG8UI),J===n.UNSIGNED_SHORT&&(le=n.RG16UI),J===n.UNSIGNED_INT&&(le=n.RG32UI),J===n.BYTE&&(le=n.RG8I),J===n.SHORT&&(le=n.RG16I),J===n.INT&&(le=n.RG32I)),R===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(le=n.RGB8UI),J===n.UNSIGNED_SHORT&&(le=n.RGB16UI),J===n.UNSIGNED_INT&&(le=n.RGB32UI),J===n.BYTE&&(le=n.RGB8I),J===n.SHORT&&(le=n.RGB16I),J===n.INT&&(le=n.RGB32I)),R===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(le=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(le=n.RGBA16UI),J===n.UNSIGNED_INT&&(le=n.RGBA32UI),J===n.BYTE&&(le=n.RGBA8I),J===n.SHORT&&(le=n.RGBA16I),J===n.INT&&(le=n.RGBA32I)),R===n.RGB&&J===n.UNSIGNED_INT_5_9_9_9_REV&&(le=n.RGB9_E5),R===n.RGBA){const De=de?ca:Ze.getTransfer(ee);J===n.FLOAT&&(le=n.RGBA32F),J===n.HALF_FLOAT&&(le=n.RGBA16F),J===n.UNSIGNED_BYTE&&(le=De===Lt?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)}return(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function y(D,R){let J;return D?R===null||R===hr||R===Vr?J=n.DEPTH24_STENCIL8:R===jn?J=n.DEPTH32F_STENCIL8:R===js&&(J=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===hr||R===Vr?J=n.DEPTH_COMPONENT24:R===jn?J=n.DEPTH_COMPONENT32F:R===js&&(J=n.DEPTH_COMPONENT16),J}function M(D,R){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==fn&&D.minFilter!==An?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function E(D){const R=D.target;R.removeEventListener("dispose",E),P(R),R.isVideoTexture&&h.delete(R)}function I(D){const R=D.target;R.removeEventListener("dispose",I),Z(R)}function P(D){const R=i.get(D);if(R.__webglInit===void 0)return;const J=D.source,ee=d.get(J);if(ee){const de=ee[R.__cacheKey];de.usedTimes--,de.usedTimes===0&&B(D),Object.keys(ee).length===0&&d.delete(J)}i.remove(D)}function B(D){const R=i.get(D);n.deleteTexture(R.__webglTexture);const J=D.source,ee=d.get(J);delete ee[R.__cacheKey],o.memory.textures--}function Z(D){const R=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(R.__webglFramebuffer[ee]))for(let de=0;de<R.__webglFramebuffer[ee].length;de++)n.deleteFramebuffer(R.__webglFramebuffer[ee][de]);else n.deleteFramebuffer(R.__webglFramebuffer[ee]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[ee])}else{if(Array.isArray(R.__webglFramebuffer))for(let ee=0;ee<R.__webglFramebuffer.length;ee++)n.deleteFramebuffer(R.__webglFramebuffer[ee]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ee=0;ee<R.__webglColorRenderbuffer.length;ee++)R.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[ee]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const J=D.textures;for(let ee=0,de=J.length;ee<de;ee++){const le=i.get(J[ee]);le.__webglTexture&&(n.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(J[ee])}i.remove(D)}let _=0;function S(){_=0}function H(){const D=_;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),_+=1,D}function A(D){const R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function b(D,R){const J=i.get(D);if(D.isVideoTexture&&Be(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){const ee=D.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(J,D,R);return}}t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+R)}function L(D,R){const J=i.get(D);if(D.version>0&&J.__version!==D.version){ae(J,D,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+R)}function C(D,R){const J=i.get(D);if(D.version>0&&J.__version!==D.version){ae(J,D,R);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+R)}function U(D,R){const J=i.get(D);if(D.version>0&&J.__version!==D.version){$(J,D,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+R)}const O={[Vi]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[ea]:n.MIRRORED_REPEAT},te={[fn]:n.NEAREST,[Ad]:n.NEAREST_MIPMAP_NEAREST,[Xs]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[ta]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},V={[Iv]:n.NEVER,[Fv]:n.ALWAYS,[Lv]:n.LESS,[Bd]:n.LEQUAL,[Dv]:n.EQUAL,[Uv]:n.GEQUAL,[Nv]:n.GREATER,[Ov]:n.NOTEQUAL};function W(D,R){if(R.type===jn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===An||R.magFilter===ta||R.magFilter===Xs||R.magFilter===xi||R.minFilter===An||R.minFilter===ta||R.minFilter===Xs||R.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,O[R.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,O[R.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,O[R.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,te[R.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,te[R.minFilter]),R.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,V[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===fn||R.minFilter!==Xs&&R.minFilter!==xi||R.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function ne(D,R){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",E));const ee=R.source;let de=d.get(ee);de===void 0&&(de={},d.set(ee,de));const le=A(R);if(le!==D.__cacheKey){de[le]===void 0&&(de[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,J=!0),de[le].usedTimes++;const De=de[D.__cacheKey];De!==void 0&&(de[D.__cacheKey].usedTimes--,De.usedTimes===0&&B(R)),D.__cacheKey=le,D.__webglTexture=de[le].texture}return J}function ae(D,R,J){let ee=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ee=n.TEXTURE_3D);const de=ne(D,R),le=R.source;t.bindTexture(ee,D.__webglTexture,n.TEXTURE0+J);const De=i.get(le);if(le.version!==De.__version||de===!0){t.activeTexture(n.TEXTURE0+J);const ve=Ze.getPrimaries(Ze.workingColorSpace),Ie=R.colorSpace===zi?null:Ze.getPrimaries(R.colorSpace),it=R.colorSpace===zi||ve===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ge=v(R.image,!1,r.maxTextureSize);ge=st(R,ge);const Ce=s.convert(R.format,R.colorSpace),He=s.convert(R.type);let We=T(R.internalFormat,Ce,He,R.colorSpace,R.isVideoTexture);W(ee,R);let Le;const et=R.mipmaps,Ye=R.isVideoTexture!==!0,Et=De.__version===void 0||de===!0,X=le.dataReady,Ae=M(R,ge);if(R.isDepthTexture)We=y(R.format===Hr,R.type),Et&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,We,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,We,ge.width,ge.height,0,Ce,He,null));else if(R.isDataTexture)if(et.length>0){Ye&&Et&&t.texStorage2D(n.TEXTURE_2D,Ae,We,et[0].width,et[0].height);for(let ie=0,ce=et.length;ie<ce;ie++)Le=et[ie],Ye?X&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Le.width,Le.height,Ce,He,Le.data):t.texImage2D(n.TEXTURE_2D,ie,We,Le.width,Le.height,0,Ce,He,Le.data);R.generateMipmaps=!1}else Ye?(Et&&t.texStorage2D(n.TEXTURE_2D,Ae,We,ge.width,ge.height),X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge.width,ge.height,Ce,He,ge.data)):t.texImage2D(n.TEXTURE_2D,0,We,ge.width,ge.height,0,Ce,He,ge.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ye&&Et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,We,et[0].width,et[0].height,ge.depth);for(let ie=0,ce=et.length;ie<ce;ie++)if(Le=et[ie],R.format!==Un)if(Ce!==null)if(Ye){if(X)if(R.layerUpdates.size>0){const Ee=Wf(Le.width,Le.height,R.format,R.type);for(const Me of R.layerUpdates){const Ke=Le.data.subarray(Me*Ee/Le.data.BYTES_PER_ELEMENT,(Me+1)*Ee/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Me,Le.width,Le.height,1,Ce,Ke,0,0)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Le.width,Le.height,ge.depth,Ce,Le.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,We,Le.width,Le.height,ge.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Le.width,Le.height,ge.depth,Ce,He,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,We,Le.width,Le.height,ge.depth,0,Ce,He,Le.data)}else{Ye&&Et&&t.texStorage2D(n.TEXTURE_2D,Ae,We,et[0].width,et[0].height);for(let ie=0,ce=et.length;ie<ce;ie++)Le=et[ie],R.format!==Un?Ce!==null?Ye?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,Le.width,Le.height,Ce,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,We,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?X&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Le.width,Le.height,Ce,He,Le.data):t.texImage2D(n.TEXTURE_2D,ie,We,Le.width,Le.height,0,Ce,He,Le.data)}else if(R.isDataArrayTexture)if(Ye){if(Et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,We,ge.width,ge.height,ge.depth),X)if(R.layerUpdates.size>0){const ie=Wf(ge.width,ge.height,R.format,R.type);for(const ce of R.layerUpdates){const Ee=ge.data.subarray(ce*ie/ge.data.BYTES_PER_ELEMENT,(ce+1)*ie/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,ge.width,ge.height,1,Ce,He,Ee)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ce,He,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,ge.width,ge.height,ge.depth,0,Ce,He,ge.data);else if(R.isData3DTexture)Ye?(Et&&t.texStorage3D(n.TEXTURE_3D,Ae,We,ge.width,ge.height,ge.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ce,He,ge.data)):t.texImage3D(n.TEXTURE_3D,0,We,ge.width,ge.height,ge.depth,0,Ce,He,ge.data);else if(R.isFramebufferTexture){if(Et)if(Ye)t.texStorage2D(n.TEXTURE_2D,Ae,We,ge.width,ge.height);else{let ie=ge.width,ce=ge.height;for(let Ee=0;Ee<Ae;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,We,ie,ce,0,Ce,He,null),ie>>=1,ce>>=1}}else if(et.length>0){if(Ye&&Et){const ie=Ne(et[0]);t.texStorage2D(n.TEXTURE_2D,Ae,We,ie.width,ie.height)}for(let ie=0,ce=et.length;ie<ce;ie++)Le=et[ie],Ye?X&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Ce,He,Le):t.texImage2D(n.TEXTURE_2D,ie,We,Ce,He,Le);R.generateMipmaps=!1}else if(Ye){if(Et){const ie=Ne(ge);t.texStorage2D(n.TEXTURE_2D,Ae,We,ie.width,ie.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,He,ge)}else t.texImage2D(n.TEXTURE_2D,0,We,Ce,He,ge);p(R)&&g(ee),De.__version=le.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function $(D,R,J){if(R.image.length!==6)return;const ee=ne(D,R),de=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+J);const le=i.get(de);if(de.version!==le.__version||ee===!0){t.activeTexture(n.TEXTURE0+J);const De=Ze.getPrimaries(Ze.workingColorSpace),ve=R.colorSpace===zi?null:Ze.getPrimaries(R.colorSpace),Ie=R.colorSpace===zi||De===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const it=R.isCompressedTexture||R.image[0].isCompressedTexture,ge=R.image[0]&&R.image[0].isDataTexture,Ce=[];for(let ce=0;ce<6;ce++)!it&&!ge?Ce[ce]=v(R.image[ce],!0,r.maxCubemapSize):Ce[ce]=ge?R.image[ce].image:R.image[ce],Ce[ce]=st(R,Ce[ce]);const He=Ce[0],We=s.convert(R.format,R.colorSpace),Le=s.convert(R.type),et=T(R.internalFormat,We,Le,R.colorSpace),Ye=R.isVideoTexture!==!0,Et=le.__version===void 0||ee===!0,X=de.dataReady;let Ae=M(R,He);W(n.TEXTURE_CUBE_MAP,R);let ie;if(it){Ye&&Et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,et,He.width,He.height);for(let ce=0;ce<6;ce++){ie=Ce[ce].mipmaps;for(let Ee=0;Ee<ie.length;Ee++){const Me=ie[Ee];R.format!==Un?We!==null?Ye?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,0,0,Me.width,Me.height,We,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,et,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,0,0,Me.width,Me.height,We,Le,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,et,Me.width,Me.height,0,We,Le,Me.data)}}}else{if(ie=R.mipmaps,Ye&&Et){ie.length>0&&Ae++;const ce=Ne(Ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,et,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ge){Ye?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ce[ce].width,Ce[ce].height,We,Le,Ce[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,et,Ce[ce].width,Ce[ce].height,0,We,Le,Ce[ce].data);for(let Ee=0;Ee<ie.length;Ee++){const Ke=ie[Ee].image[ce].image;Ye?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,0,0,Ke.width,Ke.height,We,Le,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,et,Ke.width,Ke.height,0,We,Le,Ke.data)}}else{Ye?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,We,Le,Ce[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,et,We,Le,Ce[ce]);for(let Ee=0;Ee<ie.length;Ee++){const Me=ie[Ee];Ye?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,0,0,We,Le,Me.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,et,We,Le,Me.image[ce])}}}p(R)&&g(n.TEXTURE_CUBE_MAP),le.__version=de.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function Y(D,R,J,ee,de,le){const De=s.convert(J.format,J.colorSpace),ve=s.convert(J.type),Ie=T(J.internalFormat,De,ve,J.colorSpace);if(!i.get(R).__hasExternalTextures){const ge=Math.max(1,R.width>>le),Ce=Math.max(1,R.height>>le);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,le,Ie,ge,Ce,R.depth,0,De,ve,null):t.texImage2D(de,le,Ie,ge,Ce,0,De,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Xe(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,de,i.get(J).__webglTexture,0,Fe(R)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,de,i.get(J).__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(D,R,J){if(n.bindRenderbuffer(n.RENDERBUFFER,D),R.depthBuffer){const ee=R.depthTexture,de=ee&&ee.isDepthTexture?ee.type:null,le=y(R.stencilBuffer,de),De=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=Fe(R);Xe(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,le,R.width,R.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,le,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,le,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,D)}else{const ee=R.textures;for(let de=0;de<ee.length;de++){const le=ee[de],De=s.convert(le.format,le.colorSpace),ve=s.convert(le.type),Ie=T(le.internalFormat,De,ve,le.colorSpace),it=Fe(R);J&&Xe(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,Ie,R.width,R.height):Xe(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,Ie,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),b(R.depthTexture,0);const ee=i.get(R.depthTexture).__webglTexture,de=Fe(R);if(R.depthTexture.format===zr)Xe(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(R.depthTexture.format===Hr)Xe(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ue(D){const R=i.get(D),J=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){const ee=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ee){const de=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ee.removeEventListener("dispose",de)};ee.addEventListener("dispose",de),R.__depthDisposeCallback=de}R.__boundDepthTexture=ee}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");re(R.__webglFramebuffer,D)}else if(J){R.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[ee]),R.__webglDepthbuffer[ee]===void 0)R.__webglDepthbuffer[ee]=n.createRenderbuffer(),oe(R.__webglDepthbuffer[ee],D,!1);else{const de=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=R.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,le)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),oe(R.__webglDepthbuffer,D,!1);else{const ee=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,de)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(D,R,J){const ee=i.get(D);R!==void 0&&Y(ee.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&ue(D)}function he(D){const R=D.texture,J=i.get(D),ee=i.get(R);D.addEventListener("dispose",I);const de=D.textures,le=D.isWebGLCubeRenderTarget===!0,De=de.length>1;if(De||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=R.version,o.memory.textures++),le){J.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[ve]=[];for(let Ie=0;Ie<R.mipmaps.length;Ie++)J.__webglFramebuffer[ve][Ie]=n.createFramebuffer()}else J.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let ve=0;ve<R.mipmaps.length;ve++)J.__webglFramebuffer[ve]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(De)for(let ve=0,Ie=de.length;ve<Ie;ve++){const it=i.get(de[ve]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&Xe(D)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ve=0;ve<de.length;ve++){const Ie=de[ve];J.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[ve]);const it=s.convert(Ie.format,Ie.colorSpace),ge=s.convert(Ie.type),Ce=T(Ie.internalFormat,it,ge,Ie.colorSpace,D.isXRRenderTarget===!0),He=Fe(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Ce,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,J.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),W(n.TEXTURE_CUBE_MAP,R);for(let ve=0;ve<6;ve++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ie=0;Ie<R.mipmaps.length;Ie++)Y(J.__webglFramebuffer[ve][Ie],D,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie);else Y(J.__webglFramebuffer[ve],D,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);p(R)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ve=0,Ie=de.length;ve<Ie;ve++){const it=de[ve],ge=i.get(it);t.bindTexture(n.TEXTURE_2D,ge.__webglTexture),W(n.TEXTURE_2D,it),Y(J.__webglFramebuffer,D,it,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),p(it)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ve=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,ee.__webglTexture),W(ve,R),R.mipmaps&&R.mipmaps.length>0)for(let Ie=0;Ie<R.mipmaps.length;Ie++)Y(J.__webglFramebuffer[Ie],D,R,n.COLOR_ATTACHMENT0,ve,Ie);else Y(J.__webglFramebuffer,D,R,n.COLOR_ATTACHMENT0,ve,0);p(R)&&g(ve),t.unbindTexture()}D.depthBuffer&&ue(D)}function be(D){const R=D.textures;for(let J=0,ee=R.length;J<ee;J++){const de=R[J];if(p(de)){const le=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,De=i.get(de).__webglTexture;t.bindTexture(le,De),g(le),t.unbindTexture()}}}const j=[],F=[];function _e(D){if(D.samples>0){if(Xe(D)===!1){const R=D.textures,J=D.width,ee=D.height;let de=n.COLOR_BUFFER_BIT;const le=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(D),ve=R.length>1;if(ve)for(let Ie=0;Ie<R.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ie=0;Ie<R.length;Ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ie]);const it=i.get(R[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,J,ee,0,0,J,ee,de,n.NEAREST),l===!0&&(j.length=0,F.length=0,j.push(n.COLOR_ATTACHMENT0+Ie),D.depthBuffer&&D.resolveDepthBuffer===!1&&(j.push(le),F.push(le),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Ie=0;Ie<R.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ie]);const it=i.get(R[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,it,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const R=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function Fe(D){return Math.min(r.maxSamples,D.samples)}function Xe(D){const R=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Be(D){const R=o.render.frame;h.get(D)!==R&&(h.set(D,R),D.update())}function st(D,R){const J=D.colorSpace,ee=D.format,de=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==nn&&J!==zi&&(Ze.getTransfer(J)===Lt?(ee!==Un||de!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),R}function Ne(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=S,this.setTexture2D=b,this.setTexture2DArray=L,this.setTexture3D=C,this.setTextureCube=U,this.rebindTextures=me,this.setupRenderTarget=he,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Xe}function ES(n,e){function t(i,r=zi){let s;const o=Ze.getTransfer(r);if(i===Mi)return n.UNSIGNED_BYTE;if(i===sc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wd)return n.BYTE;if(i===Rd)return n.SHORT;if(i===js)return n.UNSIGNED_SHORT;if(i===rc)return n.INT;if(i===hr)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===Ys)return n.HALF_FLOAT;if(i===Pd)return n.ALPHA;if(i===Id)return n.RGB;if(i===Un)return n.RGBA;if(i===Ld)return n.LUMINANCE;if(i===Dd)return n.LUMINANCE_ALPHA;if(i===zr)return n.DEPTH_COMPONENT;if(i===Hr)return n.DEPTH_STENCIL;if(i===ac)return n.RED;if(i===lc)return n.RED_INTEGER;if(i===Nd)return n.RG;if(i===cc)return n.RG_INTEGER;if(i===uc)return n.RGBA_INTEGER;if(i===na||i===ia||i===ra||i===sa)if(o===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hc||i===dc||i===fc||i===pc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mc||i===gc||i===_c)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===mc||i===gc)return o===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_c)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vc||i===yc||i===xc||i===Mc||i===Sc||i===Ec||i===Tc||i===bc||i===Ac||i===wc||i===Rc||i===Cc||i===Pc||i===Ic)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ec)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ac)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ic)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oa||i===Lc||i===Dc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===oa)return o===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Od||i===Nc||i===Oc||i===Uc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===oa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class TS extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gn extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bS={type:"move"};class xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const AS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pi({vertexShader:AS,fragmentShader:wS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new La(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CS extends dr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const v=new RS,p=t.getContextAttributes();let g=null,T=null;const y=[],M=[],E=new qe;let I=null;const P=new mn;P.layers.enable(1),P.viewport=new at;const B=new mn;B.layers.enable(2),B.viewport=new at;const Z=[P,B],_=new TS;_.layers.enable(1),_.layers.enable(2);let S=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Y=y[$];return Y===void 0&&(Y=new xu,y[$]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function($){let Y=y[$];return Y===void 0&&(Y=new xu,y[$]=Y),Y.getGripSpace()},this.getHand=function($){let Y=y[$];return Y===void 0&&(Y=new xu,y[$]=Y),Y.getHandSpace()};function A($){const Y=M.indexOf($.inputSource);if(Y===-1)return;const oe=y[Y];oe!==void 0&&(oe.update($.inputSource,$.frame,c||o),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function b(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",b),r.removeEventListener("inputsourceschange",L);for(let $=0;$<y.length;$++){const Y=M[$];Y!==null&&(M[$]=null,y[$].disconnect(Y))}S=null,H=null,v.reset(),e.setRenderTarget(g),f=null,d=null,u=null,r=null,T=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",b),r.addEventListener("inputsourceschange",L),p.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0){const Y={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new fr(f.framebufferWidth,f.framebufferHeight,{format:Un,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,oe=null,re=null;p.depth&&(re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=p.stencil?Hr:zr,oe=p.stencil?Vr:hr);const ue={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new fr(d.textureWidth,d.textureHeight,{format:Un,type:Mi,depthTexture:new Ef(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function L($){for(let Y=0;Y<$.removed.length;Y++){const oe=$.removed[Y],re=M.indexOf(oe);re>=0&&(M[re]=null,y[re].disconnect(oe))}for(let Y=0;Y<$.added.length;Y++){const oe=$.added[Y];let re=M.indexOf(oe);if(re===-1){for(let me=0;me<y.length;me++)if(me>=M.length){M.push(oe),re=me;break}else if(M[me]===null){M[me]=oe,re=me;break}if(re===-1)break}const ue=y[re];ue&&ue.connect(oe)}}const C=new N,U=new N;function O($,Y,oe){C.setFromMatrixPosition(Y.matrixWorld),U.setFromMatrixPosition(oe.matrixWorld);const re=C.distanceTo(U),ue=Y.projectionMatrix.elements,me=oe.projectionMatrix.elements,he=ue[14]/(ue[10]-1),be=ue[14]/(ue[10]+1),j=(ue[9]+1)/ue[5],F=(ue[9]-1)/ue[5],_e=(ue[8]-1)/ue[0],Fe=(me[8]+1)/me[0],Xe=he*_e,Be=he*Fe,st=re/(-_e+Fe),Ne=st*-_e;if(Y.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ne),$.translateZ(st),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ue[10]===-1)$.projectionMatrix.copy(Y.projectionMatrix),$.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const D=he+st,R=be+st,J=Xe-Ne,ee=Be+(re-Ne),de=j*be/R*D,le=F*be/R*D;$.projectionMatrix.makePerspective(J,ee,de,le,D,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function te($,Y){Y===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Y.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let Y=$.near,oe=$.far;v.texture!==null&&(v.depthNear>0&&(Y=v.depthNear),v.depthFar>0&&(oe=v.depthFar)),_.near=B.near=P.near=Y,_.far=B.far=P.far=oe,(S!==_.near||H!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,H=_.far);const re=$.parent,ue=_.cameras;te(_,re);for(let me=0;me<ue.length;me++)te(ue[me],re);ue.length===2?O(_,P,B):_.projectionMatrix.copy(P.projectionMatrix),V($,_,re)};function V($,Y,oe){oe===null?$.matrix.copy(Y.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(Y.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Y.projectionMatrix),$.projectionMatrixInverse.copy(Y.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Xr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let W=null;function ne($,Y){if(h=Y.getViewerPose(c||o),m=Y,h!==null){const oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let re=!1;oe.length!==_.cameras.length&&(_.cameras.length=0,re=!0);for(let me=0;me<oe.length;me++){const he=oe[me];let be=null;if(f!==null)be=f.getViewport(he);else{const F=u.getViewSubImage(d,he);be=F.viewport,me===0&&(e.setRenderTargetTextures(T,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(T))}let j=Z[me];j===void 0&&(j=new mn,j.layers.enable(me),j.viewport=new at,Z[me]=j),j.matrix.fromArray(he.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(he.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(be.x,be.y,be.width,be.height),me===0&&(_.matrix.copy(j.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),re===!0&&_.cameras.push(j)}const ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const me=u.getDepthInformation(oe[0]);me&&me.isValid&&me.texture&&v.init(e,me,r.renderState)}}for(let oe=0;oe<y.length;oe++){const re=M[oe],ue=y[oe];re!==null&&ue!==void 0&&ue.update(re,Y,c||o)}W&&W($,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),m=null}const ae=new mf;ae.setAnimationLoop(ne),this.setAnimationLoop=function($){W=$},this.dispose=function(){}}}const Sr=new Bt,PS=new we;function IS(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,cf(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function r(p,g,T,y,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(p,g):g.isMeshToonMaterial?(s(p,g),u(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g)):g.isMeshStandardMaterial?(s(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),v(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,T,y):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===dn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===dn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const T=e.get(g),y=T.envMap,M=T.envMapRotation;y&&(p.envMap.value=y,Sr.copy(M),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),p.envMapRotation.value.setFromMatrix4(PS.makeRotationFromEuler(Sr)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,T,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*T,p.scale.value=y*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,T){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===dn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const T=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function LS(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const M=y.program;i.uniformBlockBinding(T,M)}function c(T,y){let M=r[T.id];M===void 0&&(m(T),M=h(T),r[T.id]=M,T.addEventListener("dispose",p));const E=y.program;i.updateUBOMapping(T,E);const I=e.render.frame;s[T.id]!==I&&(d(T),s[T.id]=I)}function h(T){const y=u();T.__bindingPointIndex=y;const M=n.createBuffer(),E=T.__size,I=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,E,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=r[T.id],M=T.uniforms,E=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let I=0,P=M.length;I<P;I++){const B=Array.isArray(M[I])?M[I]:[M[I]];for(let Z=0,_=B.length;Z<_;Z++){const S=B[Z];if(f(S,I,Z,E)===!0){const H=S.__offset,A=Array.isArray(S.value)?S.value:[S.value];let b=0;for(let L=0;L<A.length;L++){const C=A[L],U=v(C);typeof C=="number"||typeof C=="boolean"?(S.__data[0]=C,n.bufferSubData(n.UNIFORM_BUFFER,H+b,S.__data)):C.isMatrix3?(S.__data[0]=C.elements[0],S.__data[1]=C.elements[1],S.__data[2]=C.elements[2],S.__data[3]=0,S.__data[4]=C.elements[3],S.__data[5]=C.elements[4],S.__data[6]=C.elements[5],S.__data[7]=0,S.__data[8]=C.elements[6],S.__data[9]=C.elements[7],S.__data[10]=C.elements[8],S.__data[11]=0):(C.toArray(S.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,y,M,E){const I=T.value,P=y+"_"+M;if(E[P]===void 0)return typeof I=="number"||typeof I=="boolean"?E[P]=I:E[P]=I.clone(),!0;{const B=E[P];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return E[P]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function m(T){const y=T.uniforms;let M=0;const E=16;for(let P=0,B=y.length;P<B;P++){const Z=Array.isArray(y[P])?y[P]:[y[P]];for(let _=0,S=Z.length;_<S;_++){const H=Z[_],A=Array.isArray(H.value)?H.value:[H.value];for(let b=0,L=A.length;b<L;b++){const C=A[b],U=v(C),O=M%E,te=O%U.boundary,V=O+te;M+=te,V!==0&&E-V<U.storage&&(M+=E-V),H.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=U.storage}}}const I=M%E;return I>0&&(M+=E-I),T.__size=M,T.__cache={},this}function v(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function p(T){const y=T.target;y.removeEventListener("dispose",p);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function g(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}class $f{constructor(e={}){const{canvas:t=t0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),m=new Int32Array(4);let v=null,p=null;const g=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=ki,this.toneMappingExposure=1;const y=this;let M=!1,E=0,I=0,P=null,B=-1,Z=null;const _=new at,S=new at;let H=null;const A=new Re(0);let b=0,L=t.width,C=t.height,U=1,O=null,te=null;const V=new at(0,0,L,C),W=new at(0,0,L,C);let ne=!1;const ae=new hu;let $=!1,Y=!1;const oe=new we,re=new we,ue=new N,me=new at,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function j(){return P===null?U:1}let F=i;function _e(w,z){return t.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cr}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Me,!1),F===null){const z="webgl2";if(F=_e(z,w),F===null)throw _e(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Fe,Xe,Be,st,Ne,D,R,J,ee,de,le,De,ve,Ie,it,ge,Ce,He,We,Le,et,Ye,Et,X;function Ae(){Fe=new Bx(F),Fe.init(),Ye=new ES(F,Fe),Xe=new Lx(F,Fe,e,Ye),Be=new xS(F),Xe.reverseDepthBuffer&&Be.buffers.depth.setReversed(!0),st=new zx(F),Ne=new sS,D=new SS(F,Fe,Be,Ne,Xe,Ye,st),R=new Nx(y),J=new Fx(y),ee=new R0(F),Et=new Px(F,ee),de=new kx(F,ee,st,Et),le=new Gx(F,de,ee,st),We=new Hx(F,Xe,D),ge=new Dx(Ne),De=new rS(y,R,J,Fe,Xe,Et,ge),ve=new IS(y,Ne),Ie=new aS,it=new fS(Fe),He=new Cx(y,R,J,Be,le,d,l),Ce=new vS(y,le,Xe),X=new LS(F,st,Xe,Be),Le=new Ix(F,Fe,st),et=new Vx(F,Fe,st),st.programs=De.programs,y.capabilities=Xe,y.extensions=Fe,y.properties=Ne,y.renderLists=Ie,y.shadowMap=Ce,y.state=Be,y.info=st}Ae();const ie=new CS(y,F);this.xr=ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(L,C,!1))},this.getSize=function(w){return w.set(L,C)},this.setSize=function(w,z,q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,C=z,t.width=Math.floor(w*U),t.height=Math.floor(z*U),q===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(L*U,C*U).floor()},this.setDrawingBufferSize=function(w,z,q){L=w,C=z,U=q,t.width=Math.floor(w*q),t.height=Math.floor(z*q),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(V)},this.setViewport=function(w,z,q,K){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,z,q,K),Be.viewport(_.copy(V).multiplyScalar(U).round())},this.getScissor=function(w){return w.copy(W)},this.setScissor=function(w,z,q,K){w.isVector4?W.set(w.x,w.y,w.z,w.w):W.set(w,z,q,K),Be.scissor(S.copy(W).multiplyScalar(U).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(w){Be.setScissorTest(ne=w)},this.setOpaqueSort=function(w){O=w},this.setTransparentSort=function(w){te=w},this.getClearColor=function(w){return w.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(w=!0,z=!0,q=!0){let K=0;if(w){let G=!1;if(P!==null){const pe=P.texture.format;G=pe===uc||pe===cc||pe===lc}if(G){const pe=P.texture.type,xe=pe===Mi||pe===hr||pe===js||pe===Vr||pe===sc||pe===oc,Pe=He.getClearColor(),Te=He.getClearAlpha(),ze=Pe.r,je=Pe.g,Oe=Pe.b;xe?(f[0]=ze,f[1]=je,f[2]=Oe,f[3]=Te,F.clearBufferuiv(F.COLOR,0,f)):(m[0]=ze,m[1]=je,m[2]=Oe,m[3]=Te,F.clearBufferiv(F.COLOR,0,m))}else K|=F.COLOR_BUFFER_BIT}z&&(K|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ie.dispose(),it.dispose(),Ne.dispose(),R.dispose(),J.dispose(),le.dispose(),Et.dispose(),X.dispose(),De.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Fs),ie.removeEventListener("sessionend",Dr),Wn.stop()};function ce(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=st.autoReset,z=Ce.enabled,q=Ce.autoUpdate,K=Ce.needsUpdate,G=Ce.type;Ae(),st.autoReset=w,Ce.enabled=z,Ce.autoUpdate=q,Ce.needsUpdate=K,Ce.type=G}function Me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ke(w){const z=w.target;z.removeEventListener("dispose",Ke),Nt(z)}function Nt(w){Zt(w),Ne.remove(w)}function Zt(w){const z=Ne.get(w).programs;z!==void 0&&(z.forEach(function(q){De.releaseProgram(q)}),w.isShaderMaterial&&De.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,q,K,G,pe){z===null&&(z=he);const xe=G.isMesh&&G.matrixWorld.determinant()<0,Pe=$e(w,z,q,K,G);Be.setMaterial(K,xe);let Te=q.index,ze=1;if(K.wireframe===!0){if(Te=de.getWireframeAttribute(q),Te===void 0)return;ze=2}const je=q.drawRange,Oe=q.attributes.position;let Rt=je.start*ze,Ot=(je.start+je.count)*ze;pe!==null&&(Rt=Math.max(Rt,pe.start*ze),Ot=Math.min(Ot,(pe.start+pe.count)*ze)),Te!==null?(Rt=Math.max(Rt,0),Ot=Math.min(Ot,Te.count)):Oe!=null&&(Rt=Math.max(Rt,0),Ot=Math.min(Ot,Oe.count));const Ht=Ot-Rt;if(Ht<0||Ht===1/0)return;Et.setup(G,K,Pe,q,Te);let Dn,Tt=Le;if(Te!==null&&(Dn=ee.get(Te),Tt=et,Tt.setIndex(Dn)),G.isMesh)K.wireframe===!0?(Be.setLineWidth(K.wireframeLinewidth*j()),Tt.setMode(F.LINES)):Tt.setMode(F.TRIANGLES);else if(G.isLine){let ke=K.linewidth;ke===void 0&&(ke=1),Be.setLineWidth(ke*j()),G.isLineSegments?Tt.setMode(F.LINES):G.isLineLoop?Tt.setMode(F.LINE_LOOP):Tt.setMode(F.LINE_STRIP)}else G.isPoints?Tt.setMode(F.POINTS):G.isSprite&&Tt.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Tt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Tt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ke=G._multiDrawStarts,on=G._multiDrawCounts,bt=G._multiDrawCount,ii=Te?ee.get(Te).bytesPerElement:1,Vs=Ne.get(K).currentProgram.getUniforms();for(let Nn=0;Nn<bt;Nn++)Vs.setValue(F,"_gl_DrawID",Nn),Tt.render(ke[Nn]/ii,on[Nn])}else if(G.isInstancedMesh)Tt.renderInstances(Rt,Ht,G.count);else if(q.isInstancedBufferGeometry){const ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,on=Math.min(q.instanceCount,ke);Tt.renderInstances(Rt,Ht,on)}else Tt.render(Rt,Ht)};function rt(w,z,q){w.transparent===!0&&w.side===On&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,k(w,z,q),w.side=yi,w.needsUpdate=!0,k(w,z,q),w.side=On):k(w,z,q)}this.compile=function(w,z,q=null){q===null&&(q=w),p=it.get(q),p.init(z),T.push(p),q.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),w!==q&&w.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const K=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){const Pe=pe[xe];rt(Pe,q,G),K.add(Pe)}else rt(pe,q,G),K.add(pe)}),T.pop(),p=null,K},this.compileAsync=function(w,z,q=null){const K=this.compile(w,z,q);return new Promise(G=>{function pe(){if(K.forEach(function(xe){Ne.get(xe).currentProgram.isReady()&&K.delete(xe)}),K.size===0){G(w);return}setTimeout(pe,10)}Fe.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Qt=null;function En(w){Qt&&Qt(w)}function Fs(){Wn.stop()}function Dr(){Wn.start()}const Wn=new mf;Wn.setAnimationLoop(En),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(w){Qt=w,ie.setAnimationLoop(w),w===null?Wn.stop():Wn.start()},ie.addEventListener("sessionstart",Fs),ie.addEventListener("sessionend",Dr),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(z),z=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,z,P),p=it.get(w,T.length),p.init(z),T.push(p),re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ae.setFromProjectionMatrix(re),Y=this.localClippingEnabled,$=ge.init(this.clippingPlanes,Y),v=Ie.get(w,g.length),v.init(),g.push(v),ie.enabled===!0&&ie.isPresenting===!0){const pe=y.xr.getDepthSensingMesh();pe!==null&&nr(pe,z,-1/0,y.sortObjects)}nr(w,z,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(O,te),be=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,be&&He.addToRenderList(v,w),this.info.render.frame++,$===!0&&ge.beginShadows();const q=p.state.shadowsArray;Ce.render(q,w,z),$===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=v.opaque,G=v.transmissive;if(p.setupLights(),z.isArrayCamera){const pe=z.cameras;if(G.length>0)for(let xe=0,Pe=pe.length;xe<Pe;xe++){const Te=pe[xe];ks(K,G,w,Te)}be&&He.render(w);for(let xe=0,Pe=pe.length;xe<Pe;xe++){const Te=pe[xe];Bs(v,w,Te,Te.viewport)}}else G.length>0&&ks(K,G,w,z),be&&He.render(w),Bs(v,w,z);P!==null&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(y,w,z),Et.resetDefaultState(),B=-1,Z=null,T.pop(),T.length>0?(p=T[T.length-1],$===!0&&ge.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function nr(w,z,q,K){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ae.intersectsSprite(w)){K&&me.setFromMatrixPosition(w.matrixWorld).applyMatrix4(re);const xe=le.update(w),Pe=w.material;Pe.visible&&v.push(w,xe,Pe,q,me.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ae.intersectsObject(w))){const xe=le.update(w),Pe=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),me.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),me.copy(xe.boundingSphere.center)),me.applyMatrix4(w.matrixWorld).applyMatrix4(re)),Array.isArray(Pe)){const Te=xe.groups;for(let ze=0,je=Te.length;ze<je;ze++){const Oe=Te[ze],Rt=Pe[Oe.materialIndex];Rt&&Rt.visible&&v.push(w,xe,Rt,q,me.z,Oe)}}else Pe.visible&&v.push(w,xe,Pe,q,me.z,null)}}const pe=w.children;for(let xe=0,Pe=pe.length;xe<Pe;xe++)nr(pe[xe],z,q,K)}function Bs(w,z,q,K){const G=w.opaque,pe=w.transmissive,xe=w.transparent;p.setupLightsView(q),$===!0&&ge.setGlobalState(y.clippingPlanes,q),K&&Be.viewport(_.copy(K)),G.length>0&&ir(G,z,q),pe.length>0&&ir(pe,z,q),xe.length>0&&ir(xe,z,q),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function ks(w,z,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new fr(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Ys:Mi,minFilter:xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const pe=p.state.transmissionRenderTarget[K.id],xe=K.viewport||_;pe.setSize(xe.z,xe.w);const Pe=y.getRenderTarget();y.setRenderTarget(pe),y.getClearColor(A),b=y.getClearAlpha(),b<1&&y.setClearColor(16777215,.5),y.clear(),be&&He.render(q);const Te=y.toneMapping;y.toneMapping=ki;const ze=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),$===!0&&ge.setGlobalState(y.clippingPlanes,K),ir(w,q,K),D.updateMultisampleRenderTarget(pe),D.updateRenderTargetMipmap(pe),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Oe=0,Rt=z.length;Oe<Rt;Oe++){const Ot=z[Oe],Ht=Ot.object,Dn=Ot.geometry,Tt=Ot.material,ke=Ot.group;if(Tt.side===On&&Ht.layers.test(K.layers)){const on=Tt.side;Tt.side=dn,Tt.needsUpdate=!0,rr(Ht,q,K,Dn,Tt,ke),Tt.side=on,Tt.needsUpdate=!0,je=!0}}je===!0&&(D.updateMultisampleRenderTarget(pe),D.updateRenderTargetMipmap(pe))}y.setRenderTarget(Pe),y.setClearColor(A,b),ze!==void 0&&(K.viewport=ze),y.toneMapping=Te}function ir(w,z,q){const K=z.isScene===!0?z.overrideMaterial:null;for(let G=0,pe=w.length;G<pe;G++){const xe=w[G],Pe=xe.object,Te=xe.geometry,ze=K===null?xe.material:K,je=xe.group;Pe.layers.test(q.layers)&&rr(Pe,z,q,Te,ze,je)}}function rr(w,z,q,K,G,pe){w.onBeforeRender(y,z,q,K,G,pe),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(y,z,q,K,w,pe),G.transparent===!0&&G.side===On&&G.forceSinglePass===!1?(G.side=dn,G.needsUpdate=!0,y.renderBufferDirect(q,z,K,G,w,pe),G.side=yi,G.needsUpdate=!0,y.renderBufferDirect(q,z,K,G,w,pe),G.side=On):y.renderBufferDirect(q,z,K,G,w,pe),w.onAfterRender(y,z,q,K,G,pe)}function k(w,z,q){z.isScene!==!0&&(z=he);const K=Ne.get(w),G=p.state.lights,pe=p.state.shadowsArray,xe=G.state.version,Pe=De.getParameters(w,G.state,pe,z,q),Te=De.getProgramCacheKey(Pe);let ze=K.programs;K.environment=w.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(w.isMeshStandardMaterial?J:R).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,ze===void 0&&(w.addEventListener("dispose",Ke),ze=new Map,K.programs=ze);let je=ze.get(Te);if(je!==void 0){if(K.currentProgram===je&&K.lightsStateVersion===xe)return Se(w,Pe),je}else Pe.uniforms=De.getUniforms(w),w.onBeforeCompile(Pe,y),je=De.acquireProgram(Pe,Te),ze.set(Te,je),K.uniforms=Pe.uniforms;const Oe=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=ge.uniform),Se(w,Pe),K.needsLights=ht(w),K.lightsStateVersion=xe,K.needsLights&&(Oe.ambientLightColor.value=G.state.ambient,Oe.lightProbe.value=G.state.probe,Oe.directionalLights.value=G.state.directional,Oe.directionalLightShadows.value=G.state.directionalShadow,Oe.spotLights.value=G.state.spot,Oe.spotLightShadows.value=G.state.spotShadow,Oe.rectAreaLights.value=G.state.rectArea,Oe.ltc_1.value=G.state.rectAreaLTC1,Oe.ltc_2.value=G.state.rectAreaLTC2,Oe.pointLights.value=G.state.point,Oe.pointLightShadows.value=G.state.pointShadow,Oe.hemisphereLights.value=G.state.hemi,Oe.directionalShadowMap.value=G.state.directionalShadowMap,Oe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Oe.spotShadowMap.value=G.state.spotShadowMap,Oe.spotLightMatrix.value=G.state.spotLightMatrix,Oe.spotLightMap.value=G.state.spotLightMap,Oe.pointShadowMap.value=G.state.pointShadowMap,Oe.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=je,K.uniformsList=null,je}function fe(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=Fa.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Se(w,z){const q=Ne.get(w);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function $e(w,z,q,K,G){z.isScene!==!0&&(z=he),D.resetTextureUnits();const pe=z.fog,xe=K.isMeshStandardMaterial?z.environment:null,Pe=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:nn,Te=(K.isMeshStandardMaterial?J:R).get(K.envMap||xe),ze=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Oe=!!q.morphAttributes.position,Rt=!!q.morphAttributes.normal,Ot=!!q.morphAttributes.color;let Ht=ki;K.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ht=y.toneMapping);const Dn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Tt=Dn!==void 0?Dn.length:0,ke=Ne.get(K),on=p.state.lights;if($===!0&&(Y===!0||w!==Z)){const $n=w===Z&&K.id===B;ge.setState(K,w,$n)}let bt=!1;K.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==on.state.version||ke.outputColorSpace!==Pe||G.isBatchedMesh&&ke.batching===!1||!G.isBatchedMesh&&ke.batching===!0||G.isBatchedMesh&&ke.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ke.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ke.instancing===!1||!G.isInstancedMesh&&ke.instancing===!0||G.isSkinnedMesh&&ke.skinning===!1||!G.isSkinnedMesh&&ke.skinning===!0||G.isInstancedMesh&&ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ke.instancingMorph===!1&&G.morphTexture!==null||ke.envMap!==Te||K.fog===!0&&ke.fog!==pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ge.numPlanes||ke.numIntersection!==ge.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==je||ke.morphTargets!==Oe||ke.morphNormals!==Rt||ke.morphColors!==Ot||ke.toneMapping!==Ht||ke.morphTargetsCount!==Tt)&&(bt=!0):(bt=!0,ke.__version=K.version);let ii=ke.currentProgram;bt===!0&&(ii=k(K,z,G));let Vs=!1,Nn=!1,id=!1;const $t=ii.getUniforms(),sr=ke.uniforms;if(Be.useProgram(ii.program)&&(Vs=!0,Nn=!0,id=!0),K.id!==B&&(B=K.id,Nn=!0),Vs||Z!==w){Xe.reverseDepthBuffer?(oe.copy(w.projectionMatrix),i0(oe),r0(oe),$t.setValue(F,"projectionMatrix",oe)):$t.setValue(F,"projectionMatrix",w.projectionMatrix),$t.setValue(F,"viewMatrix",w.matrixWorldInverse);const $n=$t.map.cameraPosition;$n!==void 0&&$n.setValue(F,ue.setFromMatrixPosition(w.matrixWorld)),Xe.logarithmicDepthBuffer&&$t.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&$t.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),Z!==w&&(Z=w,Nn=!0,id=!0)}if(G.isSkinnedMesh){$t.setOptional(F,G,"bindMatrix"),$t.setOptional(F,G,"bindMatrixInverse");const $n=G.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),$t.setValue(F,"boneTexture",$n.boneTexture,D))}G.isBatchedMesh&&($t.setOptional(F,G,"batchingTexture"),$t.setValue(F,"batchingTexture",G._matricesTexture,D),$t.setOptional(F,G,"batchingIdTexture"),$t.setValue(F,"batchingIdTexture",G._indirectTexture,D),$t.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&$t.setValue(F,"batchingColorTexture",G._colorsTexture,D));const rd=q.morphAttributes;if((rd.position!==void 0||rd.normal!==void 0||rd.color!==void 0)&&We.update(G,q,ii),(Nn||ke.receiveShadow!==G.receiveShadow)&&(ke.receiveShadow=G.receiveShadow,$t.setValue(F,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(sr.envMap.value=Te,sr.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(sr.envMapIntensity.value=z.environmentIntensity),Nn&&($t.setValue(F,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&ct(sr,id),pe&&K.fog===!0&&ve.refreshFogUniforms(sr,pe),ve.refreshMaterialUniforms(sr,K,U,C,p.state.transmissionRenderTarget[w.id]),Fa.upload(F,fe(ke),sr,D)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Fa.upload(F,fe(ke),sr,D),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&$t.setValue(F,"center",G.center),$t.setValue(F,"modelViewMatrix",G.modelViewMatrix),$t.setValue(F,"normalMatrix",G.normalMatrix),$t.setValue(F,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const $n=K.uniformsGroups;for(let sd=0,RP=$n.length;sd<RP;sd++){const S_=$n[sd];X.update(S_,ii),X.bind(S_,ii)}}return ii}function ct(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function ht(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,z,q){Ne.get(w.texture).__webglTexture=z,Ne.get(w.depthTexture).__webglTexture=q;const K=Ne.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const q=Ne.get(w);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,q=0){P=w,E=z,I=q;let K=!0,G=null,pe=!1,xe=!1;if(w){const Te=Ne.get(w);if(Te.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(F.FRAMEBUFFER,null),K=!1;else if(Te.__webglFramebuffer===void 0)D.setupRenderTarget(w);else if(Te.__hasExternalTextures)D.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Oe=w.depthTexture;if(Te.__boundDepthTexture!==Oe){if(Oe!==null&&Ne.has(Oe)&&(w.width!==Oe.image.width||w.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(w)}}const ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(xe=!0);const je=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[z])?G=je[z][q]:G=je[z],pe=!0):w.samples>0&&D.useMultisampledRTT(w)===!1?G=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?G=je[q]:G=je,_.copy(w.viewport),S.copy(w.scissor),H=w.scissorTest}else _.copy(V).multiplyScalar(U).floor(),S.copy(W).multiplyScalar(U).floor(),H=ne;if(Be.bindFramebuffer(F.FRAMEBUFFER,G)&&K&&Be.drawBuffers(w,G),Be.viewport(_),Be.scissor(S),Be.setScissorTest(H),pe){const Te=Ne.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,Te.__webglTexture,q)}else if(xe){const Te=Ne.get(w.texture),ze=z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.__webglTexture,q||0,ze)}B=-1},this.readRenderTargetPixels=function(w,z,q,K,G,pe,xe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Pe=Pe[xe]),Pe){Be.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const Te=w.texture,ze=Te.format,je=Te.type;if(!Xe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-K&&q>=0&&q<=w.height-G&&F.readPixels(z,q,K,G,Ye.convert(ze),Ye.convert(je),pe)}finally{const Te=P!==null?Ne.get(P).__webglFramebuffer:null;Be.bindFramebuffer(F.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(w,z,q,K,G,pe,xe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Pe=Pe[xe]),Pe){const Te=w.texture,ze=Te.format,je=Te.type;if(!Xe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-K&&q>=0&&q<=w.height-G){Be.bindFramebuffer(F.FRAMEBUFFER,Pe);const Oe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Oe),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(z,q,K,G,Ye.convert(ze),Ye.convert(je),0);const Rt=P!==null?Ne.get(P).__webglFramebuffer:null;Be.bindFramebuffer(F.FRAMEBUFFER,Rt);const Ot=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await n0(F,Ot,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Oe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.deleteBuffer(Oe),F.deleteSync(Ot),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,q=0){w.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);const K=Math.pow(2,-q),G=Math.floor(w.image.width*K),pe=Math.floor(w.image.height*K),xe=z!==null?z.x:0,Pe=z!==null?z.y:0;D.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,xe,Pe,G,pe),Be.unbindTexture()},this.copyTextureToTexture=function(w,z,q=null,K=null,G=0){w.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],z=arguments[2],G=arguments[3]||0,q=null);let pe,xe,Pe,Te,ze,je;q!==null?(pe=q.max.x-q.min.x,xe=q.max.y-q.min.y,Pe=q.min.x,Te=q.min.y):(pe=w.image.width,xe=w.image.height,Pe=0,Te=0),K!==null?(ze=K.x,je=K.y):(ze=0,je=0);const Oe=Ye.convert(z.format),Rt=Ye.convert(z.type);D.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const Ot=F.getParameter(F.UNPACK_ROW_LENGTH),Ht=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Dn=F.getParameter(F.UNPACK_SKIP_PIXELS),Tt=F.getParameter(F.UNPACK_SKIP_ROWS),ke=F.getParameter(F.UNPACK_SKIP_IMAGES),on=w.isCompressedTexture?w.mipmaps[G]:w.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,on.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,on.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Te),w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,ze,je,pe,xe,Oe,Rt,on.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,ze,je,on.width,on.height,Oe,on.data):F.texSubImage2D(F.TEXTURE_2D,G,ze,je,pe,xe,Oe,Rt,on),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ot),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ht),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Dn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Tt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ke),G===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(w,z,q=null,K=null,G=0){w.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,K=arguments[1]||null,w=arguments[2],z=arguments[3],G=arguments[4]||0);let pe,xe,Pe,Te,ze,je,Oe,Rt,Ot;const Ht=w.isCompressedTexture?w.mipmaps[G]:w.image;q!==null?(pe=q.max.x-q.min.x,xe=q.max.y-q.min.y,Pe=q.max.z-q.min.z,Te=q.min.x,ze=q.min.y,je=q.min.z):(pe=Ht.width,xe=Ht.height,Pe=Ht.depth,Te=0,ze=0,je=0),K!==null?(Oe=K.x,Rt=K.y,Ot=K.z):(Oe=0,Rt=0,Ot=0);const Dn=Ye.convert(z.format),Tt=Ye.convert(z.type);let ke;if(z.isData3DTexture)D.setTexture3D(z,0),ke=F.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)D.setTexture2DArray(z,0),ke=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const on=F.getParameter(F.UNPACK_ROW_LENGTH),bt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ii=F.getParameter(F.UNPACK_SKIP_PIXELS),Vs=F.getParameter(F.UNPACK_SKIP_ROWS),Nn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ht.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ht.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Te),F.pixelStorei(F.UNPACK_SKIP_ROWS,ze),F.pixelStorei(F.UNPACK_SKIP_IMAGES,je),w.isDataTexture||w.isData3DTexture?F.texSubImage3D(ke,G,Oe,Rt,Ot,pe,xe,Pe,Dn,Tt,Ht.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(ke,G,Oe,Rt,Ot,pe,xe,Pe,Dn,Ht.data):F.texSubImage3D(ke,G,Oe,Rt,Ot,pe,xe,Pe,Dn,Tt,Ht),F.pixelStorei(F.UNPACK_ROW_LENGTH,on),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ii),F.pixelStorei(F.UNPACK_SKIP_ROWS,Vs),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Nn),G===0&&z.generateMipmaps&&F.generateMipmap(ke),Be.unbindTexture()},this.initRenderTarget=function(w){Ne.get(w).__webglFramebuffer===void 0&&D.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?D.setTextureCube(w,0):w.isData3DTexture?D.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?D.setTexture2DArray(w,0):D.setTexture2D(w,0),Be.unbindTexture()},this.resetState=function(){E=0,I=0,P=null,Be.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vc?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===la?"display-p3":"srgb"}}class DS extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bt,this.environmentIntensity=1,this.environmentRotation=new Bt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class NS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zc,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _n=new N;class Mu{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Xf=new N,jf=new at,Yf=new at,OS=new N,qf=new we,ka=new N,Su=new si,Kf=new we,Eu=new ya;class Tu extends un{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Td,this.bindMatrix=new we,this.bindMatrixInverse=new we,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ei),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ka),this.boundingBox.expandByPoint(ka)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ka),this.boundingSphere.expandByPoint(ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Su.copy(this.boundingSphere),Su.applyMatrix4(r),e.ray.intersectsSphere(Su)!==!1&&(Kf.copy(r).invert(),Eu.copy(e.ray).applyMatrix4(Kf),!(this.boundingBox!==null&&Eu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Eu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Td?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;jf.fromBufferAttribute(r.attributes.skinIndex,e),Yf.fromBufferAttribute(r.attributes.skinWeight,e),Xf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Yf.getComponent(s);if(o!==0){const a=jf.getComponent(s);qf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(OS.copy(Xf).applyMatrix4(qf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Va extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zf extends Yt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=fn,h=fn,u,d){super(null,o,a,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qf=new we,US=new we;class us{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new we;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:US;Qf.multiplyMatrices(a,t[s]),Qf.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new us(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Zf(t,e,e,Un,jn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Va),this.bones.push(o),this.boneInverses.push(new we().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class bu extends ft{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hs=new we,Jf=new we,za=[],ep=new Ei,FS=new we,lo=new un,co=new si;class BS extends un{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,FS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hs),ep.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(ep)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hs),co.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(co)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(lo.geometry=this.geometry,lo.material=this.material,lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),co.copy(this.boundingSphere),co.applyMatrix4(i),e.ray.intersectsSphere(co)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,hs),Jf.multiplyMatrices(i,hs),lo.matrixWorld=Jf,lo.raycast(e,za);for(let o=0,a=za.length;o<a;o++){const l=za[o];l.instanceId=s,l.object=this,t.push(l)}za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zf(new Float32Array(r*this.count),r,this.count,ac,jn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Yi extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ha=new N,Ga=new N,tp=new we,uo=new ya,Wa=new si,Au=new N,np=new N;class ho extends dt{constructor(e=new kt,t=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ha.fromBufferAttribute(t,r-1),Ga.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ha.distanceTo(Ga);e.setAttribute("lineDistance",new rn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(r),Wa.radius+=s,e.ray.intersectsSphere(Wa)===!1)return;tp.copy(r).invert(),uo.copy(e.ray).applyMatrix4(tp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){const g=h.getX(v),T=h.getX(v+1),y=$a(this,e,uo,l,g,T);y&&t.push(y)}if(this.isLineLoop){const v=h.getX(m-1),p=h.getX(f),g=$a(this,e,uo,l,v,p);g&&t.push(g)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){const g=$a(this,e,uo,l,v,v+1);g&&t.push(g)}if(this.isLineLoop){const v=$a(this,e,uo,l,m-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $a(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Ha.fromBufferAttribute(o,r),Ga.fromBufferAttribute(o,s),t.distanceSqToSegment(Ha,Ga,Au,np)>i)return;Au.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Au);if(!(l<e.near||l>e.far))return{distance:l,point:np.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const ip=new N,rp=new N;class fo extends ho{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ip.fromBufferAttribute(t,r),rp.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ip.distanceTo(rp);e.setAttribute("lineDistance",new rn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kS extends ho{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sp extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const op=new we,wu=new ya,Xa=new si,ja=new N;class VS extends dt{constructor(e=new kt,t=new sp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(r),Xa.radius+=s,e.ray.intersectsSphere(Xa)===!1)return;op.copy(r).invert(),wu.copy(e.ray).applyMatrix4(op);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,v=f;m<v;m++){const p=c.getX(m);ja.fromBufferAttribute(u,p),ap(ja,p,l,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,v=f;m<v;m++)ja.fromBufferAttribute(u,m),ap(ja,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ap(n,e,t,i,r,s,o){const a=wu.distanceSqToPoint(n);if(a<t){const l=new N;wu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class zS{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],d=i[r+1]-h,f=(o-h)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new qe:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new N,r=[],s=[],o=[],a=new N,l=new we;for(let f=0;f<=e;f++){const m=f/e;r[f]=this.getTangentAt(m,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Jt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Jt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],f*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}const HS={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=lp(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(i&&(s=jS(n,e,s,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let m=t;m<r;m+=t)u=n[m],d=n[m+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return po(s,o,t,a,l,f,0),o}};function lp(n,e,t,i,r){let s,o;if(r===rE(n,e,t,i)>0)for(s=e;s<t;s+=i)o=hp(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=hp(s,n[s],n[s+1],o);return o&&Ya(o,o.next)&&(go(o),o=o.next),o}function Er(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ya(t,t.next)||Ft(t.prev,t,t.next)===0)){if(go(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function po(n,e,t,i,r,s,o){if(!n)return;!o&&s&&QS(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?WS(n,i,r,s):GS(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),go(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=$S(Er(n),e,t),po(n,e,t,i,r,s,2)):o===2&&XS(n,e,t,i,r,s):po(Er(n),e,t,i,r,s,1);break}}}function GS(n){const e=n.prev,t=n,i=n.next;if(Ft(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=r<s?r<o?r:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ds(r,a,s,l,o,c,m.x,m.y)&&Ft(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function WS(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Ft(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,v=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,g=Ru(f,m,e,t,i),T=Ru(v,p,e,t,i);let y=n.prevZ,M=n.nextZ;for(;y&&y.z>=g&&M&&M.z<=T;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==r&&y!==o&&ds(a,h,l,u,c,d,y.x,y.y)&&Ft(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=v&&M.y>=m&&M.y<=p&&M!==r&&M!==o&&ds(a,h,l,u,c,d,M.x,M.y)&&Ft(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==r&&y!==o&&ds(a,h,l,u,c,d,y.x,y.y)&&Ft(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=T;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=p&&M!==r&&M!==o&&ds(a,h,l,u,c,d,M.x,M.y)&&Ft(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function $S(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Ya(r,s)&&cp(r,i,i.next,s)&&mo(r,s)&&mo(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),go(i),go(i.next),i=n=s),i=i.next}while(i!==n);return Er(i)}function XS(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tE(o,a)){let l=up(o,a);o=Er(o,o.next),l=Er(l,l.next),po(o,e,t,i,r,s,0),po(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function jS(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=lp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(eE(c));for(r.sort(YS),s=0;s<r.length;s++)t=qS(r[s],t);return t}function YS(n,e){return n.x-e.x}function qS(n,e){const t=KS(n,e);if(!t)return e;const i=up(t,n);return Er(i,i.next),Er(t,t.next)}function KS(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>i&&(i=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0,u;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&ds(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),mo(t,n)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&ZS(r,t)))&&(r=t,h=u)),t=t.next;while(t!==a);return r}function ZS(n,e){return Ft(n.prev,n,e.prev)<0&&Ft(e.next,n,n.next)<0}function QS(n,e,t,i){let r=n;do r.z===0&&(r.z=Ru(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,JS(r)}function JS(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function Ru(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function eE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ds(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function tE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!nE(n,e)&&(mo(n,e)&&mo(e,n)&&iE(n,e)&&(Ft(n.prev,n,e.prev)||Ft(n,e.prev,e))||Ya(n,e)&&Ft(n.prev,n,n.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ya(n,e){return n.x===e.x&&n.y===e.y}function cp(n,e,t,i){const r=Ka(Ft(n,e,t)),s=Ka(Ft(n,e,i)),o=Ka(Ft(t,i,n)),a=Ka(Ft(t,i,e));return!!(r!==s&&o!==a||r===0&&qa(n,t,e)||s===0&&qa(n,i,e)||o===0&&qa(t,n,i)||a===0&&qa(t,e,i))}function qa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ka(n){return n>0?1:n<0?-1:0}function nE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&cp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function mo(n,e){return Ft(n.prev,n,n.next)<0?Ft(n,e,n.next)>=0&&Ft(n,n.prev,e)>=0:Ft(n,e,n.prev)<0||Ft(n,n.next,e)<0}function iE(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function up(n,e){const t=new Cu(n.i,n.x,n.y),i=new Cu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function hp(n,e,t,i){const r=new Cu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function go(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Cu(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rE(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Pu{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Pu.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];dp(e),fp(i,e);let o=e.length;t.forEach(dp);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,fp(i,t[l]);const a=HS.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function dp(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function fp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Iu extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ai extends Iu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Lu extends Rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sE extends Rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Za(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function oE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function aE(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function pp(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function mp(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class _o{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class lE extends _o{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gr,endingEnd:Gr}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wr:s=e,a=2*t-i;break;case aa:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wr:o=e,l=2*i-t;break;case aa:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(r-t),v=m*m,p=v*m,g=-d*p+2*d*v-d*m,T=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*m+1,y=(-1-f)*p+(1.5+f)*v+.5*m,M=f*p-f*v;for(let E=0;E!==a;++E)s[E]=g*o[h+E]+T*o[c+E]+y*o[l+E]+M*o[u+E];return s}}class gp extends _o{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class cE extends _o{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class li{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Za(t,this.TimeBufferType),this.values=Za(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Za(e.times,Array),values:Za(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case Fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&oE(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Fc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}li.prototype.TimeBufferType=Float32Array,li.prototype.ValueBufferType=Float32Array,li.prototype.DefaultInterpolation=Ks;class fs extends li{constructor(e,t,i){super(e,t,i)}}fs.prototype.ValueTypeName="bool",fs.prototype.ValueBufferType=Array,fs.prototype.DefaultInterpolation=qs,fs.prototype.InterpolantFactoryMethodLinear=void 0,fs.prototype.InterpolantFactoryMethodSmooth=void 0;class _p extends li{}_p.prototype.ValueTypeName="color";class Tr extends li{}Tr.prototype.ValueTypeName="number";class uE extends _o{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Ue.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ci extends li{InterpolantFactoryMethodLinear(e){return new uE(this.times,this.values,this.getValueSize(),e)}}ci.prototype.ValueTypeName="quaternion",ci.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends li{constructor(e,t,i){super(e,t,i)}}ps.prototype.ValueTypeName="string",ps.prototype.ValueBufferType=Array,ps.prototype.DefaultInterpolation=qs,ps.prototype.InterpolantFactoryMethodLinear=void 0,ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Ii extends li{}Ii.prototype.ValueTypeName="vector";class ms{constructor(e="",t=-1,i=[],r=Bc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(dE(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(li.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=aE(l);l=pp(l,1,h),c=pp(c,1,h),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Tr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=r[u];d||(r[u]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,v){if(f.length!==0){const p=[],g=[];mp(f,p,g,m),p.length!==0&&v.push(new u(d,p,g))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(const v in f){const p=[],g=[];for(let T=0;T!==d[m].morphTargets.length;++T){const y=d[m];p.push(y.time),g.push(y.morphTarget===v?1:0)}r.push(new Tr(".morphTargetInfluence["+v+"]",p,g))}l=f.length*o}else{const f=".bones["+t[u].name+"]";i(Ii,f+".position",d,"pos",r),i(ci,f+".quaternion",d,"rot",r),i(Ii,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function hE(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tr;case"vector":case"vector2":case"vector3":case"vector4":return Ii;case"color":return _p;case"quaternion":return ci;case"bool":case"boolean":return fs;case"string":return ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function dE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=hE(n.type);if(n.times===void 0){const t=[],i=[];mp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const qi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class fE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const pE=new fE;class Li{constructor(e){this.manager=e!==void 0?e:pE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Li.DEFAULT_MATERIAL_NAME="__DEFAULT";const Di={};class mE extends Error{constructor(e,t){super(e),this.response=t}}class Du extends Li{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Di[e]!==void 0){Di[e].push({onLoad:t,onProgress:i,onError:r});return}Di[e]=[],Di[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Di[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let v=0;const p=new ReadableStream({start(g){T();function T(){u.read().then(({done:y,value:M})=>{if(y)g.close();else{v+=M.byteLength;const E=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let I=0,P=h.length;I<P;I++){const B=h[I];B.onProgress&&B.onProgress(E)}g.enqueue(M),T()}},y=>{g.error(y)})}}});return new Response(p)}else throw new mE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{qi.add(e,c);const h=Di[e];delete Di[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Di[e];if(h===void 0)throw this.manager.itemError(e),c;delete Di[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class vp extends Li{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=eo("img");function l(){h(),qi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class yp extends Li{constructor(e){super(e)}load(e,t,i,r){const s=new Yt,o=new vp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Qa extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Nu=new we,xp=new N,Mp=new N;class Ou{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hu,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xp.setFromMatrixPosition(e.matrixWorld),t.position.copy(xp),Mp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mp),t.updateMatrixWorld(),Nu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gE extends Ou{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Xr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sp extends Qa{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new gE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ep=new we,vo=new N,Uu=new N;class _E extends Ou{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),vo.setFromMatrixPosition(e.matrixWorld),i.position.copy(vo),Uu.copy(i.position),Uu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Uu),i.updateMatrixWorld(),r.makeTranslation(-vo.x,-vo.y,-vo.z),Ep.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ep)}}class Fu extends Qa{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new _E}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vE extends Ou{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bu extends Qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new vE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tp extends Qa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class yE extends Li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return qi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),qi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});qi.add(e,l),s.manager.itemStart(e)}}class xE{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){Ue.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const o=this._workIndex*s;Ue.multiplyQuaternionsFlat(e,o,e,t,e,i),Ue.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[i+o]*r}}}const ku="\\[\\]\\.:\\/",ME=new RegExp("["+ku+"]","g"),Vu="[^"+ku+"]",SE="[^"+ku.replace("\\.","")+"]",EE=/((?:WC+[\/:])*)/.source.replace("WC",Vu),TE=/(WCOD+)?/.source.replace("WCOD",SE),bE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vu),AE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vu),wE=new RegExp("^"+EE+TE+bE+AE+"$"),RE=["material","materials","bones","map"];class CE{constructor(e,t,i){const r=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class lt{constructor(e,t,i){this.path=t,this.parsedPath=i||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,i):new lt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ME,"")}static parseTrackName(e){const t=wE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);RE.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=CE,lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray],lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class PE{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Gr,endingEnd:Gr};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Tv,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Av:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Bc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===bv;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===Ev){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Wr,r.endingEnd=Wr):(e?r.endingStart=this.zeroSlopeAtStart?Wr:Gr:r.endingStart=aa,t?r.endingEnd=this.zeroSlopeAtEnd?Wr:Gr:r.endingEnd=aa)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}}const IE=new Float32Array(1);class LE extends dr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=r[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;m=new xE(lt.create(i,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new gp(new Float32Array(2),new Float32Array(2),1,IE),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?ms.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Bc),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new PE(this,o,t,i);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?ms.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class bp{constructor(e,t,i,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class DE extends fo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new kt;r.setAttribute("position",new rn(t,3)),r.setAttribute("color",new rn(i,3));const s=new Yi({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Re,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cr}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cr);/*!
 * @pixiv/three-vrm v3.1.3
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */var Ja=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),ut=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),Ap=class extends dt{constructor(n){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${n}`,this.expressionName=n,this.type="VRMExpression",this.visible=!1}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.weight?1:0:this.overrideBlink==="blend"?this.weight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.weight?1:0:this.overrideLookAt==="blend"?this.weight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.weight?1:0:this.overrideMouth==="blend"?this.weight:0}addBind(n){this._binds.push(n)}applyWeight(n){var e;let t=this.isBinary?this.weight<=.5?0:1:this.weight;t*=(e=n==null?void 0:n.multiplier)!=null?e:1,this._binds.forEach(i=>i.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(n=>n.clearAppliedWeight())}};function wp(n,e,t){var i,r;const s=n.parser.json,o=(i=s.nodes)==null?void 0:i[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const a=o.mesh;if(a==null)return null;const l=(r=s.meshes)==null?void 0:r[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;const c=l.primitives.length,h=[];return t.traverse(u=>{h.length<c&&u.isMesh&&h.push(u)}),h}function Rp(n,e){return ut(this,null,function*(){const t=yield n.parser.getDependency("node",e);return wp(n,e,t)})}function Cp(n){return ut(this,null,function*(){const e=yield n.parser.getDependencies("node"),t=new Map;return e.forEach((i,r)=>{const s=wp(n,r,i);s!=null&&t.set(r,s)}),t})}var zu={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function Pp(n){return Math.max(Math.min(n,1),0)}var Ip=class E_{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(zu));return Object.entries(this._expressionMap).forEach(([i,r])=>{t.has(i)&&(e[i]=r)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(zu));return Object.entries(this._expressionMap).forEach(([i,r])=>{t.has(i)||(e[i]=r)}),e}copy(e){return this._expressions.concat().forEach(i=>{this.unregisterExpression(i)}),e._expressions.forEach(i=>{this.registerExpression(i)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new E_().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const i=this.getExpression(e);return(t=i==null?void 0:i.weight)!=null?t:null}setValue(e,t){const i=this.getExpression(e);i&&(i.weight=Pp(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let i=1;const r=t.expressionName;this.blinkExpressionNames.indexOf(r)!==-1&&(i*=e.blink),this.lookAtExpressionNames.indexOf(r)!==-1&&(i*=e.lookAt),this.mouthExpressionNames.indexOf(r)!==-1&&(i*=e.mouth),t.applyWeight({multiplier:i})})}_calculateWeightMultipliers(){let e=1,t=1,i=1;return this._expressions.forEach(r=>{e-=r.overrideBlinkAmount,t-=r.overrideLookAtAmount,i-=r.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),i=Math.max(0,i),{blink:e,lookAt:t,mouth:i}}},yo={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",MatcapColor:"matcapColor",RimColor:"rimColor",OutlineColor:"outlineColor"},NE={_Color:yo.Color,_EmissionColor:yo.EmissionColor,_ShadeColor:yo.ShadeColor,_RimColor:yo.RimColor,_OutlineColor:yo.OutlineColor},OE=new Re,Lp=class T_{constructor({material:e,type:t,targetValue:i,targetAlpha:r}){this.material=e,this.type=t,this.targetValue=i,this.targetAlpha=r??1;const s=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:s,alpha:o}}applyWeight(e){const{color:t,alpha:i}=this._state;if(t!=null){const{propertyName:r,deltaValue:s}=t,o=this.material[r];o!=null&&o.add(OE.copy(s).multiplyScalar(e))}if(i!=null){const{propertyName:r,deltaValue:s}=i;this.material[r]!=null&&(this.material[r]+=s*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:i,initialValue:r}=e,s=this.material[i];s!=null&&s.copy(r)}if(t!=null){const{propertyName:i,initialValue:r}=t;this.material[i]!=null&&(this.material[i]=r)}}_initColorBindState(){var e,t,i;const{material:r,type:s,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[s])==null?void 0:e[0])!=null?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(i=r.name)!=null?i:"(no name)"}, the type ${s} but the material or the type is not supported.`),null;const h=r[l].clone(),u=new Re(o.r-h.r,o.g-h.g,o.b-h.b);return{propertyName:l,initialValue:h,deltaValue:u}}_initAlphaBindState(){var e,t,i;const{material:r,type:s,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[s])==null?void 0:e[1])!=null?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(i=r.name)!=null?i:"(no name)"}, the type ${s} but the material or the type does not support alpha.`),null;if(l==null)return null;const c=r[l],h=o-c;return{propertyName:l,initialValue:c,deltaValue:h}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(T_._propertyNameMapMap).find(([i])=>this.material[i]===!0))==null?void 0:e[1])!=null?t:null}};Lp._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var Dp=Lp,Np=class{constructor({primitives:n,index:e,weight:t}){this.primitives=n,this.index=e,this.weight=t}applyWeight(n){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*n)})}clearAppliedWeight(){this.primitives.forEach(n=>{var e;((e=n.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(n.morphTargetInfluences[this.index]=0)})}},Op=new qe,Up=class b_{constructor({material:e,scale:t,offset:i}){var r,s;this.material=e,this.scale=t,this.offset=i;const o=(r=Object.entries(b_._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:r[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(s=e.name)!=null?s:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;const c=(l=e[a])==null?void 0:l.clone();if(!c)return null;e[a]=c;const h=c.offset.clone(),u=c.repeat.clone(),d=i.clone().sub(h),f=t.clone().sub(u);this._properties.push({name:a,initialOffset:h,deltaOffset:d,initialScale:u,deltaScale:f})}))}applyWeight(e){this._properties.forEach(t=>{const i=this.material[t.name];i!==void 0&&(i.offset.add(Op.copy(t.deltaOffset).multiplyScalar(e)),i.repeat.add(Op.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};Up._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var Fp=Up,UE=new Set(["1.0","1.0-beta"]),Bp=class A_{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return ut(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return ut(this,null,function*(){const t=yield this._v1Import(e);if(t)return t;const i=yield this._v0Import(e);return i||null})}_v1Import(e){return ut(this,null,function*(){var t,i;const r=this.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(i=r.extensions)==null?void 0:i.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!UE.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.expressions;if(!l)return null;const c=new Set(Object.values(zu)),h=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([d,f])=>{if(f!=null){if(!c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${d}" detected. Ignoring the expression`);return}h.set(d,f)}}),l.custom!=null&&Object.entries(l.custom).forEach(([d,f])=>{if(c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${d}". Ignoring the expression`);return}h.set(d,f)});const u=new Ip;return yield Promise.all(Array.from(h.entries()).map(d=>ut(this,[d],function*([f,m]){var v,p,g,T,y,M,E;const I=new Ap(f);if(e.scene.add(I),I.isBinary=(v=m.isBinary)!=null?v:!1,I.overrideBlink=(p=m.overrideBlink)!=null?p:"none",I.overrideLookAt=(g=m.overrideLookAt)!=null?g:"none",I.overrideMouth=(T=m.overrideMouth)!=null?T:"none",(y=m.morphTargetBinds)==null||y.forEach(P=>ut(this,null,function*(){var B;if(P.node===void 0||P.index===void 0)return;const Z=yield Rp(e,P.node),_=P.index;if(!Z.every(S=>Array.isArray(S.morphTargetInfluences)&&_<S.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${m.name} attempts to index morph #${_} but not found.`);return}I.addBind(new Np({primitives:Z,index:_,weight:(B=P.weight)!=null?B:1}))})),m.materialColorBinds||m.textureTransformBinds){const P=[];e.scene.traverse(B=>{const Z=B.material;Z&&P.push(Z)}),(M=m.materialColorBinds)==null||M.forEach(B=>ut(this,null,function*(){P.filter(_=>{var S;const H=(S=this.parser.associations.get(_))==null?void 0:S.materials;return B.material===H}).forEach(_=>{I.addBind(new Dp({material:_,type:B.type,targetValue:new Re().fromArray(B.targetValue),targetAlpha:B.targetValue[3]}))})})),(E=m.textureTransformBinds)==null||E.forEach(B=>ut(this,null,function*(){P.filter(_=>{var S;const H=(S=this.parser.associations.get(_))==null?void 0:S.materials;return B.material===H}).forEach(_=>{var S,H;I.addBind(new Fp({material:_,offset:new qe().fromArray((S=B.offset)!=null?S:[0,0]),scale:new qe().fromArray((H=B.scale)!=null?H:[1,1])}))})}))}u.registerExpression(I)}))),u})}_v0Import(e){return ut(this,null,function*(){var t;const i=this.parser.json,r=(t=i.extensions)==null?void 0:t.VRM;if(!r)return null;const s=r.blendShapeMaster;if(!s)return null;const o=new Ip,a=s.blendShapeGroups;if(!a)return o;const l=new Set;return yield Promise.all(a.map(c=>ut(this,null,function*(){var h;const u=c.presetName,d=u!=null&&A_.v0v1PresetNameMap[u]||null,f=d??c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${u} has duplicated entries. Ignoring the expression`);return}l.add(f);const m=new Ap(f);e.scene.add(m),m.isBinary=(h=c.isBinary)!=null?h:!1,c.binds&&c.binds.forEach(p=>ut(this,null,function*(){var g;if(p.mesh===void 0||p.index===void 0)return;const T=[];(g=i.nodes)==null||g.forEach((M,E)=>{M.mesh===p.mesh&&T.push(E)});const y=p.index;yield Promise.all(T.map(M=>ut(this,null,function*(){var E;const I=yield Rp(e,M);if(!I.every(P=>Array.isArray(P.morphTargetInfluences)&&y<P.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${y}th morph but not found.`);return}m.addBind(new Np({primitives:I,index:y,weight:.01*((E=p.weight)!=null?E:100)}))})))}));const v=c.materialValues;v&&v.length!==0&&v.forEach(p=>{if(p.materialName===void 0||p.propertyName===void 0||p.targetValue===void 0)return;const g=[];e.scene.traverse(y=>{if(y.material){const M=y.material;Array.isArray(M)?g.push(...M.filter(E=>(E.name===p.materialName||E.name===p.materialName+" (Outline)")&&g.indexOf(E)===-1)):M.name===p.materialName&&g.indexOf(M)===-1&&g.push(M)}});const T=p.propertyName;g.forEach(y=>{if(T==="_MainTex_ST"){const E=new qe(p.targetValue[0],p.targetValue[1]),I=new qe(p.targetValue[2],p.targetValue[3]);I.y=1-I.y-E.y,m.addBind(new Fp({material:y,scale:E,offset:I}));return}const M=NE[T];if(M){m.addBind(new Dp({material:y,type:M,targetValue:new Re().fromArray(p.targetValue),targetAlpha:p.targetValue[3]}));return}console.warn(T+" is not supported")})}),o.registerExpression(m)}))),o})}};Bp.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var FE=Bp,Hu=class zs{constructor(e,t){this._firstPersonOnlyLayer=zs.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=zs.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new zs(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=zs.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=zs.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(i=>{i.meshes.forEach(r=>{i.type==="firstPersonOnly"?(r.layers.set(this._firstPersonOnlyLayer),r.traverse(s=>s.layers.set(this._firstPersonOnlyLayer))):i.type==="thirdPersonOnly"?(r.layers.set(this._thirdPersonOnlyLayer),r.traverse(s=>s.layers.set(this._thirdPersonOnlyLayer))):i.type==="auto"&&this._createHeadlessModel(r)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,i,r){let s=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){const a=e[o],l=e[o+1],c=e[o+2],h=t[a],u=i[a];if(h[0]>0&&r.includes(u[0])||h[1]>0&&r.includes(u[1])||h[2]>0&&r.includes(u[2])||h[3]>0&&r.includes(u[3]))continue;const d=t[l],f=i[l];if(d[0]>0&&r.includes(f[0])||d[1]>0&&r.includes(f[1])||d[2]>0&&r.includes(f[2])||d[3]>0&&r.includes(f[3]))continue;const m=t[c],v=i[c];m[0]>0&&r.includes(v[0])||m[1]>0&&r.includes(v[1])||m[2]>0&&r.includes(v[2])||m[3]>0&&r.includes(v[3])||(e[s++]=a,e[s++]=l,e[s++]=c)}return s}_createErasedMesh(e,t){const i=new Tu(e.geometry.clone(),e.material);i.name=`${e.name}(erase)`,i.frustumCulled=e.frustumCulled,i.layers.set(this._firstPersonOnlyLayer);const r=i.geometry,s=r.getAttribute("skinIndex"),o=s instanceof bp?[]:s.array,a=[];for(let v=0;v<o.length;v+=4)a.push([o[v],o[v+1],o[v+2],o[v+3]]);const l=r.getAttribute("skinWeight"),c=l instanceof bp?[]:l.array,h=[];for(let v=0;v<c.length;v+=4)h.push([c[v],c[v+1],c[v+2],c[v+3]]);const u=r.getIndex();if(!u)throw new Error("The geometry doesn't have an index buffer");const d=Array.from(u.array),f=this._excludeTriangles(d,h,a,t),m=[];for(let v=0;v<f;v++)m[v]=d[v];return r.setIndex(m),e.onBeforeRender&&(i.onBeforeRender=e.onBeforeRender),i.bind(new us(e.skeleton.bones,e.skeleton.boneInverses),new we),i}_createHeadlessModelForSkinnedMesh(e,t){const i=[];if(t.skeleton.bones.forEach((s,o)=>{this._isEraseTarget(s)&&i.push(o)}),!i.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const r=this._createErasedMesh(t,i);e.add(r)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new gn;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(i=>i.type==="SkinnedMesh").forEach(i=>{const r=i;this._createHeadlessModelForSkinnedMesh(t,r)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};Hu.DEFAULT_FIRSTPERSON_ONLY_LAYER=9,Hu.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var kp=Hu,BE=new Set(["1.0","1.0-beta"]),kE=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(n){this.parser=n}afterRoot(n){return ut(this,null,function*(){const e=n.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");n.userData.vrmFirstPerson=yield this._import(n,e)}})}_import(n,e){return ut(this,null,function*(){if(e==null)return null;const t=yield this._v1Import(n,e);if(t)return t;const i=yield this._v0Import(n,e);return i||null})}_v1Import(n,e){return ut(this,null,function*(){var t,i;const r=this.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(i=r.extensions)==null?void 0:i.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!BE.has(a))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.firstPerson;if(!l)return null;const c=[],h=yield Cp(n);return Array.from(h.entries()).forEach(([u,d])=>{var f;const m=l.meshAnnotations?l.meshAnnotations.find(v=>v.node===u):void 0;c.push({meshes:d,type:(f=m==null?void 0:m.type)!=null?f:"both"})}),new kp(e,c)})}_v0Import(n,e){return ut(this,null,function*(){var t;const i=this.parser.json,r=(t=i.extensions)==null?void 0:t.VRM;if(!r)return null;const s=r.firstPerson;if(!s)return null;const o=[],a=yield Cp(n);return Array.from(a.entries()).forEach(([l,c])=>{const h=i.nodes[l],u=s.meshAnnotations?s.meshAnnotations.find(d=>d.mesh===h.mesh):void 0;o.push({meshes:c,type:this._convertV0FlagToV1Type(u==null?void 0:u.firstPersonFlag)})}),new kp(e,o)})}_convertV0FlagToV1Type(n){return n==="FirstPersonOnly"?"firstPersonOnly":n==="ThirdPersonOnly"?"thirdPersonOnly":n==="Auto"?"auto":"both"}},Vp=new N,zp=new N,VE=new Ue,Hp=class extends gn{constructor(n){super(),this.vrmHumanoid=n,this._boneAxesMap=new Map,Object.values(n.humanBones).forEach(e=>{const t=new DE(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(n=>{n.geometry.dispose(),n.material.dispose()})}updateMatrixWorld(n){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(Vp,VE,zp);const i=Vp.set(.1,.1,.1).divide(zp);t.matrix.copy(e.node.matrixWorld).scale(i)}),super.updateMatrixWorld(n)}},Gu=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],zE={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function Gp(n){return n.invert?n.invert():n.inverse(),n}var br=new N,Ar=new Ue,Wu=class{constructor(n){this.humanBones=n,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const n={};return Object.keys(this.humanBones).forEach(e=>{const t=e,i=this.getBoneNode(t);i&&(br.copy(i.position),Ar.copy(i.quaternion),n[t]={position:br.toArray(),rotation:Ar.toArray()})}),n}getPose(){const n={};return Object.keys(this.humanBones).forEach(e=>{const t=e,i=this.getBoneNode(t);if(!i)return;br.set(0,0,0),Ar.identity();const r=this.restPose[t];r!=null&&r.position&&br.fromArray(r.position).negate(),r!=null&&r.rotation&&Gp(Ar.fromArray(r.rotation)),br.add(i.position),Ar.premultiply(i.quaternion),n[t]={position:br.toArray(),rotation:Ar.toArray()}}),n}setPose(n){Object.entries(n).forEach(([e,t])=>{const i=e,r=this.getBoneNode(i);if(!r)return;const s=this.restPose[i];s&&(t!=null&&t.position&&(r.position.fromArray(t.position),s.position&&r.position.add(br.fromArray(s.position))),t!=null&&t.rotation&&(r.quaternion.fromArray(t.rotation),s.rotation&&r.quaternion.multiply(Ar.fromArray(s.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([n,e])=>{const t=this.getBoneNode(n);t&&(e!=null&&e.position&&t.position.fromArray(e.position),e!=null&&e.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(n){var e;return(e=this.humanBones[n])!=null?e:void 0}getBoneNode(n){var e,t;return(t=(e=this.humanBones[n])==null?void 0:e.node)!=null?t:null}},$u=new N,HE=new Ue,GE=new N,Wp=class w_ extends Wu{static _setupTransforms(e){const t=new dt;t.name="VRMHumanoidRig";const i={},r={},s={};Gu.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const h=new N,u=new Ue;c.updateWorldMatrix(!0,!1),c.matrixWorld.decompose(h,u,$u),i[a]=h,r[a]=c.quaternion.clone();const d=new Ue;(l=c.parent)==null||l.matrixWorld.decompose($u,d,$u),s[a]=d}});const o={};return Gu.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const h=i[a];let u=a,d;for(;d==null&&(u=zE[u],u!=null);)d=i[u];const f=new dt;f.name="Normalized_"+c.name,(u?(l=o[u])==null?void 0:l.node:t).add(f),f.position.copy(h),d&&f.position.sub(d),o[a]={node:f}}}),{rigBones:o,root:t,parentWorldRotations:s,boneRotations:r}}constructor(e){const{rigBones:t,root:i,parentWorldRotations:r,boneRotations:s}=w_._setupTransforms(e);super(t),this.original=e,this.root=i,this._parentWorldRotations=r,this._boneRotations=s}update(){Gu.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const i=this.getBoneNode(e),r=this._parentWorldRotations[e],s=HE.copy(r).invert(),o=this._boneRotations[e];if(t.quaternion.copy(i.quaternion).multiply(r).premultiply(s).multiply(o),e==="hips"){const a=i.getWorldPosition(GE);t.parent.updateWorldMatrix(!0,!1);const l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}},$p=class R_{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var i;this.autoUpdateHumanBones=(i=t==null?void 0:t.autoUpdateHumanBones)!=null?i:!0,this._rawHumanBones=new Wu(e),this._normalizedHumanBones=new Wp(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new Wu(e.humanBones),this._normalizedHumanBones=new Wp(this._rawHumanBones),this}clone(){return new R_(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},WE={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},$E=new Set(["1.0","1.0-beta"]),Xp={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},XE=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(n,e){this.parser=n,this.helperRoot=e==null?void 0:e.helperRoot,this.autoUpdateHumanBones=e==null?void 0:e.autoUpdateHumanBones}afterRoot(n){return ut(this,null,function*(){n.userData.vrmHumanoid=yield this._import(n)})}_import(n){return ut(this,null,function*(){const e=yield this._v1Import(n);if(e)return e;const t=yield this._v0Import(n);return t||null})}_v1Import(n){return ut(this,null,function*(){var e,t;const i=this.parser.json;if(!(((e=i.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const s=(t=i.extensions)==null?void 0:t.VRMC_vrm;if(!s)return null;const o=s.specVersion;if(!$E.has(o))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;const a=s.humanoid;if(!a)return null;const l=a.humanBones.leftThumbIntermediate!=null||a.humanBones.rightThumbIntermediate!=null,c={};a.humanBones!=null&&(yield Promise.all(Object.entries(a.humanBones).map(u=>ut(this,[u],function*([d,f]){let m=d;const v=f.node;if(l){const g=Xp[m];g!=null&&(m=g)}const p=yield this.parser.getDependency("node",v);if(p==null){console.warn(`A glTF node bound to the humanoid bone ${m} (index = ${v}) does not exist`);return}c[m]={node:p}}))));const h=new $p(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(n.scene.add(h.normalizedHumanBonesRoot),this.helperRoot){const u=new Hp(h);this.helperRoot.add(u),u.renderOrder=this.helperRoot.renderOrder}return h})}_v0Import(n){return ut(this,null,function*(){var e;const i=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!i)return null;const r=i.humanoid;if(!r)return null;const s={};r.humanBones!=null&&(yield Promise.all(r.humanBones.map(a=>ut(this,null,function*(){const l=a.bone,c=a.node;if(l==null||c==null)return;const h=yield this.parser.getDependency("node",c);if(h==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}const u=Xp[l],d=u??l;if(s[d]!=null){console.warn(`Multiple bone entries for ${d} detected (index = ${c}), ignoring duplicated entries.`);return}s[d]={node:h}}))));const o=new $p(this._ensureRequiredBonesExist(s),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(n.scene.add(o.normalizedHumanBonesRoot),this.helperRoot){const a=new Hp(o);this.helperRoot.add(a),a.renderOrder=this.helperRoot.renderOrder}return o})}_ensureRequiredBonesExist(n){const e=Object.values(WE).filter(t=>n[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return n}},jp=class extends kt{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new ft(new Float32Array(65*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ft(new Uint16Array(3*63),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,n=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,n=!0),n&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let n=0;n<64;n++){const e=n/63*this._currentTheta;this._attrPos.setXYZ(n+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<63;n++)this._attrIndex.setXYZ(n*3,0,n+1,n+2);this._attrIndex.needsUpdate=!0}},jE=class extends kt{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new N,this._currentTail=new N,this._attrPos=new ft(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ft(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,n=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),n=!0),n&&this._buildPosition()}_buildPosition(){for(let n=0;n<32;n++){const e=n/16*Math.PI;this._attrPos.setXYZ(n,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+n,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+n,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(64+n*2,32+n,32+e),this._attrIndex.setXY(128+n*2,64+n,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},el=new Ue,Yp=new Ue,xo=new N,qp=new N,Kp=Math.sqrt(2)/2,YE=new Ue(0,0,-Kp,Kp),qE=new N(0,1,0),KE=class extends gn{constructor(n){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=n;{const e=new jp;e.radius=.5;const t=new Ci({color:65280,transparent:!0,opacity:.5,side:On,depthTest:!1,depthWrite:!1});this._meshPitch=new un(e,t),this.add(this._meshPitch)}{const e=new jp;e.radius=.5;const t=new Ci({color:16711680,transparent:!0,opacity:.5,side:On,depthTest:!1,depthWrite:!1});this._meshYaw=new un(e,t),this.add(this._meshYaw)}{const e=new jE;e.radius=.1;const t=new Yi({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new fo(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(n){const e=ot.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();const t=ot.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(xo),this.vrmLookAt.getLookAtWorldQuaternion(el),el.multiply(this.vrmLookAt.getFaceFrontQuaternion(Yp)),this._meshYaw.position.copy(xo),this._meshYaw.quaternion.copy(el),this._meshPitch.position.copy(xo),this._meshPitch.quaternion.copy(el),this._meshPitch.quaternion.multiply(Yp.setFromAxisAngle(qE,e)),this._meshPitch.quaternion.multiply(YE);const{target:i,autoUpdate:r}=this.vrmLookAt;i!=null&&r&&(i.getWorldPosition(qp).sub(xo),this._lineTarget.geometry.tail.copy(qp),this._lineTarget.geometry.update(),this._lineTarget.position.copy(xo)),super.updateMatrixWorld(n)}},ZE=new N,QE=new N;function Xu(n,e){return n.matrixWorld.decompose(ZE,e,QE),e}function tl(n){return[Math.atan2(-n.z,n.x),Math.atan2(n.y,Math.sqrt(n.x*n.x+n.z*n.z))]}function Zp(n){const e=Math.round(n/2/Math.PI);return n-2*Math.PI*e}var Qp=new N(0,0,1),JE=new N,eT=new N,tT=new N,nT=new Ue,ju=new Ue,Jp=new Ue,iT=new Ue,Yu=new Bt,em=class C_{constructor(e,t){this.offsetFromHeadBone=new N,this.autoUpdate=!0,this.faceFront=new N(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new Ue)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new Bt)}getEuler(e){return e.set(ot.DEG2RAD*this._pitch,ot.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new C_(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return Xu(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(Qp)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,i]=tl(this.faceFront);return Yu.set(0,.5*Math.PI+t,i,"YZX"),e.setFromEuler(Yu).premultiply(iT.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(ju),this.getFaceFrontQuaternion(Jp),e.copy(Qp).applyQuaternion(ju).applyQuaternion(Jp).applyEuler(this.getEuler(Yu))}lookAt(e){const t=nT.copy(this._restHeadWorldQuaternion).multiply(Gp(this.getLookAtWorldQuaternion(ju))),i=this.getLookAtWorldPosition(eT),r=tT.copy(e).sub(i).applyQuaternion(t).normalize(),[s,o]=tl(this.faceFront),[a,l]=tl(r),c=Zp(a-s),h=Zp(o-l);this._yaw=ot.RAD2DEG*c,this._pitch=ot.RAD2DEG*h,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(JE)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};em.EULER_ORDER="YXZ";var rT=em,sT=new N(0,0,1),ui=new Ue,_s=new Ue,Bn=new Bt(0,0,0,"YXZ"),nl=class{constructor(n,e,t,i,r){this.humanoid=n,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=r,this.faceFront=new N(0,0,1),this._restQuatLeftEye=new Ue,this._restQuatRightEye=new Ue,this._restLeftEyeParentWorldQuat=new Ue,this._restRightEyeParentWorldQuat=new Ue;const s=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");s&&(this._restQuatLeftEye.copy(s.quaternion),Xu(s.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),Xu(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(n,e){const t=this.humanoid.getRawBoneNode("leftEye"),i=this.humanoid.getRawBoneNode("rightEye"),r=this.humanoid.getNormalizedBoneNode("leftEye"),s=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?Bn.x=-ot.DEG2RAD*this.rangeMapVerticalDown.map(-e):Bn.x=ot.DEG2RAD*this.rangeMapVerticalUp.map(e),n<0?Bn.y=-ot.DEG2RAD*this.rangeMapHorizontalInner.map(-n):Bn.y=ot.DEG2RAD*this.rangeMapHorizontalOuter.map(n),ui.setFromEuler(Bn),this._getWorldFaceFrontQuat(_s),r.quaternion.copy(_s).multiply(ui).multiply(_s.invert()),ui.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(r.quaternion).multiply(ui).premultiply(ui.invert()).multiply(this._restQuatLeftEye)),i&&(e<0?Bn.x=-ot.DEG2RAD*this.rangeMapVerticalDown.map(-e):Bn.x=ot.DEG2RAD*this.rangeMapVerticalUp.map(e),n<0?Bn.y=-ot.DEG2RAD*this.rangeMapHorizontalOuter.map(-n):Bn.y=ot.DEG2RAD*this.rangeMapHorizontalInner.map(n),ui.setFromEuler(Bn),this._getWorldFaceFrontQuat(_s),s.quaternion.copy(_s).multiply(ui).multiply(_s.invert()),ui.copy(this._restRightEyeParentWorldQuat),i.quaternion.copy(s.quaternion).multiply(ui).premultiply(ui.invert()).multiply(this._restQuatRightEye))}lookAt(n){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=ot.RAD2DEG*n.y,t=ot.RAD2DEG*n.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(n){if(this.faceFront.distanceToSquared(sT)<.01)return n.identity();const[e,t]=tl(this.faceFront);return Bn.set(0,.5*Math.PI+e,t,"YZX"),n.setFromEuler(Bn)}};nl.type="bone";var qu=class{constructor(n,e,t,i,r){this.expressions=n,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=r}applyYawPitch(n,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),n<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-n))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(n)))}lookAt(n){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=ot.RAD2DEG*n.y,t=ot.RAD2DEG*n.x;this.applyYawPitch(e,t)}};qu.type="expression";var tm=class{constructor(n,e){this.inputMaxValue=n,this.outputScale=e}map(n){return this.outputScale*Pp(n/this.inputMaxValue)}},oT=new Set(["1.0","1.0-beta"]),il=.01,aT=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(n,e){this.parser=n,this.helperRoot=e==null?void 0:e.helperRoot}afterRoot(n){return ut(this,null,function*(){const e=n.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const t=n.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");n.userData.vrmLookAt=yield this._import(n,e,t)}})}_import(n,e,t){return ut(this,null,function*(){if(e==null||t==null)return null;const i=yield this._v1Import(n,e,t);if(i)return i;const r=yield this._v0Import(n,e,t);return r||null})}_v1Import(n,e,t){return ut(this,null,function*(){var i,r,s;const o=this.parser.json;if(!(((i=o.extensionsUsed)==null?void 0:i.indexOf("VRMC_vrm"))!==-1))return null;const l=(r=o.extensions)==null?void 0:r.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!oT.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const h=l.lookAt;if(!h)return null;const u=h.type==="expression"?1:10,d=this._v1ImportRangeMap(h.rangeMapHorizontalInner,u),f=this._v1ImportRangeMap(h.rangeMapHorizontalOuter,u),m=this._v1ImportRangeMap(h.rangeMapVerticalDown,u),v=this._v1ImportRangeMap(h.rangeMapVerticalUp,u);let p;h.type==="expression"?p=new qu(t,d,f,m,v):p=new nl(e,d,f,m,v);const g=this._importLookAt(e,p);return g.offsetFromHeadBone.fromArray((s=h.offsetFromHeadBone)!=null?s:[0,.06,0]),g})}_v1ImportRangeMap(n,e){var t,i;let r=(t=n==null?void 0:n.inputMaxValue)!=null?t:90;const s=(i=n==null?void 0:n.outputScale)!=null?i:e;return r<il&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),r=il),new tm(r,s)}_v0Import(n,e,t){return ut(this,null,function*(){var i,r,s,o;const l=(i=this.parser.json.extensions)==null?void 0:i.VRM;if(!l)return null;const c=l.firstPerson;if(!c)return null;const h=c.lookAtTypeName==="BlendShape"?1:10,u=this._v0ImportDegreeMap(c.lookAtHorizontalInner,h),d=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,h),f=this._v0ImportDegreeMap(c.lookAtVerticalDown,h),m=this._v0ImportDegreeMap(c.lookAtVerticalUp,h);let v;c.lookAtTypeName==="BlendShape"?v=new qu(t,u,d,f,m):v=new nl(e,u,d,f,m);const p=this._importLookAt(e,v);return c.firstPersonBoneOffset?p.offsetFromHeadBone.set((r=c.firstPersonBoneOffset.x)!=null?r:0,(s=c.firstPersonBoneOffset.y)!=null?s:.06,-((o=c.firstPersonBoneOffset.z)!=null?o:0)):p.offsetFromHeadBone.set(0,.06,0),p.faceFront.set(0,0,-1),v instanceof nl&&v.faceFront.set(0,0,-1),p})}_v0ImportDegreeMap(n,e){var t,i;const r=n==null?void 0:n.curve;JSON.stringify(r)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let s=(t=n==null?void 0:n.xRange)!=null?t:90;const o=(i=n==null?void 0:n.yRange)!=null?i:e;return s<il&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),s=il),new tm(s,o)}_importLookAt(n,e){const t=new rT(n,e);if(this.helperRoot){const i=new KE(t);this.helperRoot.add(i),i.renderOrder=this.helperRoot.renderOrder}return t}};function lT(n,e){return typeof n!="string"||n===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(n)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(n)||/^data:.*,.*$/i.test(n)||/^blob:.*$/i.test(n)?n:e+n)}var cT=new Set(["1.0","1.0-beta"]),uT=class{get name(){return"VRMMetaLoaderPlugin"}constructor(n,e){var t,i,r;this.parser=n,this.needThumbnailImage=(t=e==null?void 0:e.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(i=e==null?void 0:e.acceptLicenseUrls)!=null?i:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(r=e==null?void 0:e.acceptV0Meta)!=null?r:!0}afterRoot(n){return ut(this,null,function*(){n.userData.vrmMeta=yield this._import(n)})}_import(n){return ut(this,null,function*(){const e=yield this._v1Import(n);if(e!=null)return e;const t=yield this._v0Import(n);return t??null})}_v1Import(n){return ut(this,null,function*(){var e,t,i;const r=this.parser.json;if(!(((e=r.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const o=(t=r.extensions)==null?void 0:t.VRMC_vrm;if(o==null)return null;const a=o.specVersion;if(!cT.has(a))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.meta;if(!l)return null;const c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let u;return this.needThumbnailImage&&l.thumbnailImage!=null&&(u=(i=yield this._extractGLTFImage(l.thumbnailImage))!=null?i:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:u,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(n){return ut(this,null,function*(){var e;const i=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!i)return null;const r=i.meta;if(!r)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let s;return this.needThumbnailImage&&r.texture!=null&&r.texture!==-1&&(s=yield this.parser.getDependency("texture",r.texture)),{metaVersion:"0",allowedUserName:r.allowedUserName,author:r.author,commercialUssageName:r.commercialUssageName,contactInformation:r.contactInformation,licenseName:r.licenseName,otherLicenseUrl:r.otherLicenseUrl,otherPermissionUrl:r.otherPermissionUrl,reference:r.reference,sexualUssageName:r.sexualUssageName,texture:s??void 0,title:r.title,version:r.version,violentUssageName:r.violentUssageName}})}_extractGLTFImage(n){return ut(this,null,function*(){var e;const i=(e=this.parser.json.images)==null?void 0:e[n];if(i==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${n}] of glTF as a thumbnail but the image doesn't exist`),null;let r=i.uri;if(i.bufferView!=null){const o=yield this.parser.getDependency("bufferView",i.bufferView),a=new Blob([o],{type:i.mimeType});r=URL.createObjectURL(a)}return r==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${n}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new vp().loadAsync(lT(r,this.parser.options.path)).catch(o=>(console.error(o),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},hT=class{constructor(n){this.scene=n.scene,this.meta=n.meta,this.humanoid=n.humanoid,this.expressionManager=n.expressionManager,this.firstPerson=n.firstPerson,this.lookAt=n.lookAt}update(n){this.humanoid.update(),this.lookAt&&this.lookAt.update(n),this.expressionManager&&this.expressionManager.update()}},dT=class extends hT{constructor(n){super(n),this.materials=n.materials,this.springBoneManager=n.springBoneManager,this.nodeConstraintManager=n.nodeConstraintManager}update(n){super.update(n),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(n),this.materials&&this.materials.forEach(e=>{e.update&&e.update(n)})}},fT=Object.defineProperty,nm=Object.getOwnPropertySymbols,pT=Object.prototype.hasOwnProperty,mT=Object.prototype.propertyIsEnumerable,im=(n,e,t)=>e in n?fT(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,rm=(n,e)=>{for(var t in e||(e={}))pT.call(e,t)&&im(n,t,e[t]);if(nm)for(var t of nm(e))mT.call(e,t)&&im(n,t,e[t]);return n},wr=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),gT={"":3e3,srgb:3001};function _T(n,e){parseInt(cr,10)>=152?n.colorSpace=e:n.encoding=gT[e]}var vT=class{get pending(){return Promise.all(this._pendings)}constructor(n,e){this._parser=n,this._materialParams=e,this._pendings=[]}assignPrimitive(n,e){e!=null&&(this._materialParams[n]=e)}assignColor(n,e,t){e!=null&&(this._materialParams[n]=new Re().fromArray(e),t&&this._materialParams[n].convertSRGBToLinear())}assignTexture(n,e,t){return wr(this,null,function*(){const i=wr(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,n,e),t&&_T(this._materialParams[n],"srgb"))});return this._pendings.push(i),i})}assignTextureByIndex(n,e,t){return wr(this,null,function*(){return this.assignTexture(n,e!=null?{index:e}:void 0,t)})}},yT=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,xT=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, 1.0 );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,MT={None:"none",Normal:"normal",LitShadeRate:"litShadeRate",UV:"uv"},sm={None:"none",WorldCoordinates:"worldCoordinates",ScreenCoordinates:"screenCoordinates"},ST={3e3:"",3001:"srgb"};function Ku(n){return parseInt(cr,10)>=152?n.colorSpace:ST[n.encoding]}var ET=class extends Pi{constructor(n={}){var e;super({vertexShader:yT,fragmentShader:xT}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=Zs,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=MT.None,this._outlineWidthMode=sm.None,this._isOutline=!1,n.transparentWithZWrite&&(n.depthWrite=!0),delete n.transparentWithZWrite,n.fog=!0,n.lights=!0,n.clipping=!0,this.uniforms=uf.merge([ye.common,ye.normalmap,ye.emissivemap,ye.fog,ye.lights,{litFactor:{value:new Re(1,1,1)},mapUvTransform:{value:new Ve},colorAlpha:{value:1},normalMapUvTransform:{value:new Ve},shadeColorFactor:{value:new Re(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new Ve},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new Ve},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new Re(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new Ve},parametricRimColorFactor:{value:new Re(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new Ve},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new Re(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new Ve},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new Ve},outlineWidthFactor:{value:0},outlineColorFactor:{value:new Re(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new Ve},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=n.uniforms)!=null?e:{}]),this.setValues(n),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,i])=>`${t}:${i}`),this.matcapTexture?`matcapTextureColorSpace:${Ku(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${Ku(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${Ku(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{const i=parseInt(cr,10),r=Object.entries(rm(rm({},this._generateDefines()),this.defines)).filter(([s,o])=>!!o).map(([s,o])=>`#define ${s} ${o}`).join(`
`)+`
`;t.vertexShader=r+t.vertexShader,t.fragmentShader=r+t.fragmentShader,i<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(n){this.uniforms.litFactor.value=n}get map(){return this.uniforms.map.value}set map(n){this.uniforms.map.value=n}get normalMap(){return this.uniforms.normalMap.value}set normalMap(n){this.uniforms.normalMap.value=n}get normalScale(){return this.uniforms.normalScale.value}set normalScale(n){this.uniforms.normalScale.value=n}get emissive(){return this.uniforms.emissive.value}set emissive(n){this.uniforms.emissive.value=n}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(n){this.uniforms.emissiveIntensity.value=n}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(n){this.uniforms.emissiveMap.value=n}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(n){this.uniforms.shadeColorFactor.value=n}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(n){this.uniforms.shadeMultiplyTexture.value=n}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(n){this.uniforms.shadingShiftFactor.value=n}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(n){this.uniforms.shadingShiftTexture.value=n}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(n){this.uniforms.shadingShiftTextureScale.value=n}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(n){this.uniforms.shadingToonyFactor.value=n}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(n){this.uniforms.giEqualizationFactor.value=n}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(n){this.uniforms.matcapFactor.value=n}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(n){this.uniforms.matcapTexture.value=n}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(n){this.uniforms.parametricRimColorFactor.value=n}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(n){this.uniforms.rimMultiplyTexture.value=n}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(n){this.uniforms.rimLightingMixFactor.value=n}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(n){this.uniforms.parametricRimFresnelPowerFactor.value=n}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(n){this.uniforms.parametricRimLiftFactor.value=n}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(n){this.uniforms.outlineWidthMultiplyTexture.value=n}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(n){this.uniforms.outlineWidthFactor.value=n}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(n){this.uniforms.outlineColorFactor.value=n}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(n){this.uniforms.outlineLightingMixFactor.value=n}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(n){this.uniforms.uvAnimationMaskTexture.value=n}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(n){this.uniforms.uvAnimationScrollXOffset.value=n}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(n){this.uniforms.uvAnimationScrollYOffset.value=n}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(n){this.uniforms.uvAnimationRotationPhase.value=n}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(n){this._ignoreVertexColor=n,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(n){this._v0CompatShade=n,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(n){this._debugMode=n,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(n){this._outlineWidthMode=n,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(n){this._isOutline=n,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(n){this._uploadUniformsWorkaround(),this._updateUVAnimation(n)}copy(n){return super.copy(n),this.map=n.map,this.normalMap=n.normalMap,this.emissiveMap=n.emissiveMap,this.shadeMultiplyTexture=n.shadeMultiplyTexture,this.shadingShiftTexture=n.shadingShiftTexture,this.matcapTexture=n.matcapTexture,this.rimMultiplyTexture=n.rimMultiplyTexture,this.outlineWidthMultiplyTexture=n.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=n.uvAnimationMaskTexture,this.normalMapType=n.normalMapType,this.uvAnimationScrollXSpeedFactor=n.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=n.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=n.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=n.ignoreVertexColor,this.v0CompatShade=n.v0CompatShade,this.debugMode=n.debugMode,this.outlineWidthMode=n.outlineWidthMode,this.isOutline=n.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(n){this.uniforms.uvAnimationScrollXOffset.value+=n*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=n*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=n*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){const n=parseInt(cr,10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:n,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===sm.ScreenCoordinates}}_updateTextureMatrix(n,e){n.value&&(n.value.matrixAutoUpdate&&n.value.updateMatrix(),e.value.copy(n.value.matrix))}},TT=new Set(["1.0","1.0-beta"]),om=class Ol{get name(){return Ol.EXTENSION_NAME}constructor(e,t={}){var i,r,s,o;this.parser=e,this.materialType=(i=t.materialType)!=null?i:ET,this.renderOrderOffset=(r=t.renderOrderOffset)!=null?r:0,this.v0CompatShade=(s=t.v0CompatShade)!=null?s:!1,this.debugMode=(o=t.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return wr(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return wr(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){const i=this._getMToonExtension(e);return i?this._extendMaterialParams(i,t):null}loadMesh(e){return wr(this,null,function*(){var t;const i=this.parser,s=(t=i.json.meshes)==null?void 0:t[e];if(s==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const o=s.primitives,a=yield i.loadMesh(e);if(o.length===1){const l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{const l=a;for(let c=0;c<o.length;c++){const h=l.children[c],u=o[c].material;u!=null&&this._setupPrimitive(h,u)}}return a})}_removeUnlitExtensionIfMToonExists(){const i=this.parser.json.materials;i==null||i.map((r,s)=>{var o;this._getMToonExtension(s)&&((o=r.extensions)!=null&&o.KHR_materials_unlit)&&delete r.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,i;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(i=o.extensions)==null?void 0:i[Ol.EXTENSION_NAME];if(a==null)return;const l=a.specVersion;if(!TT.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${Ol.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){return wr(this,null,function*(){var i;delete t.metalness,delete t.roughness;const r=new vT(this.parser,t);r.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),r.assignColor("shadeColorFactor",e.shadeColorFactor),r.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),r.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),r.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),r.assignPrimitive("shadingShiftTextureScale",(i=e.shadingShiftTexture)==null?void 0:i.scale),r.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),r.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),r.assignColor("matcapFactor",e.matcapFactor),r.assignTexture("matcapTexture",e.matcapTexture,!0),r.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),r.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),r.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),r.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),r.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),r.assignPrimitive("outlineWidthMode",e.outlineWidthMode),r.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),r.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),r.assignColor("outlineColorFactor",e.outlineColorFactor),r.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),r.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),r.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),r.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),r.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),r.assignPrimitive("v0CompatShade",this.v0CompatShade),r.assignPrimitive("debugMode",this.debugMode),yield r.pending})}_setupPrimitive(e,t){const i=this._getMToonExtension(t);if(i){const r=this._parseRenderOrder(i);e.renderOrder=r+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){const t=e.material;if(!(t instanceof Rn)||!this._shouldGenerateOutline(t))return;e.material=[t];const i=t.clone();i.name+=" (Outline)",i.isOutline=!0,i.side=dn,e.material.push(i);const r=e.geometry,s=r.index?r.index.count:r.attributes.position.count/3;r.addGroup(0,s,0),r.addGroup(0,s,1)}_addToMaterialSet(e){const t=e.material,i=new Set;Array.isArray(t)?t.forEach(r=>i.add(r)):i.add(t);for(const r of i)this._mToonMaterialSet.add(r)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};om.EXTENSION_NAME="VRMC_materials_mtoon";var bT=om,AT=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),am=class od{get name(){return od.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return AT(this,null,function*(){const i=this._getHDREmissiveMultiplierExtension(e);if(i==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const r=i.emissiveMultiplier;t.emissiveIntensity=r})}_getHDREmissiveMultiplierExtension(e){var t,i;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(i=o.extensions)==null?void 0:i[od.EXTENSION_NAME];if(a!=null)return a}};am.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var wT=am,RT=Object.defineProperty,CT=Object.defineProperties,PT=Object.getOwnPropertyDescriptors,lm=Object.getOwnPropertySymbols,IT=Object.prototype.hasOwnProperty,LT=Object.prototype.propertyIsEnumerable,cm=(n,e,t)=>e in n?RT(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,hi=(n,e)=>{for(var t in e||(e={}))IT.call(e,t)&&cm(n,t,e[t]);if(lm)for(var t of lm(e))LT.call(e,t)&&cm(n,t,e[t]);return n},um=(n,e)=>CT(n,PT(e)),DT=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())});function vs(n){return Math.pow(n,2.2)}var NT=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(n){var e;this.parser=n,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return DT(this,null,function*(){var n;const e=this.parser.json,t=(n=e.extensions)==null?void 0:n.VRM,i=t==null?void 0:t.materialProperties;i&&(this._populateRenderQueueMap(i),i.forEach((r,s)=>{var o,a;const l=(o=e.materials)==null?void 0:o[s];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${s}] of glTF but the material doesn't exist`);return}if(r.shader==="VRM/MToon"){const c=this._parseV0MToonProperties(r,l);e.materials[s]=c}else if((a=r.shader)!=null&&a.startsWith("VRM/Unlit")){const c=this._parseV0UnlitProperties(r,l);e.materials[s]=c}else r.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${r.shader}`)}))})}_parseV0MToonProperties(n,e){var t,i,r,s,o,a,l,c,h,u,d,f,m,v,p,g,T,y,M,E,I,P,B,Z,_,S,H,A,b,L,C,U,O,te,V,W,ne,ae,$,Y,oe,re,ue,me,he,be,j,F,_e,Fe,Xe,Be,st,Ne,D;const R=(i=(t=n.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?i:!1,ee=((r=n.floatProperties)==null?void 0:r._ZWrite)===1&&R,de=this._v0ParseRenderQueue(n),le=(o=(s=n.keywordMap)==null?void 0:s._ALPHATEST_ON)!=null?o:!1,De=R?"BLEND":le?"MASK":"OPAQUE",ve=le?(l=(a=n.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,it=((h=(c=n.floatProperties)==null?void 0:c._CullMode)!=null?h:2)===0,ge=this._portTextureTransform(n),Ce=((d=(u=n.vectorProperties)==null?void 0:u._Color)!=null?d:[1,1,1,1]).map((pe,xe)=>xe===3?pe:vs(pe)),He=(f=n.textureProperties)==null?void 0:f._MainTex,We=He!=null?{index:He,extensions:hi({},ge)}:void 0,Le=(v=(m=n.floatProperties)==null?void 0:m._BumpScale)!=null?v:1,et=(p=n.textureProperties)==null?void 0:p._BumpMap,Ye=et!=null?{index:et,scale:Le,extensions:hi({},ge)}:void 0,Et=((T=(g=n.vectorProperties)==null?void 0:g._EmissionColor)!=null?T:[0,0,0,1]).map(vs),X=(y=n.textureProperties)==null?void 0:y._EmissionMap,Ae=X!=null?{index:X,extensions:hi({},ge)}:void 0,ie=((E=(M=n.vectorProperties)==null?void 0:M._ShadeColor)!=null?E:[.97,.81,.86,1]).map(vs),ce=(I=n.textureProperties)==null?void 0:I._ShadeTexture,Ee=ce!=null?{index:ce,extensions:hi({},ge)}:void 0;let Me=(B=(P=n.floatProperties)==null?void 0:P._ShadeShift)!=null?B:0,Ke=(_=(Z=n.floatProperties)==null?void 0:Z._ShadeToony)!=null?_:.9;Ke=ot.lerp(Ke,1,.5+.5*Me),Me=-Me-(1-Ke);const Nt=(H=(S=n.floatProperties)==null?void 0:S._IndirectLightIntensity)!=null?H:.1,Zt=Nt?1-Nt:void 0,rt=(A=n.textureProperties)==null?void 0:A._SphereAdd,Qt=rt!=null?[1,1,1]:void 0,En=rt!=null?{index:rt}:void 0,Fs=(L=(b=n.floatProperties)==null?void 0:b._RimLightingMix)!=null?L:0,Dr=(C=n.textureProperties)==null?void 0:C._RimTexture,Wn=Dr!=null?{index:Dr,extensions:hi({},ge)}:void 0,nr=((O=(U=n.vectorProperties)==null?void 0:U._RimColor)!=null?O:[0,0,0,1]).map(vs),Bs=(V=(te=n.floatProperties)==null?void 0:te._RimFresnelPower)!=null?V:1,ks=(ne=(W=n.floatProperties)==null?void 0:W._RimLift)!=null?ne:0,ir=["none","worldCoordinates","screenCoordinates"][($=(ae=n.floatProperties)==null?void 0:ae._OutlineWidthMode)!=null?$:0];let rr=(oe=(Y=n.floatProperties)==null?void 0:Y._OutlineWidth)!=null?oe:0;rr=.01*rr;const k=(re=n.textureProperties)==null?void 0:re._OutlineWidthTexture,fe=k!=null?{index:k,extensions:hi({},ge)}:void 0,Se=((me=(ue=n.vectorProperties)==null?void 0:ue._OutlineColor)!=null?me:[0,0,0]).map(vs),ct=((be=(he=n.floatProperties)==null?void 0:he._OutlineColorMode)!=null?be:0)===1?(F=(j=n.floatProperties)==null?void 0:j._OutlineLightingMix)!=null?F:1:0,ht=(_e=n.textureProperties)==null?void 0:_e._UvAnimMaskTexture,w=ht!=null?{index:ht,extensions:hi({},ge)}:void 0,z=(Xe=(Fe=n.floatProperties)==null?void 0:Fe._UvAnimScrollX)!=null?Xe:0;let q=(st=(Be=n.floatProperties)==null?void 0:Be._UvAnimScrollY)!=null?st:0;q!=null&&(q=-q);const K=(D=(Ne=n.floatProperties)==null?void 0:Ne._UvAnimRotation)!=null?D:0,G={specVersion:"1.0",transparentWithZWrite:ee,renderQueueOffsetNumber:de,shadeColorFactor:ie,shadeMultiplyTexture:Ee,shadingShiftFactor:Me,shadingToonyFactor:Ke,giEqualizationFactor:Zt,matcapFactor:Qt,matcapTexture:En,rimLightingMixFactor:Fs,rimMultiplyTexture:Wn,parametricRimColorFactor:nr,parametricRimFresnelPowerFactor:Bs,parametricRimLiftFactor:ks,outlineWidthMode:ir,outlineWidthFactor:rr,outlineWidthMultiplyTexture:fe,outlineColorFactor:Se,outlineLightingMixFactor:ct,uvAnimationMaskTexture:w,uvAnimationScrollXSpeedFactor:z,uvAnimationScrollYSpeedFactor:q,uvAnimationRotationSpeedFactor:K};return um(hi({},e),{pbrMetallicRoughness:{baseColorFactor:Ce,baseColorTexture:We},normalTexture:Ye,emissiveTexture:Ae,emissiveFactor:Et,alphaMode:De,alphaCutoff:ve,doubleSided:it,extensions:{VRMC_materials_mtoon:G}})}_parseV0UnlitProperties(n,e){var t,i,r,s,o;const a=n.shader==="VRM/UnlitTransparentZWrite",l=n.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(n),h=n.shader==="VRM/UnlitCutout",u=l?"BLEND":h?"MASK":"OPAQUE",d=h?(i=(t=n.floatProperties)==null?void 0:t._Cutoff)!=null?i:.5:void 0,f=this._portTextureTransform(n),m=((s=(r=n.vectorProperties)==null?void 0:r._Color)!=null?s:[1,1,1,1]).map(vs),v=(o=n.textureProperties)==null?void 0:o._MainTex,p=v!=null?{index:v,extensions:hi({},f)}:void 0,g={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:m,shadeMultiplyTexture:p};return um(hi({},e),{pbrMetallicRoughness:{baseColorFactor:m,baseColorTexture:p},alphaMode:u,alphaCutoff:d,extensions:{VRMC_materials_mtoon:g}})}_portTextureTransform(n){var e,t,i,r,s;const o=(e=n.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};const a=[(t=o==null?void 0:o[0])!=null?t:0,(i=o==null?void 0:o[1])!=null?i:0],l=[(r=o==null?void 0:o[2])!=null?r:1,(s=o==null?void 0:o[3])!=null?s:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(n){var e,t;const i=n.shader==="VRM/UnlitTransparentZWrite",r=((e=n.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||i,s=((t=n.floatProperties)==null?void 0:t._ZWrite)===1||i;let o=0;if(r){const a=n.renderQueue;a!=null&&(s?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(n){const e=new Set,t=new Set;n.forEach(i=>{var r,s;const o=i.shader==="VRM/UnlitTransparentZWrite",a=((r=i.keywordMap)==null?void 0:r._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||o,l=((s=i.floatProperties)==null?void 0:s._ZWrite)===1||o;if(a){const c=i.renderQueue;c!=null&&(l?t.add(c):e.add(c))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((i,r)=>{const s=Math.min(Math.max(r-e.size+1,-9),0);this._renderQueueMapTransparent.set(i,s)}),Array.from(t).sort().forEach((i,r)=>{const s=Math.min(Math.max(r,0),9);this._renderQueueMapTransparentZWrite.set(i,s)})}},hm=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),Ki=new N,Zu=class extends gn{constructor(n){super(),this._attrPosition=new ft(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(Bv);const e=new kt;e.setAttribute("position",this._attrPosition);const t=new Yi({color:16711935,depthTest:!1,depthWrite:!1});this._line=new ho(e,t),this.add(this._line),this.constraint=n}updateMatrixWorld(n){Ki.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,Ki.x,Ki.y,Ki.z),this.constraint.source&&Ki.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,Ki.x,Ki.y,Ki.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(n)}};function dm(n,e){return e.set(n.elements[12],n.elements[13],n.elements[14])}var OT=new N,UT=new N;function FT(n,e){return n.decompose(OT,e,UT),e}function rl(n){return n.invert?n.invert():n.inverse(),n}var Qu=class{constructor(n,e){this.destination=n,this.source=e,this.weight=1}},BT=new N,kT=new N,VT=new N,zT=new Ue,HT=new Ue,GT=new Ue,WT=class extends Qu{get aimAxis(){return this._aimAxis}set aimAxis(n){this._aimAxis=n,this._v3AimAxis.set(n==="PositiveX"?1:n==="NegativeX"?-1:0,n==="PositiveY"?1:n==="NegativeY"?-1:0,n==="PositiveZ"?1:n==="NegativeZ"?-1:0)}get dependencies(){const n=new Set([this.source]);return this.destination.parent&&n.add(this.destination.parent),n}constructor(n,e){super(n,e),this._aimAxis="PositiveX",this._v3AimAxis=new N(1,0,0),this._dstRestQuat=new Ue}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const n=zT.identity(),e=HT.identity();this.destination.parent&&(FT(this.destination.parent.matrixWorld,n),rl(e.copy(n)));const t=BT.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(n),i=dm(this.source.matrixWorld,kT).sub(dm(this.destination.matrixWorld,VT)).normalize(),r=GT.setFromUnitVectors(t,i).premultiply(e).multiply(n).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(r,this.weight)}};function $T(n,e){const t=[n];let i=n.parent;for(;i!==null;)t.unshift(i),i=i.parent;t.forEach(r=>{e(r)})}var XT=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(n){this._constraints.add(n);let e=this._objectConstraintsMap.get(n.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(n.destination,e)),e.add(n)}deleteConstraint(n){this._constraints.delete(n),this._objectConstraintsMap.get(n.destination).delete(n)}setInitState(){const n=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,n,e,i=>i.setInitState())}update(){const n=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,n,e,i=>i.update())}_processConstraint(n,e,t,i){if(t.has(n))return;if(e.has(n))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(n);const r=n.dependencies;for(const s of r)$T(s,o=>{const a=this._objectConstraintsMap.get(o);if(a)for(const l of a)this._processConstraint(l,e,t,i)});i(n),t.add(n)}},jT=new Ue,YT=new Ue,qT=class extends Qu{get dependencies(){return new Set([this.source])}constructor(n,e){super(n,e),this._dstRestQuat=new Ue,this._invSrcRestQuat=new Ue}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),rl(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const n=jT.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=YT.copy(this._dstRestQuat).multiply(n);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},KT=new N,ZT=new Ue,QT=new Ue,JT=class extends Qu{get rollAxis(){return this._rollAxis}set rollAxis(n){this._rollAxis=n,this._v3RollAxis.set(n==="X"?1:0,n==="Y"?1:0,n==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(n,e){super(n,e),this._rollAxis="X",this._v3RollAxis=new N(1,0,0),this._dstRestQuat=new Ue,this._invDstRestQuat=new Ue,this._invSrcRestQuatMulDstRestQuat=new Ue}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),rl(this._invDstRestQuat.copy(this._dstRestQuat)),rl(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const n=ZT.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=KT.copy(this._v3RollAxis).applyQuaternion(n),i=QT.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(n);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}},eb=new Set(["1.0","1.0-beta"]),fm=class Go{get name(){return Go.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t==null?void 0:t.helperRoot}afterRoot(e){return hm(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return hm(this,null,function*(){var t;const i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf(Go.EXTENSION_NAME))!==-1))return null;const s=new XT,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;const h=i.nodes[l],u=(c=h==null?void 0:h.extensions)==null?void 0:c[Go.EXTENSION_NAME];if(u==null)return;const d=u.specVersion;if(!eb.has(d)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${Go.EXTENSION_NAME} specVersion "${d}"`);return}const f=u.constraint;if(f.roll!=null){const m=this._importRollConstraint(a,o,f.roll);s.addConstraint(m)}else if(f.aim!=null){const m=this._importAimConstraint(a,o,f.aim);s.addConstraint(m)}else if(f.rotation!=null){const m=this._importRotationConstraint(a,o,f.rotation);s.addConstraint(m)}}),e.scene.updateMatrixWorld(),s.setInitState(),s})}_importRollConstraint(e,t,i){const{source:r,rollAxis:s,weight:o}=i,a=t[r],l=new JT(e,a);if(s!=null&&(l.rollAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new Zu(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,i){const{source:r,aimAxis:s,weight:o}=i,a=t[r],l=new WT(e,a);if(s!=null&&(l.aimAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new Zu(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,i){const{source:r,weight:s}=i,o=t[r],a=new qT(e,o);if(s!=null&&(a.weight=s),this.helperRoot){const l=new Zu(a);this.helperRoot.add(l)}return a}};fm.EXTENSION_NAME="VRMC_node_constraint";var tb=fm,sl=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),Ju=class{},eh=new N,Rr=new N,pm=class extends Ju{get type(){return"capsule"}constructor(n){var e,t,i,r;super(),this.offset=(e=n==null?void 0:n.offset)!=null?e:new N(0,0,0),this.tail=(t=n==null?void 0:n.tail)!=null?t:new N(0,0,0),this.radius=(i=n==null?void 0:n.radius)!=null?i:0,this.inside=(r=n==null?void 0:n.inside)!=null?r:!1}calculateCollision(n,e,t,i){eh.copy(this.offset).applyMatrix4(n),Rr.copy(this.tail).applyMatrix4(n),Rr.sub(eh);const r=Rr.lengthSq();i.copy(e).sub(eh);const s=Rr.dot(i);s<=0||(r<=s||Rr.multiplyScalar(s/r),i.sub(Rr));const o=this.inside?this.radius-t-i.length():i.length()-t-this.radius;return i.normalize(),this.inside&&i.negate(),o}},th=new N,mm=new Ve,gm=class extends Ju{get type(){return"plane"}constructor(n){var e,t;super(),this.offset=(e=n==null?void 0:n.offset)!=null?e:new N(0,0,0),this.normal=(t=n==null?void 0:n.normal)!=null?t:new N(0,0,1)}calculateCollision(n,e,t,i){i.copy(this.offset).applyMatrix4(n),i.negate().add(e),mm.getNormalMatrix(n),th.copy(this.normal).applyNormalMatrix(mm).normalize();const r=i.dot(th)-t;return i.copy(th),r}},_m=class extends Ju{get type(){return"sphere"}constructor(n){var e,t,i;super(),this.offset=(e=n==null?void 0:n.offset)!=null?e:new N(0,0,0),this.radius=(t=n==null?void 0:n.radius)!=null?t:0,this.inside=(i=n==null?void 0:n.inside)!=null?i:!1}calculateCollision(n,e,t,i){i.copy(this.offset).applyMatrix4(n),i.negate().add(e);const r=this.inside?this.radius-t-i.length():i.length()-t-this.radius;return i.normalize(),this.inside&&i.negate(),r}},di=new N,nb=class extends kt{constructor(n){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new N,this._currentTail=new N,this._shape=n,this._attrPos=new ft(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ft(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,n=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),n=!0);const t=di.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),n=!0),n&&this._buildPosition()}_buildPosition(){di.copy(this._currentTail).sub(this._currentOffset);const n=di.length()/this._currentRadius;for(let i=0;i<=16;i++){const r=i/16*Math.PI;this._attrPos.setXYZ(i,-Math.sin(r),-Math.cos(r),0),this._attrPos.setXYZ(17+i,n+Math.sin(r),Math.cos(r),0),this._attrPos.setXYZ(34+i,-Math.sin(r),0,-Math.cos(r)),this._attrPos.setXYZ(51+i,n+Math.sin(r),0,Math.cos(r))}for(let i=0;i<32;i++){const r=i/16*Math.PI;this._attrPos.setXYZ(68+i,0,Math.sin(r),Math.cos(r)),this._attrPos.setXYZ(100+i,n,Math.sin(r),Math.cos(r))}const e=Math.atan2(di.y,Math.sqrt(di.x*di.x+di.z*di.z)),t=-Math.atan2(di.z,di.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<34;n++){const e=(n+1)%34;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(68+n*2,34+n,34+e)}for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(136+n*2,68+n,68+e),this._attrIndex.setXY(200+n*2,100+n,100+e)}this._attrIndex.needsUpdate=!0}},ib=class extends kt{constructor(n){super(),this.worldScale=1,this._currentOffset=new N,this._currentNormal=new N,this._shape=n,this._attrPos=new ft(new Float32Array(6*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ft(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),n=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),n=!0),n&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},rb=class extends kt{constructor(n){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new N,this._shape=n,this._attrPos=new ft(new Float32Array(32*3*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ft(new Uint16Array(64*3),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,n=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),n=!0),n&&this._buildPosition()}_buildPosition(){for(let n=0;n<32;n++){const e=n/16*Math.PI;this._attrPos.setXYZ(n,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+n,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+n,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(64+n*2,32+n,32+e),this._attrIndex.setXY(128+n*2,64+n,64+e)}this._attrIndex.needsUpdate=!0}},sb=new N,nh=class extends gn{constructor(n){if(super(),this.matrixAutoUpdate=!1,this.collider=n,this.collider.shape instanceof _m)this._geometry=new rb(this.collider.shape);else if(this.collider.shape instanceof pm)this._geometry=new nb(this.collider.shape);else if(this.collider.shape instanceof gm)this._geometry=new ib(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const e=new Yi({color:16711935,depthTest:!1,depthWrite:!1});this._line=new fo(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(n){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=sb.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(n)}},ob=class extends kt{constructor(n){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new N,this._springBone=n,this._attrPos=new ft(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ft(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;const e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,n=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),n=!0),n&&this._buildPosition()}_buildPosition(){for(let n=0;n<32;n++){const e=n/16*Math.PI;this._attrPos.setXYZ(n,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+n,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+n,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(64+n*2,32+n,32+e),this._attrIndex.setXY(128+n*2,64+n,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},ab=new N,lb=class extends gn{constructor(n){super(),this.matrixAutoUpdate=!1,this.springBone=n,this._geometry=new ob(this.springBone);const e=new Yi({color:16776960,depthTest:!1,depthWrite:!1});this._line=new fo(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(n){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=ab.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(n)}},ih=class extends dt{constructor(n){super(),this.shape=n}},cb=new we;function vm(n){return n.invert?n.invert():n.getInverse(cb.copy(n)),n}var ub=class{constructor(n){this._inverseCache=new we,this._shouldUpdateInverse=!0,this.matrix=n;const e={set:(t,i,r)=>(this._shouldUpdateInverse=!0,t[i]=r,!0)};this._originalElements=n.elements,n.elements=new Proxy(n.elements,e)}get inverse(){return this._shouldUpdateInverse&&(vm(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},hb=new we,Ni=new N,Mo=new N,db=new N,ys=new N,ym=new N,So=new N,xm=new Ue,xs=new we,fb=new we,pb=class{constructor(n,e,t={},i=[]){this._currentTail=new N,this._prevTail=new N,this._boneAxis=new N,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new we,this._initialLocalRotation=new Ue,this._initialLocalChildPosition=new N;var r,s,o,a,l,c;this.bone=n,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(r=t.hitRadius)!=null?r:0,stiffness:(s=t.stiffness)!=null?s:1,gravityPower:(o=t.gravityPower)!=null?o:0,gravityDir:(l=(a=t.gravityDir)==null?void 0:a.clone())!=null?l:new N(0,-1,0),dragForce:(c=t.dragForce)!=null?c:.4},this.colliderGroups=i}get center(){return this._center}set center(n){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=n,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new ub(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:hb}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const n=this._getMatrixWorldToCenter(xs);this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(n),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const n=this._getMatrixWorldToCenter(xs);this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(n),this._prevTail.copy(this._currentTail)}update(n){if(n<=0)return;this._calcWorldSpaceBoneLength(),ys.setFromMatrixPosition(this.bone.matrixWorld);let e=this._getMatrixWorldToCenter(xs);ym.copy(ys).applyMatrix4(e);const t=xm.setFromRotationMatrix(e),i=fb.copy(e).multiply(this._parentMatrixWorld),r=Mo.copy(this._boneAxis).applyMatrix4(this._initialLocalMatrix).applyMatrix4(i).sub(ym).normalize(),s=db.copy(this.settings.gravityDir).applyQuaternion(t).normalize(),o=this._getMatrixCenterToWorld(xs);So.copy(this._currentTail).add(Ni.copy(this._currentTail).sub(this._prevTail).multiplyScalar(1-this.settings.dragForce)).add(Ni.copy(r).multiplyScalar(this.settings.stiffness*n)).add(Ni.copy(s).multiplyScalar(this.settings.gravityPower*n)).applyMatrix4(o),So.sub(ys).normalize().multiplyScalar(this._worldSpaceBoneLength).add(ys),this._collision(So),e=this._getMatrixWorldToCenter(xs),this._prevTail.copy(this._currentTail),this._currentTail.copy(Ni.copy(So).applyMatrix4(e));const a=vm(xs.copy(this._parentMatrixWorld).multiply(this._initialLocalMatrix)),l=xm.setFromUnitVectors(this._boneAxis,Ni.copy(So).applyMatrix4(a).normalize());this.bone.quaternion.copy(this._initialLocalRotation).multiply(l),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(n){this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{const i=t.shape.calculateCollision(t.matrixWorld,n,this.settings.hitRadius,Ni);i<0&&(n.add(Ni.multiplyScalar(-i)),n.sub(ys).normalize().multiplyScalar(this._worldSpaceBoneLength).add(ys))})})}_calcWorldSpaceBoneLength(){Ni.setFromMatrixPosition(this.bone.matrixWorld),this.child?Mo.setFromMatrixPosition(this.child.matrixWorld):(Mo.copy(this._initialLocalChildPosition),Mo.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=Ni.sub(Mo).length()}_getMatrixCenterToWorld(n){return this._center?n.copy(this._center.matrixWorld):n.identity(),n}_getMatrixWorldToCenter(n){return this._center?n.copy(this._center.userData.inverseCacheProxy.inverse):n.identity(),n}};function mb(n,e){const t=[];let i=n;for(;i!==null;)t.unshift(i),i=i.parent;t.forEach(r=>{e(r)})}function Mm(n,e){n.children.forEach(t=>{e(t)||Mm(t,e)})}var Sm=class{constructor(){this._joints=new Set,this._hasWarnedCircularDependency=!1,this._objectSpringBonesMap=new Map}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const n=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{n.add(t)})}),Array.from(n)}get colliders(){const n=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{n.add(t)})}),Array.from(n)}addJoint(n){this._joints.add(n);let e=this._objectSpringBonesMap.get(n.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(n.bone,e)),e.add(n)}addSpringBone(n){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(n)}deleteJoint(n){this._joints.delete(n),this._objectSpringBonesMap.get(n.bone).delete(n)}deleteSpringBone(n){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(n)}setInitState(){const n=new Set,e=new Set,t=new Set;for(const i of this._joints)this._processSpringBone(i,n,e,t,r=>r.setInitState())}reset(){const n=new Set,e=new Set,t=new Set;for(const i of this._joints)this._processSpringBone(i,n,e,t,r=>r.reset())}update(n){const e=new Set,t=new Set,i=new Set;for(const r of this._joints)this._processSpringBone(r,e,t,i,s=>s.update(n)),Mm(r.bone,s=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(s))==null?void 0:o.size)!=null?a:0)>0?!0:(s.updateWorldMatrix(!1,!1),!1)})}_processSpringBone(n,e,t,i,r){if(t.has(n))return;if(e.has(n)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected while updating springbones"),this._hasWarnedCircularDependency=!0);return}e.add(n);const s=this._getDependencies(n);for(const o of s)mb(o,a=>{const l=this._objectSpringBonesMap.get(a);if(l)for(const c of l)this._processSpringBone(c,e,t,i,r);else i.has(a)||(a.updateWorldMatrix(!1,!1),i.add(a))});n.bone.updateMatrix(),n.bone.updateWorldMatrix(!1,!1),r(n),i.add(n.bone),t.add(n)}_getDependencies(n){const e=new Set,t=n.bone.parent;return t&&e.add(t),n.colliderGroups.forEach(i=>{i.colliders.forEach(r=>{e.add(r)})}),e}},Em="VRMC_springBone_extended_collider",gb=new Set(["1.0","1.0-beta"]),_b=new Set(["1.0"]),Tm=class Hs{get name(){return Hs.EXTENSION_NAME}constructor(e,t){var i;this.parser=e,this.jointHelperRoot=t==null?void 0:t.jointHelperRoot,this.colliderHelperRoot=t==null?void 0:t.colliderHelperRoot,this.useExtendedColliders=(i=t==null?void 0:t.useExtendedColliders)!=null?i:!0}afterRoot(e){return sl(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return sl(this,null,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const i=yield this._v0Import(e);return i??null})}_v1Import(e){return sl(this,null,function*(){var t,i,r,s,o;const a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf(Hs.EXTENSION_NAME))!==-1))return null;const c=new Sm,h=yield e.parser.getDependencies("node"),u=(i=a.extensions)==null?void 0:i[Hs.EXTENSION_NAME];if(!u)return null;const d=u.specVersion;if(!gb.has(d))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Hs.EXTENSION_NAME} specVersion "${d}"`),null;const f=(r=u.colliders)==null?void 0:r.map((v,p)=>{var g,T,y,M,E,I,P,B,Z,_,S,H,A,b,L;const C=h[v.node],U=v.shape,O=(g=v.extensions)==null?void 0:g[Em];if(this.useExtendedColliders&&O!=null){const te=O.specVersion;if(!_b.has(te))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Em} specVersion "${te}". Fallbacking to the ${Hs.EXTENSION_NAME} definition`);else{const V=O.shape;if(V.sphere)return this._importSphereCollider(C,{offset:new N().fromArray((T=V.sphere.offset)!=null?T:[0,0,0]),radius:(y=V.sphere.radius)!=null?y:0,inside:(M=V.sphere.inside)!=null?M:!1});if(V.capsule)return this._importCapsuleCollider(C,{offset:new N().fromArray((E=V.capsule.offset)!=null?E:[0,0,0]),radius:(I=V.capsule.radius)!=null?I:0,tail:new N().fromArray((P=V.capsule.tail)!=null?P:[0,0,0]),inside:(B=V.capsule.inside)!=null?B:!1});if(V.plane)return this._importPlaneCollider(C,{offset:new N().fromArray((Z=V.plane.offset)!=null?Z:[0,0,0]),normal:new N().fromArray((_=V.plane.normal)!=null?_:[0,0,1])})}}if(U.sphere)return this._importSphereCollider(C,{offset:new N().fromArray((S=U.sphere.offset)!=null?S:[0,0,0]),radius:(H=U.sphere.radius)!=null?H:0,inside:!1});if(U.capsule)return this._importCapsuleCollider(C,{offset:new N().fromArray((A=U.capsule.offset)!=null?A:[0,0,0]),radius:(b=U.capsule.radius)!=null?b:0,tail:new N().fromArray((L=U.capsule.tail)!=null?L:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${p} has no valid shape`)}),m=(s=u.colliderGroups)==null?void 0:s.map((v,p)=>{var g;return{colliders:((g=v.colliders)!=null?g:[]).map(y=>{const M=f==null?void 0:f[y];if(M==null)throw new Error(`VRMSpringBoneLoaderPlugin: The colliderGroup #${p} attempted to use a collider #${y} but not found`);return M}),name:v.name}});return(o=u.springs)==null||o.forEach((v,p)=>{var g;const T=v.joints,y=(g=v.colliderGroups)==null?void 0:g.map(I=>{const P=m==null?void 0:m[I];if(P==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${p} attempted to use a colliderGroup ${I} but not found`);return P}),M=v.center!=null?h[v.center]:void 0;let E;T.forEach(I=>{if(E){const P=E.node,B=h[P],Z=I.node,_=h[Z],S={hitRadius:E.hitRadius,dragForce:E.dragForce,gravityPower:E.gravityPower,stiffness:E.stiffness,gravityDir:E.gravityDir!=null?new N().fromArray(E.gravityDir):void 0},H=this._importJoint(B,_,S,y);M&&(H.center=M),c.addJoint(H)}E=I})}),c.setInitState(),c})}_v0Import(e){return sl(this,null,function*(){var t,i,r;const s=e.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;const a=(i=s.extensions)==null?void 0:i.VRM,l=a==null?void 0:a.secondaryAnimation;if(!l)return null;const c=l==null?void 0:l.boneGroups;if(!c)return null;const h=new Sm,u=yield e.parser.getDependencies("node"),d=(r=l.colliderGroups)==null?void 0:r.map(f=>{var m;const v=u[f.node];return{colliders:((m=f.colliders)!=null?m:[]).map((g,T)=>{var y,M,E;const I=new N(0,0,0);return g.offset&&I.set((y=g.offset.x)!=null?y:0,(M=g.offset.y)!=null?M:0,g.offset.z?-g.offset.z:0),this._importSphereCollider(v,{offset:I,radius:(E=g.radius)!=null?E:0,inside:!1})})}});return c==null||c.forEach((f,m)=>{const v=f.bones;v&&v.forEach(p=>{var g,T,y,M;const E=u[p],I=new N;f.gravityDir?I.set((g=f.gravityDir.x)!=null?g:0,(T=f.gravityDir.y)!=null?T:0,(y=f.gravityDir.z)!=null?y:0):I.set(0,-1,0);const P=f.center!=null?u[f.center]:void 0,B={hitRadius:f.hitRadius,dragForce:f.dragForce,gravityPower:f.gravityPower,stiffness:f.stiffiness,gravityDir:I},Z=(M=f.colliderGroups)==null?void 0:M.map(_=>{const S=d==null?void 0:d[_];if(S==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${m} attempted to use a colliderGroup ${_} but not found`);return S});E.traverse(_=>{var S;const H=(S=_.children[0])!=null?S:null,A=this._importJoint(_,H,B,Z);P&&(A.center=P),h.addJoint(A)})})}),e.scene.updateMatrixWorld(),h.setInitState(),h})}_importJoint(e,t,i,r){const s=new pb(e,t,i,r);if(this.jointHelperRoot){const o=new lb(s);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return s}_importSphereCollider(e,t){const i=new _m(t),r=new ih(i);if(e.add(r),this.colliderHelperRoot){const s=new nh(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importCapsuleCollider(e,t){const i=new pm(t),r=new ih(i);if(e.add(r),this.colliderHelperRoot){const s=new nh(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importPlaneCollider(e,t){const i=new gm(t),r=new ih(i);if(e.add(r),this.colliderHelperRoot){const s=new nh(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}};Tm.EXTENSION_NAME="VRMC_springBone";var vb=Tm,yb=class{get name(){return"VRMLoaderPlugin"}constructor(n,e){var t,i,r,s,o,a,l,c,h,u;this.parser=n;const d=e==null?void 0:e.helperRoot,f=e==null?void 0:e.autoUpdateHumanBones;this.expressionPlugin=(t=e==null?void 0:e.expressionPlugin)!=null?t:new FE(n),this.firstPersonPlugin=(i=e==null?void 0:e.firstPersonPlugin)!=null?i:new kE(n),this.humanoidPlugin=(r=e==null?void 0:e.humanoidPlugin)!=null?r:new XE(n,{helperRoot:d,autoUpdateHumanBones:f}),this.lookAtPlugin=(s=e==null?void 0:e.lookAtPlugin)!=null?s:new aT(n,{helperRoot:d}),this.metaPlugin=(o=e==null?void 0:e.metaPlugin)!=null?o:new uT(n),this.mtoonMaterialPlugin=(a=e==null?void 0:e.mtoonMaterialPlugin)!=null?a:new bT(n),this.materialsHDREmissiveMultiplierPlugin=(l=e==null?void 0:e.materialsHDREmissiveMultiplierPlugin)!=null?l:new wT(n),this.materialsV0CompatPlugin=(c=e==null?void 0:e.materialsV0CompatPlugin)!=null?c:new NT(n),this.springBonePlugin=(h=e==null?void 0:e.springBonePlugin)!=null?h:new vb(n,{colliderHelperRoot:d,jointHelperRoot:d}),this.nodeConstraintPlugin=(u=e==null?void 0:e.nodeConstraintPlugin)!=null?u:new tb(n,{helperRoot:d})}beforeRoot(){return Ja(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(n){return Ja(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(n)})}getMaterialType(n){const e=this.mtoonMaterialPlugin.getMaterialType(n);return e??null}extendMaterialParams(n,e){return Ja(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(n,e),yield this.mtoonMaterialPlugin.extendMaterialParams(n,e)})}afterRoot(n){return Ja(this,null,function*(){yield this.metaPlugin.afterRoot(n),yield this.humanoidPlugin.afterRoot(n),yield this.expressionPlugin.afterRoot(n),yield this.lookAtPlugin.afterRoot(n),yield this.firstPersonPlugin.afterRoot(n),yield this.springBonePlugin.afterRoot(n),yield this.nodeConstraintPlugin.afterRoot(n),yield this.mtoonMaterialPlugin.afterRoot(n);const e=n.userData.vrmMeta,t=n.userData.vrmHumanoid;if(e&&t){const i=new dT({scene:n.scene,expressionManager:n.userData.vrmExpressionManager,firstPerson:n.userData.vrmFirstPerson,humanoid:t,lookAt:n.userData.vrmLookAt,meta:e,materials:n.userData.vrmMToonMaterials,springBoneManager:n.userData.vrmSpringBoneManager,nodeConstraintManager:n.userData.vrmNodeConstraintManager});n.userData.vrm=i}})}};function bm(n){if(Object.values(n).forEach(e=>{e!=null&&e.isTexture&&e.dispose()}),n.isShaderMaterial){const e=n.uniforms;e&&Object.values(e).forEach(t=>{const i=t.value;i!=null&&i.isTexture&&i.dispose()})}n.dispose()}function xb(n){const e=n.geometry;e&&e.dispose();const t=n.skeleton;t&&t.dispose();const i=n.material;i&&(Array.isArray(i)?i.forEach(r=>bm(r)):i&&bm(i))}function Mb(n){n.traverse(xb)}function Sb(n,e){var t;const i=(t=e==null?void 0:e.experimentalSameBoneCounts)!=null?t:!1,r=[];n.traverse(a=>{a.type==="SkinnedMesh"&&r.push(a)});const s=new Map;let o=0;for(const a of r){const c=a.geometry.getAttribute("skinIndex"),h=[],u=[],d={},f=c.array;for(let m=0;m<f.length;m++){const v=f[m];d[v]==null&&(d[v]=h.length,h.push(a.skeleton.bones[v]),u.push(a.skeleton.boneInverses[v])),f[m]=d[v]}c.copyArray(f),c.needsUpdate=!0,s.set(a,{bones:h,boneInverses:u}),o=Math.max(o,h.length)}for(const a of r){const{bones:l,boneInverses:c}=s.get(a);if(i)for(let u=l.length;u<o;u++)l[u]=l[0],c[u]=c[0];const h=new us(l,c);a.bind(h,new we)}}function Eb(n){const e=new Map;n.traverse(t=>{var i,r,s,o;if(!t.isMesh)return;const a=t,l=a.geometry,c=l.index;if(c==null)return;const h=e.get(l);if(h!=null){a.geometry=h;return}const u=new kt;u.name=l.name,u.morphTargetsRelative=l.morphTargetsRelative,l.groups.forEach(v=>{u.addGroup(v.start,v.count,v.materialIndex)}),u.boundingBox=(r=(i=l.boundingBox)==null?void 0:i.clone())!=null?r:null,u.boundingSphere=(o=(s=l.boundingSphere)==null?void 0:s.clone())!=null?o:null,u.setDrawRange(l.drawRange.start,l.drawRange.count),u.userData=l.userData,e.set(l,u);const d=[],f=[];{const v=c.array,p=new v.constructor(v.length);let g=0;for(let T=0;T<v.length;T++){const y=v[T];let M=d[y];M==null&&(d[y]=g,f[g]=y,M=g,g++),p[T]=M}u.setIndex(new ft(p,1,!1))}Object.keys(l.attributes).forEach(v=>{const p=l.attributes[v];if(p.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const g=p.array,{itemSize:T,normalized:y}=p,M=new g.constructor(f.length*T);f.forEach((E,I)=>{for(let P=0;P<T;P++)M[I*T+P]=g[E*T+P]}),u.setAttribute(v,new ft(M,T,y))});let m=!0;Object.keys(l.morphAttributes).forEach(v=>{u.morphAttributes[v]=[];const p=l.morphAttributes[v];for(let g=0;g<p.length;g++){const T=p[g];if(T.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const y=T.array,{itemSize:M,normalized:E}=T,I=new y.constructor(f.length*M);f.forEach((P,B)=>{for(let Z=0;Z<M;Z++)I[B*M+Z]=y[P*M+Z]}),m=m&&I.every(P=>P===0),u.morphAttributes[v][g]=new ft(I,M,E)}}),m&&(u.morphAttributes={}),a.geometry=u}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function Tb(n){var e;((e=n.meta)==null?void 0:e.metaVersion)==="0"&&(n.scene.rotation.y=Math.PI)}var Cr=class{constructor(){}};Cr.deepDispose=Mb,Cr.removeUnnecessaryJoints=Sb,Cr.removeUnnecessaryVertices=Eb,Cr.rotateVRM0=Tb;/*!
 * @pixiv/three-vrm-core v3.1.3
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-mtoon v3.1.3
 * MToon (toon material) module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier v3.1.3
 * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-v0compat v3.1.3
 * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-node-constraint v3.1.3
 * Node constraint module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-node-constraint is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-springbone v3.1.3
 * Spring bone module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-springbone is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */function Am(n,e){if(e===wv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===kc||e===Ud){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===kc)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class bb extends Li{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Pb(t)}),this.register(function(t){return new Ib(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new Db(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new Cb(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new Lb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Wb(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=gs.extractUrlBase(e);o=gs.resolveURL(c,this.path)}else o=gs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Du(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===wm){try{o[nt.KHR_BINARY_GLTF]=new $b(e)}catch(u){r&&r(u);return}s=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new rA(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:o[u]=new Rb;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Xb(s,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[u]=new jb;break;case nt.KHR_MESH_QUANTIZATION:o[u]=new Yb;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function Ab(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wb{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Re(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],nn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Bu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fu(h),c.distance=u;break;case"spot":c=new Sp(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class Rb{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ci}extendParams(e,t,i){const r=[];e.color=new Re(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],nn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Ct))}return Promise.all(r)}}class Cb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Pb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(a,a)}return Promise.all(s)}}class Ib{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Lb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Db{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],nn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ct)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Nb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Ob{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],nn),Promise.all(s)}}class Ub{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Fb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],nn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ct)),Promise.all(s)}}class Bb{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class kb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Vb{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class zb{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Hb{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Gb{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,r.mode,r.filter),f})})}else return null}}class Wb{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==kn.TRIANGLES&&c.mode!==kn.TRIANGLE_STRIP&&c.mode!==kn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const v=new we,p=new N,g=new Ue,T=new N(1,1,1),y=new BS(m.geometry,m.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&T.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,v.compose(p,g,T));for(const M in l)if(M==="_COLOR_0"){const E=l[M];y.instanceColor=new bu(E.array,E.itemSize,E.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);dt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const wm="glTF",Eo=12,Rm={JSON:1313821514,BIN:5130562};class $b{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Eo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Eo,s=new DataView(e,Eo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Rm.JSON){const c=new Uint8Array(e,Eo+o,a);this.content=i.decode(c)}else if(l===Rm.BIN){const c=Eo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Xb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=sh[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=sh[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],f=Ms[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){r.decodeDracoFile(h,function(f){for(const m in f.attributes){const v=f.attributes[m],p=l[m];p!==void 0&&(v.normalized=p)}u(f)},a,c,nn,d)})})}}class jb{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Yb{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}}class Cm extends _o{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=r-t,u=(i-t)/h,d=u*u,f=d*u,m=e*c,v=m-c,p=-2*f+3*d,g=f-d,T=1-p,y=g-d+u;for(let M=0;M!==a;M++){const E=o[v+M+a],I=o[v+M+l]*h,P=o[m+M+a],B=o[m+M]*h;s[M]=T*E+y*I+p*P+g*B}return s}}const qb=new Ue;class Kb extends Cm{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return qb.fromArray(s).normalize().toArray(s),s}}const kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pm={9728:fn,9729:An,9984:Ad,9985:ta,9986:Xs,9987:xi},Im={33071:ri,33648:ea,10497:Vi},rh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Zb={CUBICSPLINE:void 0,LINEAR:Ks,STEP:qs},oh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Qb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Iu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),n.DefaultMaterial}function Pr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Oi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Jb(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(r){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(n.morphAttributes.position=h),r&&(n.morphAttributes.normal=u),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function eA(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tA(n){let e;const t=n.extensions&&n.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ah(t.attributes):e=n.indices+":"+ah(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+ah(n.targets[i]);return e}function ah(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function lh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nA(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const iA=new we;class rA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ab,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new yp(this.options.manager):this.textureLoader=new yE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Du(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Pr(s,a,r),Oi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(gs.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=rh[r.type],a=Ms[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new ft(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=rh[r.type],c=Ms[r.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=r.byteOffset||0,f=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let v,p;if(f&&f!==u){const g=Math.floor(d/f),T="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count;let y=t.cache.get(T);y||(v=new c(a,g*f,r.count*f/h),y=new NS(v,f/h),t.cache.add(T,y)),p=new Mu(y,l,d%f/h,m)}else a===null?v=new c(r.count*l):v=new c(a,d,r.count*l),p=new ft(v,l,m);if(r.sparse!==void 0){const g=rh.SCALAR,T=Ms[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,E=new T(o[1],y,r.sparse.count*g),I=new c(o[2],M,r.sparse.count*l);a!==null&&(p=new ft(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let P=0,B=E.length;P<B;P++){const Z=E[P];if(p.setX(Z,I[P*l]),l>=2&&p.setY(Z,I[P*l+1]),l>=3&&p.setZ(Z,I[P*l+2]),l>=4&&p.setW(Z,I[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Pm[d.magFilter]||An,h.minFilter=Pm[d.minFilter]||xi,h.wrapS=Im[d.wrapS]||Vi,h.wrapT=Im[d.wrapT]||Vi,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){const p=new Yt(v);p.needsUpdate=!0,d(p)}),t.load(gs.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Oi(u,o),u.userData.mimeType=o.mimeType||nA(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[nt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new sp,Rn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Yi,Rn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Iu}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){const u=r[nt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],nn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ct)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=On);const h=s.alphaMode||oh.OPAQUE;if(h===oh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===oh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ci&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new qe(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Ci&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ci){const u=s.emissiveFactor;a.emissive=new Re().setRGB(u[0],u[1],u[2],nn)}return s.emissiveTexture!==void 0&&o!==Ci&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ct)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Oi(u,s),t.associations.set(u,{materials:e}),s.extensions&&Pr(r,u,s),u})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Lm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=tA(c),u=r[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Lm(new kt,c,t),r[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Qb(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const v=h[f],p=o[f];let g;const T=c[f];if(p.mode===kn.TRIANGLES||p.mode===kn.TRIANGLE_STRIP||p.mode===kn.TRIANGLE_FAN||p.mode===void 0)g=s.isSkinnedMesh===!0?new Tu(v,T):new un(v,T),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===kn.TRIANGLE_STRIP?g.geometry=Am(g.geometry,Ud):p.mode===kn.TRIANGLE_FAN&&(g.geometry=Am(g.geometry,kc));else if(p.mode===kn.LINES)g=new fo(v,T);else if(p.mode===kn.LINE_STRIP)g=new ho(v,T);else if(p.mode===kn.LINE_LOOP)g=new kS(v,T);else if(p.mode===kn.POINTS)g=new VS(v,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&eA(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Oi(g,s),p.extensions&&Pr(r,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Pr(r,u[0],s),u[0];const d=new gn;s.extensions&&Pr(r,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new mn(ot.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Na(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Oi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new we;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new us(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=r.channels.length;u<d;u++){const f=r.channels[u],m=r.samplers[f.sampler],v=f.target,p=v.node,g=r.parameters!==void 0?r.parameters[m.input]:m.input,T=r.parameters!==void 0?r.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",T)),c.push(m),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],v=u[3],p=u[4],g=[];for(let T=0,y=d.length;T<y;T++){const M=d[T],E=f[T],I=m[T],P=v[T],B=p[T];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const Z=i._createAnimationTracks(M,E,I,P,B);if(Z)for(let _=0;_<Z.length;_++)g.push(Z[_])}return new ms(s,void 0,g)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,iA)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Va:c.length>1?h=new gn:c.length===1?h=c[0]:h=new dt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Oi(h,s),s.extensions&&Pr(i,h,s),s.matrix!==void 0){const u=new we;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new gn;i.name&&(s.name=r.createUniqueName(i.name)),Oi(s,i),i.extensions&&Pr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of r.associations)(d instanceof Rn||d instanceof Yt)&&u.set(d,f);return h.traverse(d=>{const f=r.associations.get(d);f!=null&&u.set(d,f)}),u};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Zi[s.path]===Zi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Zi[s.path]){case Zi.weights:c=Tr;break;case Zi.rotation:c=ci;break;case Zi.position:case Zi.scale:c=Ii;break;default:switch(i.itemSize){case 1:c=Tr;break;case 2:case 3:default:c=Ii;break}break}const h=r.interpolation!==void 0?Zb[r.interpolation]:Ks,u=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+Zi[s.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=lh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof ci?Kb:Cm;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sA(n,e,t){const i=e.attributes,r=new Ei;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const h=lh(Ms[a.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const v=lh(Ms[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new si;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Lm(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=sh[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Ze.workingColorSpace!==nn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Oi(n,e),sA(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Jb(n,e.targets,t):n})}const oA=async n=>{const e=new bb;e.register(i=>new yb(i));const t=await new Promise(i=>{e.load(n,r=>{const s=r.userData.vrm;Cr.removeUnnecessaryVertices(r.scene),Cr.removeUnnecessaryJoints(r.scene),s.scene.traverse(o=>{o.frustumCulled=!1}),i(s)})});return Cr.rotateVRM0(t),t},aA=async({canvas:n,vrmUrl:e})=>{const t=new DS,i=n.width/n.height,r=3,s=new Na(-r*i/2,r*i/2,r/2,-r/2,.1,1e3);s.position.set(0,1.5,2),s.lookAt(0,1.5,0);const o=new $f({canvas:n,antialias:!0});o.setSize(n.width,n.height);const a=new Tp(16777215,1);t.add(a);const l=new Bu(16777215,1);l.position.set(0,1,1).normalize(),t.add(l);const c=await oA(e);return t.add(c.scene),c.lookAt.target=s,{scene:t,vrm:c,camera:s,renderer:o}};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Vn=Uint8Array,Ss=Uint16Array,lA=Int32Array,Dm=new Vn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Nm=new Vn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),cA=new Vn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Om=function(n,e){for(var t=new Ss(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new lA(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},Um=Om(Dm,2),Fm=Um.b,uA=Um.r;Fm[28]=258,uA[258]=28;for(var hA=Om(Nm,0),dA=hA.b,ch=new Ss(32768),Dt=0;Dt<32768;++Dt){var Qi=(Dt&43690)>>1|(Dt&21845)<<1;Qi=(Qi&52428)>>2|(Qi&13107)<<2,Qi=(Qi&61680)>>4|(Qi&3855)<<4,ch[Dt]=((Qi&65280)>>8|(Qi&255)<<8)>>1}for(var To=function(n,e,t){for(var i=n.length,r=0,s=new Ss(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new Ss(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Ss(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],h=e-n[r],u=o[n[r]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[ch[u]>>l]=c}else for(a=new Ss(i),r=0;r<i;++r)n[r]&&(a[r]=ch[o[n[r]-1]++]>>15-n[r]);return a},bo=new Vn(288),Dt=0;Dt<144;++Dt)bo[Dt]=8;for(var Dt=144;Dt<256;++Dt)bo[Dt]=9;for(var Dt=256;Dt<280;++Dt)bo[Dt]=7;for(var Dt=280;Dt<288;++Dt)bo[Dt]=8;for(var Bm=new Vn(32),Dt=0;Dt<32;++Dt)Bm[Dt]=5;var fA=To(bo,9,1),pA=To(Bm,5,1),uh=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},ei=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},hh=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},mA=function(n){return(n+7)/8|0},gA=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Vn(n.subarray(e,t))},_A=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ti=function(n,e,t){var i=new Error(e||_A[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,ti),!t)throw i;return i},vA=function(n,e,t,i){var r=n.length,s=0;if(!r||e.f&&!e.l)return t||new Vn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new Vn(r*3));var c=function(be){var j=t.length;if(be>j){var F=new Vn(Math.max(j*2,be));F.set(t),t=F}},h=e.f||0,u=e.p||0,d=e.b||0,f=e.l,m=e.d,v=e.m,p=e.n,g=r*8;do{if(!f){h=ei(n,u,1);var T=ei(n,u+1,3);if(u+=3,T)if(T==1)f=fA,m=pA,v=9,p=5;else if(T==2){var I=ei(n,u,31)+257,P=ei(n,u+10,15)+4,B=I+ei(n,u+5,31)+1;u+=14;for(var Z=new Vn(B),_=new Vn(19),S=0;S<P;++S)_[cA[S]]=ei(n,u+S*3,7);u+=P*3;for(var H=uh(_),A=(1<<H)-1,b=To(_,H,1),S=0;S<B;){var L=b[ei(n,u,A)];u+=L&15;var y=L>>4;if(y<16)Z[S++]=y;else{var C=0,U=0;for(y==16?(U=3+ei(n,u,3),u+=2,C=Z[S-1]):y==17?(U=3+ei(n,u,7),u+=3):y==18&&(U=11+ei(n,u,127),u+=7);U--;)Z[S++]=C}}var O=Z.subarray(0,I),te=Z.subarray(I);v=uh(O),p=uh(te),f=To(O,v,1),m=To(te,p,1)}else ti(1);else{var y=mA(u)+4,M=n[y-4]|n[y-3]<<8,E=y+M;if(E>r){l&&ti(0);break}a&&c(d+M),t.set(n.subarray(y,E),d),e.b=d+=M,e.p=u=E*8,e.f=h;continue}if(u>g){l&&ti(0);break}}a&&c(d+131072);for(var V=(1<<v)-1,W=(1<<p)-1,ne=u;;ne=u){var C=f[hh(n,u)&V],ae=C>>4;if(u+=C&15,u>g){l&&ti(0);break}if(C||ti(2),ae<256)t[d++]=ae;else if(ae==256){ne=u,f=null;break}else{var $=ae-254;if(ae>264){var S=ae-257,Y=Dm[S];$=ei(n,u,(1<<Y)-1)+Fm[S],u+=Y}var oe=m[hh(n,u)&W],re=oe>>4;oe||ti(3),u+=oe&15;var te=dA[re];if(re>3){var Y=Nm[re];te+=hh(n,u)&(1<<Y)-1,u+=Y}if(u>g){l&&ti(0);break}a&&c(d+131072);var ue=d+$;if(d<te){var me=s-te,he=Math.min(te,ue);for(me+d<0&&ti(3);d<he;++d)t[d]=i[me+d]}for(;d<ue;++d)t[d]=t[d-te]}}e.l=f,e.p=ne,e.b=d,e.f=h,f&&(h=1,e.m=v,e.d=m,e.n=p)}while(!h);return d!=t.length&&o?gA(t,0,d):t.subarray(0,d)},yA=new Vn(0),xA=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&ti(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&ti(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function MA(n,e){return vA(n.subarray(xA(n,e),-4),{i:2},e,e)}var SA=typeof TextDecoder<"u"&&new TextDecoder,EA=0;try{SA.decode(yA,{stream:!0}),EA=1}catch{}function km(n,e,t){const i=t.length-n-1;if(e>=t[i])return i-1;if(e<=t[n])return n;let r=n,s=i,o=Math.floor((r+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:r=o,o=Math.floor((r+s)/2);return o}function TA(n,e,t,i){const r=[],s=[],o=[];r[0]=1;for(let a=1;a<=t;++a){s[a]=e-i[n+1-a],o[a]=i[n+a]-e;let l=0;for(let c=0;c<a;++c){const h=o[c+1],u=s[a-c],d=r[c]/(h+u);r[c]=l+h*d,l=u*d}r[a]=l}return r}function bA(n,e,t,i){const r=km(n,i,e),s=TA(r,i,n,e),o=new at(0,0,0,0);for(let a=0;a<=n;++a){const l=t[r-n+a],c=s[a],h=l.w*c;o.x+=l.x*h,o.y+=l.y*h,o.z+=l.z*h,o.w+=l.w*c}return o}function AA(n,e,t,i,r){const s=[];for(let u=0;u<=t;++u)s[u]=0;const o=[];for(let u=0;u<=i;++u)o[u]=s.slice(0);const a=[];for(let u=0;u<=t;++u)a[u]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let u=1;u<=t;++u){l[u]=e-r[n+1-u],c[u]=r[n+u]-e;let d=0;for(let f=0;f<u;++f){const m=c[f+1],v=l[u-f];a[u][f]=m+v;const p=a[f][u-1]/a[u][f];a[f][u]=d+m*p,d=v*p}a[u][u]=d}for(let u=0;u<=t;++u)o[0][u]=a[u][t];for(let u=0;u<=t;++u){let d=0,f=1;const m=[];for(let v=0;v<=t;++v)m[v]=s.slice(0);m[0][0]=1;for(let v=1;v<=i;++v){let p=0;const g=u-v,T=t-v;u>=v&&(m[f][0]=m[d][0]/a[T+1][g],p=m[f][0]*a[g][T]);const y=g>=-1?1:-g,M=u-1<=T?v-1:t-u;for(let I=y;I<=M;++I)m[f][I]=(m[d][I]-m[d][I-1])/a[T+1][g+I],p+=m[f][I]*a[g+I][T];u<=T&&(m[f][v]=-m[d][v-1]/a[T+1][u],p+=m[f][v]*a[u][T]),o[v][u]=p;const E=d;d=f,f=E}}let h=t;for(let u=1;u<=i;++u){for(let d=0;d<=t;++d)o[u][d]*=h;h*=t-u}return o}function wA(n,e,t,i,r){const s=r<n?r:n,o=[],a=km(n,i,e),l=AA(a,i,n,s,e),c=[];for(let h=0;h<t.length;++h){const u=t[h].clone(),d=u.w;u.x*=d,u.y*=d,u.z*=d,c[h]=u}for(let h=0;h<=s;++h){const u=c[a-n].clone().multiplyScalar(l[h][0]);for(let d=1;d<=n;++d)u.add(c[a-n+d].clone().multiplyScalar(l[h][d]));o[h]=u}for(let h=s+1;h<=r+1;++h)o[h]=new at(0,0,0);return o}function RA(n,e){let t=1;for(let r=2;r<=n;++r)t*=r;let i=1;for(let r=2;r<=e;++r)i*=r;for(let r=2;r<=n-e;++r)i*=r;return t/i}function CA(n){const e=n.length,t=[],i=[];for(let s=0;s<e;++s){const o=n[s];t[s]=new N(o.x,o.y,o.z),i[s]=o.w}const r=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(r[s-a].clone().multiplyScalar(RA(s,a)*i[a]));r[s]=o.divideScalar(i[0])}return r}function PA(n,e,t,i,r){const s=wA(n,e,t,i,r);return CA(s)}class IA extends zS{constructor(e,t,i,r,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<i.length;++o){const a=i[o];this.controlPoints[o]=new at(a.x,a.y,a.z,a.w)}}getPoint(e,t=new N){const i=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=bA(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),i.set(s.x,s.y,s.z)}getTangent(e,t=new N){const i=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=PA(this.degree,this.knots,this.controlPoints,r,1);return i.copy(s[1]).normalize(),i}}let Je,Gt,vn;class LA extends Li{constructor(e){super(e)}load(e,t,i,r){const s=this,o=s.path===""?gs.extractUrlBase(e):s.path,a=new Du(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e,t){if(BA(e))Je=new FA().parse(e);else{const r=Wm(e);if(!kA(r))throw new Error("THREE.FBXLoader: Unknown format.");if(Hm(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Hm(r));Je=new UA().parse(r)}const i=new yp(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new DA(i,this.manager).parse(Je)}}class DA{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Gt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),r=this.parseDeformers(),s=new NA().parse(r);return this.parseScene(r,s,i),vn}parseConnections(){const e=new Map;return"Connections"in Je&&Je.Connections.connections.forEach(function(i){const r=i[0],s=i[1],o=i[2];e.has(r)||e.set(r,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(r).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Je.Objects){const i=Je.Objects.Video;for(const r in i){const s=i[r],o=parseInt(r);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(i[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(const i in e){const r=e[i];t[r]!==void 0?e[i]=t[r]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,r=i.slice(i.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Je.Objects){const i=Je.Objects.Texture;for(const r in i){const s=this.parseTexture(i[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,o=r!==void 0?r.value:0,a=s!==void 0?s.value:0;if(i.wrapS=o===0?Vi:ri,i.wrapT=a===0?Vi:ri,"Scaling"in e){const l=e.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;i.offset.x=l[0],i.offset.y=l[1]}return i}loadTexture(e,t){const i=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),r=e.FileName.split(".").pop().toLowerCase(),s=i.has(r)?this.manager.getHandler(`.${r}`):this.textureLoader;if(!s)return console.warn(`FBXLoader: ${r.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new Yt;const o=s.path;o||s.setPath(this.textureLoader.path);const a=Gt.get(e.id).children;let l;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(l=t[a[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&s.setPath(void 0));const c=s.load(l);return s.setPath(o),c}parseMaterials(e){const t=new Map;if("Material"in Je.Objects){const i=Je.Objects.Material;for(const r in i){const s=this.parseMaterial(i[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){const i=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!Gt.has(i))return null;const o=this.parseParameters(e,t,i);let a;switch(s.toLowerCase()){case"phong":a=new Lu;break;case"lambert":a=new sE;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new Lu;break}return a.setValues(o),a.name=r,a}parseParameters(e,t,i){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=Ze.toWorkingColorSpace(new Re().fromArray(e.Diffuse.value),Ct):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=Ze.toWorkingColorSpace(new Re().fromArray(e.DiffuseColor.value),Ct)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=Ze.toWorkingColorSpace(new Re().fromArray(e.Emissive.value),Ct):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=Ze.toWorkingColorSpace(new Re().fromArray(e.EmissiveColor.value),Ct)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=Ze.toWorkingColorSpace(new Re().fromArray(e.Specular.value),Ct):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=Ze.toWorkingColorSpace(new Re().fromArray(e.SpecularColor.value),Ct));const s=this;return Gt.get(i).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":r.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,o.ID),r.map!==void 0&&(r.map.colorSpace=Ct);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,o.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=Ct);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,o.ID),r.envMap!==void 0&&(r.envMap.mapping=Qo,r.envMap.colorSpace=Ct);break;case"SpecularColor":r.specularMap=s.getTexture(t,o.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=Ct);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,o.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(e,t){return"LayeredTexture"in Je.Objects&&t in Je.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Gt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Je.Objects){const i=Je.Objects.Deformer;for(const r in i){const s=i[r],o=Gt.get(parseInt(r));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,i);a.ID=r,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[r]=a}else if(s.attrType==="BlendShape"){const a={id:r};a.rawTargets=this.parseMorphTargets(o,i),a.id=r,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(r){const s=t[r.ID];if(s.attrType!=="Cluster")return;const o={ID:r.ID,indices:[],weights:[],transformLink:new we().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),i.push(o)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Gt.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(a)}return i}parseScene(e,t,i){vn=new gn;const r=this.parseModels(e.skeletons,t,i),s=Je.Objects.Model,o=this;r.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),Gt.get(l.ID).parents.forEach(function(u){const d=r.get(u.ID);d!==void 0&&d.add(l)}),l.parent===null&&vn.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.addGlobalSceneSettings(),vn.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Gm(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new OA().parse();vn.children.length===1&&vn.children[0].isGroup&&(vn.children[0].animations=a,vn=vn.children[0]),vn.animations=a}parseModels(e,t,i){const r=new Map,s=Je.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=Gt.get(a);let h=this.buildSkeleton(c,e,a,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,i);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new Va;break;case"Null":default:h=new gn;break}h.name=l.attrName?lt.sanitizeNodeName(l.attrName):"",h.userData.originalName=l.attrName,h.ID=a}this.getTransformData(h,l),r.set(a,h)}return r}buildSkeleton(e,t,i,r){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,h){if(c.ID===o.ID){const u=s;s=new Va,s.matrixWorld.copy(c.transformLink),s.name=r?lt.sanitizeNodeName(r):"",s.userData.originalName=r,s.ID=i,l.bones[h]=s,u!==null&&s.add(u)}})}}),s}createCamera(e){let t,i;if(e.children.forEach(function(r){const s=Je.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new dt;else{let r=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(r=1);let s=1;i.NearPlane!==void 0&&(s=i.NearPlane.value/1e3);let o=1e3;i.FarPlane!==void 0&&(o=i.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(a=i.AspectWidth.value,l=i.AspectHeight.value);const c=a/l;let h=45;i.FieldOfView!==void 0&&(h=i.FieldOfView.value);const u=i.FocalLength?i.FocalLength.value:null;switch(r){case 0:t=new mn(h,c,s,o),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new dt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new dt;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(r){const s=Je.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new dt;else{let r;i.LightType===void 0?r=0:r=i.LightType.value;let s=16777215;i.Color!==void 0&&(s=Ze.toWorkingColorSpace(new Re().fromArray(i.Color.value),Ct));let o=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(o=0);let a=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?a=0:a=i.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new Fu(s,o,a,l);break;case 1:t=new Bu(s,o);break;case 2:let c=Math.PI/3;i.InnerAngle!==void 0&&(c=ot.degToRad(i.InnerAngle.value));let h=0;i.OuterAngle!==void 0&&(h=ot.degToRad(i.OuterAngle.value),h=Math.max(h,1)),t=new Sp(s,o,a,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new Fu(s,o);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let r,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),i.has(l.ID)&&a.push(i.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Lu({name:Li.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(r=new Tu(s,o),r.normalizeSkinWeights()):r=new un(s,o),r}createCurve(e,t){const i=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),r=new Yi({name:Li.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new ho(i,r)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=Ao(t.RotationOrder.value):i.eulerOrder=Ao(0),"Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&Gt.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=Je.Objects.Model[r.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),vn.add(e.target)):e.lookAt(new N().fromArray(o))}}})}bindSkeleton(e,t,i){const r=this.parsePoseNodes();for(const s in e){const o=e[s];Gt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Gt.get(c).parents.forEach(function(u){i.has(u.ID)&&i.get(u.ID).bind(new us(o.bones),r[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Je.Objects){const t=Je.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const r=t[i].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new we().fromArray(s.Matrix.a)}):e[r.Node]=new we().fromArray(r.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in Je){if("AmbientColor"in Je.GlobalSettings){const e=Je.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],r=e[2];if(t!==0||i!==0||r!==0){const s=new Re().setRGB(t,i,r,Ct);vn.add(new Tp(s,1))}}"UnitScaleFactor"in Je.GlobalSettings&&(vn.userData.unitScaleFactor=Je.GlobalSettings.UnitScaleFactor.value)}}}class NA{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Je.Objects){const i=Je.Objects.Geometry;for(const r in i){const s=Gt.get(parseInt(r)),o=this.parseGeometry(s,i[r],e);t.set(parseInt(r),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const r=i.skeletons,s=[],o=e.parents.map(function(u){return Je.Objects.Model[u.ID]});if(o.length===0)return;const a=e.children.reduce(function(u,d){return r[d.ID]!==void 0&&(u=r[d.ID]),u},null);e.children.forEach(function(u){i.morphTargets[u.ID]!==void 0&&s.push(i.morphTargets[u.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Ao(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=Gm(c);return this.genGeometry(t,a,s,h)}genGeometry(e,t,i,r){const s=new kt;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new rn(a.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new rn(a.colors,3)),t&&(s.setAttribute("skinIndex",new au(a.weightsIndices,4)),s.setAttribute("skinWeight",new rn(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new Ve().getNormalMatrix(r),h=new rn(a.normal,3);h.applyNormalMatrix(c),s.setAttribute("normal",h)}if(a.uvs.forEach(function(c,h){const u=h===0?"uv":`uv${h}`;s.setAttribute(u,new rn(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(u,d){u!==c&&(s.addGroup(h,d-h,c),c=u,h=d)}),s.groups.length>0){const u=s.groups[s.groups.length-1],d=u.start+u.count;d!==a.materialIndex.length&&s.addGroup(d,a.materialIndex.length-d,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,i,r),s}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(o,a){i.weightTable[o]===void 0&&(i.weightTable[o]=[]),i.weightTable[o].push({id:s,weight:r.weights[a]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,r=0,s=!1,o=[],a=[],l=[],c=[],h=[],u=[];const d=this;return e.vertexIndices.forEach(function(f,m){let v,p=!1;f<0&&(f=f^-1,p=!0);let g=[],T=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const y=ol(m,i,f,e.color);l.push(y[0],y[1],y[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(y){T.push(y.weight),g.push(y.id)}),T.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const y=[0,0,0,0],M=[0,0,0,0];T.forEach(function(E,I){let P=E,B=g[I];M.forEach(function(Z,_,S){if(P>Z){S[_]=P,P=Z;const H=y[_];y[_]=B,B=H}})}),g=y,T=M}for(;T.length<4;)T.push(0),g.push(0);for(let y=0;y<4;++y)h.push(T[y]),u.push(g[y])}if(e.normal){const y=ol(m,i,f,e.normal);a.push(y[0],y[1],y[2])}e.material&&e.material.mappingType!=="AllSame"&&(v=ol(m,i,f,e.material)[0],v<0&&(d.negativeMaterialIndices=!0,v=0)),e.uv&&e.uv.forEach(function(y,M){const E=ol(m,i,f,y);c[M]===void 0&&(c[M]=[]),c[M].push(E[0]),c[M].push(E[1])}),r++,p&&(d.genFace(t,e,o,v,a,l,c,h,u,r),i++,r=0,o=[],a=[],l=[],c=[],h=[],u=[])}),t}getNormalNewell(e){const t=new N(0,0,0);for(let i=0;i<e.length;i++){const r=e[i],s=e[(i+1)%e.length];t.x+=(r.y-s.y)*(r.z+s.z),t.y+=(r.z-s.z)*(r.x+s.x),t.z+=(r.x-s.x)*(r.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),r=(Math.abs(t.z)>.5?new N(0,1,0):new N(0,0,1)).cross(t).normalize(),s=t.clone().cross(r).normalize();return{normal:t,tangent:r,bitangent:s}}flattenVertex(e,t,i){return new qe(e.dot(t),e.dot(i))}genFace(e,t,i,r,s,o,a,l,c,h){let u;if(h>3){const d=[],f=t.baseVertexPositions||t.vertexPositions;for(let g=0;g<i.length;g+=3)d.push(new N(f[i[g]],f[i[g+1]],f[i[g+2]]));const{tangent:m,bitangent:v}=this.getNormalTangentAndBitangent(d),p=[];for(const g of d)p.push(this.flattenVertex(g,m,v));u=Pu.triangulateShape(p,[])}else u=[[0,1,2]];for(const[d,f,m]of u)e.vertex.push(t.vertexPositions[i[d*3]]),e.vertex.push(t.vertexPositions[i[d*3+1]]),e.vertex.push(t.vertexPositions[i[d*3+2]]),e.vertex.push(t.vertexPositions[i[f*3]]),e.vertex.push(t.vertexPositions[i[f*3+1]]),e.vertex.push(t.vertexPositions[i[f*3+2]]),e.vertex.push(t.vertexPositions[i[m*3]]),e.vertex.push(t.vertexPositions[i[m*3+1]]),e.vertex.push(t.vertexPositions[i[m*3+2]]),t.skeleton&&(e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[m*4]),e.vertexWeights.push(l[m*4+1]),e.vertexWeights.push(l[m*4+2]),e.vertexWeights.push(l[m*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[m*4]),e.weightsIndices.push(c[m*4+1]),e.weightsIndices.push(c[m*4+2]),e.weightsIndices.push(c[m*4+3])),t.color&&(e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[m*3]),e.colors.push(o[m*3+1]),e.colors.push(o[m*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[d*3]),e.normal.push(s[d*3+1]),e.normal.push(s[d*3+2]),e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2]),e.normal.push(s[m*3]),e.normal.push(s[m*3+1]),e.normal.push(s[m*3+2])),t.uv&&t.uv.forEach(function(v,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(a[p][d*2]),e.uvs[p].push(a[p][d*2+1]),e.uvs[p].push(a[p][f*2]),e.uvs[p].push(a[p][f*2+1]),e.uvs[p].push(a[p][m*2]),e.uvs[p].push(a[p][m*2+1])})}addMorphTargets(e,t,i,r){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;i.forEach(function(o){o.rawTargets.forEach(function(a){const l=Je.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,a.name)})})}genMorphGeometry(e,t,i,r,s){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=i.Vertices!==void 0?i.Vertices.a:[],c=i.Indexes!==void 0?i.Indexes.a:[],h=e.attributes.position.count*3,u=new Float32Array(h);for(let v=0;v<c.length;v++){const p=c[v]*3;u[p]=l[v*3],u[p+1]=l[v*3+1],u[p+2]=l[v*3+2]}const d={vertexIndices:a,vertexPositions:u,baseVertexPositions:o},f=this.genBuffers(d),m=new rn(f.vertex,3);m.name=s||i.attrName,m.applyMatrix4(r),e.morphAttributes.position.push(m)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Normals.a;let s=[];return i==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.UV.a;let s=[];return i==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Colors.a;let s=[];i==="IndexToDirect"&&(s=e.ColorIndex.a);for(let o=0,a=new Re;o<r.length;o+=4)a.fromArray(r,o),Ze.toWorkingColorSpace(a,Ct),a.toArray(r,o);return{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const r=e.Materials.a,s=[];for(let o=0;o<r.length;++o)s.push(o);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:i}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new kt;const i=t-1,r=e.KnotVector.a,s=[],o=e.Points.a;for(let u=0,d=o.length;u<d;u+=4)s.push(new at().fromArray(o,u));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=i,l=r.length-1-a;for(let u=0;u<i;++u)s.push(s[u])}const h=new IA(i,r,s,a,l).getPoints(s.length*12);return new kt().setFromPoints(h)}}class OA{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const r=t[i],s=this.addClip(r);e.push(s)}return e}parseClips(){if(Je.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Je.Objects.AnimationCurveNode,t=new Map;for(const i in e){const r=e[i];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Je.Objects.AnimationCurve;for(const i in t){const r={id:t[i].id,times:t[i].KeyTime.a.map(VA),values:t[i].KeyValueFloat.a},s=Gt.get(r.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=r:a.match(/Y/)?e.get(o).curves.y=r:a.match(/Z/)?e.get(o).curves.z=r:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=r)}}}parseAnimationLayers(e){const t=Je.Objects.AnimationLayer,i=new Map;for(const r in t){const s=[],o=Gt.get(parseInt(r));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(s[c]===void 0){const u=Gt.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(u!==void 0){const d=Je.Objects.Model[u.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?lt.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};vn.traverse(function(m){m.ID===d.id&&(f.transform=m.matrix,m.userData.transformData&&(f.eulerOrder=m.userData.transformData.eulerOrder))}),f.transform||(f.transform=new we),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),s[c]=f}}s[c]&&(s[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(s[c]===void 0){const u=Gt.get(l.ID).parents.filter(function(g){return g.relationship!==void 0})[0].ID,d=Gt.get(u).parents[0].ID,f=Gt.get(d).parents[0].ID,m=Gt.get(f).parents[0].ID,v=Je.Objects.Model[m],p={modelName:v.attrName?lt.sanitizeNodeName(v.attrName):"",morphName:Je.Objects.Deformer[u].attrName};s[c]=p}s[c][h.attr]=h}}}),i.set(parseInt(r),s))}return i}parseAnimStacks(e){const t=Je.Objects.AnimationStack,i={};for(const r in t){const s=Gt.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);i[r]={name:t[r].attrName,layer:o}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(r){t=t.concat(i.generateTracks(r))}),new ms(e.name,-1,t)}generateTracks(e){const t=[];let i=new N,r=new N;if(e.transform&&e.transform.decompose(i,new Ue,r),i=i.toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,i,r){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,i);return new Ii(e+"."+r,s,o)}generateRotationTrack(e,t,i,r,s){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const d=this.interpolateRotations(t.x,t.y,t.z,s);o=d[0],a=d[1]}const l=Ao(0);i!==void 0&&(i=i.map(ot.degToRad),i.push(l),i=new Bt().fromArray(i),i=new Ue().setFromEuler(i)),r!==void 0&&(r=r.map(ot.degToRad),r.push(l),r=new Bt().fromArray(r),r=new Ue().setFromEuler(r).invert());const c=new Ue,h=new Bt,u=[];if(!a||!o)return new ci(e+".quaternion",[0],[0]);for(let d=0;d<a.length;d+=3)h.set(a[d],a[d+1],a[d+2],s),c.setFromEuler(h),i!==void 0&&c.premultiply(i),r!==void 0&&c.multiply(r),d>2&&new Ue().fromArray(u,(d-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,d/3*4);return new ci(e+".quaternion",o,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(s){return s/100}),r=vn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Tr(e.modelName+".morphTargetInfluences["+r+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,r){return i-r}),t.length>1){let i=1,r=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==r&&(t[i]=o,r=o,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const r=i,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const h=t.x.values[o];s.push(h),r[0]=h}else s.push(r[0]);if(a!==-1){const h=t.y.values[a];s.push(h),r[1]=h}else s.push(r[1]);if(l!==-1){const h=t.z.values[l];s.push(h),r[2]=h}else s.push(r[2])}),s}interpolateRotations(e,t,i,r){const s=[],o=[];s.push(e.times[0]),o.push(ot.degToRad(e.values[0])),o.push(ot.degToRad(t.values[0])),o.push(ot.degToRad(i.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],i.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(ot.degToRad),h=[e.values[a],t.values[a],i.values[a]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;const u=h.map(ot.degToRad),d=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const v=Math.max(...f)/180,p=new Bt(...c,r),g=new Bt(...u,r),T=new Ue().setFromEuler(p),y=new Ue().setFromEuler(g);T.dot(y)&&y.set(-y.x,-y.y,-y.z,-y.w);const M=e.times[a-1],E=e.times[a]-M,I=new Ue,P=new Bt;for(let B=0;B<1;B+=1/v)I.copy(T.clone().slerp(y.clone(),B)),s.push(M+B*E),P.setFromQuaternion(I,r),o.push(P.x),o.push(P.y),o.push(P.z)}else s.push(e.times[a]),o.push(ot.degToRad(e.values[a])),o.push(ot.degToRad(t.values[a])),o.push(ot.degToRad(i.values[a]))}return[s,o]}}class UA{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new zm,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(r,s){const o=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(o||a)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,i[++s]):h?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:i},o=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,s):i in a?(i==="PoseNode"?a.PoseNode.push(s):a[i].id!==void 0&&(a[i]={},a[i][a[i].id]=a[i]),o.id!==""&&(a[i][o.id]=s)):typeof o.id=="number"?(a[i]={},a[i][o.id]=s):i!=="Properties70"&&(i==="PoseNode"?a[i]=[s]:a[i]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",r="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:i,type:r}}parseNodeProperty(e,t,i){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=i.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let u=s.split(",").slice(3);u=u.map(function(d){return d.trim().replace(/^"/,"")}),r="connections",s=[c,h],HA(s,u),o[r]===void 0&&(o[r]=[])}r==="Node"&&(o.id=s),r in o&&Array.isArray(o[r])?o[r].push(s):r!=="a"?o[r]=s:o.a=s,this.setCurrentProp(o,r),r==="a"&&s.slice(-1)!==","&&(o.a=fh(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=fh(t.a))}parseNodeSpecialProperty(e,t,i){const r=i.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],o=r[1],a=r[2],l=r[3];let c=r[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=fh(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class FA{parse(e){const t=new Vm(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const r=new zm;for(;!this.endOfContent(t);){const s=this.parseNode(t,i);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(r===0)return null;const l=[];for(let d=0;d<s;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(i.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(a,i,d)}return i.propertyList=l,typeof c=="number"&&(i.id=c),h!==""&&(i.attrName=h),u!==""&&(i.attrType=u),a!==""&&(i.name=a),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const r=i.propertyList[0];Array.isArray(r)?(t[i.name]=i,i.a=r):t[i.name]=r}else if(e==="Connections"&&i.name==="C"){const r=[];i.propertyList.forEach(function(s,o){o!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(i.name==="Properties70")Object.keys(i).forEach(function(s){t[s]=i[s]});else if(e==="Properties70"&&i.name==="P"){let r=i.propertyList[0],s=i.propertyList[1];const o=i.propertyList[2],a=i.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],t[r]={type:s,type2:o,flag:a,value:l}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}const a=MA(new Uint8Array(e.getArrayBuffer(o))),l=new Vm(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Vm{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let i=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const r=i.indexOf(0);return r>=0&&(i=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(i)}}class zm{add(e,t){this[e]=t}}function BA(n){const e="Kaydara FBX Binary  \0";return n.byteLength>=e.length&&e===Wm(n,0,e.length)}function kA(n){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(r){const s=n[r-1];return n=n.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(i(1)===e[r])return!1;return!0}function Hm(n){const e=/FBXVersion: (\d+)/,t=n.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function VA(n){return n/46186158e3}const zA=[];function ol(n,e,t,i){let r;switch(i.mappingType){case"ByPolygonVertex":r=n;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(r=i.indices[r]);const s=r*i.dataSize,o=s+i.dataSize;return GA(zA,i.buffer,s,o)}const dh=new Bt,Es=new N;function Gm(n){const e=new we,t=new we,i=new we,r=new we,s=new we,o=new we,a=new we,l=new we,c=new we,h=new we,u=new we,d=new we,f=n.inheritType?n.inheritType:0;n.translation&&e.setPosition(Es.fromArray(n.translation));const m=Ao(0);if(n.preRotation){const S=n.preRotation.map(ot.degToRad);S.push(m),t.makeRotationFromEuler(dh.fromArray(S))}if(n.rotation){const S=n.rotation.map(ot.degToRad);S.push(n.eulerOrder||m),i.makeRotationFromEuler(dh.fromArray(S))}if(n.postRotation){const S=n.postRotation.map(ot.degToRad);S.push(m),r.makeRotationFromEuler(dh.fromArray(S)),r.invert()}n.scale&&s.scale(Es.fromArray(n.scale)),n.scalingOffset&&a.setPosition(Es.fromArray(n.scalingOffset)),n.scalingPivot&&o.setPosition(Es.fromArray(n.scalingPivot)),n.rotationOffset&&l.setPosition(Es.fromArray(n.rotationOffset)),n.rotationPivot&&c.setPosition(Es.fromArray(n.rotationPivot)),n.parentMatrixWorld&&(u.copy(n.parentMatrix),h.copy(n.parentMatrixWorld));const v=t.clone().multiply(i).multiply(r),p=new we;p.extractRotation(h);const g=new we;g.copyPosition(h);const T=g.clone().invert().multiply(h),y=p.clone().invert().multiply(T),M=s,E=new we;if(f===0)E.copy(p).multiply(v).multiply(y).multiply(M);else if(f===1)E.copy(p).multiply(y).multiply(v).multiply(M);else{const H=new we().scale(new N().setFromMatrixScale(u)).clone().invert(),A=y.clone().multiply(H);E.copy(p).multiply(v).multiply(A).multiply(M)}const I=c.clone().invert(),P=o.clone().invert();let B=e.clone().multiply(l).multiply(c).multiply(t).multiply(i).multiply(r).multiply(I).multiply(a).multiply(o).multiply(s).multiply(P);const Z=new we().copyPosition(B),_=h.clone().multiply(Z);return d.copyPosition(_),B=d.clone().multiply(E),B.premultiply(h.invert()),B}function Ao(n){n=n||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return n===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[n]}function fh(n){return n.split(",").map(function(t){return parseFloat(t)})}function Wm(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=n.byteLength),new TextDecoder().decode(new Uint8Array(n,e,t))}function HA(n,e){for(let t=0,i=n.length,r=e.length;t<r;t++,i++)n[i]=e[t]}function GA(n,e,t,i){for(let r=t,s=0;r<i;r++,s++)n[s]=e[r];return n}const WA={mixamorigHips:"hips",mixamorigSpine:"spine",mixamorigSpine1:"chest",mixamorigSpine2:"upperChest",mixamorigNeck:"neck",mixamorigHead:"head",mixamorigLeftShoulder:"leftShoulder",mixamorigLeftArm:"leftUpperArm",mixamorigLeftForeArm:"leftLowerArm",mixamorigLeftHand:"leftHand",mixamorigLeftHandThumb1:"leftThumbMetacarpal",mixamorigLeftHandThumb2:"leftThumbProximal",mixamorigLeftHandThumb3:"leftThumbDistal",mixamorigLeftHandIndex1:"leftIndexProximal",mixamorigLeftHandIndex2:"leftIndexIntermediate",mixamorigLeftHandIndex3:"leftIndexDistal",mixamorigLeftHandMiddle1:"leftMiddleProximal",mixamorigLeftHandMiddle2:"leftMiddleIntermediate",mixamorigLeftHandMiddle3:"leftMiddleDistal",mixamorigLeftHandRing1:"leftRingProximal",mixamorigLeftHandRing2:"leftRingIntermediate",mixamorigLeftHandRing3:"leftRingDistal",mixamorigLeftHandPinky1:"leftLittleProximal",mixamorigLeftHandPinky2:"leftLittleIntermediate",mixamorigLeftHandPinky3:"leftLittleDistal",mixamorigRightShoulder:"rightShoulder",mixamorigRightArm:"rightUpperArm",mixamorigRightForeArm:"rightLowerArm",mixamorigRightHand:"rightHand",mixamorigRightHandPinky1:"rightLittleProximal",mixamorigRightHandPinky2:"rightLittleIntermediate",mixamorigRightHandPinky3:"rightLittleDistal",mixamorigRightHandRing1:"rightRingProximal",mixamorigRightHandRing2:"rightRingIntermediate",mixamorigRightHandRing3:"rightRingDistal",mixamorigRightHandMiddle1:"rightMiddleProximal",mixamorigRightHandMiddle2:"rightMiddleIntermediate",mixamorigRightHandMiddle3:"rightMiddleDistal",mixamorigRightHandIndex1:"rightIndexProximal",mixamorigRightHandIndex2:"rightIndexIntermediate",mixamorigRightHandIndex3:"rightIndexDistal",mixamorigRightHandThumb1:"rightThumbMetacarpal",mixamorigRightHandThumb2:"rightThumbProximal",mixamorigRightHandThumb3:"rightThumbDistal",mixamorigLeftUpLeg:"leftUpperLeg",mixamorigLeftLeg:"leftLowerLeg",mixamorigLeftFoot:"leftFoot",mixamorigLeftToeBase:"leftToes",mixamorigRightUpLeg:"rightUpperLeg",mixamorigRightLeg:"rightLowerLeg",mixamorigRightFoot:"rightFoot",mixamorigRightToeBase:"rightToes"};function $A(n,e){return new LA().loadAsync(n).then(i=>{var v,p,g;const r=ms.findByName(i.animations,"mixamo.com"),s=[],o=new Ue,a=new Ue,l=new Ue,c=new N,h=((v=i.getObjectByName("mixamorigHips"))==null?void 0:v.position.y)??0,u=((g=(p=e.humanoid)==null?void 0:p.getNormalizedBoneNode("hips"))==null?void 0:g.getWorldPosition(c).y)??0,d=e.scene.getWorldPosition(c).y,m=Math.abs(u-d)/h;return r.tracks.forEach(T=>{var B,Z,_;const y=T.name.split("."),M=y[0],E=WA[M],I=(Z=(B=e.humanoid)==null?void 0:B.getNormalizedBoneNode(E))==null?void 0:Z.name,P=i.getObjectByName(M);if(I!=null&&P!=null){const S=y[1];if(P.getWorldQuaternion(o).invert(),(_=P.parent)==null||_.getWorldQuaternion(a),T instanceof ci){for(let H=0;H<T.values.length;H+=4){const A=T.values.slice(H,H+4);l.fromArray(A),l.premultiply(a).multiply(o),l.toArray(A),A.forEach((b,L)=>{T.values[L+H]=b})}s.push(new ci(`${I}.${S}`,T.times,T.values.map((H,A)=>{var b;return((b=e.meta)==null?void 0:b.metaVersion)==="0"&&A%2===0?-H:H})))}else if(T instanceof Ii){const H=T.values.map((A,b)=>{var L;return(((L=e.meta)==null?void 0:L.metaVersion)==="0"&&b%3!==1?-A:A)*m});s.push(new Ii(`${I}.${S}`,T.times,H))}}}),new ms("vrmAnimation",r.duration,s)})}const XA=({vrm:n,analyserNode:e,vrmState:t})=>{if(!e)return;const i=new Uint8Array(e.frequencyBinCount);e.getByteTimeDomainData(i),Math.max(...i)/128-1>.3&&t.pickNewExpressionSet("happy")};class jA{constructor(e){tn(this,"vrm");tn(this,"expressionGroups",{happy:["happy","relaxed"],angry:["angry","Surprised"],sad:["sad","neutral"]});tn(this,"expressionTimer",0);tn(this,"expressionDuration",0);tn(this,"transitionProgress",0);tn(this,"currentExpressionSet",{});tn(this,"targetExpressionSet",{});tn(this,"blinkTimer",0);tn(this,"blinkState",0);tn(this,"blinkDuration",.1);tn(this,"nextBlinkTime",Math.random()*6+4);tn(this,"blinkLeftOffset",Math.random()*.02);tn(this,"blinkRightOffset",-Math.random()*.02);this.vrm=e,this.resetExpressions()}resetExpressions(){this.currentExpressionSet={Surprised:0,angry:0,happy:0,neutral:1,relaxed:0,sad:0},this.targetExpressionSet={...this.currentExpressionSet}}pickNewExpressionSet(e){const t=At.Objects.keys(this.expressionGroups),i=e?this.expressionGroups[e]:this.expressionGroups[t[Math.floor(Math.random()*t.length)]],r={...this.currentExpressionSet};i.forEach(s=>{r[s]=Math.random()*.3+.2}),r.neutral=Math.random()*.5,this.targetExpressionSet=r,this.expressionDuration=Math.random()*10+10,this.expressionTimer=0,this.transitionProgress=0}updateState(e){this.updateExpressions(e),this.updateBlink(e)}updateExpressions(e){this.expressionTimer+=e,this.transitionProgress+=e/6,this.transitionProgress=Math.min(this.transitionProgress,1),Object.keys(this.currentExpressionSet).forEach(t=>{var o;const i=this.currentExpressionSet[t],r=this.targetExpressionSet[t],s=i+(r-i)*this.transitionProgress;(o=this.vrm.expressionManager)==null||o.setValue(t,s*.5)}),this.expressionTimer>=this.expressionDuration&&(this.currentExpressionSet={...this.targetExpressionSet},this.pickNewExpressionSet())}updateBlink(e){var t,i,r,s;if(this.blinkTimer+=e,this.blinkState===0)this.blinkTimer>=this.nextBlinkTime&&(this.blinkState=1,this.blinkTimer=0);else if(this.blinkState===1){const o=this.blinkTimer/this.blinkDuration,a=Math.min(o+this.blinkLeftOffset,1),l=Math.min(o+this.blinkRightOffset,1);(t=this.vrm.expressionManager)==null||t.setValue("blinkLeft",a),(i=this.vrm.expressionManager)==null||i.setValue("blinkRight",l),o>=1&&(this.blinkState=2,this.blinkTimer=0)}else if(this.blinkState===2)this.blinkTimer>=.05&&(this.blinkState=3,this.blinkTimer=0);else if(this.blinkState===3){const o=1-this.blinkTimer/this.blinkDuration,a=Math.max(o+this.blinkLeftOffset,0),l=Math.max(o+this.blinkRightOffset,0);(r=this.vrm.expressionManager)==null||r.setValue("blinkLeft",a),(s=this.vrm.expressionManager)==null||s.setValue("blinkRight",l),o<=0&&(this.blinkState=0,this.blinkTimer=0,this.nextBlinkTime=Math.random()*6+4)}}}const ph={fromVrm:async({vrmUrl:n,canvas:e,analyserNode:t,idleAnimationUrl:i})=>{const{camera:r,scene:s,vrm:o}=await aA({canvas:e,vrmUrl:n}),a=new $f({canvas:e,antialias:!0}),l=new LE(o.scene);if(i){const d=await $A(i,o);console.log("clip",d),l.clipAction(d).play()}const c=new jA(o);o.scene.position.y=.5;const h=At.Animates.create({ticker:({deltaMs:d})=>{const f=d/1e3;a.render(s,r),o&&(o.update(f),l.update(f),XA({vrm:o,analyserNode:t,vrmState:c}),c.updateState(f))}});return{destroy:()=>{console.log("disposing scene"),h.destroy(),a.dispose()},vrm:o,anim:h}},fromGltf:$_};var YA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $m(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var mh={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function qA(){if(Xm)return wo;Xm=1;var n=tt,e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(a,l,c){var h,u={},d=null,f=null;c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),l.ref!==void 0&&(f=l.ref);for(h in l)i.call(l,h)&&!s.hasOwnProperty(h)&&(u[h]=l[h]);if(a&&a.defaultProps)for(h in l=a.defaultProps,l)u[h]===void 0&&(u[h]=l[h]);return{$$typeof:e,type:a,key:d,ref:f,props:u,_owner:r.current}}return wo.Fragment=t,wo.jsx=o,wo.jsxs=o,wo}var Ro={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function KA(){return jm||(jm=1,process.env.NODE_ENV!=="production"&&function(){var n=tt,e=Symbol.for("react.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.for("react.offscreen"),m=Symbol.iterator,v="@@iterator";function p(k){if(k===null||typeof k!="object")return null;var fe=m&&k[m]||k[v];return typeof fe=="function"?fe:null}var g=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function T(k){{for(var fe=arguments.length,Se=new Array(fe>1?fe-1:0),$e=1;$e<fe;$e++)Se[$e-1]=arguments[$e];y("error",k,Se)}}function y(k,fe,Se){{var $e=g.ReactDebugCurrentFrame,ct=$e.getStackAddendum();ct!==""&&(fe+="%s",Se=Se.concat([ct]));var ht=Se.map(function(w){return String(w)});ht.unshift("Warning: "+fe),Function.prototype.apply.call(console[k],console,ht)}}var M=!1,E=!1,I=!1,P=!1,B=!1,Z;Z=Symbol.for("react.module.reference");function _(k){return!!(typeof k=="string"||typeof k=="function"||k===i||k===s||B||k===r||k===c||k===h||P||k===f||M||E||I||typeof k=="object"&&k!==null&&(k.$$typeof===d||k.$$typeof===u||k.$$typeof===o||k.$$typeof===a||k.$$typeof===l||k.$$typeof===Z||k.getModuleId!==void 0))}function S(k,fe,Se){var $e=k.displayName;if($e)return $e;var ct=fe.displayName||fe.name||"";return ct!==""?Se+"("+ct+")":Se}function H(k){return k.displayName||"Context"}function A(k){if(k==null)return null;if(typeof k.tag=="number"&&T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof k=="function")return k.displayName||k.name||null;if(typeof k=="string")return k;switch(k){case i:return"Fragment";case t:return"Portal";case s:return"Profiler";case r:return"StrictMode";case c:return"Suspense";case h:return"SuspenseList"}if(typeof k=="object")switch(k.$$typeof){case a:var fe=k;return H(fe)+".Consumer";case o:var Se=k;return H(Se._context)+".Provider";case l:return S(k,k.render,"ForwardRef");case u:var $e=k.displayName||null;return $e!==null?$e:A(k.type)||"Memo";case d:{var ct=k,ht=ct._payload,w=ct._init;try{return A(w(ht))}catch{return null}}}return null}var b=Object.assign,L=0,C,U,O,te,V,W,ne;function ae(){}ae.__reactDisabledLog=!0;function $(){{if(L===0){C=console.log,U=console.info,O=console.warn,te=console.error,V=console.group,W=console.groupCollapsed,ne=console.groupEnd;var k={configurable:!0,enumerable:!0,value:ae,writable:!0};Object.defineProperties(console,{info:k,log:k,warn:k,error:k,group:k,groupCollapsed:k,groupEnd:k})}L++}}function Y(){{if(L--,L===0){var k={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:b({},k,{value:C}),info:b({},k,{value:U}),warn:b({},k,{value:O}),error:b({},k,{value:te}),group:b({},k,{value:V}),groupCollapsed:b({},k,{value:W}),groupEnd:b({},k,{value:ne})})}L<0&&T("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var oe=g.ReactCurrentDispatcher,re;function ue(k,fe,Se){{if(re===void 0)try{throw Error()}catch(ct){var $e=ct.stack.trim().match(/\n( *(at )?)/);re=$e&&$e[1]||""}return`
`+re+k}}var me=!1,he;{var be=typeof WeakMap=="function"?WeakMap:Map;he=new be}function j(k,fe){if(!k||me)return"";{var Se=he.get(k);if(Se!==void 0)return Se}var $e;me=!0;var ct=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var ht;ht=oe.current,oe.current=null,$();try{if(fe){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(Te){$e=Te}Reflect.construct(k,[],w)}else{try{w.call()}catch(Te){$e=Te}k.call(w.prototype)}}else{try{throw Error()}catch(Te){$e=Te}k()}}catch(Te){if(Te&&$e&&typeof Te.stack=="string"){for(var z=Te.stack.split(`
`),q=$e.stack.split(`
`),K=z.length-1,G=q.length-1;K>=1&&G>=0&&z[K]!==q[G];)G--;for(;K>=1&&G>=0;K--,G--)if(z[K]!==q[G]){if(K!==1||G!==1)do if(K--,G--,G<0||z[K]!==q[G]){var pe=`
`+z[K].replace(" at new "," at ");return k.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",k.displayName)),typeof k=="function"&&he.set(k,pe),pe}while(K>=1&&G>=0);break}}}finally{me=!1,oe.current=ht,Y(),Error.prepareStackTrace=ct}var xe=k?k.displayName||k.name:"",Pe=xe?ue(xe):"";return typeof k=="function"&&he.set(k,Pe),Pe}function F(k,fe,Se){return j(k,!1)}function _e(k){var fe=k.prototype;return!!(fe&&fe.isReactComponent)}function Fe(k,fe,Se){if(k==null)return"";if(typeof k=="function")return j(k,_e(k));if(typeof k=="string")return ue(k);switch(k){case c:return ue("Suspense");case h:return ue("SuspenseList")}if(typeof k=="object")switch(k.$$typeof){case l:return F(k.render);case u:return Fe(k.type,fe,Se);case d:{var $e=k,ct=$e._payload,ht=$e._init;try{return Fe(ht(ct),fe,Se)}catch{}}}return""}var Xe=Object.prototype.hasOwnProperty,Be={},st=g.ReactDebugCurrentFrame;function Ne(k){if(k){var fe=k._owner,Se=Fe(k.type,k._source,fe?fe.type:null);st.setExtraStackFrame(Se)}else st.setExtraStackFrame(null)}function D(k,fe,Se,$e,ct){{var ht=Function.call.bind(Xe);for(var w in k)if(ht(k,w)){var z=void 0;try{if(typeof k[w]!="function"){var q=Error(($e||"React class")+": "+Se+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof k[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw q.name="Invariant Violation",q}z=k[w](fe,w,$e,Se,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(K){z=K}z&&!(z instanceof Error)&&(Ne(ct),T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",$e||"React class",Se,w,typeof z),Ne(null)),z instanceof Error&&!(z.message in Be)&&(Be[z.message]=!0,Ne(ct),T("Failed %s type: %s",Se,z.message),Ne(null))}}}var R=Array.isArray;function J(k){return R(k)}function ee(k){{var fe=typeof Symbol=="function"&&Symbol.toStringTag,Se=fe&&k[Symbol.toStringTag]||k.constructor.name||"Object";return Se}}function de(k){try{return le(k),!1}catch{return!0}}function le(k){return""+k}function De(k){if(de(k))return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ee(k)),le(k)}var ve=g.ReactCurrentOwner,Ie={key:!0,ref:!0,__self:!0,__source:!0},it,ge,Ce;Ce={};function He(k){if(Xe.call(k,"ref")){var fe=Object.getOwnPropertyDescriptor(k,"ref").get;if(fe&&fe.isReactWarning)return!1}return k.ref!==void 0}function We(k){if(Xe.call(k,"key")){var fe=Object.getOwnPropertyDescriptor(k,"key").get;if(fe&&fe.isReactWarning)return!1}return k.key!==void 0}function Le(k,fe){if(typeof k.ref=="string"&&ve.current&&fe&&ve.current.stateNode!==fe){var Se=A(ve.current.type);Ce[Se]||(T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',A(ve.current.type),k.ref),Ce[Se]=!0)}}function et(k,fe){{var Se=function(){it||(it=!0,T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",fe))};Se.isReactWarning=!0,Object.defineProperty(k,"key",{get:Se,configurable:!0})}}function Ye(k,fe){{var Se=function(){ge||(ge=!0,T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",fe))};Se.isReactWarning=!0,Object.defineProperty(k,"ref",{get:Se,configurable:!0})}}var Et=function(k,fe,Se,$e,ct,ht,w){var z={$$typeof:e,type:k,key:fe,ref:Se,props:w,_owner:ht};return z._store={},Object.defineProperty(z._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(z,"_self",{configurable:!1,enumerable:!1,writable:!1,value:$e}),Object.defineProperty(z,"_source",{configurable:!1,enumerable:!1,writable:!1,value:ct}),Object.freeze&&(Object.freeze(z.props),Object.freeze(z)),z};function X(k,fe,Se,$e,ct){{var ht,w={},z=null,q=null;Se!==void 0&&(De(Se),z=""+Se),We(fe)&&(De(fe.key),z=""+fe.key),He(fe)&&(q=fe.ref,Le(fe,ct));for(ht in fe)Xe.call(fe,ht)&&!Ie.hasOwnProperty(ht)&&(w[ht]=fe[ht]);if(k&&k.defaultProps){var K=k.defaultProps;for(ht in K)w[ht]===void 0&&(w[ht]=K[ht])}if(z||q){var G=typeof k=="function"?k.displayName||k.name||"Unknown":k;z&&et(w,G),q&&Ye(w,G)}return Et(k,z,q,ct,$e,ve.current,w)}}var Ae=g.ReactCurrentOwner,ie=g.ReactDebugCurrentFrame;function ce(k){if(k){var fe=k._owner,Se=Fe(k.type,k._source,fe?fe.type:null);ie.setExtraStackFrame(Se)}else ie.setExtraStackFrame(null)}var Ee;Ee=!1;function Me(k){return typeof k=="object"&&k!==null&&k.$$typeof===e}function Ke(){{if(Ae.current){var k=A(Ae.current.type);if(k)return`

Check the render method of \``+k+"`."}return""}}function Nt(k){return""}var Zt={};function rt(k){{var fe=Ke();if(!fe){var Se=typeof k=="string"?k:k.displayName||k.name;Se&&(fe=`

Check the top-level render call using <`+Se+">.")}return fe}}function Qt(k,fe){{if(!k._store||k._store.validated||k.key!=null)return;k._store.validated=!0;var Se=rt(fe);if(Zt[Se])return;Zt[Se]=!0;var $e="";k&&k._owner&&k._owner!==Ae.current&&($e=" It was passed a child from "+A(k._owner.type)+"."),ce(k),T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',Se,$e),ce(null)}}function En(k,fe){{if(typeof k!="object")return;if(J(k))for(var Se=0;Se<k.length;Se++){var $e=k[Se];Me($e)&&Qt($e,fe)}else if(Me(k))k._store&&(k._store.validated=!0);else if(k){var ct=p(k);if(typeof ct=="function"&&ct!==k.entries)for(var ht=ct.call(k),w;!(w=ht.next()).done;)Me(w.value)&&Qt(w.value,fe)}}}function Fs(k){{var fe=k.type;if(fe==null||typeof fe=="string")return;var Se;if(typeof fe=="function")Se=fe.propTypes;else if(typeof fe=="object"&&(fe.$$typeof===l||fe.$$typeof===u))Se=fe.propTypes;else return;if(Se){var $e=A(fe);D(Se,k.props,"prop",$e,k)}else if(fe.PropTypes!==void 0&&!Ee){Ee=!0;var ct=A(fe);T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",ct||"Unknown")}typeof fe.getDefaultProps=="function"&&!fe.getDefaultProps.isReactClassApproved&&T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Dr(k){{for(var fe=Object.keys(k.props),Se=0;Se<fe.length;Se++){var $e=fe[Se];if($e!=="children"&&$e!=="key"){ce(k),T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",$e),ce(null);break}}k.ref!==null&&(ce(k),T("Invalid attribute `ref` supplied to `React.Fragment`."),ce(null))}}var Wn={};function nr(k,fe,Se,$e,ct,ht){{var w=_(k);if(!w){var z="";(k===void 0||typeof k=="object"&&k!==null&&Object.keys(k).length===0)&&(z+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var q=Nt();q?z+=q:z+=Ke();var K;k===null?K="null":J(k)?K="array":k!==void 0&&k.$$typeof===e?(K="<"+(A(k.type)||"Unknown")+" />",z=" Did you accidentally export a JSX literal instead of a component?"):K=typeof k,T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",K,z)}var G=X(k,fe,Se,ct,ht);if(G==null)return G;if(w){var pe=fe.children;if(pe!==void 0)if($e)if(J(pe)){for(var xe=0;xe<pe.length;xe++)En(pe[xe],k);Object.freeze&&Object.freeze(pe)}else T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else En(pe,k)}if(Xe.call(fe,"key")){var Pe=A(k),Te=Object.keys(fe).filter(function(Oe){return Oe!=="key"}),ze=Te.length>0?"{key: someKey, "+Te.join(": ..., ")+": ...}":"{key: someKey}";if(!Wn[Pe+ze]){var je=Te.length>0?"{"+Te.join(": ..., ")+": ...}":"{}";T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ze,Pe,je,Pe),Wn[Pe+ze]=!0}}return k===i?Dr(G):Fs(G),G}}function Bs(k,fe,Se){return nr(k,fe,Se,!0)}function ks(k,fe,Se){return nr(k,fe,Se,!1)}var ir=ks,rr=Bs;Ro.Fragment=i,Ro.jsx=ir,Ro.jsxs=rr}()),Ro}process.env.NODE_ENV==="production"?mh.exports=qA():mh.exports=KA();var pt=mh.exports;const Co={black:"#000",white:"#fff"},Ts={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},bs={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},As={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},ws={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Rs={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Po={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},ZA={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function Ji(n,...e){const t=new URL(`https://mui.com/production-error/?code=${n}`);return e.forEach(i=>t.searchParams.append("args[]",i)),`Minified MUI error #${n}; visit ${t} for the full message.`}const QA="$$material";function al(){return al=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},al.apply(null,arguments)}function Ym(n){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=n(t)),e[t]}}var JA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ew=Ym(function(n){return JA.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),tw=!1;function nw(n){if(n.sheet)return n.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===n)return document.styleSheets[e]}function iw(n){var e=document.createElement("style");return e.setAttribute("data-emotion",n.key),n.nonce!==void 0&&e.setAttribute("nonce",n.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var rw=function(){function n(t){var i=this;this._insertTag=function(r){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,s),i.tags.push(r)},this.isSpeedy=t.speedy===void 0?!tw:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=n.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(iw(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var s=nw(r);try{s.insertRule(i,s.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},n}(),hn="-ms-",ll="-moz-",mt="-webkit-",qm="comm",gh="rule",_h="decl",sw="@import",Km="@keyframes",ow="@layer",aw=Math.abs,cl=String.fromCharCode,lw=Object.assign;function cw(n,e){return sn(n,0)^45?(((e<<2^sn(n,0))<<2^sn(n,1))<<2^sn(n,2))<<2^sn(n,3):0}function Zm(n){return n.trim()}function uw(n,e){return(n=e.exec(n))?n[0]:n}function gt(n,e,t){return n.replace(e,t)}function vh(n,e){return n.indexOf(e)}function sn(n,e){return n.charCodeAt(e)|0}function Io(n,e,t){return n.slice(e,t)}function fi(n){return n.length}function yh(n){return n.length}function ul(n,e){return e.push(n),n}function hw(n,e){return n.map(e).join("")}var hl=1,Cs=1,Qm=0,Mn=0,jt=0,Ps="";function dl(n,e,t,i,r,s,o){return{value:n,root:e,parent:t,type:i,props:r,children:s,line:hl,column:Cs,length:o,return:""}}function Lo(n,e){return lw(dl("",null,null,"",null,null,0),n,{length:-n.length},e)}function dw(){return jt}function fw(){return jt=Mn>0?sn(Ps,--Mn):0,Cs--,jt===10&&(Cs=1,hl--),jt}function Pn(){return jt=Mn<Qm?sn(Ps,Mn++):0,Cs++,jt===10&&(Cs=1,hl++),jt}function pi(){return sn(Ps,Mn)}function fl(){return Mn}function Do(n,e){return Io(Ps,n,e)}function No(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jm(n){return hl=Cs=1,Qm=fi(Ps=n),Mn=0,[]}function eg(n){return Ps="",n}function pl(n){return Zm(Do(Mn-1,xh(n===91?n+2:n===40?n+1:n)))}function pw(n){for(;(jt=pi())&&jt<33;)Pn();return No(n)>2||No(jt)>3?"":" "}function mw(n,e){for(;--e&&Pn()&&!(jt<48||jt>102||jt>57&&jt<65||jt>70&&jt<97););return Do(n,fl()+(e<6&&pi()==32&&Pn()==32))}function xh(n){for(;Pn();)switch(jt){case n:return Mn;case 34:case 39:n!==34&&n!==39&&xh(jt);break;case 40:n===41&&xh(n);break;case 92:Pn();break}return Mn}function gw(n,e){for(;Pn()&&n+jt!==57;)if(n+jt===84&&pi()===47)break;return"/*"+Do(e,Mn-1)+"*"+cl(n===47?n:Pn())}function _w(n){for(;!No(pi());)Pn();return Do(n,Mn)}function vw(n){return eg(ml("",null,null,null,[""],n=Jm(n),0,[0],n))}function ml(n,e,t,i,r,s,o,a,l){for(var c=0,h=0,u=o,d=0,f=0,m=0,v=1,p=1,g=1,T=0,y="",M=r,E=s,I=i,P=y;p;)switch(m=T,T=Pn()){case 40:if(m!=108&&sn(P,u-1)==58){vh(P+=gt(pl(T),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:P+=pl(T);break;case 9:case 10:case 13:case 32:P+=pw(m);break;case 92:P+=mw(fl()-1,7);continue;case 47:switch(pi()){case 42:case 47:ul(yw(gw(Pn(),fl()),e,t),l);break;default:P+="/"}break;case 123*v:a[c++]=fi(P)*g;case 125*v:case 59:case 0:switch(T){case 0:case 125:p=0;case 59+h:g==-1&&(P=gt(P,/\f/g,"")),f>0&&fi(P)-u&&ul(f>32?ng(P+";",i,t,u-1):ng(gt(P," ","")+";",i,t,u-2),l);break;case 59:P+=";";default:if(ul(I=tg(P,e,t,c,h,r,a,y,M=[],E=[],u),s),T===123)if(h===0)ml(P,e,I,I,M,s,u,a,E);else switch(d===99&&sn(P,3)===110?100:d){case 100:case 108:case 109:case 115:ml(n,I,I,i&&ul(tg(n,I,I,0,0,r,a,y,r,M=[],u),E),r,E,u,a,i?M:E);break;default:ml(P,I,I,I,[""],E,0,a,E)}}c=h=f=0,v=g=1,y=P="",u=o;break;case 58:u=1+fi(P),f=m;default:if(v<1){if(T==123)--v;else if(T==125&&v++==0&&fw()==125)continue}switch(P+=cl(T),T*v){case 38:g=h>0?1:(P+="\f",-1);break;case 44:a[c++]=(fi(P)-1)*g,g=1;break;case 64:pi()===45&&(P+=pl(Pn())),d=pi(),h=u=fi(y=P+=_w(fl())),T++;break;case 45:m===45&&fi(P)==2&&(v=0)}}return s}function tg(n,e,t,i,r,s,o,a,l,c,h){for(var u=r-1,d=r===0?s:[""],f=yh(d),m=0,v=0,p=0;m<i;++m)for(var g=0,T=Io(n,u+1,u=aw(v=o[m])),y=n;g<f;++g)(y=Zm(v>0?d[g]+" "+T:gt(T,/&\f/g,d[g])))&&(l[p++]=y);return dl(n,e,t,r===0?gh:a,l,c,h)}function yw(n,e,t){return dl(n,e,t,qm,cl(dw()),Io(n,2,-2),0)}function ng(n,e,t,i){return dl(n,e,t,_h,Io(n,0,i),Io(n,i+1,-1),i)}function Is(n,e){for(var t="",i=yh(n),r=0;r<i;r++)t+=e(n[r],r,n,e)||"";return t}function xw(n,e,t,i){switch(n.type){case ow:if(n.children.length)break;case sw:case _h:return n.return=n.return||n.value;case qm:return"";case Km:return n.return=n.value+"{"+Is(n.children,i)+"}";case gh:n.value=n.props.join(",")}return fi(t=Is(n.children,i))?n.return=n.value+"{"+t+"}":""}function Mw(n){var e=yh(n);return function(t,i,r,s){for(var o="",a=0;a<e;a++)o+=n[a](t,i,r,s)||"";return o}}function Sw(n){return function(e){e.root||(e=e.return)&&n(e)}}var Ew=function(e,t,i){for(var r=0,s=0;r=s,s=pi(),r===38&&s===12&&(t[i]=1),!No(s);)Pn();return Do(e,Mn)},Tw=function(e,t){var i=-1,r=44;do switch(No(r)){case 0:r===38&&pi()===12&&(t[i]=1),e[i]+=Ew(Mn-1,t,i);break;case 2:e[i]+=pl(r);break;case 4:if(r===44){e[++i]=pi()===58?"&\f":"",t[i]=e[i].length;break}default:e[i]+=cl(r)}while(r=Pn());return e},bw=function(e,t){return eg(Tw(Jm(e),t))},ig=new WeakMap,Aw=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!ig.get(i))&&!r){ig.set(e,!0);for(var s=[],o=bw(t,s),a=i.props,l=0,c=0;l<o.length;l++)for(var h=0;h<a.length;h++,c++)e.props[c]=s[l]?o[l].replace(/&\f/g,a[h]):a[h]+" "+o[l]}}},ww=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function rg(n,e){switch(cw(n,e)){case 5103:return mt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return mt+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return mt+n+ll+n+hn+n+n;case 6828:case 4268:return mt+n+hn+n+n;case 6165:return mt+n+hn+"flex-"+n+n;case 5187:return mt+n+gt(n,/(\w+).+(:[^]+)/,mt+"box-$1$2"+hn+"flex-$1$2")+n;case 5443:return mt+n+hn+"flex-item-"+gt(n,/flex-|-self/,"")+n;case 4675:return mt+n+hn+"flex-line-pack"+gt(n,/align-content|flex-|-self/,"")+n;case 5548:return mt+n+hn+gt(n,"shrink","negative")+n;case 5292:return mt+n+hn+gt(n,"basis","preferred-size")+n;case 6060:return mt+"box-"+gt(n,"-grow","")+mt+n+hn+gt(n,"grow","positive")+n;case 4554:return mt+gt(n,/([^-])(transform)/g,"$1"+mt+"$2")+n;case 6187:return gt(gt(gt(n,/(zoom-|grab)/,mt+"$1"),/(image-set)/,mt+"$1"),n,"")+n;case 5495:case 3959:return gt(n,/(image-set\([^]*)/,mt+"$1$`$1");case 4968:return gt(gt(n,/(.+:)(flex-)?(.*)/,mt+"box-pack:$3"+hn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+mt+n+n;case 4095:case 3583:case 4068:case 2532:return gt(n,/(.+)-inline(.+)/,mt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fi(n)-1-e>6)switch(sn(n,e+1)){case 109:if(sn(n,e+4)!==45)break;case 102:return gt(n,/(.+:)(.+)-([^]+)/,"$1"+mt+"$2-$3$1"+ll+(sn(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~vh(n,"stretch")?rg(gt(n,"stretch","fill-available"),e)+n:n}break;case 4949:if(sn(n,e+1)!==115)break;case 6444:switch(sn(n,fi(n)-3-(~vh(n,"!important")&&10))){case 107:return gt(n,":",":"+mt)+n;case 101:return gt(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+mt+(sn(n,14)===45?"inline-":"")+"box$3$1"+mt+"$2$3$1"+hn+"$2box$3")+n}break;case 5936:switch(sn(n,e+11)){case 114:return mt+n+hn+gt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return mt+n+hn+gt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return mt+n+hn+gt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return mt+n+hn+n+n}return n}var Rw=function(e,t,i,r){if(e.length>-1&&!e.return)switch(e.type){case _h:e.return=rg(e.value,e.length);break;case Km:return Is([Lo(e,{value:gt(e.value,"@","@"+mt)})],r);case gh:if(e.length)return hw(e.props,function(s){switch(uw(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Is([Lo(e,{props:[gt(s,/:(read-\w+)/,":"+ll+"$1")]})],r);case"::placeholder":return Is([Lo(e,{props:[gt(s,/:(plac\w+)/,":"+mt+"input-$1")]}),Lo(e,{props:[gt(s,/:(plac\w+)/,":"+ll+"$1")]}),Lo(e,{props:[gt(s,/:(plac\w+)/,hn+"input-$1")]})],r)}return""})}},Cw=[Rw],Pw=function(e){var t=e.key;if(t==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(v){var p=v.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var r=e.stylisPlugins||Cw,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(v){for(var p=v.getAttribute("data-emotion").split(" "),g=1;g<p.length;g++)s[p[g]]=!0;a.push(v)});var l,c=[Aw,ww];{var h,u=[xw,Sw(function(v){h.insert(v)})],d=Mw(c.concat(r,u)),f=function(p){return Is(vw(p),d)};l=function(p,g,T,y){h=T,f(p?p+"{"+g.styles+"}":g.styles),y&&(m.inserted[g.name]=!0)}}var m={key:t,sheet:new rw({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return m.sheet.hydrate(a),m},Mh={exports:{}},_t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function Iw(){if(sg)return _t;sg=1;var n=typeof Symbol=="function"&&Symbol.for,e=n?Symbol.for("react.element"):60103,t=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,a=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,u=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,p=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,T=n?Symbol.for("react.scope"):60119;function y(E){if(typeof E=="object"&&E!==null){var I=E.$$typeof;switch(I){case e:switch(E=E.type,E){case l:case c:case i:case s:case r:case u:return E;default:switch(E=E&&E.$$typeof,E){case a:case h:case m:case f:case o:return E;default:return I}}case t:return I}}}function M(E){return y(E)===c}return _t.AsyncMode=l,_t.ConcurrentMode=c,_t.ContextConsumer=a,_t.ContextProvider=o,_t.Element=e,_t.ForwardRef=h,_t.Fragment=i,_t.Lazy=m,_t.Memo=f,_t.Portal=t,_t.Profiler=s,_t.StrictMode=r,_t.Suspense=u,_t.isAsyncMode=function(E){return M(E)||y(E)===l},_t.isConcurrentMode=M,_t.isContextConsumer=function(E){return y(E)===a},_t.isContextProvider=function(E){return y(E)===o},_t.isElement=function(E){return typeof E=="object"&&E!==null&&E.$$typeof===e},_t.isForwardRef=function(E){return y(E)===h},_t.isFragment=function(E){return y(E)===i},_t.isLazy=function(E){return y(E)===m},_t.isMemo=function(E){return y(E)===f},_t.isPortal=function(E){return y(E)===t},_t.isProfiler=function(E){return y(E)===s},_t.isStrictMode=function(E){return y(E)===r},_t.isSuspense=function(E){return y(E)===u},_t.isValidElementType=function(E){return typeof E=="string"||typeof E=="function"||E===i||E===c||E===s||E===r||E===u||E===d||typeof E=="object"&&E!==null&&(E.$$typeof===m||E.$$typeof===f||E.$$typeof===o||E.$$typeof===a||E.$$typeof===h||E.$$typeof===p||E.$$typeof===g||E.$$typeof===T||E.$$typeof===v)},_t.typeOf=y,_t}var vt={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Lw(){return og||(og=1,process.env.NODE_ENV!=="production"&&function(){var n=typeof Symbol=="function"&&Symbol.for,e=n?Symbol.for("react.element"):60103,t=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,a=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,u=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,p=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,T=n?Symbol.for("react.scope"):60119;function y(j){return typeof j=="string"||typeof j=="function"||j===i||j===c||j===s||j===r||j===u||j===d||typeof j=="object"&&j!==null&&(j.$$typeof===m||j.$$typeof===f||j.$$typeof===o||j.$$typeof===a||j.$$typeof===h||j.$$typeof===p||j.$$typeof===g||j.$$typeof===T||j.$$typeof===v)}function M(j){if(typeof j=="object"&&j!==null){var F=j.$$typeof;switch(F){case e:var _e=j.type;switch(_e){case l:case c:case i:case s:case r:case u:return _e;default:var Fe=_e&&_e.$$typeof;switch(Fe){case a:case h:case m:case f:case o:return Fe;default:return F}}case t:return F}}}var E=l,I=c,P=a,B=o,Z=e,_=h,S=i,H=m,A=f,b=t,L=s,C=r,U=u,O=!1;function te(j){return O||(O=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),V(j)||M(j)===l}function V(j){return M(j)===c}function W(j){return M(j)===a}function ne(j){return M(j)===o}function ae(j){return typeof j=="object"&&j!==null&&j.$$typeof===e}function $(j){return M(j)===h}function Y(j){return M(j)===i}function oe(j){return M(j)===m}function re(j){return M(j)===f}function ue(j){return M(j)===t}function me(j){return M(j)===s}function he(j){return M(j)===r}function be(j){return M(j)===u}vt.AsyncMode=E,vt.ConcurrentMode=I,vt.ContextConsumer=P,vt.ContextProvider=B,vt.Element=Z,vt.ForwardRef=_,vt.Fragment=S,vt.Lazy=H,vt.Memo=A,vt.Portal=b,vt.Profiler=L,vt.StrictMode=C,vt.Suspense=U,vt.isAsyncMode=te,vt.isConcurrentMode=V,vt.isContextConsumer=W,vt.isContextProvider=ne,vt.isElement=ae,vt.isForwardRef=$,vt.isFragment=Y,vt.isLazy=oe,vt.isMemo=re,vt.isPortal=ue,vt.isProfiler=me,vt.isStrictMode=he,vt.isSuspense=be,vt.isValidElementType=y,vt.typeOf=M}()),vt}process.env.NODE_ENV==="production"?Mh.exports=Iw():Mh.exports=Lw();var Dw=Mh.exports,ag=Dw,Nw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ow={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lg={};lg[ag.ForwardRef]=Nw,lg[ag.Memo]=Ow;var Uw=!0;function Fw(n,e,t){var i="";return t.split(" ").forEach(function(r){n[r]!==void 0?e.push(n[r]+";"):r&&(i+=r+" ")}),i}var cg=function(e,t,i){var r=e.key+"-"+t.name;(i===!1||Uw===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},Bw=function(e,t,i){cg(e,t,i);var r=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var s=t;do e.insert(t===s?"."+r:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function kw(n){for(var e=0,t,i=0,r=n.length;r>=4;++i,r-=4)t=n.charCodeAt(i)&255|(n.charCodeAt(++i)&255)<<8|(n.charCodeAt(++i)&255)<<16|(n.charCodeAt(++i)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(n.charCodeAt(i+2)&255)<<16;case 2:e^=(n.charCodeAt(i+1)&255)<<8;case 1:e^=n.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Vw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zw=!1,Hw=/[A-Z]|^ms/g,Gw=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ug=function(e){return e.charCodeAt(1)===45},hg=function(e){return e!=null&&typeof e!="boolean"},Sh=Ym(function(n){return ug(n)?n:n.replace(Hw,"-$&").toLowerCase()}),dg=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(Gw,function(i,r,s){return mi={name:r,styles:s,next:mi},r})}return Vw[e]!==1&&!ug(e)&&typeof t=="number"&&t!==0?t+"px":t},Ww="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Oo(n,e,t){if(t==null)return"";var i=t;if(i.__emotion_styles!==void 0)return i;switch(typeof t){case"boolean":return"";case"object":{var r=t;if(r.anim===1)return mi={name:r.name,styles:r.styles,next:mi},r.name;var s=t;if(s.styles!==void 0){var o=s.next;if(o!==void 0)for(;o!==void 0;)mi={name:o.name,styles:o.styles,next:mi},o=o.next;var a=s.styles+";";return a}return $w(n,e,t)}case"function":{if(n!==void 0){var l=mi,c=t(n);return mi=l,Oo(n,e,c)}break}}var h=t;if(e==null)return h;var u=e[h];return u!==void 0?u:h}function $w(n,e,t){var i="";if(Array.isArray(t))for(var r=0;r<t.length;r++)i+=Oo(n,e,t[r])+";";else for(var s in t){var o=t[s];if(typeof o!="object"){var a=o;e!=null&&e[a]!==void 0?i+=s+"{"+e[a]+"}":hg(a)&&(i+=Sh(s)+":"+dg(s,a)+";")}else{if(s==="NO_COMPONENT_SELECTOR"&&zw)throw new Error(Ww);if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var l=0;l<o.length;l++)hg(o[l])&&(i+=Sh(s)+":"+dg(s,o[l])+";");else{var c=Oo(n,e,o);switch(s){case"animation":case"animationName":{i+=Sh(s)+":"+c+";";break}default:i+=s+"{"+c+"}"}}}}return i}var fg=/label:\s*([^\s;{]+)\s*(;|$)/g,mi;function Eh(n,e,t){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var i=!0,r="";mi=void 0;var s=n[0];if(s==null||s.raw===void 0)i=!1,r+=Oo(t,e,s);else{var o=s;r+=o[0]}for(var a=1;a<n.length;a++)if(r+=Oo(t,e,n[a]),i){var l=s;r+=l[a]}fg.lastIndex=0;for(var c="",h;(h=fg.exec(r))!==null;)c+="-"+h[1];var u=kw(r)+c;return{name:u,styles:r,next:mi}}var Xw=function(e){return e()},jw=Ge.useInsertionEffect?Ge.useInsertionEffect:!1,Yw=jw||Xw,pg=Ge.createContext(typeof HTMLElement<"u"?Pw({key:"css"}):null);pg.Provider;var qw=function(e){return tt.forwardRef(function(t,i){var r=tt.useContext(pg);return e(t,r,i)})},mg=Ge.createContext({});function Kw(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return Eh(e)}var Th=function(){var e=Kw.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Zw=ew,Qw=function(e){return e!=="theme"},gg=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Zw:Qw},_g=function(e,t,i){var r;if(t){var s=t.shouldForwardProp;r=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof r!="function"&&i&&(r=e.__emotion_forwardProp),r},Jw=!1,eR=function(e){var t=e.cache,i=e.serialized,r=e.isStringTag;return cg(t,i,r),Yw(function(){return Bw(t,i,r)}),null},tR=function n(e,t){var i=e.__emotion_real===e,r=i&&e.__emotion_base||e,s,o;t!==void 0&&(s=t.label,o=t.target);var a=_g(e,t,i),l=a||gg(r),c=!l("as");return function(){var h=arguments,u=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&u.push("label:"+s+";"),h[0]==null||h[0].raw===void 0)u.push.apply(u,h);else{u.push(h[0][0]);for(var d=h.length,f=1;f<d;f++)u.push(h[f],h[0][f])}var m=qw(function(v,p,g){var T=c&&v.as||r,y="",M=[],E=v;if(v.theme==null){E={};for(var I in v)E[I]=v[I];E.theme=Ge.useContext(mg)}typeof v.className=="string"?y=Fw(p.registered,M,v.className):v.className!=null&&(y=v.className+" ");var P=Eh(u.concat(M),p.registered,E);y+=p.key+"-"+P.name,o!==void 0&&(y+=" "+o);var B=c&&a===void 0?gg(T):l,Z={};for(var _ in v)c&&_==="as"||B(_)&&(Z[_]=v[_]);return Z.className=y,g&&(Z.ref=g),Ge.createElement(Ge.Fragment,null,Ge.createElement(eR,{cache:p,serialized:P,isStringTag:typeof T=="string"}),Ge.createElement(T,Z))});return m.displayName=s!==void 0?s:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",m.defaultProps=e.defaultProps,m.__emotion_real=m,m.__emotion_base=r,m.__emotion_styles=u,m.__emotion_forwardProp=a,Object.defineProperty(m,"toString",{value:function(){return o===void 0&&Jw?"NO_COMPONENT_SELECTOR":"."+o}}),m.withComponent=function(v,p){return n(v,al({},t,p,{shouldForwardProp:_g(m,p,!0)})).apply(void 0,u)},m}},nR=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],bh=tR.bind();nR.forEach(function(n){bh[n]=bh(n)});var Ah={exports:{}},gl={exports:{}},yt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function iR(){if(vg)return yt;vg=1;var n=typeof Symbol=="function"&&Symbol.for,e=n?Symbol.for("react.element"):60103,t=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,a=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,u=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,p=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,T=n?Symbol.for("react.scope"):60119;function y(E){if(typeof E=="object"&&E!==null){var I=E.$$typeof;switch(I){case e:switch(E=E.type,E){case l:case c:case i:case s:case r:case u:return E;default:switch(E=E&&E.$$typeof,E){case a:case h:case m:case f:case o:return E;default:return I}}case t:return I}}}function M(E){return y(E)===c}return yt.AsyncMode=l,yt.ConcurrentMode=c,yt.ContextConsumer=a,yt.ContextProvider=o,yt.Element=e,yt.ForwardRef=h,yt.Fragment=i,yt.Lazy=m,yt.Memo=f,yt.Portal=t,yt.Profiler=s,yt.StrictMode=r,yt.Suspense=u,yt.isAsyncMode=function(E){return M(E)||y(E)===l},yt.isConcurrentMode=M,yt.isContextConsumer=function(E){return y(E)===a},yt.isContextProvider=function(E){return y(E)===o},yt.isElement=function(E){return typeof E=="object"&&E!==null&&E.$$typeof===e},yt.isForwardRef=function(E){return y(E)===h},yt.isFragment=function(E){return y(E)===i},yt.isLazy=function(E){return y(E)===m},yt.isMemo=function(E){return y(E)===f},yt.isPortal=function(E){return y(E)===t},yt.isProfiler=function(E){return y(E)===s},yt.isStrictMode=function(E){return y(E)===r},yt.isSuspense=function(E){return y(E)===u},yt.isValidElementType=function(E){return typeof E=="string"||typeof E=="function"||E===i||E===c||E===s||E===r||E===u||E===d||typeof E=="object"&&E!==null&&(E.$$typeof===m||E.$$typeof===f||E.$$typeof===o||E.$$typeof===a||E.$$typeof===h||E.$$typeof===p||E.$$typeof===g||E.$$typeof===T||E.$$typeof===v)},yt.typeOf=y,yt}var xt={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function rR(){return yg||(yg=1,process.env.NODE_ENV!=="production"&&function(){var n=typeof Symbol=="function"&&Symbol.for,e=n?Symbol.for("react.element"):60103,t=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,a=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,u=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,p=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,T=n?Symbol.for("react.scope"):60119;function y(j){return typeof j=="string"||typeof j=="function"||j===i||j===c||j===s||j===r||j===u||j===d||typeof j=="object"&&j!==null&&(j.$$typeof===m||j.$$typeof===f||j.$$typeof===o||j.$$typeof===a||j.$$typeof===h||j.$$typeof===p||j.$$typeof===g||j.$$typeof===T||j.$$typeof===v)}function M(j){if(typeof j=="object"&&j!==null){var F=j.$$typeof;switch(F){case e:var _e=j.type;switch(_e){case l:case c:case i:case s:case r:case u:return _e;default:var Fe=_e&&_e.$$typeof;switch(Fe){case a:case h:case m:case f:case o:return Fe;default:return F}}case t:return F}}}var E=l,I=c,P=a,B=o,Z=e,_=h,S=i,H=m,A=f,b=t,L=s,C=r,U=u,O=!1;function te(j){return O||(O=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),V(j)||M(j)===l}function V(j){return M(j)===c}function W(j){return M(j)===a}function ne(j){return M(j)===o}function ae(j){return typeof j=="object"&&j!==null&&j.$$typeof===e}function $(j){return M(j)===h}function Y(j){return M(j)===i}function oe(j){return M(j)===m}function re(j){return M(j)===f}function ue(j){return M(j)===t}function me(j){return M(j)===s}function he(j){return M(j)===r}function be(j){return M(j)===u}xt.AsyncMode=E,xt.ConcurrentMode=I,xt.ContextConsumer=P,xt.ContextProvider=B,xt.Element=Z,xt.ForwardRef=_,xt.Fragment=S,xt.Lazy=H,xt.Memo=A,xt.Portal=b,xt.Profiler=L,xt.StrictMode=C,xt.Suspense=U,xt.isAsyncMode=te,xt.isConcurrentMode=V,xt.isContextConsumer=W,xt.isContextProvider=ne,xt.isElement=ae,xt.isForwardRef=$,xt.isFragment=Y,xt.isLazy=oe,xt.isMemo=re,xt.isPortal=ue,xt.isProfiler=me,xt.isStrictMode=he,xt.isSuspense=be,xt.isValidElementType=y,xt.typeOf=M}()),xt}var xg;function Mg(){return xg||(xg=1,process.env.NODE_ENV==="production"?gl.exports=iR():gl.exports=rR()),gl.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var wh,Sg;function sR(){if(Sg)return wh;Sg=1;var n=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function i(s){if(s==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(s)}function r(){try{if(!Object.assign)return!1;var s=new String("abc");if(s[5]="de",Object.getOwnPropertyNames(s)[0]==="5")return!1;for(var o={},a=0;a<10;a++)o["_"+String.fromCharCode(a)]=a;var l=Object.getOwnPropertyNames(o).map(function(h){return o[h]});if(l.join("")!=="0123456789")return!1;var c={};return"abcdefghijklmnopqrst".split("").forEach(function(h){c[h]=h}),Object.keys(Object.assign({},c)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return wh=r()?Object.assign:function(s,o){for(var a,l=i(s),c,h=1;h<arguments.length;h++){a=Object(arguments[h]);for(var u in a)e.call(a,u)&&(l[u]=a[u]);if(n){c=n(a);for(var d=0;d<c.length;d++)t.call(a,c[d])&&(l[c[d]]=a[c[d]])}}return l},wh}var Rh,Eg;function Ch(){if(Eg)return Rh;Eg=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Rh=n,Rh}var Ph,Tg;function bg(){return Tg||(Tg=1,Ph=Function.call.bind(Object.prototype.hasOwnProperty)),Ph}var Ih,Ag;function oR(){if(Ag)return Ih;Ag=1;var n=function(){};if(process.env.NODE_ENV!=="production"){var e=Ch(),t={},i=bg();n=function(s){var o="Warning: "+s;typeof console<"u"&&console.error(o);try{throw new Error(o)}catch{}}}function r(s,o,a,l,c){if(process.env.NODE_ENV!=="production"){for(var h in s)if(i(s,h)){var u;try{if(typeof s[h]!="function"){var d=Error((l||"React class")+": "+a+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof s[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=s[h](o,h,l,a,null,e)}catch(m){u=m}if(u&&!(u instanceof Error)&&n((l||"React class")+": type specification of "+a+" `"+h+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in t)){t[u.message]=!0;var f=c?c():"";n("Failed "+a+" type: "+u.message+(f??""))}}}}return r.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(t={})},Ih=r,Ih}var Lh,wg;function aR(){if(wg)return Lh;wg=1;var n=Mg(),e=sR(),t=Ch(),i=bg(),r=oR(),s=function(){};process.env.NODE_ENV!=="production"&&(s=function(a){var l="Warning: "+a;typeof console<"u"&&console.error(l);try{throw new Error(l)}catch{}});function o(){return null}return Lh=function(a,l){var c=typeof Symbol=="function"&&Symbol.iterator,h="@@iterator";function u(V){var W=V&&(c&&V[c]||V[h]);if(typeof W=="function")return W}var d="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:T(),arrayOf:y,element:M(),elementType:E(),instanceOf:I,node:_(),objectOf:B,oneOf:P,oneOfType:Z,shape:H,exact:A};function m(V,W){return V===W?V!==0||1/V===1/W:V!==V&&W!==W}function v(V,W){this.message=V,this.data=W&&typeof W=="object"?W:{},this.stack=""}v.prototype=Error.prototype;function p(V){if(process.env.NODE_ENV!=="production")var W={},ne=0;function ae(Y,oe,re,ue,me,he,be){if(ue=ue||d,he=he||re,be!==t){if(l){var j=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw j.name="Invariant Violation",j}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var F=ue+":"+re;!W[F]&&ne<3&&(s("You are manually calling a React.PropTypes validation function for the `"+he+"` prop on `"+ue+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),W[F]=!0,ne++)}}return oe[re]==null?Y?oe[re]===null?new v("The "+me+" `"+he+"` is marked as required "+("in `"+ue+"`, but its value is `null`.")):new v("The "+me+" `"+he+"` is marked as required in "+("`"+ue+"`, but its value is `undefined`.")):null:V(oe,re,ue,me,he)}var $=ae.bind(null,!1);return $.isRequired=ae.bind(null,!0),$}function g(V){function W(ne,ae,$,Y,oe,re){var ue=ne[ae],me=C(ue);if(me!==V){var he=U(ue);return new v("Invalid "+Y+" `"+oe+"` of type "+("`"+he+"` supplied to `"+$+"`, expected ")+("`"+V+"`."),{expectedType:V})}return null}return p(W)}function T(){return p(o)}function y(V){function W(ne,ae,$,Y,oe){if(typeof V!="function")return new v("Property `"+oe+"` of component `"+$+"` has invalid PropType notation inside arrayOf.");var re=ne[ae];if(!Array.isArray(re)){var ue=C(re);return new v("Invalid "+Y+" `"+oe+"` of type "+("`"+ue+"` supplied to `"+$+"`, expected an array."))}for(var me=0;me<re.length;me++){var he=V(re,me,$,Y,oe+"["+me+"]",t);if(he instanceof Error)return he}return null}return p(W)}function M(){function V(W,ne,ae,$,Y){var oe=W[ne];if(!a(oe)){var re=C(oe);return new v("Invalid "+$+" `"+Y+"` of type "+("`"+re+"` supplied to `"+ae+"`, expected a single ReactElement."))}return null}return p(V)}function E(){function V(W,ne,ae,$,Y){var oe=W[ne];if(!n.isValidElementType(oe)){var re=C(oe);return new v("Invalid "+$+" `"+Y+"` of type "+("`"+re+"` supplied to `"+ae+"`, expected a single ReactElement type."))}return null}return p(V)}function I(V){function W(ne,ae,$,Y,oe){if(!(ne[ae]instanceof V)){var re=V.name||d,ue=te(ne[ae]);return new v("Invalid "+Y+" `"+oe+"` of type "+("`"+ue+"` supplied to `"+$+"`, expected ")+("instance of `"+re+"`."))}return null}return p(W)}function P(V){if(!Array.isArray(V))return process.env.NODE_ENV!=="production"&&(arguments.length>1?s("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):s("Invalid argument supplied to oneOf, expected an array.")),o;function W(ne,ae,$,Y,oe){for(var re=ne[ae],ue=0;ue<V.length;ue++)if(m(re,V[ue]))return null;var me=JSON.stringify(V,function(be,j){var F=U(j);return F==="symbol"?String(j):j});return new v("Invalid "+Y+" `"+oe+"` of value `"+String(re)+"` "+("supplied to `"+$+"`, expected one of "+me+"."))}return p(W)}function B(V){function W(ne,ae,$,Y,oe){if(typeof V!="function")return new v("Property `"+oe+"` of component `"+$+"` has invalid PropType notation inside objectOf.");var re=ne[ae],ue=C(re);if(ue!=="object")return new v("Invalid "+Y+" `"+oe+"` of type "+("`"+ue+"` supplied to `"+$+"`, expected an object."));for(var me in re)if(i(re,me)){var he=V(re,me,$,Y,oe+"."+me,t);if(he instanceof Error)return he}return null}return p(W)}function Z(V){if(!Array.isArray(V))return process.env.NODE_ENV!=="production"&&s("Invalid argument supplied to oneOfType, expected an instance of array."),o;for(var W=0;W<V.length;W++){var ne=V[W];if(typeof ne!="function")return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+O(ne)+" at index "+W+"."),o}function ae($,Y,oe,re,ue){for(var me=[],he=0;he<V.length;he++){var be=V[he],j=be($,Y,oe,re,ue,t);if(j==null)return null;j.data&&i(j.data,"expectedType")&&me.push(j.data.expectedType)}var F=me.length>0?", expected one of type ["+me.join(", ")+"]":"";return new v("Invalid "+re+" `"+ue+"` supplied to "+("`"+oe+"`"+F+"."))}return p(ae)}function _(){function V(W,ne,ae,$,Y){return b(W[ne])?null:new v("Invalid "+$+" `"+Y+"` supplied to "+("`"+ae+"`, expected a ReactNode."))}return p(V)}function S(V,W,ne,ae,$){return new v((V||"React class")+": "+W+" type `"+ne+"."+ae+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+$+"`.")}function H(V){function W(ne,ae,$,Y,oe){var re=ne[ae],ue=C(re);if(ue!=="object")return new v("Invalid "+Y+" `"+oe+"` of type `"+ue+"` "+("supplied to `"+$+"`, expected `object`."));for(var me in V){var he=V[me];if(typeof he!="function")return S($,Y,oe,me,U(he));var be=he(re,me,$,Y,oe+"."+me,t);if(be)return be}return null}return p(W)}function A(V){function W(ne,ae,$,Y,oe){var re=ne[ae],ue=C(re);if(ue!=="object")return new v("Invalid "+Y+" `"+oe+"` of type `"+ue+"` "+("supplied to `"+$+"`, expected `object`."));var me=e({},ne[ae],V);for(var he in me){var be=V[he];if(i(V,he)&&typeof be!="function")return S($,Y,oe,he,U(be));if(!be)return new v("Invalid "+Y+" `"+oe+"` key `"+he+"` supplied to `"+$+"`.\nBad object: "+JSON.stringify(ne[ae],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(V),null,"  "));var j=be(re,he,$,Y,oe+"."+he,t);if(j)return j}return null}return p(W)}function b(V){switch(typeof V){case"number":case"string":case"undefined":return!0;case"boolean":return!V;case"object":if(Array.isArray(V))return V.every(b);if(V===null||a(V))return!0;var W=u(V);if(W){var ne=W.call(V),ae;if(W!==V.entries){for(;!(ae=ne.next()).done;)if(!b(ae.value))return!1}else for(;!(ae=ne.next()).done;){var $=ae.value;if($&&!b($[1]))return!1}}else return!1;return!0;default:return!1}}function L(V,W){return V==="symbol"?!0:W?W["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&W instanceof Symbol:!1}function C(V){var W=typeof V;return Array.isArray(V)?"array":V instanceof RegExp?"object":L(W,V)?"symbol":W}function U(V){if(typeof V>"u"||V===null)return""+V;var W=C(V);if(W==="object"){if(V instanceof Date)return"date";if(V instanceof RegExp)return"regexp"}return W}function O(V){var W=U(V);switch(W){case"array":case"object":return"an "+W;case"boolean":case"date":case"regexp":return"a "+W;default:return W}}function te(V){return!V.constructor||!V.constructor.name?d:V.constructor.name}return f.checkPropTypes=r,f.resetWarningCache=r.resetWarningCache,f.PropTypes=f,f},Lh}var Dh,Rg;function lR(){if(Rg)return Dh;Rg=1;var n=Ch();function e(){}function t(){}return t.resetWarningCache=e,Dh=function(){function i(o,a,l,c,h,u){if(u!==n){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}i.isRequired=i;function r(){return i}var s={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:r,element:i,elementType:i,instanceOf:r,node:i,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:t,resetWarningCache:e};return s.PropTypes=s,s},Dh}if(process.env.NODE_ENV!=="production"){var cR=Mg(),uR=!0;Ah.exports=aR()(cR.isElement,uR)}else Ah.exports=lR()();var hR=Ah.exports;const Q=$m(hR);/**
 * @mui/styled-engine v6.1.4
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function dR(n,e){const t=bh(n,e);return process.env.NODE_ENV!=="production"?(...i)=>{const r=typeof n=="string"?`"${n}"`:"component";return i.length===0?console.error([`MUI: Seems like you called \`styled(${r})()\` without a \`style\` argument.`,'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)):i.some(s=>s===void 0)&&console.error(`MUI: the styled(${r})(...args) API requires all its args to be defined.`),t(...i)}:t}function fR(n,e){Array.isArray(n.__emotion_styles)&&(n.__emotion_styles=e(n.__emotion_styles))}const Cg=[];function Pg(n){return Cg[0]=n,Eh(Cg)}function gi(n){if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function Ig(n){if(!gi(n))return n;const e={};return Object.keys(n).forEach(t=>{e[t]=Ig(n[t])}),e}function yn(n,e,t={clone:!0}){const i=t.clone?{...n}:n;return gi(n)&&gi(e)&&Object.keys(e).forEach(r=>{gi(e[r])&&Object.prototype.hasOwnProperty.call(n,r)&&gi(n[r])?i[r]=yn(n[r],e[r],t):t.clone?i[r]=gi(e[r])?Ig(e[r]):e[r]:i[r]=e[r]}),i}const pR=n=>{const e=Object.keys(n).map(t=>({key:t,val:n[t]}))||[];return e.sort((t,i)=>t.val-i.val),e.reduce((t,i)=>({...t,[i.key]:i.val}),{})};function mR(n){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:t="px",step:i=5,...r}=n,s=pR(e),o=Object.keys(s);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${t})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-i/100}${t})`}function c(d,f){const m=o.indexOf(f);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${t}) and (max-width:${(m!==-1&&typeof e[o[m]]=="number"?e[o[m]]:f)-i/100}${t})`}function h(d){return o.indexOf(d)+1<o.length?c(d,o[o.indexOf(d)+1]):a(d)}function u(d){const f=o.indexOf(d);return f===0?a(o[1]):f===o.length-1?l(o[f]):c(d,o[o.indexOf(d)+1]).replace("@media","@media not all and")}return{keys:o,values:s,up:a,down:l,between:c,only:h,not:u,unit:t,...r}}function gR(n,e){if(!n.containerQueries)return e;const t=Object.keys(e).filter(i=>i.startsWith("@container")).sort((i,r)=>{var o,a;const s=/min-width:\s*([0-9.]+)/;return+(((o=i.match(s))==null?void 0:o[1])||0)-+(((a=r.match(s))==null?void 0:a[1])||0)});return t.length?t.reduce((i,r)=>{const s=e[r];return delete i[r],i[r]=s,i},{...e}):e}function _R(n,e){return e==="@"||e.startsWith("@")&&(n.some(t=>e.startsWith(`@${t}`))||!!e.match(/^@\d/))}function vR(n,e){const t=e.match(/^@([^/]+)?\/?(.+)?$/);if(!t){if(process.env.NODE_ENV!=="production")throw new Error(process.env.NODE_ENV!=="production"?`MUI: The provided shorthand ${`(${e})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`:Ji(18,`(${e})`));return null}const[,i,r]=t,s=Number.isNaN(+i)?i||0:+i;return n.containerQueries(r).up(s)}function yR(n){const e=(s,o)=>s.replace("@media",o?`@container ${o}`:"@container");function t(s,o){s.up=(...a)=>e(n.breakpoints.up(...a),o),s.down=(...a)=>e(n.breakpoints.down(...a),o),s.between=(...a)=>e(n.breakpoints.between(...a),o),s.only=(...a)=>e(n.breakpoints.only(...a),o),s.not=(...a)=>{const l=e(n.breakpoints.not(...a),o);return l.includes("not all and")?l.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):l}}const i={},r=s=>(t(i,s),i);return t(r),{...n,containerQueries:r}}const xR={borderRadius:4},er=process.env.NODE_ENV!=="production"?Q.oneOfType([Q.number,Q.string,Q.object,Q.array]):{};function Uo(n,e){return e?yn(n,e,{clone:!1}):n}const _l={xs:0,sm:600,md:900,lg:1200,xl:1536},Lg={keys:["xs","sm","md","lg","xl"],up:n=>`@media (min-width:${_l[n]}px)`},MR={containerQueries:n=>({up:e=>{let t=typeof e=="number"?e:_l[e]||e;return typeof t=="number"&&(t=`${t}px`),n?`@container ${n} (min-width:${t})`:`@container (min-width:${t})`}})};function ni(n,e,t){const i=n.theme||{};if(Array.isArray(e)){const s=i.breakpoints||Lg;return e.reduce((o,a,l)=>(o[s.up(s.keys[l])]=t(e[l]),o),{})}if(typeof e=="object"){const s=i.breakpoints||Lg;return Object.keys(e).reduce((o,a)=>{if(_R(s.keys,a)){const l=vR(i.containerQueries?i:MR,a);l&&(o[l]=t(e[a],a))}else if(Object.keys(s.values||_l).includes(a)){const l=s.up(a);o[l]=t(e[a],a)}else{const l=a;o[l]=e[l]}return o},{})}return t(e)}function Dg(n={}){var t;return((t=n.keys)==null?void 0:t.reduce((i,r)=>{const s=n.up(r);return i[s]={},i},{}))||{}}function Ng(n,e){return n.reduce((t,i)=>{const r=t[i];return(!r||Object.keys(r).length===0)&&delete t[i],t},e)}function SR(n,...e){const t=Dg(n),i=[t,...e].reduce((r,s)=>yn(r,s),{});return Ng(Object.keys(t),i)}function ER(n,e){if(typeof n!="object")return{};const t={},i=Object.keys(e);return Array.isArray(n)?i.forEach((r,s)=>{s<n.length&&(t[r]=!0)}):i.forEach(r=>{n[r]!=null&&(t[r]=!0)}),t}function Nh({values:n,breakpoints:e,base:t}){const i=t||ER(n,e),r=Object.keys(i);if(r.length===0)return n;let s;return r.reduce((o,a,l)=>(Array.isArray(n)?(o[a]=n[l]!=null?n[l]:n[s],s=l):typeof n=="object"?(o[a]=n[a]!=null?n[a]:n[s],s=a):o[a]=n,o),{})}function Sn(n){if(typeof n!="string")throw new Error(process.env.NODE_ENV!=="production"?"MUI: `capitalize(string)` expects a string argument.":Ji(7));return n.charAt(0).toUpperCase()+n.slice(1)}function vl(n,e,t=!0){if(!e||typeof e!="string")return null;if(n&&n.vars&&t){const i=`vars.${e}`.split(".").reduce((r,s)=>r&&r[s]?r[s]:null,n);if(i!=null)return i}return e.split(".").reduce((i,r)=>i&&i[r]!=null?i[r]:null,n)}function yl(n,e,t,i=t){let r;return typeof n=="function"?r=n(t):Array.isArray(n)?r=n[t]||i:r=vl(n,t)||i,e&&(r=e(r,i,n)),r}function Wt(n){const{prop:e,cssProperty:t=n.prop,themeKey:i,transform:r}=n,s=o=>{if(o[e]==null)return null;const a=o[e],l=o.theme,c=vl(l,i)||{};return ni(o,a,u=>{let d=yl(c,r,u);return u===d&&typeof u=="string"&&(d=yl(c,r,`${e}${u==="default"?"":Sn(u)}`,u)),t===!1?d:{[t]:d}})};return s.propTypes=process.env.NODE_ENV!=="production"?{[e]:er}:{},s.filterProps=[e],s}function TR(n){const e={};return t=>(e[t]===void 0&&(e[t]=n(t)),e[t])}const bR={m:"margin",p:"padding"},AR={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Og={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},wR=TR(n=>{if(n.length>2)if(Og[n])n=Og[n];else return[n];const[e,t]=n.split(""),i=bR[e],r=AR[t]||"";return Array.isArray(r)?r.map(s=>i+s):[i+r]}),xl=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Ml=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],RR=[...xl,...Ml];function Fo(n,e,t,i){const r=vl(n,e,!0)??t;return typeof r=="number"||typeof r=="string"?s=>typeof s=="string"?s:(process.env.NODE_ENV!=="production"&&typeof s!="number"&&console.error(`MUI: Expected ${i} argument to be a number or a string, got ${s}.`),typeof r=="string"?`calc(${s} * ${r})`:r*s):Array.isArray(r)?s=>{if(typeof s=="string")return s;const o=Math.abs(s);process.env.NODE_ENV!=="production"&&(Number.isInteger(o)?o>r.length-1&&console.error([`MUI: The value provided (${o}) overflows.`,`The supported values are: ${JSON.stringify(r)}.`,`${o} > ${r.length-1}, you need to add the missing values.`].join(`
`)):console.error([`MUI: The \`theme.${e}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${e}\` as a number.`].join(`
`)));const a=r[o];return s>=0?a:typeof a=="number"?-a:`-${a}`}:typeof r=="function"?r:(process.env.NODE_ENV!=="production"&&console.error([`MUI: The \`theme.${e}\` value (${r}) is invalid.`,"It should be a number, an array or a function."].join(`
`)),()=>{})}function Sl(n){return Fo(n,"spacing",8,"spacing")}function Ir(n,e){return typeof e=="string"||e==null?e:n(e)}function CR(n,e){return t=>n.reduce((i,r)=>(i[r]=Ir(e,t),i),{})}function PR(n,e,t,i){if(!e.includes(t))return null;const r=wR(t),s=CR(r,i),o=n[t];return ni(n,o,s)}function Ug(n,e){const t=Sl(n.theme);return Object.keys(n).map(i=>PR(n,e,i,t)).reduce(Uo,{})}function Vt(n){return Ug(n,xl)}Vt.propTypes=process.env.NODE_ENV!=="production"?xl.reduce((n,e)=>(n[e]=er,n),{}):{},Vt.filterProps=xl;function zt(n){return Ug(n,Ml)}zt.propTypes=process.env.NODE_ENV!=="production"?Ml.reduce((n,e)=>(n[e]=er,n),{}):{},zt.filterProps=Ml,process.env.NODE_ENV!=="production"&&RR.reduce((n,e)=>(n[e]=er,n),{});function Fg(n=8,e=Sl({spacing:n})){if(n.mui)return n;const t=(...i)=>(process.env.NODE_ENV!=="production"&&(i.length<=4||console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${i.length}`)),(i.length===0?[1]:i).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" "));return t.mui=!0,t}function El(...n){const e=n.reduce((i,r)=>(r.filterProps.forEach(s=>{i[s]=r}),i),{}),t=i=>Object.keys(i).reduce((r,s)=>e[s]?Uo(r,e[s](i)):r,{});return t.propTypes=process.env.NODE_ENV!=="production"?n.reduce((i,r)=>Object.assign(i,r.propTypes),{}):{},t.filterProps=n.reduce((i,r)=>i.concat(r.filterProps),[]),t}function zn(n){return typeof n!="number"?n:`${n}px solid`}function Hn(n,e){return Wt({prop:n,themeKey:"borders",transform:e})}const IR=Hn("border",zn),LR=Hn("borderTop",zn),DR=Hn("borderRight",zn),NR=Hn("borderBottom",zn),OR=Hn("borderLeft",zn),UR=Hn("borderColor"),FR=Hn("borderTopColor"),BR=Hn("borderRightColor"),kR=Hn("borderBottomColor"),VR=Hn("borderLeftColor"),zR=Hn("outline",zn),HR=Hn("outlineColor"),Tl=n=>{if(n.borderRadius!==void 0&&n.borderRadius!==null){const e=Fo(n.theme,"shape.borderRadius",4,"borderRadius"),t=i=>({borderRadius:Ir(e,i)});return ni(n,n.borderRadius,t)}return null};Tl.propTypes=process.env.NODE_ENV!=="production"?{borderRadius:er}:{},Tl.filterProps=["borderRadius"],El(IR,LR,DR,NR,OR,UR,FR,BR,kR,VR,Tl,zR,HR);const bl=n=>{if(n.gap!==void 0&&n.gap!==null){const e=Fo(n.theme,"spacing",8,"gap"),t=i=>({gap:Ir(e,i)});return ni(n,n.gap,t)}return null};bl.propTypes=process.env.NODE_ENV!=="production"?{gap:er}:{},bl.filterProps=["gap"];const Al=n=>{if(n.columnGap!==void 0&&n.columnGap!==null){const e=Fo(n.theme,"spacing",8,"columnGap"),t=i=>({columnGap:Ir(e,i)});return ni(n,n.columnGap,t)}return null};Al.propTypes=process.env.NODE_ENV!=="production"?{columnGap:er}:{},Al.filterProps=["columnGap"];const wl=n=>{if(n.rowGap!==void 0&&n.rowGap!==null){const e=Fo(n.theme,"spacing",8,"rowGap"),t=i=>({rowGap:Ir(e,i)});return ni(n,n.rowGap,t)}return null};wl.propTypes=process.env.NODE_ENV!=="production"?{rowGap:er}:{},wl.filterProps=["rowGap"];const GR=Wt({prop:"gridColumn"}),WR=Wt({prop:"gridRow"}),$R=Wt({prop:"gridAutoFlow"}),XR=Wt({prop:"gridAutoColumns"}),jR=Wt({prop:"gridAutoRows"}),YR=Wt({prop:"gridTemplateColumns"}),qR=Wt({prop:"gridTemplateRows"}),KR=Wt({prop:"gridTemplateAreas"}),ZR=Wt({prop:"gridArea"});El(bl,Al,wl,GR,WR,$R,XR,jR,YR,qR,KR,ZR);function Ls(n,e){return e==="grey"?e:n}const QR=Wt({prop:"color",themeKey:"palette",transform:Ls}),JR=Wt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Ls}),e1=Wt({prop:"backgroundColor",themeKey:"palette",transform:Ls});El(QR,JR,e1);function In(n){return n<=1&&n!==0?`${n*100}%`:n}const t1=Wt({prop:"width",transform:In}),Oh=n=>{if(n.maxWidth!==void 0&&n.maxWidth!==null){const e=t=>{var r,s,o,a,l;const i=((o=(s=(r=n.theme)==null?void 0:r.breakpoints)==null?void 0:s.values)==null?void 0:o[t])||_l[t];return i?((l=(a=n.theme)==null?void 0:a.breakpoints)==null?void 0:l.unit)!=="px"?{maxWidth:`${i}${n.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:In(t)}};return ni(n,n.maxWidth,e)}return null};Oh.filterProps=["maxWidth"];const n1=Wt({prop:"minWidth",transform:In}),i1=Wt({prop:"height",transform:In}),r1=Wt({prop:"maxHeight",transform:In}),s1=Wt({prop:"minHeight",transform:In});Wt({prop:"size",cssProperty:"width",transform:In}),Wt({prop:"size",cssProperty:"height",transform:In});const o1=Wt({prop:"boxSizing"});El(t1,Oh,n1,i1,r1,s1,o1);const Bo={border:{themeKey:"borders",transform:zn},borderTop:{themeKey:"borders",transform:zn},borderRight:{themeKey:"borders",transform:zn},borderBottom:{themeKey:"borders",transform:zn},borderLeft:{themeKey:"borders",transform:zn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:zn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Tl},color:{themeKey:"palette",transform:Ls},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Ls},backgroundColor:{themeKey:"palette",transform:Ls},p:{style:zt},pt:{style:zt},pr:{style:zt},pb:{style:zt},pl:{style:zt},px:{style:zt},py:{style:zt},padding:{style:zt},paddingTop:{style:zt},paddingRight:{style:zt},paddingBottom:{style:zt},paddingLeft:{style:zt},paddingX:{style:zt},paddingY:{style:zt},paddingInline:{style:zt},paddingInlineStart:{style:zt},paddingInlineEnd:{style:zt},paddingBlock:{style:zt},paddingBlockStart:{style:zt},paddingBlockEnd:{style:zt},m:{style:Vt},mt:{style:Vt},mr:{style:Vt},mb:{style:Vt},ml:{style:Vt},mx:{style:Vt},my:{style:Vt},margin:{style:Vt},marginTop:{style:Vt},marginRight:{style:Vt},marginBottom:{style:Vt},marginLeft:{style:Vt},marginX:{style:Vt},marginY:{style:Vt},marginInline:{style:Vt},marginInlineStart:{style:Vt},marginInlineEnd:{style:Vt},marginBlock:{style:Vt},marginBlockStart:{style:Vt},marginBlockEnd:{style:Vt},displayPrint:{cssProperty:!1,transform:n=>({"@media print":{display:n}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:bl},rowGap:{style:wl},columnGap:{style:Al},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:In},maxWidth:{style:Oh},minWidth:{transform:In},height:{transform:In},maxHeight:{transform:In},minHeight:{transform:In},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function a1(...n){const e=n.reduce((i,r)=>i.concat(Object.keys(r)),[]),t=new Set(e);return n.every(i=>t.size===Object.keys(i).length)}function l1(n,e){return typeof n=="function"?n(e):n}function c1(){function n(t,i,r,s){const o={[t]:i,theme:r},a=s[t];if(!a)return{[t]:i};const{cssProperty:l=t,themeKey:c,transform:h,style:u}=a;if(i==null)return null;if(c==="typography"&&i==="inherit")return{[t]:i};const d=vl(r,c)||{};return u?u(o):ni(o,i,m=>{let v=yl(d,h,m);return m===v&&typeof m=="string"&&(v=yl(d,h,`${t}${m==="default"?"":Sn(m)}`,m)),l===!1?v:{[l]:v}})}function e(t){const{sx:i,theme:r={}}=t||{};if(!i)return null;const s=r.unstable_sxConfig??Bo;function o(a){let l=a;if(typeof a=="function")l=a(r);else if(typeof a!="object")return a;if(!l)return null;const c=Dg(r.breakpoints),h=Object.keys(c);let u=c;return Object.keys(l).forEach(d=>{const f=l1(l[d],r);if(f!=null)if(typeof f=="object")if(s[d])u=Uo(u,n(d,f,r,s));else{const m=ni({theme:r},f,v=>({[d]:v}));a1(m,f)?u[d]=e({sx:f,theme:r}):u=Uo(u,m)}else u=Uo(u,n(d,f,r,s))}),gR(r,Ng(h,u))}return Array.isArray(i)?i.map(o):o(i)}return e}const Ds=c1();Ds.filterProps=["sx"];function u1(n,e){var i;const t=this;if(t.vars){if(!((i=t.colorSchemes)!=null&&i[n])||typeof t.getColorSchemeSelector!="function")return{};let r=t.getColorSchemeSelector(n);return r==="&"?e:((r.includes("data-")||r.includes("."))&&(r=`*:where(${r.replace(/\s*&$/,"")}) &`),{[r]:e})}return t.palette.mode===n?e:{}}function Rl(n={},...e){const{breakpoints:t={},palette:i={},spacing:r,shape:s={},...o}=n,a=mR(t),l=Fg(r);let c=yn({breakpoints:a,direction:"ltr",components:{},palette:{mode:"light",...i},spacing:l,shape:{...xR,...s}},o);return c=yR(c),c.applyStyles=u1,c=e.reduce((h,u)=>yn(h,u),c),c.unstable_sxConfig={...Bo,...o==null?void 0:o.unstable_sxConfig},c.unstable_sx=function(u){return Ds({sx:u,theme:this})},c}function h1(n){return Object.keys(n).length===0}function d1(n=null){const e=Ge.useContext(mg);return!e||h1(e)?n:e}const f1=Rl();function p1(n=f1){return d1(n)}const m1=n=>{var i;const e={systemProps:{},otherProps:{}},t=((i=n==null?void 0:n.theme)==null?void 0:i.unstable_sxConfig)??Bo;return Object.keys(n).forEach(r=>{t[r]?e.systemProps[r]=n[r]:e.otherProps[r]=n[r]}),e};function g1(n){const{sx:e,...t}=n,{systemProps:i,otherProps:r}=m1(t);let s;return Array.isArray(e)?s=[i,...e]:typeof e=="function"?s=(...o)=>{const a=e(...o);return gi(a)?{...i,...a}:i}:s={...i,...e},{...r,sx:s}}const Bg=n=>n,_1=(()=>{let n=Bg;return{configure(e){n=e},generate(e){return n(e)},reset(){n=Bg}}})();function kg(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=kg(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function Ln(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=kg(n))&&(i&&(i+=" "),i+=e);return i}const v1={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function ko(n,e,t="Mui"){const i=v1[e];return i?`${t}-${i}`:`${_1.generate(n)}-${e}`}function Uh(n,e,t="Mui"){const i={};return e.forEach(r=>{i[r]=ko(n,r,t)}),i}var Fh={exports:{}},Mt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function y1(){if(Vg)return Mt;Vg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),o=Symbol.for("react.context"),a=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.for("react.offscreen"),m;m=Symbol.for("react.module.reference");function v(p){if(typeof p=="object"&&p!==null){var g=p.$$typeof;switch(g){case n:switch(p=p.type,p){case t:case r:case i:case c:case h:return p;default:switch(p=p&&p.$$typeof,p){case a:case o:case l:case d:case u:case s:return p;default:return g}}case e:return g}}}return Mt.ContextConsumer=o,Mt.ContextProvider=s,Mt.Element=n,Mt.ForwardRef=l,Mt.Fragment=t,Mt.Lazy=d,Mt.Memo=u,Mt.Portal=e,Mt.Profiler=r,Mt.StrictMode=i,Mt.Suspense=c,Mt.SuspenseList=h,Mt.isAsyncMode=function(){return!1},Mt.isConcurrentMode=function(){return!1},Mt.isContextConsumer=function(p){return v(p)===o},Mt.isContextProvider=function(p){return v(p)===s},Mt.isElement=function(p){return typeof p=="object"&&p!==null&&p.$$typeof===n},Mt.isForwardRef=function(p){return v(p)===l},Mt.isFragment=function(p){return v(p)===t},Mt.isLazy=function(p){return v(p)===d},Mt.isMemo=function(p){return v(p)===u},Mt.isPortal=function(p){return v(p)===e},Mt.isProfiler=function(p){return v(p)===r},Mt.isStrictMode=function(p){return v(p)===i},Mt.isSuspense=function(p){return v(p)===c},Mt.isSuspenseList=function(p){return v(p)===h},Mt.isValidElementType=function(p){return typeof p=="string"||typeof p=="function"||p===t||p===r||p===i||p===c||p===h||p===f||typeof p=="object"&&p!==null&&(p.$$typeof===d||p.$$typeof===u||p.$$typeof===s||p.$$typeof===o||p.$$typeof===l||p.$$typeof===m||p.getModuleId!==void 0)},Mt.typeOf=v,Mt}var St={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function x1(){return zg||(zg=1,process.env.NODE_ENV!=="production"&&function(){var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),o=Symbol.for("react.context"),a=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.for("react.offscreen"),m=!1,v=!1,p=!1,g=!1,T=!1,y;y=Symbol.for("react.module.reference");function M(_e){return!!(typeof _e=="string"||typeof _e=="function"||_e===t||_e===r||T||_e===i||_e===c||_e===h||g||_e===f||m||v||p||typeof _e=="object"&&_e!==null&&(_e.$$typeof===d||_e.$$typeof===u||_e.$$typeof===s||_e.$$typeof===o||_e.$$typeof===l||_e.$$typeof===y||_e.getModuleId!==void 0))}function E(_e){if(typeof _e=="object"&&_e!==null){var Fe=_e.$$typeof;switch(Fe){case n:var Xe=_e.type;switch(Xe){case t:case r:case i:case c:case h:return Xe;default:var Be=Xe&&Xe.$$typeof;switch(Be){case a:case o:case l:case d:case u:case s:return Be;default:return Fe}}case e:return Fe}}}var I=o,P=s,B=n,Z=l,_=t,S=d,H=u,A=e,b=r,L=i,C=c,U=h,O=!1,te=!1;function V(_e){return O||(O=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function W(_e){return te||(te=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ne(_e){return E(_e)===o}function ae(_e){return E(_e)===s}function $(_e){return typeof _e=="object"&&_e!==null&&_e.$$typeof===n}function Y(_e){return E(_e)===l}function oe(_e){return E(_e)===t}function re(_e){return E(_e)===d}function ue(_e){return E(_e)===u}function me(_e){return E(_e)===e}function he(_e){return E(_e)===r}function be(_e){return E(_e)===i}function j(_e){return E(_e)===c}function F(_e){return E(_e)===h}St.ContextConsumer=I,St.ContextProvider=P,St.Element=B,St.ForwardRef=Z,St.Fragment=_,St.Lazy=S,St.Memo=H,St.Portal=A,St.Profiler=b,St.StrictMode=L,St.Suspense=C,St.SuspenseList=U,St.isAsyncMode=V,St.isConcurrentMode=W,St.isContextConsumer=ne,St.isContextProvider=ae,St.isElement=$,St.isForwardRef=Y,St.isFragment=oe,St.isLazy=re,St.isMemo=ue,St.isPortal=me,St.isProfiler=he,St.isStrictMode=be,St.isSuspense=j,St.isSuspenseList=F,St.isValidElementType=M,St.typeOf=E}()),St}process.env.NODE_ENV==="production"?Fh.exports=y1():Fh.exports=x1();var Hg=Fh.exports;function Gg(n,e=""){return n.displayName||n.name||e}function Wg(n,e,t){const i=Gg(e);return n.displayName||(i!==""?`${t}(${i})`:t)}function M1(n){if(n!=null){if(typeof n=="string")return n;if(typeof n=="function")return Gg(n,"Component");if(typeof n=="object")switch(n.$$typeof){case Hg.ForwardRef:return Wg(n,n.render,"ForwardRef");case Hg.Memo:return Wg(n,n.type,"memo");default:return}}}function $g(n){const{variants:e,...t}=n,i={variants:e,style:Pg(t),isProcessed:!0};return i.style===t||e&&e.forEach(r=>{typeof r.style!="function"&&(r.style=Pg(r.style))}),i}const S1=Rl();function Bh(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}function E1(n){return n?(e,t)=>t[n]:null}function T1(n,e,t){n.theme=w1(n.theme)?t:n.theme[e]||n.theme}function Cl(n,e){const t=typeof e=="function"?e(n):e;if(Array.isArray(t))return t.flatMap(i=>Cl(n,i));if(Array.isArray(t==null?void 0:t.variants)){let i;if(t.isProcessed)i=t.style;else{const{variants:r,...s}=t;i=s}return Xg(n,t.variants,[i])}return t!=null&&t.isProcessed?t.style:t}function Xg(n,e,t=[]){var r;let i;e:for(let s=0;s<e.length;s+=1){const o=e[s];if(typeof o.props=="function"){if(i??(i={...n,...n.ownerState,ownerState:n.ownerState}),!o.props(i))continue}else for(const a in o.props)if(n[a]!==o.props[a]&&((r=n.ownerState)==null?void 0:r[a])!==o.props[a])continue e;typeof o.style=="function"?(i??(i={...n,...n.ownerState,ownerState:n.ownerState}),t.push(o.style(i))):t.push(o.style)}return t}function jg(n={}){const{themeId:e,defaultTheme:t=S1,rootShouldForwardProp:i=Bh,slotShouldForwardProp:r=Bh}=n;function s(a){T1(a,e,t)}return(a,l={})=>{fR(a,E=>E.filter(I=>I!==Ds));const{name:c,slot:h,skipVariantsResolver:u,skipSx:d,overridesResolver:f=E1(Yg(h)),...m}=l,v=u!==void 0?u:h&&h!=="Root"&&h!=="root"||!1,p=d||!1;let g=Bh;h==="Root"||h==="root"?g=i:h?g=r:R1(a)&&(g=void 0);const T=dR(a,{shouldForwardProp:g,label:A1(c,h),...m}),y=E=>{if(typeof E=="function"&&E.__emotion_real!==E)return function(P){return Cl(P,E)};if(gi(E)){const I=$g(E);return I.variants?function(B){return Cl(B,I)}:I.style}return E},M=(...E)=>{const I=[],P=E.map(y),B=[];if(I.push(s),c&&f&&B.push(function(H){var C,U;const b=(U=(C=H.theme.components)==null?void 0:C[c])==null?void 0:U.styleOverrides;if(!b)return null;const L={};for(const O in b)L[O]=Cl(H,b[O]);return f(H,L)}),c&&!v&&B.push(function(H){var L,C;const A=H.theme,b=(C=(L=A==null?void 0:A.components)==null?void 0:L[c])==null?void 0:C.variants;return b?Xg(H,b):null}),p||B.push(Ds),Array.isArray(P[0])){const S=P.shift(),H=new Array(I.length).fill(""),A=new Array(B.length).fill("");let b;b=[...H,...S,...A],b.raw=[...H,...S.raw,...A],I.unshift(b)}const Z=[...I,...P,...B],_=T(...Z);return a.muiName&&(_.muiName=a.muiName),process.env.NODE_ENV!=="production"&&(_.displayName=b1(c,h,a)),_};return T.withConfig&&(M.withConfig=T.withConfig),M}}function b1(n,e,t){return n?`${n}${Sn(e||"")}`:`Styled(${M1(t)})`}function A1(n,e){let t;return process.env.NODE_ENV!=="production"&&n&&(t=`${n}-${Yg(e||"Root")}`),t}function w1(n){for(const e in n)return!1;return!0}function R1(n){return typeof n=="string"&&n.charCodeAt(0)>96}function Yg(n){return n&&n.charAt(0).toLowerCase()+n.slice(1)}const C1=jg();function Vo(n,e){const t={...e};for(const i in n)if(Object.prototype.hasOwnProperty.call(n,i)){const r=i;if(r==="components"||r==="slots")t[r]={...n[r],...t[r]};else if(r==="componentsProps"||r==="slotProps"){const s=n[r],o=e[r];if(!o)t[r]=s||{};else if(!s)t[r]=o;else{t[r]={...o};for(const a in s)if(Object.prototype.hasOwnProperty.call(s,a)){const l=a;t[r][l]=Vo(s[l],o[l])}}}else t[r]===void 0&&(t[r]=n[r])}return t}function P1(n){const{theme:e,name:t,props:i}=n;return!e||!e.components||!e.components[t]||!e.components[t].defaultProps?i:Vo(e.components[t].defaultProps,i)}function I1({props:n,name:e,defaultTheme:t,themeId:i}){let r=p1(t);return i&&(r=r[i]||r),P1({theme:r,name:e,props:n})}const L1=typeof window<"u"?Ge.useLayoutEffect:Ge.useEffect;function D1(n,e=Number.MIN_SAFE_INTEGER,t=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(n,t))}function kh(n,e=0,t=1){return process.env.NODE_ENV!=="production"&&(n<e||n>t)&&console.error(`MUI: The value provided ${n} is out of range [${e}, ${t}].`),D1(n,e,t)}function N1(n){n=n.slice(1);const e=new RegExp(`.{1,${n.length>=6?2:1}}`,"g");let t=n.match(e);return t&&t[0].length===1&&(t=t.map(i=>i+i)),t?`rgb${t.length===4?"a":""}(${t.map((i,r)=>r<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function tr(n){if(n.type)return n;if(n.charAt(0)==="#")return tr(N1(n));const e=n.indexOf("("),t=n.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(t))throw new Error(process.env.NODE_ENV!=="production"?`MUI: Unsupported \`${n}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`:Ji(9,n));let i=n.substring(e+1,n.length-1),r;if(t==="color"){if(i=i.split(" "),r=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(r))throw new Error(process.env.NODE_ENV!=="production"?`MUI: unsupported \`${r}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`:Ji(10,r))}else i=i.split(",");return i=i.map(s=>parseFloat(s)),{type:t,values:i,colorSpace:r}}const O1=n=>{const e=tr(n);return e.values.slice(0,3).map((t,i)=>e.type.includes("hsl")&&i!==0?`${t}%`:t).join(" ")},zo=(n,e)=>{try{return O1(n)}catch{return e&&process.env.NODE_ENV!=="production"&&console.warn(e),n}};function Pl(n){const{type:e,colorSpace:t}=n;let{values:i}=n;return e.includes("rgb")?i=i.map((r,s)=>s<3?parseInt(r,10):r):e.includes("hsl")&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),e.includes("color")?i=`${t} ${i.join(" ")}`:i=`${i.join(", ")}`,`${e}(${i})`}function qg(n){n=tr(n);const{values:e}=n,t=e[0],i=e[1]/100,r=e[2]/100,s=i*Math.min(r,1-r),o=(c,h=(c+t/30)%12)=>r-s*Math.max(Math.min(h-3,9-h,1),-1);let a="rgb";const l=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return n.type==="hsla"&&(a+="a",l.push(e[3])),Pl({type:a,values:l})}function Vh(n){n=tr(n);let e=n.type==="hsl"||n.type==="hsla"?tr(qg(n)).values:n.values;return e=e.map(t=>(n.type!=="color"&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function Kg(n,e){const t=Vh(n),i=Vh(e);return(Math.max(t,i)+.05)/(Math.min(t,i)+.05)}function Ns(n,e){return n=tr(n),e=kh(e),(n.type==="rgb"||n.type==="hsl")&&(n.type+="a"),n.type==="color"?n.values[3]=`/${e}`:n.values[3]=e,Pl(n)}function Il(n,e,t){try{return Ns(n,e)}catch{return n}}function zh(n,e){if(n=tr(n),e=kh(e),n.type.includes("hsl"))n.values[2]*=1-e;else if(n.type.includes("rgb")||n.type.includes("color"))for(let t=0;t<3;t+=1)n.values[t]*=1-e;return Pl(n)}function Pt(n,e,t){try{return zh(n,e)}catch{return n}}function Hh(n,e){if(n=tr(n),e=kh(e),n.type.includes("hsl"))n.values[2]+=(100-n.values[2])*e;else if(n.type.includes("rgb"))for(let t=0;t<3;t+=1)n.values[t]+=(255-n.values[t])*e;else if(n.type.includes("color"))for(let t=0;t<3;t+=1)n.values[t]+=(1-n.values[t])*e;return Pl(n)}function It(n,e,t){try{return Hh(n,e)}catch{return n}}function U1(n,e=.15){return Vh(n)>.5?zh(n,e):Hh(n,e)}function Ll(n,e,t){try{return U1(n,e)}catch{return n}}function F1(n,e){return process.env.NODE_ENV==="production"?()=>null:function(...i){return n(...i)||e(...i)}}function B1(n){const{prototype:e={}}=n;return!!e.isReactComponent}function k1(n,e,t,i,r){const s=n[e],o=r||e;if(s==null||typeof window>"u")return null;let a;return typeof s=="function"&&!B1(s)&&(a="Did you accidentally provide a plain function component instead?"),a!==void 0?new Error(`Invalid ${i} \`${o}\` supplied to \`${t}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`):null}const V1=F1(Q.elementType,k1),z1=Q.oneOfType([Q.func,Q.object]);function H1(n,e){typeof n=="function"?n(e):n&&(n.current=e)}function Dl(n){const e=Ge.useRef(n);return L1(()=>{e.current=n}),Ge.useRef((...t)=>(0,e.current)(...t)).current}function Zg(...n){return Ge.useMemo(()=>n.every(e=>e==null)?null:e=>{n.forEach(t=>{H1(t,e)})},n)}const Qg={};function Jg(n,e){const t=Ge.useRef(Qg);return t.current===Qg&&(t.current=n(e)),t}const G1=[];function W1(n){Ge.useEffect(n,G1)}class Gh{constructor(){tn(this,"currentId",null);tn(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});tn(this,"disposeEffect",()=>this.clear)}static create(){return new Gh}start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}}function $1(){const n=Jg(Gh.create).current;return W1(n.disposeEffect),n}function e_(n){try{return n.matches(":focus-visible")}catch{process.env.NODE_ENV!=="production"&&!/jsdom/.test(window.navigator.userAgent)&&console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.","Some components rely on this feature to work properly."].join(`
`))}return!1}function Wh(n,e,t=void 0){const i={};for(const r in n){const s=n[r];let o="",a=!0;for(let l=0;l<s.length;l+=1){const c=s[l];c&&(o+=(a===!0?"":" ")+e(c),a=!1,t&&t[c]&&(o+=" "+t[c]))}i[r]=o}return i}const X1=Ge.createContext(void 0);process.env.NODE_ENV!=="production"&&(Q.node,Q.object);function j1(n){const{theme:e,name:t,props:i}=n;if(!e||!e.components||!e.components[t])return i;const r=e.components[t];return r.defaultProps?Vo(r.defaultProps,i):!r.styleOverrides&&!r.variants?Vo(r,i):i}function Y1({props:n,name:e}){const t=Ge.useContext(X1);return j1({props:n,name:e,theme:{components:t}})}const t_={theme:void 0};function q1(n){let e,t;return function(r){let s=e;return(s===void 0||r.theme!==t)&&(t_.theme=r.theme,s=$g(n(t_)),e=s,t=r.theme),s}}function K1(n=""){function e(...i){if(!i.length)return"";const r=i[0];return typeof r=="string"&&!r.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${n?`${n}-`:""}${r}${e(...i.slice(1))})`:`, ${r}`}return(i,...r)=>`var(--${n?`${n}-`:""}${i}${e(...r)})`}const n_=(n,e,t,i=[])=>{let r=n;e.forEach((s,o)=>{o===e.length-1?Array.isArray(r)?r[Number(s)]=t:r&&typeof r=="object"&&(r[s]=t):r&&typeof r=="object"&&(r[s]||(r[s]=i.includes(s)?[]:{}),r=r[s])})},Z1=(n,e,t)=>{function i(r,s=[],o=[]){Object.entries(r).forEach(([a,l])=>{(!t||t&&!t([...s,a]))&&l!=null&&(typeof l=="object"&&Object.keys(l).length>0?i(l,[...s,a],Array.isArray(l)?[...o,a]:o):e([...s,a],l,o))})}i(n)},Q1=(n,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(i=>n.includes(i))||n[n.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function $h(n,e){const{prefix:t,shouldSkipGeneratingVar:i}=e||{},r={},s={},o={};return Z1(n,(a,l,c)=>{if((typeof l=="string"||typeof l=="number")&&(!i||!i(a,l))){const h=`--${t?`${t}-`:""}${a.join("-")}`,u=Q1(a,l);Object.assign(r,{[h]:u}),n_(s,a,`var(${h})`,c),n_(o,a,`var(${h}, ${u})`,c)}},a=>a[0]==="vars"),{css:r,vars:s,varsWithDefaults:o}}function J1(n,e={}){const{getSelector:t=p,disableCssColorScheme:i,colorSchemeSelector:r}=e,{colorSchemes:s={},components:o,defaultColorScheme:a="light",...l}=n,{vars:c,css:h,varsWithDefaults:u}=$h(l,e);let d=u;const f={},{[a]:m,...v}=s;if(Object.entries(v||{}).forEach(([y,M])=>{const{vars:E,css:I,varsWithDefaults:P}=$h(M,e);d=yn(d,P),f[y]={css:I,vars:E}}),m){const{css:y,vars:M,varsWithDefaults:E}=$h(m,e);d=yn(d,E),f[a]={css:y,vars:M}}function p(y,M){var I,P;let E=r;if(r==="class"&&(E=".%s"),r==="data"&&(E="[data-%s]"),r!=null&&r.startsWith("data-")&&!r.includes("%s")&&(E=`[${r}="%s"]`),y){if(E==="media")return n.defaultColorScheme===y?":root":{[`@media (prefers-color-scheme: ${((P=(I=s[y])==null?void 0:I.palette)==null?void 0:P.mode)||y})`]:{":root":M}};if(E)return n.defaultColorScheme===y?`:root, ${E.replace("%s",String(y))}`:E.replace("%s",String(y))}return":root"}return{vars:d,generateThemeVars:()=>{let y={...c};return Object.entries(f).forEach(([,{vars:M}])=>{y=yn(y,M)}),y},generateStyleSheets:()=>{var B,Z;const y=[],M=n.defaultColorScheme||"light";function E(_,S){Object.keys(S).length&&y.push(typeof _=="string"?{[_]:{...S}}:_)}E(t(void 0,{...h}),h);const{[M]:I,...P}=f;if(I){const{css:_}=I,S=(Z=(B=s[M])==null?void 0:B.palette)==null?void 0:Z.mode,H=!i&&S?{colorScheme:S,..._}:{..._};E(t(M,{...H}),H)}return Object.entries(P).forEach(([_,{css:S}])=>{var b,L;const H=(L=(b=s[_])==null?void 0:b.palette)==null?void 0:L.mode,A=!i&&H?{colorScheme:H,...S}:{...S};E(t(_,{...A}),A)}),y}}}function eC(n){return function(t){return n==="media"?(process.env.NODE_ENV!=="production"&&t!=="light"&&t!=="dark"&&console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`),`@media (prefers-color-scheme: ${t})`):n?n.startsWith("data-")&&!n.includes("%s")?`[${n}="${t}"] &`:n==="class"?`.${t} &`:n==="data"?`[data-${t}] &`:`${n.replace("%s",t)} &`:"&"}}const tC=Rl(),nC=C1("div",{name:"MuiStack",slot:"Root",overridesResolver:(n,e)=>e.root});function iC(n){return I1({props:n,name:"MuiStack",defaultTheme:tC})}function rC(n,e){const t=Ge.Children.toArray(n).filter(Boolean);return t.reduce((i,r,s)=>(i.push(r),s<t.length-1&&i.push(Ge.cloneElement(e,{key:`separator-${s}`})),i),[])}const sC=n=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[n],oC=({ownerState:n,theme:e})=>{let t={display:"flex",flexDirection:"column",...ni({theme:e},Nh({values:n.direction,breakpoints:e.breakpoints.values}),i=>({flexDirection:i}))};if(n.spacing){const i=Sl(e),r=Object.keys(e.breakpoints.values).reduce((l,c)=>((typeof n.spacing=="object"&&n.spacing[c]!=null||typeof n.direction=="object"&&n.direction[c]!=null)&&(l[c]=!0),l),{}),s=Nh({values:n.direction,base:r}),o=Nh({values:n.spacing,base:r});typeof s=="object"&&Object.keys(s).forEach((l,c,h)=>{if(!s[l]){const d=c>0?s[h[c-1]]:"column";s[l]=d}}),t=yn(t,ni({theme:e},o,(l,c)=>n.useFlexGap?{gap:Ir(i,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${sC(c?s[c]:n.direction)}`]:Ir(i,l)}}))}return t=SR(e.breakpoints,t),t};function aC(n={}){const{createStyledComponent:e=nC,useThemeProps:t=iC,componentName:i="MuiStack"}=n,r=()=>Wh({root:["root"]},l=>ko(i,l),{}),s=e(oC),o=Ge.forwardRef(function(l,c){const h=t(l),u=g1(h),{component:d="div",direction:f="column",spacing:m=0,divider:v,children:p,className:g,useFlexGap:T=!1,...y}=u,M={direction:f,spacing:m,useFlexGap:T},E=r();return pt.jsx(s,{as:d,ownerState:M,ref:c,className:Ln(E.root,g),...y,children:v?rC(p,v):p})});return process.env.NODE_ENV!=="production"&&(o.propTypes={children:Q.node,direction:Q.oneOfType([Q.oneOf(["column-reverse","column","row-reverse","row"]),Q.arrayOf(Q.oneOf(["column-reverse","column","row-reverse","row"])),Q.object]),divider:Q.node,spacing:Q.oneOfType([Q.arrayOf(Q.oneOfType([Q.number,Q.string])),Q.number,Q.object,Q.string]),sx:Q.oneOfType([Q.arrayOf(Q.oneOfType([Q.func,Q.object,Q.bool])),Q.func,Q.object])}),o}const Xh=aC();process.env.NODE_ENV!=="production"&&(Xh.propTypes={children:Q.node,component:Q.elementType,direction:Q.oneOfType([Q.oneOf(["column-reverse","column","row-reverse","row"]),Q.arrayOf(Q.oneOf(["column-reverse","column","row-reverse","row"])),Q.object]),divider:Q.node,spacing:Q.oneOfType([Q.arrayOf(Q.oneOfType([Q.number,Q.string])),Q.number,Q.object,Q.string]),sx:Q.oneOfType([Q.arrayOf(Q.oneOfType([Q.func,Q.object,Q.bool])),Q.func,Q.object]),useFlexGap:Q.bool});function i_(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Co.white,default:Co.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const lC=i_();function r_(){return{text:{primary:Co.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Co.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const s_=r_();function o_(n,e,t,i){const r=i.light||i,s=i.dark||i*1.5;n[e]||(n.hasOwnProperty(t)?n[e]=n[t]:e==="light"?n.light=Hh(n.main,r):e==="dark"&&(n.dark=zh(n.main,s)))}function cC(n="light"){return n==="dark"?{main:As[200],light:As[50],dark:As[400]}:{main:As[700],light:As[400],dark:As[800]}}function uC(n="light"){return n==="dark"?{main:bs[200],light:bs[50],dark:bs[400]}:{main:bs[500],light:bs[300],dark:bs[700]}}function hC(n="light"){return n==="dark"?{main:Ts[500],light:Ts[300],dark:Ts[700]}:{main:Ts[700],light:Ts[400],dark:Ts[800]}}function dC(n="light"){return n==="dark"?{main:ws[400],light:ws[300],dark:ws[700]}:{main:ws[700],light:ws[500],dark:ws[900]}}function fC(n="light"){return n==="dark"?{main:Rs[400],light:Rs[300],dark:Rs[700]}:{main:Rs[800],light:Rs[500],dark:Rs[900]}}function pC(n="light"){return n==="dark"?{main:Po[400],light:Po[300],dark:Po[700]}:{main:"#ed6c02",light:Po[500],dark:Po[900]}}function jh(n){const{mode:e="light",contrastThreshold:t=3,tonalOffset:i=.2,...r}=n,s=n.primary||cC(e),o=n.secondary||uC(e),a=n.error||hC(e),l=n.info||dC(e),c=n.success||fC(e),h=n.warning||pC(e);function u(v){const p=Kg(v,s_.text.primary)>=t?s_.text.primary:lC.text.primary;if(process.env.NODE_ENV!=="production"){const g=Kg(v,p);g<3&&console.error([`MUI: The contrast ratio of ${g}:1 for ${p} on ${v}`,"falls below the WCAG recommended absolute minimum contrast ratio of 3:1.","https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`))}return p}const d=({color:v,name:p,mainShade:g=500,lightShade:T=300,darkShade:y=700})=>{if(v={...v},!v.main&&v[g]&&(v.main=v[g]),!v.hasOwnProperty("main"))throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${p?` (${p})`:""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${g}\` property.`:Ji(11,p?` (${p})`:"",g));if(typeof v.main!="string")throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${p?` (${p})`:""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`:Ji(12,p?` (${p})`:"",JSON.stringify(v.main)));return o_(v,"light",T,i),o_(v,"dark",y,i),v.contrastText||(v.contrastText=u(v.main)),v};let f;return e==="light"?f=i_():e==="dark"&&(f=r_()),process.env.NODE_ENV!=="production"&&(f||console.error(`MUI: The palette mode \`${e}\` is not supported.`)),yn({common:{...Co},mode:e,primary:d({color:s,name:"primary"}),secondary:d({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:h,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:c,name:"success"}),grey:ZA,contrastThreshold:t,getContrastText:u,augmentColor:d,tonalOffset:i,...f},r)}function mC(n){const e={};return Object.entries(n).forEach(i=>{const[r,s]=i;typeof s=="object"&&(e[r]=`${s.fontStyle?`${s.fontStyle} `:""}${s.fontVariant?`${s.fontVariant} `:""}${s.fontWeight?`${s.fontWeight} `:""}${s.fontStretch?`${s.fontStretch} `:""}${s.fontSize||""}${s.lineHeight?`/${s.lineHeight} `:""}${s.fontFamily||""}`)}),e}function gC(n,e){return{toolbar:{minHeight:56,[n.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[n.up("sm")]:{minHeight:64}},...e}}function _C(n){return Math.round(n*1e5)/1e5}const a_={textTransform:"uppercase"},l_='"Roboto", "Helvetica", "Arial", sans-serif';function vC(n,e){const{fontFamily:t=l_,fontSize:i=14,fontWeightLight:r=300,fontWeightRegular:s=400,fontWeightMedium:o=500,fontWeightBold:a=700,htmlFontSize:l=16,allVariants:c,pxToRem:h,...u}=typeof e=="function"?e(n):e;process.env.NODE_ENV!=="production"&&(typeof i!="number"&&console.error("MUI: `fontSize` is required to be a number."),typeof l!="number"&&console.error("MUI: `htmlFontSize` is required to be a number."));const d=i/14,f=h||(p=>`${p/l*d}rem`),m=(p,g,T,y,M)=>({fontFamily:t,fontWeight:p,fontSize:f(g),lineHeight:T,...t===l_?{letterSpacing:`${_C(y/g)}em`}:{},...M,...c}),v={h1:m(r,96,1.167,-1.5),h2:m(r,60,1.2,-.5),h3:m(s,48,1.167,0),h4:m(s,34,1.235,.25),h5:m(s,24,1.334,0),h6:m(o,20,1.6,.15),subtitle1:m(s,16,1.75,.15),subtitle2:m(o,14,1.57,.1),body1:m(s,16,1.5,.15),body2:m(s,14,1.43,.15),button:m(o,14,1.75,.4,a_),caption:m(s,12,1.66,.4),overline:m(s,12,2.66,1,a_),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return yn({htmlFontSize:l,pxToRem:f,fontFamily:t,fontSize:i,fontWeightLight:r,fontWeightRegular:s,fontWeightMedium:o,fontWeightBold:a,...v},u,{clone:!1})}const yC=.2,xC=.14,MC=.12;function Ut(...n){return[`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${yC})`,`${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${xC})`,`${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${MC})`].join(",")}const SC=["none",Ut(0,2,1,-1,0,1,1,0,0,1,3,0),Ut(0,3,1,-2,0,2,2,0,0,1,5,0),Ut(0,3,3,-2,0,3,4,0,0,1,8,0),Ut(0,2,4,-1,0,4,5,0,0,1,10,0),Ut(0,3,5,-1,0,5,8,0,0,1,14,0),Ut(0,3,5,-1,0,6,10,0,0,1,18,0),Ut(0,4,5,-2,0,7,10,1,0,2,16,1),Ut(0,5,5,-3,0,8,10,1,0,3,14,2),Ut(0,5,6,-3,0,9,12,1,0,3,16,2),Ut(0,6,6,-3,0,10,14,1,0,4,18,3),Ut(0,6,7,-4,0,11,15,1,0,4,20,3),Ut(0,7,8,-4,0,12,17,2,0,5,22,4),Ut(0,7,8,-4,0,13,19,2,0,5,24,4),Ut(0,7,9,-4,0,14,21,2,0,5,26,4),Ut(0,8,9,-5,0,15,22,2,0,6,28,5),Ut(0,8,10,-5,0,16,24,2,0,6,30,5),Ut(0,8,11,-5,0,17,26,2,0,6,32,5),Ut(0,9,11,-5,0,18,28,2,0,7,34,6),Ut(0,9,12,-6,0,19,29,2,0,7,36,6),Ut(0,10,13,-6,0,20,31,3,0,8,38,7),Ut(0,10,13,-6,0,21,33,3,0,8,40,7),Ut(0,10,14,-6,0,22,35,3,0,8,42,7),Ut(0,11,14,-7,0,23,36,3,0,9,44,8),Ut(0,11,15,-7,0,24,38,3,0,9,46,8)],EC={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},TC={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function c_(n){return`${Math.round(n)}ms`}function bC(n){if(!n)return 0;const e=n/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function AC(n){const e={...EC,...n.easing},t={...TC,...n.duration};return{getAutoHeightDuration:bC,create:(r=["all"],s={})=>{const{duration:o=t.standard,easing:a=e.easeInOut,delay:l=0,...c}=s;if(process.env.NODE_ENV!=="production"){const h=d=>typeof d=="string",u=d=>!Number.isNaN(parseFloat(d));!h(r)&&!Array.isArray(r)&&console.error('MUI: Argument "props" must be a string or Array.'),!u(o)&&!h(o)&&console.error(`MUI: Argument "duration" must be a number or a string but found ${o}.`),h(a)||console.error('MUI: Argument "easing" must be a string.'),!u(l)&&!h(l)&&console.error('MUI: Argument "delay" must be a number or a string.'),typeof s!="object"&&console.error(["MUI: Secong argument of transition.create must be an object.","Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)),Object.keys(c).length!==0&&console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`)}return(Array.isArray(r)?r:[r]).map(h=>`${h} ${typeof o=="string"?o:c_(o)} ${a} ${typeof l=="string"?l:c_(l)}`).join(",")},...n,easing:e,duration:t}}const wC={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function Yh(n={},...e){const{breakpoints:t,mixins:i={},spacing:r,palette:s={},transitions:o={},typography:a={},shape:l,...c}=n;if(n.vars)throw new Error(process.env.NODE_ENV!=="production"?"MUI: `vars` is a private field used for CSS variables support.\nPlease use another name.":Ji(20));const h=jh(s),u=Rl(n);let d=yn(u,{mixins:gC(u.breakpoints,i),palette:h,shadows:SC.slice(),typography:vC(h,a),transitions:AC(o),zIndex:{...wC}});if(d=yn(d,c),d=e.reduce((f,m)=>yn(f,m),d),process.env.NODE_ENV!=="production"){const f=["active","checked","completed","disabled","error","expanded","focused","focusVisible","required","selected"],m=(v,p)=>{let g;for(g in v){const T=v[g];if(f.includes(g)&&Object.keys(T).length>0){if(process.env.NODE_ENV!=="production"){const y=ko("",g);console.error([`MUI: The \`${p}\` component increases the CSS specificity of the \`${g}\` internal state.`,"You can not override it like this: ",JSON.stringify(v,null,2),"",`Instead, you need to use the '&.${y}' syntax:`,JSON.stringify({root:{[`&.${y}`]:T}},null,2),"","https://mui.com/r/state-classes-guide"].join(`
`))}v[g]={}}}};Object.keys(d.components).forEach(v=>{const p=d.components[v].styleOverrides;p&&v.startsWith("Mui")&&m(p,v)})}return d.unstable_sxConfig={...Bo,...c==null?void 0:c.unstable_sxConfig},d.unstable_sx=function(m){return Ds({sx:m,theme:this})},d}function RC(n){let e;return n<1?e=5.11916*n**2:e=4.5*Math.log(n+1)+2,Math.round(e*10)/1e3}const CC=[...Array(25)].map((n,e)=>{if(e===0)return"none";const t=RC(e);return`linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`});function u_(n){return{inputPlaceholder:n==="dark"?.5:.42,inputUnderline:n==="dark"?.7:.42,switchTrackDisabled:n==="dark"?.2:.12,switchTrack:n==="dark"?.3:.38}}function h_(n){return n==="dark"?CC:[]}function PC(n){const{palette:e={mode:"light"},opacity:t,overlays:i,...r}=n,s=jh(e);return{palette:s,opacity:{...u_(s.mode),...t},overlays:i||h_(s.mode),...r}}function IC(n){var e;return!!n[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!n[0].match(/sxConfig$/)||n[0]==="palette"&&!!((e=n[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const LC=n=>[...[...Array(25)].map((e,t)=>`--${n?`${n}-`:""}overlays-${t}`),`--${n?`${n}-`:""}palette-AppBar-darkBg`,`--${n?`${n}-`:""}palette-AppBar-darkColor`],DC=n=>(e,t)=>{const i=n.rootSelector||":root",r=n.colorSchemeSelector;let s=r;if(r==="class"&&(s=".%s"),r==="data"&&(s="[data-%s]"),r!=null&&r.startsWith("data-")&&!r.includes("%s")&&(s=`[${r}="%s"]`),n.defaultColorScheme===e){if(e==="dark"){const o={};return LC(n.cssVarPrefix).forEach(a=>{o[a]=t[a],delete t[a]}),s==="media"?{[i]:t,"@media (prefers-color-scheme: dark)":{[i]:o}}:s?{[s.replace("%s",e)]:o,[`${i}, ${s.replace("%s",e)}`]:t}:{[i]:{...t,...o}}}if(s&&s!=="media")return`${i}, ${s.replace("%s",String(e))}`}else if(e){if(s==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[i]:t}};if(s)return s.replace("%s",String(e))}return i};function NC(n){return gi(n)||typeof n>"u"||typeof n=="string"||typeof n=="boolean"||typeof n=="number"||Array.isArray(n)}function OC(n={}){const e={...n};function t(i){const r=Object.entries(i);for(let s=0;s<r.length;s++){const[o,a]=r[s];!NC(a)||o.startsWith("unstable_")?delete i[o]:gi(a)&&(i[o]={...a},t(i[o]))}}return t(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function UC(n,e){e.forEach(t=>{n[t]||(n[t]={})})}function se(n,e,t){!n[e]&&t&&(n[e]=t)}function Ho(n){return!n||!n.startsWith("hsl")?n:qg(n)}function Ui(n,e){`${e}Channel`in n||(n[`${e}Channel`]=zo(Ho(n[e]),`MUI: Can't create \`palette.${e}Channel\` because \`palette.${e}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${e}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function FC(n){return typeof n=="number"?`${n}px`:typeof n=="string"||typeof n=="function"||Array.isArray(n)?n:"8px"}const _i=n=>{try{return n()}catch{}},BC=(n="mui")=>K1(n);function qh(n,e,t,i){if(!e)return;e=e===!0?{}:e;const r=i==="dark"?"dark":"light";if(!t){n[i]=PC({...e,palette:{mode:r,...e==null?void 0:e.palette}});return}const{palette:s,...o}=Yh({...t,palette:{mode:r,...e==null?void 0:e.palette}});return n[i]={...e,palette:s,opacity:{...u_(r),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||h_(r)},o}function kC(n={},...e){const{colorSchemes:t={light:!0},defaultColorScheme:i,disableCssColorScheme:r=!1,cssVarPrefix:s="mui",shouldSkipGeneratingVar:o=IC,colorSchemeSelector:a=t.light&&t.dark?"media":void 0,rootSelector:l=":root",...c}=n,h=Object.keys(t)[0],u=i||(t.light&&h!=="light"?"light":h),d=BC(s),{[u]:f,light:m,dark:v,...p}=t,g={...p};let T=f;if((u==="dark"&&!("dark"in t)||u==="light"&&!("light"in t))&&(T=!0),!T)throw new Error(process.env.NODE_ENV!=="production"?`MUI: The \`colorSchemes.${u}\` option is either missing or invalid.`:Ji(21,u));const y=qh(g,T,c,u);m&&!g.light&&qh(g,m,void 0,"light"),v&&!g.dark&&qh(g,v,void 0,"dark");let M={defaultColorScheme:u,...y,cssVarPrefix:s,colorSchemeSelector:a,rootSelector:l,getCssVar:d,colorSchemes:g,font:{...mC(y.typography),...y.font},spacing:FC(c.spacing)};Object.keys(M.colorSchemes).forEach(Z=>{const _=M.colorSchemes[Z].palette,S=H=>{const A=H.split("-"),b=A[1],L=A[2];return d(H,_[b][L])};if(_.mode==="light"&&(se(_.common,"background","#fff"),se(_.common,"onBackground","#000")),_.mode==="dark"&&(se(_.common,"background","#000"),se(_.common,"onBackground","#fff")),UC(_,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),_.mode==="light"){se(_.Alert,"errorColor",Pt(_.error.light,.6)),se(_.Alert,"infoColor",Pt(_.info.light,.6)),se(_.Alert,"successColor",Pt(_.success.light,.6)),se(_.Alert,"warningColor",Pt(_.warning.light,.6)),se(_.Alert,"errorFilledBg",S("palette-error-main")),se(_.Alert,"infoFilledBg",S("palette-info-main")),se(_.Alert,"successFilledBg",S("palette-success-main")),se(_.Alert,"warningFilledBg",S("palette-warning-main")),se(_.Alert,"errorFilledColor",_i(()=>_.getContrastText(_.error.main))),se(_.Alert,"infoFilledColor",_i(()=>_.getContrastText(_.info.main))),se(_.Alert,"successFilledColor",_i(()=>_.getContrastText(_.success.main))),se(_.Alert,"warningFilledColor",_i(()=>_.getContrastText(_.warning.main))),se(_.Alert,"errorStandardBg",It(_.error.light,.9)),se(_.Alert,"infoStandardBg",It(_.info.light,.9)),se(_.Alert,"successStandardBg",It(_.success.light,.9)),se(_.Alert,"warningStandardBg",It(_.warning.light,.9)),se(_.Alert,"errorIconColor",S("palette-error-main")),se(_.Alert,"infoIconColor",S("palette-info-main")),se(_.Alert,"successIconColor",S("palette-success-main")),se(_.Alert,"warningIconColor",S("palette-warning-main")),se(_.AppBar,"defaultBg",S("palette-grey-100")),se(_.Avatar,"defaultBg",S("palette-grey-400")),se(_.Button,"inheritContainedBg",S("palette-grey-300")),se(_.Button,"inheritContainedHoverBg",S("palette-grey-A100")),se(_.Chip,"defaultBorder",S("palette-grey-400")),se(_.Chip,"defaultAvatarColor",S("palette-grey-700")),se(_.Chip,"defaultIconColor",S("palette-grey-700")),se(_.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),se(_.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),se(_.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),se(_.LinearProgress,"primaryBg",It(_.primary.main,.62)),se(_.LinearProgress,"secondaryBg",It(_.secondary.main,.62)),se(_.LinearProgress,"errorBg",It(_.error.main,.62)),se(_.LinearProgress,"infoBg",It(_.info.main,.62)),se(_.LinearProgress,"successBg",It(_.success.main,.62)),se(_.LinearProgress,"warningBg",It(_.warning.main,.62)),se(_.Skeleton,"bg",`rgba(${S("palette-text-primaryChannel")} / 0.11)`),se(_.Slider,"primaryTrack",It(_.primary.main,.62)),se(_.Slider,"secondaryTrack",It(_.secondary.main,.62)),se(_.Slider,"errorTrack",It(_.error.main,.62)),se(_.Slider,"infoTrack",It(_.info.main,.62)),se(_.Slider,"successTrack",It(_.success.main,.62)),se(_.Slider,"warningTrack",It(_.warning.main,.62));const H=Ll(_.background.default,.8);se(_.SnackbarContent,"bg",H),se(_.SnackbarContent,"color",_i(()=>_.getContrastText(H))),se(_.SpeedDialAction,"fabHoverBg",Ll(_.background.paper,.15)),se(_.StepConnector,"border",S("palette-grey-400")),se(_.StepContent,"border",S("palette-grey-400")),se(_.Switch,"defaultColor",S("palette-common-white")),se(_.Switch,"defaultDisabledColor",S("palette-grey-100")),se(_.Switch,"primaryDisabledColor",It(_.primary.main,.62)),se(_.Switch,"secondaryDisabledColor",It(_.secondary.main,.62)),se(_.Switch,"errorDisabledColor",It(_.error.main,.62)),se(_.Switch,"infoDisabledColor",It(_.info.main,.62)),se(_.Switch,"successDisabledColor",It(_.success.main,.62)),se(_.Switch,"warningDisabledColor",It(_.warning.main,.62)),se(_.TableCell,"border",It(Il(_.divider,1),.88)),se(_.Tooltip,"bg",Il(_.grey[700],.92))}if(_.mode==="dark"){se(_.Alert,"errorColor",It(_.error.light,.6)),se(_.Alert,"infoColor",It(_.info.light,.6)),se(_.Alert,"successColor",It(_.success.light,.6)),se(_.Alert,"warningColor",It(_.warning.light,.6)),se(_.Alert,"errorFilledBg",S("palette-error-dark")),se(_.Alert,"infoFilledBg",S("palette-info-dark")),se(_.Alert,"successFilledBg",S("palette-success-dark")),se(_.Alert,"warningFilledBg",S("palette-warning-dark")),se(_.Alert,"errorFilledColor",_i(()=>_.getContrastText(_.error.dark))),se(_.Alert,"infoFilledColor",_i(()=>_.getContrastText(_.info.dark))),se(_.Alert,"successFilledColor",_i(()=>_.getContrastText(_.success.dark))),se(_.Alert,"warningFilledColor",_i(()=>_.getContrastText(_.warning.dark))),se(_.Alert,"errorStandardBg",Pt(_.error.light,.9)),se(_.Alert,"infoStandardBg",Pt(_.info.light,.9)),se(_.Alert,"successStandardBg",Pt(_.success.light,.9)),se(_.Alert,"warningStandardBg",Pt(_.warning.light,.9)),se(_.Alert,"errorIconColor",S("palette-error-main")),se(_.Alert,"infoIconColor",S("palette-info-main")),se(_.Alert,"successIconColor",S("palette-success-main")),se(_.Alert,"warningIconColor",S("palette-warning-main")),se(_.AppBar,"defaultBg",S("palette-grey-900")),se(_.AppBar,"darkBg",S("palette-background-paper")),se(_.AppBar,"darkColor",S("palette-text-primary")),se(_.Avatar,"defaultBg",S("palette-grey-600")),se(_.Button,"inheritContainedBg",S("palette-grey-800")),se(_.Button,"inheritContainedHoverBg",S("palette-grey-700")),se(_.Chip,"defaultBorder",S("palette-grey-700")),se(_.Chip,"defaultAvatarColor",S("palette-grey-300")),se(_.Chip,"defaultIconColor",S("palette-grey-300")),se(_.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),se(_.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),se(_.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),se(_.LinearProgress,"primaryBg",Pt(_.primary.main,.5)),se(_.LinearProgress,"secondaryBg",Pt(_.secondary.main,.5)),se(_.LinearProgress,"errorBg",Pt(_.error.main,.5)),se(_.LinearProgress,"infoBg",Pt(_.info.main,.5)),se(_.LinearProgress,"successBg",Pt(_.success.main,.5)),se(_.LinearProgress,"warningBg",Pt(_.warning.main,.5)),se(_.Skeleton,"bg",`rgba(${S("palette-text-primaryChannel")} / 0.13)`),se(_.Slider,"primaryTrack",Pt(_.primary.main,.5)),se(_.Slider,"secondaryTrack",Pt(_.secondary.main,.5)),se(_.Slider,"errorTrack",Pt(_.error.main,.5)),se(_.Slider,"infoTrack",Pt(_.info.main,.5)),se(_.Slider,"successTrack",Pt(_.success.main,.5)),se(_.Slider,"warningTrack",Pt(_.warning.main,.5));const H=Ll(_.background.default,.98);se(_.SnackbarContent,"bg",H),se(_.SnackbarContent,"color",_i(()=>_.getContrastText(H))),se(_.SpeedDialAction,"fabHoverBg",Ll(_.background.paper,.15)),se(_.StepConnector,"border",S("palette-grey-600")),se(_.StepContent,"border",S("palette-grey-600")),se(_.Switch,"defaultColor",S("palette-grey-300")),se(_.Switch,"defaultDisabledColor",S("palette-grey-600")),se(_.Switch,"primaryDisabledColor",Pt(_.primary.main,.55)),se(_.Switch,"secondaryDisabledColor",Pt(_.secondary.main,.55)),se(_.Switch,"errorDisabledColor",Pt(_.error.main,.55)),se(_.Switch,"infoDisabledColor",Pt(_.info.main,.55)),se(_.Switch,"successDisabledColor",Pt(_.success.main,.55)),se(_.Switch,"warningDisabledColor",Pt(_.warning.main,.55)),se(_.TableCell,"border",Pt(Il(_.divider,1),.68)),se(_.Tooltip,"bg",Il(_.grey[700],.92))}Ui(_.background,"default"),Ui(_.background,"paper"),Ui(_.common,"background"),Ui(_.common,"onBackground"),Ui(_,"divider"),Object.keys(_).forEach(H=>{const A=_[H];A&&typeof A=="object"&&(A.main&&se(_[H],"mainChannel",zo(Ho(A.main))),A.light&&se(_[H],"lightChannel",zo(Ho(A.light))),A.dark&&se(_[H],"darkChannel",zo(Ho(A.dark))),A.contrastText&&se(_[H],"contrastTextChannel",zo(Ho(A.contrastText))),H==="text"&&(Ui(_[H],"primary"),Ui(_[H],"secondary")),H==="action"&&(A.active&&Ui(_[H],"active"),A.selected&&Ui(_[H],"selected")))})}),M=e.reduce((Z,_)=>yn(Z,_),M);const E={prefix:s,disableCssColorScheme:r,shouldSkipGeneratingVar:o,getSelector:DC(M)},{vars:I,generateThemeVars:P,generateStyleSheets:B}=J1(M,E);return M.vars=I,Object.entries(M.colorSchemes[M.defaultColorScheme]).forEach(([Z,_])=>{M[Z]=_}),M.generateThemeVars=P,M.generateStyleSheets=B,M.generateSpacing=function(){return Fg(c.spacing,Sl(this))},M.getColorSchemeSelector=eC(a),M.spacing=M.generateSpacing(),M.shouldSkipGeneratingVar=o,M.unstable_sxConfig={...Bo,...c==null?void 0:c.unstable_sxConfig},M.unstable_sx=function(_){return Ds({sx:_,theme:this})},M.toRuntimeSource=OC,M}function d_(n,e,t){n.colorSchemes&&t&&(n.colorSchemes[e]={...t!==!0&&t,palette:jh({...t===!0?{}:t.palette,mode:e})})}function VC(n={},...e){const{palette:t,cssVariables:i=!1,colorSchemes:r=t?void 0:{light:!0},defaultColorScheme:s=t==null?void 0:t.mode,...o}=n,a=s||"light",l=r==null?void 0:r[a],c={...r,...t?{[a]:{...typeof l!="boolean"&&l,palette:t}}:void 0};if(i===!1){if(!("colorSchemes"in n))return Yh(n,...e);let h=t;"palette"in n||c[a]&&(c[a]!==!0?h=c[a].palette:a==="dark"&&(h={mode:"dark"}));const u=Yh({...n,palette:h},...e);return u.defaultColorScheme=a,u.colorSchemes=c,u.palette.mode==="light"&&(u.colorSchemes.light={...c.light!==!0&&c.light,palette:u.palette},d_(u,"dark",c.dark)),u.palette.mode==="dark"&&(u.colorSchemes.dark={...c.dark!==!0&&c.dark,palette:u.palette},d_(u,"light",c.light)),u}return!t&&!("light"in c)&&a==="light"&&(c.light=!0),kC({...o,colorSchemes:c,defaultColorScheme:a,...typeof i!="boolean"&&i},...e)}const zC=VC();function HC(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}const f_=n=>HC(n)&&n!=="classes",Os=jg({themeId:QA,defaultTheme:zC,rootShouldForwardProp:f_}),GC=q1;process.env.NODE_ENV!=="production"&&(Q.node,Q.object.isRequired);function Kh(n){return Y1(n)}function WC(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.includes(i))continue;t[i]=n[i]}return t}function Zh(n,e){return Zh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},Zh(n,e)}function $C(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,Zh(n,e)}const p_=tt.createContext(null);function XC(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Qh(n,e){var t=function(s){return e&&tt.isValidElement(s)?e(s):s},i=Object.create(null);return n&&tt.Children.map(n,function(r){return r}).forEach(function(r){i[r.key]=t(r)}),i}function jC(n,e){n=n||{},e=e||{};function t(h){return h in e?e[h]:n[h]}var i=Object.create(null),r=[];for(var s in n)s in e?r.length&&(i[s]=r,r=[]):r.push(s);var o,a={};for(var l in e){if(i[l])for(o=0;o<i[l].length;o++){var c=i[l][o];a[i[l][o]]=t(c)}a[l]=t(l)}for(o=0;o<r.length;o++)a[r[o]]=t(r[o]);return a}function Lr(n,e,t){return t[e]!=null?t[e]:n.props[e]}function YC(n,e){return Qh(n.children,function(t){return tt.cloneElement(t,{onExited:e.bind(null,t),in:!0,appear:Lr(t,"appear",n),enter:Lr(t,"enter",n),exit:Lr(t,"exit",n)})})}function qC(n,e,t){var i=Qh(n.children),r=jC(e,i);return Object.keys(r).forEach(function(s){var o=r[s];if(tt.isValidElement(o)){var a=s in e,l=s in i,c=e[s],h=tt.isValidElement(c)&&!c.props.in;l&&(!a||h)?r[s]=tt.cloneElement(o,{onExited:t.bind(null,o),in:!0,exit:Lr(o,"exit",n),enter:Lr(o,"enter",n)}):!l&&a&&!h?r[s]=tt.cloneElement(o,{in:!1}):l&&a&&tt.isValidElement(c)&&(r[s]=tt.cloneElement(o,{onExited:t.bind(null,o),in:c.props.in,exit:Lr(o,"exit",n),enter:Lr(o,"enter",n)}))}}),r}var KC=Object.values||function(n){return Object.keys(n).map(function(e){return n[e]})},ZC={component:"div",childFactory:function(e){return e}},Jh=function(n){$C(e,n);function e(i,r){var s;s=n.call(this,i,r)||this;var o=s.handleExited.bind(XC(s));return s.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},s}var t=e.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(r,s){var o=s.children,a=s.handleExited,l=s.firstRender;return{children:l?YC(r,a):qC(r,o,a),firstRender:!1}},t.handleExited=function(r,s){var o=Qh(this.props.children);r.key in o||(r.props.onExited&&r.props.onExited(s),this.mounted&&this.setState(function(a){var l=al({},a.children);return delete l[r.key],{children:l}}))},t.render=function(){var r=this.props,s=r.component,o=r.childFactory,a=WC(r,["component","childFactory"]),l=this.state.contextValue,c=KC(this.state.children).map(o);return delete a.appear,delete a.enter,delete a.exit,s===null?tt.createElement(p_.Provider,{value:l},c):tt.createElement(p_.Provider,{value:l},tt.createElement(s,a,c))},e}(tt.Component);Jh.propTypes=process.env.NODE_ENV!=="production"?{component:Q.any,children:Q.node,appear:Q.bool,enter:Q.bool,exit:Q.bool,childFactory:Q.func}:{},Jh.defaultProps=ZC;class Nl{constructor(){tn(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new Nl}static use(){const e=Jg(Nl.create).current,[t,i]=Ge.useState(!1);return e.shouldMount=t,e.setShouldMount=i,Ge.useEffect(e.mountEffect,[t]),e}mount(){return this.mounted||(this.mounted=JC(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.start(...e)})}stop(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.stop(...e)})}pulsate(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.pulsate(...e)})}}function QC(){return Nl.use()}function JC(){let n,e;const t=new Promise((i,r)=>{n=i,e=r});return t.resolve=n,t.reject=e,t}function m_(n){const{className:e,classes:t,pulsate:i=!1,rippleX:r,rippleY:s,rippleSize:o,in:a,onExited:l,timeout:c}=n,[h,u]=Ge.useState(!1),d=Ln(e,t.ripple,t.rippleVisible,i&&t.ripplePulsate),f={width:o,height:o,top:-(o/2)+s,left:-(o/2)+r},m=Ln(t.child,h&&t.childLeaving,i&&t.childPulsate);return!a&&!h&&u(!0),Ge.useEffect(()=>{if(!a&&l!=null){const v=setTimeout(l,c);return()=>{clearTimeout(v)}}},[l,a,c]),pt.jsx("span",{className:d,style:f,children:pt.jsx("span",{className:m})})}process.env.NODE_ENV!=="production"&&(m_.propTypes={classes:Q.object.isRequired,className:Q.string,in:Q.bool,onExited:Q.func,pulsate:Q.bool,rippleSize:Q.number,rippleX:Q.number,rippleY:Q.number,timeout:Q.number.isRequired});const Gn=Uh("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),ed=550,eP=80,tP=Th`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,nP=Th`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,iP=Th`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,rP=Os("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),sP=Os(m_,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${Gn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${tP};
    animation-duration: ${ed}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  &.${Gn.ripplePulsate} {
    animation-duration: ${({theme:n})=>n.transitions.duration.shorter}ms;
  }

  & .${Gn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Gn.childLeaving} {
    opacity: 0;
    animation-name: ${nP};
    animation-duration: ${ed}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  & .${Gn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${iP};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,g_=Ge.forwardRef(function(e,t){const i=Kh({props:e,name:"MuiTouchRipple"}),{center:r=!1,classes:s={},className:o,...a}=i,[l,c]=Ge.useState([]),h=Ge.useRef(0),u=Ge.useRef(null);Ge.useEffect(()=>{u.current&&(u.current(),u.current=null)},[l]);const d=Ge.useRef(!1),f=$1(),m=Ge.useRef(null),v=Ge.useRef(null),p=Ge.useCallback(M=>{const{pulsate:E,rippleX:I,rippleY:P,rippleSize:B,cb:Z}=M;c(_=>[..._,pt.jsx(sP,{classes:{ripple:Ln(s.ripple,Gn.ripple),rippleVisible:Ln(s.rippleVisible,Gn.rippleVisible),ripplePulsate:Ln(s.ripplePulsate,Gn.ripplePulsate),child:Ln(s.child,Gn.child),childLeaving:Ln(s.childLeaving,Gn.childLeaving),childPulsate:Ln(s.childPulsate,Gn.childPulsate)},timeout:ed,pulsate:E,rippleX:I,rippleY:P,rippleSize:B},h.current)]),h.current+=1,u.current=Z},[s]),g=Ge.useCallback((M={},E={},I=()=>{})=>{const{pulsate:P=!1,center:B=r||E.pulsate,fakeElement:Z=!1}=E;if((M==null?void 0:M.type)==="mousedown"&&d.current){d.current=!1;return}(M==null?void 0:M.type)==="touchstart"&&(d.current=!0);const _=Z?null:v.current,S=_?_.getBoundingClientRect():{width:0,height:0,left:0,top:0};let H,A,b;if(B||M===void 0||M.clientX===0&&M.clientY===0||!M.clientX&&!M.touches)H=Math.round(S.width/2),A=Math.round(S.height/2);else{const{clientX:L,clientY:C}=M.touches&&M.touches.length>0?M.touches[0]:M;H=Math.round(L-S.left),A=Math.round(C-S.top)}if(B)b=Math.sqrt((2*S.width**2+S.height**2)/3),b%2===0&&(b+=1);else{const L=Math.max(Math.abs((_?_.clientWidth:0)-H),H)*2+2,C=Math.max(Math.abs((_?_.clientHeight:0)-A),A)*2+2;b=Math.sqrt(L**2+C**2)}M!=null&&M.touches?m.current===null&&(m.current=()=>{p({pulsate:P,rippleX:H,rippleY:A,rippleSize:b,cb:I})},f.start(eP,()=>{m.current&&(m.current(),m.current=null)})):p({pulsate:P,rippleX:H,rippleY:A,rippleSize:b,cb:I})},[r,p,f]),T=Ge.useCallback(()=>{g({},{pulsate:!0})},[g]),y=Ge.useCallback((M,E)=>{if(f.clear(),(M==null?void 0:M.type)==="touchend"&&m.current){m.current(),m.current=null,f.start(0,()=>{y(M,E)});return}m.current=null,c(I=>I.length>0?I.slice(1):I),u.current=E},[f]);return Ge.useImperativeHandle(t,()=>({pulsate:T,start:g,stop:y}),[T,g,y]),pt.jsx(rP,{className:Ln(Gn.root,s.root,o),ref:v,...a,children:pt.jsx(Jh,{component:null,exit:!0,children:l})})});process.env.NODE_ENV!=="production"&&(g_.propTypes={center:Q.bool,classes:Q.object,className:Q.string});function oP(n){return ko("MuiButtonBase",n)}const aP=Uh("MuiButtonBase",["root","disabled","focusVisible"]),lP=n=>{const{disabled:e,focusVisible:t,focusVisibleClassName:i,classes:r}=n,o=Wh({root:["root",e&&"disabled",t&&"focusVisible"]},oP,r);return t&&i&&(o.root+=` ${i}`),o},cP=Os("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${aP.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),__=Ge.forwardRef(function(e,t){const i=Kh({props:e,name:"MuiButtonBase"}),{action:r,centerRipple:s=!1,children:o,className:a,component:l="button",disabled:c=!1,disableRipple:h=!1,disableTouchRipple:u=!1,focusRipple:d=!1,focusVisibleClassName:f,LinkComponent:m="a",onBlur:v,onClick:p,onContextMenu:g,onDragLeave:T,onFocus:y,onFocusVisible:M,onKeyDown:E,onKeyUp:I,onMouseDown:P,onMouseLeave:B,onMouseUp:Z,onTouchEnd:_,onTouchMove:S,onTouchStart:H,tabIndex:A=0,TouchRippleProps:b,touchRippleRef:L,type:C,...U}=i,O=Ge.useRef(null),te=QC(),V=Zg(te.ref,L),[W,ne]=Ge.useState(!1);c&&W&&ne(!1),Ge.useImperativeHandle(r,()=>({focusVisible:()=>{ne(!0),O.current.focus()}}),[]);const ae=te.shouldMount&&!h&&!c;Ge.useEffect(()=>{W&&d&&!h&&te.pulsate()},[h,d,W,te]);function $(ee,de,le=u){return Dl(De=>(de&&de(De),le||te[ee](De),!0))}const Y=$("start",P),oe=$("stop",g),re=$("stop",T),ue=$("stop",Z),me=$("stop",ee=>{W&&ee.preventDefault(),B&&B(ee)}),he=$("start",H),be=$("stop",_),j=$("stop",S),F=$("stop",ee=>{e_(ee.target)||ne(!1),v&&v(ee)},!1),_e=Dl(ee=>{O.current||(O.current=ee.currentTarget),e_(ee.target)&&(ne(!0),M&&M(ee)),y&&y(ee)}),Fe=()=>{const ee=O.current;return l&&l!=="button"&&!(ee.tagName==="A"&&ee.href)},Xe=Dl(ee=>{d&&!ee.repeat&&W&&ee.key===" "&&te.stop(ee,()=>{te.start(ee)}),ee.target===ee.currentTarget&&Fe()&&ee.key===" "&&ee.preventDefault(),E&&E(ee),ee.target===ee.currentTarget&&Fe()&&ee.key==="Enter"&&!c&&(ee.preventDefault(),p&&p(ee))}),Be=Dl(ee=>{d&&ee.key===" "&&W&&!ee.defaultPrevented&&te.stop(ee,()=>{te.pulsate(ee)}),I&&I(ee),p&&ee.target===ee.currentTarget&&Fe()&&ee.key===" "&&!ee.defaultPrevented&&p(ee)});let st=l;st==="button"&&(U.href||U.to)&&(st=m);const Ne={};st==="button"?(Ne.type=C===void 0?"button":C,Ne.disabled=c):(!U.href&&!U.to&&(Ne.role="button"),c&&(Ne["aria-disabled"]=c));const D=Zg(t,O),R={...i,centerRipple:s,component:l,disabled:c,disableRipple:h,disableTouchRipple:u,focusRipple:d,tabIndex:A,focusVisible:W},J=lP(R);return pt.jsxs(cP,{as:st,className:Ln(J.root,a),ownerState:R,onBlur:F,onClick:p,onContextMenu:oe,onFocus:_e,onKeyDown:Xe,onKeyUp:Be,onMouseDown:Y,onMouseLeave:me,onMouseUp:ue,onDragLeave:re,onTouchEnd:be,onTouchMove:j,onTouchStart:he,ref:D,tabIndex:c?-1:A,type:C,...Ne,...U,children:[o,ae?pt.jsx(g_,{ref:V,center:s,...b}):null]})});process.env.NODE_ENV!=="production"&&(__.propTypes={action:z1,centerRipple:Q.bool,children:Q.node,classes:Q.object,className:Q.string,component:V1,disabled:Q.bool,disableRipple:Q.bool,disableTouchRipple:Q.bool,focusRipple:Q.bool,focusVisibleClassName:Q.string,href:Q.any,LinkComponent:Q.elementType,onBlur:Q.func,onClick:Q.func,onContextMenu:Q.func,onDragLeave:Q.func,onFocus:Q.func,onFocusVisible:Q.func,onKeyDown:Q.func,onKeyUp:Q.func,onMouseDown:Q.func,onMouseLeave:Q.func,onMouseUp:Q.func,onTouchEnd:Q.func,onTouchMove:Q.func,onTouchStart:Q.func,sx:Q.oneOfType([Q.arrayOf(Q.oneOfType([Q.func,Q.object,Q.bool])),Q.func,Q.object]),tabIndex:Q.number,TouchRippleProps:Q.object,touchRippleRef:Q.oneOfType([Q.func,Q.shape({current:Q.shape({pulsate:Q.func.isRequired,start:Q.func.isRequired,stop:Q.func.isRequired})})]),type:Q.oneOfType([Q.oneOf(["button","reset","submit"]),Q.string])});function uP(n){return typeof n.main=="string"}function hP(n,e=[]){if(!uP(n))return!1;for(const t of e)if(!n.hasOwnProperty(t)||typeof n[t]!="string")return!1;return!0}function dP(n=[]){return([,e])=>e&&hP(e,n)}function fP(n){return ko("MuiButton",n)}const Us=Uh("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),v_=Ge.createContext({});process.env.NODE_ENV!=="production"&&(v_.displayName="ButtonGroupContext");const y_=Ge.createContext(void 0);process.env.NODE_ENV!=="production"&&(y_.displayName="ButtonGroupButtonContext");const pP=n=>{const{color:e,disableElevation:t,fullWidth:i,size:r,variant:s,classes:o}=n,a={root:["root",s,`${s}${Sn(e)}`,`size${Sn(r)}`,`${s}Size${Sn(r)}`,`color${Sn(e)}`,t&&"disableElevation",i&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${Sn(r)}`],endIcon:["icon","endIcon",`iconSize${Sn(r)}`]},l=Wh(a,fP,o);return{...o,...l}},x_=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],mP=Os(__,{shouldForwardProp:n=>f_(n)||n==="classes",name:"MuiButton",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[t.variant],e[`${t.variant}${Sn(t.color)}`],e[`size${Sn(t.size)}`],e[`${t.variant}Size${Sn(t.size)}`],t.color==="inherit"&&e.colorInherit,t.disableElevation&&e.disableElevation,t.fullWidth&&e.fullWidth]}})(GC(({theme:n})=>{const e=n.palette.mode==="light"?n.palette.grey[300]:n.palette.grey[800],t=n.palette.mode==="light"?n.palette.grey.A100:n.palette.grey[700];return{...n.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${Us.disabled}`]:{color:(n.vars||n).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(n.vars||n).shadows[2],"&:hover":{boxShadow:(n.vars||n).shadows[4],"@media (hover: none)":{boxShadow:(n.vars||n).shadows[2]}},"&:active":{boxShadow:(n.vars||n).shadows[8]},[`&.${Us.focusVisible}`]:{boxShadow:(n.vars||n).shadows[6]},[`&.${Us.disabled}`]:{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${Us.disabled}`]:{border:`1px solid ${(n.vars||n).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(n.palette).filter(dP()).map(([i])=>({props:{color:i},style:{"--variant-textColor":(n.vars||n).palette[i].main,"--variant-outlinedColor":(n.vars||n).palette[i].main,"--variant-outlinedBorder":n.vars?`rgba(${n.vars.palette[i].mainChannel} / 0.5)`:Ns(n.palette[i].main,.5),"--variant-containedColor":(n.vars||n).palette[i].contrastText,"--variant-containedBg":(n.vars||n).palette[i].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(n.vars||n).palette[i].dark,"--variant-textBg":n.vars?`rgba(${n.vars.palette[i].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:Ns(n.palette[i].main,n.palette.action.hoverOpacity),"--variant-outlinedBorder":(n.vars||n).palette[i].main,"--variant-outlinedBg":n.vars?`rgba(${n.vars.palette[i].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:Ns(n.palette[i].main,n.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":n.vars?n.vars.palette.Button.inheritContainedBg:e,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":n.vars?n.vars.palette.Button.inheritContainedHoverBg:t,"--variant-textBg":n.vars?`rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`:Ns(n.palette.text.primary,n.palette.action.hoverOpacity),"--variant-outlinedBg":n.vars?`rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`:Ns(n.palette.text.primary,n.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:n.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:n.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:n.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Us.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Us.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),gP=Os("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.startIcon,e[`iconSize${Sn(t.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...x_]}),_P=Os("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.endIcon,e[`iconSize${Sn(t.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...x_]}),td=Ge.forwardRef(function(e,t){const i=Ge.useContext(v_),r=Ge.useContext(y_),s=Vo(i,e),o=Kh({props:s,name:"MuiButton"}),{children:a,color:l="primary",component:c="button",className:h,disabled:u=!1,disableElevation:d=!1,disableFocusRipple:f=!1,endIcon:m,focusVisibleClassName:v,fullWidth:p=!1,size:g="medium",startIcon:T,type:y,variant:M="text",...E}=o,I={...o,color:l,component:c,disabled:u,disableElevation:d,disableFocusRipple:f,fullWidth:p,size:g,type:y,variant:M},P=pP(I),B=T&&pt.jsx(gP,{className:P.startIcon,ownerState:I,children:T}),Z=m&&pt.jsx(_P,{className:P.endIcon,ownerState:I,children:m}),_=r||"";return pt.jsxs(mP,{ownerState:I,className:Ln(i.className,P.root,h,_),component:c,disabled:u,focusRipple:!f,focusVisibleClassName:Ln(P.focusVisible,v),ref:t,type:y,...E,classes:P,children:[B,a,Z]})});process.env.NODE_ENV!=="production"&&(td.propTypes={children:Q.node,classes:Q.object,className:Q.string,color:Q.oneOfType([Q.oneOf(["inherit","primary","secondary","success","error","info","warning"]),Q.string]),component:Q.elementType,disabled:Q.bool,disableElevation:Q.bool,disableFocusRipple:Q.bool,disableRipple:Q.bool,endIcon:Q.node,focusVisibleClassName:Q.string,fullWidth:Q.bool,href:Q.string,size:Q.oneOfType([Q.oneOf(["small","medium","large"]),Q.string]),startIcon:Q.node,sx:Q.oneOfType([Q.arrayOf(Q.oneOfType([Q.func,Q.object,Q.bool])),Q.func,Q.object]),type:Q.oneOfType([Q.oneOf(["button","reset","submit"]),Q.string]),variant:Q.oneOfType([Q.oneOf(["contained","outlined","text"]),Q.string])});var M_={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(YA,function(){function t(A,b,L){for(var C,U=0,O=b.length;U<O;U++)!C&&U in b||(C||(C=Array.prototype.slice.call(b,0,U)),C[U]=b[U]);return A.concat(C||Array.prototype.slice.call(b))}var i=Object.freeze({__proto__:null,blackman:function(A){for(var b=new Float32Array(A),L=2*Math.PI/(A-1),C=2*L,U=0;U<A/2;U++)b[U]=.42-.5*Math.cos(U*L)+.08*Math.cos(U*C);for(U=Math.ceil(A/2);U>0;U--)b[A-U]=b[U-1];return b},hamming:function(A){for(var b=new Float32Array(A),L=0;L<A;L++)b[L]=.54-.46*Math.cos(2*Math.PI*(L/A-1));return b},hanning:function(A){for(var b=new Float32Array(A),L=0;L<A;L++)b[L]=.5-.5*Math.cos(2*Math.PI*L/(A-1));return b},sine:function(A){for(var b=Math.PI/(A-1),L=new Float32Array(A),C=0;C<A;C++)L[C]=Math.sin(b*C);return L}}),r={};function s(A){for(;A%2==0&&A>1;)A/=2;return A===1}function o(A,b){if(b!=="rect"){if(b!==""&&b||(b="hanning"),r[b]||(r[b]={}),!r[b][A.length])try{r[b][A.length]=i[b](A.length)}catch{throw new Error("Invalid windowing function")}A=function(L,C){for(var U=[],O=0;O<Math.min(L.length,C.length);O++)U[O]=L[O]*C[O];return U}(A,r[b][A.length])}return A}function a(A,b,L){for(var C=new Float32Array(A),U=0;U<C.length;U++)C[U]=U*b/L,C[U]=13*Math.atan(C[U]/1315.8)+3.5*Math.atan(Math.pow(C[U]/7518,2));return C}function l(A){return Float32Array.from(A)}function c(A){return 1125*Math.log(1+A/700)}function h(A,b,L){for(var C,U=new Float32Array(A+2),O=new Float32Array(A+2),te=b/2,V=c(0),W=(c(te)-V)/(A+1),ne=new Array(A+2),ae=0;ae<U.length;ae++)U[ae]=ae*W,O[ae]=(C=U[ae],700*(Math.exp(C/1125)-1)),ne[ae]=Math.floor((L+1)*O[ae]/b);for(var $=new Array(A),Y=0;Y<$.length;Y++){for($[Y]=new Array(L/2+1).fill(0),ae=ne[Y];ae<ne[Y+1];ae++)$[Y][ae]=(ae-ne[Y])/(ne[Y+1]-ne[Y]);for(ae=ne[Y+1];ae<ne[Y+2];ae++)$[Y][ae]=(ne[Y+2]-ae)/(ne[Y+2]-ne[Y+1])}return $}function u(A,b,L,C,U,O,te){C===void 0&&(C=5),U===void 0&&(U=2),O===void 0&&(O=!0),te===void 0&&(te=440);var V=Math.floor(L/2)+1,W=new Array(L).fill(0).map(function(he,be){return A*function(j,F){return Math.log2(16*j/F)}(b*be/L,te)});W[0]=W[1]-1.5*A;var ne,ae,$,Y=W.slice(1).map(function(he,be){return Math.max(he-W[be])},1).concat([1]),oe=Math.round(A/2),re=new Array(A).fill(0).map(function(he,be){return W.map(function(j){return(10*A+oe+j-be)%A-oe})}),ue=re.map(function(he,be){return he.map(function(j,F){return Math.exp(-.5*Math.pow(2*re[be][F]/Y[F],2))})});if(ae=(ne=ue)[0].map(function(){return 0}),$=ne.reduce(function(he,be){return be.forEach(function(j,F){he[F]+=Math.pow(j,2)}),he},ae).map(Math.sqrt),ue=ne.map(function(he,be){return he.map(function(j,F){return j/($[F]||1)})}),U){var me=W.map(function(he){return Math.exp(-.5*Math.pow((he/A-C)/U,2))});ue=ue.map(function(he){return he.map(function(be,j){return be*me[j]})})}return O&&(ue=t(t([],ue.slice(3),!0),ue.slice(0,3))),ue.map(function(he){return he.slice(0,V)})}function d(A,b){for(var L=0,C=0,U=0;U<b.length;U++)L+=Math.pow(U,A)*Math.abs(b[U]),C+=b[U];return L/C}function f(A){var b=A.ampSpectrum,L=A.barkScale,C=A.numberOfBarkBands,U=C===void 0?24:C;if(typeof b!="object"||typeof L!="object")throw new TypeError;var O=U,te=new Float32Array(O),V=0,W=b,ne=new Int32Array(O+1);ne[0]=0;for(var ae=L[W.length-1]/O,$=1,Y=0;Y<W.length;Y++)for(;L[Y]>ae;)ne[$++]=Y,ae=$*L[W.length-1]/O;for(ne[O]=W.length-1,Y=0;Y<O;Y++){for(var oe=0,re=ne[Y];re<ne[Y+1];re++)oe+=W[re];te[Y]=Math.pow(oe,.23)}for(Y=0;Y<te.length;Y++)V+=te[Y];return{specific:te,total:V}}function m(A){var b=A.ampSpectrum;if(typeof b!="object")throw new TypeError;for(var L=new Float32Array(b.length),C=0;C<L.length;C++)L[C]=Math.pow(b[C],2);return L}function v(A){var b=A.ampSpectrum,L=A.melFilterBank,C=A.bufferSize;if(typeof b!="object")throw new TypeError("Valid ampSpectrum is required to generate melBands");if(typeof L!="object")throw new TypeError("Valid melFilterBank is required to generate melBands");for(var U=m({ampSpectrum:b}),O=L.length,te=Array(O),V=new Float32Array(O),W=0;W<V.length;W++){te[W]=new Float32Array(C/2),V[W]=0;for(var ne=0;ne<C/2;ne++)te[W][ne]=L[W][ne]*U[ne],V[W]+=te[W][ne];V[W]=Math.log(V[W]+1)}return Array.prototype.slice.call(V)}function p(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}var g=null,T=p(function(A,b){var L=A.length;return b=b||2,g&&g[L]||function(C){(g=g||{})[C]=new Array(C*C);for(var U=Math.PI/C,O=0;O<C;O++)for(var te=0;te<C;te++)g[C][te+O*C]=Math.cos(U*(te+.5)*O)}(L),A.map(function(){return 0}).map(function(C,U){return b*A.reduce(function(O,te,V,W){return O+te*g[L][V+U*L]},0)})}),y=Object.freeze({__proto__:null,amplitudeSpectrum:function(A){return A.ampSpectrum},buffer:function(A){return A.signal},chroma:function(A){var b=A.ampSpectrum,L=A.chromaFilterBank;if(typeof b!="object")throw new TypeError("Valid ampSpectrum is required to generate chroma");if(typeof L!="object")throw new TypeError("Valid chromaFilterBank is required to generate chroma");var C=L.map(function(O,te){return b.reduce(function(V,W,ne){return V+W*O[ne]},0)}),U=Math.max.apply(Math,C);return U?C.map(function(O){return O/U}):C},complexSpectrum:function(A){return A.complexSpectrum},energy:function(A){var b=A.signal;if(typeof b!="object")throw new TypeError;for(var L=0,C=0;C<b.length;C++)L+=Math.pow(Math.abs(b[C]),2);return L},loudness:f,melBands:v,mfcc:function(A){var b=A.ampSpectrum,L=A.melFilterBank,C=A.numberOfMFCCCoefficients,U=A.bufferSize,O=Math.min(40,Math.max(1,C||13));if(L.length<O)throw new Error("Insufficient filter bank for requested number of coefficients");var te=v({ampSpectrum:b,melFilterBank:L,bufferSize:U});return T(te).slice(0,O)},perceptualSharpness:function(A){for(var b=f({ampSpectrum:A.ampSpectrum,barkScale:A.barkScale}),L=b.specific,C=0,U=0;U<L.length;U++)C+=U<15?(U+1)*L[U+1]:.066*Math.exp(.171*(U+1));return C*=.11/b.total},perceptualSpread:function(A){for(var b=f({ampSpectrum:A.ampSpectrum,barkScale:A.barkScale}),L=0,C=0;C<b.specific.length;C++)b.specific[C]>L&&(L=b.specific[C]);return Math.pow((b.total-L)/b.total,2)},powerSpectrum:m,rms:function(A){var b=A.signal;if(typeof b!="object")throw new TypeError;for(var L=0,C=0;C<b.length;C++)L+=Math.pow(b[C],2);return L/=b.length,L=Math.sqrt(L)},spectralCentroid:function(A){var b=A.ampSpectrum;if(typeof b!="object")throw new TypeError;return d(1,b)},spectralCrest:function(A){var b=A.ampSpectrum;if(typeof b!="object")throw new TypeError;var L=0,C=-1/0;return b.forEach(function(U){L+=Math.pow(U,2),C=U>C?U:C}),L/=b.length,L=Math.sqrt(L),C/L},spectralFlatness:function(A){var b=A.ampSpectrum;if(typeof b!="object")throw new TypeError;for(var L=0,C=0,U=0;U<b.length;U++)L+=Math.log(b[U]),C+=b[U];return Math.exp(L/b.length)*b.length/C},spectralFlux:function(A){var b=A.signal,L=A.previousSignal,C=A.bufferSize;if(typeof b!="object"||typeof L!="object")throw new TypeError;for(var U=0,O=-C/2;O<b.length/2-1;O++)x=Math.abs(b[O])-Math.abs(L[O]),U+=(x+Math.abs(x))/2;return U},spectralKurtosis:function(A){var b=A.ampSpectrum;if(typeof b!="object")throw new TypeError;var L=b,C=d(1,L),U=d(2,L),O=d(3,L),te=d(4,L);return(-3*Math.pow(C,4)+6*C*U-4*C*O+te)/Math.pow(Math.sqrt(U-Math.pow(C,2)),4)},spectralRolloff:function(A){var b=A.ampSpectrum,L=A.sampleRate;if(typeof b!="object")throw new TypeError;for(var C=b,U=L/(2*(C.length-1)),O=0,te=0;te<C.length;te++)O+=C[te];for(var V=.99*O,W=C.length-1;O>V&&W>=0;)O-=C[W],--W;return(W+1)*U},spectralSkewness:function(A){var b=A.ampSpectrum;if(typeof b!="object")throw new TypeError;var L=d(1,b),C=d(2,b),U=d(3,b);return(2*Math.pow(L,3)-3*L*C+U)/Math.pow(Math.sqrt(C-Math.pow(L,2)),3)},spectralSlope:function(A){var b=A.ampSpectrum,L=A.sampleRate,C=A.bufferSize;if(typeof b!="object")throw new TypeError;for(var U=0,O=0,te=new Float32Array(b.length),V=0,W=0,ne=0;ne<b.length;ne++){U+=b[ne];var ae=ne*L/C;te[ne]=ae,V+=ae*ae,O+=ae,W+=ae*b[ne]}return(b.length*W-O*U)/(U*(V-Math.pow(O,2)))},spectralSpread:function(A){var b=A.ampSpectrum;if(typeof b!="object")throw new TypeError;return Math.sqrt(d(2,b)-Math.pow(d(1,b),2))},zcr:function(A){var b=A.signal;if(typeof b!="object")throw new TypeError;for(var L=0,C=1;C<b.length;C++)(b[C-1]>=0&&b[C]<0||b[C-1]<0&&b[C]>=0)&&L++;return L}});function M(A){if(Array.isArray(A)){for(var b=0,L=Array(A.length);b<A.length;b++)L[b]=A[b];return L}return Array.from(A)}var E={},I={},P={bitReverseArray:function(A){if(E[A]===void 0){for(var b=(A-1).toString(2).length,L="0".repeat(b),C={},U=0;U<A;U++){var O=U.toString(2);O=L.substr(O.length)+O,O=[].concat(M(O)).reverse().join(""),C[U]=parseInt(O,2)}E[A]=C}return E[A]},multiply:function(A,b){return{real:A.real*b.real-A.imag*b.imag,imag:A.real*b.imag+A.imag*b.real}},add:function(A,b){return{real:A.real+b.real,imag:A.imag+b.imag}},subtract:function(A,b){return{real:A.real-b.real,imag:A.imag-b.imag}},euler:function(A,b){var L=-2*Math.PI*A/b;return{real:Math.cos(L),imag:Math.sin(L)}},conj:function(A){return A.imag*=-1,A},constructComplexArray:function(A){var b={};b.real=A.real===void 0?A.slice():A.real.slice();var L=b.real.length;return I[L]===void 0&&(I[L]=Array.apply(null,Array(L)).map(Number.prototype.valueOf,0)),b.imag=I[L].slice(),b}},B=function(A){var b={};A.real===void 0||A.imag===void 0?b=P.constructComplexArray(A):(b.real=A.real.slice(),b.imag=A.imag.slice());var L=b.real.length,C=Math.log2(L);if(Math.round(C)!=C)throw new Error("Input size must be a power of 2.");if(b.real.length!=b.imag.length)throw new Error("Real and imaginary components must have the same length.");for(var U=P.bitReverseArray(L),O={real:[],imag:[]},te=0;te<L;te++)O.real[U[te]]=b.real[te],O.imag[U[te]]=b.imag[te];for(var V=0;V<L;V++)b.real[V]=O.real[V],b.imag[V]=O.imag[V];for(var W=1;W<=C;W++)for(var ne=Math.pow(2,W),ae=0;ae<ne/2;ae++)for(var $=P.euler(ae,ne),Y=0;Y<L/ne;Y++){var oe=ne*Y+ae,re=ne*Y+ae+ne/2,ue={real:b.real[oe],imag:b.imag[oe]},me={real:b.real[re],imag:b.imag[re]},he=P.multiply($,me),be=P.subtract(ue,he);b.real[re]=be.real,b.imag[re]=be.imag;var j=P.add(he,ue);b.real[oe]=j.real,b.imag[oe]=j.imag}return b},Z=B,_=function(){function A(b,L){var C=this;if(this._m=L,!b.audioContext)throw this._m.errors.noAC;if(b.bufferSize&&!s(b.bufferSize))throw this._m._errors.notPow2;if(!b.source)throw this._m._errors.noSource;this._m.audioContext=b.audioContext,this._m.bufferSize=b.bufferSize||this._m.bufferSize||256,this._m.hopSize=b.hopSize||this._m.hopSize||this._m.bufferSize,this._m.sampleRate=b.sampleRate||this._m.audioContext.sampleRate||44100,this._m.callback=b.callback,this._m.windowingFunction=b.windowingFunction||"hanning",this._m.featureExtractors=y,this._m.EXTRACTION_STARTED=b.startImmediately||!1,this._m.channel=typeof b.channel=="number"?b.channel:0,this._m.inputs=b.inputs||1,this._m.outputs=b.outputs||1,this._m.numberOfMFCCCoefficients=b.numberOfMFCCCoefficients||this._m.numberOfMFCCCoefficients||13,this._m.numberOfBarkBands=b.numberOfBarkBands||this._m.numberOfBarkBands||24,this._m.spn=this._m.audioContext.createScriptProcessor(this._m.bufferSize,this._m.inputs,this._m.outputs),this._m.spn.connect(this._m.audioContext.destination),this._m._featuresToExtract=b.featureExtractors||[],this._m.barkScale=a(this._m.bufferSize,this._m.sampleRate,this._m.bufferSize),this._m.melFilterBank=h(Math.max(this._m.melBands,this._m.numberOfMFCCCoefficients),this._m.sampleRate,this._m.bufferSize),this._m.inputData=null,this._m.previousInputData=null,this._m.frame=null,this._m.previousFrame=null,this.setSource(b.source),this._m.spn.onaudioprocess=function(U){var O;C._m.inputData!==null&&(C._m.previousInputData=C._m.inputData),C._m.inputData=U.inputBuffer.getChannelData(C._m.channel),C._m.previousInputData?((O=new Float32Array(C._m.previousInputData.length+C._m.inputData.length-C._m.hopSize)).set(C._m.previousInputData.slice(C._m.hopSize)),O.set(C._m.inputData,C._m.previousInputData.length-C._m.hopSize)):O=C._m.inputData;var te=function(V,W,ne){if(V.length<W)throw new Error("Buffer is too short for frame length");if(ne<1)throw new Error("Hop length cannot be less that 1");if(W<1)throw new Error("Frame length cannot be less that 1");var ae=1+Math.floor((V.length-W)/ne);return new Array(ae).fill(0).map(function($,Y){return V.slice(Y*ne,Y*ne+W)})}(O,C._m.bufferSize,C._m.hopSize);te.forEach(function(V){C._m.frame=V;var W=C._m.extract(C._m._featuresToExtract,C._m.frame,C._m.previousFrame);typeof C._m.callback=="function"&&C._m.EXTRACTION_STARTED&&C._m.callback(W),C._m.previousFrame=C._m.frame})}}return A.prototype.start=function(b){this._m._featuresToExtract=b||this._m._featuresToExtract,this._m.EXTRACTION_STARTED=!0},A.prototype.stop=function(){this._m.EXTRACTION_STARTED=!1},A.prototype.setSource=function(b){this._m.source&&this._m.source.disconnect(this._m.spn),this._m.source=b,this._m.source.connect(this._m.spn)},A.prototype.setChannel=function(b){b<=this._m.inputs?this._m.channel=b:console.error("Channel ".concat(b," does not exist. Make sure you've provided a value for 'inputs' that is greater than ").concat(b," when instantiating the MeydaAnalyzer"))},A.prototype.get=function(b){return this._m.inputData?this._m.extract(b||this._m._featuresToExtract,this._m.inputData,this._m.previousInputData):null},A}(),S={audioContext:null,spn:null,bufferSize:512,sampleRate:44100,melBands:26,chromaBands:12,callback:null,windowingFunction:"hanning",featureExtractors:y,EXTRACTION_STARTED:!1,numberOfMFCCCoefficients:13,numberOfBarkBands:24,_featuresToExtract:[],windowing:o,_errors:{notPow2:new Error("Meyda: Buffer size must be a power of 2, e.g. 64 or 512"),featureUndef:new Error("Meyda: No features defined."),invalidFeatureFmt:new Error("Meyda: Invalid feature format"),invalidInput:new Error("Meyda: Invalid input."),noAC:new Error("Meyda: No AudioContext specified."),noSource:new Error("Meyda: No source node specified.")},createMeydaAnalyzer:function(A){return new _(A,Object.assign({},S))},listAvailableFeatureExtractors:function(){return Object.keys(this.featureExtractors)},extract:function(A,b,L){var C=this;if(!b)throw this._errors.invalidInput;if(typeof b!="object")throw this._errors.invalidInput;if(!A)throw this._errors.featureUndef;if(!s(b.length))throw this._errors.notPow2;this.barkScale!==void 0&&this.barkScale.length==this.bufferSize||(this.barkScale=a(this.bufferSize,this.sampleRate,this.bufferSize)),this.melFilterBank!==void 0&&this.barkScale.length==this.bufferSize&&this.melFilterBank.length==this.melBands||(this.melFilterBank=h(Math.max(this.melBands,this.numberOfMFCCCoefficients),this.sampleRate,this.bufferSize)),this.chromaFilterBank!==void 0&&this.chromaFilterBank.length==this.chromaBands||(this.chromaFilterBank=u(this.chromaBands,this.sampleRate,this.bufferSize)),"buffer"in b&&b.buffer===void 0?this.signal=l(b):this.signal=b;var U=H(b,this.windowingFunction,this.bufferSize);if(this.signal=U.windowedSignal,this.complexSpectrum=U.complexSpectrum,this.ampSpectrum=U.ampSpectrum,L){var O=H(L,this.windowingFunction,this.bufferSize);this.previousSignal=O.windowedSignal,this.previousComplexSpectrum=O.complexSpectrum,this.previousAmpSpectrum=O.ampSpectrum}var te=function(V){return C.featureExtractors[V]({ampSpectrum:C.ampSpectrum,chromaFilterBank:C.chromaFilterBank,complexSpectrum:C.complexSpectrum,signal:C.signal,bufferSize:C.bufferSize,sampleRate:C.sampleRate,barkScale:C.barkScale,melFilterBank:C.melFilterBank,previousSignal:C.previousSignal,previousAmpSpectrum:C.previousAmpSpectrum,previousComplexSpectrum:C.previousComplexSpectrum,numberOfMFCCCoefficients:C.numberOfMFCCCoefficients,numberOfBarkBands:C.numberOfBarkBands})};if(typeof A=="object")return A.reduce(function(V,W){var ne;return Object.assign({},V,((ne={})[W]=te(W),ne))},{});if(typeof A=="string")return te(A);throw this._errors.invalidFeatureFmt}},H=function(A,b,L){var C={};A.buffer===void 0?C.signal=l(A):C.signal=A,C.windowedSignal=o(C.signal,b),C.complexSpectrum=Z(C.windowedSignal),C.ampSpectrum=new Float32Array(L/2);for(var U=0;U<L/2;U++)C.ampSpectrum[U]=Math.sqrt(Math.pow(C.complexSpectrum.real[U],2)+Math.pow(C.complexSpectrum.imag[U],2));return C};return typeof window<"u"&&(window.Meyda=S),S})})(M_);var vP=M_.exports;const yP=$m(vP),nd=(n,e)=>{const t=yP.createMeydaAnalyzer({audioContext:n.context,source:n,bufferSize:512,featureExtractors:["mfcc","rms","spectralCentroid","spectralFlatness","energy"],callback:i=>{const r=xP(i);e(r)}});return t.start(),console.log("Meyda initialized"),t};function xP(n){const{mfcc:e,rms:t,spectralCentroid:i}=n;return{AA:t&&e?Math.min(t*(e[0]||0),1):0,EE:e?Math.min(e[5]||0,1):0,IH:e?Math.min(e[3]||0,1):0,OH:e?Math.min(e[2]||0,1):0,OU:e?Math.min((e[0]+e[5])/2,1):0,W:i&&i>1500?1:0,UW:i&&i>1e3?1:0,TH:i&&i>2e3?1:0,T:i&&i>2500?1:0,SH:i&&i>5e3?1:0,S:i&&i>4e3?1:0,OW:e?Math.min((e[0]+e[5])/2,1):0,M:t&&e?Math.min(t*(e[0]||0),1):0,L:e?Math.min(e[2]||0,1):0,K:i&&i>3e3?1:0,IY:e?Math.min(e[4]||0,1):0,F:i&&i>6e3?1:0,ER:e?Math.min(e[1]||0,1):0,EH:e?Math.min(e[2]||0,1):0,TONGUE_UP_DOWN:e?Math.min(e[6]||0,1):0,TONGUE_IN_OUT:i&&i>1500?1:0,MOUTH_WIDE_NARROW:t&&t>.5?1:0,MOUTH_OPEN:t&&t>.3?1:0}}const MP=({name:n,value:e,min:t=-2,max:i=2,onChange:r})=>{const s=o=>{const a=parseFloat(o.target.value);r(n,a)};return pt.jsxs("div",{children:[pt.jsx("label",{htmlFor:n,children:n}),pt.jsx("input",{type:"range",id:n,name:n,min:t,max:i,step:.01,value:e,onChange:s}),pt.jsx("span",{children:e.toFixed(2)})]})},SP=({controls:n,defaultValues:e={},onChange:t,analyserNode:i})=>{const[r,s]=tt.useState({});tt.useEffect(()=>{if(!i){console.log("No analyser node provided for MorphControls");return}const a={};Object.keys(n).forEach(c=>{a[c]=e[c]??0}),s(a);const l=nd(i,c=>{const h={};for(const u of Object.keys(n)){const d=u.replace("eCTRLv","").toLocaleUpperCase(),f=c[d];At.isDefined(f)&&(h[u]=Math.max(0,f*.2))}s(u=>({...u,...h})),t(h)});return()=>{l.stop()}},[n,e,i]);const o=(a,l)=>{const c={...r,[a]:l};s(c),t(c)};return pt.jsxs("div",{style:{maxHeight:"80vh",overflow:"auto"},children:["CONTROLS",pt.jsx(td,{onClick:()=>{const a={};Object.keys(n).forEach(l=>{a[l]=e[l]??0}),s(a),t(a)},children:"Reset"}),Object.entries(n).map(([a,{min:l=-2,max:c=2}])=>pt.jsx(MP,{name:a,value:r[a]??0,min:l,max:c,onChange:o},a))]})},EP=({name:n,value:e})=>{const t=tt.useRef(null),[i,r]=tt.useState(0),[s,o]=tt.useState(1);return tt.useEffect(()=>{At.isUndefined(e)||(e<i&&r(e),e>s&&o(e))},[e,i,s]),tt.useEffect(()=>{const a=t.current;if(a){const l=a.getContext("2d",{willReadFrequently:!0});if(l){const c=l.getImageData(1,0,a.width-1,a.height);l.putImageData(c,0,0),l.clearRect(a.width-1,0,1,a.height);const h=s-i||1,u=(e-i)/h,d=a.height-u*a.height;l.lineWidth=5,l.beginPath(),l.moveTo(a.width-2,d),l.lineTo(a.width-1,d),l.strokeStyle="green",l.stroke()}}},[e,i,s]),pt.jsxs("div",{children:[pt.jsx("h4",{children:n}),pt.jsx("canvas",{ref:t,width:300,height:100}),pt.jsxs("p",{children:["Min: ",i.toFixed(2)," | Max: ",s.toFixed(2)," | Current:"," ",e.toFixed(2)]})]})},TP=({analyserNode:n})=>{const[e,t]=tt.useState({});return tt.useEffect(()=>{if(!n)return;const i=nd(n,r=>{t(r)});return()=>{i.stop()}},[n]),pt.jsx("div",{style:{maxHeight:"80vh",overflow:"auto"},children:Object.entries(e).map(([i,r])=>pt.jsx(EP,{name:i,value:r},i))})},bP=tt.memo(({path:n,showControls:e,showPhonemes:t,analyserNode:i,canvasStyle:r,canvasWidth:s,canvasHeight:o,cameraOptions:a,...l})=>{const c=tt.useRef({humanoid:void 0}),[h,u]=tt.useState(!1);return tt.useEffect(()=>{if(!h){console.log("refusing to start audio analysis before model is loaded");return}if(!i){console.log("No analyser node provided for MorphControls");return}if(e)return;if(!c.current.humanoid){console.log("No humanoid found");return}const d=c.current.humanoid.model.getMorphs(),f=nd(i,m=>{if(!c.current.humanoid)return;const v={};for(const p of d){const g=p.replace("eCTRLv","").toLocaleUpperCase(),T=m[g];At.isDefined(T)&&(v[p]=Math.max(0,T*.2))}c.current.humanoid.model.morph(v)});return()=>{f.stop()}},[i,c.current,e,h]),pt.jsxs(Xh,{direction:"row",...l,children:[c.current.humanoid&&e&&pt.jsxs(Xh,{children:[pt.jsx(td,{onClick:()=>{var d;(d=c.current.humanoid)==null||d.toggleAudio()},children:"Toggle Audio"}),pt.jsx(SP,{analyserNode:i,controls:Object.fromEntries(c.current.humanoid.model.getMorphs().map(d=>[d,{min:-2,max:2}])),defaultValues:{},onChange:d=>{var f;(f=c.current.humanoid)==null||f.model.morph(d)}})]}),pt.jsx(At.Canvas,{style:r,width:s,height:o,painter:async d=>{const f=await ph.fromGltf({canvas:d,path:n,cameraOptions:a});console.log("humanoid",f),c.current.humanoid=f,f.model.fix(v=>{if(v.material){if(v.name.toLocaleLowerCase().includes("hair.shape_primitive0")){console.log("hair",v);const p=v.material;p.metallic=0;const g=p.albedoTexture;g&&(g.hasAlpha=!1,g.level=1.5)}v.name.toLocaleLowerCase().includes("hair.shape_primitive1")&&(console.log("hair",v),v.visibility=0)}return v}),console.log("humanoid ref",c.current.humanoid);const m=At.Animates.create({ticker:v=>{f.update({tick:v,analyserNode:i})}});return u(!0),()=>{console.log("disposing scene"),f.destroy(),m.destroy()}}}),t&&pt.jsx(TP,{analyserNode:i})]})}),AP=async n=>{var l;const e=new AudioContext;e.state==="suspended"&&(await e.resume(),console.log("Audio context resumed after user gesture."));const i=(await navigator.mediaDevices.enumerateDevices()).filter(c=>c.kind==="audioinput");console.log("Available microphones:",i);const r=(l=i[0])==null?void 0:l.deviceId;if(!r)throw new Error("No microphone devices available");const s=await navigator.mediaDevices.getUserMedia({audio:{deviceId:{exact:r}}});console.log("Audio stream captured from microphone:",s);const o=e.createMediaStreamSource(s),a=e.createAnalyser();return a.fftSize=2048,o.connect(a),{audioCtx:e,stream:s,analyserNode:a,mics:i}},wP=tt.memo(()=>pt.jsx(At.Canvas,{style:{maxHeight:"50vh"},painter:async n=>{const{audioCtx:e,stream:t,analyserNode:i}=await AP(),{destroy:r,vrm:s}=await ph.fromVrm({analyserNode:i,canvas:n,vrmUrl:"./fem.vrm",idleAnimationUrl:"./Samba Dancing.fbx"});return console.log("vrm",s),()=>{console.log("disposing scene"),r()}}}));an.Avatar3dGltf=bP,an.Avatar3dVrm=wP,an.Humanoids=ph,Object.defineProperty(an,Symbol.toStringTag,{value:"Module"})});
