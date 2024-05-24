(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,l,n){Object.defineProperty(e,t,{get:l,set:n,enumerable:!0,configurable:!0})}var l=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;l.register("6VDxw",(function(n,a){var r;r=n.exports,Object.defineProperty(r,"__esModule",{value:!0,configurable:!0}),t(n.exports,"EthSelectWallet",(function(){return k})),t(n.exports,"default",(function(){return v}));var i=l("lMzyG"),o=l("4chX7"),d=l("lDSNw"),s=l("cZIbv"),u=l("laYjG"),c=l("7E6dj"),p=l("kpxNY"),m=l("aanFI"),f=l("kn91D"),x=l("cJ96h"),h=l("j5DyG");const g=s.default.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,E=s.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,y=s.default.div`
  background: #2a2a2a;
  border-radius: 6px;
  padding: 12px 16px;
`,_=s.default.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  width: fit-content;
  margin-bottom: 8px;

  > span {
    min-height: 14px !important;
    height: 14px !important;
    min-width: 14px !important;
    width: 14px !important;
    border-radius: 3px !important;
  }
`,w=s.default.div`
  display: flex;
  gap: 16px;
`,b=s.default.div`
  padding: 27px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,k=e(d).memo((({requestId:t})=>{const{t:l}=(0,i.useTranslation)(),n=(0,x.usePostOutgoingBackgroundResponse)(),[a,r]=(0,d.useState)(!1),s=(0,d.useCallback)((()=>{n({jsonrpc:"2.0",id:null!=t?t:void 0,result:a?o.user.user_selectEthWallet.result.enum.ALWAYS_USE_PHANTOM:o.user.user_selectEthWallet.result.enum.CONTINUE_WITH_PHANTOM})}),[t,n,a]),k=(0,d.useCallback)((()=>{n({jsonrpc:"2.0",id:null!=t?t:void 0,result:a?o.user.user_selectEthWallet.result.enum.ALWAYS_USE_METAMASK:o.user.user_selectEthWallet.result.enum.CONTINUE_WITH_METAMASK})}),[t,n,a]);return e(d).createElement(h.Container,null,e(d).createElement(h.Body,{style:{display:"flex",alignItems:"center"}},e(d).createElement(b,null,e(d).createElement(p.IconHeader,{icon:e(d).createElement(w,null,e(d).createElement(m.IconPhantomLogo,{width:64}),e(d).createElement(m.IconMetaMask,{width:64,height:64})),primaryText:l("whichExtensionToConnectWith"),headerStyle:p.IconHeaderStyle.Small}))),e(d).createElement(h.Footer,{plain:!0,style:{padding:"0px 16px 16px"}},e(d).createElement(g,null,e(d).createElement(E,null,e(d).createElement(u.Button,{onClick:k,"data-testid":"select_wallet--metamask"},l("useMetaMask"))),e(d).createElement(E,null,e(d).createElement(u.Button,{theme:"primary",onClick:s,"data-testid":"select_wallet--phantom"},l("usePhantom"))),e(d).createElement(y,{"data-testid":"select_wallet--dont_ask_me_again",onClick:()=>r(!a)},e(d).createElement(_,null,e(d).createElement(c.Checkbox,{checked:a})," ",l("dontAskMeAgain")),e(d).createElement(f.Text,{color:"#777777",size:13,weight:500,lineHeight:16,textAlign:"left"},l("configureInSettings"))))))}));var v=k}));
//# sourceMappingURL=EthSelectWallet.9c373740.js.map
define=__define;})(window.define);