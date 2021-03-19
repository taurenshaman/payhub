import { InputUtility, UIHelper } from "../Tools";
import { ViewModelBase } from "./ViewModelBase";
//import { PWCoreBank } from "../Impl/CKBBank";
//import { createApp } from "vue";
import { KeyperingBank } from "../Impl";
import { KeyperingTransferViewModel } from "../Components";

export class SinglePageViewModel extends ViewModelBase {
    //readonly CharmId_charmTransfer = "charmTransfer";
    bank: any;//PWCoreBank;
    keyperingBank: KeyperingBank;
    vmTransfer: KeyperingTransferViewModel;

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
                    visitorName: "n/a",
                    visitorAvatar: "https://robohash.org/payhub.png",
                    visitorAddress: "n/a",
                    visitorCapacity: 0,
                    visitorFree: 0
                };
            },
            methods: {
                copyAccount: function (index: number) {
                    const ele = document.getElementById("taAccount_" + index) as HTMLTextAreaElement;
                    ele.select();

                    InputUtility.copyToClipboard();
                },
                transfer: function(index: number) {
                    const receiver = this.accounts[index];
                    ctx.vmTransfer.show(ctx.vmTransfer, receiver.theCurrency.name, receiver.theCurrency.unit, receiver.account);
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

    async tryLoadKeyperingInfo(): Promise<boolean> {
        const r = await this.keyperingBank.load();
        if(r && this.keyperingBank.account){
            const addr = this.keyperingBank.account.address;
            this.app.visitorName = "You";
            this.app.visitorAvatar = `https://robohash.org/${addr}.png`;
            this.app.visitorAddress = addr;
            this.app.visitorCapacity = this.keyperingBank.capacity;
            this.app.visitorFree = this.keyperingBank.free;

            const index = this.app.accounts.findIndex((a: any) => a.theCurrency.unit.toLocaleLowerCase() === "ckb" );
            if(index >= 0){
                this.app.accounts[index].supportTransfer = true;
            }
        }
        return r;
    }

    // async connectPW(){
    //     const activityDialog = Metro.activity.open({
    //         type: "cycle"
    //     });
    //     this.bank = new PWCoreBank();
    //     this.bank.init()
    //         .then(() =>{
    //             console.log("PWCoreBank is ready.");
    //         })
    //         .catch(() => {
    //             console.log("Some error occured when PWCoreBank is initializing!");
    //         })
    //         .finally(() =>{
    //             Metro.activity.close(activityDialog);
    //         });
    // }

    async connectKeypering(){
        const activityDialog = Metro.activity.open({
            type: "cycle"
        });
        try{
            if(!this.keyperingBank)
                this.keyperingBank = new KeyperingBank();
            if(!this.vmTransfer)
                this.vmTransfer = new KeyperingTransferViewModel(this.keyperingBank);
            const hasData = await this.tryLoadKeyperingInfo();
            if(!hasData) {
                await this.keyperingBank.connect();
                await this.tryLoadKeyperingInfo();
            }
        }
        finally{
            Metro.activity.close(activityDialog);
        }
    }

}