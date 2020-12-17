/// <reference path="./ViewModelBase.ts" />
//import { ViewModelBase } from './ViewModelBase';

"use strict";

class CurrencyManagerViewModel extends ViewModelBase {
    app;

    currencies;

    constructor() {
        super();
    }

    async init() {
        //const ctx = this;
        //const data = this.api.getAsync(DataService.Api_AccountCurrencies, {}).then(res => {
        //    console.log(res);
        //    ctx.initVue(res);
        //});

        const data = await this.api.getAsync(DataService.Api_Account_ListAll, {});
        this.currencies = data.parsedBody;
        this.initVue();
    }

    initVue() {
        const ctx = this;
        const data =_.concat(CurrencyCandidates.Data.cryptoCoins, CurrencyCandidates.Data.legalTenders);
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
                    //ctx.copyAccount(index);
                },
                // toggleCard: function (index) {
                //     $('#card_' + index).toggleClass('active');
                // }
            },
            mounted: function () {
                Metro.init();
                ctx.afterMetroReady();
            }
        });
    }

    // copyAccount(index) {
    //     const ele = document.getElementById("taAccount_" + index) as HTMLTextAreaElement;
    //     ele.select();
    //     InputUtility.copyToClipboard();
    // }

    afterMetroReady() {
    }

}