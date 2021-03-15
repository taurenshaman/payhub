import { Currency, WithdrawAccount, CurrencyCandidates } from '../Models';
import {UIHelper} from '../Tools';
import { ViewModelBase } from './ViewModelBase';

"use strict";

export class AccountViewModelBase extends ViewModelBase {
    app: any;

    accounts: Array<WithdrawAccount>;
    currencies: Array<Currency>;

    constructor() {
        super();

        this.currencies =_.concat(CurrencyCandidates.Data.cryptoCoins, CurrencyCandidates.Data.legalTenders);
    }

    fitCurrencies() {
        this.currencies.forEach(coin => {
            if(!coin.icon ){
                coin.icon = "cc " + coin.unit;
            }
        });
    }
    
    fitAccounts(){
        this.accounts.forEach(account => {
            const currency = this.currencies.find(cur => account.currencyId === cur.id);
            account.theCurrency = _.clone(currency);
        });
    }

    initQRCodeOfCard(index: number, data: any) {
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