import { InputUtility, UIHelper } from "../Tools";
import { ViewModelBase } from "./ViewModelBase";
//import { PWCoreBank } from "../Impl/CKBBank";
//import { createApp } from "vue";
import { KeyperingBank, PWCoreBank } from "../Impl";
import { KeyperingTransferViewModel } from "../Components";
import { PWTransferViewModel } from "../Components/PWTransferViewModel";
import PWCore from "@lay2/pw-core";

export class SinglePageViewModel extends ViewModelBase {
    readonly ProviderName_Keypering = "keypering";
    readonly ProviderName_PW = "pw";
    provider: string;

    pwBank: PWCoreBank;
    vmPWTransfer: PWTransferViewModel;

    keyperingBank: KeyperingBank;
    vmKeyperingTransfer: KeyperingTransferViewModel;

    constructor(eleId: string, data: any){
        super();
        this.init(eleId, data);
    }

    init(eleId: string, data: any){
        data.accounts.forEach((a: any) => {
            a.iconInfo = "<span class='cc " + a.theCurrency.unit + "'></span>";
            a.supportTransfer = false;
        });

        const ctx = this;
        const vueSettings = {
            data(){
                return {
                    // 主人信息
                    username: data.username,
                    nickname: data.nickname,
                    avatar: data.avatar,
                    accounts: data.accounts,
                    // 访客信息
                    visitorOriginalAddress: "n/a",
                    visitorAvatar: "https://robohash.org/payhub.png",
                    visitorCKBAddress: "n/a",
                    visitorCapacity: 0,
                    visitorFree: 0,
                    visitorCKBBalance: 0
                };
            },
            methods: {
                copyAccount: function (index: number) {
                    const ele = document.getElementById("taAccount_" + index) as HTMLTextAreaElement;
                    ele.select();

                    InputUtility.copyToClipboard();
                },
                transfer: async function(index: number) {
                    const receiver = this.accounts[index];
                    await ctx.transfer(ctx, receiver);
                },
                toggleCard: function (index: number) {
                    $('#card_' + index).toggleClass('active');
                }
            },
            mounted: async function () {
                Metro.init();
                ctx.initCards(this.accounts);
                //ctx.initBanks(ctx);
            }
        };
        this.app = Vue.createApp(vueSettings).mount('#' + eleId);
    }

    initCards(accounts: any){
        for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i];
            // mouse enter/leave: flip-card > front(0)/back(1) > card
            const cardDiv = document.getElementById("card_" + i);
            const frontCard = cardDiv.children[0].children[0];
            const backCard = cardDiv.children[1].children[0];
            cardDiv.addEventListener('mouseenter', e => {
                frontCard.classList.add("shadow-1");
                backCard.classList.add("shadow-1");
            });
            cardDiv.addEventListener('mouseleave', e => {
                frontCard.classList.remove("shadow-1");
                backCard.classList.remove("shadow-1");
            });
            // qrcode
            if(account.qrcode && account.qrcode.length > 4)
                continue;
            UIHelper.CreateQRCode("qrcode_" + i, account.account, 200);
        }
    }

    async connectPW(coin: string = "ETH"){
        try{
            if(!this.pwBank)
                this.pwBank = new PWCoreBank();
            await this.pwBank.connect(coin);
            await this.pwBank.load();

            this.updateVisitorInfo(this.pwBank.visitorAddress.addressString, this.pwBank.ckbAddress, this.pwBank.ckbBalance.toString());
            this.provider = this.ProviderName_PW;
            this.vmPWTransfer = new PWTransferViewModel(this.pwBank, this.pwBank.visitorAddress );
        }
        finally{
        }
    }

    async connectKeypering(){
        const activityDialog = Metro.activity.open({
            type: "cycle"
        });
        try{
            if(!this.keyperingBank)
                this.keyperingBank = new KeyperingBank();
            if(!this.vmKeyperingTransfer)
                this.vmKeyperingTransfer = new KeyperingTransferViewModel(this.keyperingBank);
            const hasData = await this.tryLoadKeyperingInfo();
            if(!hasData) {
                await this.keyperingBank.connect();
                await this.tryLoadKeyperingInfo();
            }
            this.provider = this.ProviderName_Keypering;
        }
        finally{
            Metro.activity.close(activityDialog);
        }
    }

    updateVisitorInfo(originalAddress: string, ckbAddress: string, ckbBalance: any){
        this.app.visitorOriginalAddress = originalAddress;
        this.app.visitorAvatar = `https://robohash.org/${originalAddress}.png`;
        this.app.visitorCKBAddress = ckbAddress;
        this.app.visitorCKBBalance = ckbBalance;

        const index = this.app.accounts.findIndex((a: any) => a.theCurrency.unit.toLocaleLowerCase() === "ckb" );
        if(index >= 0){
            this.app.accounts[index].supportTransfer = true;
        }
    }

    async tryLoadKeyperingInfo(): Promise<boolean> {
        const r = await this.keyperingBank.load();
        if(r && this.keyperingBank.account){
            this.updateVisitorInfo(this.keyperingBank.account.address, this.keyperingBank.account.address, this.keyperingBank.ckbBalance);
            this.app.visitorCapacity = this.keyperingBank.capacity;
            this.app.visitorFree = this.keyperingBank.free;
        }
        return r;
    }

    async transfer(vm: SinglePageViewModel, receiver: any){
        if(vm.provider === vm.ProviderName_Keypering){
            await vm.vmKeyperingTransfer.show(vm.vmKeyperingTransfer, receiver.theCurrency.name, receiver.theCurrency.unit, receiver.account);
        }
        else if(vm.provider === vm.ProviderName_PW){
            await vm.vmPWTransfer.show(vm.vmPWTransfer, receiver.account);
        }
    }

}