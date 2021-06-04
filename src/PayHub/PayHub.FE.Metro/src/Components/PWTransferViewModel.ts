import PWCore, {
  Amount,
  EthProvider,
  //EosProvider, TronProvider, 
  PwCollector, AmountUnit, Address, AddressType, Web3ModalProvider, SUDT, SimpleBuilder
} from "@lay2/pw-core";
import { UIHelper } from '../Tools';
import { ViewModelBase } from "../ViewModels/ViewModelBase";
import { PWCoreBank, PWCoreUtility } from "../Impl";

export class PWTransferViewModel extends ViewModelBase {
  charmId: string;
  bank: PWCoreBank;

  visitorAddress: Address;

  constructor(bank: PWCoreBank, visitorAddress: Address, eleId = "charmTransferByPW") {
    super();
    this.charmId = eleId;
    this.bank = bank;

    this.visitorAddress = visitorAddress;
    this.init();
  }

  init() {
    const ctx = this;
    const vueSettings = {
      data() {
        return {
          address: this.visitorAddress,
          balance: Amount.ZERO,
          pwbtcBalance: Amount.ZERO,

          tokenName: 'CKB',
          options: ['CKB'],//, 'PW-BTC's

          toAddressString: "",
          toAddress: null as Address,

          minAmount: new Amount('61'),
          amountValue: 0,
          amount: Amount.ZERO,
          txs: [] as Array<any>,
          transferBtnDisabled: true
        };
      },
      methods: {
        transfer: async function () {
          this.txs = await ctx.bank.transfer(ctx.bank, this.tokenName, this.toAddress, this.amount);
        }
      },
      computed: {
        nativeAddress() { return this.address ? this.address.addressString : '-' },
        ckbAddress() { return this.address ? this.address.toCKBAddress() : '-' },
        balanceString() { return this.balance.toString(AmountUnit.ckb, { commify: true }) },
        //pwbtcBalanceString() { return this.pwbtcBalance.toString(AmountUnit.ckb, {commify: true})}
      },
      async mounted() {
      },
      watch: {
        async toAddressString(addressString: string) {
          let addressType = AddressType.ckb;
          let lockArgs = null;
          if (addressString.startsWith('ck')) {
            addressType = AddressType.ckb;
          }
          else if (addressString.length === 12) {
            addressType = AddressType.eos;
            lockArgs = await Address.getEosLockArgs(PWCoreUtility.EOS_NETWORK, addressString);
          }
          else if (addressString.startsWith('0x')) {
            addressType = AddressType.eth;
          }
          else {
            addressType = AddressType.tron;
          }
          this.toAddress = new Address(addressString, addressType, lockArgs);
          this.minAmount = this.toAddress.minPaymentAmount() || new Amount('61');
          console.log('to address: ', this.toAddress);
        },
        amountValue(amountValue: string) {
          this.amount = new Amount(`${amountValue}`);
          //const simpleBuilder = new builders_1.SimpleBuilder(this.address, this.amount);
          this.transferBtnDisabled = (this.amount as Amount).lt(this.balance) ? false : true;
        }
      }
    };
    this.app = Vue.createApp(vueSettings).mount("#" + this.charmId);
  }

  async show(vm: PWTransferViewModel, receiverAddress: string) {
    UIHelper.ShowCharm(vm.charmId);
    const activityDialog = Metro.activity.open({
      type: "cycle"
    });
    try {
      vm.app.balance = await PWCore.defaultCollector.getBalance(vm.visitorAddress);
      //vm.app.pwbtcBalance = await PWCore.defaultCollector.getSUDTBalance(new SUDT(PWBTC_ISSURER_LOCKHASH), this.visitorAddress);
      vm.app.toAddressString = receiverAddress;
    }
    finally {
      Metro.activity.close(activityDialog);
    }
  }

}