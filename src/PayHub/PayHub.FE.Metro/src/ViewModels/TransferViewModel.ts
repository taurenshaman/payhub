import CKBComponents from '@nervosnetwork/ckb-sdk-core';
import { getTransactionSize, addressToScript } from '@nervosnetwork/ckb-sdk-utils';
import { createApp } from "@vue/runtime-dom";
import { UnderscoreCell } from "../Impl";
import { ViewModelBase } from "./ViewModelBase";

export class TransferViewModel extends ViewModelBase{
    eleId: string;
    constructor(eleId = "charmTransfer"){
        super();
        this.eleId = eleId;
    }

    init(){
        const ctx = this;
        const vueSettings = {
            data(){
                return {
                    form: {
                        toAddress: '',
                        transferCount: 0,
                        selfProvide: false
                      },
                      inputCells: [] as Array<UnderscoreCell>,
                      fromSudtCells: [] as Array<UnderscoreCell>,
                      biggestCapacityCell: {} as UnderscoreCell,
                      originalSudtCount: BigInt(0),
                      currentSudtCount: "0"
                };
            },
            methods: {
                
            },
            mounted: function () {
                //ctx.afterMetroReady(ctx);
            }
        };
        this.app = createApp(vueSettings).mount('#' + this.eleId);
    }

    //afterMetroReady(vm: TransferViewModel){}
}