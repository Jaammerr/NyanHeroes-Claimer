(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},i=n.parcelRequire1d24;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequire1d24=i),i.register("5V6iE",(function(t,n){var a,r;e(t.exports,"register",(function(){return a}),(function(e){return a=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("jVSWn",(function(t,n){e(t.exports,"default",(function(){return r}));var a=i("lDSNw");function r(e){var t=(0,a.useRef)();return(0,a.useEffect)((function(){t.current=e})),t.current}})),i.register("cjiI1",(function(e,t){e.exports=Promise.all([import("./"+i("5V6iE").resolve("lqqNA")),import("./"+i("5V6iE").resolve("gXZll"))]).then((()=>i("bNkV0")))})),i.register("hMAzI",(function(e,t){e.exports=import("./"+i("5V6iE").resolve("8PnUH")).then((()=>i("3WqdX")))})),i.register("7Fcto",(function(e,t){e.exports=import("./"+i("5V6iE").resolve("cB1wS")).then((()=>i("8FuDc")))})),i.register("dUBWK",(function(e,t){e.exports=import("./"+i("5V6iE").resolve("aGeWF")).then((()=>i("eDKJc")))})),i.register("6xG5P",(function(e,t){e.exports=import("./"+i("5V6iE").resolve("6Z3u4")).then((()=>i("Cx7PX")))})),i.register("54tAn",(function(e,t){e.exports=import("./"+i("5V6iE").resolve("lwXty")).then((()=>i("4jJyn")))})),i.register("axUHJ",(function(n,a){e(n.exports,"PTrans",(function(){return c}),(function(e){return c=e}));var r=i("lMzyG"),o=i("lDSNw"),l=i("kBpKb"),s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const c=t(o).memo((e=>{const{children:n,i18nKey:a}=e,i=s(e,["children","i18nKey"]),{t:c}=(0,r.useTranslation)(),u=(0,o.useMemo)((()=>(a?`${c(a,Object.assign(Object.assign({},i),i.values))}`:"").replace(/<\/?[^>]+(>|$)/g,"")),[a,i,c]);return t(o).createElement(l.ErrorBoundary,{fallback:u},t(o).createElement(r.Trans,Object.assign({i18nKey:a},i),n))}))})),i("5V6iE").register(JSON.parse('{"loI2u":"popup.010d9867.js","gXZll":"HomeTabPage.0d4c362a.js","lqqNA":"HomeTabPage.93b0ccd7.js","8PnUH":"CollectionsPage.163591da.js","cB1wS":"SwapTabPage.71ae0f47.js","aGeWF":"RecentActivity.dba769e7.js","6Z3u4":"ExplorePage.4e464988.js","lwXty":"SwapSettingsButton.dcca0fcd.js","9Dpy0":"notification.5cbd182e.css","frIs1":"phishing.e950e431.js","dIWgK":"metaplex.04cfb981.js","41uZA":"metaplex.540193c0.js","7jMPF":"collectibles.4fd9b29c.js","azrTG":"staking.037c2788.js","amlOx":"swapper.c615a942.js","dtvmn":"notification.a273119d.js","4RMHa":"SettingsConnectHardware.ed167c7e.js","k9od9":"connect_hardware.f79ebd6d.js","9wrqE":"onboarding.d08541fa.js"}'));var o=i("lDSNw"),l=i("dU2RF"),s=i("aJuCi");i("1KK14");var c=i("9ktGj"),u=i("4yY1D"),d=i("4raQz"),m=i("jlKgL"),f=i("cZIbv"),p=i("kBpKb"),h=i("b883z"),g=i("8WrfF"),v=i("bpTD2"),y=i("lBuGR"),b=i("lMzyG"),E=(o=i("lDSNw"),i("lz7nT")),w=(i("aJuCi"),i("ibYAx")),x=i("aXzxc"),k=i("gMNJN"),T=i("gdILj"),A=i("8182A"),C=i("jZyqE"),M=i("h5kyv"),F=i("d1qx3"),P=i("belzv"),S={};e(S,"useNetworkHealthQuery",(function(){return z}),(function(e){return z=e}));var B=i("lNRH9"),N={};e(N,"fetchNetworkHealth",(function(){return D}),(function(e){return D=e}));v=i("bpTD2");var j=i("8kIyR"),O=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{s(a.next(e))}catch(e){i(e)}}function l(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((a=a.apply(e,t||[])).next())}))};const I=e=>`${(0,v.getAPIEnvironment)()}/solana/health/v1?locale=${e}`;function D(e){return O(this,void 0,void 0,(function*(){const t=yield j.rb.headers({Accept:"application/json"}).get(I(e));if(!(0,j.responseIsOkay)(t))throw new Error("Failed to retrieve Solana network health");return t.data}))}var R=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{s(a.next(e))}catch(e){i(e)}}function l(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((a=a.apply(e,t||[])).next())}))};function z(e,t){return(0,B.useQuery)({queryKey:["solana","health",{locale:e}],refetchInterval:15e4,enabled:t,queryFn(){return R(this,void 0,void 0,(function*(){return yield(0,N.fetchNetworkHealth)(e)}))}})}function G(e,t){const{data:n}=(0,S.useNetworkHealthQuery)(e,t);return t?n:void 0}b=i("lMzyG");var L,V,$=i("4y59b"),W=i("7dqns"),H=i("c1thM"),q=(o=i("lDSNw"),f=i("cZIbv"),o=i("lDSNw"),i("8PPME"));(V=L||(L={})).NetworkHealth="network-health",V.Cluster="cluster",V.TestnetMode="testnet-mode";const K=(0,o.createContext)(null),Z=()=>{const e=(0,o.useContext)(K);if(!e)throw new Error("Missing banner context. Make sure you're wrapping your component in a <BannerProvider />");return e},J=({children:e})=>{const n=[],[a,r]=(0,o.useReducer)(((e,t)=>{switch(t.type){case"create":return e.concat(t.payload);case"delete":return e.filter((({id:e})=>e!==t.payload.id));case"reset":return n;default:throw new Error("There was an error dispatching a banner action.")}}),n),i=e=>r({type:"delete",payload:{id:e.id}});return t(o).createElement(K.Provider,{value:{banners:a,createBanner:e=>{const{type:t,variant:n,message:a,dismissable:o=!0,icon:l,autohide:s=!0,delay:c=5e3,onClick:u}=e;t&&n&&a||console.error("You must supply a type, variant and message when creating a Banner.");const d=(0,q.default)();return r({type:"create",payload:{id:d,type:t,variant:n,message:a,dismissable:o,icon:l,autohide:s,delay:c,onClick:u}}),s&&setTimeout((()=>{i({id:d})}),c),d},deleteBanner:i,resetBanners:()=>r({type:"reset"})}},e)};var U=i("7J3aJ"),_=(k=i("gMNJN"),i("2LZGp")),X=i("aPmuP"),Q=i("1yIB4"),Y=i("aanFI");const ee=f.default.button`
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
`,te=(0,f.default)(H.motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>{switch(e.variant){case Q.CTAVariant.Primary:return(0,$.hexToRGB)("#AB9FF2",.7);case Q.CTAVariant.Success:return(0,$.hexToRGB)("#21E56F",.7);case Q.CTAVariant.Warning:return(0,$.hexToRGB)("#E5A221",.7);case Q.CTAVariant.Danger:return(0,$.hexToRGB)("#EB3742",.7);default:return(0,$.hexToRGB)("#E5A221",.7)}}};

  ${ee} {
    &:focus-visible {
      border-color: ${e=>{switch(e.variant){case Q.CTAVariant.Primary:return(0,$.hexToRGB)("#AB9FF2",.7);case Q.CTAVariant.Success:return(0,$.hexToRGB)("#21E56F",.7);case Q.CTAVariant.Warning:return(0,$.hexToRGB)("#E5A221",.7);case Q.CTAVariant.Danger:return(0,$.hexToRGB)("#EB3742",.7);default:return(0,$.hexToRGB)("#E5A221",.7)}}};
    }
  }
`,ne=f.default.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  text-align: left;

  svg {
    margin-right: 10px;
  }
`,ae=f.default.button`
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
    border-color: ${(0,$.hexToRGB)("#FFFFFF",.3)};
  }

  svg {
    fill: #ffffff;
    margin: 0;
  }
`,re=(e,n,a)=>{const{banners:r,createBanner:i,deleteBanner:l}=Z(),s=r[r.length-1],{handleShowModalVisibility:c}=(0,_.useModals)(),{showSettingsMenu:u}=(0,U.useSettingsMenu)(),{t:d,i18n:m}=(0,b.useTranslation)(),{cluster:f}=e(),p=k.hooks.useSelectedNetworks().some((e=>P.Chains.isSolanaNetworkID(e))),h=G(m.language,p),g=n(),v=a();(0,o.useEffect)((()=>{const e=r.find((e=>e.type===L.TestnetMode));e&&l({id:e.id}),v?i({type:L.TestnetMode,variant:Q.CTAVariant.Warning,message:d("featureNotSupportedOnLocalNet"),dismissable:!1,autohide:!1,onClick:()=>u(void 0,t(o).createElement(X.MultiChainDeveloperSettings,null))}):g&&i({type:L.TestnetMode,variant:Q.CTAVariant.Warning,message:d("connectionClusterTestnetMode"),dismissable:!1,autohide:!1,onClick:()=>u(void 0,t(o).createElement(X.MultiChainDeveloperSettings,null))})}),[v,g,d]),(0,o.useEffect)((()=>{if(!f)return;const e=r.find((e=>e.type===L.NetworkHealth));if("mainnet-beta"===f){if(h){const{bannerVariant:n,bannerMessage:a,notificationMessageTitle:r,notificationMessage:s}=h;!!n&&!!a?a!==(null==e?void 0:e.message)&&i({type:L.NetworkHealth,variant:n,message:a,dismissable:!1,icon:t(o).createElement(Y.IconExclamationMarkCircle,{width:14,height:14,circleFill:"#FFFFFF",exclamationFill:"transparent"}),autohide:!1,onClick:s&&r?()=>c("networkHealth",{variant:n,title:r,message:s}):void 0}):e&&l({id:e.id})}}else e&&l({id:e.id})}),[f,h]);const y=(0,o.useCallback)((()=>{s&&l({id:s.id})}),[l,s]);return{banner:s,dismissBanner:y}},ie=t(o).memo((e=>{const{banner:n,dismissBanner:a}=e;return t(o).createElement(W.AnimatePresence,null,n&&t(o).createElement(te,{key:"banner",role:"banner","aria-live":(null==n?void 0:n.autohide)?"assertive":"polite","aria-atomic":"true",variant:n.variant,initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{ease:"easeOut",duration:.2}},t(o).createElement(ee,{tabIndex:n.onClick?1:-1,onClick:n.onClick},n.icon,t(o).createElement(ne,null,n.message)),n.dismissable&&t(o).createElement(ae,{onClick:a},t(o).createElement(Y.IconClose,{width:14,fill:"#FFFFFF"}))))})),oe=()=>{const e=re(k.hooks.useSelectedSolanaConnection,k.hooks.useIsTestnetMode,k.hooks.useIsLocalnetMode);return t(o).createElement(ie,Object.assign({},e))},le=()=>t(o).createElement(oe,null);Y=i("aanFI");var se=i("ad7JL"),ce=(u=i("4yY1D"),i("6nLCM")),ue=(W=i("7dqns"),H=i("c1thM"),o=i("lDSNw"),E=i("lz7nT"),s=i("aJuCi"),i("jVSWn")),de=(f=i("cZIbv"),i("6ha3o")),me=(M=i("h5kyv"),i("gKTq7")),fe=(H=i("c1thM"),i("egSKH"));o=i("lDSNw");const pe=(0,(f=i("cZIbv")).default)(H.motion.div)`
  position: absolute;
  top: 0px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ab9ff2;
`,he=({refs:e,activeRoute:n,onFinishedAnimating:a,isAnimating:r})=>{const[{x:i,width:l},s]=(0,o.useState)({x:0,width:0}),c=(0,o.useCallback)((()=>{e&&e[n]&&e[n].current&&s({x:e[n].current.offsetLeft,width:e[n].current.getBoundingClientRect().width})}),[n,e]);return(0,o.useEffect)((()=>{c()}),[n,e,c]),(0,o.useEffect)((()=>{const e=t(fe)((()=>{c()}),500);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}})),t(o).createElement(pe,{animate:{x:i,width:l},style:{opacity:r?1:0},onAnimationComplete:a,transition:{duration:.4,type:"spring"}})},ge=f.default.div`
  position: relative;
  height: ${60}px;
  display: flex;
`,ve=(0,f.default)(H.motion.div)`
  flex: 1;
  overflow-x: hidden;
  padding: ${({padding:e})=>"number"==typeof e?e:16}px;
`,ye=(0,f.default)(me.Footer)`
  flex: 1;
  display: flex;
  justify-content: space-around;
  padding: 0px 10px;
`,be=t(o).memo((({items:e})=>{const n=(0,E.useLocation)(),a=(0,ue.default)(n),[r,i]=(0,o.useState)(!1),l=(0,o.useMemo)((()=>e.find((e=>(0,s.matchPath)({path:`/${e.route}`,end:!0},n.pathname)))),[e,n.pathname]),c=l&&l.route,d=(0,o.useMemo)((()=>e.reduce(((e,t)=>(e[t.route]=(0,o.createRef)(),e)),{})),[e]),m=n.pathname!=(null==a?void 0:a.pathname)&&null!=(null==a?void 0:a.pathname),f=(0,o.useMemo)((()=>e.map((r=>{const i=t(o).memo((()=>{var i;let l=0;if(m){l=Ee(e,n.pathname,null!==(i=null==a?void 0:a.pathname)&&void 0!==i?i:"")?10:-10}return t(o).createElement(ve,{id:"tab-content","data-testid":`tab-content-${r.route}`,initial:{x:l,opacity:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.1},padding:r.padding},t(o).createElement(de.DetailViewsProvider,{shouldResetOnAccountChange:!0},r.renderContent()))}));return t(o).createElement(s.Route,{key:r.route,path:`/${r.route}`,element:t(o).createElement(i,null)})}))),[e,n]),p=(0,o.useCallback)((e=>{i(!0),M.analytics.capture("tabPress",{data:{target:e}}),u.telemetry.addBreadcrumb(u.FeatureTag.Generic,`Tab changed to ${e}`,u.Severity.Info)}),[]);return t(o).createElement(t(o).Fragment,null,t(o).createElement(W.AnimatePresence,{mode:"wait",initial:!1},t(o).createElement(s.Routes,{location:n,key:n.pathname},f,t(o).createElement(s.Route,{key:"redirection",element:t(o).createElement(H.motion.div,{exit:{opacity:0},transition:{duration:.1}},t(o).createElement(s.Navigate,{to:e[0]?e[0].route:"/"}))}))),t(o).createElement(ge,null,t(o).createElement(he,{refs:d,activeRoute:c,onFinishedAnimating:()=>i(!1),isAnimating:r}),t(o).createElement(ye,{role:"tablist","aria-orientation":"horizontal"},e.map((e=>t(o).createElement(ke,{isActive:c===e.route,key:e.route,item:e,ref:d[e.route],isAnimating:r,onClick:()=>p(e.route)}))))),t(o).createElement("div",{"aria-hidden":!0,"data-testid":"current-route","data-location":n.pathname}))}),((e,t)=>(0,ce.dequal)(e.items.map((e=>e.route)),t.items.map((e=>e.route))))),Ee=(e,t,n)=>e.findIndex((e=>e.route===we(t)))>e.findIndex((e=>e.route===we(n))),we=e=>"/"===e?e:e.replace(/^\/+/g,""),xe=(0,f.default)(E.Link)`
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
`,ke=(0,o.forwardRef)((({isActive:e,item:n,isAnimating:a,onClick:r},i)=>t(o).createElement(xe,{"aria-label":n.label,"data-testid":`bottom-tab-nav-button-${n.route}`,$isActive:e,$isAnimating:a,to:n.route,ref:i,onClick:r},n.renderButton())));var Te={};e(Te,"WhatsNewOverlay",(function(){return Fe}),(function(e){return Fe=e}));b=i("lMzyG"),o=i("lDSNw"),E=i("lz7nT"),f=i("cZIbv"),A=i("8182A");var Ae=i("laYjG"),Ce=i("kn91D"),Me=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{s(a.next(e))}catch(e){i(e)}}function l(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((a=a.apply(e,t||[])).next())}))};const Fe=({onClose:e})=>{const{t:n}=(0,b.useTranslation)(),a=(0,E.useNavigate)();return t(o).createElement(Pe,null,t(o).createElement(Be,null,t(o).createElement(Ce.Text,{color:"#e2dffe",size:16,weight:600},n("whatsNewOverlayNew"))),t(o).createElement(Ne,null,n("whatsNewOverlayv3ActionBurnSpam")),t(o).createElement(je,null,n("whatsNewOverlayv3SecondaryText")),t(o).createElement(Oe,{color:"#e2dffe",size:16,weight:500,onClick:()=>Me(void 0,void 0,void 0,(function*(){e(),a(A.Path.Collectibles)}))},n("whatsNewOverlayv2ActionTryItNow")),t(o).createElement(Se,null),t(o).createElement(Ie,null,t(o).createElement(De,{onClick:e})))},Pe=f.default.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
  padding: 20px;
`,Se=f.default.div`
  flex: 1;
`,Be=f.default.div`
  margin-top: 40px;
  align-self: center;
  width: 76px;
  height: 35px;
  background-color: rgba(138, 129, 248, 0.1);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ne=(0,f.default)(Ce.Text).attrs({size:28,weight:500})`
  align-self: center;
  margin-top: 22px;
  line-height: 34px;
  max-width: 275px;
  text-align: center;
`,je=(0,f.default)(Ce.Text).attrs({size:16,color:"#777"})`
  align-self: center;
  margin-top: 22px;
  max-width: 275px;
  text-align: center;
  span {
    color: white;
  }
`,Oe=(0,f.default)(Ce.Text).attrs({color:"#e2dffe",size:16,weight:500})`
  cursor: pointer;
  margin-top: 22px;
`,Ie=f.default.div``,De=e=>{const{t:n}=(0,b.useTranslation)();return t(o).createElement(Ae.Button,Object.assign({type:"button",theme:"default"},e),n("commandClose"))},Re=t(o).lazy((()=>i("cjiI1"))),ze=t(o).lazy((()=>i("hMAzI"))),Ge=t(o).lazy((()=>i("7Fcto"))),Le=t(o).lazy((()=>i("dUBWK"))),Ve=t(o).lazy((()=>i("6xG5P"))),$e=t(o).lazy((()=>i("54tAn"))),We=()=>{const{data:e}=k.hooks.useWhatsNewOverlay(),{mutateAsync:n}=k.hooks.useSetAcknowledgeWhatsNewOverlay(),{data:a=[]}=k.hooks.useAllMultiChainAccounts(),{data:[r]}=(0,y.useFeatureFlags)(["frontend-enable-session-start"]),{mutateAsync:i}=k.hooks.usePersistApiEnvironment();return(0,T.useEffectOnce)((()=>{C.accountAnalytics.onAppSessionStart(a)}),a.length>0&&r),(0,T.useEffectOnce)((()=>{i()}),v.ENABLE_DEV_SETTINGS),(0,o.useEffect)((()=>{M.analytics.captureOptOutStatus()}),[]),k.hooks.useRemoveLegacyStorageData((0,F.getManifestVersion)()),e?t(o).createElement(t(o).Fragment,null,t(o).createElement(He,null),t(o).createElement(Te.WhatsNewOverlay,{onClose:()=>{n()}})):t(o).createElement(t(o).Fragment,null,t(o).createElement(He,null),t(o).createElement(le,null),t(o).createElement(qe,null),t(o).createElement("div",{id:w.MODAL_ID}))},He=()=>{const e=(0,s.useMatch)(A.Path.Swap)?t(o).createElement($e,null):null;return t(o).createElement(se.MultichainAccountHeader,{enableEditAccount:!0,enableMenu:!0,rightMenuButton:e,"data-testid":"multichain-account-header"})},qe=()=>{const{data:e}=k.hooks.useWhatsNewOverlay(),{data:n}=k.hooks.useSelectedMultiChainAccountIdentifier(),{data:a}=k.hooks.useSelectedMultiChainAccount(),r=null==a?void 0:a.isReadOnly,i=y.featureFlagClient.isFeatureEnabled("kill-swapper")||r,l=y.featureFlagClient.isFeatureEnabled("kill-explore"),s=y.featureFlagClient.isFeatureEnabled("kill-collectibles"),{t:c}=(0,b.useTranslation)(),{pathname:u}=(0,E.useLocation)(),d=(0,E.useNavigate)(),{closeAllModals:m}=(0,x.useLegacyModals)();k.hooks.useLogTimestamps(),(0,o.useEffect)((()=>{e||(m(),u!==A.Path.Wallet&&d(A.Path.Wallet))}),[n,e]);const f=(0,o.useMemo)((()=>[{label:c("homeTab"),route:A.Path.Wallet,renderButton:()=>t(o).createElement(Y.IconWallet,null),renderContent:()=>t(o).createElement(Re,null)},s?null:{label:c("collectiblesTab"),route:A.Path.Collectibles,renderButton:()=>t(o).createElement(Y.IconCollectibles,{width:22}),renderContent:()=>t(o).createElement(ze,null)},i?null:{label:c("swapTab"),route:A.Path.Swap,renderButton:()=>t(o).createElement(Y.IconArrowDouble,{width:24,height:24}),renderContent:()=>t(o).createElement(Ge,null)},{label:c("activityTab"),route:A.Path.Notifications,renderButton:()=>t(o).createElement(Y.IconNotifications,null),renderContent:()=>t(o).createElement(Le,null)},l?null:{label:c("exploreTab"),route:A.Path.Explore,renderButton:()=>t(o).createElement(Y.IconGlobeOutline,{width:34}),renderContent:()=>t(o).createElement(Ve,null),padding:0}].filter((e=>null!==e))),[s,l,i,c]);return t(o).createElement(o.Suspense,null,t(o).createElement(be,{items:f}))};w=i("ibYAx");var Ke=i("6AorB"),Ze=i("eQcMe"),Je=i("5Doro"),Ue=i("8K6wD"),_e=i("GDiVM"),Xe=(_=i("2LZGp"),i("jPDaF")),Qe=i("a8kcR"),Ye=(M=i("h5kyv"),F=i("d1qx3"),i("8DCD7")),et=i("bLLpR"),tt=i("bcqzL");u.fileLogger.init({provider:et.ClientFileLoggerProvider}),u.telemetry.init((0,F.getManifestVersion)()),u.telemetry.setUser({id:M.analytics.getDeviceId()}),(0,Ye.initializeFeatureFlags)(),(0,d.reconcilePendingTransactions)(new(0,Xe.LegacyIndexedDBProxy)),(0,d.addOnUpdateHandler)(((e,t)=>(0,d.updateMinedTransactionsHandler)(e,t,M.analytics))),(0,d.addOnRemoveHandler)(d.removeMinedTransactionsHandler);const nt=()=>{(0,o.useEffect)((()=>{M.analytics.capture("popupOpen")}),[]);const e=(0,o.useCallback)((()=>{(0,F.openTabAsync)({url:"onboarding.html"}),window.close()}),[]);return t(o).createElement(t(o).Fragment,null,t(o).createElement(s.MemoryRouter,{future:{v7_startTransition:!0}},t(o).createElement(f.ThemeProvider,{theme:Qe.theme},t(o).createElement(m.ThemeProvider,null,t(o).createElement(tt.ThemedGlobalStyle,{backgroundColor:"#222222"}),t(o).createElement(p.PopupAndNotificationErrorBoundary,null,t(o).createElement(h.Main,{withBorder:!0},t(o).createElement(c.AnalyticsProvider,{analytics:M.analytics},t(o).createElement(J,null,t(o).createElement(Je.QueryProvider,null,t(o).createElement(_e.ExtensionLockWrapper,{openOnboarding:e},t(o).createElement(Ke.LegacyModalsProvider,null,t(o).createElement(_.Modals,null,t(o).createElement(Ue.SettingsMenuProvider,null,t(o).createElement(Ze.MenuProvider,null,t(o).createElement(We,null)))))))),t(o).createElement("div",{id:w.MODAL_ID}),t(o).createElement(g.Toaster,null))))))))},at=document.getElementById("root");(0,l.createRoot)(at).render(t(o).createElement(nt,null));
//# sourceMappingURL=popup.010d9867.js.map
define=__define;})(window.define);