"use strict";
import AppSettings from "../AppSettings";

export class CurrencyCandidates{
    public static readonly Data = {
        cryptoCoins: [
            {
                id: "d023ec040f79f1a9b2ac960b43785089",
                name: "Bitcoin",
                unit: "BTC"
            },
            {
                id: "94195b7b439ec3bda396c8df3d53e0c0",
                name: "Ethereum",
                unit: "ETH"
            },
            {
                id: "116e1fdc7967b296c3b099863cabc22a",
                name: "EthereumClassic",
                unit: "ETC"
            },
            {
                id: "f89e1773f4dd0ab54a474e085896877d",
                name: "Litecoin",
                unit: "LTC"
            },
            {
                id: "091527f0a496d0eafd2754f1b9590aa9",
                name: "Nervos",
                unit: "CKB",
                icon: "pi-ckb"
            },
            {
                id: "2c0847f66f16adcc6ddf93f1db5827e7",
                name: "Cosmos",
                unit: "ATOM",
                icon: "pi-atom"
            },
            {
                id: "d3428ee9afeb947b67aa37e634148ee5",
                name: "EOS",
                unit: "EOS"
            },
            {
                id: "ad4df7721cbab485e8fc04479aecd7e0",
                name: "Zcash",
                unit: "ZEC"
            },
            {
                id: "0ada0159f6906ac6d4e9634885c06bbc",
                name: "Horizen",
                unit: "ZEN",
                icon: "pi-zen"
            },
            
            {
                id: "17e296456ad17014fd9785da82c18a0c",
                name: "StellarLumens",
                unit: "XLM"
            },
            {
                id: "c33eb0623e9324c722c1e0a5d1fdb2a3",
                name: "Polkadot",
                unit: "DOT",
                icon: "pi-dot"
            },
            {
                id: "c0062863e3e99f67607ad1ae9a4299a7",
                name: "Ripple",
                unit: "XRP"
            },
            {
                id: "dd48f2c21016915ba6c795f320a4cf83",
                name: "TRON",
                unit: "TRX"
            },
            {
                id: "96678759312f067a9fd622b637502e36",
                name: "MakerDAO",
                unit: "DAI",
                icon: "pi-dai"
            },
            {
                id: "23ec191a8c1a7fa3c70c6088cd23e634",
                name: "Filecoin",
                unit: "FIL",
                icon: "pi-fil"
            }
        ],
        legalTenders: [
            {
                id: "9b88c95a15e018c3f8038a7d0160145c",
                name: "Paypal",
                unit: AppSettings.DefaultUnitOfMoney,
                isLegalTender: true,
                icon: "mif-paypal"
            },
            {
                id: "92a176f8a430b8b977ffe5fcff601372",
                name: "Alipay",
                unit: AppSettings.DefaultUnitOfMoney,
                isLegalTender: true,
                icon: "pi-alipay"
            },
            {
                id: "c20ff00858b26de6ff99273ec51c18de",
                name: "WeChatPay",
                unit: AppSettings.DefaultUnitOfMoney,
                isLegalTender: true,
                icon: "pi-wechat"
            }
        ]
    }
}