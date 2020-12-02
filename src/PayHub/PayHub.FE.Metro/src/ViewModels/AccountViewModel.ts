/// <reference path="./ViewModelBase.ts" />
//import { ViewModelBase } from './ViewModelBase';

"use strict";

class AccountViewModel extends ViewModelBase {
    app;

    accounts;

    constructor() {
        super();
    }

    async init() {
        //const ctx = this;
        //const data = this.api.getAsync(DataService.Api_AccountCurrencies, {}).then(res => {
        //    console.log(res);
        //    ctx.initVue(res);
        //});

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
                    //
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
        const ele = document.getElementById("taAccount_" + index) as HTMLTextAreaElement;
        ele.select();

        InputUtility.copyToClipboard();
    }

    afterMetroReady() {
        for (let i = 0; i < this.accounts.length; i++) {
            const account = this.accounts[i];
			if(account.qrcode && account.qrcode.length > 4)
					continue;
            UIHelper.CreateQRCode("qrcode_" + i, account.account, 200);
        }
    }

}