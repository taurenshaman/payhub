import Vue from 'vue';
import {DataService} from '../Tools';
import {UIHelper, InputUtility} from '../Tools';
import { AccountViewModelBase } from './AccountViewModelBase';

"use strict";

export class WalletViewModel extends AccountViewModelBase {
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
                // account
                theCurrency: {},
                accountName: "",
                accountAddress: "",
                autoGenerateQrcode: true
            },
            methods: {
                addAccount: function (index: number) {
                    const currency = this.currencies[index];
                    this.theCurrency = currency;
                    this.accountName = currency.name + "(" + currency.unit + ")";
                    this.accountAddress = "";
                    UIHelper.ShowCharm("charmEditAccount");
                },
                editAccount: function (index: number) {
                    const account = this.accounts[index];
                    this.theCurrency = ctx.currencies.find(i => i.id === account.currencyId);
                    this.accountName = account.name;
                    this.accountAddress = account.account;
                    UIHelper.ShowCharm("charmEditAccount");
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
        });
    }

    updateCurrenciesStatus(){
        this.currencies.forEach(coin => {
            const index = this.accounts.findIndex(account => account.currencyId === coin.id);
            coin.added = (index >= 0);
            coin.statusColor = index < 0 ? "cyan" : "green";
        });
    }

    async saveAccount(){
        const ctx = this;
        const qrcodeFile = document.getElementById("qrcodeFile") as HTMLInputElement;
        let base64 = "";
        if(qrcodeFile.files.length > 0){
            base64 = await InputUtility.fileToBase64(qrcodeFile.files[0]);//.catch(e => Error(e));
        }

        const postData = {
            currencyId: ctx.app.theCurrency.id,
            name: ctx.app.accountName,
            address: ctx.app.accountAddress,
            qrcode: base64
        };
        const res = await this.api.postAsync(DataService.Api_Account_Save, JSON.stringify(postData));
        const data = res.parsedBody;
        if(data && data.id && data.id.length === 32){
            UIHelper.ToastMessage("Saved!");
            UIHelper.Refresh();
        }
        else{
            UIHelper.ToastError("Unkown Error!");
        }
    }

    afterMetroReady() {
        this.initAccountCards();
    }

}