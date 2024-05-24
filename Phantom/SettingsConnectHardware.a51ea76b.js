(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("gUsWu",(function(o,r){var i;i=o.exports,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),t(o.exports,"default",(function(){return w}),(function(e){return w=e}));var l=n("1fwzV"),a=n("lz5BI"),c=n("29o0l"),u=n("84vNm"),d=n("bQfjx"),s=n("gX5Te"),p=n("cI6uH"),f=n("iPgGH"),g=n("022kK"),h=n("dLozB"),v=n("8lRpl"),x=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function l(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}c((o=o.apply(e,t||[])).next())}))};var w=()=>{var t;const{mutateAsync:n}=s.hooks.useConnectLedgerAccounts(),{hardwareStepStack:o,pushStep:r,popStep:i,currentStep:w,setOnConnectHardwareAccounts:m,setOnConnectHardwareDone:k,setExistingAccounts:C}=(0,g.useHardwareOnboardingStore)(),{data:E=[],isFetched:b,isError:y}=s.hooks.useAllMultiChainAccounts(),S=(0,u.default)(o,((e,t)=>(null==e?void 0:e.length)===t.length)),H=o.length>(null!=S?S:[]).length,B=0===(null==S?void 0:S.length),A={initial:{x:B?0:H?150:-150,opacity:B?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}},O=(0,c.useCallback)((()=>{var e,t,n,o,r;(null===(e=w())||void 0===e?void 0:e.props.preventBack)||((null===(t=w())||void 0===t?void 0:t.props.onBackCallback)&&(null===(r=null===(n=w())||void 0===n?void 0:(o=n.props).onBackCallback)||void 0===r||r.call(o)),i())}),[w,i]);return(0,p.useEffectOnce)((()=>{m((e=>x(void 0,void 0,void 0,(function*(){yield n(e)})))),k((()=>window.close())),r(e(c).createElement(h.ConnectHardware,null))}),0===o.length),(0,c.useEffect)((()=>{C({data:E,isFetched:b,isError:y})}),[E,b,y,C]),e(c).createElement(v.ConnectHardwareContainer,null,e(c).createElement(d.StepHeader,{totalSteps:f.TOTAL_CONNECT_HARDWARE_STEPS,onBackClick:O,showBackButton:!(null===(t=w())||void 0===t?void 0:t.props.preventBack),currentStepIndex:o.length-1}),e(c).createElement(l.AnimatePresence,{mode:"wait"},e(c).createElement(a.motion.div,Object.assign({style:{display:"flex",flexGrow:1},key:`${o.length}_${null==S?void 0:S.length}`},A),e(c).createElement(v.ConnectHardwareContainerPadding,null,w()))))}})),n.register("bQfjx",(function(o,r){t(o.exports,"StepHeader",(function(){return h}));var i=n("RVqnc"),l=n("29o0l"),a=n("gkfw3"),c=n("lSd3H"),u=n("6UMd8"),d=n("j81qC"),s=n("634r8");const p=(0,a.default)(s.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${e=>{var t;return null!==(t=e.opacity)&&void 0!==t?t:"1"}};
`,f=a.default.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,g=a.default.div`
  width: 24px;
  height: 24px;
`,h=({onBackClick:t,totalSteps:n,currentStepIndex:o,isHidden:r,showBackButtonOnFirstStep:a,showBackButton:s=!0})=>{const h=s&&(a||0!==o);return e(l).createElement(p,{opacity:r?0:1},h?e(l).createElement(c.ChevronCircle,{right:1,onClick:t},e(l).createElement(d.IconChevronLeft,null)):e(l).createElement(g,null),e(l).createElement(f,null,(0,i.range)(n).map((t=>{const n=t<=o?"#AB9FF2":"#333";return e(l).createElement(u.Circle,{key:t,diameter:12,color:n})}))),e(l).createElement(g,null))}})),n.register("lSd3H",(function(e,o){t(e.exports,"ChevronCircle",(function(){return l}));var r=n("gkfw3"),i=n("6UMd8");const l=(0,r.default)(i.Circle)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${e=>e.$isExpanded?"#000":"#333"} !important;
  :hover {
    background-color: #444444;
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${e=>e.$isExpanded?"white":"#666666"};
    transition: fill 200ms ease;
    position: relative;
    ${e=>e.top?`top: ${e.top}px;`:""}
    ${e=>e.right?`right: ${e.right}px;`:""}
  }
`})),n.register("iPgGH",(function(e,n){t(e.exports,"TOTAL_CONNECT_HARDWARE_STEPS",(function(){return o}));const o=3}))}();
//# sourceMappingURL=SettingsConnectHardware.a51ea76b.js.map
define=__define;})(window.define);