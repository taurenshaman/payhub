/// <reference path="./AccountViewModelBase.ts" />
//import { ViewModelBase } from './ViewModelBase';

"use strict";

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
                    //
                },
                toggleCard: function (index) {
                    $('#card_' + index).toggleClass('active');
                },
                getIconInfo: function(index) {
                    const account = ctx.accounts[index];
                    return "<span class='"+ account.theCurrency.icon + "'></span>";
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
        this.initAccountCards();
    }

}