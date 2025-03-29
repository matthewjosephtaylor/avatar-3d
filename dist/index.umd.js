(function(ln,Vt){typeof exports=="object"&&typeof module<"u"?Vt(exports,require("@mjt-engine/babs"),require("react")):typeof define=="function"&&define.amd?define(["exports","@mjt-engine/babs","react"],Vt):(ln=typeof globalThis<"u"?globalThis:ln||self,Vt(ln.Avatar3d={},ln.babs,ln.React))})(this,function(ln,Vt,$e){"use strict";var WL=Object.defineProperty;var $L=(ln,Vt,$e)=>Vt in ln?WL(ln,Vt,{enumerable:!0,configurable:!0,writable:!0,value:$e}):ln[Vt]=$e;var Rt=(ln,Vt,$e)=>$L(ln,typeof Vt!="symbol"?Vt+"":Vt,$e);function J0(n){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(n){for(const t in n)if(t!=="default"){const i=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:()=>n[t]})}}return e.default=n,Object.freeze(e)}const Ae=J0($e);var Yd=Symbol.for("immer-nothing"),Kd=Symbol.for("immer-draftable"),Mn=Symbol.for("immer-state"),Q0=process.env.NODE_ENV!=="production"?[function(n){return`The plugin for '${n}' has not been loaded into Immer. To enable the plugin, import and call \`enable${n}()\` when initializing your application.`},function(n){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${n}'`},"This object has been frozen and should not be mutated",function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(n){return`'current' expects a draft, got: ${n}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(n){return`'original' expects a draft, got: ${n}`}]:[];function vn(n,...e){if(process.env.NODE_ENV!=="production"){const t=Q0[n],i=typeof t=="function"?t.apply(null,e):t;throw new Error(`[Immer] ${i}`)}throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var Br=Object.getPrototypeOf;function kr(n){return!!n&&!!n[Mn]}function lr(n){var e;return n?Zd(n)||Array.isArray(n)||!!n[Kd]||!!((e=n.constructor)!=null&&e[Kd])||ea(n)||ta(n):!1}var ev=Object.prototype.constructor.toString();function Zd(n){if(!n||typeof n!="object")return!1;const e=Br(n);if(e===null)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===ev}function Jo(n,e){Qo(n)===0?Reflect.ownKeys(n).forEach(t=>{e(t,n[t],n)}):n.forEach((t,i)=>e(i,t,n))}function Qo(n){const e=n[Mn];return e?e.type_:Array.isArray(n)?1:ea(n)?2:ta(n)?3:0}function lc(n,e){return Qo(n)===2?n.has(e):Object.prototype.hasOwnProperty.call(n,e)}function Jd(n,e,t){const i=Qo(n);i===2?n.set(e,t):i===3?n.add(t):n[e]=t}function tv(n,e){return n===e?n!==0||1/n===1/e:n!==n&&e!==e}function ea(n){return n instanceof Map}function ta(n){return n instanceof Set}function cr(n){return n.copy_||n.base_}function cc(n,e){if(ea(n))return new Map(n);if(ta(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);const t=Zd(n);if(e===!0||e==="class_only"&&!t){const i=Object.getOwnPropertyDescriptors(n);delete i[Mn];let r=Reflect.ownKeys(i);for(let s=0;s<r.length;s++){const o=r[s],a=i[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(i[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:n[o]})}return Object.create(Br(n),i)}else{const i=Br(n);if(i!==null&&t)return{...n};const r=Object.create(i);return Object.assign(r,n)}}function uc(n,e=!1){return na(n)||kr(n)||!lr(n)||(Qo(n)>1&&(n.set=n.add=n.clear=n.delete=nv),Object.freeze(n),e&&Object.entries(n).forEach(([t,i])=>uc(i,!0))),n}function nv(){vn(2)}function na(n){return Object.isFrozen(n)}var iv={};function ur(n){const e=iv[n];return e||vn(0,n),e}var $s;function Qd(){return $s}function rv(n,e){return{drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ef(n,e){e&&(ur("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=e)}function hc(n){dc(n),n.drafts_.forEach(sv),n.drafts_=null}function dc(n){n===$s&&($s=n.parent_)}function tf(n){return $s=rv($s,n)}function sv(n){const e=n[Mn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function nf(n,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return n!==void 0&&n!==t?(t[Mn].modified_&&(hc(e),vn(4)),lr(n)&&(n=ia(e,n),e.parent_||ra(e,n)),e.patches_&&ur("Patches").generateReplacementPatches_(t[Mn].base_,n,e.patches_,e.inversePatches_)):n=ia(e,t,[]),hc(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),n!==Yd?n:void 0}function ia(n,e,t){if(na(e))return e;const i=e[Mn];if(!i)return Jo(e,(r,s)=>rf(n,i,e,r,s,t)),e;if(i.scope_!==n)return e;if(!i.modified_)return ra(n,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const r=i.copy_;let s=r,o=!1;i.type_===3&&(s=new Set(r),r.clear(),o=!0),Jo(s,(a,l)=>rf(n,i,r,a,l,t,o)),ra(n,r,!1),t&&n.patches_&&ur("Patches").generatePatches_(i,t,n.patches_,n.inversePatches_)}return i.copy_}function rf(n,e,t,i,r,s,o){if(process.env.NODE_ENV!=="production"&&r===t&&vn(5),kr(r)){const a=s&&e&&e.type_!==3&&!lc(e.assigned_,i)?s.concat(i):void 0,l=ia(n,r,a);if(Jd(t,i,l),kr(l))n.canAutoFreeze_=!1;else return}else o&&t.add(r);if(lr(r)&&!na(r)){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1)return;ia(n,r),(!e||!e.scope_.parent_)&&typeof i!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,i)&&ra(n,r)}}function ra(n,e,t=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&uc(e,t)}function ov(n,e){const t=Array.isArray(n),i={type_:t?1:0,scope_:e?e.scope_:Qd(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=i,s=fc;t&&(r=[i],s=Xs);const{revoke:o,proxy:a}=Proxy.revocable(r,s);return i.draft_=a,i.revoke_=o,a}var fc={get(n,e){if(e===Mn)return n;const t=cr(n);if(!lc(t,e))return av(n,t,e);const i=t[e];return n.finalized_||!lr(i)?i:i===pc(n.base_,e)?(gc(n),n.copy_[e]=_c(i,n)):i},has(n,e){return e in cr(n)},ownKeys(n){return Reflect.ownKeys(cr(n))},set(n,e,t){const i=sf(cr(n),e);if(i!=null&&i.set)return i.set.call(n.draft_,t),!0;if(!n.modified_){const r=pc(cr(n),e),s=r==null?void 0:r[Mn];if(s&&s.base_===t)return n.copy_[e]=t,n.assigned_[e]=!1,!0;if(tv(t,r)&&(t!==void 0||lc(n.base_,e)))return!0;gc(n),mc(n)}return n.copy_[e]===t&&(t!==void 0||e in n.copy_)||Number.isNaN(t)&&Number.isNaN(n.copy_[e])||(n.copy_[e]=t,n.assigned_[e]=!0),!0},deleteProperty(n,e){return pc(n.base_,e)!==void 0||e in n.base_?(n.assigned_[e]=!1,gc(n),mc(n)):delete n.assigned_[e],n.copy_&&delete n.copy_[e],!0},getOwnPropertyDescriptor(n,e){const t=cr(n),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&{writable:!0,configurable:n.type_!==1||e!=="length",enumerable:i.enumerable,value:t[e]}},defineProperty(){vn(11)},getPrototypeOf(n){return Br(n.base_)},setPrototypeOf(){vn(12)}},Xs={};Jo(fc,(n,e)=>{Xs[n]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Xs.deleteProperty=function(n,e){return process.env.NODE_ENV!=="production"&&isNaN(parseInt(e))&&vn(13),Xs.set.call(this,n,e,void 0)},Xs.set=function(n,e,t){return process.env.NODE_ENV!=="production"&&e!=="length"&&isNaN(parseInt(e))&&vn(14),fc.set.call(this,n[0],e,t,n[0])};function pc(n,e){const t=n[Mn];return(t?cr(t):n)[e]}function av(n,e,t){var r;const i=sf(e,t);return i?"value"in i?i.value:(r=i.get)==null?void 0:r.call(n.draft_):void 0}function sf(n,e){if(!(e in n))return;let t=Br(n);for(;t;){const i=Object.getOwnPropertyDescriptor(t,e);if(i)return i;t=Br(t)}}function mc(n){n.modified_||(n.modified_=!0,n.parent_&&mc(n.parent_))}function gc(n){n.copy_||(n.copy_=cc(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var lv=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,i)=>{if(typeof e=="function"&&typeof t!="function"){const s=t;t=e;const o=this;return function(l=s,...c){return o.produce(l,u=>t.call(this,u,...c))}}typeof t!="function"&&vn(6),i!==void 0&&typeof i!="function"&&vn(7);let r;if(lr(e)){const s=tf(this),o=_c(e,void 0);let a=!0;try{r=t(o),a=!1}finally{a?hc(s):dc(s)}return ef(s,i),nf(r,s)}else if(!e||typeof e!="object"){if(r=t(e),r===void 0&&(r=e),r===Yd&&(r=void 0),this.autoFreeze_&&uc(r,!0),i){const s=[],o=[];ur("Patches").generateReplacementPatches_(e,r,s,o),i(s,o)}return r}else vn(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let i,r;return[this.produce(e,t,(o,a)=>{i=o,r=a}),i,r]},typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof(n==null?void 0:n.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy)}createDraft(n){lr(n)||vn(8),kr(n)&&(n=cv(n));const e=tf(this),t=_c(n,void 0);return t[Mn].isManual_=!0,dc(e),t}finishDraft(n,e){const t=n&&n[Mn];(!t||!t.isManual_)&&vn(9);const{scope_:i}=t;return ef(i,e),nf(void 0,i)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}applyPatches(n,e){let t;for(t=e.length-1;t>=0;t--){const r=e[t];if(r.path.length===0&&r.op==="replace"){n=r.value;break}}t>-1&&(e=e.slice(t+1));const i=ur("Patches").applyPatches_;return kr(n)?i(n,e):this.produce(n,r=>i(r,e))}};function _c(n,e){const t=ea(n)?ur("MapSet").proxyMap_(n,e):ta(n)?ur("MapSet").proxySet_(n,e):ov(n,e);return(e?e.scope_:Qd()).drafts_.push(t),t}function cv(n){return kr(n)||vn(10,n),of(n)}function of(n){if(!lr(n)||na(n))return n;const e=n[Mn];let t;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=cc(n,e.scope_.immer_.useStrictShallowCopy_)}else t=cc(n,!0);return Jo(t,(i,r)=>{Jd(t,i,of(r))}),e&&(e.finalized_=!1),t}var Sn=new lv,uv=Sn.produce;Sn.produceWithPatches.bind(Sn),Sn.setAutoFreeze.bind(Sn),Sn.setUseStrictShallowCopy.bind(Sn),Sn.applyPatches.bind(Sn),Sn.createDraft.bind(Sn),Sn.finishDraft.bind(Sn);let Wn=0,js=.05,af=Math.random()*8+4,Vi=0,vc=Math.random()*.05,yc=Math.random()*.05;function hv(n,e){if(Wn+=e,Vi===0)Wn>=af&&(Vi=1,Wn=0);else if(Vi===1){const t=(Wn-vc)/js,i=(Wn-yc)/js,r=t>=1,s=i>=1;r&&s?(Vi=2,Wn=0,n.leftClosed(1),n.rightClosed(1)):(n.leftClosed(Math.min(t,1)),n.rightClosed(Math.min(i,1)))}else if(Vi===2)Wn>=.05&&(Vi=3,Wn=0);else if(Vi===3){const t=1-(Wn-vc)/js,i=1-(Wn-yc)/js,r=t<=0,s=i<=0;r&&s?(Vi=0,Wn=0,n.leftClosed(0),n.rightClosed(0),af=Math.random()*8+4,js=Math.random()*.05+.05,vc=Math.random()*.05,yc=Math.random()*.05):(n.leftClosed(Math.max(t,0)),n.rightClosed(Math.max(i,0)))}}const dv=n=>{n&&n.fix(e=>{if(e.material){if(e.name.toLocaleLowerCase().includes("hair.shape_primitive0")){console.log("hair",e);const t=e.material;t.metallic=0;const i=t.albedoTexture;i&&(i.hasAlpha=!1,i.level=1.5)}e.name.toLocaleLowerCase().includes("hair.shape_primitive1")&&(console.log("hair",e),e.visibility=0)}return e})};var fv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xc(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var lf={exports:{}},cf={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},uf={exports:{}},pv=function(e){return!e||typeof e=="string"?!1:e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&e.constructor.name!=="String")},mv=pv,gv=Array.prototype.concat,_v=Array.prototype.slice,hf=uf.exports=function(e){for(var t=[],i=0,r=e.length;i<r;i++){var s=e[i];mv(s)?t=gv.call(t,_v.call(s)):t.push(s)}return t};hf.wrap=function(n){return function(){return n(hf(arguments))}};var vv=uf.exports,qs=cf,Ys=vv,df=Object.hasOwnProperty,ff=Object.create(null);for(var Mc in qs)df.call(qs,Mc)&&(ff[qs[Mc]]=Mc);var bn=lf.exports={to:{},get:{}};bn.get=function(n){var e=n.substring(0,3).toLowerCase(),t,i;switch(e){case"hsl":t=bn.get.hsl(n),i="hsl";break;case"hwb":t=bn.get.hwb(n),i="hwb";break;default:t=bn.get.rgb(n),i="rgb";break}return t?{model:i,value:t}:null},bn.get.rgb=function(n){if(!n)return null;var e=/^#([a-f0-9]{3,4})$/i,t=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,i=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,r=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,s=/^(\w+)$/,o=[0,0,0,1],a,l,c;if(a=n.match(t)){for(c=a[2],a=a[1],l=0;l<3;l++){var u=l*2;o[l]=parseInt(a.slice(u,u+2),16)}c&&(o[3]=parseInt(c,16)/255)}else if(a=n.match(e)){for(a=a[1],c=a[3],l=0;l<3;l++)o[l]=parseInt(a[l]+a[l],16);c&&(o[3]=parseInt(c+c,16)/255)}else if(a=n.match(i)){for(l=0;l<3;l++)o[l]=parseInt(a[l+1],0);a[4]&&(a[5]?o[3]=parseFloat(a[4])*.01:o[3]=parseFloat(a[4]))}else if(a=n.match(r)){for(l=0;l<3;l++)o[l]=Math.round(parseFloat(a[l+1])*2.55);a[4]&&(a[5]?o[3]=parseFloat(a[4])*.01:o[3]=parseFloat(a[4]))}else return(a=n.match(s))?a[1]==="transparent"?[0,0,0,0]:df.call(qs,a[1])?(o=qs[a[1]],o[3]=1,o):null:null;for(l=0;l<3;l++)o[l]=zi(o[l],0,255);return o[3]=zi(o[3],0,1),o},bn.get.hsl=function(n){if(!n)return null;var e=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,t=n.match(e);if(t){var i=parseFloat(t[4]),r=(parseFloat(t[1])%360+360)%360,s=zi(parseFloat(t[2]),0,100),o=zi(parseFloat(t[3]),0,100),a=zi(isNaN(i)?1:i,0,1);return[r,s,o,a]}return null},bn.get.hwb=function(n){if(!n)return null;var e=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,t=n.match(e);if(t){var i=parseFloat(t[4]),r=(parseFloat(t[1])%360+360)%360,s=zi(parseFloat(t[2]),0,100),o=zi(parseFloat(t[3]),0,100),a=zi(isNaN(i)?1:i,0,1);return[r,s,o,a]}return null},bn.to.hex=function(){var n=Ys(arguments);return"#"+sa(n[0])+sa(n[1])+sa(n[2])+(n[3]<1?sa(Math.round(n[3]*255)):"")},bn.to.rgb=function(){var n=Ys(arguments);return n.length<4||n[3]===1?"rgb("+Math.round(n[0])+", "+Math.round(n[1])+", "+Math.round(n[2])+")":"rgba("+Math.round(n[0])+", "+Math.round(n[1])+", "+Math.round(n[2])+", "+n[3]+")"},bn.to.rgb.percent=function(){var n=Ys(arguments),e=Math.round(n[0]/255*100),t=Math.round(n[1]/255*100),i=Math.round(n[2]/255*100);return n.length<4||n[3]===1?"rgb("+e+"%, "+t+"%, "+i+"%)":"rgba("+e+"%, "+t+"%, "+i+"%, "+n[3]+")"},bn.to.hsl=function(){var n=Ys(arguments);return n.length<4||n[3]===1?"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)":"hsla("+n[0]+", "+n[1]+"%, "+n[2]+"%, "+n[3]+")"},bn.to.hwb=function(){var n=Ys(arguments),e="";return n.length>=4&&n[3]!==1&&(e=", "+n[3]),"hwb("+n[0]+", "+n[1]+"%, "+n[2]+"%"+e+")"},bn.to.keyword=function(n){return ff[n.slice(0,3)]};function zi(n,e,t){return Math.min(Math.max(e,n),t)}function sa(n){var e=Math.round(n).toString(16).toUpperCase();return e.length<2?"0"+e:e}var yv=lf.exports;const Ks=cf,pf={};for(const n of Object.keys(Ks))pf[Ks[n]]=n;const Re={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var mf=Re;for(const n of Object.keys(Re)){if(!("channels"in Re[n]))throw new Error("missing channels property: "+n);if(!("labels"in Re[n]))throw new Error("missing channel labels property: "+n);if(Re[n].labels.length!==Re[n].channels)throw new Error("channel and label counts mismatch: "+n);const{channels:e,labels:t}=Re[n];delete Re[n].channels,delete Re[n].labels,Object.defineProperty(Re[n],"channels",{value:e}),Object.defineProperty(Re[n],"labels",{value:t})}Re.rgb.hsl=function(n){const e=n[0]/255,t=n[1]/255,i=n[2]/255,r=Math.min(e,t,i),s=Math.max(e,t,i),o=s-r;let a,l;s===r?a=0:e===s?a=(t-i)/o:t===s?a=2+(i-e)/o:i===s&&(a=4+(e-t)/o),a=Math.min(a*60,360),a<0&&(a+=360);const c=(r+s)/2;return s===r?l=0:c<=.5?l=o/(s+r):l=o/(2-s-r),[a,l*100,c*100]},Re.rgb.hsv=function(n){let e,t,i,r,s;const o=n[0]/255,a=n[1]/255,l=n[2]/255,c=Math.max(o,a,l),u=c-Math.min(o,a,l),h=function(d){return(c-d)/6/u+1/2};return u===0?(r=0,s=0):(s=u/c,e=h(o),t=h(a),i=h(l),o===c?r=i-t:a===c?r=1/3+e-i:l===c&&(r=2/3+t-e),r<0?r+=1:r>1&&(r-=1)),[r*360,s*100,c*100]},Re.rgb.hwb=function(n){const e=n[0],t=n[1];let i=n[2];const r=Re.rgb.hsl(n)[0],s=1/255*Math.min(e,Math.min(t,i));return i=1-1/255*Math.max(e,Math.max(t,i)),[r,s*100,i*100]},Re.rgb.cmyk=function(n){const e=n[0]/255,t=n[1]/255,i=n[2]/255,r=Math.min(1-e,1-t,1-i),s=(1-e-r)/(1-r)||0,o=(1-t-r)/(1-r)||0,a=(1-i-r)/(1-r)||0;return[s*100,o*100,a*100,r*100]};function xv(n,e){return(n[0]-e[0])**2+(n[1]-e[1])**2+(n[2]-e[2])**2}Re.rgb.keyword=function(n){const e=pf[n];if(e)return e;let t=1/0,i;for(const r of Object.keys(Ks)){const s=Ks[r],o=xv(n,s);o<t&&(t=o,i=r)}return i},Re.keyword.rgb=function(n){return Ks[n]},Re.rgb.xyz=function(n){let e=n[0]/255,t=n[1]/255,i=n[2]/255;e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,i=i>.04045?((i+.055)/1.055)**2.4:i/12.92;const r=e*.4124+t*.3576+i*.1805,s=e*.2126+t*.7152+i*.0722,o=e*.0193+t*.1192+i*.9505;return[r*100,s*100,o*100]},Re.rgb.lab=function(n){const e=Re.rgb.xyz(n);let t=e[0],i=e[1],r=e[2];t/=95.047,i/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,i=i>.008856?i**(1/3):7.787*i+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const s=116*i-16,o=500*(t-i),a=200*(i-r);return[s,o,a]},Re.hsl.rgb=function(n){const e=n[0]/360,t=n[1]/100,i=n[2]/100;let r,s,o;if(t===0)return o=i*255,[o,o,o];i<.5?r=i*(1+t):r=i+t-i*t;const a=2*i-r,l=[0,0,0];for(let c=0;c<3;c++)s=e+1/3*-(c-1),s<0&&s++,s>1&&s--,6*s<1?o=a+(r-a)*6*s:2*s<1?o=r:3*s<2?o=a+(r-a)*(2/3-s)*6:o=a,l[c]=o*255;return l},Re.hsl.hsv=function(n){const e=n[0];let t=n[1]/100,i=n[2]/100,r=t;const s=Math.max(i,.01);i*=2,t*=i<=1?i:2-i,r*=s<=1?s:2-s;const o=(i+t)/2,a=i===0?2*r/(s+r):2*t/(i+t);return[e,a*100,o*100]},Re.hsv.rgb=function(n){const e=n[0]/60,t=n[1]/100;let i=n[2]/100;const r=Math.floor(e)%6,s=e-Math.floor(e),o=255*i*(1-t),a=255*i*(1-t*s),l=255*i*(1-t*(1-s));switch(i*=255,r){case 0:return[i,l,o];case 1:return[a,i,o];case 2:return[o,i,l];case 3:return[o,a,i];case 4:return[l,o,i];case 5:return[i,o,a]}},Re.hsv.hsl=function(n){const e=n[0],t=n[1]/100,i=n[2]/100,r=Math.max(i,.01);let s,o;o=(2-t)*i;const a=(2-t)*r;return s=t*r,s/=a<=1?a:2-a,s=s||0,o/=2,[e,s*100,o*100]},Re.hwb.rgb=function(n){const e=n[0]/360;let t=n[1]/100,i=n[2]/100;const r=t+i;let s;r>1&&(t/=r,i/=r);const o=Math.floor(6*e),a=1-i;s=6*e-o,o&1&&(s=1-s);const l=t+s*(a-t);let c,u,h;switch(o){default:case 6:case 0:c=a,u=l,h=t;break;case 1:c=l,u=a,h=t;break;case 2:c=t,u=a,h=l;break;case 3:c=t,u=l,h=a;break;case 4:c=l,u=t,h=a;break;case 5:c=a,u=t,h=l;break}return[c*255,u*255,h*255]},Re.cmyk.rgb=function(n){const e=n[0]/100,t=n[1]/100,i=n[2]/100,r=n[3]/100,s=1-Math.min(1,e*(1-r)+r),o=1-Math.min(1,t*(1-r)+r),a=1-Math.min(1,i*(1-r)+r);return[s*255,o*255,a*255]},Re.xyz.rgb=function(n){const e=n[0]/100,t=n[1]/100,i=n[2]/100;let r,s,o;return r=e*3.2406+t*-1.5372+i*-.4986,s=e*-.9689+t*1.8758+i*.0415,o=e*.0557+t*-.204+i*1.057,r=r>.0031308?1.055*r**(1/2.4)-.055:r*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,r=Math.min(Math.max(0,r),1),s=Math.min(Math.max(0,s),1),o=Math.min(Math.max(0,o),1),[r*255,s*255,o*255]},Re.xyz.lab=function(n){let e=n[0],t=n[1],i=n[2];e/=95.047,t/=100,i/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,t=t>.008856?t**(1/3):7.787*t+16/116,i=i>.008856?i**(1/3):7.787*i+16/116;const r=116*t-16,s=500*(e-t),o=200*(t-i);return[r,s,o]},Re.lab.xyz=function(n){const e=n[0],t=n[1],i=n[2];let r,s,o;s=(e+16)/116,r=t/500+s,o=s-i/200;const a=s**3,l=r**3,c=o**3;return s=a>.008856?a:(s-16/116)/7.787,r=l>.008856?l:(r-16/116)/7.787,o=c>.008856?c:(o-16/116)/7.787,r*=95.047,s*=100,o*=108.883,[r,s,o]},Re.lab.lch=function(n){const e=n[0],t=n[1],i=n[2];let r;r=Math.atan2(i,t)*360/2/Math.PI,r<0&&(r+=360);const o=Math.sqrt(t*t+i*i);return[e,o,r]},Re.lch.lab=function(n){const e=n[0],t=n[1],r=n[2]/360*2*Math.PI,s=t*Math.cos(r),o=t*Math.sin(r);return[e,s,o]},Re.rgb.ansi16=function(n,e=null){const[t,i,r]=n;let s=e===null?Re.rgb.hsv(n)[2]:e;if(s=Math.round(s/50),s===0)return 30;let o=30+(Math.round(r/255)<<2|Math.round(i/255)<<1|Math.round(t/255));return s===2&&(o+=60),o},Re.hsv.ansi16=function(n){return Re.rgb.ansi16(Re.hsv.rgb(n),n[2])},Re.rgb.ansi256=function(n){const e=n[0],t=n[1],i=n[2];return e===t&&t===i?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(t/255*5)+Math.round(i/255*5)},Re.ansi16.rgb=function(n){let e=n%10;if(e===0||e===7)return n>50&&(e+=3.5),e=e/10.5*255,[e,e,e];const t=(~~(n>50)+1)*.5,i=(e&1)*t*255,r=(e>>1&1)*t*255,s=(e>>2&1)*t*255;return[i,r,s]},Re.ansi256.rgb=function(n){if(n>=232){const s=(n-232)*10+8;return[s,s,s]}n-=16;let e;const t=Math.floor(n/36)/5*255,i=Math.floor((e=n%36)/6)/5*255,r=e%6/5*255;return[t,i,r]},Re.rgb.hex=function(n){const t=(((Math.round(n[0])&255)<<16)+((Math.round(n[1])&255)<<8)+(Math.round(n[2])&255)).toString(16).toUpperCase();return"000000".substring(t.length)+t},Re.hex.rgb=function(n){const e=n.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];let t=e[0];e[0].length===3&&(t=t.split("").map(a=>a+a).join(""));const i=parseInt(t,16),r=i>>16&255,s=i>>8&255,o=i&255;return[r,s,o]},Re.rgb.hcg=function(n){const e=n[0]/255,t=n[1]/255,i=n[2]/255,r=Math.max(Math.max(e,t),i),s=Math.min(Math.min(e,t),i),o=r-s;let a,l;return o<1?a=s/(1-o):a=0,o<=0?l=0:r===e?l=(t-i)/o%6:r===t?l=2+(i-e)/o:l=4+(e-t)/o,l/=6,l%=1,[l*360,o*100,a*100]},Re.hsl.hcg=function(n){const e=n[1]/100,t=n[2]/100,i=t<.5?2*e*t:2*e*(1-t);let r=0;return i<1&&(r=(t-.5*i)/(1-i)),[n[0],i*100,r*100]},Re.hsv.hcg=function(n){const e=n[1]/100,t=n[2]/100,i=e*t;let r=0;return i<1&&(r=(t-i)/(1-i)),[n[0],i*100,r*100]},Re.hcg.rgb=function(n){const e=n[0]/360,t=n[1]/100,i=n[2]/100;if(t===0)return[i*255,i*255,i*255];const r=[0,0,0],s=e%1*6,o=s%1,a=1-o;let l=0;switch(Math.floor(s)){case 0:r[0]=1,r[1]=o,r[2]=0;break;case 1:r[0]=a,r[1]=1,r[2]=0;break;case 2:r[0]=0,r[1]=1,r[2]=o;break;case 3:r[0]=0,r[1]=a,r[2]=1;break;case 4:r[0]=o,r[1]=0,r[2]=1;break;default:r[0]=1,r[1]=0,r[2]=a}return l=(1-t)*i,[(t*r[0]+l)*255,(t*r[1]+l)*255,(t*r[2]+l)*255]},Re.hcg.hsv=function(n){const e=n[1]/100,t=n[2]/100,i=e+t*(1-e);let r=0;return i>0&&(r=e/i),[n[0],r*100,i*100]},Re.hcg.hsl=function(n){const e=n[1]/100,i=n[2]/100*(1-e)+.5*e;let r=0;return i>0&&i<.5?r=e/(2*i):i>=.5&&i<1&&(r=e/(2*(1-i))),[n[0],r*100,i*100]},Re.hcg.hwb=function(n){const e=n[1]/100,t=n[2]/100,i=e+t*(1-e);return[n[0],(i-e)*100,(1-i)*100]},Re.hwb.hcg=function(n){const e=n[1]/100,i=1-n[2]/100,r=i-e;let s=0;return r<1&&(s=(i-r)/(1-r)),[n[0],r*100,s*100]},Re.apple.rgb=function(n){return[n[0]/65535*255,n[1]/65535*255,n[2]/65535*255]},Re.rgb.apple=function(n){return[n[0]/255*65535,n[1]/255*65535,n[2]/255*65535]},Re.gray.rgb=function(n){return[n[0]/100*255,n[0]/100*255,n[0]/100*255]},Re.gray.hsl=function(n){return[0,0,n[0]]},Re.gray.hsv=Re.gray.hsl,Re.gray.hwb=function(n){return[0,100,n[0]]},Re.gray.cmyk=function(n){return[0,0,0,n[0]]},Re.gray.lab=function(n){return[n[0],0,0]},Re.gray.hex=function(n){const e=Math.round(n[0]/100*255)&255,i=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(i.length)+i},Re.rgb.gray=function(n){return[(n[0]+n[1]+n[2])/3/255*100]};const oa=mf;function Mv(){const n={},e=Object.keys(oa);for(let t=e.length,i=0;i<t;i++)n[e[i]]={distance:-1,parent:null};return n}function Sv(n){const e=Mv(),t=[n];for(e[n].distance=0;t.length;){const i=t.pop(),r=Object.keys(oa[i]);for(let s=r.length,o=0;o<s;o++){const a=r[o],l=e[a];l.distance===-1&&(l.distance=e[i].distance+1,l.parent=i,t.unshift(a))}}return e}function bv(n,e){return function(t){return e(n(t))}}function Ev(n,e){const t=[e[n].parent,n];let i=oa[e[n].parent][n],r=e[n].parent;for(;e[r].parent;)t.unshift(e[r].parent),i=bv(oa[e[r].parent][r],i),r=e[r].parent;return i.conversion=t,i}var Tv=function(n){const e=Sv(n),t={},i=Object.keys(e);for(let r=i.length,s=0;s<r;s++){const o=i[s];e[o].parent!==null&&(t[o]=Ev(o,e))}return t};const Sc=mf,wv=Tv,Vr={},Av=Object.keys(Sc);function Rv(n){const e=function(...t){const i=t[0];return i==null?i:(i.length>1&&(t=i),n(t))};return"conversion"in n&&(e.conversion=n.conversion),e}function Cv(n){const e=function(...t){const i=t[0];if(i==null)return i;i.length>1&&(t=i);const r=n(t);if(typeof r=="object")for(let s=r.length,o=0;o<s;o++)r[o]=Math.round(r[o]);return r};return"conversion"in n&&(e.conversion=n.conversion),e}Av.forEach(n=>{Vr[n]={},Object.defineProperty(Vr[n],"channels",{value:Sc[n].channels}),Object.defineProperty(Vr[n],"labels",{value:Sc[n].labels});const e=wv(n);Object.keys(e).forEach(i=>{const r=e[i];Vr[n][i]=Cv(r),Vr[n][i].raw=Rv(r)})});var Pv=Vr;const zr=yv,En=Pv,gf=["keyword","gray","hex"],bc={};for(const n of Object.keys(En))bc[[...En[n].labels].sort().join("")]=n;const aa={};function qt(n,e){if(!(this instanceof qt))return new qt(n,e);if(e&&e in gf&&(e=null),e&&!(e in En))throw new Error("Unknown model: "+e);let t,i;if(n==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(n instanceof qt)this.model=n.model,this.color=[...n.color],this.valpha=n.valpha;else if(typeof n=="string"){const r=zr.get(n);if(r===null)throw new Error("Unable to parse color from string: "+n);this.model=r.model,i=En[this.model].channels,this.color=r.value.slice(0,i),this.valpha=typeof r.value[i]=="number"?r.value[i]:1}else if(n.length>0){this.model=e||"rgb",i=En[this.model].channels;const r=Array.prototype.slice.call(n,0,i);this.color=Ec(r,i),this.valpha=typeof n[i]=="number"?n[i]:1}else if(typeof n=="number")this.model="rgb",this.color=[n>>16&255,n>>8&255,n&255],this.valpha=1;else{this.valpha=1;const r=Object.keys(n);"alpha"in n&&(r.splice(r.indexOf("alpha"),1),this.valpha=typeof n.alpha=="number"?n.alpha:0);const s=r.sort().join("");if(!(s in bc))throw new Error("Unable to parse color from object: "+JSON.stringify(n));this.model=bc[s];const{labels:o}=En[this.model],a=[];for(t=0;t<o.length;t++)a.push(n[o[t]]);this.color=Ec(a)}if(aa[this.model])for(i=En[this.model].channels,t=0;t<i;t++){const r=aa[this.model][t];r&&(this.color[t]=r(this.color[t]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}qt.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(n){let e=this.model in zr.to?this:this.rgb();e=e.round(typeof n=="number"?n:1);const t=e.valpha===1?e.color:[...e.color,this.valpha];return zr.to[e.model](t)},percentString(n){const e=this.rgb().round(typeof n=="number"?n:1),t=e.valpha===1?e.color:[...e.color,this.valpha];return zr.to.rgb.percent(t)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){const n={},{channels:e}=En[this.model],{labels:t}=En[this.model];for(let i=0;i<e;i++)n[t[i]]=this.color[i];return this.valpha!==1&&(n.alpha=this.valpha),n},unitArray(){const n=this.rgb().color;return n[0]/=255,n[1]/=255,n[2]/=255,this.valpha!==1&&n.push(this.valpha),n},unitObject(){const n=this.rgb().object();return n.r/=255,n.g/=255,n.b/=255,this.valpha!==1&&(n.alpha=this.valpha),n},round(n){return n=Math.max(n||0,0),new qt([...this.color.map(Lv(n)),this.valpha],this.model)},alpha(n){return n!==void 0?new qt([...this.color,Math.max(0,Math.min(1,n))],this.model):this.valpha},red:It("rgb",0,Gt(255)),green:It("rgb",1,Gt(255)),blue:It("rgb",2,Gt(255)),hue:It(["hsl","hsv","hsl","hwb","hcg"],0,n=>(n%360+360)%360),saturationl:It("hsl",1,Gt(100)),lightness:It("hsl",2,Gt(100)),saturationv:It("hsv",1,Gt(100)),value:It("hsv",2,Gt(100)),chroma:It("hcg",1,Gt(100)),gray:It("hcg",2,Gt(100)),white:It("hwb",1,Gt(100)),wblack:It("hwb",2,Gt(100)),cyan:It("cmyk",0,Gt(100)),magenta:It("cmyk",1,Gt(100)),yellow:It("cmyk",2,Gt(100)),black:It("cmyk",3,Gt(100)),x:It("xyz",0,Gt(95.047)),y:It("xyz",1,Gt(100)),z:It("xyz",2,Gt(108.833)),l:It("lab",0,Gt(100)),a:It("lab",1),b:It("lab",2),keyword(n){return n!==void 0?new qt(n):En[this.model].keyword(this.color)},hex(n){return n!==void 0?new qt(n):zr.to.hex(this.rgb().round().color)},hexa(n){if(n!==void 0)return new qt(n);const e=this.rgb().round().color;let t=Math.round(this.valpha*255).toString(16).toUpperCase();return t.length===1&&(t="0"+t),zr.to.hex(e)+t},rgbNumber(){const n=this.rgb().color;return(n[0]&255)<<16|(n[1]&255)<<8|n[2]&255},luminosity(){const n=this.rgb().color,e=[];for(const[t,i]of n.entries()){const r=i/255;e[t]=r<=.04045?r/12.92:((r+.055)/1.055)**2.4}return .2126*e[0]+.7152*e[1]+.0722*e[2]},contrast(n){const e=this.luminosity(),t=n.luminosity();return e>t?(e+.05)/(t+.05):(t+.05)/(e+.05)},level(n){const e=this.contrast(n);return e>=7?"AAA":e>=4.5?"AA":""},isDark(){const n=this.rgb().color;return(n[0]*2126+n[1]*7152+n[2]*722)/1e4<128},isLight(){return!this.isDark()},negate(){const n=this.rgb();for(let e=0;e<3;e++)n.color[e]=255-n.color[e];return n},lighten(n){const e=this.hsl();return e.color[2]+=e.color[2]*n,e},darken(n){const e=this.hsl();return e.color[2]-=e.color[2]*n,e},saturate(n){const e=this.hsl();return e.color[1]+=e.color[1]*n,e},desaturate(n){const e=this.hsl();return e.color[1]-=e.color[1]*n,e},whiten(n){const e=this.hwb();return e.color[1]+=e.color[1]*n,e},blacken(n){const e=this.hwb();return e.color[2]+=e.color[2]*n,e},grayscale(){const n=this.rgb().color,e=n[0]*.3+n[1]*.59+n[2]*.11;return qt.rgb(e,e,e)},fade(n){return this.alpha(this.valpha-this.valpha*n)},opaquer(n){return this.alpha(this.valpha+this.valpha*n)},rotate(n){const e=this.hsl();let t=e.color[0];return t=(t+n)%360,t=t<0?360+t:t,e.color[0]=t,e},mix(n,e){if(!n||!n.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof n);const t=n.rgb(),i=this.rgb(),r=e===void 0?.5:e,s=2*r-1,o=t.alpha()-i.alpha(),a=((s*o===-1?s:(s+o)/(1+s*o))+1)/2,l=1-a;return qt.rgb(a*t.red()+l*i.red(),a*t.green()+l*i.green(),a*t.blue()+l*i.blue(),t.alpha()*r+i.alpha()*(1-r))}};for(const n of Object.keys(En)){if(gf.includes(n))continue;const{channels:e}=En[n];qt.prototype[n]=function(...t){return this.model===n?new qt(this):t.length>0?new qt(t,n):new qt([...Dv(En[this.model][n].raw(this.color)),this.valpha],n)},qt[n]=function(...t){let i=t[0];return typeof i=="number"&&(i=Ec(t,e)),new qt(i,n)}}function Iv(n,e){return Number(n.toFixed(e))}function Lv(n){return function(e){return Iv(e,n)}}function It(n,e,t){n=Array.isArray(n)?n:[n];for(const i of n)(aa[i]||(aa[i]=[]))[e]=t;return n=n[0],function(i){let r;return i!==void 0?(t&&(i=t(i)),r=this[n](),r.color[e]=i,r):(r=this[n]().color[e],t&&(r=t(r)),r)}}function Gt(n){return function(e){return Math.max(0,Math.min(n,e))}}function Dv(n){return Array.isArray(n)?n:[n]}function Ec(n,e){for(let t=0;t<e;t++)typeof n[t]!="number"&&(n[t]=0);return n}var Nv=qt;const hr=xc(Nv);function cn({color:n,model:e="hsl"}){if(n===void 0)return new hr;if(typeof n=="string")return new hr(n);if(!Array.isArray(n))return n;switch(e){case"rgb":return hr.rgb(n[0],n[1],n[2]);case"hsl":return hr.hsl(n[0],n[1],n[2]);case"hsla":return hr.hsl(n[0],n[1],n[2]).alpha(n[3]??1);case"rgba":return hr.rgb(n[0],n[1],n[2]).alpha(n[3]??1);default:throw new Error(`Unknown color Model: ${e}`)}}function Ov(n,e){return cn({color:n}).darken(e).toString()}function Uv(n,e){return cn({color:n}).desaturate(e).toString()}const Fv=n=>cn({color:n});function Bv(n,e){return cn({color:n}).lighten(e).toString()}function kv(n,e){return cn({color:n}).alpha(e).toString()}const Vv=n=>typeof n=="function",zv=(n,e)=>e.reduce((t,i)=>i(t),n),_f=n=>Object.entries(n),Hv=(n,e)=>Object.entries(n).filter(t=>{const[i,r]=t;return e(i,r)}),Tn=n=>n==null||Number.isNaN(n),vf=n=>{const e=n;return typeof e=="object"&&typeof e.next=="function"},yf=(n,e=t=>!0)=>{if(!Tn(n))return Array.isArray(n)?n.find(e):vf(n)&&e(n)?n.next().value:n},Gv=n=>{if(!Tn(n))return Object.freeze(n)},Wv=(n,e,t=(i,r,s)=>{throw console.error("error",i),console.error("object",n),console.error("key",r),console.error("value",s),console.error("consumer",[e]),new Error("Error while iterating over object")})=>{for(const i in n){const r=n[i];try{e(i,n[i])}catch(s){t(s,i,r)}}},$v=n=>{if(!Tn(n))return Object.freeze(n)},xf=n=>Object.fromEntries(n),ri=n=>!Tn(n),Xv=n=>{const e=Array.from(new Set(n.map(i=>i[0]))),t=xf(e.map(i=>[i,[]]));return n.forEach(i=>{const[r,s]=i;ri(s)&&t[r].push(s)}),t},Tc=(n,e,t=void 0)=>{const i=n[e];return ua(i)?t:i};function Mf(n){const e=n;return typeof e=="object"&&typeof e[Symbol.iterator]=="function"}const Sf=n=>Tn(n)?[]:Mf(n)?Array.from(n):Array.isArray(n)?n:[n],jv=(n,e)=>{const t=Sf(e);return t.filter(i=>ri(n[i])).length===t.length},qv=yf,bf=(n,e)=>{if(ri(n))return e(n)},Ef=()=>typeof window<"u",Yv=n=>Ef()?n():void 0,Kv=(n,e,t)=>{if(n(e))return bf(e,t)},Zv=(...n)=>{if(Tn(n))return!0;n.findIndex(e=>Tn(e))},Tf=n=>Tn(n)?!0:typeof n=="string"?n.trim().length===0:!1,Jv=n=>!Tf(n),Qv=n=>Object.keys(n),ey=n=>{if(!Tn(n))return n[n.length-1]},ty=(n,e)=>e(n),ny=(n,e)=>_f(n).map(t=>{const[i,r]=t;return e(i,r)}),iy=(n,e)=>{const{[e]:t,...i}=n;return i},ry=(n,e)=>(n[e]=void 0,n),sy=(n,e)=>ri(n)?n:e,oy=(n,e={})=>{try{return n()}catch(t){const{message:i,cause:r}=e,s=new Error(i,{cause:r});if(t instanceof Error)return t.cause=s,t;throw new Error(i,{cause:[t,r]})}},ay=n=>{const e=Object.entries(n).filter(([t,i])=>ri(i));return Object.fromEntries(e)},wf=n=>{if(!Tn(n))return n.slice(1)},ly=wf,wc=n=>Vv(n)?n():n,Af=(n,e={})=>{const{quiet:t=!1,def:i=void 0,onError:r}=e;try{return n()}catch(s){return t||(console.error(s),ri(r)&&console.log(wc(r))),i}},cy=async(n,e={})=>{const{quiet:t=!1,def:i=void 0,onError:r}=e;return Af(async()=>{const s=n();return s instanceof Promise?await s.catch(o=>(t||(console.error(o),ri(r)&&console.log(wc(r))),i)):s})},Rf=(n,e,t)=>({...n,...Object.fromEntries([[e,t]])}),Cf=(n,e,t)=>(n[e]=t,n);function uy(n,e){const t=[];let i=!1;for(let r=0;r<n&&!i;r++){const s=e(r,()=>{i=!0});ca(s)&&t.push(s)}return t}function*hy(n,e){let t=!1;for(let i=0;i<n;i++){if(t)return;yield e(i,()=>{t=!0})}}const dy=n=>{if(Tn(n))return!1;const e=["true","1","yes","on"],t=["false","0","no","off"];return e.includes(n.toLowerCase())?!0:(t.includes(n.toLowerCase()),!1)},fy=(n,e={})=>{const{compact:t=!1}=e;return n.reduce((i,r)=>(la.entries(r).forEach(s=>{const[o,a]=s,l=i[o]??[];i[o]=t&&l.includes(a)?l:[...l,a]}),i),{})},py=n=>{if(!Tn(n))return Number(n)},my=n=>{const e=()=>{};return new Promise((t,i)=>{try{t(n(e))}catch(r){i(r)}})},Pf=n=>n instanceof Error,gy=(n,e)=>{if(Pf(n))throw new Error(e,{cause:n});return n},_y=()=>[],vy=n=>[n],yy=(n,e)=>[n,e],xy=(n,e,t)=>[n,e,t],My=(n,e,t,i)=>[n,e,t,i],Sy=(n,e,t,i,r)=>[n,e,t,i,r],by=n=>{const e=n;return typeof e=="object"&&typeof e.length=="number"},Ey=n=>{const e=n;return typeof e=="object"&&(typeof e.message=="string"||typeof e.stack=="string"||ri(e.cause))},Ty=n=>typeof n=="function",wy=(n,e,t)=>{const i=Tc(n,e);if(ua(i))return n;const r=t(i);return Rf(n,e,r)},Ay=(n,e,t)=>{const i=Tc(n,e);if(ua(i))return n;const r=t(i);return Cf(n,e,r)},Ry=n=>Object.values(n),Cy=n=>new Promise(e=>{setTimeout(()=>{e(void 0)},n)}),Py=({settleAction:n,settledAfterMs:e})=>{let t,i=Date.now(),r=!1;const s=()=>{if(Date.now()>i+e){ri(t)&&n(t),r=!1;return}r=!0,setTimeout(s,e)};return{update:o=>{t=o,i=Date.now(),r||s()}}};function Iy(n){let e=0;const t=n.length;function i(){for(;e<t&&/\s/.test(n[e]);)e++}function r(){if(i(),e>=t)return;const c=n[e];if(c==="{")return s();if(c==="[")return o();if(c==='"')return a();if(c==="-"||c>="0"&&c<="9")return l();if(n.startsWith("true",e))return e+=4,!0;if(n.startsWith("false",e))return e+=5,!1;if(n.startsWith("null",e))return e+=4,null}function s(){const c={};for(e++;e<t;){if(i(),n[e]==="}")return e++,c;const u=a();if(u===void 0||typeof u!="string"||(i(),n[e]!==":"))break;e++;const h=r();if(h===void 0)break;if(c[u]=h,i(),n[e]==="}")return e++,c;if(n[e]!==",")break;e++}return c}function o(){const c=[];for(e++;e<t;){if(i(),n[e]==="]")return e++,c;const u=r();if(u!==void 0&&c.push(u),i(),n[e]==="]")return e++,c;if(n[e]!==",")break;e++}return c}function a(){let c="";for(e++;e<t;){const u=n[e++];if(u==='"')return c;if(u==="\\"){if(e<t){const h=n[e++];h==='"'?c+='"':h==="\\"?c+="\\":h==="/"?c+="/":h==="b"?c+="\b":h==="f"?c+="\f":h==="n"?c+=`
`:h==="r"?c+="\r":h==="t"&&(c+="	")}}else c+=u}}function l(){const c=e;for(n[e]==="-"&&e++;e<t&&n[e]>="0"&&n[e]<="9";)e++;if(n[e]===".")for(e++;e<t&&n[e]>="0"&&n[e]<="9";)e++;if(n[e]==="e"||n[e]==="E")for(e++,(n[e]==="-"||n[e]==="+")&&e++;e<t&&n[e]>="0"&&n[e]<="9";)e++;const u=n.slice(c,e),h=Number(u);if(!isNaN(h))return h}return r()}const la={isErrorLike:Ey,orError:oy,tryValue:gy,isErrorType:Pf,isEmpty:Tf,isNotEmpty:Jv,isIterator:vf,isArrayLike:by,times:uy,first:yf,last:ey,fix:Gv,iff:bf,iffTyped:Kv,includesUndefined:Zv,isDefined:ri,isUndefined:Tn,omit:iy,omitUnsafe:ry,orElse:sy,removeUndefinedValues:ay,toMany:Sf,set:Rf,setUnsafe:Cf,get:Tc,update:wy,updateUnsafe:Ay,entries:_f,keys:Qv,values:Ry,forEach:Wv,filter:Hv,chain:zv,fromEntries:xf,fromEntriesToMultimap:Xv,freeze:$v,hasKey:jv,tuple0:_y,tuple1:vy,tuple2:yy,tuple3:xy,tuple4:My,tuple5:Sy,safe:Af,safeAsync:cy,valueOf:wc,mapValue:ty,headOf:qv,tailOf:wf,restOf:ly,toMultiMap:fy,timesGen:hy,isIterable:Mf,isBrowser:Ef,iffBrowser:Yv,mapOf:ny,toPromise:my,all:Promise.all,isFunction:Ty,toNumber:py,toBoolean:dy,waitTimeout:Cy,createSettler:Py,parseIncompleteJson:Iy},{isDefined:ca,isUndefined:ua}=la,Ly=(n={})=>{let e=typeof n.color=="string"?n.color:"grey";return la.entries(n).forEach(([t,i])=>{t!=="color"&&typeof i=="number"&&(e=ha[t](e,i))}),e},Dy=async(n,e)=>{const{colorCount:t=64,quality:i=5}=e;throw new Error("node-vibrant does dirty worker shenanigans on load, find simpler alternative")};function Ny(n=Math.random){return hr.rgb([255*n(),255*n(),255*n()]).toString()}function Oy(n,e){return cn({color:n}).rotate(e*360).toString()}function Uy(n,e){return cn({color:n}).saturate(e).toString()}let If=class{constructor(e,t,i){Rt(this,"r");Rt(this,"g");Rt(this,"b");this.r=this.clamp(e),this.g=this.clamp(t),this.b=this.clamp(i)}toString(){return`rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`}set(e,t,i){this.r=this.clamp(e),this.g=this.clamp(t),this.b=this.clamp(i)}hueRotate(e=0){e=e/180*Math.PI;const t=Math.sin(e),i=Math.cos(e);this.multiply([.213+i*.787-t*.213,.715-i*.715-t*.715,.072-i*.072+t*.928,.213-i*.213+t*.143,.715+i*.285+t*.14,.072-i*.072-t*.283,.213-i*.213-t*.787,.715-i*.715+t*.715,.072+i*.928+t*.072])}grayscale(e=1){this.multiply([.2126+.7874*(1-e),.7152-.7152*(1-e),.0722-.0722*(1-e),.2126-.2126*(1-e),.7152+.2848*(1-e),.0722-.0722*(1-e),.2126-.2126*(1-e),.7152-.7152*(1-e),.0722+.9278*(1-e)])}sepia(e=1){this.multiply([.393+.607*(1-e),.769-.769*(1-e),.189-.189*(1-e),.349-.349*(1-e),.686+.314*(1-e),.168-.168*(1-e),.272-.272*(1-e),.534-.534*(1-e),.131+.869*(1-e)])}saturate(e=1){this.multiply([.213+.787*e,.715-.715*e,.072-.072*e,.213-.213*e,.715+.285*e,.072-.072*e,.213-.213*e,.715-.715*e,.072+.928*e])}multiply(e){const t=this.clamp(this.r*e[0]+this.g*e[1]+this.b*e[2]),i=this.clamp(this.r*e[3]+this.g*e[4]+this.b*e[5]),r=this.clamp(this.r*e[6]+this.g*e[7]+this.b*e[8]);this.r=t,this.g=i,this.b=r}brightness(e=1){this.linear(e)}contrast(e=1){this.linear(e,-(.5*e)+.5)}linear(e=1,t=0){this.r=this.clamp(this.r*e+t*255),this.g=this.clamp(this.g*e+t*255),this.b=this.clamp(this.b*e+t*255)}invert(e=1){this.r=this.clamp((e+this.r/255*(1-2*e))*255),this.g=this.clamp((e+this.g/255*(1-2*e))*255),this.b=this.clamp((e+this.b/255*(1-2*e))*255)}hsl(){const e=this.r/255,t=this.g/255,i=this.b/255,r=Math.max(e,t,i),s=Math.min(e,t,i);let o=0,a=0,l=(r+s)/2;if(r===s)o=a=0;else{const c=r-s;switch(a=l>.5?c/(2-r-s):c/(r+s),r){case e:o=(t-i)/c+(t<i?6:0);break;case t:o=(i-e)/c+2;break;case i:o=(e-t)/c+4;break}o/=6}return{h:o*100,s:a*100,l:l*100}}clamp(e){return e>255?e=255:e<0&&(e=0),e}};class Fy{constructor(e){Rt(this,"target");Rt(this,"targetHSL");Rt(this,"reusedColor");this.target=e,this.targetHSL=e.hsl(),this.reusedColor=new If(0,0,0)}solve(){const e=this.solveNarrow(this.solveWide());return{values:e.values,loss:e.loss,filter:this.css(e.values)}}solveWide(){const i=[60,180,18e3,600,1.2,1.2];let r={loss:1/0,values:[]};for(let s=0;r.loss>25&&s<3;s++){const o=[50,20,3750,50,100,100],a=this.spsa(5,i,15,o,1e3);a.loss<r.loss&&(r=a)}return r}solveNarrow(e){const t=e.loss,i=2,r=t+1,s=[.25*r,.25*r,r,.25*r,.2*r,.2*r];return this.spsa(t,s,i,e.values,500)}spsa(e,t,i,r,s){const a=.16666666666666666;let l=[],c=1/0;const u=new Array(6),h=new Array(6),d=new Array(6);for(let g=0;g<s;g++){const m=i/Math.pow(g+1,a);for(let b=0;b<6;b++)u[b]=Math.random()>.5?1:-1,h[b]=r[b]+m*u[b],d[b]=r[b]-m*u[b];const p=this.loss(h)-this.loss(d);for(let b=0;b<6;b++){const y=p/(2*m)*u[b],M=t[b]/Math.pow(e+g+1,1);r[b]=f(r[b]-M*y,b)}const _=this.loss(r);_<c&&(l=r.slice(0),c=_)}return{values:l,loss:c};function f(g,m){let p=100;return m===2?p=7500:(m===4||m===5)&&(p=200),m===3?g>p?g%=p:g<0&&(g=p+g%p):g<0?g=0:g>p&&(g=p),g}}loss(e){const t=this.reusedColor;t.set(0,0,0),t.invert(e[0]/100),t.sepia(e[1]/100),t.saturate(e[2]/100),t.hueRotate(e[3]*3.6),t.brightness(e[4]/100),t.contrast(e[5]/100);const i=t.hsl();return Math.abs(t.r-this.target.r)+Math.abs(t.g-this.target.g)+Math.abs(t.b-this.target.b)+Math.abs(i.h-this.targetHSL.h)+Math.abs(i.s-this.targetHSL.s)+Math.abs(i.l-this.targetHSL.l)}css(e){function t(i,r=1){return Math.round(e[i]*r)}return`invert(${t(0)}%) sepia(${t(1)}%) saturate(${t(2)}%) hue-rotate(${t(3,3.6)}deg) brightness(${t(4)}%) contrast(${t(5)}%)`}}function By(n){const e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;n=n.replace(e,(i,r,s,o)=>r+r+s+s+o+o);const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);if(t)return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)];throw new Error("Error pasring hex: "+n)}function ky({someColor:n,from:e}){const t=cn({color:n}).hex(),i=By(t),r=new If(i[0],i[1],i[2]),o=new Fy(r).solve();return[e==="white"?"brightness(0) saturate(100%) ":"",o.filter].join("")}function Lf(n,e,t){return n<=e?e:n>=t?t:n}function Vy(n){return n!==null&&typeof n=="object"&&"color"in n&&typeof n.color=="function"&&"text"in n&&typeof n.text=="function"}function Ac(n,e=0){if(e<=0)return n;const t=n.flatMap((i,r,s)=>{if(r===s.length-1)return[i];const o=s[r+1];return[i,i.mix(o)]});return Ac(t,e-1)}function zy(n,e=8){if(Vy(n))return n;const t=Ac(n.map(r=>cn({color:r})),e),i={s12:r=>i.color(r/12),s12t:r=>i.text(r/12),color:r=>{r=Lf(r,0,1);const s=Lf(Math.floor(r*t.length),0,t.length-1);return t[s].toString()},text:r=>{const s=i.color(r);return Nf([s])}};return i}const Df={create:zy,expandColors:Ac};function Nf(n,e=4.5){var r;return(r=n.map(s=>Hy({color:s,threshold:e})).sort((s,o)=>{const[a,l]=s,[c,u]=o;return l===u?0:l>u?1:-1}).map(s=>s[0])[0])==null?void 0:r.toString()}function Hy({color:n,threshold:e=4.5,steps:t=12}){const i=Df.create(["black","white"]),r=Df.create(["white","black"]),s=cn({color:n});let o=ha.from("black"),a=1e3;for(let u=0;u<t;u++){const h=cn({color:i.color(u/t*.5)}),d=h.contrast(s);d>e&&d<a&&(o=h,a=d)}let l=ha.from("white"),c=1e3;for(let u=0;u<t;u++){const h=cn({color:r.color(u/t*.5)}),d=h.contrast(s);d>e&&d<c&&(l=h,c=d)}return c<a?[l,c]:[o,a]}function Gy(n,e){return cn({color:n,model:e}).hsl().string()}function Wy(n){return cn({color:n}).rgbNumber()}const ha={from:Fv,builder:cn,toCss:Gy,toRgbInteger:Wy,darken:Ov,desaturate:Uv,lighten:Bv,randomColor:Ny,saturate:Uy,textColor:Nf,toCssFilters:ky,rotateHue:Oy,operateOn:Ly,opacity:kv,palletteFrom:Dy},$y=async({path:n,canvas:e,cameraOptions:t={}})=>{const i=Vt.Babs.createEngine({canvas:e,premultipliedAlpha:!1,antialias:!0}),r=Vt.Scenes.createScene(i);r.clearColor=Vt.Babs.c4(ha.from("black").alpha(0).toString());const s=Vt.Cameras.getArcRotateCamera(r,"Camera",{alpha:Math.PI/2,beta:Math.PI/2,radius:.5,target:[0,1.67,0],...t});s.minZ=.001,s.inertia=0,s.attachControl(e,!0),Vt.Lights.getHemisphericLight(r,"light1",{direction:[10,1,1],intensity:.5}),Vt.Lights.getPointLight(r,"light2",{position:[1,1,2],intensity:15}),e.onkeyup=c=>{c.ctrlKey&&c.keyCode===73&&Vt.Scenes.toggleInspector(r)};const o=await Vt.Models.builder({path:n,scene:r});dv(o);let a={};const l={leftClosed:c=>{o.morph({EyesClosedL:c})},rightClosed:c=>{o.morph({EyesClosedR:c})},updateState:c=>{a=uv(a,c)},getState:()=>a};return{destroy:()=>{r.dispose(),i.dispose()},gltfModel:o,updateTick:({tick:c})=>{r.render(),hv(l,(c==null?void 0:c.deltaMs)/1e3)},updatePhonemeLevels:({analyserNode:c,phonemeLevels:u})=>{Xy({model:o,levels:u})},setAnimation:async c=>{},setExpression:(c,u=.5)=>{},getExpressions:()=>[]}},Xy=({model:n,levels:e})=>{const t={},i=n.getMorphs();for(const r of i){const s=r.replace("eCTRLv","").toLocaleUpperCase(),o=e[s];ca(o)&&(t[r]=Math.max(0,o*.2))}n.morph(t)};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dr="169",jy=0,Of=1,qy=2,Uf=1,Yy=2,yi=3,xi=0,un=1,Nn=2,Hi=0,Hr=1,Ff=2,Bf=3,kf=4,Ky=5,fr=100,Zy=101,Jy=102,Qy=103,ex=104,tx=200,nx=201,ix=202,rx=203,Rc=204,Cc=205,sx=206,ox=207,ax=208,lx=209,cx=210,ux=211,hx=212,dx=213,fx=214,Pc=0,Ic=1,Lc=2,Gr=3,Dc=4,Nc=5,Oc=6,Uc=7,da=0,px=1,mx=2,Gi=0,gx=1,_x=2,vx=3,yx=4,xx=5,Mx=6,Sx=7,Vf="attached",bx="detached",zf=300,Wr=301,$r=302,fa=303,Fc=304,pa=306,Wi=1e3,si=1001,ma=1002,hn=1003,Hf=1004,Zs=1005,wn=1006,ga=1007,Mi=1008,Si=1009,Gf=1010,Wf=1011,Js=1012,Bc=1013,pr=1014,$n=1015,Qs=1016,kc=1017,Vc=1018,Xr=1020,$f=35902,Xf=1021,jf=1022,On=1023,qf=1024,Yf=1025,jr=1026,qr=1027,zc=1028,Hc=1029,Kf=1030,Gc=1031,Wc=1033,_a=33776,va=33777,ya=33778,xa=33779,$c=35840,Xc=35841,jc=35842,qc=35843,Yc=36196,Kc=37492,Zc=37496,Jc=37808,Qc=37809,eu=37810,tu=37811,nu=37812,iu=37813,ru=37814,su=37815,ou=37816,au=37817,lu=37818,cu=37819,uu=37820,hu=37821,Ma=36492,du=36494,fu=36495,Zf=36283,pu=36284,mu=36285,gu=36286,Ex=2200,Tx=2201,wx=2202,eo=2300,to=2301,_u=2302,Yr=2400,Kr=2401,Sa=2402,vu=2500,Ax=2501,Rx=0,Jf=1,yu=2,Cx=3200,Px=3201,no=0,Ix=1,$i="",_t="srgb",Zt="srgb-linear",xu="display-p3",ba="display-p3-linear",Ea="linear",bt="srgb",Ta="rec709",wa="p3",Zr=7680,Qf=519,Lx=512,Dx=513,Nx=514,ep=515,Ox=516,Ux=517,Fx=518,Bx=519,Mu=35044,kx=35048,tp="300 es",bi=2e3,Aa=2001;class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let np=1234567;const io=Math.PI/180,Jr=180/Math.PI;function Xn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Yt(n,e,t){return Math.max(e,Math.min(t,n))}function Su(n,e){return(n%e+e)%e}function Vx(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function zx(n,e,t){return n!==e?(t-n)/(e-n):0}function ro(n,e,t){return(1-t)*n+t*e}function Hx(n,e,t,i){return ro(n,e,1-Math.exp(-t*i))}function Gx(n,e=1){return e-Math.abs(Su(n,e*2)-e)}function Wx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $x(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Xx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jx(n,e){return n+Math.random()*(e-n)}function qx(n){return n*(.5-Math.random())}function Yx(n){n!==void 0&&(np=n);let e=np+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kx(n){return n*io}function Zx(n){return n*Jr}function Jx(n){return(n&n-1)===0&&n!==0}function Qx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function eM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const et={DEG2RAD:io,RAD2DEG:Jr,generateUUID:Xn,clamp:Yt,euclideanModulo:Su,mapLinear:Vx,inverseLerp:zx,lerp:ro,damp:Hx,pingpong:Gx,smoothstep:Wx,smootherstep:$x,randInt:Xx,randFloat:jx,randFloatSpread:qx,seededRandom:Yx,degToRad:Kx,radToDeg:Zx,isPowerOfTwo:Jx,ceilPowerOfTwo:Qx,floorPowerOfTwo:eM,setQuaternionFromProperEuler:tM,normalize:mt,denormalize:jn};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,i,r,s,o,a,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],m=r[0],p=r[3],_=r[6],b=r[1],y=r[4],M=r[7],w=r[2],P=r[5],A=r[8];return s[0]=o*m+a*b+l*w,s[3]=o*p+a*y+l*P,s[6]=o*_+a*M+l*A,s[1]=c*m+u*b+h*w,s[4]=c*p+u*y+h*P,s[7]=c*_+u*M+h*A,s[2]=d*m+f*b+g*w,s[5]=d*p+f*y+g*P,s[8]=d*_+f*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(r*c-u*i)*m,e[2]=(a*i-r*o)*m,e[3]=d*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=f*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bu.makeScale(e,t)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,t){return this.premultiply(bu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new Ue;function ip(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function so(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nM(){const n=so("canvas");return n.style.display="block",n}const rp={};function Ra(n){n in rp||(rp[n]=!0,console.warn(n))}function iM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function rM(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sM(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sp=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),op=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oo={[Zt]:{transfer:Ea,primaries:Ta,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[_t]:{transfer:bt,primaries:Ta,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ba]:{transfer:Ea,primaries:wa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(op),fromReference:n=>n.applyMatrix3(sp)},[xu]:{transfer:bt,primaries:wa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(op),fromReference:n=>n.applyMatrix3(sp).convertLinearToSRGB()}},oM=new Set([Zt,ba]),Xe={enabled:!0,_workingColorSpace:Zt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!oM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=oo[e].toReference,r=oo[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return oo[n].primaries},getTransfer:function(n){return n===$i?Ea:oo[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(oo[e].luminanceCoefficients)}};function Qr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let es;class aM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=so("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=so("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qr(t[i]/255)*255):t[i]=Qr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lM=0;class ap{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tu(r[o].image)):s.push(Tu(r[o]))}else s=Tu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Tu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?aM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cM=0;class Wt extends mr{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=si,r=si,s=wn,o=Mi,a=On,l=Si,c=Wt.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Xn(),this.name="",this.source=new ap(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wi:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wi:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=zf,Wt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,i=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],m=l[2],p=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(f+1)/2,w=(_+1)/2,P=(u+d)/4,A=(h+m)/4,U=(g+p)/4;return y>M&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=P/i,s=A/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=P/r,s=U/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=A/s,r=U/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-m)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uM extends mr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ap(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends uM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class lp extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hM extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class De{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==d||c!==f||u!==g){let p=1-a;const _=l*d+c*f+u*g+h*m,b=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const w=Math.sqrt(y),P=Math.atan2(w,_*b);p=Math.sin(p*P)/w,a=Math.sin(a*P)/w}const M=a*b;if(l=l*p+d*M,c=c*p+f*M,u=u*p+g*M,h=h*p+m*M,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wu=new N,cp=new De;class Ei{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Pa.subVectors(this.max,ao),ts.subVectors(e.a,ao),ns.subVectors(e.b,ao),is.subVectors(e.c,ao),Xi.subVectors(ns,ts),ji.subVectors(is,ns),_r.subVectors(ts,is);let t=[0,-Xi.z,Xi.y,0,-ji.z,ji.y,0,-_r.z,_r.y,Xi.z,0,-Xi.x,ji.z,0,-ji.x,_r.z,0,-_r.x,-Xi.y,Xi.x,0,-ji.y,ji.x,0,-_r.y,_r.x,0];return!Au(t,ts,ns,is,Pa)||(t=[1,0,0,0,1,0,0,0,1],!Au(t,ts,ns,is,Pa))?!1:(Ia.crossVectors(Xi,ji),t=[Ia.x,Ia.y,Ia.z],Au(t,ts,ns,is,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new N,new N,new N,new N,new N,new N,new N,new N],qn=new N,Ca=new Ei,ts=new N,ns=new N,is=new N,Xi=new N,ji=new N,_r=new N,ao=new N,Pa=new N,Ia=new N,vr=new N;function Au(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){vr.fromArray(n,s);const a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const dM=new Ei,lo=new N,Ru=new N;class oi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Ru)),this.expandByPoint(lo.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new N,Cu=new N,La=new N,qi=new N,Pu=new N,Da=new N,Iu=new N;class Na{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Cu.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Cu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(La),a=qi.dot(this.direction),l=-qi.dot(La),c=qi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const m=1/u;h*=m,d*=m,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Cu).addScaledVector(La,d),f}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,r,s){Pu.subVectors(t,e),Da.subVectors(i,e),Iu.crossVectors(Pu,Da);let o=this.direction.dot(Iu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot(Da.crossVectors(qi,Da));if(l<0)return null;const c=a*this.direction.dot(Pu.cross(qi));if(c<0||l+c>o)return null;const u=-a*qi.dot(Iu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(e,t,i,r,s,o,a,l,c,u,h,d,f,g,m,p){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,d,f,g,m,p)}set(e,t,i,r,s,o,a,l,c,u,h,d,f,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=f,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,m=c*h;t[0]=d+m*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,m=c*h;t[0]=d-m*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+m,t[1]=l*h,t[5]=m*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-m*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+m,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fM,e,pM)}lookAt(e,t,i){const r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Yi.crossVectors(i,An),Yi.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Yi.crossVectors(i,An)),Yi.normalize(),Oa.crossVectors(An,Yi),r[0]=Yi.x,r[4]=Oa.x,r[8]=An.x,r[1]=Yi.y,r[5]=Oa.y,r[9]=An.y,r[2]=Yi.z,r[6]=Oa.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],m=i[6],p=i[10],_=i[14],b=i[3],y=i[7],M=i[11],w=i[15],P=r[0],A=r[4],U=r[8],Y=r[12],v=r[1],S=r[5],B=r[9],T=r[13],E=r[2],O=r[6],R=r[10],F=r[14],k=r[3],J=r[7],L=r[11],V=r[15];return s[0]=o*P+a*v+l*E+c*k,s[4]=o*A+a*S+l*O+c*J,s[8]=o*U+a*B+l*R+c*L,s[12]=o*Y+a*T+l*F+c*V,s[1]=u*P+h*v+d*E+f*k,s[5]=u*A+h*S+d*O+f*J,s[9]=u*U+h*B+d*R+f*L,s[13]=u*Y+h*T+d*F+f*V,s[2]=g*P+m*v+p*E+_*k,s[6]=g*A+m*S+p*O+_*J,s[10]=g*U+m*B+p*R+_*L,s[14]=g*Y+m*T+p*F+_*V,s[3]=b*P+y*v+M*E+w*k,s[7]=b*A+y*S+M*O+w*J,s[11]=b*U+y*B+M*R+w*L,s[15]=b*Y+y*T+M*F+w*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*f-i*l*f)+m*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*u-s*l*u)+p*(+t*c*h-t*a*f-s*o*h+i*o*f+s*a*u-i*c*u)+_*(-r*a*u-t*l*h+t*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],m=e[13],p=e[14],_=e[15],b=h*p*c-m*d*c+m*l*f-a*p*f-h*l*_+a*d*_,y=g*d*c-u*p*c-g*l*f+o*p*f+u*l*_-o*d*_,M=u*m*c-g*h*c+g*a*f-o*m*f-u*a*_+o*h*_,w=g*h*l-u*m*l-g*a*d+o*m*d+u*a*p-o*h*p,P=t*b+i*y+r*M+s*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=b*A,e[1]=(m*d*s-h*p*s-m*r*f+i*p*f+h*r*_-i*d*_)*A,e[2]=(a*p*s-m*l*s+m*r*c-i*p*c-a*r*_+i*l*_)*A,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*f-i*l*f)*A,e[4]=y*A,e[5]=(u*p*s-g*d*s+g*r*f-t*p*f-u*r*_+t*d*_)*A,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*_-t*l*_)*A,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*f+t*l*f)*A,e[8]=M*A,e[9]=(g*h*s-u*m*s-g*i*f+t*m*f+u*i*_-t*h*_)*A,e[10]=(o*m*s-g*a*s+g*i*c-t*m*c-o*i*_+t*a*_)*A,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*f-t*a*f)*A,e[12]=w*A,e[13]=(u*m*r-g*h*r+g*i*d-t*m*d-u*i*p+t*h*p)*A,e[14]=(g*a*r-o*m*r-g*i*l+t*m*l+o*i*p-t*a*p)*A,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,g=s*h,m=o*u,p=o*h,_=a*h,b=l*c,y=l*u,M=l*h,w=i.x,P=i.y,A=i.z;return r[0]=(1-(m+_))*w,r[1]=(f+M)*w,r[2]=(g-y)*w,r[3]=0,r[4]=(f-M)*P,r[5]=(1-(d+_))*P,r[6]=(p+b)*P,r[7]=0,r[8]=(g+y)*A,r[9]=(p-b)*A,r[10]=(1-(d+m))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const c=1/s,u=1/o,h=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,t.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=bi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(a===bi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Aa)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=bi){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*c,f=(i+r)*u;let g,m;if(a===bi)g=(o+s)*h,m=-2*h;else if(a===Aa)g=s*h,m=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const rs=new N,Yn=new _e,fM=new N(0,0,0),pM=new N(1,1,1),Yi=new N,Oa=new N,An=new N,up=new _e,hp=new De;class Lt{constructor(e=0,t=0,i=0,r=Lt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(up,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hp.setFromEuler(this),this.setFromQuaternion(hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lt.DEFAULT_ORDER="XYZ";class dp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mM=0;const fp=new N,ss=new De,Ai=new _e,Ua=new N,co=new N,gM=new N,_M=new De,pp=new N(1,0,0),mp=new N(0,1,0),gp=new N(0,0,1),_p={type:"added"},vM={type:"removed"},os={type:"childadded",child:null},Lu={type:"childremoved",child:null};class lt extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new N,t=new Lt,i=new De,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _e},normalMatrix:{value:new Ue}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(pp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,t){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ua.copy(e):Ua.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(co,Ua,this.up):Ai.lookAt(Ua,co,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(Ai),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_p),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vM),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_p),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,gM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,_M,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}lt.DEFAULT_UP=new N(0,1,0),lt.DEFAULT_MATRIX_AUTO_UPDATE=!0,lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new N,Ri=new N,Du=new N,Ci=new N,as=new N,ls=new N,vp=new N,Nu=new N,Ou=new N,Uu=new N,Fu=new tt,Bu=new tt,ku=new tt;class Zn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kn.subVectors(e,t),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Kn.subVectors(r,t),Ri.subVectors(i,t),Du.subVectors(e,t);const o=Kn.dot(Kn),a=Kn.dot(Ri),l=Kn.dot(Du),c=Ri.dot(Ri),u=Ri.dot(Du),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Fu.setScalar(0),Bu.setScalar(0),ku.setScalar(0),Fu.fromBufferAttribute(e,t),Bu.fromBufferAttribute(e,i),ku.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Fu,s.x),o.addScaledVector(Bu,s.y),o.addScaledVector(ku,s.z),o}static isFrontFacing(e,t,i,r){return Kn.subVectors(i,t),Ri.subVectors(e,t),Kn.cross(Ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Kn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;as.subVectors(r,i),ls.subVectors(s,i),Nu.subVectors(e,i);const l=as.dot(Nu),c=ls.dot(Nu);if(l<=0&&c<=0)return t.copy(i);Ou.subVectors(e,r);const u=as.dot(Ou),h=ls.dot(Ou);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(as,o);Uu.subVectors(e,s);const f=as.dot(Uu),g=ls.dot(Uu);if(g>=0&&f<=g)return t.copy(s);const m=f*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ls,a);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return vp.subVectors(s,r),a=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(vp,a);const _=1/(p+m+d);return o=m*_,a=d*_,t.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Vu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Me{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Xe.workingColorSpace){if(e=Su(e,1),t=Yt(t,0,1),i=Yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Vu(o,s,e+1/3),this.g=Vu(o,s,e),this.b=Vu(o,s,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=_t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const i=yp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=Eu(e.r),this.g=Eu(e.g),this.b=Eu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Xe.fromWorkingColorSpace(nn.copy(this),e),Math.round(Yt(nn.r*255,0,255))*65536+Math.round(Yt(nn.g*255,0,255))*256+Math.round(Yt(nn.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(nn.copy(this),t);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=_t){Xe.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,r=nn.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Fa);const i=ro(Ki.h,Fa.h,t),r=ro(Ki.s,Fa.s,t),s=ro(Ki.l,Fa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Me;Me.NAMES=yp;let yM=0;class Rn extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Hr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rc&&(i.blendSrc=this.blendSrc),this.blendDst!==Cc&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pi extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new N,Ba=new Ge;class ot{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mu,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mu&&(e.usage=this.usage),e}}class zu extends ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xp extends ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Jt extends ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xM=0;const Un=new _e,Hu=new lt,cs=new N,Cn=new Ei,uo=new Ei,Kt=new N;class Dt extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ip(e)?xp:zu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return Hu.lookAt(e),Hu.updateMatrix(),this.applyMatrix4(Hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Cn.min,uo.min),Cn.expandByPoint(Kt),Kt.addVectors(Cn.max,uo.max),Cn.expandByPoint(Kt)):(Cn.expandByPoint(uo.min),Cn.expandByPoint(uo.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Kt.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),Kt.add(cs)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new N,l[U]=new N;const c=new N,u=new N,h=new N,d=new Ge,f=new Ge,g=new Ge,m=new N,p=new N;function _(U,Y,v){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,Y),h.fromBufferAttribute(i,v),d.fromBufferAttribute(s,U),f.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(m.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(S),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(S),a[U].add(m),a[Y].add(m),a[v].add(m),l[U].add(p),l[Y].add(p),l[v].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,Y=b.length;U<Y;++U){const v=b[U],S=v.start,B=v.count;for(let T=S,E=S+B;T<E;T+=3)_(e.getX(T+0),e.getX(T+1),e.getX(T+2))}const y=new N,M=new N,w=new N,P=new N;function A(U){w.fromBufferAttribute(r,U),P.copy(w);const Y=a[U];y.copy(Y),y.sub(w.multiplyScalar(w.dot(Y))).normalize(),M.crossVectors(P,Y);const S=M.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,S)}for(let U=0,Y=b.length;U<Y;++U){const v=b[U],S=v.start,B=v.count;for(let T=S,E=S+B;T<E;T+=3)A(e.getX(T+0)),A(e.getX(T+1)),A(e.getX(T+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),m=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*u;for(let _=0;_<u;_++)d[g++]=c[f++]}return new ot(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mp=new _e,yr=new Na,ka=new oi,Sp=new N,Va=new N,za=new N,Ha=new N,Gu=new N,Ga=new N,bp=new N,Wa=new N;class rn extends lt{constructor(e=new Dt,t=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ga.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Gu.fromBufferAttribute(h,e),o?Ga.addScaledVector(Gu,u):Ga.addScaledVector(Gu.sub(t),u))}t.add(Ga)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(ka.containsPoint(yr.origin)===!1&&(yr.intersectSphere(ka,Sp)===null||yr.origin.distanceToSquared(Sp)>(e.far-e.near)**2))&&(Mp.copy(s).invert(),yr.copy(e.ray).applyMatrix4(Mp),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,m=d.length;g<m;g++){const p=d[g],_=o[p.materialIndex],b=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=b,w=y;M<w;M+=3){const P=a.getX(M),A=a.getX(M+1),U=a.getX(M+2);r=$a(this,_,e,i,c,u,h,P,A,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let p=g,_=m;p<_;p+=3){const b=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);r=$a(this,o,e,i,c,u,h,b,y,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,m=d.length;g<m;g++){const p=d[g],_=o[p.materialIndex],b=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=b,w=y;M<w;M+=3){const P=M,A=M+1,U=M+2;r=$a(this,_,e,i,c,u,h,P,A,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let p=g,_=m;p<_;p+=3){const b=p,y=p+1,M=p+2;r=$a(this,o,e,i,c,u,h,b,y,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function MM(n,e,t,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xi,a),l===null)return null;Wa.copy(a),Wa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:n}}function $a(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Va),n.getVertexPosition(l,za),n.getVertexPosition(c,Ha);const u=MM(n,e,t,i,Va,za,Ha,bp);if(u){const h=new N;Zn.getBarycoord(bp,Va,za,Ha,h),r&&(u.uv=Zn.getInterpolatedAttribute(r,a,l,c,h,new Ge)),s&&(u.uv1=Zn.getInterpolatedAttribute(s,a,l,c,h,new Ge)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Zn.getNormal(Va,za,Ha,d.normal),u.face=d,u.barycoord=h}return u}class ho extends Dt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(h,2));function g(m,p,_,b,y,M,w,P,A,U,Y){const v=M/A,S=w/U,B=M/2,T=w/2,E=P/2,O=A+1,R=U+1;let F=0,k=0;const J=new N;for(let L=0;L<R;L++){const V=L*S-T;for(let K=0;K<O;K++){const ee=K*v-B;J[m]=ee*b,J[p]=V*y,J[_]=E,c.push(J.x,J.y,J.z),J[m]=0,J[p]=0,J[_]=P>0?1:-1,u.push(J.x,J.y,J.z),h.push(K/A),h.push(1-L/U),F+=1}}for(let L=0;L<U;L++)for(let V=0;V<A;V++){const K=d+V+O*L,ee=d+V+O*(L+1),G=d+(V+1)+O*(L+1),$=d+(V+1)+O*L;l.push(K,ee,$),l.push(ee,G,$),k+=6}a.addGroup(f,k,Y),f+=k,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=us(n[t]);for(const r in i)e[r]=i[r]}return e}function SM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ep(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Tp={clone:us,merge:dn};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=EM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=SM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wp extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new N,Ap=new Ge,Rp=new Ge;class fn extends wp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,Ap,Rp),t.subVectors(Rp,Ap)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,ds=1;class TM extends lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(hs,ds,e,t);r.layers=this.layers,this.add(r);const s=new fn(hs,ds,e,t);s.layers=this.layers,this.add(s);const o=new fn(hs,ds,e,t);o.layers=this.layers,this.add(o);const a=new fn(hs,ds,e,t);a.layers=this.layers,this.add(a);const l=new fn(hs,ds,e,t);l.layers=this.layers,this.add(l);const c=new fn(hs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cp extends Wt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wM extends gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ho(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Hi});s.uniforms.tEquirect.value=t;const o=new rn(r,s),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=wn),new TM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Wu=new N,AM=new N,RM=new Ue;class xr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wu.subVectors(i,t).cross(AM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||RM.getNormalMatrix(e),r=this.coplanarPoint(Wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new oi,Xa=new N;class $u{constructor(e=new xr,t=new xr,i=new xr,r=new xr,s=new xr,o=new xr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],m=r[10],p=r[11],_=r[12],b=r[13],y=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,p-f,M-_).normalize(),i[1].setComponents(l+s,d+c,p+f,M+_).normalize(),i[2].setComponents(l+o,d+u,p+g,M+b).normalize(),i[3].setComponents(l-o,d-u,p-g,M-b).normalize(),i[4].setComponents(l-a,d-h,p-m,M-y).normalize(),t===bi)i[5].setComponents(l+a,d+h,p+m,M+y).normalize();else if(t===Aa)i[5].setComponents(a,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xa.x=r.normal.x>0?e.max.x:e.min.x,Xa.y=r.normal.y>0?e.max.y:e.min.y,Xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pp(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function CM(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],m=h[f];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++d,h[d]=m)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const m=h[f];n.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ja extends Dt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],m=[],p=[];for(let _=0;_<u;_++){const b=_*d-o;for(let y=0;y<c;y++){const M=y*h-s;g.push(M,-b,0),m.push(0,0,1),p.push(y/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const y=b+c*_,M=b+c*(_+1),w=b+1+c*(_+1),P=b+1+c*_;f.push(y,M,P),f.push(M,w,P)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(m,3)),this.setAttribute("uv",new Jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var PM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IM=`#ifdef USE_ALPHAHASH
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
#endif`,LM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UM=`#ifdef USE_AOMAP
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
#endif`,FM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BM=`#ifdef USE_BATCHING
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
#endif`,kM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GM=`#ifdef USE_IRIDESCENCE
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
#endif`,WM=`#ifdef USE_BUMPMAP
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
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,QM=`#define PI 3.141592653589793
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
} // validated`,eS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tS=`vec3 transformedNormal = objectNormal;
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
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oS="gl_FragColor = linearToOutputTexel( gl_FragColor );",aS=`
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
}`,lS=`#ifdef USE_ENVMAP
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
#endif`,cS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uS=`#ifdef USE_ENVMAP
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
#endif`,hS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
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
#endif`,fS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_S=`#ifdef USE_GRADIENTMAP
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
}`,vS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MS=`uniform bool receiveShadow;
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
#endif`,SS=`#ifdef USE_ENVMAP
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
#endif`,bS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ES=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AS=`PhysicalMaterial material;
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
#endif`,RS=`struct PhysicalMaterial {
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
}`,CS=`
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
#endif`,PS=`#if defined( RE_IndirectDiffuse )
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
#endif`,IS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,US=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kS=`#if defined( USE_POINTS_UV )
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
#endif`,VS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$S=`#ifdef USE_MORPHTARGETS
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
#endif`,XS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JS=`#ifdef USE_NORMALMAP
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
#endif`,QS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ob=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pb=`float getShadowMask() {
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
}`,mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gb=`#ifdef USE_SKINNING
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
#endif`,_b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vb=`#ifdef USE_SKINNING
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
#endif`,yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bb=`#ifdef USE_TRANSMISSION
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
#endif`,Eb=`#ifdef USE_TRANSMISSION
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const je={alphahash_fragment:PM,alphahash_pars_fragment:IM,alphamap_fragment:LM,alphamap_pars_fragment:DM,alphatest_fragment:NM,alphatest_pars_fragment:OM,aomap_fragment:UM,aomap_pars_fragment:FM,batching_pars_vertex:BM,batching_vertex:kM,begin_vertex:VM,beginnormal_vertex:zM,bsdfs:HM,iridescence_fragment:GM,bumpmap_pars_fragment:WM,clipping_planes_fragment:$M,clipping_planes_pars_fragment:XM,clipping_planes_pars_vertex:jM,clipping_planes_vertex:qM,color_fragment:YM,color_pars_fragment:KM,color_pars_vertex:ZM,color_vertex:JM,common:QM,cube_uv_reflection_fragment:eS,defaultnormal_vertex:tS,displacementmap_pars_vertex:nS,displacementmap_vertex:iS,emissivemap_fragment:rS,emissivemap_pars_fragment:sS,colorspace_fragment:oS,colorspace_pars_fragment:aS,envmap_fragment:lS,envmap_common_pars_fragment:cS,envmap_pars_fragment:uS,envmap_pars_vertex:hS,envmap_physical_pars_fragment:SS,envmap_vertex:dS,fog_vertex:fS,fog_pars_vertex:pS,fog_fragment:mS,fog_pars_fragment:gS,gradientmap_pars_fragment:_S,lightmap_pars_fragment:vS,lights_lambert_fragment:yS,lights_lambert_pars_fragment:xS,lights_pars_begin:MS,lights_toon_fragment:bS,lights_toon_pars_fragment:ES,lights_phong_fragment:TS,lights_phong_pars_fragment:wS,lights_physical_fragment:AS,lights_physical_pars_fragment:RS,lights_fragment_begin:CS,lights_fragment_maps:PS,lights_fragment_end:IS,logdepthbuf_fragment:LS,logdepthbuf_pars_fragment:DS,logdepthbuf_pars_vertex:NS,logdepthbuf_vertex:OS,map_fragment:US,map_pars_fragment:FS,map_particle_fragment:BS,map_particle_pars_fragment:kS,metalnessmap_fragment:VS,metalnessmap_pars_fragment:zS,morphinstance_vertex:HS,morphcolor_vertex:GS,morphnormal_vertex:WS,morphtarget_pars_vertex:$S,morphtarget_vertex:XS,normal_fragment_begin:jS,normal_fragment_maps:qS,normal_pars_fragment:YS,normal_pars_vertex:KS,normal_vertex:ZS,normalmap_pars_fragment:JS,clearcoat_normal_fragment_begin:QS,clearcoat_normal_fragment_maps:eb,clearcoat_pars_fragment:tb,iridescence_pars_fragment:nb,opaque_fragment:ib,packing:rb,premultiplied_alpha_fragment:sb,project_vertex:ob,dithering_fragment:ab,dithering_pars_fragment:lb,roughnessmap_fragment:cb,roughnessmap_pars_fragment:ub,shadowmap_pars_fragment:hb,shadowmap_pars_vertex:db,shadowmap_vertex:fb,shadowmask_pars_fragment:pb,skinbase_vertex:mb,skinning_pars_vertex:gb,skinning_vertex:_b,skinnormal_vertex:vb,specularmap_fragment:yb,specularmap_pars_fragment:xb,tonemapping_fragment:Mb,tonemapping_pars_fragment:Sb,transmission_fragment:bb,transmission_pars_fragment:Eb,uv_pars_fragment:Tb,uv_pars_vertex:wb,uv_vertex:Ab,worldpos_vertex:Rb,background_vert:`varying vec2 vUv;
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
}`},me={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},ai={basic:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Me(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:dn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:dn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Me(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:dn([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:dn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:dn([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:dn([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:dn([me.common,me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:dn([me.lights,me.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ai.physical={uniforms:dn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const qa={r:0,b:0,g:0},Sr=new Lt,Cb=new _e;function Pb(n,e,t,i,r,s,o){const a=new Me(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function m(b){let y=!1;const M=g(b);M===null?_(a,l):M&&M.isColor&&(_(M,1),y=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===pa)?(u===void 0&&(u=new rn(new ho(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:us(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Sr.copy(y.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(Sr)),u.material.toneMapped=Xe.getTransfer(M.colorSpace)!==bt,(h!==M||d!==M.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new rn(new ja(2,2),new Ii({name:"BackgroundMaterial",uniforms:us(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(M.colorSpace)!==bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function _(b,y){b.getRGB(qa,Ep(n)),i.buffers.color.setClear(qa.r,qa.g,qa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,_(a,l)},render:m,addToRenderList:p}}function Ib(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(v,S,B,T,E){let O=!1;const R=h(T,B,S);s!==R&&(s=R,c(s.object)),O=f(v,T,B,E),O&&g(v,T,B,E),E!==null&&e.update(E,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,M(v,S,B,T),E!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,S,B){const T=B.wireframe===!0;let E=i[v.id];E===void 0&&(E={},i[v.id]=E);let O=E[S.id];O===void 0&&(O={},E[S.id]=O);let R=O[T];return R===void 0&&(R=d(l()),O[T]=R),R}function d(v){const S=[],B=[],T=[];for(let E=0;E<t;E++)S[E]=0,B[E]=0,T[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:B,attributeDivisors:T,object:v,attributes:{},index:null}}function f(v,S,B,T){const E=s.attributes,O=S.attributes;let R=0;const F=B.getAttributes();for(const k in F)if(F[k].location>=0){const L=E[k];let V=O[k];if(V===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(V=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(V=v.instanceColor)),L===void 0||L.attribute!==V||V&&L.data!==V.data)return!0;R++}return s.attributesNum!==R||s.index!==T}function g(v,S,B,T){const E={},O=S.attributes;let R=0;const F=B.getAttributes();for(const k in F)if(F[k].location>=0){let L=O[k];L===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(L=v.instanceColor));const V={};V.attribute=L,L&&L.data&&(V.data=L.data),E[k]=V,R++}s.attributes=E,s.attributesNum=R,s.index=T}function m(){const v=s.newAttributes;for(let S=0,B=v.length;S<B;S++)v[S]=0}function p(v){_(v,0)}function _(v,S){const B=s.newAttributes,T=s.enabledAttributes,E=s.attributeDivisors;B[v]=1,T[v]===0&&(n.enableVertexAttribArray(v),T[v]=1),E[v]!==S&&(n.vertexAttribDivisor(v,S),E[v]=S)}function b(){const v=s.newAttributes,S=s.enabledAttributes;for(let B=0,T=S.length;B<T;B++)S[B]!==v[B]&&(n.disableVertexAttribArray(B),S[B]=0)}function y(v,S,B,T,E,O,R){R===!0?n.vertexAttribIPointer(v,S,B,E,O):n.vertexAttribPointer(v,S,B,T,E,O)}function M(v,S,B,T){m();const E=T.attributes,O=B.getAttributes(),R=S.defaultAttributeValues;for(const F in O){const k=O[F];if(k.location>=0){let J=E[F];if(J===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const L=J.normalized,V=J.itemSize,K=e.get(J);if(K===void 0)continue;const ee=K.buffer,G=K.type,$=K.bytesPerElement,se=G===n.INT||G===n.UNSIGNED_INT||J.gpuType===Bc;if(J.isInterleavedBufferAttribute){const ie=J.data,ae=ie.stride,de=J.offset;if(ie.isInstancedInterleavedBuffer){for(let ue=0;ue<k.locationSize;ue++)_(k.location+ue,ie.meshPerAttribute);v.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ue=0;ue<k.locationSize;ue++)p(k.location+ue);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let ue=0;ue<k.locationSize;ue++)y(k.location+ue,V/k.locationSize,G,L,ae*$,(de+V/k.locationSize*ue)*$,se)}else{if(J.isInstancedBufferAttribute){for(let ie=0;ie<k.locationSize;ie++)_(k.location+ie,J.meshPerAttribute);v.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ie=0;ie<k.locationSize;ie++)p(k.location+ie);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let ie=0;ie<k.locationSize;ie++)y(k.location+ie,V/k.locationSize,G,L,V*$,V/k.locationSize*ie*$,se)}}else if(R!==void 0){const L=R[F];if(L!==void 0)switch(L.length){case 2:n.vertexAttrib2fv(k.location,L);break;case 3:n.vertexAttrib3fv(k.location,L);break;case 4:n.vertexAttrib4fv(k.location,L);break;default:n.vertexAttrib1fv(k.location,L)}}}}b()}function w(){U();for(const v in i){const S=i[v];for(const B in S){const T=S[B];for(const E in T)u(T[E].object),delete T[E];delete S[B]}delete i[v]}}function P(v){if(i[v.id]===void 0)return;const S=i[v.id];for(const B in S){const T=S[B];for(const E in T)u(T[E].object),delete T[E];delete S[B]}delete i[v.id]}function A(v){for(const S in i){const B=i[S];if(B[v.id]===void 0)continue;const T=B[v.id];for(const E in T)u(T[E].object),delete T[E];delete B[v.id]}}function U(){Y(),o=!0,s!==r&&(s=r,c(s.object))}function Y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:Y,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:p,disableUnusedAttributes:b}}function Lb(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let m=0;m<h;m++)g+=u[m];for(let m=0;m<d.length;m++)t.update(g,i,d[m])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Db(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==On&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const U=A===Qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Si&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==$n&&!U)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:w,maxSamples:P}}function Nb(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new xr,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,_=n.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,y=b*4;let M=_.clippingState||null;l.value=M,M=u(g,d,y,f);for(let w=0;w!==y;++w)M[w]=t[w];_.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const _=f+m*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,M=f;y!==m;++y,M+=4)o.copy(h[y]).applyMatrix4(b,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Ob(n){let e=new WeakMap;function t(o,a){return a===fa?o.mapping=Wr:a===Fc&&(o.mapping=$r),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fa||a===Fc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wM(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ya extends wp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fs=4,Ip=[.125,.215,.35,.446,.526,.582],br=20,Xu=new Ya,Lp=new Me;let ju=null,qu=0,Yu=0,Ku=!1;const Er=(1+Math.sqrt(5))/2,ps=1/Er,Dp=[new N(-Er,ps,0),new N(Er,ps,0),new N(-ps,0,Er),new N(ps,0,Er),new N(0,Er,-ps),new N(0,Er,ps),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Np{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ju=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,qu,Yu),this._renderer.xr.enabled=Ku,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Qs,format:On,colorSpace:Zt,depthBuffer:!1},r=Op(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ub(s)),this._blurMaterial=Fb(s,e,t)}return r}_compileMaterial(e){const t=new rn(this._lodPlanes[0],e);this._renderer.compile(t,Xu)}_sceneToCubeUV(e,t,i,r){const a=new fn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Lp),u.toneMapping=Gi,u.autoClear=!1;const f=new Pi({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new rn(new ho,f);let m=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,m=!0):(f.color.copy(Lp),m=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const y=this._cubeSize;Ka(r,b*y,_>2?y:0,y,y),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Wr||e.mapping===$r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Up());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new rn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ka(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Dp[(r-s-1)%Dp.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rn(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*br-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):br;p>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${br}`);const _=[];let b=0;for(let A=0;A<br;++A){const U=A/m,Y=Math.exp(-U*U/2);_.push(Y),A===0?b+=Y:A<p&&(b+=2*Y)}for(let A=0;A<_.length;A++)_[A]=_[A]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const M=this._sizeLods[r],w=3*M*(r>y-fs?r-y+fs:0),P=4*(this._cubeSize-M);Ka(t,w,P,3*M,2*M),l.setRenderTarget(t),l.render(h,Xu)}}function Ub(n){const e=[],t=[],i=[];let r=n;const s=n-fs+1+Ip.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-fs?l=Ip[o-n+fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,m=3,p=2,_=1,b=new Float32Array(m*g*f),y=new Float32Array(p*g*f),M=new Float32Array(_*g*f);for(let P=0;P<f;P++){const A=P%3*2/3-1,U=P>2?0:-1,Y=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];b.set(Y,m*g*P),y.set(d,p*g*P);const v=[P,P,P,P,P,P];M.set(v,_*g*P)}const w=new Dt;w.setAttribute("position",new ot(b,m)),w.setAttribute("uv",new ot(y,p)),w.setAttribute("faceIndex",new ot(M,_)),e.push(w),r>fs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Op(n,e,t){const i=new gr(n,e,t);return i.texture.mapping=pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ka(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Fb(n,e,t){const i=new Float32Array(br),r=new N(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Up(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Fp(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Zu(){return`

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
	`}function Bb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===fa||l===Fc,u=l===Wr||l===$r;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Np(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Np(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function kb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ra("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Vb(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const m=d.morphAttributes[g];for(let p=0,_=m.length;p<_;p++)e.remove(m[p])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const m=f[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let m=0;if(f!==null){const b=f.array;m=f.version;for(let y=0,M=b.length;y<M;y+=3){const w=b[y+0],P=b[y+1],A=b[y+2];d.push(w,P,P,A,A,w)}}else if(g!==void 0){const b=g.array;m=g.version;for(let y=0,M=b.length/3-1;y<M;y+=3){const w=y+0,P=y+1,A=y+2;d.push(w,P,P,A,A,w)}}else return;const p=new(ip(d)?xp:zu)(d,1);p.version=m;const _=s.get(h);_&&e.remove(_),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function zb(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*o,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_];t.update(p,i,1)}function h(d,f,g,m){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d.length;_++)c(d[_]/o,f[_],m[_]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,m,0,g);let _=0;for(let b=0;b<g;b++)_+=f[b];for(let b=0;b<m.length;b++)t.update(_,i,m[b])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Hb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Gb(n,e,t){const i=new WeakMap,r=new tt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let Y=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",Y)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let M=a.attributes.position.count*y,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const P=new Float32Array(M*w*4*h),A=new lp(P,M,w,h);A.type=$n,A.needsUpdate=!0;const U=y*4;for(let v=0;v<h;v++){const S=p[v],B=_[v],T=b[v],E=M*w*4*v;for(let O=0;O<S.count;O++){const R=O*U;f===!0&&(r.fromBufferAttribute(S,O),P[E+R+0]=r.x,P[E+R+1]=r.y,P[E+R+2]=r.z,P[E+R+3]=0),g===!0&&(r.fromBufferAttribute(B,O),P[E+R+4]=r.x,P[E+R+5]=r.y,P[E+R+6]=r.z,P[E+R+7]=0),m===!0&&(r.fromBufferAttribute(T,O),P[E+R+8]=r.x,P[E+R+9]=r.y,P[E+R+10]=r.z,P[E+R+11]=T.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new Ge(M,w)},i.set(a,d),a.addEventListener("dispose",Y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Wb(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Bp extends Wt{constructor(e,t,i,r,s,o,a,l,c,u=jr){if(u!==jr&&u!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===jr&&(i=pr),i===void 0&&u===qr&&(i=Xr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kp=new Wt,Vp=new Bp(1,1),zp=new lp,Hp=new hM,Gp=new Cp,Wp=[],$p=[],Xp=new Float32Array(16),jp=new Float32Array(9),qp=new Float32Array(4);function ms(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Wp[r];if(s===void 0&&(s=new Float32Array(r),Wp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Za(n,e){let t=$p[e];t===void 0&&(t=new Int32Array(e),$p[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $b(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function Yb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,i))return;qp.set(i),n.uniformMatrix2fv(this.addr,!1,qp),Xt(t,i)}}function Kb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,i))return;jp.set(i),n.uniformMatrix3fv(this.addr,!1,jp),Xt(t,i)}}function Zb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,i))return;Xp.set(i),n.uniformMatrix4fv(this.addr,!1,Xp),Xt(t,i)}}function Jb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function eE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function tE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function nE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function iE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function rE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function sE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function oE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Vp.compareFunction=ep,s=Vp):s=kp,t.setTexture2D(e||s,r)}function aE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hp,r)}function lE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Gp,r)}function cE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zp,r)}function uE(n){switch(n){case 5126:return $b;case 35664:return Xb;case 35665:return jb;case 35666:return qb;case 35674:return Yb;case 35675:return Kb;case 35676:return Zb;case 5124:case 35670:return Jb;case 35667:case 35671:return Qb;case 35668:case 35672:return eE;case 35669:case 35673:return tE;case 5125:return nE;case 36294:return iE;case 36295:return rE;case 36296:return sE;case 35678:case 36198:case 36298:case 36306:case 35682:return oE;case 35679:case 36299:case 36307:return aE;case 35680:case 36300:case 36308:case 36293:return lE;case 36289:case 36303:case 36311:case 36292:return cE}}function hE(n,e){n.uniform1fv(this.addr,e)}function dE(n,e){const t=ms(e,this.size,2);n.uniform2fv(this.addr,t)}function fE(n,e){const t=ms(e,this.size,3);n.uniform3fv(this.addr,t)}function pE(n,e){const t=ms(e,this.size,4);n.uniform4fv(this.addr,t)}function mE(n,e){const t=ms(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gE(n,e){const t=ms(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _E(n,e){const t=ms(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vE(n,e){n.uniform1iv(this.addr,e)}function yE(n,e){n.uniform2iv(this.addr,e)}function xE(n,e){n.uniform3iv(this.addr,e)}function ME(n,e){n.uniform4iv(this.addr,e)}function SE(n,e){n.uniform1uiv(this.addr,e)}function bE(n,e){n.uniform2uiv(this.addr,e)}function EE(n,e){n.uniform3uiv(this.addr,e)}function TE(n,e){n.uniform4uiv(this.addr,e)}function wE(n,e,t){const i=this.cache,r=e.length,s=Za(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||kp,s[o])}function AE(n,e,t){const i=this.cache,r=e.length,s=Za(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Hp,s[o])}function RE(n,e,t){const i=this.cache,r=e.length,s=Za(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Gp,s[o])}function CE(n,e,t){const i=this.cache,r=e.length,s=Za(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||zp,s[o])}function PE(n){switch(n){case 5126:return hE;case 35664:return dE;case 35665:return fE;case 35666:return pE;case 35674:return mE;case 35675:return gE;case 35676:return _E;case 5124:case 35670:return vE;case 35667:case 35671:return yE;case 35668:case 35672:return xE;case 35669:case 35673:return ME;case 5125:return SE;case 36294:return bE;case 36295:return EE;case 36296:return TE;case 35678:case 36198:case 36298:case 36306:case 35682:return wE;case 35679:case 36299:case 36307:return AE;case 35680:case 36300:case 36308:case 36293:return RE;case 36289:case 36303:case 36311:case 36292:return CE}}class IE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uE(t.type)}}class LE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PE(t.type)}}class DE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function Yp(n,e){n.seq.push(e),n.map[e.id]=e}function NE(n,e,t){const i=n.name,r=i.length;for(Ju.lastIndex=0;;){const s=Ju.exec(i),o=Ju.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yp(t,c===void 0?new IE(a,n,e):new LE(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new DE(a),Yp(t,h)),t=h}}}class Ja{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);NE(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Kp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const OE=37297;let UE=0;function FE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function BE(n){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(n);let i;switch(e===t?i="":e===wa&&t===Ta?i="LinearDisplayP3ToLinearSRGB":e===Ta&&t===wa&&(i="LinearSRGBToLinearDisplayP3"),n){case Zt:case ba:return[i,"LinearTransferOETF"];case _t:case xu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Zp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+FE(n.getShaderSource(e),o)}else return r}function kE(n,e){const t=BE(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function VE(n,e){let t;switch(e){case gx:t="Linear";break;case _x:t="Reinhard";break;case vx:t="Cineon";break;case yx:t="ACESFilmic";break;case Mx:t="AgX";break;case Sx:t="Neutral";break;case xx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qa=new N;function zE(){Xe.getLuminanceCoefficients(Qa);const n=Qa.x.toFixed(4),e=Qa.y.toFixed(4),t=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function GE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function WE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fo(n){return n!==""}function Jp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $E=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qu(n){return n.replace($E,jE)}const XE=new Map;function jE(n,e){let t=je[e];if(t===void 0){const i=XE.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qu(t)}const qE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function em(n){return n.replace(qE,YE)}function YE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function KE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function ZE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wr:case $r:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function QE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case da:e="ENVMAP_BLENDING_MULTIPLY";break;case px:e="ENVMAP_BLENDING_MIX";break;case mx:e="ENVMAP_BLENDING_ADD";break}return e}function eT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tT(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=KE(t),c=ZE(t),u=JE(t),h=QE(t),d=eT(t),f=HE(t),g=GE(s),m=r.createProgram();let p,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fo).join(`
`),p.length>0&&(p+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fo).join(`
`),_.length>0&&(_+=`
`)):(p=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),_=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?je.tonemapping_pars_fragment:"",t.toneMapping!==Gi?VE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,kE("linearToOutputTexel",t.outputColorSpace),zE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),o=Qu(o),o=Jp(o,t),o=Qp(o,t),a=Qu(a),a=Jp(a,t),a=Qp(a,t),o=em(o),a=em(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=b+p+o,M=b+_+a,w=Kp(r,r.VERTEX_SHADER,y),P=Kp(r,r.FRAGMENT_SHADER,M);r.attachShader(m,w),r.attachShader(m,P),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function A(S){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(m).trim(),T=r.getShaderInfoLog(w).trim(),E=r.getShaderInfoLog(P).trim();let O=!0,R=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,P);else{const F=Zp(r,w,"vertex"),k=Zp(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+B+`
`+F+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(T===""||E==="")&&(R=!1);R&&(S.diagnostics={runnable:O,programLog:B,vertexShader:{log:T,prefix:p},fragmentShader:{log:E,prefix:_}})}r.deleteShader(w),r.deleteShader(P),U=new Ja(r,m),Y=WE(r,m)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let Y;this.getAttributes=function(){return Y===void 0&&A(this),Y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(m,OE)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=P,this}let nT=0;class iT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rT(e),t.set(e,i)),i}}class rT{constructor(e){this.id=nT++,this.code=e,this.usedTimes=0}}function sT(n,e,t,i,r,s,o){const a=new dp,l=new iT,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,f=r.vertexTextures;let g=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,S,B,T,E){const O=T.fog,R=E.geometry,F=v.isMeshStandardMaterial?T.environment:null,k=(v.isMeshStandardMaterial?t:e).get(v.envMap||F),J=k&&k.mapping===pa?k.image.height:null,L=m[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const V=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,K=V!==void 0?V.length:0;let ee=0;R.morphAttributes.position!==void 0&&(ee=1),R.morphAttributes.normal!==void 0&&(ee=2),R.morphAttributes.color!==void 0&&(ee=3);let G,$,se,ie;if(L){const an=ai[L];G=an.vertexShader,$=an.fragmentShader}else G=v.vertexShader,$=v.fragmentShader,l.update(v),se=l.getVertexShaderID(v),ie=l.getFragmentShaderID(v);const ae=n.getRenderTarget(),de=E.isInstancedMesh===!0,ue=E.isBatchedMesh===!0,Se=!!v.map,re=!!v.matcap,z=!!k,Tt=!!v.aoMap,We=!!v.lightMap,Je=!!v.bumpMap,Oe=!!v.normalMap,rt=!!v.displacementMap,Fe=!!v.emissiveMap,D=!!v.metalnessMap,C=!!v.roughnessMap,H=v.anisotropy>0,le=v.clearcoat>0,he=v.dispersion>0,oe=v.iridescence>0,Ie=v.sheen>0,ge=v.transmission>0,Ee=H&&!!v.anisotropyMap,st=le&&!!v.clearcoatMap,fe=le&&!!v.clearcoatNormalMap,Te=le&&!!v.clearcoatRoughnessMap,Be=oe&&!!v.iridescenceMap,ke=oe&&!!v.iridescenceThicknessMap,we=Ie&&!!v.sheenColorMap,Qe=Ie&&!!v.sheenRoughnessMap,He=!!v.specularMap,xt=!!v.specularColorMap,W=!!v.specularIntensityMap,be=ge&&!!v.transmissionMap,te=ge&&!!v.thicknessMap,ce=!!v.gradientMap,ye=!!v.alphaMap,ve=v.alphaTest>0,Ke=!!v.alphaHash,Pt=!!v.extensions;let on=Gi;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(on=n.toneMapping);const nt={shaderID:L,shaderType:v.type,shaderName:v.name,vertexShader:G,fragmentShader:$,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:ie,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:ue,batchingColor:ue&&E._colorsTexture!==null,instancing:de,instancingColor:de&&E.instanceColor!==null,instancingMorph:de&&E.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Zt,alphaToCoverage:!!v.alphaToCoverage,map:Se,matcap:re,envMap:z,envMapMode:z&&k.mapping,envMapCubeUVHeight:J,aoMap:Tt,lightMap:We,bumpMap:Je,normalMap:Oe,displacementMap:f&&rt,emissiveMap:Fe,normalMapObjectSpace:Oe&&v.normalMapType===Ix,normalMapTangentSpace:Oe&&v.normalMapType===no,metalnessMap:D,roughnessMap:C,anisotropy:H,anisotropyMap:Ee,clearcoat:le,clearcoatMap:st,clearcoatNormalMap:fe,clearcoatRoughnessMap:Te,dispersion:he,iridescence:oe,iridescenceMap:Be,iridescenceThicknessMap:ke,sheen:Ie,sheenColorMap:we,sheenRoughnessMap:Qe,specularMap:He,specularColorMap:xt,specularIntensityMap:W,transmission:ge,transmissionMap:be,thicknessMap:te,gradientMap:ce,opaque:v.transparent===!1&&v.blending===Hr&&v.alphaToCoverage===!1,alphaMap:ye,alphaTest:ve,alphaHash:Ke,combine:v.combine,mapUv:Se&&p(v.map.channel),aoMapUv:Tt&&p(v.aoMap.channel),lightMapUv:We&&p(v.lightMap.channel),bumpMapUv:Je&&p(v.bumpMap.channel),normalMapUv:Oe&&p(v.normalMap.channel),displacementMapUv:rt&&p(v.displacementMap.channel),emissiveMapUv:Fe&&p(v.emissiveMap.channel),metalnessMapUv:D&&p(v.metalnessMap.channel),roughnessMapUv:C&&p(v.roughnessMap.channel),anisotropyMapUv:Ee&&p(v.anisotropyMap.channel),clearcoatMapUv:st&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:we&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&p(v.sheenRoughnessMap.channel),specularMapUv:He&&p(v.specularMap.channel),specularColorMapUv:xt&&p(v.specularColorMap.channel),specularIntensityMapUv:W&&p(v.specularIntensityMap.channel),transmissionMapUv:be&&p(v.transmissionMap.channel),thicknessMapUv:te&&p(v.thicknessMap.channel),alphaMapUv:ye&&p(v.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Oe||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!R.attributes.uv&&(Se||ye),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:E.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ee,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:on,decodeVideoTexture:Se&&v.map.isVideoTexture===!0&&Xe.getTransfer(v.map.colorSpace)===bt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Nn,flipSided:v.side===un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Pt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&v.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function b(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const B in v.defines)S.push(B),S.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(y(S,v),M(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),v.push(a.mask)}function w(v){const S=m[v.type];let B;if(S){const T=ai[S];B=Tp.clone(T.uniforms)}else B=v.uniforms;return B}function P(v,S){let B;for(let T=0,E=u.length;T<E;T++){const O=u[T];if(O.cacheKey===S){B=O,++B.usedTimes;break}}return B===void 0&&(B=new tT(n,S,v,s),u.push(B)),B}function A(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),v.destroy()}}function U(v){l.remove(v)}function Y(){l.dispose()}return{getParameters:_,getProgramCacheKey:b,getUniforms:w,acquireProgram:P,releaseProgram:A,releaseShaderCache:U,programs:u,dispose:Y}}function oT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function aT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function nm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function im(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,f,g,m,p){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},n[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=f,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=p),e++,_}function a(h,d,f,g,m,p){const _=o(h,d,f,g,m,p);f.transmission>0?i.push(_):f.transparent===!0?r.push(_):t.push(_)}function l(h,d,f,g,m,p){const _=o(h,d,f,g,m,p);f.transmission>0?i.unshift(_):f.transparent===!0?r.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||aT),i.length>1&&i.sort(d||nm),r.length>1&&r.sort(d||nm)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function lT(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new im,n.set(i,[o])):r>=s.length?(o=new im,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function cT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Me};break;case"SpotLight":t={position:new N,direction:new N,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function uT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let hT=0;function dT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fT(n){const e=new cT,t=uT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new _e,o=new _e;function a(c){let u=0,h=0,d=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let f=0,g=0,m=0,p=0,_=0,b=0,y=0,M=0,w=0,P=0,A=0;c.sort(dT);for(let Y=0,v=c.length;Y<v;Y++){const S=c[Y],B=S.color,T=S.intensity,E=S.distance,O=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=B.r*T,h+=B.g*T,d+=B.b*T;else if(S.isLightProbe){for(let R=0;R<9;R++)i.probe[R].addScaledVector(S.sh.coefficients[R],T);A++}else if(S.isDirectionalLight){const R=e.get(S);if(R.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const F=S.shadow,k=t.get(S);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=S.shadow.matrix,b++}i.directional[f]=R,f++}else if(S.isSpotLight){const R=e.get(S);R.position.setFromMatrixPosition(S.matrixWorld),R.color.copy(B).multiplyScalar(T),R.distance=E,R.coneCos=Math.cos(S.angle),R.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),R.decay=S.decay,i.spot[m]=R;const F=S.shadow;if(S.map&&(i.spotLightMap[w]=S.map,w++,F.updateMatrices(S),S.castShadow&&P++),i.spotLightMatrix[m]=F.matrix,S.castShadow){const k=t.get(S);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,i.spotShadow[m]=k,i.spotShadowMap[m]=O,M++}m++}else if(S.isRectAreaLight){const R=e.get(S);R.color.copy(B).multiplyScalar(T),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=R,p++}else if(S.isPointLight){const R=e.get(S);if(R.color.copy(S.color).multiplyScalar(S.intensity),R.distance=S.distance,R.decay=S.decay,S.castShadow){const F=S.shadow,k=t.get(S);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,k.shadowCameraNear=F.camera.near,k.shadowCameraFar=F.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=S.shadow.matrix,y++}i.point[g]=R,g++}else if(S.isHemisphereLight){const R=e.get(S);R.skyColor.copy(S.color).multiplyScalar(T),R.groundColor.copy(S.groundColor).multiplyScalar(T),i.hemi[_]=R,_++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==m||U.rectAreaLength!==p||U.hemiLength!==_||U.numDirectionalShadows!==b||U.numPointShadows!==y||U.numSpotShadows!==M||U.numSpotMaps!==w||U.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=m,i.rectArea.length=p,i.point.length=g,i.hemi.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+w-P,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,U.directionalLength=f,U.pointLength=g,U.spotLength=m,U.rectAreaLength=p,U.hemiLength=_,U.numDirectionalShadows=b,U.numPointShadows=y,U.numSpotShadows=M,U.numSpotMaps=w,U.numLightProbes=A,i.version=hT++)}function l(c,u){let h=0,d=0,f=0,g=0,m=0;const p=u.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){const y=c[_];if(y.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(y.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function rm(n){const e=new fT(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function pT(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new rm(n),e.set(r,[a])):s>=o.length?(a=new rm(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class mT extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gT extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vT=`uniform sampler2D shadow_pass;
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
}`;function yT(n,e,t){let i=new $u;const r=new Ge,s=new Ge,o=new tt,a=new mT({depthPacking:Px}),l=new gT,c={},u=t.maxTextureSize,h={[xi]:un,[un]:xi,[Nn]:Nn},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:_T,fragmentShader:vT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new rn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let _=this.type;this.render=function(P,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const Y=n.getRenderTarget(),v=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Hi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const T=_!==yi&&this.type===yi,E=_===yi&&this.type!==yi;for(let O=0,R=P.length;O<R;O++){const F=P[O],k=F.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const J=k.getFrameExtents();if(r.multiply(J),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,k.mapSize.y=s.y)),k.map===null||T===!0||E===!0){const V=this.type!==yi?{minFilter:hn,magFilter:hn}:{};k.map!==null&&k.map.dispose(),k.map=new gr(r.x,r.y,V),k.map.texture.name=F.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const L=k.getViewportCount();for(let V=0;V<L;V++){const K=k.getViewport(V);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),B.viewport(o),k.updateMatrices(F,V),i=k.getFrustum(),M(A,U,k.camera,F,this.type)}k.isPointLightShadow!==!0&&this.type===yi&&b(k,U),k.needsUpdate=!1}_=this.type,p.needsUpdate=!1,n.setRenderTarget(Y,v,S)};function b(P,A){const U=e.update(m);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new gr(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(A,null,U,d,m,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(A,null,U,f,m,null)}function y(P,A,U,Y){let v=null;const S=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(S!==void 0)v=S;else if(v=U.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=v.uuid,T=A.uuid;let E=c[B];E===void 0&&(E={},c[B]=E);let O=E[T];O===void 0&&(O=v.clone(),E[T]=O,A.addEventListener("dispose",w)),v=O}if(v.visible=A.visible,v.wireframe=A.wireframe,Y===yi?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=n.properties.get(v);B.light=U}return v}function M(P,A,U,Y,v){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===yi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const T=e.update(P),E=P.material;if(Array.isArray(E)){const O=T.groups;for(let R=0,F=O.length;R<F;R++){const k=O[R],J=E[k.materialIndex];if(J&&J.visible){const L=y(P,J,Y,v);P.onBeforeShadow(n,P,A,U,T,L,k),n.renderBufferDirect(U,null,T,L,P,k),P.onAfterShadow(n,P,A,U,T,L,k)}}}else if(E.visible){const O=y(P,E,Y,v);P.onBeforeShadow(n,P,A,U,T,O,null),n.renderBufferDirect(U,null,T,O,P,null),P.onAfterShadow(n,P,A,U,T,O,null)}}const B=P.children;for(let T=0,E=B.length;T<E;T++)M(B[T],A,U,Y,v)}function w(P){P.target.removeEventListener("dispose",w);for(const U in c){const Y=c[U],v=P.target.uuid;v in Y&&(Y[v].dispose(),delete Y[v])}}}const xT={[Pc]:Ic,[Lc]:Oc,[Dc]:Uc,[Gr]:Nc,[Ic]:Pc,[Oc]:Lc,[Uc]:Dc,[Nc]:Gr};function MT(n){function e(){let W=!1;const be=new tt;let te=null;const ce=new tt(0,0,0,0);return{setMask:function(ye){te!==ye&&!W&&(n.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){W=ye},setClear:function(ye,ve,Ke,Pt,on){on===!0&&(ye*=Pt,ve*=Pt,Ke*=Pt),be.set(ye,ve,Ke,Pt),ce.equals(be)===!1&&(n.clearColor(ye,ve,Ke,Pt),ce.copy(be))},reset:function(){W=!1,te=null,ce.set(-1,0,0,0)}}}function t(){let W=!1,be=!1,te=null,ce=null,ye=null;return{setReversed:function(ve){be=ve},setTest:function(ve){ve?se(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(ve){te!==ve&&!W&&(n.depthMask(ve),te=ve)},setFunc:function(ve){if(be&&(ve=xT[ve]),ce!==ve){switch(ve){case Pc:n.depthFunc(n.NEVER);break;case Ic:n.depthFunc(n.ALWAYS);break;case Lc:n.depthFunc(n.LESS);break;case Gr:n.depthFunc(n.LEQUAL);break;case Dc:n.depthFunc(n.EQUAL);break;case Nc:n.depthFunc(n.GEQUAL);break;case Oc:n.depthFunc(n.GREATER);break;case Uc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=ve}},setLocked:function(ve){W=ve},setClear:function(ve){ye!==ve&&(n.clearDepth(ve),ye=ve)},reset:function(){W=!1,te=null,ce=null,ye=null}}}function i(){let W=!1,be=null,te=null,ce=null,ye=null,ve=null,Ke=null,Pt=null,on=null;return{setTest:function(nt){W||(nt?se(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(nt){be!==nt&&!W&&(n.stencilMask(nt),be=nt)},setFunc:function(nt,an,ni){(te!==nt||ce!==an||ye!==ni)&&(n.stencilFunc(nt,an,ni),te=nt,ce=an,ye=ni)},setOp:function(nt,an,ni){(ve!==nt||Ke!==an||Pt!==ni)&&(n.stencilOp(nt,an,ni),ve=nt,Ke=an,Pt=ni)},setLocked:function(nt){W=nt},setClear:function(nt){on!==nt&&(n.clearStencil(nt),on=nt)},reset:function(){W=!1,be=null,te=null,ce=null,ye=null,ve=null,Ke=null,Pt=null,on=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,g=!1,m=null,p=null,_=null,b=null,y=null,M=null,w=null,P=new Me(0,0,0),A=0,U=!1,Y=null,v=null,S=null,B=null,T=null;const E=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,R=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(F)[1]),O=R>=1):F.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),O=R>=2);let k=null,J={};const L=n.getParameter(n.SCISSOR_BOX),V=n.getParameter(n.VIEWPORT),K=new tt().fromArray(L),ee=new tt().fromArray(V);function G(W,be,te,ce){const ye=new Uint8Array(4),ve=n.createTexture();n.bindTexture(W,ve),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<te;Ke++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(be+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return ve}const $={};$[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),se(n.DEPTH_TEST),s.setFunc(Gr),We(!1),Je(Of),se(n.CULL_FACE),z(Hi);function se(W){c[W]!==!0&&(n.enable(W),c[W]=!0)}function ie(W){c[W]!==!1&&(n.disable(W),c[W]=!1)}function ae(W,be){return u[W]!==be?(n.bindFramebuffer(W,be),u[W]=be,W===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=be),W===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=be),!0):!1}function de(W,be){let te=d,ce=!1;if(W){te=h.get(be),te===void 0&&(te=[],h.set(be,te));const ye=W.textures;if(te.length!==ye.length||te[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Ke=ye.length;ve<Ke;ve++)te[ve]=n.COLOR_ATTACHMENT0+ve;te.length=ye.length,ce=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ce=!0);ce&&n.drawBuffers(te)}function ue(W){return f!==W?(n.useProgram(W),f=W,!0):!1}const Se={[fr]:n.FUNC_ADD,[Zy]:n.FUNC_SUBTRACT,[Jy]:n.FUNC_REVERSE_SUBTRACT};Se[Qy]=n.MIN,Se[ex]=n.MAX;const re={[tx]:n.ZERO,[nx]:n.ONE,[ix]:n.SRC_COLOR,[Rc]:n.SRC_ALPHA,[cx]:n.SRC_ALPHA_SATURATE,[ax]:n.DST_COLOR,[sx]:n.DST_ALPHA,[rx]:n.ONE_MINUS_SRC_COLOR,[Cc]:n.ONE_MINUS_SRC_ALPHA,[lx]:n.ONE_MINUS_DST_COLOR,[ox]:n.ONE_MINUS_DST_ALPHA,[ux]:n.CONSTANT_COLOR,[hx]:n.ONE_MINUS_CONSTANT_COLOR,[dx]:n.CONSTANT_ALPHA,[fx]:n.ONE_MINUS_CONSTANT_ALPHA};function z(W,be,te,ce,ye,ve,Ke,Pt,on,nt){if(W===Hi){g===!0&&(ie(n.BLEND),g=!1);return}if(g===!1&&(se(n.BLEND),g=!0),W!==Ky){if(W!==m||nt!==U){if((p!==fr||y!==fr)&&(n.blendEquation(n.FUNC_ADD),p=fr,y=fr),nt)switch(W){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ff:n.blendFunc(n.ONE,n.ONE);break;case Bf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ff:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}_=null,b=null,M=null,w=null,P.set(0,0,0),A=0,m=W,U=nt}return}ye=ye||be,ve=ve||te,Ke=Ke||ce,(be!==p||ye!==y)&&(n.blendEquationSeparate(Se[be],Se[ye]),p=be,y=ye),(te!==_||ce!==b||ve!==M||Ke!==w)&&(n.blendFuncSeparate(re[te],re[ce],re[ve],re[Ke]),_=te,b=ce,M=ve,w=Ke),(Pt.equals(P)===!1||on!==A)&&(n.blendColor(Pt.r,Pt.g,Pt.b,on),P.copy(Pt),A=on),m=W,U=!1}function Tt(W,be){W.side===Nn?ie(n.CULL_FACE):se(n.CULL_FACE);let te=W.side===un;be&&(te=!te),We(te),W.blending===Hr&&W.transparent===!1?z(Hi):z(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),s.setFunc(W.depthFunc),s.setTest(W.depthTest),s.setMask(W.depthWrite),r.setMask(W.colorWrite);const ce=W.stencilWrite;o.setTest(ce),ce&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),rt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(W){Y!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),Y=W)}function Je(W){W!==jy?(se(n.CULL_FACE),W!==v&&(W===Of?n.cullFace(n.BACK):W===qy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),v=W}function Oe(W){W!==S&&(O&&n.lineWidth(W),S=W)}function rt(W,be,te){W?(se(n.POLYGON_OFFSET_FILL),(B!==be||T!==te)&&(n.polygonOffset(be,te),B=be,T=te)):ie(n.POLYGON_OFFSET_FILL)}function Fe(W){W?se(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function D(W){W===void 0&&(W=n.TEXTURE0+E-1),k!==W&&(n.activeTexture(W),k=W)}function C(W,be,te){te===void 0&&(k===null?te=n.TEXTURE0+E-1:te=k);let ce=J[te];ce===void 0&&(ce={type:void 0,texture:void 0},J[te]=ce),(ce.type!==W||ce.texture!==be)&&(k!==te&&(n.activeTexture(te),k=te),n.bindTexture(W,be||$[W]),ce.type=W,ce.texture=be)}function H(){const W=J[k];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function st(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Be(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(W){K.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),K.copy(W))}function we(W){ee.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),ee.copy(W))}function Qe(W,be){let te=l.get(be);te===void 0&&(te=new WeakMap,l.set(be,te));let ce=te.get(W);ce===void 0&&(ce=n.getUniformBlockIndex(be,W.name),te.set(W,ce))}function He(W,be){const ce=l.get(be).get(W);a.get(be)!==ce&&(n.uniformBlockBinding(be,ce,W.__bindingPointIndex),a.set(be,ce))}function xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},k=null,J={},u={},h=new WeakMap,d=[],f=null,g=!1,m=null,p=null,_=null,b=null,y=null,M=null,w=null,P=new Me(0,0,0),A=0,U=!1,Y=null,v=null,S=null,B=null,T=null,K.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:se,disable:ie,bindFramebuffer:ae,drawBuffers:de,useProgram:ue,setBlending:z,setMaterial:Tt,setFlipSided:We,setCullFace:Je,setLineWidth:Oe,setPolygonOffset:rt,setScissorTest:Fe,activeTexture:D,bindTexture:C,unbindTexture:H,compressedTexImage2D:le,compressedTexImage3D:he,texImage2D:Te,texImage3D:Be,updateUBOMapping:Qe,uniformBlockBinding:He,texStorage2D:st,texStorage3D:fe,texSubImage2D:oe,texSubImage3D:Ie,compressedTexSubImage2D:ge,compressedTexSubImage3D:Ee,scissor:ke,viewport:we,reset:xt}}function sm(n,e,t,i){const r=ST(i);switch(t){case Xf:return n*e;case qf:return n*e;case Yf:return n*e*2;case zc:return n*e/r.components*r.byteLength;case Hc:return n*e/r.components*r.byteLength;case Kf:return n*e*2/r.components*r.byteLength;case Gc:return n*e*2/r.components*r.byteLength;case jf:return n*e*3/r.components*r.byteLength;case On:return n*e*4/r.components*r.byteLength;case Wc:return n*e*4/r.components*r.byteLength;case _a:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ya:case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xc:case qc:return Math.max(n,16)*Math.max(e,8)/4;case $c:case jc:return Math.max(n,8)*Math.max(e,8)/2;case Yc:case Kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case eu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case tu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case iu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ru:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case su:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ou:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case au:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case lu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case cu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case uu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case hu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ma:case du:case fu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zf:case pu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case mu:case gu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ST(n){switch(n){case Si:case Gf:return{byteLength:1,components:1};case Js:case Wf:case Qs:return{byteLength:2,components:1};case kc:case Vc:return{byteLength:2,components:4};case pr:case Bc:case $n:return{byteLength:4,components:1};case $f:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function bT(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,C){return f?new OffscreenCanvas(D,C):so("canvas")}function m(D,C,H){let le=1;const he=Fe(D);if((he.width>H||he.height>H)&&(le=H/Math.max(he.width,he.height)),le<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const oe=Math.floor(le*he.width),Ie=Math.floor(le*he.height);h===void 0&&(h=g(oe,Ie));const ge=C?g(oe,Ie):h;return ge.width=oe,ge.height=Ie,ge.getContext("2d").drawImage(D,0,0,oe,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+oe+"x"+Ie+")."),ge}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),D;return D}function p(D){return D.generateMipmaps&&D.minFilter!==hn&&D.minFilter!==wn}function _(D){n.generateMipmap(D)}function b(D,C,H,le,he=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let oe=C;if(C===n.RED&&(H===n.FLOAT&&(oe=n.R32F),H===n.HALF_FLOAT&&(oe=n.R16F),H===n.UNSIGNED_BYTE&&(oe=n.R8)),C===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(oe=n.R8UI),H===n.UNSIGNED_SHORT&&(oe=n.R16UI),H===n.UNSIGNED_INT&&(oe=n.R32UI),H===n.BYTE&&(oe=n.R8I),H===n.SHORT&&(oe=n.R16I),H===n.INT&&(oe=n.R32I)),C===n.RG&&(H===n.FLOAT&&(oe=n.RG32F),H===n.HALF_FLOAT&&(oe=n.RG16F),H===n.UNSIGNED_BYTE&&(oe=n.RG8)),C===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(oe=n.RG8UI),H===n.UNSIGNED_SHORT&&(oe=n.RG16UI),H===n.UNSIGNED_INT&&(oe=n.RG32UI),H===n.BYTE&&(oe=n.RG8I),H===n.SHORT&&(oe=n.RG16I),H===n.INT&&(oe=n.RG32I)),C===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),H===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),H===n.UNSIGNED_INT&&(oe=n.RGB32UI),H===n.BYTE&&(oe=n.RGB8I),H===n.SHORT&&(oe=n.RGB16I),H===n.INT&&(oe=n.RGB32I)),C===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),H===n.UNSIGNED_INT&&(oe=n.RGBA32UI),H===n.BYTE&&(oe=n.RGBA8I),H===n.SHORT&&(oe=n.RGBA16I),H===n.INT&&(oe=n.RGBA32I)),C===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),C===n.RGBA){const Ie=he?Ea:Xe.getTransfer(le);H===n.FLOAT&&(oe=n.RGBA32F),H===n.HALF_FLOAT&&(oe=n.RGBA16F),H===n.UNSIGNED_BYTE&&(oe=Ie===bt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function y(D,C){let H;return D?C===null||C===pr||C===Xr?H=n.DEPTH24_STENCIL8:C===$n?H=n.DEPTH32F_STENCIL8:C===Js&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===pr||C===Xr?H=n.DEPTH_COMPONENT24:C===$n?H=n.DEPTH_COMPONENT32F:C===Js&&(H=n.DEPTH_COMPONENT16),H}function M(D,C){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==hn&&D.minFilter!==wn?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function w(D){const C=D.target;C.removeEventListener("dispose",w),A(C),C.isVideoTexture&&u.delete(C)}function P(D){const C=D.target;C.removeEventListener("dispose",P),Y(C)}function A(D){const C=i.get(D);if(C.__webglInit===void 0)return;const H=D.source,le=d.get(H);if(le){const he=le[C.__cacheKey];he.usedTimes--,he.usedTimes===0&&U(D),Object.keys(le).length===0&&d.delete(H)}i.remove(D)}function U(D){const C=i.get(D);n.deleteTexture(C.__webglTexture);const H=D.source,le=d.get(H);delete le[C.__cacheKey],o.memory.textures--}function Y(D){const C=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(C.__webglFramebuffer[le]))for(let he=0;he<C.__webglFramebuffer[le].length;he++)n.deleteFramebuffer(C.__webglFramebuffer[le][he]);else n.deleteFramebuffer(C.__webglFramebuffer[le]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[le])}else{if(Array.isArray(C.__webglFramebuffer))for(let le=0;le<C.__webglFramebuffer.length;le++)n.deleteFramebuffer(C.__webglFramebuffer[le]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let le=0;le<C.__webglColorRenderbuffer.length;le++)C.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[le]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const H=D.textures;for(let le=0,he=H.length;le<he;le++){const oe=i.get(H[le]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(H[le])}i.remove(D)}let v=0;function S(){v=0}function B(){const D=v;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),v+=1,D}function T(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function E(D,C){const H=i.get(D);if(D.isVideoTexture&&Oe(D),D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){const le=D.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(H,D,C);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+C)}function O(D,C){const H=i.get(D);if(D.version>0&&H.__version!==D.version){ee(H,D,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+C)}function R(D,C){const H=i.get(D);if(D.version>0&&H.__version!==D.version){ee(H,D,C);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+C)}function F(D,C){const H=i.get(D);if(D.version>0&&H.__version!==D.version){G(H,D,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+C)}const k={[Wi]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[ma]:n.MIRRORED_REPEAT},J={[hn]:n.NEAREST,[Hf]:n.NEAREST_MIPMAP_NEAREST,[Zs]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[ga]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},L={[Lx]:n.NEVER,[Bx]:n.ALWAYS,[Dx]:n.LESS,[ep]:n.LEQUAL,[Nx]:n.EQUAL,[Fx]:n.GEQUAL,[Ox]:n.GREATER,[Ux]:n.NOTEQUAL};function V(D,C){if(C.type===$n&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===wn||C.magFilter===ga||C.magFilter===Zs||C.magFilter===Mi||C.minFilter===wn||C.minFilter===ga||C.minFilter===Zs||C.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,k[C.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,k[C.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,k[C.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,J[C.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,J[C.minFilter]),C.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,L[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===hn||C.minFilter!==Zs&&C.minFilter!==Mi||C.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function K(D,C){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",w));const le=C.source;let he=d.get(le);he===void 0&&(he={},d.set(le,he));const oe=T(C);if(oe!==D.__cacheKey){he[oe]===void 0&&(he[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),he[oe].usedTimes++;const Ie=he[D.__cacheKey];Ie!==void 0&&(he[D.__cacheKey].usedTimes--,Ie.usedTimes===0&&U(C)),D.__cacheKey=oe,D.__webglTexture=he[oe].texture}return H}function ee(D,C,H){let le=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(le=n.TEXTURE_3D);const he=K(D,C),oe=C.source;t.bindTexture(le,D.__webglTexture,n.TEXTURE0+H);const Ie=i.get(oe);if(oe.version!==Ie.__version||he===!0){t.activeTexture(n.TEXTURE0+H);const ge=Xe.getPrimaries(Xe.workingColorSpace),Ee=C.colorSpace===$i?null:Xe.getPrimaries(C.colorSpace),st=C.colorSpace===$i||ge===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let fe=m(C.image,!1,r.maxTextureSize);fe=rt(C,fe);const Te=s.convert(C.format,C.colorSpace),Be=s.convert(C.type);let ke=b(C.internalFormat,Te,Be,C.colorSpace,C.isVideoTexture);V(le,C);let we;const Qe=C.mipmaps,He=C.isVideoTexture!==!0,xt=Ie.__version===void 0||he===!0,W=oe.dataReady,be=M(C,fe);if(C.isDepthTexture)ke=y(C.format===qr,C.type),xt&&(He?t.texStorage2D(n.TEXTURE_2D,1,ke,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,ke,fe.width,fe.height,0,Te,Be,null));else if(C.isDataTexture)if(Qe.length>0){He&&xt&&t.texStorage2D(n.TEXTURE_2D,be,ke,Qe[0].width,Qe[0].height);for(let te=0,ce=Qe.length;te<ce;te++)we=Qe[te],He?W&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,we.width,we.height,Te,Be,we.data):t.texImage2D(n.TEXTURE_2D,te,ke,we.width,we.height,0,Te,Be,we.data);C.generateMipmaps=!1}else He?(xt&&t.texStorage2D(n.TEXTURE_2D,be,ke,fe.width,fe.height),W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,Te,Be,fe.data)):t.texImage2D(n.TEXTURE_2D,0,ke,fe.width,fe.height,0,Te,Be,fe.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){He&&xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,ke,Qe[0].width,Qe[0].height,fe.depth);for(let te=0,ce=Qe.length;te<ce;te++)if(we=Qe[te],C.format!==On)if(Te!==null)if(He){if(W)if(C.layerUpdates.size>0){const ye=sm(we.width,we.height,C.format,C.type);for(const ve of C.layerUpdates){const Ke=we.data.subarray(ve*ye/we.data.BYTES_PER_ELEMENT,(ve+1)*ye/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,ve,we.width,we.height,1,Te,Ke,0,0)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,we.width,we.height,fe.depth,Te,we.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,ke,we.width,we.height,fe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,we.width,we.height,fe.depth,Te,Be,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,ke,we.width,we.height,fe.depth,0,Te,Be,we.data)}else{He&&xt&&t.texStorage2D(n.TEXTURE_2D,be,ke,Qe[0].width,Qe[0].height);for(let te=0,ce=Qe.length;te<ce;te++)we=Qe[te],C.format!==On?Te!==null?He?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(n.TEXTURE_2D,te,ke,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?W&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,we.width,we.height,Te,Be,we.data):t.texImage2D(n.TEXTURE_2D,te,ke,we.width,we.height,0,Te,Be,we.data)}else if(C.isDataArrayTexture)if(He){if(xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,ke,fe.width,fe.height,fe.depth),W)if(C.layerUpdates.size>0){const te=sm(fe.width,fe.height,C.format,C.type);for(const ce of C.layerUpdates){const ye=fe.data.subarray(ce*te/fe.data.BYTES_PER_ELEMENT,(ce+1)*te/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,fe.width,fe.height,1,Te,Be,ye)}C.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Te,Be,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,fe.width,fe.height,fe.depth,0,Te,Be,fe.data);else if(C.isData3DTexture)He?(xt&&t.texStorage3D(n.TEXTURE_3D,be,ke,fe.width,fe.height,fe.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Te,Be,fe.data)):t.texImage3D(n.TEXTURE_3D,0,ke,fe.width,fe.height,fe.depth,0,Te,Be,fe.data);else if(C.isFramebufferTexture){if(xt)if(He)t.texStorage2D(n.TEXTURE_2D,be,ke,fe.width,fe.height);else{let te=fe.width,ce=fe.height;for(let ye=0;ye<be;ye++)t.texImage2D(n.TEXTURE_2D,ye,ke,te,ce,0,Te,Be,null),te>>=1,ce>>=1}}else if(Qe.length>0){if(He&&xt){const te=Fe(Qe[0]);t.texStorage2D(n.TEXTURE_2D,be,ke,te.width,te.height)}for(let te=0,ce=Qe.length;te<ce;te++)we=Qe[te],He?W&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Te,Be,we):t.texImage2D(n.TEXTURE_2D,te,ke,Te,Be,we);C.generateMipmaps=!1}else if(He){if(xt){const te=Fe(fe);t.texStorage2D(n.TEXTURE_2D,be,ke,te.width,te.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Be,fe)}else t.texImage2D(n.TEXTURE_2D,0,ke,Te,Be,fe);p(C)&&_(le),Ie.__version=oe.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function G(D,C,H){if(C.image.length!==6)return;const le=K(D,C),he=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+H);const oe=i.get(he);if(he.version!==oe.__version||le===!0){t.activeTexture(n.TEXTURE0+H);const Ie=Xe.getPrimaries(Xe.workingColorSpace),ge=C.colorSpace===$i?null:Xe.getPrimaries(C.colorSpace),Ee=C.colorSpace===$i||Ie===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const st=C.isCompressedTexture||C.image[0].isCompressedTexture,fe=C.image[0]&&C.image[0].isDataTexture,Te=[];for(let ce=0;ce<6;ce++)!st&&!fe?Te[ce]=m(C.image[ce],!0,r.maxCubemapSize):Te[ce]=fe?C.image[ce].image:C.image[ce],Te[ce]=rt(C,Te[ce]);const Be=Te[0],ke=s.convert(C.format,C.colorSpace),we=s.convert(C.type),Qe=b(C.internalFormat,ke,we,C.colorSpace),He=C.isVideoTexture!==!0,xt=oe.__version===void 0||le===!0,W=he.dataReady;let be=M(C,Be);V(n.TEXTURE_CUBE_MAP,C);let te;if(st){He&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Qe,Be.width,Be.height);for(let ce=0;ce<6;ce++){te=Te[ce].mipmaps;for(let ye=0;ye<te.length;ye++){const ve=te[ye];C.format!==On?ke!==null?He?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye,0,0,ve.width,ve.height,ke,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye,Qe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye,0,0,ve.width,ve.height,ke,we,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye,Qe,ve.width,ve.height,0,ke,we,ve.data)}}}else{if(te=C.mipmaps,He&&xt){te.length>0&&be++;const ce=Fe(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Qe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(fe){He?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Te[ce].width,Te[ce].height,ke,we,Te[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Qe,Te[ce].width,Te[ce].height,0,ke,we,Te[ce].data);for(let ye=0;ye<te.length;ye++){const Ke=te[ye].image[ce].image;He?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye+1,0,0,Ke.width,Ke.height,ke,we,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye+1,Qe,Ke.width,Ke.height,0,ke,we,Ke.data)}}else{He?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ke,we,Te[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Qe,ke,we,Te[ce]);for(let ye=0;ye<te.length;ye++){const ve=te[ye];He?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye+1,0,0,ke,we,ve.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye+1,Qe,ke,we,ve.image[ce])}}}p(C)&&_(n.TEXTURE_CUBE_MAP),oe.__version=he.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function $(D,C,H,le,he,oe){const Ie=s.convert(H.format,H.colorSpace),ge=s.convert(H.type),Ee=b(H.internalFormat,Ie,ge,H.colorSpace);if(!i.get(C).__hasExternalTextures){const fe=Math.max(1,C.width>>oe),Te=Math.max(1,C.height>>oe);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,oe,Ee,fe,Te,C.depth,0,Ie,ge,null):t.texImage2D(he,oe,Ee,fe,Te,0,Ie,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Je(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,he,i.get(H).__webglTexture,0,We(C)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,he,i.get(H).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(D,C,H){if(n.bindRenderbuffer(n.RENDERBUFFER,D),C.depthBuffer){const le=C.depthTexture,he=le&&le.isDepthTexture?le.type:null,oe=y(C.stencilBuffer,he),Ie=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=We(C);Je(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,oe,C.width,C.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,oe,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,oe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,D)}else{const le=C.textures;for(let he=0;he<le.length;he++){const oe=le[he],Ie=s.convert(oe.format,oe.colorSpace),ge=s.convert(oe.type),Ee=b(oe.internalFormat,Ie,ge,oe.colorSpace),st=We(C);H&&Je(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,Ee,C.width,C.height):Je(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,Ee,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ie(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),E(C.depthTexture,0);const le=i.get(C.depthTexture).__webglTexture,he=We(C);if(C.depthTexture.format===jr)Je(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(C.depthTexture.format===qr)Je(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function ae(D){const C=i.get(D),H=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const le=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),le){const he=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,le.removeEventListener("dispose",he)};le.addEventListener("dispose",he),C.__depthDisposeCallback=he}C.__boundDepthTexture=le}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ie(C.__webglFramebuffer,D)}else if(H){C.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[le]),C.__webglDepthbuffer[le]===void 0)C.__webglDepthbuffer[le]=n.createRenderbuffer(),se(C.__webglDepthbuffer[le],D,!1);else{const he=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=C.__webglDepthbuffer[le];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),se(C.__webglDepthbuffer,D,!1);else{const le=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,he)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(D,C,H){const le=i.get(D);C!==void 0&&$(le.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&ae(D)}function ue(D){const C=D.texture,H=i.get(D),le=i.get(C);D.addEventListener("dispose",P);const he=D.textures,oe=D.isWebGLCubeRenderTarget===!0,Ie=he.length>1;if(Ie||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=C.version,o.memory.textures++),oe){H.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer[ge]=[];for(let Ee=0;Ee<C.mipmaps.length;Ee++)H.__webglFramebuffer[ge][Ee]=n.createFramebuffer()}else H.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer=[];for(let ge=0;ge<C.mipmaps.length;ge++)H.__webglFramebuffer[ge]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let ge=0,Ee=he.length;ge<Ee;ge++){const st=i.get(he[ge]);st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&Je(D)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ge=0;ge<he.length;ge++){const Ee=he[ge];H.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ge]);const st=s.convert(Ee.format,Ee.colorSpace),fe=s.convert(Ee.type),Te=b(Ee.internalFormat,st,fe,Ee.colorSpace,D.isXRRenderTarget===!0),Be=We(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Te,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,H.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),se(H.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),V(n.TEXTURE_CUBE_MAP,C);for(let ge=0;ge<6;ge++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ee=0;Ee<C.mipmaps.length;Ee++)$(H.__webglFramebuffer[ge][Ee],D,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ee);else $(H.__webglFramebuffer[ge],D,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(C)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ge=0,Ee=he.length;ge<Ee;ge++){const st=he[ge],fe=i.get(st);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),V(n.TEXTURE_2D,st),$(H.__webglFramebuffer,D,st,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),p(st)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ge=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,le.__webglTexture),V(ge,C),C.mipmaps&&C.mipmaps.length>0)for(let Ee=0;Ee<C.mipmaps.length;Ee++)$(H.__webglFramebuffer[Ee],D,C,n.COLOR_ATTACHMENT0,ge,Ee);else $(H.__webglFramebuffer,D,C,n.COLOR_ATTACHMENT0,ge,0);p(C)&&_(ge),t.unbindTexture()}D.depthBuffer&&ae(D)}function Se(D){const C=D.textures;for(let H=0,le=C.length;H<le;H++){const he=C[H];if(p(he)){const oe=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ie=i.get(he).__webglTexture;t.bindTexture(oe,Ie),_(oe),t.unbindTexture()}}}const re=[],z=[];function Tt(D){if(D.samples>0){if(Je(D)===!1){const C=D.textures,H=D.width,le=D.height;let he=n.COLOR_BUFFER_BIT;const oe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(D),ge=C.length>1;if(ge)for(let Ee=0;Ee<C.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ee=0;Ee<C.length;Ee++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ee]);const st=i.get(C[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,st,0)}n.blitFramebuffer(0,0,H,le,0,0,H,le,he,n.NEAREST),l===!0&&(re.length=0,z.length=0,re.push(n.COLOR_ATTACHMENT0+Ee),D.depthBuffer&&D.resolveDepthBuffer===!1&&(re.push(oe),z.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ee=0;Ee<C.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ee]);const st=i.get(C[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,st,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const C=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function We(D){return Math.min(r.maxSamples,D.samples)}function Je(D){const C=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Oe(D){const C=o.render.frame;u.get(D)!==C&&(u.set(D,C),D.update())}function rt(D,C){const H=D.colorSpace,le=D.format,he=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==Zt&&H!==$i&&(Xe.getTransfer(H)===bt?(le!==On||he!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),C}function Fe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=S,this.setTexture2D=E,this.setTexture2DArray=O,this.setTexture3D=R,this.setTextureCube=F,this.rebindTextures=de,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Je}function ET(n,e){function t(i,r=$i){let s;const o=Xe.getTransfer(r);if(i===Si)return n.UNSIGNED_BYTE;if(i===kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$f)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gf)return n.BYTE;if(i===Wf)return n.SHORT;if(i===Js)return n.UNSIGNED_SHORT;if(i===Bc)return n.INT;if(i===pr)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===Qs)return n.HALF_FLOAT;if(i===Xf)return n.ALPHA;if(i===jf)return n.RGB;if(i===On)return n.RGBA;if(i===qf)return n.LUMINANCE;if(i===Yf)return n.LUMINANCE_ALPHA;if(i===jr)return n.DEPTH_COMPONENT;if(i===qr)return n.DEPTH_STENCIL;if(i===zc)return n.RED;if(i===Hc)return n.RED_INTEGER;if(i===Kf)return n.RG;if(i===Gc)return n.RG_INTEGER;if(i===Wc)return n.RGBA_INTEGER;if(i===_a||i===va||i===ya||i===xa)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===_a)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===_a)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$c||i===Xc||i===jc||i===qc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$c)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yc||i===Kc||i===Zc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yc||i===Kc)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===ou||i===au||i===lu||i===cu||i===uu||i===hu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===iu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ru)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===su)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ou)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===au)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ma||i===du||i===fu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ma)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===du)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zf||i===pu||i===mu||i===gu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ma)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class TT extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pn extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wT={type:"move"};class eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,i),_=this._getHandJoint(c,m);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new pn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const AT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RT=`
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

}`;class CT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Wt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ii({vertexShader:AT,fragmentShader:RT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rn(new ja(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PT extends mr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const m=new CT,p=t.getContextAttributes();let _=null,b=null;const y=[],M=[],w=new Ge;let P=null;const A=new fn;A.layers.enable(1),A.viewport=new tt;const U=new fn;U.layers.enable(2),U.viewport=new tt;const Y=[A,U],v=new TT;v.layers.enable(1),v.layers.enable(2);let S=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=y[G];return $===void 0&&($=new eh,y[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=y[G];return $===void 0&&($=new eh,y[G]=$),$.getGripSpace()},this.getHand=function(G){let $=y[G];return $===void 0&&($=new eh,y[G]=$),$.getHandSpace()};function T(G){const $=M.indexOf(G.inputSource);if($===-1)return;const se=y[$];se!==void 0&&(se.update(G.inputSource,G.frame,c||o),se.dispatchEvent({type:G.type,data:G.inputSource}))}function E(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",E),r.removeEventListener("inputsourceschange",O);for(let G=0;G<y.length;G++){const $=M[G];$!==null&&(M[G]=null,y[G].disconnect($))}S=null,B=null,m.reset(),e.setRenderTarget(_),f=null,d=null,h=null,r=null,b=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",E),r.addEventListener("inputsourceschange",O),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){const $={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new gr(f.framebufferWidth,f.framebufferHeight,{format:On,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let $=null,se=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=p.stencil?qr:jr,se=p.stencil?Xr:pr);const ae={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new gr(d.textureWidth,d.textureHeight,{format:On,type:Si,depthTexture:new Bp(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(G){for(let $=0;$<G.removed.length;$++){const se=G.removed[$],ie=M.indexOf(se);ie>=0&&(M[ie]=null,y[ie].disconnect(se))}for(let $=0;$<G.added.length;$++){const se=G.added[$];let ie=M.indexOf(se);if(ie===-1){for(let de=0;de<y.length;de++)if(de>=M.length){M.push(se),ie=de;break}else if(M[de]===null){M[de]=se,ie=de;break}if(ie===-1)break}const ae=y[ie];ae&&ae.connect(se)}}const R=new N,F=new N;function k(G,$,se){R.setFromMatrixPosition($.matrixWorld),F.setFromMatrixPosition(se.matrixWorld);const ie=R.distanceTo(F),ae=$.projectionMatrix.elements,de=se.projectionMatrix.elements,ue=ae[14]/(ae[10]-1),Se=ae[14]/(ae[10]+1),re=(ae[9]+1)/ae[5],z=(ae[9]-1)/ae[5],Tt=(ae[8]-1)/ae[0],We=(de[8]+1)/de[0],Je=ue*Tt,Oe=ue*We,rt=ie/(-Tt+We),Fe=rt*-Tt;if($.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Fe),G.translateZ(rt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ae[10]===-1)G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const D=ue+rt,C=Se+rt,H=Je-Fe,le=Oe+(ie-Fe),he=re*Se/C*D,oe=z*Se/C*D;G.projectionMatrix.makePerspective(H,le,he,oe,D,C),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function J(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let $=G.near,se=G.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(se=m.depthFar)),v.near=U.near=A.near=$,v.far=U.far=A.far=se,(S!==v.near||B!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,B=v.far);const ie=G.parent,ae=v.cameras;J(v,ie);for(let de=0;de<ae.length;de++)J(ae[de],ie);ae.length===2?k(v,A,U):v.projectionMatrix.copy(A.projectionMatrix),L(G,v,ie)};function L(G,$,se){se===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(se.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Jr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(v)};let V=null;function K(G,$){if(u=$.getViewerPose(c||o),g=$,u!==null){const se=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ie=!1;se.length!==v.cameras.length&&(v.cameras.length=0,ie=!0);for(let de=0;de<se.length;de++){const ue=se[de];let Se=null;if(f!==null)Se=f.getViewport(ue);else{const z=h.getViewSubImage(d,ue);Se=z.viewport,de===0&&(e.setRenderTargetTextures(b,z.colorTexture,d.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(b))}let re=Y[de];re===void 0&&(re=new fn,re.layers.enable(de),re.viewport=new tt,Y[de]=re),re.matrix.fromArray(ue.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ue.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Se.x,Se.y,Se.width,Se.height),de===0&&(v.matrix.copy(re.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ie===!0&&v.cameras.push(re)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const de=h.getDepthInformation(se[0]);de&&de.isValid&&de.texture&&m.init(e,de,r.renderState)}}for(let se=0;se<y.length;se++){const ie=M[se],ae=y[se];ie!==null&&ae!==void 0&&ae.update(ie,$,c||o)}V&&V(G,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}const ee=new Pp;ee.setAnimationLoop(K),this.setAnimationLoop=function(G){V=G},this.dispose=function(){}}}const Tr=new Lt,IT=new _e;function LT(n,e){function t(p,_){p.matrixAutoUpdate===!0&&p.updateMatrix(),_.value.copy(p.matrix)}function i(p,_){_.color.getRGB(p.fogColor.value,Ep(n)),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function r(p,_,b,y,M){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(p,_):_.isMeshToonMaterial?(s(p,_),h(p,_)):_.isMeshPhongMaterial?(s(p,_),u(p,_)):_.isMeshStandardMaterial?(s(p,_),d(p,_),_.isMeshPhysicalMaterial&&f(p,_,M)):_.isMeshMatcapMaterial?(s(p,_),g(p,_)):_.isMeshDepthMaterial?s(p,_):_.isMeshDistanceMaterial?(s(p,_),m(p,_)):_.isMeshNormalMaterial?s(p,_):_.isLineBasicMaterial?(o(p,_),_.isLineDashedMaterial&&a(p,_)):_.isPointsMaterial?l(p,_,b,y):_.isSpriteMaterial?c(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.bumpMap&&(p.bumpMap.value=_.bumpMap,t(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===un&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,t(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===un&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,t(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,p.emissiveMapTransform)),_.specularMap&&(p.specularMap.value=_.specularMap,t(_.specularMap,p.specularMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);const b=e.get(_),y=b.envMap,M=b.envMapRotation;y&&(p.envMap.value=y,Tr.copy(M),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),p.envMapRotation.value.setFromMatrix4(IT.makeRotationFromEuler(Tr)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio),_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,p.lightMapTransform)),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,p.aoMapTransform))}function o(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform))}function a(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function l(p,_,b,y){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*b,p.scale.value=y*.5,_.map&&(p.map.value=_.map,t(_.map,p.uvTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function c(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function u(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4)}function h(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap)}function d(p,_){p.metalness.value=_.metalness,_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,p.metalnessMapTransform)),p.roughness.value=_.roughness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,p.roughnessMapTransform)),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function f(p,_,b){p.ior.value=_.ior,_.sheen>0&&(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(p.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,p.sheenColorMapTransform)),_.sheenRoughnessMap&&(p.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,p.sheenRoughnessMapTransform))),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,p.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(p.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===un&&p.clearcoatNormalScale.value.negate())),_.dispersion>0&&(p.dispersion.value=_.dispersion),_.iridescence>0&&(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(p.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,p.iridescenceMapTransform)),_.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,p.transmissionMapTransform)),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(p.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap&&(p.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,p.specularColorMapTransform)),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,_){_.matcap&&(p.matcap.value=_.matcap)}function m(p,_){const b=e.get(_).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DT(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const M=y.program;i.uniformBlockBinding(b,M)}function c(b,y){let M=r[b.id];M===void 0&&(g(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",p));const w=y.program;i.updateUBOMapping(b,w);const P=e.render.frame;s[b.id]!==P&&(d(b),s[b.id]=P)}function u(b){const y=h();b.__bindingPointIndex=y;const M=n.createBuffer(),w=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,w,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=r[b.id],M=b.uniforms,w=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let P=0,A=M.length;P<A;P++){const U=Array.isArray(M[P])?M[P]:[M[P]];for(let Y=0,v=U.length;Y<v;Y++){const S=U[Y];if(f(S,P,Y,w)===!0){const B=S.__offset,T=Array.isArray(S.value)?S.value:[S.value];let E=0;for(let O=0;O<T.length;O++){const R=T[O],F=m(R);typeof R=="number"||typeof R=="boolean"?(S.__data[0]=R,n.bufferSubData(n.UNIFORM_BUFFER,B+E,S.__data)):R.isMatrix3?(S.__data[0]=R.elements[0],S.__data[1]=R.elements[1],S.__data[2]=R.elements[2],S.__data[3]=0,S.__data[4]=R.elements[3],S.__data[5]=R.elements[4],S.__data[6]=R.elements[5],S.__data[7]=0,S.__data[8]=R.elements[6],S.__data[9]=R.elements[7],S.__data[10]=R.elements[8],S.__data[11]=0):(R.toArray(S.__data,E),E+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,y,M,w){const P=b.value,A=y+"_"+M;if(w[A]===void 0)return typeof P=="number"||typeof P=="boolean"?w[A]=P:w[A]=P.clone(),!0;{const U=w[A];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return w[A]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function g(b){const y=b.uniforms;let M=0;const w=16;for(let A=0,U=y.length;A<U;A++){const Y=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,S=Y.length;v<S;v++){const B=Y[v],T=Array.isArray(B.value)?B.value:[B.value];for(let E=0,O=T.length;E<O;E++){const R=T[E],F=m(R),k=M%w,J=k%F.boundary,L=k+J;M+=J,L!==0&&w-L<F.storage&&(M+=w-L),B.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=F.storage}}}const P=M%w;return P>0&&(M+=w-P),b.__size=M,b.__cache={},this}function m(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function _(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}class NT{constructor(e={}){const{canvas:t=nM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const _=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=Gi,this.toneMappingExposure=1;const y=this;let M=!1,w=0,P=0,A=null,U=-1,Y=null;const v=new tt,S=new tt;let B=null;const T=new Me(0);let E=0,O=t.width,R=t.height,F=1,k=null,J=null;const L=new tt(0,0,O,R),V=new tt(0,0,O,R);let K=!1;const ee=new $u;let G=!1,$=!1;const se=new _e,ie=new _e,ae=new N,de=new tt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function re(){return A===null?F:1}let z=i;function Tt(I,j){return t.getContext(I,j)}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dr}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ve,!1),z===null){const j="webgl2";if(z=Tt(j,I),z===null)throw Tt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let We,Je,Oe,rt,Fe,D,C,H,le,he,oe,Ie,ge,Ee,st,fe,Te,Be,ke,we,Qe,He,xt,W;function be(){We=new kb(z),We.init(),He=new ET(z,We),Je=new Db(z,We,e,He),Oe=new MT(z),Je.reverseDepthBuffer&&Oe.buffers.depth.setReversed(!0),rt=new Hb(z),Fe=new oT,D=new bT(z,We,Oe,Fe,Je,He,rt),C=new Ob(y),H=new Bb(y),le=new CM(z),xt=new Ib(z,le),he=new Vb(z,le,rt,xt),oe=new Wb(z,he,le,rt),ke=new Gb(z,Je,D),fe=new Nb(Fe),Ie=new sT(y,C,H,We,Je,xt,fe),ge=new LT(y,Fe),Ee=new lT,st=new pT(We),Be=new Pb(y,C,H,Oe,oe,d,l),Te=new yT(y,oe,Je),W=new DT(z,rt,Je,Oe),we=new Lb(z,We,rt),Qe=new zb(z,We,rt),rt.programs=Ie.programs,y.capabilities=Je,y.extensions=We,y.properties=Fe,y.renderLists=Ee,y.shadowMap=Te,y.state=Oe,y.info=rt}be();const te=new PT(y,z);this.xr=te,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const I=We.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=We.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(I){I!==void 0&&(F=I,this.setSize(O,R,!1))},this.getSize=function(I){return I.set(O,R)},this.setSize=function(I,j,Z=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=I,R=j,t.width=Math.floor(I*F),t.height=Math.floor(j*F),Z===!0&&(t.style.width=I+"px",t.style.height=j+"px"),this.setViewport(0,0,I,j)},this.getDrawingBufferSize=function(I){return I.set(O*F,R*F).floor()},this.setDrawingBufferSize=function(I,j,Z){O=I,R=j,F=Z,t.width=Math.floor(I*Z),t.height=Math.floor(j*Z),this.setViewport(0,0,I,j)},this.getCurrentViewport=function(I){return I.copy(v)},this.getViewport=function(I){return I.copy(L)},this.setViewport=function(I,j,Z,Q){I.isVector4?L.set(I.x,I.y,I.z,I.w):L.set(I,j,Z,Q),Oe.viewport(v.copy(L).multiplyScalar(F).round())},this.getScissor=function(I){return I.copy(V)},this.setScissor=function(I,j,Z,Q){I.isVector4?V.set(I.x,I.y,I.z,I.w):V.set(I,j,Z,Q),Oe.scissor(S.copy(V).multiplyScalar(F).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(I){Oe.setScissorTest(K=I)},this.setOpaqueSort=function(I){k=I},this.setTransparentSort=function(I){J=I},this.getClearColor=function(I){return I.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(I=!0,j=!0,Z=!0){let Q=0;if(I){let q=!1;if(A!==null){const pe=A.texture.format;q=pe===Wc||pe===Gc||pe===Hc}if(q){const pe=A.texture.type,xe=pe===Si||pe===pr||pe===Js||pe===Xr||pe===kc||pe===Vc,Ce=Be.getClearColor(),Pe=Be.getClearAlpha(),Ve=Ce.r,ze=Ce.g,Le=Ce.b;xe?(f[0]=Ve,f[1]=ze,f[2]=Le,f[3]=Pe,z.clearBufferuiv(z.COLOR,0,f)):(g[0]=Ve,g[1]=ze,g[2]=Le,g[3]=Pe,z.clearBufferiv(z.COLOR,0,g))}else Q|=z.COLOR_BUFFER_BIT}j&&(Q|=z.DEPTH_BUFFER_BIT,z.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ee.dispose(),st.dispose(),Fe.dispose(),C.dispose(),H.dispose(),oe.dispose(),xt.dispose(),W.dispose(),Ie.dispose(),te.dispose(),te.removeEventListener("sessionstart",tc),te.removeEventListener("sessionend",Yo),ki.stop()};function ce(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const I=rt.autoReset,j=Te.enabled,Z=Te.autoUpdate,Q=Te.needsUpdate,q=Te.type;be(),rt.autoReset=I,Te.enabled=j,Te.autoUpdate=Z,Te.needsUpdate=Q,Te.type=q}function ve(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ke(I){const j=I.target;j.removeEventListener("dispose",Ke),Pt(j)}function Pt(I){on(I),Fe.remove(I)}function on(I){const j=Fe.get(I).programs;j!==void 0&&(j.forEach(function(Z){Ie.releaseProgram(Z)}),I.isShaderMaterial&&Ie.releaseShaderCache(I))}this.renderBufferDirect=function(I,j,Z,Q,q,pe){j===null&&(j=ue);const xe=q.isMesh&&q.matrixWorld.determinant()<0,Ce=G0(I,j,Z,Q,q);Oe.setMaterial(Q,xe);let Pe=Z.index,Ve=1;if(Q.wireframe===!0){if(Pe=he.getWireframeAttribute(Z),Pe===void 0)return;Ve=2}const ze=Z.drawRange,Le=Z.attributes.position;let gt=ze.start*Ve,wt=(ze.start+ze.count)*Ve;pe!==null&&(gt=Math.max(gt,pe.start*Ve),wt=Math.min(wt,(pe.start+pe.count)*Ve)),Pe!==null?(gt=Math.max(gt,0),wt=Math.min(wt,Pe.count)):Le!=null&&(gt=Math.max(gt,0),wt=Math.min(wt,Le.count));const Ut=wt-gt;if(Ut<0||Ut===1/0)return;xt.setup(q,Q,Ce,Z,Pe);let Ln,ft=we;if(Pe!==null&&(Ln=le.get(Pe),ft=Qe,ft.setIndex(Ln)),q.isMesh)Q.wireframe===!0?(Oe.setLineWidth(Q.wireframeLinewidth*re()),ft.setMode(z.LINES)):ft.setMode(z.TRIANGLES);else if(q.isLine){let Ne=Q.linewidth;Ne===void 0&&(Ne=1),Oe.setLineWidth(Ne*re()),q.isLineSegments?ft.setMode(z.LINES):q.isLineLoop?ft.setMode(z.LINE_LOOP):ft.setMode(z.LINE_STRIP)}else q.isPoints?ft.setMode(z.POINTS):q.isSprite&&ft.setMode(z.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ft.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ne=q._multiDrawStarts,en=q._multiDrawCounts,pt=q._multiDrawCount,ii=Pe?le.get(Pe).bytesPerElement:1,Hs=Fe.get(Q).currentProgram.getUniforms();for(let Dn=0;Dn<pt;Dn++)Hs.setValue(z,"_gl_DrawID",Dn),ft.render(Ne[Dn]/ii,en[Dn])}else if(q.isInstancedMesh)ft.renderInstances(gt,Ut,q.count);else if(Z.isInstancedBufferGeometry){const Ne=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,en=Math.min(Z.instanceCount,Ne);ft.renderInstances(gt,Ut,en)}else ft.render(gt,Ut)};function nt(I,j,Z){I.transparent===!0&&I.side===Nn&&I.forceSinglePass===!1?(I.side=un,I.needsUpdate=!0,Fr(I,j,Z),I.side=xi,I.needsUpdate=!0,Fr(I,j,Z),I.side=Nn):Fr(I,j,Z)}this.compile=function(I,j,Z=null){Z===null&&(Z=I),p=st.get(Z),p.init(j),b.push(p),Z.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),I!==Z&&I.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const Q=new Set;return I.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const pe=q.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){const Ce=pe[xe];nt(Ce,Z,q),Q.add(Ce)}else nt(pe,Z,q),Q.add(pe)}),b.pop(),p=null,Q},this.compileAsync=function(I,j,Z=null){const Q=this.compile(I,j,Z);return new Promise(q=>{function pe(){if(Q.forEach(function(xe){Fe.get(xe).currentProgram.isReady()&&Q.delete(xe)}),Q.size===0){q(I);return}setTimeout(pe,10)}We.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let an=null;function ni(I){an&&an(I)}function tc(){ki.stop()}function Yo(){ki.start()}const ki=new Pp;ki.setAnimationLoop(ni),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(I){an=I,te.setAnimationLoop(I),I===null?ki.stop():ki.start()},te.addEventListener("sessionstart",tc),te.addEventListener("sessionend",Yo),this.render=function(I,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(j),j=te.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,j,A),p=st.get(I,b.length),p.init(j),b.push(p),ie.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ee.setFromProjectionMatrix(ie),$=this.localClippingEnabled,G=fe.init(this.clippingPlanes,$),m=Ee.get(I,_.length),m.init(),_.push(m),te.enabled===!0&&te.isPresenting===!0){const pe=y.xr.getDepthSensingMesh();pe!==null&&Ko(pe,j,-1/0,y.sortObjects)}Ko(I,j,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(k,J),Se=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Se&&Be.addToRenderList(m,I),this.info.render.frame++,G===!0&&fe.beginShadows();const Z=p.state.shadowsArray;Te.render(Z,I,j),G===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,q=m.transmissive;if(p.setupLights(),j.isArrayCamera){const pe=j.cameras;if(q.length>0)for(let xe=0,Ce=pe.length;xe<Ce;xe++){const Pe=pe[xe];ic(Q,q,I,Pe)}Se&&Be.render(I);for(let xe=0,Ce=pe.length;xe<Ce;xe++){const Pe=pe[xe];nc(m,I,Pe,Pe.viewport)}}else q.length>0&&ic(Q,q,I,j),Se&&Be.render(I),nc(m,I,j);A!==null&&(D.updateMultisampleRenderTarget(A),D.updateRenderTargetMipmap(A)),I.isScene===!0&&I.onAfterRender(y,I,j),xt.resetDefaultState(),U=-1,Y=null,b.pop(),b.length>0?(p=b[b.length-1],G===!0&&fe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ko(I,j,Z,Q){if(I.visible===!1)return;if(I.layers.test(j.layers)){if(I.isGroup)Z=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(j);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ee.intersectsSprite(I)){Q&&de.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ie);const xe=oe.update(I),Ce=I.material;Ce.visible&&m.push(I,xe,Ce,Z,de.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ee.intersectsObject(I))){const xe=oe.update(I),Ce=I.material;if(Q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),de.copy(I.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),de.copy(xe.boundingSphere.center)),de.applyMatrix4(I.matrixWorld).applyMatrix4(ie)),Array.isArray(Ce)){const Pe=xe.groups;for(let Ve=0,ze=Pe.length;Ve<ze;Ve++){const Le=Pe[Ve],gt=Ce[Le.materialIndex];gt&&gt.visible&&m.push(I,xe,gt,Z,de.z,Le)}}else Ce.visible&&m.push(I,xe,Ce,Z,de.z,null)}}const pe=I.children;for(let xe=0,Ce=pe.length;xe<Ce;xe++)Ko(pe[xe],j,Z,Q)}function nc(I,j,Z,Q){const q=I.opaque,pe=I.transmissive,xe=I.transparent;p.setupLightsView(Z),G===!0&&fe.setGlobalState(y.clippingPlanes,Z),Q&&Oe.viewport(v.copy(Q)),q.length>0&&Vs(q,j,Z),pe.length>0&&Vs(pe,j,Z),xe.length>0&&Vs(xe,j,Z),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function ic(I,j,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new gr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Qs:Si,minFilter:Mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const pe=p.state.transmissionRenderTarget[Q.id],xe=Q.viewport||v;pe.setSize(xe.z,xe.w);const Ce=y.getRenderTarget();y.setRenderTarget(pe),y.getClearColor(T),E=y.getClearAlpha(),E<1&&y.setClearColor(16777215,.5),y.clear(),Se&&Be.render(Z);const Pe=y.toneMapping;y.toneMapping=Gi;const Ve=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),G===!0&&fe.setGlobalState(y.clippingPlanes,Q),Vs(I,Z,Q),D.updateMultisampleRenderTarget(pe),D.updateRenderTargetMipmap(pe),We.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Le=0,gt=j.length;Le<gt;Le++){const wt=j[Le],Ut=wt.object,Ln=wt.geometry,ft=wt.material,Ne=wt.group;if(ft.side===Nn&&Ut.layers.test(Q.layers)){const en=ft.side;ft.side=un,ft.needsUpdate=!0,zs(Ut,Z,Q,Ln,ft,Ne),ft.side=en,ft.needsUpdate=!0,ze=!0}}ze===!0&&(D.updateMultisampleRenderTarget(pe),D.updateRenderTargetMipmap(pe))}y.setRenderTarget(Ce),y.setClearColor(T,E),Ve!==void 0&&(Q.viewport=Ve),y.toneMapping=Pe}function Vs(I,j,Z){const Q=j.isScene===!0?j.overrideMaterial:null;for(let q=0,pe=I.length;q<pe;q++){const xe=I[q],Ce=xe.object,Pe=xe.geometry,Ve=Q===null?xe.material:Q,ze=xe.group;Ce.layers.test(Z.layers)&&zs(Ce,j,Z,Pe,Ve,ze)}}function zs(I,j,Z,Q,q,pe){I.onBeforeRender(y,j,Z,Q,q,pe),I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),q.onBeforeRender(y,j,Z,Q,I,pe),q.transparent===!0&&q.side===Nn&&q.forceSinglePass===!1?(q.side=un,q.needsUpdate=!0,y.renderBufferDirect(Z,j,Q,q,I,pe),q.side=xi,q.needsUpdate=!0,y.renderBufferDirect(Z,j,Q,q,I,pe),q.side=Nn):y.renderBufferDirect(Z,j,Q,q,I,pe),I.onAfterRender(y,j,Z,Q,q,pe)}function Fr(I,j,Z){j.isScene!==!0&&(j=ue);const Q=Fe.get(I),q=p.state.lights,pe=p.state.shadowsArray,xe=q.state.version,Ce=Ie.getParameters(I,q.state,pe,j,Z),Pe=Ie.getProgramCacheKey(Ce);let Ve=Q.programs;Q.environment=I.isMeshStandardMaterial?j.environment:null,Q.fog=j.fog,Q.envMap=(I.isMeshStandardMaterial?H:C).get(I.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&I.envMap===null?j.environmentRotation:I.envMapRotation,Ve===void 0&&(I.addEventListener("dispose",Ke),Ve=new Map,Q.programs=Ve);let ze=Ve.get(Pe);if(ze!==void 0){if(Q.currentProgram===ze&&Q.lightsStateVersion===xe)return sc(I,Ce),ze}else Ce.uniforms=Ie.getUniforms(I),I.onBeforeCompile(Ce,y),ze=Ie.acquireProgram(Ce,Pe),Ve.set(Pe,ze),Q.uniforms=Ce.uniforms;const Le=Q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Le.clippingPlanes=fe.uniform),sc(I,Ce),Q.needsLights=oc(I),Q.lightsStateVersion=xe,Q.needsLights&&(Le.ambientLightColor.value=q.state.ambient,Le.lightProbe.value=q.state.probe,Le.directionalLights.value=q.state.directional,Le.directionalLightShadows.value=q.state.directionalShadow,Le.spotLights.value=q.state.spot,Le.spotLightShadows.value=q.state.spotShadow,Le.rectAreaLights.value=q.state.rectArea,Le.ltc_1.value=q.state.rectAreaLTC1,Le.ltc_2.value=q.state.rectAreaLTC2,Le.pointLights.value=q.state.point,Le.pointLightShadows.value=q.state.pointShadow,Le.hemisphereLights.value=q.state.hemi,Le.directionalShadowMap.value=q.state.directionalShadowMap,Le.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Le.spotShadowMap.value=q.state.spotShadowMap,Le.spotLightMatrix.value=q.state.spotLightMatrix,Le.spotLightMap.value=q.state.spotLightMap,Le.pointShadowMap.value=q.state.pointShadowMap,Le.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=ze,Q.uniformsList=null,ze}function rc(I){if(I.uniformsList===null){const j=I.currentProgram.getUniforms();I.uniformsList=Ja.seqWithValue(j.seq,I.uniforms)}return I.uniformsList}function sc(I,j){const Z=Fe.get(I);Z.outputColorSpace=j.outputColorSpace,Z.batching=j.batching,Z.batchingColor=j.batchingColor,Z.instancing=j.instancing,Z.instancingColor=j.instancingColor,Z.instancingMorph=j.instancingMorph,Z.skinning=j.skinning,Z.morphTargets=j.morphTargets,Z.morphNormals=j.morphNormals,Z.morphColors=j.morphColors,Z.morphTargetsCount=j.morphTargetsCount,Z.numClippingPlanes=j.numClippingPlanes,Z.numIntersection=j.numClipIntersection,Z.vertexAlphas=j.vertexAlphas,Z.vertexTangents=j.vertexTangents,Z.toneMapping=j.toneMapping}function G0(I,j,Z,Q,q){j.isScene!==!0&&(j=ue),D.resetTextureUnits();const pe=j.fog,xe=Q.isMeshStandardMaterial?j.environment:null,Ce=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zt,Pe=(Q.isMeshStandardMaterial?H:C).get(Q.envMap||xe),Ve=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Le=!!Z.morphAttributes.position,gt=!!Z.morphAttributes.normal,wt=!!Z.morphAttributes.color;let Ut=Gi;Q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ut=y.toneMapping);const Ln=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ft=Ln!==void 0?Ln.length:0,Ne=Fe.get(Q),en=p.state.lights;if(G===!0&&($===!0||I!==Y)){const Gn=I===Y&&Q.id===U;fe.setState(Q,I,Gn)}let pt=!1;Q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==en.state.version||Ne.outputColorSpace!==Ce||q.isBatchedMesh&&Ne.batching===!1||!q.isBatchedMesh&&Ne.batching===!0||q.isBatchedMesh&&Ne.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ne.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ne.instancing===!1||!q.isInstancedMesh&&Ne.instancing===!0||q.isSkinnedMesh&&Ne.skinning===!1||!q.isSkinnedMesh&&Ne.skinning===!0||q.isInstancedMesh&&Ne.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ne.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ne.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ne.instancingMorph===!1&&q.morphTexture!==null||Ne.envMap!==Pe||Q.fog===!0&&Ne.fog!==pe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==fe.numPlanes||Ne.numIntersection!==fe.numIntersection)||Ne.vertexAlphas!==Ve||Ne.vertexTangents!==ze||Ne.morphTargets!==Le||Ne.morphNormals!==gt||Ne.morphColors!==wt||Ne.toneMapping!==Ut||Ne.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,Ne.__version=Q.version);let ii=Ne.currentProgram;pt===!0&&(ii=Fr(Q,j,q));let Hs=!1,Dn=!1,$d=!1;const kt=ii.getUniforms(),ar=Ne.uniforms;if(Oe.useProgram(ii.program)&&(Hs=!0,Dn=!0,$d=!0),Q.id!==U&&(U=Q.id,Dn=!0),Hs||Y!==I){Je.reverseDepthBuffer?(se.copy(I.projectionMatrix),rM(se),sM(se),kt.setValue(z,"projectionMatrix",se)):kt.setValue(z,"projectionMatrix",I.projectionMatrix),kt.setValue(z,"viewMatrix",I.matrixWorldInverse);const Gn=kt.map.cameraPosition;Gn!==void 0&&Gn.setValue(z,ae.setFromMatrixPosition(I.matrixWorld)),Je.logarithmicDepthBuffer&&kt.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&kt.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),Y!==I&&(Y=I,Dn=!0,$d=!0)}if(q.isSkinnedMesh){kt.setOptional(z,q,"bindMatrix"),kt.setOptional(z,q,"bindMatrixInverse");const Gn=q.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),kt.setValue(z,"boneTexture",Gn.boneTexture,D))}q.isBatchedMesh&&(kt.setOptional(z,q,"batchingTexture"),kt.setValue(z,"batchingTexture",q._matricesTexture,D),kt.setOptional(z,q,"batchingIdTexture"),kt.setValue(z,"batchingIdTexture",q._indirectTexture,D),kt.setOptional(z,q,"batchingColorTexture"),q._colorsTexture!==null&&kt.setValue(z,"batchingColorTexture",q._colorsTexture,D));const Xd=Z.morphAttributes;if((Xd.position!==void 0||Xd.normal!==void 0||Xd.color!==void 0)&&ke.update(q,Z,ii),(Dn||Ne.receiveShadow!==q.receiveShadow)&&(Ne.receiveShadow=q.receiveShadow,kt.setValue(z,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ar.envMap.value=Pe,ar.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&j.environment!==null&&(ar.envMapIntensity.value=j.environmentIntensity),Dn&&(kt.setValue(z,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&Wd(ar,$d),pe&&Q.fog===!0&&ge.refreshFogUniforms(ar,pe),ge.refreshMaterialUniforms(ar,Q,F,R,p.state.transmissionRenderTarget[I.id]),Ja.upload(z,rc(Ne),ar,D)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ja.upload(z,rc(Ne),ar,D),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&kt.setValue(z,"center",q.center),kt.setValue(z,"modelViewMatrix",q.modelViewMatrix),kt.setValue(z,"normalMatrix",q.normalMatrix),kt.setValue(z,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Gn=Q.uniformsGroups;for(let jd=0,GL=Gn.length;jd<GL;jd++){const W0=Gn[jd];W.update(W0,ii),W.bind(W0,ii)}}return ii}function Wd(I,j){I.ambientLightColor.needsUpdate=j,I.lightProbe.needsUpdate=j,I.directionalLights.needsUpdate=j,I.directionalLightShadows.needsUpdate=j,I.pointLights.needsUpdate=j,I.pointLightShadows.needsUpdate=j,I.spotLights.needsUpdate=j,I.spotLightShadows.needsUpdate=j,I.rectAreaLights.needsUpdate=j,I.hemisphereLights.needsUpdate=j}function oc(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(I,j,Z){Fe.get(I.texture).__webglTexture=j,Fe.get(I.depthTexture).__webglTexture=Z;const Q=Fe.get(I);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,j){const Z=Fe.get(I);Z.__webglFramebuffer=j,Z.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(I,j=0,Z=0){A=I,w=j,P=Z;let Q=!0,q=null,pe=!1,xe=!1;if(I){const Pe=Fe.get(I);if(Pe.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(Pe.__webglFramebuffer===void 0)D.setupRenderTarget(I);else if(Pe.__hasExternalTextures)D.rebindTextures(I,Fe.get(I.texture).__webglTexture,Fe.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Le=I.depthTexture;if(Pe.__boundDepthTexture!==Le){if(Le!==null&&Fe.has(Le)&&(I.width!==Le.image.width||I.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(I)}}const Ve=I.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(xe=!0);const ze=Fe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ze[j])?q=ze[j][Z]:q=ze[j],pe=!0):I.samples>0&&D.useMultisampledRTT(I)===!1?q=Fe.get(I).__webglMultisampledFramebuffer:Array.isArray(ze)?q=ze[Z]:q=ze,v.copy(I.viewport),S.copy(I.scissor),B=I.scissorTest}else v.copy(L).multiplyScalar(F).floor(),S.copy(V).multiplyScalar(F).floor(),B=K;if(Oe.bindFramebuffer(z.FRAMEBUFFER,q)&&Q&&Oe.drawBuffers(I,q),Oe.viewport(v),Oe.scissor(S),Oe.setScissorTest(B),pe){const Pe=Fe.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,Pe.__webglTexture,Z)}else if(xe){const Pe=Fe.get(I.texture),Ve=j||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pe.__webglTexture,Z||0,Ve)}U=-1},this.readRenderTargetPixels=function(I,j,Z,Q,q,pe,xe){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){Oe.bindFramebuffer(z.FRAMEBUFFER,Ce);try{const Pe=I.texture,Ve=Pe.format,ze=Pe.type;if(!Je.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=I.width-Q&&Z>=0&&Z<=I.height-q&&z.readPixels(j,Z,Q,q,He.convert(Ve),He.convert(ze),pe)}finally{const Pe=A!==null?Fe.get(A).__webglFramebuffer:null;Oe.bindFramebuffer(z.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(I,j,Z,Q,q,pe,xe){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){const Pe=I.texture,Ve=Pe.format,ze=Pe.type;if(!Je.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=I.width-Q&&Z>=0&&Z<=I.height-q){Oe.bindFramebuffer(z.FRAMEBUFFER,Ce);const Le=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Le),z.bufferData(z.PIXEL_PACK_BUFFER,pe.byteLength,z.STREAM_READ),z.readPixels(j,Z,Q,q,He.convert(Ve),He.convert(ze),0);const gt=A!==null?Fe.get(A).__webglFramebuffer:null;Oe.bindFramebuffer(z.FRAMEBUFFER,gt);const wt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await iM(z,wt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Le),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,pe),z.deleteBuffer(Le),z.deleteSync(wt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,j=null,Z=0){I.isTexture!==!0&&(Ra("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,I=arguments[1]);const Q=Math.pow(2,-Z),q=Math.floor(I.image.width*Q),pe=Math.floor(I.image.height*Q),xe=j!==null?j.x:0,Ce=j!==null?j.y:0;D.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,xe,Ce,q,pe),Oe.unbindTexture()},this.copyTextureToTexture=function(I,j,Z=null,Q=null,q=0){I.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,I=arguments[1],j=arguments[2],q=arguments[3]||0,Z=null);let pe,xe,Ce,Pe,Ve,ze;Z!==null?(pe=Z.max.x-Z.min.x,xe=Z.max.y-Z.min.y,Ce=Z.min.x,Pe=Z.min.y):(pe=I.image.width,xe=I.image.height,Ce=0,Pe=0),Q!==null?(Ve=Q.x,ze=Q.y):(Ve=0,ze=0);const Le=He.convert(j.format),gt=He.convert(j.type);D.setTexture2D(j,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const wt=z.getParameter(z.UNPACK_ROW_LENGTH),Ut=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ln=z.getParameter(z.UNPACK_SKIP_PIXELS),ft=z.getParameter(z.UNPACK_SKIP_ROWS),Ne=z.getParameter(z.UNPACK_SKIP_IMAGES),en=I.isCompressedTexture?I.mipmaps[q]:I.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,en.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,en.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ce),z.pixelStorei(z.UNPACK_SKIP_ROWS,Pe),I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,q,Ve,ze,pe,xe,Le,gt,en.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,q,Ve,ze,en.width,en.height,Le,en.data):z.texSubImage2D(z.TEXTURE_2D,q,Ve,ze,pe,xe,Le,gt,en),z.pixelStorei(z.UNPACK_ROW_LENGTH,wt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ut),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ln),z.pixelStorei(z.UNPACK_SKIP_ROWS,ft),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ne),q===0&&j.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(I,j,Z=null,Q=null,q=0){I.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,Q=arguments[1]||null,I=arguments[2],j=arguments[3],q=arguments[4]||0);let pe,xe,Ce,Pe,Ve,ze,Le,gt,wt;const Ut=I.isCompressedTexture?I.mipmaps[q]:I.image;Z!==null?(pe=Z.max.x-Z.min.x,xe=Z.max.y-Z.min.y,Ce=Z.max.z-Z.min.z,Pe=Z.min.x,Ve=Z.min.y,ze=Z.min.z):(pe=Ut.width,xe=Ut.height,Ce=Ut.depth,Pe=0,Ve=0,ze=0),Q!==null?(Le=Q.x,gt=Q.y,wt=Q.z):(Le=0,gt=0,wt=0);const Ln=He.convert(j.format),ft=He.convert(j.type);let Ne;if(j.isData3DTexture)D.setTexture3D(j,0),Ne=z.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)D.setTexture2DArray(j,0),Ne=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const en=z.getParameter(z.UNPACK_ROW_LENGTH),pt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ii=z.getParameter(z.UNPACK_SKIP_PIXELS),Hs=z.getParameter(z.UNPACK_SKIP_ROWS),Dn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ut.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ut.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Pe),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ve),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ze),I.isDataTexture||I.isData3DTexture?z.texSubImage3D(Ne,q,Le,gt,wt,pe,xe,Ce,Ln,ft,Ut.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(Ne,q,Le,gt,wt,pe,xe,Ce,Ln,Ut.data):z.texSubImage3D(Ne,q,Le,gt,wt,pe,xe,Ce,Ln,ft,Ut),z.pixelStorei(z.UNPACK_ROW_LENGTH,en),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ii),z.pixelStorei(z.UNPACK_SKIP_ROWS,Hs),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Dn),q===0&&j.generateMipmaps&&z.generateMipmap(Ne),Oe.unbindTexture()},this.initRenderTarget=function(I){Fe.get(I).__webglFramebuffer===void 0&&D.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?D.setTextureCube(I,0):I.isData3DTexture?D.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?D.setTexture2DArray(I,0):D.setTexture2D(I,0),Oe.unbindTexture()},this.resetState=function(){w=0,P=0,A=null,Oe.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===xu?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===ba?"display-p3":"srgb"}}class OT extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lt,this.environmentIntensity=1,this.environmentRotation=new Lt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class UT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mu,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new N;class th{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new th(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const om=new N,am=new tt,lm=new tt,FT=new N,cm=new _e,el=new N,nh=new oi,um=new _e,ih=new Na;class rh extends rn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vf,this.bindMatrix=new _e,this.bindMatrixInverse=new _e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ei),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,el),this.boundingBox.expandByPoint(el)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,el),this.boundingSphere.expandByPoint(el)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nh.copy(this.boundingSphere),nh.applyMatrix4(r),e.ray.intersectsSphere(nh)!==!1&&(um.copy(r).invert(),ih.copy(e.ray).applyMatrix4(um),!(this.boundingBox!==null&&ih.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ih)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;am.fromBufferAttribute(r.attributes.skinIndex,e),lm.fromBufferAttribute(r.attributes.skinWeight,e),om.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=lm.getComponent(s);if(o!==0){const a=am.getComponent(s);cm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(FT.copy(om).applyMatrix4(cm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class tl extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hm extends Wt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=hn,u=hn,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dm=new _e,BT=new _e;class wr{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new _e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new _e;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:BT;dm.multiplyMatrices(a,t[s]),dm.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new wr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new hm(t,e,e,On,$n);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new tl),this.bones.push(o),this.boneInverses.push(new _e().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class sh extends ot{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new _e,fm=new _e,nl=[],pm=new Ei,kT=new _e,po=new rn,mo=new oi;class VT extends rn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,kT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gs),pm.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(pm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gs),mo.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(po.geometry=this.geometry,po.material=this.material,po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(i),e.ray.intersectsSphere(mo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,gs),fm.multiplyMatrices(i,gs),po.matrixWorld=fm,po.raycast(e,nl);for(let o=0,a=nl.length;o<a;o++){const l=nl[o];l.instanceId=s,l.object=this,t.push(l)}nl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new hm(new Float32Array(r*this.count),r,this.count,zc,$n));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ji extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const il=new N,rl=new N,mm=new _e,go=new Na,sl=new oi,oh=new N,gm=new N;class _o extends lt{constructor(e=new Dt,t=new Ji){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)il.fromBufferAttribute(t,r-1),rl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=il.distanceTo(rl);e.setAttribute("lineDistance",new Jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),sl.radius+=s,e.ray.intersectsSphere(sl)===!1)return;mm.copy(r).invert(),go.copy(e.ray).applyMatrix4(mm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let m=f,p=g-1;m<p;m+=c){const _=u.getX(m),b=u.getX(m+1),y=ol(this,e,go,l,_,b);y&&t.push(y)}if(this.isLineLoop){const m=u.getX(g-1),p=u.getX(f),_=ol(this,e,go,l,m,p);_&&t.push(_)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let m=f,p=g-1;m<p;m+=c){const _=ol(this,e,go,l,m,m+1);_&&t.push(_)}if(this.isLineLoop){const m=ol(this,e,go,l,g-1,f);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ol(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(il.fromBufferAttribute(o,r),rl.fromBufferAttribute(o,s),t.distanceSqToSegment(il,rl,oh,gm)>i)return;oh.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(oh);if(!(l<e.near||l>e.far))return{distance:l,point:gm.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const _m=new N,vm=new N;class vo extends _o{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)_m.fromBufferAttribute(t,r),vm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+_m.distanceTo(vm);e.setAttribute("lineDistance",new Jt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zT extends _o{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ym extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xm=new _e,ah=new Na,al=new oi,ll=new N;class HT extends lt{constructor(e=new Dt,t=new ym){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(r),al.radius+=s,e.ray.intersectsSphere(al)===!1)return;xm.copy(r).invert(),ah.copy(e.ray).applyMatrix4(xm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,m=f;g<m;g++){const p=c.getX(g);ll.fromBufferAttribute(h,p),Mm(ll,p,l,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,m=f;g<m;g++)ll.fromBufferAttribute(h,g),Mm(ll,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mm(n,e,t,i,r,s,o){const a=ah.distanceSqToPoint(n);if(a<t){const l=new N;ah.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class GT{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ge:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new N,r=[],s=[],o=[],a=new N,l=new _e;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Yt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Yt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}const WT={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Sm(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,f;if(i&&(s=YT(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<r;g+=t)h=n[g],d=n[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return yo(s,o,t,a,l,f,0),o}};function Sm(n,e,t,i,r){let s,o;if(r===ow(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Tm(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Tm(s,n[s],n[s+1],o);return o&&cl(o,o.next)&&(Mo(o),o=o.next),o}function Ar(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(cl(t,t.next)||Ct(t.prev,t,t.next)===0)){if(Mo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function yo(n,e,t,i,r,s,o){if(!n)return;!o&&s&&ew(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?XT(n,i,r,s):$T(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Mo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=jT(Ar(n),e,t),yo(n,e,t,i,r,s,2)):o===2&&qT(n,e,t,i,r,s):yo(Ar(n),e,t,i,r,s,1);break}}}function $T(n){const e=n.prev,t=n,i=n.next;if(Ct(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&_s(r,a,s,l,o,c,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function XT(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Ct(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,m=a>l?a>c?a:c:l>c?l:c,p=u>h?u>d?u:d:h>d?h:d,_=lh(f,g,e,t,i),b=lh(m,p,e,t,i);let y=n.prevZ,M=n.nextZ;for(;y&&y.z>=_&&M&&M.z<=b;){if(y.x>=f&&y.x<=m&&y.y>=g&&y.y<=p&&y!==r&&y!==o&&_s(a,u,l,h,c,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=m&&M.y>=g&&M.y<=p&&M!==r&&M!==o&&_s(a,u,l,h,c,d,M.x,M.y)&&Ct(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=_;){if(y.x>=f&&y.x<=m&&y.y>=g&&y.y<=p&&y!==r&&y!==o&&_s(a,u,l,h,c,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=b;){if(M.x>=f&&M.x<=m&&M.y>=g&&M.y<=p&&M!==r&&M!==o&&_s(a,u,l,h,c,d,M.x,M.y)&&Ct(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function jT(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!cl(r,s)&&bm(r,i,i.next,s)&&xo(r,s)&&xo(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Mo(i),Mo(i.next),i=n=s),i=i.next}while(i!==n);return Ar(i)}function qT(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&iw(o,a)){let l=Em(o,a);o=Ar(o,o.next),l=Ar(l,l.next),yo(o,e,t,i,r,s,0),yo(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function YT(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Sm(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(nw(c));for(r.sort(KT),s=0;s<r.length;s++)t=ZT(r[s],t);return t}function KT(n,e){return n.x-e.x}function ZT(n,e){const t=JT(n,e);if(!t)return e;const i=Em(t,n);return Ar(i,i.next),Ar(t,t.next)}function JT(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>i&&(i=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&_s(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),xo(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&QT(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function QT(n,e){return Ct(n.prev,n,e.prev)<0&&Ct(e.next,n,n.next)<0}function ew(n,e,t,i){let r=n;do r.z===0&&(r.z=lh(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,tw(r)}function tw(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function lh(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function nw(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function _s(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function iw(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!rw(n,e)&&(xo(n,e)&&xo(e,n)&&sw(n,e)&&(Ct(n.prev,n,e.prev)||Ct(n,e.prev,e))||cl(n,e)&&Ct(n.prev,n,n.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function cl(n,e){return n.x===e.x&&n.y===e.y}function bm(n,e,t,i){const r=hl(Ct(n,e,t)),s=hl(Ct(n,e,i)),o=hl(Ct(t,i,n)),a=hl(Ct(t,i,e));return!!(r!==s&&o!==a||r===0&&ul(n,t,e)||s===0&&ul(n,i,e)||o===0&&ul(t,n,i)||a===0&&ul(t,e,i))}function ul(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function hl(n){return n>0?1:n<0?-1:0}function rw(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&bm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function xo(n,e){return Ct(n.prev,n,n.next)<0?Ct(n,e,n.next)>=0&&Ct(n,n.prev,e)>=0:Ct(n,e,n.prev)<0||Ct(n,n.next,e)<0}function sw(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Em(n,e){const t=new ch(n.i,n.x,n.y),i=new ch(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Tm(n,e,t,i){const r=new ch(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Mo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ch(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ow(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class uh{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return uh.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];wm(e),Am(i,e);let o=e.length;t.forEach(wm);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Am(i,t[l]);const a=WT.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function wm(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Am(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class hh extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends hh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class dh extends Rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class aw extends Rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function dl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lw(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function cw(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Rm(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Cm(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class So{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class uw extends So{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yr,endingEnd:Yr}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kr:s=e,a=2*t-i;break;case Sa:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Kr:o=e,l=2*i-t;break;case Sa:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),m=g*g,p=m*g,_=-d*p+2*d*m-d*g,b=(1+d)*p+(-1.5-2*d)*m+(-.5+d)*g+1,y=(-1-f)*p+(1.5+f)*m+.5*g,M=f*p-f*m;for(let w=0;w!==a;++w)s[w]=_*o[u+w]+b*o[c+w]+y*o[l+w]+M*o[h+w];return s}}class Pm extends So{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class hw extends So{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ci{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dl(t,this.TimeBufferType),this.values=dl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:dl(e.times,Array),values:dl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case eo:t=this.InterpolantFactoryMethodDiscrete;break;case to:t=this.InterpolantFactoryMethodLinear;break;case _u:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eo;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return _u}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&lw(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===_u,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){const m=t[h+g];if(m!==t[d+g]||m!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ci.prototype.TimeBufferType=Float32Array,ci.prototype.ValueBufferType=Float32Array,ci.prototype.DefaultInterpolation=to;class vs extends ci{constructor(e,t,i){super(e,t,i)}}vs.prototype.ValueTypeName="bool",vs.prototype.ValueBufferType=Array,vs.prototype.DefaultInterpolation=eo,vs.prototype.InterpolantFactoryMethodLinear=void 0,vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Im extends ci{}Im.prototype.ValueTypeName="color";class Rr extends ci{}Rr.prototype.ValueTypeName="number";class dw extends So{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)De.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ui extends ci{InterpolantFactoryMethodLinear(e){return new dw(this.times,this.values,this.getValueSize(),e)}}ui.prototype.ValueTypeName="quaternion",ui.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends ci{constructor(e,t,i){super(e,t,i)}}ys.prototype.ValueTypeName="string",ys.prototype.ValueBufferType=Array,ys.prototype.DefaultInterpolation=eo,ys.prototype.InterpolantFactoryMethodLinear=void 0,ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Li extends ci{}Li.prototype.ValueTypeName="vector";class xs{constructor(e="",t=-1,i=[],r=vu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(pw(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(ci.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=cw(l);l=Rm(l,1,u),c=Rm(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Rr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,g,m){if(f.length!==0){const p=[],_=[];Cm(f,p,_,g),p.length!==0&&m.push(new h(d,p,_))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let m=0;m<d[g].morphTargets.length;m++)f[d[g].morphTargets[m]]=-1;for(const m in f){const p=[],_=[];for(let b=0;b!==d[g].morphTargets.length;++b){const y=d[g];p.push(y.time),_.push(y.morphTarget===m?1:0)}r.push(new Rr(".morphTargetInfluence["+m+"]",p,_))}l=f.length*o}else{const f=".bones["+t[h].name+"]";i(Li,f+".position",d,"pos",r),i(ui,f+".quaternion",d,"rot",r),i(Li,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fw(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rr;case"vector":case"vector2":case"vector3":case"vector4":return Li;case"color":return Im;case"quaternion":return ui;case"bool":case"boolean":return vs;case"string":return ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function pw(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fw(n.type);if(n.times===void 0){const t=[],i=[];Cm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Qi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class mw{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const gw=new mw;class Di{constructor(e){this.manager=e!==void 0?e:gw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Di.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class _w extends Error{constructor(e,t){super(e),this.response=t}}class fh extends Di{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Qi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:i,onError:r});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ni[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let m=0;const p=new ReadableStream({start(_){b();function b(){h.read().then(({done:y,value:M})=>{if(y)_.close();else{m+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:f});for(let P=0,A=u.length;P<A;P++){const U=u[P];U.onProgress&&U.onProgress(w)}_.enqueue(M),b()}},y=>{_.error(y)})}}});return new Response(p)}else throw new _w(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Qi.add(e,c);const u=Ni[e];delete Ni[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ni[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Lm extends Di{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Qi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=so("img");function l(){u(),Qi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Dm extends Di{constructor(e){super(e)}load(e,t,i,r){const s=new Wt,o=new Lm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class fl extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ph=new _e,Nm=new N,Om=new N;class mh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $u,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nm),Om.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Om),t.updateMatrixWorld(),ph.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ph)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vw extends mh{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Jr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Um extends fl{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new vw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fm=new _e,bo=new N,gh=new N;class yw extends mh{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),bo.setFromMatrixPosition(e.matrixWorld),i.position.copy(bo),gh.copy(i.position),gh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(gh),i.updateMatrixWorld(),r.makeTranslation(-bo.x,-bo.y,-bo.z),Fm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fm)}}class _h extends fl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new yw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xw extends mh{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vh extends fl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new xw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bm extends fl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ms{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Mw extends Di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Qi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Qi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Qi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Qi.add(e,l),s.manager.itemStart(e)}}class Sw{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){De.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const o=this._workIndex*s;De.multiplyQuaternionsFlat(e,o,e,t,e,i),De.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[i+o]*r}}}const yh="\\[\\]\\.:\\/",bw=new RegExp("["+yh+"]","g"),xh="[^"+yh+"]",Ew="[^"+yh.replace("\\.","")+"]",Tw=/((?:WC+[\/:])*)/.source.replace("WC",xh),ww=/(WCOD+)?/.source.replace("WCOD",Ew),Aw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),Rw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),Cw=new RegExp("^"+Tw+ww+Aw+Rw+"$"),Pw=["material","materials","bones","map"];class Iw{constructor(e,t,i){const r=i||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class it{constructor(e,t,i){this.path=t,this.parsedPath=i||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,i):new it(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bw,"")}static parseTrackName(e){const t=Cw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);Pw.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=Iw,it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray],it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Lw{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Yr,endingEnd:Yr};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Tx,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ax:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case vu:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===wx;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===Ex){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Kr,r.endingEnd=Kr):(e?r.endingStart=this.zeroSlopeAtStart?Kr:Yr:r.endingStart=Sa,t?r.endingEnd=this.zeroSlopeAtEnd?Kr:Yr:r.endingEnd=Sa)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}}const Dw=new Float32Array(1);class Nw extends mr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=r[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const m=t&&t._propertyBindings[h].binding.parsedPath;g=new Sw(it.create(i,f,m),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Pm(new Float32Array(2),new Float32Array(2),1,Dw),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?xs.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=vu),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===i)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new Lw(this,o,t,i);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?xs.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class km{constructor(e,t,i,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class Ow extends vo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Dt;r.setAttribute("position",new Jt(t,3)),r.setAttribute("color",new Jt(i,3));const s=new Ji({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Me,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dr}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dr);function Uw(n){return n!=null&&!Number.isNaN(n)}function Mh(n){return Uw(n)&&typeof n=="object"}function Fw(n){return Mh(n)&&typeof n.x=="number"}function Vm(n){return typeof n=="number"?n:Fw(n)?n.x:n[0]}function Bw(n){return Array.isArray(n)&&n.length>1}function zm(n){return Mh(n)&&typeof n.x=="number"&&typeof n.y=="number"}function kw(n){return zm(n)||Bw(n)}function Hm(n){if(kw(n))return zm(n)?n.y:n[1];throw new Error("yOf: point is not Point2")}function Vw(n){return Array.isArray(n)&&n.length>2}function Gm(n){return Mh(n)&&typeof n.x=="number"&&typeof n.y=="number"&&typeof n.z=="number"}function zw(n){return Gm(n)||Vw(n)}function Wm(n){if(zw(n))return Gm(n)?n.z:n[2];throw new Error("zOf: point is not Point3")}/*!
 * @pixiv/three-vrm v3.3.6
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */var pl=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),at=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),$m=class extends lt{constructor(n){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${n}`,this.expressionName=n,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(n){this._binds.push(n)}deleteBind(n){const e=this._binds.indexOf(n);e>=0&&this._binds.splice(e,1)}applyWeight(n){var e;let t=this.outputWeight;t*=(e=n==null?void 0:n.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(i=>i.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(n=>n.clearAppliedWeight())}};function Xm(n,e,t){var i,r;const s=n.parser.json,o=(i=s.nodes)==null?void 0:i[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const a=o.mesh;if(a==null)return null;const l=(r=s.meshes)==null?void 0:r[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;const c=l.primitives.length,u=[];return t.traverse(h=>{u.length<c&&h.isMesh&&u.push(h)}),u}function jm(n,e){return at(this,null,function*(){const t=yield n.parser.getDependency("node",e);return Xm(n,e,t)})}function qm(n){return at(this,null,function*(){const e=yield n.parser.getDependencies("node"),t=new Map;return e.forEach((i,r)=>{const s=Xm(n,r,i);s!=null&&t.set(r,s)}),t})}var Sh={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function Ym(n){return Math.max(Math.min(n,1),0)}var Km=class $0{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(Sh));return Object.entries(this._expressionMap).forEach(([i,r])=>{t.has(i)&&(e[i]=r)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(Sh));return Object.entries(this._expressionMap).forEach(([i,r])=>{t.has(i)||(e[i]=r)}),e}copy(e){return this._expressions.concat().forEach(i=>{this.unregisterExpression(i)}),e._expressions.forEach(i=>{this.registerExpression(i)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new $0().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const i=this.getExpression(e);return(t=i==null?void 0:i.weight)!=null?t:null}setValue(e,t){const i=this.getExpression(e);i&&(i.weight=Ym(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let i=1;const r=t.expressionName;this.blinkExpressionNames.indexOf(r)!==-1&&(i*=e.blink),this.lookAtExpressionNames.indexOf(r)!==-1&&(i*=e.lookAt),this.mouthExpressionNames.indexOf(r)!==-1&&(i*=e.mouth),t.applyWeight({multiplier:i})})}_calculateWeightMultipliers(){let e=1,t=1,i=1;return this._expressions.forEach(r=>{e-=r.overrideBlinkAmount,t-=r.overrideLookAtAmount,i-=r.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),i=Math.max(0,i),{blink:e,lookAt:t,mouth:i}}},Eo={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",RimColor:"rimColor",OutlineColor:"outlineColor"},Hw={_Color:Eo.Color,_EmissionColor:Eo.EmissionColor,_ShadeColor:Eo.ShadeColor,_RimColor:Eo.RimColor,_OutlineColor:Eo.OutlineColor},Gw=new Me,Zm=class X0{constructor({material:e,type:t,targetValue:i,targetAlpha:r}){this.material=e,this.type=t,this.targetValue=i,this.targetAlpha=r??1;const s=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:s,alpha:o}}applyWeight(e){const{color:t,alpha:i}=this._state;if(t!=null){const{propertyName:r,deltaValue:s}=t,o=this.material[r];o!=null&&o.add(Gw.copy(s).multiplyScalar(e))}if(i!=null){const{propertyName:r,deltaValue:s}=i;this.material[r]!=null&&(this.material[r]+=s*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:i,initialValue:r}=e,s=this.material[i];s!=null&&s.copy(r)}if(t!=null){const{propertyName:i,initialValue:r}=t;this.material[i]!=null&&(this.material[i]=r)}}_initColorBindState(){var e,t,i;const{material:r,type:s,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[s])==null?void 0:e[0])!=null?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(i=r.name)!=null?i:"(no name)"}, the type ${s} but the material or the type is not supported.`),null;const u=r[l].clone(),h=new Me(o.r-u.r,o.g-u.g,o.b-u.b);return{propertyName:l,initialValue:u,deltaValue:h}}_initAlphaBindState(){var e,t,i;const{material:r,type:s,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[s])==null?void 0:e[1])!=null?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(i=r.name)!=null?i:"(no name)"}, the type ${s} but the material or the type does not support alpha.`),null;if(l==null)return null;const c=r[l],u=o-c;return{propertyName:l,initialValue:c,deltaValue:u}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(X0._propertyNameMapMap).find(([i])=>this.material[i]===!0))==null?void 0:e[1])!=null?t:null}};Zm._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var Jm=Zm,ml=class{constructor({primitives:n,index:e,weight:t}){this.primitives=n,this.index=e,this.weight=t}applyWeight(n){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*n)})}clearAppliedWeight(){this.primitives.forEach(n=>{var e;((e=n.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(n.morphTargetInfluences[this.index]=0)})}},Qm=new Ge,eg=class j0{constructor({material:e,scale:t,offset:i}){var r,s;this.material=e,this.scale=t,this.offset=i;const o=(r=Object.entries(j0._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:r[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(s=e.name)!=null?s:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;const c=(l=e[a])==null?void 0:l.clone();if(!c)return null;e[a]=c;const u=c.offset.clone(),h=c.repeat.clone(),d=i.clone().sub(u),f=t.clone().sub(h);this._properties.push({name:a,initialOffset:u,deltaOffset:d,initialScale:h,deltaScale:f})}))}applyWeight(e){this._properties.forEach(t=>{const i=this.material[t.name];i!==void 0&&(i.offset.add(Qm.copy(t.deltaOffset).multiplyScalar(e)),i.repeat.add(Qm.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};eg._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var tg=eg,Ww=new Set(["1.0","1.0-beta"]),ng=class q0{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return at(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return at(this,null,function*(){const t=yield this._v1Import(e);if(t)return t;const i=yield this._v0Import(e);return i||null})}_v1Import(e){return at(this,null,function*(){var t,i;const r=this.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(i=r.extensions)==null?void 0:i.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!Ww.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.expressions;if(!l)return null;const c=new Set(Object.values(Sh)),u=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([d,f])=>{if(f!=null){if(!c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${d}" detected. Ignoring the expression`);return}u.set(d,f)}}),l.custom!=null&&Object.entries(l.custom).forEach(([d,f])=>{if(c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${d}". Ignoring the expression`);return}u.set(d,f)});const h=new Km;return yield Promise.all(Array.from(u.entries()).map(d=>at(this,[d],function*([f,g]){var m,p,_,b,y,M,w;const P=new $m(f);if(e.scene.add(P),P.isBinary=(m=g.isBinary)!=null?m:!1,P.overrideBlink=(p=g.overrideBlink)!=null?p:"none",P.overrideLookAt=(_=g.overrideLookAt)!=null?_:"none",P.overrideMouth=(b=g.overrideMouth)!=null?b:"none",(y=g.morphTargetBinds)==null||y.forEach(A=>at(this,null,function*(){var U;if(A.node===void 0||A.index===void 0)return;const Y=yield jm(e,A.node),v=A.index;if(!Y.every(S=>Array.isArray(S.morphTargetInfluences)&&v<S.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${g.name} attempts to index morph #${v} but not found.`);return}P.addBind(new ml({primitives:Y,index:v,weight:(U=A.weight)!=null?U:1}))})),g.materialColorBinds||g.textureTransformBinds){const A=[];e.scene.traverse(U=>{const Y=U.material;Y&&(Array.isArray(Y)?A.push(...Y):A.push(Y))}),(M=g.materialColorBinds)==null||M.forEach(U=>at(this,null,function*(){A.filter(v=>{var S;const B=(S=this.parser.associations.get(v))==null?void 0:S.materials;return U.material===B}).forEach(v=>{P.addBind(new Jm({material:v,type:U.type,targetValue:new Me().fromArray(U.targetValue),targetAlpha:U.targetValue[3]}))})})),(w=g.textureTransformBinds)==null||w.forEach(U=>at(this,null,function*(){A.filter(v=>{var S;const B=(S=this.parser.associations.get(v))==null?void 0:S.materials;return U.material===B}).forEach(v=>{var S,B;P.addBind(new tg({material:v,offset:new Ge().fromArray((S=U.offset)!=null?S:[0,0]),scale:new Ge().fromArray((B=U.scale)!=null?B:[1,1])}))})}))}h.registerExpression(P)}))),h})}_v0Import(e){return at(this,null,function*(){var t;const i=this.parser.json,r=(t=i.extensions)==null?void 0:t.VRM;if(!r)return null;const s=r.blendShapeMaster;if(!s)return null;const o=new Km,a=s.blendShapeGroups;if(!a)return o;const l=new Set;return yield Promise.all(a.map(c=>at(this,null,function*(){var u;const h=c.presetName,d=h!=null&&q0.v0v1PresetNameMap[h]||null,f=d??c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${h} has duplicated entries. Ignoring the expression`);return}l.add(f);const g=new $m(f);e.scene.add(g),g.isBinary=(u=c.isBinary)!=null?u:!1,c.binds&&c.binds.forEach(p=>at(this,null,function*(){var _;if(p.mesh===void 0||p.index===void 0)return;const b=[];(_=i.nodes)==null||_.forEach((M,w)=>{M.mesh===p.mesh&&b.push(w)});const y=p.index;yield Promise.all(b.map(M=>at(this,null,function*(){var w;const P=yield jm(e,M);if(!P.every(A=>Array.isArray(A.morphTargetInfluences)&&y<A.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${y}th morph but not found.`);return}g.addBind(new ml({primitives:P,index:y,weight:.01*((w=p.weight)!=null?w:100)}))})))}));const m=c.materialValues;m&&m.length!==0&&m.forEach(p=>{if(p.materialName===void 0||p.propertyName===void 0||p.targetValue===void 0)return;const _=[];e.scene.traverse(y=>{if(y.material){const M=y.material;Array.isArray(M)?_.push(...M.filter(w=>(w.name===p.materialName||w.name===p.materialName+" (Outline)")&&_.indexOf(w)===-1)):M.name===p.materialName&&_.indexOf(M)===-1&&_.push(M)}});const b=p.propertyName;_.forEach(y=>{if(b==="_MainTex_ST"){const w=new Ge(p.targetValue[0],p.targetValue[1]),P=new Ge(p.targetValue[2],p.targetValue[3]);P.y=1-P.y-w.y,g.addBind(new tg({material:y,scale:w,offset:P}));return}const M=Hw[b];if(M){g.addBind(new Jm({material:y,type:M,targetValue:new Me().fromArray(p.targetValue),targetAlpha:p.targetValue[3]}));return}console.warn(b+" is not supported")})}),o.registerExpression(g)}))),o})}};ng.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var $w=ng,bh=class Gs{constructor(e,t){this._firstPersonOnlyLayer=Gs.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Gs.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new Gs(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Gs.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=Gs.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(i=>{i.meshes.forEach(r=>{i.type==="firstPersonOnly"?(r.layers.set(this._firstPersonOnlyLayer),r.traverse(s=>s.layers.set(this._firstPersonOnlyLayer))):i.type==="thirdPersonOnly"?(r.layers.set(this._thirdPersonOnlyLayer),r.traverse(s=>s.layers.set(this._thirdPersonOnlyLayer))):i.type==="auto"&&this._createHeadlessModel(r)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,i,r){let s=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){const a=e[o],l=e[o+1],c=e[o+2],u=t[a],h=i[a];if(u[0]>0&&r.includes(h[0])||u[1]>0&&r.includes(h[1])||u[2]>0&&r.includes(h[2])||u[3]>0&&r.includes(h[3]))continue;const d=t[l],f=i[l];if(d[0]>0&&r.includes(f[0])||d[1]>0&&r.includes(f[1])||d[2]>0&&r.includes(f[2])||d[3]>0&&r.includes(f[3]))continue;const g=t[c],m=i[c];g[0]>0&&r.includes(m[0])||g[1]>0&&r.includes(m[1])||g[2]>0&&r.includes(m[2])||g[3]>0&&r.includes(m[3])||(e[s++]=a,e[s++]=l,e[s++]=c)}return s}_createErasedMesh(e,t){const i=new rh(e.geometry.clone(),e.material);i.name=`${e.name}(erase)`,i.frustumCulled=e.frustumCulled,i.layers.set(this._firstPersonOnlyLayer);const r=i.geometry,s=r.getAttribute("skinIndex"),o=s instanceof km?[]:s.array,a=[];for(let m=0;m<o.length;m+=4)a.push([o[m],o[m+1],o[m+2],o[m+3]]);const l=r.getAttribute("skinWeight"),c=l instanceof km?[]:l.array,u=[];for(let m=0;m<c.length;m+=4)u.push([c[m],c[m+1],c[m+2],c[m+3]]);const h=r.getIndex();if(!h)throw new Error("The geometry doesn't have an index buffer");const d=Array.from(h.array),f=this._excludeTriangles(d,u,a,t),g=[];for(let m=0;m<f;m++)g[m]=d[m];return r.setIndex(g),e.onBeforeRender&&(i.onBeforeRender=e.onBeforeRender),i.bind(new wr(e.skeleton.bones,e.skeleton.boneInverses),new _e),i}_createHeadlessModelForSkinnedMesh(e,t){const i=[];if(t.skeleton.bones.forEach((s,o)=>{this._isEraseTarget(s)&&i.push(o)}),!i.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const r=this._createErasedMesh(t,i);e.add(r)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new pn;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(i=>i.type==="SkinnedMesh").forEach(i=>{const r=i;this._createHeadlessModelForSkinnedMesh(t,r)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};bh.DEFAULT_FIRSTPERSON_ONLY_LAYER=9,bh.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var ig=bh,Xw=new Set(["1.0","1.0-beta"]),jw=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(n){this.parser=n}afterRoot(n){return at(this,null,function*(){const e=n.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");n.userData.vrmFirstPerson=yield this._import(n,e)}})}_import(n,e){return at(this,null,function*(){if(e==null)return null;const t=yield this._v1Import(n,e);if(t)return t;const i=yield this._v0Import(n,e);return i||null})}_v1Import(n,e){return at(this,null,function*(){var t,i;const r=this.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(i=r.extensions)==null?void 0:i.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!Xw.has(a))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.firstPerson,c=[],u=yield qm(n);return Array.from(u.entries()).forEach(([h,d])=>{var f,g;const m=(f=l==null?void 0:l.meshAnnotations)==null?void 0:f.find(p=>p.node===h);c.push({meshes:d,type:(g=m==null?void 0:m.type)!=null?g:"auto"})}),new ig(e,c)})}_v0Import(n,e){return at(this,null,function*(){var t;const i=this.parser.json,r=(t=i.extensions)==null?void 0:t.VRM;if(!r)return null;const s=r.firstPerson;if(!s)return null;const o=[],a=yield qm(n);return Array.from(a.entries()).forEach(([l,c])=>{const u=i.nodes[l],h=s.meshAnnotations?s.meshAnnotations.find(d=>d.mesh===u.mesh):void 0;o.push({meshes:c,type:this._convertV0FlagToV1Type(h==null?void 0:h.firstPersonFlag)})}),new ig(e,o)})}_convertV0FlagToV1Type(n){return n==="FirstPersonOnly"?"firstPersonOnly":n==="ThirdPersonOnly"?"thirdPersonOnly":n==="Both"?"both":"auto"}},rg=new N,sg=new N,qw=new De,og=class extends pn{constructor(n){super(),this.vrmHumanoid=n,this._boneAxesMap=new Map,Object.values(n.humanBones).forEach(e=>{const t=new Ow(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(n=>{n.geometry.dispose(),n.material.dispose()})}updateMatrixWorld(n){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(rg,qw,sg);const i=rg.set(.1,.1,.1).divide(sg);t.matrix.copy(e.node.matrixWorld).scale(i)}),super.updateMatrixWorld(n)}},Eh=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],Yw={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function ag(n){return n.invert?n.invert():n.inverse(),n}var Cr=new N,Pr=new De,Th=class{constructor(n){this.humanBones=n,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const n={};return Object.keys(this.humanBones).forEach(e=>{const t=e,i=this.getBoneNode(t);i&&(Cr.copy(i.position),Pr.copy(i.quaternion),n[t]={position:Cr.toArray(),rotation:Pr.toArray()})}),n}getPose(){const n={};return Object.keys(this.humanBones).forEach(e=>{const t=e,i=this.getBoneNode(t);if(!i)return;Cr.set(0,0,0),Pr.identity();const r=this.restPose[t];r!=null&&r.position&&Cr.fromArray(r.position).negate(),r!=null&&r.rotation&&ag(Pr.fromArray(r.rotation)),Cr.add(i.position),Pr.premultiply(i.quaternion),n[t]={position:Cr.toArray(),rotation:Pr.toArray()}}),n}setPose(n){Object.entries(n).forEach(([e,t])=>{const i=e,r=this.getBoneNode(i);if(!r)return;const s=this.restPose[i];s&&(t!=null&&t.position&&(r.position.fromArray(t.position),s.position&&r.position.add(Cr.fromArray(s.position))),t!=null&&t.rotation&&(r.quaternion.fromArray(t.rotation),s.rotation&&r.quaternion.multiply(Pr.fromArray(s.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([n,e])=>{const t=this.getBoneNode(n);t&&(e!=null&&e.position&&t.position.fromArray(e.position),e!=null&&e.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(n){var e;return(e=this.humanBones[n])!=null?e:void 0}getBoneNode(n){var e,t;return(t=(e=this.humanBones[n])==null?void 0:e.node)!=null?t:null}},wh=new N,Kw=new De,Zw=new N,lg=class Y0 extends Th{static _setupTransforms(e){const t=new lt;t.name="VRMHumanoidRig";const i={},r={},s={};Eh.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const u=new N,h=new De;c.updateWorldMatrix(!0,!1),c.matrixWorld.decompose(u,h,wh),i[a]=u,r[a]=c.quaternion.clone();const d=new De;(l=c.parent)==null||l.matrixWorld.decompose(wh,d,wh),s[a]=d}});const o={};return Eh.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const u=i[a];let h=a,d;for(;d==null&&(h=Yw[h],h!=null);)d=i[h];const f=new lt;f.name="Normalized_"+c.name,(h?(l=o[h])==null?void 0:l.node:t).add(f),f.position.copy(u),d&&f.position.sub(d),o[a]={node:f}}}),{rigBones:o,root:t,parentWorldRotations:s,boneRotations:r}}constructor(e){const{rigBones:t,root:i,parentWorldRotations:r,boneRotations:s}=Y0._setupTransforms(e);super(t),this.original=e,this.root=i,this._parentWorldRotations=r,this._boneRotations=s}update(){Eh.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const i=this.getBoneNode(e),r=this._parentWorldRotations[e],s=Kw.copy(r).invert(),o=this._boneRotations[e];if(t.quaternion.copy(i.quaternion).multiply(r).premultiply(s).multiply(o),e==="hips"){const a=i.getWorldPosition(Zw);t.parent.updateWorldMatrix(!0,!1);const l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}},cg=class K0{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var i;this.autoUpdateHumanBones=(i=t==null?void 0:t.autoUpdateHumanBones)!=null?i:!0,this._rawHumanBones=new Th(e),this._normalizedHumanBones=new lg(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new Th(e.humanBones),this._normalizedHumanBones=new lg(this._rawHumanBones),this}clone(){return new K0(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},Jw={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},Qw=new Set(["1.0","1.0-beta"]),ug={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},eA=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(n,e){this.parser=n,this.helperRoot=e==null?void 0:e.helperRoot,this.autoUpdateHumanBones=e==null?void 0:e.autoUpdateHumanBones}afterRoot(n){return at(this,null,function*(){n.userData.vrmHumanoid=yield this._import(n)})}_import(n){return at(this,null,function*(){const e=yield this._v1Import(n);if(e)return e;const t=yield this._v0Import(n);return t||null})}_v1Import(n){return at(this,null,function*(){var e,t;const i=this.parser.json;if(!(((e=i.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const s=(t=i.extensions)==null?void 0:t.VRMC_vrm;if(!s)return null;const o=s.specVersion;if(!Qw.has(o))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;const a=s.humanoid;if(!a)return null;const l=a.humanBones.leftThumbIntermediate!=null||a.humanBones.rightThumbIntermediate!=null,c={};a.humanBones!=null&&(yield Promise.all(Object.entries(a.humanBones).map(h=>at(this,[h],function*([d,f]){let g=d;const m=f.node;if(l){const _=ug[g];_!=null&&(g=_)}const p=yield this.parser.getDependency("node",m);if(p==null){console.warn(`A glTF node bound to the humanoid bone ${g} (index = ${m}) does not exist`);return}c[g]={node:p}}))));const u=new cg(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(n.scene.add(u.normalizedHumanBonesRoot),this.helperRoot){const h=new og(u);this.helperRoot.add(h),h.renderOrder=this.helperRoot.renderOrder}return u})}_v0Import(n){return at(this,null,function*(){var e;const i=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!i)return null;const r=i.humanoid;if(!r)return null;const s={};r.humanBones!=null&&(yield Promise.all(r.humanBones.map(a=>at(this,null,function*(){const l=a.bone,c=a.node;if(l==null||c==null)return;const u=yield this.parser.getDependency("node",c);if(u==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}const h=ug[l],d=h??l;if(s[d]!=null){console.warn(`Multiple bone entries for ${d} detected (index = ${c}), ignoring duplicated entries.`);return}s[d]={node:u}}))));const o=new cg(this._ensureRequiredBonesExist(s),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(n.scene.add(o.normalizedHumanBonesRoot),this.helperRoot){const a=new og(o);this.helperRoot.add(a),a.renderOrder=this.helperRoot.renderOrder}return o})}_ensureRequiredBonesExist(n){const e=Object.values(Jw).filter(t=>n[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return n}},hg=class extends Dt{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new ot(new Float32Array(65*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ot(new Uint16Array(3*63),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,n=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,n=!0),n&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let n=0;n<64;n++){const e=n/63*this._currentTheta;this._attrPos.setXYZ(n+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<63;n++)this._attrIndex.setXYZ(n*3,0,n+1,n+2);this._attrIndex.needsUpdate=!0}},tA=class extends Dt{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new N,this._currentTail=new N,this._attrPos=new ot(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ot(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,n=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),n=!0),n&&this._buildPosition()}_buildPosition(){for(let n=0;n<32;n++){const e=n/16*Math.PI;this._attrPos.setXYZ(n,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+n,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+n,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(64+n*2,32+n,32+e),this._attrIndex.setXY(128+n*2,64+n,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},gl=new De,dg=new De,To=new N,fg=new N,pg=Math.sqrt(2)/2,nA=new De(0,0,-pg,pg),iA=new N(0,1,0),rA=class extends pn{constructor(n){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=n;{const e=new hg;e.radius=.5;const t=new Pi({color:65280,transparent:!0,opacity:.5,side:Nn,depthTest:!1,depthWrite:!1});this._meshPitch=new rn(e,t),this.add(this._meshPitch)}{const e=new hg;e.radius=.5;const t=new Pi({color:16711680,transparent:!0,opacity:.5,side:Nn,depthTest:!1,depthWrite:!1});this._meshYaw=new rn(e,t),this.add(this._meshYaw)}{const e=new tA;e.radius=.1;const t=new Ji({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new vo(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(n){const e=et.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();const t=et.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(To),this.vrmLookAt.getLookAtWorldQuaternion(gl),gl.multiply(this.vrmLookAt.getFaceFrontQuaternion(dg)),this._meshYaw.position.copy(To),this._meshYaw.quaternion.copy(gl),this._meshPitch.position.copy(To),this._meshPitch.quaternion.copy(gl),this._meshPitch.quaternion.multiply(dg.setFromAxisAngle(iA,e)),this._meshPitch.quaternion.multiply(nA);const{target:i,autoUpdate:r}=this.vrmLookAt;i!=null&&r&&(i.getWorldPosition(fg).sub(To),this._lineTarget.geometry.tail.copy(fg),this._lineTarget.geometry.update(),this._lineTarget.position.copy(To)),super.updateMatrixWorld(n)}},sA=new N,oA=new N;function Ah(n,e){return n.matrixWorld.decompose(sA,e,oA),e}function _l(n){return[Math.atan2(-n.z,n.x),Math.atan2(n.y,Math.sqrt(n.x*n.x+n.z*n.z))]}function mg(n){const e=Math.round(n/2/Math.PI);return n-2*Math.PI*e}var gg=new N(0,0,1),aA=new N,lA=new N,cA=new N,uA=new De,Rh=new De,_g=new De,hA=new De,Ch=new Lt,vg=class Z0{constructor(e,t){this.offsetFromHeadBone=new N,this.autoUpdate=!0,this.faceFront=new N(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new De)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new Lt)}getEuler(e){return e.set(et.DEG2RAD*this._pitch,et.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new Z0(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return Ah(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(gg)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,i]=_l(this.faceFront);return Ch.set(0,.5*Math.PI+t,i,"YZX"),e.setFromEuler(Ch).premultiply(hA.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(Rh),this.getFaceFrontQuaternion(_g),e.copy(gg).applyQuaternion(Rh).applyQuaternion(_g).applyEuler(this.getEuler(Ch))}lookAt(e){const t=uA.copy(this._restHeadWorldQuaternion).multiply(ag(this.getLookAtWorldQuaternion(Rh))),i=this.getLookAtWorldPosition(lA),r=cA.copy(e).sub(i).applyQuaternion(t).normalize(),[s,o]=_l(this.faceFront),[a,l]=_l(r),c=mg(a-s),u=mg(o-l);this._yaw=et.RAD2DEG*c,this._pitch=et.RAD2DEG*u,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(aA)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};vg.EULER_ORDER="YXZ";var dA=vg,fA=new N(0,0,1),hi=new De,Ss=new De,Fn=new Lt(0,0,0,"YXZ"),vl=class{constructor(n,e,t,i,r){this.humanoid=n,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=r,this.faceFront=new N(0,0,1),this._restQuatLeftEye=new De,this._restQuatRightEye=new De,this._restLeftEyeParentWorldQuat=new De,this._restRightEyeParentWorldQuat=new De;const s=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");s&&(this._restQuatLeftEye.copy(s.quaternion),Ah(s.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),Ah(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(n,e){const t=this.humanoid.getRawBoneNode("leftEye"),i=this.humanoid.getRawBoneNode("rightEye"),r=this.humanoid.getNormalizedBoneNode("leftEye"),s=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?Fn.x=-et.DEG2RAD*this.rangeMapVerticalDown.map(-e):Fn.x=et.DEG2RAD*this.rangeMapVerticalUp.map(e),n<0?Fn.y=-et.DEG2RAD*this.rangeMapHorizontalInner.map(-n):Fn.y=et.DEG2RAD*this.rangeMapHorizontalOuter.map(n),hi.setFromEuler(Fn),this._getWorldFaceFrontQuat(Ss),r.quaternion.copy(Ss).multiply(hi).multiply(Ss.invert()),hi.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(r.quaternion).multiply(hi).premultiply(hi.invert()).multiply(this._restQuatLeftEye)),i&&(e<0?Fn.x=-et.DEG2RAD*this.rangeMapVerticalDown.map(-e):Fn.x=et.DEG2RAD*this.rangeMapVerticalUp.map(e),n<0?Fn.y=-et.DEG2RAD*this.rangeMapHorizontalOuter.map(-n):Fn.y=et.DEG2RAD*this.rangeMapHorizontalInner.map(n),hi.setFromEuler(Fn),this._getWorldFaceFrontQuat(Ss),s.quaternion.copy(Ss).multiply(hi).multiply(Ss.invert()),hi.copy(this._restRightEyeParentWorldQuat),i.quaternion.copy(s.quaternion).multiply(hi).premultiply(hi.invert()).multiply(this._restQuatRightEye))}lookAt(n){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=et.RAD2DEG*n.y,t=et.RAD2DEG*n.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(n){if(this.faceFront.distanceToSquared(fA)<.01)return n.identity();const[e,t]=_l(this.faceFront);return Fn.set(0,.5*Math.PI+e,t,"YZX"),n.setFromEuler(Fn)}};vl.type="bone";var Ph=class{constructor(n,e,t,i,r){this.expressions=n,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=r}applyYawPitch(n,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),n<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-n))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(n)))}lookAt(n){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=et.RAD2DEG*n.y,t=et.RAD2DEG*n.x;this.applyYawPitch(e,t)}};Ph.type="expression";var yg=class{constructor(n,e){this.inputMaxValue=n,this.outputScale=e}map(n){return this.outputScale*Ym(n/this.inputMaxValue)}},pA=new Set(["1.0","1.0-beta"]),yl=.01,mA=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(n,e){this.parser=n,this.helperRoot=e==null?void 0:e.helperRoot}afterRoot(n){return at(this,null,function*(){const e=n.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const t=n.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");n.userData.vrmLookAt=yield this._import(n,e,t)}})}_import(n,e,t){return at(this,null,function*(){if(e==null||t==null)return null;const i=yield this._v1Import(n,e,t);if(i)return i;const r=yield this._v0Import(n,e,t);return r||null})}_v1Import(n,e,t){return at(this,null,function*(){var i,r,s;const o=this.parser.json;if(!(((i=o.extensionsUsed)==null?void 0:i.indexOf("VRMC_vrm"))!==-1))return null;const l=(r=o.extensions)==null?void 0:r.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!pA.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const u=l.lookAt;if(!u)return null;const h=u.type==="expression"?1:10,d=this._v1ImportRangeMap(u.rangeMapHorizontalInner,h),f=this._v1ImportRangeMap(u.rangeMapHorizontalOuter,h),g=this._v1ImportRangeMap(u.rangeMapVerticalDown,h),m=this._v1ImportRangeMap(u.rangeMapVerticalUp,h);let p;u.type==="expression"?p=new Ph(t,d,f,g,m):p=new vl(e,d,f,g,m);const _=this._importLookAt(e,p);return _.offsetFromHeadBone.fromArray((s=u.offsetFromHeadBone)!=null?s:[0,.06,0]),_})}_v1ImportRangeMap(n,e){var t,i;let r=(t=n==null?void 0:n.inputMaxValue)!=null?t:90;const s=(i=n==null?void 0:n.outputScale)!=null?i:e;return r<yl&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),r=yl),new yg(r,s)}_v0Import(n,e,t){return at(this,null,function*(){var i,r,s,o;const l=(i=this.parser.json.extensions)==null?void 0:i.VRM;if(!l)return null;const c=l.firstPerson;if(!c)return null;const u=c.lookAtTypeName==="BlendShape"?1:10,h=this._v0ImportDegreeMap(c.lookAtHorizontalInner,u),d=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,u),f=this._v0ImportDegreeMap(c.lookAtVerticalDown,u),g=this._v0ImportDegreeMap(c.lookAtVerticalUp,u);let m;c.lookAtTypeName==="BlendShape"?m=new Ph(t,h,d,f,g):m=new vl(e,h,d,f,g);const p=this._importLookAt(e,m);return c.firstPersonBoneOffset?p.offsetFromHeadBone.set((r=c.firstPersonBoneOffset.x)!=null?r:0,(s=c.firstPersonBoneOffset.y)!=null?s:.06,-((o=c.firstPersonBoneOffset.z)!=null?o:0)):p.offsetFromHeadBone.set(0,.06,0),p.faceFront.set(0,0,-1),m instanceof vl&&m.faceFront.set(0,0,-1),p})}_v0ImportDegreeMap(n,e){var t,i;const r=n==null?void 0:n.curve;JSON.stringify(r)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let s=(t=n==null?void 0:n.xRange)!=null?t:90;const o=(i=n==null?void 0:n.yRange)!=null?i:e;return s<yl&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),s=yl),new yg(s,o)}_importLookAt(n,e){const t=new dA(n,e);if(this.helperRoot){const i=new rA(t);this.helperRoot.add(i),i.renderOrder=this.helperRoot.renderOrder}return t}};function gA(n,e){return typeof n!="string"||n===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(n)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(n)||/^data:.*,.*$/i.test(n)||/^blob:.*$/i.test(n)?n:e+n)}var _A=new Set(["1.0","1.0-beta"]),vA=class{get name(){return"VRMMetaLoaderPlugin"}constructor(n,e){var t,i,r;this.parser=n,this.needThumbnailImage=(t=e==null?void 0:e.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(i=e==null?void 0:e.acceptLicenseUrls)!=null?i:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(r=e==null?void 0:e.acceptV0Meta)!=null?r:!0}afterRoot(n){return at(this,null,function*(){n.userData.vrmMeta=yield this._import(n)})}_import(n){return at(this,null,function*(){const e=yield this._v1Import(n);if(e!=null)return e;const t=yield this._v0Import(n);return t??null})}_v1Import(n){return at(this,null,function*(){var e,t,i;const r=this.parser.json;if(!(((e=r.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const o=(t=r.extensions)==null?void 0:t.VRMC_vrm;if(o==null)return null;const a=o.specVersion;if(!_A.has(a))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.meta;if(!l)return null;const c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let h;return this.needThumbnailImage&&l.thumbnailImage!=null&&(h=(i=yield this._extractGLTFImage(l.thumbnailImage))!=null?i:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:h,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(n){return at(this,null,function*(){var e;const i=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!i)return null;const r=i.meta;if(!r)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let s;return this.needThumbnailImage&&r.texture!=null&&r.texture!==-1&&(s=yield this.parser.getDependency("texture",r.texture)),{metaVersion:"0",allowedUserName:r.allowedUserName,author:r.author,commercialUssageName:r.commercialUssageName,contactInformation:r.contactInformation,licenseName:r.licenseName,otherLicenseUrl:r.otherLicenseUrl,otherPermissionUrl:r.otherPermissionUrl,reference:r.reference,sexualUssageName:r.sexualUssageName,texture:s??void 0,title:r.title,version:r.version,violentUssageName:r.violentUssageName}})}_extractGLTFImage(n){return at(this,null,function*(){var e;const i=(e=this.parser.json.images)==null?void 0:e[n];if(i==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${n}] of glTF as a thumbnail but the image doesn't exist`),null;let r=i.uri;if(i.bufferView!=null){const o=yield this.parser.getDependency("bufferView",i.bufferView),a=new Blob([o],{type:i.mimeType});r=URL.createObjectURL(a)}return r==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${n}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new Lm().loadAsync(gA(r,this.parser.options.path)).catch(o=>(console.error(o),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},yA=class{constructor(n){this.scene=n.scene,this.meta=n.meta,this.humanoid=n.humanoid,this.expressionManager=n.expressionManager,this.firstPerson=n.firstPerson,this.lookAt=n.lookAt}update(n){this.humanoid.update(),this.lookAt&&this.lookAt.update(n),this.expressionManager&&this.expressionManager.update()}},xA=class extends yA{constructor(n){super(n),this.materials=n.materials,this.springBoneManager=n.springBoneManager,this.nodeConstraintManager=n.nodeConstraintManager}update(n){super.update(n),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(n),this.materials&&this.materials.forEach(e=>{e.update&&e.update(n)})}},MA=Object.defineProperty,xg=Object.getOwnPropertySymbols,SA=Object.prototype.hasOwnProperty,bA=Object.prototype.propertyIsEnumerable,Mg=(n,e,t)=>e in n?MA(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Sg=(n,e)=>{for(var t in e||(e={}))SA.call(e,t)&&Mg(n,t,e[t]);if(xg)for(var t of xg(e))bA.call(e,t)&&Mg(n,t,e[t]);return n},Ir=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),EA={"":3e3,srgb:3001};function TA(n,e){parseInt(dr,10)>=152?n.colorSpace=e:n.encoding=EA[e]}var wA=class{get pending(){return Promise.all(this._pendings)}constructor(n,e){this._parser=n,this._materialParams=e,this._pendings=[]}assignPrimitive(n,e){e!=null&&(this._materialParams[n]=e)}assignColor(n,e,t){e!=null&&(this._materialParams[n]=new Me().fromArray(e),t&&this._materialParams[n].convertSRGBToLinear())}assignTexture(n,e,t){return Ir(this,null,function*(){const i=Ir(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,n,e),t&&TA(this._materialParams[n],"srgb"))});return this._pendings.push(i),i})}assignTextureByIndex(n,e,t){return Ir(this,null,function*(){return this.assignTexture(n,e!=null?{index:e}:void 0,t)})}},AA=`// #define PHONG

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

}`,RA=`// #define PHONG

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
`,CA={None:"none"},bg={None:"none",ScreenCoordinates:"screenCoordinates"},PA={3e3:"",3001:"srgb"};function Ih(n){return parseInt(dr,10)>=152?n.colorSpace:PA[n.encoding]}var IA=class extends Ii{constructor(n={}){var e;super({vertexShader:AA,fragmentShader:RA}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=no,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=CA.None,this._outlineWidthMode=bg.None,this._isOutline=!1,n.transparentWithZWrite&&(n.depthWrite=!0),delete n.transparentWithZWrite,n.fog=!0,n.lights=!0,n.clipping=!0,this.uniforms=Tp.merge([me.common,me.normalmap,me.emissivemap,me.fog,me.lights,{litFactor:{value:new Me(1,1,1)},mapUvTransform:{value:new Ue},colorAlpha:{value:1},normalMapUvTransform:{value:new Ue},shadeColorFactor:{value:new Me(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new Ue},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new Ue},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new Me(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new Ue},parametricRimColorFactor:{value:new Me(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new Ue},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new Me(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new Ue},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new Ue},outlineWidthFactor:{value:0},outlineColorFactor:{value:new Me(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new Ue},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=n.uniforms)!=null?e:{}]),this.setValues(n),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,i])=>`${t}:${i}`),this.matcapTexture?`matcapTextureColorSpace:${Ih(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${Ih(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${Ih(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{const i=parseInt(dr,10),r=Object.entries(Sg(Sg({},this._generateDefines()),this.defines)).filter(([s,o])=>!!o).map(([s,o])=>`#define ${s} ${o}`).join(`
`)+`
`;t.vertexShader=r+t.vertexShader,t.fragmentShader=r+t.fragmentShader,i<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(n){this.uniforms.litFactor.value=n}get map(){return this.uniforms.map.value}set map(n){this.uniforms.map.value=n}get normalMap(){return this.uniforms.normalMap.value}set normalMap(n){this.uniforms.normalMap.value=n}get normalScale(){return this.uniforms.normalScale.value}set normalScale(n){this.uniforms.normalScale.value=n}get emissive(){return this.uniforms.emissive.value}set emissive(n){this.uniforms.emissive.value=n}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(n){this.uniforms.emissiveIntensity.value=n}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(n){this.uniforms.emissiveMap.value=n}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(n){this.uniforms.shadeColorFactor.value=n}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(n){this.uniforms.shadeMultiplyTexture.value=n}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(n){this.uniforms.shadingShiftFactor.value=n}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(n){this.uniforms.shadingShiftTexture.value=n}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(n){this.uniforms.shadingShiftTextureScale.value=n}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(n){this.uniforms.shadingToonyFactor.value=n}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(n){this.uniforms.giEqualizationFactor.value=n}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(n){this.uniforms.matcapFactor.value=n}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(n){this.uniforms.matcapTexture.value=n}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(n){this.uniforms.parametricRimColorFactor.value=n}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(n){this.uniforms.rimMultiplyTexture.value=n}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(n){this.uniforms.rimLightingMixFactor.value=n}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(n){this.uniforms.parametricRimFresnelPowerFactor.value=n}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(n){this.uniforms.parametricRimLiftFactor.value=n}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(n){this.uniforms.outlineWidthMultiplyTexture.value=n}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(n){this.uniforms.outlineWidthFactor.value=n}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(n){this.uniforms.outlineColorFactor.value=n}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(n){this.uniforms.outlineLightingMixFactor.value=n}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(n){this.uniforms.uvAnimationMaskTexture.value=n}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(n){this.uniforms.uvAnimationScrollXOffset.value=n}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(n){this.uniforms.uvAnimationScrollYOffset.value=n}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(n){this.uniforms.uvAnimationRotationPhase.value=n}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(n){this._ignoreVertexColor=n,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(n){this._v0CompatShade=n,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(n){this._debugMode=n,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(n){this._outlineWidthMode=n,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(n){this._isOutline=n,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(n){this._uploadUniformsWorkaround(),this._updateUVAnimation(n)}copy(n){return super.copy(n),this.map=n.map,this.normalMap=n.normalMap,this.emissiveMap=n.emissiveMap,this.shadeMultiplyTexture=n.shadeMultiplyTexture,this.shadingShiftTexture=n.shadingShiftTexture,this.matcapTexture=n.matcapTexture,this.rimMultiplyTexture=n.rimMultiplyTexture,this.outlineWidthMultiplyTexture=n.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=n.uvAnimationMaskTexture,this.normalMapType=n.normalMapType,this.uvAnimationScrollXSpeedFactor=n.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=n.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=n.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=n.ignoreVertexColor,this.v0CompatShade=n.v0CompatShade,this.debugMode=n.debugMode,this.outlineWidthMode=n.outlineWidthMode,this.isOutline=n.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(n){this.uniforms.uvAnimationScrollXOffset.value+=n*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=n*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=n*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){const n=parseInt(dr,10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:n,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===bg.ScreenCoordinates}}_updateTextureMatrix(n,e){n.value&&(n.value.matrixAutoUpdate&&n.value.updateMatrix(),e.value.copy(n.value.matrix))}},LA=new Set(["1.0","1.0-beta"]),Eg=class ac{get name(){return ac.EXTENSION_NAME}constructor(e,t={}){var i,r,s,o;this.parser=e,this.materialType=(i=t.materialType)!=null?i:IA,this.renderOrderOffset=(r=t.renderOrderOffset)!=null?r:0,this.v0CompatShade=(s=t.v0CompatShade)!=null?s:!1,this.debugMode=(o=t.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return Ir(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return Ir(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){const i=this._getMToonExtension(e);return i?this._extendMaterialParams(i,t):null}loadMesh(e){return Ir(this,null,function*(){var t;const i=this.parser,s=(t=i.json.meshes)==null?void 0:t[e];if(s==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const o=s.primitives,a=yield i.loadMesh(e);if(o.length===1){const l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{const l=a;for(let c=0;c<o.length;c++){const u=l.children[c],h=o[c].material;h!=null&&this._setupPrimitive(u,h)}}return a})}_removeUnlitExtensionIfMToonExists(){const i=this.parser.json.materials;i==null||i.map((r,s)=>{var o;this._getMToonExtension(s)&&((o=r.extensions)!=null&&o.KHR_materials_unlit)&&delete r.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,i;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(i=o.extensions)==null?void 0:i[ac.EXTENSION_NAME];if(a==null)return;const l=a.specVersion;if(!LA.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${ac.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){return Ir(this,null,function*(){var i;delete t.metalness,delete t.roughness;const r=new wA(this.parser,t);r.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),r.assignColor("shadeColorFactor",e.shadeColorFactor),r.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),r.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),r.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),r.assignPrimitive("shadingShiftTextureScale",(i=e.shadingShiftTexture)==null?void 0:i.scale),r.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),r.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),r.assignColor("matcapFactor",e.matcapFactor),r.assignTexture("matcapTexture",e.matcapTexture,!0),r.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),r.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),r.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),r.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),r.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),r.assignPrimitive("outlineWidthMode",e.outlineWidthMode),r.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),r.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),r.assignColor("outlineColorFactor",e.outlineColorFactor),r.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),r.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),r.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),r.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),r.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),r.assignPrimitive("v0CompatShade",this.v0CompatShade),r.assignPrimitive("debugMode",this.debugMode),yield r.pending})}_setupPrimitive(e,t){const i=this._getMToonExtension(t);if(i){const r=this._parseRenderOrder(i);e.renderOrder=r+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){const t=e.material;if(!(t instanceof Rn)||!this._shouldGenerateOutline(t))return;e.material=[t];const i=t.clone();i.name+=" (Outline)",i.isOutline=!0,i.side=un,e.material.push(i);const r=e.geometry,s=r.index?r.index.count:r.attributes.position.count/3;r.addGroup(0,s,0),r.addGroup(0,s,1)}_addToMaterialSet(e){const t=e.material,i=new Set;Array.isArray(t)?t.forEach(r=>i.add(r)):i.add(t);for(const r of i)this._mToonMaterialSet.add(r)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};Eg.EXTENSION_NAME="VRMC_materials_mtoon";var DA=Eg,NA=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),Tg=class qd{get name(){return qd.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return NA(this,null,function*(){const i=this._getHDREmissiveMultiplierExtension(e);if(i==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const r=i.emissiveMultiplier;t.emissiveIntensity=r})}_getHDREmissiveMultiplierExtension(e){var t,i;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(i=o.extensions)==null?void 0:i[qd.EXTENSION_NAME];if(a!=null)return a}};Tg.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var OA=Tg,UA=Object.defineProperty,FA=Object.defineProperties,BA=Object.getOwnPropertyDescriptors,wg=Object.getOwnPropertySymbols,kA=Object.prototype.hasOwnProperty,VA=Object.prototype.propertyIsEnumerable,Ag=(n,e,t)=>e in n?UA(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,di=(n,e)=>{for(var t in e||(e={}))kA.call(e,t)&&Ag(n,t,e[t]);if(wg)for(var t of wg(e))VA.call(e,t)&&Ag(n,t,e[t]);return n},Rg=(n,e)=>FA(n,BA(e)),zA=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())});function bs(n){return Math.pow(n,2.2)}var HA=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(n){var e;this.parser=n,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return zA(this,null,function*(){var n;const e=this.parser.json,t=(n=e.extensions)==null?void 0:n.VRM,i=t==null?void 0:t.materialProperties;i&&(this._populateRenderQueueMap(i),i.forEach((r,s)=>{var o,a;const l=(o=e.materials)==null?void 0:o[s];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${s}] of glTF but the material doesn't exist`);return}if(r.shader==="VRM/MToon"){const c=this._parseV0MToonProperties(r,l);e.materials[s]=c}else if((a=r.shader)!=null&&a.startsWith("VRM/Unlit")){const c=this._parseV0UnlitProperties(r,l);e.materials[s]=c}else r.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${r.shader}`)}))})}_parseV0MToonProperties(n,e){var t,i,r,s,o,a,l,c,u,h,d,f,g,m,p,_,b,y,M,w,P,A,U,Y,v,S,B,T,E,O,R,F,k,J,L,V,K,ee,G,$,se,ie,ae,de,ue,Se,re,z,Tt,We,Je,Oe,rt,Fe,D;const C=(i=(t=n.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?i:!1,le=((r=n.floatProperties)==null?void 0:r._ZWrite)===1&&C,he=this._v0ParseRenderQueue(n),oe=(o=(s=n.keywordMap)==null?void 0:s._ALPHATEST_ON)!=null?o:!1,Ie=C?"BLEND":oe?"MASK":"OPAQUE",ge=oe?(l=(a=n.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,st=((u=(c=n.floatProperties)==null?void 0:c._CullMode)!=null?u:2)===0,fe=this._portTextureTransform(n),Te=((d=(h=n.vectorProperties)==null?void 0:h._Color)!=null?d:[1,1,1,1]).map((pe,xe)=>xe===3?pe:bs(pe)),Be=(f=n.textureProperties)==null?void 0:f._MainTex,ke=Be!=null?{index:Be,extensions:di({},fe)}:void 0,we=(m=(g=n.floatProperties)==null?void 0:g._BumpScale)!=null?m:1,Qe=(p=n.textureProperties)==null?void 0:p._BumpMap,He=Qe!=null?{index:Qe,scale:we,extensions:di({},fe)}:void 0,xt=((b=(_=n.vectorProperties)==null?void 0:_._EmissionColor)!=null?b:[0,0,0,1]).map(bs),W=(y=n.textureProperties)==null?void 0:y._EmissionMap,be=W!=null?{index:W,extensions:di({},fe)}:void 0,te=((w=(M=n.vectorProperties)==null?void 0:M._ShadeColor)!=null?w:[.97,.81,.86,1]).map(bs),ce=(P=n.textureProperties)==null?void 0:P._ShadeTexture,ye=ce!=null?{index:ce,extensions:di({},fe)}:void 0;let ve=(U=(A=n.floatProperties)==null?void 0:A._ShadeShift)!=null?U:0,Ke=(v=(Y=n.floatProperties)==null?void 0:Y._ShadeToony)!=null?v:.9;Ke=et.lerp(Ke,1,.5+.5*ve),ve=-ve-(1-Ke);const Pt=(B=(S=n.floatProperties)==null?void 0:S._IndirectLightIntensity)!=null?B:.1,on=Pt?1-Pt:void 0,nt=(T=n.textureProperties)==null?void 0:T._SphereAdd,an=nt!=null?[1,1,1]:void 0,ni=nt!=null?{index:nt}:void 0,tc=(O=(E=n.floatProperties)==null?void 0:E._RimLightingMix)!=null?O:0,Yo=(R=n.textureProperties)==null?void 0:R._RimTexture,ki=Yo!=null?{index:Yo,extensions:di({},fe)}:void 0,Ko=((k=(F=n.vectorProperties)==null?void 0:F._RimColor)!=null?k:[0,0,0,1]).map(bs),nc=(L=(J=n.floatProperties)==null?void 0:J._RimFresnelPower)!=null?L:1,ic=(K=(V=n.floatProperties)==null?void 0:V._RimLift)!=null?K:0,Vs=["none","worldCoordinates","screenCoordinates"][(G=(ee=n.floatProperties)==null?void 0:ee._OutlineWidthMode)!=null?G:0];let zs=(se=($=n.floatProperties)==null?void 0:$._OutlineWidth)!=null?se:0;zs=.01*zs;const Fr=(ie=n.textureProperties)==null?void 0:ie._OutlineWidthTexture,rc=Fr!=null?{index:Fr,extensions:di({},fe)}:void 0,sc=((de=(ae=n.vectorProperties)==null?void 0:ae._OutlineColor)!=null?de:[0,0,0]).map(bs),Wd=((Se=(ue=n.floatProperties)==null?void 0:ue._OutlineColorMode)!=null?Se:0)===1?(z=(re=n.floatProperties)==null?void 0:re._OutlineLightingMix)!=null?z:1:0,oc=(Tt=n.textureProperties)==null?void 0:Tt._UvAnimMaskTexture,I=oc!=null?{index:oc,extensions:di({},fe)}:void 0,j=(Je=(We=n.floatProperties)==null?void 0:We._UvAnimScrollX)!=null?Je:0;let Z=(rt=(Oe=n.floatProperties)==null?void 0:Oe._UvAnimScrollY)!=null?rt:0;Z!=null&&(Z=-Z);const Q=(D=(Fe=n.floatProperties)==null?void 0:Fe._UvAnimRotation)!=null?D:0,q={specVersion:"1.0",transparentWithZWrite:le,renderQueueOffsetNumber:he,shadeColorFactor:te,shadeMultiplyTexture:ye,shadingShiftFactor:ve,shadingToonyFactor:Ke,giEqualizationFactor:on,matcapFactor:an,matcapTexture:ni,rimLightingMixFactor:tc,rimMultiplyTexture:ki,parametricRimColorFactor:Ko,parametricRimFresnelPowerFactor:nc,parametricRimLiftFactor:ic,outlineWidthMode:Vs,outlineWidthFactor:zs,outlineWidthMultiplyTexture:rc,outlineColorFactor:sc,outlineLightingMixFactor:Wd,uvAnimationMaskTexture:I,uvAnimationScrollXSpeedFactor:j,uvAnimationScrollYSpeedFactor:Z,uvAnimationRotationSpeedFactor:Q};return Rg(di({},e),{pbrMetallicRoughness:{baseColorFactor:Te,baseColorTexture:ke},normalTexture:He,emissiveTexture:be,emissiveFactor:xt,alphaMode:Ie,alphaCutoff:ge,doubleSided:st,extensions:{VRMC_materials_mtoon:q}})}_parseV0UnlitProperties(n,e){var t,i,r,s,o;const a=n.shader==="VRM/UnlitTransparentZWrite",l=n.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(n),u=n.shader==="VRM/UnlitCutout",h=l?"BLEND":u?"MASK":"OPAQUE",d=u?(i=(t=n.floatProperties)==null?void 0:t._Cutoff)!=null?i:.5:void 0,f=this._portTextureTransform(n),g=((s=(r=n.vectorProperties)==null?void 0:r._Color)!=null?s:[1,1,1,1]).map(bs),m=(o=n.textureProperties)==null?void 0:o._MainTex,p=m!=null?{index:m,extensions:di({},f)}:void 0,_={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:g,shadeMultiplyTexture:p};return Rg(di({},e),{pbrMetallicRoughness:{baseColorFactor:g,baseColorTexture:p},alphaMode:h,alphaCutoff:d,extensions:{VRMC_materials_mtoon:_}})}_portTextureTransform(n){var e,t,i,r,s;const o=(e=n.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};const a=[(t=o==null?void 0:o[0])!=null?t:0,(i=o==null?void 0:o[1])!=null?i:0],l=[(r=o==null?void 0:o[2])!=null?r:1,(s=o==null?void 0:o[3])!=null?s:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(n){var e,t;const i=n.shader==="VRM/UnlitTransparentZWrite",r=((e=n.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||i,s=((t=n.floatProperties)==null?void 0:t._ZWrite)===1||i;let o=0;if(r){const a=n.renderQueue;a!=null&&(s?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(n){const e=new Set,t=new Set;n.forEach(i=>{var r,s;const o=i.shader==="VRM/UnlitTransparentZWrite",a=((r=i.keywordMap)==null?void 0:r._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||o,l=((s=i.floatProperties)==null?void 0:s._ZWrite)===1||o;if(a){const c=i.renderQueue;c!=null&&(l?t.add(c):e.add(c))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((i,r)=>{const s=Math.min(Math.max(r-e.size+1,-9),0);this._renderQueueMapTransparent.set(i,s)}),Array.from(t).sort().forEach((i,r)=>{const s=Math.min(Math.max(r,0),9);this._renderQueueMapTransparentZWrite.set(i,s)})}},Cg=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),er=new N,Lh=class extends pn{constructor(n){super(),this._attrPosition=new ot(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(kx);const e=new Dt;e.setAttribute("position",this._attrPosition);const t=new Ji({color:16711935,depthTest:!1,depthWrite:!1});this._line=new _o(e,t),this.add(this._line),this.constraint=n}updateMatrixWorld(n){er.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,er.x,er.y,er.z),this.constraint.source&&er.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,er.x,er.y,er.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(n)}};function Pg(n,e){return e.set(n.elements[12],n.elements[13],n.elements[14])}var GA=new N,WA=new N;function $A(n,e){return n.decompose(GA,e,WA),e}function xl(n){return n.invert?n.invert():n.inverse(),n}var Dh=class{constructor(n,e){this.destination=n,this.source=e,this.weight=1}},XA=new N,jA=new N,qA=new N,YA=new De,KA=new De,ZA=new De,JA=class extends Dh{get aimAxis(){return this._aimAxis}set aimAxis(n){this._aimAxis=n,this._v3AimAxis.set(n==="PositiveX"?1:n==="NegativeX"?-1:0,n==="PositiveY"?1:n==="NegativeY"?-1:0,n==="PositiveZ"?1:n==="NegativeZ"?-1:0)}get dependencies(){const n=new Set([this.source]);return this.destination.parent&&n.add(this.destination.parent),n}constructor(n,e){super(n,e),this._aimAxis="PositiveX",this._v3AimAxis=new N(1,0,0),this._dstRestQuat=new De}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const n=YA.identity(),e=KA.identity();this.destination.parent&&($A(this.destination.parent.matrixWorld,n),xl(e.copy(n)));const t=XA.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(n),i=Pg(this.source.matrixWorld,jA).sub(Pg(this.destination.matrixWorld,qA)).normalize(),r=ZA.setFromUnitVectors(t,i).premultiply(e).multiply(n).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(r,this.weight)}};function QA(n,e){const t=[n];let i=n.parent;for(;i!==null;)t.unshift(i),i=i.parent;t.forEach(r=>{e(r)})}var e1=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(n){this._constraints.add(n);let e=this._objectConstraintsMap.get(n.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(n.destination,e)),e.add(n)}deleteConstraint(n){this._constraints.delete(n),this._objectConstraintsMap.get(n.destination).delete(n)}setInitState(){const n=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,n,e,i=>i.setInitState())}update(){const n=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,n,e,i=>i.update())}_processConstraint(n,e,t,i){if(t.has(n))return;if(e.has(n))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(n);const r=n.dependencies;for(const s of r)QA(s,o=>{const a=this._objectConstraintsMap.get(o);if(a)for(const l of a)this._processConstraint(l,e,t,i)});i(n),t.add(n)}},t1=new De,n1=new De,i1=class extends Dh{get dependencies(){return new Set([this.source])}constructor(n,e){super(n,e),this._dstRestQuat=new De,this._invSrcRestQuat=new De}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),xl(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const n=t1.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=n1.copy(this._dstRestQuat).multiply(n);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},r1=new N,s1=new De,o1=new De,a1=class extends Dh{get rollAxis(){return this._rollAxis}set rollAxis(n){this._rollAxis=n,this._v3RollAxis.set(n==="X"?1:0,n==="Y"?1:0,n==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(n,e){super(n,e),this._rollAxis="X",this._v3RollAxis=new N(1,0,0),this._dstRestQuat=new De,this._invDstRestQuat=new De,this._invSrcRestQuatMulDstRestQuat=new De}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),xl(this._invDstRestQuat.copy(this._dstRestQuat)),xl(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const n=s1.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=r1.copy(this._v3RollAxis).applyQuaternion(n),i=o1.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(n);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}},l1=new Set(["1.0","1.0-beta"]),Ig=class Zo{get name(){return Zo.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t==null?void 0:t.helperRoot}afterRoot(e){return Cg(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return Cg(this,null,function*(){var t;const i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf(Zo.EXTENSION_NAME))!==-1))return null;const s=new e1,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;const u=i.nodes[l],h=(c=u==null?void 0:u.extensions)==null?void 0:c[Zo.EXTENSION_NAME];if(h==null)return;const d=h.specVersion;if(!l1.has(d)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${Zo.EXTENSION_NAME} specVersion "${d}"`);return}const f=h.constraint;if(f.roll!=null){const g=this._importRollConstraint(a,o,f.roll);s.addConstraint(g)}else if(f.aim!=null){const g=this._importAimConstraint(a,o,f.aim);s.addConstraint(g)}else if(f.rotation!=null){const g=this._importRotationConstraint(a,o,f.rotation);s.addConstraint(g)}}),e.scene.updateMatrixWorld(),s.setInitState(),s})}_importRollConstraint(e,t,i){const{source:r,rollAxis:s,weight:o}=i,a=t[r],l=new a1(e,a);if(s!=null&&(l.rollAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new Lh(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,i){const{source:r,aimAxis:s,weight:o}=i,a=t[r],l=new JA(e,a);if(s!=null&&(l.aimAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new Lh(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,i){const{source:r,weight:s}=i,o=t[r],a=new i1(e,o);if(s!=null&&(a.weight=s),this.helperRoot){const l=new Lh(a);this.helperRoot.add(l)}return a}};Ig.EXTENSION_NAME="VRMC_node_constraint";var c1=Ig,Ml=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),Nh=class{},Oh=new N,Lr=new N,Lg=class extends Nh{get type(){return"capsule"}constructor(n){var e,t,i,r;super(),this.offset=(e=n==null?void 0:n.offset)!=null?e:new N(0,0,0),this.tail=(t=n==null?void 0:n.tail)!=null?t:new N(0,0,0),this.radius=(i=n==null?void 0:n.radius)!=null?i:0,this.inside=(r=n==null?void 0:n.inside)!=null?r:!1}calculateCollision(n,e,t,i){Oh.setFromMatrixPosition(n),Lr.subVectors(this.tail,this.offset).applyMatrix4(n),Lr.sub(Oh);const r=Lr.lengthSq();i.copy(e).sub(Oh);const s=Lr.dot(i);s<=0||(r<=s||Lr.multiplyScalar(s/r),i.sub(Lr));const o=i.length(),a=this.inside?this.radius-t-o:o-t-this.radius;return a<0&&(i.multiplyScalar(1/o),this.inside&&i.negate()),a}},Uh=new N,Dg=new Ue,Ng=class extends Nh{get type(){return"plane"}constructor(n){var e,t;super(),this.offset=(e=n==null?void 0:n.offset)!=null?e:new N(0,0,0),this.normal=(t=n==null?void 0:n.normal)!=null?t:new N(0,0,1)}calculateCollision(n,e,t,i){i.setFromMatrixPosition(n),i.negate().add(e),Dg.getNormalMatrix(n),Uh.copy(this.normal).applyNormalMatrix(Dg).normalize();const r=i.dot(Uh)-t;return i.copy(Uh),r}},u1=new N,Og=class extends Nh{get type(){return"sphere"}constructor(n){var e,t,i;super(),this.offset=(e=n==null?void 0:n.offset)!=null?e:new N(0,0,0),this.radius=(t=n==null?void 0:n.radius)!=null?t:0,this.inside=(i=n==null?void 0:n.inside)!=null?i:!1}calculateCollision(n,e,t,i){i.subVectors(e,u1.setFromMatrixPosition(n));const r=i.length(),s=this.inside?this.radius-t-r:r-t-this.radius;return s<0&&(i.multiplyScalar(1/r),this.inside&&i.negate()),s}},fi=new N,h1=class extends Dt{constructor(n){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new N,this._currentTail=new N,this._shape=n,this._attrPos=new ot(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ot(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,n=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),n=!0);const t=fi.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),n=!0),n&&this._buildPosition()}_buildPosition(){fi.copy(this._currentTail).sub(this._currentOffset);const n=fi.length()/this._currentRadius;for(let i=0;i<=16;i++){const r=i/16*Math.PI;this._attrPos.setXYZ(i,-Math.sin(r),-Math.cos(r),0),this._attrPos.setXYZ(17+i,n+Math.sin(r),Math.cos(r),0),this._attrPos.setXYZ(34+i,-Math.sin(r),0,-Math.cos(r)),this._attrPos.setXYZ(51+i,n+Math.sin(r),0,Math.cos(r))}for(let i=0;i<32;i++){const r=i/16*Math.PI;this._attrPos.setXYZ(68+i,0,Math.sin(r),Math.cos(r)),this._attrPos.setXYZ(100+i,n,Math.sin(r),Math.cos(r))}const e=Math.atan2(fi.y,Math.sqrt(fi.x*fi.x+fi.z*fi.z)),t=-Math.atan2(fi.z,fi.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<34;n++){const e=(n+1)%34;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(68+n*2,34+n,34+e)}for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(136+n*2,68+n,68+e),this._attrIndex.setXY(200+n*2,100+n,100+e)}this._attrIndex.needsUpdate=!0}},d1=class extends Dt{constructor(n){super(),this.worldScale=1,this._currentOffset=new N,this._currentNormal=new N,this._shape=n,this._attrPos=new ot(new Float32Array(6*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ot(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),n=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),n=!0),n&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},f1=class extends Dt{constructor(n){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new N,this._shape=n,this._attrPos=new ot(new Float32Array(32*3*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ot(new Uint16Array(64*3),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,n=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),n=!0),n&&this._buildPosition()}_buildPosition(){for(let n=0;n<32;n++){const e=n/16*Math.PI;this._attrPos.setXYZ(n,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+n,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+n,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(64+n*2,32+n,32+e),this._attrIndex.setXY(128+n*2,64+n,64+e)}this._attrIndex.needsUpdate=!0}},p1=new N,Fh=class extends pn{constructor(n){if(super(),this.matrixAutoUpdate=!1,this.collider=n,this.collider.shape instanceof Og)this._geometry=new f1(this.collider.shape);else if(this.collider.shape instanceof Lg)this._geometry=new h1(this.collider.shape);else if(this.collider.shape instanceof Ng)this._geometry=new d1(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const e=new Ji({color:16711935,depthTest:!1,depthWrite:!1});this._line=new vo(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(n){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=p1.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(n)}},m1=class extends Dt{constructor(n){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new N,this._springBone=n,this._attrPos=new ot(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ot(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;const e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,n=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),n=!0),n&&this._buildPosition()}_buildPosition(){for(let n=0;n<32;n++){const e=n/16*Math.PI;this._attrPos.setXYZ(n,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+n,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+n,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(64+n*2,32+n,32+e),this._attrIndex.setXY(128+n*2,64+n,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},g1=new N,_1=class extends pn{constructor(n){super(),this.matrixAutoUpdate=!1,this.springBone=n,this._geometry=new m1(this.springBone);const e=new Ji({color:16776960,depthTest:!1,depthWrite:!1});this._line=new vo(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(n){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=g1.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(n)}},Bh=class extends lt{constructor(n){super(),this.colliderMatrix=new _e,this.shape=n}updateWorldMatrix(n,e){super.updateWorldMatrix(n,e),v1(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function v1(n,e,t){const i=e.elements;n.copy(e),t&&(n.elements[12]=i[0]*t.x+i[4]*t.y+i[8]*t.z+i[12],n.elements[13]=i[1]*t.x+i[5]*t.y+i[9]*t.z+i[13],n.elements[14]=i[2]*t.x+i[6]*t.y+i[10]*t.z+i[14])}var y1=new _e;function x1(n){return n.invert?n.invert():n.getInverse(y1.copy(n)),n}var M1=class{constructor(n){this._inverseCache=new _e,this._shouldUpdateInverse=!0,this.matrix=n;const e={set:(t,i,r)=>(this._shouldUpdateInverse=!0,t[i]=r,!0)};this._originalElements=n.elements,n.elements=new Proxy(n.elements,e)}get inverse(){return this._shouldUpdateInverse&&(x1(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},kh=new _e,Es=new N,wo=new N,Ao=new N,Ro=new N,S1=new _e,b1=class{constructor(n,e,t={},i=[]){this._currentTail=new N,this._prevTail=new N,this._boneAxis=new N,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new _e,this._initialLocalRotation=new De,this._initialLocalChildPosition=new N;var r,s,o,a,l,c;this.bone=n,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(r=t.hitRadius)!=null?r:0,stiffness:(s=t.stiffness)!=null?s:1,gravityPower:(o=t.gravityPower)!=null?o:0,gravityDir:(l=(a=t.gravityDir)==null?void 0:a.clone())!=null?l:new N(0,-1,0),dragForce:(c=t.dragForce)!=null?c:.4},this.colliderGroups=i}get dependencies(){const n=new Set,e=this.bone.parent;e&&n.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let i=0;i<this.colliderGroups[t].colliders.length;i++)n.add(this.colliderGroups[t].colliders[i]);return n}get center(){return this._center}set center(n){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=n,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new M1(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:kh}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const n=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(n),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const n=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(n),this._prevTail.copy(this._currentTail)}update(n){if(n<=0)return;this._calcWorldSpaceBoneLength();const e=wo.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);Ro.copy(this._currentTail).add(Es.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*n).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*n),Ao.setFromMatrixPosition(this.bone.matrixWorld),Ro.sub(Ao).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Ao),this._collision(Ro),this._prevTail.copy(this._currentTail),this._currentTail.copy(Ro).applyMatrix4(this._getMatrixWorldToCenter());const t=S1.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,Es.copy(Ro).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(n){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){const i=this.colliderGroups[e].colliders[t],r=i.shape.calculateCollision(i.colliderMatrix,n,this.settings.hitRadius,Es);if(r<0){n.addScaledVector(Es,-r),n.sub(Ao);const s=n.length();n.multiplyScalar(this._worldSpaceBoneLength/s).add(Ao)}}}_calcWorldSpaceBoneLength(){Es.setFromMatrixPosition(this.bone.matrixWorld),this.child?wo.setFromMatrixPosition(this.child.matrixWorld):(wo.copy(this._initialLocalChildPosition),wo.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=Es.sub(wo).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:kh}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:kh}};function E1(n,e){const t=[];let i=n;for(;i!==null;)t.unshift(i),i=i.parent;t.forEach(r=>{e(r)})}function Vh(n,e){n.children.forEach(t=>{e(t)||Vh(t,e)})}function T1(n){var e;const t=new Map;for(const i of n){let r=i;do{const s=((e=t.get(r))!=null?e:0)+1;if(s===n.size)return r;t.set(r,s),r=r.parent}while(r!==null)}return null}var Ug=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const n=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{n.add(t)})}),Array.from(n)}get colliders(){const n=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{n.add(t)})}),Array.from(n)}addJoint(n){this._joints.add(n);let e=this._objectSpringBonesMap.get(n.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(n.bone,e)),e.add(n),this._isSortedJointsDirty=!0}addSpringBone(n){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(n)}deleteJoint(n){this._joints.delete(n),this._objectSpringBonesMap.get(n.bone).delete(n),this._isSortedJointsDirty=!0}deleteSpringBone(n){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(n)}setInitState(){this._sortJoints();for(let n=0;n<this._sortedJoints.length;n++){const e=this._sortedJoints[n];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let n=0;n<this._sortedJoints.length;n++){const e=this._sortedJoints[n];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(n){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){const t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(n),Vh(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;const n=[],e=new Set,t=new Set,i=new Set;for(const s of this._joints)this._insertJointSort(s,e,t,n,i);this._sortedJoints=n;const r=T1(i);this._ancestors=[],r&&(this._ancestors.push(r),Vh(r,s=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(s))==null?void 0:o.size)!=null?a:0)>0?!0:(this._ancestors.push(s),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(n,e,t,i,r){if(t.has(n))return;if(e.has(n)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(n);const s=n.dependencies;for(const o of s){let a=!1,l=null;E1(o,c=>{const u=this._objectSpringBonesMap.get(c);if(u)for(const h of u)a=!0,this._insertJointSort(h,e,t,i,r);else a||(l=c)}),l&&r.add(l)}i.push(n),t.add(n)}_relevantChildrenUpdated(n){var e,t;return((t=(e=this._objectSpringBonesMap.get(n))==null?void 0:e.size)!=null?t:0)>0?!0:(n.updateWorldMatrix(!1,!1),!1)}},Fg="VRMC_springBone_extended_collider",w1=new Set(["1.0","1.0-beta"]),A1=new Set(["1.0"]),Bg=class Ws{get name(){return Ws.EXTENSION_NAME}constructor(e,t){var i;this.parser=e,this.jointHelperRoot=t==null?void 0:t.jointHelperRoot,this.colliderHelperRoot=t==null?void 0:t.colliderHelperRoot,this.useExtendedColliders=(i=t==null?void 0:t.useExtendedColliders)!=null?i:!0}afterRoot(e){return Ml(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return Ml(this,null,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const i=yield this._v0Import(e);return i??null})}_v1Import(e){return Ml(this,null,function*(){var t,i,r,s,o;const a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf(Ws.EXTENSION_NAME))!==-1))return null;const c=new Ug,u=yield e.parser.getDependencies("node"),h=(i=a.extensions)==null?void 0:i[Ws.EXTENSION_NAME];if(!h)return null;const d=h.specVersion;if(!w1.has(d))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Ws.EXTENSION_NAME} specVersion "${d}"`),null;const f=(r=h.colliders)==null?void 0:r.map((m,p)=>{var _,b,y,M,w,P,A,U,Y,v,S,B,T,E,O;const R=u[m.node];if(R==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${p} attempted to use the node #${m.node} but not found`),null;const F=m.shape,k=(_=m.extensions)==null?void 0:_[Fg];if(this.useExtendedColliders&&k!=null){const J=k.specVersion;if(!A1.has(J))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Fg} specVersion "${J}". Fallbacking to the ${Ws.EXTENSION_NAME} definition`);else{const L=k.shape;if(L.sphere)return this._importSphereCollider(R,{offset:new N().fromArray((b=L.sphere.offset)!=null?b:[0,0,0]),radius:(y=L.sphere.radius)!=null?y:0,inside:(M=L.sphere.inside)!=null?M:!1});if(L.capsule)return this._importCapsuleCollider(R,{offset:new N().fromArray((w=L.capsule.offset)!=null?w:[0,0,0]),radius:(P=L.capsule.radius)!=null?P:0,tail:new N().fromArray((A=L.capsule.tail)!=null?A:[0,0,0]),inside:(U=L.capsule.inside)!=null?U:!1});if(L.plane)return this._importPlaneCollider(R,{offset:new N().fromArray((Y=L.plane.offset)!=null?Y:[0,0,0]),normal:new N().fromArray((v=L.plane.normal)!=null?v:[0,0,1])})}}if(F.sphere)return this._importSphereCollider(R,{offset:new N().fromArray((S=F.sphere.offset)!=null?S:[0,0,0]),radius:(B=F.sphere.radius)!=null?B:0,inside:!1});if(F.capsule)return this._importCapsuleCollider(R,{offset:new N().fromArray((T=F.capsule.offset)!=null?T:[0,0,0]),radius:(E=F.capsule.radius)!=null?E:0,tail:new N().fromArray((O=F.capsule.tail)!=null?O:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${p} has no valid shape`)}),g=(s=h.colliderGroups)==null?void 0:s.map((m,p)=>{var _;return{colliders:((_=m.colliders)!=null?_:[]).flatMap(y=>{const M=f==null?void 0:f[y];return M??(console.warn(`VRMSpringBoneLoaderPlugin: The colliderGroup #${p} attempted to use a collider #${y} but not found`),[])}),name:m.name}});return(o=h.springs)==null||o.forEach((m,p)=>{var _;const b=m.joints,y=(_=m.colliderGroups)==null?void 0:_.map(P=>{const A=g==null?void 0:g[P];if(A==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${p} attempted to use a colliderGroup ${P} but not found`);return A}),M=m.center!=null?u[m.center]:void 0;let w;b.forEach(P=>{if(w){const A=w.node,U=u[A],Y=P.node,v=u[Y],S={hitRadius:w.hitRadius,dragForce:w.dragForce,gravityPower:w.gravityPower,stiffness:w.stiffness,gravityDir:w.gravityDir!=null?new N().fromArray(w.gravityDir):void 0},B=this._importJoint(U,v,S,y);M&&(B.center=M),c.addJoint(B)}w=P})}),c.setInitState(),c})}_v0Import(e){return Ml(this,null,function*(){var t,i,r;const s=e.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;const a=(i=s.extensions)==null?void 0:i.VRM,l=a==null?void 0:a.secondaryAnimation;if(!l)return null;const c=l==null?void 0:l.boneGroups;if(!c)return null;const u=new Ug,h=yield e.parser.getDependencies("node"),d=(r=l.colliderGroups)==null?void 0:r.map(f=>{var g;const m=h[f.node];return{colliders:((g=f.colliders)!=null?g:[]).map((_,b)=>{var y,M,w;const P=new N(0,0,0);return _.offset&&P.set((y=_.offset.x)!=null?y:0,(M=_.offset.y)!=null?M:0,_.offset.z?-_.offset.z:0),this._importSphereCollider(m,{offset:P,radius:(w=_.radius)!=null?w:0,inside:!1})})}});return c==null||c.forEach((f,g)=>{const m=f.bones;m&&m.forEach(p=>{var _,b,y,M;const w=h[p],P=new N;f.gravityDir?P.set((_=f.gravityDir.x)!=null?_:0,(b=f.gravityDir.y)!=null?b:0,(y=f.gravityDir.z)!=null?y:0):P.set(0,-1,0);const A=f.center!=null?h[f.center]:void 0,U={hitRadius:f.hitRadius,dragForce:f.dragForce,gravityPower:f.gravityPower,stiffness:f.stiffiness,gravityDir:P},Y=(M=f.colliderGroups)==null?void 0:M.map(v=>{const S=d==null?void 0:d[v];if(S==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${g} attempted to use a colliderGroup ${v} but not found`);return S});w.traverse(v=>{var S;const B=(S=v.children[0])!=null?S:null,T=this._importJoint(v,B,U,Y);A&&(T.center=A),u.addJoint(T)})})}),e.scene.updateMatrixWorld(),u.setInitState(),u})}_importJoint(e,t,i,r){const s=new b1(e,t,i,r);if(this.jointHelperRoot){const o=new _1(s);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return s}_importSphereCollider(e,t){const i=new Og(t),r=new Bh(i);if(e.add(r),this.colliderHelperRoot){const s=new Fh(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importCapsuleCollider(e,t){const i=new Lg(t),r=new Bh(i);if(e.add(r),this.colliderHelperRoot){const s=new Fh(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importPlaneCollider(e,t){const i=new Ng(t),r=new Bh(i);if(e.add(r),this.colliderHelperRoot){const s=new Fh(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}};Bg.EXTENSION_NAME="VRMC_springBone";var R1=Bg,C1=class{get name(){return"VRMLoaderPlugin"}constructor(n,e){var t,i,r,s,o,a,l,c,u,h;this.parser=n;const d=e==null?void 0:e.helperRoot,f=e==null?void 0:e.autoUpdateHumanBones;this.expressionPlugin=(t=e==null?void 0:e.expressionPlugin)!=null?t:new $w(n),this.firstPersonPlugin=(i=e==null?void 0:e.firstPersonPlugin)!=null?i:new jw(n),this.humanoidPlugin=(r=e==null?void 0:e.humanoidPlugin)!=null?r:new eA(n,{helperRoot:d,autoUpdateHumanBones:f}),this.lookAtPlugin=(s=e==null?void 0:e.lookAtPlugin)!=null?s:new mA(n,{helperRoot:d}),this.metaPlugin=(o=e==null?void 0:e.metaPlugin)!=null?o:new vA(n),this.mtoonMaterialPlugin=(a=e==null?void 0:e.mtoonMaterialPlugin)!=null?a:new DA(n),this.materialsHDREmissiveMultiplierPlugin=(l=e==null?void 0:e.materialsHDREmissiveMultiplierPlugin)!=null?l:new OA(n),this.materialsV0CompatPlugin=(c=e==null?void 0:e.materialsV0CompatPlugin)!=null?c:new HA(n),this.springBonePlugin=(u=e==null?void 0:e.springBonePlugin)!=null?u:new R1(n,{colliderHelperRoot:d,jointHelperRoot:d}),this.nodeConstraintPlugin=(h=e==null?void 0:e.nodeConstraintPlugin)!=null?h:new c1(n,{helperRoot:d})}beforeRoot(){return pl(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(n){return pl(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(n)})}getMaterialType(n){const e=this.mtoonMaterialPlugin.getMaterialType(n);return e??null}extendMaterialParams(n,e){return pl(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(n,e),yield this.mtoonMaterialPlugin.extendMaterialParams(n,e)})}afterRoot(n){return pl(this,null,function*(){yield this.metaPlugin.afterRoot(n),yield this.humanoidPlugin.afterRoot(n),yield this.expressionPlugin.afterRoot(n),yield this.lookAtPlugin.afterRoot(n),yield this.firstPersonPlugin.afterRoot(n),yield this.springBonePlugin.afterRoot(n),yield this.nodeConstraintPlugin.afterRoot(n),yield this.mtoonMaterialPlugin.afterRoot(n);const e=n.userData.vrmMeta,t=n.userData.vrmHumanoid;if(e&&t){const i=new xA({scene:n.scene,expressionManager:n.userData.vrmExpressionManager,firstPerson:n.userData.vrmFirstPerson,humanoid:t,lookAt:n.userData.vrmLookAt,meta:e,materials:n.userData.vrmMToonMaterials,springBoneManager:n.userData.vrmSpringBoneManager,nodeConstraintManager:n.userData.vrmNodeConstraintManager});n.userData.vrm=i}})}};function P1(n){const e=new Set;return n.traverse(t=>{if(!t.isMesh)return;const i=t;e.add(i)}),e}function kg(n,e,t){if(e.size===1){const o=e.values().next().value;if(o.weight===1)return n[o.index]}const i=new Float32Array(n[0].count*3);let r=0;if(t)r=1;else for(const o of e)r+=o.weight;for(const o of e){const a=n[o.index],l=o.weight/r;for(let c=0;c<a.count;c++)i[c*3+0]+=a.getX(c)*l,i[c*3+1]+=a.getY(c)*l,i[c*3+2]+=a.getZ(c)*l}return new ot(i,3)}function I1(n){var e;const t=P1(n.scene),i=new Map,r=(e=n.expressionManager)==null?void 0:e.expressionMap;if(r!=null)for(const[s,o]of Object.entries(r)){const a=new Set;for(const l of o.binds)if(l instanceof ml){if(l.weight!==0)for(const c of l.primitives){let u=i.get(c);u==null&&(u=new Map,i.set(c,u));let h=u.get(s);h==null&&(h=new Set,u.set(s,h)),h.add(l)}a.add(l)}for(const l of a)o.deleteBind(l)}for(const s of t){const o=i.get(s);if(o==null)continue;const a=s.geometry.morphAttributes;s.geometry.morphAttributes={};const l=s.geometry.clone();s.geometry=l;const c=l.morphTargetsRelative,u=a.position!=null,h=a.normal!=null,d={},f={},g=[];if(u||h){u&&(d.position=[]),h&&(d.normal=[]);let m=0;for(const[p,_]of o)u&&(d.position[m]=kg(a.position,_,c)),h&&(d.normal[m]=kg(a.normal,_,c)),r==null||r[p].addBind(new ml({index:m,weight:1,primitives:[s]})),f[p]=m,g.push(0),m++}l.morphAttributes=d,s.morphTargetDictionary=f,s.morphTargetInfluences=g}}function L1(n){var e;const t=D1(n),i=new Map;for(const u of t){const h=u.geometry,d=h.getAttribute("skinIndex"),f=(e=i.get(d))!=null?e:new Map;i.set(d,f);const g=h.getAttribute("skinWeight"),m=N1(d,g);f.set(g,m)}const r=new Map;for(const u of t){const h=O1(u,i);r.set(u,h)}const s=[];for(const[u,h]of r){let d=!1;for(const f of s)if(U1(h,f.boneInverseMap)){d=!0,f.meshes.add(u);for(const[m,p]of h)f.boneInverseMap.set(m,p);break}d||s.push({boneInverseMap:h,meshes:new Set([u])})}const o=new Map,a=new zh,l=new zh,c=new zh;for(const u of s){const{boneInverseMap:h,meshes:d}=u,f=Array.from(h.keys()),g=Array.from(h.values()),m=new wr(f,g),p=l.getOrCreate(m);for(const _ of d){const b=_.geometry.getAttribute("skinIndex"),y=a.getOrCreate(b),M=_.skeleton.bones,w=M.map(U=>c.getOrCreate(U)).join(","),P=`${y};${p};${w}`;let A=o.get(P);A==null&&(A=b.clone(),F1(A,M,f),o.set(P,A)),_.geometry.setAttribute("skinIndex",A)}for(const _ of d)_.bind(m,new _e)}}function D1(n){const e=new Set;return n.traverse(t=>{if(!t.isSkinnedMesh)return;const i=t;e.add(i)}),e}function N1(n,e){const t=new Set;for(let i=0;i<n.count;i++)for(let r=0;r<n.itemSize;r++){const s=n.getComponent(i,r);e.getComponent(i,r)!==0&&t.add(s)}return t}function O1(n,e){const t=new Map,i=n.skeleton,r=n.geometry,s=r.getAttribute("skinIndex"),o=r.getAttribute("skinWeight"),a=e.get(s),l=a==null?void 0:a.get(o);if(!l)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(const c of l)t.set(i.bones[c],i.boneInverses[c]);return t}function U1(n,e){for(const[t,i]of n.entries()){const r=e.get(t);if(r!=null&&!B1(i,r))return!1}return!0}function F1(n,e,t){const i=new Map;for(const s of e)i.set(s,i.size);const r=new Map;for(const[s,o]of t.entries()){const a=i.get(o);r.set(a,s)}for(let s=0;s<n.count;s++)for(let o=0;o<n.itemSize;o++){const a=n.getComponent(s,o),l=r.get(a);n.setComponent(s,o,l)}n.needsUpdate=!0}function B1(n,e,t){if(t=t||1e-4,n.elements.length!=e.elements.length)return!1;for(let i=0,r=n.elements.length;i<r;i++)if(Math.abs(n.elements[i]-e.elements[i])>t)return!1;return!0}var zh=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(n){return this._objectIndexMap.get(n)}getOrCreate(n){let e=this._objectIndexMap.get(n);return e==null&&(e=this._index,this._objectIndexMap.set(n,e),this._index++),e}};function Vg(n){if(Object.values(n).forEach(e=>{e!=null&&e.isTexture&&e.dispose()}),n.isShaderMaterial){const e=n.uniforms;e&&Object.values(e).forEach(t=>{const i=t.value;i!=null&&i.isTexture&&i.dispose()})}n.dispose()}function k1(n){const e=n.geometry;e&&e.dispose();const t=n.skeleton;t&&t.dispose();const i=n.material;i&&(Array.isArray(i)?i.forEach(r=>Vg(r)):i&&Vg(i))}function V1(n){n.traverse(k1)}function z1(n,e){var t,i;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");const r=(t=e==null?void 0:e.experimentalSameBoneCounts)!=null?t:!1,s=[];n.traverse(l=>{l.type==="SkinnedMesh"&&s.push(l)});const o=new Map;let a=0;for(const l of s){const u=l.geometry.getAttribute("skinIndex");if(o.has(u))continue;const h=new Map,d=new Map;for(let f=0;f<u.count;f++)for(let g=0;g<u.itemSize;g++){const m=u.getComponent(f,g);let p=h.get(m);p==null&&(p=h.size,h.set(m,p),d.set(p,m)),u.setComponent(f,g,p)}u.needsUpdate=!0,o.set(u,d),a=Math.max(a,h.size)}for(const l of s){const u=l.geometry.getAttribute("skinIndex"),h=o.get(u),d=[],f=[],g=r?a:h.size;for(let p=0;p<g;p++){const _=(i=h.get(p))!=null?i:0;d.push(l.skeleton.bones[_]),f.push(l.skeleton.boneInverses[_])}const m=new wr(d,f);l.bind(m,new _e)}}function H1(n){const e=new Map;n.traverse(t=>{var i,r,s,o;if(!t.isMesh)return;const a=t,l=a.geometry,c=l.index;if(c==null)return;const u=e.get(l);if(u!=null){a.geometry=u;return}const h=Object.values(l.attributes)[0].count,d=new Array(h);let f=0;const g=c.array;for(let M=0;M<g.length;M++){const w=g[M];d[w]||(d[w]=!0,f++)}if(f===h)return;const m=[],p=[];let _=0;for(let M=0;M<d.length;M++)if(d[M]){const w=_++;m[M]=w,p[w]=M}const b=new Dt;b.name=l.name,b.morphTargetsRelative=l.morphTargetsRelative,l.groups.forEach(M=>{b.addGroup(M.start,M.count,M.materialIndex)}),b.boundingBox=(r=(i=l.boundingBox)==null?void 0:i.clone())!=null?r:null,b.boundingSphere=(o=(s=l.boundingSphere)==null?void 0:s.clone())!=null?o:null,b.setDrawRange(l.drawRange.start,l.drawRange.count),b.userData=l.userData,e.set(l,b);{const M=c.array,w=new M.constructor(M.length);for(let P=0;P<M.length;P++){const A=M[P],U=m[A];w[P]=U}b.setIndex(new ot(w,1,!1))}Object.keys(l.attributes).forEach(M=>{const w=l.attributes[M];if(w.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const P=w.array,{itemSize:A,normalized:U}=w,Y=new P.constructor(p.length*A);p.forEach((v,S)=>{for(let B=0;B<A;B++)Y[S*A+B]=P[v*A+B]}),b.setAttribute(M,new ot(Y,A,U))});let y=!0;Object.keys(l.morphAttributes).forEach(M=>{b.morphAttributes[M]=[];const w=l.morphAttributes[M];for(let P=0;P<w.length;P++){const A=w[P];if(A.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const U=A.array,{itemSize:Y,normalized:v}=A,S=new U.constructor(p.length*Y);p.forEach((B,T)=>{for(let E=0;E<Y;E++)S[T*Y+E]=U[B*Y+E]}),y=y&&S.every(B=>B===0),b.morphAttributes[M][P]=new ot(S,Y,v)}}),y&&(b.morphAttributes={}),a.geometry=b}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function G1(n){var e;((e=n.meta)==null?void 0:e.metaVersion)==="0"&&(n.scene.rotation.y=Math.PI)}var Oi=class{constructor(){}};Oi.combineMorphs=I1,Oi.combineSkeletons=L1,Oi.deepDispose=V1,Oi.removeUnnecessaryJoints=z1,Oi.removeUnnecessaryVertices=H1,Oi.rotateVRM0=G1;/*!
 * @pixiv/three-vrm-core v3.3.6
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-mtoon v3.3.6
 * MToon (toon material) module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier v3.3.6
 * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-v0compat v3.3.6
 * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-node-constraint v3.3.6
 * Node constraint module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-node-constraint is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-springbone v3.3.6
 * Spring bone module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-springbone is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */function zg(n,e){if(e===Rx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===yu||e===Jf){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===yu)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class W1 extends Di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Y1(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new sR(t)}),this.register(function(t){return new oR(t)}),this.register(function(t){return new aR(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new eR(t)}),this.register(function(t){return new tR(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new Z1(t)}),this.register(function(t){return new rR(t)}),this.register(function(t){return new iR(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new lR(t)}),this.register(function(t){return new cR(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ms.extractUrlBase(e);o=Ms.resolveURL(c,this.path)}else o=Ms.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new fh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hg){try{o[Ze.KHR_BINARY_GLTF]=new uR(e)}catch(h){r&&r(h);return}s=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new bR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:o[h]=new j1;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[h]=new hR(s,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[h]=new dR;break;case Ze.KHR_MESH_QUANTIZATION:o[h]=new fR;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function $1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class X1{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Me(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Zt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new vh(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _h(u),c.distance=h;break;case"spot":c=new Um(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ui(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class j1{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Pi}extendParams(e,t,i){const r=[];e.color=new Me(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,_t))}return Promise.all(r)}}class q1{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Y1{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(a,a)}return Promise.all(s)}}class K1{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Z1{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class J1{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,_t)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Q1{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class eR{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(a[0],a[1],a[2],Zt),Promise.all(s)}}class tR{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class nR{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,_t)),Promise.all(s)}}class iR{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class rR{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class sR{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class oR{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aR{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lR{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,r.mode,r.filter),f})})}else return null}}class cR{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Bn.TRIANGLES&&c.mode!==Bn.TRIANGLE_STRIP&&c.mode!==Bn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const m=new _e,p=new N,_=new De,b=new N(1,1,1),y=new VT(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,M),l.SCALE&&b.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,m.compose(p,_,b));for(const M in l)if(M==="_COLOR_0"){const w=l[M];y.instanceColor=new sh(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);lt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Hg="glTF",Co=12,Gg={JSON:1313821514,BIN:5130562};class uR{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Co),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Co,s=new DataView(e,Co);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Gg.JSON){const c=new Uint8Array(e,Co+o,a);this.content=i.decode(c)}else if(l===Gg.BIN){const c=Co+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class hR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Gh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Gh[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],f=Ts[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(f){for(const g in f.attributes){const m=f.attributes[g],p=l[g];p!==void 0&&(m.normalized=p)}h(f)},a,c,Zt,d)})})}}class dR{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class fR{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Wg extends So{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(i-t)/u,d=h*h,f=d*h,g=e*c,m=g-c,p=-2*f+3*d,_=f-d,b=1-p,y=_-d+h;for(let M=0;M!==a;M++){const w=o[m+M+a],P=o[m+M+l]*u,A=o[g+M+a],U=o[g+M]*u;s[M]=b*w+y*P+p*A+_*U}return s}}const pR=new De;class mR extends Wg{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return pR.fromArray(s).normalize().toArray(s),s}}const Bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$g={9728:hn,9729:wn,9984:Hf,9985:ga,9986:Zs,9987:Mi},Xg={33071:si,33648:ma,10497:Wi},Hh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},tr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gR={CUBICSPLINE:void 0,LINEAR:to,STEP:eo},Wh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _R(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new hh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xi})),n.DefaultMaterial}function Dr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ui(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vR(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(d)}if(r){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function yR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xR(n){let e;const t=n.extensions&&n.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$h(t.attributes):e=n.indices+":"+$h(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+$h(n.targets[i]);return e}function $h(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Xh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function MR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const SR=new _e;class bR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new Dm(this.options.manager):this.textureLoader=new Mw(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Dr(s,a,r),Ui(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Ms.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Hh[r.type],a=Ts[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new ot(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Hh[r.type],c=Ts[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=r.byteOffset||0,f=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let m,p;if(f&&f!==h){const _=Math.floor(d/f),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+_+":"+r.count;let y=t.cache.get(b);y||(m=new c(a,_*f,r.count*f/u),y=new UT(m,f/u),t.cache.add(b,y)),p=new th(y,l,d%f/u,g)}else a===null?m=new c(r.count*l):m=new c(a,d,r.count*l),p=new ot(m,l,g);if(r.sparse!==void 0){const _=Hh.SCALAR,b=Ts[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,w=new b(o[1],y,r.sparse.count*_),P=new c(o[2],M,r.sparse.count*l);a!==null&&(p=new ot(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,U=w.length;A<U;A++){const Y=w[A];if(p.setX(Y,P[A*l]),l>=2&&p.setY(Y,P[A*l+1]),l>=3&&p.setZ(Y,P[A*l+2]),l>=4&&p.setW(Y,P[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=$g[d.magFilter]||wn,u.minFilter=$g[d.minFilter]||Mi,u.wrapS=Xg[d.wrapS]||Wi,u.wrapT=Xg[d.wrapT]||Wi,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(m){const p=new Wt(m);p.needsUpdate=!0,d(p)}),t.load(Ms.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ui(h,o),h.userData.mimeType=o.mimeType||MR(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ym,Rn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Ji,Rn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return hh}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const h=r[Ze.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Me(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Zt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,_t)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Nn);const u=s.alphaMode||Wh.OPAQUE;if(u===Wh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Wh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Pi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ge(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Pi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Pi){const h=s.emissiveFactor;a.emissive=new Me().setRGB(h[0],h[1],h[2],Zt)}return s.emissiveTexture!==void 0&&o!==Pi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,_t)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Ui(h,s),t.associations.set(h,{materials:e}),s.extensions&&Dr(r,h,s),h})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return jg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=xR(c),h=r[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=jg(new Dt,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?_R(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const m=u[f],p=o[f];let _;const b=c[f];if(p.mode===Bn.TRIANGLES||p.mode===Bn.TRIANGLE_STRIP||p.mode===Bn.TRIANGLE_FAN||p.mode===void 0)_=s.isSkinnedMesh===!0?new rh(m,b):new rn(m,b),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),p.mode===Bn.TRIANGLE_STRIP?_.geometry=zg(_.geometry,Jf):p.mode===Bn.TRIANGLE_FAN&&(_.geometry=zg(_.geometry,yu));else if(p.mode===Bn.LINES)_=new vo(m,b);else if(p.mode===Bn.LINE_STRIP)_=new _o(m,b);else if(p.mode===Bn.LINE_LOOP)_=new zT(m,b);else if(p.mode===Bn.POINTS)_=new HT(m,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(_.geometry.morphAttributes).length>0&&yR(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Ui(_,s),p.extensions&&Dr(r,_,p),t.assignFinalMaterial(_),h.push(_)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&Dr(r,h[0],s),h[0];const d=new pn;s.extensions&&Dr(r,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new fn(et.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Ya(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ui(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new _e;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new wr(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){const f=r.channels[h],g=r.samplers[f.sampler],m=f.target,p=m.node,_=r.parameters!==void 0?r.parameters[g.input]:g.input,b=r.parameters!==void 0?r.parameters[g.output]:g.output;m.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",_)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(m))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],m=h[3],p=h[4],_=[];for(let b=0,y=d.length;b<y;b++){const M=d[b],w=f[b],P=g[b],A=m[b],U=p[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const Y=i._createAnimationTracks(M,w,P,A,U);if(Y)for(let v=0;v<Y.length;v++)_.push(Y[v])}return new xs(s,void 0,_)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,SR)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new tl:c.length>1?u=new pn:c.length===1?u=c[0]:u=new lt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Ui(u,s),s.extensions&&Dr(i,u,s),s.matrix!==void 0){const h=new _e;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new pn;i.name&&(s.name=r.createUniqueName(i.name)),Ui(s,i),i.extensions&&Dr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of r.associations)(d instanceof Rn||d instanceof Wt)&&h.set(d,f);return u.traverse(d=>{const f=r.associations.get(d);f!=null&&h.set(d,f)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];tr[s.path]===tr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(tr[s.path]){case tr.weights:c=Rr;break;case tr.rotation:c=ui;break;case tr.position:case tr.scale:c=Li;break;default:switch(i.itemSize){case 1:c=Rr;break;case 2:case 3:default:c=Li;break}break}const u=r.interpolation!==void 0?gR[r.interpolation]:to,h=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+tr[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Xh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof ui?mR:Wg;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ER(n,e,t){const i=e.attributes,r=new Ei;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const u=Xh(Ts[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const m=Xh(Ts[d.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new oi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function jg(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Gh[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Xe.workingColorSpace!==Zt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Ui(n,e),ER(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?vR(n,e.targets,t):n})}const TR=async n=>{const e=new W1;e.register(i=>new C1(i));const t=await new Promise(i=>{e.load(n,r=>{const s=r.userData.vrm;Oi.removeUnnecessaryVertices(r.scene),Oi.removeUnnecessaryJoints(r.scene),s.scene.traverse(o=>{o.frustumCulled=!1}),i(s)})});return Oi.rotateVRM0(t),t},wR=async({canvas:n,vrmUrl:e,vrmCameraOptions:t={}})=>{const i=new OT,r=n.width/n.height,{frustumSize:s=3,lookAt:o=[0,1.5,0],position:a=[0,1.5,2]}=t,l=new Ya(-s*r/2,s*r/2,s/2,-s/2,.1,1e3);l.position.set(Vm(a),Hm(a),Wm(a)),l.lookAt(Vm(o),Hm(o),Wm(o));const c=new NT({canvas:n,antialias:!0,preserveDrawingBuffer:!0});c.setSize(n.width,n.height),c.setClearColor("grey",0);const u=new Bm(16777215,1);i.add(u);const h=new vh(16777215,1);h.position.set(0,1,1).normalize(),i.add(h);const d=await TR(e);return i.add(d.scene),d.lookAt.target=l,{scene:i,vrm:d,camera:l,renderer:c}};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var kn=Uint8Array,ws=Uint16Array,AR=Int32Array,qg=new kn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Yg=new kn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),RR=new kn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Kg=function(n,e){for(var t=new ws(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new AR(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},Zg=Kg(qg,2),Jg=Zg.b,CR=Zg.r;Jg[28]=258,CR[258]=28;for(var PR=Kg(Yg,0),IR=PR.b,jh=new ws(32768),Et=0;Et<32768;++Et){var nr=(Et&43690)>>1|(Et&21845)<<1;nr=(nr&52428)>>2|(nr&13107)<<2,nr=(nr&61680)>>4|(nr&3855)<<4,jh[Et]=((nr&65280)>>8|(nr&255)<<8)>>1}for(var Po=function(n,e,t){for(var i=n.length,r=0,s=new ws(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new ws(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new ws(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],u=e-n[r],h=o[n[r]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)a[jh[h]>>l]=c}else for(a=new ws(i),r=0;r<i;++r)n[r]&&(a[r]=jh[o[n[r]-1]++]>>15-n[r]);return a},Io=new kn(288),Et=0;Et<144;++Et)Io[Et]=8;for(var Et=144;Et<256;++Et)Io[Et]=9;for(var Et=256;Et<280;++Et)Io[Et]=7;for(var Et=280;Et<288;++Et)Io[Et]=8;for(var Qg=new kn(32),Et=0;Et<32;++Et)Qg[Et]=5;var LR=Po(Io,9,1),DR=Po(Qg,5,1),qh=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Jn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Yh=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},NR=function(n){return(n+7)/8|0},OR=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new kn(n.subarray(e,t))},UR=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Qn=function(n,e,t){var i=new Error(e||UR[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Qn),!t)throw i;return i},FR=function(n,e,t,i){var r=n.length,s=0;if(!r||e.f&&!e.l)return t||new kn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new kn(r*3));var c=function(Se){var re=t.length;if(Se>re){var z=new kn(Math.max(re*2,Se));z.set(t),t=z}},u=e.f||0,h=e.p||0,d=e.b||0,f=e.l,g=e.d,m=e.m,p=e.n,_=r*8;do{if(!f){u=Jn(n,h,1);var b=Jn(n,h+1,3);if(h+=3,b)if(b==1)f=LR,g=DR,m=9,p=5;else if(b==2){var P=Jn(n,h,31)+257,A=Jn(n,h+10,15)+4,U=P+Jn(n,h+5,31)+1;h+=14;for(var Y=new kn(U),v=new kn(19),S=0;S<A;++S)v[RR[S]]=Jn(n,h+S*3,7);h+=A*3;for(var B=qh(v),T=(1<<B)-1,E=Po(v,B,1),S=0;S<U;){var O=E[Jn(n,h,T)];h+=O&15;var y=O>>4;if(y<16)Y[S++]=y;else{var R=0,F=0;for(y==16?(F=3+Jn(n,h,3),h+=2,R=Y[S-1]):y==17?(F=3+Jn(n,h,7),h+=3):y==18&&(F=11+Jn(n,h,127),h+=7);F--;)Y[S++]=R}}var k=Y.subarray(0,P),J=Y.subarray(P);m=qh(k),p=qh(J),f=Po(k,m,1),g=Po(J,p,1)}else Qn(1);else{var y=NR(h)+4,M=n[y-4]|n[y-3]<<8,w=y+M;if(w>r){l&&Qn(0);break}a&&c(d+M),t.set(n.subarray(y,w),d),e.b=d+=M,e.p=h=w*8,e.f=u;continue}if(h>_){l&&Qn(0);break}}a&&c(d+131072);for(var L=(1<<m)-1,V=(1<<p)-1,K=h;;K=h){var R=f[Yh(n,h)&L],ee=R>>4;if(h+=R&15,h>_){l&&Qn(0);break}if(R||Qn(2),ee<256)t[d++]=ee;else if(ee==256){K=h,f=null;break}else{var G=ee-254;if(ee>264){var S=ee-257,$=qg[S];G=Jn(n,h,(1<<$)-1)+Jg[S],h+=$}var se=g[Yh(n,h)&V],ie=se>>4;se||Qn(3),h+=se&15;var J=IR[ie];if(ie>3){var $=Yg[ie];J+=Yh(n,h)&(1<<$)-1,h+=$}if(h>_){l&&Qn(0);break}a&&c(d+131072);var ae=d+G;if(d<J){var de=s-J,ue=Math.min(J,ae);for(de+d<0&&Qn(3);d<ue;++d)t[d]=i[de+d]}for(;d<ae;++d)t[d]=t[d-J]}}e.l=f,e.p=K,e.b=d,e.f=u,f&&(u=1,e.m=m,e.d=g,e.n=p)}while(!u);return d!=t.length&&o?OR(t,0,d):t.subarray(0,d)},BR=new kn(0),kR=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&Qn(6,"invalid zlib data"),(n[1]>>5&1)==1&&Qn(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function VR(n,e){return FR(n.subarray(kR(n),-4),{i:2},e,e)}var zR=typeof TextDecoder<"u"&&new TextDecoder,HR=0;try{zR.decode(BR,{stream:!0}),HR=1}catch{}function e_(n,e,t){const i=t.length-n-1;if(e>=t[i])return i-1;if(e<=t[n])return n;let r=n,s=i,o=Math.floor((r+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:r=o,o=Math.floor((r+s)/2);return o}function GR(n,e,t,i){const r=[],s=[],o=[];r[0]=1;for(let a=1;a<=t;++a){s[a]=e-i[n+1-a],o[a]=i[n+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],h=s[a-c],d=r[c]/(u+h);r[c]=l+u*d,l=h*d}r[a]=l}return r}function WR(n,e,t,i){const r=e_(n,i,e),s=GR(r,i,n,e),o=new tt(0,0,0,0);for(let a=0;a<=n;++a){const l=t[r-n+a],c=s[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function $R(n,e,t,i,r){const s=[];for(let h=0;h<=t;++h)s[h]=0;const o=[];for(let h=0;h<=i;++h)o[h]=s.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-r[n+1-h],c[h]=r[n+h]-e;let d=0;for(let f=0;f<h;++f){const g=c[f+1],m=l[h-f];a[h][f]=g+m;const p=a[f][h-1]/a[h][f];a[f][h]=d+g*p,d=m*p}a[h][h]=d}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let d=0,f=1;const g=[];for(let m=0;m<=t;++m)g[m]=s.slice(0);g[0][0]=1;for(let m=1;m<=i;++m){let p=0;const _=h-m,b=t-m;h>=m&&(g[f][0]=g[d][0]/a[b+1][_],p=g[f][0]*a[_][b]);const y=_>=-1?1:-_,M=h-1<=b?m-1:t-h;for(let P=y;P<=M;++P)g[f][P]=(g[d][P]-g[d][P-1])/a[b+1][_+P],p+=g[f][P]*a[_+P][b];h<=b&&(g[f][m]=-g[d][m-1]/a[b+1][h],p+=g[f][m]*a[h][b]),o[m][h]=p;const w=d;d=f,f=w}}let u=t;for(let h=1;h<=i;++h){for(let d=0;d<=t;++d)o[h][d]*=u;u*=t-h}return o}function XR(n,e,t,i,r){const s=r<n?r:n,o=[],a=e_(n,i,e),l=$R(a,i,n,s,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),d=h.w;h.x*=d,h.y*=d,h.z*=d,c[u]=h}for(let u=0;u<=s;++u){const h=c[a-n].clone().multiplyScalar(l[u][0]);for(let d=1;d<=n;++d)h.add(c[a-n+d].clone().multiplyScalar(l[u][d]));o[u]=h}for(let u=s+1;u<=r+1;++u)o[u]=new tt(0,0,0);return o}function jR(n,e){let t=1;for(let r=2;r<=n;++r)t*=r;let i=1;for(let r=2;r<=e;++r)i*=r;for(let r=2;r<=n-e;++r)i*=r;return t/i}function qR(n){const e=n.length,t=[],i=[];for(let s=0;s<e;++s){const o=n[s];t[s]=new N(o.x,o.y,o.z),i[s]=o.w}const r=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(r[s-a].clone().multiplyScalar(jR(s,a)*i[a]));r[s]=o.divideScalar(i[0])}return r}function YR(n,e,t,i,r){const s=XR(n,e,t,i,r);return qR(s)}class KR extends GT{constructor(e,t,i,r,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<i.length;++o){const a=i[o];this.controlPoints[o]=new tt(a.x,a.y,a.z,a.w)}}getPoint(e,t=new N){const i=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=WR(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),i.set(s.x,s.y,s.z)}getTangent(e,t=new N){const i=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=YR(this.degree,this.knots,this.controlPoints,r,1);return i.copy(s[1]).normalize(),i}}let qe,Ft,gn;class ZR extends Di{constructor(e){super(e)}load(e,t,i,r){const s=this,o=s.path===""?Ms.extractUrlBase(e):s.path,a=new fh(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e,t){if(iC(e))qe=new nC().parse(e);else{const r=s_(e);if(!rC(r))throw new Error("THREE.FBXLoader: Unknown format.");if(i_(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i_(r));qe=new tC().parse(r)}const i=new Dm(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new JR(i,this.manager).parse(qe)}}class JR{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Ft=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),r=this.parseDeformers(),s=new QR().parse(r);return this.parseScene(r,s,i),gn}parseConnections(){const e=new Map;return"Connections"in qe&&qe.Connections.connections.forEach(function(i){const r=i[0],s=i[1],o=i[2];e.has(r)||e.set(r,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(r).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in qe.Objects){const i=qe.Objects.Video;for(const r in i){const s=i[r],o=parseInt(r);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(i[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(const i in e){const r=e[i];t[r]!==void 0?e[i]=t[r]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,r=i.slice(i.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in qe.Objects){const i=qe.Objects.Texture;for(const r in i){const s=this.parseTexture(i[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,o=r!==void 0?r.value:0,a=s!==void 0?s.value:0;if(i.wrapS=o===0?Wi:si,i.wrapT=a===0?Wi:si,"Scaling"in e){const l=e.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;i.offset.x=l[0],i.offset.y=l[1]}return i}loadTexture(e,t){const i=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),r=e.FileName.split(".").pop().toLowerCase(),s=i.has(r)?this.manager.getHandler(`.${r}`):this.textureLoader;if(!s)return console.warn(`FBXLoader: ${r.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new Wt;const o=s.path;o||s.setPath(this.textureLoader.path);const a=Ft.get(e.id).children;let l;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(l=t[a[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&s.setPath(void 0));const c=s.load(l);return s.setPath(o),c}parseMaterials(e){const t=new Map;if("Material"in qe.Objects){const i=qe.Objects.Material;for(const r in i){const s=this.parseMaterial(i[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){const i=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!Ft.has(i))return null;const o=this.parseParameters(e,t,i);let a;switch(s.toLowerCase()){case"phong":a=new dh;break;case"lambert":a=new aw;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new dh;break}return a.setValues(o),a.name=r,a}parseParameters(e,t,i){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=Xe.toWorkingColorSpace(new Me().fromArray(e.Diffuse.value),_t):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=Xe.toWorkingColorSpace(new Me().fromArray(e.DiffuseColor.value),_t)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=Xe.toWorkingColorSpace(new Me().fromArray(e.Emissive.value),_t):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=Xe.toWorkingColorSpace(new Me().fromArray(e.EmissiveColor.value),_t)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=Xe.toWorkingColorSpace(new Me().fromArray(e.Specular.value),_t):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=Xe.toWorkingColorSpace(new Me().fromArray(e.SpecularColor.value),_t));const s=this;return Ft.get(i).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":r.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,o.ID),r.map!==void 0&&(r.map.colorSpace=_t);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,o.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=_t);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,o.ID),r.envMap!==void 0&&(r.envMap.mapping=fa,r.envMap.colorSpace=_t);break;case"SpecularColor":r.specularMap=s.getTexture(t,o.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=_t);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,o.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(e,t){return"LayeredTexture"in qe.Objects&&t in qe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Ft.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in qe.Objects){const i=qe.Objects.Deformer;for(const r in i){const s=i[r],o=Ft.get(parseInt(r));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,i);a.ID=r,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[r]=a}else if(s.attrType==="BlendShape"){const a={id:r};a.rawTargets=this.parseMorphTargets(o,i),a.id=r,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(r){const s=t[r.ID];if(s.attrType!=="Cluster")return;const o={ID:r.ID,indices:[],weights:[],transformLink:new _e().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),i.push(o)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Ft.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(a)}return i}parseScene(e,t,i){gn=new pn;const r=this.parseModels(e.skeletons,t,i),s=qe.Objects.Model,o=this;r.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),Ft.get(l.ID).parents.forEach(function(h){const d=r.get(h.ID);d!==void 0&&d.add(l)}),l.parent===null&&gn.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.addGlobalSceneSettings(),gn.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=r_(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new eC().parse();gn.children.length===1&&gn.children[0].isGroup&&(gn.children[0].animations=a,gn=gn.children[0]),gn.animations=a}parseModels(e,t,i){const r=new Map,s=qe.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=Ft.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,i);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new tl;break;case"Null":default:u=new pn;break}u.name=l.attrName?it.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=a}this.getTransformData(u,l),r.set(a,u)}return r}buildSkeleton(e,t,i,r){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const h=s;s=new tl,s.matrixWorld.copy(c.transformLink),s.name=r?it.sanitizeNodeName(r):"",s.userData.originalName=r,s.ID=i,l.bones[u]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,i;if(e.children.forEach(function(r){const s=qe.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new lt;else{let r=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(r=1);let s=1;i.NearPlane!==void 0&&(s=i.NearPlane.value/1e3);let o=1e3;i.FarPlane!==void 0&&(o=i.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(a=i.AspectWidth.value,l=i.AspectHeight.value);const c=a/l;let u=45;i.FieldOfView!==void 0&&(u=i.FieldOfView.value);const h=i.FocalLength?i.FocalLength.value:null;switch(r){case 0:t=new fn(u,c,s,o),h!==null&&t.setFocalLength(h);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new lt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new lt;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(r){const s=qe.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new lt;else{let r;i.LightType===void 0?r=0:r=i.LightType.value;let s=16777215;i.Color!==void 0&&(s=Xe.toWorkingColorSpace(new Me().fromArray(i.Color.value),_t));let o=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(o=0);let a=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?a=0:a=i.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new _h(s,o,a,l);break;case 1:t=new vh(s,o);break;case 2:let c=Math.PI/3;i.InnerAngle!==void 0&&(c=et.degToRad(i.InnerAngle.value));let u=0;i.OuterAngle!==void 0&&(u=et.degToRad(i.OuterAngle.value),u=Math.max(u,1)),t=new Um(s,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new _h(s,o);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let r,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),i.has(l.ID)&&a.push(i.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new dh({name:Di.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(r=new rh(s,o),r.normalizeSkinWeights()):r=new rn(s,o),r}createCurve(e,t){const i=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),r=new Ji({name:Di.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new _o(i,r)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=Lo(t.RotationOrder.value):i.eulerOrder=Lo(0),"Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&Ft.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=qe.Objects.Model[r.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),gn.add(e.target)):e.lookAt(new N().fromArray(o))}}})}bindSkeleton(e,t,i){const r=this.parsePoseNodes();for(const s in e){const o=e[s];Ft.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Ft.get(c).parents.forEach(function(h){i.has(h.ID)&&i.get(h.ID).bind(new wr(o.bones),r[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in qe.Objects){const t=qe.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const r=t[i].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new _e().fromArray(s.Matrix.a)}):e[r.Node]=new _e().fromArray(r.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in qe){if("AmbientColor"in qe.GlobalSettings){const e=qe.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],r=e[2];if(t!==0||i!==0||r!==0){const s=new Me().setRGB(t,i,r,_t);gn.add(new Bm(s,1))}}"UnitScaleFactor"in qe.GlobalSettings&&(gn.userData.unitScaleFactor=qe.GlobalSettings.UnitScaleFactor.value)}}}class QR{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in qe.Objects){const i=qe.Objects.Geometry;for(const r in i){const s=Ft.get(parseInt(r)),o=this.parseGeometry(s,i[r],e);t.set(parseInt(r),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const r=i.skeletons,s=[],o=e.parents.map(function(h){return qe.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,d){return r[d.ID]!==void 0&&(h=r[d.ID]),h},null);e.children.forEach(function(h){i.morphTargets[h.ID]!==void 0&&s.push(i.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Lo(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=r_(c);return this.genGeometry(t,a,s,u)}genGeometry(e,t,i,r){const s=new Dt;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Jt(a.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new Jt(a.colors,3)),t&&(s.setAttribute("skinIndex",new zu(a.weightsIndices,4)),s.setAttribute("skinWeight",new Jt(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new Ue().getNormalMatrix(r),u=new Jt(a.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){const h=u===0?"uv":`uv${u}`;s.setAttribute(h,new Jt(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,d){h!==c&&(s.addGroup(u,d-u,c),c=h,u=d)}),s.groups.length>0){const h=s.groups[s.groups.length-1],d=h.start+h.count;d!==a.materialIndex.length&&s.addGroup(d,a.materialIndex.length-d,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,i,r),s}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(o,a){i.weightTable[o]===void 0&&(i.weightTable[o]=[]),i.weightTable[o].push({id:s,weight:r.weights[a]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,r=0,s=!1,o=[],a=[],l=[],c=[],u=[],h=[];const d=this;return e.vertexIndices.forEach(function(f,g){let m,p=!1;f<0&&(f=f^-1,p=!0);let _=[],b=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const y=Sl(g,i,f,e.color);l.push(y[0],y[1],y[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(y){b.push(y.weight),_.push(y.id)}),b.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const y=[0,0,0,0],M=[0,0,0,0];b.forEach(function(w,P){let A=w,U=_[P];M.forEach(function(Y,v,S){if(A>Y){S[v]=A,A=Y;const B=y[v];y[v]=U,U=B}})}),_=y,b=M}for(;b.length<4;)b.push(0),_.push(0);for(let y=0;y<4;++y)u.push(b[y]),h.push(_[y])}if(e.normal){const y=Sl(g,i,f,e.normal);a.push(y[0],y[1],y[2])}e.material&&e.material.mappingType!=="AllSame"&&(m=Sl(g,i,f,e.material)[0],m<0&&(d.negativeMaterialIndices=!0,m=0)),e.uv&&e.uv.forEach(function(y,M){const w=Sl(g,i,f,y);c[M]===void 0&&(c[M]=[]),c[M].push(w[0]),c[M].push(w[1])}),r++,p&&(d.genFace(t,e,o,m,a,l,c,u,h,r),i++,r=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}getNormalNewell(e){const t=new N(0,0,0);for(let i=0;i<e.length;i++){const r=e[i],s=e[(i+1)%e.length];t.x+=(r.y-s.y)*(r.z+s.z),t.y+=(r.z-s.z)*(r.x+s.x),t.z+=(r.x-s.x)*(r.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),r=(Math.abs(t.z)>.5?new N(0,1,0):new N(0,0,1)).cross(t).normalize(),s=t.clone().cross(r).normalize();return{normal:t,tangent:r,bitangent:s}}flattenVertex(e,t,i){return new Ge(e.dot(t),e.dot(i))}genFace(e,t,i,r,s,o,a,l,c,u){let h;if(u>3){const d=[],f=t.baseVertexPositions||t.vertexPositions;for(let _=0;_<i.length;_+=3)d.push(new N(f[i[_]],f[i[_+1]],f[i[_+2]]));const{tangent:g,bitangent:m}=this.getNormalTangentAndBitangent(d),p=[];for(const _ of d)p.push(this.flattenVertex(_,g,m));h=uh.triangulateShape(p,[])}else h=[[0,1,2]];for(const[d,f,g]of h)e.vertex.push(t.vertexPositions[i[d*3]]),e.vertex.push(t.vertexPositions[i[d*3+1]]),e.vertex.push(t.vertexPositions[i[d*3+2]]),e.vertex.push(t.vertexPositions[i[f*3]]),e.vertex.push(t.vertexPositions[i[f*3+1]]),e.vertex.push(t.vertexPositions[i[f*3+2]]),e.vertex.push(t.vertexPositions[i[g*3]]),e.vertex.push(t.vertexPositions[i[g*3+1]]),e.vertex.push(t.vertexPositions[i[g*3+2]]),t.skeleton&&(e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[g*4]),e.vertexWeights.push(l[g*4+1]),e.vertexWeights.push(l[g*4+2]),e.vertexWeights.push(l[g*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[g*4]),e.weightsIndices.push(c[g*4+1]),e.weightsIndices.push(c[g*4+2]),e.weightsIndices.push(c[g*4+3])),t.color&&(e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[g*3]),e.colors.push(o[g*3+1]),e.colors.push(o[g*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[d*3]),e.normal.push(s[d*3+1]),e.normal.push(s[d*3+2]),e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2]),e.normal.push(s[g*3]),e.normal.push(s[g*3+1]),e.normal.push(s[g*3+2])),t.uv&&t.uv.forEach(function(m,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(a[p][d*2]),e.uvs[p].push(a[p][d*2+1]),e.uvs[p].push(a[p][f*2]),e.uvs[p].push(a[p][f*2+1]),e.uvs[p].push(a[p][g*2]),e.uvs[p].push(a[p][g*2+1])})}addMorphTargets(e,t,i,r){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;i.forEach(function(o){o.rawTargets.forEach(function(a){const l=qe.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,a.name)})})}genMorphGeometry(e,t,i,r,s){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=i.Vertices!==void 0?i.Vertices.a:[],c=i.Indexes!==void 0?i.Indexes.a:[],u=e.attributes.position.count*3,h=new Float32Array(u);for(let m=0;m<c.length;m++){const p=c[m]*3;h[p]=l[m*3],h[p+1]=l[m*3+1],h[p+2]=l[m*3+2]}const d={vertexIndices:a,vertexPositions:h,baseVertexPositions:o},f=this.genBuffers(d),g=new Jt(f.vertex,3);g.name=s||i.attrName,g.applyMatrix4(r),e.morphAttributes.position.push(g)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Normals.a;let s=[];return i==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.UV.a;let s=[];return i==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Colors.a;let s=[];i==="IndexToDirect"&&(s=e.ColorIndex.a);for(let o=0,a=new Me;o<r.length;o+=4)a.fromArray(r,o),Xe.toWorkingColorSpace(a,_t),a.toArray(r,o);return{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const r=e.Materials.a,s=[];for(let o=0;o<r.length;++o)s.push(o);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:i}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Dt;const i=t-1,r=e.KnotVector.a,s=[],o=e.Points.a;for(let h=0,d=o.length;h<d;h+=4)s.push(new tt().fromArray(o,h));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=i,l=r.length-1-a;for(let h=0;h<i;++h)s.push(s[h])}const u=new KR(i,r,s,a,l).getPoints(s.length*12);return new Dt().setFromPoints(u)}}class eC{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const r=t[i],s=this.addClip(r);e.push(s)}return e}parseClips(){if(qe.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=qe.Objects.AnimationCurveNode,t=new Map;for(const i in e){const r=e[i];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=qe.Objects.AnimationCurve;for(const i in t){const r={id:t[i].id,times:t[i].KeyTime.a.map(sC),values:t[i].KeyValueFloat.a},s=Ft.get(r.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=r:a.match(/Y/)?e.get(o).curves.y=r:a.match(/Z/)?e.get(o).curves.z=r:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=r)}}}parseAnimationLayers(e){const t=qe.Objects.AnimationLayer,i=new Map;for(const r in t){const s=[],o=Ft.get(parseInt(r));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const h=Ft.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(h!==void 0){const d=qe.Objects.Model[h.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?it.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};gn.traverse(function(g){g.ID===d.id&&(f.transform=g.matrix,g.userData.transformData&&(f.eulerOrder=g.userData.transformData.eulerOrder))}),f.transform||(f.transform=new _e),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),s[c]=f}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const h=Ft.get(l.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID,d=Ft.get(h).parents[0].ID,f=Ft.get(d).parents[0].ID,g=Ft.get(f).parents[0].ID,m=qe.Objects.Model[g],p={modelName:m.attrName?it.sanitizeNodeName(m.attrName):"",morphName:qe.Objects.Deformer[h].attrName};s[c]=p}s[c][u.attr]=u}}}),i.set(parseInt(r),s))}return i}parseAnimStacks(e){const t=qe.Objects.AnimationStack,i={};for(const r in t){const s=Ft.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);i[r]={name:t[r].attrName,layer:o}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(r){t=t.concat(i.generateTracks(r))}),new xs(e.name,-1,t)}generateTracks(e){const t=[];let i=new N,r=new N;if(e.transform&&e.transform.decompose(i,new De,r),i=i.toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,i,r){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,i);return new Li(e+"."+r,s,o)}generateRotationTrack(e,t,i,r,s){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const d=this.interpolateRotations(t.x,t.y,t.z,s);o=d[0],a=d[1]}const l=Lo(0);i!==void 0&&(i=i.map(et.degToRad),i.push(l),i=new Lt().fromArray(i),i=new De().setFromEuler(i)),r!==void 0&&(r=r.map(et.degToRad),r.push(l),r=new Lt().fromArray(r),r=new De().setFromEuler(r).invert());const c=new De,u=new Lt,h=[];if(!a||!o)return new ui(e+".quaternion",[0],[0]);for(let d=0;d<a.length;d+=3)u.set(a[d],a[d+1],a[d+2],s),c.setFromEuler(u),i!==void 0&&c.premultiply(i),r!==void 0&&c.multiply(r),d>2&&new De().fromArray(h,(d-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(h,d/3*4);return new ui(e+".quaternion",o,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(s){return s/100}),r=gn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Rr(e.modelName+".morphTargetInfluences["+r+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,r){return i-r}),t.length>1){let i=1,r=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==r&&(t[i]=o,r=o,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const r=i,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];s.push(u),r[0]=u}else s.push(r[0]);if(a!==-1){const u=t.y.values[a];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){const u=t.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e,t,i,r){const s=[],o=[];s.push(e.times[0]),o.push(et.degToRad(e.values[0])),o.push(et.degToRad(t.values[0])),o.push(et.degToRad(i.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],i.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(et.degToRad),u=[e.values[a],t.values[a],i.values[a]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const h=u.map(et.degToRad),d=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const m=Math.max(...f)/180,p=new Lt(...c,r),_=new Lt(...h,r),b=new De().setFromEuler(p),y=new De().setFromEuler(_);b.dot(y)&&y.set(-y.x,-y.y,-y.z,-y.w);const M=e.times[a-1],w=e.times[a]-M,P=new De,A=new Lt;for(let U=0;U<1;U+=1/m)P.copy(b.clone().slerp(y.clone(),U)),s.push(M+U*w),A.setFromQuaternion(P,r),o.push(A.x),o.push(A.y),o.push(A.z)}else s.push(e.times[a]),o.push(et.degToRad(e.values[a])),o.push(et.degToRad(t.values[a])),o.push(et.degToRad(i.values[a]))}return[s,o]}}class tC{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new n_,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(r,s){const o=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(o||a)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,i[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:i},o=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,s):i in a?(i==="PoseNode"?a.PoseNode.push(s):a[i].id!==void 0&&(a[i]={},a[i][a[i].id]=a[i]),o.id!==""&&(a[i][o.id]=s)):typeof o.id=="number"?(a[i]={},a[i][o.id]=s):i!=="Properties70"&&(i==="PoseNode"?a[i]=[s]:a[i]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",r="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:i,type:r}}parseNodeProperty(e,t,i){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=i.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=s.split(",").slice(3);h=h.map(function(d){return d.trim().replace(/^"/,"")}),r="connections",s=[c,u],aC(s,h),o[r]===void 0&&(o[r]=[])}r==="Node"&&(o.id=s),r in o&&Array.isArray(o[r])?o[r].push(s):r!=="a"?o[r]=s:o.a=s,this.setCurrentProp(o,r),r==="a"&&s.slice(-1)!==","&&(o.a=Zh(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Zh(t.a))}parseNodeSpecialProperty(e,t,i){const r=i.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],o=r[1],a=r[2],l=r[3];let c=r[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Zh(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class nC{parse(e){const t=new t_(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const r=new n_;for(;!this.endOfContent(t);){const s=this.parseNode(t,i);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(r===0)return null;const l=[];for(let d=0;d<s;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(i.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(a,i,d)}return i.propertyList=l,typeof c=="number"&&(i.id=c),u!==""&&(i.attrName=u),h!==""&&(i.attrType=h),a!==""&&(i.name=a),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const r=i.propertyList[0];Array.isArray(r)?(t[i.name]=i,i.a=r):t[i.name]=r}else if(e==="Connections"&&i.name==="C"){const r=[];i.propertyList.forEach(function(s,o){o!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(i.name==="Properties70")Object.keys(i).forEach(function(s){t[s]=i[s]});else if(e==="Properties70"&&i.name==="P"){let r=i.propertyList[0],s=i.propertyList[1];const o=i.propertyList[2],a=i.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],t[r]={type:s,type2:o,flag:a,value:l}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}const a=VR(new Uint8Array(e.getArrayBuffer(o))),l=new t_(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class t_{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let i=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const r=i.indexOf(0);return r>=0&&(i=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(i)}}class n_{add(e,t){this[e]=t}}function iC(n){const e="Kaydara FBX Binary  \0";return n.byteLength>=e.length&&e===s_(n,0,e.length)}function rC(n){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(r){const s=n[r-1];return n=n.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(i(1)===e[r])return!1;return!0}function i_(n){const e=/FBXVersion: (\d+)/,t=n.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function sC(n){return n/46186158e3}const oC=[];function Sl(n,e,t,i){let r;switch(i.mappingType){case"ByPolygonVertex":r=n;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(r=i.indices[r]);const s=r*i.dataSize,o=s+i.dataSize;return lC(oC,i.buffer,s,o)}const Kh=new Lt,As=new N;function r_(n){const e=new _e,t=new _e,i=new _e,r=new _e,s=new _e,o=new _e,a=new _e,l=new _e,c=new _e,u=new _e,h=new _e,d=new _e,f=n.inheritType?n.inheritType:0;n.translation&&e.setPosition(As.fromArray(n.translation));const g=Lo(0);if(n.preRotation){const S=n.preRotation.map(et.degToRad);S.push(g),t.makeRotationFromEuler(Kh.fromArray(S))}if(n.rotation){const S=n.rotation.map(et.degToRad);S.push(n.eulerOrder||g),i.makeRotationFromEuler(Kh.fromArray(S))}if(n.postRotation){const S=n.postRotation.map(et.degToRad);S.push(g),r.makeRotationFromEuler(Kh.fromArray(S)),r.invert()}n.scale&&s.scale(As.fromArray(n.scale)),n.scalingOffset&&a.setPosition(As.fromArray(n.scalingOffset)),n.scalingPivot&&o.setPosition(As.fromArray(n.scalingPivot)),n.rotationOffset&&l.setPosition(As.fromArray(n.rotationOffset)),n.rotationPivot&&c.setPosition(As.fromArray(n.rotationPivot)),n.parentMatrixWorld&&(h.copy(n.parentMatrix),u.copy(n.parentMatrixWorld));const m=t.clone().multiply(i).multiply(r),p=new _e;p.extractRotation(u);const _=new _e;_.copyPosition(u);const b=_.clone().invert().multiply(u),y=p.clone().invert().multiply(b),M=s,w=new _e;if(f===0)w.copy(p).multiply(m).multiply(y).multiply(M);else if(f===1)w.copy(p).multiply(y).multiply(m).multiply(M);else{const B=new _e().scale(new N().setFromMatrixScale(h)).clone().invert(),T=y.clone().multiply(B);w.copy(p).multiply(m).multiply(T).multiply(M)}const P=c.clone().invert(),A=o.clone().invert();let U=e.clone().multiply(l).multiply(c).multiply(t).multiply(i).multiply(r).multiply(P).multiply(a).multiply(o).multiply(s).multiply(A);const Y=new _e().copyPosition(U),v=u.clone().multiply(Y);return d.copyPosition(v),U=d.clone().multiply(w),U.premultiply(u.invert()),U}function Lo(n){n=n||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return n===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[n]}function Zh(n){return n.split(",").map(function(t){return parseFloat(t)})}function s_(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=n.byteLength),new TextDecoder().decode(new Uint8Array(n,e,t))}function aC(n,e){for(let t=0,i=n.length,r=e.length;t<r;t++,i++)n[i]=e[t]}function lC(n,e,t,i){for(let r=t,s=0;r<i;r++,s++)n[s]=e[r];return n}const cC={mixamorigHips:"hips",mixamorigSpine:"spine",mixamorigSpine1:"chest",mixamorigSpine2:"upperChest",mixamorigNeck:"neck",mixamorigHead:"head",mixamorigLeftShoulder:"leftShoulder",mixamorigLeftArm:"leftUpperArm",mixamorigLeftForeArm:"leftLowerArm",mixamorigLeftHand:"leftHand",mixamorigLeftHandThumb1:"leftThumbMetacarpal",mixamorigLeftHandThumb2:"leftThumbProximal",mixamorigLeftHandThumb3:"leftThumbDistal",mixamorigLeftHandIndex1:"leftIndexProximal",mixamorigLeftHandIndex2:"leftIndexIntermediate",mixamorigLeftHandIndex3:"leftIndexDistal",mixamorigLeftHandMiddle1:"leftMiddleProximal",mixamorigLeftHandMiddle2:"leftMiddleIntermediate",mixamorigLeftHandMiddle3:"leftMiddleDistal",mixamorigLeftHandRing1:"leftRingProximal",mixamorigLeftHandRing2:"leftRingIntermediate",mixamorigLeftHandRing3:"leftRingDistal",mixamorigLeftHandPinky1:"leftLittleProximal",mixamorigLeftHandPinky2:"leftLittleIntermediate",mixamorigLeftHandPinky3:"leftLittleDistal",mixamorigRightShoulder:"rightShoulder",mixamorigRightArm:"rightUpperArm",mixamorigRightForeArm:"rightLowerArm",mixamorigRightHand:"rightHand",mixamorigRightHandPinky1:"rightLittleProximal",mixamorigRightHandPinky2:"rightLittleIntermediate",mixamorigRightHandPinky3:"rightLittleDistal",mixamorigRightHandRing1:"rightRingProximal",mixamorigRightHandRing2:"rightRingIntermediate",mixamorigRightHandRing3:"rightRingDistal",mixamorigRightHandMiddle1:"rightMiddleProximal",mixamorigRightHandMiddle2:"rightMiddleIntermediate",mixamorigRightHandMiddle3:"rightMiddleDistal",mixamorigRightHandIndex1:"rightIndexProximal",mixamorigRightHandIndex2:"rightIndexIntermediate",mixamorigRightHandIndex3:"rightIndexDistal",mixamorigRightHandThumb1:"rightThumbMetacarpal",mixamorigRightHandThumb2:"rightThumbProximal",mixamorigRightHandThumb3:"rightThumbDistal",mixamorigLeftUpLeg:"leftUpperLeg",mixamorigLeftLeg:"leftLowerLeg",mixamorigLeftFoot:"leftFoot",mixamorigLeftToeBase:"leftToes",mixamorigRightUpLeg:"rightUpperLeg",mixamorigRightLeg:"rightLowerLeg",mixamorigRightFoot:"rightFoot",mixamorigRightToeBase:"rightToes"};function o_(n,e){return new ZR().loadAsync(n).then(i=>{var m,p,_;const r=xs.findByName(i.animations,"mixamo.com"),s=[],o=new De,a=new De,l=new De,c=new N,u=((m=i.getObjectByName("mixamorigHips"))==null?void 0:m.position.y)??0,h=((_=(p=e.humanoid)==null?void 0:p.getNormalizedBoneNode("hips"))==null?void 0:_.getWorldPosition(c).y)??0,d=e.scene.getWorldPosition(c).y,g=Math.abs(h-d)/u;return r.tracks.forEach(b=>{var U,Y,v;const y=b.name.split("."),M=y[0],w=cC[M],P=(Y=(U=e.humanoid)==null?void 0:U.getNormalizedBoneNode(w))==null?void 0:Y.name,A=i.getObjectByName(M);if(P!=null&&A!=null){const S=y[1];if(A.getWorldQuaternion(o).invert(),(v=A.parent)==null||v.getWorldQuaternion(a),b instanceof ui){for(let B=0;B<b.values.length;B+=4){const T=b.values.slice(B,B+4);l.fromArray(T),l.premultiply(a).multiply(o),l.toArray(T),T.forEach((E,O)=>{b.values[O+B]=E})}s.push(new ui(`${P}.${S}`,b.times,b.values.map((B,T)=>{var E;return((E=e.meta)==null?void 0:E.metaVersion)==="0"&&T%2===0?-B:B})))}else if(b instanceof Li){const B=b.values.map((T,E)=>{var O;return(((O=e.meta)==null?void 0:O.metaVersion)==="0"&&E%3!==1?-T:T)*g});s.push(new Li(`${P}.${S}`,b.times,B))}}}),new xs("vrmAnimation",r.duration,s)})}const uC=({vrm:n,analyserNode:e,vrmState:t,levels:i})=>{if(!e)return;const r=new Uint8Array(e.frequencyBinCount);if(e.getByteTimeDomainData(r),Math.max(...r)/128-1>.3&&t.pickNewExpressionSet("happy"),n.expressionManager)for(const[a,l]of Object.entries(i))n.expressionManager.setValue(a.toLocaleLowerCase(),l*.15)};class hC{constructor(e){Rt(this,"vrm");Rt(this,"expressionGroups",{happy:["happy","relaxed"],angry:["angry","Surprised"],sad:["sad","neutral"]});Rt(this,"expressionTimer",0);Rt(this,"expressionDuration",0);Rt(this,"transitionProgress",0);Rt(this,"currentExpressionSet",{});Rt(this,"targetExpressionSet",{});Rt(this,"blinkTimer",0);Rt(this,"blinkState",0);Rt(this,"blinkDuration",.1);Rt(this,"nextBlinkTime",Math.random()*6+4);Rt(this,"blinkLeftOffset",Math.random()*.02);Rt(this,"blinkRightOffset",-Math.random()*.02);this.vrm=e,this.resetExpressions()}resetExpressions(){this.currentExpressionSet={Surprised:0,angry:0,happy:0,neutral:1,relaxed:0,sad:0},this.targetExpressionSet={...this.currentExpressionSet}}pickNewExpressionSet(e){const t=la.keys(this.expressionGroups),i=e?this.expressionGroups[e]:this.expressionGroups[t[Math.floor(Math.random()*t.length)]],r={...this.currentExpressionSet};i.forEach(s=>{r[s]=Math.random()*.3+.2}),r.neutral=Math.random()*.5,this.targetExpressionSet=r,this.expressionDuration=Math.random()*10+10,this.expressionTimer=0,this.transitionProgress=0}updateState(e){this.updateExpressions(e),this.updateBlink(e)}updateExpressions(e){this.expressionTimer+=e,this.transitionProgress+=e/6,this.transitionProgress=Math.min(this.transitionProgress,1),[...this.expressionGroups.angry,...this.expressionGroups.happy,...this.expressionGroups.sad].forEach(i=>{var a;const r=this.currentExpressionSet[i],s=this.targetExpressionSet[i],o=r+(s-r)*this.transitionProgress;(a=this.vrm.expressionManager)==null||a.setValue(i,o*.5)}),this.expressionTimer>=this.expressionDuration&&(this.currentExpressionSet={...this.targetExpressionSet},this.pickNewExpressionSet())}updateBlink(e){var t,i,r,s;if(this.blinkTimer+=e,this.blinkState===0)this.blinkTimer>=this.nextBlinkTime&&(this.blinkState=1,this.blinkTimer=0);else if(this.blinkState===1){const o=this.blinkTimer/this.blinkDuration,a=Math.min(o+this.blinkLeftOffset,1),l=Math.min(o+this.blinkRightOffset,1);(t=this.vrm.expressionManager)==null||t.setValue("blinkLeft",a),(i=this.vrm.expressionManager)==null||i.setValue("blinkRight",l),o>=1&&(this.blinkState=2,this.blinkTimer=0)}else if(this.blinkState===2)this.blinkTimer>=.05&&(this.blinkState=3,this.blinkTimer=0);else if(this.blinkState===3){const o=1-this.blinkTimer/this.blinkDuration,a=Math.max(o+this.blinkLeftOffset,0),l=Math.max(o+this.blinkRightOffset,0);(r=this.vrm.expressionManager)==null||r.setValue("blinkLeft",a),(s=this.vrm.expressionManager)==null||s.setValue("blinkRight",l),o<=0&&(this.blinkState=0,this.blinkTimer=0,this.nextBlinkTime=Math.random()*6+4)}}}const Jh={fromVrm:async({vrmUrl:n,canvas:e,idleAnimationUrl:t,cameraOptions:i})=>{const{camera:r,scene:s,vrm:o,renderer:a}=await wR({canvas:e,vrmUrl:n,vrmCameraOptions:i}),l=new Nw(o.scene);if(t){const h=await o_(t,o);console.log("clip",h),l.clipAction(h).play()}const c=new hC(o);return o.scene.position.y=.5,{destroy:()=>{console.log("disposing scene"),a.dispose()},vrmModel:o,updateTick:({tick:h})=>{const d=h.deltaMs/1e3;a.render(s,r),o&&(o.update(d),l.update(d),c.updateState(d))},updatePhonemeLevels:({phonemeLevels:h,analyserNode:d})=>{uC({vrm:o,vrmState:c,levels:h,analyserNode:d})},setAnimation:async h=>{const d=await o_(h,o);console.log("clip",d),l.stopAllAction(),l.clipAction(d).play()},setExpression:(h,d=.5)=>{o.expressionManager&&o.expressionManager.setValue(h,d)},getExpressions:()=>o.expressionManager?o.expressionManager.expressions.map(h=>h.expressionName):[]}},fromGltf:$y};var Qh={exports:{}},Do={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function dC(){if(a_)return Do;a_=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,r,s){var o=null;if(s!==void 0&&(o=""+s),r.key!==void 0&&(o=""+r.key),"key"in r){s={};for(var a in r)a!=="key"&&(s[a]=r[a])}else s=r;return r=s.ref,{$$typeof:n,type:i,key:o,ref:r!==void 0?r:null,props:s}}return Do.Fragment=e,Do.jsx=t,Do.jsxs=t,Do}var No={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function fC(){return l_||(l_=1,process.env.NODE_ENV!=="production"&&function(){function n(L){if(L==null)return null;if(typeof L=="function")return L.$$typeof===v?null:L.displayName||L.name||null;if(typeof L=="string")return L;switch(L){case m:return"Fragment";case _:return"Profiler";case p:return"StrictMode";case w:return"Suspense";case P:return"SuspenseList";case Y:return"Activity"}if(typeof L=="object")switch(typeof L.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),L.$$typeof){case g:return"Portal";case y:return(L.displayName||"Context")+".Provider";case b:return(L._context.displayName||"Context")+".Consumer";case M:var V=L.render;return L=L.displayName,L||(L=V.displayName||V.name||"",L=L!==""?"ForwardRef("+L+")":"ForwardRef"),L;case A:return V=L.displayName||null,V!==null?V:n(L.type)||"Memo";case U:V=L._payload,L=L._init;try{return n(L(V))}catch{}}return null}function e(L){return""+L}function t(L){try{e(L);var V=!1}catch{V=!0}if(V){V=console;var K=V.error,ee=typeof Symbol=="function"&&Symbol.toStringTag&&L[Symbol.toStringTag]||L.constructor.name||"Object";return K.call(V,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",ee),e(L)}}function i(L){if(L===m)return"<>";if(typeof L=="object"&&L!==null&&L.$$typeof===U)return"<...>";try{var V=n(L);return V?"<"+V+">":"<...>"}catch{return"<...>"}}function r(){var L=S.A;return L===null?null:L.getOwner()}function s(){return Error("react-stack-top-frame")}function o(L){if(B.call(L,"key")){var V=Object.getOwnPropertyDescriptor(L,"key").get;if(V&&V.isReactWarning)return!1}return L.key!==void 0}function a(L,V){function K(){O||(O=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",V))}K.isReactWarning=!0,Object.defineProperty(L,"key",{get:K,configurable:!0})}function l(){var L=n(this.type);return R[L]||(R[L]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),L=this.props.ref,L!==void 0?L:null}function c(L,V,K,ee,G,$,se,ie){return K=$.ref,L={$$typeof:f,type:L,key:V,props:$,_owner:G},(K!==void 0?K:null)!==null?Object.defineProperty(L,"ref",{enumerable:!1,get:l}):Object.defineProperty(L,"ref",{enumerable:!1,value:null}),L._store={},Object.defineProperty(L._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(L,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(L,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:se}),Object.defineProperty(L,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ie}),Object.freeze&&(Object.freeze(L.props),Object.freeze(L)),L}function u(L,V,K,ee,G,$,se,ie){var ae=V.children;if(ae!==void 0)if(ee)if(T(ae)){for(ee=0;ee<ae.length;ee++)h(ae[ee]);Object.freeze&&Object.freeze(ae)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else h(ae);if(B.call(V,"key")){ae=n(L);var de=Object.keys(V).filter(function(Se){return Se!=="key"});ee=0<de.length?"{key: someKey, "+de.join(": ..., ")+": ...}":"{key: someKey}",J[ae+ee]||(de=0<de.length?"{"+de.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ee,ae,de,ae),J[ae+ee]=!0)}if(ae=null,K!==void 0&&(t(K),ae=""+K),o(V)&&(t(V.key),ae=""+V.key),"key"in V){K={};for(var ue in V)ue!=="key"&&(K[ue]=V[ue])}else K=V;return ae&&a(K,typeof L=="function"?L.displayName||L.name||"Unknown":L),c(L,ae,$,G,r(),K,se,ie)}function h(L){typeof L=="object"&&L!==null&&L.$$typeof===f&&L._store&&(L._store.validated=1)}var d=$e,f=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),y=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),Y=Symbol.for("react.activity"),v=Symbol.for("react.client.reference"),S=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=Object.prototype.hasOwnProperty,T=Array.isArray,E=console.createTask?console.createTask:function(){return null};d={"react-stack-bottom-frame":function(L){return L()}};var O,R={},F=d["react-stack-bottom-frame"].bind(d,s)(),k=E(i(s)),J={};No.Fragment=m,No.jsx=function(L,V,K,ee,G){var $=1e4>S.recentlyCreatedOwnerStacks++;return u(L,V,K,!1,ee,G,$?Error("react-stack-top-frame"):F,$?E(i(L)):k)},No.jsxs=function(L,V,K,ee,G){var $=1e4>S.recentlyCreatedOwnerStacks++;return u(L,V,K,!0,ee,G,$?Error("react-stack-top-frame"):F,$?E(i(L)):k)}}()),No}process.env.NODE_ENV==="production"?Qh.exports=dC():Qh.exports=fC();var Ye=Qh.exports;function ir(n,...e){const t=new URL(`https://mui.com/production-error/?code=${n}`);return e.forEach(i=>t.searchParams.append("args[]",i)),`Minified MUI error #${n}; visit ${t} for the full message.`}function bl(){return bl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},bl.apply(null,arguments)}function pC(n){if(n.sheet)return n.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===n)return document.styleSheets[e]}function mC(n){var e=document.createElement("style");return e.setAttribute("data-emotion",n.key),n.nonce!==void 0&&e.setAttribute("nonce",n.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var gC=function(){function n(t){var i=this;this._insertTag=function(r){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,s),i.tags.push(r)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=n.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(mC(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var s=pC(r);try{s.insertRule(i,s.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},n}(),sn="-ms-",El="-moz-",ct="-webkit-",c_="comm",ed="rule",td="decl",_C="@import",u_="@keyframes",vC="@layer",yC=Math.abs,Tl=String.fromCharCode,xC=Object.assign;function MC(n,e){return Qt(n,0)^45?(((e<<2^Qt(n,0))<<2^Qt(n,1))<<2^Qt(n,2))<<2^Qt(n,3):0}function h_(n){return n.trim()}function SC(n,e){return(n=e.exec(n))?n[0]:n}function ut(n,e,t){return n.replace(e,t)}function nd(n,e){return n.indexOf(e)}function Qt(n,e){return n.charCodeAt(e)|0}function Oo(n,e,t){return n.slice(e,t)}function pi(n){return n.length}function id(n){return n.length}function wl(n,e){return e.push(n),n}function bC(n,e){return n.map(e).join("")}var Al=1,Rs=1,d_=0,yn=0,Ht=0,Cs="";function Rl(n,e,t,i,r,s,o){return{value:n,root:e,parent:t,type:i,props:r,children:s,line:Al,column:Rs,length:o,return:""}}function Uo(n,e){return xC(Rl("",null,null,"",null,null,0),n,{length:-n.length},e)}function EC(){return Ht}function TC(){return Ht=yn>0?Qt(Cs,--yn):0,Rs--,Ht===10&&(Rs=1,Al--),Ht}function Pn(){return Ht=yn<d_?Qt(Cs,yn++):0,Rs++,Ht===10&&(Rs=1,Al++),Ht}function mi(){return Qt(Cs,yn)}function Cl(){return yn}function Fo(n,e){return Oo(Cs,n,e)}function Bo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function f_(n){return Al=Rs=1,d_=pi(Cs=n),yn=0,[]}function p_(n){return Cs="",n}function Pl(n){return h_(Fo(yn-1,rd(n===91?n+2:n===40?n+1:n)))}function wC(n){for(;(Ht=mi())&&Ht<33;)Pn();return Bo(n)>2||Bo(Ht)>3?"":" "}function AC(n,e){for(;--e&&Pn()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return Fo(n,Cl()+(e<6&&mi()==32&&Pn()==32))}function rd(n){for(;Pn();)switch(Ht){case n:return yn;case 34:case 39:n!==34&&n!==39&&rd(Ht);break;case 40:n===41&&rd(n);break;case 92:Pn();break}return yn}function RC(n,e){for(;Pn()&&n+Ht!==57;)if(n+Ht===84&&mi()===47)break;return"/*"+Fo(e,yn-1)+"*"+Tl(n===47?n:Pn())}function CC(n){for(;!Bo(mi());)Pn();return Fo(n,yn)}function PC(n){return p_(Il("",null,null,null,[""],n=f_(n),0,[0],n))}function Il(n,e,t,i,r,s,o,a,l){for(var c=0,u=0,h=o,d=0,f=0,g=0,m=1,p=1,_=1,b=0,y="",M=r,w=s,P=i,A=y;p;)switch(g=b,b=Pn()){case 40:if(g!=108&&Qt(A,h-1)==58){nd(A+=ut(Pl(b),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:A+=Pl(b);break;case 9:case 10:case 13:case 32:A+=wC(g);break;case 92:A+=AC(Cl()-1,7);continue;case 47:switch(mi()){case 42:case 47:wl(IC(RC(Pn(),Cl()),e,t),l);break;default:A+="/"}break;case 123*m:a[c++]=pi(A)*_;case 125*m:case 59:case 0:switch(b){case 0:case 125:p=0;case 59+u:_==-1&&(A=ut(A,/\f/g,"")),f>0&&pi(A)-h&&wl(f>32?g_(A+";",i,t,h-1):g_(ut(A," ","")+";",i,t,h-2),l);break;case 59:A+=";";default:if(wl(P=m_(A,e,t,c,u,r,a,y,M=[],w=[],h),s),b===123)if(u===0)Il(A,e,P,P,M,s,h,a,w);else switch(d===99&&Qt(A,3)===110?100:d){case 100:case 108:case 109:case 115:Il(n,P,P,i&&wl(m_(n,P,P,0,0,r,a,y,r,M=[],h),w),r,w,h,a,i?M:w);break;default:Il(A,P,P,P,[""],w,0,a,w)}}c=u=f=0,m=_=1,y=A="",h=o;break;case 58:h=1+pi(A),f=g;default:if(m<1){if(b==123)--m;else if(b==125&&m++==0&&TC()==125)continue}switch(A+=Tl(b),b*m){case 38:_=u>0?1:(A+="\f",-1);break;case 44:a[c++]=(pi(A)-1)*_,_=1;break;case 64:mi()===45&&(A+=Pl(Pn())),d=mi(),u=h=pi(y=A+=CC(Cl())),b++;break;case 45:g===45&&pi(A)==2&&(m=0)}}return s}function m_(n,e,t,i,r,s,o,a,l,c,u){for(var h=r-1,d=r===0?s:[""],f=id(d),g=0,m=0,p=0;g<i;++g)for(var _=0,b=Oo(n,h+1,h=yC(m=o[g])),y=n;_<f;++_)(y=h_(m>0?d[_]+" "+b:ut(b,/&\f/g,d[_])))&&(l[p++]=y);return Rl(n,e,t,r===0?ed:a,l,c,u)}function IC(n,e,t){return Rl(n,e,t,c_,Tl(EC()),Oo(n,2,-2),0)}function g_(n,e,t,i){return Rl(n,e,t,td,Oo(n,0,i),Oo(n,i+1,-1),i)}function Ps(n,e){for(var t="",i=id(n),r=0;r<i;r++)t+=e(n[r],r,n,e)||"";return t}function LC(n,e,t,i){switch(n.type){case vC:if(n.children.length)break;case _C:case td:return n.return=n.return||n.value;case c_:return"";case u_:return n.return=n.value+"{"+Ps(n.children,i)+"}";case ed:n.value=n.props.join(",")}return pi(t=Ps(n.children,i))?n.return=n.value+"{"+t+"}":""}function DC(n){var e=id(n);return function(t,i,r,s){for(var o="",a=0;a<e;a++)o+=n[a](t,i,r,s)||"";return o}}function NC(n){return function(e){e.root||(e=e.return)&&n(e)}}function __(n){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=n(t)),e[t]}}var OC=function(e,t,i){for(var r=0,s=0;r=s,s=mi(),r===38&&s===12&&(t[i]=1),!Bo(s);)Pn();return Fo(e,yn)},UC=function(e,t){var i=-1,r=44;do switch(Bo(r)){case 0:r===38&&mi()===12&&(t[i]=1),e[i]+=OC(yn-1,t,i);break;case 2:e[i]+=Pl(r);break;case 4:if(r===44){e[++i]=mi()===58?"&\f":"",t[i]=e[i].length;break}default:e[i]+=Tl(r)}while(r=Pn());return e},FC=function(e,t){return p_(UC(f_(e),t))},v_=new WeakMap,BC=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!v_.get(i))&&!r){v_.set(e,!0);for(var s=[],o=FC(t,s),a=i.props,l=0,c=0;l<o.length;l++)for(var u=0;u<a.length;u++,c++)e.props[c]=s[l]?o[l].replace(/&\f/g,a[u]):a[u]+" "+o[l]}}},kC=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function y_(n,e){switch(MC(n,e)){case 5103:return ct+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ct+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ct+n+El+n+sn+n+n;case 6828:case 4268:return ct+n+sn+n+n;case 6165:return ct+n+sn+"flex-"+n+n;case 5187:return ct+n+ut(n,/(\w+).+(:[^]+)/,ct+"box-$1$2"+sn+"flex-$1$2")+n;case 5443:return ct+n+sn+"flex-item-"+ut(n,/flex-|-self/,"")+n;case 4675:return ct+n+sn+"flex-line-pack"+ut(n,/align-content|flex-|-self/,"")+n;case 5548:return ct+n+sn+ut(n,"shrink","negative")+n;case 5292:return ct+n+sn+ut(n,"basis","preferred-size")+n;case 6060:return ct+"box-"+ut(n,"-grow","")+ct+n+sn+ut(n,"grow","positive")+n;case 4554:return ct+ut(n,/([^-])(transform)/g,"$1"+ct+"$2")+n;case 6187:return ut(ut(ut(n,/(zoom-|grab)/,ct+"$1"),/(image-set)/,ct+"$1"),n,"")+n;case 5495:case 3959:return ut(n,/(image-set\([^]*)/,ct+"$1$`$1");case 4968:return ut(ut(n,/(.+:)(flex-)?(.*)/,ct+"box-pack:$3"+sn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ct+n+n;case 4095:case 3583:case 4068:case 2532:return ut(n,/(.+)-inline(.+)/,ct+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pi(n)-1-e>6)switch(Qt(n,e+1)){case 109:if(Qt(n,e+4)!==45)break;case 102:return ut(n,/(.+:)(.+)-([^]+)/,"$1"+ct+"$2-$3$1"+El+(Qt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~nd(n,"stretch")?y_(ut(n,"stretch","fill-available"),e)+n:n}break;case 4949:if(Qt(n,e+1)!==115)break;case 6444:switch(Qt(n,pi(n)-3-(~nd(n,"!important")&&10))){case 107:return ut(n,":",":"+ct)+n;case 101:return ut(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ct+(Qt(n,14)===45?"inline-":"")+"box$3$1"+ct+"$2$3$1"+sn+"$2box$3")+n}break;case 5936:switch(Qt(n,e+11)){case 114:return ct+n+sn+ut(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ct+n+sn+ut(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ct+n+sn+ut(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return ct+n+sn+n+n}return n}var VC=function(e,t,i,r){if(e.length>-1&&!e.return)switch(e.type){case td:e.return=y_(e.value,e.length);break;case u_:return Ps([Uo(e,{value:ut(e.value,"@","@"+ct)})],r);case ed:if(e.length)return bC(e.props,function(s){switch(SC(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ps([Uo(e,{props:[ut(s,/:(read-\w+)/,":"+El+"$1")]})],r);case"::placeholder":return Ps([Uo(e,{props:[ut(s,/:(plac\w+)/,":"+ct+"input-$1")]}),Uo(e,{props:[ut(s,/:(plac\w+)/,":"+El+"$1")]}),Uo(e,{props:[ut(s,/:(plac\w+)/,sn+"input-$1")]})],r)}return""})}},zC=[VC],HC=function(e){var t=e.key;if(t==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(m){var p=m.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var r=e.stylisPlugins||zC,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(m){for(var p=m.getAttribute("data-emotion").split(" "),_=1;_<p.length;_++)s[p[_]]=!0;a.push(m)});var l,c=[BC,kC];{var u,h=[LC,NC(function(m){u.insert(m)})],d=DC(c.concat(r,h)),f=function(p){return Ps(PC(p),d)};l=function(p,_,b,y){u=b,f(p?p+"{"+_.styles+"}":_.styles),y&&(g.inserted[_.name]=!0)}}var g={key:t,sheet:new gC({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return g.sheet.hydrate(a),g},sd={exports:{}},ht={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function GC(){if(x_)return ht;x_=1;var n=typeof Symbol=="function"&&Symbol.for,e=n?Symbol.for("react.element"):60103,t=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,a=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,u=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.block"):60121,p=n?Symbol.for("react.fundamental"):60117,_=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function y(w){if(typeof w=="object"&&w!==null){var P=w.$$typeof;switch(P){case e:switch(w=w.type,w){case l:case c:case i:case s:case r:case h:return w;default:switch(w=w&&w.$$typeof,w){case a:case u:case g:case f:case o:return w;default:return P}}case t:return P}}}function M(w){return y(w)===c}return ht.AsyncMode=l,ht.ConcurrentMode=c,ht.ContextConsumer=a,ht.ContextProvider=o,ht.Element=e,ht.ForwardRef=u,ht.Fragment=i,ht.Lazy=g,ht.Memo=f,ht.Portal=t,ht.Profiler=s,ht.StrictMode=r,ht.Suspense=h,ht.isAsyncMode=function(w){return M(w)||y(w)===l},ht.isConcurrentMode=M,ht.isContextConsumer=function(w){return y(w)===a},ht.isContextProvider=function(w){return y(w)===o},ht.isElement=function(w){return typeof w=="object"&&w!==null&&w.$$typeof===e},ht.isForwardRef=function(w){return y(w)===u},ht.isFragment=function(w){return y(w)===i},ht.isLazy=function(w){return y(w)===g},ht.isMemo=function(w){return y(w)===f},ht.isPortal=function(w){return y(w)===t},ht.isProfiler=function(w){return y(w)===s},ht.isStrictMode=function(w){return y(w)===r},ht.isSuspense=function(w){return y(w)===h},ht.isValidElementType=function(w){return typeof w=="string"||typeof w=="function"||w===i||w===c||w===s||w===r||w===h||w===d||typeof w=="object"&&w!==null&&(w.$$typeof===g||w.$$typeof===f||w.$$typeof===o||w.$$typeof===a||w.$$typeof===u||w.$$typeof===p||w.$$typeof===_||w.$$typeof===b||w.$$typeof===m)},ht.typeOf=y,ht}var dt={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function WC(){return M_||(M_=1,process.env.NODE_ENV!=="production"&&function(){var n=typeof Symbol=="function"&&Symbol.for,e=n?Symbol.for("react.element"):60103,t=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,a=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,u=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.block"):60121,p=n?Symbol.for("react.fundamental"):60117,_=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function y(re){return typeof re=="string"||typeof re=="function"||re===i||re===c||re===s||re===r||re===h||re===d||typeof re=="object"&&re!==null&&(re.$$typeof===g||re.$$typeof===f||re.$$typeof===o||re.$$typeof===a||re.$$typeof===u||re.$$typeof===p||re.$$typeof===_||re.$$typeof===b||re.$$typeof===m)}function M(re){if(typeof re=="object"&&re!==null){var z=re.$$typeof;switch(z){case e:var Tt=re.type;switch(Tt){case l:case c:case i:case s:case r:case h:return Tt;default:var We=Tt&&Tt.$$typeof;switch(We){case a:case u:case g:case f:case o:return We;default:return z}}case t:return z}}}var w=l,P=c,A=a,U=o,Y=e,v=u,S=i,B=g,T=f,E=t,O=s,R=r,F=h,k=!1;function J(re){return k||(k=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),L(re)||M(re)===l}function L(re){return M(re)===c}function V(re){return M(re)===a}function K(re){return M(re)===o}function ee(re){return typeof re=="object"&&re!==null&&re.$$typeof===e}function G(re){return M(re)===u}function $(re){return M(re)===i}function se(re){return M(re)===g}function ie(re){return M(re)===f}function ae(re){return M(re)===t}function de(re){return M(re)===s}function ue(re){return M(re)===r}function Se(re){return M(re)===h}dt.AsyncMode=w,dt.ConcurrentMode=P,dt.ContextConsumer=A,dt.ContextProvider=U,dt.Element=Y,dt.ForwardRef=v,dt.Fragment=S,dt.Lazy=B,dt.Memo=T,dt.Portal=E,dt.Profiler=O,dt.StrictMode=R,dt.Suspense=F,dt.isAsyncMode=J,dt.isConcurrentMode=L,dt.isContextConsumer=V,dt.isContextProvider=K,dt.isElement=ee,dt.isForwardRef=G,dt.isFragment=$,dt.isLazy=se,dt.isMemo=ie,dt.isPortal=ae,dt.isProfiler=de,dt.isStrictMode=ue,dt.isSuspense=Se,dt.isValidElementType=y,dt.typeOf=M}()),dt}process.env.NODE_ENV==="production"?sd.exports=GC():sd.exports=WC();var od=sd.exports,S_=od,$C={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},XC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},b_={};b_[S_.ForwardRef]=$C,b_[S_.Memo]=XC;var jC=!0;function E_(n,e,t){var i="";return t.split(" ").forEach(function(r){n[r]!==void 0?e.push(n[r]+";"):r&&(i+=r+" ")}),i}var ad=function(e,t,i){var r=e.key+"-"+t.name;(i===!1||jC===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},T_=function(e,t,i){ad(e,t,i);var r=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var s=t;do e.insert(t===s?"."+r:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function qC(n){for(var e=0,t,i=0,r=n.length;r>=4;++i,r-=4)t=n.charCodeAt(i)&255|(n.charCodeAt(++i)&255)<<8|(n.charCodeAt(++i)&255)<<16|(n.charCodeAt(++i)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(n.charCodeAt(i+2)&255)<<16;case 2:e^=(n.charCodeAt(i+1)&255)<<8;case 1:e^=n.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var YC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},KC=/[A-Z]|^ms/g,ZC=/_EMO_([^_]+?)_([^]*?)_EMO_/g,w_=function(e){return e.charCodeAt(1)===45},A_=function(e){return e!=null&&typeof e!="boolean"},ld=__(function(n){return w_(n)?n:n.replace(KC,"-$&").toLowerCase()}),R_=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(ZC,function(i,r,s){return gi={name:r,styles:s,next:gi},r})}return YC[e]!==1&&!w_(e)&&typeof t=="number"&&t!==0?t+"px":t};function ko(n,e,t){if(t==null)return"";var i=t;if(i.__emotion_styles!==void 0)return i;switch(typeof t){case"boolean":return"";case"object":{var r=t;if(r.anim===1)return gi={name:r.name,styles:r.styles,next:gi},r.name;var s=t;if(s.styles!==void 0){var o=s.next;if(o!==void 0)for(;o!==void 0;)gi={name:o.name,styles:o.styles,next:gi},o=o.next;var a=s.styles+";";return a}return JC(n,e,t)}case"function":{if(n!==void 0){var l=gi,c=t(n);return gi=l,ko(n,e,c)}break}}var u=t;if(e==null)return u;var h=e[u];return h!==void 0?h:u}function JC(n,e,t){var i="";if(Array.isArray(t))for(var r=0;r<t.length;r++)i+=ko(n,e,t[r])+";";else for(var s in t){var o=t[s];if(typeof o!="object"){var a=o;e!=null&&e[a]!==void 0?i+=s+"{"+e[a]+"}":A_(a)&&(i+=ld(s)+":"+R_(s,a)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var l=0;l<o.length;l++)A_(o[l])&&(i+=ld(s)+":"+R_(s,o[l])+";");else{var c=ko(n,e,o);switch(s){case"animation":case"animationName":{i+=ld(s)+":"+c+";";break}default:i+=s+"{"+c+"}"}}}return i}var C_=/label:\s*([^\s;{]+)\s*(;|$)/g,gi;function Ll(n,e,t){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var i=!0,r="";gi=void 0;var s=n[0];if(s==null||s.raw===void 0)i=!1,r+=ko(t,e,s);else{var o=s;r+=o[0]}for(var a=1;a<n.length;a++)if(r+=ko(t,e,n[a]),i){var l=s;r+=l[a]}C_.lastIndex=0;for(var c="",u;(u=C_.exec(r))!==null;)c+="-"+u[1];var h=qC(r)+c;return{name:h,styles:r,next:gi}}var QC=function(e){return e()},eP=Ae.useInsertionEffect?Ae.useInsertionEffect:!1,P_=eP||QC,I_=Ae.createContext(typeof HTMLElement<"u"?HC({key:"css"}):null);I_.Provider;var L_=function(e){return $e.forwardRef(function(t,i){var r=$e.useContext(I_);return e(t,r,i)})},cd=Ae.createContext({}),ud={}.hasOwnProperty,hd="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",tP=function(e,t){var i={};for(var r in t)ud.call(t,r)&&(i[r]=t[r]);return i[hd]=e,i},nP=function(e){var t=e.cache,i=e.serialized,r=e.isStringTag;return ad(t,i,r),P_(function(){return T_(t,i,r)}),null},iP=L_(function(n,e,t){var i=n.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var r=n[hd],s=[i],o="";typeof n.className=="string"?o=E_(e.registered,s,n.className):n.className!=null&&(o=n.className+" ");var a=Ll(s,void 0,Ae.useContext(cd));o+=e.key+"-"+a.name;var l={};for(var c in n)ud.call(n,c)&&c!=="css"&&c!==hd&&(l[c]=n[c]);return l.className=o,t&&(l.ref=t),Ae.createElement(Ae.Fragment,null,Ae.createElement(nP,{cache:e,serialized:a,isStringTag:typeof r=="string"}),Ae.createElement(r,l))}),rP=iP,D_=function(e,t){var i=arguments;if(t==null||!ud.call(t,"css"))return Ae.createElement.apply(void 0,i);var r=i.length,s=new Array(r);s[0]=rP,s[1]=tP(e,t);for(var o=2;o<r;o++)s[o]=i[o];return Ae.createElement.apply(null,s)};(function(n){var e;e||(e=n.JSX||(n.JSX={}))})(D_||(D_={}));function dd(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return Ll(e)}function Vo(){var n=dd.apply(void 0,arguments),e="animation-"+n.name;return{name:e,styles:"@keyframes "+e+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var sP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,oP=__(function(n){return sP.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),aP=oP,lP=function(e){return e!=="theme"},N_=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?aP:lP},O_=function(e,t,i){var r;if(t){var s=t.shouldForwardProp;r=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof r!="function"&&i&&(r=e.__emotion_forwardProp),r},cP=function(e){var t=e.cache,i=e.serialized,r=e.isStringTag;return ad(t,i,r),P_(function(){return T_(t,i,r)}),null},uP=function n(e,t){var i=e.__emotion_real===e,r=i&&e.__emotion_base||e,s,o;t!==void 0&&(s=t.label,o=t.target);var a=O_(e,t,i),l=a||N_(r),c=!l("as");return function(){var u=arguments,h=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&h.push("label:"+s+";"),u[0]==null||u[0].raw===void 0)h.push.apply(h,u);else{var d=u[0];h.push(d[0]);for(var f=u.length,g=1;g<f;g++)h.push(u[g],d[g])}var m=L_(function(p,_,b){var y=c&&p.as||r,M="",w=[],P=p;if(p.theme==null){P={};for(var A in p)P[A]=p[A];P.theme=Ae.useContext(cd)}typeof p.className=="string"?M=E_(_.registered,w,p.className):p.className!=null&&(M=p.className+" ");var U=Ll(h.concat(w),_.registered,P);M+=_.key+"-"+U.name,o!==void 0&&(M+=" "+o);var Y=c&&a===void 0?N_(y):l,v={};for(var S in p)c&&S==="as"||Y(S)&&(v[S]=p[S]);return v.className=M,b&&(v.ref=b),Ae.createElement(Ae.Fragment,null,Ae.createElement(cP,{cache:_,serialized:U,isStringTag:typeof y=="string"}),Ae.createElement(y,v))});return m.displayName=s!==void 0?s:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",m.defaultProps=e.defaultProps,m.__emotion_real=m,m.__emotion_base=r,m.__emotion_styles=h,m.__emotion_forwardProp=a,Object.defineProperty(m,"toString",{value:function(){return"."+o}}),m.withComponent=function(p,_){var b=n(p,bl({},t,_,{shouldForwardProp:O_(m,_,!0)}));return b.apply(void 0,h)},m}},hP=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],fd=uP.bind(null);hP.forEach(function(n){fd[n]=fd(n)});var pd={exports:{}};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var md,U_;function dP(){if(U_)return md;U_=1;var n=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function i(s){if(s==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(s)}function r(){try{if(!Object.assign)return!1;var s=new String("abc");if(s[5]="de",Object.getOwnPropertyNames(s)[0]==="5")return!1;for(var o={},a=0;a<10;a++)o["_"+String.fromCharCode(a)]=a;var l=Object.getOwnPropertyNames(o).map(function(u){return o[u]});if(l.join("")!=="0123456789")return!1;var c={};return"abcdefghijklmnopqrst".split("").forEach(function(u){c[u]=u}),Object.keys(Object.assign({},c)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return md=r()?Object.assign:function(s,o){for(var a,l=i(s),c,u=1;u<arguments.length;u++){a=Object(arguments[u]);for(var h in a)e.call(a,h)&&(l[h]=a[h]);if(n){c=n(a);for(var d=0;d<c.length;d++)t.call(a,c[d])&&(l[c[d]]=a[c[d]])}}return l},md}var gd,F_;function _d(){if(F_)return gd;F_=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return gd=n,gd}var vd,B_;function k_(){return B_||(B_=1,vd=Function.call.bind(Object.prototype.hasOwnProperty)),vd}var yd,V_;function fP(){if(V_)return yd;V_=1;var n=function(){};if(process.env.NODE_ENV!=="production"){var e=_d(),t={},i=k_();n=function(s){var o="Warning: "+s;typeof console<"u"&&console.error(o);try{throw new Error(o)}catch{}}}function r(s,o,a,l,c){if(process.env.NODE_ENV!=="production"){for(var u in s)if(i(s,u)){var h;try{if(typeof s[u]!="function"){var d=Error((l||"React class")+": "+a+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof s[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}h=s[u](o,u,l,a,null,e)}catch(g){h=g}if(h&&!(h instanceof Error)&&n((l||"React class")+": type specification of "+a+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof h+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),h instanceof Error&&!(h.message in t)){t[h.message]=!0;var f=c?c():"";n("Failed "+a+" type: "+h.message+(f??""))}}}}return r.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(t={})},yd=r,yd}var xd,z_;function pP(){if(z_)return xd;z_=1;var n=od,e=dP(),t=_d(),i=k_(),r=fP(),s=function(){};process.env.NODE_ENV!=="production"&&(s=function(a){var l="Warning: "+a;typeof console<"u"&&console.error(l);try{throw new Error(l)}catch{}});function o(){return null}return xd=function(a,l){var c=typeof Symbol=="function"&&Symbol.iterator,u="@@iterator";function h(L){var V=L&&(c&&L[c]||L[u]);if(typeof V=="function")return V}var d="<<anonymous>>",f={array:_("array"),bigint:_("bigint"),bool:_("boolean"),func:_("function"),number:_("number"),object:_("object"),string:_("string"),symbol:_("symbol"),any:b(),arrayOf:y,element:M(),elementType:w(),instanceOf:P,node:v(),objectOf:U,oneOf:A,oneOfType:Y,shape:B,exact:T};function g(L,V){return L===V?L!==0||1/L===1/V:L!==L&&V!==V}function m(L,V){this.message=L,this.data=V&&typeof V=="object"?V:{},this.stack=""}m.prototype=Error.prototype;function p(L){if(process.env.NODE_ENV!=="production")var V={},K=0;function ee($,se,ie,ae,de,ue,Se){if(ae=ae||d,ue=ue||ie,Se!==t){if(l){var re=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw re.name="Invariant Violation",re}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var z=ae+":"+ie;!V[z]&&K<3&&(s("You are manually calling a React.PropTypes validation function for the `"+ue+"` prop on `"+ae+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),V[z]=!0,K++)}}return se[ie]==null?$?se[ie]===null?new m("The "+de+" `"+ue+"` is marked as required "+("in `"+ae+"`, but its value is `null`.")):new m("The "+de+" `"+ue+"` is marked as required in "+("`"+ae+"`, but its value is `undefined`.")):null:L(se,ie,ae,de,ue)}var G=ee.bind(null,!1);return G.isRequired=ee.bind(null,!0),G}function _(L){function V(K,ee,G,$,se,ie){var ae=K[ee],de=R(ae);if(de!==L){var ue=F(ae);return new m("Invalid "+$+" `"+se+"` of type "+("`"+ue+"` supplied to `"+G+"`, expected ")+("`"+L+"`."),{expectedType:L})}return null}return p(V)}function b(){return p(o)}function y(L){function V(K,ee,G,$,se){if(typeof L!="function")return new m("Property `"+se+"` of component `"+G+"` has invalid PropType notation inside arrayOf.");var ie=K[ee];if(!Array.isArray(ie)){var ae=R(ie);return new m("Invalid "+$+" `"+se+"` of type "+("`"+ae+"` supplied to `"+G+"`, expected an array."))}for(var de=0;de<ie.length;de++){var ue=L(ie,de,G,$,se+"["+de+"]",t);if(ue instanceof Error)return ue}return null}return p(V)}function M(){function L(V,K,ee,G,$){var se=V[K];if(!a(se)){var ie=R(se);return new m("Invalid "+G+" `"+$+"` of type "+("`"+ie+"` supplied to `"+ee+"`, expected a single ReactElement."))}return null}return p(L)}function w(){function L(V,K,ee,G,$){var se=V[K];if(!n.isValidElementType(se)){var ie=R(se);return new m("Invalid "+G+" `"+$+"` of type "+("`"+ie+"` supplied to `"+ee+"`, expected a single ReactElement type."))}return null}return p(L)}function P(L){function V(K,ee,G,$,se){if(!(K[ee]instanceof L)){var ie=L.name||d,ae=J(K[ee]);return new m("Invalid "+$+" `"+se+"` of type "+("`"+ae+"` supplied to `"+G+"`, expected ")+("instance of `"+ie+"`."))}return null}return p(V)}function A(L){if(!Array.isArray(L))return process.env.NODE_ENV!=="production"&&(arguments.length>1?s("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):s("Invalid argument supplied to oneOf, expected an array.")),o;function V(K,ee,G,$,se){for(var ie=K[ee],ae=0;ae<L.length;ae++)if(g(ie,L[ae]))return null;var de=JSON.stringify(L,function(Se,re){var z=F(re);return z==="symbol"?String(re):re});return new m("Invalid "+$+" `"+se+"` of value `"+String(ie)+"` "+("supplied to `"+G+"`, expected one of "+de+"."))}return p(V)}function U(L){function V(K,ee,G,$,se){if(typeof L!="function")return new m("Property `"+se+"` of component `"+G+"` has invalid PropType notation inside objectOf.");var ie=K[ee],ae=R(ie);if(ae!=="object")return new m("Invalid "+$+" `"+se+"` of type "+("`"+ae+"` supplied to `"+G+"`, expected an object."));for(var de in ie)if(i(ie,de)){var ue=L(ie,de,G,$,se+"."+de,t);if(ue instanceof Error)return ue}return null}return p(V)}function Y(L){if(!Array.isArray(L))return process.env.NODE_ENV!=="production"&&s("Invalid argument supplied to oneOfType, expected an instance of array."),o;for(var V=0;V<L.length;V++){var K=L[V];if(typeof K!="function")return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+k(K)+" at index "+V+"."),o}function ee(G,$,se,ie,ae){for(var de=[],ue=0;ue<L.length;ue++){var Se=L[ue],re=Se(G,$,se,ie,ae,t);if(re==null)return null;re.data&&i(re.data,"expectedType")&&de.push(re.data.expectedType)}var z=de.length>0?", expected one of type ["+de.join(", ")+"]":"";return new m("Invalid "+ie+" `"+ae+"` supplied to "+("`"+se+"`"+z+"."))}return p(ee)}function v(){function L(V,K,ee,G,$){return E(V[K])?null:new m("Invalid "+G+" `"+$+"` supplied to "+("`"+ee+"`, expected a ReactNode."))}return p(L)}function S(L,V,K,ee,G){return new m((L||"React class")+": "+V+" type `"+K+"."+ee+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+G+"`.")}function B(L){function V(K,ee,G,$,se){var ie=K[ee],ae=R(ie);if(ae!=="object")return new m("Invalid "+$+" `"+se+"` of type `"+ae+"` "+("supplied to `"+G+"`, expected `object`."));for(var de in L){var ue=L[de];if(typeof ue!="function")return S(G,$,se,de,F(ue));var Se=ue(ie,de,G,$,se+"."+de,t);if(Se)return Se}return null}return p(V)}function T(L){function V(K,ee,G,$,se){var ie=K[ee],ae=R(ie);if(ae!=="object")return new m("Invalid "+$+" `"+se+"` of type `"+ae+"` "+("supplied to `"+G+"`, expected `object`."));var de=e({},K[ee],L);for(var ue in de){var Se=L[ue];if(i(L,ue)&&typeof Se!="function")return S(G,$,se,ue,F(Se));if(!Se)return new m("Invalid "+$+" `"+se+"` key `"+ue+"` supplied to `"+G+"`.\nBad object: "+JSON.stringify(K[ee],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(L),null,"  "));var re=Se(ie,ue,G,$,se+"."+ue,t);if(re)return re}return null}return p(V)}function E(L){switch(typeof L){case"number":case"string":case"undefined":return!0;case"boolean":return!L;case"object":if(Array.isArray(L))return L.every(E);if(L===null||a(L))return!0;var V=h(L);if(V){var K=V.call(L),ee;if(V!==L.entries){for(;!(ee=K.next()).done;)if(!E(ee.value))return!1}else for(;!(ee=K.next()).done;){var G=ee.value;if(G&&!E(G[1]))return!1}}else return!1;return!0;default:return!1}}function O(L,V){return L==="symbol"?!0:V?V["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&V instanceof Symbol:!1}function R(L){var V=typeof L;return Array.isArray(L)?"array":L instanceof RegExp?"object":O(V,L)?"symbol":V}function F(L){if(typeof L>"u"||L===null)return""+L;var V=R(L);if(V==="object"){if(L instanceof Date)return"date";if(L instanceof RegExp)return"regexp"}return V}function k(L){var V=F(L);switch(V){case"array":case"object":return"an "+V;case"boolean":case"date":case"regexp":return"a "+V;default:return V}}function J(L){return!L.constructor||!L.constructor.name?d:L.constructor.name}return f.checkPropTypes=r,f.resetWarningCache=r.resetWarningCache,f.PropTypes=f,f},xd}var Md,H_;function mP(){if(H_)return Md;H_=1;var n=_d();function e(){}function t(){}return t.resetWarningCache=e,Md=function(){function i(o,a,l,c,u,h){if(h!==n){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}i.isRequired=i;function r(){return i}var s={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:r,element:i,elementType:i,instanceOf:r,node:i,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:t,resetWarningCache:e};return s.PropTypes=s,s},Md}if(process.env.NODE_ENV!=="production"){var gP=od,_P=!0;pd.exports=pP()(gP.isElement,_P)}else pd.exports=mP()();var vP=pd.exports;const X=xc(vP);/**
 * @mui/styled-engine v6.4.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function yP(n,e){const t=fd(n,e);return process.env.NODE_ENV!=="production"?(...i)=>{const r=typeof n=="string"?`"${n}"`:"component";return i.length===0?console.error([`MUI: Seems like you called \`styled(${r})()\` without a \`style\` argument.`,'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)):i.some(s=>s===void 0)&&console.error(`MUI: the styled(${r})(...args) API requires all its args to be defined.`),t(...i)}:t}function xP(n,e){Array.isArray(n.__emotion_styles)&&(n.__emotion_styles=e(n.__emotion_styles))}const G_=[];function W_(n){return G_[0]=n,Ll(G_)}var Sd={exports:{}},vt={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function MP(){if($_)return vt;$_=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),o=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),c=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),d=Symbol.for("react.view_transition"),f=Symbol.for("react.client.reference");function g(m){if(typeof m=="object"&&m!==null){var p=m.$$typeof;switch(p){case n:switch(m=m.type,m){case t:case r:case i:case l:case c:case d:return m;default:switch(m=m&&m.$$typeof,m){case o:case a:case h:case u:return m;case s:return m;default:return p}}case e:return p}}}return vt.ContextConsumer=s,vt.ContextProvider=o,vt.Element=n,vt.ForwardRef=a,vt.Fragment=t,vt.Lazy=h,vt.Memo=u,vt.Portal=e,vt.Profiler=r,vt.StrictMode=i,vt.Suspense=l,vt.SuspenseList=c,vt.isContextConsumer=function(m){return g(m)===s},vt.isContextProvider=function(m){return g(m)===o},vt.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===n},vt.isForwardRef=function(m){return g(m)===a},vt.isFragment=function(m){return g(m)===t},vt.isLazy=function(m){return g(m)===h},vt.isMemo=function(m){return g(m)===u},vt.isPortal=function(m){return g(m)===e},vt.isProfiler=function(m){return g(m)===r},vt.isStrictMode=function(m){return g(m)===i},vt.isSuspense=function(m){return g(m)===l},vt.isSuspenseList=function(m){return g(m)===c},vt.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===t||m===r||m===i||m===l||m===c||typeof m=="object"&&m!==null&&(m.$$typeof===h||m.$$typeof===u||m.$$typeof===o||m.$$typeof===s||m.$$typeof===a||m.$$typeof===f||m.getModuleId!==void 0)},vt.typeOf=g,vt}var yt={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function SP(){return X_||(X_=1,process.env.NODE_ENV!=="production"&&function(){function n(m){if(typeof m=="object"&&m!==null){var p=m.$$typeof;switch(p){case e:switch(m=m.type,m){case i:case s:case r:case c:case u:case f:return m;default:switch(m=m&&m.$$typeof,m){case a:case l:case d:case h:return m;case o:return m;default:return p}}case t:return p}}}var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),a=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.for("react.view_transition"),g=Symbol.for("react.client.reference");yt.ContextConsumer=o,yt.ContextProvider=a,yt.Element=e,yt.ForwardRef=l,yt.Fragment=i,yt.Lazy=d,yt.Memo=h,yt.Portal=t,yt.Profiler=s,yt.StrictMode=r,yt.Suspense=c,yt.SuspenseList=u,yt.isContextConsumer=function(m){return n(m)===o},yt.isContextProvider=function(m){return n(m)===a},yt.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},yt.isForwardRef=function(m){return n(m)===l},yt.isFragment=function(m){return n(m)===i},yt.isLazy=function(m){return n(m)===d},yt.isMemo=function(m){return n(m)===h},yt.isPortal=function(m){return n(m)===t},yt.isProfiler=function(m){return n(m)===s},yt.isStrictMode=function(m){return n(m)===r},yt.isSuspense=function(m){return n(m)===c},yt.isSuspenseList=function(m){return n(m)===u},yt.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===i||m===s||m===r||m===c||m===u||typeof m=="object"&&m!==null&&(m.$$typeof===d||m.$$typeof===h||m.$$typeof===a||m.$$typeof===o||m.$$typeof===l||m.$$typeof===g||m.getModuleId!==void 0)},yt.typeOf=n}()),yt}process.env.NODE_ENV==="production"?Sd.exports=MP():Sd.exports=SP();var Dl=Sd.exports;function _i(n){if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function j_(n){if(Ae.isValidElement(n)||Dl.isValidElementType(n)||!_i(n))return n;const e={};return Object.keys(n).forEach(t=>{e[t]=j_(n[t])}),e}function _n(n,e,t={clone:!0}){const i=t.clone?{...n}:n;return _i(n)&&_i(e)&&Object.keys(e).forEach(r=>{Ae.isValidElement(e[r])||Dl.isValidElementType(e[r])?i[r]=e[r]:_i(e[r])&&Object.prototype.hasOwnProperty.call(n,r)&&_i(n[r])?i[r]=_n(n[r],e[r],t):t.clone?i[r]=_i(e[r])?j_(e[r]):e[r]:i[r]=e[r]}),i}const bP=n=>{const e=Object.keys(n).map(t=>({key:t,val:n[t]}))||[];return e.sort((t,i)=>t.val-i.val),e.reduce((t,i)=>({...t,[i.key]:i.val}),{})};function EP(n){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:t="px",step:i=5,...r}=n,s=bP(e),o=Object.keys(s);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${t})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-i/100}${t})`}function c(d,f){const g=o.indexOf(f);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${t}) and (max-width:${(g!==-1&&typeof e[o[g]]=="number"?e[o[g]]:f)-i/100}${t})`}function u(d){return o.indexOf(d)+1<o.length?c(d,o[o.indexOf(d)+1]):a(d)}function h(d){const f=o.indexOf(d);return f===0?a(o[1]):f===o.length-1?l(o[f]):c(d,o[o.indexOf(d)+1]).replace("@media","@media not all and")}return{keys:o,values:s,up:a,down:l,between:c,only:u,not:h,unit:t,...r}}function TP(n,e){if(!n.containerQueries)return e;const t=Object.keys(e).filter(i=>i.startsWith("@container")).sort((i,r)=>{var o,a;const s=/min-width:\s*([0-9.]+)/;return+(((o=i.match(s))==null?void 0:o[1])||0)-+(((a=r.match(s))==null?void 0:a[1])||0)});return t.length?t.reduce((i,r)=>{const s=e[r];return delete i[r],i[r]=s,i},{...e}):e}function wP(n,e){return e==="@"||e.startsWith("@")&&(n.some(t=>e.startsWith(`@${t}`))||!!e.match(/^@\d/))}function AP(n,e){const t=e.match(/^@([^/]+)?\/?(.+)?$/);if(!t){if(process.env.NODE_ENV!=="production")throw new Error(process.env.NODE_ENV!=="production"?`MUI: The provided shorthand ${`(${e})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`:ir(18,`(${e})`));return null}const[,i,r]=t,s=Number.isNaN(+i)?i||0:+i;return n.containerQueries(r).up(s)}function RP(n){const e=(s,o)=>s.replace("@media",o?`@container ${o}`:"@container");function t(s,o){s.up=(...a)=>e(n.breakpoints.up(...a),o),s.down=(...a)=>e(n.breakpoints.down(...a),o),s.between=(...a)=>e(n.breakpoints.between(...a),o),s.only=(...a)=>e(n.breakpoints.only(...a),o),s.not=(...a)=>{const l=e(n.breakpoints.not(...a),o);return l.includes("not all and")?l.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):l}}const i={},r=s=>(t(i,s),i);return t(r),{...n,containerQueries:r}}const CP={borderRadius:4},rr=process.env.NODE_ENV!=="production"?X.oneOfType([X.number,X.string,X.object,X.array]):{};function zo(n,e){return e?_n(n,e,{clone:!1}):n}const Nl={xs:0,sm:600,md:900,lg:1200,xl:1536},q_={keys:["xs","sm","md","lg","xl"],up:n=>`@media (min-width:${Nl[n]}px)`},PP={containerQueries:n=>({up:e=>{let t=typeof e=="number"?e:Nl[e]||e;return typeof t=="number"&&(t=`${t}px`),n?`@container ${n} (min-width:${t})`:`@container (min-width:${t})`}})};function ei(n,e,t){const i=n.theme||{};if(Array.isArray(e)){const s=i.breakpoints||q_;return e.reduce((o,a,l)=>(o[s.up(s.keys[l])]=t(e[l]),o),{})}if(typeof e=="object"){const s=i.breakpoints||q_;return Object.keys(e).reduce((o,a)=>{if(wP(s.keys,a)){const l=AP(i.containerQueries?i:PP,a);l&&(o[l]=t(e[a],a))}else if(Object.keys(s.values||Nl).includes(a)){const l=s.up(a);o[l]=t(e[a],a)}else{const l=a;o[l]=e[l]}return o},{})}return t(e)}function Y_(n={}){var t;return((t=n.keys)==null?void 0:t.reduce((i,r)=>{const s=n.up(r);return i[s]={},i},{}))||{}}function K_(n,e){return n.reduce((t,i)=>{const r=t[i];return(!r||Object.keys(r).length===0)&&delete t[i],t},e)}function IP(n,...e){const t=Y_(n),i=[t,...e].reduce((r,s)=>_n(r,s),{});return K_(Object.keys(t),i)}function LP(n,e){if(typeof n!="object")return{};const t={},i=Object.keys(e);return Array.isArray(n)?i.forEach((r,s)=>{s<n.length&&(t[r]=!0)}):i.forEach(r=>{n[r]!=null&&(t[r]=!0)}),t}function bd({values:n,breakpoints:e,base:t}){const i=t||LP(n,e),r=Object.keys(i);if(r.length===0)return n;let s;return r.reduce((o,a,l)=>(Array.isArray(n)?(o[a]=n[l]!=null?n[l]:n[s],s=l):typeof n=="object"?(o[a]=n[a]!=null?n[a]:n[s],s=a):o[a]=n,o),{})}function jt(n){if(typeof n!="string")throw new Error(process.env.NODE_ENV!=="production"?"MUI: `capitalize(string)` expects a string argument.":ir(7));return n.charAt(0).toUpperCase()+n.slice(1)}function Ol(n,e,t=!0){if(!e||typeof e!="string")return null;if(n&&n.vars&&t){const i=`vars.${e}`.split(".").reduce((r,s)=>r&&r[s]?r[s]:null,n);if(i!=null)return i}return e.split(".").reduce((i,r)=>i&&i[r]!=null?i[r]:null,n)}function Ul(n,e,t,i=t){let r;return typeof n=="function"?r=n(t):Array.isArray(n)?r=n[t]||i:r=Ol(n,t)||i,e&&(r=e(r,i,n)),r}function Bt(n){const{prop:e,cssProperty:t=n.prop,themeKey:i,transform:r}=n,s=o=>{if(o[e]==null)return null;const a=o[e],l=o.theme,c=Ol(l,i)||{};return ei(o,a,h=>{let d=Ul(c,r,h);return h===d&&typeof h=="string"&&(d=Ul(c,r,`${e}${h==="default"?"":jt(h)}`,h)),t===!1?d:{[t]:d}})};return s.propTypes=process.env.NODE_ENV!=="production"?{[e]:rr}:{},s.filterProps=[e],s}function DP(n){const e={};return t=>(e[t]===void 0&&(e[t]=n(t)),e[t])}const NP={m:"margin",p:"padding"},OP={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Z_={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},UP=DP(n=>{if(n.length>2)if(Z_[n])n=Z_[n];else return[n];const[e,t]=n.split(""),i=NP[e],r=OP[t]||"";return Array.isArray(r)?r.map(s=>i+s):[i+r]}),Fl=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Bl=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],FP=[...Fl,...Bl];function Ho(n,e,t,i){const r=Ol(n,e,!0)??t;return typeof r=="number"||typeof r=="string"?s=>typeof s=="string"?s:(process.env.NODE_ENV!=="production"&&typeof s!="number"&&console.error(`MUI: Expected ${i} argument to be a number or a string, got ${s}.`),typeof r=="string"?`calc(${s} * ${r})`:r*s):Array.isArray(r)?s=>{if(typeof s=="string")return s;const o=Math.abs(s);process.env.NODE_ENV!=="production"&&(Number.isInteger(o)?o>r.length-1&&console.error([`MUI: The value provided (${o}) overflows.`,`The supported values are: ${JSON.stringify(r)}.`,`${o} > ${r.length-1}, you need to add the missing values.`].join(`
`)):console.error([`MUI: The \`theme.${e}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${e}\` as a number.`].join(`
`)));const a=r[o];return s>=0?a:typeof a=="number"?-a:`-${a}`}:typeof r=="function"?r:(process.env.NODE_ENV!=="production"&&console.error([`MUI: The \`theme.${e}\` value (${r}) is invalid.`,"It should be a number, an array or a function."].join(`
`)),()=>{})}function kl(n){return Ho(n,"spacing",8,"spacing")}function Nr(n,e){return typeof e=="string"||e==null?e:n(e)}function BP(n,e){return t=>n.reduce((i,r)=>(i[r]=Nr(e,t),i),{})}function kP(n,e,t,i){if(!e.includes(t))return null;const r=UP(t),s=BP(r,i),o=n[t];return ei(n,o,s)}function J_(n,e){const t=kl(n.theme);return Object.keys(n).map(i=>kP(n,e,i,t)).reduce(zo,{})}function Nt(n){return J_(n,Fl)}Nt.propTypes=process.env.NODE_ENV!=="production"?Fl.reduce((n,e)=>(n[e]=rr,n),{}):{},Nt.filterProps=Fl;function Ot(n){return J_(n,Bl)}Ot.propTypes=process.env.NODE_ENV!=="production"?Bl.reduce((n,e)=>(n[e]=rr,n),{}):{},Ot.filterProps=Bl,process.env.NODE_ENV!=="production"&&FP.reduce((n,e)=>(n[e]=rr,n),{});function Q_(n=8,e=kl({spacing:n})){if(n.mui)return n;const t=(...i)=>(process.env.NODE_ENV!=="production"&&(i.length<=4||console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${i.length}`)),(i.length===0?[1]:i).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" "));return t.mui=!0,t}function Vl(...n){const e=n.reduce((i,r)=>(r.filterProps.forEach(s=>{i[s]=r}),i),{}),t=i=>Object.keys(i).reduce((r,s)=>e[s]?zo(r,e[s](i)):r,{});return t.propTypes=process.env.NODE_ENV!=="production"?n.reduce((i,r)=>Object.assign(i,r.propTypes),{}):{},t.filterProps=n.reduce((i,r)=>i.concat(r.filterProps),[]),t}function Vn(n){return typeof n!="number"?n:`${n}px solid`}function zn(n,e){return Bt({prop:n,themeKey:"borders",transform:e})}const VP=zn("border",Vn),zP=zn("borderTop",Vn),HP=zn("borderRight",Vn),GP=zn("borderBottom",Vn),WP=zn("borderLeft",Vn),$P=zn("borderColor"),XP=zn("borderTopColor"),jP=zn("borderRightColor"),qP=zn("borderBottomColor"),YP=zn("borderLeftColor"),KP=zn("outline",Vn),ZP=zn("outlineColor"),zl=n=>{if(n.borderRadius!==void 0&&n.borderRadius!==null){const e=Ho(n.theme,"shape.borderRadius",4,"borderRadius"),t=i=>({borderRadius:Nr(e,i)});return ei(n,n.borderRadius,t)}return null};zl.propTypes=process.env.NODE_ENV!=="production"?{borderRadius:rr}:{},zl.filterProps=["borderRadius"],Vl(VP,zP,HP,GP,WP,$P,XP,jP,qP,YP,zl,KP,ZP);const Hl=n=>{if(n.gap!==void 0&&n.gap!==null){const e=Ho(n.theme,"spacing",8,"gap"),t=i=>({gap:Nr(e,i)});return ei(n,n.gap,t)}return null};Hl.propTypes=process.env.NODE_ENV!=="production"?{gap:rr}:{},Hl.filterProps=["gap"];const Gl=n=>{if(n.columnGap!==void 0&&n.columnGap!==null){const e=Ho(n.theme,"spacing",8,"columnGap"),t=i=>({columnGap:Nr(e,i)});return ei(n,n.columnGap,t)}return null};Gl.propTypes=process.env.NODE_ENV!=="production"?{columnGap:rr}:{},Gl.filterProps=["columnGap"];const Wl=n=>{if(n.rowGap!==void 0&&n.rowGap!==null){const e=Ho(n.theme,"spacing",8,"rowGap"),t=i=>({rowGap:Nr(e,i)});return ei(n,n.rowGap,t)}return null};Wl.propTypes=process.env.NODE_ENV!=="production"?{rowGap:rr}:{},Wl.filterProps=["rowGap"];const JP=Bt({prop:"gridColumn"}),QP=Bt({prop:"gridRow"}),e2=Bt({prop:"gridAutoFlow"}),t2=Bt({prop:"gridAutoColumns"}),n2=Bt({prop:"gridAutoRows"}),i2=Bt({prop:"gridTemplateColumns"}),r2=Bt({prop:"gridTemplateRows"}),s2=Bt({prop:"gridTemplateAreas"}),o2=Bt({prop:"gridArea"});Vl(Hl,Gl,Wl,JP,QP,e2,t2,n2,i2,r2,s2,o2);function Is(n,e){return e==="grey"?e:n}const a2=Bt({prop:"color",themeKey:"palette",transform:Is}),l2=Bt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Is}),c2=Bt({prop:"backgroundColor",themeKey:"palette",transform:Is});Vl(a2,l2,c2);function In(n){return n<=1&&n!==0?`${n*100}%`:n}const u2=Bt({prop:"width",transform:In}),Ed=n=>{if(n.maxWidth!==void 0&&n.maxWidth!==null){const e=t=>{var r,s,o,a,l;const i=((o=(s=(r=n.theme)==null?void 0:r.breakpoints)==null?void 0:s.values)==null?void 0:o[t])||Nl[t];return i?((l=(a=n.theme)==null?void 0:a.breakpoints)==null?void 0:l.unit)!=="px"?{maxWidth:`${i}${n.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:In(t)}};return ei(n,n.maxWidth,e)}return null};Ed.filterProps=["maxWidth"];const h2=Bt({prop:"minWidth",transform:In}),d2=Bt({prop:"height",transform:In}),f2=Bt({prop:"maxHeight",transform:In}),p2=Bt({prop:"minHeight",transform:In});Bt({prop:"size",cssProperty:"width",transform:In}),Bt({prop:"size",cssProperty:"height",transform:In});const m2=Bt({prop:"boxSizing"});Vl(u2,Ed,h2,d2,f2,p2,m2);const Go={border:{themeKey:"borders",transform:Vn},borderTop:{themeKey:"borders",transform:Vn},borderRight:{themeKey:"borders",transform:Vn},borderBottom:{themeKey:"borders",transform:Vn},borderLeft:{themeKey:"borders",transform:Vn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Vn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:zl},color:{themeKey:"palette",transform:Is},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Is},backgroundColor:{themeKey:"palette",transform:Is},p:{style:Ot},pt:{style:Ot},pr:{style:Ot},pb:{style:Ot},pl:{style:Ot},px:{style:Ot},py:{style:Ot},padding:{style:Ot},paddingTop:{style:Ot},paddingRight:{style:Ot},paddingBottom:{style:Ot},paddingLeft:{style:Ot},paddingX:{style:Ot},paddingY:{style:Ot},paddingInline:{style:Ot},paddingInlineStart:{style:Ot},paddingInlineEnd:{style:Ot},paddingBlock:{style:Ot},paddingBlockStart:{style:Ot},paddingBlockEnd:{style:Ot},m:{style:Nt},mt:{style:Nt},mr:{style:Nt},mb:{style:Nt},ml:{style:Nt},mx:{style:Nt},my:{style:Nt},margin:{style:Nt},marginTop:{style:Nt},marginRight:{style:Nt},marginBottom:{style:Nt},marginLeft:{style:Nt},marginX:{style:Nt},marginY:{style:Nt},marginInline:{style:Nt},marginInlineStart:{style:Nt},marginInlineEnd:{style:Nt},marginBlock:{style:Nt},marginBlockStart:{style:Nt},marginBlockEnd:{style:Nt},displayPrint:{cssProperty:!1,transform:n=>({"@media print":{display:n}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Hl},rowGap:{style:Wl},columnGap:{style:Gl},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:In},maxWidth:{style:Ed},minWidth:{transform:In},height:{transform:In},maxHeight:{transform:In},minHeight:{transform:In},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function g2(...n){const e=n.reduce((i,r)=>i.concat(Object.keys(r)),[]),t=new Set(e);return n.every(i=>t.size===Object.keys(i).length)}function _2(n,e){return typeof n=="function"?n(e):n}function v2(){function n(t,i,r,s){const o={[t]:i,theme:r},a=s[t];if(!a)return{[t]:i};const{cssProperty:l=t,themeKey:c,transform:u,style:h}=a;if(i==null)return null;if(c==="typography"&&i==="inherit")return{[t]:i};const d=Ol(r,c)||{};return h?h(o):ei(o,i,g=>{let m=Ul(d,u,g);return g===m&&typeof g=="string"&&(m=Ul(d,u,`${t}${g==="default"?"":jt(g)}`,g)),l===!1?m:{[l]:m}})}function e(t){const{sx:i,theme:r={}}=t||{};if(!i)return null;const s=r.unstable_sxConfig??Go;function o(a){let l=a;if(typeof a=="function")l=a(r);else if(typeof a!="object")return a;if(!l)return null;const c=Y_(r.breakpoints),u=Object.keys(c);let h=c;return Object.keys(l).forEach(d=>{const f=_2(l[d],r);if(f!=null)if(typeof f=="object")if(s[d])h=zo(h,n(d,f,r,s));else{const g=ei({theme:r},f,m=>({[d]:m}));g2(g,f)?h[d]=e({sx:f,theme:r}):h=zo(h,g)}else h=zo(h,n(d,f,r,s))}),TP(r,K_(u,h))}return Array.isArray(i)?i.map(o):o(i)}return e}const Ls=v2();Ls.filterProps=["sx"];function y2(n,e){var i;const t=this;if(t.vars){if(!((i=t.colorSchemes)!=null&&i[n])||typeof t.getColorSchemeSelector!="function")return{};let r=t.getColorSchemeSelector(n);return r==="&"?e:((r.includes("data-")||r.includes("."))&&(r=`*:where(${r.replace(/\s*&$/,"")}) &`),{[r]:e})}return t.palette.mode===n?e:{}}function $l(n={},...e){const{breakpoints:t={},palette:i={},spacing:r,shape:s={},...o}=n,a=EP(t),l=Q_(r);let c=_n({breakpoints:a,direction:"ltr",components:{},palette:{mode:"light",...i},spacing:l,shape:{...CP,...s}},o);return c=RP(c),c.applyStyles=y2,c=e.reduce((u,h)=>_n(u,h),c),c.unstable_sxConfig={...Go,...o==null?void 0:o.unstable_sxConfig},c.unstable_sx=function(h){return Ls({sx:h,theme:this})},c}function x2(n){return Object.keys(n).length===0}function M2(n=null){const e=Ae.useContext(cd);return!e||x2(e)?n:e}const S2=$l();function b2(n=S2){return M2(n)}const E2=n=>{var i;const e={systemProps:{},otherProps:{}},t=((i=n==null?void 0:n.theme)==null?void 0:i.unstable_sxConfig)??Go;return Object.keys(n).forEach(r=>{t[r]?e.systemProps[r]=n[r]:e.otherProps[r]=n[r]}),e};function T2(n){const{sx:e,...t}=n,{systemProps:i,otherProps:r}=E2(t);let s;return Array.isArray(e)?s=[i,...e]:typeof e=="function"?s=(...o)=>{const a=e(...o);return _i(a)?{...i,...a}:i}:s={...i,...e},{...r,sx:s}}const e0=n=>n,w2=(()=>{let n=e0;return{configure(e){n=e},generate(e){return n(e)},reset(){n=e0}}})();function t0(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=t0(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function xn(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=t0(n))&&(i&&(i+=" "),i+=e);return i}const A2={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Ds(n,e,t="Mui"){const i=A2[e];return i?`${t}-${i}`:`${w2.generate(n)}-${e}`}function Xl(n,e,t="Mui"){const i={};return e.forEach(r=>{i[r]=Ds(n,r,t)}),i}function n0(n,e=""){return n.displayName||n.name||e}function i0(n,e,t){const i=n0(e);return n.displayName||(i!==""?`${t}(${i})`:t)}function R2(n){if(n!=null){if(typeof n=="string")return n;if(typeof n=="function")return n0(n,"Component");if(typeof n=="object")switch(n.$$typeof){case Dl.ForwardRef:return i0(n,n.render,"ForwardRef");case Dl.Memo:return i0(n,n.type,"memo");default:return}}}function r0(n){const{variants:e,...t}=n,i={variants:e,style:W_(t),isProcessed:!0};return i.style===t||e&&e.forEach(r=>{typeof r.style!="function"&&(r.style=W_(r.style))}),i}const C2=$l();function Td(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}function P2(n){return n?(e,t)=>t[n]:null}function I2(n,e,t){n.theme=N2(n.theme)?t:n.theme[e]||n.theme}function jl(n,e){const t=typeof e=="function"?e(n):e;if(Array.isArray(t))return t.flatMap(i=>jl(n,i));if(Array.isArray(t==null?void 0:t.variants)){let i;if(t.isProcessed)i=t.style;else{const{variants:r,...s}=t;i=s}return s0(n,t.variants,[i])}return t!=null&&t.isProcessed?t.style:t}function s0(n,e,t=[]){var r;let i;e:for(let s=0;s<e.length;s+=1){const o=e[s];if(typeof o.props=="function"){if(i??(i={...n,...n.ownerState,ownerState:n.ownerState}),!o.props(i))continue}else for(const a in o.props)if(n[a]!==o.props[a]&&((r=n.ownerState)==null?void 0:r[a])!==o.props[a])continue e;typeof o.style=="function"?(i??(i={...n,...n.ownerState,ownerState:n.ownerState}),t.push(o.style(i))):t.push(o.style)}return t}function o0(n={}){const{themeId:e,defaultTheme:t=C2,rootShouldForwardProp:i=Td,slotShouldForwardProp:r=Td}=n;function s(a){I2(a,e,t)}return(a,l={})=>{xP(a,w=>w.filter(P=>P!==Ls));const{name:c,slot:u,skipVariantsResolver:h,skipSx:d,overridesResolver:f=P2(a0(u)),...g}=l,m=h!==void 0?h:u&&u!=="Root"&&u!=="root"||!1,p=d||!1;let _=Td;u==="Root"||u==="root"?_=i:u?_=r:O2(a)&&(_=void 0);const b=yP(a,{shouldForwardProp:_,label:D2(c,u),...g}),y=w=>{if(typeof w=="function"&&w.__emotion_real!==w)return function(A){return jl(A,w)};if(_i(w)){const P=r0(w);return P.variants?function(U){return jl(U,P)}:P.style}return w},M=(...w)=>{const P=[],A=w.map(y),U=[];if(P.push(s),c&&f&&U.push(function(B){var R,F;const E=(F=(R=B.theme.components)==null?void 0:R[c])==null?void 0:F.styleOverrides;if(!E)return null;const O={};for(const k in E)O[k]=jl(B,E[k]);return f(B,O)}),c&&!m&&U.push(function(B){var O,R;const T=B.theme,E=(R=(O=T==null?void 0:T.components)==null?void 0:O[c])==null?void 0:R.variants;return E?s0(B,E):null}),p||U.push(Ls),Array.isArray(A[0])){const S=A.shift(),B=new Array(P.length).fill(""),T=new Array(U.length).fill("");let E;E=[...B,...S,...T],E.raw=[...B,...S.raw,...T],P.unshift(E)}const Y=[...P,...A,...U],v=b(...Y);return a.muiName&&(v.muiName=a.muiName),process.env.NODE_ENV!=="production"&&(v.displayName=L2(c,u,a)),v};return b.withConfig&&(M.withConfig=b.withConfig),M}}function L2(n,e,t){return n?`${n}${jt(e||"")}`:`Styled(${R2(t)})`}function D2(n,e){let t;return process.env.NODE_ENV!=="production"&&n&&(t=`${n}-${a0(e||"Root")}`),t}function N2(n){for(const e in n)return!1;return!0}function O2(n){return typeof n=="string"&&n.charCodeAt(0)>96}function a0(n){return n&&n.charAt(0).toLowerCase()+n.slice(1)}const U2=o0();function Wo(n,e){const t={...e};for(const i in n)if(Object.prototype.hasOwnProperty.call(n,i)){const r=i;if(r==="components"||r==="slots")t[r]={...n[r],...t[r]};else if(r==="componentsProps"||r==="slotProps"){const s=n[r],o=e[r];if(!o)t[r]=s||{};else if(!s)t[r]=o;else{t[r]={...o};for(const a in s)if(Object.prototype.hasOwnProperty.call(s,a)){const l=a;t[r][l]=Wo(s[l],o[l])}}}else t[r]===void 0&&(t[r]=n[r])}return t}function F2(n){const{theme:e,name:t,props:i}=n;return!e||!e.components||!e.components[t]||!e.components[t].defaultProps?i:Wo(e.components[t].defaultProps,i)}function B2({props:n,name:e,defaultTheme:t,themeId:i}){let r=b2(t);return i&&(r=r[i]||r),F2({theme:r,name:e,props:n})}const k2=typeof window<"u"?Ae.useLayoutEffect:Ae.useEffect;function V2(n,e=Number.MIN_SAFE_INTEGER,t=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(n,t))}function wd(n,e=0,t=1){return process.env.NODE_ENV!=="production"&&(n<e||n>t)&&console.error(`MUI: The value provided ${n} is out of range [${e}, ${t}].`),V2(n,e,t)}function z2(n){n=n.slice(1);const e=new RegExp(`.{1,${n.length>=6?2:1}}`,"g");let t=n.match(e);return t&&t[0].length===1&&(t=t.map(i=>i+i)),process.env.NODE_ENV!=="production"&&n.length!==n.trim().length&&console.error(`MUI: The color: "${n}" is invalid. Make sure the color input doesn't contain leading/trailing space.`),t?`rgb${t.length===4?"a":""}(${t.map((i,r)=>r<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function sr(n){if(n.type)return n;if(n.charAt(0)==="#")return sr(z2(n));const e=n.indexOf("("),t=n.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(t))throw new Error(process.env.NODE_ENV!=="production"?`MUI: Unsupported \`${n}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`:ir(9,n));let i=n.substring(e+1,n.length-1),r;if(t==="color"){if(i=i.split(" "),r=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(r))throw new Error(process.env.NODE_ENV!=="production"?`MUI: unsupported \`${r}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`:ir(10,r))}else i=i.split(",");return i=i.map(s=>parseFloat(s)),{type:t,values:i,colorSpace:r}}const H2=n=>{const e=sr(n);return e.values.slice(0,3).map((t,i)=>e.type.includes("hsl")&&i!==0?`${t}%`:t).join(" ")},$o=(n,e)=>{try{return H2(n)}catch{return e&&process.env.NODE_ENV!=="production"&&console.warn(e),n}};function ql(n){const{type:e,colorSpace:t}=n;let{values:i}=n;return e.includes("rgb")?i=i.map((r,s)=>s<3?parseInt(r,10):r):e.includes("hsl")&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),e.includes("color")?i=`${t} ${i.join(" ")}`:i=`${i.join(", ")}`,`${e}(${i})`}function l0(n){n=sr(n);const{values:e}=n,t=e[0],i=e[1]/100,r=e[2]/100,s=i*Math.min(r,1-r),o=(c,u=(c+t/30)%12)=>r-s*Math.max(Math.min(u-3,9-u,1),-1);let a="rgb";const l=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return n.type==="hsla"&&(a+="a",l.push(e[3])),ql({type:a,values:l})}function Ad(n){n=sr(n);let e=n.type==="hsl"||n.type==="hsla"?sr(l0(n)).values:n.values;return e=e.map(t=>(n.type!=="color"&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function c0(n,e){const t=Ad(n),i=Ad(e);return(Math.max(t,i)+.05)/(Math.min(t,i)+.05)}function Ns(n,e){return n=sr(n),e=wd(e),(n.type==="rgb"||n.type==="hsl")&&(n.type+="a"),n.type==="color"?n.values[3]=`/${e}`:n.values[3]=e,ql(n)}function Yl(n,e,t){try{return Ns(n,e)}catch{return n}}function Rd(n,e){if(n=sr(n),e=wd(e),n.type.includes("hsl"))n.values[2]*=1-e;else if(n.type.includes("rgb")||n.type.includes("color"))for(let t=0;t<3;t+=1)n.values[t]*=1-e;return ql(n)}function Mt(n,e,t){try{return Rd(n,e)}catch{return n}}function Cd(n,e){if(n=sr(n),e=wd(e),n.type.includes("hsl"))n.values[2]+=(100-n.values[2])*e;else if(n.type.includes("rgb"))for(let t=0;t<3;t+=1)n.values[t]+=(255-n.values[t])*e;else if(n.type.includes("color"))for(let t=0;t<3;t+=1)n.values[t]+=(1-n.values[t])*e;return ql(n)}function St(n,e,t){try{return Cd(n,e)}catch{return n}}function G2(n,e=.15){return Ad(n)>.5?Rd(n,e):Cd(n,e)}function Kl(n,e,t){try{return G2(n,e)}catch{return n}}function u0(n,e){return process.env.NODE_ENV==="production"?()=>null:function(...i){return n(...i)||e(...i)}}function W2(n){const{prototype:e={}}=n;return!!e.isReactComponent}function $2(n,e,t,i,r){const s=n[e],o=r||e;if(s==null||typeof window>"u")return null;let a;return typeof s=="function"&&!W2(s)&&(a="Did you accidentally provide a plain function component instead?"),a!==void 0?new Error(`Invalid ${i} \`${o}\` supplied to \`${t}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`):null}const X2=u0(X.elementType,$2),j2=X.oneOfType([X.func,X.object]);function q2(n,e){typeof n=="function"?n(e):n&&(n.current=e)}let h0=0;function Y2(n){const[e,t]=Ae.useState(n),i=n||e;return Ae.useEffect(()=>{e==null&&(h0+=1,t(`mui-${h0}`))},[e]),i}const d0={...Ae}.useId;function K2(n){if(d0!==void 0){const e=d0();return n??e}return Y2(n)}function Zl(n){const e=Ae.useRef(n);return k2(()=>{e.current=n}),Ae.useRef((...t)=>(0,e.current)(...t)).current}function f0(...n){return Ae.useMemo(()=>n.every(e=>e==null)?null:e=>{n.forEach(t=>{q2(t,e)})},n)}const p0={};function m0(n,e){const t=Ae.useRef(p0);return t.current===p0&&(t.current=n(e)),t}const Z2=[];function J2(n){Ae.useEffect(n,Z2)}class Pd{constructor(){Rt(this,"currentId",null);Rt(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});Rt(this,"disposeEffect",()=>this.clear)}static create(){return new Pd}start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}}function Q2(){const n=m0(Pd.create).current;return J2(n.disposeEffect),n}function g0(n){try{return n.matches(":focus-visible")}catch{process.env.NODE_ENV!=="production"&&!/jsdom/.test(window.navigator.userAgent)&&console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.","Some components rely on this feature to work properly."].join(`
`))}return!1}function Jl(n,e,t=void 0){const i={};for(const r in n){const s=n[r];let o="",a=!0;for(let l=0;l<s.length;l+=1){const c=s[l];c&&(o+=(a===!0?"":" ")+e(c),a=!1,t&&t[c]&&(o+=" "+t[c]))}i[r]=o}return i}const eI=Ae.createContext(void 0);process.env.NODE_ENV!=="production"&&(X.node,X.object);function tI(n){const{theme:e,name:t,props:i}=n;if(!e||!e.components||!e.components[t])return i;const r=e.components[t];return r.defaultProps?Wo(r.defaultProps,i):!r.styleOverrides&&!r.variants?Wo(r,i):i}function nI({props:n,name:e}){const t=Ae.useContext(eI);return tI({props:n,name:e,theme:{components:t}})}const _0={theme:void 0};function iI(n){let e,t;return function(r){let s=e;return(s===void 0||r.theme!==t)&&(_0.theme=r.theme,s=r0(n(_0)),e=s,t=r.theme),s}}function rI(n=""){function e(...i){if(!i.length)return"";const r=i[0];return typeof r=="string"&&!r.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${n?`${n}-`:""}${r}${e(...i.slice(1))})`:`, ${r}`}return(i,...r)=>`var(--${n?`${n}-`:""}${i}${e(...r)})`}const v0=(n,e,t,i=[])=>{let r=n;e.forEach((s,o)=>{o===e.length-1?Array.isArray(r)?r[Number(s)]=t:r&&typeof r=="object"&&(r[s]=t):r&&typeof r=="object"&&(r[s]||(r[s]=i.includes(s)?[]:{}),r=r[s])})},sI=(n,e,t)=>{function i(r,s=[],o=[]){Object.entries(r).forEach(([a,l])=>{(!t||t&&!t([...s,a]))&&l!=null&&(typeof l=="object"&&Object.keys(l).length>0?i(l,[...s,a],Array.isArray(l)?[...o,a]:o):e([...s,a],l,o))})}i(n)},oI=(n,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(i=>n.includes(i))||n[n.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function Id(n,e){const{prefix:t,shouldSkipGeneratingVar:i}=e||{},r={},s={},o={};return sI(n,(a,l,c)=>{if((typeof l=="string"||typeof l=="number")&&(!i||!i(a,l))){const u=`--${t?`${t}-`:""}${a.join("-")}`,h=oI(a,l);Object.assign(r,{[u]:h}),v0(s,a,`var(${u})`,c),v0(o,a,`var(${u}, ${h})`,c)}},a=>a[0]==="vars"),{css:r,vars:s,varsWithDefaults:o}}function aI(n,e={}){const{getSelector:t=p,disableCssColorScheme:i,colorSchemeSelector:r}=e,{colorSchemes:s={},components:o,defaultColorScheme:a="light",...l}=n,{vars:c,css:u,varsWithDefaults:h}=Id(l,e);let d=h;const f={},{[a]:g,...m}=s;if(Object.entries(m||{}).forEach(([y,M])=>{const{vars:w,css:P,varsWithDefaults:A}=Id(M,e);d=_n(d,A),f[y]={css:P,vars:w}}),g){const{css:y,vars:M,varsWithDefaults:w}=Id(g,e);d=_n(d,w),f[a]={css:y,vars:M}}function p(y,M){var P,A;let w=r;if(r==="class"&&(w=".%s"),r==="data"&&(w="[data-%s]"),r!=null&&r.startsWith("data-")&&!r.includes("%s")&&(w=`[${r}="%s"]`),y){if(w==="media")return n.defaultColorScheme===y?":root":{[`@media (prefers-color-scheme: ${((A=(P=s[y])==null?void 0:P.palette)==null?void 0:A.mode)||y})`]:{":root":M}};if(w)return n.defaultColorScheme===y?`:root, ${w.replace("%s",String(y))}`:w.replace("%s",String(y))}return":root"}return{vars:d,generateThemeVars:()=>{let y={...c};return Object.entries(f).forEach(([,{vars:M}])=>{y=_n(y,M)}),y},generateStyleSheets:()=>{var U,Y;const y=[],M=n.defaultColorScheme||"light";function w(v,S){Object.keys(S).length&&y.push(typeof v=="string"?{[v]:{...S}}:v)}w(t(void 0,{...u}),u);const{[M]:P,...A}=f;if(P){const{css:v}=P,S=(Y=(U=s[M])==null?void 0:U.palette)==null?void 0:Y.mode,B=!i&&S?{colorScheme:S,...v}:{...v};w(t(M,{...B}),B)}return Object.entries(A).forEach(([v,{css:S}])=>{var E,O;const B=(O=(E=s[v])==null?void 0:E.palette)==null?void 0:O.mode,T=!i&&B?{colorScheme:B,...S}:{...S};w(t(v,{...T}),T)}),y}}}function lI(n){return function(t){return n==="media"?(process.env.NODE_ENV!=="production"&&t!=="light"&&t!=="dark"&&console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`),`@media (prefers-color-scheme: ${t})`):n?n.startsWith("data-")&&!n.includes("%s")?`[${n}="${t}"] &`:n==="class"?`.${t} &`:n==="data"?`[data-${t}] &`:`${n.replace("%s",t)} &`:"&"}}const cI=$l(),uI=U2("div",{name:"MuiStack",slot:"Root",overridesResolver:(n,e)=>e.root});function hI(n){return B2({props:n,name:"MuiStack",defaultTheme:cI})}function dI(n,e){const t=Ae.Children.toArray(n).filter(Boolean);return t.reduce((i,r,s)=>(i.push(r),s<t.length-1&&i.push(Ae.cloneElement(e,{key:`separator-${s}`})),i),[])}const fI=n=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[n],pI=({ownerState:n,theme:e})=>{let t={display:"flex",flexDirection:"column",...ei({theme:e},bd({values:n.direction,breakpoints:e.breakpoints.values}),i=>({flexDirection:i}))};if(n.spacing){const i=kl(e),r=Object.keys(e.breakpoints.values).reduce((l,c)=>((typeof n.spacing=="object"&&n.spacing[c]!=null||typeof n.direction=="object"&&n.direction[c]!=null)&&(l[c]=!0),l),{}),s=bd({values:n.direction,base:r}),o=bd({values:n.spacing,base:r});typeof s=="object"&&Object.keys(s).forEach((l,c,u)=>{if(!s[l]){const d=c>0?s[u[c-1]]:"column";s[l]=d}}),t=_n(t,ei({theme:e},o,(l,c)=>n.useFlexGap?{gap:Nr(i,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${fI(c?s[c]:n.direction)}`]:Nr(i,l)}}))}return t=IP(e.breakpoints,t),t};function mI(n={}){const{createStyledComponent:e=uI,useThemeProps:t=hI,componentName:i="MuiStack"}=n,r=()=>Jl({root:["root"]},l=>Ds(i,l),{}),s=e(pI),o=Ae.forwardRef(function(l,c){const u=t(l),h=T2(u),{component:d="div",direction:f="column",spacing:g=0,divider:m,children:p,className:_,useFlexGap:b=!1,...y}=h,M={direction:f,spacing:g,useFlexGap:b},w=r();return Ye.jsx(s,{as:d,ownerState:M,ref:c,className:xn(w.root,_),...y,children:m?dI(p,m):p})});return process.env.NODE_ENV!=="production"&&(o.propTypes={children:X.node,direction:X.oneOfType([X.oneOf(["column-reverse","column","row-reverse","row"]),X.arrayOf(X.oneOf(["column-reverse","column","row-reverse","row"])),X.object]),divider:X.node,spacing:X.oneOfType([X.arrayOf(X.oneOfType([X.number,X.string])),X.number,X.object,X.string]),sx:X.oneOfType([X.arrayOf(X.oneOfType([X.func,X.object,X.bool])),X.func,X.object])}),o}const Ld=mI();process.env.NODE_ENV!=="production"&&(Ld.propTypes={children:X.node,component:X.elementType,direction:X.oneOfType([X.oneOf(["column-reverse","column","row-reverse","row"]),X.arrayOf(X.oneOf(["column-reverse","column","row-reverse","row"])),X.object]),divider:X.node,spacing:X.oneOfType([X.arrayOf(X.oneOfType([X.number,X.string])),X.number,X.object,X.string]),sx:X.oneOfType([X.arrayOf(X.oneOfType([X.func,X.object,X.bool])),X.func,X.object]),useFlexGap:X.bool});var y0={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(fv,function(){function t(T,E,O){for(var R,F=0,k=E.length;F<k;F++)!R&&F in E||(R||(R=Array.prototype.slice.call(E,0,F)),R[F]=E[F]);return T.concat(R||Array.prototype.slice.call(E))}var i=Object.freeze({__proto__:null,blackman:function(T){for(var E=new Float32Array(T),O=2*Math.PI/(T-1),R=2*O,F=0;F<T/2;F++)E[F]=.42-.5*Math.cos(F*O)+.08*Math.cos(F*R);for(F=Math.ceil(T/2);F>0;F--)E[T-F]=E[F-1];return E},hamming:function(T){for(var E=new Float32Array(T),O=0;O<T;O++)E[O]=.54-.46*Math.cos(2*Math.PI*(O/T-1));return E},hanning:function(T){for(var E=new Float32Array(T),O=0;O<T;O++)E[O]=.5-.5*Math.cos(2*Math.PI*O/(T-1));return E},sine:function(T){for(var E=Math.PI/(T-1),O=new Float32Array(T),R=0;R<T;R++)O[R]=Math.sin(E*R);return O}}),r={};function s(T){for(;T%2==0&&T>1;)T/=2;return T===1}function o(T,E){if(E!=="rect"){if(E!==""&&E||(E="hanning"),r[E]||(r[E]={}),!r[E][T.length])try{r[E][T.length]=i[E](T.length)}catch{throw new Error("Invalid windowing function")}T=function(O,R){for(var F=[],k=0;k<Math.min(O.length,R.length);k++)F[k]=O[k]*R[k];return F}(T,r[E][T.length])}return T}function a(T,E,O){for(var R=new Float32Array(T),F=0;F<R.length;F++)R[F]=F*E/O,R[F]=13*Math.atan(R[F]/1315.8)+3.5*Math.atan(Math.pow(R[F]/7518,2));return R}function l(T){return Float32Array.from(T)}function c(T){return 1125*Math.log(1+T/700)}function u(T,E,O){for(var R,F=new Float32Array(T+2),k=new Float32Array(T+2),J=E/2,L=c(0),V=(c(J)-L)/(T+1),K=new Array(T+2),ee=0;ee<F.length;ee++)F[ee]=ee*V,k[ee]=(R=F[ee],700*(Math.exp(R/1125)-1)),K[ee]=Math.floor((O+1)*k[ee]/E);for(var G=new Array(T),$=0;$<G.length;$++){for(G[$]=new Array(O/2+1).fill(0),ee=K[$];ee<K[$+1];ee++)G[$][ee]=(ee-K[$])/(K[$+1]-K[$]);for(ee=K[$+1];ee<K[$+2];ee++)G[$][ee]=(K[$+2]-ee)/(K[$+2]-K[$+1])}return G}function h(T,E,O,R,F,k,J){R===void 0&&(R=5),F===void 0&&(F=2),k===void 0&&(k=!0),J===void 0&&(J=440);var L=Math.floor(O/2)+1,V=new Array(O).fill(0).map(function(ue,Se){return T*function(re,z){return Math.log2(16*re/z)}(E*Se/O,J)});V[0]=V[1]-1.5*T;var K,ee,G,$=V.slice(1).map(function(ue,Se){return Math.max(ue-V[Se])},1).concat([1]),se=Math.round(T/2),ie=new Array(T).fill(0).map(function(ue,Se){return V.map(function(re){return(10*T+se+re-Se)%T-se})}),ae=ie.map(function(ue,Se){return ue.map(function(re,z){return Math.exp(-.5*Math.pow(2*ie[Se][z]/$[z],2))})});if(ee=(K=ae)[0].map(function(){return 0}),G=K.reduce(function(ue,Se){return Se.forEach(function(re,z){ue[z]+=Math.pow(re,2)}),ue},ee).map(Math.sqrt),ae=K.map(function(ue,Se){return ue.map(function(re,z){return re/(G[z]||1)})}),F){var de=V.map(function(ue){return Math.exp(-.5*Math.pow((ue/T-R)/F,2))});ae=ae.map(function(ue){return ue.map(function(Se,re){return Se*de[re]})})}return k&&(ae=t(t([],ae.slice(3),!0),ae.slice(0,3))),ae.map(function(ue){return ue.slice(0,L)})}function d(T,E){for(var O=0,R=0,F=0;F<E.length;F++)O+=Math.pow(F,T)*Math.abs(E[F]),R+=E[F];return O/R}function f(T){var E=T.ampSpectrum,O=T.barkScale,R=T.numberOfBarkBands,F=R===void 0?24:R;if(typeof E!="object"||typeof O!="object")throw new TypeError;var k=F,J=new Float32Array(k),L=0,V=E,K=new Int32Array(k+1);K[0]=0;for(var ee=O[V.length-1]/k,G=1,$=0;$<V.length;$++)for(;O[$]>ee;)K[G++]=$,ee=G*O[V.length-1]/k;for(K[k]=V.length-1,$=0;$<k;$++){for(var se=0,ie=K[$];ie<K[$+1];ie++)se+=V[ie];J[$]=Math.pow(se,.23)}for($=0;$<J.length;$++)L+=J[$];return{specific:J,total:L}}function g(T){var E=T.ampSpectrum;if(typeof E!="object")throw new TypeError;for(var O=new Float32Array(E.length),R=0;R<O.length;R++)O[R]=Math.pow(E[R],2);return O}function m(T){var E=T.ampSpectrum,O=T.melFilterBank,R=T.bufferSize;if(typeof E!="object")throw new TypeError("Valid ampSpectrum is required to generate melBands");if(typeof O!="object")throw new TypeError("Valid melFilterBank is required to generate melBands");for(var F=g({ampSpectrum:E}),k=O.length,J=Array(k),L=new Float32Array(k),V=0;V<L.length;V++){J[V]=new Float32Array(R/2),L[V]=0;for(var K=0;K<R/2;K++)J[V][K]=O[V][K]*F[K],L[V]+=J[V][K];L[V]=Math.log(L[V]+1)}return Array.prototype.slice.call(L)}function p(T){return T&&T.__esModule&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T}var _=null,b=p(function(T,E){var O=T.length;return E=E||2,_&&_[O]||function(R){(_=_||{})[R]=new Array(R*R);for(var F=Math.PI/R,k=0;k<R;k++)for(var J=0;J<R;J++)_[R][J+k*R]=Math.cos(F*(J+.5)*k)}(O),T.map(function(){return 0}).map(function(R,F){return E*T.reduce(function(k,J,L,V){return k+J*_[O][L+F*O]},0)})}),y=Object.freeze({__proto__:null,amplitudeSpectrum:function(T){return T.ampSpectrum},buffer:function(T){return T.signal},chroma:function(T){var E=T.ampSpectrum,O=T.chromaFilterBank;if(typeof E!="object")throw new TypeError("Valid ampSpectrum is required to generate chroma");if(typeof O!="object")throw new TypeError("Valid chromaFilterBank is required to generate chroma");var R=O.map(function(k,J){return E.reduce(function(L,V,K){return L+V*k[K]},0)}),F=Math.max.apply(Math,R);return F?R.map(function(k){return k/F}):R},complexSpectrum:function(T){return T.complexSpectrum},energy:function(T){var E=T.signal;if(typeof E!="object")throw new TypeError;for(var O=0,R=0;R<E.length;R++)O+=Math.pow(Math.abs(E[R]),2);return O},loudness:f,melBands:m,mfcc:function(T){var E=T.ampSpectrum,O=T.melFilterBank,R=T.numberOfMFCCCoefficients,F=T.bufferSize,k=Math.min(40,Math.max(1,R||13));if(O.length<k)throw new Error("Insufficient filter bank for requested number of coefficients");var J=m({ampSpectrum:E,melFilterBank:O,bufferSize:F});return b(J).slice(0,k)},perceptualSharpness:function(T){for(var E=f({ampSpectrum:T.ampSpectrum,barkScale:T.barkScale}),O=E.specific,R=0,F=0;F<O.length;F++)R+=F<15?(F+1)*O[F+1]:.066*Math.exp(.171*(F+1));return R*=.11/E.total},perceptualSpread:function(T){for(var E=f({ampSpectrum:T.ampSpectrum,barkScale:T.barkScale}),O=0,R=0;R<E.specific.length;R++)E.specific[R]>O&&(O=E.specific[R]);return Math.pow((E.total-O)/E.total,2)},powerSpectrum:g,rms:function(T){var E=T.signal;if(typeof E!="object")throw new TypeError;for(var O=0,R=0;R<E.length;R++)O+=Math.pow(E[R],2);return O/=E.length,O=Math.sqrt(O)},spectralCentroid:function(T){var E=T.ampSpectrum;if(typeof E!="object")throw new TypeError;return d(1,E)},spectralCrest:function(T){var E=T.ampSpectrum;if(typeof E!="object")throw new TypeError;var O=0,R=-1/0;return E.forEach(function(F){O+=Math.pow(F,2),R=F>R?F:R}),O/=E.length,O=Math.sqrt(O),R/O},spectralFlatness:function(T){var E=T.ampSpectrum;if(typeof E!="object")throw new TypeError;for(var O=0,R=0,F=0;F<E.length;F++)O+=Math.log(E[F]),R+=E[F];return Math.exp(O/E.length)*E.length/R},spectralFlux:function(T){var E=T.signal,O=T.previousSignal,R=T.bufferSize;if(typeof E!="object"||typeof O!="object")throw new TypeError;for(var F=0,k=-R/2;k<E.length/2-1;k++)x=Math.abs(E[k])-Math.abs(O[k]),F+=(x+Math.abs(x))/2;return F},spectralKurtosis:function(T){var E=T.ampSpectrum;if(typeof E!="object")throw new TypeError;var O=E,R=d(1,O),F=d(2,O),k=d(3,O),J=d(4,O);return(-3*Math.pow(R,4)+6*R*F-4*R*k+J)/Math.pow(Math.sqrt(F-Math.pow(R,2)),4)},spectralRolloff:function(T){var E=T.ampSpectrum,O=T.sampleRate;if(typeof E!="object")throw new TypeError;for(var R=E,F=O/(2*(R.length-1)),k=0,J=0;J<R.length;J++)k+=R[J];for(var L=.99*k,V=R.length-1;k>L&&V>=0;)k-=R[V],--V;return(V+1)*F},spectralSkewness:function(T){var E=T.ampSpectrum;if(typeof E!="object")throw new TypeError;var O=d(1,E),R=d(2,E),F=d(3,E);return(2*Math.pow(O,3)-3*O*R+F)/Math.pow(Math.sqrt(R-Math.pow(O,2)),3)},spectralSlope:function(T){var E=T.ampSpectrum,O=T.sampleRate,R=T.bufferSize;if(typeof E!="object")throw new TypeError;for(var F=0,k=0,J=new Float32Array(E.length),L=0,V=0,K=0;K<E.length;K++){F+=E[K];var ee=K*O/R;J[K]=ee,L+=ee*ee,k+=ee,V+=ee*E[K]}return(E.length*V-k*F)/(F*(L-Math.pow(k,2)))},spectralSpread:function(T){var E=T.ampSpectrum;if(typeof E!="object")throw new TypeError;return Math.sqrt(d(2,E)-Math.pow(d(1,E),2))},zcr:function(T){var E=T.signal;if(typeof E!="object")throw new TypeError;for(var O=0,R=1;R<E.length;R++)(E[R-1]>=0&&E[R]<0||E[R-1]<0&&E[R]>=0)&&O++;return O}});function M(T){if(Array.isArray(T)){for(var E=0,O=Array(T.length);E<T.length;E++)O[E]=T[E];return O}return Array.from(T)}var w={},P={},A={bitReverseArray:function(T){if(w[T]===void 0){for(var E=(T-1).toString(2).length,O="0".repeat(E),R={},F=0;F<T;F++){var k=F.toString(2);k=O.substr(k.length)+k,k=[].concat(M(k)).reverse().join(""),R[F]=parseInt(k,2)}w[T]=R}return w[T]},multiply:function(T,E){return{real:T.real*E.real-T.imag*E.imag,imag:T.real*E.imag+T.imag*E.real}},add:function(T,E){return{real:T.real+E.real,imag:T.imag+E.imag}},subtract:function(T,E){return{real:T.real-E.real,imag:T.imag-E.imag}},euler:function(T,E){var O=-2*Math.PI*T/E;return{real:Math.cos(O),imag:Math.sin(O)}},conj:function(T){return T.imag*=-1,T},constructComplexArray:function(T){var E={};E.real=T.real===void 0?T.slice():T.real.slice();var O=E.real.length;return P[O]===void 0&&(P[O]=Array.apply(null,Array(O)).map(Number.prototype.valueOf,0)),E.imag=P[O].slice(),E}},U=function(T){var E={};T.real===void 0||T.imag===void 0?E=A.constructComplexArray(T):(E.real=T.real.slice(),E.imag=T.imag.slice());var O=E.real.length,R=Math.log2(O);if(Math.round(R)!=R)throw new Error("Input size must be a power of 2.");if(E.real.length!=E.imag.length)throw new Error("Real and imaginary components must have the same length.");for(var F=A.bitReverseArray(O),k={real:[],imag:[]},J=0;J<O;J++)k.real[F[J]]=E.real[J],k.imag[F[J]]=E.imag[J];for(var L=0;L<O;L++)E.real[L]=k.real[L],E.imag[L]=k.imag[L];for(var V=1;V<=R;V++)for(var K=Math.pow(2,V),ee=0;ee<K/2;ee++)for(var G=A.euler(ee,K),$=0;$<O/K;$++){var se=K*$+ee,ie=K*$+ee+K/2,ae={real:E.real[se],imag:E.imag[se]},de={real:E.real[ie],imag:E.imag[ie]},ue=A.multiply(G,de),Se=A.subtract(ae,ue);E.real[ie]=Se.real,E.imag[ie]=Se.imag;var re=A.add(ue,ae);E.real[se]=re.real,E.imag[se]=re.imag}return E},Y=U,v=function(){function T(E,O){var R=this;if(this._m=O,!E.audioContext)throw this._m.errors.noAC;if(E.bufferSize&&!s(E.bufferSize))throw this._m._errors.notPow2;if(!E.source)throw this._m._errors.noSource;this._m.audioContext=E.audioContext,this._m.bufferSize=E.bufferSize||this._m.bufferSize||256,this._m.hopSize=E.hopSize||this._m.hopSize||this._m.bufferSize,this._m.sampleRate=E.sampleRate||this._m.audioContext.sampleRate||44100,this._m.callback=E.callback,this._m.windowingFunction=E.windowingFunction||"hanning",this._m.featureExtractors=y,this._m.EXTRACTION_STARTED=E.startImmediately||!1,this._m.channel=typeof E.channel=="number"?E.channel:0,this._m.inputs=E.inputs||1,this._m.outputs=E.outputs||1,this._m.numberOfMFCCCoefficients=E.numberOfMFCCCoefficients||this._m.numberOfMFCCCoefficients||13,this._m.numberOfBarkBands=E.numberOfBarkBands||this._m.numberOfBarkBands||24,this._m.spn=this._m.audioContext.createScriptProcessor(this._m.bufferSize,this._m.inputs,this._m.outputs),this._m.spn.connect(this._m.audioContext.destination),this._m._featuresToExtract=E.featureExtractors||[],this._m.barkScale=a(this._m.bufferSize,this._m.sampleRate,this._m.bufferSize),this._m.melFilterBank=u(Math.max(this._m.melBands,this._m.numberOfMFCCCoefficients),this._m.sampleRate,this._m.bufferSize),this._m.inputData=null,this._m.previousInputData=null,this._m.frame=null,this._m.previousFrame=null,this.setSource(E.source),this._m.spn.onaudioprocess=function(F){var k;R._m.inputData!==null&&(R._m.previousInputData=R._m.inputData),R._m.inputData=F.inputBuffer.getChannelData(R._m.channel),R._m.previousInputData?((k=new Float32Array(R._m.previousInputData.length+R._m.inputData.length-R._m.hopSize)).set(R._m.previousInputData.slice(R._m.hopSize)),k.set(R._m.inputData,R._m.previousInputData.length-R._m.hopSize)):k=R._m.inputData;var J=function(L,V,K){if(L.length<V)throw new Error("Buffer is too short for frame length");if(K<1)throw new Error("Hop length cannot be less that 1");if(V<1)throw new Error("Frame length cannot be less that 1");var ee=1+Math.floor((L.length-V)/K);return new Array(ee).fill(0).map(function(G,$){return L.slice($*K,$*K+V)})}(k,R._m.bufferSize,R._m.hopSize);J.forEach(function(L){R._m.frame=L;var V=R._m.extract(R._m._featuresToExtract,R._m.frame,R._m.previousFrame);typeof R._m.callback=="function"&&R._m.EXTRACTION_STARTED&&R._m.callback(V),R._m.previousFrame=R._m.frame})}}return T.prototype.start=function(E){this._m._featuresToExtract=E||this._m._featuresToExtract,this._m.EXTRACTION_STARTED=!0},T.prototype.stop=function(){this._m.EXTRACTION_STARTED=!1},T.prototype.setSource=function(E){this._m.source&&this._m.source.disconnect(this._m.spn),this._m.source=E,this._m.source.connect(this._m.spn)},T.prototype.setChannel=function(E){E<=this._m.inputs?this._m.channel=E:console.error("Channel ".concat(E," does not exist. Make sure you've provided a value for 'inputs' that is greater than ").concat(E," when instantiating the MeydaAnalyzer"))},T.prototype.get=function(E){return this._m.inputData?this._m.extract(E||this._m._featuresToExtract,this._m.inputData,this._m.previousInputData):null},T}(),S={audioContext:null,spn:null,bufferSize:512,sampleRate:44100,melBands:26,chromaBands:12,callback:null,windowingFunction:"hanning",featureExtractors:y,EXTRACTION_STARTED:!1,numberOfMFCCCoefficients:13,numberOfBarkBands:24,_featuresToExtract:[],windowing:o,_errors:{notPow2:new Error("Meyda: Buffer size must be a power of 2, e.g. 64 or 512"),featureUndef:new Error("Meyda: No features defined."),invalidFeatureFmt:new Error("Meyda: Invalid feature format"),invalidInput:new Error("Meyda: Invalid input."),noAC:new Error("Meyda: No AudioContext specified."),noSource:new Error("Meyda: No source node specified.")},createMeydaAnalyzer:function(T){return new v(T,Object.assign({},S))},listAvailableFeatureExtractors:function(){return Object.keys(this.featureExtractors)},extract:function(T,E,O){var R=this;if(!E)throw this._errors.invalidInput;if(typeof E!="object")throw this._errors.invalidInput;if(!T)throw this._errors.featureUndef;if(!s(E.length))throw this._errors.notPow2;this.barkScale!==void 0&&this.barkScale.length==this.bufferSize||(this.barkScale=a(this.bufferSize,this.sampleRate,this.bufferSize)),this.melFilterBank!==void 0&&this.barkScale.length==this.bufferSize&&this.melFilterBank.length==this.melBands||(this.melFilterBank=u(Math.max(this.melBands,this.numberOfMFCCCoefficients),this.sampleRate,this.bufferSize)),this.chromaFilterBank!==void 0&&this.chromaFilterBank.length==this.chromaBands||(this.chromaFilterBank=h(this.chromaBands,this.sampleRate,this.bufferSize)),"buffer"in E&&E.buffer===void 0?this.signal=l(E):this.signal=E;var F=B(E,this.windowingFunction,this.bufferSize);if(this.signal=F.windowedSignal,this.complexSpectrum=F.complexSpectrum,this.ampSpectrum=F.ampSpectrum,O){var k=B(O,this.windowingFunction,this.bufferSize);this.previousSignal=k.windowedSignal,this.previousComplexSpectrum=k.complexSpectrum,this.previousAmpSpectrum=k.ampSpectrum}var J=function(L){return R.featureExtractors[L]({ampSpectrum:R.ampSpectrum,chromaFilterBank:R.chromaFilterBank,complexSpectrum:R.complexSpectrum,signal:R.signal,bufferSize:R.bufferSize,sampleRate:R.sampleRate,barkScale:R.barkScale,melFilterBank:R.melFilterBank,previousSignal:R.previousSignal,previousAmpSpectrum:R.previousAmpSpectrum,previousComplexSpectrum:R.previousComplexSpectrum,numberOfMFCCCoefficients:R.numberOfMFCCCoefficients,numberOfBarkBands:R.numberOfBarkBands})};if(typeof T=="object")return T.reduce(function(L,V){var K;return Object.assign({},L,((K={})[V]=J(V),K))},{});if(typeof T=="string")return J(T);throw this._errors.invalidFeatureFmt}},B=function(T,E,O){var R={};T.buffer===void 0?R.signal=l(T):R.signal=T,R.windowedSignal=o(R.signal,E),R.complexSpectrum=Y(R.windowedSignal),R.ampSpectrum=new Float32Array(O/2);for(var F=0;F<O/2;F++)R.ampSpectrum[F]=Math.sqrt(Math.pow(R.complexSpectrum.real[F],2)+Math.pow(R.complexSpectrum.imag[F],2));return R};return typeof window<"u"&&(window.Meyda=S),S})})(y0);var gI=y0.exports;const _I=xc(gI),Dd=(n,e)=>{const t=_I.createMeydaAnalyzer({audioContext:n.context,source:n,bufferSize:512,featureExtractors:["mfcc","rms","spectralCentroid","spectralFlatness","energy"],callback:i=>{const r=vI(i);e(r)}});return t.start(),console.log("Meyda initialized"),t};function vI(n){const{mfcc:e,rms:t,spectralCentroid:i}=n;return{AA:t&&e?Math.min(t*(e[0]||0),1):0,EE:e?Math.min(e[5]||0,1):0,IH:e?Math.min(e[3]||0,1):0,OH:e?Math.min(e[2]||0,1):0,OU:e?Math.min((e[0]+e[5])/2,1):0,W:i&&i>1500?1:0,UW:i&&i>1e3?1:0,TH:i&&i>2e3?1:0,T:i&&i>2500?1:0,SH:i&&i>5e3?1:0,S:i&&i>4e3?1:0,OW:e?Math.min((e[0]+e[5])/2,1):0,M:t&&e?Math.min(t*(e[0]||0),1):0,L:e?Math.min(e[2]||0,1):0,K:i&&i>3e3?1:0,IY:e?Math.min(e[4]||0,1):0,F:i&&i>6e3?1:0,ER:e?Math.min(e[1]||0,1):0,EH:e?Math.min(e[2]||0,1):0,TONGUE_UP_DOWN:e?Math.min(e[6]||0,1):0,TONGUE_IN_OUT:i&&i>1500?1:0,MOUTH_WIDE_NARROW:t&&t>.5?1:0,MOUTH_OPEN:t&&t>.3?1:0}}const yI=({name:n,value:e,min:t=-2,max:i=2,onChange:r})=>{const s=o=>{const a=parseFloat(o.target.value);r(n,a)};return Ye.jsxs("div",{children:[Ye.jsx("label",{htmlFor:n,children:n}),Ye.jsx("input",{type:"range",id:n,name:n,min:t,max:i,step:.01,value:e,onChange:s}),Ye.jsx("span",{children:e.toFixed(2)})]})},Xo={black:"#000",white:"#fff"},Os={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Us={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},Fs={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},Bs={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},ks={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},jo={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},xI={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},MI="$$material";function x0(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Xo.white,default:Xo.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const SI=x0();function M0(){return{text:{primary:Xo.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Xo.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const S0=M0();function b0(n,e,t,i){const r=i.light||i,s=i.dark||i*1.5;n[e]||(n.hasOwnProperty(t)?n[e]=n[t]:e==="light"?n.light=Cd(n.main,r):e==="dark"&&(n.dark=Rd(n.main,s)))}function bI(n="light"){return n==="dark"?{main:Fs[200],light:Fs[50],dark:Fs[400]}:{main:Fs[700],light:Fs[400],dark:Fs[800]}}function EI(n="light"){return n==="dark"?{main:Us[200],light:Us[50],dark:Us[400]}:{main:Us[500],light:Us[300],dark:Us[700]}}function TI(n="light"){return n==="dark"?{main:Os[500],light:Os[300],dark:Os[700]}:{main:Os[700],light:Os[400],dark:Os[800]}}function wI(n="light"){return n==="dark"?{main:Bs[400],light:Bs[300],dark:Bs[700]}:{main:Bs[700],light:Bs[500],dark:Bs[900]}}function AI(n="light"){return n==="dark"?{main:ks[400],light:ks[300],dark:ks[700]}:{main:ks[800],light:ks[500],dark:ks[900]}}function RI(n="light"){return n==="dark"?{main:jo[400],light:jo[300],dark:jo[700]}:{main:"#ed6c02",light:jo[500],dark:jo[900]}}function Nd(n){const{mode:e="light",contrastThreshold:t=3,tonalOffset:i=.2,...r}=n,s=n.primary||bI(e),o=n.secondary||EI(e),a=n.error||TI(e),l=n.info||wI(e),c=n.success||AI(e),u=n.warning||RI(e);function h(m){const p=c0(m,S0.text.primary)>=t?S0.text.primary:SI.text.primary;if(process.env.NODE_ENV!=="production"){const _=c0(m,p);_<3&&console.error([`MUI: The contrast ratio of ${_}:1 for ${p} on ${m}`,"falls below the WCAG recommended absolute minimum contrast ratio of 3:1.","https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`))}return p}const d=({color:m,name:p,mainShade:_=500,lightShade:b=300,darkShade:y=700})=>{if(m={...m},!m.main&&m[_]&&(m.main=m[_]),!m.hasOwnProperty("main"))throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${p?` (${p})`:""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${_}\` property.`:ir(11,p?` (${p})`:"",_));if(typeof m.main!="string")throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${p?` (${p})`:""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(m.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`:ir(12,p?` (${p})`:"",JSON.stringify(m.main)));return b0(m,"light",b,i),b0(m,"dark",y,i),m.contrastText||(m.contrastText=h(m.main)),m};let f;return e==="light"?f=x0():e==="dark"&&(f=M0()),process.env.NODE_ENV!=="production"&&(f||console.error(`MUI: The palette mode \`${e}\` is not supported.`)),_n({common:{...Xo},mode:e,primary:d({color:s,name:"primary"}),secondary:d({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:u,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:c,name:"success"}),grey:xI,contrastThreshold:t,getContrastText:h,augmentColor:d,tonalOffset:i,...f},r)}function CI(n){const e={};return Object.entries(n).forEach(i=>{const[r,s]=i;typeof s=="object"&&(e[r]=`${s.fontStyle?`${s.fontStyle} `:""}${s.fontVariant?`${s.fontVariant} `:""}${s.fontWeight?`${s.fontWeight} `:""}${s.fontStretch?`${s.fontStretch} `:""}${s.fontSize||""}${s.lineHeight?`/${s.lineHeight} `:""}${s.fontFamily||""}`)}),e}function PI(n,e){return{toolbar:{minHeight:56,[n.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[n.up("sm")]:{minHeight:64}},...e}}function II(n){return Math.round(n*1e5)/1e5}const E0={textTransform:"uppercase"},T0='"Roboto", "Helvetica", "Arial", sans-serif';function LI(n,e){const{fontFamily:t=T0,fontSize:i=14,fontWeightLight:r=300,fontWeightRegular:s=400,fontWeightMedium:o=500,fontWeightBold:a=700,htmlFontSize:l=16,allVariants:c,pxToRem:u,...h}=typeof e=="function"?e(n):e;process.env.NODE_ENV!=="production"&&(typeof i!="number"&&console.error("MUI: `fontSize` is required to be a number."),typeof l!="number"&&console.error("MUI: `htmlFontSize` is required to be a number."));const d=i/14,f=u||(p=>`${p/l*d}rem`),g=(p,_,b,y,M)=>({fontFamily:t,fontWeight:p,fontSize:f(_),lineHeight:b,...t===T0?{letterSpacing:`${II(y/_)}em`}:{},...M,...c}),m={h1:g(r,96,1.167,-1.5),h2:g(r,60,1.2,-.5),h3:g(s,48,1.167,0),h4:g(s,34,1.235,.25),h5:g(s,24,1.334,0),h6:g(o,20,1.6,.15),subtitle1:g(s,16,1.75,.15),subtitle2:g(o,14,1.57,.1),body1:g(s,16,1.5,.15),body2:g(s,14,1.43,.15),button:g(o,14,1.75,.4,E0),caption:g(s,12,1.66,.4),overline:g(s,12,2.66,1,E0),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return _n({htmlFontSize:l,pxToRem:f,fontFamily:t,fontSize:i,fontWeightLight:r,fontWeightRegular:s,fontWeightMedium:o,fontWeightBold:a,...m},h,{clone:!1})}const DI=.2,NI=.14,OI=.12;function At(...n){return[`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${DI})`,`${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${NI})`,`${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${OI})`].join(",")}const UI=["none",At(0,2,1,-1,0,1,1,0,0,1,3,0),At(0,3,1,-2,0,2,2,0,0,1,5,0),At(0,3,3,-2,0,3,4,0,0,1,8,0),At(0,2,4,-1,0,4,5,0,0,1,10,0),At(0,3,5,-1,0,5,8,0,0,1,14,0),At(0,3,5,-1,0,6,10,0,0,1,18,0),At(0,4,5,-2,0,7,10,1,0,2,16,1),At(0,5,5,-3,0,8,10,1,0,3,14,2),At(0,5,6,-3,0,9,12,1,0,3,16,2),At(0,6,6,-3,0,10,14,1,0,4,18,3),At(0,6,7,-4,0,11,15,1,0,4,20,3),At(0,7,8,-4,0,12,17,2,0,5,22,4),At(0,7,8,-4,0,13,19,2,0,5,24,4),At(0,7,9,-4,0,14,21,2,0,5,26,4),At(0,8,9,-5,0,15,22,2,0,6,28,5),At(0,8,10,-5,0,16,24,2,0,6,30,5),At(0,8,11,-5,0,17,26,2,0,6,32,5),At(0,9,11,-5,0,18,28,2,0,7,34,6),At(0,9,12,-6,0,19,29,2,0,7,36,6),At(0,10,13,-6,0,20,31,3,0,8,38,7),At(0,10,13,-6,0,21,33,3,0,8,40,7),At(0,10,14,-6,0,22,35,3,0,8,42,7),At(0,11,14,-7,0,23,36,3,0,9,44,8),At(0,11,15,-7,0,24,38,3,0,9,46,8)],FI={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},BI={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function w0(n){return`${Math.round(n)}ms`}function kI(n){if(!n)return 0;const e=n/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function VI(n){const e={...FI,...n.easing},t={...BI,...n.duration};return{getAutoHeightDuration:kI,create:(r=["all"],s={})=>{const{duration:o=t.standard,easing:a=e.easeInOut,delay:l=0,...c}=s;if(process.env.NODE_ENV!=="production"){const u=d=>typeof d=="string",h=d=>!Number.isNaN(parseFloat(d));!u(r)&&!Array.isArray(r)&&console.error('MUI: Argument "props" must be a string or Array.'),!h(o)&&!u(o)&&console.error(`MUI: Argument "duration" must be a number or a string but found ${o}.`),u(a)||console.error('MUI: Argument "easing" must be a string.'),!h(l)&&!u(l)&&console.error('MUI: Argument "delay" must be a number or a string.'),typeof s!="object"&&console.error(["MUI: Secong argument of transition.create must be an object.","Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)),Object.keys(c).length!==0&&console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`)}return(Array.isArray(r)?r:[r]).map(u=>`${u} ${typeof o=="string"?o:w0(o)} ${a} ${typeof l=="string"?l:w0(l)}`).join(",")},...n,easing:e,duration:t}}const zI={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function HI(n){return _i(n)||typeof n>"u"||typeof n=="string"||typeof n=="boolean"||typeof n=="number"||Array.isArray(n)}function A0(n={}){const e={...n};function t(i){const r=Object.entries(i);for(let s=0;s<r.length;s++){const[o,a]=r[s];!HI(a)||o.startsWith("unstable_")?delete i[o]:_i(a)&&(i[o]={...a},t(i[o]))}}return t(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function Od(n={},...e){const{breakpoints:t,mixins:i={},spacing:r,palette:s={},transitions:o={},typography:a={},shape:l,...c}=n;if(n.vars&&n.generateThemeVars===void 0)throw new Error(process.env.NODE_ENV!=="production"?"MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature.":ir(20));const u=Nd(s),h=$l(n);let d=_n(h,{mixins:PI(h.breakpoints,i),palette:u,shadows:UI.slice(),typography:LI(u,a),transitions:VI(o),zIndex:{...zI}});if(d=_n(d,c),d=e.reduce((f,g)=>_n(f,g),d),process.env.NODE_ENV!=="production"){const f=["active","checked","completed","disabled","error","expanded","focused","focusVisible","required","selected"],g=(m,p)=>{let _;for(_ in m){const b=m[_];if(f.includes(_)&&Object.keys(b).length>0){if(process.env.NODE_ENV!=="production"){const y=Ds("",_);console.error([`MUI: The \`${p}\` component increases the CSS specificity of the \`${_}\` internal state.`,"You can not override it like this: ",JSON.stringify(m,null,2),"",`Instead, you need to use the '&.${y}' syntax:`,JSON.stringify({root:{[`&.${y}`]:b}},null,2),"","https://mui.com/r/state-classes-guide"].join(`
`))}m[_]={}}}};Object.keys(d.components).forEach(m=>{const p=d.components[m].styleOverrides;p&&m.startsWith("Mui")&&g(p,m)})}return d.unstable_sxConfig={...Go,...c==null?void 0:c.unstable_sxConfig},d.unstable_sx=function(g){return Ls({sx:g,theme:this})},d.toRuntimeSource=A0,d}function GI(n){let e;return n<1?e=5.11916*n**2:e=4.5*Math.log(n+1)+2,Math.round(e*10)/1e3}const WI=[...Array(25)].map((n,e)=>{if(e===0)return"none";const t=GI(e);return`linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`});function R0(n){return{inputPlaceholder:n==="dark"?.5:.42,inputUnderline:n==="dark"?.7:.42,switchTrackDisabled:n==="dark"?.2:.12,switchTrack:n==="dark"?.3:.38}}function C0(n){return n==="dark"?WI:[]}function $I(n){const{palette:e={mode:"light"},opacity:t,overlays:i,...r}=n,s=Nd(e);return{palette:s,opacity:{...R0(s.mode),...t},overlays:i||C0(s.mode),...r}}function XI(n){var e;return!!n[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!n[0].match(/sxConfig$/)||n[0]==="palette"&&!!((e=n[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const jI=n=>[...[...Array(25)].map((e,t)=>`--${n?`${n}-`:""}overlays-${t}`),`--${n?`${n}-`:""}palette-AppBar-darkBg`,`--${n?`${n}-`:""}palette-AppBar-darkColor`],qI=n=>(e,t)=>{const i=n.rootSelector||":root",r=n.colorSchemeSelector;let s=r;if(r==="class"&&(s=".%s"),r==="data"&&(s="[data-%s]"),r!=null&&r.startsWith("data-")&&!r.includes("%s")&&(s=`[${r}="%s"]`),n.defaultColorScheme===e){if(e==="dark"){const o={};return jI(n.cssVarPrefix).forEach(a=>{o[a]=t[a],delete t[a]}),s==="media"?{[i]:t,"@media (prefers-color-scheme: dark)":{[i]:o}}:s?{[s.replace("%s",e)]:o,[`${i}, ${s.replace("%s",e)}`]:t}:{[i]:{...t,...o}}}if(s&&s!=="media")return`${i}, ${s.replace("%s",String(e))}`}else if(e){if(s==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[i]:t}};if(s)return s.replace("%s",String(e))}return i};function YI(n,e){e.forEach(t=>{n[t]||(n[t]={})})}function ne(n,e,t){!n[e]&&t&&(n[e]=t)}function qo(n){return typeof n!="string"||!n.startsWith("hsl")?n:l0(n)}function Fi(n,e){`${e}Channel`in n||(n[`${e}Channel`]=$o(qo(n[e]),`MUI: Can't create \`palette.${e}Channel\` because \`palette.${e}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${e}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function KI(n){return typeof n=="number"?`${n}px`:typeof n=="string"||typeof n=="function"||Array.isArray(n)?n:"8px"}const vi=n=>{try{return n()}catch{}},ZI=(n="mui")=>rI(n);function Ud(n,e,t,i){if(!e)return;e=e===!0?{}:e;const r=i==="dark"?"dark":"light";if(!t){n[i]=$I({...e,palette:{mode:r,...e==null?void 0:e.palette}});return}const{palette:s,...o}=Od({...t,palette:{mode:r,...e==null?void 0:e.palette}});return n[i]={...e,palette:s,opacity:{...R0(r),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||C0(r)},o}function JI(n={},...e){const{colorSchemes:t={light:!0},defaultColorScheme:i,disableCssColorScheme:r=!1,cssVarPrefix:s="mui",shouldSkipGeneratingVar:o=XI,colorSchemeSelector:a=t.light&&t.dark?"media":void 0,rootSelector:l=":root",...c}=n,u=Object.keys(t)[0],h=i||(t.light&&u!=="light"?"light":u),d=ZI(s),{[h]:f,light:g,dark:m,...p}=t,_={...p};let b=f;if((h==="dark"&&!("dark"in t)||h==="light"&&!("light"in t))&&(b=!0),!b)throw new Error(process.env.NODE_ENV!=="production"?`MUI: The \`colorSchemes.${h}\` option is either missing or invalid.`:ir(21,h));const y=Ud(_,b,c,h);g&&!_.light&&Ud(_,g,void 0,"light"),m&&!_.dark&&Ud(_,m,void 0,"dark");let M={defaultColorScheme:h,...y,cssVarPrefix:s,colorSchemeSelector:a,rootSelector:l,getCssVar:d,colorSchemes:_,font:{...CI(y.typography),...y.font},spacing:KI(c.spacing)};Object.keys(M.colorSchemes).forEach(Y=>{const v=M.colorSchemes[Y].palette,S=B=>{const T=B.split("-"),E=T[1],O=T[2];return d(B,v[E][O])};if(v.mode==="light"&&(ne(v.common,"background","#fff"),ne(v.common,"onBackground","#000")),v.mode==="dark"&&(ne(v.common,"background","#000"),ne(v.common,"onBackground","#fff")),YI(v,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),v.mode==="light"){ne(v.Alert,"errorColor",Mt(v.error.light,.6)),ne(v.Alert,"infoColor",Mt(v.info.light,.6)),ne(v.Alert,"successColor",Mt(v.success.light,.6)),ne(v.Alert,"warningColor",Mt(v.warning.light,.6)),ne(v.Alert,"errorFilledBg",S("palette-error-main")),ne(v.Alert,"infoFilledBg",S("palette-info-main")),ne(v.Alert,"successFilledBg",S("palette-success-main")),ne(v.Alert,"warningFilledBg",S("palette-warning-main")),ne(v.Alert,"errorFilledColor",vi(()=>v.getContrastText(v.error.main))),ne(v.Alert,"infoFilledColor",vi(()=>v.getContrastText(v.info.main))),ne(v.Alert,"successFilledColor",vi(()=>v.getContrastText(v.success.main))),ne(v.Alert,"warningFilledColor",vi(()=>v.getContrastText(v.warning.main))),ne(v.Alert,"errorStandardBg",St(v.error.light,.9)),ne(v.Alert,"infoStandardBg",St(v.info.light,.9)),ne(v.Alert,"successStandardBg",St(v.success.light,.9)),ne(v.Alert,"warningStandardBg",St(v.warning.light,.9)),ne(v.Alert,"errorIconColor",S("palette-error-main")),ne(v.Alert,"infoIconColor",S("palette-info-main")),ne(v.Alert,"successIconColor",S("palette-success-main")),ne(v.Alert,"warningIconColor",S("palette-warning-main")),ne(v.AppBar,"defaultBg",S("palette-grey-100")),ne(v.Avatar,"defaultBg",S("palette-grey-400")),ne(v.Button,"inheritContainedBg",S("palette-grey-300")),ne(v.Button,"inheritContainedHoverBg",S("palette-grey-A100")),ne(v.Chip,"defaultBorder",S("palette-grey-400")),ne(v.Chip,"defaultAvatarColor",S("palette-grey-700")),ne(v.Chip,"defaultIconColor",S("palette-grey-700")),ne(v.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),ne(v.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),ne(v.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),ne(v.LinearProgress,"primaryBg",St(v.primary.main,.62)),ne(v.LinearProgress,"secondaryBg",St(v.secondary.main,.62)),ne(v.LinearProgress,"errorBg",St(v.error.main,.62)),ne(v.LinearProgress,"infoBg",St(v.info.main,.62)),ne(v.LinearProgress,"successBg",St(v.success.main,.62)),ne(v.LinearProgress,"warningBg",St(v.warning.main,.62)),ne(v.Skeleton,"bg",`rgba(${S("palette-text-primaryChannel")} / 0.11)`),ne(v.Slider,"primaryTrack",St(v.primary.main,.62)),ne(v.Slider,"secondaryTrack",St(v.secondary.main,.62)),ne(v.Slider,"errorTrack",St(v.error.main,.62)),ne(v.Slider,"infoTrack",St(v.info.main,.62)),ne(v.Slider,"successTrack",St(v.success.main,.62)),ne(v.Slider,"warningTrack",St(v.warning.main,.62));const B=Kl(v.background.default,.8);ne(v.SnackbarContent,"bg",B),ne(v.SnackbarContent,"color",vi(()=>v.getContrastText(B))),ne(v.SpeedDialAction,"fabHoverBg",Kl(v.background.paper,.15)),ne(v.StepConnector,"border",S("palette-grey-400")),ne(v.StepContent,"border",S("palette-grey-400")),ne(v.Switch,"defaultColor",S("palette-common-white")),ne(v.Switch,"defaultDisabledColor",S("palette-grey-100")),ne(v.Switch,"primaryDisabledColor",St(v.primary.main,.62)),ne(v.Switch,"secondaryDisabledColor",St(v.secondary.main,.62)),ne(v.Switch,"errorDisabledColor",St(v.error.main,.62)),ne(v.Switch,"infoDisabledColor",St(v.info.main,.62)),ne(v.Switch,"successDisabledColor",St(v.success.main,.62)),ne(v.Switch,"warningDisabledColor",St(v.warning.main,.62)),ne(v.TableCell,"border",St(Yl(v.divider,1),.88)),ne(v.Tooltip,"bg",Yl(v.grey[700],.92))}if(v.mode==="dark"){ne(v.Alert,"errorColor",St(v.error.light,.6)),ne(v.Alert,"infoColor",St(v.info.light,.6)),ne(v.Alert,"successColor",St(v.success.light,.6)),ne(v.Alert,"warningColor",St(v.warning.light,.6)),ne(v.Alert,"errorFilledBg",S("palette-error-dark")),ne(v.Alert,"infoFilledBg",S("palette-info-dark")),ne(v.Alert,"successFilledBg",S("palette-success-dark")),ne(v.Alert,"warningFilledBg",S("palette-warning-dark")),ne(v.Alert,"errorFilledColor",vi(()=>v.getContrastText(v.error.dark))),ne(v.Alert,"infoFilledColor",vi(()=>v.getContrastText(v.info.dark))),ne(v.Alert,"successFilledColor",vi(()=>v.getContrastText(v.success.dark))),ne(v.Alert,"warningFilledColor",vi(()=>v.getContrastText(v.warning.dark))),ne(v.Alert,"errorStandardBg",Mt(v.error.light,.9)),ne(v.Alert,"infoStandardBg",Mt(v.info.light,.9)),ne(v.Alert,"successStandardBg",Mt(v.success.light,.9)),ne(v.Alert,"warningStandardBg",Mt(v.warning.light,.9)),ne(v.Alert,"errorIconColor",S("palette-error-main")),ne(v.Alert,"infoIconColor",S("palette-info-main")),ne(v.Alert,"successIconColor",S("palette-success-main")),ne(v.Alert,"warningIconColor",S("palette-warning-main")),ne(v.AppBar,"defaultBg",S("palette-grey-900")),ne(v.AppBar,"darkBg",S("palette-background-paper")),ne(v.AppBar,"darkColor",S("palette-text-primary")),ne(v.Avatar,"defaultBg",S("palette-grey-600")),ne(v.Button,"inheritContainedBg",S("palette-grey-800")),ne(v.Button,"inheritContainedHoverBg",S("palette-grey-700")),ne(v.Chip,"defaultBorder",S("palette-grey-700")),ne(v.Chip,"defaultAvatarColor",S("palette-grey-300")),ne(v.Chip,"defaultIconColor",S("palette-grey-300")),ne(v.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),ne(v.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),ne(v.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),ne(v.LinearProgress,"primaryBg",Mt(v.primary.main,.5)),ne(v.LinearProgress,"secondaryBg",Mt(v.secondary.main,.5)),ne(v.LinearProgress,"errorBg",Mt(v.error.main,.5)),ne(v.LinearProgress,"infoBg",Mt(v.info.main,.5)),ne(v.LinearProgress,"successBg",Mt(v.success.main,.5)),ne(v.LinearProgress,"warningBg",Mt(v.warning.main,.5)),ne(v.Skeleton,"bg",`rgba(${S("palette-text-primaryChannel")} / 0.13)`),ne(v.Slider,"primaryTrack",Mt(v.primary.main,.5)),ne(v.Slider,"secondaryTrack",Mt(v.secondary.main,.5)),ne(v.Slider,"errorTrack",Mt(v.error.main,.5)),ne(v.Slider,"infoTrack",Mt(v.info.main,.5)),ne(v.Slider,"successTrack",Mt(v.success.main,.5)),ne(v.Slider,"warningTrack",Mt(v.warning.main,.5));const B=Kl(v.background.default,.98);ne(v.SnackbarContent,"bg",B),ne(v.SnackbarContent,"color",vi(()=>v.getContrastText(B))),ne(v.SpeedDialAction,"fabHoverBg",Kl(v.background.paper,.15)),ne(v.StepConnector,"border",S("palette-grey-600")),ne(v.StepContent,"border",S("palette-grey-600")),ne(v.Switch,"defaultColor",S("palette-grey-300")),ne(v.Switch,"defaultDisabledColor",S("palette-grey-600")),ne(v.Switch,"primaryDisabledColor",Mt(v.primary.main,.55)),ne(v.Switch,"secondaryDisabledColor",Mt(v.secondary.main,.55)),ne(v.Switch,"errorDisabledColor",Mt(v.error.main,.55)),ne(v.Switch,"infoDisabledColor",Mt(v.info.main,.55)),ne(v.Switch,"successDisabledColor",Mt(v.success.main,.55)),ne(v.Switch,"warningDisabledColor",Mt(v.warning.main,.55)),ne(v.TableCell,"border",Mt(Yl(v.divider,1),.68)),ne(v.Tooltip,"bg",Yl(v.grey[700],.92))}Fi(v.background,"default"),Fi(v.background,"paper"),Fi(v.common,"background"),Fi(v.common,"onBackground"),Fi(v,"divider"),Object.keys(v).forEach(B=>{const T=v[B];B!=="tonalOffset"&&T&&typeof T=="object"&&(T.main&&ne(v[B],"mainChannel",$o(qo(T.main))),T.light&&ne(v[B],"lightChannel",$o(qo(T.light))),T.dark&&ne(v[B],"darkChannel",$o(qo(T.dark))),T.contrastText&&ne(v[B],"contrastTextChannel",$o(qo(T.contrastText))),B==="text"&&(Fi(v[B],"primary"),Fi(v[B],"secondary")),B==="action"&&(T.active&&Fi(v[B],"active"),T.selected&&Fi(v[B],"selected")))})}),M=e.reduce((Y,v)=>_n(Y,v),M);const w={prefix:s,disableCssColorScheme:r,shouldSkipGeneratingVar:o,getSelector:qI(M)},{vars:P,generateThemeVars:A,generateStyleSheets:U}=aI(M,w);return M.vars=P,Object.entries(M.colorSchemes[M.defaultColorScheme]).forEach(([Y,v])=>{M[Y]=v}),M.generateThemeVars=A,M.generateStyleSheets=U,M.generateSpacing=function(){return Q_(c.spacing,kl(this))},M.getColorSchemeSelector=lI(a),M.spacing=M.generateSpacing(),M.shouldSkipGeneratingVar=o,M.unstable_sxConfig={...Go,...c==null?void 0:c.unstable_sxConfig},M.unstable_sx=function(v){return Ls({sx:v,theme:this})},M.toRuntimeSource=A0,M}function P0(n,e,t){n.colorSchemes&&t&&(n.colorSchemes[e]={...t!==!0&&t,palette:Nd({...t===!0?{}:t.palette,mode:e})})}function QI(n={},...e){const{palette:t,cssVariables:i=!1,colorSchemes:r=t?void 0:{light:!0},defaultColorScheme:s=t==null?void 0:t.mode,...o}=n,a=s||"light",l=r==null?void 0:r[a],c={...r,...t?{[a]:{...typeof l!="boolean"&&l,palette:t}}:void 0};if(i===!1){if(!("colorSchemes"in n))return Od(n,...e);let u=t;"palette"in n||c[a]&&(c[a]!==!0?u=c[a].palette:a==="dark"&&(u={mode:"dark"}));const h=Od({...n,palette:u},...e);return h.defaultColorScheme=a,h.colorSchemes=c,h.palette.mode==="light"&&(h.colorSchemes.light={...c.light!==!0&&c.light,palette:h.palette},P0(h,"dark",c.dark)),h.palette.mode==="dark"&&(h.colorSchemes.dark={...c.dark!==!0&&c.dark,palette:h.palette},P0(h,"light",c.light)),h}return!t&&!("light"in c)&&a==="light"&&(c.light=!0),JI({...o,colorSchemes:c,defaultColorScheme:a,...typeof i!="boolean"&&i},...e)}const eL=QI();function tL(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}const I0=n=>tL(n)&&n!=="classes",ti=o0({themeId:MI,defaultTheme:eL,rootShouldForwardProp:I0}),Fd=iI;process.env.NODE_ENV!=="production"&&(X.node,X.object.isRequired);function Ql(n){return nI(n)}function nL(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}function Bd(n,e){return Bd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},Bd(n,e)}function iL(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,Bd(n,e)}const L0=$e.createContext(null);function rL(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function kd(n,e){var t=function(s){return e&&$e.isValidElement(s)?e(s):s},i=Object.create(null);return n&&$e.Children.map(n,function(r){return r}).forEach(function(r){i[r.key]=t(r)}),i}function sL(n,e){n=n||{},e=e||{};function t(u){return u in e?e[u]:n[u]}var i=Object.create(null),r=[];for(var s in n)s in e?r.length&&(i[s]=r,r=[]):r.push(s);var o,a={};for(var l in e){if(i[l])for(o=0;o<i[l].length;o++){var c=i[l][o];a[i[l][o]]=t(c)}a[l]=t(l)}for(o=0;o<r.length;o++)a[r[o]]=t(r[o]);return a}function Or(n,e,t){return t[e]!=null?t[e]:n.props[e]}function oL(n,e){return kd(n.children,function(t){return $e.cloneElement(t,{onExited:e.bind(null,t),in:!0,appear:Or(t,"appear",n),enter:Or(t,"enter",n),exit:Or(t,"exit",n)})})}function aL(n,e,t){var i=kd(n.children),r=sL(e,i);return Object.keys(r).forEach(function(s){var o=r[s];if($e.isValidElement(o)){var a=s in e,l=s in i,c=e[s],u=$e.isValidElement(c)&&!c.props.in;l&&(!a||u)?r[s]=$e.cloneElement(o,{onExited:t.bind(null,o),in:!0,exit:Or(o,"exit",n),enter:Or(o,"enter",n)}):!l&&a&&!u?r[s]=$e.cloneElement(o,{in:!1}):l&&a&&$e.isValidElement(c)&&(r[s]=$e.cloneElement(o,{onExited:t.bind(null,o),in:c.props.in,exit:Or(o,"exit",n),enter:Or(o,"enter",n)}))}}),r}var lL=Object.values||function(n){return Object.keys(n).map(function(e){return n[e]})},cL={component:"div",childFactory:function(e){return e}},Vd=function(n){iL(e,n);function e(i,r){var s;s=n.call(this,i,r)||this;var o=s.handleExited.bind(rL(s));return s.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},s}var t=e.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(r,s){var o=s.children,a=s.handleExited,l=s.firstRender;return{children:l?oL(r,a):aL(r,o,a),firstRender:!1}},t.handleExited=function(r,s){var o=kd(this.props.children);r.key in o||(r.props.onExited&&r.props.onExited(s),this.mounted&&this.setState(function(a){var l=bl({},a.children);return delete l[r.key],{children:l}}))},t.render=function(){var r=this.props,s=r.component,o=r.childFactory,a=nL(r,["component","childFactory"]),l=this.state.contextValue,c=lL(this.state.children).map(o);return delete a.appear,delete a.enter,delete a.exit,s===null?$e.createElement(L0.Provider,{value:l},c):$e.createElement(L0.Provider,{value:l},$e.createElement(s,a,c))},e}($e.Component);Vd.propTypes=process.env.NODE_ENV!=="production"?{component:X.any,children:X.node,appear:X.bool,enter:X.bool,exit:X.bool,childFactory:X.func}:{},Vd.defaultProps=cL;class ec{constructor(){Rt(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new ec}static use(){const e=m0(ec.create).current,[t,i]=Ae.useState(!1);return e.shouldMount=t,e.setShouldMount=i,Ae.useEffect(e.mountEffect,[t]),e}mount(){return this.mounted||(this.mounted=hL(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.start(...e)})}stop(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.stop(...e)})}pulsate(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.pulsate(...e)})}}function uL(){return ec.use()}function hL(){let n,e;const t=new Promise((i,r)=>{n=i,e=r});return t.resolve=n,t.reject=e,t}function D0(n){const{className:e,classes:t,pulsate:i=!1,rippleX:r,rippleY:s,rippleSize:o,in:a,onExited:l,timeout:c}=n,[u,h]=Ae.useState(!1),d=xn(e,t.ripple,t.rippleVisible,i&&t.ripplePulsate),f={width:o,height:o,top:-(o/2)+s,left:-(o/2)+r},g=xn(t.child,u&&t.childLeaving,i&&t.childPulsate);return!a&&!u&&h(!0),Ae.useEffect(()=>{if(!a&&l!=null){const m=setTimeout(l,c);return()=>{clearTimeout(m)}}},[l,a,c]),Ye.jsx("span",{className:d,style:f,children:Ye.jsx("span",{className:g})})}process.env.NODE_ENV!=="production"&&(D0.propTypes={classes:X.object.isRequired,className:X.string,in:X.bool,onExited:X.func,pulsate:X.bool,rippleSize:X.number,rippleX:X.number,rippleY:X.number,timeout:X.number.isRequired});const Hn=Xl("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),zd=550,dL=80,fL=Vo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,pL=Vo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,mL=Vo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,gL=ti("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),_L=ti(D0,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${Hn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${fL};
    animation-duration: ${zd}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  &.${Hn.ripplePulsate} {
    animation-duration: ${({theme:n})=>n.transitions.duration.shorter}ms;
  }

  & .${Hn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Hn.childLeaving} {
    opacity: 0;
    animation-name: ${pL};
    animation-duration: ${zd}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  & .${Hn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${mL};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,N0=Ae.forwardRef(function(e,t){const i=Ql({props:e,name:"MuiTouchRipple"}),{center:r=!1,classes:s={},className:o,...a}=i,[l,c]=Ae.useState([]),u=Ae.useRef(0),h=Ae.useRef(null);Ae.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const d=Ae.useRef(!1),f=Q2(),g=Ae.useRef(null),m=Ae.useRef(null),p=Ae.useCallback(M=>{const{pulsate:w,rippleX:P,rippleY:A,rippleSize:U,cb:Y}=M;c(v=>[...v,Ye.jsx(_L,{classes:{ripple:xn(s.ripple,Hn.ripple),rippleVisible:xn(s.rippleVisible,Hn.rippleVisible),ripplePulsate:xn(s.ripplePulsate,Hn.ripplePulsate),child:xn(s.child,Hn.child),childLeaving:xn(s.childLeaving,Hn.childLeaving),childPulsate:xn(s.childPulsate,Hn.childPulsate)},timeout:zd,pulsate:w,rippleX:P,rippleY:A,rippleSize:U},u.current)]),u.current+=1,h.current=Y},[s]),_=Ae.useCallback((M={},w={},P=()=>{})=>{const{pulsate:A=!1,center:U=r||w.pulsate,fakeElement:Y=!1}=w;if((M==null?void 0:M.type)==="mousedown"&&d.current){d.current=!1;return}(M==null?void 0:M.type)==="touchstart"&&(d.current=!0);const v=Y?null:m.current,S=v?v.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,T,E;if(U||M===void 0||M.clientX===0&&M.clientY===0||!M.clientX&&!M.touches)B=Math.round(S.width/2),T=Math.round(S.height/2);else{const{clientX:O,clientY:R}=M.touches&&M.touches.length>0?M.touches[0]:M;B=Math.round(O-S.left),T=Math.round(R-S.top)}if(U)E=Math.sqrt((2*S.width**2+S.height**2)/3),E%2===0&&(E+=1);else{const O=Math.max(Math.abs((v?v.clientWidth:0)-B),B)*2+2,R=Math.max(Math.abs((v?v.clientHeight:0)-T),T)*2+2;E=Math.sqrt(O**2+R**2)}M!=null&&M.touches?g.current===null&&(g.current=()=>{p({pulsate:A,rippleX:B,rippleY:T,rippleSize:E,cb:P})},f.start(dL,()=>{g.current&&(g.current(),g.current=null)})):p({pulsate:A,rippleX:B,rippleY:T,rippleSize:E,cb:P})},[r,p,f]),b=Ae.useCallback(()=>{_({},{pulsate:!0})},[_]),y=Ae.useCallback((M,w)=>{if(f.clear(),(M==null?void 0:M.type)==="touchend"&&g.current){g.current(),g.current=null,f.start(0,()=>{y(M,w)});return}g.current=null,c(P=>P.length>0?P.slice(1):P),h.current=w},[f]);return Ae.useImperativeHandle(t,()=>({pulsate:b,start:_,stop:y}),[b,_,y]),Ye.jsx(gL,{className:xn(Hn.root,s.root,o),ref:m,...a,children:Ye.jsx(Vd,{component:null,exit:!0,children:l})})});process.env.NODE_ENV!=="production"&&(N0.propTypes={center:X.bool,classes:X.object,className:X.string});function vL(n){return Ds("MuiButtonBase",n)}const yL=Xl("MuiButtonBase",["root","disabled","focusVisible"]),xL=n=>{const{disabled:e,focusVisible:t,focusVisibleClassName:i,classes:r}=n,o=Jl({root:["root",e&&"disabled",t&&"focusVisible"]},vL,r);return t&&i&&(o.root+=` ${i}`),o},ML=ti("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${yL.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),O0=Ae.forwardRef(function(e,t){const i=Ql({props:e,name:"MuiButtonBase"}),{action:r,centerRipple:s=!1,children:o,className:a,component:l="button",disabled:c=!1,disableRipple:u=!1,disableTouchRipple:h=!1,focusRipple:d=!1,focusVisibleClassName:f,LinkComponent:g="a",onBlur:m,onClick:p,onContextMenu:_,onDragLeave:b,onFocus:y,onFocusVisible:M,onKeyDown:w,onKeyUp:P,onMouseDown:A,onMouseLeave:U,onMouseUp:Y,onTouchEnd:v,onTouchMove:S,onTouchStart:B,tabIndex:T=0,TouchRippleProps:E,touchRippleRef:O,type:R,...F}=i,k=Ae.useRef(null),J=uL(),L=f0(J.ref,O),[V,K]=Ae.useState(!1);c&&V&&K(!1),Ae.useImperativeHandle(r,()=>({focusVisible:()=>{K(!0),k.current.focus()}}),[]);const ee=J.shouldMount&&!u&&!c;Ae.useEffect(()=>{V&&d&&!u&&J.pulsate()},[u,d,V,J]);const G=Bi(J,"start",A,h),$=Bi(J,"stop",_,h),se=Bi(J,"stop",b,h),ie=Bi(J,"stop",Y,h),ae=Bi(J,"stop",H=>{V&&H.preventDefault(),U&&U(H)},h),de=Bi(J,"start",B,h),ue=Bi(J,"stop",v,h),Se=Bi(J,"stop",S,h),re=Bi(J,"stop",H=>{g0(H.target)||K(!1),m&&m(H)},!1),z=Zl(H=>{k.current||(k.current=H.currentTarget),g0(H.target)&&(K(!0),M&&M(H)),y&&y(H)}),Tt=()=>{const H=k.current;return l&&l!=="button"&&!(H.tagName==="A"&&H.href)},We=Zl(H=>{d&&!H.repeat&&V&&H.key===" "&&J.stop(H,()=>{J.start(H)}),H.target===H.currentTarget&&Tt()&&H.key===" "&&H.preventDefault(),w&&w(H),H.target===H.currentTarget&&Tt()&&H.key==="Enter"&&!c&&(H.preventDefault(),p&&p(H))}),Je=Zl(H=>{d&&H.key===" "&&V&&!H.defaultPrevented&&J.stop(H,()=>{J.pulsate(H)}),P&&P(H),p&&H.target===H.currentTarget&&Tt()&&H.key===" "&&!H.defaultPrevented&&p(H)});let Oe=l;Oe==="button"&&(F.href||F.to)&&(Oe=g);const rt={};Oe==="button"?(rt.type=R===void 0?"button":R,rt.disabled=c):(!F.href&&!F.to&&(rt.role="button"),c&&(rt["aria-disabled"]=c));const Fe=f0(t,k),D={...i,centerRipple:s,component:l,disabled:c,disableRipple:u,disableTouchRipple:h,focusRipple:d,tabIndex:T,focusVisible:V},C=xL(D);return Ye.jsxs(ML,{as:Oe,className:xn(C.root,a),ownerState:D,onBlur:re,onClick:p,onContextMenu:$,onFocus:z,onKeyDown:We,onKeyUp:Je,onMouseDown:G,onMouseLeave:ae,onMouseUp:ie,onDragLeave:se,onTouchEnd:ue,onTouchMove:Se,onTouchStart:de,ref:Fe,tabIndex:c?-1:T,type:R,...rt,...F,children:[o,ee?Ye.jsx(N0,{ref:L,center:s,...E}):null]})});function Bi(n,e,t,i=!1){return Zl(r=>(t&&t(r),i||n[e](r),!0))}process.env.NODE_ENV!=="production"&&(O0.propTypes={action:j2,centerRipple:X.bool,children:X.node,classes:X.object,className:X.string,component:X2,disabled:X.bool,disableRipple:X.bool,disableTouchRipple:X.bool,focusRipple:X.bool,focusVisibleClassName:X.string,href:X.any,LinkComponent:X.elementType,onBlur:X.func,onClick:X.func,onContextMenu:X.func,onDragLeave:X.func,onFocus:X.func,onFocusVisible:X.func,onKeyDown:X.func,onKeyUp:X.func,onMouseDown:X.func,onMouseLeave:X.func,onMouseUp:X.func,onTouchEnd:X.func,onTouchMove:X.func,onTouchStart:X.func,sx:X.oneOfType([X.arrayOf(X.oneOfType([X.func,X.object,X.bool])),X.func,X.object]),tabIndex:X.number,TouchRippleProps:X.object,touchRippleRef:X.oneOfType([X.func,X.shape({current:X.shape({pulsate:X.func.isRequired,start:X.func.isRequired,stop:X.func.isRequired})})]),type:X.oneOfType([X.oneOf(["button","reset","submit"]),X.string])});function SL(n){return typeof n.main=="string"}function bL(n,e=[]){if(!SL(n))return!1;for(const t of e)if(!n.hasOwnProperty(t)||typeof n[t]!="string")return!1;return!0}function U0(n=[]){return([,e])=>e&&bL(e,n)}function EL(n){return Ds("MuiCircularProgress",n)}Xl("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const or=44,Hd=Vo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,Gd=Vo`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,TL=typeof Hd!="string"?dd`
        animation: ${Hd} 1.4s linear infinite;
      `:null,wL=typeof Gd!="string"?dd`
        animation: ${Gd} 1.4s ease-in-out infinite;
      `:null,AL=n=>{const{classes:e,variant:t,color:i,disableShrink:r}=n,s={root:["root",t,`color${jt(i)}`],svg:["svg"],circle:["circle",`circle${jt(t)}`,r&&"circleDisableShrink"]};return Jl(s,EL,e)},RL=ti("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[t.variant],e[`color${jt(t.color)}`]]}})(Fd(({theme:n})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:n.transitions.create("transform")}},{props:{variant:"indeterminate"},style:TL||{animation:`${Hd} 1.4s linear infinite`}},...Object.entries(n.palette).filter(U0()).map(([e])=>({props:{color:e},style:{color:(n.vars||n).palette[e].main}}))]}))),CL=ti("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(n,e)=>e.svg})({display:"block"}),PL=ti("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.circle,e[`circle${jt(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})(Fd(({theme:n})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:n.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink,style:wL||{animation:`${Gd} 1.4s ease-in-out infinite`}}]}))),F0=Ae.forwardRef(function(e,t){const i=Ql({props:e,name:"MuiCircularProgress"}),{className:r,color:s="primary",disableShrink:o=!1,size:a=40,style:l,thickness:c=3.6,value:u=0,variant:h="indeterminate",...d}=i,f={...i,color:s,disableShrink:o,size:a,thickness:c,value:u,variant:h},g=AL(f),m={},p={},_={};if(h==="determinate"){const b=2*Math.PI*((or-c)/2);m.strokeDasharray=b.toFixed(3),_["aria-valuenow"]=Math.round(u),m.strokeDashoffset=`${((100-u)/100*b).toFixed(3)}px`,p.transform="rotate(-90deg)"}return Ye.jsx(RL,{className:xn(g.root,r),style:{width:a,height:a,...p,...l},ownerState:f,ref:t,role:"progressbar",..._,...d,children:Ye.jsx(CL,{className:g.svg,ownerState:f,viewBox:`${or/2} ${or/2} ${or} ${or}`,children:Ye.jsx(PL,{className:g.circle,style:m,ownerState:f,cx:or,cy:or,r:(or-c)/2,fill:"none",strokeWidth:c})})})});process.env.NODE_ENV!=="production"&&(F0.propTypes={classes:X.object,className:X.string,color:X.oneOfType([X.oneOf(["inherit","primary","secondary","error","info","success","warning"]),X.string]),disableShrink:u0(X.bool,n=>n.disableShrink&&n.variant&&n.variant!=="indeterminate"?new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect."):null),size:X.oneOfType([X.number,X.string]),style:X.object,sx:X.oneOfType([X.arrayOf(X.oneOfType([X.func,X.object,X.bool])),X.func,X.object]),thickness:X.number,value:X.number,variant:X.oneOf(["determinate","indeterminate"])});function IL(n){return Ds("MuiButton",n)}const Ur=Xl("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge","loading","loadingWrapper","loadingIconPlaceholder","loadingIndicator","loadingPositionCenter","loadingPositionStart","loadingPositionEnd"]),B0=Ae.createContext({});process.env.NODE_ENV!=="production"&&(B0.displayName="ButtonGroupContext");const k0=Ae.createContext(void 0);process.env.NODE_ENV!=="production"&&(k0.displayName="ButtonGroupButtonContext");const LL=n=>{const{color:e,disableElevation:t,fullWidth:i,size:r,variant:s,loading:o,loadingPosition:a,classes:l}=n,c={root:["root",o&&"loading",s,`${s}${jt(e)}`,`size${jt(r)}`,`${s}Size${jt(r)}`,`color${jt(e)}`,t&&"disableElevation",i&&"fullWidth",o&&`loadingPosition${jt(a)}`],startIcon:["icon","startIcon",`iconSize${jt(r)}`],endIcon:["icon","endIcon",`iconSize${jt(r)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]},u=Jl(c,IL,l);return{...l,...u}},V0=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],DL=ti(O0,{shouldForwardProp:n=>I0(n)||n==="classes",name:"MuiButton",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[t.variant],e[`${t.variant}${jt(t.color)}`],e[`size${jt(t.size)}`],e[`${t.variant}Size${jt(t.size)}`],t.color==="inherit"&&e.colorInherit,t.disableElevation&&e.disableElevation,t.fullWidth&&e.fullWidth,t.loading&&e.loading]}})(Fd(({theme:n})=>{const e=n.palette.mode==="light"?n.palette.grey[300]:n.palette.grey[800],t=n.palette.mode==="light"?n.palette.grey.A100:n.palette.grey[700];return{...n.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${Ur.disabled}`]:{color:(n.vars||n).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(n.vars||n).shadows[2],"&:hover":{boxShadow:(n.vars||n).shadows[4],"@media (hover: none)":{boxShadow:(n.vars||n).shadows[2]}},"&:active":{boxShadow:(n.vars||n).shadows[8]},[`&.${Ur.focusVisible}`]:{boxShadow:(n.vars||n).shadows[6]},[`&.${Ur.disabled}`]:{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${Ur.disabled}`]:{border:`1px solid ${(n.vars||n).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(n.palette).filter(U0()).map(([i])=>({props:{color:i},style:{"--variant-textColor":(n.vars||n).palette[i].main,"--variant-outlinedColor":(n.vars||n).palette[i].main,"--variant-outlinedBorder":n.vars?`rgba(${n.vars.palette[i].mainChannel} / 0.5)`:Ns(n.palette[i].main,.5),"--variant-containedColor":(n.vars||n).palette[i].contrastText,"--variant-containedBg":(n.vars||n).palette[i].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(n.vars||n).palette[i].dark,"--variant-textBg":n.vars?`rgba(${n.vars.palette[i].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:Ns(n.palette[i].main,n.palette.action.hoverOpacity),"--variant-outlinedBorder":(n.vars||n).palette[i].main,"--variant-outlinedBg":n.vars?`rgba(${n.vars.palette[i].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:Ns(n.palette[i].main,n.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":n.vars?n.vars.palette.Button.inheritContainedBg:e,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":n.vars?n.vars.palette.Button.inheritContainedHoverBg:t,"--variant-textBg":n.vars?`rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`:Ns(n.palette.text.primary,n.palette.action.hoverOpacity),"--variant-outlinedBg":n.vars?`rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`:Ns(n.palette.text.primary,n.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:n.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:n.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:n.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Ur.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Ur.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{loadingPosition:"center"},style:{transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),[`&.${Ur.loading}`]:{color:"transparent"}}}]}})),NL=ti("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.startIcon,t.loading&&e.startIconLoadingStart,e[`iconSize${jt(t.size)}`]]}})(({theme:n})=>({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},{props:{loadingPosition:"start",loading:!0},style:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"start",loading:!0,fullWidth:!0},style:{marginRight:-8}},...V0]})),OL=ti("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.endIcon,t.loading&&e.endIconLoadingEnd,e[`iconSize${jt(t.size)}`]]}})(({theme:n})=>({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},{props:{loadingPosition:"end",loading:!0},style:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"end",loading:!0,fullWidth:!0},style:{marginLeft:-8}},...V0]})),UL=ti("span",{name:"MuiButton",slot:"LoadingIndicator",overridesResolver:(n,e)=>e.loadingIndicator})(({theme:n})=>({display:"none",position:"absolute",visibility:"visible",variants:[{props:{loading:!0},style:{display:"flex"}},{props:{loadingPosition:"start"},style:{left:14}},{props:{loadingPosition:"start",size:"small"},style:{left:10}},{props:{variant:"text",loadingPosition:"start"},style:{left:6}},{props:{loadingPosition:"center"},style:{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled}},{props:{loadingPosition:"end"},style:{right:14}},{props:{loadingPosition:"end",size:"small"},style:{right:10}},{props:{variant:"text",loadingPosition:"end"},style:{right:6}},{props:{loadingPosition:"start",fullWidth:!0},style:{position:"relative",left:-10}},{props:{loadingPosition:"end",fullWidth:!0},style:{position:"relative",right:-10}}]})),z0=ti("span",{name:"MuiButton",slot:"LoadingIconPlaceholder",overridesResolver:(n,e)=>e.loadingIconPlaceholder})({display:"inline-block",width:"1em",height:"1em"}),H0=Ae.forwardRef(function(e,t){const i=Ae.useContext(B0),r=Ae.useContext(k0),s=Wo(i,e),o=Ql({props:s,name:"MuiButton"}),{children:a,color:l="primary",component:c="button",className:u,disabled:h=!1,disableElevation:d=!1,disableFocusRipple:f=!1,endIcon:g,focusVisibleClassName:m,fullWidth:p=!1,id:_,loading:b=null,loadingIndicator:y,loadingPosition:M="center",size:w="medium",startIcon:P,type:A,variant:U="text",...Y}=o,v=K2(_),S=y??Ye.jsx(F0,{"aria-labelledby":v,color:"inherit",size:16}),B={...o,color:l,component:c,disabled:h,disableElevation:d,disableFocusRipple:f,fullWidth:p,loading:b,loadingIndicator:S,loadingPosition:M,size:w,type:A,variant:U},T=LL(B),E=(P||b&&M==="start")&&Ye.jsx(NL,{className:T.startIcon,ownerState:B,children:P||Ye.jsx(z0,{className:T.loadingIconPlaceholder,ownerState:B})}),O=(g||b&&M==="end")&&Ye.jsx(OL,{className:T.endIcon,ownerState:B,children:g||Ye.jsx(z0,{className:T.loadingIconPlaceholder,ownerState:B})}),R=r||"",F=typeof b=="boolean"?Ye.jsx("span",{className:T.loadingWrapper,style:{display:"contents"},children:b&&Ye.jsx(UL,{className:T.loadingIndicator,ownerState:B,children:S})}):null;return Ye.jsxs(DL,{ownerState:B,className:xn(i.className,T.root,u,R),component:c,disabled:h||b,focusRipple:!f,focusVisibleClassName:xn(T.focusVisible,m),ref:t,type:A,id:b?v:_,...Y,classes:T,children:[E,M!=="end"&&F,a,M==="end"&&F,O]})});process.env.NODE_ENV!=="production"&&(H0.propTypes={children:X.node,classes:X.object,className:X.string,color:X.oneOfType([X.oneOf(["inherit","primary","secondary","success","error","info","warning"]),X.string]),component:X.elementType,disabled:X.bool,disableElevation:X.bool,disableFocusRipple:X.bool,disableRipple:X.bool,endIcon:X.node,focusVisibleClassName:X.string,fullWidth:X.bool,href:X.string,id:X.string,loading:X.bool,loadingIndicator:X.node,loadingPosition:X.oneOf(["center","end","start"]),size:X.oneOfType([X.oneOf(["small","medium","large"]),X.string]),startIcon:X.node,sx:X.oneOfType([X.arrayOf(X.oneOfType([X.func,X.object,X.bool])),X.func,X.object]),type:X.oneOfType([X.oneOf(["button","reset","submit"]),X.string]),variant:X.oneOfType([X.oneOf(["contained","outlined","text"]),X.string])});const FL=({controls:n,defaultValues:e={},onChange:t,analyserNode:i})=>{const[r,s]=$e.useState({});$e.useEffect(()=>{if(!i){console.log("No analyser node provided for MorphControls");return}const a={};Object.keys(n).forEach(c=>{a[c]=e[c]??0}),s(a);const l=Dd(i,c=>{const u={};for(const h of Object.keys(n)){const d=h.replace("eCTRLv","").toLocaleUpperCase(),f=c[d];ca(f)&&(u[h]=Math.max(0,f*.2))}s(h=>({...h,...u})),t(u)});return()=>{l.stop()}},[n,e,i]);const o=(a,l)=>{const c={...r,[a]:l};s(c),t(c)};return Ye.jsxs("div",{style:{maxHeight:"80vh",overflow:"auto"},children:["CONTROLS",Ye.jsx(H0,{onClick:()=>{const a={};Object.keys(n).forEach(l=>{a[l]=e[l]??0}),s(a),t(a)},children:"Reset"}),Object.entries(n).map(([a,{min:l=-2,max:c=2}])=>Ye.jsx(yI,{name:a,value:r[a]??0,min:l,max:c,onChange:o},a))]})},BL=({name:n,value:e})=>{const t=$e.useRef(null),[i,r]=$e.useState(0),[s,o]=$e.useState(1);return $e.useEffect(()=>{ua(e)||(e<i&&r(e),e>s&&o(e))},[e,i,s]),$e.useEffect(()=>{const a=t.current;if(a){const l=a.getContext("2d",{willReadFrequently:!0});if(l){const c=l.getImageData(1,0,a.width-1,a.height);l.putImageData(c,0,0),l.clearRect(a.width-1,0,1,a.height);const u=s-i||1,h=(e-i)/u,d=a.height-h*a.height;l.lineWidth=5,l.beginPath(),l.moveTo(a.width-2,d),l.lineTo(a.width-1,d),l.strokeStyle="green",l.stroke()}}},[e,i,s]),Ye.jsxs("div",{children:[Ye.jsx("h4",{children:n}),Ye.jsx("canvas",{ref:t,width:300,height:100}),Ye.jsxs("p",{children:["Min: ",i.toFixed(2)," | Max: ",s.toFixed(2)," | Current:"," ",e.toFixed(2)]})]})},kL=({analyserNode:n})=>{const[e,t]=$e.useState({});return $e.useEffect(()=>{if(!n)return;const i=Dd(n,r=>{t(r)});return()=>{i.stop()}},[n]),Ye.jsx("div",{style:{maxHeight:"80vh",overflow:"auto"},children:Object.entries(e).map(([i,r])=>Ye.jsx(BL,{name:i,value:r},i))})},VL={create:({ticksPerSecond:n=60,ticker:e=[],running:t=!0,signal:i,errorHandler:r=o=>{throw o},request:s=requestAnimationFrame})=>{const o=n!==void 0;n=o?n:60;const a=1/n*1e3,l=Array.isArray(e)?e:[e],c=new AbortController,u={lastTickMs:Date.now(),nextTickMs:Date.now(),tickCount:0,frameCount:0,costMs:0,rateLimit:o,tickStepMs:a,tickers:l,running:t,abort:!1,deltaMs:0,lastDeltaMs:0,abortController:c,destroy:()=>{u.abort=!0}},h=async()=>{const d=Date.now();if(u.costMs=0,!o||d>=u.nextTickMs){u.lastDeltaMs=u.deltaMs,u.deltaMs=d-u.lastTickMs,u.lastTickMs=d,u.nextTickMs=d+a;const f={...u};try{if(u.running){for(let g=0;g<l.length;g++){const m=l[g];await m(f)}u.tickCount++}}catch(g){r(g)}u.costMs=(Date.now()-d)*1e3}u.nextTickMs=u.nextTickMs-u.costMs,u.frameCount++,!(u.abort||u.abortController.signal.aborted||i!=null&&i.aborted)&&s(h)};return h(),u}},zL=({painter:n,width:e=1024,height:t=1024,title:i,style:r})=>{const s=$e.useRef(null);return $e.useEffect(()=>{const o=s.current;if(!o)return;o.width=e,o.height=t;const a=n?n(o):void 0;return()=>{ca(a)&&(a instanceof Promise&&a.then(l=>l==null?void 0:l()),typeof a=="function"&&a())}},[t,n,s,e,r]),Ye.jsx("canvas",{title:i,style:{...r},ref:s})},HL=$e.memo($e.forwardRef(({path:n,showControls:e,showPhonemes:t,analyserNode:i,canvasStyle:r,canvasWidth:s,canvasHeight:o,gltfCameraOptions:a,vrmCameraOptions:l,animationPath:c,...u},h)=>{const d=$e.useRef({humanoid:void 0}),[f,g]=$e.useState(!1);$e.useImperativeHandle(h,()=>({getHumanoid:()=>d.current.humanoid})),$e.useEffect(()=>{if(console.log("Setting up audio analysis"),!f){console.log("refusing to start audio analysis before model is loaded");return}if(!i){console.log("No analyser node provided for MorphControls");return}if(!d.current.humanoid){console.log("No humanoid found");return}const p=Dd(i,_=>{if(!d.current.humanoid){console.log("No humanoid found");return}d.current.humanoid.updatePhonemeLevels({analyserNode:i,phonemeLevels:_})});return console.log("starting meyda analyzer"),()=>{p.stop()}},[i,d.current,e,f,n]);const m=n.endsWith(".vrm")?"vrm":"gltf";return Ye.jsxs(Ld,{direction:"row",...u,children:[d.current.humanoid&&e&&Ye.jsx(Ld,{children:d.current.humanoid.gltfModel&&m==="gltf"&&Ye.jsx(FL,{analyserNode:i,controls:Object.fromEntries(d.current.humanoid.gltfModel.getMorphs().map(p=>[p,{min:-2,max:2}])),defaultValues:{},onChange:p=>{d.current.humanoid&&d.current.humanoid.gltfModel&&d.current.humanoid.gltfModel.morph(p)}})}),Ye.jsx(zL,{style:r,width:s,height:o,painter:async p=>{const _=m==="gltf"?await Jh.fromGltf({canvas:p,path:n,cameraOptions:a}):await Jh.fromVrm({canvas:p,vrmUrl:n,cameraOptions:l,idleAnimationUrl:c});console.log("humanoid",_),console.log("expressions:",_.getExpressions()),d.current.humanoid=_,console.log("humanoid ref",d.current.humanoid);const b=VL.create({ticker:y=>{_.updateTick({tick:y})}});return g(!0),()=>{console.log("disposing scene"),_.destroy(),b.destroy()}}},n),t&&Ye.jsx(kL,{analyserNode:i})]})}));ln.Avatar3d=HL,ln.Humanoids=Jh,Object.defineProperty(ln,Symbol.toStringTag,{value:"Module"})});
