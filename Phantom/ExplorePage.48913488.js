(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("lXzah",(function(r,l){var i;i=r.exports,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),t(r.exports,"ExplorePageContent",(function(){return y})),t(r.exports,"default",(function(){return P}));var a=n("hM5LD"),o=n("RVqnc"),s=n("70W8C"),c=n("29o0l"),d=n("88tsI"),u=n("iQL9s"),p=n("gkfw3"),m=n("27SDj"),f=n("elSIy"),x=n("eaUwt"),g=n("a0hzK"),h=n("4iDyO"),E=n("kQTlk"),k=n("gX5Te"),w=n("kWfcq"),b=n("gcdBN");function y(){var t;const n=(0,u.useLocation)(),{t:r}=(0,d.useTranslation)(),{data:l}=k.hooks.useShouldShowQuests({platform:"extension",appVersion:(0,b.getManifestVersion)()}),{error:i,refetch:p}=k.hooks.useQuests({platform:"extension",appVersion:(0,b.getManifestVersion)()}),{setActiveSection:m,activeSection:y}=(0,a.useExplore)();(0,c.useEffect)((()=>{var e;"quests"===(null===(e=n.state)||void 0===e?void 0:e.tab)&&l&&m("quests")}),[null===(t=n.state)||void 0===t?void 0:t.tab,l,i,m]);const{error:P,refetch:D}=k.hooks.useExploreSites(),{error:R,refetch:A}=k.hooks.useExploreRecommendedSites(),{refetch:j}=k.hooks.useExploreTokens(),{refetch:$}=k.hooks.useExploreCollections(),{refetch:M}=k.hooks.useExploreRecommendedTokens(),{refetch:N}=k.hooks.useExploreRecommendedCollections(),{refetch:O}=k.hooks.useLearn(),q=P&&R,B=(0,c.useCallback)((()=>{switch(y){case"sites":A(),D();break;case"collections":N(),$();break;case"tokens":M(),j();break;case"quests":l&&p();break;case"learn":O()}}),[y,A,D,N,$,M,j,l,O,p]),[z,F]=e(c).useState(""),Q=(0,o.useDebouncedState)(z,250),_=e(s)((e=>{e&&w.exploreAnalytics.onExploreSearchedByUser({searchTerm:e})}),1e3),X=!!Q;return(0,c.useEffect)((()=>{_(Q)}),[Q,_]),q?e(c).createElement(C,null,e(c).createElement(f.ExplorePageError,{title:r("exploreErrorTitle"),buttonText:r("exploreErrorButtonText"),description:r("exploreErrorDescription"),refetch:B})):e(c).createElement(v,null,e(c).createElement(x.ExploreSearchHeader,{value:z,onChange:F}),e(c).createElement(S,{hide:X},e(c).createElement(E.ExploreTabsTitles,null)),e(c).createElement(L,{hide:X},e(c).createElement(h.ExploreTabs,null),"tokens"===y&&e(c).createElement(I,null,e(c).createElement(T,null,r("exploreTokensLegalDisclaimer")))),e(c).createElement(L,{hide:!X},e(c).createElement(g.ExploreSearchResults,{query:Q})))}const v=p.default.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`,C=p.default.div`
  padding: 16px;
`,S=p.default.div`
  display: ${({hide:e})=>e?"none":"initial"};
  overflow-x: hidden;
`,L=(0,p.default)(S)`
  display: ${({hide:e})=>e?"none":"flex"};
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
`,I=p.default.div`
  padding: 12px 16px;
`,T=(0,p.default)(m.Text)`
  color: #999;
  font-feature-settings: "calt" off;

  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
`;var P=()=>e(c).createElement(a.ExploreProvider,{appVersion:(0,b.getManifestVersion)(),platform:"extension",initialSection:"sites"},e(c).createElement(y,null))})),n.register("elSIy",(function(r,l){t(r.exports,"ExplorePageError",(function(){return h}));var i=n("29o0l"),a=n("gkfw3"),o=n("aWXnn"),s=n("j81qC"),c=n("634r8"),d=n("27SDj");const u=(0,a.default)(o.Column).attrs({align:"center"})``,p=a.default.div`
  width: 48px;
  height: 48px;
  position: relative;
  margin-bottom: 15px;
  border-radius: 100%;
  background: rgba(255, 220, 98, 0.2);
`,m=(0,a.default)(c.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,f=(0,a.default)(d.Text).attrs({size:17,weight:500,lineHeight:22,margin:"0 0 10px 0"})``,x=(0,a.default)(d.Text).attrs({size:15,weight:500,lineHeight:21,margin:"0 0 15px 0",color:"#777777"})``,g=(0,a.default)(d.Text).attrs({size:16,weight:500,lineHeight:22,margin:"0",color:"#AB9FF2"})``,h=e(i).memo((t=>e(i).createElement(u,null,e(i).createElement(p,null,e(i).createElement(m,null,e(i).createElement(s.IconExclamationMarkCircle,{width:22,exclamationFill:"transparent",circleFill:"#FFE920"}))),e(i).createElement(f,null,t.title),e(i).createElement(x,null,t.description),e(i).createElement(g,{onClick:t.refetch},t.buttonText))))})),n.register("eaUwt",(function(r,l){t(r.exports,"ExploreSearchHeader",(function(){return c}));var i=n("43063"),a=n("29o0l"),o=n("gkfw3"),s=n("kGh2H");const c=({value:t,onChange:n})=>{const{t:r}=(0,i.useTranslation)();return e(a).createElement(d,null,e(a).createElement(s.SearchInput,{placeholder:r("dappBrowserSearchPlaceholder"),value:t,onChange:e=>{"value"in e.target&&"string"==typeof e.target.value&&n(e.target.value)},showClearIcon:!!t,onClear:()=>{n("")}}))},d=o.default.div`
  padding: 16px;
  padding-bottom: 0;
`})),n.register("a0hzK",(function(r,l){t(r.exports,"ExploreSearchResults",(function(){return f}));var i=n("lz5BI"),a=n("29o0l"),o=n("88tsI"),s=n("gkfw3"),c=n("4Wvp3"),d=n("hiI91"),u=n("27SDj"),p=n("kWfcq"),m=n("hl21e");const f=({query:t})=>{const{dapps:n,isLoading:r}=(0,m.useExploreSearchList)(t),l=(0,a.useMemo)((()=>[...new Array(5).keys()]),[]),{t:i}=(0,o.useTranslation)();return r?e(a).createElement(x,{testId:"explore-search-results-loading",items:l.map((t=>({key:t.toString(),image:e(a).createElement(b,null),textMain:e(a).createElement(d.SkeletonLoader,{width:"96px",height:"16px",marginBottom:"2px",borderRadius:"16px"}),textSecondary:e(a).createElement(d.SkeletonLoader,{width:"62px",height:"14.5px",borderRadius:"16px"})})))}):n.length?e(a).createElement(x,{testId:"explore-search-results",items:n.map(((t,n)=>({key:t.id,href:t.href,image:e(a).createElement(c.ShapedImage,{src:t.imageUrl,size:"xsmall",shape:"square"}),textMain:e(a).createElement(k,null,t.name),textSecondary:e(a).createElement(w,null,t.category),onClick:()=>{p.exploreAnalytics.onExploreSearchItemClickedByUser({itemDetails:{position:n+1,title:t.name,id:t.id}})}})))}):e(a).createElement(y,{"data-testid":"explore-search-results-nodata"},e(a).createElement(v,null,i("dappBrowserSearchNoApps")))},x=({items:t,testId:n})=>e(a).createElement(g,{"data-testid":n},t.map(((n,r)=>e(a).createElement(h,{key:n.key,href:n.href,onClick:n.onClick,whileHover:{background:"#333"},style:{background:"#222"},transition:{ease:[.5,1,.89,1],duration:.1}},e(a).createElement("div",null,n.image),e(a).createElement(E,{isLast:r===t.length-1},n.textMain,n.textSecondary))))),g=s.default.div`
  margin-top: 16px;
  width: 100%;
`,h=(0,s.default)(i.motion.a).attrs({target:"_blank",rel:"noopener noreferrer"})`
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  text-decoration: none;
`,E=s.default.div`
  display: flex;
  flex-direction: column;
  border-bottom: ${e=>e.isLast?"none":"1px solid #323232"};
  width: 100%;
  padding: 16px 0;
`,k=(0,s.default)(u.Text)`
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,w=(0,s.default)(u.Text)`
  text-align: left;
  color: #999;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,b=(0,s.default)(d.SkeletonLoader)`
  border-radius: 6px;
  height: 24px;
  width: 24px;
`,y=s.default.div`
  position: absolute;
  top: 64px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 56px;
`,v=(0,s.default)(u.Text)`
  color: #999;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`})),n.register("4Wvp3",(function(r,l){t(r.exports,"ShapedImage",(function(){return f}));var i=n("RVqnc"),a=n("29o0l"),o=n("gkfw3"),s=n("6UMd8"),c=n("izu1Y"),d=n("hiI91");const u=e=>{if("number"==typeof e)return e;switch(null!=e?e:"small"){case"normal":return 48;case"small":return 32;case"xsmall":return 24;case"xxsmall":return 16}},p=(0,o.default)(c.PImage)`
  border-radius: ${e=>e.borderradius}px;
  width: 100%;
  height: 100%;
`,m=o.default.div`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  align-items: center;
  justify-content: center;
  background-color: ${e=>{var t;return(0,i.hexToRGB)(e.color,null!==(t=e.alpha)&&void 0!==t?t:.1)}};
`,f=({src:t,fallback:n,alt:r,size:l="normal",shape:i="circle",style:o})=>{const c=null!=n?n:e(a).createElement(x,null,"?"),f=u(l),g=u(l),h=(e=>"square"===e?6:0)(i);return"circle"===i?e(a).createElement(s.Circle,{color:"#222222",diameter:f,style:o},e(a).createElement(p,{src:t,fallback:c,alt:r||void 0,width:f,height:g,borderradius:h,loader:e(a).createElement(d.SkeletonLoader,{borderRadius:`${h}px`,width:`${f}px`,height:`${g}px`})})):e(a).createElement(m,{color:"#222222",width:f,height:g,style:o},e(a).createElement(p,{src:t,fallback:c,alt:r||"",width:f,height:g,borderradius:h,loader:e(a).createElement(d.SkeletonLoader,{borderRadius:`${h}px`,width:`${f}px`,height:`${g}px`})}))},x=o.default.div`
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`})),n.register("kWfcq",(function(e,r){t(e.exports,"exploreAnalytics",(function(){return a}));var l=n("hM5LD"),i=n("twk6W");const a=new(0,l.ExploreAnalytics)(i.analytics)})),n.register("hl21e",(function(e,r){t(e.exports,"useExploreSearchList",(function(){return s}));var l=n("hM5LD"),i=n("RVqnc"),a=n("gX5Te"),o=n("g7Vwv");const s=e=>{const t=a.hooks.useEnabledNetworkIDs(),{data:n,isLoading:r}=a.hooks.useRecommendedSearchSites({networkIds:t});return{dapps:(0,o.useFuse)(n||[],(0,i.removeWebPrefixes)(e),l.FUSE_EXPLORE_DAPPS_CONFIG).map((e=>Object.assign(Object.assign({},e),{href:(0,i.getOriginAndHostname)(e.domain).origin}))),isLoading:r}}})),n.register("4iDyO",(function(r,l){t(r.exports,"ExploreTabs",(function(){return f}));var i=n("RVqnc"),a=n("29o0l"),o=n("hURGI"),s=n("lSj6f"),c=n("eD0bo"),d=n("9EnUg"),u=n("4gU20"),p=n("Dly5J"),m=n("TiCFQ");function f(){const{sections:t,activeSection:n,activeSectionIdx:r}=(0,s.useExploreSections)(),l=(0,a.useMemo)((()=>t.map((t=>{switch(t){case"sites":return{section:t,render:e(a).createElement(p.ExploreTabSites,null)};case"tokens":return{section:t,render:e(a).createElement(m.ExploreTabTokens,null)};case"collections":return{section:t,render:e(a).createElement(u.ExploreTabCollections,null)};case"quests":return{section:t,render:e(a).createElement(o.Quests,null)};case"learn":return{section:t,render:e(a).createElement(d.Learn,null)};default:return null}})).filter(i.filterBoolean)),[t]);return e(a).createElement(c.default,{activeIndex:r,activeSection:n,items:l})}})),n.register("hURGI",(function(r,l){t(r.exports,"Quests",(function(){return f}),(function(e){return f=e}));var i=n("4xbAj"),a=n("29o0l"),o=n("gkfw3"),s=n("gX5Te"),c=n("gcdBN"),d=n("dzdn8"),u=n("adrCr"),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};const m=e(a).memo((({quests:t,isLoading:n})=>n?e(a).createElement("div",null,e(a).createElement(d.QuestSkeletonHeader,null),e(a).createElement(d.QuestSkeleton,null),e(a).createElement(d.QuestSkeleton,null)):e(a).createElement("div",null,e(a).createElement(u.QuestsList,{quests:t})))),f=()=>{const t=(()=>{const{data:e=[],isLoading:t,error:n}=s.hooks.useQuests({platform:"extension",appVersion:(0,c.getManifestVersion)()}),{data:r}=s.hooks.useSelectedMultiChainAccount(),{data:l}=s.hooks.useIsAnalyticsOptedOut();return(0,a.useMemo)((()=>({shouldShowQuests:!l&&(null==r?void 0:r.type)!==i.AccountType.ReadOnly&&!n,quests:e,isLoading:t})),[r,e,l,t,n])})(),{shouldShowQuests:n}=t,r=p(t,["shouldShowQuests"]);return n?e(a).createElement(x,{"data-testid":"quests"},e(a).createElement(m,Object.assign({},r))):null},x=o.default.div`
  padding: 16px;
  padding-top: 0;
`})),n.register("dzdn8",(function(r,l){t(r.exports,"Separator",(function(){return x})),t(r.exports,"QuestSkeletonHeader",(function(){return g})),t(r.exports,"QuestSkeleton",(function(){return h}));var i=n("29o0l"),a=n("gkfw3"),o=n("aWXnn"),s=n("634r8"),c=n("hiI91");const d="14px",u="8px",p="#484848",m=(0,a.default)(c.SkeletonLoader)`
  width: 100%;
  height: 144px;
  border-top-left-radius: ${u};
  border-top-right-radius: ${u};
`,f=(0,a.default)(c.SkeletonLoader).attrs({backgroundColor:"#484848",borderRadius:"8px"})``,x=a.default.div`
  background: #474747;
  height: 1px;
  opacity: 0.6;
  width: 100%;
`,g=()=>e(i).createElement(c.SkeletonLoader,{align:"center",width:"150px",height:"30px",backgroundColor:"#2D2D2D",borderRadius:u,margin:"0 auto 17px auto"}),h=()=>e(i).createElement(e(i).Fragment,null,e(i).createElement(c.SkeletonLoader,{width:"100%",height:"308px",backgroundColor:"#2D2D2D",borderRadius:u,margin:"0 0 10px 0"},e(i).createElement(o.Column,null,e(i).createElement(m,{align:"flex-start",justify:"flex-end",margin:"0 0 10px"},e(i).createElement(f,{align:"flex-start",justify:"flex-end",width:"65px",height:"20px",margin:"10px 10px 0 0",borderRadius:"32px"})),e(i).createElement(o.Column,{padding:"16px"},e(i).createElement(c.SkeletonLoader,{justify:"flex-start",width:"60px",height:d,backgroundColor:p,borderRadius:"8px",margin:"0 0 17px 0"}),e(i).createElement(c.SkeletonLoader,{justify:"flex-start",width:"125px",height:d,backgroundColor:p,borderRadius:u})),e(i).createElement(x,null),e(i).createElement(s.Row,{padding:"16px"},e(i).createElement(c.SkeletonLoader,{width:"40px",height:"40px",backgroundColor:p,borderRadius:u}),e(i).createElement(o.Column,{width:"auto",margin:"0 0 0 10px"},e(i).createElement(c.SkeletonLoader,{justify:"flex-start",width:"60px",height:d,backgroundColor:p,borderRadius:u,margin:"0 0 5px 0"}),e(i).createElement(c.SkeletonLoader,{justify:"flex-start",width:"125px",height:d,backgroundColor:p,borderRadius:u}))))))})),n.register("adrCr",(function(r,l){t(r.exports,"QuestsList",(function(){return o}));var i=n("29o0l"),a=n("jG8Ox");const o=({quests:t})=>e(i).createElement(e(i).Fragment,null,t.map((t=>e(i).createElement(a.QuestListItem,Object.assign({key:t.id},t)))))})),n.register("jG8Ox",(function(e,r){t(e.exports,"QuestListItem",(function(){return I}));var l=n("43063"),i=n("ibwoK"),a=n("29o0l"),o=n("gkfw3"),s=n("evHvm"),c=n("43gjF"),d=n("feAoQ"),u=n("eKiPG"),p=n("hFkH3"),m=n("6UMd8"),f=n("27SDj"),x=n("hOnAa"),g=n("dzdn8"),h=n("jOfN3");const E=(0,o.default)(s.ExploreTile)`
  border: 1px solid rgba(71, 71, 71, 0.4);
  border-radius: ${12}px;
  box-shadow: ${e=>e.isPreview?"":"0px 4px 20px 0px rgba(0, 0, 0, 0.25)"};
  cursor: ${e=>e.isDisabled||e.isPreview?"auto":"pointer"};
  margin-bottom: 24px;
  position: relative;
`,k=o.default.div`
  background-color: rgba(44, 45, 48, 0.5);
  border-radius: ${12}px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`,w=o.default.div`
  align-items: center;
  border-top-left-radius: ${12}px;
  border-top-right-radius: ${12}px;
  display: flex;
  height: 144px;
  justify-content: center;
  overflow: hidden;
`,b=o.default.img`
  max-width: 100%;
`,y=o.default.div`
  padding: 16px;
`,v=(0,o.default)(f.Text)`
  margin-bottom: 8px;
`,C=(0,o.default)(f.Text)``,S=(0,o.default)(m.Circle).attrs({diameter:32})`
  background-color: transparent;
  border: 1px solid #333333;
`,L=a.memo((e=>{const{titleLong:t,imageUrl:n,description:r,isCompleted:l,reward:i,badge:o,isPreview:s,questState:c,onClickQuest:d,onClickQuestRewardPreview:u,onClaimQuestReward:p}=e;return a.createElement(E,{onClick:d,isDisabled:l,isPreview:s,"data-testid":"quest-list-item"},a.createElement(w,null,a.createElement(b,{src:n}),o&&a.createElement(h.QuestStatusBadge,Object.assign({},o)),s&&a.createElement(k,null)),a.createElement(g.Separator,null),a.createElement(y,null,a.createElement(v,{textAlign:"left",size:16,weight:500,lineHeight:19},t),a.createElement(C,{color:"#999",textAlign:"left",weight:400,lineHeight:17,size:14},r)),i&&a.createElement(a.Fragment,null,a.createElement(g.Separator,null),a.createElement(x.QuestRewardSection,{isQuestCompleted:l,questState:c,reward:i,onClickQuestRewardPreview:u,onClaimQuestReward:p})))})),I=e=>{const t=(e=>{const{t:t}=(0,l.useTranslation)(),{id:n,titleShort:r,networkIds:o,interstitial:s,reward:m,isPreview:x,previewUrl:g,questState:h}=e,{handleShowModalVisibility:E,handleHideModalVisibility:k}=(0,d.useModals)(),w=(0,c.useDeepLink)(),b=a.useMemo((()=>["claimed","completed_unclaimable","completed"].includes(h)),[h]),y=a.useCallback((e=>{if(x&&null!=g)return u.questAnalytics.onQuestPreviewUrlClick({questId:n,shortName:r},g),void w(e,{destinationType:i.DeepLinkDestination.ExternalLink,url:g});if(b||null==s)return;const{destinationType:t,url:l,lineItems:o,primaryButtonText:c,secondaryButtonText:d,title:m}=s,h=c.length>19||d.length>19;u.questAnalytics.onQuestSelected({questId:n,shortName:r}),E("interstitial",{bodyTitle:m,details:o.map(((e,t)=>({icon:a.createElement(S,null,a.createElement(f.Text,{size:14},t+1)),title:e.title,subtitle:e.description}))),icon:s.imageUrl,onDismiss:()=>{u.questAnalytics.onQuestInterstitialDismiss({questId:n,shortName:r})},FooterComponent:()=>a.createElement(p.ButtonGroup,{vertical:h,buttons:[{text:d,onClick:()=>{u.questAnalytics.onQuestInterstitialSecondaryClick({questId:n,shortName:r,buttonText:d}),k("interstitial")}},{text:c,theme:"primary",onClick:()=>{u.questAnalytics.onQuestInterstitialPrimaryClick({questId:n,shortName:r,buttonText:c}),w(e,{destinationType:t,url:l}),k("interstitial")}}]})})}),[E,k,s,w,n,b,x,g,r]),v=a.useCallback((e=>{if(b||null==m||m.hasClaimed)return;e.stopPropagation();const{title:n,description:r,imageUrl:l}=m;E("interstitial",{bodyTitle:n,bodyDescription:r,icon:l,FooterComponent:()=>a.createElement(p.Button,{onClick:()=>k("interstitial")},t("commandDismiss"))})}),[b,E,k,m,t]),C=a.useCallback((()=>{null==m||m.hasClaimed||(u.questAnalytics.onQuestRewardClaimed({questId:n,shortName:r}),E("claimReward",{questId:n,networkIds:o,onPressDismiss:()=>k("claimReward")}))}),[m,n,o,E,k,r]);return a.useMemo((()=>Object.assign(Object.assign({},e),{isCompleted:b,onClickQuestRewardPreview:v,onClaimQuestReward:C,onClickQuest:y})),[b,e,y,v,C])})(e);return a.createElement(L,Object.assign({},t))}})),n.register("evHvm",(function(r,l){t(r.exports,"ExploreTile",(function(){return s}),(function(e){return s=e}));var i=n("lz5BI"),a=n("29o0l"),o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};const s=t=>{var{hideAnimation:n}=t,r=o(t,["hideAnimation"]);return e(a).createElement(i.motion.div,Object.assign({whileHover:n?void 0:{scale:.97},transition:{ease:[.16,1,.3,1],duration:.4}},r))}})),n.register("43gjF",(function(r,l){t(r.exports,"useDeepLink",(function(){return m}));var i=n("ibwoK"),a=n("29o0l"),o=n("iQL9s"),s=n("brWcm"),c=n("jOE8F"),d=n("9aR5q"),u=n("gcdBN"),p=n("jcNNm");const m=()=>{const{showSettingsMenu:t}=(0,c.useSettingsMenu)(),{showBuyFungibleSelectionModal:n}=(0,s.useLegacyModals)(),r=(0,o.useNavigate)();return(0,a.useCallback)(((l,o)=>{const{destinationType:s,url:c}=o;switch(s){case i.DeepLinkDestination.ExternalLink:(0,u.openTabAsync)({url:c});break;case i.DeepLinkDestination.Buy:n();break;case i.DeepLinkDestination.Collectibles:r(d.Path.Collectibles);break;case i.DeepLinkDestination.Explore:r(d.Path.Explore);break;case i.DeepLinkDestination.Quests:r(d.Path.Explore,{state:{tab:"quests",date:Date.now()}});break;case i.DeepLinkDestination.Swapper:r(d.Path.Swap);break;case i.DeepLinkDestination.SettingsImportSeedPhrase:(0,u.openTabAsync)({url:"onboarding.html?append=true"});break;case i.DeepLinkDestination.ConnectHardwareWallet:(0,u.openTabAsync)({url:"connect_hardware.html"});break;default:{const n=(0,p.getSanityComponentMapping)(s);if(!n)return;t(l,e(a).createElement(n,null))}}}),[r,t,n])}})),n.register("jcNNm",(function(e,r){t(e.exports,"getSanityComponentMapping",(function(){return a}));var l=n("ibwoK"),i=n("3FC78");const a=e=>{if(e===l.DeepLinkDestination.SettingsSecurityAndPrivacy)return i.MultiChainSecurity}})),n.register("eKiPG",(function(e,r){t(e.exports,"questAnalytics",(function(){return a}));var l=n("hnZYD"),i=n("twk6W");const a=new(0,l.QuestAnalytics)(i.analytics)})),n.register("hOnAa",(function(r,l){t(r.exports,"QuestRewardSection",(function(){return f}));var i=n("43063"),a=n("29o0l"),o=n("gkfw3"),s=n("hFkH3"),c=n("j81qC"),d=n("27SDj");const u=o.default.div`
  padding: 16px;
`,p=o.default.div`
  align-self: center;
  margin-right: 8px;
`,m=(0,o.default)(s.Button).attrs({theme:"primary"})`
  align-self: center;
  height: 32px;
  max-width: 80px;
  padding: 8px 14px;
  width: auto;
`,f=({isQuestCompleted:t,questState:n,reward:r,onClickQuestRewardPreview:l,onClaimQuestReward:o})=>{const{t:s}=(0,i.useTranslation)(),f="completed"===n||"claimed"===n,x=s("claimed"===n?"pastParticipleClaimed":"commandClaim");return e(a).createElement(u,null,e(a).createElement("div",{style:{display:"flex"}},e(a).createElement("div",{onClick:l,style:{cursor:t?"auto":"pointer",display:"flex",flexGrow:1,marginRight:16}},e(a).createElement(p,null,e(a).createElement(c.IconReward,null)),e(a).createElement("div",null,e(a).createElement(d.Text,{color:"#999",textAlign:"left",size:13,lineHeight:16},s("reward")),e(a).createElement(d.Text,{textAlign:"left",size:14,weight:600,lineHeight:16},r.title))),f&&e(a).createElement(m,{onClick:o,disabled:"claimed"===n},e(a).createElement(d.Text,{color:"#222",weight:600,lineHeight:16,size:13},x))))}})),n.register("jOfN3",(function(r,l){t(r.exports,"QuestStatusBadge",(function(){return d}));var i=n("29o0l"),a=n("gkfw3"),o=n("j81qC"),s=n("27SDj"),c=n("leCQw");const d=({text:t,color:n,tooltip:r})=>r?e(i).createElement(u,null,e(i).createElement(c.QuestBadgeTooltip,Object.assign({},r),e(i).createElement(p,null,e(i).createElement(m,{color:n},t),e(i).createElement(o.IconInfo,{width:16,fill:n,"data-testid":"quest-status-badge-info-icon"})))):e(i).createElement(u,null,e(i).createElement(p,null,e(i).createElement(m,{color:n},t))),u=a.default.div`
  position: absolute;
  top: 8px;
  right: 8px;
`,p=a.default.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  background: rgba(34, 34, 34, 0.8);
  backdrop-filter: blur(2px);
  border-radius: 32px;
  padding: 4px 8px;
`,m=(0,a.default)(s.Text)`
  color: ${e=>e.color};
  font-size: 13px;
  font-weight: 600;
  line-height: normal;
`})),n.register("leCQw",(function(e,r){t(e.exports,"QuestBadgeTooltip",(function(){return s}));var l=n("29o0l"),i=n("gkfw3"),a=n("il2BD"),o=n("27SDj");const s=({children:e,lineOne:t,lineTwo:n})=>{const r=l.createElement(c,{onClick:e=>{e.stopPropagation()}},l.createElement(d,null,t),n&&l.createElement(d,null,n));return l.createElement(a.TooltipInteractive,{content:r,alignment:"bottomRightDirect",index:0},e)},c=i.default.div`
  display: flex;
  cursor: default;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
  padding: 12px 16px;
  max-width: 226px;
`,d=(0,i.default)(o.Text).attrs({lineHeight:17,size:14,textAlign:"start"})``})),n.register("lSj6f",(function(e,r){t(e.exports,"useExploreSections",(function(){return s}));var l=n("hM5LD"),i=n("29o0l"),a=n("gX5Te"),o=n("gcdBN");const s=()=>{const{data:e}=a.hooks.useShouldShowQuests({platform:"extension",appVersion:(0,o.getManifestVersion)()}),{activeSection:t,sections:n}=(0,l.useExplore)(),r=(0,i.useMemo)((()=>n.filter((t=>!("quests"===t&&!e)))),[n,e]),s=(0,i.useMemo)((()=>r.indexOf(t)),[t,r]);return{sections:r,activeSection:t,activeSectionIdx:s}}})),n.register("eD0bo",(function(r,l){t(r.exports,"default",(function(){return s}));var i=n("29o0l"),a=n("3w1Ia"),o=n("gkfw3");function s({activeIndex:t,activeSection:n,items:r,animateFirstTime:l=!1}){const[o,s]=e(i).useState(!0),u=(0,a.default)(t),p=t-(u||0)>0;return(0,i.useEffect)((()=>{t!==u&&s(!1)}),[t,u,s]),e(i).createElement(d,null,r.map(((r,a)=>e(i).createElement(c,{key:r.section,testID:`animation-item-${a}`,active:n===r.section,isLeft:p,shouldAnimate:!!l||!o,inView:!p&&t===a-1||p&&t===a+1||t===a},"function"==typeof r.render?r.render():r.render))))}const c=({active:t,children:n,testID:r,isLeft:l,shouldAnimate:a,inView:o})=>e(i).createElement(u,{active:t,"data-testid":r,shouldAnimate:a,isLeft:l,inView:o},o&&n),d=o.default.div`
  position: relative;
  width: 100%;
  height: ${e=>e.height?`${e.height}px`:"auto"};
  padding-top: 16px;
`,u=o.default.div`
  display: ${e=>e.active?"block":"none"};
  visibility: ${e=>e.inView?"visible":"hidden"};
  animation-name: ${e=>e.isLeft?e.active?p:x:e.active?f:m};
  animation-duration: ${e=>e.shouldAnimate?"0.5s":"0s"};
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  transition: opacity 0.5s ease-in-out;
`,p=o.keyframes`
  0% {
    left: 300px;
    opacity: 0;
  };
  100%  {
    left: 0px;
    opacity: 1
  };
`,m=o.keyframes`
  0% {
    left: 0px;
    opacity: 1;
  };
  90% {
    left: 300px;
    opacity: 0;
  };
  100%  {
    left: 600px;
    opacity: 0;
  };
`,f=o.keyframes`
  0% {
    left: -300px;
    opacity: 0;
  };
  100%  {
    left: 0px;
    opacity: 1
  };
`,x=o.keyframes`
  0% {
    left: 0px;
    opacity: 1;
  };
  90% {
    left: -300px;
    opacity: 0;
  };
  100%  {
    left: -600px;
    opacity: 0;
  };
`})),n.register("9EnUg",(function(r,l){t(r.exports,"Learn",(function(){return p}));var i=n("29o0l"),a=n("88tsI"),o=n("gkfw3"),s=n("8pWVO"),c=n("gX5Te"),d=n("4LOwo"),u=n("aErJr");const p=()=>{const{isLoading:t,data:n,error:r,refetch:l}=c.hooks.useLearn(),{t:o}=(0,a.useTranslation)();return r&&!t&&!n||0===(null==n?void 0:n.data.length)?e(i).createElement(f,null,e(i).createElement(s.ErrorView,{title:o("exploreLearnErrorTitle"),description:o("exploreLearnErrorDescription"),refetch:l})):e(i).createElement(m,{"data-testid":"learn-container"},t?e(i).createElement(u.LearnSkeleton,null):e(i).createElement(d.LearnCards,{items:(null==n?void 0:n.data)||[]}))},m=o.default.div`
  padding: 0 16px 16px 16px;
`,f=o.default.div`
  padding: 16px;
`})),n.register("4LOwo",(function(r,l){t(r.exports,"LearnCards",(function(){return f}));var i=n("29o0l"),a=n("gkfw3"),o=n("27SDj"),s=n("43gjF"),c=n("kWfcq"),d=n("cSCtg"),u=n("evHvm");const p=({item:t,position:n})=>{const r=(0,s.useDeepLink)();return e(i).createElement(g,{hidePointer:!t.page,hideAnimation:!t.page,halfWidth:"half-width"===t.layout,"data-testid":"learn-card-tip",onClick:e=>{c.exploreAnalytics.onExploreLearnItemClickedByUser({itemDetails:{position:n,id:t.id,title:t.title,type:"tip"}}),t.page&&r(e,{destinationType:t.page,url:t.url})}},e(i).createElement(E,{background:t.backgroundColor},e(i).createElement(k,null,e(i).createElement(w,null,e(i).createElement(C,{color:"black",opacity:.5},e(i).createElement(L,{"data-testid":"learn-card-tip-icon"},e(i).createElement("img",{width:"16px",height:"16px",src:t.icon})),t.title)),e(i).createElement(w,null,e(i).createElement(v,{opacity:.7},t.description)))))},m=({item:t,position:n})=>{const r=(0,i.useCallback)((()=>{c.exploreAnalytics.onExploreLearnItemClickedByUser({itemDetails:{position:n,id:t.id,title:t.title,type:"article"}})}),[t.id,t.title,n]);return"half-width"===t.layout?e(i).createElement(h,{href:t.url,onClick:r},e(i).createElement(g,{halfWidth:!0,"data-testid":"learn-card-article-half"},e(i).createElement(E,null,e(i).createElement(y,{style:{height:"50%"}},e(i).createElement(S,{src:t.backgroundImageUrl})),e(i).createElement(b,{background:t.backgroundColor},e(i).createElement(v,null,t.title))))):e(i).createElement(h,{href:t.url,onClick:r},e(i).createElement(g,{"data-testid":"learn-card-article-full"},e(i).createElement(E,{background:t.backgroundColor},e(i).createElement(k,null,e(i).createElement(v,null,t.title),e(i).createElement(C,{color:"#474747"},t.description))),e(i).createElement(E,null,e(i).createElement(S,{src:t.backgroundImageUrl}))))},f=({items:t})=>e(i).createElement(x,{"data-testid":"learn-cards"},t.map(((t,n)=>"learnArticle"===t.type?e(i).createElement(m,{item:t,key:t.title,position:n}):e(i).createElement(p,{item:t,key:t.title,position:n})))),x=a.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 8px;
`,g=(0,a.default)(u.ExploreTile)`
  border-radius: 16px;
  height: ${d.EXPLORE_CARD_SIZE_PX};
  display: flex;
  overflow: hidden;
  cursor: ${e=>e.hidePointer?"auto":"pointer"};
  width: ${e=>e.halfWidth?"calc(50% - 4px)":"auto"};
`,h=a.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`,E=a.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background: ${e=>e.background||"auto"};
`,k=a.default.div`
  padding: 12px 16px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`,w=a.default.div`
  display: flex;
`,b=(0,a.default)(w)`
  padding: 16px;
  background: ${e=>e.background||"auto"};
`,y=(0,a.default)(w)`
  flex: 1;
`,v=(0,a.default)(o.Text)`
  text-align: left;
  color: black;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.36px;
`,C=(0,a.default)(o.Text)`
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
`,S=a.default.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,L=a.default.span`
  display: flex;
  margin-right: 4px;
`})),n.register("cSCtg",(function(e,r){t(e.exports,"EXPLORE_CARD_SIZE",(function(){return l})),t(e.exports,"EXPLORE_CARD_SIZE_PX",(function(){return i}));const l=(n("c8OXT").PHANTOM_WIDTH-40)/2,i=`${l}px`})),n.register("aErJr",(function(r,l){t(r.exports,"LearnSkeleton",(function(){return u}));var i=n("29o0l"),a=n("gkfw3"),o=n("hiI91"),s=n("cSCtg");const c=()=>e(i).createElement(m,null,e(i).createElement(x,null,e(i).createElement(h,{width:"110px"}),e(i).createElement(h,{width:"90px"}),e(i).createElement(h,{width:"105px"})),e(i).createElement(f,null,e(i).createElement(h,{width:"64px"}))),d=()=>e(i).createElement(m,null,e(i).createElement(x,null,e(i).createElement(h,{width:"110px"}),e(i).createElement(h,{width:"90px"}))),u=()=>e(i).createElement(p,{"data-testid":"learn-skeleton"},e(i).createElement(c,null),e(i).createElement(g,null,e(i).createElement(d,null),e(i).createElement(d,null)),e(i).createElement(c,null)),p=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 10px;
`,m=(0,a.default)(o.SkeletonLoader)`
  background: #323232;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${s.EXPLORE_CARD_SIZE_PX};
  border-radius: 14px;
  padding: 16px;
  justify-content: flex-end;
`,f=a.default.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`,x=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,g=a.default.div`
  display: flex;
  gap: 8px;
`,h=(0,a.default)(o.SkeletonLoader)`
  height: 16px;
  border-radius: 16px;
`})),n.register("4gU20",(function(r,l){t(r.exports,"ExploreTabCollections",(function(){return u}));var i=n("29o0l"),a=n("gX5Te"),o=n("45Lgr"),s=n("ebFSn"),c=n("g8Ra9"),d=n("c3TWf");const u=()=>{const{isExploreCollectionsLoading:t}=a.hooks.useIsExploreCollectionsLoading();return e(i).createElement("div",null,e(i).createElement(o.CarouselCollections,null),t?e(i).createElement(c.ExploreFiltersSkeleton,null):e(i).createElement(s.default,{tab:"collections"}),e(i).createElement(d.ExploreListCollections,null))}})),n.register("45Lgr",(function(r,l){t(r.exports,"CarouselCollections",(function(){return p}));var i=n("29o0l"),a=n("gkfw3"),o=n("gX5Te"),s=n("kWfcq"),c=n("kri2B"),d=n("erfH8"),u=n("jdxan");function p(){var t;const{isExploreCollectionsLoading:n}=o.hooks.useIsExploreCollectionsLoading(),{error:r,data:l}=o.hooks.useExploreRecommendedCollections(),a=(0,i.useCallback)(((t,n)=>e(i).createElement(m,{href:t.marketplacePages[0].collectionUrl},e(i).createElement(u.CarouselCardContainer,{key:`carousel-card-collections-${n}`,onPress:()=>{s.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",carouselName:"collections",itemDetails:{position:n,title:t.name,id:t.id}})}},e(i).createElement(d.CarouselCardCollection,{collection:t})))),[null==l?void 0:l.uuid]);return e(i).createElement(c.default,{name:"collections",items:l?l.data:[],renderCard:a,isLoading:n,isEmpty:!(!r||(null==l?void 0:l.data)&&0!==(null===(t=null==l?void 0:l.data)||void 0===t?void 0:t.length))})}const m=a.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("kri2B",(function(r,l){t(r.exports,"default",(function(){return w}));var i=n("ha3TG"),a=n("1fwzV"),o=n("lz5BI"),s=n("kdk4D"),c=n("48pU7"),d=n("29o0l"),u=n("gkfw3"),p=n("j81qC"),m=n("kWfcq"),f=n("cSCtg"),x=n("evHvm"),g=n("60S1R");const h=-1*(f.EXPLORE_CARD_SIZE+8),E={type:"spring",stiffness:256.1,damping:24,mass:1},k=2;function w({items:t,renderCard:n,isLoading:r,isEmpty:l,name:o}){const[u,f]=(0,d.useState)(0),[x,w]=(0,d.useState)(!1),S=(0,s.useMotionValue)(0),L=(0,d.useMemo)((()=>h*(t.length-k)),[t]),I=(0,d.useCallback)((e=>e<0?0:e>t.length-1?t.length-1:e),[t]),T=(0,d.useCallback)((()=>I(Math.round(S.get()/h))),[S,I]);(0,c.useMotionValueEvent)(S,"change",(()=>{f(T())}));const P=(0,d.useCallback)((e=>{const t=I(e)*h;(0,i.animate)(S,t,E),m.exploreAnalytics.onExploreCarouselDragged({listName:o})}),[I,S,o]),D={fill:"#222",width:16,height:16};return r?e(d).createElement(g.CarouselSkeleton,null):l?null:e(d).createElement(b,{"data-testid":`explore-carousel-${o}`},e(d).createElement(a.AnimatePresence,{initial:!1},u>=1&&e(d).createElement(C,{onClick:()=>P(u-1)},e(d).createElement(p.IconArrowLeftThin,Object.assign({},D)))),e(d).createElement(a.AnimatePresence,{initial:!1},u<=t.length-k-1&&e(d).createElement(C,{isRight:!0,onClick:()=>P(u+1)},e(d).createElement(p.IconArrowRightThin,Object.assign({},D)))),e(d).createElement(y,{style:{x:S},drag:t.length>k?"x":void 0,dragConstraints:{left:L,right:0},onDragStart:()=>w(!0),onDragEnd:()=>{w(!1),P(T()),m.exploreAnalytics.onExploreCarouselDragged({listName:o})},onWheel:e=>{if(0===e.deltaX)return;const t=S.get()-e.deltaX;return t>0?S.set(0):t<L?S.set(L):S.set(t)}},t.map(((r,l)=>e(d).createElement(v,{key:`carousel-item-${l}`,isLast:l===t.length-1,onClick:e=>{x&&(e.stopPropagation(),e.preventDefault())}},n(r,l))))))}const b=u.default.div`
  width: 100vw;
  margin-bottom: 24px;
`,y=(0,u.default)(o.motion.div)`
  display: flex;
  flex-direction: row;
  padding: 0 16px;
`,v=(0,u.default)(x.ExploreTile)`
  position: relative;
  margin-right: ${e=>e.isLast?0:8}px;
`,C=(0,u.default)(o.motion.div).attrs({transition:{ease:[.16,1,.3,1],duration:.5},initial:{opacity:0,translateY:8},animate:{opacity:1,translateY:0},exit:{opacity:0,translateY:8}})`
  background: #ab9ff2;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  left: ${e=>e.isRight?"auto":"4px"};
  right: ${e=>e.isRight?"4px":"auto"};
  top: ${f.EXPLORE_CARD_SIZE/2}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.19),
    0px 3px 3px 0px rgba(0, 0, 0, 0.17),
    0px 7px 4px 0px rgba(0, 0, 0, 0.1),
    0px 12px 5px 0px rgba(0, 0, 0, 0.03),
    0px 18px 5px 0px rgba(0, 0, 0, 0);
`})),n.register("48pU7",(function(e,r){t(e.exports,"useMotionValueEvent",(function(){return i}));var l=n("29o0l");function i(e,t,n){(0,l.useInsertionEffect)((()=>e.on(t,n)),[e,t,n])}})),n.register("60S1R",(function(r,l){t(r.exports,"CarouselSkeleton",(function(){return c}));var i=n("29o0l"),a=n("gkfw3"),o=n("hiI91"),s=n("cSCtg");function c({items:t=10}){const n=(0,i.useMemo)((()=>{const e=[];for(let n=0;n<t;n++)e.push(n);return e}),[t]);return e(i).createElement(u,null,n.map((t=>e(i).createElement(d,{key:t}))))}function d(){return e(i).createElement(p,null,e(i).createElement(f,null,e(i).createElement(x,null,e(i).createElement(o.SkeletonLoader,{width:"90px",height:"16px",marginBottom:"4px",borderRadius:"16px"}),e(i).createElement(o.SkeletonLoader,{width:"64px",height:"16px",borderRadius:"16px"})),e(i).createElement(m,null)))}const u=a.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  margin-bottom: 24px;
`,p=(0,a.default)(o.SkeletonLoader)`
  background: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 6px 8px 8px 12px;

  margin-right: 8px;
  border-radius: 16px;
  height: ${s.EXPLORE_CARD_SIZE_PX};
  width: ${s.EXPLORE_CARD_SIZE_PX};
  min-width: ${s.EXPLORE_CARD_SIZE_PX};
`,m=(0,a.default)(o.SkeletonLoader)`
  background: ${e=>e.theme.skeletonLight};
  border-radius: 14px;
  height: 48px;
  width: 48px;
  margin-bottom: 8px;
`,f=a.default.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`,x=a.default.div`
  display: flex;

  flex-direction: column;
  justify-content: flex-end;
`})),n.register("erfH8",(function(r,l){t(r.exports,"CarouselCardCollection",(function(){return d}));var i=n("RVqnc"),a=n("kAKNF"),o=n("29o0l"),s=n("gkfw3"),c=n("gEaMM");const d=({collection:t})=>{const n=(0,o.useMemo)((()=>{const n=new(e(a))(t.floorPrices[0].value,10).dividedBy(new(e(a))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,i.formatNumber)(n)} ${t.floorPrices[0].paymentToken.symbol} `}),[t.floorPrices]);return e(o).createElement(c.CarouselBackgroundImageCard,{src:t.imageUrl},e(o).createElement(u,null,e(o).createElement("div",null,e(o).createElement(p,null,(0,i.truncateString)(t.name,9)),e(o).createElement(m,null,n))))},u=s.default.div`
  width: 100%;
  padding: 8px 12px;
`,p=s.default.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
`,m=s.default.div`
  font-weight: 600;
  color: ${e=>e.theme.grayLight};
  font-size: 14px;
  line-height: 18px;
`})),n.register("gEaMM",(function(r,l){t(r.exports,"CarouselBackgroundImageCard",(function(){return c}));var i=n("29o0l"),a=n("gkfw3"),o=n("izu1Y"),s=n("cSCtg");const c=({src:t,children:n})=>e(i).createElement(e(i).Fragment,null,e(i).createElement(d,{src:t}),e(i).createElement(u,null,n)),d=(0,a.default)(o.PImage)`
  width: ${s.EXPLORE_CARD_SIZE_PX};
  height: ${s.EXPLORE_CARD_SIZE_PX};
  border-radius: 16px;
`,u=a.default.div`
  position: absolute;
  left: 0;
  background: rgba(24, 24, 24, 0.8);
  backdrop-filter: blur(24px);
  width: 100%;
  height: 54px;

  /* reduce by 1 pixel to prevent border-radius clipping issue */
  bottom: -1px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`})),n.register("jdxan",(function(r,l){t(r.exports,"CarouselCardContainer",(function(){return s}));var i=n("29o0l"),a=n("gkfw3"),o=n("cSCtg");function s({children:t,onPress:n}){return e(i).createElement(c,{onClick:n},t,e(i).createElement(d,null))}const c=a.default.div`
  width: ${o.EXPLORE_CARD_SIZE_PX};
  height: ${o.EXPLORE_CARD_SIZE_PX};
  position: relative;
  cursor: pointer;
  overflow: hidden;
`,d=a.default.div`
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`})),n.register("ebFSn",(function(r,l){t(r.exports,"default",(function(){return E}));var i=n("iOvk1"),a=n("hM5LD"),o=n("3ljHn"),s=n("43063"),c=n("lz5BI"),d=n("29o0l"),u=n("gkfw3"),p=n("hnPyv"),m=n("j81qC"),f=n("gX5Te"),x=n("4K7Du"),g=n("kWfcq");const h="200px";function E({tab:t}){const{data:n,mutate:r}=f.hooks.useExploreSelectedNetwork(),{currentSortOption:l,getSortOptions:i,setSortOption:a}=f.hooks.useExploreSortOption(),o=i(t),s=l(t);return e(d).createElement(y,{"data-testid":`explore-filters-${t}`},e(d).createElement(b,{value:s,options:o,onChange:e=>{(e=>{a(t,e)})(e),g.exploreAnalytics.onExploreFilterChangedByUser({filterType:"sort",filterValue:e,listName:t})}}),e(d).createElement(w,{value:n,onChange:e=>{r(e),g.exploreAnalytics.onExploreFilterChangedByUser({filterType:"network",filterValue:e,listName:t})}}))}const k=({networkLabel:t,NetworkIcon:n})=>{const[r,l]=e(d).useState(!1);return e(d).createElement(C,{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1)},e(d).createElement("span",{style:{color:r?x.theme.purple:x.theme.white}},t)," ",e(d).createElement(n,{width:20,height:20,fill:r?x.theme.purple:x.theme.white}))};function w({value:t,onChange:n}){const{t:r}=(0,s.useTranslation)(),{data:[l]}=(0,o.useFeatureFlags)(["enable-bitcoin-explore"]),{data:c}=f.hooks.useSelectedMultiChainAccount(),u=(0,d.useMemo)((()=>{const t=[],o=c?(0,a.getAccountMainnetNetworkIds)(c,l):[];return o.includes(i.SolanaNetworkID.Mainnet)&&t.push({label:e(d).createElement(k,{networkLabel:"Solana",NetworkIcon:m.IconChainSolana}),key:"Solana",onClick:()=>n(i.SolanaNetworkID.Mainnet)}),o.includes(i.EthereumNetworkID.Mainnet)&&t.push({label:e(d).createElement(k,{networkLabel:"Ethereum",NetworkIcon:m.IconChainEthereum}),key:"Ethereum",onClick:()=>n(i.EthereumNetworkID.Mainnet)}),o.includes(i.PolygonNetworkID.Mainnet)&&t.push({label:e(d).createElement(k,{networkLabel:"Polygon",NetworkIcon:m.IconChainPolygon}),key:"Polygon",onClick:()=>n(i.PolygonNetworkID.Mainnet)}),o.includes(i.BitcoinNetworkID.Mainnet)&&l&&t.push({label:e(d).createElement(k,{networkLabel:"Bitcoin",NetworkIcon:m.IconChainBitcoin}),key:"Bitcoin",onClick:()=>n(i.BitcoinNetworkID.Mainnet)}),t.length>1&&t.push({label:e(d).createElement(k,{networkLabel:r("exploreFilterByall_networks"),NetworkIcon:m.IconStackedLayers}),key:"all_networks",onClick:()=>n("all_networks")}),t}),[n,r,l,c]);return u.length>1?e(d).createElement(v,null,e(d).createElement(p.Dropdown,{items:u,dropdownWidth:h,noDropdownItemPadding:!0},e(d).createElement(S,null,e(d).createElement(L,null,(e=>{switch(e){case i.SolanaNetworkID.Mainnet:return"Solana";case i.EthereumNetworkID.Mainnet:return"Ethereum";case i.PolygonNetworkID.Mainnet:return"Polygon";case i.BitcoinNetworkID.Mainnet:return"Bitcoin";case"all_networks":return r("exploreFilterByall_networks");default:return""}})(t)),e(d).createElement(m.IconChevronDown,{width:12,height:12,fill:"#999999"})))):null}function b({options:t,value:n,onChange:r}){const{t:l}=(0,s.useTranslation)(),i=(0,d.useMemo)((()=>t.map((e=>({label:l(`exploreSortBy${e}`),key:e,onClick:()=>{r(e)}})))),[r,t,l]);return e(d).createElement(v,null,e(d).createElement(p.Dropdown,{items:i,dropdownWidth:h},e(d).createElement(S,{"data-testid":"exploreSortBy-button"},e(d).createElement(L,null,l(`exploreSortBy${n}`)),e(d).createElement(m.IconChevronDown,{width:12,height:12,fill:"#999999"}))))}const y=u.default.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 8px 16px 4px 16px;
`,v=u.default.div`
  margin-right: 4px;
`,C=u.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 7px 0;
`,S=(0,u.default)(c.motion.div).attrs({activeOpacity:.6,whileHover:{background:"#3B3C40"},transition:{ease:[.5,1,.89,1],duration:.1},style:{background:"#2a2a2a"}})`
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  border-radius: 48px;
  display: flex;
  height: 32px;
  cursor: pointer;
`,L=u.default.div`
  margin-right: 6px;
  color: ${e=>e.theme.white};
  font-size: 15px;
  font-weight: 600;
`})),n.register("g8Ra9",(function(r,l){t(r.exports,"ExploreFiltersSkeleton",(function(){return s}));var i=n("29o0l"),a=n("gkfw3"),o=n("hiI91");function s(){return e(i).createElement(c,null,e(i).createElement(d,{width:"99px",height:"26px"}),e(i).createElement(d,{width:"124px",height:"26px"}))}const c=a.default.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px 16px 16px;
`,d=(0,a.default)(o.SkeletonLoader)`
  background: ${e=>e.theme.skeletonLight};
  border-radius: 48px;
  margin-right: 4px;
`})),n.register("c3TWf",(function(r,l){t(r.exports,"ExploreListCollections",(function(){return x}));var i=n("43063"),a=n("29o0l"),o=n("gkfw3"),s=n("gX5Te"),c=n("kWfcq"),d=n("fBlwq"),u=n("fMvHQ"),p=n("jWARq"),m=n("3n8yM"),f=n("kDfwQ");function x(){const{isExploreCollectionsLoading:t}=s.hooks.useIsExploreCollectionsLoading(),{error:n,data:r}=s.hooks.useExploreCollections(),{t:l}=(0,i.useTranslation)();return n&&!r?e(a).createElement(d.ExploreNetworkError,null):e(a).createElement(u.default,{items:r?r.data:[],renderItem:(t,n)=>e(a).createElement(g,{key:`list-collections-${n}`,href:t.marketplacePages[0].collectionUrl},e(a).createElement(m.ListItemContainer,{onPress:()=>{c.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==r?void 0:r.uuid)||"",listName:"collections",itemDetails:{position:n,title:t.name,id:t.id}})}},e(a).createElement(p.ListItemCollection,{collection:t,position:n+1}))),listName:"collections",header:e(a).createElement(f.ListHeader,{titles:["#",l("exploreFloor"),l("exploreVolume")]}),isLoading:t})}const g=o.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("fBlwq",(function(r,l){t(r.exports,"ExploreNetworkError",(function(){return x}));var i=n("29o0l"),a=n("88tsI"),o=n("gkfw3"),s=n("j81qC"),c=n("634r8"),d=n("27SDj");const u=o.default.div`
  padding: 0 16px;
  margin-bottom: 16px;
`,p=o.default.div`
  padding: 16px;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #2a2a2a;
`,m=(0,o.default)(c.Row).attrs({align:"center",justify:"center"})`
  width: 24px;
  height: 24px;
`,f=(0,o.default)(d.Text).attrs({size:14,weight:400,lineHeight:21,marginLeft:8,color:"#EB3742"})``,x=()=>{const{t:t}=(0,a.useTranslation)();return e(i).createElement(u,{"data-testid":"explore-network-error"},e(i).createElement(p,null,e(i).createElement(m,null,e(i).createElement(s.IconExclamationMarkCircle,{width:18,exclamationFill:"transparent",circleFill:"#EB3742"})),e(i).createElement(f,null,t("exploreNetworkError"))))}})),n.register("fMvHQ",(function(r,l){t(r.exports,"default",(function(){return u}));var i=n("1fwzV"),a=n("lz5BI"),o=n("29o0l"),s=n("gkfw3"),c=n("evHvm"),d=n("NfYUA");function u({items:t,listName:n,renderItem:r,header:l,isLoading:a}){return e(o).createElement(p,{"data-testid":`explore-list-${n}`},l,e(o).createElement(i.AnimatePresence,null,a&&e(o).createElement(f,null,e(o).createElement(d.ListSkeleton,null))),!a&&t.map(((t,l)=>e(o).createElement(m,{key:`list-item-${n}-${l}`,"data-testid":`list-item-${n}-${l}`,whileHover:{background:"#333"},style:{background:"#222"},transition:{ease:[.5,1,.89,1],duration:.1}},e(o).createElement(c.ExploreTile,null,r(t,l))))))}const p=s.default.div`
  flex-direction: column;
  width: 100%;
`,m=(0,s.default)(a.motion.div)`
  flex: 1;
  width: 100%;
  cursor: pointer;
`,f=(0,s.default)(a.motion.div).attrs({initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:"easeInOut"}})``})),n.register("NfYUA",(function(r,l){t(r.exports,"ListSkeleton",(function(){return s}));var i=n("29o0l"),a=n("gkfw3"),o=n("hiI91");function s({items:t=10}){const n=(0,i.useMemo)((()=>{const e=[];for(let n=0;n<t;n++)e.push(n);return e}),[t]);return e(i).createElement(d,{"data-testid":"explore-list-skeleton"},n.map(((t,n)=>e(i).createElement(c,{key:t,index:n+1}))))}function c({index:t}){return e(i).createElement(u,null,e(i).createElement(p,null,e(i).createElement(f,null,e(i).createElement(x,null,t)),e(i).createElement(g,null),e(i).createElement("div",null,e(i).createElement(o.SkeletonLoader,{width:"95px",height:"20px",marginBottom:"4px",borderRadius:"16px"}),e(i).createElement(o.SkeletonLoader,{width:"69px",height:"20px",borderRadius:"16px"}))),e(i).createElement(m,null,e(i).createElement(o.SkeletonLoader,{width:"69px",height:"20px",marginBottom:"4px",borderRadius:"16px"}),e(i).createElement(o.SkeletonLoader,{width:"38px",height:"20px",borderRadius:"16px"})))}const d=a.default.div`
  padding: 0 16px;
  flex-direction: column;
  width: 100%;
`,u=a.default.div`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 10px;
  display: flex;
  padding: 12px 0;
`,p=a.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
`,m=a.default.div`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
`,f=a.default.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,x=a.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
`,g=(0,a.default)(o.SkeletonLoader)`
  background: ${e=>e.theme.skeletonLight};
  border-radius: 14px;
  height: 48px;
  width: 48px;
`})),n.register("jWARq",(function(r,l){t(r.exports,"ListItemCollection",(function(){return u}));var i=n("RVqnc"),a=n("kAKNF"),o=n("29o0l"),s=n("gkfw3"),c=n("izu1Y"),d=n("hiI91");const u=({collection:t,position:n})=>{const r=(0,o.useMemo)((()=>{const n=new(e(a))(t.floorPrices[0].value,10).dividedBy(new(e(a))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,i.formatNumber)(n)} ${t.floorPrices[0].paymentToken.symbol} `}),[t.floorPrices]),l=(0,o.useMemo)((()=>{const n=new(e(a))(t.volume||0,10).dividedBy(new(e(a))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,i.formatNumber)(n,{compact:n>=1e3})} ${t.floorPrices[0].paymentToken.symbol}`}),[t.volume,t.floorPrices]);return e(o).createElement(p,null,e(o).createElement(m,null,e(o).createElement(x,null,e(o).createElement(g,null,n)),e(o).createElement(b,{src:t.imageUrl,width:48,height:48,fallback:e(o).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"}),loader:e(o).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(o).createElement("div",null,e(o).createElement(h,null,(0,i.truncateString)(t.name,15)),e(o).createElement(E,null,r))),e(o).createElement(f,null,e(o).createElement(k,null,l),e(o).createElement(w,{green:t.volumePercentChange>=0},(0,i.formatNumber)(t.volumePercentChange,{compact:!0,includePlusPrefix:!0}),"%")))},p=s.default.div`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 10px;
  display: flex;
`,m=s.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
`,f=s.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
`,x=s.default.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,g=s.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
  font-weight: 600;
`,h=s.default.div`
  font-size: 17px;
  line-height: 22px;
  height: 22px;
  overflow-x: hidden;
`,E=s.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.theme.grayLight};
`,k=s.default.div`
  font-size: 17px;
  line-height: 22px;
  white-space: nowrap;
`,w=s.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.green?e.theme.green:e.theme.alert};
  text-align: right;
`,b=(0,s.default)(c.PImage)`
  border-radius: 14px;
  width: 48px;
  height: 48px;
`})),n.register("3n8yM",(function(r,l){t(r.exports,"ListItemContainer",(function(){return a}));var i=n("29o0l");function a({children:t,onPress:n}){return e(i).createElement(o,{onClick:n},t)}const o=n("gkfw3").default.div`
  width: 100%;
  padding: 12px 16px;
`})),n.register("kDfwQ",(function(r,l){t(r.exports,"ListHeader",(function(){return o}));var i=n("29o0l"),a=n("gkfw3");const o=({titles:t})=>e(i).createElement(s,null,e(i).createElement(c,null,e(i).createElement(p,null,e(i).createElement(u,null,t[0])),e(i).createElement(u,null,t[1])),e(i).createElement(d,null,e(i).createElement(u,null,t[2]))),s=a.default.div`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 4px;
  padding-top: 12px;
`,c=a.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
`,d=a.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  display: flex;
`,u=a.default.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: ${e=>e.theme.grayLight};
`,p=a.default.div`
  width: 74px;
  padding-left: 4px;
`})),n.register("Dly5J",(function(r,l){t(r.exports,"ExploreTabSites",(function(){return u}));var i=n("29o0l"),a=n("gX5Te"),o=n("744R7"),s=n("ebFSn"),c=n("g8Ra9"),d=n("lwG9A");const u=()=>{const{isExploreSitesLoading:t}=a.hooks.useIsExploreSitesLoading();return e(i).createElement("div",null,e(i).createElement(o.CarouselSites,null),t?e(i).createElement(c.ExploreFiltersSkeleton,null):e(i).createElement(s.default,{tab:"sites"}),e(i).createElement(d.ExploreListSites,null))}})),n.register("744R7",(function(r,l){t(r.exports,"CarouselSites",(function(){return m}));var i=n("RVqnc"),a=n("29o0l"),o=n("gkfw3"),s=n("gX5Te"),c=n("kWfcq"),d=n("kri2B"),u=n("jdxan"),p=n("8sm7E");function m(){var t;const{isExploreSitesLoading:n}=s.hooks.useIsExploreSitesLoading(),{error:r,data:l}=s.hooks.useExploreRecommendedSites(),o=(0,a.useCallback)(((t,n)=>e(a).createElement(f,{key:`carousel-card-sites-${n}`,href:(0,i.formatSearchURI)(t.url)},e(a).createElement(u.CarouselCardContainer,{onPress:()=>{c.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",carouselName:"sites",itemDetails:{position:n,title:t.name,id:t.id}})}},e(a).createElement(p.CarouselCardSite,{site:t})))),[null==l?void 0:l.uuid]);return e(a).createElement(d.default,{name:"sites",items:l?l.data:[],renderCard:o,isLoading:n,isEmpty:!(!r||(null==l?void 0:l.data)&&0!==(null===(t=null==l?void 0:l.data)||void 0===t?void 0:t.length))})}const f=o.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("8sm7E",(function(r,l){t(r.exports,"CarouselCardSite",(function(){return d}));var i=n("43063"),a=n("29o0l"),o=n("gkfw3"),s=n("izu1Y"),c=n("gEaMM");const d=({site:t})=>{const{t:n}=(0,i.useTranslation)();return e(a).createElement(c.CarouselBackgroundImageCard,{src:t.backgroundImageUrl},e(a).createElement(u,null,e(a).createElement(f,null,e(a).createElement(p,null,t.name),e(a).createElement(m,null,n(`exploreCategory${t.category.replaceAll(" ","")}`,{defaultValue:t.category}))),e(a).createElement(x,null,e(a).createElement(g,{src:t.imageUrl}))))},u=o.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 12px 8px 12px;
`,p=o.default.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  width: 100%;
  white-space: nowrap;
  -webkit-mask-image: linear-gradient(91deg, black 85%, transparent);
`,m=o.default.div`
  color: ${e=>e.theme.grayLight};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`,f=o.default.div`
  flex: 1;
  width: 100%;
  overflow-x: hidden;
`,x=o.default.div`
  transform: translateY(-12px);
`,g=(0,o.default)(s.PImage)`
  width: 48px;
  height: 48px;
  border-radius: 14px;
`})),n.register("lwG9A",(function(r,l){t(r.exports,"ExploreListSites",(function(){return f}));var i=n("RVqnc"),a=n("29o0l"),o=n("gkfw3"),s=n("gX5Te"),c=n("kWfcq"),d=n("fBlwq"),u=n("fMvHQ"),p=n("3n8yM"),m=n("8H5kP");function f(){const{isExploreSitesLoading:t}=s.hooks.useIsExploreSitesLoading(),{error:n,data:r}=s.hooks.useExploreSites();return n&&!r?e(a).createElement(d.ExploreNetworkError,null):e(a).createElement(u.default,{items:r?r.data:[],renderItem:(t,n)=>e(a).createElement(x,{key:`list-sites-${n}`,href:(0,i.formatSearchURI)(t.url)},e(a).createElement(p.ListItemContainer,{onPress:()=>{c.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==r?void 0:r.uuid)||"",listName:"sites",itemDetails:{position:n,title:t.name,id:t.id}})}},e(a).createElement(m.ListItemSite,{site:t,position:n+1}))),listName:"sites",isLoading:t,header:null})}const x=o.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("8H5kP",(function(r,l){t(r.exports,"ListItemSite",(function(){return u}));var i=n("43063"),a=n("RVqnc"),o=n("29o0l"),s=n("gkfw3"),c=n("izu1Y"),d=n("hiI91");const u=({site:t,position:n})=>{const{t:r}=(0,i.useTranslation)();return e(o).createElement(p,null,e(o).createElement(m,null,e(o).createElement(f,null,n)),e(o).createElement(h,{src:t.imageUrl,width:48,height:48,fallback:e(o).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"}),loader:e(o).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(o).createElement("div",null,e(o).createElement(x,null,(0,a.truncateString)(t.name,15)),e(o).createElement(g,null,r(`exploreCategory${t.category.replaceAll(" ","")}`,{defaultValue:t.category}))))},p=s.default.div`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  display: flex;
  align-items: center;
`,m=s.default.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,f=s.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
  font-weight: 600;
`,x=s.default.div`
  font-size: 17px;
  line-height: 22px;
`,g=s.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.theme.grayLight};
`,h=(0,s.default)(c.PImage)`
  border-radius: 14px;
  width: 48px;
  height: 48px;
`})),n.register("TiCFQ",(function(r,l){t(r.exports,"ExploreTabTokens",(function(){return u}));var i=n("29o0l"),a=n("gX5Te"),o=n("fhtEP"),s=n("ebFSn"),c=n("g8Ra9"),d=n("bQ2R6");const u=()=>{const{isExploreTokensLoading:t}=a.hooks.useIsExploreTokensLoading(),{currentSortOption:n}=a.hooks.useExploreSortOption(),r=n("tokens");return e(i).createElement("div",null,e(i).createElement(o.CarouselTokens,null),t?e(i).createElement(c.ExploreFiltersSkeleton,null):e(i).createElement(s.default,{tab:"tokens"}),e(i).createElement(d.ExploreListTokens,{displayType:r}))}})),n.register("fhtEP",(function(r,l){t(r.exports,"CarouselTokens",(function(){return m}));var i=n("hM5LD"),a=n("29o0l"),o=n("gX5Te"),s=n("kWfcq"),c=n("d1Nvi"),d=n("kri2B"),u=n("jdxan"),p=n("bcPY6");function m(){var t;const{isExploreTokensLoading:n}=o.hooks.useIsExploreTokensLoading(),{error:r,data:l}=o.hooks.useExploreRecommendedTokens(),m=(0,c.useNavigateToSwapper)(),{data:f}=o.hooks.useSelectedMultiChainAccount(),x=null==f?void 0:f.isReadOnly,g=(0,a.useCallback)(((t,n)=>e(a).createElement(u.CarouselCardContainer,{key:`carousel-card-token-${n}`,onPress:()=>{(0,i.shouldNavigateToSwapper)(x,t)&&(m({buyFungible:t.tokens[0]}),s.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",carouselName:"tokens",itemDetails:{position:n,title:t.tokens[0].data.name||t.id,id:t.id||""}}))}},e(a).createElement(p.CarouselCardToken,{token:t}))),[null==l?void 0:l.uuid,m,x]);return e(a).createElement(d.default,{name:"tokens",items:l?l.data:[],renderCard:g,isLoading:n,isEmpty:!(!r||(null==l?void 0:l.data)&&0!==(null===(t=null==l?void 0:l.data)||void 0===t?void 0:t.length))})}})),n.register("d1Nvi",(function(e,r){t(e.exports,"useNavigateToSwapper",(function(){return d}));var l=n("iOvk1"),i=n("5slFC"),a=n("29o0l"),o=n("iQL9s"),s=n("9aR5q");const c=(e,t)=>e||(t?(0,l.encodeCaip19)((0,i.getFungibleCaip19FromFungible)(t)):void 0),d=()=>{const e=(0,o.useNavigate)();return(0,a.useCallback)((({sellFungible:t,sellFungibleCaip19:n,buyFungible:r,buyFungibleCaip19:l,sellAmount:i})=>{const a=c(n,t),o=c(l,r),d=new URLSearchParams;a&&d.append("sellFungible",a),o&&d.append("buyFungible",o),i&&d.append("sellAmount",i),e(`${s.Path.Swap}?${d.toString()}`)}),[e])}})),n.register("bcPY6",(function(r,l){t(r.exports,"CarouselCardToken",(function(){return d}));var i=n("RVqnc"),a=n("29o0l"),o=n("gkfw3"),s=n("izu1Y"),c=n("cSCtg");const d=({token:t})=>{const n=t.tokens[0];return e(a).createElement(u,null,e(a).createElement(p,null,e(a).createElement(m,null,e(a).createElement(f,null,(0,i.truncateString)(n.data.name||"",12)),e(a).createElement(x,null,n.data.symbol)),e(a).createElement(g,{src:n.data.logoUri||""})),e(a).createElement(h,null,e(a).createElement(E,null,(0,i.formatDollarAmount)(parseFloat(t.currentPrice),{minimumAmount:1e-6,decimalFormatSmallNumbers:"0.[000000]",roundDecimals:!0})),e(a).createElement(k,{green:parseFloat(t.priceChangePercentage)>=0},(0,i.formatNumber)(parseFloat(t.priceChangePercentage),{includePlusPrefix:!0,suffix:"%"}))))},u=o.default.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${c.EXPLORE_CARD_SIZE_PX};
  width: ${c.EXPLORE_CARD_SIZE_PX};
  padding: 10px 12px;
  background-color: #2c2d30;
  border-radius: 16px;
`,p=o.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`,m=o.default.div`
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`,f=o.default.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,x=o.default.div`
  color: ${e=>e.theme.grayLight};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,g=(0,o.default)(s.PImage)`
  width: 32px;
  height: 32px;
  border-radius: 100px;
`,h=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`,E=o.default.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.44px;
`,k=o.default.div`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${e=>e.green?e.theme.green:e.theme.alert};
`})),n.register("bQ2R6",(function(r,l){t(r.exports,"ExploreListTokens",(function(){return h}));var i=n("hM5LD"),a=n("43063"),o=n("29o0l"),s=n("gkfw3"),c=n("gX5Te"),d=n("kWfcq"),u=n("d1Nvi"),p=n("fBlwq"),m=n("fMvHQ"),f=n("3n8yM"),x=n("9AQVS"),g=n("kDfwQ");function h({displayType:t}){const{data:n}=c.hooks.useExploreSelectedNetwork(),{isExploreTokensLoading:r}=c.hooks.useIsExploreTokensLoading(),{error:l,data:s}=c.hooks.useExploreTokens(),{t:h}=(0,a.useTranslation)(),{data:k}=c.hooks.useSelectedMultiChainAccount(),w=null==k?void 0:k.isReadOnly,b=(0,u.useNavigateToSwapper)(),y=(0,o.useMemo)((()=>{switch(t){case"market_cap":return["#",h("exploreToken"),h("exploreCap")];case"gainers":case"losers":return["#",h("exploreToken"),h("explorePrice")];default:return["#",h("exploreToken"),h("explore24hVolume")]}}),[t,h]);return l&&!s?e(o).createElement(p.ExploreNetworkError,null):e(o).createElement(m.default,{items:s?s.data:[],renderItem:(r,l)=>e(o).createElement(f.ListItemContainer,{key:`list-tokens-${l}`,onPress:()=>{var e;if((0,i.shouldNavigateToSwapper)(w,r)){const t=null!==(e=r.tokens.find((e=>e.data.chain.id===n)))&&void 0!==e?e:r.tokens[0];b({buyFungible:t}),d.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==s?void 0:s.uuid)||"",listName:"tokens",itemDetails:{position:l,title:t.data.name||r.id,id:r.id}})}}},e(o).createElement(E,null,e(o).createElement(x.ListItemToken,{token:r,position:l+1,displayType:t}))),listName:"tokens",isLoading:r,header:e(o).createElement(g.ListHeader,{titles:y})})}const E=s.default.div`
  cursor: pointer;
`})),n.register("9AQVS",(function(r,l){t(r.exports,"ListItemToken",(function(){return d}));var i=n("RVqnc"),a=n("29o0l"),o=n("gkfw3"),s=n("izu1Y"),c=n("hiI91");const d=({token:t,position:n,displayType:r})=>{const l=t.tokens[0],o=(0,a.useMemo)((()=>{switch(r){case"market_cap":return e(a).createElement(e(a).Fragment,null,e(a).createElement(k,null,(0,i.formatDollarAmount)(parseFloat(t.marketCap)||0,{compact:!0})),e(a).createElement(w,{green:parseFloat(t.marketCapChangePercentage)>=0},(0,i.formatNumber)(parseFloat(t.marketCapChangePercentage),{includePlusPrefix:!0,suffix:"%",compact:!0})));case"volume":return e(a).createElement(e(a).Fragment,null,e(a).createElement(k,null,(0,i.formatDollarAmount)(parseFloat(t.volume)||0,{compact:!0})));default:return e(a).createElement(e(a).Fragment,null,e(a).createElement(k,null,(0,i.formatDollarAmount)(parseFloat(t.currentPrice),{minimumAmount:1e-6,decimalFormatSmallNumbers:"0.[000000]",roundDecimals:!0})),e(a).createElement(w,{green:parseFloat(t.priceChangePercentage)>=0},(0,i.formatNumber)(parseFloat(t.priceChangePercentage),{includePlusPrefix:!0,suffix:"%",compact:!0})))}}),[r,t]);return e(a).createElement(u,null,e(a).createElement(p,null,e(a).createElement(x,null,e(a).createElement(g,null,n)),e(a).createElement(b,{src:l.data.logoUri||"",width:48,height:48,fallback:e(a).createElement(v,null,e(a).createElement(y,null,l.data.symbol)),loader:e(a).createElement(c.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(a).createElement(m,null,e(a).createElement(h,null,(0,i.truncateString)(l.data.name||"",15)),e(a).createElement(E,null,l.data.symbol))),e(a).createElement(f,null,o))},u=o.default.div`
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  gap: 10px;
  display: flex;
`,p=o.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
  overflow: hidden;
`,m=o.default.div`
  overflow: hidden;
`,f=o.default.div`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  display: flex;
  flex: 1;
`,x=o.default.div`
  width: 18px;
  min-width: 18px;
  height: 18px;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,g=o.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
  font-weight: 600;
`,h=o.default.div`
  font-size: 17px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,E=o.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.theme.grayLight};
`,k=o.default.div`
  font-size: 17px;
  line-height: 22px;
`,w=o.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.green?e.theme.green:e.theme.alert};
`,b=(0,o.default)(s.PImage)`
  width: 48px;
  height: 48px;
  border-radius: 100px;
`,y=o.default.div.attrs({numberOfLines:1})`
  color: ${e=>e.theme.white};
  font-size: 12px;
`,v=o.default.div`
  width: 48px;
  min-width: 48px;
  height: 48px;
  min-height: 48px;
  border-radius: 100px;
  background-color: ${e=>e.theme.buttonGray};
  display: flex;
  align-items: center;
  justify-content: center;
`})),n.register("kQTlk",(function(r,l){t(r.exports,"ExploreTabsTitles",(function(){return u}));var i=n("hM5LD"),a=n("29o0l"),o=n("88tsI"),s=n("kWfcq"),c=n("lSj6f"),d=n("lzZgH");const u=()=>{const{activeSectionIdx:t,sections:n}=(0,c.useExploreSections)(),{setActiveSection:r}=(0,i.useExplore)(),{t:l}=(0,o.useTranslation)(),u=(0,a.useMemo)((()=>n.map((e=>{switch(e){case"sites":return l("exploreApps");case"tokens":return l("exploreTokens");case"collections":return l("exploreCollections");case"quests":return l("quests");case"learn":return l("exploreLearn");default:return""}}))),[n,l]);return e(a).createElement(d.default,{values:u,activeTabIndex:t,setActiveTabIndex:e=>{const t=n[e];r(t),s.exploreAnalytics.onExploreTabClickedByUser({tabName:t})}})}})),n.register("lzZgH",(function(r,l){t(r.exports,"default",(function(){return m}));var i=n("ha3TG"),a=n("lz5BI"),o=n("kdk4D"),s=n("29o0l"),c=n("gkfw3"),d=n("kWfcq");const u=16,p={duration:.3,delay:0,ease:"easeOut"};function m({values:t,activeTabIndex:n,setActiveTabIndex:r}){const l=(0,s.useRef)(null),[a,c]=(0,s.useState)(null),[m,E]=(0,s.useState)(0);(0,s.useEffect)((()=>{l.current&&E(l.current.scrollWidth)}),[t]);const k=(0,o.useMotionValue)(0),w=(0,s.useMemo)((()=>{const e=window.innerWidth-m-u;return Math.min(0,e)}),[m]),b=(0,s.useCallback)(((e,t)=>{const{left:n,right:r}=e.getBoundingClientRect(),l=r>window.innerWidth-u;if(l||n<u){const e=void 0!==t?t:l?w:0;return(0,i.animate)(k,e,p)}}),[k,w]);return e(s).createElement(f,{ref:l},e(s).createElement(x,{drag:"x",style:{x:k},dragConstraints:{left:w,right:0},onDragStart:()=>{c(k.get())},onDragEnd:()=>{c(null),d.exploreAnalytics.onExploreTabTitlesDragged()},onWheel:e=>{if(0===e.deltaX)return;const t=k.get()-e.deltaX;return t>0?k.set(0):t<w?k.set(w):k.set(t)}},t.map(((t,l)=>{const i=n===l;return e(s).createElement(g,{"data-testid":`tab-title-${t}`,key:`tab-title-${l}`,active:n===l},e(s).createElement(h,{onClick:e=>{if(null!==a)return e.stopPropagation(),void e.preventDefault();r(l),b(e.currentTarget)},isActive:i},t))}))))}const f=c.default.div`
  border-bottom: 1px solid ${e=>e.theme.border};
`,x=(0,c.default)(a.motion.div)`
  display: flex;
  flex-direction: row;
  padding: 0 16px;
`,g=c.default.div`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${e=>e.active?e.theme.purple:"transparent"};
  margin-right: 8px;
  height: 56px;
  display: flex;
  align-items: center;
`,h=c.default.div`
  padding: 8px 4px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: ${e=>e.isActive?e.theme.white:e.theme.grayLight};
  transition:
    color 0.1s cubic-bezier(0.5, 1, 0.89, 1),
    background 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;

  height: 32px;
  display: flex;
  align-items: center;

  &:active {
    color: ${e=>e.theme.white};
    background: #333;
  }
`}))}();
//# sourceMappingURL=ExplorePage.48913488.js.map
define=__define;})(window.define);