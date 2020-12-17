/// <reference path="./AccountViewModelBase.ts" />
//import { ViewModelBase } from './ViewModelBase';

"use strict";

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
                // account
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
                }
            },
            mounted: function () {
                Metro.init();
                ctx.afterMetroReady();
            }
        });
    }

    updateCurrenciesStatus(){
        _.forEach(this.currencies, coin => {
            const index = _.findIndex(this.accounts, account => account.currencyId === coin.id);
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
        this.initQRCodeOfCards();
    }

}