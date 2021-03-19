import { Currency, CurrencyCandidates } from '../Models';
import {DataService} from '../Tools';
//import { createApp } from "vue";
import { ViewModelBase } from './ViewModelBase';

"use strict";

export class CurrencyManagerViewModel extends ViewModelBase {
    app: any;

    currencies: Array<Currency>;

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
        _.forEach(data, (coin: any) => {
            coin.icon = "cc " + coin.unit;
            const index = ctx.currencies.findIndex(cur => cur.id === coin.id);
            coin.supported = (index >= 0);
            coin.statusColor = index < 0 ? "cyan" : "green";
        });
        
        const vueSettings = {
            data(){
                return {
                    accounts: data
                };
            },
            methods: {
                supportCurrency: function (index: number) {
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
        };
        this.app = Vue.createApp(vueSettings).mount('#app');
    }

    // copyAccount(index) {
    //     const ele = document.getElementById("taAccount_" + index) as HTMLTextAreaElement;
    //     ele.select();
    //     InputUtility.copyToClipboard();
    // }

    afterMetroReady() {
    }

}