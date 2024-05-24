(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire1d24;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequire1d24=o),o.register("cbY4i",(function(e,t){e.exports=Promise.all([o("22S8I")(new URL(o("5V6iE").resolve("9Dpy0"),import.meta.url).toString()),import("./"+o("5V6iE").resolve("4RMHa")),import("./"+o("5V6iE").resolve("dFv9D"))]).then((()=>o("8AonI")))})),o.register("22S8I",(function(e,t){var r=o("bDExm");e.exports=r((function(e){return new Promise((function(t,r){var n=document.getElementsByTagName("link");if([].concat(n).some((function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})))t();else{var o=document.createElement("link");o.rel="stylesheet",o.href=e,o.onerror=function(e){o.onerror=o.onload=null,o.remove(),r(e)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),o.register("bDExm",(function(e,t){var r={},n={},o={};e.exports=function(e,t){return function(l){var a=function(e){switch(e){case"preload":return n;case"prefetch":return o;default:return r}}(t);return a[l]?a[l]:a[l]=e.apply(null,arguments).catch((function(e){throw delete a[l],e}))}}})),o("5V6iE").register(JSON.parse('{"8iUX0":"connect_hardware.efe29100.js","dFv9D":"SettingsConnectHardware.c959b640.js","4RMHa":"SettingsConnectHardware.ed167c7e.js","9Dpy0":"notification.5cbd182e.css","frIs1":"phishing.e950e431.js","dIWgK":"metaplex.04cfb981.js","41uZA":"metaplex.540193c0.js","7jMPF":"collectibles.4fd9b29c.js","azrTG":"staking.037c2788.js","amlOx":"swapper.c615a942.js","k9od9":"connect_hardware.f79ebd6d.js"}'));var l=o("lDSNw"),a=o("lz7nT"),i=o("cZIbv");o("1KK14");var c=o("4yY1D"),s=o("dU2RF"),d=o("kBpKb"),u=o("bpTD2"),f=o("lMzyG"),p=(l=o("lDSNw"),i=o("cZIbv"),o("aanFI")),m=o("kn91D");const g=i.default.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
`,h=i.default.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: 250ms;
  transition-property: color;
  color: #aaa;
  svg {
    fill: #222222;
    color: inherit;
    * {
      color: inherit;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`,b=i.default.a`
  display: flex;
  color: #aaa;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: 250ms;
  transition-property: color;
  svg {
    fill: #222222;
    color: inherit;
    * {
      color: inherit;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`;var y=o("5Doro"),E=o("a8kcR"),v=o("h5kyv"),w=o("d1qx3"),x=o("8DCD7"),D=o("bLLpR"),T=o("bcqzL");const k=e(l).lazy((()=>o("cbY4i")));c.fileLogger.init({provider:D.ClientFileLoggerProvider}),c.telemetry.init((0,w.getManifestVersion)()),c.telemetry.setUser({id:v.analytics.getDeviceId()}),(0,x.initializeFeatureFlags)();const I=document.getElementById("root");(0,s.createRoot)(I).render(e(l).createElement(a.BrowserRouter,null,e(l).createElement(i.ThemeProvider,{theme:E.theme},e(l).createElement(y.QueryProvider,null,e(l).createElement(T.ThemedGlobalStyle,{backgroundColor:"#E2DFFE"}),e(l).createElement((()=>{const{t:t}=(0,f.useTranslation)();return e(l).createElement(g,null,e(l).createElement(b,{href:u.PHANTOM_WEBSITE_URL,target:"_blank",rel:"noopener noreferrer"},e(l).createElement(p.IconPhantomLogo,{width:32})),e(l).createElement(h,{"data-testid":"full-page-header-support-link",href:u.PHANTOM_SUPPORT_URL,rel:"noopener",target:"_blank"},e(l).createElement(p.IconHelp,null),e(l).createElement(m.Text,{color:"#222222",size:16,weight:500,margin:"0 0 0 8px"},t("fullPageHeaderHelp"))))}),null),e(l).createElement(d.OnboardingAndConnectHardwareErrorBoundary,null,e(l).createElement(l.Suspense,{fallback:null},e(l).createElement(k,null))))))),v.analytics.capture("connectHardwareOpen");
//# sourceMappingURL=connect_hardware.efe29100.js.map
define=__define;})(window.define);