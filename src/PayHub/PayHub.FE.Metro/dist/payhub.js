!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.PayHub=t(require("vue")):e.PayHub=t(e.Vue)}(self,(function(e){return(()=>{"use strict";var t={290:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class n{}t.default=n,n.DefaultUnitOfMoney="CNY"},163:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(207),t)},207:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},545:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Currency=void 0,t.Currency=class{}},340:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CurrencyCandidates=void 0;const a=i(n(290));class c{}t.CurrencyCandidates=c,c.Data={cryptoCoins:[{id:"d023ec040f79f1a9b2ac960b43785089",name:"Bitcoin",unit:"BTC"},{id:"94195b7b439ec3bda396c8df3d53e0c0",name:"Ethereum",unit:"ETH"},{id:"116e1fdc7967b296c3b099863cabc22a",name:"EthereumClassic",unit:"ETC"},{id:"f89e1773f4dd0ab54a474e085896877d",name:"Litecoin",unit:"LTC"},{id:"091527f0a496d0eafd2754f1b9590aa9",name:"Nervos",unit:"CKB",icon:"pi-ckb"},{id:"2c0847f66f16adcc6ddf93f1db5827e7",name:"Cosmos",unit:"ATOM",icon:"pi-atom"},{id:"d3428ee9afeb947b67aa37e634148ee5",name:"EOS",unit:"EOS"},{id:"ad4df7721cbab485e8fc04479aecd7e0",name:"Zcash",unit:"ZEC"},{id:"0ada0159f6906ac6d4e9634885c06bbc",name:"Horizen",unit:"ZEN",icon:"pi-zen"},{id:"17e296456ad17014fd9785da82c18a0c",name:"StellarLumens",unit:"XLM"},{id:"c33eb0623e9324c722c1e0a5d1fdb2a3",name:"Polkadot",unit:"DOT",icon:"pi-dot"},{id:"c0062863e3e99f67607ad1ae9a4299a7",name:"Ripple",unit:"XRP"},{id:"dd48f2c21016915ba6c795f320a4cf83",name:"TRON",unit:"TRX"},{id:"96678759312f067a9fd622b637502e36",name:"MakerDAO",unit:"DAI",icon:"pi-dai"},{id:"23ec191a8c1a7fa3c70c6088cd23e634",name:"Filecoin",unit:"FIL",icon:"pi-fil"}],legalTenders:[{id:"9b88c95a15e018c3f8038a7d0160145c",name:"Paypal",unit:a.default.DefaultUnitOfMoney,isLegalTender:!0,icon:"mif-paypal"},{id:"92a176f8a430b8b977ffe5fcff601372",name:"Alipay",unit:a.default.DefaultUnitOfMoney,isLegalTender:!0,icon:"pi-alipay"},{id:"c20ff00858b26de6ff99273ec51c18de",name:"WeChatPay",unit:a.default.DefaultUnitOfMoney,isLegalTender:!0,icon:"pi-wechat"}]}},640:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WithdrawAccount=void 0,t.WithdrawAccount=class{}},590:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(340),t),a(n(545),t),a(n(640),t)},315:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserUtility=void 0,t.BrowserUtility=class{static IsMobileBrowser(){let e=navigator.userAgent||navigator.vendor;return!(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)&&!/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))}}},918:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DataService=void 0;const a=i(n(805)),c=n(412);class o{query(e,t,n,i="GET"){const a=Metro.activity.open({type:"cycle"});$.ajax({url:e,dataType:"json",type:i,contentType:"application/x-www-form-urlencoded",data:t,async:!0,processData:!1,cache:!1,success:function(e,t,i){Metro.activity.close(a),"function"!=typeof n||n(e)},error:function(e,t,n){Metro.activity.close(a);const i="【Status】"+t+"【error】"+n+"【others】"+e.responseText;c.UIHelper.ShowError("ERROR",i)}})}async getAsync(e,t){const n=Metro.activity.open({type:"cycle"}),i=await a.default.http(new Request(e,{method:"get"}));return Metro.activity.close(n),i}async postAsync(e,t){const n=Metro.activity.open({type:"cycle"}),i=await a.default.http(new Request(e,{method:"post",body:t}));return Metro.activity.close(n),i}}t.DataService=o,o.ApiPrefix="/api/v0/",o.Api_Account_ListAll=o.ApiPrefix+"account/all",o.Api_Account_Save=o.ApiPrefix+"account/save",o.Api_Currency_ListAll=o.ApiPrefix+"currency/all"},970:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InputUtility=void 0,t.InputUtility=class{static copyToClipboard(){try{document.execCommand("copy")}catch(e){console.log("InputUtility.copyToClipboard: "+e)}}static async fileToBase64(e){return new Promise(((t,n)=>{const i=new FileReader;i.readAsDataURL(e),i.onload=()=>t(i.result),i.onerror=e=>n(e)}))}}},805:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class n{static async http(e){const t=await fetch(e);return t.parsedBody=await t.json(),t}static async get(e,t={method:"get"}){return await n.http(new Request(e,t))}static async post(e,t,i={method:"post",body:JSON.stringify(t)}){return await n.http(new Request(e,i))}static async put(e,t,i={method:"put",body:JSON.stringify(t)}){return await n.http(new Request(e,i))}}t.default=n},274:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StringUtility=void 0,t.StringUtility=class{static EscapeSpecialChars(e){return e.replace(/\\n/g,"\\n").replace(/\\'/g,"\\'").replace(/\\"/g,'\\"').replace(/\\&/g,"\\&").replace(/\\r/g,"\\r").replace(/\\t/g,"\\t").replace(/\\b/g,"\\b").replace(/\\f/g,"\\f")}static base64EncodeUnicode(e){return window&&"btoa"in window&&"encodeURIComponent"in window?btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,((e,t)=>String.fromCharCode("0x"+t)))):(console.warn("base64EncodeUnicode requirements: window.btoa and window.encodeURIComponent functions"),null)}}},412:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UIHelper=void 0,t.UIHelper=class{static ShowCharm(e){Metro.charms.open("#"+e)}static HideCharm(e){Metro.charms.close("#"+e)}static HideCharms(e){e.forEach((e=>{Metro.charms.close("#"+e)}))}static ToggleCharm(e){Metro.charms.toggle("#"+e)}static disableElement(e){$("#"+e).attr("disabled","true")}static enableElement(e){$("#"+e).attr("disabled","false")}static ShowMessage(e,t){Metro.notify.create(t,e,{cls:"info"})}static ShowError(e,t){Metro.notify.create(t,e,{cls:"alert"})}static ToastError(e,t=5e3){(0,Metro.toast.create)(e,null,t,"bg-red fg-white")}static ToastMessage(e,t=5e3){(0,Metro.toast.create)(e,null,t,"bg-green fg-white")}static LaunchFullScreen(e){e.requestFullscreen&&e.requestFullscreen()}static SetupFullScreen(e,t){e.addEventListener&&(e.addEventListener("webkitfullscreenchange",(()=>{t&&t()}),!1),e.addEventListener("mozfullscreenchange",(()=>{t&&t()}),!1),e.addEventListener("fullscreenchange",(()=>{t&&t()}),!1),e.addEventListener("MSFullscreenChange",(()=>{t&&t()}),!1))}static Refresh(){window.location.reload()}static GoBack(){window.history.back()}static CreateQRCode(e,t,n=256){const i=document.getElementById(e);i&&new QRCode(i,{text:t,width:n,height:n})}}},316:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(315),t),a(n(918),t),a(n(970),t),a(n(805),t),a(n(274),t),a(n(412),t)},527:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AccountViewModel=void 0;const a=n(316),c=i(n(39)),o=n(335);class r extends o.AccountViewModelBase{constructor(){super()}async init(){const e=await this.api.getAsync(a.DataService.Api_Account_ListAll,{});this.accounts=e.parsedBody,this.fitCurrencies(),this.fitAccounts(),this.initVue()}initVue(){const e=this;this.app=new c.default({el:"#app",data:{accounts:e.accounts},methods:{copyAccount:function(t){e.copyAccount(t)},submitTransaction:function(t){e.accounts[t]},toggleCard:function(e){$("#card_"+e).toggleClass("active")},getIconInfo:function(t){return"<span class='"+e.accounts[t].theCurrency.icon+"'></span>"}},mounted:function(){Metro.init(),e.afterMetroReady()}})}copyAccount(e){document.getElementById("taAccount_"+e).select(),a.InputUtility.copyToClipboard()}afterMetroReady(){this.initAccountCards()}}t.AccountViewModel=r},335:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AccountViewModelBase=void 0;const i=n(590),a=n(316),c=n(256);class o extends c.ViewModelBase{constructor(){super(),this.currencies=_.concat(i.CurrencyCandidates.Data.cryptoCoins,i.CurrencyCandidates.Data.legalTenders)}fitCurrencies(){this.currencies.forEach((e=>{e.icon||(e.icon="cc "+e.unit)}))}fitAccounts(){this.accounts.forEach((e=>{const t=this.currencies.find((t=>e.currencyId===t.id));e.theCurrency=_.clone(t)}))}initQRCodeOfCard(e,t){t.qrcode&&t.qrcode.length>4||a.UIHelper.CreateQRCode("qrcode_"+e,t.account,200)}initCardEffect(e,t="card_"){if(e<0)return;const n=document.getElementById(t+e),i=n.children[0].children[0],a=n.children[1].children[0];n.addEventListener("mouseenter",(e=>{i.classList.add("shadow-1"),a.classList.add("shadow-1")})),n.addEventListener("mouseleave",(e=>{i.classList.remove("shadow-1"),a.classList.remove("shadow-1")}))}initAccountCards(){for(let e=0;e<this.accounts.length;e++){const t=this.accounts[e];this.initQRCodeOfCard(e,t),this.initCardEffect(e)}}}t.AccountViewModelBase=o},203:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CurrencyManagerViewModel=void 0;const a=n(590),c=n(316),o=i(n(39)),r=n(256);class s extends r.ViewModelBase{constructor(){super()}async init(){const e=await this.api.getAsync(c.DataService.Api_Account_ListAll,{});this.currencies=e.parsedBody,this.initVue()}initVue(){const e=this,t=_.concat(a.CurrencyCandidates.Data.cryptoCoins,a.CurrencyCandidates.Data.legalTenders);_.forEach(t,(t=>{t.icon="cc "+t.unit;const n=e.currencies.findIndex((e=>e.id===t.id));t.supported=n>=0,t.statusColor=n<0?"cyan":"green"})),this.app=new o.default({el:"#app",data:{accounts:t},methods:{supportCurrency:function(e){}},mounted:function(){Metro.init(),e.afterMetroReady()}})}afterMetroReady(){}}t.CurrencyManagerViewModel=s},256:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ViewModelBase=void 0;const i=n(316);t.ViewModelBase=class{constructor(){this.api=new i.DataService}}},575:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WalletViewModel=void 0;const a=i(n(39)),c=n(316),o=n(316),r=n(335);class s extends r.AccountViewModelBase{constructor(){super()}async init(){const e=await this.api.getAsync(c.DataService.Api_Account_ListAll,{});this.accounts=e.parsedBody,this.updateCurrenciesStatus(),this.fitCurrencies(),this.fitAccounts(),this.initVue()}initVue(){const e=this;this.app=new a.default({el:"#app",data:{accounts:this.accounts,currencies:this.currencies,theCurrency:{},accountName:"",accountAddress:"",autoGenerateQrcode:!0},methods:{addAccount:function(e){const t=this.currencies[e];this.theCurrency=t,this.accountName=t.name+"("+t.unit+")",this.accountAddress="",o.UIHelper.ShowCharm("charmEditAccount")},editAccount:function(t){const n=this.accounts[t];this.theCurrency=e.currencies.find((e=>e.id===n.currencyId)),this.accountName=n.name,this.accountAddress=n.account,o.UIHelper.ShowCharm("charmEditAccount")},toggleCard:function(e){$("#card_"+e).toggleClass("active")},getIconInfo:function(t){return"<span class='"+e.accounts[t].theCurrency.icon+"'></span>"}},mounted:function(){Metro.init(),e.afterMetroReady()}})}updateCurrenciesStatus(){this.currencies.forEach((e=>{const t=this.accounts.findIndex((t=>t.currencyId===e.id));e.added=t>=0,e.statusColor=t<0?"cyan":"green"}))}async saveAccount(){const e=this,t=document.getElementById("qrcodeFile");let n="";t.files.length>0&&(n=await o.InputUtility.fileToBase64(t.files[0]));const i={currencyId:e.app.theCurrency.id,name:e.app.accountName,address:e.app.accountAddress,qrcode:n},a=(await this.api.postAsync(c.DataService.Api_Account_Save,JSON.stringify(i))).parsedBody;a&&a.id&&32===a.id.length?(o.UIHelper.ToastMessage("Saved!"),o.UIHelper.Refresh()):o.UIHelper.ToastError("Unkown Error!")}afterMetroReady(){this.initAccountCards()}}t.WalletViewModel=s},581:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(256),t),a(n(335),t),a(n(527),t),a(n(203),t),a(n(575),t)},607:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const o={Core:c(n(163)),Models:c(n(590)),Tools:c(n(316)),ViewModels:c(n(581)),Settings:c(n(290))};t.default=o},39:t=>{t.exports=e}},n={},i=function e(i){var a=n[i];if(void 0!==a)return a.exports;var c=n[i]={exports:{}};return t[i].call(c.exports,c,c.exports,e),c.exports}(607);return i.default})()}));
//# sourceMappingURL=payhub.js.map