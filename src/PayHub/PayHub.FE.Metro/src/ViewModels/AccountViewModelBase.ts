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

    initQRCodeOfCard(index: number, data) {
        if(data.qrcode && data.qrcode.length > 4)
            return;
        UIHelper.CreateQRCode("qrcode_" + index, data.account, 200);
    }

    initCardEffect(index: number, idPrefix = "card_") {
        if (index < 0)
            return;
        const cardDiv = document.getElementById(idPrefix + index);
        const frontCard = cardDiv.children[0].children[0] as HTMLDivElement;
        const backCard = cardDiv.children[1].children[0] as HTMLDivElement;

        cardDiv.addEventListener('mouseenter', e => {
            frontCard.classList.add("shadow-1");
            backCard.classList.add("shadow-1");
        });

        cardDiv.addEventListener('mouseleave', e => {
            frontCard.classList.remove("shadow-1");
            backCard.classList.remove("shadow-1");
        });
    }

    initAccountCards(){
        for (let i = 0; i < this.accounts.length; i++) {
            const account = this.accounts[i];
            this.initQRCodeOfCard(i, account);
            this.initCardEffect(i);
        }
    }

}