import {DataService, InputUtility} from '../Tools';
import { createApp } from "vue";
import { AccountViewModelBase } from './AccountViewModelBase';

"use strict";

export class AccountViewModel extends AccountViewModelBase {
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
        const vueSettings = {
            data(){
                return {
                    accounts: ctx.accounts
                };
            },
            methods: {
                copyAccount: function (index: number) {
                    ctx.copyAccount(index);
                },
                submitTransaction: function (index: number) {
                    const account = ctx.accounts[index];
                    //
                },
                toggleCard: function (index: number) {
                    $('#card_' + index).toggleClass('active');
                },
                getIconInfo: function(index: number) {
                    const account = ctx.accounts[index];
                    return "<span class='"+ account.theCurrency.icon + "'></span>";
                }
            },
            mounted: function () {
                Metro.init();
                ctx.afterMetroReady();
            }
        };
        this.app = createApp(vueSettings).mount('#app');
    }

    copyAccount(index: number) {
        const ele = document.getElementById("taAccount_" + index) as HTMLTextAreaElement;
        ele.select();

        InputUtility.copyToClipboard();
    }

    afterMetroReady() {
        this.initAccountCards();
    }

}