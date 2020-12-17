/// <reference path="./ViewModelBase.ts" />

"use strict";

class AccountViewModelBase extends ViewModelBase {
    app;

    accounts;
    currencies;

    constructor() {
        super();

        this.currencies =_.concat(CurrencyCandidates.Data.cryptoCoins, CurrencyCandidates.Data.legalTenders);
    }

    initQRCodeOfCards() {
        for (let i = 0; i < this.accounts.length; i++) {
            const account = this.accounts[i];
			if(account.qrcode && account.qrcode.length > 4)
				continue;
            UIHelper.CreateQRCode("qrcode_" + i, account.account, 200);
        }
    }

    fitCurrencies() {
        _.forEach(this.currencies, coin => {
            if(!coin.icon ){
                coin.icon = "cc " + coin.unit;
            }
        });
    }
    
    fitAccounts(){
        _.forEach(this.accounts, account => {
            const currency = _.find(this.currencies, cur => account.currencyId === cur.id);
            account.theCurrency = _.clone(currency);
        });
    }

}