import { Address, AddressType, Amount, AmountUnit, SimpleBuilder } from '@lay2/pw-core';
import CKBComponents from '@nervosnetwork/ckb-sdk-core';
import { getTransactionSize, addressToScript } from '@nervosnetwork/ckb-sdk-utils';
import { Account, calCapacityAmount, calSudtAmount, combineInputCells, getCells, getCellsByLockArgs, getRawTxTemplate, getSummary, groupCells, isKeyperingConnected, KeyperingBank, KeyperingUtility, parseBigIntStringNumber, PWCoreUtility, setLocalStorageDecimal, signAndSendTransaction, stringToHex, UnderscoreCell } from "../Impl";
import { UIHelper } from '../Tools';
import { ViewModelBase } from "../ViewModels/ViewModelBase";

export class KeyperingTransferViewModel extends ViewModelBase {
    charmId: string;
    worker: KeyperingBank;

    visitor: Account;
    fromAddress: string;
    lockScript: CKBComponents.Script;
    lockHash: string;

    constructor(worker: KeyperingBank, eleId = "charmTransferByKeypering") {
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
                    coinName: "",
                    coinUnit: "",
                    // form
                    toAddressString: "",
                    transferCount: 0,
                    fee: "",
                    //balance: 0,
                    // buttons
                    computeFeeBtnDisabled: true,
                    transferBtnDisabled: true,
                    // pw-core
                    balance: Amount.ZERO,
                    toAddress: null as Address,
                    minAmount: new Amount('61'),
                    amount: Amount.ZERO,
                    // ckb: see balance
                    // sudt
                    inputCells: [] as Array<UnderscoreCell>,
                    fromSudtCells: [] as Array<UnderscoreCell>,
                    biggestCapacityCell: {} as UnderscoreCell,
                    isSUDT: false,
                    canTransferSUDT: false,
                    originalSudtCount: BigInt(0),
                    currentSudtCount: "0",

                    txs: [] as Array<string>
                };
            },
            computed: {
                balanceString() { return this.balance.toString(AmountUnit.ckb, { commify: true }); }
            },
            methods: {
                computeFees: async function () {
                    // calculateTransactionFee();
                    // const builder = new SimpleBuilder(this.toAddress, this.amount);
                    // const tx = await builder.build();
                },
                transfer: async function () {
                    const authToken: string | null = window.localStorage.getItem(KeyperingUtility.Key_AuthToken);
                    if (!authToken) {
                        UIHelper.ToastError("Keypering: noAuth");
                        return;
                    }
                    
                }
            },
            watch: {
                async toAddressString(addressString: string) {
                    if(addressString && addressString.length > 10){
                        this.toAddress = new Address(addressString, AddressType.ckb, null);
                        this.minAmount = this.toAddress.minPaymentAmount() || new Amount('61');
                    }
                },
                transferCount(transferCount: string) {
                    this.amount = new Amount(`${transferCount}`);
                    //const simpleBuilder = new builders_1.SimpleBuilder(this.address, this.amount);
                    //this.computeFeeBtnDisabled = (this.amount as Amount).lt(this.balance) ? false : true;
                    this.transferBtnDisabled = (this.amount as Amount).lt(this.balance) ? false : true;
                }
            },
            mounted: async function () {
                //await ctx.check(ctx);
            }
        };
        this.app = Vue.createApp(vueSettings).mount("#" + this.charmId);
    }

    async check(vm: KeyperingTransferViewModel, checkCKB: boolean = true, checkSUDT: boolean = true): Promise<boolean> {
        vm.visitor = await isKeyperingConnected();
        if (!vm.visitor) {
            vm.app.currentCapicity = "0";
            vm.app.currentSudtCount = "0";
            return false;
        }

        this.fromAddress = vm.visitor.address;
        this.lockScript = vm.visitor.lockScript;
        this.lockHash = vm.visitor.lockHash;

        // const cells = await getCellsByLockArgs('lock', vm.visitor.lockScript.args);
        // if (cells && cells.length > 0) {
        //     const summary = getSummary(cells);
        //     console.log("summary");
        //     console.log(summary);
        //     const { emptyCells, filledCells } = groupCells(cells);
        //     //this.emptyCells = emptyCells;
        //     //this.filledCells = filledCells;
        //     console.log("emptyCells");
        //     console.log(emptyCells);
        //     console.log("filledCells");
        //     console.log(filledCells);
        // }

        if (checkCKB)
            await vm.checkCKB(vm);
        // if(checkSUDT)
        //     await vm.checkSUDT(vm);
        return true;
    }

    async checkSUDT(vm: KeyperingTransferViewModel) {
        const inputCells = await combineInputCells();
        vm.app.inputCells = [...inputCells];
        if (inputCells.length === 0) {
            //UIHelper.ToastError("errors.noCells");
            vm.app.canTransferSUDT = false;
        }
        else {
            vm.app.canTransferSUDT = true;
            vm.app.biggestCapacityCell = inputCells.shift()!;
            vm.app.fromSudtCells = inputCells || [];
            vm.app.originalSudtCount = calSudtAmount(inputCells);
            setLocalStorageDecimal();
            const decimal: number = parseInt(window.localStorage.getItem('decimal') || "8");
            vm.app.currentSudtCount = parseBigIntStringNumber(vm.app.originalSudtCount, decimal);
        }
    }

    // TODO
    async checkCKB(vm: KeyperingTransferViewModel) {
        const cells = await getCellsByLockArgs('lock', vm.visitor.lockScript.args); //await getCells('lock', account.lockScript);
        if (cells && cells.length > 0) {
            const summary = calCapacityAmount(cells);
            console.log("summary");
            console.log(summary);
            //vm.free = parseBigIntStringNumber(summary.free) || "0";
            const balanceString = parseBigIntStringNumber(summary.capacity) || "0";
            vm.app.balance = new Amount(balanceString);
        }
    }

    
    async transferCKBUsingPWCore(vm: KeyperingTransferViewModel, authToken: string, toAddress: Address, amount: Amount) {
        const builder = new SimpleBuilder(toAddress, amount);
        const tx = await builder.build();
        const fee = builder.getFee();
        vm.app.fee = fee.toString();
        const rawTx: CKBComponents.RawTransactionToSign = PWCoreUtility.ConvertToRawTransactionToSign(tx.raw);
        
        const lockHash = window.localStorage.getItem(KeyperingUtility.Key_LockHash);

        const response = await signAndSendTransaction( rawTx, authToken, lockHash );
        vm.app.txs = [];
        vm.app.txs.push(response.txHash as string);
    }

    async transferCKB(vm: KeyperingTransferViewModel, authToken: string, toAddress: Address, amount: Amount) {
        const rawTx: CKBComponents.RawTransactionToSign = getRawTxTemplate();
        // build transaction

        const lockHash = window.localStorage.getItem(KeyperingUtility.Key_LockHash);

        const response = await signAndSendTransaction( rawTx, authToken, lockHash );
        vm.app.txs = [];
        vm.app.txs.push(response.txHash as string);
    }

    async transferSUDT() { }

    async show(vm: KeyperingTransferViewModel, coinName: string, coinUnit: string, receiverAddress: string, checkCKB: boolean = true, checkSUDT: boolean = true) {
        const rCheck = await vm.check(vm, checkCKB, checkSUDT);
        if (!rCheck) {
            UIHelper.ToastMessage("Not connected with Keypering wallet.");
            return;
        }

        UIHelper.ShowCharm(vm.charmId);

        vm.app.coinName = coinName;
        vm.app.coinUnit = coinUnit;
        vm.app.isSUDT = coinUnit.toLocaleLowerCase() !== "ckb";
        vm.app.toAddressString = receiverAddress;
    }

}