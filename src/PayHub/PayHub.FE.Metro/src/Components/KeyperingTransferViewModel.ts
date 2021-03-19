import CKBComponents from '@nervosnetwork/ckb-sdk-core';
import { getTransactionSize, addressToScript } from '@nervosnetwork/ckb-sdk-utils';
//import { createApp } from "vue";
import { calSudtAmount, combineInputCells, isKeyperingConnected, KeyperingBank, KeyperingUtility, parseBigIntStringNumber, setLocalStorageDecimal, UnderscoreCell } from "../Impl";
import { UIHelper } from '../Tools';
import { ViewModelBase } from "../ViewModels/ViewModelBase";

export class KeyperingTransferViewModel extends ViewModelBase {
    charmId: string;
    worker: KeyperingBank;

    constructor(worker: KeyperingBank, eleId = "charmTransfer") {
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
                    form: {
                        toAddress: '',
                        transferCount: 0,
                        selfProvide: false
                    },
                    // ckb
                    currentCapicity: "0",
                    // sudt
                    inputCells: [] as Array<UnderscoreCell>,
                    fromSudtCells: [] as Array<UnderscoreCell>,
                    biggestCapacityCell: {} as UnderscoreCell,
                    isSUDT: false,
                    canTransferSUDT: false,
                    originalSudtCount: BigInt(0),
                    currentSudtCount: "0"
                };
            },
            methods: {
                transfer: function () {
                    const authToken: string | null = window.localStorage.getItem(KeyperingUtility.Key_AuthToken)
                    if (!authToken) {
                        UIHelper.ToastError("Keypering: noAuth");
                        return;
                    }
                }
            },
            // setup: async function(){
            // },
            mounted: async function () {
                //await ctx.check(ctx);
            }
        };
        this.app = Vue.createApp(vueSettings).mount("#" + this.charmId);
    }

    async check(vm: KeyperingTransferViewModel, checkCKB: boolean = true, checkSUDT: boolean = true){
        const connected = await isKeyperingConnected();
        if (!connected) {
            vm.app.currentCapicity = "0";
            vm.app.currentSudtCount = "0";
            return;
        }
        if(checkCKB)
            await vm.checkCKB(vm);
        if(checkSUDT)
            await vm.checkSUDT(vm);
    }

    async checkSUDT(vm: KeyperingTransferViewModel){
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
            const decimal:number = parseInt(window.localStorage.getItem('decimal') || "8");
            vm.app.currentSudtCount = parseBigIntStringNumber(vm.app.originalSudtCount, decimal);
        }
    }

    // TODO
    async checkCKB(vm: KeyperingTransferViewModel){
        // const inputCells = await combineInputCells();
        // vm.app.inputCells = [...inputCells];
        // if (inputCells.length === 0) {
        //     //UIHelper.ToastError("errors.noCells");
        //     vm.app.canTransferSUDT = false;
        // }
        // else {
        //     vm.app.canTransferSUDT = true;
        //     vm.app.biggestCapacityCell = inputCells.shift()!;
        //     vm.app.fromSudtCells = inputCells || [];
        //     vm.app.originalSudtCount = calSudtAmount(inputCells);
        //     setLocalStorageDecimal();
        //     const decimal:number = parseInt(window.localStorage.getItem('decimal') || "8");
        //     vm.app.currentSudtCount = parseBigIntStringNumber(vm.app.originalSudtCount, decimal);
        // }
    }

    async transferCKB(){}

    async transferSUDT(){}

    async show(vm: KeyperingTransferViewModel, coinName: string, coinUnit: string, receiverAddress: string, checkCKB: boolean = true, checkSUDT: boolean = true){
        await vm.check(vm, checkCKB, checkSUDT);

        UIHelper.ShowCharm(vm.charmId);

        vm.app.coinName = coinName;
        vm.app.coinUnit = coinUnit;
        vm.app.isSUDT = coinUnit.toLocaleLowerCase() !== "ckb";
        vm.app.form.toAddress = receiverAddress;
    }

}