import { Currency } from "./Currency";

export class WithdrawAccount{
    currencyId: string;
    account: string;

    name: string;
    qrcode: string;

    theCurrency: Currency;
}