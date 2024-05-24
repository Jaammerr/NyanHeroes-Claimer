(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("8AonI",(function(r,a){var o;o=r.exports,Object.defineProperty(o,"__esModule",{value:!0,configurable:!0}),t(r.exports,"default",(function(){return w}),(function(e){return w=e}));var c=n("7dqns"),i=n("c1thM"),s=n("lDSNw"),d=n("LqQFk"),l=n("03gS4"),u=n("gMNJN"),p=n("gdILj"),m=n("2Nky4"),h=n("8GZOc"),f=n("bQHLl"),g=n("1GS29"),y=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function c(e){try{s(r.next(e))}catch(e){o(e)}}function i(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}s((r=r.apply(e,t||[])).next())}))};var w=()=>{var t;const{mutateAsync:n}=u.hooks.useConnectLedgerAccounts(),{hardwareStepStack:r,pushStep:a,popStep:o,currentStep:w,setOnConnectHardwareAccounts:v,setOnConnectHardwareDone:S,setExistingAccounts:C}=(0,h.useHardwareOnboardingStore)(),{data:T=[],isFetched:x,isError:b}=u.hooks.useAllMultiChainAccounts(),E=(0,d.default)(r,((e,t)=>(null==e?void 0:e.length)===t.length)),A=r.length>(null!=E?E:[]).length,I=0===(null==E?void 0:E.length),H={initial:{x:I?0:A?150:-150,opacity:I?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}},k=(0,s.useCallback)((()=>{var e,t,n,r,a;(null===(e=w())||void 0===e?void 0:e.props.preventBack)||((null===(t=w())||void 0===t?void 0:t.props.onBackCallback)&&(null===(a=null===(n=w())||void 0===n?void 0:(r=n.props).onBackCallback)||void 0===a||a.call(r)),o())}),[w,o]);return(0,p.useEffectOnce)((()=>{v((e=>y(void 0,void 0,void 0,(function*(){yield n(e)})))),S((()=>window.close())),a(e(s).createElement(f.ConnectHardware,null))}),0===r.length),(0,s.useEffect)((()=>{C({data:T,isFetched:x,isError:b})}),[T,x,b,C]),e(s).createElement(g.ConnectHardwareContainer,null,e(s).createElement(l.StepHeader,{totalSteps:m.TOTAL_CONNECT_HARDWARE_STEPS,onBackClick:k,showBackButton:!(null===(t=w())||void 0===t?void 0:t.props.preventBack),currentStepIndex:r.length-1}),e(s).createElement(c.AnimatePresence,{mode:"wait"},e(s).createElement(i.motion.div,Object.assign({style:{display:"flex",flexGrow:1},key:`${r.length}_${null==E?void 0:E.length}`},H),e(s).createElement(g.ConnectHardwareContainerPadding,null,w()))))}})),n.register("03gS4",(function(r,a){t(r.exports,"StepHeader",(function(){return f}));var o=n("4y59b"),c=n("lDSNw"),i=n("cZIbv"),s=n("gR1av"),d=n("miiws"),l=n("aanFI"),u=n("6l2nq");const p=(0,i.default)(u.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${e=>{var t;return null!==(t=e.opacity)&&void 0!==t?t:"1"}};
`,m=i.default.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,h=i.default.div`
  width: 24px;
  height: 24px;
`,f=({onBackClick:t,totalSteps:n,currentStepIndex:r,isHidden:a,showBackButtonOnFirstStep:i,showBackButton:u=!0})=>{const f=u&&(i||0!==r);return e(c).createElement(p,{opacity:a?0:1},f?e(c).createElement(s.ChevronCircle,{right:1,onClick:t},e(c).createElement(l.IconChevronLeft,null)):e(c).createElement(h,null),e(c).createElement(m,null,(0,o.range)(n).map((t=>{const n=t<=r?"#AB9FF2":"#333";return e(c).createElement(d.Circle,{key:t,diameter:12,color:n})}))),e(c).createElement(h,null))}})),n.register("gR1av",(function(e,r){t(e.exports,"ChevronCircle",(function(){return c}));var a=n("cZIbv"),o=n("miiws");const c=(0,a.default)(o.Circle)`
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
`})),n.register("2Nky4",(function(e,n){t(e.exports,"TOTAL_CONNECT_HARDWARE_STEPS",(function(){return r}));const r=3})),n.register("8GZOc",(function(r,a){t(r.exports,"useHardwareOnboardingStore",(function(){return d}));var o=n("4y59b"),c=n("90BMT"),i=n("9xrNA");const s={existingAccounts:{data:[],isFetched:!1,isError:!1},hardwareStepStack:[],hardwareStepSubStack:{},selectedChains:[],selectedChainsMap:new Map,chainImportStep:1,derivedAccountGroups:[],discoveredAccounts:[],activeAccountsFound:!1,selectedAccounts:{},onConnectHardwareAccounts:e=>Promise.resolve(),onConnectHardwareDone:()=>{}},d=e(i)(((e,t)=>Object.assign(Object.assign({},s),{pushStep:n=>{const r=t().hardwareStepStack;e({hardwareStepStack:r.concat(n)})},popStep:()=>{var n;const r=t().hardwareStepStack.length-1;if((null!==(n=t().hardwareStepSubStack[r])&&void 0!==n?n:[]).length)return e((0,c.default)((e=>{e.hardwareStepSubStack[r]=e.hardwareStepSubStack[r].slice(0,-1)})));e((0,c.default)((e=>{e.hardwareStepStack=e.hardwareStepStack.slice(0,-1)})))},pushSubStep:n=>{var r;const a=t().hardwareStepStack.length-1,o=null!==(r=t().hardwareStepSubStack[a])&&void 0!==r?r:[];e((0,c.default)((e=>{e.hardwareStepSubStack[a]=o.concat([n])})))},currentStep:()=>{var e;const n=t().hardwareStepStack,r=t().hardwareStepSubStack,a=n.length>0?n.length-1:n.length;return(null===(e=r[a])||void 0===e?void 0:e.length)?(0,o.getLast)(r[a]):(0,o.getLast)(n)},setExistingAccounts:t=>{e({existingAccounts:t})},setSelectedChains:(t,n)=>{e({selectedChains:t,selectedChainsMap:n})},setDecrementChainImportStep:()=>{const n=t().chainImportStep;e({chainImportStep:n-1})},setIncrementChainImportStep:()=>{const n=t().chainImportStep;e({chainImportStep:n+1})},setDerivedAccountGroups:t=>{e({derivedAccountGroups:t})},setDiscoveredAccounts:(t,n)=>{e({discoveredAccounts:t,activeAccountsFound:n})},selectAccount:n=>{const r=t().selectedAccounts,a=Object.assign({},r);a[n]=!0,e({selectedAccounts:a})},deselectAccount:n=>{const r=t().selectedAccounts,a=Object.assign({},r);delete a[n],e({selectedAccounts:a})},setSelectedAccounts:t=>{e({selectedAccounts:t})},setOnConnectHardwareAccounts:t=>{e({onConnectHardwareAccounts:t})},setOnConnectHardwareDone:t=>{e({onConnectHardwareDone:t})}})))})),n.register("bQHLl",(function(r,a){t(r.exports,"ConnectHardware",(function(){return C}));var o=n("belzv"),c=n("lBuGR"),i=n("lMzyG"),s=n("4y59b"),d=n("lDSNw"),l=n("laYjG"),u=n("5ftLv"),p=n("kpxNY"),m=n("aanFI"),h=n("02iAW"),f=n("gMNJN"),g=n("8GZOc"),y=n("1GS29"),w=n("aV5N8"),v=n("7i1iF");const S=()=>{(0,c.usePrefetchFeatureFlagsEffect)();const{t:t}=(0,i.useTranslation)(),{pushStep:n,setSelectedChains:r}=(0,g.useHardwareOnboardingStore)(),a=f.hooks.useEnabledNetworkIDs(),m=f.hooks.useEnabledAddressTypes(),{data:S,isFetching:C,refetch:T}=f.hooks.useRequestLedgerPermission(!0,!0),{buttonDisabled:x,defaultIcon:b,primaryText:E,secondaryText:A,buttonText:I,iconType:H,onClick:k}=(0,d.useMemo)((()=>{var c,i;let l=!1;const p=e(d).createElement(h.SpinnerIcon,null);let f,g,y,x=u.ConfirmationIconType.Default,b=s.NOOP;if(C)f=t("connectHardwareSearching"),g=t("connectHardwareMakeSureConnected"),y=t("commandContinue"),l=!0;else if("granted"===(null==S?void 0:S.type)){const s=null!==(i=null===(c=S.transport.deviceModel)||void 0===c?void 0:c.productName)&&void 0!==i?i:"Ledger";x=u.ConfirmationIconType.Success,f=t("connectHardwarePairSuccessPrimary",{productName:s}),g=t("connectHardwarePairSuccessSecondary",{productName:s}),y=t("commandContinue"),l=!1,b=()=>{if(1===m.length){const t=new Map;t.set(m[0],{});for(const e of a){const n=o.Chains.getAddressTypes(e);for(const r of n)t.set(r,{[e]:!0})}r(m,t),n(e(d).createElement(w.ConnectHardwareOpenApp,{preventBack:!0}))}else n(e(d).createElement(v.ConnectHardwareSelectChains,{onBackCallback:()=>{r([],new Map)}}))}}else"denied"===(null==S?void 0:S.type)?(x=u.ConfirmationIconType.Failure,f=t("connectHardwarePermissionDeniedPrimary"),g=t("connectHardwarePermissionDeniedSecondary"),y=t("commandTryAgain"),l=!1,b=T):S&&"unable-to-connect"!==S.type||(x=u.ConfirmationIconType.Failure,f=t("connectHardwarePermissionUnableToConnect"),g=t("connectHardwareWaitingForApplicationSecondaryText"),y=t("commandTryAgain"),l=!1,b=T);return{buttonDisabled:l,defaultIcon:p,primaryText:f,secondaryText:g,buttonText:y,iconType:x,onClick:b}}),[a,m,S,n,T,C,r,t]);return e(d).createElement(y.ConnectHardwareStepContainer,null,e(d).createElement(y.ConnectHardwareIconHeaderWrapper,null,e(d).createElement(p.IconHeader,{icon:e(d).createElement(u.ConfirmationIcon,{defaultIcon:b,type:H}),primaryText:E,headerStyle:p.IconHeaderStyle.Large,secondaryText:A})),e(d).createElement(l.Button,{onClick:k,theme:"primary",disabled:x},I))},C=()=>{const{t:t}=(0,i.useTranslation)(),{pushSubStep:n}=(0,g.useHardwareOnboardingStore)();return e(d).createElement(y.ConnectHardwareStepContainer,null,e(d).createElement(y.ConnectHardwareIconHeaderWrapper,null,e(d).createElement(p.IconHeader,{icon:e(d).createElement(m.IconLedgerLogo,null),primaryText:t("connectHardwareLedger"),headerStyle:p.IconHeaderStyle.Large,secondaryText:t("connectHardwareStartConnection"),animateText:!0})),e(d).createElement(l.Button,{onClick:()=>n(e(d).createElement(S,null)),theme:"primary"},t("commandConnect")))}})),n.register("1GS29",(function(e,r){t(e.exports,"ConnectHardwareContainer",(function(){return c})),t(e.exports,"ConnectHardwareContainerPadding",(function(){return i})),t(e.exports,"ConnectHardwareIconHeaderWrapper",(function(){return s})),t(e.exports,"ConnectHardwareStepContainer",(function(){return d}));var a=n("cZIbv"),o=n("iUteh");const c=(0,a.default)(o.OnboardingContainer)`
  display: flex;
  flex-direction: column;
`,i=a.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 20px 20px;
`,s=a.default.div`
  padding-top: 44px;
`,d=a.default.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  overflow: auto;
`})),n.register("iUteh",(function(e,r){t(e.exports,"OnboardingContainer",(function(){return c}));var a=n("cZIbv"),o=n("nhTvJ");const c=a.default.main`
  width: ${o.PHANTOM_ONBOARDING_CONTAINER_WIDTH}px;
  min-height: ${o.PHANTOM_ONBOARDING_CONTAINER_HEIGHT}px;
  position: relative;
  overflow: hidden;
  background-color: #222222;
  border: 1px solid #323232;
  border-radius: 16px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
`})),n.register("nhTvJ",(function(e,n){t(e.exports,"PHANTOM_ONBOARDING_CONTAINER_WIDTH",(function(){return r})),t(e.exports,"PHANTOM_ONBOARDING_CONTAINER_HEIGHT",(function(){return a})),t(e.exports,"PHANTOM_ONBOARDING_STEP_HEADER_HEIGHT",(function(){return o}));const r=420,a=480,o=46})),n.register("aV5N8",(function(r,a){t(r.exports,"ConnectHardwareOpenApp",(function(){return H}),(function(e){return H=e}));var o=n("6Tvfa"),c=n("d0go3"),i=n("belzv"),s=n("lBuGR"),d=n("hsoDC"),l=n("lMzyG"),u=n("gd9Oy"),p=n("W0Kfy"),m=n("lDSNw"),h=n("cZIbv"),f=n("8PPME"),g=n("laYjG"),y=n("03QiC"),w=n("5ftLv"),v=n("kpxNY"),S=n("02iAW"),C=n("kn91D"),T=n("gMNJN"),x=n("d1qx3"),b=n("8GZOc"),E=n("1GS29"),A=n("72wON"),I=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function c(e){try{s(r.next(e))}catch(e){o(e)}}function i(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}s((r=r.apply(e,t||[])).next())}))};const H=()=>{const{chainImportStep:t,setIncrementChainImportStep:n,selectedChains:r,selectedChainsMap:a,pushStep:h,pushSubStep:N,setDiscoveredAccounts:D,setDerivedAccountGroups:P}=(0,b.useHardwareOnboardingStore)(),B=(0,m.useRef)(b.useHardwareOnboardingStore.getState().derivedAccountGroups),{t:M,i18n:L}=(0,l.useTranslation)(),G=r[t-1],{data:j=[],isFetched:F,isError:_}=(0,b.useHardwareOnboardingStore)((e=>e.existingAccounts)),[R,$]=(0,m.useState)(!1),W=(0,m.useMemo)((()=>{const e=[],t=a.get(G)||{};for(const[n,r]of Object.entries(t))r&&e.push(n);return e}),[G,a]),{chainNameTextOr:z,chainNameTextAnd:Z}=(0,m.useMemo)((()=>{const e=W.map((e=>i.Chains.getChainName(e))),t=new Intl.ListFormat(L.resolvedLanguage,{style:"long",type:"disjunction"}),n=new Intl.ListFormat(L.resolvedLanguage,{style:"long",type:"conjunction"});return{chainNameTextOr:t.format(e),chainNameTextAnd:n.format(e)}}),[W,L]),Y=(0,m.useMemo)((()=>W.map((t=>e(m).createElement(y.ChainLogo,{key:t,networkID:t,width:90,height:90,strokeWidth:1})))),[W]);(0,m.useEffect)((()=>{const e=b.useHardwareOnboardingStore.subscribe((e=>B.current=e.derivedAccountGroups));return()=>e()}),[]);const K=(0,m.useMemo)((()=>{const e=[];switch(G){case u.AddressType.Solana:e.push({pathType:c.DerivationPathType.Bip44RootSolana});break;case u.AddressType.EVM:e.push({pathType:c.DerivationPathType.Bip44RootEthereum});case u.AddressType.BitcoinTaproot:case u.AddressType.BitcoinNativeSegwit:case u.AddressType.BitcoinNestedSegwit:case u.AddressType.BitcoinLegacy:}for(let t=0;t<19;++t)switch(G){case u.AddressType.Solana:e.push({index:t,pathType:c.DerivationPathType.Bip44ChangeSolana}),e.push({index:t,pathType:c.DerivationPathType.Bip44Solana});break;case u.AddressType.EVM:e.push({index:t,pathType:c.DerivationPathType.Bip44Ethereum}),e.push({index:t,pathType:c.DerivationPathType.Bip44EthereumSecondary});break;case u.AddressType.BitcoinTaproot:case u.AddressType.BitcoinNativeSegwit:case u.AddressType.BitcoinNestedSegwit:case u.AddressType.BitcoinLegacy:e.push({index:t,pathType:c.DerivationPathType.BitcoinTaproot},{index:t,pathType:c.DerivationPathType.BitcoinNativeSegwit})}return e}),[G]),[V,q]=(0,m.useState)(!0),{data:J=d.LEDGER_NOT_CONNECTED_STATE}=T.hooks.useLedgerWireTransportState(V,!0),{data:[Q]}=(0,s.useFeatureFlags)(["kill-ledger-xpub-derivation"]),{data:U,error:X,fetchStatus:ee,refetch:te}=T.hooks.useLedgerAddresses(J,K,!0,!Q),ne="fetching"===ee,re=!J.isConnected&&"reconnecting"!==J.status,[ae,oe]=(0,m.useState)(!1),{data:ce,refetch:ie}=T.hooks.useRequestLedgerPermission(ae,!0);(0,m.useEffect)((()=>{re&&q(!1)}),[re]),(0,m.useEffect)((()=>{"granted"===(null==ce?void 0:ce.type)&&(q(!0),oe(!1))}),[ce]);const se=(0,m.useCallback)((()=>I(void 0,void 0,void 0,(function*(){var n;if(U&&Object.keys(U).length){const a=[...B.current];let c=0;for(const e of Object.values(U)){const t=null!==(n=a[c])&&void 0!==n?n:{accounts:{}},r={accounts:Object.assign({},t.accounts),derivationIndex:K[c].index};switch(e.addressType){case u.AddressType.EVM:W.includes(i.NetworkIDs.Polygon.Mainnet)&&(r.accounts[`${i.NetworkIDs.Polygon.Mainnet}-${e.address}`]={chainType:e.addressType,chainId:i.NetworkIDs.Polygon.Mainnet,address:e.address,publicKey:e.publicKey,pathParams:K[c]}),W.includes(i.NetworkIDs.Ethereum.Mainnet)&&(r.accounts[`${i.NetworkIDs.Ethereum.Mainnet}-${e.address}`]={chainType:e.addressType,chainId:i.NetworkIDs.Ethereum.Mainnet,address:e.address,publicKey:e.publicKey,pathParams:K[c]});break;case u.AddressType.Solana:r.accounts[`${i.NetworkIDs.Solana.Mainnet}-${e.address}`]={chainType:e.addressType,address:e.address,publicKey:e.publicKey,chainId:i.NetworkIDs.Solana.Mainnet,pathParams:K[c]};break;case u.AddressType.BitcoinTaproot:case u.AddressType.BitcoinNativeSegwit:case u.AddressType.BitcoinNestedSegwit:case u.AddressType.BitcoinLegacy:r.accounts[`${i.NetworkIDs.Bitcoin.Mainnet}-${e.address}`]={chainType:e.addressType,address:e.address,publicKey:e.publicKey,chainId:i.NetworkIDs.Bitcoin.Mainnet,pathParams:K[c]}}a[c]=r,c++}if(P(a),F&&r.length===t){$(!0);const t=(e=>{const t=new Set;for(const n of e)for(const{address:e}of n.addresses)t.add(e);return t})(j),n=a.reduce(((e,n)=>{let r=!1;for(const{address:e}of Object.values(n.accounts))r=r||t.has(e);return r||e.push(n),e}),[]),r=[],c=[];for(let e=0;e<n.length;e+=p.BATCH_SIZE_BY_PLATFORM.extension){const t=n.slice(e,e+p.BATCH_SIZE_BY_PLATFORM.extension).map((e=>Object.entries(e.accounts).reduce(((e,[t,n])=>(e[t]={account:n},e)),{})));c.push(t)}for(const e of c)r.push((0,p.discoverAccounts)(e));const i=(yield Promise.all(r)).flat().map((e=>{switch(e.status){case"discovered":return Object.assign(Object.assign({},e),{accounts:e.accounts.filter((e=>e.hasAccountActivity||(0,o.isRecommendedDerivationPathType)(e.derivationPathType)))});case"undiscovered":return Object.assign(Object.assign({},e),{accounts:e.accounts.filter((e=>(0,o.isRecommendedDerivationPathType)(e.derivationPathType)))})}})).filter((e=>e.accounts.length>0)).map((e=>{const t=(0,f.default)();return Object.assign(Object.assign({},e),{discoveryIdentifier:t})})),s=i.filter((e=>"undiscovered"===e.status||e.isSelectedByDefault)),d=i.filter((e=>!("undiscovered"===e.status||e.isSelectedByDefault))).slice(0,2),l=s.length>0,u=j.filter((e=>e.type===o.AccountType.Ledger)).length,g=(l?[...s,...d]:i.filter((e=>!e.accounts.some((e=>!(0,o.isRecommendedDerivationPathType)(e.derivationPathType))))).slice(0,3)).map(((e,t)=>Object.assign(Object.assign({},e),{accountIndex:u+t})));D(g,l),h(e(m).createElement(A.ConnectHardwareImportAccounts,{preventBack:!0}))}}}))),[U,P,F,r.length,t,K,W,j,D,h]);let de,le,ue,pe;(0,m.useEffect)((()=>{U&&Object.keys(U).length===K.length&&(se(),r.length!==t&&(n(),N(e(m).createElement(H,{preventBack:!0}))))}),[U,K,h,N,t,r,se,n]);let me=()=>{};return _?(de=e(m).createElement(w.ConfirmationIcon,{type:w.ConfirmationIconType.Failure}),le=M("connectHardwareErrorLedgerGeneric"),ue=M("connectHardwareErrorLedgerPhantomLocked"),me=()=>I(void 0,void 0,void 0,(function*(){const e=yield(0,x.getCurrentTabAsync)();void 0!==e.id&&(0,x.closeTabAsync)(e.id)})),pe=M("commandClose")):ce&&"granted"!==ce.type?(de=e(m).createElement(w.ConfirmationIcon,{type:w.ConfirmationIconType.Warning}),le=M("connectHardwarePermissionDeniedPrimary"),ue=M("connectHardwarePermissionDeniedSecondary"),pe=M("homeErrorButtonText"),me=ie):re?(de=e(m).createElement(w.ConfirmationIcon,{type:w.ConfirmationIconType.Warning}),le=M("connectHardwarePermissionUnableToConnect"),ue=M("connectHardwarePermissionUnableToConnectDescription"),pe=M("commandConnect"),me=ie):X instanceof d.LedgerLockedError?(de=e(m).createElement(w.ConfirmationIcon,{type:w.ConfirmationIconType.Failure}),le=M("connectHardwareErrorLedgerLocked"),ue=M("connectHardwareErrorLedgerLockedDescription"),pe=M("homeErrorButtonText"),me=te):X?(de=e(m).createElement(w.ConfirmationIcon,{type:w.ConfirmationIconType.Failure}),le=M("connectHardwareErrorLedgerGeneric"),ue=M("connectHardwareErrorLedgerGenericDescription"),pe=M("homeErrorButtonText"),me=te):"reconnecting"==J.status?(de=e(m).createElement(w.ConfirmationIcon,{defaultIcon:e(m).createElement(S.SpinnerIcon,null),type:w.ConfirmationIconType.Default}),le=M("connectHardwareConnecting"),ue=M("connectHardwareConnectingDescription")):R?(de=e(m).createElement(w.ConfirmationIcon,{defaultIcon:e(m).createElement(S.SpinnerIcon,null),type:w.ConfirmationIconType.Default}),le=M("connectHardwareDiscoveringAccounts"),ue=M("connectHardwareDiscoveringAccountsDescription")):ne?(de=e(m).createElement(w.ConfirmationIcon,{defaultIcon:e(m).createElement(S.SpinnerIcon,null),type:w.ConfirmationIconType.Default}),le=M("connectHardwareConnectingAccounts"),ue=M("connectHardwareFindingAccountsWithActivity",{chainName:Z})):(de=e(m).createElement(O,{logoCount:Y.length},Y),le=M("connectHardwareOpenAppInterpolated",{app:z}),ue=M("connectHardwareOpenAppDescription")),e(m).createElement(E.ConnectHardwareStepContainer,null,e(m).createElement(E.ConnectHardwareIconHeaderWrapper,null,e(m).createElement(v.IconHeader,{icon:de,primaryText:le,headerStyle:v.IconHeaderStyle.Large,secondaryText:ue})),pe?e(m).createElement(g.Button,{onClick:me,theme:"primary"},pe):e(m).createElement(k,null,e(m).createElement(C.Text,{color:"#999999",size:14},M("connectHardwareAccountsStepOfSteps",{stepNum:t,totalSteps:r.length}))))},k=h.default.div`
  align-self: center;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 80px;
  padding: 8px 16px;
  max-width: 150px;
`,O=h.default.div`
  display: flex;

  svg {
    position: relative;

    :first-child {
      left: ${e=>e.logoCount>1?"12.5px":0};
    }

    :nth-child(2) {
      left: ${e=>e.logoCount>1?"-12.5px":0};
    }
  }
`})),n.register("72wON",(function(r,a){t(r.exports,"ConnectHardwareImportAccounts",(function(){return f}));var o=n("lMzyG"),c=n("lDSNw"),i=n("cZIbv"),s=n("laYjG"),d=n("5ftLv"),l=n("kpxNY"),u=n("8GZOc"),p=n("1GS29"),m=n("3HeeF"),h=n("9P51g");const f=()=>{const{t:t}=(0,o.useTranslation)(),{discoveredAccounts:n,activeAccountsFound:r,setSelectedAccounts:a,pushSubStep:i}=(0,u.useHardwareOnboardingStore)(),f=(0,c.useMemo)((()=>{let e;if(r){const r=n.filter((e=>"undiscovered"===e.status||e.isSelectedByDefault));e=t(1===r.length?"connectHardwareFoundAccountsWithActivitySingular":"connectHardwareFoundAccountsWithActivity",{numOfAccounts:r.length})}else e=t("connectHardwareFoundSomeAccounts");return e}),[r,t,n]),w=(0,c.useCallback)((()=>{i(e(c).createElement(h.ConnectHardwareSelectAccounts,{activeAccounts:n}))}),[i,n]),v=(0,c.useCallback)((()=>{i(e(c).createElement(m.ConnectHardwareImportConfirmation,{preventBack:!0}))}),[i]);return(0,c.useEffect)((()=>{const e=n.reduce(((e,t,n)=>(("discovered"===t.status&&t.isSelectedByDefault||0===n)&&(e[t.discoveryIdentifier]=!0),e)),{});a(e)}),[n,a,r,t]),e(c).createElement(p.ConnectHardwareStepContainer,null,e(c).createElement(g,null,e(c).createElement(l.IconHeader,{icon:e(c).createElement(d.ConfirmationIcon,{type:d.ConfirmationIconType.Success}),primaryText:t("connectHardwareConnectAccounts"),headerStyle:l.IconHeaderStyle.Large,secondaryText:f})),e(c).createElement(y,{onClick:w,theme:"default"},t("connectHardwareSelectAccounts")),e(c).createElement(s.Button,{onClick:v,theme:"primary"},t("commandContinue")))},g=(0,i.default)(p.ConnectHardwareIconHeaderWrapper)`
  margin-bottom: 35px;
`,y=(0,i.default)(s.Button)`
  margin-bottom: 10px;
`})),n.register("3HeeF",(function(r,a){t(r.exports,"ConnectHardwareImportConfirmation",(function(){return h}));var o=n("d0go3"),c=n("lMzyG"),i=n("lDSNw"),s=n("laYjG"),d=n("5ftLv"),l=n("kpxNY"),u=n("gMNJN"),p=n("8GZOc"),m=n("1GS29");const h=()=>{const{t:t}=(0,c.useTranslation)(),{discoveredAccounts:n,selectedAccounts:r,onConnectHardwareAccounts:a,onConnectHardwareDone:h}=(0,p.useHardwareOnboardingStore)(),{mutateAsync:f}=u.hooks.useUpdateVisibleBitcoinAddressTypes(),[g,y]=(0,i.useState)(!1),w=(0,i.useMemo)((()=>n.filter((e=>!!r[e.discoveryIdentifier]))),[n,r]);return(0,i.useEffect)((()=>{if(w.length){const e=[],t=new Set;for(const n of w){const{accounts:r,seedIndex:a,accountIndex:c}=n,i=[],s=[];for(const e of r)(0,o.isBitcoinDerivationPathType)(e.derivationPathType)?(s.push({pathType:e.derivationPathType,value:e.publicKey}),"amount"in e&&0===parseFloat(e.amount)||t.add(e.chainType)):((0,o.isEVMDerivationPathType)(e.derivationPathType)||(0,o.isSolanaDerivationPathType)(e.derivationPathType))&&i.push({pathType:e.derivationPathType,value:e.address});e.push({derivationIndex:a,addresses:i,publicKeys:s,accountIndex:c})}a({accounts:e}).then((()=>{t.size>0&&f({addressTypes:Array.from(t)})})).finally((()=>y(!0)))}else y(!0)}),[w,a,f]),e(i).createElement(m.ConnectHardwareStepContainer,null,e(i).createElement(m.ConnectHardwareIconHeaderWrapper,null,e(i).createElement(l.IconHeader,{icon:e(i).createElement(d.ConfirmationIcon,{type:d.ConfirmationIconType.Success}),primaryText:t("connectHardwareAccountsAddedInterpolated",{numOfAccounts:w.length}),headerStyle:l.IconHeaderStyle.Large,secondaryText:t("connectHardwareFinishSecondaryText")})),e(i).createElement(s.Button,{onClick:h,theme:"primary",disabled:!g},t("pastParticipleDone")))}})),n.register("9P51g",(function(r,a){t(r.exports,"ConnectHardwareSelectAccounts",(function(){return h}));var o=n("lMzyG"),c=n("lDSNw"),i=n("cZIbv"),s=n("laYjG"),d=n("kn91D"),l=n("izP3E"),u=n("8GZOc"),p=n("1GS29"),m=n("3HeeF");const h=({activeAccounts:t})=>{const{t:n}=(0,o.useTranslation)(),{selectedAccounts:r,selectAccount:a,deselectAccount:i,pushSubStep:h}=(0,u.useHardwareOnboardingStore)(),g=(0,c.useMemo)((()=>0===Object.values(r).filter((e=>!!e)).length),[r]),y=(0,c.useCallback)((()=>{h(e(c).createElement(m.ConnectHardwareImportConfirmation,{preventBack:!0}))}),[h]);return e(c).createElement(p.ConnectHardwareStepContainer,null,e(c).createElement("div",{style:{marginBottom:15}},e(c).createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:30}},e(c).createElement(d.Text,{weight:500,size:30,lineHeight:34,maxWidth:"320px"},n("connectHardwareSelectAccounts")),e(c).createElement(f,{wordBreak:"break-word",size:18,lineHeight:22,color:"#777777"},n("connectHardwareChooseAccountsToConnect"))),e(c).createElement("div",{style:{maxHeight:420,overflowY:"scroll"}},t.map((({accounts:t,discoveryIdentifier:n,accountIndex:o})=>{const s=!!r[n];return e(c).createElement(l.DiscoveredAccountRow,{key:n,accountType:"ledger",accounts:t,accountIndex:o,checked:s,onPress:()=>{s?i(n):a(n)}})})))),e(c).createElement(s.Button,{onClick:y,theme:"primary",disabled:g},n("commandContinue")))},f=(0,i.default)(d.Text)`
  margin-top: 15px;
`})),n.register("izP3E",(function(r,a){t(r.exports,"DiscoveredAccountRow",(function(){return f}));var o=n("6Tvfa"),c=n("lMzyG"),i=n("4y59b"),s=n("lDSNw"),d=n("cZIbv"),l=n("03QiC"),u=n("7E6dj"),p=n("e4sKe"),m=n("kn91D");const h=({account:t})=>{const{t:n}=(0,c.useTranslation)();return e(s).createElement(T,null,e(s).createElement(y,null,e(s).createElement(l.ChainLogo,{networkID:t.chain.id,height:40,width:40,spacing:"large"})),e(s).createElement(w,null,e(s).createElement(S,null,e(s).createElement(p.TokenNameBadge,{networkID:t.chain.id,walletAddress:t.address},e(s).createElement(x,null,t.chain.name)),e(s).createElement(x,null,(0,o.formatHashMedium)(t.address,4))),e(s).createElement(v,null,"amount"in t&&"chain"in t?e(s).createElement(b,null,(0,i.formatTokenAmount)(t.amount)," ",t.chain.symbol):null,"amount"in t?e(s).createElement(b,null,t.lastActivityTimestamp?n("onboardingImportAccountsLastActive",{formattedTimestamp:(0,i.formatTimestampFromNow)(1e3*t.lastActivityTimestamp,!0)}):n("onboardingImportAccountsCreateNew")):null)))},f=e(s).memo((({accountType:t,accounts:n,checked:r,accountIndex:a,onPress:o})=>{const{t:i}=(0,c.useTranslation)(),d=a+1;return e(s).createElement(g,null,e(s).createElement(C,null,e(s).createElement(x,null,((e,t,n)=>{switch(t){case"seed":return e("onboardingImportAccountsAccountName",{walletIndex:n});case"ledger":return e("onboardingImportAccountsLedgerAccountName",{walletIndex:n})}})(i,t,d)),e(s).createElement(u.Checkbox,{checked:r,onChange:o})),n.map(((t,n)=>e(s).createElement(h,{key:`${t.address}-${n}`,account:t}))))})),g=d.default.div`
  margin-bottom: 24px;
  width: 100%;
`,y=d.default.div`
  flex-shrink: 0;
  margin-right: 10px;
`,w=d.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,v=d.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,S=(0,d.default)(v)`
  margin-bottom: 2px;
`,C=(0,d.default)(v)`
  background: #2a2a2a;
  margin-bottom: 1px;
  padding: 12px 16px 12px 14px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  & > span {
    margin-right: 0;
  }
`,T=d.default.div`
  background: #2a2a2a;
  margin-top: 1px;
  padding: 17px 16px 17px 14px;
  width: 100%;
  display: flex;
  align-items: center;

  &:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`,x=(0,d.default)(m.Text).attrs({size:16,lineHeight:19,weight:600})``,b=(0,d.default)(m.Text).attrs({size:14,lineHeight:17,weight:400,color:"#777777"})``})),n.register("7i1iF",(function(r,a){t(r.exports,"ConnectHardwareSelectChains",(function(){return w}));var o=n("belzv"),c=n("lMzyG"),i=n("lDSNw"),s=n("cZIbv"),d=n("laYjG"),l=n("03QiC"),u=n("7E6dj"),p=n("kn91D"),m=n("gMNJN"),h=n("gdILj"),f=n("8GZOc"),g=n("1GS29"),y=n("aV5N8");const w=()=>{const{t:t}=(0,c.useTranslation)(),{pushSubStep:n,selectedChains:r,setSelectedChains:a,selectedChainsMap:s}=(0,f.useHardwareOnboardingStore)(),u=m.hooks.useEnabledNetworkIDs(),w=m.hooks.useEnabledAddressTypes(),S=(0,i.useCallback)((e=>{const t=new Map(s),n=o.Chains.getAddressTypes(e);for(const r of n){const n=s.get(r),a=null==n?void 0:n[e];t.set(r,Object.assign(Object.assign({},n),{[e]:!a}))}const r=w.filter((e=>{const n=t.get(e)||{};return Object.values(n).reduce(((e,t)=>t?++e:e),0)>0}));a(r,t)}),[w,a,s]);(0,h.useEffectOnce)((()=>{const e=new Map;for(const t of w)e.set(t,{});for(const t of u){const n=o.Chains.getAddressTypes(t);for(const r of n){const n=e.get(r);e.set(r,Object.assign(Object.assign({},n),{[t]:!1}))}}a(r,e)}),w.length>0&&u.length>0);const C=(0,i.useMemo)((()=>u.map((t=>{const n=o.Chains.getAddressTypes(t);let r=!1;for(const e of n){const n=s.get(e);r=(null==n?void 0:n[t])||r}return e(i).createElement(v,{key:t,icon:e(i).createElement(l.ChainLogo,{networkID:t,width:40,height:40,stroke:""}),networkID:t,onPressChain:S,isChecked:r})}))),[u,s,S]),x=(0,i.useMemo)((()=>{let e=0;for(const t of s.values())e+=Object.values(t).reduce(((e,t)=>t?++e:e),0);return 0===e}),[s]);return e(i).createElement(g.ConnectHardwareStepContainer,null,e(i).createElement(p.Text,{weight:500,size:28,lineHeight:34},t("connectHardwareSelectChains")),e(i).createElement(T,null,C),e(i).createElement(d.Button,{onClick:()=>{n(e(i).createElement(y.ConnectHardwareOpenApp,{preventBack:!0}))},theme:"primary",disabled:x},t("commandContinue")))},v=({networkID:t,icon:n,onPressChain:r,isChecked:a})=>e(i).createElement(S,{onClick:()=>{r(t)}},e(i).createElement(x,null,e(i).createElement(C,null,n),e(i).createElement(p.Text,{size:16,weight:600},o.Chains.getNetworkName(t))),e(i).createElement(u.Checkbox,{checked:a})),S=s.default.div`
  align-items: center;
  background-color: #2a2a2a;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 16px 24px 16px 12px;

  :last-child {
    margin-bottom: 28px;
  }

  > span {
    margin-right: 0px;
  }
`,C=s.default.div`
  margin-right: 12px;
`,T=s.default.div`
  margin-top: 20px;
`,x=s.default.div`
  display: flex;
  align-items: center;
`}));
//# sourceMappingURL=SettingsConnectHardware.c959b640.js.map
define=__define;})(window.define);