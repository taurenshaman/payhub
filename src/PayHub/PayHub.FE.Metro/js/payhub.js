"use strict";
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
DataService.Api_Accounts = DataService.ApiPrefix + "account/all";
class InputUtility {
    static copyToClipboard() {
        try {
            document.execCommand("copy");
        }
        catch (err) {
            console.log("InputUtility.copyToClipboard: " + err);
        }
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
class AccountViewModel extends ViewModelBase {
    constructor() {
        super();
    }
    async init() {
        const data = await this.api.getAsync(DataService.Api_Accounts, {});
        this.accounts = data.parsedBody;
        this.initVue();
    }
    initVue() {
        _.forEach(this.accounts, a => {
            a.iconInfo = "<span class='cc " + a.theCurrency.unit + "'></span>";
        });
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
        for (let i = 0; i < this.accounts.length; i++) {
            const account = this.accounts[i];
            UIHelper.CreateQRCode("qrcode_" + i, account.account, 200);
        }
    }
}
//# sourceMappingURL=payhub.js.map