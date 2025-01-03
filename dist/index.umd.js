(function(sn,st){typeof exports=="object"&&typeof module<"u"?st(exports,require("@mjtdev/engine"),require("react")):typeof define=="function"&&define.amd?define(["exports","@mjtdev/engine","react"],st):(sn=typeof globalThis<"u"?globalThis:sn||self,st(sn.Avatar3d={},sn.engine,sn.React))})(this,function(sn,st,Ze){"use strict";var RP=Object.defineProperty;var CP=(sn,st,Ze)=>st in sn?RP(sn,st,{enumerable:!0,configurable:!0,writable:!0,value:Ze}):sn[st]=Ze;var jt=(sn,st,Ze)=>CP(sn,typeof st!="symbol"?st+"":st,Ze);function P_(n){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(n){for(const t in n)if(t!=="default"){const i=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:()=>n[t]})}}return e.default=n,Object.freeze(e)}const Ve=P_(Ze);var sd=Symbol.for("immer-nothing"),od=Symbol.for("immer-draftable"),_n=Symbol.for("immer-state"),I_=process.env.NODE_ENV!=="production"?[function(n){return`The plugin for '${n}' has not been loaded into Immer. To enable the plugin, import and call \`enable${n}()\` when initializing your application.`},function(n){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${n}'`},"This object has been frozen and should not be mutated",function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(n){return`'current' expects a draft, got: ${n}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(n){return`'original' expects a draft, got: ${n}`}]:[];function pn(n,...e){if(process.env.NODE_ENV!=="production"){const t=I_[n],i=typeof t=="function"?t.apply(null,e):t;throw new Error(`[Immer] ${i}`)}throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var br=Object.getPrototypeOf;function Ar(n){return!!n&&!!n[_n]}function Zi(n){var e;return n?ad(n)||Array.isArray(n)||!!n[od]||!!((e=n.constructor)!=null&&e[od])||Bo(n)||ko(n):!1}var L_=Object.prototype.constructor.toString();function ad(n){if(!n||typeof n!="object")return!1;const e=br(n);if(e===null)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===L_}function Uo(n,e){Fo(n)===0?Reflect.ownKeys(n).forEach(t=>{e(t,n[t],n)}):n.forEach((t,i)=>e(i,t,n))}function Fo(n){const e=n[_n];return e?e.type_:Array.isArray(n)?1:Bo(n)?2:ko(n)?3:0}function Nl(n,e){return Fo(n)===2?n.has(e):Object.prototype.hasOwnProperty.call(n,e)}function ld(n,e,t){const i=Fo(n);i===2?n.set(e,t):i===3?n.add(t):n[e]=t}function D_(n,e){return n===e?n!==0||1/n===1/e:n!==n&&e!==e}function Bo(n){return n instanceof Map}function ko(n){return n instanceof Set}function Qi(n){return n.copy_||n.base_}function Ol(n,e){if(Bo(n))return new Map(n);if(ko(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);const t=ad(n);if(e===!0||e==="class_only"&&!t){const i=Object.getOwnPropertyDescriptors(n);delete i[_n];let r=Reflect.ownKeys(i);for(let s=0;s<r.length;s++){const o=r[s],a=i[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(i[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:n[o]})}return Object.create(br(n),i)}else{const i=br(n);if(i!==null&&t)return{...n};const r=Object.create(i);return Object.assign(r,n)}}function Ul(n,e=!1){return Vo(n)||Ar(n)||!Zi(n)||(Fo(n)>1&&(n.set=n.add=n.clear=n.delete=N_),Object.freeze(n),e&&Object.entries(n).forEach(([t,i])=>Ul(i,!0))),n}function N_(){pn(2)}function Vo(n){return Object.isFrozen(n)}var O_={};function Ji(n){const e=O_[n];return e||pn(0,n),e}var Ds;function cd(){return Ds}function U_(n,e){return{drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ud(n,e){e&&(Ji("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=e)}function Fl(n){Bl(n),n.drafts_.forEach(F_),n.drafts_=null}function Bl(n){n===Ds&&(Ds=n.parent_)}function hd(n){return Ds=U_(Ds,n)}function F_(n){const e=n[_n];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function dd(n,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return n!==void 0&&n!==t?(t[_n].modified_&&(Fl(e),pn(4)),Zi(n)&&(n=zo(e,n),e.parent_||Ho(e,n)),e.patches_&&Ji("Patches").generateReplacementPatches_(t[_n].base_,n,e.patches_,e.inversePatches_)):n=zo(e,t,[]),Fl(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),n!==sd?n:void 0}function zo(n,e,t){if(Vo(e))return e;const i=e[_n];if(!i)return Uo(e,(r,s)=>fd(n,i,e,r,s,t)),e;if(i.scope_!==n)return e;if(!i.modified_)return Ho(n,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const r=i.copy_;let s=r,o=!1;i.type_===3&&(s=new Set(r),r.clear(),o=!0),Uo(s,(a,l)=>fd(n,i,r,a,l,t,o)),Ho(n,r,!1),t&&n.patches_&&Ji("Patches").generatePatches_(i,t,n.patches_,n.inversePatches_)}return i.copy_}function fd(n,e,t,i,r,s,o){if(process.env.NODE_ENV!=="production"&&r===t&&pn(5),Ar(r)){const a=s&&e&&e.type_!==3&&!Nl(e.assigned_,i)?s.concat(i):void 0,l=zo(n,r,a);if(ld(t,i,l),Ar(l))n.canAutoFreeze_=!1;else return}else o&&t.add(r);if(Zi(r)&&!Vo(r)){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1)return;zo(n,r),(!e||!e.scope_.parent_)&&typeof i!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,i)&&Ho(n,r)}}function Ho(n,e,t=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&Ul(e,t)}function B_(n,e){const t=Array.isArray(n),i={type_:t?1:0,scope_:e?e.scope_:cd(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=i,s=kl;t&&(r=[i],s=Ns);const{revoke:o,proxy:a}=Proxy.revocable(r,s);return i.draft_=a,i.revoke_=o,a}var kl={get(n,e){if(e===_n)return n;const t=Qi(n);if(!Nl(t,e))return k_(n,t,e);const i=t[e];return n.finalized_||!Zi(i)?i:i===Vl(n.base_,e)?(Hl(n),n.copy_[e]=Gl(i,n)):i},has(n,e){return e in Qi(n)},ownKeys(n){return Reflect.ownKeys(Qi(n))},set(n,e,t){const i=pd(Qi(n),e);if(i!=null&&i.set)return i.set.call(n.draft_,t),!0;if(!n.modified_){const r=Vl(Qi(n),e),s=r==null?void 0:r[_n];if(s&&s.base_===t)return n.copy_[e]=t,n.assigned_[e]=!1,!0;if(D_(t,r)&&(t!==void 0||Nl(n.base_,e)))return!0;Hl(n),zl(n)}return n.copy_[e]===t&&(t!==void 0||e in n.copy_)||Number.isNaN(t)&&Number.isNaN(n.copy_[e])||(n.copy_[e]=t,n.assigned_[e]=!0),!0},deleteProperty(n,e){return Vl(n.base_,e)!==void 0||e in n.base_?(n.assigned_[e]=!1,Hl(n),zl(n)):delete n.assigned_[e],n.copy_&&delete n.copy_[e],!0},getOwnPropertyDescriptor(n,e){const t=Qi(n),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&{writable:!0,configurable:n.type_!==1||e!=="length",enumerable:i.enumerable,value:t[e]}},defineProperty(){pn(11)},getPrototypeOf(n){return br(n.base_)},setPrototypeOf(){pn(12)}},Ns={};Uo(kl,(n,e)=>{Ns[n]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ns.deleteProperty=function(n,e){return process.env.NODE_ENV!=="production"&&isNaN(parseInt(e))&&pn(13),Ns.set.call(this,n,e,void 0)},Ns.set=function(n,e,t){return process.env.NODE_ENV!=="production"&&e!=="length"&&isNaN(parseInt(e))&&pn(14),kl.set.call(this,n[0],e,t,n[0])};function Vl(n,e){const t=n[_n];return(t?Qi(t):n)[e]}function k_(n,e,t){var r;const i=pd(e,t);return i?"value"in i?i.value:(r=i.get)==null?void 0:r.call(n.draft_):void 0}function pd(n,e){if(!(e in n))return;let t=br(n);for(;t;){const i=Object.getOwnPropertyDescriptor(t,e);if(i)return i;t=br(t)}}function zl(n){n.modified_||(n.modified_=!0,n.parent_&&zl(n.parent_))}function Hl(n){n.copy_||(n.copy_=Ol(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var V_=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,i)=>{if(typeof e=="function"&&typeof t!="function"){const s=t;t=e;const o=this;return function(l=s,...c){return o.produce(l,h=>t.call(this,h,...c))}}typeof t!="function"&&pn(6),i!==void 0&&typeof i!="function"&&pn(7);let r;if(Zi(e)){const s=hd(this),o=Gl(e,void 0);let a=!0;try{r=t(o),a=!1}finally{a?Fl(s):Bl(s)}return ud(s,i),dd(r,s)}else if(!e||typeof e!="object"){if(r=t(e),r===void 0&&(r=e),r===sd&&(r=void 0),this.autoFreeze_&&Ul(r,!0),i){const s=[],o=[];Ji("Patches").generateReplacementPatches_(e,r,s,o),i(s,o)}return r}else pn(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let i,r;return[this.produce(e,t,(o,a)=>{i=o,r=a}),i,r]},typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof(n==null?void 0:n.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy)}createDraft(n){Zi(n)||pn(8),Ar(n)&&(n=z_(n));const e=hd(this),t=Gl(n,void 0);return t[_n].isManual_=!0,Bl(e),t}finishDraft(n,e){const t=n&&n[_n];(!t||!t.isManual_)&&pn(9);const{scope_:i}=t;return ud(i,e),dd(void 0,i)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}applyPatches(n,e){let t;for(t=e.length-1;t>=0;t--){const r=e[t];if(r.path.length===0&&r.op==="replace"){n=r.value;break}}t>-1&&(e=e.slice(t+1));const i=Ji("Patches").applyPatches_;return Ar(n)?i(n,e):this.produce(n,r=>i(r,e))}};function Gl(n,e){const t=Bo(n)?Ji("MapSet").proxyMap_(n,e):ko(n)?Ji("MapSet").proxySet_(n,e):B_(n,e);return(e?e.scope_:cd()).drafts_.push(t),t}function z_(n){return Ar(n)||pn(10,n),md(n)}function md(n){if(!Zi(n)||Vo(n))return n;const e=n[_n];let t;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=Ol(n,e.scope_.immer_.useStrictShallowCopy_)}else t=Ol(n,!0);return Uo(t,(i,r)=>{ld(t,i,md(r))}),e&&(e.finalized_=!1),t}var vn=new V_,H_=vn.produce;vn.produceWithPatches.bind(vn),vn.setAutoFreeze.bind(vn),vn.setUseStrictShallowCopy.bind(vn),vn.applyPatches.bind(vn),vn.createDraft.bind(vn),vn.finishDraft.bind(vn);let Bn=0,Os=.05,gd=Math.random()*8+4,Ii=0,Wl=Math.random()*.05,Xl=Math.random()*.05;function G_(n,e){if(Bn+=e,Ii===0)Bn>=gd&&(Ii=1,Bn=0);else if(Ii===1){const t=(Bn-Wl)/Os,i=(Bn-Xl)/Os,r=t>=1,s=i>=1;r&&s?(Ii=2,Bn=0,n.leftClosed(1),n.rightClosed(1)):(n.leftClosed(Math.min(t,1)),n.rightClosed(Math.min(i,1)))}else if(Ii===2)Bn>=.05&&(Ii=3,Bn=0);else if(Ii===3){const t=1-(Bn-Wl)/Os,i=1-(Bn-Xl)/Os,r=t<=0,s=i<=0;r&&s?(Ii=0,Bn=0,n.leftClosed(0),n.rightClosed(0),gd=Math.random()*8+4,Os=Math.random()*.05+.05,Wl=Math.random()*.05,Xl=Math.random()*.05):(n.leftClosed(Math.max(t,0)),n.rightClosed(Math.max(i,0)))}}const W_=n=>{n&&n.fix(e=>{if(e.material){if(e.name.toLocaleLowerCase().includes("hair.shape_primitive0")){console.log("hair",e);const t=e.material;t.metallic=0;const i=t.albedoTexture;i&&(i.hasAlpha=!1,i.level=1.5)}e.name.toLocaleLowerCase().includes("hair.shape_primitive1")&&(console.log("hair",e),e.visibility=0)}return e})},X_=async({path:n,canvas:e,cameraOptions:t={}})=>{const i=st.Babs.createEngine({canvas:e,premultipliedAlpha:!1,antialias:!0}),r=st.Scenes.createScene(i);r.clearColor=st.Babs.c4(st.Colors.from("black").alpha(0).toString());const s=st.Cameras.getArcRotateCamera(r,"Camera",{alpha:Math.PI/2,beta:Math.PI/2,radius:.5,target:[0,1.67,0],...t});s.minZ=.001,s.inertia=0,s.attachControl(e,!0),st.Lights.getHemisphericLight(r,"light1",{direction:[10,1,1],intensity:.5}),st.Lights.getPointLight(r,"light2",{position:[1,1,2],intensity:15}),e.onkeyup=c=>{c.ctrlKey&&c.keyCode===73&&st.Scenes.toggleInspector(r)};const o=await st.Models.builder({path:n,scene:r});W_(o);let a={};const l={leftClosed:c=>{o.morph({EyesClosedL:c})},rightClosed:c=>{o.morph({EyesClosedR:c})},updateState:c=>{a=H_(a,c)},getState:()=>a};return{destroy:()=>{r.dispose(),i.dispose()},gltfModel:o,updateTick:({tick:c})=>{r.render(),G_(l,(c==null?void 0:c.deltaMs)/1e3)},updatePhonemeLevels:({analyserNode:c,phonemeLevels:h})=>{$_({model:o,levels:h})},setAnimation:async c=>{},setExpression:(c,h=.5)=>{},getExpressions:()=>[]}},$_=({model:n,levels:e})=>{const t={},i=n.getMorphs();for(const r of i){const s=r.replace("eCTRLv","").toLocaleUpperCase(),o=e[s];st.isDefined(o)&&(t[r]=Math.max(0,o*.2))}n.morph(t)};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const er="169",j_=0,_d=1,Y_=2,vd=1,q_=2,hi=3,di=0,on=1,Rn=2,Li=0,wr=1,yd=2,xd=3,Md=4,K_=5,tr=100,Z_=101,Q_=102,J_=103,ev=104,tv=200,nv=201,iv=202,rv=203,$l=204,jl=205,sv=206,ov=207,av=208,lv=209,cv=210,uv=211,hv=212,dv=213,fv=214,Yl=0,ql=1,Kl=2,Rr=3,Zl=4,Ql=5,Jl=6,ec=7,Go=0,pv=1,mv=2,Di=0,gv=1,_v=2,vv=3,yv=4,xv=5,Mv=6,Sv=7,Sd="attached",Ev="detached",Ed=300,Cr=301,Pr=302,Wo=303,tc=304,Xo=306,Ni=1e3,Zn=1001,$o=1002,an=1003,Td=1004,Us=1005,yn=1006,jo=1007,fi=1008,pi=1009,bd=1010,Ad=1011,Fs=1012,nc=1013,nr=1014,kn=1015,Bs=1016,ic=1017,rc=1018,Ir=1020,wd=35902,Rd=1021,Cd=1022,Cn=1023,Pd=1024,Id=1025,Lr=1026,Dr=1027,sc=1028,oc=1029,Ld=1030,ac=1031,lc=1033,Yo=33776,qo=33777,Ko=33778,Zo=33779,cc=35840,uc=35841,hc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37808,_c=37809,vc=37810,yc=37811,xc=37812,Mc=37813,Sc=37814,Ec=37815,Tc=37816,bc=37817,Ac=37818,wc=37819,Rc=37820,Cc=37821,Qo=36492,Pc=36494,Ic=36495,Dd=36283,Lc=36284,Dc=36285,Nc=36286,Tv=2200,bv=2201,Av=2202,ks=2300,Vs=2301,Oc=2302,Nr=2400,Or=2401,Jo=2402,Uc=2500,wv=2501,Rv=0,Nd=1,Fc=2,Cv=3200,Pv=3201,zs=0,Iv=1,Oi="",St="srgb",Yt="srgb-linear",Bc="display-p3",ea="display-p3-linear",ta="linear",At="srgb",na="rec709",ia="p3",Ur=7680,Od=519,Lv=512,Dv=513,Nv=514,Ud=515,Ov=516,Uv=517,Fv=518,Bv=519,kc=35044,kv=35048,Fd="300 es",mi=2e3,ra=2001;class ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bd=1234567;const Hs=Math.PI/180,Fr=180/Math.PI;function Vn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function Vc(n,e){return(n%e+e)%e}function Vv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function zv(n,e,t){return n!==e?(t-n)/(e-n):0}function Gs(n,e,t){return(1-t)*n+t*e}function Hv(n,e,t,i){return Gs(n,e,1-Math.exp(-t*i))}function Gv(n,e=1){return e-Math.abs(Vc(n,e*2)-e)}function Wv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Xv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $v(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jv(n,e){return n+Math.random()*(e-n)}function Yv(n){return n*(.5-Math.random())}function qv(n){n!==void 0&&(Bd=n);let e=Bd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kv(n){return n*Hs}function Zv(n){return n*Fr}function Qv(n){return(n&n-1)===0&&n!==0}function Jv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function e0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function t0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const tt={DEG2RAD:Hs,RAD2DEG:Fr,generateUUID:Vn,clamp:Xt,euclideanModulo:Vc,mapLinear:Vv,inverseLerp:zv,lerp:Gs,damp:Hv,pingpong:Gv,smoothstep:Wv,smootherstep:Xv,randInt:$v,randFloat:jv,randFloatSpread:Yv,seededRandom:qv,degToRad:Kv,radToDeg:Zv,isPowerOfTwo:Qv,ceilPowerOfTwo:Jv,floorPowerOfTwo:e0,setQuaternionFromProperEuler:t0,normalize:yt,denormalize:zn};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],v=r[0],p=r[3],g=r[6],b=r[1],M=r[4],S=r[7],T=r[2],P=r[5],C=r[8];return s[0]=o*v+a*b+l*T,s[3]=o*p+a*M+l*P,s[6]=o*g+a*S+l*C,s[1]=c*v+h*b+u*T,s[4]=c*p+h*M+u*P,s[7]=c*g+h*S+u*C,s[2]=d*v+f*b+m*T,s[5]=d*p+f*M+m*P,s[8]=d*g+f*S+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=t*u+i*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(r*c-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zc.makeScale(e,t)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zc=new ke;function kd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function n0(){const n=Ws("canvas");return n.style.display="block",n}const Vd={};function sa(n){n in Vd||(Vd[n]=!0,console.warn(n))}function i0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function r0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function s0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zd=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hd=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xs={[Yt]:{transfer:ta,primaries:na,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[St]:{transfer:At,primaries:na,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ea]:{transfer:ta,primaries:ia,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Hd),fromReference:n=>n.applyMatrix3(zd)},[Bc]:{transfer:At,primaries:ia,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Hd),fromReference:n=>n.applyMatrix3(zd).convertLinearToSRGB()}},o0=new Set([Yt,ea]),Ye={enabled:!0,_workingColorSpace:Yt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!o0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Xs[e].toReference,r=Xs[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Xs[n].primaries},getTransfer:function(n){return n===Oi?ta:Xs[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Xs[e].luminanceCoefficients)}};function Br(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let kr;class a0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kr===void 0&&(kr=Ws("canvas")),kr.width=e.width,kr.height=e.height;const i=kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=kr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Br(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Br(t[i]/255)*255):t[i]=Br(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let l0=0;class Gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gc(r[o].image)):s.push(Gc(r[o]))}else s=Gc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Gc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?a0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c0=0;class Ht extends ir{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=Zn,r=Zn,s=yn,o=fi,a=Cn,l=pi,c=Ht.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Vn(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null,Ht.DEFAULT_MAPPING=Ed,Ht.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(f+1)/2,T=(g+1)/2,P=(h+d)/4,C=(u+v)/4,B=(m+p)/4;return M>S&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=P/i,s=C/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=B/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=B/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-m)*(p-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(u-v)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class u0 extends ir{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ht(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends u0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Wd extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h0 extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ie{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=s[o+0],f=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==m){let p=1-a;const g=l*d+c*f+h*m+u*v,b=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const T=Math.sqrt(M),P=Math.atan2(T,g*b);p=Math.sin(p*P)/T,a=Math.sin(a*P)/T}const S=a*b;if(l=l*p+d*S,c=c*p+f*S,h=h*p+m*S,u=u*p+v*S,p===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),d=l(i/2),f=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new N,Xd=new Ie;class gi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oa.copy(i.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),aa.subVectors(this.max,$s),Vr.subVectors(e.a,$s),zr.subVectors(e.b,$s),Hr.subVectors(e.c,$s),Ui.subVectors(zr,Vr),Fi.subVectors(Hr,zr),sr.subVectors(Vr,Hr);let t=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-sr.z,sr.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,sr.z,0,-sr.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-sr.y,sr.x,0];return!Xc(t,Vr,zr,Hr,aa)||(t=[1,0,0,0,1,0,0,0,1],!Xc(t,Vr,zr,Hr,aa))?!1:(la.crossVectors(Ui,Fi),t=[la.x,la.y,la.z],Xc(t,Vr,zr,Hr,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new N,new N,new N,new N,new N,new N,new N,new N],Hn=new N,oa=new gi,Vr=new N,zr=new N,Hr=new N,Ui=new N,Fi=new N,sr=new N,$s=new N,aa=new N,la=new N,or=new N;function Xc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){or.fromArray(n,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=t.dot(or),h=i.dot(or);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const d0=new gi,js=new N,$c=new N;class Qn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):d0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add($c)),this.expandByPoint(js.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new N,jc=new N,ca=new N,Bi=new N,Yc=new N,ua=new N,qc=new N;class ha{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jc.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(jc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ca),a=Bi.dot(this.direction),l=-Bi.dot(ca),c=Bi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(jc).addScaledVector(ca,d),f}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,r,s){Yc.subVectors(t,e),ua.subVectors(i,e),qc.crossVectors(Yc,ua);let o=this.direction.dot(qc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(ua.crossVectors(Bi,ua));if(l<0)return null;const c=a*this.direction.dot(Yc.cross(Bi));if(c<0||l+c>o)return null;const h=-a*Bi.dot(qc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(e,t,i,r,s,o,a,l,c,h,u,d,f,m,v,p){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,u,d,f,m,v,p)}set(e,t,i,r,s,o,a,l,c,h,u,d,f,m,v,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d+v*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,p0)}lookAt(e,t,i){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),ki.crossVectors(i,xn),ki.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),ki.crossVectors(i,xn)),ki.normalize(),da.crossVectors(xn,ki),r[0]=ki.x,r[4]=da.x,r[8]=xn.x,r[1]=ki.y,r[5]=da.y,r[9]=xn.y,r[2]=ki.z,r[6]=da.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],v=i[6],p=i[10],g=i[14],b=i[3],M=i[7],S=i[11],T=i[15],P=r[0],C=r[4],B=r[8],K=r[12],_=r[1],E=r[5],z=r[9],w=r[13],A=r[2],D=r[6],R=r[10],U=r[14],F=r[3],Q=r[7],k=r[11],G=r[15];return s[0]=o*P+a*_+l*A+c*F,s[4]=o*C+a*E+l*D+c*Q,s[8]=o*B+a*z+l*R+c*k,s[12]=o*K+a*w+l*U+c*G,s[1]=h*P+u*_+d*A+f*F,s[5]=h*C+u*E+d*D+f*Q,s[9]=h*B+u*z+d*R+f*k,s[13]=h*K+u*w+d*U+f*G,s[2]=m*P+v*_+p*A+g*F,s[6]=m*C+v*E+p*D+g*Q,s[10]=m*B+v*z+p*R+g*k,s[14]=m*K+v*w+p*U+g*G,s[3]=b*P+M*_+S*A+T*F,s[7]=b*C+M*E+S*D+T*Q,s[11]=b*B+M*z+S*R+T*k,s[15]=b*K+M*w+S*U+T*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],p=e[11],g=e[15];return m*(+s*l*u-r*c*u-s*a*d+i*c*d+r*a*f-i*l*f)+v*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*h-s*l*h)+p*(+t*c*u-t*a*f-s*o*u+i*o*f+s*a*h-i*c*h)+g*(-r*a*h-t*l*u+t*a*d+r*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],p=e[14],g=e[15],b=u*p*c-v*d*c+v*l*f-a*p*f-u*l*g+a*d*g,M=m*d*c-h*p*c-m*l*f+o*p*f+h*l*g-o*d*g,S=h*v*c-m*u*c+m*a*f-o*v*f-h*a*g+o*u*g,T=m*u*l-h*v*l-m*a*d+o*v*d+h*a*p-o*u*p,P=t*b+i*M+r*S+s*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=b*C,e[1]=(v*d*s-u*p*s-v*r*f+i*p*f+u*r*g-i*d*g)*C,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*g+i*l*g)*C,e[3]=(u*l*s-a*d*s-u*r*c+i*d*c+a*r*f-i*l*f)*C,e[4]=M*C,e[5]=(h*p*s-m*d*s+m*r*f-t*p*f-h*r*g+t*d*g)*C,e[6]=(m*l*s-o*p*s-m*r*c+t*p*c+o*r*g-t*l*g)*C,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*f+t*l*f)*C,e[8]=S*C,e[9]=(m*u*s-h*v*s-m*i*f+t*v*f+h*i*g-t*u*g)*C,e[10]=(o*v*s-m*a*s+m*i*c-t*v*c-o*i*g+t*a*g)*C,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*f-t*a*f)*C,e[12]=T*C,e[13]=(h*v*r-m*u*r+m*i*d-t*v*d-h*i*p+t*u*p)*C,e[14]=(m*a*r-o*v*r-m*i*l+t*v*l+o*i*p-t*a*p)*C,e[15]=(o*u*r-h*a*r+h*i*l-t*u*l-o*i*d+t*a*d)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,v=o*h,p=o*u,g=a*u,b=l*c,M=l*h,S=l*u,T=i.x,P=i.y,C=i.z;return r[0]=(1-(v+g))*T,r[1]=(f+S)*T,r[2]=(m-M)*T,r[3]=0,r[4]=(f-S)*P,r[5]=(1-(d+g))*P,r[6]=(p+b)*P,r[7]=0,r[8]=(m+M)*C,r[9]=(p-b)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const o=Gr.set(r[4],r[5],r[6]).length(),a=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,h=1/o,u=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=mi){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r);let f,m;if(a===mi)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===ra)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=mi){const l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(o-s),d=(t+e)*c,f=(i+r)*h;let m,v;if(a===mi)m=(o+s)*u,v=-2*u;else if(a===ra)m=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gr=new N,Gn=new Ee,f0=new N(0,0,0),p0=new N(1,1,1),ki=new N,da=new N,xn=new N,$d=new Ee,jd=new Ie;class Lt{constructor(e=0,t=0,i=0,r=Lt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $d.makeRotationFromQuaternion(e),this.setFromRotationMatrix($d,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jd.setFromEuler(this),this.setFromQuaternion(jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lt.DEFAULT_ORDER="XYZ";class Yd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m0=0;const qd=new N,Wr=new Ie,yi=new Ee,fa=new N,Ys=new N,g0=new N,_0=new Ie,Kd=new N(1,0,0),Zd=new N(0,1,0),Qd=new N(0,0,1),Jd={type:"added"},v0={type:"removed"},Xr={type:"childadded",child:null},Kc={type:"childremoved",child:null};class at extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new N,t=new Lt,i=new Ie,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new ke}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(Zd,e)}rotateZ(e){return this.rotateOnAxis(Qd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(Zd,e)}translateZ(e){return this.translateOnAxis(Qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fa.copy(e):fa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Ys,fa,this.up):yi.lookAt(fa,Ys,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(yi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jd),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(v0),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jd),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,g0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,_0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}at.DEFAULT_UP=new N(0,1,0),at.DEFAULT_MATRIX_AUTO_UPDATE=!0,at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new N,xi=new N,Zc=new N,Mi=new N,$r=new N,jr=new N,ef=new N,Qc=new N,Jc=new N,eu=new N,tu=new nt,nu=new nt,iu=new nt;class Xn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),xi.subVectors(i,t),Zc.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(xi),l=Wn.dot(Zc),c=xi.dot(xi),h=xi.dot(Zc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return tu.setScalar(0),nu.setScalar(0),iu.setScalar(0),tu.fromBufferAttribute(e,t),nu.fromBufferAttribute(e,i),iu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(tu,s.x),o.addScaledVector(nu,s.y),o.addScaledVector(iu,s.z),o}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),xi.subVectors(e,t),Wn.cross(xi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Wn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$r.subVectors(r,i),jr.subVectors(s,i),Qc.subVectors(e,i);const l=$r.dot(Qc),c=jr.dot(Qc);if(l<=0&&c<=0)return t.copy(i);Jc.subVectors(e,r);const h=$r.dot(Jc),u=jr.dot(Jc);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector($r,o);eu.subVectors(e,s);const f=$r.dot(eu),m=jr.dot(eu);if(m>=0&&f<=m)return t.copy(s);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(jr,a);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return ef.subVectors(s,r),a=(u-h)/(u-h+(f-m)),t.copy(r).addScaledVector(ef,a);const g=1/(p+v+d);return o=v*g,a=d*g,t.copy(i).addScaledVector($r,o).addScaledVector(jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function ru(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class we{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=Vc(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ru(o,s,e+1/3),this.g=ru(o,s,e),this.b=ru(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=St){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const i=tf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}copyLinearToSRGB(e){return this.r=Hc(e.r),this.g=Hc(e.g),this.b=Hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Ye.fromWorkingColorSpace(Jt.copy(this),e),Math.round(Xt(Jt.r*255,0,255))*65536+Math.round(Xt(Jt.g*255,0,255))*256+Math.round(Xt(Jt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Jt.copy(this),t);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=St){Ye.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,r=Jt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(pa);const i=Gs(Vi.h,pa.h,t),r=Gs(Vi.s,pa.s,t),s=Gs(Vi.l,pa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new we;we.NAMES=tf;let y0=0;class Mn extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=wr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=jl,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$l&&(i.blendSrc=this.blendSrc),this.blendDst!==jl&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Od&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Si extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new N,ma=new $e;class lt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kc,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kc&&(e.usage=this.usage),e}}class su extends lt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nf extends lt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qt extends lt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let x0=0;const Pn=new Ee,ou=new at,Yr=new N,Sn=new gi,qs=new gi,$t=new N;class Dt extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kd(e)?nf:su)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return ou.lookAt(e),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qs.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Sn.min,qs.min),Sn.expandByPoint($t),$t.addVectors(Sn.max,qs.max),Sn.expandByPoint($t)):(Sn.expandByPoint(qs.min),Sn.expandByPoint(qs.max))}Sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$t.fromBufferAttribute(a,c),l&&(Yr.fromBufferAttribute(e,c),$t.add(Yr)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new N,l[B]=new N;const c=new N,h=new N,u=new N,d=new $e,f=new $e,m=new $e,v=new N,p=new N;function g(B,K,_){c.fromBufferAttribute(i,B),h.fromBufferAttribute(i,K),u.fromBufferAttribute(i,_),d.fromBufferAttribute(s,B),f.fromBufferAttribute(s,K),m.fromBufferAttribute(s,_),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const E=1/(f.x*m.y-m.x*f.y);isFinite(E)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(E),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(E),a[B].add(v),a[K].add(v),a[_].add(v),l[B].add(p),l[K].add(p),l[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let B=0,K=b.length;B<K;++B){const _=b[B],E=_.start,z=_.count;for(let w=E,A=E+z;w<A;w+=3)g(e.getX(w+0),e.getX(w+1),e.getX(w+2))}const M=new N,S=new N,T=new N,P=new N;function C(B){T.fromBufferAttribute(r,B),P.copy(T);const K=a[B];M.copy(K),M.sub(T.multiplyScalar(T.dot(K))).normalize(),S.crossVectors(P,K);const E=S.dot(l[B])<0?-1:1;o.setXYZW(B,M.x,M.y,M.z,E)}for(let B=0,K=b.length;B<K;++B){const _=b[B],E=_.start,z=_.count;for(let w=E,A=E+z;w<A;w+=3)C(e.getX(w+0)),C(e.getX(w+1)),C(e.getX(w+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new lt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rf=new Ee,ar=new ha,ga=new Qn,sf=new N,_a=new N,va=new N,ya=new N,au=new N,xa=new N,of=new N,Ma=new N;class en extends at{constructor(e=new Dt,t=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){xa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(au.fromBufferAttribute(u,e),o?xa.addScaledVector(au,h):xa.addScaledVector(au.sub(t),h))}t.add(xa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(ga.containsPoint(ar.origin)===!1&&(ar.intersectSphere(ga,sf)===null||ar.origin.distanceToSquared(sf)>(e.far-e.near)**2))&&(rf.copy(s).invert(),ar.copy(e.ray).applyMatrix4(rf),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const p=d[m],g=o[p.materialIndex],b=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=b,T=M;S<T;S+=3){const P=a.getX(S),C=a.getX(S+1),B=a.getX(S+2);r=Sa(this,g,e,i,c,h,u,P,C,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const b=a.getX(p),M=a.getX(p+1),S=a.getX(p+2);r=Sa(this,o,e,i,c,h,u,b,M,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const p=d[m],g=o[p.materialIndex],b=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=b,T=M;S<T;S+=3){const P=S,C=S+1,B=S+2;r=Sa(this,g,e,i,c,h,u,P,C,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const b=p,M=p+1,S=p+2;r=Sa(this,o,e,i,c,h,u,b,M,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function M0(n,e,t,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===di,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ma);return c<t.near||c>t.far?null:{distance:c,point:Ma.clone(),object:n}}function Sa(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,_a),n.getVertexPosition(l,va),n.getVertexPosition(c,ya);const h=M0(n,e,t,i,_a,va,ya,of);if(h){const u=new N;Xn.getBarycoord(of,_a,va,ya,u),r&&(h.uv=Xn.getInterpolatedAttribute(r,a,l,c,u,new $e)),s&&(h.uv1=Xn.getInterpolatedAttribute(s,a,l,c,u,new $e)),o&&(h.normal=Xn.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Xn.getNormal(_a,va,ya,d.normal),h.face=d,h.barycoord=u}return h}class Ks extends Dt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function m(v,p,g,b,M,S,T,P,C,B,K){const _=S/C,E=T/B,z=S/2,w=T/2,A=P/2,D=C+1,R=B+1;let U=0,F=0;const Q=new N;for(let k=0;k<R;k++){const G=k*E-w;for(let te=0;te<D;te++){const ae=te*_-z;Q[v]=ae*b,Q[p]=G*M,Q[g]=A,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[p]=0,Q[g]=P>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(te/C),u.push(1-k/B),U+=1}}for(let k=0;k<B;k++)for(let G=0;G<C;G++){const te=d+G+D*k,ae=d+G+D*(k+1),W=d+(G+1)+D*(k+1),j=d+(G+1)+D*k;l.push(te,ae,j),l.push(ae,W,j),F+=6}a.addGroup(f,F,K),f+=F,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=qr(n[t]);for(const r in i)e[r]=i[r]}return e}function S0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function af(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const lf={clone:qr,merge:ln};var E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=T0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=S0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class cf extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new N,uf=new $e,hf=new $e;class cn extends cf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,uf,hf),t.subVectors(hf,uf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=-90,Zr=1;class b0 extends at{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(Kr,Zr,e,t);r.layers=this.layers,this.add(r);const s=new cn(Kr,Zr,e,t);s.layers=this.layers,this.add(s);const o=new cn(Kr,Zr,e,t);o.layers=this.layers,this.add(o);const a=new cn(Kr,Zr,e,t);a.layers=this.layers,this.add(a);const l=new cn(Kr,Zr,e,t);l.layers=this.layers,this.add(l);const c=new cn(Kr,Zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class df extends Ht{constructor(e,t,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Cr,super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A0 extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new df(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ks(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Li});s.uniforms.tEquirect.value=t;const o=new en(r,s),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=yn),new b0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const lu=new N,w0=new N,R0=new ke;class lr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=lu.subVectors(i,t).cross(w0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(lu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||R0.getNormalMatrix(e),r=this.coplanarPoint(lu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Qn,Ea=new N;class cu{constructor(e=new lr,t=new lr,i=new lr,r=new lr,s=new lr,o=new lr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],f=r[8],m=r[9],v=r[10],p=r[11],g=r[12],b=r[13],M=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,p-f,S-g).normalize(),i[1].setComponents(l+s,d+c,p+f,S+g).normalize(),i[2].setComponents(l+o,d+h,p+m,S+b).normalize(),i[3].setComponents(l-o,d-h,p-m,S-b).normalize(),i[4].setComponents(l-a,d-u,p-v,S-M).normalize(),t===mi)i[5].setComponents(l+a,d+u,p+v,S+M).normalize();else if(t===ra)i[5].setComponents(a,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ea.x=r.normal.x>0?e.max.x:e.min.x,Ea.y=r.normal.y>0?e.max.y:e.min.y,Ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ff(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function C0(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ta extends Dt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],v=[],p=[];for(let g=0;g<h;g++){const b=g*d-o;for(let M=0;M<c;M++){const S=M*u-s;m.push(S,-b,0),v.push(0,0,1),p.push(M/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){const M=b+c*g,S=b+c*(g+1),T=b+1+c*(g+1),P=b+1+c*g;f.push(M,S,P),f.push(S,T,P)}this.setIndex(f),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
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
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
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
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G0=`#ifdef USE_IRIDESCENCE
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
#endif`,W0=`#ifdef USE_BUMPMAP
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,J0=`#define PI 3.141592653589793
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
} // validated`,ey=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ty=`vec3 transformedNormal = objectNormal;
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
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ay=`
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
}`,ly=`#ifdef USE_ENVMAP
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
#endif`,cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uy=`#ifdef USE_ENVMAP
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
#endif`,hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dy=`#ifdef USE_ENVMAP
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
#endif`,fy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,my=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_y=`#ifdef USE_GRADIENTMAP
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
}`,vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,My=`uniform bool receiveShadow;
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
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,by=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wy=`PhysicalMaterial material;
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
#endif`,Ry=`struct PhysicalMaterial {
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
}`,Cy=`
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
#endif`,Py=`#if defined( RE_IndirectDiffuse )
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
#endif`,Iy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ly=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ny=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,By=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ky=`#if defined( USE_POINTS_UV )
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
#endif`,Vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xy=`#ifdef USE_MORPHTARGETS
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
#endif`,jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qy=`#ifdef USE_NORMALMAP
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
#endif`,Jy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ix=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,px=`float getShadowMask() {
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
}`,mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gx=`#ifdef USE_SKINNING
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
#endif`,_x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vx=`#ifdef USE_SKINNING
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
#endif`,yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ex=`#ifdef USE_TRANSMISSION
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
#endif`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qe={alphahash_fragment:P0,alphahash_pars_fragment:I0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:N0,alphatest_pars_fragment:O0,aomap_fragment:U0,aomap_pars_fragment:F0,batching_pars_vertex:B0,batching_vertex:k0,begin_vertex:V0,beginnormal_vertex:z0,bsdfs:H0,iridescence_fragment:G0,bumpmap_pars_fragment:W0,clipping_planes_fragment:X0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:j0,clipping_planes_vertex:Y0,color_fragment:q0,color_pars_fragment:K0,color_pars_vertex:Z0,color_vertex:Q0,common:J0,cube_uv_reflection_fragment:ey,defaultnormal_vertex:ty,displacementmap_pars_vertex:ny,displacementmap_vertex:iy,emissivemap_fragment:ry,emissivemap_pars_fragment:sy,colorspace_fragment:oy,colorspace_pars_fragment:ay,envmap_fragment:ly,envmap_common_pars_fragment:cy,envmap_pars_fragment:uy,envmap_pars_vertex:hy,envmap_physical_pars_fragment:Sy,envmap_vertex:dy,fog_vertex:fy,fog_pars_vertex:py,fog_fragment:my,fog_pars_fragment:gy,gradientmap_pars_fragment:_y,lightmap_pars_fragment:vy,lights_lambert_fragment:yy,lights_lambert_pars_fragment:xy,lights_pars_begin:My,lights_toon_fragment:Ey,lights_toon_pars_fragment:Ty,lights_phong_fragment:by,lights_phong_pars_fragment:Ay,lights_physical_fragment:wy,lights_physical_pars_fragment:Ry,lights_fragment_begin:Cy,lights_fragment_maps:Py,lights_fragment_end:Iy,logdepthbuf_fragment:Ly,logdepthbuf_pars_fragment:Dy,logdepthbuf_pars_vertex:Ny,logdepthbuf_vertex:Oy,map_fragment:Uy,map_pars_fragment:Fy,map_particle_fragment:By,map_particle_pars_fragment:ky,metalnessmap_fragment:Vy,metalnessmap_pars_fragment:zy,morphinstance_vertex:Hy,morphcolor_vertex:Gy,morphnormal_vertex:Wy,morphtarget_pars_vertex:Xy,morphtarget_vertex:$y,normal_fragment_begin:jy,normal_fragment_maps:Yy,normal_pars_fragment:qy,normal_pars_vertex:Ky,normal_vertex:Zy,normalmap_pars_fragment:Qy,clearcoat_normal_fragment_begin:Jy,clearcoat_normal_fragment_maps:ex,clearcoat_pars_fragment:tx,iridescence_pars_fragment:nx,opaque_fragment:ix,packing:rx,premultiplied_alpha_fragment:sx,project_vertex:ox,dithering_fragment:ax,dithering_pars_fragment:lx,roughnessmap_fragment:cx,roughnessmap_pars_fragment:ux,shadowmap_pars_fragment:hx,shadowmap_pars_vertex:dx,shadowmap_vertex:fx,shadowmask_pars_fragment:px,skinbase_vertex:mx,skinning_pars_vertex:gx,skinning_vertex:_x,skinnormal_vertex:vx,specularmap_fragment:yx,specularmap_pars_fragment:xx,tonemapping_fragment:Mx,tonemapping_pars_fragment:Sx,transmission_fragment:Ex,transmission_pars_fragment:Tx,uv_pars_fragment:bx,uv_pars_vertex:Ax,uv_vertex:wx,worldpos_vertex:Rx,background_vert:`varying vec2 vUv;
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
}`},ve={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Jn={basic:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new we(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:ln([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:ln([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new we(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:ln([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:ln([ve.points,ve.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:ln([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:ln([ve.common,ve.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:ln([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:ln([ve.sprite,ve.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:ln([ve.common,ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:ln([ve.lights,ve.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Jn.physical={uniforms:ln([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ba={r:0,b:0,g:0},ur=new Lt,Cx=new Ee;function Px(n,e,t,i,r,s,o){const a=new we(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function v(b){let M=!1;const S=m(b);S===null?g(a,l):S&&S.isColor&&(g(S,1),M=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,M){const S=m(M);S&&(S.isCubeTexture||S.mapping===Xo)?(h===void 0&&(h=new en(new Ks(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:qr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ur.copy(M.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(ur)),h.material.toneMapped=Ye.getTransfer(S.colorSpace)!==At,(u!==S||d!==S.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new en(new Ta(2,2),new Ei({name:"BackgroundMaterial",uniforms:qr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==At,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,M){b.getRGB(ba,af(n)),i.buffers.color.setClear(ba.r,ba.g,ba.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,g(a,l)},render:v,addToRenderList:p}}function Ix(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(_,E,z,w,A){let D=!1;const R=u(w,z,E);s!==R&&(s=R,c(s.object)),D=f(_,w,z,A),D&&m(_,w,z,A),A!==null&&e.update(A,n.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,S(_,E,z,w),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function u(_,E,z){const w=z.wireframe===!0;let A=i[_.id];A===void 0&&(A={},i[_.id]=A);let D=A[E.id];D===void 0&&(D={},A[E.id]=D);let R=D[w];return R===void 0&&(R=d(l()),D[w]=R),R}function d(_){const E=[],z=[],w=[];for(let A=0;A<t;A++)E[A]=0,z[A]=0,w[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:z,attributeDivisors:w,object:_,attributes:{},index:null}}function f(_,E,z,w){const A=s.attributes,D=E.attributes;let R=0;const U=z.getAttributes();for(const F in U)if(U[F].location>=0){const k=A[F];let G=D[F];if(G===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(G=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(G=_.instanceColor)),k===void 0||k.attribute!==G||G&&k.data!==G.data)return!0;R++}return s.attributesNum!==R||s.index!==w}function m(_,E,z,w){const A={},D=E.attributes;let R=0;const U=z.getAttributes();for(const F in U)if(U[F].location>=0){let k=D[F];k===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(k=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(k=_.instanceColor));const G={};G.attribute=k,k&&k.data&&(G.data=k.data),A[F]=G,R++}s.attributes=A,s.attributesNum=R,s.index=w}function v(){const _=s.newAttributes;for(let E=0,z=_.length;E<z;E++)_[E]=0}function p(_){g(_,0)}function g(_,E){const z=s.newAttributes,w=s.enabledAttributes,A=s.attributeDivisors;z[_]=1,w[_]===0&&(n.enableVertexAttribArray(_),w[_]=1),A[_]!==E&&(n.vertexAttribDivisor(_,E),A[_]=E)}function b(){const _=s.newAttributes,E=s.enabledAttributes;for(let z=0,w=E.length;z<w;z++)E[z]!==_[z]&&(n.disableVertexAttribArray(z),E[z]=0)}function M(_,E,z,w,A,D,R){R===!0?n.vertexAttribIPointer(_,E,z,A,D):n.vertexAttribPointer(_,E,z,w,A,D)}function S(_,E,z,w){v();const A=w.attributes,D=z.getAttributes(),R=E.defaultAttributeValues;for(const U in D){const F=D[U];if(F.location>=0){let Q=A[U];if(Q===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),Q!==void 0){const k=Q.normalized,G=Q.itemSize,te=e.get(Q);if(te===void 0)continue;const ae=te.buffer,W=te.type,j=te.bytesPerElement,le=W===n.INT||W===n.UNSIGNED_INT||Q.gpuType===nc;if(Q.isInterleavedBufferAttribute){const re=Q.data,de=re.stride,pe=Q.offset;if(re.isInstancedInterleavedBuffer){for(let fe=0;fe<F.locationSize;fe++)g(F.location+fe,re.meshPerAttribute);_.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let fe=0;fe<F.locationSize;fe++)p(F.location+fe);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let fe=0;fe<F.locationSize;fe++)M(F.location+fe,G/F.locationSize,W,k,de*j,(pe+G/F.locationSize*fe)*j,le)}else{if(Q.isInstancedBufferAttribute){for(let re=0;re<F.locationSize;re++)g(F.location+re,Q.meshPerAttribute);_.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let re=0;re<F.locationSize;re++)p(F.location+re);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let re=0;re<F.locationSize;re++)M(F.location+re,G/F.locationSize,W,k,G*j,G/F.locationSize*re*j,le)}}else if(R!==void 0){const k=R[U];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(F.location,k);break;case 3:n.vertexAttrib3fv(F.location,k);break;case 4:n.vertexAttrib4fv(F.location,k);break;default:n.vertexAttrib1fv(F.location,k)}}}}b()}function T(){B();for(const _ in i){const E=i[_];for(const z in E){const w=E[z];for(const A in w)h(w[A].object),delete w[A];delete E[z]}delete i[_]}}function P(_){if(i[_.id]===void 0)return;const E=i[_.id];for(const z in E){const w=E[z];for(const A in w)h(w[A].object),delete w[A];delete E[z]}delete i[_.id]}function C(_){for(const E in i){const z=i[E];if(z[_.id]===void 0)continue;const w=z[_.id];for(const A in w)h(w[A].object),delete w[A];delete z[_.id]}}function B(){K(),o=!0,s!==r&&(s=r,c(s.object))}function K(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:K,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function Lx(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];for(let v=0;v<d.length;v++)t.update(m,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Dx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Cn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const B=C===Bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==pi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==kn&&!B)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const C=e.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:T,maxSamples:P}}function Nx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new lr,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,g=n.get(u);if(!r||m===null||m.length===0||s&&!p)s?h(null):c();else{const b=s?0:i,M=b*4;let S=g.clippingState||null;l.value=S,S=h(m,d,M,f);for(let T=0;T!==M;++T)S[T]=t[T];g.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=f+v*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,S=f;M!==v;++M,S+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Ox(n){let e=new WeakMap;function t(o,a){return a===Wo?o.mapping=Cr:a===tc&&(o.mapping=Pr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wo||a===tc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new A0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Aa extends cf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qr=4,pf=[.125,.215,.35,.446,.526,.582],hr=20,uu=new Aa,mf=new we;let hu=null,du=0,fu=0,pu=!1;const dr=(1+Math.sqrt(5))/2,Jr=1/dr,gf=[new N(-dr,Jr,0),new N(dr,Jr,0),new N(-Jr,0,dr),new N(Jr,0,dr),new N(0,dr,-Jr),new N(0,dr,Jr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class _f{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){hu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hu,du,fu),this._renderer.xr.enabled=pu,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cr||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Bs,format:Cn,colorSpace:Yt,depthBuffer:!1},r=vf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ux(s)),this._blurMaterial=Fx(s,e,t)}return r}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,uu)}_sceneToCubeUV(e,t,i,r){const a=new cn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(mf),h.toneMapping=Di,h.autoClear=!1;const f=new Si({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new en(new Ks,f);let v=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(mf),v=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):b===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const M=this._cubeSize;wa(r,b*M,g>2?M:0,M,M),h.setRenderTarget(r),v&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Cr||e.mapping===Pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,uu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gf[(r-s-1)%gf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new en(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*hr-1),v=s/m,p=isFinite(s)?1+Math.floor(h*v):hr;p>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hr}`);const g=[];let b=0;for(let C=0;C<hr;++C){const B=C/v,K=Math.exp(-B*B/2);g.push(K),C===0?b+=K:C<p&&(b+=2*K)}for(let C=0;C<g.length;C++)g[C]=g[C]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-i;const S=this._sizeLods[r],T=3*S*(r>M-Qr?r-M+Qr:0),P=4*(this._cubeSize-S);wa(t,T,P,3*S,2*S),l.setRenderTarget(t),l.render(u,uu)}}function Ux(n){const e=[],t=[],i=[];let r=n;const s=n-Qr+1+pf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Qr?l=pf[o-n+Qr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,p=2,g=1,b=new Float32Array(v*m*f),M=new Float32Array(p*m*f),S=new Float32Array(g*m*f);for(let P=0;P<f;P++){const C=P%3*2/3-1,B=P>2?0:-1,K=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];b.set(K,v*m*P),M.set(d,p*m*P);const _=[P,P,P,P,P,P];S.set(_,g*m*P)}const T=new Dt;T.setAttribute("position",new lt(b,v)),T.setAttribute("uv",new lt(M,p)),T.setAttribute("faceIndex",new lt(S,g)),e.push(T),r>Qr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vf(n,e,t){const i=new rr(n,e,t);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Fx(n,e,t){const i=new Float32Array(hr),r=new N(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function yf(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function xf(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function mu(){return`

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
	`}function Bx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wo||l===tc,h=l===Cr||l===Pr;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new _f(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new _f(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function kx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&sa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Vx(n,e,t,i){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let p=0,g=v.length;p<g;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const v=f[m];for(let p=0,g=v.length;p<g;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const b=f.array;v=f.version;for(let M=0,S=b.length;M<S;M+=3){const T=b[M+0],P=b[M+1],C=b[M+2];d.push(T,P,P,C,C,T)}}else if(m!==void 0){const b=m.array;v=m.version;for(let M=0,S=b.length/3-1;M<S;M+=3){const T=M+0,P=M+1,C=M+2;d.push(T,P,P,C,C,T)}}else return;const p=new(kd(d)?nf:su)(d,1);p.version=v;const g=s.get(u);g&&e.remove(g),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function zx(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function c(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,s,d*o,m),t.update(f,i,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,i,1)}function u(d,f,m,v){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],v[g]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,v,0,m);let g=0;for(let b=0;b<m;b++)g+=f[b];for(let b=0;b<v.length;b++)t.update(g,i,v[b])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Gx(n,e,t){const i=new WeakMap,r=new nt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let K=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",K)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),m===!0&&(M=2),v===!0&&(M=3);let S=a.attributes.position.count*M,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const P=new Float32Array(S*T*4*u),C=new Wd(P,S,T,u);C.type=kn,C.needsUpdate=!0;const B=M*4;for(let _=0;_<u;_++){const E=p[_],z=g[_],w=b[_],A=S*T*4*_;for(let D=0;D<E.count;D++){const R=D*B;f===!0&&(r.fromBufferAttribute(E,D),P[A+R+0]=r.x,P[A+R+1]=r.y,P[A+R+2]=r.z,P[A+R+3]=0),m===!0&&(r.fromBufferAttribute(z,D),P[A+R+4]=r.x,P[A+R+5]=r.y,P[A+R+6]=r.z,P[A+R+7]=0),v===!0&&(r.fromBufferAttribute(w,D),P[A+R+8]=r.x,P[A+R+9]=r.y,P[A+R+10]=r.z,P[A+R+11]=w.itemSize===4?r.w:1)}}d={count:u,texture:C,size:new $e(S,T)},i.set(a,d),a.addEventListener("dispose",K)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Wx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Mf extends Ht{constructor(e,t,i,r,s,o,a,l,c,h=Lr){if(h!==Lr&&h!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Lr&&(i=nr),i===void 0&&h===Dr&&(i=Ir),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sf=new Ht,Ef=new Mf(1,1),Tf=new Wd,bf=new h0,Af=new df,wf=[],Rf=[],Cf=new Float32Array(16),Pf=new Float32Array(9),If=new Float32Array(4);function es(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wf[r];if(s===void 0&&(s=new Float32Array(r),wf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ra(n,e){let t=Rf[e];t===void 0&&(t=new Int32Array(e),Rf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function Yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function qx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;If.set(i),n.uniformMatrix2fv(this.addr,!1,If),Wt(t,i)}}function Kx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Pf.set(i),n.uniformMatrix3fv(this.addr,!1,Pf),Wt(t,i)}}function Zx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Cf.set(i),n.uniformMatrix4fv(this.addr,!1,Cf),Wt(t,i)}}function Qx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function eM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function tM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function nM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function oM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ef.compareFunction=Ud,s=Ef):s=Sf,t.setTexture2D(e||s,r)}function aM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||bf,r)}function lM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Af,r)}function cM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Tf,r)}function uM(n){switch(n){case 5126:return Xx;case 35664:return $x;case 35665:return jx;case 35666:return Yx;case 35674:return qx;case 35675:return Kx;case 35676:return Zx;case 5124:case 35670:return Qx;case 35667:case 35671:return Jx;case 35668:case 35672:return eM;case 35669:case 35673:return tM;case 5125:return nM;case 36294:return iM;case 36295:return rM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return cM}}function hM(n,e){n.uniform1fv(this.addr,e)}function dM(n,e){const t=es(e,this.size,2);n.uniform2fv(this.addr,t)}function fM(n,e){const t=es(e,this.size,3);n.uniform3fv(this.addr,t)}function pM(n,e){const t=es(e,this.size,4);n.uniform4fv(this.addr,t)}function mM(n,e){const t=es(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gM(n,e){const t=es(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _M(n,e){const t=es(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vM(n,e){n.uniform1iv(this.addr,e)}function yM(n,e){n.uniform2iv(this.addr,e)}function xM(n,e){n.uniform3iv(this.addr,e)}function MM(n,e){n.uniform4iv(this.addr,e)}function SM(n,e){n.uniform1uiv(this.addr,e)}function EM(n,e){n.uniform2uiv(this.addr,e)}function TM(n,e){n.uniform3uiv(this.addr,e)}function bM(n,e){n.uniform4uiv(this.addr,e)}function AM(n,e,t){const i=this.cache,r=e.length,s=Ra(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Sf,s[o])}function wM(n,e,t){const i=this.cache,r=e.length,s=Ra(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||bf,s[o])}function RM(n,e,t){const i=this.cache,r=e.length,s=Ra(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Af,s[o])}function CM(n,e,t){const i=this.cache,r=e.length,s=Ra(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Tf,s[o])}function PM(n){switch(n){case 5126:return hM;case 35664:return dM;case 35665:return fM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return _M;case 5124:case 35670:return vM;case 35667:case 35671:return yM;case 35668:case 35672:return xM;case 35669:case 35673:return MM;case 5125:return SM;case 36294:return EM;case 36295:return TM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return CM}}class IM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uM(t.type)}}class LM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PM(t.type)}}class DM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const gu=/(\w+)(\])?(\[|\.)?/g;function Lf(n,e){n.seq.push(e),n.map[e.id]=e}function NM(n,e,t){const i=n.name,r=i.length;for(gu.lastIndex=0;;){const s=gu.exec(i),o=gu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Lf(t,c===void 0?new IM(a,n,e):new LM(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new DM(a),Lf(t,u)),t=u}}}class Ca{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);NM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Df(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const OM=37297;let UM=0;function FM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function BM(n){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(n);let i;switch(e===t?i="":e===ia&&t===na?i="LinearDisplayP3ToLinearSRGB":e===na&&t===ia&&(i="LinearSRGBToLinearDisplayP3"),n){case Yt:case ea:return[i,"LinearTransferOETF"];case St:case Bc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Nf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+FM(n.getShaderSource(e),o)}else return r}function kM(n,e){const t=BM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function VM(n,e){let t;switch(e){case gv:t="Linear";break;case _v:t="Reinhard";break;case vv:t="Cineon";break;case yv:t="ACESFilmic";break;case Mv:t="AgX";break;case Sv:t="Neutral";break;case xv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pa=new N;function zM(){Ye.getLuminanceCoefficients(Pa);const n=Pa.x.toFixed(4),e=Pa.y.toFixed(4),t=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function GM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function WM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Zs(n){return n!==""}function Of(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XM=/^[ \t]*#include +<([\w\d./]+)>/gm;function _u(n){return n.replace(XM,jM)}const $M=new Map;function jM(n,e){let t=qe[e];if(t===void 0){const i=$M.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _u(t)}const YM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(n){return n.replace(YM,qM)}function qM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function KM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===q_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function ZM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cr:case Pr:e="ENVMAP_TYPE_CUBE";break;case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pr:e="ENVMAP_MODE_REFRACTION";break}return e}function JM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Go:e="ENVMAP_BLENDING_MULTIPLY";break;case pv:e="ENVMAP_BLENDING_MIX";break;case mv:e="ENVMAP_BLENDING_ADD";break}return e}function eS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=KM(t),c=ZM(t),h=QM(t),u=JM(t),d=eS(t),f=HM(t),m=GM(s),v=r.createProgram();let p,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Zs).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Zs).join(`
`),g.length>0&&(g+=`
`)):(p=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),g=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?qe.tonemapping_pars_fragment:"",t.toneMapping!==Di?VM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,kM("linearToOutputTexel",t.outputColorSpace),zM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),o=_u(o),o=Of(o,t),o=Uf(o,t),a=_u(a),a=Of(a,t),a=Uf(a,t),o=Ff(o),a=Ff(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=b+p+o,S=b+g+a,T=Df(r,r.VERTEX_SHADER,M),P=Df(r,r.FRAGMENT_SHADER,S);r.attachShader(v,T),r.attachShader(v,P),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(E){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v).trim(),w=r.getShaderInfoLog(T).trim(),A=r.getShaderInfoLog(P).trim();let D=!0,R=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,P);else{const U=Nf(r,T,"vertex"),F=Nf(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+U+`
`+F)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(w===""||A==="")&&(R=!1);R&&(E.diagnostics={runnable:D,programLog:z,vertexShader:{log:w,prefix:p},fragmentShader:{log:A,prefix:g}})}r.deleteShader(T),r.deleteShader(P),B=new Ca(r,v),K=WM(r,v)}let B;this.getUniforms=function(){return B===void 0&&C(this),B};let K;this.getAttributes=function(){return K===void 0&&C(this),K};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,OM)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=P,this}let nS=0;class iS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rS(e),t.set(e,i)),i}}class rS{constructor(e){this.id=nS++,this.code=e,this.usedTimes=0}}function sS(n,e,t,i,r,s,o){const a=new Yd,l=new iS,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,E,z,w,A){const D=w.fog,R=A.geometry,U=_.isMeshStandardMaterial?w.environment:null,F=(_.isMeshStandardMaterial?t:e).get(_.envMap||U),Q=F&&F.mapping===Xo?F.image.height:null,k=v[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const G=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,te=G!==void 0?G.length:0;let ae=0;R.morphAttributes.position!==void 0&&(ae=1),R.morphAttributes.normal!==void 0&&(ae=2),R.morphAttributes.color!==void 0&&(ae=3);let W,j,le,re;if(k){const rn=Jn[k];W=rn.vertexShader,j=rn.fragmentShader}else W=_.vertexShader,j=_.fragmentShader,l.update(_),le=l.getVertexShaderID(_),re=l.getFragmentShaderID(_);const de=n.getRenderTarget(),pe=A.isInstancedMesh===!0,fe=A.isBatchedMesh===!0,xe=!!_.map,$=!!_.matcap,O=!!F,_e=!!_.aoMap,Ue=!!_.lightMap,We=!!_.bumpMap,Le=!!_.normalMap,et=!!_.displacementMap,De=!!_.emissiveMap,L=!!_.metalnessMap,y=!!_.roughnessMap,H=_.anisotropy>0,V=_.clearcoat>0,ie=_.dispersion>0,ne=_.iridescence>0,ge=_.sheen>0,ce=_.transmission>0,ye=H&&!!_.anisotropyMap,je=V&&!!_.clearcoatMap,ue=V&&!!_.clearcoatNormalMap,Me=V&&!!_.clearcoatRoughnessMap,Be=ne&&!!_.iridescenceMap,Ne=ne&&!!_.iridescenceThicknessMap,Ae=ge&&!!_.sheenColorMap,ze=ge&&!!_.sheenRoughnessMap,Xe=!!_.specularMap,Et=!!_.specularColorMap,X=!!_.specularIntensityMap,Re=ce&&!!_.transmissionMap,se=ce&&!!_.thicknessMap,he=!!_.gradientMap,Te=!!_.alphaMap,Se=_.alphaTest>0,Qe=!!_.alphaHash,It=!!_.extensions;let nn=Di;_.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(nn=n.toneMapping);const it={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:W,fragmentShader:j,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:fe,batchingColor:fe&&A._colorsTexture!==null,instancing:pe,instancingColor:pe&&A.instanceColor!==null,instancingMorph:pe&&A.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Yt,alphaToCoverage:!!_.alphaToCoverage,map:xe,matcap:$,envMap:O,envMapMode:O&&F.mapping,envMapCubeUVHeight:Q,aoMap:_e,lightMap:Ue,bumpMap:We,normalMap:Le,displacementMap:f&&et,emissiveMap:De,normalMapObjectSpace:Le&&_.normalMapType===Iv,normalMapTangentSpace:Le&&_.normalMapType===zs,metalnessMap:L,roughnessMap:y,anisotropy:H,anisotropyMap:ye,clearcoat:V,clearcoatMap:je,clearcoatNormalMap:ue,clearcoatRoughnessMap:Me,dispersion:ie,iridescence:ne,iridescenceMap:Be,iridescenceThicknessMap:Ne,sheen:ge,sheenColorMap:Ae,sheenRoughnessMap:ze,specularMap:Xe,specularColorMap:Et,specularIntensityMap:X,transmission:ce,transmissionMap:Re,thicknessMap:se,gradientMap:he,opaque:_.transparent===!1&&_.blending===wr&&_.alphaToCoverage===!1,alphaMap:Te,alphaTest:Se,alphaHash:Qe,combine:_.combine,mapUv:xe&&p(_.map.channel),aoMapUv:_e&&p(_.aoMap.channel),lightMapUv:Ue&&p(_.lightMap.channel),bumpMapUv:We&&p(_.bumpMap.channel),normalMapUv:Le&&p(_.normalMap.channel),displacementMapUv:et&&p(_.displacementMap.channel),emissiveMapUv:De&&p(_.emissiveMap.channel),metalnessMapUv:L&&p(_.metalnessMap.channel),roughnessMapUv:y&&p(_.roughnessMap.channel),anisotropyMapUv:ye&&p(_.anisotropyMap.channel),clearcoatMapUv:je&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ze&&p(_.sheenRoughnessMap.channel),specularMapUv:Xe&&p(_.specularMap.channel),specularColorMapUv:Et&&p(_.specularColorMap.channel),specularIntensityMapUv:X&&p(_.specularIntensityMap.channel),transmissionMapUv:Re&&p(_.transmissionMap.channel),thicknessMapUv:se&&p(_.thicknessMap.channel),alphaMapUv:Te&&p(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Le||H),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!R.attributes.uv&&(xe||Te),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:A.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ae,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:nn,decodeVideoTexture:xe&&_.map.isVideoTexture===!0&&Ye.getTransfer(_.map.colorSpace)===At,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rn,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:It&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&_.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function b(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)E.push(z),E.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(M(E,_),S(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function M(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function S(_,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),_.push(a.mask)}function T(_){const E=v[_.type];let z;if(E){const w=Jn[E];z=lf.clone(w.uniforms)}else z=_.uniforms;return z}function P(_,E){let z;for(let w=0,A=h.length;w<A;w++){const D=h[w];if(D.cacheKey===E){z=D,++z.usedTimes;break}}return z===void 0&&(z=new tS(n,E,_,s),h.push(z)),z}function C(_){if(--_.usedTimes===0){const E=h.indexOf(_);h[E]=h[h.length-1],h.pop(),_.destroy()}}function B(_){l.remove(_)}function K(){l.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:T,acquireProgram:P,releaseProgram:C,releaseShaderCache:B,programs:h,dispose:K}}function oS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function aS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,d,f,m,v,p){let g=n[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:p},n[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=v,g.group=p),e++,g}function a(u,d,f,m,v,p){const g=o(u,d,f,m,v,p);f.transmission>0?i.push(g):f.transparent===!0?r.push(g):t.push(g)}function l(u,d,f,m,v,p){const g=o(u,d,f,m,v,p);f.transmission>0?i.unshift(g):f.transparent===!0?r.unshift(g):t.unshift(g)}function c(u,d){t.length>1&&t.sort(u||aS),i.length>1&&i.sort(d||kf),r.length>1&&r.sort(d||kf)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function lS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Vf,n.set(i,[o])):r>=s.length?(o=new Vf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function cS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new we};break;case"SpotLight":t={position:new N,direction:new N,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function uS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let hS=0;function dS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fS(n){const e=new cS,t=uS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new Ee,o=new Ee;function a(c){let h=0,u=0,d=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,b=0,M=0,S=0,T=0,P=0,C=0;c.sort(dS);for(let K=0,_=c.length;K<_;K++){const E=c[K],z=E.color,w=E.intensity,A=E.distance,D=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=z.r*w,u+=z.g*w,d+=z.b*w;else if(E.isLightProbe){for(let R=0;R<9;R++)i.probe[R].addScaledVector(E.sh.coefficients[R],w);C++}else if(E.isDirectionalLight){const R=e.get(E);if(R.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const U=E.shadow,F=t.get(E);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,i.directionalShadow[f]=F,i.directionalShadowMap[f]=D,i.directionalShadowMatrix[f]=E.shadow.matrix,b++}i.directional[f]=R,f++}else if(E.isSpotLight){const R=e.get(E);R.position.setFromMatrixPosition(E.matrixWorld),R.color.copy(z).multiplyScalar(w),R.distance=A,R.coneCos=Math.cos(E.angle),R.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),R.decay=E.decay,i.spot[v]=R;const U=E.shadow;if(E.map&&(i.spotLightMap[T]=E.map,T++,U.updateMatrices(E),E.castShadow&&P++),i.spotLightMatrix[v]=U.matrix,E.castShadow){const F=t.get(E);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,i.spotShadow[v]=F,i.spotShadowMap[v]=D,S++}v++}else if(E.isRectAreaLight){const R=e.get(E);R.color.copy(z).multiplyScalar(w),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=R,p++}else if(E.isPointLight){const R=e.get(E);if(R.color.copy(E.color).multiplyScalar(E.intensity),R.distance=E.distance,R.decay=E.decay,E.castShadow){const U=E.shadow,F=t.get(E);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,F.shadowCameraNear=U.camera.near,F.shadowCameraFar=U.camera.far,i.pointShadow[m]=F,i.pointShadowMap[m]=D,i.pointShadowMatrix[m]=E.shadow.matrix,M++}i.point[m]=R,m++}else if(E.isHemisphereLight){const R=e.get(E);R.skyColor.copy(E.color).multiplyScalar(w),R.groundColor.copy(E.groundColor).multiplyScalar(w),i.hemi[g]=R,g++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const B=i.hash;(B.directionalLength!==f||B.pointLength!==m||B.spotLength!==v||B.rectAreaLength!==p||B.hemiLength!==g||B.numDirectionalShadows!==b||B.numPointShadows!==M||B.numSpotShadows!==S||B.numSpotMaps!==T||B.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=p,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+T-P,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,B.directionalLength=f,B.pointLength=m,B.spotLength=v,B.rectAreaLength=p,B.hemiLength=g,B.numDirectionalShadows=b,B.numPointShadows=M,B.numSpotShadows=S,B.numSpotMaps=T,B.numLightProbes=C,i.version=hS++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0;const p=h.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){const M=c[g];if(M.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),u++}else if(M.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(M.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function zf(n){const e=new fS(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function pS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new zf(n),e.set(r,[a])):s>=o.length?(a=new zf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class mS extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gS extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vS=`uniform sampler2D shadow_pass;
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
}`;function yS(n,e,t){let i=new cu;const r=new $e,s=new $e,o=new nt,a=new mS({depthPacking:Pv}),l=new gS,c={},h=t.maxTextureSize,u={[di]:on,[on]:di,[Rn]:Rn},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:_S,fragmentShader:vS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Dt;m.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new en(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd;let g=this.type;this.render=function(P,C,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const K=n.getRenderTarget(),_=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Li),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const w=g!==hi&&this.type===hi,A=g===hi&&this.type!==hi;for(let D=0,R=P.length;D<R;D++){const U=P[D],F=U.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Q=F.getFrameExtents();if(r.multiply(Q),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Q.x),r.x=s.x*Q.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Q.y),r.y=s.y*Q.y,F.mapSize.y=s.y)),F.map===null||w===!0||A===!0){const G=this.type!==hi?{minFilter:an,magFilter:an}:{};F.map!==null&&F.map.dispose(),F.map=new rr(r.x,r.y,G),F.map.texture.name=U.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const k=F.getViewportCount();for(let G=0;G<k;G++){const te=F.getViewport(G);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),z.viewport(o),F.updateMatrices(U,G),i=F.getFrustum(),S(C,B,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===hi&&b(F,B),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(K,_,E)};function b(P,C){const B=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new rr(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,B,d,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,B,f,v,null)}function M(P,C,B,K){let _=null;const E=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(E!==void 0)_=E;else if(_=B.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=_.uuid,w=C.uuid;let A=c[z];A===void 0&&(A={},c[z]=A);let D=A[w];D===void 0&&(D=_.clone(),A[w]=D,C.addEventListener("dispose",T)),_=D}if(_.visible=C.visible,_.wireframe=C.wireframe,K===hi?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:u[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,B.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const z=n.properties.get(_);z.light=B}return _}function S(P,C,B,K,_){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===hi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const w=e.update(P),A=P.material;if(Array.isArray(A)){const D=w.groups;for(let R=0,U=D.length;R<U;R++){const F=D[R],Q=A[F.materialIndex];if(Q&&Q.visible){const k=M(P,Q,K,_);P.onBeforeShadow(n,P,C,B,w,k,F),n.renderBufferDirect(B,null,w,k,P,F),P.onAfterShadow(n,P,C,B,w,k,F)}}}else if(A.visible){const D=M(P,A,K,_);P.onBeforeShadow(n,P,C,B,w,D,null),n.renderBufferDirect(B,null,w,D,P,null),P.onAfterShadow(n,P,C,B,w,D,null)}}const z=P.children;for(let w=0,A=z.length;w<A;w++)S(z[w],C,B,K,_)}function T(P){P.target.removeEventListener("dispose",T);for(const B in c){const K=c[B],_=P.target.uuid;_ in K&&(K[_].dispose(),delete K[_])}}}const xS={[Yl]:ql,[Kl]:Jl,[Zl]:ec,[Rr]:Ql,[ql]:Yl,[Jl]:Kl,[ec]:Zl,[Ql]:Rr};function MS(n){function e(){let X=!1;const Re=new nt;let se=null;const he=new nt(0,0,0,0);return{setMask:function(Te){se!==Te&&!X&&(n.colorMask(Te,Te,Te,Te),se=Te)},setLocked:function(Te){X=Te},setClear:function(Te,Se,Qe,It,nn){nn===!0&&(Te*=It,Se*=It,Qe*=It),Re.set(Te,Se,Qe,It),he.equals(Re)===!1&&(n.clearColor(Te,Se,Qe,It),he.copy(Re))},reset:function(){X=!1,se=null,he.set(-1,0,0,0)}}}function t(){let X=!1,Re=!1,se=null,he=null,Te=null;return{setReversed:function(Se){Re=Se},setTest:function(Se){Se?le(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(Se){se!==Se&&!X&&(n.depthMask(Se),se=Se)},setFunc:function(Se){if(Re&&(Se=xS[Se]),he!==Se){switch(Se){case Yl:n.depthFunc(n.NEVER);break;case ql:n.depthFunc(n.ALWAYS);break;case Kl:n.depthFunc(n.LESS);break;case Rr:n.depthFunc(n.LEQUAL);break;case Zl:n.depthFunc(n.EQUAL);break;case Ql:n.depthFunc(n.GEQUAL);break;case Jl:n.depthFunc(n.GREATER);break;case ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Se}},setLocked:function(Se){X=Se},setClear:function(Se){Te!==Se&&(n.clearDepth(Se),Te=Se)},reset:function(){X=!1,se=null,he=null,Te=null}}}function i(){let X=!1,Re=null,se=null,he=null,Te=null,Se=null,Qe=null,It=null,nn=null;return{setTest:function(it){X||(it?le(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(it){Re!==it&&!X&&(n.stencilMask(it),Re=it)},setFunc:function(it,rn,qn){(se!==it||he!==rn||Te!==qn)&&(n.stencilFunc(it,rn,qn),se=it,he=rn,Te=qn)},setOp:function(it,rn,qn){(Se!==it||Qe!==rn||It!==qn)&&(n.stencilOp(it,rn,qn),Se=it,Qe=rn,It=qn)},setLocked:function(it){X=it},setClear:function(it){nn!==it&&(n.clearStencil(it),nn=it)},reset:function(){X=!1,Re=null,se=null,he=null,Te=null,Se=null,Qe=null,It=null,nn=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,m=!1,v=null,p=null,g=null,b=null,M=null,S=null,T=null,P=new we(0,0,0),C=0,B=!1,K=null,_=null,E=null,z=null,w=null;const A=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,R=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(U)[1]),D=R>=1):U.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),D=R>=2);let F=null,Q={};const k=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),te=new nt().fromArray(k),ae=new nt().fromArray(G);function W(X,Re,se,he){const Te=new Uint8Array(4),Se=n.createTexture();n.bindTexture(X,Se),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<se;Qe++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(Re+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return Se}const j={};j[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(n.DEPTH_TEST),s.setFunc(Rr),Ue(!1),We(_d),le(n.CULL_FACE),O(Li);function le(X){c[X]!==!0&&(n.enable(X),c[X]=!0)}function re(X){c[X]!==!1&&(n.disable(X),c[X]=!1)}function de(X,Re){return h[X]!==Re?(n.bindFramebuffer(X,Re),h[X]=Re,X===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Re),X===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function pe(X,Re){let se=d,he=!1;if(X){se=u.get(Re),se===void 0&&(se=[],u.set(Re,se));const Te=X.textures;if(se.length!==Te.length||se[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Qe=Te.length;Se<Qe;Se++)se[Se]=n.COLOR_ATTACHMENT0+Se;se.length=Te.length,he=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,he=!0);he&&n.drawBuffers(se)}function fe(X){return f!==X?(n.useProgram(X),f=X,!0):!1}const xe={[tr]:n.FUNC_ADD,[Z_]:n.FUNC_SUBTRACT,[Q_]:n.FUNC_REVERSE_SUBTRACT};xe[J_]=n.MIN,xe[ev]=n.MAX;const $={[tv]:n.ZERO,[nv]:n.ONE,[iv]:n.SRC_COLOR,[$l]:n.SRC_ALPHA,[cv]:n.SRC_ALPHA_SATURATE,[av]:n.DST_COLOR,[sv]:n.DST_ALPHA,[rv]:n.ONE_MINUS_SRC_COLOR,[jl]:n.ONE_MINUS_SRC_ALPHA,[lv]:n.ONE_MINUS_DST_COLOR,[ov]:n.ONE_MINUS_DST_ALPHA,[uv]:n.CONSTANT_COLOR,[hv]:n.ONE_MINUS_CONSTANT_COLOR,[dv]:n.CONSTANT_ALPHA,[fv]:n.ONE_MINUS_CONSTANT_ALPHA};function O(X,Re,se,he,Te,Se,Qe,It,nn,it){if(X===Li){m===!0&&(re(n.BLEND),m=!1);return}if(m===!1&&(le(n.BLEND),m=!0),X!==K_){if(X!==v||it!==B){if((p!==tr||M!==tr)&&(n.blendEquation(n.FUNC_ADD),p=tr,M=tr),it)switch(X){case wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yd:n.blendFunc(n.ONE,n.ONE);break;case xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Md:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Md:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}g=null,b=null,S=null,T=null,P.set(0,0,0),C=0,v=X,B=it}return}Te=Te||Re,Se=Se||se,Qe=Qe||he,(Re!==p||Te!==M)&&(n.blendEquationSeparate(xe[Re],xe[Te]),p=Re,M=Te),(se!==g||he!==b||Se!==S||Qe!==T)&&(n.blendFuncSeparate($[se],$[he],$[Se],$[Qe]),g=se,b=he,S=Se,T=Qe),(It.equals(P)===!1||nn!==C)&&(n.blendColor(It.r,It.g,It.b,nn),P.copy(It),C=nn),v=X,B=!1}function _e(X,Re){X.side===Rn?re(n.CULL_FACE):le(n.CULL_FACE);let se=X.side===on;Re&&(se=!se),Ue(se),X.blending===wr&&X.transparent===!1?O(Li):O(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),s.setFunc(X.depthFunc),s.setTest(X.depthTest),s.setMask(X.depthWrite),r.setMask(X.colorWrite);const he=X.stencilWrite;o.setTest(he),he&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),et(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(X){K!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),K=X)}function We(X){X!==j_?(le(n.CULL_FACE),X!==_&&(X===_d?n.cullFace(n.BACK):X===Y_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),_=X}function Le(X){X!==E&&(D&&n.lineWidth(X),E=X)}function et(X,Re,se){X?(le(n.POLYGON_OFFSET_FILL),(z!==Re||w!==se)&&(n.polygonOffset(Re,se),z=Re,w=se)):re(n.POLYGON_OFFSET_FILL)}function De(X){X?le(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function L(X){X===void 0&&(X=n.TEXTURE0+A-1),F!==X&&(n.activeTexture(X),F=X)}function y(X,Re,se){se===void 0&&(F===null?se=n.TEXTURE0+A-1:se=F);let he=Q[se];he===void 0&&(he={type:void 0,texture:void 0},Q[se]=he),(he.type!==X||he.texture!==Re)&&(F!==se&&(n.activeTexture(se),F=se),n.bindTexture(X,Re||j[X]),he.type=X,he.texture=Re)}function H(){const X=Q[F];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Be(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ne(X){te.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),te.copy(X))}function Ae(X){ae.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),ae.copy(X))}function ze(X,Re){let se=l.get(Re);se===void 0&&(se=new WeakMap,l.set(Re,se));let he=se.get(X);he===void 0&&(he=n.getUniformBlockIndex(Re,X.name),se.set(X,he))}function Xe(X,Re){const he=l.get(Re).get(X);a.get(Re)!==he&&(n.uniformBlockBinding(Re,he,X.__bindingPointIndex),a.set(Re,he))}function Et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},F=null,Q={},h={},u=new WeakMap,d=[],f=null,m=!1,v=null,p=null,g=null,b=null,M=null,S=null,T=null,P=new we(0,0,0),C=0,B=!1,K=null,_=null,E=null,z=null,w=null,te.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:re,bindFramebuffer:de,drawBuffers:pe,useProgram:fe,setBlending:O,setMaterial:_e,setFlipSided:Ue,setCullFace:We,setLineWidth:Le,setPolygonOffset:et,setScissorTest:De,activeTexture:L,bindTexture:y,unbindTexture:H,compressedTexImage2D:V,compressedTexImage3D:ie,texImage2D:Me,texImage3D:Be,updateUBOMapping:ze,uniformBlockBinding:Xe,texStorage2D:je,texStorage3D:ue,texSubImage2D:ne,texSubImage3D:ge,compressedTexSubImage2D:ce,compressedTexSubImage3D:ye,scissor:Ne,viewport:Ae,reset:Et}}function Hf(n,e,t,i){const r=SS(i);switch(t){case Rd:return n*e;case Pd:return n*e;case Id:return n*e*2;case sc:return n*e/r.components*r.byteLength;case oc:return n*e/r.components*r.byteLength;case Ld:return n*e*2/r.components*r.byteLength;case ac:return n*e*2/r.components*r.byteLength;case Cd:return n*e*3/r.components*r.byteLength;case Cn:return n*e*4/r.components*r.byteLength;case lc:return n*e*4/r.components*r.byteLength;case Yo:case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ko:case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uc:case dc:return Math.max(n,16)*Math.max(e,8)/4;case cc:case hc:return Math.max(n,8)*Math.max(e,8)/2;case fc:case pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qo:case Pc:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Dd:case Lc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Dc:case Nc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function SS(n){switch(n){case pi:case bd:return{byteLength:1,components:1};case Fs:case Ad:case Bs:return{byteLength:2,components:1};case ic:case rc:return{byteLength:2,components:4};case nr:case nc:case kn:return{byteLength:4,components:1};case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ES(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,y){return f?new OffscreenCanvas(L,y):Ws("canvas")}function v(L,y,H){let V=1;const ie=De(L);if((ie.width>H||ie.height>H)&&(V=H/Math.max(ie.width,ie.height)),V<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ne=Math.floor(V*ie.width),ge=Math.floor(V*ie.height);u===void 0&&(u=m(ne,ge));const ce=y?m(ne,ge):u;return ce.width=ne,ce.height=ge,ce.getContext("2d").drawImage(L,0,0,ne,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ne+"x"+ge+")."),ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function p(L){return L.generateMipmaps&&L.minFilter!==an&&L.minFilter!==yn}function g(L){n.generateMipmap(L)}function b(L,y,H,V,ie=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ne=y;if(y===n.RED&&(H===n.FLOAT&&(ne=n.R32F),H===n.HALF_FLOAT&&(ne=n.R16F),H===n.UNSIGNED_BYTE&&(ne=n.R8)),y===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.R8UI),H===n.UNSIGNED_SHORT&&(ne=n.R16UI),H===n.UNSIGNED_INT&&(ne=n.R32UI),H===n.BYTE&&(ne=n.R8I),H===n.SHORT&&(ne=n.R16I),H===n.INT&&(ne=n.R32I)),y===n.RG&&(H===n.FLOAT&&(ne=n.RG32F),H===n.HALF_FLOAT&&(ne=n.RG16F),H===n.UNSIGNED_BYTE&&(ne=n.RG8)),y===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RG8UI),H===n.UNSIGNED_SHORT&&(ne=n.RG16UI),H===n.UNSIGNED_INT&&(ne=n.RG32UI),H===n.BYTE&&(ne=n.RG8I),H===n.SHORT&&(ne=n.RG16I),H===n.INT&&(ne=n.RG32I)),y===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),H===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),H===n.UNSIGNED_INT&&(ne=n.RGB32UI),H===n.BYTE&&(ne=n.RGB8I),H===n.SHORT&&(ne=n.RGB16I),H===n.INT&&(ne=n.RGB32I)),y===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),H===n.UNSIGNED_INT&&(ne=n.RGBA32UI),H===n.BYTE&&(ne=n.RGBA8I),H===n.SHORT&&(ne=n.RGBA16I),H===n.INT&&(ne=n.RGBA32I)),y===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),y===n.RGBA){const ge=ie?ta:Ye.getTransfer(V);H===n.FLOAT&&(ne=n.RGBA32F),H===n.HALF_FLOAT&&(ne=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ne=ge===At?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(L,y){let H;return L?y===null||y===nr||y===Ir?H=n.DEPTH24_STENCIL8:y===kn?H=n.DEPTH32F_STENCIL8:y===Fs&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===nr||y===Ir?H=n.DEPTH_COMPONENT24:y===kn?H=n.DEPTH_COMPONENT32F:y===Fs&&(H=n.DEPTH_COMPONENT16),H}function S(L,y){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==an&&L.minFilter!==yn?Math.log2(Math.max(y.width,y.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?y.mipmaps.length:1}function T(L){const y=L.target;y.removeEventListener("dispose",T),C(y),y.isVideoTexture&&h.delete(y)}function P(L){const y=L.target;y.removeEventListener("dispose",P),K(y)}function C(L){const y=i.get(L);if(y.__webglInit===void 0)return;const H=L.source,V=d.get(H);if(V){const ie=V[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&B(L),Object.keys(V).length===0&&d.delete(H)}i.remove(L)}function B(L){const y=i.get(L);n.deleteTexture(y.__webglTexture);const H=L.source,V=d.get(H);delete V[y.__cacheKey],o.memory.textures--}function K(L){const y=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let ie=0;ie<y.__webglFramebuffer[V].length;ie++)n.deleteFramebuffer(y.__webglFramebuffer[V][ie]);else n.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)n.deleteFramebuffer(y.__webglFramebuffer[V]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=L.textures;for(let V=0,ie=H.length;V<ie;V++){const ne=i.get(H[V]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(H[V])}i.remove(L)}let _=0;function E(){_=0}function z(){const L=_;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),_+=1,L}function w(L){const y=[];return y.push(L.wrapS),y.push(L.wrapT),y.push(L.wrapR||0),y.push(L.magFilter),y.push(L.minFilter),y.push(L.anisotropy),y.push(L.internalFormat),y.push(L.format),y.push(L.type),y.push(L.generateMipmaps),y.push(L.premultiplyAlpha),y.push(L.flipY),y.push(L.unpackAlignment),y.push(L.colorSpace),y.join()}function A(L,y){const H=i.get(L);if(L.isVideoTexture&&Le(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const V=L.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(H,L,y);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+y)}function D(L,y){const H=i.get(L);if(L.version>0&&H.__version!==L.version){ae(H,L,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+y)}function R(L,y){const H=i.get(L);if(L.version>0&&H.__version!==L.version){ae(H,L,y);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+y)}function U(L,y){const H=i.get(L);if(L.version>0&&H.__version!==L.version){W(H,L,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+y)}const F={[Ni]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[$o]:n.MIRRORED_REPEAT},Q={[an]:n.NEAREST,[Td]:n.NEAREST_MIPMAP_NEAREST,[Us]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[jo]:n.LINEAR_MIPMAP_NEAREST,[fi]:n.LINEAR_MIPMAP_LINEAR},k={[Lv]:n.NEVER,[Bv]:n.ALWAYS,[Dv]:n.LESS,[Ud]:n.LEQUAL,[Nv]:n.EQUAL,[Fv]:n.GEQUAL,[Ov]:n.GREATER,[Uv]:n.NOTEQUAL};function G(L,y){if(y.type===kn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===yn||y.magFilter===jo||y.magFilter===Us||y.magFilter===fi||y.minFilter===yn||y.minFilter===jo||y.minFilter===Us||y.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,F[y.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,F[y.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,F[y.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,Q[y.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,Q[y.minFilter]),y.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,k[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===an||y.minFilter!==Us&&y.minFilter!==fi||y.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function te(L,y){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,y.addEventListener("dispose",T));const V=y.source;let ie=d.get(V);ie===void 0&&(ie={},d.set(V,ie));const ne=w(y);if(ne!==L.__cacheKey){ie[ne]===void 0&&(ie[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ie[ne].usedTimes++;const ge=ie[L.__cacheKey];ge!==void 0&&(ie[L.__cacheKey].usedTimes--,ge.usedTimes===0&&B(y)),L.__cacheKey=ne,L.__webglTexture=ie[ne].texture}return H}function ae(L,y,H){let V=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=n.TEXTURE_3D);const ie=te(L,y),ne=y.source;t.bindTexture(V,L.__webglTexture,n.TEXTURE0+H);const ge=i.get(ne);if(ne.version!==ge.__version||ie===!0){t.activeTexture(n.TEXTURE0+H);const ce=Ye.getPrimaries(Ye.workingColorSpace),ye=y.colorSpace===Oi?null:Ye.getPrimaries(y.colorSpace),je=y.colorSpace===Oi||ce===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ue=v(y.image,!1,r.maxTextureSize);ue=et(y,ue);const Me=s.convert(y.format,y.colorSpace),Be=s.convert(y.type);let Ne=b(y.internalFormat,Me,Be,y.colorSpace,y.isVideoTexture);G(V,y);let Ae;const ze=y.mipmaps,Xe=y.isVideoTexture!==!0,Et=ge.__version===void 0||ie===!0,X=ne.dataReady,Re=S(y,ue);if(y.isDepthTexture)Ne=M(y.format===Dr,y.type),Et&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Ne,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ue.width,ue.height,0,Me,Be,null));else if(y.isDataTexture)if(ze.length>0){Xe&&Et&&t.texStorage2D(n.TEXTURE_2D,Re,Ne,ze[0].width,ze[0].height);for(let se=0,he=ze.length;se<he;se++)Ae=ze[se],Xe?X&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,Me,Be,Ae.data):t.texImage2D(n.TEXTURE_2D,se,Ne,Ae.width,Ae.height,0,Me,Be,Ae.data);y.generateMipmaps=!1}else Xe?(Et&&t.texStorage2D(n.TEXTURE_2D,Re,Ne,ue.width,ue.height),X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,Me,Be,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ue.width,ue.height,0,Me,Be,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xe&&Et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ne,ze[0].width,ze[0].height,ue.depth);for(let se=0,he=ze.length;se<he;se++)if(Ae=ze[se],y.format!==Cn)if(Me!==null)if(Xe){if(X)if(y.layerUpdates.size>0){const Te=Hf(Ae.width,Ae.height,y.format,y.type);for(const Se of y.layerUpdates){const Qe=Ae.data.subarray(Se*Te/Ae.data.BYTES_PER_ELEMENT,(Se+1)*Te/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Se,Ae.width,Ae.height,1,Me,Qe,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ae.width,Ae.height,ue.depth,Me,Ae.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ne,Ae.width,Ae.height,ue.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ae.width,Ae.height,ue.depth,Me,Be,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ne,Ae.width,Ae.height,ue.depth,0,Me,Be,Ae.data)}else{Xe&&Et&&t.texStorage2D(n.TEXTURE_2D,Re,Ne,ze[0].width,ze[0].height);for(let se=0,he=ze.length;se<he;se++)Ae=ze[se],y.format!==Cn?Me!==null?Xe?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,Me,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ne,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?X&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,Me,Be,Ae.data):t.texImage2D(n.TEXTURE_2D,se,Ne,Ae.width,Ae.height,0,Me,Be,Ae.data)}else if(y.isDataArrayTexture)if(Xe){if(Et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ne,ue.width,ue.height,ue.depth),X)if(y.layerUpdates.size>0){const se=Hf(ue.width,ue.height,y.format,y.type);for(const he of y.layerUpdates){const Te=ue.data.subarray(he*se/ue.data.BYTES_PER_ELEMENT,(he+1)*se/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,ue.width,ue.height,1,Me,Be,Te)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Me,Be,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ue.width,ue.height,ue.depth,0,Me,Be,ue.data);else if(y.isData3DTexture)Xe?(Et&&t.texStorage3D(n.TEXTURE_3D,Re,Ne,ue.width,ue.height,ue.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Me,Be,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ue.width,ue.height,ue.depth,0,Me,Be,ue.data);else if(y.isFramebufferTexture){if(Et)if(Xe)t.texStorage2D(n.TEXTURE_2D,Re,Ne,ue.width,ue.height);else{let se=ue.width,he=ue.height;for(let Te=0;Te<Re;Te++)t.texImage2D(n.TEXTURE_2D,Te,Ne,se,he,0,Me,Be,null),se>>=1,he>>=1}}else if(ze.length>0){if(Xe&&Et){const se=De(ze[0]);t.texStorage2D(n.TEXTURE_2D,Re,Ne,se.width,se.height)}for(let se=0,he=ze.length;se<he;se++)Ae=ze[se],Xe?X&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Me,Be,Ae):t.texImage2D(n.TEXTURE_2D,se,Ne,Me,Be,Ae);y.generateMipmaps=!1}else if(Xe){if(Et){const se=De(ue);t.texStorage2D(n.TEXTURE_2D,Re,Ne,se.width,se.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Be,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Me,Be,ue);p(y)&&g(V),ge.__version=ne.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function W(L,y,H){if(y.image.length!==6)return;const V=te(L,y),ie=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+H);const ne=i.get(ie);if(ie.version!==ne.__version||V===!0){t.activeTexture(n.TEXTURE0+H);const ge=Ye.getPrimaries(Ye.workingColorSpace),ce=y.colorSpace===Oi?null:Ye.getPrimaries(y.colorSpace),ye=y.colorSpace===Oi||ge===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const je=y.isCompressedTexture||y.image[0].isCompressedTexture,ue=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let he=0;he<6;he++)!je&&!ue?Me[he]=v(y.image[he],!0,r.maxCubemapSize):Me[he]=ue?y.image[he].image:y.image[he],Me[he]=et(y,Me[he]);const Be=Me[0],Ne=s.convert(y.format,y.colorSpace),Ae=s.convert(y.type),ze=b(y.internalFormat,Ne,Ae,y.colorSpace),Xe=y.isVideoTexture!==!0,Et=ne.__version===void 0||V===!0,X=ie.dataReady;let Re=S(y,Be);G(n.TEXTURE_CUBE_MAP,y);let se;if(je){Xe&&Et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,ze,Be.width,Be.height);for(let he=0;he<6;he++){se=Me[he].mipmaps;for(let Te=0;Te<se.length;Te++){const Se=se[Te];y.format!==Cn?Ne!==null?Xe?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,0,0,Se.width,Se.height,Ne,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,ze,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,0,0,Se.width,Se.height,Ne,Ae,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,ze,Se.width,Se.height,0,Ne,Ae,Se.data)}}}else{if(se=y.mipmaps,Xe&&Et){se.length>0&&Re++;const he=De(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,ze,he.width,he.height)}for(let he=0;he<6;he++)if(ue){Xe?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Me[he].width,Me[he].height,Ne,Ae,Me[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ze,Me[he].width,Me[he].height,0,Ne,Ae,Me[he].data);for(let Te=0;Te<se.length;Te++){const Qe=se[Te].image[he].image;Xe?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,0,0,Qe.width,Qe.height,Ne,Ae,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,ze,Qe.width,Qe.height,0,Ne,Ae,Qe.data)}}else{Xe?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne,Ae,Me[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ze,Ne,Ae,Me[he]);for(let Te=0;Te<se.length;Te++){const Se=se[Te];Xe?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,0,0,Ne,Ae,Se.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,ze,Ne,Ae,Se.image[he])}}}p(y)&&g(n.TEXTURE_CUBE_MAP),ne.__version=ie.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function j(L,y,H,V,ie,ne){const ge=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),ye=b(H.internalFormat,ge,ce,H.colorSpace);if(!i.get(y).__hasExternalTextures){const ue=Math.max(1,y.width>>ne),Me=Math.max(1,y.height>>ne);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,ne,ye,ue,Me,y.depth,0,ge,ce,null):t.texImage2D(ie,ne,ye,ue,Me,0,ge,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),We(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,ie,i.get(H).__webglTexture,0,Ue(y)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,ie,i.get(H).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(L,y,H){if(n.bindRenderbuffer(n.RENDERBUFFER,L),y.depthBuffer){const V=y.depthTexture,ie=V&&V.isDepthTexture?V.type:null,ne=M(y.stencilBuffer,ie),ge=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Ue(y);We(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,ne,y.width,y.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,ne,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ne,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,L)}else{const V=y.textures;for(let ie=0;ie<V.length;ie++){const ne=V[ie],ge=s.convert(ne.format,ne.colorSpace),ce=s.convert(ne.type),ye=b(ne.internalFormat,ge,ce,ne.colorSpace),je=Ue(y);H&&We(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,ye,y.width,y.height):We(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,ye,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ye,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(L,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),A(y.depthTexture,0);const V=i.get(y.depthTexture).__webglTexture,ie=Ue(y);if(y.depthTexture.format===Lr)We(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(y.depthTexture.format===Dr)We(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function de(L){const y=i.get(L),H=L.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==L.depthTexture){const V=L.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){const ie=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",ie)};V.addEventListener("dispose",ie),y.__depthDisposeCallback=ie}y.__boundDepthTexture=V}if(L.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");re(y.__webglFramebuffer,L)}else if(H){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=n.createRenderbuffer(),le(y.__webglDepthbuffer[V],L,!1);else{const ie=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=y.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),le(y.__webglDepthbuffer,L,!1);else{const V=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(L,y,H){const V=i.get(L);y!==void 0&&j(V.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&de(L)}function fe(L){const y=L.texture,H=i.get(L),V=i.get(y);L.addEventListener("dispose",P);const ie=L.textures,ne=L.isWebGLCubeRenderTarget===!0,ge=ie.length>1;if(ge||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=y.version,o.memory.textures++),ne){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[ce]=[];for(let ye=0;ye<y.mipmaps.length;ye++)H.__webglFramebuffer[ce][ye]=n.createFramebuffer()}else H.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)H.__webglFramebuffer[ce]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ge)for(let ce=0,ye=ie.length;ce<ye;ce++){const je=i.get(ie[ce]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&We(L)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){const ye=ie[ce];H.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ce]);const je=s.convert(ye.format,ye.colorSpace),ue=s.convert(ye.type),Me=b(ye.internalFormat,je,ue,ye.colorSpace,L.isXRRenderTarget===!0),Be=Ue(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Me,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,H.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),le(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),G(n.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)j(H.__webglFramebuffer[ce][ye],L,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye);else j(H.__webglFramebuffer[ce],L,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(y)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ce=0,ye=ie.length;ce<ye;ce++){const je=ie[ce],ue=i.get(je);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),G(n.TEXTURE_2D,je),j(H.__webglFramebuffer,L,je,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),p(je)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ce=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,V.__webglTexture),G(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)j(H.__webglFramebuffer[ye],L,y,n.COLOR_ATTACHMENT0,ce,ye);else j(H.__webglFramebuffer,L,y,n.COLOR_ATTACHMENT0,ce,0);p(y)&&g(ce),t.unbindTexture()}L.depthBuffer&&de(L)}function xe(L){const y=L.textures;for(let H=0,V=y.length;H<V;H++){const ie=y[H];if(p(ie)){const ne=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ge=i.get(ie).__webglTexture;t.bindTexture(ne,ge),g(ne),t.unbindTexture()}}}const $=[],O=[];function _e(L){if(L.samples>0){if(We(L)===!1){const y=L.textures,H=L.width,V=L.height;let ie=n.COLOR_BUFFER_BIT;const ne=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(L),ce=y.length>1;if(ce)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);const je=i.get(y[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,H,V,0,0,H,V,ie,n.NEAREST),l===!0&&($.length=0,O.length=0,$.push(n.COLOR_ATTACHMENT0+ye),L.depthBuffer&&L.resolveDepthBuffer===!1&&($.push(ne),O.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);const je=i.get(y[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const y=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ue(L){return Math.min(r.maxSamples,L.samples)}function We(L){const y=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Le(L){const y=o.render.frame;h.get(L)!==y&&(h.set(L,y),L.update())}function et(L,y){const H=L.colorSpace,V=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==Yt&&H!==Oi&&(Ye.getTransfer(H)===At?(V!==Cn||ie!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function De(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=E,this.setTexture2D=A,this.setTexture2DArray=D,this.setTexture3D=R,this.setTextureCube=U,this.rebindTextures=pe,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=j,this.useMultisampledRTT=We}function TS(n,e){function t(i,r=Oi){let s;const o=Ye.getTransfer(r);if(i===pi)return n.UNSIGNED_BYTE;if(i===ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bd)return n.BYTE;if(i===Ad)return n.SHORT;if(i===Fs)return n.UNSIGNED_SHORT;if(i===nc)return n.INT;if(i===nr)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===Bs)return n.HALF_FLOAT;if(i===Rd)return n.ALPHA;if(i===Cd)return n.RGB;if(i===Cn)return n.RGBA;if(i===Pd)return n.LUMINANCE;if(i===Id)return n.LUMINANCE_ALPHA;if(i===Lr)return n.DEPTH_COMPONENT;if(i===Dr)return n.DEPTH_STENCIL;if(i===sc)return n.RED;if(i===oc)return n.RED_INTEGER;if(i===Ld)return n.RG;if(i===ac)return n.RG_INTEGER;if(i===lc)return n.RGBA_INTEGER;if(i===Yo||i===qo||i===Ko||i===Zo)if(o===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===uc||i===hc||i===dc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fc||i===pc||i===mc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fc||i===pc)return o===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===mc)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gc||i===_c||i===vc||i===yc||i===xc||i===Mc||i===Sc||i===Ec||i===Tc||i===bc||i===Ac||i===wc||i===Rc||i===Cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gc)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vc)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yc)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xc)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mc)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sc)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ec)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tc)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bc)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ac)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wc)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rc)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cc)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===Pc||i===Ic)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qo)return o===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dd||i===Lc||i===Dc||i===Nc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class bS extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class un extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AS={type:"move"};class vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new un;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const wS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RS=`
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

}`;class CS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ht,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ei({vertexShader:wS,fragmentShader:RS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new Ta(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PS extends ir{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const v=new CS,p=t.getContextAttributes();let g=null,b=null;const M=[],S=[],T=new $e;let P=null;const C=new cn;C.layers.enable(1),C.viewport=new nt;const B=new cn;B.layers.enable(2),B.viewport=new nt;const K=[C,B],_=new bS;_.layers.enable(1),_.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=M[W];return j===void 0&&(j=new vu,M[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=M[W];return j===void 0&&(j=new vu,M[W]=j),j.getGripSpace()},this.getHand=function(W){let j=M[W];return j===void 0&&(j=new vu,M[W]=j),j.getHandSpace()};function w(W){const j=S.indexOf(W.inputSource);if(j===-1)return;const le=M[j];le!==void 0&&(le.update(W.inputSource,W.frame,c||o),le.dispatchEvent({type:W.type,data:W.inputSource}))}function A(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",A),r.removeEventListener("inputsourceschange",D);for(let W=0;W<M.length;W++){const j=S[W];j!==null&&(S[W]=null,M[W].disconnect(j))}E=null,z=null,v.reset(),e.setRenderTarget(g),f=null,d=null,u=null,r=null,b=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",A),r.addEventListener("inputsourceschange",D),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const j={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new rr(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let j=null,le=null,re=null;p.depth&&(re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=p.stencil?Dr:Lr,le=p.stencil?Ir:nr);const de={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(de),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new rr(d.textureWidth,d.textureHeight,{format:Cn,type:pi,depthTexture:new Mf(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function D(W){for(let j=0;j<W.removed.length;j++){const le=W.removed[j],re=S.indexOf(le);re>=0&&(S[re]=null,M[re].disconnect(le))}for(let j=0;j<W.added.length;j++){const le=W.added[j];let re=S.indexOf(le);if(re===-1){for(let pe=0;pe<M.length;pe++)if(pe>=S.length){S.push(le),re=pe;break}else if(S[pe]===null){S[pe]=le,re=pe;break}if(re===-1)break}const de=M[re];de&&de.connect(le)}}const R=new N,U=new N;function F(W,j,le){R.setFromMatrixPosition(j.matrixWorld),U.setFromMatrixPosition(le.matrixWorld);const re=R.distanceTo(U),de=j.projectionMatrix.elements,pe=le.projectionMatrix.elements,fe=de[14]/(de[10]-1),xe=de[14]/(de[10]+1),$=(de[9]+1)/de[5],O=(de[9]-1)/de[5],_e=(de[8]-1)/de[0],Ue=(pe[8]+1)/pe[0],We=fe*_e,Le=fe*Ue,et=re/(-_e+Ue),De=et*-_e;if(j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(De),W.translateZ(et),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),de[10]===-1)W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const L=fe+et,y=xe+et,H=We-De,V=Le+(re-De),ie=$*xe/y*L,ne=O*xe/y*L;W.projectionMatrix.makePerspective(H,V,ie,ne,L,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Q(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let j=W.near,le=W.far;v.texture!==null&&(v.depthNear>0&&(j=v.depthNear),v.depthFar>0&&(le=v.depthFar)),_.near=B.near=C.near=j,_.far=B.far=C.far=le,(E!==_.near||z!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,z=_.far);const re=W.parent,de=_.cameras;Q(_,re);for(let pe=0;pe<de.length;pe++)Q(de[pe],re);de.length===2?F(_,C,B):_.projectionMatrix.copy(C.projectionMatrix),k(W,_,re)};function k(W,j,le){le===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Fr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let G=null;function te(W,j){if(h=j.getViewerPose(c||o),m=j,h!==null){const le=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let re=!1;le.length!==_.cameras.length&&(_.cameras.length=0,re=!0);for(let pe=0;pe<le.length;pe++){const fe=le[pe];let xe=null;if(f!==null)xe=f.getViewport(fe);else{const O=u.getViewSubImage(d,fe);xe=O.viewport,pe===0&&(e.setRenderTargetTextures(b,O.colorTexture,d.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(b))}let $=K[pe];$===void 0&&($=new cn,$.layers.enable(pe),$.viewport=new nt,K[pe]=$),$.matrix.fromArray(fe.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(fe.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(xe.x,xe.y,xe.width,xe.height),pe===0&&(_.matrix.copy($.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),re===!0&&_.cameras.push($)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")){const pe=u.getDepthInformation(le[0]);pe&&pe.isValid&&pe.texture&&v.init(e,pe,r.renderState)}}for(let le=0;le<M.length;le++){const re=S[le],de=M[le];re!==null&&de!==void 0&&de.update(re,j,c||o)}G&&G(W,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),m=null}const ae=new ff;ae.setAnimationLoop(te),this.setAnimationLoop=function(W){G=W},this.dispose=function(){}}}const fr=new Lt,IS=new Ee;function LS(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,af(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function r(p,g,b,M,S){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(p,g):g.isMeshToonMaterial?(s(p,g),u(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g)):g.isMeshStandardMaterial?(s(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,S)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),v(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,b,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===on&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===on&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const b=e.get(g),M=b.envMap,S=b.envMapRotation;M&&(p.envMap.value=M,fr.copy(S),fr.x*=-1,fr.y*=-1,fr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),p.envMapRotation.value.setFromMatrix4(IS.makeRotationFromEuler(fr)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,b,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=M*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DS(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const S=M.program;i.uniformBlockBinding(b,S)}function c(b,M){let S=r[b.id];S===void 0&&(m(b),S=h(b),r[b.id]=S,b.addEventListener("dispose",p));const T=M.program;i.updateUBOMapping(b,T);const P=e.render.frame;s[b.id]!==P&&(d(b),s[b.id]=P)}function h(b){const M=u();b.__bindingPointIndex=M;const S=n.createBuffer(),T=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=r[b.id],S=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let P=0,C=S.length;P<C;P++){const B=Array.isArray(S[P])?S[P]:[S[P]];for(let K=0,_=B.length;K<_;K++){const E=B[K];if(f(E,P,K,T)===!0){const z=E.__offset,w=Array.isArray(E.value)?E.value:[E.value];let A=0;for(let D=0;D<w.length;D++){const R=w[D],U=v(R);typeof R=="number"||typeof R=="boolean"?(E.__data[0]=R,n.bufferSubData(n.UNIFORM_BUFFER,z+A,E.__data)):R.isMatrix3?(E.__data[0]=R.elements[0],E.__data[1]=R.elements[1],E.__data[2]=R.elements[2],E.__data[3]=0,E.__data[4]=R.elements[3],E.__data[5]=R.elements[4],E.__data[6]=R.elements[5],E.__data[7]=0,E.__data[8]=R.elements[6],E.__data[9]=R.elements[7],E.__data[10]=R.elements[8],E.__data[11]=0):(R.toArray(E.__data,A),A+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,M,S,T){const P=b.value,C=M+"_"+S;if(T[C]===void 0)return typeof P=="number"||typeof P=="boolean"?T[C]=P:T[C]=P.clone(),!0;{const B=T[C];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return T[C]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function m(b){const M=b.uniforms;let S=0;const T=16;for(let C=0,B=M.length;C<B;C++){const K=Array.isArray(M[C])?M[C]:[M[C]];for(let _=0,E=K.length;_<E;_++){const z=K[_],w=Array.isArray(z.value)?z.value:[z.value];for(let A=0,D=w.length;A<D;A++){const R=w[A],U=v(R),F=S%T,Q=F%U.boundary,k=F+Q;S+=Q,k!==0&&T-k<U.storage&&(S+=T-k),z.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=U.storage}}}const P=S%T;return P>0&&(S+=T-P),b.__size=S,b.__cache={},this}function v(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){const M=b.target;M.removeEventListener("dispose",p);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function g(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}class NS{constructor(e={}){const{canvas:t=n0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),m=new Int32Array(4);let v=null,p=null;const g=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=Di,this.toneMappingExposure=1;const M=this;let S=!1,T=0,P=0,C=null,B=-1,K=null;const _=new nt,E=new nt;let z=null;const w=new we(0);let A=0,D=t.width,R=t.height,U=1,F=null,Q=null;const k=new nt(0,0,D,R),G=new nt(0,0,D,R);let te=!1;const ae=new cu;let W=!1,j=!1;const le=new Ee,re=new Ee,de=new N,pe=new nt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function $(){return C===null?U:1}let O=i;function _e(I,Y){return t.getContext(I,Y)}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${er}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Se,!1),O===null){const Y="webgl2";if(O=_e(Y,I),O===null)throw _e(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ue,We,Le,et,De,L,y,H,V,ie,ne,ge,ce,ye,je,ue,Me,Be,Ne,Ae,ze,Xe,Et,X;function Re(){Ue=new kx(O),Ue.init(),Xe=new TS(O,Ue),We=new Dx(O,Ue,e,Xe),Le=new MS(O),We.reverseDepthBuffer&&Le.buffers.depth.setReversed(!0),et=new Hx(O),De=new oS,L=new ES(O,Ue,Le,De,We,Xe,et),y=new Ox(M),H=new Bx(M),V=new C0(O),Et=new Ix(O,V),ie=new Vx(O,V,et,Et),ne=new Wx(O,ie,V,et),Ne=new Gx(O,We,L),ue=new Nx(De),ge=new sS(M,y,H,Ue,We,Et,ue),ce=new LS(M,De),ye=new lS,je=new pS(Ue),Be=new Px(M,y,H,Le,ne,d,l),Me=new yS(M,ne,We),X=new DS(O,et,We,Le),Ae=new Lx(O,Ue,et),ze=new zx(O,Ue,et),et.programs=ge.programs,M.capabilities=We,M.extensions=Ue,M.properties=De,M.renderLists=ye,M.shadowMap=Me,M.state=Le,M.info=et}Re();const se=new PS(M,O);this.xr=se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const I=Ue.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Ue.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(I){I!==void 0&&(U=I,this.setSize(D,R,!1))},this.getSize=function(I){return I.set(D,R)},this.setSize=function(I,Y,J=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=I,R=Y,t.width=Math.floor(I*U),t.height=Math.floor(Y*U),J===!0&&(t.style.width=I+"px",t.style.height=Y+"px"),this.setViewport(0,0,I,Y)},this.getDrawingBufferSize=function(I){return I.set(D*U,R*U).floor()},this.setDrawingBufferSize=function(I,Y,J){D=I,R=Y,U=J,t.width=Math.floor(I*J),t.height=Math.floor(Y*J),this.setViewport(0,0,I,Y)},this.getCurrentViewport=function(I){return I.copy(_)},this.getViewport=function(I){return I.copy(k)},this.setViewport=function(I,Y,J,ee){I.isVector4?k.set(I.x,I.y,I.z,I.w):k.set(I,Y,J,ee),Le.viewport(_.copy(k).multiplyScalar(U).round())},this.getScissor=function(I){return I.copy(G)},this.setScissor=function(I,Y,J,ee){I.isVector4?G.set(I.x,I.y,I.z,I.w):G.set(I,Y,J,ee),Le.scissor(E.copy(G).multiplyScalar(U).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(I){Le.setScissorTest(te=I)},this.setOpaqueSort=function(I){F=I},this.setTransparentSort=function(I){Q=I},this.getClearColor=function(I){return I.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(I=!0,Y=!0,J=!0){let ee=0;if(I){let q=!1;if(C!==null){const me=C.texture.format;q=me===lc||me===ac||me===oc}if(q){const me=C.texture.type,be=me===pi||me===nr||me===Fs||me===Ir||me===ic||me===rc,Ce=Be.getClearColor(),Pe=Be.getClearAlpha(),He=Ce.r,Ge=Ce.g,Oe=Ce.b;be?(f[0]=He,f[1]=Ge,f[2]=Oe,f[3]=Pe,O.clearBufferuiv(O.COLOR,0,f)):(m[0]=He,m[1]=Ge,m[2]=Oe,m[3]=Pe,O.clearBufferiv(O.COLOR,0,m))}else ee|=O.COLOR_BUFFER_BIT}Y&&(ee|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),J&&(ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),ye.dispose(),je.dispose(),De.dispose(),y.dispose(),H.dispose(),ne.dispose(),Et.dispose(),X.dispose(),ge.dispose(),se.dispose(),se.removeEventListener("sessionstart",wl),se.removeEventListener("sessionend",Do),Pi.stop()};function he(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const I=et.autoReset,Y=Me.enabled,J=Me.autoUpdate,ee=Me.needsUpdate,q=Me.type;Re(),et.autoReset=I,Me.enabled=Y,Me.autoUpdate=J,Me.needsUpdate=ee,Me.type=q}function Se(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Qe(I){const Y=I.target;Y.removeEventListener("dispose",Qe),It(Y)}function It(I){nn(I),De.remove(I)}function nn(I){const Y=De.get(I).programs;Y!==void 0&&(Y.forEach(function(J){ge.releaseProgram(J)}),I.isShaderMaterial&&ge.releaseShaderCache(I))}this.renderBufferDirect=function(I,Y,J,ee,q,me){Y===null&&(Y=fe);const be=q.isMesh&&q.matrixWorld.determinant()<0,Ce=M_(I,Y,J,ee,q);Le.setMaterial(ee,be);let Pe=J.index,He=1;if(ee.wireframe===!0){if(Pe=ie.getWireframeAttribute(J),Pe===void 0)return;He=2}const Ge=J.drawRange,Oe=J.attributes.position;let Mt=Ge.start*He,Rt=(Ge.start+Ge.count)*He;me!==null&&(Mt=Math.max(Mt,me.start*He),Rt=Math.min(Rt,(me.start+me.count)*He)),Pe!==null?(Mt=Math.max(Mt,0),Rt=Math.min(Rt,Pe.count)):Oe!=null&&(Mt=Math.max(Mt,0),Rt=Math.min(Rt,Oe.count));const Ut=Rt-Mt;if(Ut<0||Ut===1/0)return;Et.setup(q,ee,Ce,J,Pe);let An,_t=Ae;if(Pe!==null&&(An=V.get(Pe),_t=ze,_t.setIndex(An)),q.isMesh)ee.wireframe===!0?(Le.setLineWidth(ee.wireframeLinewidth*$()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(q.isLine){let Fe=ee.linewidth;Fe===void 0&&(Fe=1),Le.setLineWidth(Fe*$()),q.isLineSegments?_t.setMode(O.LINES):q.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else q.isPoints?_t.setMode(O.POINTS):q.isSprite&&_t.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)_t.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))_t.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Fe=q._multiDrawStarts,Zt=q._multiDrawCounts,vt=q._multiDrawCount,Kn=Pe?V.get(Pe).bytesPerElement:1,Ps=De.get(ee).currentProgram.getUniforms();for(let wn=0;wn<vt;wn++)Ps.setValue(O,"_gl_DrawID",wn),_t.render(Fe[wn]/Kn,Zt[wn])}else if(q.isInstancedMesh)_t.renderInstances(Mt,Ut,q.count);else if(J.isInstancedBufferGeometry){const Fe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Zt=Math.min(J.instanceCount,Fe);_t.renderInstances(Mt,Ut,Zt)}else _t.render(Mt,Ut)};function it(I,Y,J){I.transparent===!0&&I.side===Rn&&I.forceSinglePass===!1?(I.side=on,I.needsUpdate=!0,Tr(I,Y,J),I.side=di,I.needsUpdate=!0,Tr(I,Y,J),I.side=Rn):Tr(I,Y,J)}this.compile=function(I,Y,J=null){J===null&&(J=I),p=je.get(J),p.init(Y),b.push(p),J.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),I!==J&&I.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const ee=new Set;return I.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const me=q.material;if(me)if(Array.isArray(me))for(let be=0;be<me.length;be++){const Ce=me[be];it(Ce,J,q),ee.add(Ce)}else it(me,J,q),ee.add(me)}),b.pop(),p=null,ee},this.compileAsync=function(I,Y,J=null){const ee=this.compile(I,Y,J);return new Promise(q=>{function me(){if(ee.forEach(function(be){De.get(be).currentProgram.isReady()&&ee.delete(be)}),ee.size===0){q(I);return}setTimeout(me,10)}Ue.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let rn=null;function qn(I){rn&&rn(I)}function wl(){Pi.stop()}function Do(){Pi.start()}const Pi=new ff;Pi.setAnimationLoop(qn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(I){rn=I,se.setAnimationLoop(I),I===null?Pi.stop():Pi.start()},se.addEventListener("sessionstart",wl),se.addEventListener("sessionend",Do),this.render=function(I,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(Y),Y=se.getCamera()),I.isScene===!0&&I.onBeforeRender(M,I,Y,C),p=je.get(I,b.length),p.init(Y),b.push(p),re.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ae.setFromProjectionMatrix(re),j=this.localClippingEnabled,W=ue.init(this.clippingPlanes,j),v=ye.get(I,g.length),v.init(),g.push(v),se.enabled===!0&&se.isPresenting===!0){const me=M.xr.getDepthSensingMesh();me!==null&&No(me,Y,-1/0,M.sortObjects)}No(I,Y,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(F,Q),xe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,xe&&Be.addToRenderList(v,I),this.info.render.frame++,W===!0&&ue.beginShadows();const J=p.state.shadowsArray;Me.render(J,I,Y),W===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=v.opaque,q=v.transmissive;if(p.setupLights(),Y.isArrayCamera){const me=Y.cameras;if(q.length>0)for(let be=0,Ce=me.length;be<Ce;be++){const Pe=me[be];Cl(ee,q,I,Pe)}xe&&Be.render(I);for(let be=0,Ce=me.length;be<Ce;be++){const Pe=me[be];Rl(v,I,Pe,Pe.viewport)}}else q.length>0&&Cl(ee,q,I,Y),xe&&Be.render(I),Rl(v,I,Y);C!==null&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),I.isScene===!0&&I.onAfterRender(M,I,Y),Et.resetDefaultState(),B=-1,K=null,b.pop(),b.length>0?(p=b[b.length-1],W===!0&&ue.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function No(I,Y,J,ee){if(I.visible===!1)return;if(I.layers.test(Y.layers)){if(I.isGroup)J=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Y);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ae.intersectsSprite(I)){ee&&pe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(re);const be=ne.update(I),Ce=I.material;Ce.visible&&v.push(I,be,Ce,J,pe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ae.intersectsObject(I))){const be=ne.update(I),Ce=I.material;if(ee&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),pe.copy(I.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),pe.copy(be.boundingSphere.center)),pe.applyMatrix4(I.matrixWorld).applyMatrix4(re)),Array.isArray(Ce)){const Pe=be.groups;for(let He=0,Ge=Pe.length;He<Ge;He++){const Oe=Pe[He],Mt=Ce[Oe.materialIndex];Mt&&Mt.visible&&v.push(I,be,Mt,J,pe.z,Oe)}}else Ce.visible&&v.push(I,be,Ce,J,pe.z,null)}}const me=I.children;for(let be=0,Ce=me.length;be<Ce;be++)No(me[be],Y,J,ee)}function Rl(I,Y,J,ee){const q=I.opaque,me=I.transmissive,be=I.transparent;p.setupLightsView(J),W===!0&&ue.setGlobalState(M.clippingPlanes,J),ee&&Le.viewport(_.copy(ee)),q.length>0&&Rs(q,Y,J),me.length>0&&Rs(me,Y,J),be.length>0&&Rs(be,Y,J),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Cl(I,Y,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new rr(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Bs:pi,minFilter:fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const me=p.state.transmissionRenderTarget[ee.id],be=ee.viewport||_;me.setSize(be.z,be.w);const Ce=M.getRenderTarget();M.setRenderTarget(me),M.getClearColor(w),A=M.getClearAlpha(),A<1&&M.setClearColor(16777215,.5),M.clear(),xe&&Be.render(J);const Pe=M.toneMapping;M.toneMapping=Di;const He=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),W===!0&&ue.setGlobalState(M.clippingPlanes,ee),Rs(I,J,ee),L.updateMultisampleRenderTarget(me),L.updateRenderTargetMipmap(me),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Oe=0,Mt=Y.length;Oe<Mt;Oe++){const Rt=Y[Oe],Ut=Rt.object,An=Rt.geometry,_t=Rt.material,Fe=Rt.group;if(_t.side===Rn&&Ut.layers.test(ee.layers)){const Zt=_t.side;_t.side=on,_t.needsUpdate=!0,Cs(Ut,J,ee,An,_t,Fe),_t.side=Zt,_t.needsUpdate=!0,Ge=!0}}Ge===!0&&(L.updateMultisampleRenderTarget(me),L.updateRenderTargetMipmap(me))}M.setRenderTarget(Ce),M.setClearColor(w,A),He!==void 0&&(ee.viewport=He),M.toneMapping=Pe}function Rs(I,Y,J){const ee=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,me=I.length;q<me;q++){const be=I[q],Ce=be.object,Pe=be.geometry,He=ee===null?be.material:ee,Ge=be.group;Ce.layers.test(J.layers)&&Cs(Ce,Y,J,Pe,He,Ge)}}function Cs(I,Y,J,ee,q,me){I.onBeforeRender(M,Y,J,ee,q,me),I.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),q.onBeforeRender(M,Y,J,ee,I,me),q.transparent===!0&&q.side===Rn&&q.forceSinglePass===!1?(q.side=on,q.needsUpdate=!0,M.renderBufferDirect(J,Y,ee,q,I,me),q.side=di,q.needsUpdate=!0,M.renderBufferDirect(J,Y,ee,q,I,me),q.side=Rn):M.renderBufferDirect(J,Y,ee,q,I,me),I.onAfterRender(M,Y,J,ee,q,me)}function Tr(I,Y,J){Y.isScene!==!0&&(Y=fe);const ee=De.get(I),q=p.state.lights,me=p.state.shadowsArray,be=q.state.version,Ce=ge.getParameters(I,q.state,me,Y,J),Pe=ge.getProgramCacheKey(Ce);let He=ee.programs;ee.environment=I.isMeshStandardMaterial?Y.environment:null,ee.fog=Y.fog,ee.envMap=(I.isMeshStandardMaterial?H:y).get(I.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&I.envMap===null?Y.environmentRotation:I.envMapRotation,He===void 0&&(I.addEventListener("dispose",Qe),He=new Map,ee.programs=He);let Ge=He.get(Pe);if(Ge!==void 0){if(ee.currentProgram===Ge&&ee.lightsStateVersion===be)return Il(I,Ce),Ge}else Ce.uniforms=ge.getUniforms(I),I.onBeforeCompile(Ce,M),Ge=ge.acquireProgram(Ce,Pe),He.set(Pe,Ge),ee.uniforms=Ce.uniforms;const Oe=ee.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Oe.clippingPlanes=ue.uniform),Il(I,Ce),ee.needsLights=Ll(I),ee.lightsStateVersion=be,ee.needsLights&&(Oe.ambientLightColor.value=q.state.ambient,Oe.lightProbe.value=q.state.probe,Oe.directionalLights.value=q.state.directional,Oe.directionalLightShadows.value=q.state.directionalShadow,Oe.spotLights.value=q.state.spot,Oe.spotLightShadows.value=q.state.spotShadow,Oe.rectAreaLights.value=q.state.rectArea,Oe.ltc_1.value=q.state.rectAreaLTC1,Oe.ltc_2.value=q.state.rectAreaLTC2,Oe.pointLights.value=q.state.point,Oe.pointLightShadows.value=q.state.pointShadow,Oe.hemisphereLights.value=q.state.hemi,Oe.directionalShadowMap.value=q.state.directionalShadowMap,Oe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Oe.spotShadowMap.value=q.state.spotShadowMap,Oe.spotLightMatrix.value=q.state.spotLightMatrix,Oe.spotLightMap.value=q.state.spotLightMap,Oe.pointShadowMap.value=q.state.pointShadowMap,Oe.pointShadowMatrix.value=q.state.pointShadowMatrix),ee.currentProgram=Ge,ee.uniformsList=null,Ge}function Pl(I){if(I.uniformsList===null){const Y=I.currentProgram.getUniforms();I.uniformsList=Ca.seqWithValue(Y.seq,I.uniforms)}return I.uniformsList}function Il(I,Y){const J=De.get(I);J.outputColorSpace=Y.outputColorSpace,J.batching=Y.batching,J.batchingColor=Y.batchingColor,J.instancing=Y.instancing,J.instancingColor=Y.instancingColor,J.instancingMorph=Y.instancingMorph,J.skinning=Y.skinning,J.morphTargets=Y.morphTargets,J.morphNormals=Y.morphNormals,J.morphColors=Y.morphColors,J.morphTargetsCount=Y.morphTargetsCount,J.numClippingPlanes=Y.numClippingPlanes,J.numIntersection=Y.numClipIntersection,J.vertexAlphas=Y.vertexAlphas,J.vertexTangents=Y.vertexTangents,J.toneMapping=Y.toneMapping}function M_(I,Y,J,ee,q){Y.isScene!==!0&&(Y=fe),L.resetTextureUnits();const me=Y.fog,be=ee.isMeshStandardMaterial?Y.environment:null,Ce=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Yt,Pe=(ee.isMeshStandardMaterial?H:y).get(ee.envMap||be),He=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ge=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Oe=!!J.morphAttributes.position,Mt=!!J.morphAttributes.normal,Rt=!!J.morphAttributes.color;let Ut=Di;ee.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ut=M.toneMapping);const An=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=An!==void 0?An.length:0,Fe=De.get(ee),Zt=p.state.lights;if(W===!0&&(j===!0||I!==K)){const Fn=I===K&&ee.id===B;ue.setState(ee,I,Fn)}let vt=!1;ee.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Zt.state.version||Fe.outputColorSpace!==Ce||q.isBatchedMesh&&Fe.batching===!1||!q.isBatchedMesh&&Fe.batching===!0||q.isBatchedMesh&&Fe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Fe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Fe.instancing===!1||!q.isInstancedMesh&&Fe.instancing===!0||q.isSkinnedMesh&&Fe.skinning===!1||!q.isSkinnedMesh&&Fe.skinning===!0||q.isInstancedMesh&&Fe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Fe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Fe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Fe.instancingMorph===!1&&q.morphTexture!==null||Fe.envMap!==Pe||ee.fog===!0&&Fe.fog!==me||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ue.numPlanes||Fe.numIntersection!==ue.numIntersection)||Fe.vertexAlphas!==He||Fe.vertexTangents!==Ge||Fe.morphTargets!==Oe||Fe.morphNormals!==Mt||Fe.morphColors!==Rt||Fe.toneMapping!==Ut||Fe.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,Fe.__version=ee.version);let Kn=Fe.currentProgram;vt===!0&&(Kn=Tr(ee,Y,q));let Ps=!1,wn=!1,td=!1;const kt=Kn.getUniforms(),Ki=Fe.uniforms;if(Le.useProgram(Kn.program)&&(Ps=!0,wn=!0,td=!0),ee.id!==B&&(B=ee.id,wn=!0),Ps||K!==I){We.reverseDepthBuffer?(le.copy(I.projectionMatrix),r0(le),s0(le),kt.setValue(O,"projectionMatrix",le)):kt.setValue(O,"projectionMatrix",I.projectionMatrix),kt.setValue(O,"viewMatrix",I.matrixWorldInverse);const Fn=kt.map.cameraPosition;Fn!==void 0&&Fn.setValue(O,de.setFromMatrixPosition(I.matrixWorld)),We.logarithmicDepthBuffer&&kt.setValue(O,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&kt.setValue(O,"isOrthographic",I.isOrthographicCamera===!0),K!==I&&(K=I,wn=!0,td=!0)}if(q.isSkinnedMesh){kt.setOptional(O,q,"bindMatrix"),kt.setOptional(O,q,"bindMatrixInverse");const Fn=q.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),kt.setValue(O,"boneTexture",Fn.boneTexture,L))}q.isBatchedMesh&&(kt.setOptional(O,q,"batchingTexture"),kt.setValue(O,"batchingTexture",q._matricesTexture,L),kt.setOptional(O,q,"batchingIdTexture"),kt.setValue(O,"batchingIdTexture",q._indirectTexture,L),kt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&kt.setValue(O,"batchingColorTexture",q._colorsTexture,L));const nd=J.morphAttributes;if((nd.position!==void 0||nd.normal!==void 0||nd.color!==void 0)&&Ne.update(q,J,Kn),(wn||Fe.receiveShadow!==q.receiveShadow)&&(Fe.receiveShadow=q.receiveShadow,kt.setValue(O,"receiveShadow",q.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Ki.envMap.value=Pe,Ki.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&Y.environment!==null&&(Ki.envMapIntensity.value=Y.environmentIntensity),wn&&(kt.setValue(O,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&ed(Ki,td),me&&ee.fog===!0&&ce.refreshFogUniforms(Ki,me),ce.refreshMaterialUniforms(Ki,ee,U,R,p.state.transmissionRenderTarget[I.id]),Ca.upload(O,Pl(Fe),Ki,L)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ca.upload(O,Pl(Fe),Ki,L),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&kt.setValue(O,"center",q.center),kt.setValue(O,"modelViewMatrix",q.modelViewMatrix),kt.setValue(O,"normalMatrix",q.normalMatrix),kt.setValue(O,"modelMatrix",q.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Fn=ee.uniformsGroups;for(let id=0,wP=Fn.length;id<wP;id++){const S_=Fn[id];X.update(S_,Kn),X.bind(S_,Kn)}}return Kn}function ed(I,Y){I.ambientLightColor.needsUpdate=Y,I.lightProbe.needsUpdate=Y,I.directionalLights.needsUpdate=Y,I.directionalLightShadows.needsUpdate=Y,I.pointLights.needsUpdate=Y,I.pointLightShadows.needsUpdate=Y,I.spotLights.needsUpdate=Y,I.spotLightShadows.needsUpdate=Y,I.rectAreaLights.needsUpdate=Y,I.hemisphereLights.needsUpdate=Y}function Ll(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(I,Y,J){De.get(I.texture).__webglTexture=Y,De.get(I.depthTexture).__webglTexture=J;const ee=De.get(I);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,Y){const J=De.get(I);J.__webglFramebuffer=Y,J.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(I,Y=0,J=0){C=I,T=Y,P=J;let ee=!0,q=null,me=!1,be=!1;if(I){const Pe=De.get(I);if(Pe.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(O.FRAMEBUFFER,null),ee=!1;else if(Pe.__webglFramebuffer===void 0)L.setupRenderTarget(I);else if(Pe.__hasExternalTextures)L.rebindTextures(I,De.get(I.texture).__webglTexture,De.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Oe=I.depthTexture;if(Pe.__boundDepthTexture!==Oe){if(Oe!==null&&De.has(Oe)&&(I.width!==Oe.image.width||I.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(I)}}const He=I.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(be=!0);const Ge=De.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ge[Y])?q=Ge[Y][J]:q=Ge[Y],me=!0):I.samples>0&&L.useMultisampledRTT(I)===!1?q=De.get(I).__webglMultisampledFramebuffer:Array.isArray(Ge)?q=Ge[J]:q=Ge,_.copy(I.viewport),E.copy(I.scissor),z=I.scissorTest}else _.copy(k).multiplyScalar(U).floor(),E.copy(G).multiplyScalar(U).floor(),z=te;if(Le.bindFramebuffer(O.FRAMEBUFFER,q)&&ee&&Le.drawBuffers(I,q),Le.viewport(_),Le.scissor(E),Le.setScissorTest(z),me){const Pe=De.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe.__webglTexture,J)}else if(be){const Pe=De.get(I.texture),He=Y||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pe.__webglTexture,J||0,He)}B=-1},this.readRenderTargetPixels=function(I,Y,J,ee,q,me,be){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=De.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){Le.bindFramebuffer(O.FRAMEBUFFER,Ce);try{const Pe=I.texture,He=Pe.format,Ge=Pe.type;if(!We.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=I.width-ee&&J>=0&&J<=I.height-q&&O.readPixels(Y,J,ee,q,Xe.convert(He),Xe.convert(Ge),me)}finally{const Pe=C!==null?De.get(C).__webglFramebuffer:null;Le.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(I,Y,J,ee,q,me,be){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=De.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){const Pe=I.texture,He=Pe.format,Ge=Pe.type;if(!We.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=I.width-ee&&J>=0&&J<=I.height-q){Le.bindFramebuffer(O.FRAMEBUFFER,Ce);const Oe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Oe),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),O.readPixels(Y,J,ee,q,Xe.convert(He),Xe.convert(Ge),0);const Mt=C!==null?De.get(C).__webglFramebuffer:null;Le.bindFramebuffer(O.FRAMEBUFFER,Mt);const Rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await i0(O,Rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Oe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.deleteBuffer(Oe),O.deleteSync(Rt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,Y=null,J=0){I.isTexture!==!0&&(sa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,I=arguments[1]);const ee=Math.pow(2,-J),q=Math.floor(I.image.width*ee),me=Math.floor(I.image.height*ee),be=Y!==null?Y.x:0,Ce=Y!==null?Y.y:0;L.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,be,Ce,q,me),Le.unbindTexture()},this.copyTextureToTexture=function(I,Y,J=null,ee=null,q=0){I.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,I=arguments[1],Y=arguments[2],q=arguments[3]||0,J=null);let me,be,Ce,Pe,He,Ge;J!==null?(me=J.max.x-J.min.x,be=J.max.y-J.min.y,Ce=J.min.x,Pe=J.min.y):(me=I.image.width,be=I.image.height,Ce=0,Pe=0),ee!==null?(He=ee.x,Ge=ee.y):(He=0,Ge=0);const Oe=Xe.convert(Y.format),Mt=Xe.convert(Y.type);L.setTexture2D(Y,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const Rt=O.getParameter(O.UNPACK_ROW_LENGTH),Ut=O.getParameter(O.UNPACK_IMAGE_HEIGHT),An=O.getParameter(O.UNPACK_SKIP_PIXELS),_t=O.getParameter(O.UNPACK_SKIP_ROWS),Fe=O.getParameter(O.UNPACK_SKIP_IMAGES),Zt=I.isCompressedTexture?I.mipmaps[q]:I.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Zt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Zt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pe),I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,q,He,Ge,me,be,Oe,Mt,Zt.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,q,He,Ge,Zt.width,Zt.height,Oe,Zt.data):O.texSubImage2D(O.TEXTURE_2D,q,He,Ge,me,be,Oe,Mt,Zt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Rt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ut),O.pixelStorei(O.UNPACK_SKIP_PIXELS,An),O.pixelStorei(O.UNPACK_SKIP_ROWS,_t),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Fe),q===0&&Y.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(I,Y,J=null,ee=null,q=0){I.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,I=arguments[2],Y=arguments[3],q=arguments[4]||0);let me,be,Ce,Pe,He,Ge,Oe,Mt,Rt;const Ut=I.isCompressedTexture?I.mipmaps[q]:I.image;J!==null?(me=J.max.x-J.min.x,be=J.max.y-J.min.y,Ce=J.max.z-J.min.z,Pe=J.min.x,He=J.min.y,Ge=J.min.z):(me=Ut.width,be=Ut.height,Ce=Ut.depth,Pe=0,He=0,Ge=0),ee!==null?(Oe=ee.x,Mt=ee.y,Rt=ee.z):(Oe=0,Mt=0,Rt=0);const An=Xe.convert(Y.format),_t=Xe.convert(Y.type);let Fe;if(Y.isData3DTexture)L.setTexture3D(Y,0),Fe=O.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)L.setTexture2DArray(Y,0),Fe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const Zt=O.getParameter(O.UNPACK_ROW_LENGTH),vt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Kn=O.getParameter(O.UNPACK_SKIP_PIXELS),Ps=O.getParameter(O.UNPACK_SKIP_ROWS),wn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ut.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ut.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),O.pixelStorei(O.UNPACK_SKIP_ROWS,He),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ge),I.isDataTexture||I.isData3DTexture?O.texSubImage3D(Fe,q,Oe,Mt,Rt,me,be,Ce,An,_t,Ut.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Fe,q,Oe,Mt,Rt,me,be,Ce,An,Ut.data):O.texSubImage3D(Fe,q,Oe,Mt,Rt,me,be,Ce,An,_t,Ut),O.pixelStorei(O.UNPACK_ROW_LENGTH,Zt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Kn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ps),O.pixelStorei(O.UNPACK_SKIP_IMAGES,wn),q===0&&Y.generateMipmaps&&O.generateMipmap(Fe),Le.unbindTexture()},this.initRenderTarget=function(I){De.get(I).__webglFramebuffer===void 0&&L.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?L.setTextureCube(I,0):I.isData3DTexture?L.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?L.setTexture2DArray(I,0):L.setTexture2D(I,0),Le.unbindTexture()},this.resetState=function(){T=0,P=0,C=null,Le.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bc?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===ea?"display-p3":"srgb"}}class OS extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lt,this.environmentIntensity=1,this.environmentRotation=new Lt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class US{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kc,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new N;class yu{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=zn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Gf=new N,Wf=new nt,Xf=new nt,FS=new N,$f=new Ee,Ia=new N,xu=new Qn,jf=new Ee,Mu=new ha;class Su extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sd,this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ia),this.boundingBox.expandByPoint(Ia)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ia),this.boundingSphere.expandByPoint(Ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xu.copy(this.boundingSphere),xu.applyMatrix4(r),e.ray.intersectsSphere(xu)!==!1&&(jf.copy(r).invert(),Mu.copy(e.ray).applyMatrix4(jf),!(this.boundingBox!==null&&Mu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ev?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Wf.fromBufferAttribute(r.attributes.skinIndex,e),Xf.fromBufferAttribute(r.attributes.skinWeight,e),Gf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Xf.getComponent(s);if(o!==0){const a=Wf.getComponent(s);$f.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(FS.copy(Gf).applyMatrix4($f),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class La extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yf extends Ht{constructor(e=null,t=1,i=1,r,s,o,a,l,c=an,h=an,u,d){super(null,o,a,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qf=new Ee,BS=new Ee;class ts{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ee;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:BS;qf.multiplyMatrices(a,t[s]),qf.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ts(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Yf(t,e,e,Cn,kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new La),this.bones.push(o),this.boneInverses.push(new Ee().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Eu extends lt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ns=new Ee,Kf=new Ee,Da=[],Zf=new gi,kS=new Ee,Qs=new en,Js=new Qn;class VS extends en{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Eu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,kS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ns),Zf.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(Zf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ns),Js.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(i),e.ray.intersectsSphere(Js)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ns),Kf.multiplyMatrices(i,ns),Qs.matrixWorld=Kf,Qs.raycast(e,Da);for(let o=0,a=Da.length;o<a;o++){const l=Da[o];l.instanceId=s,l.object=this,t.push(l)}Da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Eu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yf(new Float32Array(r*this.count),r,this.count,sc,kn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Hi extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Na=new N,Oa=new N,Qf=new Ee,eo=new ha,Ua=new Qn,Tu=new N,Jf=new N;class to extends at{constructor(e=new Dt,t=new Hi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Na.fromBufferAttribute(t,r-1),Oa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Na.distanceTo(Oa);e.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(r),Ua.radius+=s,e.ray.intersectsSphere(Ua)===!1)return;Qf.copy(r).invert(),eo.copy(e.ray).applyMatrix4(Qf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){const g=h.getX(v),b=h.getX(v+1),M=Fa(this,e,eo,l,g,b);M&&t.push(M)}if(this.isLineLoop){const v=h.getX(m-1),p=h.getX(f),g=Fa(this,e,eo,l,v,p);g&&t.push(g)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){const g=Fa(this,e,eo,l,v,v+1);g&&t.push(g)}if(this.isLineLoop){const v=Fa(this,e,eo,l,m-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fa(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Na.fromBufferAttribute(o,r),Oa.fromBufferAttribute(o,s),t.distanceSqToSegment(Na,Oa,Tu,Jf)>i)return;Tu.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Tu);if(!(l<e.near||l>e.far))return{distance:l,point:Jf.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const ep=new N,tp=new N;class no extends to{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ep.fromBufferAttribute(t,r),tp.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ep.distanceTo(tp);e.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zS extends to{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class np extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ip=new Ee,bu=new ha,Ba=new Qn,ka=new N;class HS extends at{constructor(e=new Dt,t=new np){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(r),Ba.radius+=s,e.ray.intersectsSphere(Ba)===!1)return;ip.copy(r).invert(),bu.copy(e.ray).applyMatrix4(ip);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,v=f;m<v;m++){const p=c.getX(m);ka.fromBufferAttribute(u,p),rp(ka,p,l,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,v=f;m<v;m++)ka.fromBufferAttribute(u,m),rp(ka,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rp(n,e,t,i,r,s,o){const a=bu.distanceSqToPoint(n);if(a<t){const l=new N;bu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class GS{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],d=i[r+1]-h,f=(o-h)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new $e:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new N,r=[],s=[],o=[],a=new N,l=new Ee;for(let f=0;f<=e;f++){const m=f/e;r[f]=this.getTangentAt(m,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Xt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Xt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],f*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}const WS={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=sp(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(i&&(s=qS(n,e,s,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let m=t;m<r;m+=t)u=n[m],d=n[m+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return io(s,o,t,a,l,f,0),o}};function sp(n,e,t,i,r){let s,o;if(r===oE(n,e,t,i)>0)for(s=e;s<t;s+=i)o=lp(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=lp(s,n[s],n[s+1],o);return o&&Va(o,o.next)&&(so(o),o=o.next),o}function pr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Va(t,t.next)||Pt(t.prev,t,t.next)===0)){if(so(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function io(n,e,t,i,r,s,o){if(!n)return;!o&&s&&eE(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?$S(n,i,r,s):XS(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),so(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=jS(pr(n),e,t),io(n,e,t,i,r,s,2)):o===2&&YS(n,e,t,i,r,s):io(pr(n),e,t,i,r,s,1);break}}}function XS(n){const e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=r<s?r<o?r:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&is(r,a,s,l,o,c,m.x,m.y)&&Pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $S(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Pt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,v=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,g=Au(f,m,e,t,i),b=Au(v,p,e,t,i);let M=n.prevZ,S=n.nextZ;for(;M&&M.z>=g&&S&&S.z<=b;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=p&&M!==r&&M!==o&&is(a,h,l,u,c,d,M.x,M.y)&&Pt(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=f&&S.x<=v&&S.y>=m&&S.y<=p&&S!==r&&S!==o&&is(a,h,l,u,c,d,S.x,S.y)&&Pt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=p&&M!==r&&M!==o&&is(a,h,l,u,c,d,M.x,M.y)&&Pt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=b;){if(S.x>=f&&S.x<=v&&S.y>=m&&S.y<=p&&S!==r&&S!==o&&is(a,h,l,u,c,d,S.x,S.y)&&Pt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function jS(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Va(r,s)&&op(r,i,i.next,s)&&ro(r,s)&&ro(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),so(i),so(i.next),i=n=s),i=i.next}while(i!==n);return pr(i)}function YS(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&iE(o,a)){let l=ap(o,a);o=pr(o,o.next),l=pr(l,l.next),io(o,e,t,i,r,s,0),io(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function qS(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=sp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(nE(c));for(r.sort(KS),s=0;s<r.length;s++)t=ZS(r[s],t);return t}function KS(n,e){return n.x-e.x}function ZS(n,e){const t=QS(n,e);if(!t)return e;const i=ap(t,n);return pr(i,i.next),pr(t,t.next)}function QS(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>i&&(i=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0,u;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&is(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),ro(t,n)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&JS(r,t)))&&(r=t,h=u)),t=t.next;while(t!==a);return r}function JS(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function eE(n,e,t,i){let r=n;do r.z===0&&(r.z=Au(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,tE(r)}function tE(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function Au(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function nE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function is(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function iE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!rE(n,e)&&(ro(n,e)&&ro(e,n)&&sE(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||Va(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Va(n,e){return n.x===e.x&&n.y===e.y}function op(n,e,t,i){const r=Ha(Pt(n,e,t)),s=Ha(Pt(n,e,i)),o=Ha(Pt(t,i,n)),a=Ha(Pt(t,i,e));return!!(r!==s&&o!==a||r===0&&za(n,t,e)||s===0&&za(n,i,e)||o===0&&za(t,n,i)||a===0&&za(t,e,i))}function za(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ha(n){return n>0?1:n<0?-1:0}function rE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&op(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ro(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function sE(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ap(n,e){const t=new wu(n.i,n.x,n.y),i=new wu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function lp(n,e,t,i){const r=new wu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function so(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function wu(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function oE(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Ru{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ru.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];cp(e),up(i,e);let o=e.length;t.forEach(cp);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,up(i,t[l]);const a=WS.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function cp(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function up(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Cu extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zs,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ei extends Cu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Pu extends Mn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zs,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class aE extends Mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zs,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ga(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function cE(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function hp(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function dp(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class oo{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class uE extends oo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nr,endingEnd:Nr}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Or:s=e,a=2*t-i;break;case Jo:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Or:o=e,l=2*i-t;break;case Jo:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(r-t),v=m*m,p=v*m,g=-d*p+2*d*v-d*m,b=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*m+1,M=(-1-f)*p+(1.5+f)*v+.5*m,S=f*p-f*v;for(let T=0;T!==a;++T)s[T]=g*o[h+T]+b*o[c+T]+M*o[l+T]+S*o[u+T];return s}}class fp extends oo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class hE extends oo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ti{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ga(t,this.TimeBufferType),this.values=Ga(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ga(e.times,Array),values:Ga(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case Oc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return Oc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&lE(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Oc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ti.prototype.TimeBufferType=Float32Array,ti.prototype.ValueBufferType=Float32Array,ti.prototype.DefaultInterpolation=Vs;class rs extends ti{constructor(e,t,i){super(e,t,i)}}rs.prototype.ValueTypeName="bool",rs.prototype.ValueBufferType=Array,rs.prototype.DefaultInterpolation=ks,rs.prototype.InterpolantFactoryMethodLinear=void 0,rs.prototype.InterpolantFactoryMethodSmooth=void 0;class pp extends ti{}pp.prototype.ValueTypeName="color";class mr extends ti{}mr.prototype.ValueTypeName="number";class dE extends oo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Ie.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ni extends ti{InterpolantFactoryMethodLinear(e){return new dE(this.times,this.values,this.getValueSize(),e)}}ni.prototype.ValueTypeName="quaternion",ni.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends ti{constructor(e,t,i){super(e,t,i)}}ss.prototype.ValueTypeName="string",ss.prototype.ValueBufferType=Array,ss.prototype.DefaultInterpolation=ks,ss.prototype.InterpolantFactoryMethodLinear=void 0,ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Ti extends ti{}Ti.prototype.ValueTypeName="vector";class os{constructor(e="",t=-1,i=[],r=Uc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(pE(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(ti.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=cE(l);l=hp(l,1,h),c=hp(c,1,h),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new mr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=r[u];d||(r[u]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,v){if(f.length!==0){const p=[],g=[];dp(f,p,g,m),p.length!==0&&v.push(new u(d,p,g))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(const v in f){const p=[],g=[];for(let b=0;b!==d[m].morphTargets.length;++b){const M=d[m];p.push(M.time),g.push(M.morphTarget===v?1:0)}r.push(new mr(".morphTargetInfluence["+v+"]",p,g))}l=f.length*o}else{const f=".bones["+t[u].name+"]";i(Ti,f+".position",d,"pos",r),i(ni,f+".quaternion",d,"rot",r),i(Ti,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fE(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mr;case"vector":case"vector2":case"vector3":case"vector4":return Ti;case"color":return pp;case"quaternion":return ni;case"bool":case"boolean":return rs;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function pE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fE(n.type);if(n.times===void 0){const t=[],i=[];dp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Gi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class mE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const gE=new mE;class bi{constructor(e){this.manager=e!==void 0?e:gE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai={};class _E extends Error{constructor(e,t){super(e),this.response=t}}class Iu extends bi{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Gi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:i,onError:r});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ai[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let v=0;const p=new ReadableStream({start(g){b();function b(){u.read().then(({done:M,value:S})=>{if(M)g.close();else{v+=S.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let P=0,C=h.length;P<C;P++){const B=h[P];B.onProgress&&B.onProgress(T)}g.enqueue(S),b()}},M=>{g.error(M)})}}});return new Response(p)}else throw new _E(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Gi.add(e,c);const h=Ai[e];delete Ai[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Ai[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class mp extends bi{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Gi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ws("img");function l(){h(),Gi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class gp extends bi{constructor(e){super(e)}load(e,t,i,r){const s=new Ht,o=new mp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Wa extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Lu=new Ee,_p=new N,vp=new N;class Du{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cu,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_p.setFromMatrixPosition(e.matrixWorld),t.position.copy(_p),vp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vp),t.updateMatrixWorld(),Lu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vE extends Du{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Fr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yp extends Wa{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new vE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xp=new Ee,ao=new N,Nu=new N;class yE extends Du{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ao.setFromMatrixPosition(e.matrixWorld),i.position.copy(ao),Nu.copy(i.position),Nu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Nu),i.updateMatrixWorld(),r.makeTranslation(-ao.x,-ao.y,-ao.z),xp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xp)}}class Ou extends Wa{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new yE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xE extends Du{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uu extends Wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new xE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mp extends Wa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class as{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ME extends bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Gi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Gi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Gi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Gi.add(e,l),s.manager.itemStart(e)}}class SE{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){Ie.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const o=this._workIndex*s;Ie.multiplyQuaternionsFlat(e,o,e,t,e,i),Ie.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[i+o]*r}}}const Fu="\\[\\]\\.:\\/",EE=new RegExp("["+Fu+"]","g"),Bu="[^"+Fu+"]",TE="[^"+Fu.replace("\\.","")+"]",bE=/((?:WC+[\/:])*)/.source.replace("WC",Bu),AE=/(WCOD+)?/.source.replace("WCOD",TE),wE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bu),RE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bu),CE=new RegExp("^"+bE+AE+wE+RE+"$"),PE=["material","materials","bones","map"];class IE{constructor(e,t,i){const r=i||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class rt{constructor(e,t,i){this.path=t,this.parsedPath=i||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,i):new rt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(EE,"")}static parseTrackName(e){const t=CE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);PE.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=IE,rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray],rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class LE{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Nr,endingEnd:Nr};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=bv,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case wv:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Uc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===Av;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===Tv){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Or,r.endingEnd=Or):(e?r.endingStart=this.zeroSlopeAtStart?Or:Nr:r.endingStart=Jo,t?r.endingEnd=this.zeroSlopeAtEnd?Or:Nr:r.endingEnd=Jo)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}}const DE=new Float32Array(1);class NE extends ir{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=r[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;m=new SE(rt.create(i,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new fp(new Float32Array(2),new Float32Array(2),1,DE),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?os.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Uc),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new LE(this,o,t,i);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?os.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class Sp{constructor(e,t,i,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class OE extends no{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Dt;r.setAttribute("position",new qt(t,3)),r.setAttribute("color",new qt(i,3));const s=new Hi({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new we,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:er}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=er);/*!
 * @pixiv/three-vrm v3.1.3
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */var Xa=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),ot=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),Ep=class extends at{constructor(n){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${n}`,this.expressionName=n,this.type="VRMExpression",this.visible=!1}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.weight?1:0:this.overrideBlink==="blend"?this.weight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.weight?1:0:this.overrideLookAt==="blend"?this.weight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.weight?1:0:this.overrideMouth==="blend"?this.weight:0}addBind(n){this._binds.push(n)}applyWeight(n){var e;let t=this.isBinary?this.weight<=.5?0:1:this.weight;t*=(e=n==null?void 0:n.multiplier)!=null?e:1,this._binds.forEach(i=>i.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(n=>n.clearAppliedWeight())}};function Tp(n,e,t){var i,r;const s=n.parser.json,o=(i=s.nodes)==null?void 0:i[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const a=o.mesh;if(a==null)return null;const l=(r=s.meshes)==null?void 0:r[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;const c=l.primitives.length,h=[];return t.traverse(u=>{h.length<c&&u.isMesh&&h.push(u)}),h}function bp(n,e){return ot(this,null,function*(){const t=yield n.parser.getDependency("node",e);return Tp(n,e,t)})}function Ap(n){return ot(this,null,function*(){const e=yield n.parser.getDependencies("node"),t=new Map;return e.forEach((i,r)=>{const s=Tp(n,r,i);s!=null&&t.set(r,s)}),t})}var ku={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function wp(n){return Math.max(Math.min(n,1),0)}var Rp=class E_{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(ku));return Object.entries(this._expressionMap).forEach(([i,r])=>{t.has(i)&&(e[i]=r)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(ku));return Object.entries(this._expressionMap).forEach(([i,r])=>{t.has(i)||(e[i]=r)}),e}copy(e){return this._expressions.concat().forEach(i=>{this.unregisterExpression(i)}),e._expressions.forEach(i=>{this.registerExpression(i)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new E_().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const i=this.getExpression(e);return(t=i==null?void 0:i.weight)!=null?t:null}setValue(e,t){const i=this.getExpression(e);i&&(i.weight=wp(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let i=1;const r=t.expressionName;this.blinkExpressionNames.indexOf(r)!==-1&&(i*=e.blink),this.lookAtExpressionNames.indexOf(r)!==-1&&(i*=e.lookAt),this.mouthExpressionNames.indexOf(r)!==-1&&(i*=e.mouth),t.applyWeight({multiplier:i})})}_calculateWeightMultipliers(){let e=1,t=1,i=1;return this._expressions.forEach(r=>{e-=r.overrideBlinkAmount,t-=r.overrideLookAtAmount,i-=r.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),i=Math.max(0,i),{blink:e,lookAt:t,mouth:i}}},lo={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",MatcapColor:"matcapColor",RimColor:"rimColor",OutlineColor:"outlineColor"},UE={_Color:lo.Color,_EmissionColor:lo.EmissionColor,_ShadeColor:lo.ShadeColor,_RimColor:lo.RimColor,_OutlineColor:lo.OutlineColor},FE=new we,Cp=class T_{constructor({material:e,type:t,targetValue:i,targetAlpha:r}){this.material=e,this.type=t,this.targetValue=i,this.targetAlpha=r??1;const s=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:s,alpha:o}}applyWeight(e){const{color:t,alpha:i}=this._state;if(t!=null){const{propertyName:r,deltaValue:s}=t,o=this.material[r];o!=null&&o.add(FE.copy(s).multiplyScalar(e))}if(i!=null){const{propertyName:r,deltaValue:s}=i;this.material[r]!=null&&(this.material[r]+=s*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:i,initialValue:r}=e,s=this.material[i];s!=null&&s.copy(r)}if(t!=null){const{propertyName:i,initialValue:r}=t;this.material[i]!=null&&(this.material[i]=r)}}_initColorBindState(){var e,t,i;const{material:r,type:s,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[s])==null?void 0:e[0])!=null?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(i=r.name)!=null?i:"(no name)"}, the type ${s} but the material or the type is not supported.`),null;const h=r[l].clone(),u=new we(o.r-h.r,o.g-h.g,o.b-h.b);return{propertyName:l,initialValue:h,deltaValue:u}}_initAlphaBindState(){var e,t,i;const{material:r,type:s,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[s])==null?void 0:e[1])!=null?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(i=r.name)!=null?i:"(no name)"}, the type ${s} but the material or the type does not support alpha.`),null;if(l==null)return null;const c=r[l],h=o-c;return{propertyName:l,initialValue:c,deltaValue:h}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(T_._propertyNameMapMap).find(([i])=>this.material[i]===!0))==null?void 0:e[1])!=null?t:null}};Cp._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var Pp=Cp,Ip=class{constructor({primitives:n,index:e,weight:t}){this.primitives=n,this.index=e,this.weight=t}applyWeight(n){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*n)})}clearAppliedWeight(){this.primitives.forEach(n=>{var e;((e=n.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(n.morphTargetInfluences[this.index]=0)})}},Lp=new $e,Dp=class b_{constructor({material:e,scale:t,offset:i}){var r,s;this.material=e,this.scale=t,this.offset=i;const o=(r=Object.entries(b_._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:r[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(s=e.name)!=null?s:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;const c=(l=e[a])==null?void 0:l.clone();if(!c)return null;e[a]=c;const h=c.offset.clone(),u=c.repeat.clone(),d=i.clone().sub(h),f=t.clone().sub(u);this._properties.push({name:a,initialOffset:h,deltaOffset:d,initialScale:u,deltaScale:f})}))}applyWeight(e){this._properties.forEach(t=>{const i=this.material[t.name];i!==void 0&&(i.offset.add(Lp.copy(t.deltaOffset).multiplyScalar(e)),i.repeat.add(Lp.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};Dp._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var Np=Dp,BE=new Set(["1.0","1.0-beta"]),Op=class A_{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return ot(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return ot(this,null,function*(){const t=yield this._v1Import(e);if(t)return t;const i=yield this._v0Import(e);return i||null})}_v1Import(e){return ot(this,null,function*(){var t,i;const r=this.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(i=r.extensions)==null?void 0:i.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!BE.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.expressions;if(!l)return null;const c=new Set(Object.values(ku)),h=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([d,f])=>{if(f!=null){if(!c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${d}" detected. Ignoring the expression`);return}h.set(d,f)}}),l.custom!=null&&Object.entries(l.custom).forEach(([d,f])=>{if(c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${d}". Ignoring the expression`);return}h.set(d,f)});const u=new Rp;return yield Promise.all(Array.from(h.entries()).map(d=>ot(this,[d],function*([f,m]){var v,p,g,b,M,S,T;const P=new Ep(f);if(e.scene.add(P),P.isBinary=(v=m.isBinary)!=null?v:!1,P.overrideBlink=(p=m.overrideBlink)!=null?p:"none",P.overrideLookAt=(g=m.overrideLookAt)!=null?g:"none",P.overrideMouth=(b=m.overrideMouth)!=null?b:"none",(M=m.morphTargetBinds)==null||M.forEach(C=>ot(this,null,function*(){var B;if(C.node===void 0||C.index===void 0)return;const K=yield bp(e,C.node),_=C.index;if(!K.every(E=>Array.isArray(E.morphTargetInfluences)&&_<E.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${m.name} attempts to index morph #${_} but not found.`);return}P.addBind(new Ip({primitives:K,index:_,weight:(B=C.weight)!=null?B:1}))})),m.materialColorBinds||m.textureTransformBinds){const C=[];e.scene.traverse(B=>{const K=B.material;K&&C.push(K)}),(S=m.materialColorBinds)==null||S.forEach(B=>ot(this,null,function*(){C.filter(_=>{var E;const z=(E=this.parser.associations.get(_))==null?void 0:E.materials;return B.material===z}).forEach(_=>{P.addBind(new Pp({material:_,type:B.type,targetValue:new we().fromArray(B.targetValue),targetAlpha:B.targetValue[3]}))})})),(T=m.textureTransformBinds)==null||T.forEach(B=>ot(this,null,function*(){C.filter(_=>{var E;const z=(E=this.parser.associations.get(_))==null?void 0:E.materials;return B.material===z}).forEach(_=>{var E,z;P.addBind(new Np({material:_,offset:new $e().fromArray((E=B.offset)!=null?E:[0,0]),scale:new $e().fromArray((z=B.scale)!=null?z:[1,1])}))})}))}u.registerExpression(P)}))),u})}_v0Import(e){return ot(this,null,function*(){var t;const i=this.parser.json,r=(t=i.extensions)==null?void 0:t.VRM;if(!r)return null;const s=r.blendShapeMaster;if(!s)return null;const o=new Rp,a=s.blendShapeGroups;if(!a)return o;const l=new Set;return yield Promise.all(a.map(c=>ot(this,null,function*(){var h;const u=c.presetName,d=u!=null&&A_.v0v1PresetNameMap[u]||null,f=d??c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${u} has duplicated entries. Ignoring the expression`);return}l.add(f);const m=new Ep(f);e.scene.add(m),m.isBinary=(h=c.isBinary)!=null?h:!1,c.binds&&c.binds.forEach(p=>ot(this,null,function*(){var g;if(p.mesh===void 0||p.index===void 0)return;const b=[];(g=i.nodes)==null||g.forEach((S,T)=>{S.mesh===p.mesh&&b.push(T)});const M=p.index;yield Promise.all(b.map(S=>ot(this,null,function*(){var T;const P=yield bp(e,S);if(!P.every(C=>Array.isArray(C.morphTargetInfluences)&&M<C.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${M}th morph but not found.`);return}m.addBind(new Ip({primitives:P,index:M,weight:.01*((T=p.weight)!=null?T:100)}))})))}));const v=c.materialValues;v&&v.length!==0&&v.forEach(p=>{if(p.materialName===void 0||p.propertyName===void 0||p.targetValue===void 0)return;const g=[];e.scene.traverse(M=>{if(M.material){const S=M.material;Array.isArray(S)?g.push(...S.filter(T=>(T.name===p.materialName||T.name===p.materialName+" (Outline)")&&g.indexOf(T)===-1)):S.name===p.materialName&&g.indexOf(S)===-1&&g.push(S)}});const b=p.propertyName;g.forEach(M=>{if(b==="_MainTex_ST"){const T=new $e(p.targetValue[0],p.targetValue[1]),P=new $e(p.targetValue[2],p.targetValue[3]);P.y=1-P.y-T.y,m.addBind(new Np({material:M,scale:T,offset:P}));return}const S=UE[b];if(S){m.addBind(new Pp({material:M,type:S,targetValue:new we().fromArray(p.targetValue),targetAlpha:p.targetValue[3]}));return}console.warn(b+" is not supported")})}),o.registerExpression(m)}))),o})}};Op.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var kE=Op,Vu=class Is{constructor(e,t){this._firstPersonOnlyLayer=Is.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Is.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new Is(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Is.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=Is.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(i=>{i.meshes.forEach(r=>{i.type==="firstPersonOnly"?(r.layers.set(this._firstPersonOnlyLayer),r.traverse(s=>s.layers.set(this._firstPersonOnlyLayer))):i.type==="thirdPersonOnly"?(r.layers.set(this._thirdPersonOnlyLayer),r.traverse(s=>s.layers.set(this._thirdPersonOnlyLayer))):i.type==="auto"&&this._createHeadlessModel(r)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,i,r){let s=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){const a=e[o],l=e[o+1],c=e[o+2],h=t[a],u=i[a];if(h[0]>0&&r.includes(u[0])||h[1]>0&&r.includes(u[1])||h[2]>0&&r.includes(u[2])||h[3]>0&&r.includes(u[3]))continue;const d=t[l],f=i[l];if(d[0]>0&&r.includes(f[0])||d[1]>0&&r.includes(f[1])||d[2]>0&&r.includes(f[2])||d[3]>0&&r.includes(f[3]))continue;const m=t[c],v=i[c];m[0]>0&&r.includes(v[0])||m[1]>0&&r.includes(v[1])||m[2]>0&&r.includes(v[2])||m[3]>0&&r.includes(v[3])||(e[s++]=a,e[s++]=l,e[s++]=c)}return s}_createErasedMesh(e,t){const i=new Su(e.geometry.clone(),e.material);i.name=`${e.name}(erase)`,i.frustumCulled=e.frustumCulled,i.layers.set(this._firstPersonOnlyLayer);const r=i.geometry,s=r.getAttribute("skinIndex"),o=s instanceof Sp?[]:s.array,a=[];for(let v=0;v<o.length;v+=4)a.push([o[v],o[v+1],o[v+2],o[v+3]]);const l=r.getAttribute("skinWeight"),c=l instanceof Sp?[]:l.array,h=[];for(let v=0;v<c.length;v+=4)h.push([c[v],c[v+1],c[v+2],c[v+3]]);const u=r.getIndex();if(!u)throw new Error("The geometry doesn't have an index buffer");const d=Array.from(u.array),f=this._excludeTriangles(d,h,a,t),m=[];for(let v=0;v<f;v++)m[v]=d[v];return r.setIndex(m),e.onBeforeRender&&(i.onBeforeRender=e.onBeforeRender),i.bind(new ts(e.skeleton.bones,e.skeleton.boneInverses),new Ee),i}_createHeadlessModelForSkinnedMesh(e,t){const i=[];if(t.skeleton.bones.forEach((s,o)=>{this._isEraseTarget(s)&&i.push(o)}),!i.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const r=this._createErasedMesh(t,i);e.add(r)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new un;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(i=>i.type==="SkinnedMesh").forEach(i=>{const r=i;this._createHeadlessModelForSkinnedMesh(t,r)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};Vu.DEFAULT_FIRSTPERSON_ONLY_LAYER=9,Vu.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var Up=Vu,VE=new Set(["1.0","1.0-beta"]),zE=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(n){this.parser=n}afterRoot(n){return ot(this,null,function*(){const e=n.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");n.userData.vrmFirstPerson=yield this._import(n,e)}})}_import(n,e){return ot(this,null,function*(){if(e==null)return null;const t=yield this._v1Import(n,e);if(t)return t;const i=yield this._v0Import(n,e);return i||null})}_v1Import(n,e){return ot(this,null,function*(){var t,i;const r=this.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(i=r.extensions)==null?void 0:i.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!VE.has(a))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.firstPerson;if(!l)return null;const c=[],h=yield Ap(n);return Array.from(h.entries()).forEach(([u,d])=>{var f;const m=l.meshAnnotations?l.meshAnnotations.find(v=>v.node===u):void 0;c.push({meshes:d,type:(f=m==null?void 0:m.type)!=null?f:"both"})}),new Up(e,c)})}_v0Import(n,e){return ot(this,null,function*(){var t;const i=this.parser.json,r=(t=i.extensions)==null?void 0:t.VRM;if(!r)return null;const s=r.firstPerson;if(!s)return null;const o=[],a=yield Ap(n);return Array.from(a.entries()).forEach(([l,c])=>{const h=i.nodes[l],u=s.meshAnnotations?s.meshAnnotations.find(d=>d.mesh===h.mesh):void 0;o.push({meshes:c,type:this._convertV0FlagToV1Type(u==null?void 0:u.firstPersonFlag)})}),new Up(e,o)})}_convertV0FlagToV1Type(n){return n==="FirstPersonOnly"?"firstPersonOnly":n==="ThirdPersonOnly"?"thirdPersonOnly":n==="Auto"?"auto":"both"}},Fp=new N,Bp=new N,HE=new Ie,kp=class extends un{constructor(n){super(),this.vrmHumanoid=n,this._boneAxesMap=new Map,Object.values(n.humanBones).forEach(e=>{const t=new OE(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(n=>{n.geometry.dispose(),n.material.dispose()})}updateMatrixWorld(n){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(Fp,HE,Bp);const i=Fp.set(.1,.1,.1).divide(Bp);t.matrix.copy(e.node.matrixWorld).scale(i)}),super.updateMatrixWorld(n)}},zu=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],GE={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function Vp(n){return n.invert?n.invert():n.inverse(),n}var gr=new N,_r=new Ie,Hu=class{constructor(n){this.humanBones=n,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const n={};return Object.keys(this.humanBones).forEach(e=>{const t=e,i=this.getBoneNode(t);i&&(gr.copy(i.position),_r.copy(i.quaternion),n[t]={position:gr.toArray(),rotation:_r.toArray()})}),n}getPose(){const n={};return Object.keys(this.humanBones).forEach(e=>{const t=e,i=this.getBoneNode(t);if(!i)return;gr.set(0,0,0),_r.identity();const r=this.restPose[t];r!=null&&r.position&&gr.fromArray(r.position).negate(),r!=null&&r.rotation&&Vp(_r.fromArray(r.rotation)),gr.add(i.position),_r.premultiply(i.quaternion),n[t]={position:gr.toArray(),rotation:_r.toArray()}}),n}setPose(n){Object.entries(n).forEach(([e,t])=>{const i=e,r=this.getBoneNode(i);if(!r)return;const s=this.restPose[i];s&&(t!=null&&t.position&&(r.position.fromArray(t.position),s.position&&r.position.add(gr.fromArray(s.position))),t!=null&&t.rotation&&(r.quaternion.fromArray(t.rotation),s.rotation&&r.quaternion.multiply(_r.fromArray(s.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([n,e])=>{const t=this.getBoneNode(n);t&&(e!=null&&e.position&&t.position.fromArray(e.position),e!=null&&e.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(n){var e;return(e=this.humanBones[n])!=null?e:void 0}getBoneNode(n){var e,t;return(t=(e=this.humanBones[n])==null?void 0:e.node)!=null?t:null}},Gu=new N,WE=new Ie,XE=new N,zp=class w_ extends Hu{static _setupTransforms(e){const t=new at;t.name="VRMHumanoidRig";const i={},r={},s={};zu.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const h=new N,u=new Ie;c.updateWorldMatrix(!0,!1),c.matrixWorld.decompose(h,u,Gu),i[a]=h,r[a]=c.quaternion.clone();const d=new Ie;(l=c.parent)==null||l.matrixWorld.decompose(Gu,d,Gu),s[a]=d}});const o={};return zu.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const h=i[a];let u=a,d;for(;d==null&&(u=GE[u],u!=null);)d=i[u];const f=new at;f.name="Normalized_"+c.name,(u?(l=o[u])==null?void 0:l.node:t).add(f),f.position.copy(h),d&&f.position.sub(d),o[a]={node:f}}}),{rigBones:o,root:t,parentWorldRotations:s,boneRotations:r}}constructor(e){const{rigBones:t,root:i,parentWorldRotations:r,boneRotations:s}=w_._setupTransforms(e);super(t),this.original=e,this.root=i,this._parentWorldRotations=r,this._boneRotations=s}update(){zu.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const i=this.getBoneNode(e),r=this._parentWorldRotations[e],s=WE.copy(r).invert(),o=this._boneRotations[e];if(t.quaternion.copy(i.quaternion).multiply(r).premultiply(s).multiply(o),e==="hips"){const a=i.getWorldPosition(XE);t.parent.updateWorldMatrix(!0,!1);const l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}},Hp=class R_{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var i;this.autoUpdateHumanBones=(i=t==null?void 0:t.autoUpdateHumanBones)!=null?i:!0,this._rawHumanBones=new Hu(e),this._normalizedHumanBones=new zp(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new Hu(e.humanBones),this._normalizedHumanBones=new zp(this._rawHumanBones),this}clone(){return new R_(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},$E={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},jE=new Set(["1.0","1.0-beta"]),Gp={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},YE=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(n,e){this.parser=n,this.helperRoot=e==null?void 0:e.helperRoot,this.autoUpdateHumanBones=e==null?void 0:e.autoUpdateHumanBones}afterRoot(n){return ot(this,null,function*(){n.userData.vrmHumanoid=yield this._import(n)})}_import(n){return ot(this,null,function*(){const e=yield this._v1Import(n);if(e)return e;const t=yield this._v0Import(n);return t||null})}_v1Import(n){return ot(this,null,function*(){var e,t;const i=this.parser.json;if(!(((e=i.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const s=(t=i.extensions)==null?void 0:t.VRMC_vrm;if(!s)return null;const o=s.specVersion;if(!jE.has(o))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;const a=s.humanoid;if(!a)return null;const l=a.humanBones.leftThumbIntermediate!=null||a.humanBones.rightThumbIntermediate!=null,c={};a.humanBones!=null&&(yield Promise.all(Object.entries(a.humanBones).map(u=>ot(this,[u],function*([d,f]){let m=d;const v=f.node;if(l){const g=Gp[m];g!=null&&(m=g)}const p=yield this.parser.getDependency("node",v);if(p==null){console.warn(`A glTF node bound to the humanoid bone ${m} (index = ${v}) does not exist`);return}c[m]={node:p}}))));const h=new Hp(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(n.scene.add(h.normalizedHumanBonesRoot),this.helperRoot){const u=new kp(h);this.helperRoot.add(u),u.renderOrder=this.helperRoot.renderOrder}return h})}_v0Import(n){return ot(this,null,function*(){var e;const i=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!i)return null;const r=i.humanoid;if(!r)return null;const s={};r.humanBones!=null&&(yield Promise.all(r.humanBones.map(a=>ot(this,null,function*(){const l=a.bone,c=a.node;if(l==null||c==null)return;const h=yield this.parser.getDependency("node",c);if(h==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}const u=Gp[l],d=u??l;if(s[d]!=null){console.warn(`Multiple bone entries for ${d} detected (index = ${c}), ignoring duplicated entries.`);return}s[d]={node:h}}))));const o=new Hp(this._ensureRequiredBonesExist(s),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(n.scene.add(o.normalizedHumanBonesRoot),this.helperRoot){const a=new kp(o);this.helperRoot.add(a),a.renderOrder=this.helperRoot.renderOrder}return o})}_ensureRequiredBonesExist(n){const e=Object.values($E).filter(t=>n[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return n}},Wp=class extends Dt{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new lt(new Float32Array(65*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new lt(new Uint16Array(3*63),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,n=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,n=!0),n&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let n=0;n<64;n++){const e=n/63*this._currentTheta;this._attrPos.setXYZ(n+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<63;n++)this._attrIndex.setXYZ(n*3,0,n+1,n+2);this._attrIndex.needsUpdate=!0}},qE=class extends Dt{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new N,this._currentTail=new N,this._attrPos=new lt(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new lt(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,n=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),n=!0),n&&this._buildPosition()}_buildPosition(){for(let n=0;n<32;n++){const e=n/16*Math.PI;this._attrPos.setXYZ(n,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+n,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+n,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(64+n*2,32+n,32+e),this._attrIndex.setXY(128+n*2,64+n,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},$a=new Ie,Xp=new Ie,co=new N,$p=new N,jp=Math.sqrt(2)/2,KE=new Ie(0,0,-jp,jp),ZE=new N(0,1,0),QE=class extends un{constructor(n){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=n;{const e=new Wp;e.radius=.5;const t=new Si({color:65280,transparent:!0,opacity:.5,side:Rn,depthTest:!1,depthWrite:!1});this._meshPitch=new en(e,t),this.add(this._meshPitch)}{const e=new Wp;e.radius=.5;const t=new Si({color:16711680,transparent:!0,opacity:.5,side:Rn,depthTest:!1,depthWrite:!1});this._meshYaw=new en(e,t),this.add(this._meshYaw)}{const e=new qE;e.radius=.1;const t=new Hi({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new no(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(n){const e=tt.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();const t=tt.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(co),this.vrmLookAt.getLookAtWorldQuaternion($a),$a.multiply(this.vrmLookAt.getFaceFrontQuaternion(Xp)),this._meshYaw.position.copy(co),this._meshYaw.quaternion.copy($a),this._meshPitch.position.copy(co),this._meshPitch.quaternion.copy($a),this._meshPitch.quaternion.multiply(Xp.setFromAxisAngle(ZE,e)),this._meshPitch.quaternion.multiply(KE);const{target:i,autoUpdate:r}=this.vrmLookAt;i!=null&&r&&(i.getWorldPosition($p).sub(co),this._lineTarget.geometry.tail.copy($p),this._lineTarget.geometry.update(),this._lineTarget.position.copy(co)),super.updateMatrixWorld(n)}},JE=new N,eT=new N;function Wu(n,e){return n.matrixWorld.decompose(JE,e,eT),e}function ja(n){return[Math.atan2(-n.z,n.x),Math.atan2(n.y,Math.sqrt(n.x*n.x+n.z*n.z))]}function Yp(n){const e=Math.round(n/2/Math.PI);return n-2*Math.PI*e}var qp=new N(0,0,1),tT=new N,nT=new N,iT=new N,rT=new Ie,Xu=new Ie,Kp=new Ie,sT=new Ie,$u=new Lt,Zp=class C_{constructor(e,t){this.offsetFromHeadBone=new N,this.autoUpdate=!0,this.faceFront=new N(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new Ie)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new Lt)}getEuler(e){return e.set(tt.DEG2RAD*this._pitch,tt.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new C_(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return Wu(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(qp)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,i]=ja(this.faceFront);return $u.set(0,.5*Math.PI+t,i,"YZX"),e.setFromEuler($u).premultiply(sT.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(Xu),this.getFaceFrontQuaternion(Kp),e.copy(qp).applyQuaternion(Xu).applyQuaternion(Kp).applyEuler(this.getEuler($u))}lookAt(e){const t=rT.copy(this._restHeadWorldQuaternion).multiply(Vp(this.getLookAtWorldQuaternion(Xu))),i=this.getLookAtWorldPosition(nT),r=iT.copy(e).sub(i).applyQuaternion(t).normalize(),[s,o]=ja(this.faceFront),[a,l]=ja(r),c=Yp(a-s),h=Yp(o-l);this._yaw=tt.RAD2DEG*c,this._pitch=tt.RAD2DEG*h,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(tT)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};Zp.EULER_ORDER="YXZ";var oT=Zp,aT=new N(0,0,1),ii=new Ie,ls=new Ie,In=new Lt(0,0,0,"YXZ"),Ya=class{constructor(n,e,t,i,r){this.humanoid=n,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=r,this.faceFront=new N(0,0,1),this._restQuatLeftEye=new Ie,this._restQuatRightEye=new Ie,this._restLeftEyeParentWorldQuat=new Ie,this._restRightEyeParentWorldQuat=new Ie;const s=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");s&&(this._restQuatLeftEye.copy(s.quaternion),Wu(s.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),Wu(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(n,e){const t=this.humanoid.getRawBoneNode("leftEye"),i=this.humanoid.getRawBoneNode("rightEye"),r=this.humanoid.getNormalizedBoneNode("leftEye"),s=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?In.x=-tt.DEG2RAD*this.rangeMapVerticalDown.map(-e):In.x=tt.DEG2RAD*this.rangeMapVerticalUp.map(e),n<0?In.y=-tt.DEG2RAD*this.rangeMapHorizontalInner.map(-n):In.y=tt.DEG2RAD*this.rangeMapHorizontalOuter.map(n),ii.setFromEuler(In),this._getWorldFaceFrontQuat(ls),r.quaternion.copy(ls).multiply(ii).multiply(ls.invert()),ii.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(r.quaternion).multiply(ii).premultiply(ii.invert()).multiply(this._restQuatLeftEye)),i&&(e<0?In.x=-tt.DEG2RAD*this.rangeMapVerticalDown.map(-e):In.x=tt.DEG2RAD*this.rangeMapVerticalUp.map(e),n<0?In.y=-tt.DEG2RAD*this.rangeMapHorizontalOuter.map(-n):In.y=tt.DEG2RAD*this.rangeMapHorizontalInner.map(n),ii.setFromEuler(In),this._getWorldFaceFrontQuat(ls),s.quaternion.copy(ls).multiply(ii).multiply(ls.invert()),ii.copy(this._restRightEyeParentWorldQuat),i.quaternion.copy(s.quaternion).multiply(ii).premultiply(ii.invert()).multiply(this._restQuatRightEye))}lookAt(n){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=tt.RAD2DEG*n.y,t=tt.RAD2DEG*n.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(n){if(this.faceFront.distanceToSquared(aT)<.01)return n.identity();const[e,t]=ja(this.faceFront);return In.set(0,.5*Math.PI+e,t,"YZX"),n.setFromEuler(In)}};Ya.type="bone";var ju=class{constructor(n,e,t,i,r){this.expressions=n,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=r}applyYawPitch(n,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),n<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-n))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(n)))}lookAt(n){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=tt.RAD2DEG*n.y,t=tt.RAD2DEG*n.x;this.applyYawPitch(e,t)}};ju.type="expression";var Qp=class{constructor(n,e){this.inputMaxValue=n,this.outputScale=e}map(n){return this.outputScale*wp(n/this.inputMaxValue)}},lT=new Set(["1.0","1.0-beta"]),qa=.01,cT=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(n,e){this.parser=n,this.helperRoot=e==null?void 0:e.helperRoot}afterRoot(n){return ot(this,null,function*(){const e=n.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const t=n.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");n.userData.vrmLookAt=yield this._import(n,e,t)}})}_import(n,e,t){return ot(this,null,function*(){if(e==null||t==null)return null;const i=yield this._v1Import(n,e,t);if(i)return i;const r=yield this._v0Import(n,e,t);return r||null})}_v1Import(n,e,t){return ot(this,null,function*(){var i,r,s;const o=this.parser.json;if(!(((i=o.extensionsUsed)==null?void 0:i.indexOf("VRMC_vrm"))!==-1))return null;const l=(r=o.extensions)==null?void 0:r.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!lT.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const h=l.lookAt;if(!h)return null;const u=h.type==="expression"?1:10,d=this._v1ImportRangeMap(h.rangeMapHorizontalInner,u),f=this._v1ImportRangeMap(h.rangeMapHorizontalOuter,u),m=this._v1ImportRangeMap(h.rangeMapVerticalDown,u),v=this._v1ImportRangeMap(h.rangeMapVerticalUp,u);let p;h.type==="expression"?p=new ju(t,d,f,m,v):p=new Ya(e,d,f,m,v);const g=this._importLookAt(e,p);return g.offsetFromHeadBone.fromArray((s=h.offsetFromHeadBone)!=null?s:[0,.06,0]),g})}_v1ImportRangeMap(n,e){var t,i;let r=(t=n==null?void 0:n.inputMaxValue)!=null?t:90;const s=(i=n==null?void 0:n.outputScale)!=null?i:e;return r<qa&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),r=qa),new Qp(r,s)}_v0Import(n,e,t){return ot(this,null,function*(){var i,r,s,o;const l=(i=this.parser.json.extensions)==null?void 0:i.VRM;if(!l)return null;const c=l.firstPerson;if(!c)return null;const h=c.lookAtTypeName==="BlendShape"?1:10,u=this._v0ImportDegreeMap(c.lookAtHorizontalInner,h),d=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,h),f=this._v0ImportDegreeMap(c.lookAtVerticalDown,h),m=this._v0ImportDegreeMap(c.lookAtVerticalUp,h);let v;c.lookAtTypeName==="BlendShape"?v=new ju(t,u,d,f,m):v=new Ya(e,u,d,f,m);const p=this._importLookAt(e,v);return c.firstPersonBoneOffset?p.offsetFromHeadBone.set((r=c.firstPersonBoneOffset.x)!=null?r:0,(s=c.firstPersonBoneOffset.y)!=null?s:.06,-((o=c.firstPersonBoneOffset.z)!=null?o:0)):p.offsetFromHeadBone.set(0,.06,0),p.faceFront.set(0,0,-1),v instanceof Ya&&v.faceFront.set(0,0,-1),p})}_v0ImportDegreeMap(n,e){var t,i;const r=n==null?void 0:n.curve;JSON.stringify(r)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let s=(t=n==null?void 0:n.xRange)!=null?t:90;const o=(i=n==null?void 0:n.yRange)!=null?i:e;return s<qa&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),s=qa),new Qp(s,o)}_importLookAt(n,e){const t=new oT(n,e);if(this.helperRoot){const i=new QE(t);this.helperRoot.add(i),i.renderOrder=this.helperRoot.renderOrder}return t}};function uT(n,e){return typeof n!="string"||n===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(n)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(n)||/^data:.*,.*$/i.test(n)||/^blob:.*$/i.test(n)?n:e+n)}var hT=new Set(["1.0","1.0-beta"]),dT=class{get name(){return"VRMMetaLoaderPlugin"}constructor(n,e){var t,i,r;this.parser=n,this.needThumbnailImage=(t=e==null?void 0:e.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(i=e==null?void 0:e.acceptLicenseUrls)!=null?i:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(r=e==null?void 0:e.acceptV0Meta)!=null?r:!0}afterRoot(n){return ot(this,null,function*(){n.userData.vrmMeta=yield this._import(n)})}_import(n){return ot(this,null,function*(){const e=yield this._v1Import(n);if(e!=null)return e;const t=yield this._v0Import(n);return t??null})}_v1Import(n){return ot(this,null,function*(){var e,t,i;const r=this.parser.json;if(!(((e=r.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const o=(t=r.extensions)==null?void 0:t.VRMC_vrm;if(o==null)return null;const a=o.specVersion;if(!hT.has(a))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.meta;if(!l)return null;const c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let u;return this.needThumbnailImage&&l.thumbnailImage!=null&&(u=(i=yield this._extractGLTFImage(l.thumbnailImage))!=null?i:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:u,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(n){return ot(this,null,function*(){var e;const i=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!i)return null;const r=i.meta;if(!r)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let s;return this.needThumbnailImage&&r.texture!=null&&r.texture!==-1&&(s=yield this.parser.getDependency("texture",r.texture)),{metaVersion:"0",allowedUserName:r.allowedUserName,author:r.author,commercialUssageName:r.commercialUssageName,contactInformation:r.contactInformation,licenseName:r.licenseName,otherLicenseUrl:r.otherLicenseUrl,otherPermissionUrl:r.otherPermissionUrl,reference:r.reference,sexualUssageName:r.sexualUssageName,texture:s??void 0,title:r.title,version:r.version,violentUssageName:r.violentUssageName}})}_extractGLTFImage(n){return ot(this,null,function*(){var e;const i=(e=this.parser.json.images)==null?void 0:e[n];if(i==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${n}] of glTF as a thumbnail but the image doesn't exist`),null;let r=i.uri;if(i.bufferView!=null){const o=yield this.parser.getDependency("bufferView",i.bufferView),a=new Blob([o],{type:i.mimeType});r=URL.createObjectURL(a)}return r==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${n}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new mp().loadAsync(uT(r,this.parser.options.path)).catch(o=>(console.error(o),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},fT=class{constructor(n){this.scene=n.scene,this.meta=n.meta,this.humanoid=n.humanoid,this.expressionManager=n.expressionManager,this.firstPerson=n.firstPerson,this.lookAt=n.lookAt}update(n){this.humanoid.update(),this.lookAt&&this.lookAt.update(n),this.expressionManager&&this.expressionManager.update()}},pT=class extends fT{constructor(n){super(n),this.materials=n.materials,this.springBoneManager=n.springBoneManager,this.nodeConstraintManager=n.nodeConstraintManager}update(n){super.update(n),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(n),this.materials&&this.materials.forEach(e=>{e.update&&e.update(n)})}},mT=Object.defineProperty,Jp=Object.getOwnPropertySymbols,gT=Object.prototype.hasOwnProperty,_T=Object.prototype.propertyIsEnumerable,em=(n,e,t)=>e in n?mT(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,tm=(n,e)=>{for(var t in e||(e={}))gT.call(e,t)&&em(n,t,e[t]);if(Jp)for(var t of Jp(e))_T.call(e,t)&&em(n,t,e[t]);return n},vr=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),vT={"":3e3,srgb:3001};function yT(n,e){parseInt(er,10)>=152?n.colorSpace=e:n.encoding=vT[e]}var xT=class{get pending(){return Promise.all(this._pendings)}constructor(n,e){this._parser=n,this._materialParams=e,this._pendings=[]}assignPrimitive(n,e){e!=null&&(this._materialParams[n]=e)}assignColor(n,e,t){e!=null&&(this._materialParams[n]=new we().fromArray(e),t&&this._materialParams[n].convertSRGBToLinear())}assignTexture(n,e,t){return vr(this,null,function*(){const i=vr(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,n,e),t&&yT(this._materialParams[n],"srgb"))});return this._pendings.push(i),i})}assignTextureByIndex(n,e,t){return vr(this,null,function*(){return this.assignTexture(n,e!=null?{index:e}:void 0,t)})}},MT=`// #define PHONG

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

}`,ST=`// #define PHONG

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
`,ET={None:"none",Normal:"normal",LitShadeRate:"litShadeRate",UV:"uv"},nm={None:"none",WorldCoordinates:"worldCoordinates",ScreenCoordinates:"screenCoordinates"},TT={3e3:"",3001:"srgb"};function Yu(n){return parseInt(er,10)>=152?n.colorSpace:TT[n.encoding]}var bT=class extends Ei{constructor(n={}){var e;super({vertexShader:MT,fragmentShader:ST}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=zs,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=ET.None,this._outlineWidthMode=nm.None,this._isOutline=!1,n.transparentWithZWrite&&(n.depthWrite=!0),delete n.transparentWithZWrite,n.fog=!0,n.lights=!0,n.clipping=!0,this.uniforms=lf.merge([ve.common,ve.normalmap,ve.emissivemap,ve.fog,ve.lights,{litFactor:{value:new we(1,1,1)},mapUvTransform:{value:new ke},colorAlpha:{value:1},normalMapUvTransform:{value:new ke},shadeColorFactor:{value:new we(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new ke},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new ke},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new we(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new ke},parametricRimColorFactor:{value:new we(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new ke},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new we(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new ke},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new ke},outlineWidthFactor:{value:0},outlineColorFactor:{value:new we(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new ke},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=n.uniforms)!=null?e:{}]),this.setValues(n),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,i])=>`${t}:${i}`),this.matcapTexture?`matcapTextureColorSpace:${Yu(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${Yu(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${Yu(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{const i=parseInt(er,10),r=Object.entries(tm(tm({},this._generateDefines()),this.defines)).filter(([s,o])=>!!o).map(([s,o])=>`#define ${s} ${o}`).join(`
`)+`
`;t.vertexShader=r+t.vertexShader,t.fragmentShader=r+t.fragmentShader,i<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(n){this.uniforms.litFactor.value=n}get map(){return this.uniforms.map.value}set map(n){this.uniforms.map.value=n}get normalMap(){return this.uniforms.normalMap.value}set normalMap(n){this.uniforms.normalMap.value=n}get normalScale(){return this.uniforms.normalScale.value}set normalScale(n){this.uniforms.normalScale.value=n}get emissive(){return this.uniforms.emissive.value}set emissive(n){this.uniforms.emissive.value=n}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(n){this.uniforms.emissiveIntensity.value=n}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(n){this.uniforms.emissiveMap.value=n}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(n){this.uniforms.shadeColorFactor.value=n}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(n){this.uniforms.shadeMultiplyTexture.value=n}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(n){this.uniforms.shadingShiftFactor.value=n}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(n){this.uniforms.shadingShiftTexture.value=n}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(n){this.uniforms.shadingShiftTextureScale.value=n}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(n){this.uniforms.shadingToonyFactor.value=n}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(n){this.uniforms.giEqualizationFactor.value=n}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(n){this.uniforms.matcapFactor.value=n}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(n){this.uniforms.matcapTexture.value=n}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(n){this.uniforms.parametricRimColorFactor.value=n}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(n){this.uniforms.rimMultiplyTexture.value=n}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(n){this.uniforms.rimLightingMixFactor.value=n}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(n){this.uniforms.parametricRimFresnelPowerFactor.value=n}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(n){this.uniforms.parametricRimLiftFactor.value=n}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(n){this.uniforms.outlineWidthMultiplyTexture.value=n}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(n){this.uniforms.outlineWidthFactor.value=n}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(n){this.uniforms.outlineColorFactor.value=n}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(n){this.uniforms.outlineLightingMixFactor.value=n}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(n){this.uniforms.uvAnimationMaskTexture.value=n}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(n){this.uniforms.uvAnimationScrollXOffset.value=n}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(n){this.uniforms.uvAnimationScrollYOffset.value=n}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(n){this.uniforms.uvAnimationRotationPhase.value=n}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(n){this._ignoreVertexColor=n,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(n){this._v0CompatShade=n,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(n){this._debugMode=n,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(n){this._outlineWidthMode=n,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(n){this._isOutline=n,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(n){this._uploadUniformsWorkaround(),this._updateUVAnimation(n)}copy(n){return super.copy(n),this.map=n.map,this.normalMap=n.normalMap,this.emissiveMap=n.emissiveMap,this.shadeMultiplyTexture=n.shadeMultiplyTexture,this.shadingShiftTexture=n.shadingShiftTexture,this.matcapTexture=n.matcapTexture,this.rimMultiplyTexture=n.rimMultiplyTexture,this.outlineWidthMultiplyTexture=n.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=n.uvAnimationMaskTexture,this.normalMapType=n.normalMapType,this.uvAnimationScrollXSpeedFactor=n.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=n.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=n.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=n.ignoreVertexColor,this.v0CompatShade=n.v0CompatShade,this.debugMode=n.debugMode,this.outlineWidthMode=n.outlineWidthMode,this.isOutline=n.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(n){this.uniforms.uvAnimationScrollXOffset.value+=n*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=n*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=n*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){const n=parseInt(er,10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:n,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===nm.ScreenCoordinates}}_updateTextureMatrix(n,e){n.value&&(n.value.matrixAutoUpdate&&n.value.updateMatrix(),e.value.copy(n.value.matrix))}},AT=new Set(["1.0","1.0-beta"]),im=class Dl{get name(){return Dl.EXTENSION_NAME}constructor(e,t={}){var i,r,s,o;this.parser=e,this.materialType=(i=t.materialType)!=null?i:bT,this.renderOrderOffset=(r=t.renderOrderOffset)!=null?r:0,this.v0CompatShade=(s=t.v0CompatShade)!=null?s:!1,this.debugMode=(o=t.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return vr(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return vr(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){const i=this._getMToonExtension(e);return i?this._extendMaterialParams(i,t):null}loadMesh(e){return vr(this,null,function*(){var t;const i=this.parser,s=(t=i.json.meshes)==null?void 0:t[e];if(s==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const o=s.primitives,a=yield i.loadMesh(e);if(o.length===1){const l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{const l=a;for(let c=0;c<o.length;c++){const h=l.children[c],u=o[c].material;u!=null&&this._setupPrimitive(h,u)}}return a})}_removeUnlitExtensionIfMToonExists(){const i=this.parser.json.materials;i==null||i.map((r,s)=>{var o;this._getMToonExtension(s)&&((o=r.extensions)!=null&&o.KHR_materials_unlit)&&delete r.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,i;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(i=o.extensions)==null?void 0:i[Dl.EXTENSION_NAME];if(a==null)return;const l=a.specVersion;if(!AT.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${Dl.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){return vr(this,null,function*(){var i;delete t.metalness,delete t.roughness;const r=new xT(this.parser,t);r.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),r.assignColor("shadeColorFactor",e.shadeColorFactor),r.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),r.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),r.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),r.assignPrimitive("shadingShiftTextureScale",(i=e.shadingShiftTexture)==null?void 0:i.scale),r.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),r.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),r.assignColor("matcapFactor",e.matcapFactor),r.assignTexture("matcapTexture",e.matcapTexture,!0),r.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),r.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),r.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),r.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),r.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),r.assignPrimitive("outlineWidthMode",e.outlineWidthMode),r.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),r.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),r.assignColor("outlineColorFactor",e.outlineColorFactor),r.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),r.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),r.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),r.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),r.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),r.assignPrimitive("v0CompatShade",this.v0CompatShade),r.assignPrimitive("debugMode",this.debugMode),yield r.pending})}_setupPrimitive(e,t){const i=this._getMToonExtension(t);if(i){const r=this._parseRenderOrder(i);e.renderOrder=r+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){const t=e.material;if(!(t instanceof Mn)||!this._shouldGenerateOutline(t))return;e.material=[t];const i=t.clone();i.name+=" (Outline)",i.isOutline=!0,i.side=on,e.material.push(i);const r=e.geometry,s=r.index?r.index.count:r.attributes.position.count/3;r.addGroup(0,s,0),r.addGroup(0,s,1)}_addToMaterialSet(e){const t=e.material,i=new Set;Array.isArray(t)?t.forEach(r=>i.add(r)):i.add(t);for(const r of i)this._mToonMaterialSet.add(r)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};im.EXTENSION_NAME="VRMC_materials_mtoon";var wT=im,RT=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),rm=class rd{get name(){return rd.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return RT(this,null,function*(){const i=this._getHDREmissiveMultiplierExtension(e);if(i==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const r=i.emissiveMultiplier;t.emissiveIntensity=r})}_getHDREmissiveMultiplierExtension(e){var t,i;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(i=o.extensions)==null?void 0:i[rd.EXTENSION_NAME];if(a!=null)return a}};rm.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var CT=rm,PT=Object.defineProperty,IT=Object.defineProperties,LT=Object.getOwnPropertyDescriptors,sm=Object.getOwnPropertySymbols,DT=Object.prototype.hasOwnProperty,NT=Object.prototype.propertyIsEnumerable,om=(n,e,t)=>e in n?PT(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ri=(n,e)=>{for(var t in e||(e={}))DT.call(e,t)&&om(n,t,e[t]);if(sm)for(var t of sm(e))NT.call(e,t)&&om(n,t,e[t]);return n},am=(n,e)=>IT(n,LT(e)),OT=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())});function cs(n){return Math.pow(n,2.2)}var UT=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(n){var e;this.parser=n,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return OT(this,null,function*(){var n;const e=this.parser.json,t=(n=e.extensions)==null?void 0:n.VRM,i=t==null?void 0:t.materialProperties;i&&(this._populateRenderQueueMap(i),i.forEach((r,s)=>{var o,a;const l=(o=e.materials)==null?void 0:o[s];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${s}] of glTF but the material doesn't exist`);return}if(r.shader==="VRM/MToon"){const c=this._parseV0MToonProperties(r,l);e.materials[s]=c}else if((a=r.shader)!=null&&a.startsWith("VRM/Unlit")){const c=this._parseV0UnlitProperties(r,l);e.materials[s]=c}else r.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${r.shader}`)}))})}_parseV0MToonProperties(n,e){var t,i,r,s,o,a,l,c,h,u,d,f,m,v,p,g,b,M,S,T,P,C,B,K,_,E,z,w,A,D,R,U,F,Q,k,G,te,ae,W,j,le,re,de,pe,fe,xe,$,O,_e,Ue,We,Le,et,De,L;const y=(i=(t=n.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?i:!1,V=((r=n.floatProperties)==null?void 0:r._ZWrite)===1&&y,ie=this._v0ParseRenderQueue(n),ne=(o=(s=n.keywordMap)==null?void 0:s._ALPHATEST_ON)!=null?o:!1,ge=y?"BLEND":ne?"MASK":"OPAQUE",ce=ne?(l=(a=n.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,je=((h=(c=n.floatProperties)==null?void 0:c._CullMode)!=null?h:2)===0,ue=this._portTextureTransform(n),Me=((d=(u=n.vectorProperties)==null?void 0:u._Color)!=null?d:[1,1,1,1]).map((me,be)=>be===3?me:cs(me)),Be=(f=n.textureProperties)==null?void 0:f._MainTex,Ne=Be!=null?{index:Be,extensions:ri({},ue)}:void 0,Ae=(v=(m=n.floatProperties)==null?void 0:m._BumpScale)!=null?v:1,ze=(p=n.textureProperties)==null?void 0:p._BumpMap,Xe=ze!=null?{index:ze,scale:Ae,extensions:ri({},ue)}:void 0,Et=((b=(g=n.vectorProperties)==null?void 0:g._EmissionColor)!=null?b:[0,0,0,1]).map(cs),X=(M=n.textureProperties)==null?void 0:M._EmissionMap,Re=X!=null?{index:X,extensions:ri({},ue)}:void 0,se=((T=(S=n.vectorProperties)==null?void 0:S._ShadeColor)!=null?T:[.97,.81,.86,1]).map(cs),he=(P=n.textureProperties)==null?void 0:P._ShadeTexture,Te=he!=null?{index:he,extensions:ri({},ue)}:void 0;let Se=(B=(C=n.floatProperties)==null?void 0:C._ShadeShift)!=null?B:0,Qe=(_=(K=n.floatProperties)==null?void 0:K._ShadeToony)!=null?_:.9;Qe=tt.lerp(Qe,1,.5+.5*Se),Se=-Se-(1-Qe);const It=(z=(E=n.floatProperties)==null?void 0:E._IndirectLightIntensity)!=null?z:.1,nn=It?1-It:void 0,it=(w=n.textureProperties)==null?void 0:w._SphereAdd,rn=it!=null?[1,1,1]:void 0,qn=it!=null?{index:it}:void 0,wl=(D=(A=n.floatProperties)==null?void 0:A._RimLightingMix)!=null?D:0,Do=(R=n.textureProperties)==null?void 0:R._RimTexture,Pi=Do!=null?{index:Do,extensions:ri({},ue)}:void 0,No=((F=(U=n.vectorProperties)==null?void 0:U._RimColor)!=null?F:[0,0,0,1]).map(cs),Rl=(k=(Q=n.floatProperties)==null?void 0:Q._RimFresnelPower)!=null?k:1,Cl=(te=(G=n.floatProperties)==null?void 0:G._RimLift)!=null?te:0,Rs=["none","worldCoordinates","screenCoordinates"][(W=(ae=n.floatProperties)==null?void 0:ae._OutlineWidthMode)!=null?W:0];let Cs=(le=(j=n.floatProperties)==null?void 0:j._OutlineWidth)!=null?le:0;Cs=.01*Cs;const Tr=(re=n.textureProperties)==null?void 0:re._OutlineWidthTexture,Pl=Tr!=null?{index:Tr,extensions:ri({},ue)}:void 0,Il=((pe=(de=n.vectorProperties)==null?void 0:de._OutlineColor)!=null?pe:[0,0,0]).map(cs),ed=((xe=(fe=n.floatProperties)==null?void 0:fe._OutlineColorMode)!=null?xe:0)===1?(O=($=n.floatProperties)==null?void 0:$._OutlineLightingMix)!=null?O:1:0,Ll=(_e=n.textureProperties)==null?void 0:_e._UvAnimMaskTexture,I=Ll!=null?{index:Ll,extensions:ri({},ue)}:void 0,Y=(We=(Ue=n.floatProperties)==null?void 0:Ue._UvAnimScrollX)!=null?We:0;let J=(et=(Le=n.floatProperties)==null?void 0:Le._UvAnimScrollY)!=null?et:0;J!=null&&(J=-J);const ee=(L=(De=n.floatProperties)==null?void 0:De._UvAnimRotation)!=null?L:0,q={specVersion:"1.0",transparentWithZWrite:V,renderQueueOffsetNumber:ie,shadeColorFactor:se,shadeMultiplyTexture:Te,shadingShiftFactor:Se,shadingToonyFactor:Qe,giEqualizationFactor:nn,matcapFactor:rn,matcapTexture:qn,rimLightingMixFactor:wl,rimMultiplyTexture:Pi,parametricRimColorFactor:No,parametricRimFresnelPowerFactor:Rl,parametricRimLiftFactor:Cl,outlineWidthMode:Rs,outlineWidthFactor:Cs,outlineWidthMultiplyTexture:Pl,outlineColorFactor:Il,outlineLightingMixFactor:ed,uvAnimationMaskTexture:I,uvAnimationScrollXSpeedFactor:Y,uvAnimationScrollYSpeedFactor:J,uvAnimationRotationSpeedFactor:ee};return am(ri({},e),{pbrMetallicRoughness:{baseColorFactor:Me,baseColorTexture:Ne},normalTexture:Xe,emissiveTexture:Re,emissiveFactor:Et,alphaMode:ge,alphaCutoff:ce,doubleSided:je,extensions:{VRMC_materials_mtoon:q}})}_parseV0UnlitProperties(n,e){var t,i,r,s,o;const a=n.shader==="VRM/UnlitTransparentZWrite",l=n.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(n),h=n.shader==="VRM/UnlitCutout",u=l?"BLEND":h?"MASK":"OPAQUE",d=h?(i=(t=n.floatProperties)==null?void 0:t._Cutoff)!=null?i:.5:void 0,f=this._portTextureTransform(n),m=((s=(r=n.vectorProperties)==null?void 0:r._Color)!=null?s:[1,1,1,1]).map(cs),v=(o=n.textureProperties)==null?void 0:o._MainTex,p=v!=null?{index:v,extensions:ri({},f)}:void 0,g={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:m,shadeMultiplyTexture:p};return am(ri({},e),{pbrMetallicRoughness:{baseColorFactor:m,baseColorTexture:p},alphaMode:u,alphaCutoff:d,extensions:{VRMC_materials_mtoon:g}})}_portTextureTransform(n){var e,t,i,r,s;const o=(e=n.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};const a=[(t=o==null?void 0:o[0])!=null?t:0,(i=o==null?void 0:o[1])!=null?i:0],l=[(r=o==null?void 0:o[2])!=null?r:1,(s=o==null?void 0:o[3])!=null?s:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(n){var e,t;const i=n.shader==="VRM/UnlitTransparentZWrite",r=((e=n.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||i,s=((t=n.floatProperties)==null?void 0:t._ZWrite)===1||i;let o=0;if(r){const a=n.renderQueue;a!=null&&(s?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(n){const e=new Set,t=new Set;n.forEach(i=>{var r,s;const o=i.shader==="VRM/UnlitTransparentZWrite",a=((r=i.keywordMap)==null?void 0:r._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||o,l=((s=i.floatProperties)==null?void 0:s._ZWrite)===1||o;if(a){const c=i.renderQueue;c!=null&&(l?t.add(c):e.add(c))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((i,r)=>{const s=Math.min(Math.max(r-e.size+1,-9),0);this._renderQueueMapTransparent.set(i,s)}),Array.from(t).sort().forEach((i,r)=>{const s=Math.min(Math.max(r,0),9);this._renderQueueMapTransparentZWrite.set(i,s)})}},lm=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),Wi=new N,qu=class extends un{constructor(n){super(),this._attrPosition=new lt(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(kv);const e=new Dt;e.setAttribute("position",this._attrPosition);const t=new Hi({color:16711935,depthTest:!1,depthWrite:!1});this._line=new to(e,t),this.add(this._line),this.constraint=n}updateMatrixWorld(n){Wi.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,Wi.x,Wi.y,Wi.z),this.constraint.source&&Wi.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,Wi.x,Wi.y,Wi.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(n)}};function cm(n,e){return e.set(n.elements[12],n.elements[13],n.elements[14])}var FT=new N,BT=new N;function kT(n,e){return n.decompose(FT,e,BT),e}function Ka(n){return n.invert?n.invert():n.inverse(),n}var Ku=class{constructor(n,e){this.destination=n,this.source=e,this.weight=1}},VT=new N,zT=new N,HT=new N,GT=new Ie,WT=new Ie,XT=new Ie,$T=class extends Ku{get aimAxis(){return this._aimAxis}set aimAxis(n){this._aimAxis=n,this._v3AimAxis.set(n==="PositiveX"?1:n==="NegativeX"?-1:0,n==="PositiveY"?1:n==="NegativeY"?-1:0,n==="PositiveZ"?1:n==="NegativeZ"?-1:0)}get dependencies(){const n=new Set([this.source]);return this.destination.parent&&n.add(this.destination.parent),n}constructor(n,e){super(n,e),this._aimAxis="PositiveX",this._v3AimAxis=new N(1,0,0),this._dstRestQuat=new Ie}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const n=GT.identity(),e=WT.identity();this.destination.parent&&(kT(this.destination.parent.matrixWorld,n),Ka(e.copy(n)));const t=VT.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(n),i=cm(this.source.matrixWorld,zT).sub(cm(this.destination.matrixWorld,HT)).normalize(),r=XT.setFromUnitVectors(t,i).premultiply(e).multiply(n).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(r,this.weight)}};function jT(n,e){const t=[n];let i=n.parent;for(;i!==null;)t.unshift(i),i=i.parent;t.forEach(r=>{e(r)})}var YT=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(n){this._constraints.add(n);let e=this._objectConstraintsMap.get(n.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(n.destination,e)),e.add(n)}deleteConstraint(n){this._constraints.delete(n),this._objectConstraintsMap.get(n.destination).delete(n)}setInitState(){const n=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,n,e,i=>i.setInitState())}update(){const n=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,n,e,i=>i.update())}_processConstraint(n,e,t,i){if(t.has(n))return;if(e.has(n))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(n);const r=n.dependencies;for(const s of r)jT(s,o=>{const a=this._objectConstraintsMap.get(o);if(a)for(const l of a)this._processConstraint(l,e,t,i)});i(n),t.add(n)}},qT=new Ie,KT=new Ie,ZT=class extends Ku{get dependencies(){return new Set([this.source])}constructor(n,e){super(n,e),this._dstRestQuat=new Ie,this._invSrcRestQuat=new Ie}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Ka(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const n=qT.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=KT.copy(this._dstRestQuat).multiply(n);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},QT=new N,JT=new Ie,eb=new Ie,tb=class extends Ku{get rollAxis(){return this._rollAxis}set rollAxis(n){this._rollAxis=n,this._v3RollAxis.set(n==="X"?1:0,n==="Y"?1:0,n==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(n,e){super(n,e),this._rollAxis="X",this._v3RollAxis=new N(1,0,0),this._dstRestQuat=new Ie,this._invDstRestQuat=new Ie,this._invSrcRestQuatMulDstRestQuat=new Ie}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Ka(this._invDstRestQuat.copy(this._dstRestQuat)),Ka(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const n=JT.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=QT.copy(this._v3RollAxis).applyQuaternion(n),i=eb.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(n);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}},nb=new Set(["1.0","1.0-beta"]),um=class Oo{get name(){return Oo.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t==null?void 0:t.helperRoot}afterRoot(e){return lm(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return lm(this,null,function*(){var t;const i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf(Oo.EXTENSION_NAME))!==-1))return null;const s=new YT,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;const h=i.nodes[l],u=(c=h==null?void 0:h.extensions)==null?void 0:c[Oo.EXTENSION_NAME];if(u==null)return;const d=u.specVersion;if(!nb.has(d)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${Oo.EXTENSION_NAME} specVersion "${d}"`);return}const f=u.constraint;if(f.roll!=null){const m=this._importRollConstraint(a,o,f.roll);s.addConstraint(m)}else if(f.aim!=null){const m=this._importAimConstraint(a,o,f.aim);s.addConstraint(m)}else if(f.rotation!=null){const m=this._importRotationConstraint(a,o,f.rotation);s.addConstraint(m)}}),e.scene.updateMatrixWorld(),s.setInitState(),s})}_importRollConstraint(e,t,i){const{source:r,rollAxis:s,weight:o}=i,a=t[r],l=new tb(e,a);if(s!=null&&(l.rollAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new qu(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,i){const{source:r,aimAxis:s,weight:o}=i,a=t[r],l=new $T(e,a);if(s!=null&&(l.aimAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new qu(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,i){const{source:r,weight:s}=i,o=t[r],a=new ZT(e,o);if(s!=null&&(a.weight=s),this.helperRoot){const l=new qu(a);this.helperRoot.add(l)}return a}};um.EXTENSION_NAME="VRMC_node_constraint";var ib=um,Za=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),Zu=class{},Qu=new N,yr=new N,hm=class extends Zu{get type(){return"capsule"}constructor(n){var e,t,i,r;super(),this.offset=(e=n==null?void 0:n.offset)!=null?e:new N(0,0,0),this.tail=(t=n==null?void 0:n.tail)!=null?t:new N(0,0,0),this.radius=(i=n==null?void 0:n.radius)!=null?i:0,this.inside=(r=n==null?void 0:n.inside)!=null?r:!1}calculateCollision(n,e,t,i){Qu.copy(this.offset).applyMatrix4(n),yr.copy(this.tail).applyMatrix4(n),yr.sub(Qu);const r=yr.lengthSq();i.copy(e).sub(Qu);const s=yr.dot(i);s<=0||(r<=s||yr.multiplyScalar(s/r),i.sub(yr));const o=this.inside?this.radius-t-i.length():i.length()-t-this.radius;return i.normalize(),this.inside&&i.negate(),o}},Ju=new N,dm=new ke,fm=class extends Zu{get type(){return"plane"}constructor(n){var e,t;super(),this.offset=(e=n==null?void 0:n.offset)!=null?e:new N(0,0,0),this.normal=(t=n==null?void 0:n.normal)!=null?t:new N(0,0,1)}calculateCollision(n,e,t,i){i.copy(this.offset).applyMatrix4(n),i.negate().add(e),dm.getNormalMatrix(n),Ju.copy(this.normal).applyNormalMatrix(dm).normalize();const r=i.dot(Ju)-t;return i.copy(Ju),r}},pm=class extends Zu{get type(){return"sphere"}constructor(n){var e,t,i;super(),this.offset=(e=n==null?void 0:n.offset)!=null?e:new N(0,0,0),this.radius=(t=n==null?void 0:n.radius)!=null?t:0,this.inside=(i=n==null?void 0:n.inside)!=null?i:!1}calculateCollision(n,e,t,i){i.copy(this.offset).applyMatrix4(n),i.negate().add(e);const r=this.inside?this.radius-t-i.length():i.length()-t-this.radius;return i.normalize(),this.inside&&i.negate(),r}},si=new N,rb=class extends Dt{constructor(n){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new N,this._currentTail=new N,this._shape=n,this._attrPos=new lt(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new lt(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,n=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),n=!0);const t=si.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),n=!0),n&&this._buildPosition()}_buildPosition(){si.copy(this._currentTail).sub(this._currentOffset);const n=si.length()/this._currentRadius;for(let i=0;i<=16;i++){const r=i/16*Math.PI;this._attrPos.setXYZ(i,-Math.sin(r),-Math.cos(r),0),this._attrPos.setXYZ(17+i,n+Math.sin(r),Math.cos(r),0),this._attrPos.setXYZ(34+i,-Math.sin(r),0,-Math.cos(r)),this._attrPos.setXYZ(51+i,n+Math.sin(r),0,Math.cos(r))}for(let i=0;i<32;i++){const r=i/16*Math.PI;this._attrPos.setXYZ(68+i,0,Math.sin(r),Math.cos(r)),this._attrPos.setXYZ(100+i,n,Math.sin(r),Math.cos(r))}const e=Math.atan2(si.y,Math.sqrt(si.x*si.x+si.z*si.z)),t=-Math.atan2(si.z,si.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<34;n++){const e=(n+1)%34;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(68+n*2,34+n,34+e)}for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(136+n*2,68+n,68+e),this._attrIndex.setXY(200+n*2,100+n,100+e)}this._attrIndex.needsUpdate=!0}},sb=class extends Dt{constructor(n){super(),this.worldScale=1,this._currentOffset=new N,this._currentNormal=new N,this._shape=n,this._attrPos=new lt(new Float32Array(6*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new lt(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),n=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),n=!0),n&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},ob=class extends Dt{constructor(n){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new N,this._shape=n,this._attrPos=new lt(new Float32Array(32*3*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new lt(new Uint16Array(64*3),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,n=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),n=!0),n&&this._buildPosition()}_buildPosition(){for(let n=0;n<32;n++){const e=n/16*Math.PI;this._attrPos.setXYZ(n,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+n,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+n,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(64+n*2,32+n,32+e),this._attrIndex.setXY(128+n*2,64+n,64+e)}this._attrIndex.needsUpdate=!0}},ab=new N,eh=class extends un{constructor(n){if(super(),this.matrixAutoUpdate=!1,this.collider=n,this.collider.shape instanceof pm)this._geometry=new ob(this.collider.shape);else if(this.collider.shape instanceof hm)this._geometry=new rb(this.collider.shape);else if(this.collider.shape instanceof fm)this._geometry=new sb(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const e=new Hi({color:16711935,depthTest:!1,depthWrite:!1});this._line=new no(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(n){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=ab.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(n)}},lb=class extends Dt{constructor(n){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new N,this._springBone=n,this._attrPos=new lt(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new lt(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;const e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,n=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),n=!0),n&&this._buildPosition()}_buildPosition(){for(let n=0;n<32;n++){const e=n/16*Math.PI;this._attrPos.setXYZ(n,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+n,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+n,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(64+n*2,32+n,32+e),this._attrIndex.setXY(128+n*2,64+n,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},cb=new N,ub=class extends un{constructor(n){super(),this.matrixAutoUpdate=!1,this.springBone=n,this._geometry=new lb(this.springBone);const e=new Hi({color:16776960,depthTest:!1,depthWrite:!1});this._line=new no(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(n){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=cb.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(n)}},th=class extends at{constructor(n){super(),this.shape=n}},hb=new Ee;function mm(n){return n.invert?n.invert():n.getInverse(hb.copy(n)),n}var db=class{constructor(n){this._inverseCache=new Ee,this._shouldUpdateInverse=!0,this.matrix=n;const e={set:(t,i,r)=>(this._shouldUpdateInverse=!0,t[i]=r,!0)};this._originalElements=n.elements,n.elements=new Proxy(n.elements,e)}get inverse(){return this._shouldUpdateInverse&&(mm(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},fb=new Ee,wi=new N,uo=new N,pb=new N,us=new N,gm=new N,ho=new N,_m=new Ie,hs=new Ee,mb=new Ee,gb=class{constructor(n,e,t={},i=[]){this._currentTail=new N,this._prevTail=new N,this._boneAxis=new N,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new Ee,this._initialLocalRotation=new Ie,this._initialLocalChildPosition=new N;var r,s,o,a,l,c;this.bone=n,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(r=t.hitRadius)!=null?r:0,stiffness:(s=t.stiffness)!=null?s:1,gravityPower:(o=t.gravityPower)!=null?o:0,gravityDir:(l=(a=t.gravityDir)==null?void 0:a.clone())!=null?l:new N(0,-1,0),dragForce:(c=t.dragForce)!=null?c:.4},this.colliderGroups=i}get center(){return this._center}set center(n){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=n,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new db(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:fb}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const n=this._getMatrixWorldToCenter(hs);this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(n),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const n=this._getMatrixWorldToCenter(hs);this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(n),this._prevTail.copy(this._currentTail)}update(n){if(n<=0)return;this._calcWorldSpaceBoneLength(),us.setFromMatrixPosition(this.bone.matrixWorld);let e=this._getMatrixWorldToCenter(hs);gm.copy(us).applyMatrix4(e);const t=_m.setFromRotationMatrix(e),i=mb.copy(e).multiply(this._parentMatrixWorld),r=uo.copy(this._boneAxis).applyMatrix4(this._initialLocalMatrix).applyMatrix4(i).sub(gm).normalize(),s=pb.copy(this.settings.gravityDir).applyQuaternion(t).normalize(),o=this._getMatrixCenterToWorld(hs);ho.copy(this._currentTail).add(wi.copy(this._currentTail).sub(this._prevTail).multiplyScalar(1-this.settings.dragForce)).add(wi.copy(r).multiplyScalar(this.settings.stiffness*n)).add(wi.copy(s).multiplyScalar(this.settings.gravityPower*n)).applyMatrix4(o),ho.sub(us).normalize().multiplyScalar(this._worldSpaceBoneLength).add(us),this._collision(ho),e=this._getMatrixWorldToCenter(hs),this._prevTail.copy(this._currentTail),this._currentTail.copy(wi.copy(ho).applyMatrix4(e));const a=mm(hs.copy(this._parentMatrixWorld).multiply(this._initialLocalMatrix)),l=_m.setFromUnitVectors(this._boneAxis,wi.copy(ho).applyMatrix4(a).normalize());this.bone.quaternion.copy(this._initialLocalRotation).multiply(l),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(n){this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{const i=t.shape.calculateCollision(t.matrixWorld,n,this.settings.hitRadius,wi);i<0&&(n.add(wi.multiplyScalar(-i)),n.sub(us).normalize().multiplyScalar(this._worldSpaceBoneLength).add(us))})})}_calcWorldSpaceBoneLength(){wi.setFromMatrixPosition(this.bone.matrixWorld),this.child?uo.setFromMatrixPosition(this.child.matrixWorld):(uo.copy(this._initialLocalChildPosition),uo.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=wi.sub(uo).length()}_getMatrixCenterToWorld(n){return this._center?n.copy(this._center.matrixWorld):n.identity(),n}_getMatrixWorldToCenter(n){return this._center?n.copy(this._center.userData.inverseCacheProxy.inverse):n.identity(),n}};function _b(n,e){const t=[];let i=n;for(;i!==null;)t.unshift(i),i=i.parent;t.forEach(r=>{e(r)})}function vm(n,e){n.children.forEach(t=>{e(t)||vm(t,e)})}var ym=class{constructor(){this._joints=new Set,this._hasWarnedCircularDependency=!1,this._objectSpringBonesMap=new Map}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const n=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{n.add(t)})}),Array.from(n)}get colliders(){const n=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{n.add(t)})}),Array.from(n)}addJoint(n){this._joints.add(n);let e=this._objectSpringBonesMap.get(n.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(n.bone,e)),e.add(n)}addSpringBone(n){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(n)}deleteJoint(n){this._joints.delete(n),this._objectSpringBonesMap.get(n.bone).delete(n)}deleteSpringBone(n){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(n)}setInitState(){const n=new Set,e=new Set,t=new Set;for(const i of this._joints)this._processSpringBone(i,n,e,t,r=>r.setInitState())}reset(){const n=new Set,e=new Set,t=new Set;for(const i of this._joints)this._processSpringBone(i,n,e,t,r=>r.reset())}update(n){const e=new Set,t=new Set,i=new Set;for(const r of this._joints)this._processSpringBone(r,e,t,i,s=>s.update(n)),vm(r.bone,s=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(s))==null?void 0:o.size)!=null?a:0)>0?!0:(s.updateWorldMatrix(!1,!1),!1)})}_processSpringBone(n,e,t,i,r){if(t.has(n))return;if(e.has(n)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected while updating springbones"),this._hasWarnedCircularDependency=!0);return}e.add(n);const s=this._getDependencies(n);for(const o of s)_b(o,a=>{const l=this._objectSpringBonesMap.get(a);if(l)for(const c of l)this._processSpringBone(c,e,t,i,r);else i.has(a)||(a.updateWorldMatrix(!1,!1),i.add(a))});n.bone.updateMatrix(),n.bone.updateWorldMatrix(!1,!1),r(n),i.add(n.bone),t.add(n)}_getDependencies(n){const e=new Set,t=n.bone.parent;return t&&e.add(t),n.colliderGroups.forEach(i=>{i.colliders.forEach(r=>{e.add(r)})}),e}},xm="VRMC_springBone_extended_collider",vb=new Set(["1.0","1.0-beta"]),yb=new Set(["1.0"]),Mm=class Ls{get name(){return Ls.EXTENSION_NAME}constructor(e,t){var i;this.parser=e,this.jointHelperRoot=t==null?void 0:t.jointHelperRoot,this.colliderHelperRoot=t==null?void 0:t.colliderHelperRoot,this.useExtendedColliders=(i=t==null?void 0:t.useExtendedColliders)!=null?i:!0}afterRoot(e){return Za(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return Za(this,null,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const i=yield this._v0Import(e);return i??null})}_v1Import(e){return Za(this,null,function*(){var t,i,r,s,o;const a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf(Ls.EXTENSION_NAME))!==-1))return null;const c=new ym,h=yield e.parser.getDependencies("node"),u=(i=a.extensions)==null?void 0:i[Ls.EXTENSION_NAME];if(!u)return null;const d=u.specVersion;if(!vb.has(d))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Ls.EXTENSION_NAME} specVersion "${d}"`),null;const f=(r=u.colliders)==null?void 0:r.map((v,p)=>{var g,b,M,S,T,P,C,B,K,_,E,z,w,A,D;const R=h[v.node],U=v.shape,F=(g=v.extensions)==null?void 0:g[xm];if(this.useExtendedColliders&&F!=null){const Q=F.specVersion;if(!yb.has(Q))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${xm} specVersion "${Q}". Fallbacking to the ${Ls.EXTENSION_NAME} definition`);else{const k=F.shape;if(k.sphere)return this._importSphereCollider(R,{offset:new N().fromArray((b=k.sphere.offset)!=null?b:[0,0,0]),radius:(M=k.sphere.radius)!=null?M:0,inside:(S=k.sphere.inside)!=null?S:!1});if(k.capsule)return this._importCapsuleCollider(R,{offset:new N().fromArray((T=k.capsule.offset)!=null?T:[0,0,0]),radius:(P=k.capsule.radius)!=null?P:0,tail:new N().fromArray((C=k.capsule.tail)!=null?C:[0,0,0]),inside:(B=k.capsule.inside)!=null?B:!1});if(k.plane)return this._importPlaneCollider(R,{offset:new N().fromArray((K=k.plane.offset)!=null?K:[0,0,0]),normal:new N().fromArray((_=k.plane.normal)!=null?_:[0,0,1])})}}if(U.sphere)return this._importSphereCollider(R,{offset:new N().fromArray((E=U.sphere.offset)!=null?E:[0,0,0]),radius:(z=U.sphere.radius)!=null?z:0,inside:!1});if(U.capsule)return this._importCapsuleCollider(R,{offset:new N().fromArray((w=U.capsule.offset)!=null?w:[0,0,0]),radius:(A=U.capsule.radius)!=null?A:0,tail:new N().fromArray((D=U.capsule.tail)!=null?D:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${p} has no valid shape`)}),m=(s=u.colliderGroups)==null?void 0:s.map((v,p)=>{var g;return{colliders:((g=v.colliders)!=null?g:[]).map(M=>{const S=f==null?void 0:f[M];if(S==null)throw new Error(`VRMSpringBoneLoaderPlugin: The colliderGroup #${p} attempted to use a collider #${M} but not found`);return S}),name:v.name}});return(o=u.springs)==null||o.forEach((v,p)=>{var g;const b=v.joints,M=(g=v.colliderGroups)==null?void 0:g.map(P=>{const C=m==null?void 0:m[P];if(C==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${p} attempted to use a colliderGroup ${P} but not found`);return C}),S=v.center!=null?h[v.center]:void 0;let T;b.forEach(P=>{if(T){const C=T.node,B=h[C],K=P.node,_=h[K],E={hitRadius:T.hitRadius,dragForce:T.dragForce,gravityPower:T.gravityPower,stiffness:T.stiffness,gravityDir:T.gravityDir!=null?new N().fromArray(T.gravityDir):void 0},z=this._importJoint(B,_,E,M);S&&(z.center=S),c.addJoint(z)}T=P})}),c.setInitState(),c})}_v0Import(e){return Za(this,null,function*(){var t,i,r;const s=e.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;const a=(i=s.extensions)==null?void 0:i.VRM,l=a==null?void 0:a.secondaryAnimation;if(!l)return null;const c=l==null?void 0:l.boneGroups;if(!c)return null;const h=new ym,u=yield e.parser.getDependencies("node"),d=(r=l.colliderGroups)==null?void 0:r.map(f=>{var m;const v=u[f.node];return{colliders:((m=f.colliders)!=null?m:[]).map((g,b)=>{var M,S,T;const P=new N(0,0,0);return g.offset&&P.set((M=g.offset.x)!=null?M:0,(S=g.offset.y)!=null?S:0,g.offset.z?-g.offset.z:0),this._importSphereCollider(v,{offset:P,radius:(T=g.radius)!=null?T:0,inside:!1})})}});return c==null||c.forEach((f,m)=>{const v=f.bones;v&&v.forEach(p=>{var g,b,M,S;const T=u[p],P=new N;f.gravityDir?P.set((g=f.gravityDir.x)!=null?g:0,(b=f.gravityDir.y)!=null?b:0,(M=f.gravityDir.z)!=null?M:0):P.set(0,-1,0);const C=f.center!=null?u[f.center]:void 0,B={hitRadius:f.hitRadius,dragForce:f.dragForce,gravityPower:f.gravityPower,stiffness:f.stiffiness,gravityDir:P},K=(S=f.colliderGroups)==null?void 0:S.map(_=>{const E=d==null?void 0:d[_];if(E==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${m} attempted to use a colliderGroup ${_} but not found`);return E});T.traverse(_=>{var E;const z=(E=_.children[0])!=null?E:null,w=this._importJoint(_,z,B,K);C&&(w.center=C),h.addJoint(w)})})}),e.scene.updateMatrixWorld(),h.setInitState(),h})}_importJoint(e,t,i,r){const s=new gb(e,t,i,r);if(this.jointHelperRoot){const o=new ub(s);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return s}_importSphereCollider(e,t){const i=new pm(t),r=new th(i);if(e.add(r),this.colliderHelperRoot){const s=new eh(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importCapsuleCollider(e,t){const i=new hm(t),r=new th(i);if(e.add(r),this.colliderHelperRoot){const s=new eh(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importPlaneCollider(e,t){const i=new fm(t),r=new th(i);if(e.add(r),this.colliderHelperRoot){const s=new eh(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}};Mm.EXTENSION_NAME="VRMC_springBone";var xb=Mm,Mb=class{get name(){return"VRMLoaderPlugin"}constructor(n,e){var t,i,r,s,o,a,l,c,h,u;this.parser=n;const d=e==null?void 0:e.helperRoot,f=e==null?void 0:e.autoUpdateHumanBones;this.expressionPlugin=(t=e==null?void 0:e.expressionPlugin)!=null?t:new kE(n),this.firstPersonPlugin=(i=e==null?void 0:e.firstPersonPlugin)!=null?i:new zE(n),this.humanoidPlugin=(r=e==null?void 0:e.humanoidPlugin)!=null?r:new YE(n,{helperRoot:d,autoUpdateHumanBones:f}),this.lookAtPlugin=(s=e==null?void 0:e.lookAtPlugin)!=null?s:new cT(n,{helperRoot:d}),this.metaPlugin=(o=e==null?void 0:e.metaPlugin)!=null?o:new dT(n),this.mtoonMaterialPlugin=(a=e==null?void 0:e.mtoonMaterialPlugin)!=null?a:new wT(n),this.materialsHDREmissiveMultiplierPlugin=(l=e==null?void 0:e.materialsHDREmissiveMultiplierPlugin)!=null?l:new CT(n),this.materialsV0CompatPlugin=(c=e==null?void 0:e.materialsV0CompatPlugin)!=null?c:new UT(n),this.springBonePlugin=(h=e==null?void 0:e.springBonePlugin)!=null?h:new xb(n,{colliderHelperRoot:d,jointHelperRoot:d}),this.nodeConstraintPlugin=(u=e==null?void 0:e.nodeConstraintPlugin)!=null?u:new ib(n,{helperRoot:d})}beforeRoot(){return Xa(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(n){return Xa(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(n)})}getMaterialType(n){const e=this.mtoonMaterialPlugin.getMaterialType(n);return e??null}extendMaterialParams(n,e){return Xa(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(n,e),yield this.mtoonMaterialPlugin.extendMaterialParams(n,e)})}afterRoot(n){return Xa(this,null,function*(){yield this.metaPlugin.afterRoot(n),yield this.humanoidPlugin.afterRoot(n),yield this.expressionPlugin.afterRoot(n),yield this.lookAtPlugin.afterRoot(n),yield this.firstPersonPlugin.afterRoot(n),yield this.springBonePlugin.afterRoot(n),yield this.nodeConstraintPlugin.afterRoot(n),yield this.mtoonMaterialPlugin.afterRoot(n);const e=n.userData.vrmMeta,t=n.userData.vrmHumanoid;if(e&&t){const i=new pT({scene:n.scene,expressionManager:n.userData.vrmExpressionManager,firstPerson:n.userData.vrmFirstPerson,humanoid:t,lookAt:n.userData.vrmLookAt,meta:e,materials:n.userData.vrmMToonMaterials,springBoneManager:n.userData.vrmSpringBoneManager,nodeConstraintManager:n.userData.vrmNodeConstraintManager});n.userData.vrm=i}})}};function Sm(n){if(Object.values(n).forEach(e=>{e!=null&&e.isTexture&&e.dispose()}),n.isShaderMaterial){const e=n.uniforms;e&&Object.values(e).forEach(t=>{const i=t.value;i!=null&&i.isTexture&&i.dispose()})}n.dispose()}function Sb(n){const e=n.geometry;e&&e.dispose();const t=n.skeleton;t&&t.dispose();const i=n.material;i&&(Array.isArray(i)?i.forEach(r=>Sm(r)):i&&Sm(i))}function Eb(n){n.traverse(Sb)}function Tb(n,e){var t;const i=(t=e==null?void 0:e.experimentalSameBoneCounts)!=null?t:!1,r=[];n.traverse(a=>{a.type==="SkinnedMesh"&&r.push(a)});const s=new Map;let o=0;for(const a of r){const c=a.geometry.getAttribute("skinIndex"),h=[],u=[],d={},f=c.array;for(let m=0;m<f.length;m++){const v=f[m];d[v]==null&&(d[v]=h.length,h.push(a.skeleton.bones[v]),u.push(a.skeleton.boneInverses[v])),f[m]=d[v]}c.copyArray(f),c.needsUpdate=!0,s.set(a,{bones:h,boneInverses:u}),o=Math.max(o,h.length)}for(const a of r){const{bones:l,boneInverses:c}=s.get(a);if(i)for(let u=l.length;u<o;u++)l[u]=l[0],c[u]=c[0];const h=new ts(l,c);a.bind(h,new Ee)}}function bb(n){const e=new Map;n.traverse(t=>{var i,r,s,o;if(!t.isMesh)return;const a=t,l=a.geometry,c=l.index;if(c==null)return;const h=e.get(l);if(h!=null){a.geometry=h;return}const u=new Dt;u.name=l.name,u.morphTargetsRelative=l.morphTargetsRelative,l.groups.forEach(v=>{u.addGroup(v.start,v.count,v.materialIndex)}),u.boundingBox=(r=(i=l.boundingBox)==null?void 0:i.clone())!=null?r:null,u.boundingSphere=(o=(s=l.boundingSphere)==null?void 0:s.clone())!=null?o:null,u.setDrawRange(l.drawRange.start,l.drawRange.count),u.userData=l.userData,e.set(l,u);const d=[],f=[];{const v=c.array,p=new v.constructor(v.length);let g=0;for(let b=0;b<v.length;b++){const M=v[b];let S=d[M];S==null&&(d[M]=g,f[g]=M,S=g,g++),p[b]=S}u.setIndex(new lt(p,1,!1))}Object.keys(l.attributes).forEach(v=>{const p=l.attributes[v];if(p.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const g=p.array,{itemSize:b,normalized:M}=p,S=new g.constructor(f.length*b);f.forEach((T,P)=>{for(let C=0;C<b;C++)S[P*b+C]=g[T*b+C]}),u.setAttribute(v,new lt(S,b,M))});let m=!0;Object.keys(l.morphAttributes).forEach(v=>{u.morphAttributes[v]=[];const p=l.morphAttributes[v];for(let g=0;g<p.length;g++){const b=p[g];if(b.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const M=b.array,{itemSize:S,normalized:T}=b,P=new M.constructor(f.length*S);f.forEach((C,B)=>{for(let K=0;K<S;K++)P[B*S+K]=M[C*S+K]}),m=m&&P.every(C=>C===0),u.morphAttributes[v][g]=new lt(P,S,T)}}),m&&(u.morphAttributes={}),a.geometry=u}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function Ab(n){var e;((e=n.meta)==null?void 0:e.metaVersion)==="0"&&(n.scene.rotation.y=Math.PI)}var xr=class{constructor(){}};xr.deepDispose=Eb,xr.removeUnnecessaryJoints=Tb,xr.removeUnnecessaryVertices=bb,xr.rotateVRM0=Ab;/*!
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
 */function Em(n,e){if(e===Rv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Fc||e===Nd){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Fc)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class wb extends bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Lb(t)}),this.register(function(t){return new Db(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new Ib(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Cb(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new $b(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=as.extractUrlBase(e);o=as.resolveURL(c,this.path)}else o=as.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Iu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Tm){try{o[Je.KHR_BINARY_GLTF]=new jb(e)}catch(u){r&&r(u);return}s=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new oA(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Je.KHR_MATERIALS_UNLIT:o[u]=new Pb;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[u]=new Yb(s,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[u]=new qb;break;case Je.KHR_MESH_QUANTIZATION:o[u]=new Kb;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function Rb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Cb{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new we(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Yt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Uu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ou(h),c.distance=u;break;case"spot":c=new yp(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class Pb{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Si}extendParams(e,t,i){const r=[];e.color=new we(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,St))}return Promise.all(r)}}class Ib{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Lb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(a,a)}return Promise.all(s)}}class Db{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Nb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Ob{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Yt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,St)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Ub{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Fb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(a[0],a[1],a[2],Yt),Promise.all(s)}}class Bb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class kb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(a[0],a[1],a[2],Yt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,St)),Promise.all(s)}}class Vb{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class zb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Hb{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Gb{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Wb{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Xb{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,r.mode,r.filter),f})})}else return null}}class $b{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Ln.TRIANGLES&&c.mode!==Ln.TRIANGLE_STRIP&&c.mode!==Ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const v=new Ee,p=new N,g=new Ie,b=new N(1,1,1),M=new VS(m.geometry,m.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,S),l.SCALE&&b.fromBufferAttribute(l.SCALE,S),M.setMatrixAt(S,v.compose(p,g,b));for(const S in l)if(S==="_COLOR_0"){const T=l[S];M.instanceColor=new Eu(T.array,T.itemSize,T.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&m.geometry.setAttribute(S,l[S]);at.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Tm="glTF",fo=12,bm={JSON:1313821514,BIN:5130562};class jb{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,fo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-fo,s=new DataView(e,fo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===bm.JSON){const c=new Uint8Array(e,fo+o,a);this.content=i.decode(c)}else if(l===bm.BIN){const c=fo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Yb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=ih[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=ih[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],f=ds[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){r.decodeDracoFile(h,function(f){for(const m in f.attributes){const v=f.attributes[m],p=l[m];p!==void 0&&(v.normalized=p)}u(f)},a,c,Yt,d)})})}}class qb{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Kb{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Am extends oo{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=r-t,u=(i-t)/h,d=u*u,f=d*u,m=e*c,v=m-c,p=-2*f+3*d,g=f-d,b=1-p,M=g-d+u;for(let S=0;S!==a;S++){const T=o[v+S+a],P=o[v+S+l]*h,C=o[m+S+a],B=o[m+S]*h;s[S]=b*T+M*P+p*C+g*B}return s}}const Zb=new Ie;class Qb extends Am{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return Zb.fromArray(s).normalize().toArray(s),s}}const Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wm={9728:an,9729:yn,9984:Td,9985:jo,9986:Us,9987:fi},Rm={33071:Zn,33648:$o,10497:Ni},nh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ih={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Jb={CUBICSPLINE:void 0,LINEAR:Vs,STEP:ks},rh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function eA(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Cu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),n.DefaultMaterial}function Mr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ri(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tA(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(r){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(n.morphAttributes.position=h),r&&(n.morphAttributes.normal=u),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function nA(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iA(n){let e;const t=n.extensions&&n.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sh(t.attributes):e=n.indices+":"+sh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+sh(n.targets[i]);return e}function sh(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function oh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rA(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const sA=new Ee;class oA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Rb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new gp(this.options.manager):this.textureLoader=new ME(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Iu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Mr(s,a,r),Ri(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(as.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=nh[r.type],a=ds[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new lt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=nh[r.type],c=ds[r.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=r.byteOffset||0,f=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let v,p;if(f&&f!==u){const g=Math.floor(d/f),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count;let M=t.cache.get(b);M||(v=new c(a,g*f,r.count*f/h),M=new US(v,f/h),t.cache.add(b,M)),p=new yu(M,l,d%f/h,m)}else a===null?v=new c(r.count*l):v=new c(a,d,r.count*l),p=new lt(v,l,m);if(r.sparse!==void 0){const g=nh.SCALAR,b=ds[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,T=new b(o[1],M,r.sparse.count*g),P=new c(o[2],S,r.sparse.count*l);a!==null&&(p=new lt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let C=0,B=T.length;C<B;C++){const K=T[C];if(p.setX(K,P[C*l]),l>=2&&p.setY(K,P[C*l+1]),l>=3&&p.setZ(K,P[C*l+2]),l>=4&&p.setW(K,P[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=wm[d.magFilter]||yn,h.minFilter=wm[d.minFilter]||fi,h.wrapS=Rm[d.wrapS]||Ni,h.wrapT=Rm[d.wrapT]||Ni,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){const p=new Ht(v);p.needsUpdate=!0,d(p)}),t.load(as.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Ri(u,o),u.userData.mimeType=o.mimeType||rA(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new np,Mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Hi,Mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Cu}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const u=r[Je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Yt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,St)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Rn);const h=s.alphaMode||rh.OPAQUE;if(h===rh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===rh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Si&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new $e(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Si&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Si){const u=s.emissiveFactor;a.emissive=new we().setRGB(u[0],u[1],u[2],Yt)}return s.emissiveTexture!==void 0&&o!==Si&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,St)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Ri(u,s),t.associations.set(u,{materials:e}),s.extensions&&Mr(r,u,s),u})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Cm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=iA(c),u=r[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Cm(new Dt,c,t),r[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?eA(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const v=h[f],p=o[f];let g;const b=c[f];if(p.mode===Ln.TRIANGLES||p.mode===Ln.TRIANGLE_STRIP||p.mode===Ln.TRIANGLE_FAN||p.mode===void 0)g=s.isSkinnedMesh===!0?new Su(v,b):new en(v,b),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===Ln.TRIANGLE_STRIP?g.geometry=Em(g.geometry,Nd):p.mode===Ln.TRIANGLE_FAN&&(g.geometry=Em(g.geometry,Fc));else if(p.mode===Ln.LINES)g=new no(v,b);else if(p.mode===Ln.LINE_STRIP)g=new to(v,b);else if(p.mode===Ln.LINE_LOOP)g=new zS(v,b);else if(p.mode===Ln.POINTS)g=new HS(v,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&nA(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Ri(g,s),p.extensions&&Mr(r,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Mr(r,u[0],s),u[0];const d=new un;s.extensions&&Mr(r,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new cn(tt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Aa(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ri(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ee;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ts(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=r.channels.length;u<d;u++){const f=r.channels[u],m=r.samplers[f.sampler],v=f.target,p=v.node,g=r.parameters!==void 0?r.parameters[m.input]:m.input,b=r.parameters!==void 0?r.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",b)),c.push(m),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],v=u[3],p=u[4],g=[];for(let b=0,M=d.length;b<M;b++){const S=d[b],T=f[b],P=m[b],C=v[b],B=p[b];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const K=i._createAnimationTracks(S,T,P,C,B);if(K)for(let _=0;_<K.length;_++)g.push(K[_])}return new os(s,void 0,g)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,sA)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new La:c.length>1?h=new un:c.length===1?h=c[0]:h=new at,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Ri(h,s),s.extensions&&Mr(i,h,s),s.matrix!==void 0){const u=new Ee;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new un;i.name&&(s.name=r.createUniqueName(i.name)),Ri(s,i),i.extensions&&Mr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of r.associations)(d instanceof Mn||d instanceof Ht)&&u.set(d,f);return h.traverse(d=>{const f=r.associations.get(d);f!=null&&u.set(d,f)}),u};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Xi[s.path]===Xi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Xi[s.path]){case Xi.weights:c=mr;break;case Xi.rotation:c=ni;break;case Xi.position:case Xi.scale:c=Ti;break;default:switch(i.itemSize){case 1:c=mr;break;case 2:case 3:default:c=Ti;break}break}const h=r.interpolation!==void 0?Jb[r.interpolation]:Vs,u=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+Xi[s.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=oh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof ni?Qb:Am;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function aA(n,e,t){const i=e.attributes,r=new gi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const h=oh(ds[a.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const v=oh(ds[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Qn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Cm(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=ih[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Ye.workingColorSpace!==Yt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),Ri(n,e),aA(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?tA(n,e.targets,t):n})}const lA=async n=>{const e=new wb;e.register(i=>new Mb(i));const t=await new Promise(i=>{e.load(n,r=>{const s=r.userData.vrm;xr.removeUnnecessaryVertices(r.scene),xr.removeUnnecessaryJoints(r.scene),s.scene.traverse(o=>{o.frustumCulled=!1}),i(s)})});return xr.rotateVRM0(t),t},cA=async({canvas:n,vrmUrl:e,vrmCameraOptions:t={}})=>{const i=new OS,r=n.width/n.height,{frustumSize:s=3,lookAt:o=[0,1.5,0],position:a=[0,1.5,2]}=t,l=new Aa(-s*r/2,s*r/2,s/2,-s/2,.1,1e3);l.position.set(st.xOf(a),st.yOf(a),st.zOf(a)),l.lookAt(st.xOf(o),st.yOf(o),st.zOf(o));const c=new NS({canvas:n,antialias:!0,preserveDrawingBuffer:!0});c.setSize(n.width,n.height),c.setClearColor("grey",0);const h=new Mp(16777215,1);i.add(h);const u=new Uu(16777215,1);u.position.set(0,1,1).normalize(),i.add(u);const d=await lA(e);return i.add(d.scene),d.lookAt.target=l,{scene:i,vrm:d,camera:l,renderer:c}};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Dn=Uint8Array,fs=Uint16Array,uA=Int32Array,Pm=new Dn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Im=new Dn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),hA=new Dn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Lm=function(n,e){for(var t=new fs(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new uA(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},Dm=Lm(Pm,2),Nm=Dm.b,dA=Dm.r;Nm[28]=258,dA[258]=28;for(var fA=Lm(Im,0),pA=fA.b,ah=new fs(32768),wt=0;wt<32768;++wt){var $i=(wt&43690)>>1|(wt&21845)<<1;$i=($i&52428)>>2|($i&13107)<<2,$i=($i&61680)>>4|($i&3855)<<4,ah[wt]=(($i&65280)>>8|($i&255)<<8)>>1}for(var po=function(n,e,t){for(var i=n.length,r=0,s=new fs(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new fs(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new fs(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],h=e-n[r],u=o[n[r]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[ah[u]>>l]=c}else for(a=new fs(i),r=0;r<i;++r)n[r]&&(a[r]=ah[o[n[r]-1]++]>>15-n[r]);return a},mo=new Dn(288),wt=0;wt<144;++wt)mo[wt]=8;for(var wt=144;wt<256;++wt)mo[wt]=9;for(var wt=256;wt<280;++wt)mo[wt]=7;for(var wt=280;wt<288;++wt)mo[wt]=8;for(var Om=new Dn(32),wt=0;wt<32;++wt)Om[wt]=5;var mA=po(mo,9,1),gA=po(Om,5,1),lh=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},$n=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},ch=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},_A=function(n){return(n+7)/8|0},vA=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Dn(n.subarray(e,t))},yA=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],jn=function(n,e,t){var i=new Error(e||yA[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,jn),!t)throw i;return i},xA=function(n,e,t,i){var r=n.length,s=0;if(!r||e.f&&!e.l)return t||new Dn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new Dn(r*3));var c=function(xe){var $=t.length;if(xe>$){var O=new Dn(Math.max($*2,xe));O.set(t),t=O}},h=e.f||0,u=e.p||0,d=e.b||0,f=e.l,m=e.d,v=e.m,p=e.n,g=r*8;do{if(!f){h=$n(n,u,1);var b=$n(n,u+1,3);if(u+=3,b)if(b==1)f=mA,m=gA,v=9,p=5;else if(b==2){var P=$n(n,u,31)+257,C=$n(n,u+10,15)+4,B=P+$n(n,u+5,31)+1;u+=14;for(var K=new Dn(B),_=new Dn(19),E=0;E<C;++E)_[hA[E]]=$n(n,u+E*3,7);u+=C*3;for(var z=lh(_),w=(1<<z)-1,A=po(_,z,1),E=0;E<B;){var D=A[$n(n,u,w)];u+=D&15;var M=D>>4;if(M<16)K[E++]=M;else{var R=0,U=0;for(M==16?(U=3+$n(n,u,3),u+=2,R=K[E-1]):M==17?(U=3+$n(n,u,7),u+=3):M==18&&(U=11+$n(n,u,127),u+=7);U--;)K[E++]=R}}var F=K.subarray(0,P),Q=K.subarray(P);v=lh(F),p=lh(Q),f=po(F,v,1),m=po(Q,p,1)}else jn(1);else{var M=_A(u)+4,S=n[M-4]|n[M-3]<<8,T=M+S;if(T>r){l&&jn(0);break}a&&c(d+S),t.set(n.subarray(M,T),d),e.b=d+=S,e.p=u=T*8,e.f=h;continue}if(u>g){l&&jn(0);break}}a&&c(d+131072);for(var k=(1<<v)-1,G=(1<<p)-1,te=u;;te=u){var R=f[ch(n,u)&k],ae=R>>4;if(u+=R&15,u>g){l&&jn(0);break}if(R||jn(2),ae<256)t[d++]=ae;else if(ae==256){te=u,f=null;break}else{var W=ae-254;if(ae>264){var E=ae-257,j=Pm[E];W=$n(n,u,(1<<j)-1)+Nm[E],u+=j}var le=m[ch(n,u)&G],re=le>>4;le||jn(3),u+=le&15;var Q=pA[re];if(re>3){var j=Im[re];Q+=ch(n,u)&(1<<j)-1,u+=j}if(u>g){l&&jn(0);break}a&&c(d+131072);var de=d+W;if(d<Q){var pe=s-Q,fe=Math.min(Q,de);for(pe+d<0&&jn(3);d<fe;++d)t[d]=i[pe+d]}for(;d<de;++d)t[d]=t[d-Q]}}e.l=f,e.p=te,e.b=d,e.f=h,f&&(h=1,e.m=v,e.d=m,e.n=p)}while(!h);return d!=t.length&&o?vA(t,0,d):t.subarray(0,d)},MA=new Dn(0),SA=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&jn(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&jn(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function EA(n,e){return xA(n.subarray(SA(n,e),-4),{i:2},e,e)}var TA=typeof TextDecoder<"u"&&new TextDecoder,bA=0;try{TA.decode(MA,{stream:!0}),bA=1}catch{}function Um(n,e,t){const i=t.length-n-1;if(e>=t[i])return i-1;if(e<=t[n])return n;let r=n,s=i,o=Math.floor((r+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:r=o,o=Math.floor((r+s)/2);return o}function AA(n,e,t,i){const r=[],s=[],o=[];r[0]=1;for(let a=1;a<=t;++a){s[a]=e-i[n+1-a],o[a]=i[n+a]-e;let l=0;for(let c=0;c<a;++c){const h=o[c+1],u=s[a-c],d=r[c]/(h+u);r[c]=l+h*d,l=u*d}r[a]=l}return r}function wA(n,e,t,i){const r=Um(n,i,e),s=AA(r,i,n,e),o=new nt(0,0,0,0);for(let a=0;a<=n;++a){const l=t[r-n+a],c=s[a],h=l.w*c;o.x+=l.x*h,o.y+=l.y*h,o.z+=l.z*h,o.w+=l.w*c}return o}function RA(n,e,t,i,r){const s=[];for(let u=0;u<=t;++u)s[u]=0;const o=[];for(let u=0;u<=i;++u)o[u]=s.slice(0);const a=[];for(let u=0;u<=t;++u)a[u]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let u=1;u<=t;++u){l[u]=e-r[n+1-u],c[u]=r[n+u]-e;let d=0;for(let f=0;f<u;++f){const m=c[f+1],v=l[u-f];a[u][f]=m+v;const p=a[f][u-1]/a[u][f];a[f][u]=d+m*p,d=v*p}a[u][u]=d}for(let u=0;u<=t;++u)o[0][u]=a[u][t];for(let u=0;u<=t;++u){let d=0,f=1;const m=[];for(let v=0;v<=t;++v)m[v]=s.slice(0);m[0][0]=1;for(let v=1;v<=i;++v){let p=0;const g=u-v,b=t-v;u>=v&&(m[f][0]=m[d][0]/a[b+1][g],p=m[f][0]*a[g][b]);const M=g>=-1?1:-g,S=u-1<=b?v-1:t-u;for(let P=M;P<=S;++P)m[f][P]=(m[d][P]-m[d][P-1])/a[b+1][g+P],p+=m[f][P]*a[g+P][b];u<=b&&(m[f][v]=-m[d][v-1]/a[b+1][u],p+=m[f][v]*a[u][b]),o[v][u]=p;const T=d;d=f,f=T}}let h=t;for(let u=1;u<=i;++u){for(let d=0;d<=t;++d)o[u][d]*=h;h*=t-u}return o}function CA(n,e,t,i,r){const s=r<n?r:n,o=[],a=Um(n,i,e),l=RA(a,i,n,s,e),c=[];for(let h=0;h<t.length;++h){const u=t[h].clone(),d=u.w;u.x*=d,u.y*=d,u.z*=d,c[h]=u}for(let h=0;h<=s;++h){const u=c[a-n].clone().multiplyScalar(l[h][0]);for(let d=1;d<=n;++d)u.add(c[a-n+d].clone().multiplyScalar(l[h][d]));o[h]=u}for(let h=s+1;h<=r+1;++h)o[h]=new nt(0,0,0);return o}function PA(n,e){let t=1;for(let r=2;r<=n;++r)t*=r;let i=1;for(let r=2;r<=e;++r)i*=r;for(let r=2;r<=n-e;++r)i*=r;return t/i}function IA(n){const e=n.length,t=[],i=[];for(let s=0;s<e;++s){const o=n[s];t[s]=new N(o.x,o.y,o.z),i[s]=o.w}const r=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(r[s-a].clone().multiplyScalar(PA(s,a)*i[a]));r[s]=o.divideScalar(i[0])}return r}function LA(n,e,t,i,r){const s=CA(n,e,t,i,r);return IA(s)}class DA extends GS{constructor(e,t,i,r,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<i.length;++o){const a=i[o];this.controlPoints[o]=new nt(a.x,a.y,a.z,a.w)}}getPoint(e,t=new N){const i=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=wA(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),i.set(s.x,s.y,s.z)}getTangent(e,t=new N){const i=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=LA(this.degree,this.knots,this.controlPoints,r,1);return i.copy(s[1]).normalize(),i}}let Ke,Ft,dn;class NA extends bi{constructor(e){super(e)}load(e,t,i,r){const s=this,o=s.path===""?as.extractUrlBase(e):s.path,a=new Iu(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e,t){if(VA(e))Ke=new kA().parse(e);else{const r=zm(e);if(!zA(r))throw new Error("THREE.FBXLoader: Unknown format.");if(km(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+km(r));Ke=new BA().parse(r)}const i=new gp(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new OA(i,this.manager).parse(Ke)}}class OA{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Ft=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),r=this.parseDeformers(),s=new UA().parse(r);return this.parseScene(r,s,i),dn}parseConnections(){const e=new Map;return"Connections"in Ke&&Ke.Connections.connections.forEach(function(i){const r=i[0],s=i[1],o=i[2];e.has(r)||e.set(r,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(r).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ke.Objects){const i=Ke.Objects.Video;for(const r in i){const s=i[r],o=parseInt(r);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(i[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(const i in e){const r=e[i];t[r]!==void 0?e[i]=t[r]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,r=i.slice(i.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Ke.Objects){const i=Ke.Objects.Texture;for(const r in i){const s=this.parseTexture(i[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,o=r!==void 0?r.value:0,a=s!==void 0?s.value:0;if(i.wrapS=o===0?Ni:Zn,i.wrapT=a===0?Ni:Zn,"Scaling"in e){const l=e.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;i.offset.x=l[0],i.offset.y=l[1]}return i}loadTexture(e,t){const i=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),r=e.FileName.split(".").pop().toLowerCase(),s=i.has(r)?this.manager.getHandler(`.${r}`):this.textureLoader;if(!s)return console.warn(`FBXLoader: ${r.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new Ht;const o=s.path;o||s.setPath(this.textureLoader.path);const a=Ft.get(e.id).children;let l;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(l=t[a[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&s.setPath(void 0));const c=s.load(l);return s.setPath(o),c}parseMaterials(e){const t=new Map;if("Material"in Ke.Objects){const i=Ke.Objects.Material;for(const r in i){const s=this.parseMaterial(i[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){const i=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!Ft.has(i))return null;const o=this.parseParameters(e,t,i);let a;switch(s.toLowerCase()){case"phong":a=new Pu;break;case"lambert":a=new aE;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new Pu;break}return a.setValues(o),a.name=r,a}parseParameters(e,t,i){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=Ye.toWorkingColorSpace(new we().fromArray(e.Diffuse.value),St):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=Ye.toWorkingColorSpace(new we().fromArray(e.DiffuseColor.value),St)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=Ye.toWorkingColorSpace(new we().fromArray(e.Emissive.value),St):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=Ye.toWorkingColorSpace(new we().fromArray(e.EmissiveColor.value),St)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=Ye.toWorkingColorSpace(new we().fromArray(e.Specular.value),St):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=Ye.toWorkingColorSpace(new we().fromArray(e.SpecularColor.value),St));const s=this;return Ft.get(i).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":r.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,o.ID),r.map!==void 0&&(r.map.colorSpace=St);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,o.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=St);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,o.ID),r.envMap!==void 0&&(r.envMap.mapping=Wo,r.envMap.colorSpace=St);break;case"SpecularColor":r.specularMap=s.getTexture(t,o.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=St);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,o.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(e,t){return"LayeredTexture"in Ke.Objects&&t in Ke.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Ft.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ke.Objects){const i=Ke.Objects.Deformer;for(const r in i){const s=i[r],o=Ft.get(parseInt(r));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,i);a.ID=r,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[r]=a}else if(s.attrType==="BlendShape"){const a={id:r};a.rawTargets=this.parseMorphTargets(o,i),a.id=r,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(r){const s=t[r.ID];if(s.attrType!=="Cluster")return;const o={ID:r.ID,indices:[],weights:[],transformLink:new Ee().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),i.push(o)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Ft.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(a)}return i}parseScene(e,t,i){dn=new un;const r=this.parseModels(e.skeletons,t,i),s=Ke.Objects.Model,o=this;r.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),Ft.get(l.ID).parents.forEach(function(u){const d=r.get(u.ID);d!==void 0&&d.add(l)}),l.parent===null&&dn.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.addGlobalSceneSettings(),dn.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Vm(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new FA().parse();dn.children.length===1&&dn.children[0].isGroup&&(dn.children[0].animations=a,dn=dn.children[0]),dn.animations=a}parseModels(e,t,i){const r=new Map,s=Ke.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=Ft.get(a);let h=this.buildSkeleton(c,e,a,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,i);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new La;break;case"Null":default:h=new un;break}h.name=l.attrName?rt.sanitizeNodeName(l.attrName):"",h.userData.originalName=l.attrName,h.ID=a}this.getTransformData(h,l),r.set(a,h)}return r}buildSkeleton(e,t,i,r){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,h){if(c.ID===o.ID){const u=s;s=new La,s.matrixWorld.copy(c.transformLink),s.name=r?rt.sanitizeNodeName(r):"",s.userData.originalName=r,s.ID=i,l.bones[h]=s,u!==null&&s.add(u)}})}}),s}createCamera(e){let t,i;if(e.children.forEach(function(r){const s=Ke.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new at;else{let r=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(r=1);let s=1;i.NearPlane!==void 0&&(s=i.NearPlane.value/1e3);let o=1e3;i.FarPlane!==void 0&&(o=i.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(a=i.AspectWidth.value,l=i.AspectHeight.value);const c=a/l;let h=45;i.FieldOfView!==void 0&&(h=i.FieldOfView.value);const u=i.FocalLength?i.FocalLength.value:null;switch(r){case 0:t=new cn(h,c,s,o),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new at;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new at;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(r){const s=Ke.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new at;else{let r;i.LightType===void 0?r=0:r=i.LightType.value;let s=16777215;i.Color!==void 0&&(s=Ye.toWorkingColorSpace(new we().fromArray(i.Color.value),St));let o=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(o=0);let a=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?a=0:a=i.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new Ou(s,o,a,l);break;case 1:t=new Uu(s,o);break;case 2:let c=Math.PI/3;i.InnerAngle!==void 0&&(c=tt.degToRad(i.InnerAngle.value));let h=0;i.OuterAngle!==void 0&&(h=tt.degToRad(i.OuterAngle.value),h=Math.max(h,1)),t=new yp(s,o,a,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new Ou(s,o);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let r,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),i.has(l.ID)&&a.push(i.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Pu({name:bi.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(r=new Su(s,o),r.normalizeSkinWeights()):r=new en(s,o),r}createCurve(e,t){const i=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),r=new Hi({name:bi.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new to(i,r)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=go(t.RotationOrder.value):i.eulerOrder=go(0),"Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&Ft.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=Ke.Objects.Model[r.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),dn.add(e.target)):e.lookAt(new N().fromArray(o))}}})}bindSkeleton(e,t,i){const r=this.parsePoseNodes();for(const s in e){const o=e[s];Ft.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Ft.get(c).parents.forEach(function(u){i.has(u.ID)&&i.get(u.ID).bind(new ts(o.bones),r[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ke.Objects){const t=Ke.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const r=t[i].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new Ee().fromArray(s.Matrix.a)}):e[r.Node]=new Ee().fromArray(r.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in Ke){if("AmbientColor"in Ke.GlobalSettings){const e=Ke.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],r=e[2];if(t!==0||i!==0||r!==0){const s=new we().setRGB(t,i,r,St);dn.add(new Mp(s,1))}}"UnitScaleFactor"in Ke.GlobalSettings&&(dn.userData.unitScaleFactor=Ke.GlobalSettings.UnitScaleFactor.value)}}}class UA{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Ke.Objects){const i=Ke.Objects.Geometry;for(const r in i){const s=Ft.get(parseInt(r)),o=this.parseGeometry(s,i[r],e);t.set(parseInt(r),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const r=i.skeletons,s=[],o=e.parents.map(function(u){return Ke.Objects.Model[u.ID]});if(o.length===0)return;const a=e.children.reduce(function(u,d){return r[d.ID]!==void 0&&(u=r[d.ID]),u},null);e.children.forEach(function(u){i.morphTargets[u.ID]!==void 0&&s.push(i.morphTargets[u.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=go(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=Vm(c);return this.genGeometry(t,a,s,h)}genGeometry(e,t,i,r){const s=new Dt;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new qt(a.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new qt(a.colors,3)),t&&(s.setAttribute("skinIndex",new su(a.weightsIndices,4)),s.setAttribute("skinWeight",new qt(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new ke().getNormalMatrix(r),h=new qt(a.normal,3);h.applyNormalMatrix(c),s.setAttribute("normal",h)}if(a.uvs.forEach(function(c,h){const u=h===0?"uv":`uv${h}`;s.setAttribute(u,new qt(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(u,d){u!==c&&(s.addGroup(h,d-h,c),c=u,h=d)}),s.groups.length>0){const u=s.groups[s.groups.length-1],d=u.start+u.count;d!==a.materialIndex.length&&s.addGroup(d,a.materialIndex.length-d,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,i,r),s}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(o,a){i.weightTable[o]===void 0&&(i.weightTable[o]=[]),i.weightTable[o].push({id:s,weight:r.weights[a]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,r=0,s=!1,o=[],a=[],l=[],c=[],h=[],u=[];const d=this;return e.vertexIndices.forEach(function(f,m){let v,p=!1;f<0&&(f=f^-1,p=!0);let g=[],b=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const M=Qa(m,i,f,e.color);l.push(M[0],M[1],M[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(M){b.push(M.weight),g.push(M.id)}),b.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const M=[0,0,0,0],S=[0,0,0,0];b.forEach(function(T,P){let C=T,B=g[P];S.forEach(function(K,_,E){if(C>K){E[_]=C,C=K;const z=M[_];M[_]=B,B=z}})}),g=M,b=S}for(;b.length<4;)b.push(0),g.push(0);for(let M=0;M<4;++M)h.push(b[M]),u.push(g[M])}if(e.normal){const M=Qa(m,i,f,e.normal);a.push(M[0],M[1],M[2])}e.material&&e.material.mappingType!=="AllSame"&&(v=Qa(m,i,f,e.material)[0],v<0&&(d.negativeMaterialIndices=!0,v=0)),e.uv&&e.uv.forEach(function(M,S){const T=Qa(m,i,f,M);c[S]===void 0&&(c[S]=[]),c[S].push(T[0]),c[S].push(T[1])}),r++,p&&(d.genFace(t,e,o,v,a,l,c,h,u,r),i++,r=0,o=[],a=[],l=[],c=[],h=[],u=[])}),t}getNormalNewell(e){const t=new N(0,0,0);for(let i=0;i<e.length;i++){const r=e[i],s=e[(i+1)%e.length];t.x+=(r.y-s.y)*(r.z+s.z),t.y+=(r.z-s.z)*(r.x+s.x),t.z+=(r.x-s.x)*(r.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),r=(Math.abs(t.z)>.5?new N(0,1,0):new N(0,0,1)).cross(t).normalize(),s=t.clone().cross(r).normalize();return{normal:t,tangent:r,bitangent:s}}flattenVertex(e,t,i){return new $e(e.dot(t),e.dot(i))}genFace(e,t,i,r,s,o,a,l,c,h){let u;if(h>3){const d=[],f=t.baseVertexPositions||t.vertexPositions;for(let g=0;g<i.length;g+=3)d.push(new N(f[i[g]],f[i[g+1]],f[i[g+2]]));const{tangent:m,bitangent:v}=this.getNormalTangentAndBitangent(d),p=[];for(const g of d)p.push(this.flattenVertex(g,m,v));u=Ru.triangulateShape(p,[])}else u=[[0,1,2]];for(const[d,f,m]of u)e.vertex.push(t.vertexPositions[i[d*3]]),e.vertex.push(t.vertexPositions[i[d*3+1]]),e.vertex.push(t.vertexPositions[i[d*3+2]]),e.vertex.push(t.vertexPositions[i[f*3]]),e.vertex.push(t.vertexPositions[i[f*3+1]]),e.vertex.push(t.vertexPositions[i[f*3+2]]),e.vertex.push(t.vertexPositions[i[m*3]]),e.vertex.push(t.vertexPositions[i[m*3+1]]),e.vertex.push(t.vertexPositions[i[m*3+2]]),t.skeleton&&(e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[m*4]),e.vertexWeights.push(l[m*4+1]),e.vertexWeights.push(l[m*4+2]),e.vertexWeights.push(l[m*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[m*4]),e.weightsIndices.push(c[m*4+1]),e.weightsIndices.push(c[m*4+2]),e.weightsIndices.push(c[m*4+3])),t.color&&(e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[m*3]),e.colors.push(o[m*3+1]),e.colors.push(o[m*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[d*3]),e.normal.push(s[d*3+1]),e.normal.push(s[d*3+2]),e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2]),e.normal.push(s[m*3]),e.normal.push(s[m*3+1]),e.normal.push(s[m*3+2])),t.uv&&t.uv.forEach(function(v,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(a[p][d*2]),e.uvs[p].push(a[p][d*2+1]),e.uvs[p].push(a[p][f*2]),e.uvs[p].push(a[p][f*2+1]),e.uvs[p].push(a[p][m*2]),e.uvs[p].push(a[p][m*2+1])})}addMorphTargets(e,t,i,r){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;i.forEach(function(o){o.rawTargets.forEach(function(a){const l=Ke.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,a.name)})})}genMorphGeometry(e,t,i,r,s){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=i.Vertices!==void 0?i.Vertices.a:[],c=i.Indexes!==void 0?i.Indexes.a:[],h=e.attributes.position.count*3,u=new Float32Array(h);for(let v=0;v<c.length;v++){const p=c[v]*3;u[p]=l[v*3],u[p+1]=l[v*3+1],u[p+2]=l[v*3+2]}const d={vertexIndices:a,vertexPositions:u,baseVertexPositions:o},f=this.genBuffers(d),m=new qt(f.vertex,3);m.name=s||i.attrName,m.applyMatrix4(r),e.morphAttributes.position.push(m)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Normals.a;let s=[];return i==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.UV.a;let s=[];return i==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Colors.a;let s=[];i==="IndexToDirect"&&(s=e.ColorIndex.a);for(let o=0,a=new we;o<r.length;o+=4)a.fromArray(r,o),Ye.toWorkingColorSpace(a,St),a.toArray(r,o);return{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const r=e.Materials.a,s=[];for(let o=0;o<r.length;++o)s.push(o);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:i}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Dt;const i=t-1,r=e.KnotVector.a,s=[],o=e.Points.a;for(let u=0,d=o.length;u<d;u+=4)s.push(new nt().fromArray(o,u));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=i,l=r.length-1-a;for(let u=0;u<i;++u)s.push(s[u])}const h=new DA(i,r,s,a,l).getPoints(s.length*12);return new Dt().setFromPoints(h)}}class FA{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const r=t[i],s=this.addClip(r);e.push(s)}return e}parseClips(){if(Ke.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ke.Objects.AnimationCurveNode,t=new Map;for(const i in e){const r=e[i];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Ke.Objects.AnimationCurve;for(const i in t){const r={id:t[i].id,times:t[i].KeyTime.a.map(HA),values:t[i].KeyValueFloat.a},s=Ft.get(r.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=r:a.match(/Y/)?e.get(o).curves.y=r:a.match(/Z/)?e.get(o).curves.z=r:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=r)}}}parseAnimationLayers(e){const t=Ke.Objects.AnimationLayer,i=new Map;for(const r in t){const s=[],o=Ft.get(parseInt(r));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(s[c]===void 0){const u=Ft.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(u!==void 0){const d=Ke.Objects.Model[u.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?rt.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};dn.traverse(function(m){m.ID===d.id&&(f.transform=m.matrix,m.userData.transformData&&(f.eulerOrder=m.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Ee),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),s[c]=f}}s[c]&&(s[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(s[c]===void 0){const u=Ft.get(l.ID).parents.filter(function(g){return g.relationship!==void 0})[0].ID,d=Ft.get(u).parents[0].ID,f=Ft.get(d).parents[0].ID,m=Ft.get(f).parents[0].ID,v=Ke.Objects.Model[m],p={modelName:v.attrName?rt.sanitizeNodeName(v.attrName):"",morphName:Ke.Objects.Deformer[u].attrName};s[c]=p}s[c][h.attr]=h}}}),i.set(parseInt(r),s))}return i}parseAnimStacks(e){const t=Ke.Objects.AnimationStack,i={};for(const r in t){const s=Ft.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);i[r]={name:t[r].attrName,layer:o}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(r){t=t.concat(i.generateTracks(r))}),new os(e.name,-1,t)}generateTracks(e){const t=[];let i=new N,r=new N;if(e.transform&&e.transform.decompose(i,new Ie,r),i=i.toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,i,r){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,i);return new Ti(e+"."+r,s,o)}generateRotationTrack(e,t,i,r,s){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const d=this.interpolateRotations(t.x,t.y,t.z,s);o=d[0],a=d[1]}const l=go(0);i!==void 0&&(i=i.map(tt.degToRad),i.push(l),i=new Lt().fromArray(i),i=new Ie().setFromEuler(i)),r!==void 0&&(r=r.map(tt.degToRad),r.push(l),r=new Lt().fromArray(r),r=new Ie().setFromEuler(r).invert());const c=new Ie,h=new Lt,u=[];if(!a||!o)return new ni(e+".quaternion",[0],[0]);for(let d=0;d<a.length;d+=3)h.set(a[d],a[d+1],a[d+2],s),c.setFromEuler(h),i!==void 0&&c.premultiply(i),r!==void 0&&c.multiply(r),d>2&&new Ie().fromArray(u,(d-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,d/3*4);return new ni(e+".quaternion",o,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(s){return s/100}),r=dn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new mr(e.modelName+".morphTargetInfluences["+r+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,r){return i-r}),t.length>1){let i=1,r=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==r&&(t[i]=o,r=o,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const r=i,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const h=t.x.values[o];s.push(h),r[0]=h}else s.push(r[0]);if(a!==-1){const h=t.y.values[a];s.push(h),r[1]=h}else s.push(r[1]);if(l!==-1){const h=t.z.values[l];s.push(h),r[2]=h}else s.push(r[2])}),s}interpolateRotations(e,t,i,r){const s=[],o=[];s.push(e.times[0]),o.push(tt.degToRad(e.values[0])),o.push(tt.degToRad(t.values[0])),o.push(tt.degToRad(i.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],i.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(tt.degToRad),h=[e.values[a],t.values[a],i.values[a]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;const u=h.map(tt.degToRad),d=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const v=Math.max(...f)/180,p=new Lt(...c,r),g=new Lt(...u,r),b=new Ie().setFromEuler(p),M=new Ie().setFromEuler(g);b.dot(M)&&M.set(-M.x,-M.y,-M.z,-M.w);const S=e.times[a-1],T=e.times[a]-S,P=new Ie,C=new Lt;for(let B=0;B<1;B+=1/v)P.copy(b.clone().slerp(M.clone(),B)),s.push(S+B*T),C.setFromQuaternion(P,r),o.push(C.x),o.push(C.y),o.push(C.z)}else s.push(e.times[a]),o.push(tt.degToRad(e.values[a])),o.push(tt.degToRad(t.values[a])),o.push(tt.degToRad(i.values[a]))}return[s,o]}}class BA{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Bm,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(r,s){const o=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(o||a)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,i[++s]):h?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:i},o=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,s):i in a?(i==="PoseNode"?a.PoseNode.push(s):a[i].id!==void 0&&(a[i]={},a[i][a[i].id]=a[i]),o.id!==""&&(a[i][o.id]=s)):typeof o.id=="number"?(a[i]={},a[i][o.id]=s):i!=="Properties70"&&(i==="PoseNode"?a[i]=[s]:a[i]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",r="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:i,type:r}}parseNodeProperty(e,t,i){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=i.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let u=s.split(",").slice(3);u=u.map(function(d){return d.trim().replace(/^"/,"")}),r="connections",s=[c,h],WA(s,u),o[r]===void 0&&(o[r]=[])}r==="Node"&&(o.id=s),r in o&&Array.isArray(o[r])?o[r].push(s):r!=="a"?o[r]=s:o.a=s,this.setCurrentProp(o,r),r==="a"&&s.slice(-1)!==","&&(o.a=hh(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=hh(t.a))}parseNodeSpecialProperty(e,t,i){const r=i.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],o=r[1],a=r[2],l=r[3];let c=r[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=hh(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class kA{parse(e){const t=new Fm(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const r=new Bm;for(;!this.endOfContent(t);){const s=this.parseNode(t,i);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(r===0)return null;const l=[];for(let d=0;d<s;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(i.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(a,i,d)}return i.propertyList=l,typeof c=="number"&&(i.id=c),h!==""&&(i.attrName=h),u!==""&&(i.attrType=u),a!==""&&(i.name=a),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const r=i.propertyList[0];Array.isArray(r)?(t[i.name]=i,i.a=r):t[i.name]=r}else if(e==="Connections"&&i.name==="C"){const r=[];i.propertyList.forEach(function(s,o){o!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(i.name==="Properties70")Object.keys(i).forEach(function(s){t[s]=i[s]});else if(e==="Properties70"&&i.name==="P"){let r=i.propertyList[0],s=i.propertyList[1];const o=i.propertyList[2],a=i.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],t[r]={type:s,type2:o,flag:a,value:l}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}const a=EA(new Uint8Array(e.getArrayBuffer(o))),l=new Fm(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Fm{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let i=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const r=i.indexOf(0);return r>=0&&(i=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(i)}}class Bm{add(e,t){this[e]=t}}function VA(n){const e="Kaydara FBX Binary  \0";return n.byteLength>=e.length&&e===zm(n,0,e.length)}function zA(n){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(r){const s=n[r-1];return n=n.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(i(1)===e[r])return!1;return!0}function km(n){const e=/FBXVersion: (\d+)/,t=n.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function HA(n){return n/46186158e3}const GA=[];function Qa(n,e,t,i){let r;switch(i.mappingType){case"ByPolygonVertex":r=n;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(r=i.indices[r]);const s=r*i.dataSize,o=s+i.dataSize;return XA(GA,i.buffer,s,o)}const uh=new Lt,ps=new N;function Vm(n){const e=new Ee,t=new Ee,i=new Ee,r=new Ee,s=new Ee,o=new Ee,a=new Ee,l=new Ee,c=new Ee,h=new Ee,u=new Ee,d=new Ee,f=n.inheritType?n.inheritType:0;n.translation&&e.setPosition(ps.fromArray(n.translation));const m=go(0);if(n.preRotation){const E=n.preRotation.map(tt.degToRad);E.push(m),t.makeRotationFromEuler(uh.fromArray(E))}if(n.rotation){const E=n.rotation.map(tt.degToRad);E.push(n.eulerOrder||m),i.makeRotationFromEuler(uh.fromArray(E))}if(n.postRotation){const E=n.postRotation.map(tt.degToRad);E.push(m),r.makeRotationFromEuler(uh.fromArray(E)),r.invert()}n.scale&&s.scale(ps.fromArray(n.scale)),n.scalingOffset&&a.setPosition(ps.fromArray(n.scalingOffset)),n.scalingPivot&&o.setPosition(ps.fromArray(n.scalingPivot)),n.rotationOffset&&l.setPosition(ps.fromArray(n.rotationOffset)),n.rotationPivot&&c.setPosition(ps.fromArray(n.rotationPivot)),n.parentMatrixWorld&&(u.copy(n.parentMatrix),h.copy(n.parentMatrixWorld));const v=t.clone().multiply(i).multiply(r),p=new Ee;p.extractRotation(h);const g=new Ee;g.copyPosition(h);const b=g.clone().invert().multiply(h),M=p.clone().invert().multiply(b),S=s,T=new Ee;if(f===0)T.copy(p).multiply(v).multiply(M).multiply(S);else if(f===1)T.copy(p).multiply(M).multiply(v).multiply(S);else{const z=new Ee().scale(new N().setFromMatrixScale(u)).clone().invert(),w=M.clone().multiply(z);T.copy(p).multiply(v).multiply(w).multiply(S)}const P=c.clone().invert(),C=o.clone().invert();let B=e.clone().multiply(l).multiply(c).multiply(t).multiply(i).multiply(r).multiply(P).multiply(a).multiply(o).multiply(s).multiply(C);const K=new Ee().copyPosition(B),_=h.clone().multiply(K);return d.copyPosition(_),B=d.clone().multiply(T),B.premultiply(h.invert()),B}function go(n){n=n||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return n===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[n]}function hh(n){return n.split(",").map(function(t){return parseFloat(t)})}function zm(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=n.byteLength),new TextDecoder().decode(new Uint8Array(n,e,t))}function WA(n,e){for(let t=0,i=n.length,r=e.length;t<r;t++,i++)n[i]=e[t]}function XA(n,e,t,i){for(let r=t,s=0;r<i;r++,s++)n[s]=e[r];return n}const $A={mixamorigHips:"hips",mixamorigSpine:"spine",mixamorigSpine1:"chest",mixamorigSpine2:"upperChest",mixamorigNeck:"neck",mixamorigHead:"head",mixamorigLeftShoulder:"leftShoulder",mixamorigLeftArm:"leftUpperArm",mixamorigLeftForeArm:"leftLowerArm",mixamorigLeftHand:"leftHand",mixamorigLeftHandThumb1:"leftThumbMetacarpal",mixamorigLeftHandThumb2:"leftThumbProximal",mixamorigLeftHandThumb3:"leftThumbDistal",mixamorigLeftHandIndex1:"leftIndexProximal",mixamorigLeftHandIndex2:"leftIndexIntermediate",mixamorigLeftHandIndex3:"leftIndexDistal",mixamorigLeftHandMiddle1:"leftMiddleProximal",mixamorigLeftHandMiddle2:"leftMiddleIntermediate",mixamorigLeftHandMiddle3:"leftMiddleDistal",mixamorigLeftHandRing1:"leftRingProximal",mixamorigLeftHandRing2:"leftRingIntermediate",mixamorigLeftHandRing3:"leftRingDistal",mixamorigLeftHandPinky1:"leftLittleProximal",mixamorigLeftHandPinky2:"leftLittleIntermediate",mixamorigLeftHandPinky3:"leftLittleDistal",mixamorigRightShoulder:"rightShoulder",mixamorigRightArm:"rightUpperArm",mixamorigRightForeArm:"rightLowerArm",mixamorigRightHand:"rightHand",mixamorigRightHandPinky1:"rightLittleProximal",mixamorigRightHandPinky2:"rightLittleIntermediate",mixamorigRightHandPinky3:"rightLittleDistal",mixamorigRightHandRing1:"rightRingProximal",mixamorigRightHandRing2:"rightRingIntermediate",mixamorigRightHandRing3:"rightRingDistal",mixamorigRightHandMiddle1:"rightMiddleProximal",mixamorigRightHandMiddle2:"rightMiddleIntermediate",mixamorigRightHandMiddle3:"rightMiddleDistal",mixamorigRightHandIndex1:"rightIndexProximal",mixamorigRightHandIndex2:"rightIndexIntermediate",mixamorigRightHandIndex3:"rightIndexDistal",mixamorigRightHandThumb1:"rightThumbMetacarpal",mixamorigRightHandThumb2:"rightThumbProximal",mixamorigRightHandThumb3:"rightThumbDistal",mixamorigLeftUpLeg:"leftUpperLeg",mixamorigLeftLeg:"leftLowerLeg",mixamorigLeftFoot:"leftFoot",mixamorigLeftToeBase:"leftToes",mixamorigRightUpLeg:"rightUpperLeg",mixamorigRightLeg:"rightLowerLeg",mixamorigRightFoot:"rightFoot",mixamorigRightToeBase:"rightToes"};function Hm(n,e){return new NA().loadAsync(n).then(i=>{var v,p,g;const r=os.findByName(i.animations,"mixamo.com"),s=[],o=new Ie,a=new Ie,l=new Ie,c=new N,h=((v=i.getObjectByName("mixamorigHips"))==null?void 0:v.position.y)??0,u=((g=(p=e.humanoid)==null?void 0:p.getNormalizedBoneNode("hips"))==null?void 0:g.getWorldPosition(c).y)??0,d=e.scene.getWorldPosition(c).y,m=Math.abs(u-d)/h;return r.tracks.forEach(b=>{var B,K,_;const M=b.name.split("."),S=M[0],T=$A[S],P=(K=(B=e.humanoid)==null?void 0:B.getNormalizedBoneNode(T))==null?void 0:K.name,C=i.getObjectByName(S);if(P!=null&&C!=null){const E=M[1];if(C.getWorldQuaternion(o).invert(),(_=C.parent)==null||_.getWorldQuaternion(a),b instanceof ni){for(let z=0;z<b.values.length;z+=4){const w=b.values.slice(z,z+4);l.fromArray(w),l.premultiply(a).multiply(o),l.toArray(w),w.forEach((A,D)=>{b.values[D+z]=A})}s.push(new ni(`${P}.${E}`,b.times,b.values.map((z,w)=>{var A;return((A=e.meta)==null?void 0:A.metaVersion)==="0"&&w%2===0?-z:z})))}else if(b instanceof Ti){const z=b.values.map((w,A)=>{var D;return(((D=e.meta)==null?void 0:D.metaVersion)==="0"&&A%3!==1?-w:w)*m});s.push(new Ti(`${P}.${E}`,b.times,z))}}}),new os("vrmAnimation",r.duration,s)})}class jA{constructor(e){jt(this,"vrm");jt(this,"expressionGroups",{happy:["happy","relaxed"],angry:["angry","Surprised"],sad:["sad","neutral"]});jt(this,"expressionTimer",0);jt(this,"expressionDuration",0);jt(this,"transitionProgress",0);jt(this,"currentExpressionSet",{});jt(this,"targetExpressionSet",{});jt(this,"blinkTimer",0);jt(this,"blinkState",0);jt(this,"blinkDuration",.1);jt(this,"nextBlinkTime",Math.random()*6+4);jt(this,"blinkLeftOffset",Math.random()*.02);jt(this,"blinkRightOffset",-Math.random()*.02);this.vrm=e,this.resetExpressions()}resetExpressions(){this.currentExpressionSet={Surprised:0,angry:0,happy:0,neutral:1,relaxed:0,sad:0},this.targetExpressionSet={...this.currentExpressionSet}}pickNewExpressionSet(e){const t=st.Objects.keys(this.expressionGroups),i=e?this.expressionGroups[e]:this.expressionGroups[t[Math.floor(Math.random()*t.length)]],r={...this.currentExpressionSet};i.forEach(s=>{r[s]=Math.random()*.3+.2}),r.neutral=Math.random()*.5,this.targetExpressionSet=r,this.expressionDuration=Math.random()*10+10,this.expressionTimer=0,this.transitionProgress=0}updateState(e){this.updateExpressions(e),this.updateBlink(e)}updateExpressions(e){this.expressionTimer+=e,this.transitionProgress+=e/6,this.transitionProgress=Math.min(this.transitionProgress,1),[...this.expressionGroups.angry,...this.expressionGroups.happy,...this.expressionGroups.sad].forEach(i=>{var a;const r=this.currentExpressionSet[i],s=this.targetExpressionSet[i],o=r+(s-r)*this.transitionProgress;(a=this.vrm.expressionManager)==null||a.setValue(i,o*.5)}),this.expressionTimer>=this.expressionDuration&&(this.currentExpressionSet={...this.targetExpressionSet},this.pickNewExpressionSet())}updateBlink(e){var t,i,r,s;if(this.blinkTimer+=e,this.blinkState===0)this.blinkTimer>=this.nextBlinkTime&&(this.blinkState=1,this.blinkTimer=0);else if(this.blinkState===1){const o=this.blinkTimer/this.blinkDuration,a=Math.min(o+this.blinkLeftOffset,1),l=Math.min(o+this.blinkRightOffset,1);(t=this.vrm.expressionManager)==null||t.setValue("blinkLeft",a),(i=this.vrm.expressionManager)==null||i.setValue("blinkRight",l),o>=1&&(this.blinkState=2,this.blinkTimer=0)}else if(this.blinkState===2)this.blinkTimer>=.05&&(this.blinkState=3,this.blinkTimer=0);else if(this.blinkState===3){const o=1-this.blinkTimer/this.blinkDuration,a=Math.max(o+this.blinkLeftOffset,0),l=Math.max(o+this.blinkRightOffset,0);(r=this.vrm.expressionManager)==null||r.setValue("blinkLeft",a),(s=this.vrm.expressionManager)==null||s.setValue("blinkRight",l),o<=0&&(this.blinkState=0,this.blinkTimer=0,this.nextBlinkTime=Math.random()*6+4)}}}const YA=({vrm:n,analyserNode:e,vrmState:t,levels:i})=>{if(!e)return;const r=new Uint8Array(e.frequencyBinCount);if(e.getByteTimeDomainData(r),Math.max(...r)/128-1>.3&&t.pickNewExpressionSet("happy"),n.expressionManager)for(const[a,l]of Object.entries(i))n.expressionManager.setValue(a.toLocaleLowerCase(),l*.15)},dh={fromVrm:async({vrmUrl:n,canvas:e,idleAnimationUrl:t,cameraOptions:i})=>{const{camera:r,scene:s,vrm:o,renderer:a}=await cA({canvas:e,vrmUrl:n,vrmCameraOptions:i}),l=new NE(o.scene);if(t){const u=await Hm(t,o);console.log("clip",u),l.clipAction(u).play()}const c=new jA(o);return o.scene.position.y=.5,{destroy:()=>{console.log("disposing scene"),a.dispose()},vrmModel:o,updateTick:({tick:u})=>{const d=u.deltaMs/1e3;a.render(s,r),o&&(o.update(d),l.update(d),c.updateState(d))},updatePhonemeLevels:({phonemeLevels:u,analyserNode:d})=>{YA({vrm:o,vrmState:c,levels:u,analyserNode:d})},setAnimation:async u=>{const d=await Hm(u,o);console.log("clip",d),l.stopAllAction(),l.clipAction(d).play()},setExpression:(u,d=.5)=>{o.expressionManager&&o.expressionManager.setValue(u,d)},getExpressions:()=>o.expressionManager?o.expressionManager.expressions.map(u=>u.expressionName):[]}},fromGltf:X_};var qA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var fh={exports:{}},_o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function KA(){if(Wm)return _o;Wm=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,r,s){var o=null;if(s!==void 0&&(o=""+s),r.key!==void 0&&(o=""+r.key),"key"in r){s={};for(var a in r)a!=="key"&&(s[a]=r[a])}else s=r;return r=s.ref,{$$typeof:n,type:i,key:o,ref:r!==void 0?r:null,props:s}}return _o.Fragment=e,_o.jsx=t,_o.jsxs=t,_o}var vo={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function ZA(){return Xm||(Xm=1,process.env.NODE_ENV!=="production"&&function(){function n(y){if(y==null)return null;if(typeof y=="function")return y.$$typeof===F?null:y.displayName||y.name||null;if(typeof y=="string")return y;switch(y){case P:return"Fragment";case T:return"Portal";case B:return"Profiler";case C:return"StrictMode";case z:return"Suspense";case w:return"SuspenseList"}if(typeof y=="object")switch(typeof y.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),y.$$typeof){case _:return(y.displayName||"Context")+".Provider";case K:return(y._context.displayName||"Context")+".Consumer";case E:var H=y.render;return y=y.displayName,y||(y=H.displayName||H.name||"",y=y!==""?"ForwardRef("+y+")":"ForwardRef"),y;case A:return H=y.displayName||null,H!==null?H:n(y.type)||"Memo";case D:H=y._payload,y=y._init;try{return n(y(H))}catch{}}return null}function e(y){return""+y}function t(y){try{e(y);var H=!1}catch{H=!0}if(H){H=console;var V=H.error,ie=typeof Symbol=="function"&&Symbol.toStringTag&&y[Symbol.toStringTag]||y.constructor.name||"Object";return V.call(H,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",ie),e(y)}}function i(){}function r(){if(W===0){j=console.log,le=console.info,re=console.warn,de=console.error,pe=console.group,fe=console.groupCollapsed,xe=console.groupEnd;var y={configurable:!0,enumerable:!0,value:i,writable:!0};Object.defineProperties(console,{info:y,log:y,warn:y,error:y,group:y,groupCollapsed:y,groupEnd:y})}W++}function s(){if(W--,W===0){var y={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:G({},y,{value:j}),info:G({},y,{value:le}),warn:G({},y,{value:re}),error:G({},y,{value:de}),group:G({},y,{value:pe}),groupCollapsed:G({},y,{value:fe}),groupEnd:G({},y,{value:xe})})}0>W&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function o(y){if($===void 0)try{throw Error()}catch(V){var H=V.stack.trim().match(/\n( *(at )?)/);$=H&&H[1]||"",O=-1<V.stack.indexOf(`
    at`)?" (<anonymous>)":-1<V.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$+y+O}function a(y,H){if(!y||_e)return"";var V=Ue.get(y);if(V!==void 0)return V;_e=!0,V=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var ie=null;ie=Q.H,Q.H=null,r();try{var ne={DetermineComponentFrameRoot:function(){try{if(H){var Ne=function(){throw Error()};if(Object.defineProperty(Ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ne,[])}catch(ze){var Ae=ze}Reflect.construct(y,[],Ne)}else{try{Ne.call()}catch(ze){Ae=ze}y.call(Ne.prototype)}}else{try{throw Error()}catch(ze){Ae=ze}(Ne=y())&&typeof Ne.catch=="function"&&Ne.catch(function(){})}}catch(ze){if(ze&&Ae&&typeof ze.stack=="string")return[ze.stack,Ae.stack]}return[null,null]}};ne.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var ge=Object.getOwnPropertyDescriptor(ne.DetermineComponentFrameRoot,"name");ge&&ge.configurable&&Object.defineProperty(ne.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var ce=ne.DetermineComponentFrameRoot(),ye=ce[0],je=ce[1];if(ye&&je){var ue=ye.split(`
`),Me=je.split(`
`);for(ce=ge=0;ge<ue.length&&!ue[ge].includes("DetermineComponentFrameRoot");)ge++;for(;ce<Me.length&&!Me[ce].includes("DetermineComponentFrameRoot");)ce++;if(ge===ue.length||ce===Me.length)for(ge=ue.length-1,ce=Me.length-1;1<=ge&&0<=ce&&ue[ge]!==Me[ce];)ce--;for(;1<=ge&&0<=ce;ge--,ce--)if(ue[ge]!==Me[ce]){if(ge!==1||ce!==1)do if(ge--,ce--,0>ce||ue[ge]!==Me[ce]){var Be=`
`+ue[ge].replace(" at new "," at ");return y.displayName&&Be.includes("<anonymous>")&&(Be=Be.replace("<anonymous>",y.displayName)),typeof y=="function"&&Ue.set(y,Be),Be}while(1<=ge&&0<=ce);break}}}finally{_e=!1,Q.H=ie,s(),Error.prepareStackTrace=V}return ue=(ue=y?y.displayName||y.name:"")?o(ue):"",typeof y=="function"&&Ue.set(y,ue),ue}function l(y){if(y==null)return"";if(typeof y=="function"){var H=y.prototype;return a(y,!(!H||!H.isReactComponent))}if(typeof y=="string")return o(y);switch(y){case z:return o("Suspense");case w:return o("SuspenseList")}if(typeof y=="object")switch(y.$$typeof){case E:return y=a(y.render,!1),y;case A:return l(y.type);case D:H=y._payload,y=y._init;try{return l(y(H))}catch{}}return""}function c(){var y=Q.A;return y===null?null:y.getOwner()}function h(y){if(k.call(y,"key")){var H=Object.getOwnPropertyDescriptor(y,"key").get;if(H&&H.isReactWarning)return!1}return y.key!==void 0}function u(y,H){function V(){Le||(Le=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",H))}V.isReactWarning=!0,Object.defineProperty(y,"key",{get:V,configurable:!0})}function d(){var y=n(this.type);return et[y]||(et[y]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),y=this.props.ref,y!==void 0?y:null}function f(y,H,V,ie,ne,ge){return V=ge.ref,y={$$typeof:S,type:y,key:H,props:ge,_owner:ne},(V!==void 0?V:null)!==null?Object.defineProperty(y,"ref",{enumerable:!1,get:d}):Object.defineProperty(y,"ref",{enumerable:!1,value:null}),y._store={},Object.defineProperty(y._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(y,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(y.props),Object.freeze(y)),y}function m(y,H,V,ie,ne,ge){if(typeof y=="string"||typeof y=="function"||y===P||y===B||y===C||y===z||y===w||y===R||typeof y=="object"&&y!==null&&(y.$$typeof===D||y.$$typeof===A||y.$$typeof===_||y.$$typeof===K||y.$$typeof===E||y.$$typeof===te||y.getModuleId!==void 0)){var ce=H.children;if(ce!==void 0)if(ie)if(ae(ce)){for(ie=0;ie<ce.length;ie++)v(ce[ie],y);Object.freeze&&Object.freeze(ce)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else v(ce,y)}else ce="",(y===void 0||typeof y=="object"&&y!==null&&Object.keys(y).length===0)&&(ce+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),y===null?ie="null":ae(y)?ie="array":y!==void 0&&y.$$typeof===S?(ie="<"+(n(y.type)||"Unknown")+" />",ce=" Did you accidentally export a JSX literal instead of a component?"):ie=typeof y,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",ie,ce);if(k.call(H,"key")){ce=n(y);var ye=Object.keys(H).filter(function(ue){return ue!=="key"});ie=0<ye.length?"{key: someKey, "+ye.join(": ..., ")+": ...}":"{key: someKey}",De[ce+ie]||(ye=0<ye.length?"{"+ye.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ie,ce,ye,ce),De[ce+ie]=!0)}if(ce=null,V!==void 0&&(t(V),ce=""+V),h(H)&&(t(H.key),ce=""+H.key),"key"in H){V={};for(var je in H)je!=="key"&&(V[je]=H[je])}else V=H;return ce&&u(V,typeof y=="function"?y.displayName||y.name||"Unknown":y),f(y,ce,ge,ne,c(),V)}function v(y,H){if(typeof y=="object"&&y&&y.$$typeof!==We){if(ae(y))for(var V=0;V<y.length;V++){var ie=y[V];p(ie)&&g(ie,H)}else if(p(y))y._store&&(y._store.validated=1);else if(y===null||typeof y!="object"?V=null:(V=U&&y[U]||y["@@iterator"],V=typeof V=="function"?V:null),typeof V=="function"&&V!==y.entries&&(V=V.call(y),V!==y))for(;!(y=V.next()).done;)p(y.value)&&g(y.value,H)}}function p(y){return typeof y=="object"&&y!==null&&y.$$typeof===S}function g(y,H){if(y._store&&!y._store.validated&&y.key==null&&(y._store.validated=1,H=b(H),!L[H])){L[H]=!0;var V="";y&&y._owner!=null&&y._owner!==c()&&(V=null,typeof y._owner.tag=="number"?V=n(y._owner.type):typeof y._owner.name=="string"&&(V=y._owner.name),V=" It was passed a child from "+V+".");var ie=Q.getCurrentStack;Q.getCurrentStack=function(){var ne=l(y.type);return ie&&(ne+=ie()||""),ne},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',H,V),Q.getCurrentStack=ie}}function b(y){var H="",V=c();return V&&(V=n(V.type))&&(H=`

Check the render method of \``+V+"`."),H||(y=n(y))&&(H=`

Check the top-level render call using <`+y+">."),H}var M=Ze,S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),_=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),w=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),R=Symbol.for("react.offscreen"),U=Symbol.iterator,F=Symbol.for("react.client.reference"),Q=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=Object.prototype.hasOwnProperty,G=Object.assign,te=Symbol.for("react.client.reference"),ae=Array.isArray,W=0,j,le,re,de,pe,fe,xe;i.__reactDisabledLog=!0;var $,O,_e=!1,Ue=new(typeof WeakMap=="function"?WeakMap:Map),We=Symbol.for("react.client.reference"),Le,et={},De={},L={};vo.Fragment=P,vo.jsx=function(y,H,V,ie,ne){return m(y,H,V,!1,ie,ne)},vo.jsxs=function(y,H,V,ie,ne){return m(y,H,V,!0,ie,ne)}}()),vo}process.env.NODE_ENV==="production"?fh.exports=KA():fh.exports=ZA();var xt=fh.exports;function ji(n,...e){const t=new URL(`https://mui.com/production-error/?code=${n}`);return e.forEach(i=>t.searchParams.append("args[]",i)),`Minified MUI error #${n}; visit ${t} for the full message.`}function Ja(){return Ja=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ja.apply(null,arguments)}function $m(n){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=n(t)),e[t]}}var QA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,JA=$m(function(n){return QA.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),ew=!1;function tw(n){if(n.sheet)return n.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===n)return document.styleSheets[e]}function nw(n){var e=document.createElement("style");return e.setAttribute("data-emotion",n.key),n.nonce!==void 0&&e.setAttribute("nonce",n.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var iw=function(){function n(t){var i=this;this._insertTag=function(r){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,s),i.tags.push(r)},this.isSpeedy=t.speedy===void 0?!ew:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=n.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(nw(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var s=tw(r);try{s.insertRule(i,s.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},n}(),tn="-ms-",el="-moz-",ct="-webkit-",jm="comm",ph="rule",mh="decl",rw="@import",Ym="@keyframes",sw="@layer",ow=Math.abs,tl=String.fromCharCode,aw=Object.assign;function lw(n,e){return Kt(n,0)^45?(((e<<2^Kt(n,0))<<2^Kt(n,1))<<2^Kt(n,2))<<2^Kt(n,3):0}function qm(n){return n.trim()}function cw(n,e){return(n=e.exec(n))?n[0]:n}function ut(n,e,t){return n.replace(e,t)}function gh(n,e){return n.indexOf(e)}function Kt(n,e){return n.charCodeAt(e)|0}function yo(n,e,t){return n.slice(e,t)}function oi(n){return n.length}function _h(n){return n.length}function nl(n,e){return e.push(n),n}function uw(n,e){return n.map(e).join("")}var il=1,ms=1,Km=0,mn=0,zt=0,gs="";function rl(n,e,t,i,r,s,o){return{value:n,root:e,parent:t,type:i,props:r,children:s,line:il,column:ms,length:o,return:""}}function xo(n,e){return aw(rl("",null,null,"",null,null,0),n,{length:-n.length},e)}function hw(){return zt}function dw(){return zt=mn>0?Kt(gs,--mn):0,ms--,zt===10&&(ms=1,il--),zt}function En(){return zt=mn<Km?Kt(gs,mn++):0,ms++,zt===10&&(ms=1,il++),zt}function ai(){return Kt(gs,mn)}function sl(){return mn}function Mo(n,e){return yo(gs,n,e)}function So(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Zm(n){return il=ms=1,Km=oi(gs=n),mn=0,[]}function Qm(n){return gs="",n}function ol(n){return qm(Mo(mn-1,vh(n===91?n+2:n===40?n+1:n)))}function fw(n){for(;(zt=ai())&&zt<33;)En();return So(n)>2||So(zt)>3?"":" "}function pw(n,e){for(;--e&&En()&&!(zt<48||zt>102||zt>57&&zt<65||zt>70&&zt<97););return Mo(n,sl()+(e<6&&ai()==32&&En()==32))}function vh(n){for(;En();)switch(zt){case n:return mn;case 34:case 39:n!==34&&n!==39&&vh(zt);break;case 40:n===41&&vh(n);break;case 92:En();break}return mn}function mw(n,e){for(;En()&&n+zt!==57;)if(n+zt===84&&ai()===47)break;return"/*"+Mo(e,mn-1)+"*"+tl(n===47?n:En())}function gw(n){for(;!So(ai());)En();return Mo(n,mn)}function _w(n){return Qm(al("",null,null,null,[""],n=Zm(n),0,[0],n))}function al(n,e,t,i,r,s,o,a,l){for(var c=0,h=0,u=o,d=0,f=0,m=0,v=1,p=1,g=1,b=0,M="",S=r,T=s,P=i,C=M;p;)switch(m=b,b=En()){case 40:if(m!=108&&Kt(C,u-1)==58){gh(C+=ut(ol(b),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:C+=ol(b);break;case 9:case 10:case 13:case 32:C+=fw(m);break;case 92:C+=pw(sl()-1,7);continue;case 47:switch(ai()){case 42:case 47:nl(vw(mw(En(),sl()),e,t),l);break;default:C+="/"}break;case 123*v:a[c++]=oi(C)*g;case 125*v:case 59:case 0:switch(b){case 0:case 125:p=0;case 59+h:g==-1&&(C=ut(C,/\f/g,"")),f>0&&oi(C)-u&&nl(f>32?eg(C+";",i,t,u-1):eg(ut(C," ","")+";",i,t,u-2),l);break;case 59:C+=";";default:if(nl(P=Jm(C,e,t,c,h,r,a,M,S=[],T=[],u),s),b===123)if(h===0)al(C,e,P,P,S,s,u,a,T);else switch(d===99&&Kt(C,3)===110?100:d){case 100:case 108:case 109:case 115:al(n,P,P,i&&nl(Jm(n,P,P,0,0,r,a,M,r,S=[],u),T),r,T,u,a,i?S:T);break;default:al(C,P,P,P,[""],T,0,a,T)}}c=h=f=0,v=g=1,M=C="",u=o;break;case 58:u=1+oi(C),f=m;default:if(v<1){if(b==123)--v;else if(b==125&&v++==0&&dw()==125)continue}switch(C+=tl(b),b*v){case 38:g=h>0?1:(C+="\f",-1);break;case 44:a[c++]=(oi(C)-1)*g,g=1;break;case 64:ai()===45&&(C+=ol(En())),d=ai(),h=u=oi(M=C+=gw(sl())),b++;break;case 45:m===45&&oi(C)==2&&(v=0)}}return s}function Jm(n,e,t,i,r,s,o,a,l,c,h){for(var u=r-1,d=r===0?s:[""],f=_h(d),m=0,v=0,p=0;m<i;++m)for(var g=0,b=yo(n,u+1,u=ow(v=o[m])),M=n;g<f;++g)(M=qm(v>0?d[g]+" "+b:ut(b,/&\f/g,d[g])))&&(l[p++]=M);return rl(n,e,t,r===0?ph:a,l,c,h)}function vw(n,e,t){return rl(n,e,t,jm,tl(hw()),yo(n,2,-2),0)}function eg(n,e,t,i){return rl(n,e,t,mh,yo(n,0,i),yo(n,i+1,-1),i)}function _s(n,e){for(var t="",i=_h(n),r=0;r<i;r++)t+=e(n[r],r,n,e)||"";return t}function yw(n,e,t,i){switch(n.type){case sw:if(n.children.length)break;case rw:case mh:return n.return=n.return||n.value;case jm:return"";case Ym:return n.return=n.value+"{"+_s(n.children,i)+"}";case ph:n.value=n.props.join(",")}return oi(t=_s(n.children,i))?n.return=n.value+"{"+t+"}":""}function xw(n){var e=_h(n);return function(t,i,r,s){for(var o="",a=0;a<e;a++)o+=n[a](t,i,r,s)||"";return o}}function Mw(n){return function(e){e.root||(e=e.return)&&n(e)}}var Sw=function(e,t,i){for(var r=0,s=0;r=s,s=ai(),r===38&&s===12&&(t[i]=1),!So(s);)En();return Mo(e,mn)},Ew=function(e,t){var i=-1,r=44;do switch(So(r)){case 0:r===38&&ai()===12&&(t[i]=1),e[i]+=Sw(mn-1,t,i);break;case 2:e[i]+=ol(r);break;case 4:if(r===44){e[++i]=ai()===58?"&\f":"",t[i]=e[i].length;break}default:e[i]+=tl(r)}while(r=En());return e},Tw=function(e,t){return Qm(Ew(Zm(e),t))},tg=new WeakMap,bw=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!tg.get(i))&&!r){tg.set(e,!0);for(var s=[],o=Tw(t,s),a=i.props,l=0,c=0;l<o.length;l++)for(var h=0;h<a.length;h++,c++)e.props[c]=s[l]?o[l].replace(/&\f/g,a[h]):a[h]+" "+o[l]}}},Aw=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function ng(n,e){switch(lw(n,e)){case 5103:return ct+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ct+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ct+n+el+n+tn+n+n;case 6828:case 4268:return ct+n+tn+n+n;case 6165:return ct+n+tn+"flex-"+n+n;case 5187:return ct+n+ut(n,/(\w+).+(:[^]+)/,ct+"box-$1$2"+tn+"flex-$1$2")+n;case 5443:return ct+n+tn+"flex-item-"+ut(n,/flex-|-self/,"")+n;case 4675:return ct+n+tn+"flex-line-pack"+ut(n,/align-content|flex-|-self/,"")+n;case 5548:return ct+n+tn+ut(n,"shrink","negative")+n;case 5292:return ct+n+tn+ut(n,"basis","preferred-size")+n;case 6060:return ct+"box-"+ut(n,"-grow","")+ct+n+tn+ut(n,"grow","positive")+n;case 4554:return ct+ut(n,/([^-])(transform)/g,"$1"+ct+"$2")+n;case 6187:return ut(ut(ut(n,/(zoom-|grab)/,ct+"$1"),/(image-set)/,ct+"$1"),n,"")+n;case 5495:case 3959:return ut(n,/(image-set\([^]*)/,ct+"$1$`$1");case 4968:return ut(ut(n,/(.+:)(flex-)?(.*)/,ct+"box-pack:$3"+tn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ct+n+n;case 4095:case 3583:case 4068:case 2532:return ut(n,/(.+)-inline(.+)/,ct+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(oi(n)-1-e>6)switch(Kt(n,e+1)){case 109:if(Kt(n,e+4)!==45)break;case 102:return ut(n,/(.+:)(.+)-([^]+)/,"$1"+ct+"$2-$3$1"+el+(Kt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~gh(n,"stretch")?ng(ut(n,"stretch","fill-available"),e)+n:n}break;case 4949:if(Kt(n,e+1)!==115)break;case 6444:switch(Kt(n,oi(n)-3-(~gh(n,"!important")&&10))){case 107:return ut(n,":",":"+ct)+n;case 101:return ut(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ct+(Kt(n,14)===45?"inline-":"")+"box$3$1"+ct+"$2$3$1"+tn+"$2box$3")+n}break;case 5936:switch(Kt(n,e+11)){case 114:return ct+n+tn+ut(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ct+n+tn+ut(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ct+n+tn+ut(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return ct+n+tn+n+n}return n}var ww=function(e,t,i,r){if(e.length>-1&&!e.return)switch(e.type){case mh:e.return=ng(e.value,e.length);break;case Ym:return _s([xo(e,{value:ut(e.value,"@","@"+ct)})],r);case ph:if(e.length)return uw(e.props,function(s){switch(cw(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return _s([xo(e,{props:[ut(s,/:(read-\w+)/,":"+el+"$1")]})],r);case"::placeholder":return _s([xo(e,{props:[ut(s,/:(plac\w+)/,":"+ct+"input-$1")]}),xo(e,{props:[ut(s,/:(plac\w+)/,":"+el+"$1")]}),xo(e,{props:[ut(s,/:(plac\w+)/,tn+"input-$1")]})],r)}return""})}},Rw=[ww],Cw=function(e){var t=e.key;if(t==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(v){var p=v.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var r=e.stylisPlugins||Rw,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(v){for(var p=v.getAttribute("data-emotion").split(" "),g=1;g<p.length;g++)s[p[g]]=!0;a.push(v)});var l,c=[bw,Aw];{var h,u=[yw,Mw(function(v){h.insert(v)})],d=xw(c.concat(r,u)),f=function(p){return _s(_w(p),d)};l=function(p,g,b,M){h=b,f(p?p+"{"+g.styles+"}":g.styles),M&&(m.inserted[g.name]=!0)}}var m={key:t,sheet:new iw({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return m.sheet.hydrate(a),m},yh={exports:{}},ht={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function Pw(){if(ig)return ht;ig=1;var n=typeof Symbol=="function"&&Symbol.for,e=n?Symbol.for("react.element"):60103,t=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,a=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,u=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,p=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function M(T){if(typeof T=="object"&&T!==null){var P=T.$$typeof;switch(P){case e:switch(T=T.type,T){case l:case c:case i:case s:case r:case u:return T;default:switch(T=T&&T.$$typeof,T){case a:case h:case m:case f:case o:return T;default:return P}}case t:return P}}}function S(T){return M(T)===c}return ht.AsyncMode=l,ht.ConcurrentMode=c,ht.ContextConsumer=a,ht.ContextProvider=o,ht.Element=e,ht.ForwardRef=h,ht.Fragment=i,ht.Lazy=m,ht.Memo=f,ht.Portal=t,ht.Profiler=s,ht.StrictMode=r,ht.Suspense=u,ht.isAsyncMode=function(T){return S(T)||M(T)===l},ht.isConcurrentMode=S,ht.isContextConsumer=function(T){return M(T)===a},ht.isContextProvider=function(T){return M(T)===o},ht.isElement=function(T){return typeof T=="object"&&T!==null&&T.$$typeof===e},ht.isForwardRef=function(T){return M(T)===h},ht.isFragment=function(T){return M(T)===i},ht.isLazy=function(T){return M(T)===m},ht.isMemo=function(T){return M(T)===f},ht.isPortal=function(T){return M(T)===t},ht.isProfiler=function(T){return M(T)===s},ht.isStrictMode=function(T){return M(T)===r},ht.isSuspense=function(T){return M(T)===u},ht.isValidElementType=function(T){return typeof T=="string"||typeof T=="function"||T===i||T===c||T===s||T===r||T===u||T===d||typeof T=="object"&&T!==null&&(T.$$typeof===m||T.$$typeof===f||T.$$typeof===o||T.$$typeof===a||T.$$typeof===h||T.$$typeof===p||T.$$typeof===g||T.$$typeof===b||T.$$typeof===v)},ht.typeOf=M,ht}var dt={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Iw(){return rg||(rg=1,process.env.NODE_ENV!=="production"&&function(){var n=typeof Symbol=="function"&&Symbol.for,e=n?Symbol.for("react.element"):60103,t=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,a=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,u=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,p=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function M($){return typeof $=="string"||typeof $=="function"||$===i||$===c||$===s||$===r||$===u||$===d||typeof $=="object"&&$!==null&&($.$$typeof===m||$.$$typeof===f||$.$$typeof===o||$.$$typeof===a||$.$$typeof===h||$.$$typeof===p||$.$$typeof===g||$.$$typeof===b||$.$$typeof===v)}function S($){if(typeof $=="object"&&$!==null){var O=$.$$typeof;switch(O){case e:var _e=$.type;switch(_e){case l:case c:case i:case s:case r:case u:return _e;default:var Ue=_e&&_e.$$typeof;switch(Ue){case a:case h:case m:case f:case o:return Ue;default:return O}}case t:return O}}}var T=l,P=c,C=a,B=o,K=e,_=h,E=i,z=m,w=f,A=t,D=s,R=r,U=u,F=!1;function Q($){return F||(F=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),k($)||S($)===l}function k($){return S($)===c}function G($){return S($)===a}function te($){return S($)===o}function ae($){return typeof $=="object"&&$!==null&&$.$$typeof===e}function W($){return S($)===h}function j($){return S($)===i}function le($){return S($)===m}function re($){return S($)===f}function de($){return S($)===t}function pe($){return S($)===s}function fe($){return S($)===r}function xe($){return S($)===u}dt.AsyncMode=T,dt.ConcurrentMode=P,dt.ContextConsumer=C,dt.ContextProvider=B,dt.Element=K,dt.ForwardRef=_,dt.Fragment=E,dt.Lazy=z,dt.Memo=w,dt.Portal=A,dt.Profiler=D,dt.StrictMode=R,dt.Suspense=U,dt.isAsyncMode=Q,dt.isConcurrentMode=k,dt.isContextConsumer=G,dt.isContextProvider=te,dt.isElement=ae,dt.isForwardRef=W,dt.isFragment=j,dt.isLazy=le,dt.isMemo=re,dt.isPortal=de,dt.isProfiler=pe,dt.isStrictMode=fe,dt.isSuspense=xe,dt.isValidElementType=M,dt.typeOf=S}()),dt}process.env.NODE_ENV==="production"?yh.exports=Pw():yh.exports=Iw();var Lw=yh.exports,sg=Lw,Dw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},og={};og[sg.ForwardRef]=Dw,og[sg.Memo]=Nw;var Ow=!0;function Uw(n,e,t){var i="";return t.split(" ").forEach(function(r){n[r]!==void 0?e.push(n[r]+";"):r&&(i+=r+" ")}),i}var ag=function(e,t,i){var r=e.key+"-"+t.name;(i===!1||Ow===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},Fw=function(e,t,i){ag(e,t,i);var r=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var s=t;do e.insert(t===s?"."+r:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function Bw(n){for(var e=0,t,i=0,r=n.length;r>=4;++i,r-=4)t=n.charCodeAt(i)&255|(n.charCodeAt(++i)&255)<<8|(n.charCodeAt(++i)&255)<<16|(n.charCodeAt(++i)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(n.charCodeAt(i+2)&255)<<16;case 2:e^=(n.charCodeAt(i+1)&255)<<8;case 1:e^=n.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var kw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vw=!1,zw=/[A-Z]|^ms/g,Hw=/_EMO_([^_]+?)_([^]*?)_EMO_/g,lg=function(e){return e.charCodeAt(1)===45},cg=function(e){return e!=null&&typeof e!="boolean"},xh=$m(function(n){return lg(n)?n:n.replace(zw,"-$&").toLowerCase()}),ug=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(Hw,function(i,r,s){return li={name:r,styles:s,next:li},r})}return kw[e]!==1&&!lg(e)&&typeof t=="number"&&t!==0?t+"px":t},Gw="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Eo(n,e,t){if(t==null)return"";var i=t;if(i.__emotion_styles!==void 0)return i;switch(typeof t){case"boolean":return"";case"object":{var r=t;if(r.anim===1)return li={name:r.name,styles:r.styles,next:li},r.name;var s=t;if(s.styles!==void 0){var o=s.next;if(o!==void 0)for(;o!==void 0;)li={name:o.name,styles:o.styles,next:li},o=o.next;var a=s.styles+";";return a}return Ww(n,e,t)}case"function":{if(n!==void 0){var l=li,c=t(n);return li=l,Eo(n,e,c)}break}}var h=t;if(e==null)return h;var u=e[h];return u!==void 0?u:h}function Ww(n,e,t){var i="";if(Array.isArray(t))for(var r=0;r<t.length;r++)i+=Eo(n,e,t[r])+";";else for(var s in t){var o=t[s];if(typeof o!="object"){var a=o;e!=null&&e[a]!==void 0?i+=s+"{"+e[a]+"}":cg(a)&&(i+=xh(s)+":"+ug(s,a)+";")}else{if(s==="NO_COMPONENT_SELECTOR"&&Vw)throw new Error(Gw);if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var l=0;l<o.length;l++)cg(o[l])&&(i+=xh(s)+":"+ug(s,o[l])+";");else{var c=Eo(n,e,o);switch(s){case"animation":case"animationName":{i+=xh(s)+":"+c+";";break}default:i+=s+"{"+c+"}"}}}}return i}var hg=/label:\s*([^\s;{]+)\s*(;|$)/g,li;function Mh(n,e,t){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var i=!0,r="";li=void 0;var s=n[0];if(s==null||s.raw===void 0)i=!1,r+=Eo(t,e,s);else{var o=s;r+=o[0]}for(var a=1;a<n.length;a++)if(r+=Eo(t,e,n[a]),i){var l=s;r+=l[a]}hg.lastIndex=0;for(var c="",h;(h=hg.exec(r))!==null;)c+="-"+h[1];var u=Bw(r)+c;return{name:u,styles:r,next:li}}var Xw=function(e){return e()},$w=Ve.useInsertionEffect?Ve.useInsertionEffect:!1,jw=$w||Xw,dg=Ve.createContext(typeof HTMLElement<"u"?Cw({key:"css"}):null);dg.Provider;var Yw=function(e){return Ze.forwardRef(function(t,i){var r=Ze.useContext(dg);return e(t,r,i)})},fg=Ve.createContext({});function qw(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return Mh(e)}var Sh=function(){var e=qw.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Kw=JA,Zw=function(e){return e!=="theme"},pg=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Kw:Zw},mg=function(e,t,i){var r;if(t){var s=t.shouldForwardProp;r=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof r!="function"&&i&&(r=e.__emotion_forwardProp),r},Qw=!1,Jw=function(e){var t=e.cache,i=e.serialized,r=e.isStringTag;return ag(t,i,r),jw(function(){return Fw(t,i,r)}),null},eR=function n(e,t){var i=e.__emotion_real===e,r=i&&e.__emotion_base||e,s,o;t!==void 0&&(s=t.label,o=t.target);var a=mg(e,t,i),l=a||pg(r),c=!l("as");return function(){var h=arguments,u=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&u.push("label:"+s+";"),h[0]==null||h[0].raw===void 0)u.push.apply(u,h);else{u.push(h[0][0]);for(var d=h.length,f=1;f<d;f++)u.push(h[f],h[0][f])}var m=Yw(function(v,p,g){var b=c&&v.as||r,M="",S=[],T=v;if(v.theme==null){T={};for(var P in v)T[P]=v[P];T.theme=Ve.useContext(fg)}typeof v.className=="string"?M=Uw(p.registered,S,v.className):v.className!=null&&(M=v.className+" ");var C=Mh(u.concat(S),p.registered,T);M+=p.key+"-"+C.name,o!==void 0&&(M+=" "+o);var B=c&&a===void 0?pg(b):l,K={};for(var _ in v)c&&_==="as"||B(_)&&(K[_]=v[_]);return K.className=M,g&&(K.ref=g),Ve.createElement(Ve.Fragment,null,Ve.createElement(Jw,{cache:p,serialized:C,isStringTag:typeof b=="string"}),Ve.createElement(b,K))});return m.displayName=s!==void 0?s:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",m.defaultProps=e.defaultProps,m.__emotion_real=m,m.__emotion_base=r,m.__emotion_styles=u,m.__emotion_forwardProp=a,Object.defineProperty(m,"toString",{value:function(){return o===void 0&&Qw?"NO_COMPONENT_SELECTOR":"."+o}}),m.withComponent=function(v,p){return n(v,Ja({},t,p,{shouldForwardProp:mg(m,p,!0)})).apply(void 0,u)},m}},tR=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Eh=eR.bind();tR.forEach(function(n){Eh[n]=Eh(n)});var Th={exports:{}},ll={exports:{}},ft={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function nR(){if(gg)return ft;gg=1;var n=typeof Symbol=="function"&&Symbol.for,e=n?Symbol.for("react.element"):60103,t=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,a=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,u=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,p=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function M(T){if(typeof T=="object"&&T!==null){var P=T.$$typeof;switch(P){case e:switch(T=T.type,T){case l:case c:case i:case s:case r:case u:return T;default:switch(T=T&&T.$$typeof,T){case a:case h:case m:case f:case o:return T;default:return P}}case t:return P}}}function S(T){return M(T)===c}return ft.AsyncMode=l,ft.ConcurrentMode=c,ft.ContextConsumer=a,ft.ContextProvider=o,ft.Element=e,ft.ForwardRef=h,ft.Fragment=i,ft.Lazy=m,ft.Memo=f,ft.Portal=t,ft.Profiler=s,ft.StrictMode=r,ft.Suspense=u,ft.isAsyncMode=function(T){return S(T)||M(T)===l},ft.isConcurrentMode=S,ft.isContextConsumer=function(T){return M(T)===a},ft.isContextProvider=function(T){return M(T)===o},ft.isElement=function(T){return typeof T=="object"&&T!==null&&T.$$typeof===e},ft.isForwardRef=function(T){return M(T)===h},ft.isFragment=function(T){return M(T)===i},ft.isLazy=function(T){return M(T)===m},ft.isMemo=function(T){return M(T)===f},ft.isPortal=function(T){return M(T)===t},ft.isProfiler=function(T){return M(T)===s},ft.isStrictMode=function(T){return M(T)===r},ft.isSuspense=function(T){return M(T)===u},ft.isValidElementType=function(T){return typeof T=="string"||typeof T=="function"||T===i||T===c||T===s||T===r||T===u||T===d||typeof T=="object"&&T!==null&&(T.$$typeof===m||T.$$typeof===f||T.$$typeof===o||T.$$typeof===a||T.$$typeof===h||T.$$typeof===p||T.$$typeof===g||T.$$typeof===b||T.$$typeof===v)},ft.typeOf=M,ft}var pt={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function iR(){return _g||(_g=1,process.env.NODE_ENV!=="production"&&function(){var n=typeof Symbol=="function"&&Symbol.for,e=n?Symbol.for("react.element"):60103,t=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,a=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,u=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,p=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function M($){return typeof $=="string"||typeof $=="function"||$===i||$===c||$===s||$===r||$===u||$===d||typeof $=="object"&&$!==null&&($.$$typeof===m||$.$$typeof===f||$.$$typeof===o||$.$$typeof===a||$.$$typeof===h||$.$$typeof===p||$.$$typeof===g||$.$$typeof===b||$.$$typeof===v)}function S($){if(typeof $=="object"&&$!==null){var O=$.$$typeof;switch(O){case e:var _e=$.type;switch(_e){case l:case c:case i:case s:case r:case u:return _e;default:var Ue=_e&&_e.$$typeof;switch(Ue){case a:case h:case m:case f:case o:return Ue;default:return O}}case t:return O}}}var T=l,P=c,C=a,B=o,K=e,_=h,E=i,z=m,w=f,A=t,D=s,R=r,U=u,F=!1;function Q($){return F||(F=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),k($)||S($)===l}function k($){return S($)===c}function G($){return S($)===a}function te($){return S($)===o}function ae($){return typeof $=="object"&&$!==null&&$.$$typeof===e}function W($){return S($)===h}function j($){return S($)===i}function le($){return S($)===m}function re($){return S($)===f}function de($){return S($)===t}function pe($){return S($)===s}function fe($){return S($)===r}function xe($){return S($)===u}pt.AsyncMode=T,pt.ConcurrentMode=P,pt.ContextConsumer=C,pt.ContextProvider=B,pt.Element=K,pt.ForwardRef=_,pt.Fragment=E,pt.Lazy=z,pt.Memo=w,pt.Portal=A,pt.Profiler=D,pt.StrictMode=R,pt.Suspense=U,pt.isAsyncMode=Q,pt.isConcurrentMode=k,pt.isContextConsumer=G,pt.isContextProvider=te,pt.isElement=ae,pt.isForwardRef=W,pt.isFragment=j,pt.isLazy=le,pt.isMemo=re,pt.isPortal=de,pt.isProfiler=pe,pt.isStrictMode=fe,pt.isSuspense=xe,pt.isValidElementType=M,pt.typeOf=S}()),pt}var vg;function yg(){return vg||(vg=1,process.env.NODE_ENV==="production"?ll.exports=nR():ll.exports=iR()),ll.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var bh,xg;function rR(){if(xg)return bh;xg=1;var n=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function i(s){if(s==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(s)}function r(){try{if(!Object.assign)return!1;var s=new String("abc");if(s[5]="de",Object.getOwnPropertyNames(s)[0]==="5")return!1;for(var o={},a=0;a<10;a++)o["_"+String.fromCharCode(a)]=a;var l=Object.getOwnPropertyNames(o).map(function(h){return o[h]});if(l.join("")!=="0123456789")return!1;var c={};return"abcdefghijklmnopqrst".split("").forEach(function(h){c[h]=h}),Object.keys(Object.assign({},c)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return bh=r()?Object.assign:function(s,o){for(var a,l=i(s),c,h=1;h<arguments.length;h++){a=Object(arguments[h]);for(var u in a)e.call(a,u)&&(l[u]=a[u]);if(n){c=n(a);for(var d=0;d<c.length;d++)t.call(a,c[d])&&(l[c[d]]=a[c[d]])}}return l},bh}var Ah,Mg;function wh(){if(Mg)return Ah;Mg=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ah=n,Ah}var Rh,Sg;function Eg(){return Sg||(Sg=1,Rh=Function.call.bind(Object.prototype.hasOwnProperty)),Rh}var Ch,Tg;function sR(){if(Tg)return Ch;Tg=1;var n=function(){};if(process.env.NODE_ENV!=="production"){var e=wh(),t={},i=Eg();n=function(s){var o="Warning: "+s;typeof console<"u"&&console.error(o);try{throw new Error(o)}catch{}}}function r(s,o,a,l,c){if(process.env.NODE_ENV!=="production"){for(var h in s)if(i(s,h)){var u;try{if(typeof s[h]!="function"){var d=Error((l||"React class")+": "+a+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof s[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=s[h](o,h,l,a,null,e)}catch(m){u=m}if(u&&!(u instanceof Error)&&n((l||"React class")+": type specification of "+a+" `"+h+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in t)){t[u.message]=!0;var f=c?c():"";n("Failed "+a+" type: "+u.message+(f??""))}}}}return r.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(t={})},Ch=r,Ch}var Ph,bg;function oR(){if(bg)return Ph;bg=1;var n=yg(),e=rR(),t=wh(),i=Eg(),r=sR(),s=function(){};process.env.NODE_ENV!=="production"&&(s=function(a){var l="Warning: "+a;typeof console<"u"&&console.error(l);try{throw new Error(l)}catch{}});function o(){return null}return Ph=function(a,l){var c=typeof Symbol=="function"&&Symbol.iterator,h="@@iterator";function u(k){var G=k&&(c&&k[c]||k[h]);if(typeof G=="function")return G}var d="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:b(),arrayOf:M,element:S(),elementType:T(),instanceOf:P,node:_(),objectOf:B,oneOf:C,oneOfType:K,shape:z,exact:w};function m(k,G){return k===G?k!==0||1/k===1/G:k!==k&&G!==G}function v(k,G){this.message=k,this.data=G&&typeof G=="object"?G:{},this.stack=""}v.prototype=Error.prototype;function p(k){if(process.env.NODE_ENV!=="production")var G={},te=0;function ae(j,le,re,de,pe,fe,xe){if(de=de||d,fe=fe||re,xe!==t){if(l){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var O=de+":"+re;!G[O]&&te<3&&(s("You are manually calling a React.PropTypes validation function for the `"+fe+"` prop on `"+de+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),G[O]=!0,te++)}}return le[re]==null?j?le[re]===null?new v("The "+pe+" `"+fe+"` is marked as required "+("in `"+de+"`, but its value is `null`.")):new v("The "+pe+" `"+fe+"` is marked as required in "+("`"+de+"`, but its value is `undefined`.")):null:k(le,re,de,pe,fe)}var W=ae.bind(null,!1);return W.isRequired=ae.bind(null,!0),W}function g(k){function G(te,ae,W,j,le,re){var de=te[ae],pe=R(de);if(pe!==k){var fe=U(de);return new v("Invalid "+j+" `"+le+"` of type "+("`"+fe+"` supplied to `"+W+"`, expected ")+("`"+k+"`."),{expectedType:k})}return null}return p(G)}function b(){return p(o)}function M(k){function G(te,ae,W,j,le){if(typeof k!="function")return new v("Property `"+le+"` of component `"+W+"` has invalid PropType notation inside arrayOf.");var re=te[ae];if(!Array.isArray(re)){var de=R(re);return new v("Invalid "+j+" `"+le+"` of type "+("`"+de+"` supplied to `"+W+"`, expected an array."))}for(var pe=0;pe<re.length;pe++){var fe=k(re,pe,W,j,le+"["+pe+"]",t);if(fe instanceof Error)return fe}return null}return p(G)}function S(){function k(G,te,ae,W,j){var le=G[te];if(!a(le)){var re=R(le);return new v("Invalid "+W+" `"+j+"` of type "+("`"+re+"` supplied to `"+ae+"`, expected a single ReactElement."))}return null}return p(k)}function T(){function k(G,te,ae,W,j){var le=G[te];if(!n.isValidElementType(le)){var re=R(le);return new v("Invalid "+W+" `"+j+"` of type "+("`"+re+"` supplied to `"+ae+"`, expected a single ReactElement type."))}return null}return p(k)}function P(k){function G(te,ae,W,j,le){if(!(te[ae]instanceof k)){var re=k.name||d,de=Q(te[ae]);return new v("Invalid "+j+" `"+le+"` of type "+("`"+de+"` supplied to `"+W+"`, expected ")+("instance of `"+re+"`."))}return null}return p(G)}function C(k){if(!Array.isArray(k))return process.env.NODE_ENV!=="production"&&(arguments.length>1?s("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):s("Invalid argument supplied to oneOf, expected an array.")),o;function G(te,ae,W,j,le){for(var re=te[ae],de=0;de<k.length;de++)if(m(re,k[de]))return null;var pe=JSON.stringify(k,function(xe,$){var O=U($);return O==="symbol"?String($):$});return new v("Invalid "+j+" `"+le+"` of value `"+String(re)+"` "+("supplied to `"+W+"`, expected one of "+pe+"."))}return p(G)}function B(k){function G(te,ae,W,j,le){if(typeof k!="function")return new v("Property `"+le+"` of component `"+W+"` has invalid PropType notation inside objectOf.");var re=te[ae],de=R(re);if(de!=="object")return new v("Invalid "+j+" `"+le+"` of type "+("`"+de+"` supplied to `"+W+"`, expected an object."));for(var pe in re)if(i(re,pe)){var fe=k(re,pe,W,j,le+"."+pe,t);if(fe instanceof Error)return fe}return null}return p(G)}function K(k){if(!Array.isArray(k))return process.env.NODE_ENV!=="production"&&s("Invalid argument supplied to oneOfType, expected an instance of array."),o;for(var G=0;G<k.length;G++){var te=k[G];if(typeof te!="function")return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+F(te)+" at index "+G+"."),o}function ae(W,j,le,re,de){for(var pe=[],fe=0;fe<k.length;fe++){var xe=k[fe],$=xe(W,j,le,re,de,t);if($==null)return null;$.data&&i($.data,"expectedType")&&pe.push($.data.expectedType)}var O=pe.length>0?", expected one of type ["+pe.join(", ")+"]":"";return new v("Invalid "+re+" `"+de+"` supplied to "+("`"+le+"`"+O+"."))}return p(ae)}function _(){function k(G,te,ae,W,j){return A(G[te])?null:new v("Invalid "+W+" `"+j+"` supplied to "+("`"+ae+"`, expected a ReactNode."))}return p(k)}function E(k,G,te,ae,W){return new v((k||"React class")+": "+G+" type `"+te+"."+ae+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+W+"`.")}function z(k){function G(te,ae,W,j,le){var re=te[ae],de=R(re);if(de!=="object")return new v("Invalid "+j+" `"+le+"` of type `"+de+"` "+("supplied to `"+W+"`, expected `object`."));for(var pe in k){var fe=k[pe];if(typeof fe!="function")return E(W,j,le,pe,U(fe));var xe=fe(re,pe,W,j,le+"."+pe,t);if(xe)return xe}return null}return p(G)}function w(k){function G(te,ae,W,j,le){var re=te[ae],de=R(re);if(de!=="object")return new v("Invalid "+j+" `"+le+"` of type `"+de+"` "+("supplied to `"+W+"`, expected `object`."));var pe=e({},te[ae],k);for(var fe in pe){var xe=k[fe];if(i(k,fe)&&typeof xe!="function")return E(W,j,le,fe,U(xe));if(!xe)return new v("Invalid "+j+" `"+le+"` key `"+fe+"` supplied to `"+W+"`.\nBad object: "+JSON.stringify(te[ae],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(k),null,"  "));var $=xe(re,fe,W,j,le+"."+fe,t);if($)return $}return null}return p(G)}function A(k){switch(typeof k){case"number":case"string":case"undefined":return!0;case"boolean":return!k;case"object":if(Array.isArray(k))return k.every(A);if(k===null||a(k))return!0;var G=u(k);if(G){var te=G.call(k),ae;if(G!==k.entries){for(;!(ae=te.next()).done;)if(!A(ae.value))return!1}else for(;!(ae=te.next()).done;){var W=ae.value;if(W&&!A(W[1]))return!1}}else return!1;return!0;default:return!1}}function D(k,G){return k==="symbol"?!0:G?G["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&G instanceof Symbol:!1}function R(k){var G=typeof k;return Array.isArray(k)?"array":k instanceof RegExp?"object":D(G,k)?"symbol":G}function U(k){if(typeof k>"u"||k===null)return""+k;var G=R(k);if(G==="object"){if(k instanceof Date)return"date";if(k instanceof RegExp)return"regexp"}return G}function F(k){var G=U(k);switch(G){case"array":case"object":return"an "+G;case"boolean":case"date":case"regexp":return"a "+G;default:return G}}function Q(k){return!k.constructor||!k.constructor.name?d:k.constructor.name}return f.checkPropTypes=r,f.resetWarningCache=r.resetWarningCache,f.PropTypes=f,f},Ph}var Ih,Ag;function aR(){if(Ag)return Ih;Ag=1;var n=wh();function e(){}function t(){}return t.resetWarningCache=e,Ih=function(){function i(o,a,l,c,h,u){if(u!==n){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}i.isRequired=i;function r(){return i}var s={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:r,element:i,elementType:i,instanceOf:r,node:i,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:t,resetWarningCache:e};return s.PropTypes=s,s},Ih}if(process.env.NODE_ENV!=="production"){var lR=yg(),cR=!0;Th.exports=oR()(lR.isElement,cR)}else Th.exports=aR()();var uR=Th.exports;const Z=Gm(uR);/**
 * @mui/styled-engine v6.1.4
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function hR(n,e){const t=Eh(n,e);return process.env.NODE_ENV!=="production"?(...i)=>{const r=typeof n=="string"?`"${n}"`:"component";return i.length===0?console.error([`MUI: Seems like you called \`styled(${r})()\` without a \`style\` argument.`,'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)):i.some(s=>s===void 0)&&console.error(`MUI: the styled(${r})(...args) API requires all its args to be defined.`),t(...i)}:t}function dR(n,e){Array.isArray(n.__emotion_styles)&&(n.__emotion_styles=e(n.__emotion_styles))}const wg=[];function Rg(n){return wg[0]=n,Mh(wg)}function ci(n){if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function Cg(n){if(!ci(n))return n;const e={};return Object.keys(n).forEach(t=>{e[t]=Cg(n[t])}),e}function fn(n,e,t={clone:!0}){const i=t.clone?{...n}:n;return ci(n)&&ci(e)&&Object.keys(e).forEach(r=>{ci(e[r])&&Object.prototype.hasOwnProperty.call(n,r)&&ci(n[r])?i[r]=fn(n[r],e[r],t):t.clone?i[r]=ci(e[r])?Cg(e[r]):e[r]:i[r]=e[r]}),i}const fR=n=>{const e=Object.keys(n).map(t=>({key:t,val:n[t]}))||[];return e.sort((t,i)=>t.val-i.val),e.reduce((t,i)=>({...t,[i.key]:i.val}),{})};function pR(n){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:t="px",step:i=5,...r}=n,s=fR(e),o=Object.keys(s);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${t})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-i/100}${t})`}function c(d,f){const m=o.indexOf(f);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${t}) and (max-width:${(m!==-1&&typeof e[o[m]]=="number"?e[o[m]]:f)-i/100}${t})`}function h(d){return o.indexOf(d)+1<o.length?c(d,o[o.indexOf(d)+1]):a(d)}function u(d){const f=o.indexOf(d);return f===0?a(o[1]):f===o.length-1?l(o[f]):c(d,o[o.indexOf(d)+1]).replace("@media","@media not all and")}return{keys:o,values:s,up:a,down:l,between:c,only:h,not:u,unit:t,...r}}function mR(n,e){if(!n.containerQueries)return e;const t=Object.keys(e).filter(i=>i.startsWith("@container")).sort((i,r)=>{var o,a;const s=/min-width:\s*([0-9.]+)/;return+(((o=i.match(s))==null?void 0:o[1])||0)-+(((a=r.match(s))==null?void 0:a[1])||0)});return t.length?t.reduce((i,r)=>{const s=e[r];return delete i[r],i[r]=s,i},{...e}):e}function gR(n,e){return e==="@"||e.startsWith("@")&&(n.some(t=>e.startsWith(`@${t}`))||!!e.match(/^@\d/))}function _R(n,e){const t=e.match(/^@([^/]+)?\/?(.+)?$/);if(!t){if(process.env.NODE_ENV!=="production")throw new Error(process.env.NODE_ENV!=="production"?`MUI: The provided shorthand ${`(${e})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`:ji(18,`(${e})`));return null}const[,i,r]=t,s=Number.isNaN(+i)?i||0:+i;return n.containerQueries(r).up(s)}function vR(n){const e=(s,o)=>s.replace("@media",o?`@container ${o}`:"@container");function t(s,o){s.up=(...a)=>e(n.breakpoints.up(...a),o),s.down=(...a)=>e(n.breakpoints.down(...a),o),s.between=(...a)=>e(n.breakpoints.between(...a),o),s.only=(...a)=>e(n.breakpoints.only(...a),o),s.not=(...a)=>{const l=e(n.breakpoints.not(...a),o);return l.includes("not all and")?l.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):l}}const i={},r=s=>(t(i,s),i);return t(r),{...n,containerQueries:r}}const yR={borderRadius:4},Yi=process.env.NODE_ENV!=="production"?Z.oneOfType([Z.number,Z.string,Z.object,Z.array]):{};function To(n,e){return e?fn(n,e,{clone:!1}):n}const cl={xs:0,sm:600,md:900,lg:1200,xl:1536},Pg={keys:["xs","sm","md","lg","xl"],up:n=>`@media (min-width:${cl[n]}px)`},xR={containerQueries:n=>({up:e=>{let t=typeof e=="number"?e:cl[e]||e;return typeof t=="number"&&(t=`${t}px`),n?`@container ${n} (min-width:${t})`:`@container (min-width:${t})`}})};function Yn(n,e,t){const i=n.theme||{};if(Array.isArray(e)){const s=i.breakpoints||Pg;return e.reduce((o,a,l)=>(o[s.up(s.keys[l])]=t(e[l]),o),{})}if(typeof e=="object"){const s=i.breakpoints||Pg;return Object.keys(e).reduce((o,a)=>{if(gR(s.keys,a)){const l=_R(i.containerQueries?i:xR,a);l&&(o[l]=t(e[a],a))}else if(Object.keys(s.values||cl).includes(a)){const l=s.up(a);o[l]=t(e[a],a)}else{const l=a;o[l]=e[l]}return o},{})}return t(e)}function Ig(n={}){var t;return((t=n.keys)==null?void 0:t.reduce((i,r)=>{const s=n.up(r);return i[s]={},i},{}))||{}}function Lg(n,e){return n.reduce((t,i)=>{const r=t[i];return(!r||Object.keys(r).length===0)&&delete t[i],t},e)}function MR(n,...e){const t=Ig(n),i=[t,...e].reduce((r,s)=>fn(r,s),{});return Lg(Object.keys(t),i)}function SR(n,e){if(typeof n!="object")return{};const t={},i=Object.keys(e);return Array.isArray(n)?i.forEach((r,s)=>{s<n.length&&(t[r]=!0)}):i.forEach(r=>{n[r]!=null&&(t[r]=!0)}),t}function Lh({values:n,breakpoints:e,base:t}){const i=t||SR(n,e),r=Object.keys(i);if(r.length===0)return n;let s;return r.reduce((o,a,l)=>(Array.isArray(n)?(o[a]=n[l]!=null?n[l]:n[s],s=l):typeof n=="object"?(o[a]=n[a]!=null?n[a]:n[s],s=a):o[a]=n,o),{})}function gn(n){if(typeof n!="string")throw new Error(process.env.NODE_ENV!=="production"?"MUI: `capitalize(string)` expects a string argument.":ji(7));return n.charAt(0).toUpperCase()+n.slice(1)}function ul(n,e,t=!0){if(!e||typeof e!="string")return null;if(n&&n.vars&&t){const i=`vars.${e}`.split(".").reduce((r,s)=>r&&r[s]?r[s]:null,n);if(i!=null)return i}return e.split(".").reduce((i,r)=>i&&i[r]!=null?i[r]:null,n)}function hl(n,e,t,i=t){let r;return typeof n=="function"?r=n(t):Array.isArray(n)?r=n[t]||i:r=ul(n,t)||i,e&&(r=e(r,i,n)),r}function Bt(n){const{prop:e,cssProperty:t=n.prop,themeKey:i,transform:r}=n,s=o=>{if(o[e]==null)return null;const a=o[e],l=o.theme,c=ul(l,i)||{};return Yn(o,a,u=>{let d=hl(c,r,u);return u===d&&typeof u=="string"&&(d=hl(c,r,`${e}${u==="default"?"":gn(u)}`,u)),t===!1?d:{[t]:d}})};return s.propTypes=process.env.NODE_ENV!=="production"?{[e]:Yi}:{},s.filterProps=[e],s}function ER(n){const e={};return t=>(e[t]===void 0&&(e[t]=n(t)),e[t])}const TR={m:"margin",p:"padding"},bR={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Dg={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},AR=ER(n=>{if(n.length>2)if(Dg[n])n=Dg[n];else return[n];const[e,t]=n.split(""),i=TR[e],r=bR[t]||"";return Array.isArray(r)?r.map(s=>i+s):[i+r]}),dl=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],fl=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],wR=[...dl,...fl];function bo(n,e,t,i){const r=ul(n,e,!0)??t;return typeof r=="number"||typeof r=="string"?s=>typeof s=="string"?s:(process.env.NODE_ENV!=="production"&&typeof s!="number"&&console.error(`MUI: Expected ${i} argument to be a number or a string, got ${s}.`),typeof r=="string"?`calc(${s} * ${r})`:r*s):Array.isArray(r)?s=>{if(typeof s=="string")return s;const o=Math.abs(s);process.env.NODE_ENV!=="production"&&(Number.isInteger(o)?o>r.length-1&&console.error([`MUI: The value provided (${o}) overflows.`,`The supported values are: ${JSON.stringify(r)}.`,`${o} > ${r.length-1}, you need to add the missing values.`].join(`
`)):console.error([`MUI: The \`theme.${e}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${e}\` as a number.`].join(`
`)));const a=r[o];return s>=0?a:typeof a=="number"?-a:`-${a}`}:typeof r=="function"?r:(process.env.NODE_ENV!=="production"&&console.error([`MUI: The \`theme.${e}\` value (${r}) is invalid.`,"It should be a number, an array or a function."].join(`
`)),()=>{})}function pl(n){return bo(n,"spacing",8,"spacing")}function Sr(n,e){return typeof e=="string"||e==null?e:n(e)}function RR(n,e){return t=>n.reduce((i,r)=>(i[r]=Sr(e,t),i),{})}function CR(n,e,t,i){if(!e.includes(t))return null;const r=AR(t),s=RR(r,i),o=n[t];return Yn(n,o,s)}function Ng(n,e){const t=pl(n.theme);return Object.keys(n).map(i=>CR(n,e,i,t)).reduce(To,{})}function Nt(n){return Ng(n,dl)}Nt.propTypes=process.env.NODE_ENV!=="production"?dl.reduce((n,e)=>(n[e]=Yi,n),{}):{},Nt.filterProps=dl;function Ot(n){return Ng(n,fl)}Ot.propTypes=process.env.NODE_ENV!=="production"?fl.reduce((n,e)=>(n[e]=Yi,n),{}):{},Ot.filterProps=fl,process.env.NODE_ENV!=="production"&&wR.reduce((n,e)=>(n[e]=Yi,n),{});function Og(n=8,e=pl({spacing:n})){if(n.mui)return n;const t=(...i)=>(process.env.NODE_ENV!=="production"&&(i.length<=4||console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${i.length}`)),(i.length===0?[1]:i).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" "));return t.mui=!0,t}function ml(...n){const e=n.reduce((i,r)=>(r.filterProps.forEach(s=>{i[s]=r}),i),{}),t=i=>Object.keys(i).reduce((r,s)=>e[s]?To(r,e[s](i)):r,{});return t.propTypes=process.env.NODE_ENV!=="production"?n.reduce((i,r)=>Object.assign(i,r.propTypes),{}):{},t.filterProps=n.reduce((i,r)=>i.concat(r.filterProps),[]),t}function Nn(n){return typeof n!="number"?n:`${n}px solid`}function On(n,e){return Bt({prop:n,themeKey:"borders",transform:e})}const PR=On("border",Nn),IR=On("borderTop",Nn),LR=On("borderRight",Nn),DR=On("borderBottom",Nn),NR=On("borderLeft",Nn),OR=On("borderColor"),UR=On("borderTopColor"),FR=On("borderRightColor"),BR=On("borderBottomColor"),kR=On("borderLeftColor"),VR=On("outline",Nn),zR=On("outlineColor"),gl=n=>{if(n.borderRadius!==void 0&&n.borderRadius!==null){const e=bo(n.theme,"shape.borderRadius",4,"borderRadius"),t=i=>({borderRadius:Sr(e,i)});return Yn(n,n.borderRadius,t)}return null};gl.propTypes=process.env.NODE_ENV!=="production"?{borderRadius:Yi}:{},gl.filterProps=["borderRadius"],ml(PR,IR,LR,DR,NR,OR,UR,FR,BR,kR,gl,VR,zR);const _l=n=>{if(n.gap!==void 0&&n.gap!==null){const e=bo(n.theme,"spacing",8,"gap"),t=i=>({gap:Sr(e,i)});return Yn(n,n.gap,t)}return null};_l.propTypes=process.env.NODE_ENV!=="production"?{gap:Yi}:{},_l.filterProps=["gap"];const vl=n=>{if(n.columnGap!==void 0&&n.columnGap!==null){const e=bo(n.theme,"spacing",8,"columnGap"),t=i=>({columnGap:Sr(e,i)});return Yn(n,n.columnGap,t)}return null};vl.propTypes=process.env.NODE_ENV!=="production"?{columnGap:Yi}:{},vl.filterProps=["columnGap"];const yl=n=>{if(n.rowGap!==void 0&&n.rowGap!==null){const e=bo(n.theme,"spacing",8,"rowGap"),t=i=>({rowGap:Sr(e,i)});return Yn(n,n.rowGap,t)}return null};yl.propTypes=process.env.NODE_ENV!=="production"?{rowGap:Yi}:{},yl.filterProps=["rowGap"];const HR=Bt({prop:"gridColumn"}),GR=Bt({prop:"gridRow"}),WR=Bt({prop:"gridAutoFlow"}),XR=Bt({prop:"gridAutoColumns"}),$R=Bt({prop:"gridAutoRows"}),jR=Bt({prop:"gridTemplateColumns"}),YR=Bt({prop:"gridTemplateRows"}),qR=Bt({prop:"gridTemplateAreas"}),KR=Bt({prop:"gridArea"});ml(_l,vl,yl,HR,GR,WR,XR,$R,jR,YR,qR,KR);function vs(n,e){return e==="grey"?e:n}const ZR=Bt({prop:"color",themeKey:"palette",transform:vs}),QR=Bt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:vs}),JR=Bt({prop:"backgroundColor",themeKey:"palette",transform:vs});ml(ZR,QR,JR);function Tn(n){return n<=1&&n!==0?`${n*100}%`:n}const e1=Bt({prop:"width",transform:Tn}),Dh=n=>{if(n.maxWidth!==void 0&&n.maxWidth!==null){const e=t=>{var r,s,o,a,l;const i=((o=(s=(r=n.theme)==null?void 0:r.breakpoints)==null?void 0:s.values)==null?void 0:o[t])||cl[t];return i?((l=(a=n.theme)==null?void 0:a.breakpoints)==null?void 0:l.unit)!=="px"?{maxWidth:`${i}${n.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:Tn(t)}};return Yn(n,n.maxWidth,e)}return null};Dh.filterProps=["maxWidth"];const t1=Bt({prop:"minWidth",transform:Tn}),n1=Bt({prop:"height",transform:Tn}),i1=Bt({prop:"maxHeight",transform:Tn}),r1=Bt({prop:"minHeight",transform:Tn});Bt({prop:"size",cssProperty:"width",transform:Tn}),Bt({prop:"size",cssProperty:"height",transform:Tn});const s1=Bt({prop:"boxSizing"});ml(e1,Dh,t1,n1,i1,r1,s1);const Ao={border:{themeKey:"borders",transform:Nn},borderTop:{themeKey:"borders",transform:Nn},borderRight:{themeKey:"borders",transform:Nn},borderBottom:{themeKey:"borders",transform:Nn},borderLeft:{themeKey:"borders",transform:Nn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Nn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:gl},color:{themeKey:"palette",transform:vs},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:vs},backgroundColor:{themeKey:"palette",transform:vs},p:{style:Ot},pt:{style:Ot},pr:{style:Ot},pb:{style:Ot},pl:{style:Ot},px:{style:Ot},py:{style:Ot},padding:{style:Ot},paddingTop:{style:Ot},paddingRight:{style:Ot},paddingBottom:{style:Ot},paddingLeft:{style:Ot},paddingX:{style:Ot},paddingY:{style:Ot},paddingInline:{style:Ot},paddingInlineStart:{style:Ot},paddingInlineEnd:{style:Ot},paddingBlock:{style:Ot},paddingBlockStart:{style:Ot},paddingBlockEnd:{style:Ot},m:{style:Nt},mt:{style:Nt},mr:{style:Nt},mb:{style:Nt},ml:{style:Nt},mx:{style:Nt},my:{style:Nt},margin:{style:Nt},marginTop:{style:Nt},marginRight:{style:Nt},marginBottom:{style:Nt},marginLeft:{style:Nt},marginX:{style:Nt},marginY:{style:Nt},marginInline:{style:Nt},marginInlineStart:{style:Nt},marginInlineEnd:{style:Nt},marginBlock:{style:Nt},marginBlockStart:{style:Nt},marginBlockEnd:{style:Nt},displayPrint:{cssProperty:!1,transform:n=>({"@media print":{display:n}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:_l},rowGap:{style:yl},columnGap:{style:vl},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Tn},maxWidth:{style:Dh},minWidth:{transform:Tn},height:{transform:Tn},maxHeight:{transform:Tn},minHeight:{transform:Tn},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function o1(...n){const e=n.reduce((i,r)=>i.concat(Object.keys(r)),[]),t=new Set(e);return n.every(i=>t.size===Object.keys(i).length)}function a1(n,e){return typeof n=="function"?n(e):n}function l1(){function n(t,i,r,s){const o={[t]:i,theme:r},a=s[t];if(!a)return{[t]:i};const{cssProperty:l=t,themeKey:c,transform:h,style:u}=a;if(i==null)return null;if(c==="typography"&&i==="inherit")return{[t]:i};const d=ul(r,c)||{};return u?u(o):Yn(o,i,m=>{let v=hl(d,h,m);return m===v&&typeof m=="string"&&(v=hl(d,h,`${t}${m==="default"?"":gn(m)}`,m)),l===!1?v:{[l]:v}})}function e(t){const{sx:i,theme:r={}}=t||{};if(!i)return null;const s=r.unstable_sxConfig??Ao;function o(a){let l=a;if(typeof a=="function")l=a(r);else if(typeof a!="object")return a;if(!l)return null;const c=Ig(r.breakpoints),h=Object.keys(c);let u=c;return Object.keys(l).forEach(d=>{const f=a1(l[d],r);if(f!=null)if(typeof f=="object")if(s[d])u=To(u,n(d,f,r,s));else{const m=Yn({theme:r},f,v=>({[d]:v}));o1(m,f)?u[d]=e({sx:f,theme:r}):u=To(u,m)}else u=To(u,n(d,f,r,s))}),mR(r,Lg(h,u))}return Array.isArray(i)?i.map(o):o(i)}return e}const ys=l1();ys.filterProps=["sx"];function c1(n,e){var i;const t=this;if(t.vars){if(!((i=t.colorSchemes)!=null&&i[n])||typeof t.getColorSchemeSelector!="function")return{};let r=t.getColorSchemeSelector(n);return r==="&"?e:((r.includes("data-")||r.includes("."))&&(r=`*:where(${r.replace(/\s*&$/,"")}) &`),{[r]:e})}return t.palette.mode===n?e:{}}function xl(n={},...e){const{breakpoints:t={},palette:i={},spacing:r,shape:s={},...o}=n,a=pR(t),l=Og(r);let c=fn({breakpoints:a,direction:"ltr",components:{},palette:{mode:"light",...i},spacing:l,shape:{...yR,...s}},o);return c=vR(c),c.applyStyles=c1,c=e.reduce((h,u)=>fn(h,u),c),c.unstable_sxConfig={...Ao,...o==null?void 0:o.unstable_sxConfig},c.unstable_sx=function(u){return ys({sx:u,theme:this})},c}function u1(n){return Object.keys(n).length===0}function h1(n=null){const e=Ve.useContext(fg);return!e||u1(e)?n:e}const d1=xl();function f1(n=d1){return h1(n)}const p1=n=>{var i;const e={systemProps:{},otherProps:{}},t=((i=n==null?void 0:n.theme)==null?void 0:i.unstable_sxConfig)??Ao;return Object.keys(n).forEach(r=>{t[r]?e.systemProps[r]=n[r]:e.otherProps[r]=n[r]}),e};function m1(n){const{sx:e,...t}=n,{systemProps:i,otherProps:r}=p1(t);let s;return Array.isArray(e)?s=[i,...e]:typeof e=="function"?s=(...o)=>{const a=e(...o);return ci(a)?{...i,...a}:i}:s={...i,...e},{...r,sx:s}}const Ug=n=>n,g1=(()=>{let n=Ug;return{configure(e){n=e},generate(e){return n(e)},reset(){n=Ug}}})();function Fg(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=Fg(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function bn(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=Fg(n))&&(i&&(i+=" "),i+=e);return i}const _1={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function wo(n,e,t="Mui"){const i=_1[e];return i?`${t}-${i}`:`${g1.generate(n)}-${e}`}function Nh(n,e,t="Mui"){const i={};return e.forEach(r=>{i[r]=wo(n,r,t)}),i}var Oh={exports:{}},mt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function v1(){if(Bg)return mt;Bg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),o=Symbol.for("react.context"),a=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.for("react.offscreen"),m;m=Symbol.for("react.module.reference");function v(p){if(typeof p=="object"&&p!==null){var g=p.$$typeof;switch(g){case n:switch(p=p.type,p){case t:case r:case i:case c:case h:return p;default:switch(p=p&&p.$$typeof,p){case a:case o:case l:case d:case u:case s:return p;default:return g}}case e:return g}}}return mt.ContextConsumer=o,mt.ContextProvider=s,mt.Element=n,mt.ForwardRef=l,mt.Fragment=t,mt.Lazy=d,mt.Memo=u,mt.Portal=e,mt.Profiler=r,mt.StrictMode=i,mt.Suspense=c,mt.SuspenseList=h,mt.isAsyncMode=function(){return!1},mt.isConcurrentMode=function(){return!1},mt.isContextConsumer=function(p){return v(p)===o},mt.isContextProvider=function(p){return v(p)===s},mt.isElement=function(p){return typeof p=="object"&&p!==null&&p.$$typeof===n},mt.isForwardRef=function(p){return v(p)===l},mt.isFragment=function(p){return v(p)===t},mt.isLazy=function(p){return v(p)===d},mt.isMemo=function(p){return v(p)===u},mt.isPortal=function(p){return v(p)===e},mt.isProfiler=function(p){return v(p)===r},mt.isStrictMode=function(p){return v(p)===i},mt.isSuspense=function(p){return v(p)===c},mt.isSuspenseList=function(p){return v(p)===h},mt.isValidElementType=function(p){return typeof p=="string"||typeof p=="function"||p===t||p===r||p===i||p===c||p===h||p===f||typeof p=="object"&&p!==null&&(p.$$typeof===d||p.$$typeof===u||p.$$typeof===s||p.$$typeof===o||p.$$typeof===l||p.$$typeof===m||p.getModuleId!==void 0)},mt.typeOf=v,mt}var gt={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function y1(){return kg||(kg=1,process.env.NODE_ENV!=="production"&&function(){var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),o=Symbol.for("react.context"),a=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.for("react.offscreen"),m=!1,v=!1,p=!1,g=!1,b=!1,M;M=Symbol.for("react.module.reference");function S(_e){return!!(typeof _e=="string"||typeof _e=="function"||_e===t||_e===r||b||_e===i||_e===c||_e===h||g||_e===f||m||v||p||typeof _e=="object"&&_e!==null&&(_e.$$typeof===d||_e.$$typeof===u||_e.$$typeof===s||_e.$$typeof===o||_e.$$typeof===l||_e.$$typeof===M||_e.getModuleId!==void 0))}function T(_e){if(typeof _e=="object"&&_e!==null){var Ue=_e.$$typeof;switch(Ue){case n:var We=_e.type;switch(We){case t:case r:case i:case c:case h:return We;default:var Le=We&&We.$$typeof;switch(Le){case a:case o:case l:case d:case u:case s:return Le;default:return Ue}}case e:return Ue}}}var P=o,C=s,B=n,K=l,_=t,E=d,z=u,w=e,A=r,D=i,R=c,U=h,F=!1,Q=!1;function k(_e){return F||(F=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function G(_e){return Q||(Q=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function te(_e){return T(_e)===o}function ae(_e){return T(_e)===s}function W(_e){return typeof _e=="object"&&_e!==null&&_e.$$typeof===n}function j(_e){return T(_e)===l}function le(_e){return T(_e)===t}function re(_e){return T(_e)===d}function de(_e){return T(_e)===u}function pe(_e){return T(_e)===e}function fe(_e){return T(_e)===r}function xe(_e){return T(_e)===i}function $(_e){return T(_e)===c}function O(_e){return T(_e)===h}gt.ContextConsumer=P,gt.ContextProvider=C,gt.Element=B,gt.ForwardRef=K,gt.Fragment=_,gt.Lazy=E,gt.Memo=z,gt.Portal=w,gt.Profiler=A,gt.StrictMode=D,gt.Suspense=R,gt.SuspenseList=U,gt.isAsyncMode=k,gt.isConcurrentMode=G,gt.isContextConsumer=te,gt.isContextProvider=ae,gt.isElement=W,gt.isForwardRef=j,gt.isFragment=le,gt.isLazy=re,gt.isMemo=de,gt.isPortal=pe,gt.isProfiler=fe,gt.isStrictMode=xe,gt.isSuspense=$,gt.isSuspenseList=O,gt.isValidElementType=S,gt.typeOf=T}()),gt}process.env.NODE_ENV==="production"?Oh.exports=v1():Oh.exports=y1();var Vg=Oh.exports;function zg(n,e=""){return n.displayName||n.name||e}function Hg(n,e,t){const i=zg(e);return n.displayName||(i!==""?`${t}(${i})`:t)}function x1(n){if(n!=null){if(typeof n=="string")return n;if(typeof n=="function")return zg(n,"Component");if(typeof n=="object")switch(n.$$typeof){case Vg.ForwardRef:return Hg(n,n.render,"ForwardRef");case Vg.Memo:return Hg(n,n.type,"memo");default:return}}}function Gg(n){const{variants:e,...t}=n,i={variants:e,style:Rg(t),isProcessed:!0};return i.style===t||e&&e.forEach(r=>{typeof r.style!="function"&&(r.style=Rg(r.style))}),i}const M1=xl();function Uh(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}function S1(n){return n?(e,t)=>t[n]:null}function E1(n,e,t){n.theme=A1(n.theme)?t:n.theme[e]||n.theme}function Ml(n,e){const t=typeof e=="function"?e(n):e;if(Array.isArray(t))return t.flatMap(i=>Ml(n,i));if(Array.isArray(t==null?void 0:t.variants)){let i;if(t.isProcessed)i=t.style;else{const{variants:r,...s}=t;i=s}return Wg(n,t.variants,[i])}return t!=null&&t.isProcessed?t.style:t}function Wg(n,e,t=[]){var r;let i;e:for(let s=0;s<e.length;s+=1){const o=e[s];if(typeof o.props=="function"){if(i??(i={...n,...n.ownerState,ownerState:n.ownerState}),!o.props(i))continue}else for(const a in o.props)if(n[a]!==o.props[a]&&((r=n.ownerState)==null?void 0:r[a])!==o.props[a])continue e;typeof o.style=="function"?(i??(i={...n,...n.ownerState,ownerState:n.ownerState}),t.push(o.style(i))):t.push(o.style)}return t}function Xg(n={}){const{themeId:e,defaultTheme:t=M1,rootShouldForwardProp:i=Uh,slotShouldForwardProp:r=Uh}=n;function s(a){E1(a,e,t)}return(a,l={})=>{dR(a,T=>T.filter(P=>P!==ys));const{name:c,slot:h,skipVariantsResolver:u,skipSx:d,overridesResolver:f=S1($g(h)),...m}=l,v=u!==void 0?u:h&&h!=="Root"&&h!=="root"||!1,p=d||!1;let g=Uh;h==="Root"||h==="root"?g=i:h?g=r:w1(a)&&(g=void 0);const b=hR(a,{shouldForwardProp:g,label:b1(c,h),...m}),M=T=>{if(typeof T=="function"&&T.__emotion_real!==T)return function(C){return Ml(C,T)};if(ci(T)){const P=Gg(T);return P.variants?function(B){return Ml(B,P)}:P.style}return T},S=(...T)=>{const P=[],C=T.map(M),B=[];if(P.push(s),c&&f&&B.push(function(z){var R,U;const A=(U=(R=z.theme.components)==null?void 0:R[c])==null?void 0:U.styleOverrides;if(!A)return null;const D={};for(const F in A)D[F]=Ml(z,A[F]);return f(z,D)}),c&&!v&&B.push(function(z){var D,R;const w=z.theme,A=(R=(D=w==null?void 0:w.components)==null?void 0:D[c])==null?void 0:R.variants;return A?Wg(z,A):null}),p||B.push(ys),Array.isArray(C[0])){const E=C.shift(),z=new Array(P.length).fill(""),w=new Array(B.length).fill("");let A;A=[...z,...E,...w],A.raw=[...z,...E.raw,...w],P.unshift(A)}const K=[...P,...C,...B],_=b(...K);return a.muiName&&(_.muiName=a.muiName),process.env.NODE_ENV!=="production"&&(_.displayName=T1(c,h,a)),_};return b.withConfig&&(S.withConfig=b.withConfig),S}}function T1(n,e,t){return n?`${n}${gn(e||"")}`:`Styled(${x1(t)})`}function b1(n,e){let t;return process.env.NODE_ENV!=="production"&&n&&(t=`${n}-${$g(e||"Root")}`),t}function A1(n){for(const e in n)return!1;return!0}function w1(n){return typeof n=="string"&&n.charCodeAt(0)>96}function $g(n){return n&&n.charAt(0).toLowerCase()+n.slice(1)}const R1=Xg();function Ro(n,e){const t={...e};for(const i in n)if(Object.prototype.hasOwnProperty.call(n,i)){const r=i;if(r==="components"||r==="slots")t[r]={...n[r],...t[r]};else if(r==="componentsProps"||r==="slotProps"){const s=n[r],o=e[r];if(!o)t[r]=s||{};else if(!s)t[r]=o;else{t[r]={...o};for(const a in s)if(Object.prototype.hasOwnProperty.call(s,a)){const l=a;t[r][l]=Ro(s[l],o[l])}}}else t[r]===void 0&&(t[r]=n[r])}return t}function C1(n){const{theme:e,name:t,props:i}=n;return!e||!e.components||!e.components[t]||!e.components[t].defaultProps?i:Ro(e.components[t].defaultProps,i)}function P1({props:n,name:e,defaultTheme:t,themeId:i}){let r=f1(t);return i&&(r=r[i]||r),C1({theme:r,name:e,props:n})}const I1=typeof window<"u"?Ve.useLayoutEffect:Ve.useEffect;function L1(n,e=Number.MIN_SAFE_INTEGER,t=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(n,t))}function Fh(n,e=0,t=1){return process.env.NODE_ENV!=="production"&&(n<e||n>t)&&console.error(`MUI: The value provided ${n} is out of range [${e}, ${t}].`),L1(n,e,t)}function D1(n){n=n.slice(1);const e=new RegExp(`.{1,${n.length>=6?2:1}}`,"g");let t=n.match(e);return t&&t[0].length===1&&(t=t.map(i=>i+i)),t?`rgb${t.length===4?"a":""}(${t.map((i,r)=>r<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function qi(n){if(n.type)return n;if(n.charAt(0)==="#")return qi(D1(n));const e=n.indexOf("("),t=n.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(t))throw new Error(process.env.NODE_ENV!=="production"?`MUI: Unsupported \`${n}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`:ji(9,n));let i=n.substring(e+1,n.length-1),r;if(t==="color"){if(i=i.split(" "),r=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(r))throw new Error(process.env.NODE_ENV!=="production"?`MUI: unsupported \`${r}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`:ji(10,r))}else i=i.split(",");return i=i.map(s=>parseFloat(s)),{type:t,values:i,colorSpace:r}}const N1=n=>{const e=qi(n);return e.values.slice(0,3).map((t,i)=>e.type.includes("hsl")&&i!==0?`${t}%`:t).join(" ")},Co=(n,e)=>{try{return N1(n)}catch{return e&&process.env.NODE_ENV!=="production"&&console.warn(e),n}};function Sl(n){const{type:e,colorSpace:t}=n;let{values:i}=n;return e.includes("rgb")?i=i.map((r,s)=>s<3?parseInt(r,10):r):e.includes("hsl")&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),e.includes("color")?i=`${t} ${i.join(" ")}`:i=`${i.join(", ")}`,`${e}(${i})`}function jg(n){n=qi(n);const{values:e}=n,t=e[0],i=e[1]/100,r=e[2]/100,s=i*Math.min(r,1-r),o=(c,h=(c+t/30)%12)=>r-s*Math.max(Math.min(h-3,9-h,1),-1);let a="rgb";const l=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return n.type==="hsla"&&(a+="a",l.push(e[3])),Sl({type:a,values:l})}function Bh(n){n=qi(n);let e=n.type==="hsl"||n.type==="hsla"?qi(jg(n)).values:n.values;return e=e.map(t=>(n.type!=="color"&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function Yg(n,e){const t=Bh(n),i=Bh(e);return(Math.max(t,i)+.05)/(Math.min(t,i)+.05)}function xs(n,e){return n=qi(n),e=Fh(e),(n.type==="rgb"||n.type==="hsl")&&(n.type+="a"),n.type==="color"?n.values[3]=`/${e}`:n.values[3]=e,Sl(n)}function El(n,e,t){try{return xs(n,e)}catch{return n}}function kh(n,e){if(n=qi(n),e=Fh(e),n.type.includes("hsl"))n.values[2]*=1-e;else if(n.type.includes("rgb")||n.type.includes("color"))for(let t=0;t<3;t+=1)n.values[t]*=1-e;return Sl(n)}function Tt(n,e,t){try{return kh(n,e)}catch{return n}}function Vh(n,e){if(n=qi(n),e=Fh(e),n.type.includes("hsl"))n.values[2]+=(100-n.values[2])*e;else if(n.type.includes("rgb"))for(let t=0;t<3;t+=1)n.values[t]+=(255-n.values[t])*e;else if(n.type.includes("color"))for(let t=0;t<3;t+=1)n.values[t]+=(1-n.values[t])*e;return Sl(n)}function bt(n,e,t){try{return Vh(n,e)}catch{return n}}function O1(n,e=.15){return Bh(n)>.5?kh(n,e):Vh(n,e)}function Tl(n,e,t){try{return O1(n,e)}catch{return n}}function U1(n,e){return process.env.NODE_ENV==="production"?()=>null:function(...i){return n(...i)||e(...i)}}function F1(n){const{prototype:e={}}=n;return!!e.isReactComponent}function B1(n,e,t,i,r){const s=n[e],o=r||e;if(s==null||typeof window>"u")return null;let a;return typeof s=="function"&&!F1(s)&&(a="Did you accidentally provide a plain function component instead?"),a!==void 0?new Error(`Invalid ${i} \`${o}\` supplied to \`${t}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`):null}const k1=U1(Z.elementType,B1),V1=Z.oneOfType([Z.func,Z.object]);function z1(n,e){typeof n=="function"?n(e):n&&(n.current=e)}function bl(n){const e=Ve.useRef(n);return I1(()=>{e.current=n}),Ve.useRef((...t)=>(0,e.current)(...t)).current}function qg(...n){return Ve.useMemo(()=>n.every(e=>e==null)?null:e=>{n.forEach(t=>{z1(t,e)})},n)}const Kg={};function Zg(n,e){const t=Ve.useRef(Kg);return t.current===Kg&&(t.current=n(e)),t}const H1=[];function G1(n){Ve.useEffect(n,H1)}class zh{constructor(){jt(this,"currentId",null);jt(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});jt(this,"disposeEffect",()=>this.clear)}static create(){return new zh}start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}}function W1(){const n=Zg(zh.create).current;return G1(n.disposeEffect),n}function Qg(n){try{return n.matches(":focus-visible")}catch{process.env.NODE_ENV!=="production"&&!/jsdom/.test(window.navigator.userAgent)&&console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.","Some components rely on this feature to work properly."].join(`
`))}return!1}function Hh(n,e,t=void 0){const i={};for(const r in n){const s=n[r];let o="",a=!0;for(let l=0;l<s.length;l+=1){const c=s[l];c&&(o+=(a===!0?"":" ")+e(c),a=!1,t&&t[c]&&(o+=" "+t[c]))}i[r]=o}return i}const X1=Ve.createContext(void 0);process.env.NODE_ENV!=="production"&&(Z.node,Z.object);function $1(n){const{theme:e,name:t,props:i}=n;if(!e||!e.components||!e.components[t])return i;const r=e.components[t];return r.defaultProps?Ro(r.defaultProps,i):!r.styleOverrides&&!r.variants?Ro(r,i):i}function j1({props:n,name:e}){const t=Ve.useContext(X1);return $1({props:n,name:e,theme:{components:t}})}const Jg={theme:void 0};function Y1(n){let e,t;return function(r){let s=e;return(s===void 0||r.theme!==t)&&(Jg.theme=r.theme,s=Gg(n(Jg)),e=s,t=r.theme),s}}function q1(n=""){function e(...i){if(!i.length)return"";const r=i[0];return typeof r=="string"&&!r.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${n?`${n}-`:""}${r}${e(...i.slice(1))})`:`, ${r}`}return(i,...r)=>`var(--${n?`${n}-`:""}${i}${e(...r)})`}const e_=(n,e,t,i=[])=>{let r=n;e.forEach((s,o)=>{o===e.length-1?Array.isArray(r)?r[Number(s)]=t:r&&typeof r=="object"&&(r[s]=t):r&&typeof r=="object"&&(r[s]||(r[s]=i.includes(s)?[]:{}),r=r[s])})},K1=(n,e,t)=>{function i(r,s=[],o=[]){Object.entries(r).forEach(([a,l])=>{(!t||t&&!t([...s,a]))&&l!=null&&(typeof l=="object"&&Object.keys(l).length>0?i(l,[...s,a],Array.isArray(l)?[...o,a]:o):e([...s,a],l,o))})}i(n)},Z1=(n,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(i=>n.includes(i))||n[n.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function Gh(n,e){const{prefix:t,shouldSkipGeneratingVar:i}=e||{},r={},s={},o={};return K1(n,(a,l,c)=>{if((typeof l=="string"||typeof l=="number")&&(!i||!i(a,l))){const h=`--${t?`${t}-`:""}${a.join("-")}`,u=Z1(a,l);Object.assign(r,{[h]:u}),e_(s,a,`var(${h})`,c),e_(o,a,`var(${h}, ${u})`,c)}},a=>a[0]==="vars"),{css:r,vars:s,varsWithDefaults:o}}function Q1(n,e={}){const{getSelector:t=p,disableCssColorScheme:i,colorSchemeSelector:r}=e,{colorSchemes:s={},components:o,defaultColorScheme:a="light",...l}=n,{vars:c,css:h,varsWithDefaults:u}=Gh(l,e);let d=u;const f={},{[a]:m,...v}=s;if(Object.entries(v||{}).forEach(([M,S])=>{const{vars:T,css:P,varsWithDefaults:C}=Gh(S,e);d=fn(d,C),f[M]={css:P,vars:T}}),m){const{css:M,vars:S,varsWithDefaults:T}=Gh(m,e);d=fn(d,T),f[a]={css:M,vars:S}}function p(M,S){var P,C;let T=r;if(r==="class"&&(T=".%s"),r==="data"&&(T="[data-%s]"),r!=null&&r.startsWith("data-")&&!r.includes("%s")&&(T=`[${r}="%s"]`),M){if(T==="media")return n.defaultColorScheme===M?":root":{[`@media (prefers-color-scheme: ${((C=(P=s[M])==null?void 0:P.palette)==null?void 0:C.mode)||M})`]:{":root":S}};if(T)return n.defaultColorScheme===M?`:root, ${T.replace("%s",String(M))}`:T.replace("%s",String(M))}return":root"}return{vars:d,generateThemeVars:()=>{let M={...c};return Object.entries(f).forEach(([,{vars:S}])=>{M=fn(M,S)}),M},generateStyleSheets:()=>{var B,K;const M=[],S=n.defaultColorScheme||"light";function T(_,E){Object.keys(E).length&&M.push(typeof _=="string"?{[_]:{...E}}:_)}T(t(void 0,{...h}),h);const{[S]:P,...C}=f;if(P){const{css:_}=P,E=(K=(B=s[S])==null?void 0:B.palette)==null?void 0:K.mode,z=!i&&E?{colorScheme:E,..._}:{..._};T(t(S,{...z}),z)}return Object.entries(C).forEach(([_,{css:E}])=>{var A,D;const z=(D=(A=s[_])==null?void 0:A.palette)==null?void 0:D.mode,w=!i&&z?{colorScheme:z,...E}:{...E};T(t(_,{...w}),w)}),M}}}function J1(n){return function(t){return n==="media"?(process.env.NODE_ENV!=="production"&&t!=="light"&&t!=="dark"&&console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`),`@media (prefers-color-scheme: ${t})`):n?n.startsWith("data-")&&!n.includes("%s")?`[${n}="${t}"] &`:n==="class"?`.${t} &`:n==="data"?`[data-${t}] &`:`${n.replace("%s",t)} &`:"&"}}const eC=xl(),tC=R1("div",{name:"MuiStack",slot:"Root",overridesResolver:(n,e)=>e.root});function nC(n){return P1({props:n,name:"MuiStack",defaultTheme:eC})}function iC(n,e){const t=Ve.Children.toArray(n).filter(Boolean);return t.reduce((i,r,s)=>(i.push(r),s<t.length-1&&i.push(Ve.cloneElement(e,{key:`separator-${s}`})),i),[])}const rC=n=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[n],sC=({ownerState:n,theme:e})=>{let t={display:"flex",flexDirection:"column",...Yn({theme:e},Lh({values:n.direction,breakpoints:e.breakpoints.values}),i=>({flexDirection:i}))};if(n.spacing){const i=pl(e),r=Object.keys(e.breakpoints.values).reduce((l,c)=>((typeof n.spacing=="object"&&n.spacing[c]!=null||typeof n.direction=="object"&&n.direction[c]!=null)&&(l[c]=!0),l),{}),s=Lh({values:n.direction,base:r}),o=Lh({values:n.spacing,base:r});typeof s=="object"&&Object.keys(s).forEach((l,c,h)=>{if(!s[l]){const d=c>0?s[h[c-1]]:"column";s[l]=d}}),t=fn(t,Yn({theme:e},o,(l,c)=>n.useFlexGap?{gap:Sr(i,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${rC(c?s[c]:n.direction)}`]:Sr(i,l)}}))}return t=MR(e.breakpoints,t),t};function oC(n={}){const{createStyledComponent:e=tC,useThemeProps:t=nC,componentName:i="MuiStack"}=n,r=()=>Hh({root:["root"]},l=>wo(i,l),{}),s=e(sC),o=Ve.forwardRef(function(l,c){const h=t(l),u=m1(h),{component:d="div",direction:f="column",spacing:m=0,divider:v,children:p,className:g,useFlexGap:b=!1,...M}=u,S={direction:f,spacing:m,useFlexGap:b},T=r();return xt.jsx(s,{as:d,ownerState:S,ref:c,className:bn(T.root,g),...M,children:v?iC(p,v):p})});return process.env.NODE_ENV!=="production"&&(o.propTypes={children:Z.node,direction:Z.oneOfType([Z.oneOf(["column-reverse","column","row-reverse","row"]),Z.arrayOf(Z.oneOf(["column-reverse","column","row-reverse","row"])),Z.object]),divider:Z.node,spacing:Z.oneOfType([Z.arrayOf(Z.oneOfType([Z.number,Z.string])),Z.number,Z.object,Z.string]),sx:Z.oneOfType([Z.arrayOf(Z.oneOfType([Z.func,Z.object,Z.bool])),Z.func,Z.object])}),o}const Wh=oC();process.env.NODE_ENV!=="production"&&(Wh.propTypes={children:Z.node,component:Z.elementType,direction:Z.oneOfType([Z.oneOf(["column-reverse","column","row-reverse","row"]),Z.arrayOf(Z.oneOf(["column-reverse","column","row-reverse","row"])),Z.object]),divider:Z.node,spacing:Z.oneOfType([Z.arrayOf(Z.oneOfType([Z.number,Z.string])),Z.number,Z.object,Z.string]),sx:Z.oneOfType([Z.arrayOf(Z.oneOfType([Z.func,Z.object,Z.bool])),Z.func,Z.object]),useFlexGap:Z.bool});var t_={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(qA,function(){function t(w,A,D){for(var R,U=0,F=A.length;U<F;U++)!R&&U in A||(R||(R=Array.prototype.slice.call(A,0,U)),R[U]=A[U]);return w.concat(R||Array.prototype.slice.call(A))}var i=Object.freeze({__proto__:null,blackman:function(w){for(var A=new Float32Array(w),D=2*Math.PI/(w-1),R=2*D,U=0;U<w/2;U++)A[U]=.42-.5*Math.cos(U*D)+.08*Math.cos(U*R);for(U=Math.ceil(w/2);U>0;U--)A[w-U]=A[U-1];return A},hamming:function(w){for(var A=new Float32Array(w),D=0;D<w;D++)A[D]=.54-.46*Math.cos(2*Math.PI*(D/w-1));return A},hanning:function(w){for(var A=new Float32Array(w),D=0;D<w;D++)A[D]=.5-.5*Math.cos(2*Math.PI*D/(w-1));return A},sine:function(w){for(var A=Math.PI/(w-1),D=new Float32Array(w),R=0;R<w;R++)D[R]=Math.sin(A*R);return D}}),r={};function s(w){for(;w%2==0&&w>1;)w/=2;return w===1}function o(w,A){if(A!=="rect"){if(A!==""&&A||(A="hanning"),r[A]||(r[A]={}),!r[A][w.length])try{r[A][w.length]=i[A](w.length)}catch{throw new Error("Invalid windowing function")}w=function(D,R){for(var U=[],F=0;F<Math.min(D.length,R.length);F++)U[F]=D[F]*R[F];return U}(w,r[A][w.length])}return w}function a(w,A,D){for(var R=new Float32Array(w),U=0;U<R.length;U++)R[U]=U*A/D,R[U]=13*Math.atan(R[U]/1315.8)+3.5*Math.atan(Math.pow(R[U]/7518,2));return R}function l(w){return Float32Array.from(w)}function c(w){return 1125*Math.log(1+w/700)}function h(w,A,D){for(var R,U=new Float32Array(w+2),F=new Float32Array(w+2),Q=A/2,k=c(0),G=(c(Q)-k)/(w+1),te=new Array(w+2),ae=0;ae<U.length;ae++)U[ae]=ae*G,F[ae]=(R=U[ae],700*(Math.exp(R/1125)-1)),te[ae]=Math.floor((D+1)*F[ae]/A);for(var W=new Array(w),j=0;j<W.length;j++){for(W[j]=new Array(D/2+1).fill(0),ae=te[j];ae<te[j+1];ae++)W[j][ae]=(ae-te[j])/(te[j+1]-te[j]);for(ae=te[j+1];ae<te[j+2];ae++)W[j][ae]=(te[j+2]-ae)/(te[j+2]-te[j+1])}return W}function u(w,A,D,R,U,F,Q){R===void 0&&(R=5),U===void 0&&(U=2),F===void 0&&(F=!0),Q===void 0&&(Q=440);var k=Math.floor(D/2)+1,G=new Array(D).fill(0).map(function(fe,xe){return w*function($,O){return Math.log2(16*$/O)}(A*xe/D,Q)});G[0]=G[1]-1.5*w;var te,ae,W,j=G.slice(1).map(function(fe,xe){return Math.max(fe-G[xe])},1).concat([1]),le=Math.round(w/2),re=new Array(w).fill(0).map(function(fe,xe){return G.map(function($){return(10*w+le+$-xe)%w-le})}),de=re.map(function(fe,xe){return fe.map(function($,O){return Math.exp(-.5*Math.pow(2*re[xe][O]/j[O],2))})});if(ae=(te=de)[0].map(function(){return 0}),W=te.reduce(function(fe,xe){return xe.forEach(function($,O){fe[O]+=Math.pow($,2)}),fe},ae).map(Math.sqrt),de=te.map(function(fe,xe){return fe.map(function($,O){return $/(W[O]||1)})}),U){var pe=G.map(function(fe){return Math.exp(-.5*Math.pow((fe/w-R)/U,2))});de=de.map(function(fe){return fe.map(function(xe,$){return xe*pe[$]})})}return F&&(de=t(t([],de.slice(3),!0),de.slice(0,3))),de.map(function(fe){return fe.slice(0,k)})}function d(w,A){for(var D=0,R=0,U=0;U<A.length;U++)D+=Math.pow(U,w)*Math.abs(A[U]),R+=A[U];return D/R}function f(w){var A=w.ampSpectrum,D=w.barkScale,R=w.numberOfBarkBands,U=R===void 0?24:R;if(typeof A!="object"||typeof D!="object")throw new TypeError;var F=U,Q=new Float32Array(F),k=0,G=A,te=new Int32Array(F+1);te[0]=0;for(var ae=D[G.length-1]/F,W=1,j=0;j<G.length;j++)for(;D[j]>ae;)te[W++]=j,ae=W*D[G.length-1]/F;for(te[F]=G.length-1,j=0;j<F;j++){for(var le=0,re=te[j];re<te[j+1];re++)le+=G[re];Q[j]=Math.pow(le,.23)}for(j=0;j<Q.length;j++)k+=Q[j];return{specific:Q,total:k}}function m(w){var A=w.ampSpectrum;if(typeof A!="object")throw new TypeError;for(var D=new Float32Array(A.length),R=0;R<D.length;R++)D[R]=Math.pow(A[R],2);return D}function v(w){var A=w.ampSpectrum,D=w.melFilterBank,R=w.bufferSize;if(typeof A!="object")throw new TypeError("Valid ampSpectrum is required to generate melBands");if(typeof D!="object")throw new TypeError("Valid melFilterBank is required to generate melBands");for(var U=m({ampSpectrum:A}),F=D.length,Q=Array(F),k=new Float32Array(F),G=0;G<k.length;G++){Q[G]=new Float32Array(R/2),k[G]=0;for(var te=0;te<R/2;te++)Q[G][te]=D[G][te]*U[te],k[G]+=Q[G][te];k[G]=Math.log(k[G]+1)}return Array.prototype.slice.call(k)}function p(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var g=null,b=p(function(w,A){var D=w.length;return A=A||2,g&&g[D]||function(R){(g=g||{})[R]=new Array(R*R);for(var U=Math.PI/R,F=0;F<R;F++)for(var Q=0;Q<R;Q++)g[R][Q+F*R]=Math.cos(U*(Q+.5)*F)}(D),w.map(function(){return 0}).map(function(R,U){return A*w.reduce(function(F,Q,k,G){return F+Q*g[D][k+U*D]},0)})}),M=Object.freeze({__proto__:null,amplitudeSpectrum:function(w){return w.ampSpectrum},buffer:function(w){return w.signal},chroma:function(w){var A=w.ampSpectrum,D=w.chromaFilterBank;if(typeof A!="object")throw new TypeError("Valid ampSpectrum is required to generate chroma");if(typeof D!="object")throw new TypeError("Valid chromaFilterBank is required to generate chroma");var R=D.map(function(F,Q){return A.reduce(function(k,G,te){return k+G*F[te]},0)}),U=Math.max.apply(Math,R);return U?R.map(function(F){return F/U}):R},complexSpectrum:function(w){return w.complexSpectrum},energy:function(w){var A=w.signal;if(typeof A!="object")throw new TypeError;for(var D=0,R=0;R<A.length;R++)D+=Math.pow(Math.abs(A[R]),2);return D},loudness:f,melBands:v,mfcc:function(w){var A=w.ampSpectrum,D=w.melFilterBank,R=w.numberOfMFCCCoefficients,U=w.bufferSize,F=Math.min(40,Math.max(1,R||13));if(D.length<F)throw new Error("Insufficient filter bank for requested number of coefficients");var Q=v({ampSpectrum:A,melFilterBank:D,bufferSize:U});return b(Q).slice(0,F)},perceptualSharpness:function(w){for(var A=f({ampSpectrum:w.ampSpectrum,barkScale:w.barkScale}),D=A.specific,R=0,U=0;U<D.length;U++)R+=U<15?(U+1)*D[U+1]:.066*Math.exp(.171*(U+1));return R*=.11/A.total},perceptualSpread:function(w){for(var A=f({ampSpectrum:w.ampSpectrum,barkScale:w.barkScale}),D=0,R=0;R<A.specific.length;R++)A.specific[R]>D&&(D=A.specific[R]);return Math.pow((A.total-D)/A.total,2)},powerSpectrum:m,rms:function(w){var A=w.signal;if(typeof A!="object")throw new TypeError;for(var D=0,R=0;R<A.length;R++)D+=Math.pow(A[R],2);return D/=A.length,D=Math.sqrt(D)},spectralCentroid:function(w){var A=w.ampSpectrum;if(typeof A!="object")throw new TypeError;return d(1,A)},spectralCrest:function(w){var A=w.ampSpectrum;if(typeof A!="object")throw new TypeError;var D=0,R=-1/0;return A.forEach(function(U){D+=Math.pow(U,2),R=U>R?U:R}),D/=A.length,D=Math.sqrt(D),R/D},spectralFlatness:function(w){var A=w.ampSpectrum;if(typeof A!="object")throw new TypeError;for(var D=0,R=0,U=0;U<A.length;U++)D+=Math.log(A[U]),R+=A[U];return Math.exp(D/A.length)*A.length/R},spectralFlux:function(w){var A=w.signal,D=w.previousSignal,R=w.bufferSize;if(typeof A!="object"||typeof D!="object")throw new TypeError;for(var U=0,F=-R/2;F<A.length/2-1;F++)x=Math.abs(A[F])-Math.abs(D[F]),U+=(x+Math.abs(x))/2;return U},spectralKurtosis:function(w){var A=w.ampSpectrum;if(typeof A!="object")throw new TypeError;var D=A,R=d(1,D),U=d(2,D),F=d(3,D),Q=d(4,D);return(-3*Math.pow(R,4)+6*R*U-4*R*F+Q)/Math.pow(Math.sqrt(U-Math.pow(R,2)),4)},spectralRolloff:function(w){var A=w.ampSpectrum,D=w.sampleRate;if(typeof A!="object")throw new TypeError;for(var R=A,U=D/(2*(R.length-1)),F=0,Q=0;Q<R.length;Q++)F+=R[Q];for(var k=.99*F,G=R.length-1;F>k&&G>=0;)F-=R[G],--G;return(G+1)*U},spectralSkewness:function(w){var A=w.ampSpectrum;if(typeof A!="object")throw new TypeError;var D=d(1,A),R=d(2,A),U=d(3,A);return(2*Math.pow(D,3)-3*D*R+U)/Math.pow(Math.sqrt(R-Math.pow(D,2)),3)},spectralSlope:function(w){var A=w.ampSpectrum,D=w.sampleRate,R=w.bufferSize;if(typeof A!="object")throw new TypeError;for(var U=0,F=0,Q=new Float32Array(A.length),k=0,G=0,te=0;te<A.length;te++){U+=A[te];var ae=te*D/R;Q[te]=ae,k+=ae*ae,F+=ae,G+=ae*A[te]}return(A.length*G-F*U)/(U*(k-Math.pow(F,2)))},spectralSpread:function(w){var A=w.ampSpectrum;if(typeof A!="object")throw new TypeError;return Math.sqrt(d(2,A)-Math.pow(d(1,A),2))},zcr:function(w){var A=w.signal;if(typeof A!="object")throw new TypeError;for(var D=0,R=1;R<A.length;R++)(A[R-1]>=0&&A[R]<0||A[R-1]<0&&A[R]>=0)&&D++;return D}});function S(w){if(Array.isArray(w)){for(var A=0,D=Array(w.length);A<w.length;A++)D[A]=w[A];return D}return Array.from(w)}var T={},P={},C={bitReverseArray:function(w){if(T[w]===void 0){for(var A=(w-1).toString(2).length,D="0".repeat(A),R={},U=0;U<w;U++){var F=U.toString(2);F=D.substr(F.length)+F,F=[].concat(S(F)).reverse().join(""),R[U]=parseInt(F,2)}T[w]=R}return T[w]},multiply:function(w,A){return{real:w.real*A.real-w.imag*A.imag,imag:w.real*A.imag+w.imag*A.real}},add:function(w,A){return{real:w.real+A.real,imag:w.imag+A.imag}},subtract:function(w,A){return{real:w.real-A.real,imag:w.imag-A.imag}},euler:function(w,A){var D=-2*Math.PI*w/A;return{real:Math.cos(D),imag:Math.sin(D)}},conj:function(w){return w.imag*=-1,w},constructComplexArray:function(w){var A={};A.real=w.real===void 0?w.slice():w.real.slice();var D=A.real.length;return P[D]===void 0&&(P[D]=Array.apply(null,Array(D)).map(Number.prototype.valueOf,0)),A.imag=P[D].slice(),A}},B=function(w){var A={};w.real===void 0||w.imag===void 0?A=C.constructComplexArray(w):(A.real=w.real.slice(),A.imag=w.imag.slice());var D=A.real.length,R=Math.log2(D);if(Math.round(R)!=R)throw new Error("Input size must be a power of 2.");if(A.real.length!=A.imag.length)throw new Error("Real and imaginary components must have the same length.");for(var U=C.bitReverseArray(D),F={real:[],imag:[]},Q=0;Q<D;Q++)F.real[U[Q]]=A.real[Q],F.imag[U[Q]]=A.imag[Q];for(var k=0;k<D;k++)A.real[k]=F.real[k],A.imag[k]=F.imag[k];for(var G=1;G<=R;G++)for(var te=Math.pow(2,G),ae=0;ae<te/2;ae++)for(var W=C.euler(ae,te),j=0;j<D/te;j++){var le=te*j+ae,re=te*j+ae+te/2,de={real:A.real[le],imag:A.imag[le]},pe={real:A.real[re],imag:A.imag[re]},fe=C.multiply(W,pe),xe=C.subtract(de,fe);A.real[re]=xe.real,A.imag[re]=xe.imag;var $=C.add(fe,de);A.real[le]=$.real,A.imag[le]=$.imag}return A},K=B,_=function(){function w(A,D){var R=this;if(this._m=D,!A.audioContext)throw this._m.errors.noAC;if(A.bufferSize&&!s(A.bufferSize))throw this._m._errors.notPow2;if(!A.source)throw this._m._errors.noSource;this._m.audioContext=A.audioContext,this._m.bufferSize=A.bufferSize||this._m.bufferSize||256,this._m.hopSize=A.hopSize||this._m.hopSize||this._m.bufferSize,this._m.sampleRate=A.sampleRate||this._m.audioContext.sampleRate||44100,this._m.callback=A.callback,this._m.windowingFunction=A.windowingFunction||"hanning",this._m.featureExtractors=M,this._m.EXTRACTION_STARTED=A.startImmediately||!1,this._m.channel=typeof A.channel=="number"?A.channel:0,this._m.inputs=A.inputs||1,this._m.outputs=A.outputs||1,this._m.numberOfMFCCCoefficients=A.numberOfMFCCCoefficients||this._m.numberOfMFCCCoefficients||13,this._m.numberOfBarkBands=A.numberOfBarkBands||this._m.numberOfBarkBands||24,this._m.spn=this._m.audioContext.createScriptProcessor(this._m.bufferSize,this._m.inputs,this._m.outputs),this._m.spn.connect(this._m.audioContext.destination),this._m._featuresToExtract=A.featureExtractors||[],this._m.barkScale=a(this._m.bufferSize,this._m.sampleRate,this._m.bufferSize),this._m.melFilterBank=h(Math.max(this._m.melBands,this._m.numberOfMFCCCoefficients),this._m.sampleRate,this._m.bufferSize),this._m.inputData=null,this._m.previousInputData=null,this._m.frame=null,this._m.previousFrame=null,this.setSource(A.source),this._m.spn.onaudioprocess=function(U){var F;R._m.inputData!==null&&(R._m.previousInputData=R._m.inputData),R._m.inputData=U.inputBuffer.getChannelData(R._m.channel),R._m.previousInputData?((F=new Float32Array(R._m.previousInputData.length+R._m.inputData.length-R._m.hopSize)).set(R._m.previousInputData.slice(R._m.hopSize)),F.set(R._m.inputData,R._m.previousInputData.length-R._m.hopSize)):F=R._m.inputData;var Q=function(k,G,te){if(k.length<G)throw new Error("Buffer is too short for frame length");if(te<1)throw new Error("Hop length cannot be less that 1");if(G<1)throw new Error("Frame length cannot be less that 1");var ae=1+Math.floor((k.length-G)/te);return new Array(ae).fill(0).map(function(W,j){return k.slice(j*te,j*te+G)})}(F,R._m.bufferSize,R._m.hopSize);Q.forEach(function(k){R._m.frame=k;var G=R._m.extract(R._m._featuresToExtract,R._m.frame,R._m.previousFrame);typeof R._m.callback=="function"&&R._m.EXTRACTION_STARTED&&R._m.callback(G),R._m.previousFrame=R._m.frame})}}return w.prototype.start=function(A){this._m._featuresToExtract=A||this._m._featuresToExtract,this._m.EXTRACTION_STARTED=!0},w.prototype.stop=function(){this._m.EXTRACTION_STARTED=!1},w.prototype.setSource=function(A){this._m.source&&this._m.source.disconnect(this._m.spn),this._m.source=A,this._m.source.connect(this._m.spn)},w.prototype.setChannel=function(A){A<=this._m.inputs?this._m.channel=A:console.error("Channel ".concat(A," does not exist. Make sure you've provided a value for 'inputs' that is greater than ").concat(A," when instantiating the MeydaAnalyzer"))},w.prototype.get=function(A){return this._m.inputData?this._m.extract(A||this._m._featuresToExtract,this._m.inputData,this._m.previousInputData):null},w}(),E={audioContext:null,spn:null,bufferSize:512,sampleRate:44100,melBands:26,chromaBands:12,callback:null,windowingFunction:"hanning",featureExtractors:M,EXTRACTION_STARTED:!1,numberOfMFCCCoefficients:13,numberOfBarkBands:24,_featuresToExtract:[],windowing:o,_errors:{notPow2:new Error("Meyda: Buffer size must be a power of 2, e.g. 64 or 512"),featureUndef:new Error("Meyda: No features defined."),invalidFeatureFmt:new Error("Meyda: Invalid feature format"),invalidInput:new Error("Meyda: Invalid input."),noAC:new Error("Meyda: No AudioContext specified."),noSource:new Error("Meyda: No source node specified.")},createMeydaAnalyzer:function(w){return new _(w,Object.assign({},E))},listAvailableFeatureExtractors:function(){return Object.keys(this.featureExtractors)},extract:function(w,A,D){var R=this;if(!A)throw this._errors.invalidInput;if(typeof A!="object")throw this._errors.invalidInput;if(!w)throw this._errors.featureUndef;if(!s(A.length))throw this._errors.notPow2;this.barkScale!==void 0&&this.barkScale.length==this.bufferSize||(this.barkScale=a(this.bufferSize,this.sampleRate,this.bufferSize)),this.melFilterBank!==void 0&&this.barkScale.length==this.bufferSize&&this.melFilterBank.length==this.melBands||(this.melFilterBank=h(Math.max(this.melBands,this.numberOfMFCCCoefficients),this.sampleRate,this.bufferSize)),this.chromaFilterBank!==void 0&&this.chromaFilterBank.length==this.chromaBands||(this.chromaFilterBank=u(this.chromaBands,this.sampleRate,this.bufferSize)),"buffer"in A&&A.buffer===void 0?this.signal=l(A):this.signal=A;var U=z(A,this.windowingFunction,this.bufferSize);if(this.signal=U.windowedSignal,this.complexSpectrum=U.complexSpectrum,this.ampSpectrum=U.ampSpectrum,D){var F=z(D,this.windowingFunction,this.bufferSize);this.previousSignal=F.windowedSignal,this.previousComplexSpectrum=F.complexSpectrum,this.previousAmpSpectrum=F.ampSpectrum}var Q=function(k){return R.featureExtractors[k]({ampSpectrum:R.ampSpectrum,chromaFilterBank:R.chromaFilterBank,complexSpectrum:R.complexSpectrum,signal:R.signal,bufferSize:R.bufferSize,sampleRate:R.sampleRate,barkScale:R.barkScale,melFilterBank:R.melFilterBank,previousSignal:R.previousSignal,previousAmpSpectrum:R.previousAmpSpectrum,previousComplexSpectrum:R.previousComplexSpectrum,numberOfMFCCCoefficients:R.numberOfMFCCCoefficients,numberOfBarkBands:R.numberOfBarkBands})};if(typeof w=="object")return w.reduce(function(k,G){var te;return Object.assign({},k,((te={})[G]=Q(G),te))},{});if(typeof w=="string")return Q(w);throw this._errors.invalidFeatureFmt}},z=function(w,A,D){var R={};w.buffer===void 0?R.signal=l(w):R.signal=w,R.windowedSignal=o(R.signal,A),R.complexSpectrum=K(R.windowedSignal),R.ampSpectrum=new Float32Array(D/2);for(var U=0;U<D/2;U++)R.ampSpectrum[U]=Math.sqrt(Math.pow(R.complexSpectrum.real[U],2)+Math.pow(R.complexSpectrum.imag[U],2));return R};return typeof window<"u"&&(window.Meyda=E),E})})(t_);var aC=t_.exports;const lC=Gm(aC),Xh=(n,e)=>{const t=lC.createMeydaAnalyzer({audioContext:n.context,source:n,bufferSize:512,featureExtractors:["mfcc","rms","spectralCentroid","spectralFlatness","energy"],callback:i=>{const r=cC(i);e(r)}});return t.start(),console.log("Meyda initialized"),t};function cC(n){const{mfcc:e,rms:t,spectralCentroid:i}=n;return{AA:t&&e?Math.min(t*(e[0]||0),1):0,EE:e?Math.min(e[5]||0,1):0,IH:e?Math.min(e[3]||0,1):0,OH:e?Math.min(e[2]||0,1):0,OU:e?Math.min((e[0]+e[5])/2,1):0,W:i&&i>1500?1:0,UW:i&&i>1e3?1:0,TH:i&&i>2e3?1:0,T:i&&i>2500?1:0,SH:i&&i>5e3?1:0,S:i&&i>4e3?1:0,OW:e?Math.min((e[0]+e[5])/2,1):0,M:t&&e?Math.min(t*(e[0]||0),1):0,L:e?Math.min(e[2]||0,1):0,K:i&&i>3e3?1:0,IY:e?Math.min(e[4]||0,1):0,F:i&&i>6e3?1:0,ER:e?Math.min(e[1]||0,1):0,EH:e?Math.min(e[2]||0,1):0,TONGUE_UP_DOWN:e?Math.min(e[6]||0,1):0,TONGUE_IN_OUT:i&&i>1500?1:0,MOUTH_WIDE_NARROW:t&&t>.5?1:0,MOUTH_OPEN:t&&t>.3?1:0}}const uC=({name:n,value:e,min:t=-2,max:i=2,onChange:r})=>{const s=o=>{const a=parseFloat(o.target.value);r(n,a)};return xt.jsxs("div",{children:[xt.jsx("label",{htmlFor:n,children:n}),xt.jsx("input",{type:"range",id:n,name:n,min:t,max:i,step:.01,value:e,onChange:s}),xt.jsx("span",{children:e.toFixed(2)})]})},Po={black:"#000",white:"#fff"},Ms={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ss={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Es={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Ts={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},bs={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Io={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},hC={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},dC="$$material";function n_(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Po.white,default:Po.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const fC=n_();function i_(){return{text:{primary:Po.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Po.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const r_=i_();function s_(n,e,t,i){const r=i.light||i,s=i.dark||i*1.5;n[e]||(n.hasOwnProperty(t)?n[e]=n[t]:e==="light"?n.light=Vh(n.main,r):e==="dark"&&(n.dark=kh(n.main,s)))}function pC(n="light"){return n==="dark"?{main:Es[200],light:Es[50],dark:Es[400]}:{main:Es[700],light:Es[400],dark:Es[800]}}function mC(n="light"){return n==="dark"?{main:Ss[200],light:Ss[50],dark:Ss[400]}:{main:Ss[500],light:Ss[300],dark:Ss[700]}}function gC(n="light"){return n==="dark"?{main:Ms[500],light:Ms[300],dark:Ms[700]}:{main:Ms[700],light:Ms[400],dark:Ms[800]}}function _C(n="light"){return n==="dark"?{main:Ts[400],light:Ts[300],dark:Ts[700]}:{main:Ts[700],light:Ts[500],dark:Ts[900]}}function vC(n="light"){return n==="dark"?{main:bs[400],light:bs[300],dark:bs[700]}:{main:bs[800],light:bs[500],dark:bs[900]}}function yC(n="light"){return n==="dark"?{main:Io[400],light:Io[300],dark:Io[700]}:{main:"#ed6c02",light:Io[500],dark:Io[900]}}function $h(n){const{mode:e="light",contrastThreshold:t=3,tonalOffset:i=.2,...r}=n,s=n.primary||pC(e),o=n.secondary||mC(e),a=n.error||gC(e),l=n.info||_C(e),c=n.success||vC(e),h=n.warning||yC(e);function u(v){const p=Yg(v,r_.text.primary)>=t?r_.text.primary:fC.text.primary;if(process.env.NODE_ENV!=="production"){const g=Yg(v,p);g<3&&console.error([`MUI: The contrast ratio of ${g}:1 for ${p} on ${v}`,"falls below the WCAG recommended absolute minimum contrast ratio of 3:1.","https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`))}return p}const d=({color:v,name:p,mainShade:g=500,lightShade:b=300,darkShade:M=700})=>{if(v={...v},!v.main&&v[g]&&(v.main=v[g]),!v.hasOwnProperty("main"))throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${p?` (${p})`:""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${g}\` property.`:ji(11,p?` (${p})`:"",g));if(typeof v.main!="string")throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${p?` (${p})`:""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`:ji(12,p?` (${p})`:"",JSON.stringify(v.main)));return s_(v,"light",b,i),s_(v,"dark",M,i),v.contrastText||(v.contrastText=u(v.main)),v};let f;return e==="light"?f=n_():e==="dark"&&(f=i_()),process.env.NODE_ENV!=="production"&&(f||console.error(`MUI: The palette mode \`${e}\` is not supported.`)),fn({common:{...Po},mode:e,primary:d({color:s,name:"primary"}),secondary:d({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:h,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:c,name:"success"}),grey:hC,contrastThreshold:t,getContrastText:u,augmentColor:d,tonalOffset:i,...f},r)}function xC(n){const e={};return Object.entries(n).forEach(i=>{const[r,s]=i;typeof s=="object"&&(e[r]=`${s.fontStyle?`${s.fontStyle} `:""}${s.fontVariant?`${s.fontVariant} `:""}${s.fontWeight?`${s.fontWeight} `:""}${s.fontStretch?`${s.fontStretch} `:""}${s.fontSize||""}${s.lineHeight?`/${s.lineHeight} `:""}${s.fontFamily||""}`)}),e}function MC(n,e){return{toolbar:{minHeight:56,[n.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[n.up("sm")]:{minHeight:64}},...e}}function SC(n){return Math.round(n*1e5)/1e5}const o_={textTransform:"uppercase"},a_='"Roboto", "Helvetica", "Arial", sans-serif';function EC(n,e){const{fontFamily:t=a_,fontSize:i=14,fontWeightLight:r=300,fontWeightRegular:s=400,fontWeightMedium:o=500,fontWeightBold:a=700,htmlFontSize:l=16,allVariants:c,pxToRem:h,...u}=typeof e=="function"?e(n):e;process.env.NODE_ENV!=="production"&&(typeof i!="number"&&console.error("MUI: `fontSize` is required to be a number."),typeof l!="number"&&console.error("MUI: `htmlFontSize` is required to be a number."));const d=i/14,f=h||(p=>`${p/l*d}rem`),m=(p,g,b,M,S)=>({fontFamily:t,fontWeight:p,fontSize:f(g),lineHeight:b,...t===a_?{letterSpacing:`${SC(M/g)}em`}:{},...S,...c}),v={h1:m(r,96,1.167,-1.5),h2:m(r,60,1.2,-.5),h3:m(s,48,1.167,0),h4:m(s,34,1.235,.25),h5:m(s,24,1.334,0),h6:m(o,20,1.6,.15),subtitle1:m(s,16,1.75,.15),subtitle2:m(o,14,1.57,.1),body1:m(s,16,1.5,.15),body2:m(s,14,1.43,.15),button:m(o,14,1.75,.4,o_),caption:m(s,12,1.66,.4),overline:m(s,12,2.66,1,o_),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return fn({htmlFontSize:l,pxToRem:f,fontFamily:t,fontSize:i,fontWeightLight:r,fontWeightRegular:s,fontWeightMedium:o,fontWeightBold:a,...v},u,{clone:!1})}const TC=.2,bC=.14,AC=.12;function Ct(...n){return[`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${TC})`,`${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${bC})`,`${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${AC})`].join(",")}const wC=["none",Ct(0,2,1,-1,0,1,1,0,0,1,3,0),Ct(0,3,1,-2,0,2,2,0,0,1,5,0),Ct(0,3,3,-2,0,3,4,0,0,1,8,0),Ct(0,2,4,-1,0,4,5,0,0,1,10,0),Ct(0,3,5,-1,0,5,8,0,0,1,14,0),Ct(0,3,5,-1,0,6,10,0,0,1,18,0),Ct(0,4,5,-2,0,7,10,1,0,2,16,1),Ct(0,5,5,-3,0,8,10,1,0,3,14,2),Ct(0,5,6,-3,0,9,12,1,0,3,16,2),Ct(0,6,6,-3,0,10,14,1,0,4,18,3),Ct(0,6,7,-4,0,11,15,1,0,4,20,3),Ct(0,7,8,-4,0,12,17,2,0,5,22,4),Ct(0,7,8,-4,0,13,19,2,0,5,24,4),Ct(0,7,9,-4,0,14,21,2,0,5,26,4),Ct(0,8,9,-5,0,15,22,2,0,6,28,5),Ct(0,8,10,-5,0,16,24,2,0,6,30,5),Ct(0,8,11,-5,0,17,26,2,0,6,32,5),Ct(0,9,11,-5,0,18,28,2,0,7,34,6),Ct(0,9,12,-6,0,19,29,2,0,7,36,6),Ct(0,10,13,-6,0,20,31,3,0,8,38,7),Ct(0,10,13,-6,0,21,33,3,0,8,40,7),Ct(0,10,14,-6,0,22,35,3,0,8,42,7),Ct(0,11,14,-7,0,23,36,3,0,9,44,8),Ct(0,11,15,-7,0,24,38,3,0,9,46,8)],RC={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},CC={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function l_(n){return`${Math.round(n)}ms`}function PC(n){if(!n)return 0;const e=n/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function IC(n){const e={...RC,...n.easing},t={...CC,...n.duration};return{getAutoHeightDuration:PC,create:(r=["all"],s={})=>{const{duration:o=t.standard,easing:a=e.easeInOut,delay:l=0,...c}=s;if(process.env.NODE_ENV!=="production"){const h=d=>typeof d=="string",u=d=>!Number.isNaN(parseFloat(d));!h(r)&&!Array.isArray(r)&&console.error('MUI: Argument "props" must be a string or Array.'),!u(o)&&!h(o)&&console.error(`MUI: Argument "duration" must be a number or a string but found ${o}.`),h(a)||console.error('MUI: Argument "easing" must be a string.'),!u(l)&&!h(l)&&console.error('MUI: Argument "delay" must be a number or a string.'),typeof s!="object"&&console.error(["MUI: Secong argument of transition.create must be an object.","Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)),Object.keys(c).length!==0&&console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`)}return(Array.isArray(r)?r:[r]).map(h=>`${h} ${typeof o=="string"?o:l_(o)} ${a} ${typeof l=="string"?l:l_(l)}`).join(",")},...n,easing:e,duration:t}}const LC={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function jh(n={},...e){const{breakpoints:t,mixins:i={},spacing:r,palette:s={},transitions:o={},typography:a={},shape:l,...c}=n;if(n.vars)throw new Error(process.env.NODE_ENV!=="production"?"MUI: `vars` is a private field used for CSS variables support.\nPlease use another name.":ji(20));const h=$h(s),u=xl(n);let d=fn(u,{mixins:MC(u.breakpoints,i),palette:h,shadows:wC.slice(),typography:EC(h,a),transitions:IC(o),zIndex:{...LC}});if(d=fn(d,c),d=e.reduce((f,m)=>fn(f,m),d),process.env.NODE_ENV!=="production"){const f=["active","checked","completed","disabled","error","expanded","focused","focusVisible","required","selected"],m=(v,p)=>{let g;for(g in v){const b=v[g];if(f.includes(g)&&Object.keys(b).length>0){if(process.env.NODE_ENV!=="production"){const M=wo("",g);console.error([`MUI: The \`${p}\` component increases the CSS specificity of the \`${g}\` internal state.`,"You can not override it like this: ",JSON.stringify(v,null,2),"",`Instead, you need to use the '&.${M}' syntax:`,JSON.stringify({root:{[`&.${M}`]:b}},null,2),"","https://mui.com/r/state-classes-guide"].join(`
`))}v[g]={}}}};Object.keys(d.components).forEach(v=>{const p=d.components[v].styleOverrides;p&&v.startsWith("Mui")&&m(p,v)})}return d.unstable_sxConfig={...Ao,...c==null?void 0:c.unstable_sxConfig},d.unstable_sx=function(m){return ys({sx:m,theme:this})},d}function DC(n){let e;return n<1?e=5.11916*n**2:e=4.5*Math.log(n+1)+2,Math.round(e*10)/1e3}const NC=[...Array(25)].map((n,e)=>{if(e===0)return"none";const t=DC(e);return`linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`});function c_(n){return{inputPlaceholder:n==="dark"?.5:.42,inputUnderline:n==="dark"?.7:.42,switchTrackDisabled:n==="dark"?.2:.12,switchTrack:n==="dark"?.3:.38}}function u_(n){return n==="dark"?NC:[]}function OC(n){const{palette:e={mode:"light"},opacity:t,overlays:i,...r}=n,s=$h(e);return{palette:s,opacity:{...c_(s.mode),...t},overlays:i||u_(s.mode),...r}}function UC(n){var e;return!!n[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!n[0].match(/sxConfig$/)||n[0]==="palette"&&!!((e=n[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const FC=n=>[...[...Array(25)].map((e,t)=>`--${n?`${n}-`:""}overlays-${t}`),`--${n?`${n}-`:""}palette-AppBar-darkBg`,`--${n?`${n}-`:""}palette-AppBar-darkColor`],BC=n=>(e,t)=>{const i=n.rootSelector||":root",r=n.colorSchemeSelector;let s=r;if(r==="class"&&(s=".%s"),r==="data"&&(s="[data-%s]"),r!=null&&r.startsWith("data-")&&!r.includes("%s")&&(s=`[${r}="%s"]`),n.defaultColorScheme===e){if(e==="dark"){const o={};return FC(n.cssVarPrefix).forEach(a=>{o[a]=t[a],delete t[a]}),s==="media"?{[i]:t,"@media (prefers-color-scheme: dark)":{[i]:o}}:s?{[s.replace("%s",e)]:o,[`${i}, ${s.replace("%s",e)}`]:t}:{[i]:{...t,...o}}}if(s&&s!=="media")return`${i}, ${s.replace("%s",String(e))}`}else if(e){if(s==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[i]:t}};if(s)return s.replace("%s",String(e))}return i};function kC(n){return ci(n)||typeof n>"u"||typeof n=="string"||typeof n=="boolean"||typeof n=="number"||Array.isArray(n)}function VC(n={}){const e={...n};function t(i){const r=Object.entries(i);for(let s=0;s<r.length;s++){const[o,a]=r[s];!kC(a)||o.startsWith("unstable_")?delete i[o]:ci(a)&&(i[o]={...a},t(i[o]))}}return t(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function zC(n,e){e.forEach(t=>{n[t]||(n[t]={})})}function oe(n,e,t){!n[e]&&t&&(n[e]=t)}function Lo(n){return!n||!n.startsWith("hsl")?n:jg(n)}function Ci(n,e){`${e}Channel`in n||(n[`${e}Channel`]=Co(Lo(n[e]),`MUI: Can't create \`palette.${e}Channel\` because \`palette.${e}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${e}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function HC(n){return typeof n=="number"?`${n}px`:typeof n=="string"||typeof n=="function"||Array.isArray(n)?n:"8px"}const ui=n=>{try{return n()}catch{}},GC=(n="mui")=>q1(n);function Yh(n,e,t,i){if(!e)return;e=e===!0?{}:e;const r=i==="dark"?"dark":"light";if(!t){n[i]=OC({...e,palette:{mode:r,...e==null?void 0:e.palette}});return}const{palette:s,...o}=jh({...t,palette:{mode:r,...e==null?void 0:e.palette}});return n[i]={...e,palette:s,opacity:{...c_(r),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||u_(r)},o}function WC(n={},...e){const{colorSchemes:t={light:!0},defaultColorScheme:i,disableCssColorScheme:r=!1,cssVarPrefix:s="mui",shouldSkipGeneratingVar:o=UC,colorSchemeSelector:a=t.light&&t.dark?"media":void 0,rootSelector:l=":root",...c}=n,h=Object.keys(t)[0],u=i||(t.light&&h!=="light"?"light":h),d=GC(s),{[u]:f,light:m,dark:v,...p}=t,g={...p};let b=f;if((u==="dark"&&!("dark"in t)||u==="light"&&!("light"in t))&&(b=!0),!b)throw new Error(process.env.NODE_ENV!=="production"?`MUI: The \`colorSchemes.${u}\` option is either missing or invalid.`:ji(21,u));const M=Yh(g,b,c,u);m&&!g.light&&Yh(g,m,void 0,"light"),v&&!g.dark&&Yh(g,v,void 0,"dark");let S={defaultColorScheme:u,...M,cssVarPrefix:s,colorSchemeSelector:a,rootSelector:l,getCssVar:d,colorSchemes:g,font:{...xC(M.typography),...M.font},spacing:HC(c.spacing)};Object.keys(S.colorSchemes).forEach(K=>{const _=S.colorSchemes[K].palette,E=z=>{const w=z.split("-"),A=w[1],D=w[2];return d(z,_[A][D])};if(_.mode==="light"&&(oe(_.common,"background","#fff"),oe(_.common,"onBackground","#000")),_.mode==="dark"&&(oe(_.common,"background","#000"),oe(_.common,"onBackground","#fff")),zC(_,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),_.mode==="light"){oe(_.Alert,"errorColor",Tt(_.error.light,.6)),oe(_.Alert,"infoColor",Tt(_.info.light,.6)),oe(_.Alert,"successColor",Tt(_.success.light,.6)),oe(_.Alert,"warningColor",Tt(_.warning.light,.6)),oe(_.Alert,"errorFilledBg",E("palette-error-main")),oe(_.Alert,"infoFilledBg",E("palette-info-main")),oe(_.Alert,"successFilledBg",E("palette-success-main")),oe(_.Alert,"warningFilledBg",E("palette-warning-main")),oe(_.Alert,"errorFilledColor",ui(()=>_.getContrastText(_.error.main))),oe(_.Alert,"infoFilledColor",ui(()=>_.getContrastText(_.info.main))),oe(_.Alert,"successFilledColor",ui(()=>_.getContrastText(_.success.main))),oe(_.Alert,"warningFilledColor",ui(()=>_.getContrastText(_.warning.main))),oe(_.Alert,"errorStandardBg",bt(_.error.light,.9)),oe(_.Alert,"infoStandardBg",bt(_.info.light,.9)),oe(_.Alert,"successStandardBg",bt(_.success.light,.9)),oe(_.Alert,"warningStandardBg",bt(_.warning.light,.9)),oe(_.Alert,"errorIconColor",E("palette-error-main")),oe(_.Alert,"infoIconColor",E("palette-info-main")),oe(_.Alert,"successIconColor",E("palette-success-main")),oe(_.Alert,"warningIconColor",E("palette-warning-main")),oe(_.AppBar,"defaultBg",E("palette-grey-100")),oe(_.Avatar,"defaultBg",E("palette-grey-400")),oe(_.Button,"inheritContainedBg",E("palette-grey-300")),oe(_.Button,"inheritContainedHoverBg",E("palette-grey-A100")),oe(_.Chip,"defaultBorder",E("palette-grey-400")),oe(_.Chip,"defaultAvatarColor",E("palette-grey-700")),oe(_.Chip,"defaultIconColor",E("palette-grey-700")),oe(_.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),oe(_.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),oe(_.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),oe(_.LinearProgress,"primaryBg",bt(_.primary.main,.62)),oe(_.LinearProgress,"secondaryBg",bt(_.secondary.main,.62)),oe(_.LinearProgress,"errorBg",bt(_.error.main,.62)),oe(_.LinearProgress,"infoBg",bt(_.info.main,.62)),oe(_.LinearProgress,"successBg",bt(_.success.main,.62)),oe(_.LinearProgress,"warningBg",bt(_.warning.main,.62)),oe(_.Skeleton,"bg",`rgba(${E("palette-text-primaryChannel")} / 0.11)`),oe(_.Slider,"primaryTrack",bt(_.primary.main,.62)),oe(_.Slider,"secondaryTrack",bt(_.secondary.main,.62)),oe(_.Slider,"errorTrack",bt(_.error.main,.62)),oe(_.Slider,"infoTrack",bt(_.info.main,.62)),oe(_.Slider,"successTrack",bt(_.success.main,.62)),oe(_.Slider,"warningTrack",bt(_.warning.main,.62));const z=Tl(_.background.default,.8);oe(_.SnackbarContent,"bg",z),oe(_.SnackbarContent,"color",ui(()=>_.getContrastText(z))),oe(_.SpeedDialAction,"fabHoverBg",Tl(_.background.paper,.15)),oe(_.StepConnector,"border",E("palette-grey-400")),oe(_.StepContent,"border",E("palette-grey-400")),oe(_.Switch,"defaultColor",E("palette-common-white")),oe(_.Switch,"defaultDisabledColor",E("palette-grey-100")),oe(_.Switch,"primaryDisabledColor",bt(_.primary.main,.62)),oe(_.Switch,"secondaryDisabledColor",bt(_.secondary.main,.62)),oe(_.Switch,"errorDisabledColor",bt(_.error.main,.62)),oe(_.Switch,"infoDisabledColor",bt(_.info.main,.62)),oe(_.Switch,"successDisabledColor",bt(_.success.main,.62)),oe(_.Switch,"warningDisabledColor",bt(_.warning.main,.62)),oe(_.TableCell,"border",bt(El(_.divider,1),.88)),oe(_.Tooltip,"bg",El(_.grey[700],.92))}if(_.mode==="dark"){oe(_.Alert,"errorColor",bt(_.error.light,.6)),oe(_.Alert,"infoColor",bt(_.info.light,.6)),oe(_.Alert,"successColor",bt(_.success.light,.6)),oe(_.Alert,"warningColor",bt(_.warning.light,.6)),oe(_.Alert,"errorFilledBg",E("palette-error-dark")),oe(_.Alert,"infoFilledBg",E("palette-info-dark")),oe(_.Alert,"successFilledBg",E("palette-success-dark")),oe(_.Alert,"warningFilledBg",E("palette-warning-dark")),oe(_.Alert,"errorFilledColor",ui(()=>_.getContrastText(_.error.dark))),oe(_.Alert,"infoFilledColor",ui(()=>_.getContrastText(_.info.dark))),oe(_.Alert,"successFilledColor",ui(()=>_.getContrastText(_.success.dark))),oe(_.Alert,"warningFilledColor",ui(()=>_.getContrastText(_.warning.dark))),oe(_.Alert,"errorStandardBg",Tt(_.error.light,.9)),oe(_.Alert,"infoStandardBg",Tt(_.info.light,.9)),oe(_.Alert,"successStandardBg",Tt(_.success.light,.9)),oe(_.Alert,"warningStandardBg",Tt(_.warning.light,.9)),oe(_.Alert,"errorIconColor",E("palette-error-main")),oe(_.Alert,"infoIconColor",E("palette-info-main")),oe(_.Alert,"successIconColor",E("palette-success-main")),oe(_.Alert,"warningIconColor",E("palette-warning-main")),oe(_.AppBar,"defaultBg",E("palette-grey-900")),oe(_.AppBar,"darkBg",E("palette-background-paper")),oe(_.AppBar,"darkColor",E("palette-text-primary")),oe(_.Avatar,"defaultBg",E("palette-grey-600")),oe(_.Button,"inheritContainedBg",E("palette-grey-800")),oe(_.Button,"inheritContainedHoverBg",E("palette-grey-700")),oe(_.Chip,"defaultBorder",E("palette-grey-700")),oe(_.Chip,"defaultAvatarColor",E("palette-grey-300")),oe(_.Chip,"defaultIconColor",E("palette-grey-300")),oe(_.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),oe(_.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),oe(_.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),oe(_.LinearProgress,"primaryBg",Tt(_.primary.main,.5)),oe(_.LinearProgress,"secondaryBg",Tt(_.secondary.main,.5)),oe(_.LinearProgress,"errorBg",Tt(_.error.main,.5)),oe(_.LinearProgress,"infoBg",Tt(_.info.main,.5)),oe(_.LinearProgress,"successBg",Tt(_.success.main,.5)),oe(_.LinearProgress,"warningBg",Tt(_.warning.main,.5)),oe(_.Skeleton,"bg",`rgba(${E("palette-text-primaryChannel")} / 0.13)`),oe(_.Slider,"primaryTrack",Tt(_.primary.main,.5)),oe(_.Slider,"secondaryTrack",Tt(_.secondary.main,.5)),oe(_.Slider,"errorTrack",Tt(_.error.main,.5)),oe(_.Slider,"infoTrack",Tt(_.info.main,.5)),oe(_.Slider,"successTrack",Tt(_.success.main,.5)),oe(_.Slider,"warningTrack",Tt(_.warning.main,.5));const z=Tl(_.background.default,.98);oe(_.SnackbarContent,"bg",z),oe(_.SnackbarContent,"color",ui(()=>_.getContrastText(z))),oe(_.SpeedDialAction,"fabHoverBg",Tl(_.background.paper,.15)),oe(_.StepConnector,"border",E("palette-grey-600")),oe(_.StepContent,"border",E("palette-grey-600")),oe(_.Switch,"defaultColor",E("palette-grey-300")),oe(_.Switch,"defaultDisabledColor",E("palette-grey-600")),oe(_.Switch,"primaryDisabledColor",Tt(_.primary.main,.55)),oe(_.Switch,"secondaryDisabledColor",Tt(_.secondary.main,.55)),oe(_.Switch,"errorDisabledColor",Tt(_.error.main,.55)),oe(_.Switch,"infoDisabledColor",Tt(_.info.main,.55)),oe(_.Switch,"successDisabledColor",Tt(_.success.main,.55)),oe(_.Switch,"warningDisabledColor",Tt(_.warning.main,.55)),oe(_.TableCell,"border",Tt(El(_.divider,1),.68)),oe(_.Tooltip,"bg",El(_.grey[700],.92))}Ci(_.background,"default"),Ci(_.background,"paper"),Ci(_.common,"background"),Ci(_.common,"onBackground"),Ci(_,"divider"),Object.keys(_).forEach(z=>{const w=_[z];w&&typeof w=="object"&&(w.main&&oe(_[z],"mainChannel",Co(Lo(w.main))),w.light&&oe(_[z],"lightChannel",Co(Lo(w.light))),w.dark&&oe(_[z],"darkChannel",Co(Lo(w.dark))),w.contrastText&&oe(_[z],"contrastTextChannel",Co(Lo(w.contrastText))),z==="text"&&(Ci(_[z],"primary"),Ci(_[z],"secondary")),z==="action"&&(w.active&&Ci(_[z],"active"),w.selected&&Ci(_[z],"selected")))})}),S=e.reduce((K,_)=>fn(K,_),S);const T={prefix:s,disableCssColorScheme:r,shouldSkipGeneratingVar:o,getSelector:BC(S)},{vars:P,generateThemeVars:C,generateStyleSheets:B}=Q1(S,T);return S.vars=P,Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([K,_])=>{S[K]=_}),S.generateThemeVars=C,S.generateStyleSheets=B,S.generateSpacing=function(){return Og(c.spacing,pl(this))},S.getColorSchemeSelector=J1(a),S.spacing=S.generateSpacing(),S.shouldSkipGeneratingVar=o,S.unstable_sxConfig={...Ao,...c==null?void 0:c.unstable_sxConfig},S.unstable_sx=function(_){return ys({sx:_,theme:this})},S.toRuntimeSource=VC,S}function h_(n,e,t){n.colorSchemes&&t&&(n.colorSchemes[e]={...t!==!0&&t,palette:$h({...t===!0?{}:t.palette,mode:e})})}function XC(n={},...e){const{palette:t,cssVariables:i=!1,colorSchemes:r=t?void 0:{light:!0},defaultColorScheme:s=t==null?void 0:t.mode,...o}=n,a=s||"light",l=r==null?void 0:r[a],c={...r,...t?{[a]:{...typeof l!="boolean"&&l,palette:t}}:void 0};if(i===!1){if(!("colorSchemes"in n))return jh(n,...e);let h=t;"palette"in n||c[a]&&(c[a]!==!0?h=c[a].palette:a==="dark"&&(h={mode:"dark"}));const u=jh({...n,palette:h},...e);return u.defaultColorScheme=a,u.colorSchemes=c,u.palette.mode==="light"&&(u.colorSchemes.light={...c.light!==!0&&c.light,palette:u.palette},h_(u,"dark",c.dark)),u.palette.mode==="dark"&&(u.colorSchemes.dark={...c.dark!==!0&&c.dark,palette:u.palette},h_(u,"light",c.light)),u}return!t&&!("light"in c)&&a==="light"&&(c.light=!0),WC({...o,colorSchemes:c,defaultColorScheme:a,...typeof i!="boolean"&&i},...e)}const $C=XC();function jC(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}const d_=n=>jC(n)&&n!=="classes",As=Xg({themeId:dC,defaultTheme:$C,rootShouldForwardProp:d_}),YC=Y1;process.env.NODE_ENV!=="production"&&(Z.node,Z.object.isRequired);function qh(n){return j1(n)}function qC(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.includes(i))continue;t[i]=n[i]}return t}function Kh(n,e){return Kh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},Kh(n,e)}function KC(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,Kh(n,e)}const f_=Ze.createContext(null);function ZC(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Zh(n,e){var t=function(s){return e&&Ze.isValidElement(s)?e(s):s},i=Object.create(null);return n&&Ze.Children.map(n,function(r){return r}).forEach(function(r){i[r.key]=t(r)}),i}function QC(n,e){n=n||{},e=e||{};function t(h){return h in e?e[h]:n[h]}var i=Object.create(null),r=[];for(var s in n)s in e?r.length&&(i[s]=r,r=[]):r.push(s);var o,a={};for(var l in e){if(i[l])for(o=0;o<i[l].length;o++){var c=i[l][o];a[i[l][o]]=t(c)}a[l]=t(l)}for(o=0;o<r.length;o++)a[r[o]]=t(r[o]);return a}function Er(n,e,t){return t[e]!=null?t[e]:n.props[e]}function JC(n,e){return Zh(n.children,function(t){return Ze.cloneElement(t,{onExited:e.bind(null,t),in:!0,appear:Er(t,"appear",n),enter:Er(t,"enter",n),exit:Er(t,"exit",n)})})}function eP(n,e,t){var i=Zh(n.children),r=QC(e,i);return Object.keys(r).forEach(function(s){var o=r[s];if(Ze.isValidElement(o)){var a=s in e,l=s in i,c=e[s],h=Ze.isValidElement(c)&&!c.props.in;l&&(!a||h)?r[s]=Ze.cloneElement(o,{onExited:t.bind(null,o),in:!0,exit:Er(o,"exit",n),enter:Er(o,"enter",n)}):!l&&a&&!h?r[s]=Ze.cloneElement(o,{in:!1}):l&&a&&Ze.isValidElement(c)&&(r[s]=Ze.cloneElement(o,{onExited:t.bind(null,o),in:c.props.in,exit:Er(o,"exit",n),enter:Er(o,"enter",n)}))}}),r}var tP=Object.values||function(n){return Object.keys(n).map(function(e){return n[e]})},nP={component:"div",childFactory:function(e){return e}},Qh=function(n){KC(e,n);function e(i,r){var s;s=n.call(this,i,r)||this;var o=s.handleExited.bind(ZC(s));return s.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},s}var t=e.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(r,s){var o=s.children,a=s.handleExited,l=s.firstRender;return{children:l?JC(r,a):eP(r,o,a),firstRender:!1}},t.handleExited=function(r,s){var o=Zh(this.props.children);r.key in o||(r.props.onExited&&r.props.onExited(s),this.mounted&&this.setState(function(a){var l=Ja({},a.children);return delete l[r.key],{children:l}}))},t.render=function(){var r=this.props,s=r.component,o=r.childFactory,a=qC(r,["component","childFactory"]),l=this.state.contextValue,c=tP(this.state.children).map(o);return delete a.appear,delete a.enter,delete a.exit,s===null?Ze.createElement(f_.Provider,{value:l},c):Ze.createElement(f_.Provider,{value:l},Ze.createElement(s,a,c))},e}(Ze.Component);Qh.propTypes=process.env.NODE_ENV!=="production"?{component:Z.any,children:Z.node,appear:Z.bool,enter:Z.bool,exit:Z.bool,childFactory:Z.func}:{},Qh.defaultProps=nP;class Al{constructor(){jt(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new Al}static use(){const e=Zg(Al.create).current,[t,i]=Ve.useState(!1);return e.shouldMount=t,e.setShouldMount=i,Ve.useEffect(e.mountEffect,[t]),e}mount(){return this.mounted||(this.mounted=rP(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.start(...e)})}stop(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.stop(...e)})}pulsate(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.pulsate(...e)})}}function iP(){return Al.use()}function rP(){let n,e;const t=new Promise((i,r)=>{n=i,e=r});return t.resolve=n,t.reject=e,t}function p_(n){const{className:e,classes:t,pulsate:i=!1,rippleX:r,rippleY:s,rippleSize:o,in:a,onExited:l,timeout:c}=n,[h,u]=Ve.useState(!1),d=bn(e,t.ripple,t.rippleVisible,i&&t.ripplePulsate),f={width:o,height:o,top:-(o/2)+s,left:-(o/2)+r},m=bn(t.child,h&&t.childLeaving,i&&t.childPulsate);return!a&&!h&&u(!0),Ve.useEffect(()=>{if(!a&&l!=null){const v=setTimeout(l,c);return()=>{clearTimeout(v)}}},[l,a,c]),xt.jsx("span",{className:d,style:f,children:xt.jsx("span",{className:m})})}process.env.NODE_ENV!=="production"&&(p_.propTypes={classes:Z.object.isRequired,className:Z.string,in:Z.bool,onExited:Z.func,pulsate:Z.bool,rippleSize:Z.number,rippleX:Z.number,rippleY:Z.number,timeout:Z.number.isRequired});const Un=Nh("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Jh=550,sP=80,oP=Sh`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,aP=Sh`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,lP=Sh`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,cP=As("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),uP=As(p_,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${Un.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${oP};
    animation-duration: ${Jh}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  &.${Un.ripplePulsate} {
    animation-duration: ${({theme:n})=>n.transitions.duration.shorter}ms;
  }

  & .${Un.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Un.childLeaving} {
    opacity: 0;
    animation-name: ${aP};
    animation-duration: ${Jh}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  & .${Un.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${lP};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,m_=Ve.forwardRef(function(e,t){const i=qh({props:e,name:"MuiTouchRipple"}),{center:r=!1,classes:s={},className:o,...a}=i,[l,c]=Ve.useState([]),h=Ve.useRef(0),u=Ve.useRef(null);Ve.useEffect(()=>{u.current&&(u.current(),u.current=null)},[l]);const d=Ve.useRef(!1),f=W1(),m=Ve.useRef(null),v=Ve.useRef(null),p=Ve.useCallback(S=>{const{pulsate:T,rippleX:P,rippleY:C,rippleSize:B,cb:K}=S;c(_=>[..._,xt.jsx(uP,{classes:{ripple:bn(s.ripple,Un.ripple),rippleVisible:bn(s.rippleVisible,Un.rippleVisible),ripplePulsate:bn(s.ripplePulsate,Un.ripplePulsate),child:bn(s.child,Un.child),childLeaving:bn(s.childLeaving,Un.childLeaving),childPulsate:bn(s.childPulsate,Un.childPulsate)},timeout:Jh,pulsate:T,rippleX:P,rippleY:C,rippleSize:B},h.current)]),h.current+=1,u.current=K},[s]),g=Ve.useCallback((S={},T={},P=()=>{})=>{const{pulsate:C=!1,center:B=r||T.pulsate,fakeElement:K=!1}=T;if((S==null?void 0:S.type)==="mousedown"&&d.current){d.current=!1;return}(S==null?void 0:S.type)==="touchstart"&&(d.current=!0);const _=K?null:v.current,E=_?_.getBoundingClientRect():{width:0,height:0,left:0,top:0};let z,w,A;if(B||S===void 0||S.clientX===0&&S.clientY===0||!S.clientX&&!S.touches)z=Math.round(E.width/2),w=Math.round(E.height/2);else{const{clientX:D,clientY:R}=S.touches&&S.touches.length>0?S.touches[0]:S;z=Math.round(D-E.left),w=Math.round(R-E.top)}if(B)A=Math.sqrt((2*E.width**2+E.height**2)/3),A%2===0&&(A+=1);else{const D=Math.max(Math.abs((_?_.clientWidth:0)-z),z)*2+2,R=Math.max(Math.abs((_?_.clientHeight:0)-w),w)*2+2;A=Math.sqrt(D**2+R**2)}S!=null&&S.touches?m.current===null&&(m.current=()=>{p({pulsate:C,rippleX:z,rippleY:w,rippleSize:A,cb:P})},f.start(sP,()=>{m.current&&(m.current(),m.current=null)})):p({pulsate:C,rippleX:z,rippleY:w,rippleSize:A,cb:P})},[r,p,f]),b=Ve.useCallback(()=>{g({},{pulsate:!0})},[g]),M=Ve.useCallback((S,T)=>{if(f.clear(),(S==null?void 0:S.type)==="touchend"&&m.current){m.current(),m.current=null,f.start(0,()=>{M(S,T)});return}m.current=null,c(P=>P.length>0?P.slice(1):P),u.current=T},[f]);return Ve.useImperativeHandle(t,()=>({pulsate:b,start:g,stop:M}),[b,g,M]),xt.jsx(cP,{className:bn(Un.root,s.root,o),ref:v,...a,children:xt.jsx(Qh,{component:null,exit:!0,children:l})})});process.env.NODE_ENV!=="production"&&(m_.propTypes={center:Z.bool,classes:Z.object,className:Z.string});function hP(n){return wo("MuiButtonBase",n)}const dP=Nh("MuiButtonBase",["root","disabled","focusVisible"]),fP=n=>{const{disabled:e,focusVisible:t,focusVisibleClassName:i,classes:r}=n,o=Hh({root:["root",e&&"disabled",t&&"focusVisible"]},hP,r);return t&&i&&(o.root+=` ${i}`),o},pP=As("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${dP.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),g_=Ve.forwardRef(function(e,t){const i=qh({props:e,name:"MuiButtonBase"}),{action:r,centerRipple:s=!1,children:o,className:a,component:l="button",disabled:c=!1,disableRipple:h=!1,disableTouchRipple:u=!1,focusRipple:d=!1,focusVisibleClassName:f,LinkComponent:m="a",onBlur:v,onClick:p,onContextMenu:g,onDragLeave:b,onFocus:M,onFocusVisible:S,onKeyDown:T,onKeyUp:P,onMouseDown:C,onMouseLeave:B,onMouseUp:K,onTouchEnd:_,onTouchMove:E,onTouchStart:z,tabIndex:w=0,TouchRippleProps:A,touchRippleRef:D,type:R,...U}=i,F=Ve.useRef(null),Q=iP(),k=qg(Q.ref,D),[G,te]=Ve.useState(!1);c&&G&&te(!1),Ve.useImperativeHandle(r,()=>({focusVisible:()=>{te(!0),F.current.focus()}}),[]);const ae=Q.shouldMount&&!h&&!c;Ve.useEffect(()=>{G&&d&&!h&&Q.pulsate()},[h,d,G,Q]);function W(V,ie,ne=u){return bl(ge=>(ie&&ie(ge),ne||Q[V](ge),!0))}const j=W("start",C),le=W("stop",g),re=W("stop",b),de=W("stop",K),pe=W("stop",V=>{G&&V.preventDefault(),B&&B(V)}),fe=W("start",z),xe=W("stop",_),$=W("stop",E),O=W("stop",V=>{Qg(V.target)||te(!1),v&&v(V)},!1),_e=bl(V=>{F.current||(F.current=V.currentTarget),Qg(V.target)&&(te(!0),S&&S(V)),M&&M(V)}),Ue=()=>{const V=F.current;return l&&l!=="button"&&!(V.tagName==="A"&&V.href)},We=bl(V=>{d&&!V.repeat&&G&&V.key===" "&&Q.stop(V,()=>{Q.start(V)}),V.target===V.currentTarget&&Ue()&&V.key===" "&&V.preventDefault(),T&&T(V),V.target===V.currentTarget&&Ue()&&V.key==="Enter"&&!c&&(V.preventDefault(),p&&p(V))}),Le=bl(V=>{d&&V.key===" "&&G&&!V.defaultPrevented&&Q.stop(V,()=>{Q.pulsate(V)}),P&&P(V),p&&V.target===V.currentTarget&&Ue()&&V.key===" "&&!V.defaultPrevented&&p(V)});let et=l;et==="button"&&(U.href||U.to)&&(et=m);const De={};et==="button"?(De.type=R===void 0?"button":R,De.disabled=c):(!U.href&&!U.to&&(De.role="button"),c&&(De["aria-disabled"]=c));const L=qg(t,F),y={...i,centerRipple:s,component:l,disabled:c,disableRipple:h,disableTouchRipple:u,focusRipple:d,tabIndex:w,focusVisible:G},H=fP(y);return xt.jsxs(pP,{as:et,className:bn(H.root,a),ownerState:y,onBlur:O,onClick:p,onContextMenu:le,onFocus:_e,onKeyDown:We,onKeyUp:Le,onMouseDown:j,onMouseLeave:pe,onMouseUp:de,onDragLeave:re,onTouchEnd:xe,onTouchMove:$,onTouchStart:fe,ref:L,tabIndex:c?-1:w,type:R,...De,...U,children:[o,ae?xt.jsx(m_,{ref:k,center:s,...A}):null]})});process.env.NODE_ENV!=="production"&&(g_.propTypes={action:V1,centerRipple:Z.bool,children:Z.node,classes:Z.object,className:Z.string,component:k1,disabled:Z.bool,disableRipple:Z.bool,disableTouchRipple:Z.bool,focusRipple:Z.bool,focusVisibleClassName:Z.string,href:Z.any,LinkComponent:Z.elementType,onBlur:Z.func,onClick:Z.func,onContextMenu:Z.func,onDragLeave:Z.func,onFocus:Z.func,onFocusVisible:Z.func,onKeyDown:Z.func,onKeyUp:Z.func,onMouseDown:Z.func,onMouseLeave:Z.func,onMouseUp:Z.func,onTouchEnd:Z.func,onTouchMove:Z.func,onTouchStart:Z.func,sx:Z.oneOfType([Z.arrayOf(Z.oneOfType([Z.func,Z.object,Z.bool])),Z.func,Z.object]),tabIndex:Z.number,TouchRippleProps:Z.object,touchRippleRef:Z.oneOfType([Z.func,Z.shape({current:Z.shape({pulsate:Z.func.isRequired,start:Z.func.isRequired,stop:Z.func.isRequired})})]),type:Z.oneOfType([Z.oneOf(["button","reset","submit"]),Z.string])});function mP(n){return typeof n.main=="string"}function gP(n,e=[]){if(!mP(n))return!1;for(const t of e)if(!n.hasOwnProperty(t)||typeof n[t]!="string")return!1;return!0}function _P(n=[]){return([,e])=>e&&gP(e,n)}function vP(n){return wo("MuiButton",n)}const ws=Nh("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),__=Ve.createContext({});process.env.NODE_ENV!=="production"&&(__.displayName="ButtonGroupContext");const v_=Ve.createContext(void 0);process.env.NODE_ENV!=="production"&&(v_.displayName="ButtonGroupButtonContext");const yP=n=>{const{color:e,disableElevation:t,fullWidth:i,size:r,variant:s,classes:o}=n,a={root:["root",s,`${s}${gn(e)}`,`size${gn(r)}`,`${s}Size${gn(r)}`,`color${gn(e)}`,t&&"disableElevation",i&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${gn(r)}`],endIcon:["icon","endIcon",`iconSize${gn(r)}`]},l=Hh(a,vP,o);return{...o,...l}},y_=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],xP=As(g_,{shouldForwardProp:n=>d_(n)||n==="classes",name:"MuiButton",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[t.variant],e[`${t.variant}${gn(t.color)}`],e[`size${gn(t.size)}`],e[`${t.variant}Size${gn(t.size)}`],t.color==="inherit"&&e.colorInherit,t.disableElevation&&e.disableElevation,t.fullWidth&&e.fullWidth]}})(YC(({theme:n})=>{const e=n.palette.mode==="light"?n.palette.grey[300]:n.palette.grey[800],t=n.palette.mode==="light"?n.palette.grey.A100:n.palette.grey[700];return{...n.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${ws.disabled}`]:{color:(n.vars||n).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(n.vars||n).shadows[2],"&:hover":{boxShadow:(n.vars||n).shadows[4],"@media (hover: none)":{boxShadow:(n.vars||n).shadows[2]}},"&:active":{boxShadow:(n.vars||n).shadows[8]},[`&.${ws.focusVisible}`]:{boxShadow:(n.vars||n).shadows[6]},[`&.${ws.disabled}`]:{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${ws.disabled}`]:{border:`1px solid ${(n.vars||n).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(n.palette).filter(_P()).map(([i])=>({props:{color:i},style:{"--variant-textColor":(n.vars||n).palette[i].main,"--variant-outlinedColor":(n.vars||n).palette[i].main,"--variant-outlinedBorder":n.vars?`rgba(${n.vars.palette[i].mainChannel} / 0.5)`:xs(n.palette[i].main,.5),"--variant-containedColor":(n.vars||n).palette[i].contrastText,"--variant-containedBg":(n.vars||n).palette[i].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(n.vars||n).palette[i].dark,"--variant-textBg":n.vars?`rgba(${n.vars.palette[i].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:xs(n.palette[i].main,n.palette.action.hoverOpacity),"--variant-outlinedBorder":(n.vars||n).palette[i].main,"--variant-outlinedBg":n.vars?`rgba(${n.vars.palette[i].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:xs(n.palette[i].main,n.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":n.vars?n.vars.palette.Button.inheritContainedBg:e,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":n.vars?n.vars.palette.Button.inheritContainedHoverBg:t,"--variant-textBg":n.vars?`rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`:xs(n.palette.text.primary,n.palette.action.hoverOpacity),"--variant-outlinedBg":n.vars?`rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`:xs(n.palette.text.primary,n.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:n.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:n.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:n.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${ws.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${ws.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),MP=As("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.startIcon,e[`iconSize${gn(t.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...y_]}),SP=As("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.endIcon,e[`iconSize${gn(t.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...y_]}),x_=Ve.forwardRef(function(e,t){const i=Ve.useContext(__),r=Ve.useContext(v_),s=Ro(i,e),o=qh({props:s,name:"MuiButton"}),{children:a,color:l="primary",component:c="button",className:h,disabled:u=!1,disableElevation:d=!1,disableFocusRipple:f=!1,endIcon:m,focusVisibleClassName:v,fullWidth:p=!1,size:g="medium",startIcon:b,type:M,variant:S="text",...T}=o,P={...o,color:l,component:c,disabled:u,disableElevation:d,disableFocusRipple:f,fullWidth:p,size:g,type:M,variant:S},C=yP(P),B=b&&xt.jsx(MP,{className:C.startIcon,ownerState:P,children:b}),K=m&&xt.jsx(SP,{className:C.endIcon,ownerState:P,children:m}),_=r||"";return xt.jsxs(xP,{ownerState:P,className:bn(i.className,C.root,h,_),component:c,disabled:u,focusRipple:!f,focusVisibleClassName:bn(C.focusVisible,v),ref:t,type:M,...T,classes:C,children:[B,a,K]})});process.env.NODE_ENV!=="production"&&(x_.propTypes={children:Z.node,classes:Z.object,className:Z.string,color:Z.oneOfType([Z.oneOf(["inherit","primary","secondary","success","error","info","warning"]),Z.string]),component:Z.elementType,disabled:Z.bool,disableElevation:Z.bool,disableFocusRipple:Z.bool,disableRipple:Z.bool,endIcon:Z.node,focusVisibleClassName:Z.string,fullWidth:Z.bool,href:Z.string,size:Z.oneOfType([Z.oneOf(["small","medium","large"]),Z.string]),startIcon:Z.node,sx:Z.oneOfType([Z.arrayOf(Z.oneOfType([Z.func,Z.object,Z.bool])),Z.func,Z.object]),type:Z.oneOfType([Z.oneOf(["button","reset","submit"]),Z.string]),variant:Z.oneOfType([Z.oneOf(["contained","outlined","text"]),Z.string])});const EP=({controls:n,defaultValues:e={},onChange:t,analyserNode:i})=>{const[r,s]=Ze.useState({});Ze.useEffect(()=>{if(!i){console.log("No analyser node provided for MorphControls");return}const a={};Object.keys(n).forEach(c=>{a[c]=e[c]??0}),s(a);const l=Xh(i,c=>{const h={};for(const u of Object.keys(n)){const d=u.replace("eCTRLv","").toLocaleUpperCase(),f=c[d];st.isDefined(f)&&(h[u]=Math.max(0,f*.2))}s(u=>({...u,...h})),t(h)});return()=>{l.stop()}},[n,e,i]);const o=(a,l)=>{const c={...r,[a]:l};s(c),t(c)};return xt.jsxs("div",{style:{maxHeight:"80vh",overflow:"auto"},children:["CONTROLS",xt.jsx(x_,{onClick:()=>{const a={};Object.keys(n).forEach(l=>{a[l]=e[l]??0}),s(a),t(a)},children:"Reset"}),Object.entries(n).map(([a,{min:l=-2,max:c=2}])=>xt.jsx(uC,{name:a,value:r[a]??0,min:l,max:c,onChange:o},a))]})},TP=({name:n,value:e})=>{const t=Ze.useRef(null),[i,r]=Ze.useState(0),[s,o]=Ze.useState(1);return Ze.useEffect(()=>{st.isUndefined(e)||(e<i&&r(e),e>s&&o(e))},[e,i,s]),Ze.useEffect(()=>{const a=t.current;if(a){const l=a.getContext("2d",{willReadFrequently:!0});if(l){const c=l.getImageData(1,0,a.width-1,a.height);l.putImageData(c,0,0),l.clearRect(a.width-1,0,1,a.height);const h=s-i||1,u=(e-i)/h,d=a.height-u*a.height;l.lineWidth=5,l.beginPath(),l.moveTo(a.width-2,d),l.lineTo(a.width-1,d),l.strokeStyle="green",l.stroke()}}},[e,i,s]),xt.jsxs("div",{children:[xt.jsx("h4",{children:n}),xt.jsx("canvas",{ref:t,width:300,height:100}),xt.jsxs("p",{children:["Min: ",i.toFixed(2)," | Max: ",s.toFixed(2)," | Current:"," ",e.toFixed(2)]})]})},bP=({analyserNode:n})=>{const[e,t]=Ze.useState({});return Ze.useEffect(()=>{if(!n)return;const i=Xh(n,r=>{t(r)});return()=>{i.stop()}},[n]),xt.jsx("div",{style:{maxHeight:"80vh",overflow:"auto"},children:Object.entries(e).map(([i,r])=>xt.jsx(TP,{name:i,value:r},i))})},AP=Ze.memo(Ze.forwardRef(({path:n,showControls:e,showPhonemes:t,analyserNode:i,canvasStyle:r,canvasWidth:s,canvasHeight:o,gltfCameraOptions:a,vrmCameraOptions:l,animationPath:c,...h},u)=>{const d=Ze.useRef({humanoid:void 0}),[f,m]=Ze.useState(!1);Ze.useImperativeHandle(u,()=>({getHumanoid:()=>d.current.humanoid})),Ze.useEffect(()=>{if(console.log("Setting up audio analysis"),!f){console.log("refusing to start audio analysis before model is loaded");return}if(!i){console.log("No analyser node provided for MorphControls");return}if(!d.current.humanoid){console.log("No humanoid found");return}const p=Xh(i,g=>{if(!d.current.humanoid){console.log("No humanoid found");return}d.current.humanoid.updatePhonemeLevels({analyserNode:i,phonemeLevels:g})});return console.log("starting meyda analyzer"),()=>{p.stop()}},[i,d.current,e,f,n]);const v=n.endsWith(".vrm")?"vrm":"gltf";return xt.jsxs(Wh,{direction:"row",...h,children:[d.current.humanoid&&e&&xt.jsx(Wh,{children:d.current.humanoid.gltfModel&&v==="gltf"&&xt.jsx(EP,{analyserNode:i,controls:Object.fromEntries(d.current.humanoid.gltfModel.getMorphs().map(p=>[p,{min:-2,max:2}])),defaultValues:{},onChange:p=>{d.current.humanoid&&d.current.humanoid.gltfModel&&d.current.humanoid.gltfModel.morph(p)}})}),xt.jsx(st.Canvas,{style:r,width:s,height:o,painter:async p=>{const g=v==="gltf"?await dh.fromGltf({canvas:p,path:n,cameraOptions:a}):await dh.fromVrm({canvas:p,vrmUrl:n,cameraOptions:l,idleAnimationUrl:c});console.log("humanoid",g),console.log("expressions:",g.getExpressions()),d.current.humanoid=g,console.log("humanoid ref",d.current.humanoid);const b=st.Animates.create({ticker:M=>{g.updateTick({tick:M})}});return m(!0),()=>{console.log("disposing scene"),g.destroy(),b.destroy()}}},n),t&&xt.jsx(bP,{analyserNode:i})]})}));sn.Avatar3d=AP,sn.Humanoids=dh,Object.defineProperty(sn,Symbol.toStringTag,{value:"Module"})});
