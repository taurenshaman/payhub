"use strict";
class AppSettings {
}
AppSettings.DefaultUnitOfMoney = "CNY";
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        });
    };
}
class CurrencyCandidates {
}
CurrencyCandidates.Data = {
    cryptoCoins: [
        {
            id: "d023ec040f79f1a9b2ac960b43785089",
            name: "Bitcoin",
            unit: "BTC"
        },
        {
            id: "94195b7b439ec3bda396c8df3d53e0c0",
            name: "Ethereum",
            unit: "ETH"
        },
        {
            id: "116e1fdc7967b296c3b099863cabc22a",
            name: "EthereumClassic",
            unit: "ETC"
        },
        {
            id: "f89e1773f4dd0ab54a474e085896877d",
            name: "Litecoin",
            unit: "LTC"
        },
        {
            id: "091527f0a496d0eafd2754f1b9590aa9",
            name: "Nervos",
            unit: "CKB",
            icon: "pi-ckb"
        },
        {
            id: "2c0847f66f16adcc6ddf93f1db5827e7",
            name: "Cosmos",
            unit: "ATOM",
            icon: "pi-atom"
        },
        {
            id: "d3428ee9afeb947b67aa37e634148ee5",
            name: "EOS",
            unit: "EOS"
        },
        {
            id: "ad4df7721cbab485e8fc04479aecd7e0",
            name: "Zcash",
            unit: "ZEC"
        },
        {
            id: "0ada0159f6906ac6d4e9634885c06bbc",
            name: "Horizen",
            unit: "ZEN",
            icon: "pi-zen"
        },
        {
            id: "17e296456ad17014fd9785da82c18a0c",
            name: "StellarLumens",
            unit: "XLM"
        },
        {
            id: "c33eb0623e9324c722c1e0a5d1fdb2a3",
            name: "Polkadot",
            unit: "DOT",
            icon: "pi-dot"
        },
        {
            id: "c0062863e3e99f67607ad1ae9a4299a7",
            name: "Ripple",
            unit: "XRP"
        },
        {
            id: "dd48f2c21016915ba6c795f320a4cf83",
            name: "TRON",
            unit: "TRX"
        },
        {
            id: "96678759312f067a9fd622b637502e36",
            name: "MakerDAO",
            unit: "DAI",
            icon: "pi-dai"
        },
        {
            id: "23ec191a8c1a7fa3c70c6088cd23e634",
            name: "Filecoin",
            unit: "FIL",
            icon: "pi-fil"
        }
    ],
    legalTenders: [
        {
            id: "9b88c95a15e018c3f8038a7d0160145c",
            name: "Paypal",
            unit: AppSettings.DefaultUnitOfMoney,
            isLegalTender: true,
            icon: "mif-paypal"
        },
        {
            id: "92a176f8a430b8b977ffe5fcff601372",
            name: "Alipay",
            unit: AppSettings.DefaultUnitOfMoney,
            isLegalTender: true,
            icon: "pi-alipay"
        },
        {
            id: "c20ff00858b26de6ff99273ec51c18de",
            name: "WeChatPay",
            unit: AppSettings.DefaultUnitOfMoney,
            isLegalTender: true,
            icon: "pi-wechat"
        }
    ]
};
class BrowserUtility {
    static IsMobileBrowser() {
        let userAgent = navigator.userAgent || navigator.vendor;
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4)))
            return true;
        return false;
    }
}
class DataService {
    query(uri, queryData, callback, httpMethod = "GET") {
        const activityDialog = Metro.activity.open({
            type: "cycle"
        });
        $.ajax({
            url: uri,
            dataType: "json",
            type: httpMethod,
            contentType: 'application/x-www-form-urlencoded',
            data: queryData,
            async: true,
            processData: false,
            cache: false,
            success: function (data, textStatus, jqXHR) {
                Metro.activity.close(activityDialog);
                if (typeof callback === "function") {
                    callback(data);
                    return;
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                Metro.activity.close(activityDialog);
                const msgError = "【Status】" + textStatus + "【error】" + errorThrown + "【others】" + jqXHR.responseText;
                UIHelper.ShowError("ERROR", msgError);
            }
        });
    }
    async getAsync(url, ajaxData) {
        const activityDialog = Metro.activity.open({
            type: "cycle"
        });
        const response = await http(new Request(url, {
            method: "get",
        }));
        Metro.activity.close(activityDialog);
        return response;
    }
    async postAsync(url, ajaxData) {
        const activityDialog = Metro.activity.open({
            type: "cycle"
        });
        const response = await http(new Request(url, {
            method: "post",
            body: ajaxData
        }));
        Metro.activity.close(activityDialog);
        return response;
    }
}
DataService.ApiPrefix = "/api/v0/";
DataService.Api_Account_ListAll = DataService.ApiPrefix + "account/all";
DataService.Api_Account_Save = DataService.ApiPrefix + "account/save";
DataService.Api_Currency_ListAll = DataService.ApiPrefix + "currency/all";
class InputUtility {
    static copyToClipboard() {
        try {
            document.execCommand("copy");
        }
        catch (err) {
            console.log("InputUtility.copyToClipboard: " + err);
        }
    }
    static async fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
}
async function http(request) {
    const response = await fetch(request);
    response.parsedBody = await response.json();
    return response;
}
async function get(path, args = { method: "get" }) {
    return await http(new Request(path, args));
}
;
async function post(path, body, args = { method: "post", body: JSON.stringify(body) }) {
    return await http(new Request(path, args));
}
;
async function put(path, body, args = { method: "put", body: JSON.stringify(body) }) {
    return await http(new Request(path, args));
}
;
class StringUtility {
    static EscapeSpecialChars(str) {
        return str.replace(/\\n/g, "\\n")
            .replace(/\\'/g, "\\'")
            .replace(/\\"/g, '\\"')
            .replace(/\\&/g, "\\&")
            .replace(/\\r/g, "\\r")
            .replace(/\\t/g, "\\t")
            .replace(/\\b/g, "\\b")
            .replace(/\\f/g, "\\f");
    }
    static base64EncodeUnicode(str) {
        if (window
            && "btoa" in window
            && "encodeURIComponent" in window) {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
                return String.fromCharCode(("0x" + p1));
            }));
        }
        else {
            console.warn("base64EncodeUnicode requirements: window.btoa and window.encodeURIComponent functions");
            return null;
        }
    }
}
class MarkdownUtility {
}
class UIHelper {
    static ShowCharm(id) {
        Metro.charms.open("#" + id);
    }
    static HideCharm(id) {
        Metro.charms.close("#" + id);
    }
    static HideCharms(ids) {
        _.forEach(ids, id => {
            Metro.charms.close("#" + id);
        });
    }
    static ToggleCharm(id) {
        Metro.charms.toggle("#" + id);
    }
    static disableElement(id) {
        $("#" + id).attr('disabled', "true");
    }
    static enableElement(id) {
        $("#" + id).attr('disabled', "false");
    }
    static ShowMessage(title, message) {
        Metro.notify.create(message, title, {
            cls: "info"
        });
    }
    static ShowError(title, error) {
        Metro.notify.create(error, title, {
            cls: "alert"
        });
    }
    static ToastError(msg, milleseconds = 5000) {
        const toast = Metro.toast.create;
        toast(msg, null, milleseconds, "bg-red fg-white");
    }
    static ToastMessage(msg, milleseconds = 5000) {
        const toast = Metro.toast.create;
        toast(msg, null, milleseconds, "bg-green fg-white");
    }
    static LaunchFullScreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
    static SetupFullScreen(element, callbackFullScreenChange) {
        if (element.addEventListener) {
            element.addEventListener('webkitfullscreenchange', () => {
                if (callbackFullScreenChange) {
                    callbackFullScreenChange();
                }
            }, false);
            element.addEventListener('mozfullscreenchange', () => {
                if (callbackFullScreenChange) {
                    callbackFullScreenChange();
                }
            }, false);
            element.addEventListener('fullscreenchange', () => {
                if (callbackFullScreenChange) {
                    callbackFullScreenChange();
                }
            }, false);
            element.addEventListener('MSFullscreenChange', () => {
                if (callbackFullScreenChange) {
                    callbackFullScreenChange();
                }
            }, false);
        }
    }
    static Refresh() {
        window.location.reload();
    }
    static GoBack() {
        window.history.back();
    }
    static CreateQRCode(eleId, text, size = 256) {
        const qrContainer = document.getElementById(eleId);
        if (qrContainer) {
            const qrc = new QRCode(qrContainer, {
                text: text,
                width: size,
                height: size
            });
        }
    }
}
class ViewModelBase {
    constructor() {
        this.api = new DataService();
    }
}
class AccountViewModelBase extends ViewModelBase {
    constructor() {
        super();
        this.currencies = _.concat(CurrencyCandidates.Data.cryptoCoins, CurrencyCandidates.Data.legalTenders);
    }
    fitCurrencies() {
        _.forEach(this.currencies, coin => {
            if (!coin.icon) {
                coin.icon = "cc " + coin.unit;
            }
        });
    }
    fitAccounts() {
        _.forEach(this.accounts, account => {
            const currency = _.find(this.currencies, cur => account.currencyId === cur.id);
            account.theCurrency = _.clone(currency);
        });
    }
    initQRCodeOfCard(index, data) {
        if (data.qrcode && data.qrcode.length > 4)
            return;
        UIHelper.CreateQRCode("qrcode_" + index, data.account, 200);
    }
    initCardEffect(index, idPrefix = "card_") {
        if (index < 0)
            return;
        const cardDiv = document.getElementById(idPrefix + index);
        const frontCard = cardDiv.children[0].children[0];
        const backCard = cardDiv.children[1].children[0];
        cardDiv.addEventListener('mouseenter', e => {
            frontCard.classList.add("shadow-1");
            backCard.classList.add("shadow-1");
        });
        cardDiv.addEventListener('mouseleave', e => {
            frontCard.classList.remove("shadow-1");
            backCard.classList.remove("shadow-1");
        });
    }
    initAccountCards() {
        for (let i = 0; i < this.accounts.length; i++) {
            const account = this.accounts[i];
            this.initQRCodeOfCard(i, account);
            this.initCardEffect(i);
        }
    }
}
class AccountViewModel extends AccountViewModelBase {
    constructor() {
        super();
    }
    async init() {
        const data = await this.api.getAsync(DataService.Api_Account_ListAll, {});
        this.accounts = data.parsedBody;
        this.fitCurrencies();
        this.fitAccounts();
        this.initVue();
    }
    initVue() {
        const ctx = this;
        this.app = new Vue({
            el: '#app',
            data: {
                accounts: ctx.accounts
            },
            methods: {
                copyAccount: function (index) {
                    ctx.copyAccount(index);
                },
                submitTransaction: function (index) {
                    const account = ctx.accounts[index];
                },
                toggleCard: function (index) {
                    $('#card_' + index).toggleClass('active');
                },
                getIconInfo: function (index) {
                    const account = ctx.accounts[index];
                    return "<span class='" + account.theCurrency.icon + "'></span>";
                }
            },
            mounted: function () {
                Metro.init();
                ctx.afterMetroReady();
            }
        });
    }
    copyAccount(index) {
        const ele = document.getElementById("taAccount_" + index);
        ele.select();
        InputUtility.copyToClipboard();
    }
    afterMetroReady() {
        this.initAccountCards();
    }
}
class CurrencyManagerViewModel extends ViewModelBase {
    constructor() {
        super();
    }
    async init() {
        const data = await this.api.getAsync(DataService.Api_Account_ListAll, {});
        this.currencies = data.parsedBody;
        this.initVue();
    }
    initVue() {
        const ctx = this;
        const data = _.concat(CurrencyCandidates.Data.cryptoCoins, CurrencyCandidates.Data.legalTenders);
        _.forEach(data, coin => {
            coin.icon = "cc " + coin.unit;
            const index = _.findIndex(ctx.currencies, cur => cur.id === coin.id);
            coin.supported = (index >= 0);
            coin.statusColor = index < 0 ? "cyan" : "green";
        });
        this.app = new Vue({
            el: '#app',
            data: {
                accounts: data
            },
            methods: {
                supportCurrency: function (index) {
                },
            },
            mounted: function () {
                Metro.init();
                ctx.afterMetroReady();
            }
        });
    }
    afterMetroReady() {
    }
}
class WalletViewModel extends AccountViewModelBase {
    constructor() {
        super();
    }
    async init() {
        const data = await this.api.getAsync(DataService.Api_Account_ListAll, {});
        this.accounts = data.parsedBody;
        this.updateCurrenciesStatus();
        this.fitCurrencies();
        this.fitAccounts();
        this.initVue();
    }
    initVue() {
        const ctx = this;
        this.app = new Vue({
            el: '#app',
            data: {
                accounts: this.accounts,
                currencies: this.currencies,
                theCurrency: {},
                accountName: "",
                accountAddress: "",
                autoGenerateQrcode: true
            },
            methods: {
                addAccount: function (index) {
                    const currency = this.currencies[index];
                    this.theCurrency = currency;
                    this.accountName = currency.name + "(" + currency.unit + ")";
                    this.accountAddress = "";
                    UIHelper.ShowCharm("charmEditAccount");
                },
                editAccount: function (index) {
                    const account = this.accounts[index];
                    this.theCurrency = _.find(ctx.currencies, i => i.id === account.currencyId);
                    this.accountName = account.name;
                    this.accountAddress = account.account;
                    UIHelper.ShowCharm("charmEditAccount");
                },
                toggleCard: function (index) {
                    $('#card_' + index).toggleClass('active');
                },
                getIconInfo: function (index) {
                    const account = ctx.accounts[index];
                    return "<span class='" + account.theCurrency.icon + "'></span>";
                }
            },
            mounted: function () {
                Metro.init();
                ctx.afterMetroReady();
            }
        });
    }
    updateCurrenciesStatus() {
        _.forEach(this.currencies, coin => {
            const index = _.findIndex(this.accounts, account => account.currencyId === coin.id);
            coin.added = (index >= 0);
            coin.statusColor = index < 0 ? "cyan" : "green";
        });
    }
    async saveAccount() {
        const ctx = this;
        const qrcodeFile = document.getElementById("qrcodeFile");
        let base64 = "";
        if (qrcodeFile.files.length > 0) {
            base64 = await InputUtility.fileToBase64(qrcodeFile.files[0]);
        }
        const postData = {
            currencyId: ctx.app.theCurrency.id,
            name: ctx.app.accountName,
            address: ctx.app.accountAddress,
            qrcode: base64
        };
        const res = await this.api.postAsync(DataService.Api_Account_Save, JSON.stringify(postData));
        const data = res.parsedBody;
        if (data && data.id && data.id.length === 32) {
            UIHelper.ToastMessage("Saved!");
            UIHelper.Refresh();
        }
        else {
            UIHelper.ToastError("Unkown Error!");
        }
    }
    afterMetroReady() {
        this.initAccountCards();
    }
}
//# sourceMappingURL=payhub.js.map