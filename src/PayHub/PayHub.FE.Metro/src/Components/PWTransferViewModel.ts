import PWCore, {
    Amount,
    EthProvider,
    //EosProvider, TronProvider, 
    PwCollector, AmountUnit, Address, AddressType, Web3ModalProvider, SUDT
  } from "@lay2/pw-core";
import { UIHelper } from '../Tools';
import { ViewModelBase } from "../ViewModels/ViewModelBase";
import { PWCoreBank } from "../Impl";

export class PWTransferViewModel extends ViewModelBase {
    charmId: string;
    worker: PWCoreBank;

    // providerName: string;
    // provider: Web3ModalProvider;
    // pw: PWCore;
    // web3Modal: Web3Modal;

    constructor(worker: PWCoreBank, eleId = "charmTransferByPW") {
        super();
        this.charmId = eleId;
        this.worker = worker;
        this.init();
    }

    init() {
        const ctx = this;
        const vueSettings = {
            data() {
                return {
                    // providerName: "",
                    // provider: null as Web3ModalProvider,
                    // pw: null,
                    // web3Modal: null,
                    address: null as Address,
                    balance: Amount.ZERO,
                    toAddressString: "",
                    pwbtcBalance: Amount.ZERO,
                    tokenName: 'CKB',
                    options: ['CKB', 'PW-BTC'],
                    toAddress: null as Address,
                    minAmount: new Amount('61'),
                    amountValue: 0,
                    amount: Amount.ZERO,
                    txs: [] as Array<any>
                };
            },
            methods: {
                transfer: function () {
                    //
                }
            },
            computed: {
                nativeAddress() { return this.address ? this.address.addressString : '-' },
                ckbAddress() { return this.address ? this.address.toCKBAddress() : '-' },
                balanceString() { return this.balance.toString(AmountUnit.ckb, {commify: true})},
                pwbtcBalanceString() { return this.pwbtcBalance.toString(AmountUnit.ckb, {commify: true})}
              },
            async mounted() {
            },
            watch: {
                // async address(address: Address) {
                //   console.log("new address: ", address.addressString);
                //   this.balance = await PWCore.defaultCollector.getBalance(address);
                //   //this.pwbtcBalance = await PWCore.defaultCollector.getSUDTBalance(new SUDT(PWBTC_ISSURER_LOCKHASH), address);
                // },
                // async toAddressString(addressString: string) {
                //   let addressType = AddressType.ckb;
                //   let lockArgs = null;
                //   if(addressString.startsWith('ck')) {
                //     addressType = AddressType.ckb;
                //   }
                //   else if (addressString.length === 12) {
                //     addressType = AddressType.eos;
                //     lockArgs = await Address.getEosLockArgs(PWCoreUtility.EOS_NETWORK, addressString);
                //   }
                //   else if (addressString.startsWith('0x')) {
                //     addressType = AddressType.eth;
                //   }
                //   else {
                //     addressType = AddressType.tron;
                //   }
                //   this.toAddress = new Address(addressString, addressType, lockArgs);
                //   this.minAmount = this.toAddress.minPaymentAmount() || new Amount('61');
                //   console.log('to address: ', this.toAddress);
                // },
                // amountValue(amountValue: string) {
                //   this.amount = new Amount(`${amountValue}`);
                //   console.log('send amount: ', this.amount)
                // }
              }
        };
        this.app = Vue.createApp(vueSettings).mount("#" + this.charmId);
    }

    async show(vm: PWTransferViewModel, coinName: string, coinUnit: string, receiverAddress: string, checkCKB: boolean = true, checkSUDT: boolean = true){
        //await vm.check(vm, checkCKB, checkSUDT);

        UIHelper.ShowCharm(vm.charmId);

        vm.app.coinName = coinName;
        vm.app.coinUnit = coinUnit;
        vm.app.isSUDT = coinUnit.toLocaleLowerCase() !== "ckb";
        vm.app.form.toAddress = receiverAddress;
    }

}