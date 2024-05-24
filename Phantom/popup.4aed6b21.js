(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequire1d24;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequire1d24=a),a.register("eOkdY",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("3w1Ia",(function(t,n){e(t.exports,"default",(function(){return o}));var r=a("29o0l");function o(e){var t=(0,r.useRef)();return(0,r.useEffect)((function(){t.current=e})),t.current}})),a.register("c7Gq7",(function(e,t){e.exports=Promise.all([a("j1yuj")(a("2FqAO").getBundleURL("aNQ1Y")+a("eOkdY").resolve("fftpM")),a("j1yuj")(a("2FqAO").getBundleURL("aNQ1Y")+a("eOkdY").resolve("4EtWZ"))]).then((()=>a("izxKn")))})),a.register("j1yuj",(function(e,t){"use strict";var n=a("hE0rk");e.exports=n((function(e){return new Promise((function(t,n){var r=document.getElementsByTagName("script");if([].concat(r).some((function(t){return t.src===e})))t();else{var o=document.createElement("link");o.href=e,o.rel="preload",o.as="script",document.head.appendChild(o);var a=document.createElement("script");a.async=!0,a.type="text/javascript",a.src=e,a.onerror=function(t){var r=new TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(t.message));a.onerror=a.onload=null,a.remove(),n(r)},a.onload=function(){a.onerror=a.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(a)}}))}))})),a.register("hE0rk",(function(e,t){"use strict";var n={},r={},o={};e.exports=function(e,t){return function(a){var i=function(e){switch(e){case"preload":return r;case"prefetch":return o;default:return n}}(t);return i[a]?i[a]:i[a]=e.apply(null,arguments).catch((function(e){throw delete i[a],e}))}}})),a.register("2FqAO",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a.register("a9fRR",(function(e,t){e.exports=a("j1yuj")(a("2FqAO").getBundleURL("aNQ1Y")+a("eOkdY").resolve("1LD6V")).then((()=>a("aEspS")))})),a.register("43ULJ",(function(e,t){e.exports=a("j1yuj")(a("2FqAO").getBundleURL("aNQ1Y")+a("eOkdY").resolve("a65FD")).then((()=>a("1fvbV")))})),a.register("iOeB3",(function(e,t){e.exports=a("j1yuj")(a("2FqAO").getBundleURL("aNQ1Y")+a("eOkdY").resolve("6rb19")).then((()=>a("hxNzQ")))})),a.register("fwBWQ",(function(e,t){e.exports=a("j1yuj")(a("2FqAO").getBundleURL("aNQ1Y")+a("eOkdY").resolve("4teYO")).then((()=>a("lXzah")))})),a.register("3spqi",(function(e,t){e.exports=a("j1yuj")(a("2FqAO").getBundleURL("aNQ1Y")+a("eOkdY").resolve("2e7QY")).then((()=>a("iI3S3")))})),a.register("9CNaJ",(function(e,t){"use strict";var n=a("9MCQQ"),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function c(e){return n.isMemo(e)?i:l[e.$$typeof]||r}l[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[n.Memo]=i;var s=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(m){var a=p(n);a&&a!==m&&e(t,a,r)}var i=u(n);d&&(i=i.concat(d(n)));for(var l=c(t),h=c(n),g=0;g<i.length;++g){var b=i[g];if(!(o[b]||r&&r[b]||h&&h[b]||l&&l[b])){var y=f(n,b);try{s(t,b,y)}catch(e){}}}}return t}})),a.register("9MCQQ",(function(e,t){"use strict";e.exports=a("dJlAX")})),a.register("dJlAX",(function(t,n){
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,o,a,i,l,c,s,u,d,f,p,m,h,g,b,y,v,w,x,E,k,O,T,C,A,S,j,M;e(t.exports,"AsyncMode",(function(){return r}),(function(e){return r=e})),e(t.exports,"ConcurrentMode",(function(){return o}),(function(e){return o=e})),e(t.exports,"ContextConsumer",(function(){return a}),(function(e){return a=e})),e(t.exports,"ContextProvider",(function(){return i}),(function(e){return i=e})),e(t.exports,"Element",(function(){return l}),(function(e){return l=e})),e(t.exports,"ForwardRef",(function(){return c}),(function(e){return c=e})),e(t.exports,"Fragment",(function(){return s}),(function(e){return s=e})),e(t.exports,"Lazy",(function(){return u}),(function(e){return u=e})),e(t.exports,"Memo",(function(){return d}),(function(e){return d=e})),e(t.exports,"Portal",(function(){return f}),(function(e){return f=e})),e(t.exports,"Profiler",(function(){return p}),(function(e){return p=e})),e(t.exports,"StrictMode",(function(){return m}),(function(e){return m=e})),e(t.exports,"Suspense",(function(){return h}),(function(e){return h=e})),e(t.exports,"isAsyncMode",(function(){return g}),(function(e){return g=e})),e(t.exports,"isConcurrentMode",(function(){return b}),(function(e){return b=e})),e(t.exports,"isContextConsumer",(function(){return y}),(function(e){return y=e})),e(t.exports,"isContextProvider",(function(){return v}),(function(e){return v=e})),e(t.exports,"isElement",(function(){return w}),(function(e){return w=e})),e(t.exports,"isForwardRef",(function(){return x}),(function(e){return x=e})),e(t.exports,"isFragment",(function(){return E}),(function(e){return E=e})),e(t.exports,"isLazy",(function(){return k}),(function(e){return k=e})),e(t.exports,"isMemo",(function(){return O}),(function(e){return O=e})),e(t.exports,"isPortal",(function(){return T}),(function(e){return T=e})),e(t.exports,"isProfiler",(function(){return C}),(function(e){return C=e})),e(t.exports,"isStrictMode",(function(){return A}),(function(e){return A=e})),e(t.exports,"isSuspense",(function(){return S}),(function(e){return S=e})),e(t.exports,"isValidElementType",(function(){return j}),(function(e){return j=e})),e(t.exports,"typeOf",(function(){return M}),(function(e){return M=e}));var F="function"==typeof Symbol&&Symbol.for,P=F?Symbol.for("react.element"):60103,B=F?Symbol.for("react.portal"):60106,$=F?Symbol.for("react.fragment"):60107,N=F?Symbol.for("react.strict_mode"):60108,R=F?Symbol.for("react.profiler"):60114,L=F?Symbol.for("react.provider"):60109,q=F?Symbol.for("react.context"):60110,I=F?Symbol.for("react.async_mode"):60111,z=F?Symbol.for("react.concurrent_mode"):60111,D=F?Symbol.for("react.forward_ref"):60112,W=F?Symbol.for("react.suspense"):60113,V=F?Symbol.for("react.suspense_list"):60120,Y=F?Symbol.for("react.memo"):60115,Q=F?Symbol.for("react.lazy"):60116,H=F?Symbol.for("react.block"):60121,G=F?Symbol.for("react.fundamental"):60117,_=F?Symbol.for("react.responder"):60118,U=F?Symbol.for("react.scope"):60119;function X(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case P:switch(e=e.type){case I:case z:case $:case R:case N:case W:return e;default:switch(e=e&&e.$$typeof){case q:case D:case Q:case Y:case L:return e;default:return t}}case B:return t}}}function J(e){return X(e)===z}r=I,o=z,a=q,i=L,l=P,c=D,s=$,u=Q,d=Y,f=B,p=R,m=N,h=W,g=function(e){return J(e)||X(e)===I},b=J,y=function(e){return X(e)===q},v=function(e){return X(e)===L},w=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===P},x=function(e){return X(e)===D},E=function(e){return X(e)===$},k=function(e){return X(e)===Q},O=function(e){return X(e)===Y},T=function(e){return X(e)===B},C=function(e){return X(e)===R},A=function(e){return X(e)===N},S=function(e){return X(e)===W},j=function(e){return"string"==typeof e||"function"==typeof e||e===$||e===z||e===R||e===N||e===W||e===V||"object"==typeof e&&null!==e&&(e.$$typeof===Q||e.$$typeof===Y||e.$$typeof===L||e.$$typeof===q||e.$$typeof===D||e.$$typeof===G||e.$$typeof===_||e.$$typeof===U||e.$$typeof===H)},M=X})),a.register("bw7Ah",(function(n,r){e(n.exports,"PTrans",(function(){return s}),(function(e){return s=e}));var o=a("43063"),i=a("29o0l"),l=a("8Ub2g"),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const s=t(i).memo((e=>{const{children:n,i18nKey:r}=e,a=c(e,["children","i18nKey"]),{t:s}=(0,o.useTranslation)(),u=(0,i.useMemo)((()=>(r?`${s(r,Object.assign(Object.assign({},a),a.values))}`:"").replace(/<\/?[^>]+(>|$)/g,"")),[r,a,s]);return t(i).createElement(l.ErrorBoundary,{fallback:u},t(i).createElement(o.Trans,Object.assign({i18nKey:r},a),n))}))})),a("eOkdY").register(JSON.parse('{"aNQ1Y":"popup.4aed6b21.js","4EtWZ":"HomeTabPage.461b9d42.js","fftpM":"HomeTabPage.79898bcd.js","1LD6V":"CollectionsPage.ecb976b5.js","a65FD":"SwapTabPage.87a070f1.js","6rb19":"RecentActivity.23a9f43d.js","4teYO":"ExplorePage.48913488.js","2e7QY":"SwapSettingsButton.6a1f394d.js","9Dpy0":"notification.5cbd182e.css","XresW":"phishing.efc6493a.js","b0KbB":"metaplex.a7fe443c.js","8p21e":"metaplex.67571bb6.js","ulmHJ":"collectibles.f7823fac.js","a07i3":"staking.e599f575.js","fu8sn":"swapper.71addccc.js","iOvX2":"notification.484284f4.js","2QFLZ":"SettingsConnectHardware.02a3b3c4.js","eMU5D":"multichainMigration.8f2c9ae1.js","37uqY":"onboarding.22f830a0.js"}'));var i=a("29o0l"),l=a("3TM8f"),c=a("ljwNC");a("8gulk");var s=a("h0VH5"),u=a("csW2r"),d=a("7gANb"),f=a("9yJOd"),p=a("gkfw3"),m=a("8Ub2g"),h=a("e3YvV"),g=a("gYT35"),b=a("2onIY"),y=a("3ljHn"),v=a("43063"),w=(i=a("29o0l"),a("iQL9s")),x=(a("ljwNC"),a("c8OXT")),E=a("brWcm"),k=a("gX5Te"),O=a("cI6uH"),T=a("9aR5q"),C=a("lznD3"),A=a("twk6W"),S=a("gcdBN"),j=a("iOvk1"),M={};e(M,"useNetworkHealthQuery",(function(){return q}),(function(e){return q=e}));var F=a("5ekp2"),P={};e(P,"fetchNetworkHealth",(function(){return R}),(function(e){return R=e}));b=a("2onIY");var B=a("beWYh"),$=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const N=e=>`${(0,b.getAPIEnvironment)()}/solana/health/v1?locale=${e}`;function R(e){return $(this,void 0,void 0,(function*(){const t=yield B.rb.headers({Accept:"application/json"}).get(N(e));if(!(0,B.responseIsOkay)(t))throw new Error("Failed to retrieve Solana network health");return t.data}))}var L=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};function q(e,t){return(0,F.useQuery)({queryKey:["solana","health",{locale:e}],refetchInterval:15e4,enabled:t,queryFn(){return L(this,void 0,void 0,(function*(){return yield(0,P.fetchNetworkHealth)(e)}))}})}function I(e,t){const{data:n}=(0,M.useNetworkHealthQuery)(e,t);return t?n:void 0}v=a("43063");var z,D,W=a("RVqnc"),V=a("1fwzV"),Y=a("lz5BI"),Q=(i=a("29o0l"),p=a("gkfw3"),i=a("29o0l"),a("creZv"));(D=z||(z={})).NetworkHealth="network-health",D.Cluster="cluster",D.TestnetMode="testnet-mode";const H=(0,i.createContext)(null),G=()=>{const e=(0,i.useContext)(H);if(!e)throw new Error("Missing banner context. Make sure you're wrapping your component in a <BannerProvider />");return e},_=({children:e})=>{const n=[],[r,o]=(0,i.useReducer)(((e,t)=>{switch(t.type){case"create":return e.concat(t.payload);case"delete":return e.filter((({id:e})=>e!==t.payload.id));case"reset":return n;default:throw new Error("There was an error dispatching a banner action.")}}),n),a=e=>o({type:"delete",payload:{id:e.id}});return t(i).createElement(H.Provider,{value:{banners:r,createBanner:e=>{const{type:t,variant:n,message:r,dismissable:i=!0,icon:l,autohide:c=!0,delay:s=5e3,onClick:u}=e;t&&n&&r||console.error("You must supply a type, variant and message when creating a Banner.");const d=(0,Q.default)();return o({type:"create",payload:{id:d,type:t,variant:n,message:r,dismissable:i,icon:l,autohide:c,delay:s,onClick:u}}),c&&setTimeout((()=>{a({id:d})}),s),d},deleteBanner:a,resetBanners:()=>o({type:"reset"})}},e)};var U=a("jOE8F"),X=(k=a("gX5Te"),a("feAoQ")),J=a("dIAes"),K=a("60vo7"),Z=a("j81qC");const ee=p.default.button`
  cursor: ${e=>e.onClick?"pointer":"default"};
  display: flex;
  align-items: center;
  vertical-align: middle;
  overflow: visible;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
  width: 100%;
  padding: 10px 16px;

  svg {
    fill: #fff;
    margin-right: 8px;
  }
`,te=(0,p.default)(Y.motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>{switch(e.variant){case K.CTAVariant.Primary:return(0,W.hexToRGB)("#AB9FF2",.7);case K.CTAVariant.Success:return(0,W.hexToRGB)("#21E56F",.7);case K.CTAVariant.Warning:return(0,W.hexToRGB)("#E5A221",.7);case K.CTAVariant.Danger:return(0,W.hexToRGB)("#EB3742",.7);default:return(0,W.hexToRGB)("#E5A221",.7)}}};

  ${ee} {
    &:focus-visible {
      border-color: ${e=>{switch(e.variant){case K.CTAVariant.Primary:return(0,W.hexToRGB)("#AB9FF2",.7);case K.CTAVariant.Success:return(0,W.hexToRGB)("#21E56F",.7);case K.CTAVariant.Warning:return(0,W.hexToRGB)("#E5A221",.7);case K.CTAVariant.Danger:return(0,W.hexToRGB)("#EB3742",.7);default:return(0,W.hexToRGB)("#E5A221",.7)}}};
    }
  }
`,ne=p.default.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  text-align: left;

  svg {
    margin-right: 10px;
  }
`,re=p.default.button`
  cursor: pointer;
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  overflow: visible;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;

  &:focus,
  &:focus-visible {
    border-color: ${(0,W.hexToRGB)("#FFFFFF",.3)};
  }

  svg {
    fill: #ffffff;
    margin: 0;
  }
`,oe=(e,n,r)=>{const{banners:o,createBanner:a,deleteBanner:l}=G(),c=o[o.length-1],{handleShowModalVisibility:s}=(0,X.useModals)(),{showSettingsMenu:u}=(0,U.useSettingsMenu)(),{t:d,i18n:f}=(0,v.useTranslation)(),{cluster:p}=e(),m=k.hooks.useSelectedNetworks().some((e=>j.Chains.isSolanaNetworkID(e))),h=I(f.language,m),g=n(),b=r();(0,i.useEffect)((()=>{const e=o.find((e=>e.type===z.TestnetMode));e&&l({id:e.id}),b?a({type:z.TestnetMode,variant:K.CTAVariant.Warning,message:d("featureNotSupportedOnLocalNet"),dismissable:!1,autohide:!1,onClick:()=>u(void 0,t(i).createElement(J.MultiChainDeveloperSettings,null))}):g&&a({type:z.TestnetMode,variant:K.CTAVariant.Warning,message:d("connectionClusterTestnetMode"),dismissable:!1,autohide:!1,onClick:()=>u(void 0,t(i).createElement(J.MultiChainDeveloperSettings,null))})}),[b,g,d]),(0,i.useEffect)((()=>{if(!p)return;const e=o.find((e=>e.type===z.NetworkHealth));if("mainnet-beta"===p){if(h){const{bannerVariant:n,bannerMessage:r,notificationMessageTitle:o,notificationMessage:c}=h;!!n&&!!r?r!==(null==e?void 0:e.message)&&a({type:z.NetworkHealth,variant:n,message:r,dismissable:!1,icon:t(i).createElement(Z.IconExclamationMarkCircle,{width:14,height:14,circleFill:"#FFFFFF",exclamationFill:"transparent"}),autohide:!1,onClick:c&&o?()=>s("networkHealth",{variant:n,title:o,message:c}):void 0}):e&&l({id:e.id})}}else e&&l({id:e.id})}),[p,h]);const y=(0,i.useCallback)((()=>{c&&l({id:c.id})}),[l,c]);return{banner:c,dismissBanner:y}},ae=t(i).memo((e=>{const{banner:n,dismissBanner:r}=e;return t(i).createElement(V.AnimatePresence,null,n&&t(i).createElement(te,{key:"banner",role:"banner","aria-live":(null==n?void 0:n.autohide)?"assertive":"polite","aria-atomic":"true",variant:n.variant,initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{ease:"easeOut",duration:.2}},t(i).createElement(ee,{tabIndex:n.onClick?1:-1,onClick:n.onClick},n.icon,t(i).createElement(ne,null,n.message)),n.dismissable&&t(i).createElement(re,{onClick:r},t(i).createElement(Z.IconClose,{width:14,fill:"#FFFFFF"}))))})),ie=()=>{const e=oe(k.hooks.useSelectedSolanaConnection,k.hooks.useIsTestnetMode,k.hooks.useIsLocalnetMode);return t(i).createElement(ae,Object.assign({},e))},le=()=>t(i).createElement(ie,null);Z=a("j81qC");var ce=a("cleOt"),se=(u=a("csW2r"),a("4VuRl")),ue=(V=a("1fwzV"),Y=a("lz5BI"),i=a("29o0l"),w=a("iQL9s"),c=a("ljwNC"),a("3w1Ia")),de=(p=a("gkfw3"),a("i1NO2")),fe=(A=a("twk6W"),a("k1KLq")),pe=(Y=a("lz5BI"),a("70W8C"));i=a("29o0l");const me=(0,(p=a("gkfw3")).default)(Y.motion.div)`
  position: absolute;
  top: 0px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ab9ff2;
`,he=({refs:e,activeRoute:n,onFinishedAnimating:r,isAnimating:o})=>{const[{x:a,width:l},c]=(0,i.useState)({x:0,width:0}),s=(0,i.useCallback)((()=>{e&&e[n]&&e[n].current&&c({x:e[n].current.offsetLeft,width:e[n].current.getBoundingClientRect().width})}),[n,e]);return(0,i.useEffect)((()=>{s()}),[n,e,s]),(0,i.useEffect)((()=>{const e=t(pe)((()=>{s()}),500);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}})),t(i).createElement(me,{animate:{x:a,width:l},style:{opacity:o?1:0},onAnimationComplete:r,transition:{duration:.4,type:"spring"}})},ge=p.default.div`
  position: relative;
  height: ${60}px;
  display: flex;
`,be=(0,p.default)(Y.motion.div)`
  flex: 1;
  overflow-x: hidden;
  padding: ${({padding:e})=>"number"==typeof e?e:16}px;
`,ye=(0,p.default)(fe.Footer)`
  flex: 1;
  display: flex;
  justify-content: space-around;
  padding: 0px 10px;
`,ve=t(i).memo((({items:e})=>{const n=(0,w.useLocation)(),r=(0,ue.default)(n),[o,a]=(0,i.useState)(!1),l=(0,i.useMemo)((()=>e.find((e=>(0,c.matchPath)({path:`/${e.route}`,end:!0},n.pathname)))),[e,n.pathname]),s=l&&l.route,d=(0,i.useMemo)((()=>e.reduce(((e,t)=>(e[t.route]=(0,i.createRef)(),e)),{})),[e]),f=n.pathname!=(null==r?void 0:r.pathname)&&null!=(null==r?void 0:r.pathname),p=(0,i.useMemo)((()=>e.map((o=>{const a=t(i).memo((()=>{var a;let l=0;if(f){l=we(e,n.pathname,null!==(a=null==r?void 0:r.pathname)&&void 0!==a?a:"")?10:-10}return t(i).createElement(be,{id:"tab-content","data-testid":`tab-content-${o.route}`,initial:{x:l,opacity:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.1},padding:o.padding},t(i).createElement(de.DetailViewsProvider,{shouldResetOnAccountChange:!0},o.renderContent()))}));return t(i).createElement(c.Route,{key:o.route,path:`/${o.route}`,element:t(i).createElement(a,null)})}))),[e,n]),m=(0,i.useCallback)((e=>{a(!0),A.analytics.capture("tabPress",{data:{target:e}}),u.telemetry.addBreadcrumb(u.FeatureTag.Generic,`Tab changed to ${e}`,u.Severity.Info)}),[]);return t(i).createElement(t(i).Fragment,null,t(i).createElement(V.AnimatePresence,{mode:"wait",initial:!1},t(i).createElement(c.Routes,{location:n,key:n.pathname},p,t(i).createElement(c.Route,{key:"redirection",element:t(i).createElement(Y.motion.div,{exit:{opacity:0},transition:{duration:.1}},t(i).createElement(c.Navigate,{to:e[0]?e[0].route:"/"}))}))),t(i).createElement(ge,null,t(i).createElement(he,{refs:d,activeRoute:s,onFinishedAnimating:()=>a(!1),isAnimating:o}),t(i).createElement(ye,{role:"tablist","aria-orientation":"horizontal"},e.map((e=>t(i).createElement(ke,{isActive:s===e.route,key:e.route,item:e,ref:d[e.route],isAnimating:o,onClick:()=>m(e.route)}))))),t(i).createElement("div",{"aria-hidden":!0,"data-testid":"current-route","data-location":n.pathname}))}),((e,t)=>(0,se.dequal)(e.items.map((e=>e.route)),t.items.map((e=>e.route))))),we=(e,t,n)=>e.findIndex((e=>e.route===xe(t)))>e.findIndex((e=>e.route===xe(n))),xe=e=>"/"===e?e:e.replace(/^\/+/g,""),Ee=(0,p.default)(w.Link)`
  display: block;
  padding: 15px 0px;
  margin: 0px 12px;
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: white;
    svg {
      fill: white;

      path {
        fill: white;
      }
    }
  }
  :after {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    height: 2px;
    width: 100%;
    border-radius: 2px;
    ${e=>e.$isActive&&!e.$isAnimating&&"background-color: #AB9FF2;"}
    ${e=>e.$isAnimating&&"background-color: transparent;"}
  }
  svg {
    fill: #666;
    transition: fill 200ms ease;
    ${e=>e.$isActive&&"fill: white;"}

    path {
      ${e=>e.$isActive?"fill: white;":"fill: #666;"}
    }
  }
`,ke=(0,i.forwardRef)((({isActive:e,item:n,isAnimating:r,onClick:o},a)=>t(i).createElement(Ee,{"aria-label":n.label,"data-testid":`bottom-tab-nav-button-${n.route}`,$isActive:e,$isAnimating:r,to:n.route,ref:a,onClick:o},n.renderButton())));var Oe={};e(Oe,"WhatsNewOverlay",(function(){return Se}),(function(e){return Se=e}));v=a("43063"),i=a("29o0l"),w=a("iQL9s"),p=a("gkfw3"),T=a("9aR5q");var Te=a("hFkH3"),Ce=a("27SDj"),Ae=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const Se=({onClose:e})=>{const{t:n}=(0,v.useTranslation)(),r=(0,w.useNavigate)();return t(i).createElement(je,null,t(i).createElement(Fe,null,t(i).createElement(Ce.Text,{color:"#e2dffe",size:16,weight:600},n("whatsNewOverlayNew"))),t(i).createElement(Pe,null,n("whatsNewOverlayv3ActionBurnSpam")),t(i).createElement(Be,null,n("whatsNewOverlayv3SecondaryText")),t(i).createElement($e,{color:"#e2dffe",size:16,weight:500,onClick:()=>Ae(void 0,void 0,void 0,(function*(){e(),r(T.Path.Collectibles)}))},n("whatsNewOverlayv2ActionTryItNow")),t(i).createElement(Me,null),t(i).createElement(Ne,null,t(i).createElement(Re,{onClick:e})))},je=p.default.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
  padding: 20px;
`,Me=p.default.div`
  flex: 1;
`,Fe=p.default.div`
  margin-top: 40px;
  align-self: center;
  width: 76px;
  height: 35px;
  background-color: rgba(138, 129, 248, 0.1);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Pe=(0,p.default)(Ce.Text).attrs({size:28,weight:500})`
  align-self: center;
  margin-top: 22px;
  line-height: 34px;
  max-width: 275px;
  text-align: center;
`,Be=(0,p.default)(Ce.Text).attrs({size:16,color:"#777"})`
  align-self: center;
  margin-top: 22px;
  max-width: 275px;
  text-align: center;
  span {
    color: white;
  }
`,$e=(0,p.default)(Ce.Text).attrs({color:"#e2dffe",size:16,weight:500})`
  cursor: pointer;
  margin-top: 22px;
`,Ne=p.default.div``,Re=e=>{const{t:n}=(0,v.useTranslation)();return t(i).createElement(Te.Button,Object.assign({type:"button",theme:"default"},e),n("commandClose"))},Le=t(i).lazy((()=>a("c7Gq7"))),qe=t(i).lazy((()=>a("a9fRR"))),Ie=t(i).lazy((()=>a("43ULJ"))),ze=t(i).lazy((()=>a("iOeB3"))),De=t(i).lazy((()=>a("fwBWQ"))),We=t(i).lazy((()=>a("3spqi"))),Ve=()=>{const{data:e}=k.hooks.useWhatsNewOverlay(),{mutateAsync:n}=k.hooks.useSetAcknowledgeWhatsNewOverlay(),{data:r=[]}=k.hooks.useAllMultiChainAccounts(),{data:[o]}=(0,y.useFeatureFlags)(["frontend-enable-session-start"]),{mutateAsync:a}=k.hooks.usePersistApiEnvironment();return(0,O.useEffectOnce)((()=>{C.accountAnalytics.onAppSessionStart(r)}),r.length>0&&o),(0,O.useEffectOnce)((()=>{a()}),b.ENABLE_DEV_SETTINGS),(0,i.useEffect)((()=>{A.analytics.captureOptOutStatus()}),[]),k.hooks.useRemoveLegacyStorageData((0,S.getManifestVersion)()),e?t(i).createElement(t(i).Fragment,null,t(i).createElement(Ye,null),t(i).createElement(Oe.WhatsNewOverlay,{onClose:()=>{n()}})):t(i).createElement(t(i).Fragment,null,t(i).createElement(Ye,null),t(i).createElement(le,null),t(i).createElement(Qe,null),t(i).createElement("div",{id:x.MODAL_ID}))},Ye=()=>{const e=(0,c.useMatch)(T.Path.Swap)?t(i).createElement(We,null):null;return t(i).createElement(ce.MultichainAccountHeader,{enableEditAccount:!0,enableMenu:!0,rightMenuButton:e,"data-testid":"multichain-account-header"})},Qe=()=>{const{data:e}=k.hooks.useWhatsNewOverlay(),{data:n}=k.hooks.useSelectedMultiChainAccountIdentifier(),{data:r}=k.hooks.useSelectedMultiChainAccount(),o=null==r?void 0:r.isReadOnly,a=y.featureFlagClient.isFeatureEnabled("kill-swapper")||o,l=y.featureFlagClient.isFeatureEnabled("kill-explore"),c=y.featureFlagClient.isFeatureEnabled("kill-collectibles"),{t:s}=(0,v.useTranslation)(),{pathname:u}=(0,w.useLocation)(),d=(0,w.useNavigate)(),{closeAllModals:f}=(0,E.useLegacyModals)();k.hooks.useLogTimestamps(),(0,i.useEffect)((()=>{e||(f(),u!==T.Path.Wallet&&d(T.Path.Wallet))}),[n,e]);const p=(0,i.useMemo)((()=>[{label:s("homeTab"),route:T.Path.Wallet,renderButton:()=>t(i).createElement(Z.IconWallet,null),renderContent:()=>t(i).createElement(Le,null)},c?null:{label:s("collectiblesTab"),route:T.Path.Collectibles,renderButton:()=>t(i).createElement(Z.IconCollectibles,{width:22}),renderContent:()=>t(i).createElement(qe,null)},a?null:{label:s("swapTab"),route:T.Path.Swap,renderButton:()=>t(i).createElement(Z.IconArrowDouble,{width:24,height:24}),renderContent:()=>t(i).createElement(Ie,null)},{label:s("activityTab"),route:T.Path.Notifications,renderButton:()=>t(i).createElement(Z.IconNotifications,null),renderContent:()=>t(i).createElement(ze,null)},l?null:{label:s("exploreTab"),route:T.Path.Explore,renderButton:()=>t(i).createElement(Z.IconGlobeOutline,{width:34}),renderContent:()=>t(i).createElement(De,null),padding:0}].filter((e=>null!==e))),[c,l,a,s]);return t(i).createElement(i.Suspense,null,t(i).createElement(ve,{items:p}))};x=a("c8OXT");var He=a("iyhug"),Ge=a("gRICw"),_e=a("41yT6"),Ue=a("cIhSd"),Xe=a("6SBoM"),Je=(X=a("feAoQ"),a("goVRJ")),Ke=a("4K7Du"),Ze=(A=a("twk6W"),S=a("gcdBN"),a("dNPkM")),et=a("17H3T"),tt=a("2jR04"),nt=(p=a("gkfw3"),{});e(nt,"reset",(function(){return it}),(function(e){return it=e})),e(nt,"Reset",(function(){return lt}),(function(e){return lt=e})),e(nt,"default",(function(){return ct}),(function(e){return ct=e}));var rt,ot,at=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},it=(0,(p=a("gkfw3")).css)(rt||(rt=at(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]))),lt=(0,p.createGlobalStyle)(ot||(ot=at(["",""],["",""])),it),ct=it;x=a("c8OXT");const st=p.css`
  ::-webkit-scrollbar {
    background: #222;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2a2a2a;
    border-radius: 8px;
  }
`,ut=p.css`
  ::-webkit-scrollbar {
    display: none;
  }
  * {
    scrollbar-width: none; /* Also needed to disable scrollbar Firefox */
  }
`,dt=p.createGlobalStyle`
    ${nt.default}

    body, html, * {
        box-sizing: border-box;
        font-family: 'Inter', 'Roboto', Arial;
        user-select: none;
        color: currentColor;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeSpeed;
        -webkit-font-smoothing: antialiased;
    }
    input, textarea {
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }
    body {
        color: white;
        background: ${e=>e.backgroundColor};
        min-height: 100vh;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    *:focus, *:focus-within {
        outline-color: transparent !important;
        outline-style: none !important;
        outline-width: 0px !important;
    }

    ${x.BROWSER_ENV.os.name===t(tt).OS_MAP.MacOS||x.BROWSER_ENV.os.name===t(tt).OS_MAP.Windows?ut:st}
`;u.fileLogger.init({provider:et.ClientFileLoggerProvider}),u.telemetry.init((0,S.getManifestVersion)()),u.telemetry.setUser({id:A.analytics.getDeviceId()}),(0,Ze.initializeFeatureFlags)(),(0,d.reconcilePendingTransactions)(new(0,Je.LegacyIndexedDBProxy)),(0,d.addOnUpdateHandler)(((e,t)=>(0,d.updateMinedTransactionsHandler)(e,t,A.analytics))),(0,d.addOnRemoveHandler)(d.removeMinedTransactionsHandler);const ft=()=>{(0,i.useEffect)((()=>{A.analytics.capture("popupOpen")}),[]);const e=(0,i.useCallback)((()=>{(0,S.openTabAsync)({url:"onboarding.html"}),window.close()}),[]);return t(i).createElement(t(i).Fragment,null,t(i).createElement(c.MemoryRouter,{future:{v7_startTransition:!0}},t(i).createElement(p.ThemeProvider,{theme:Ke.theme},t(i).createElement(f.ThemeProvider,null,t(i).createElement(dt,{backgroundColor:"#222222"}),t(i).createElement(m.PopupAndNotificationErrorBoundary,null,t(i).createElement(h.Main,{withBorder:!0},t(i).createElement(s.AnalyticsProvider,{analytics:A.analytics},t(i).createElement(_,null,t(i).createElement(_e.QueryProvider,null,t(i).createElement(Xe.ExtensionLockWrapper,{openOnboarding:e},t(i).createElement(He.LegacyModalsProvider,null,t(i).createElement(X.Modals,null,t(i).createElement(Ue.SettingsMenuProvider,null,t(i).createElement(Ge.MenuProvider,null,t(i).createElement(Ve,null)))))))),t(i).createElement("div",{id:x.MODAL_ID}),t(i).createElement(g.Toaster,null))))))))},pt=document.getElementById("root");(0,l.createRoot)(pt).render(t(i).createElement(ft,null))}();
//# sourceMappingURL=popup.4aed6b21.js.map
define=__define;})(window.define);