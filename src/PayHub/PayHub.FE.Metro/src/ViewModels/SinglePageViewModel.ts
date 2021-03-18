import { InputUtility, UIHelper } from "../Tools";
import { ViewModelBase } from "./ViewModelBase";
//import { PWCoreBank } from "../Impl/CKBBank";
import { createApp } from "vue";
import { KeyperingBank, requestAuth } from "../Impl";

export class SinglePageViewModel extends ViewModelBase {
    bank: any;//PWCoreBank;
    keyperingBank: any;
    data: any;

    constructor(eleId: string, data: any){
        super();
        this.data = data;
        this.init(eleId);
    }

    init(eleId: string){
        this.data.accounts.forEach((a: any) => {
            a.iconInfo = "<span class='cc " + a.theCurrency.unit + "'></span>";
        });

        const ctx = this;
        const vueSettings = {
            data(){
                return {
                    // 主人信息
                    username: ctx.data.username,
                    nickname: ctx.data.nickname,
                    avatar: ctx.data.avatar,
                    accounts: ctx.data.accounts,
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
                toggleCard: function (index: number) {
                    $('#card_' + index).toggleClass('active');
                }
            },
            mounted: function () {
                console.log("vue mounted.");
                Metro.init();
                ctx.afterMetroReady(ctx);
            }
        };
        this.app = createApp(vueSettings).mount('#' + eleId);
    }

    afterMetroReady(vm: SinglePageViewModel){
        const pageData = vm.data;
        for (let i = 0; i < pageData.accounts.length; i++) {
            const account = pageData.accounts[i];
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
        // coin bank
        // const activityDialog = Metro.activity.open({
        //     type: "cycle"
        // });
        // PWCoreBank
        // vm.bank = new PWCoreBank();
        // vm.bank.init()
        //     .then(() =>{
        //         console.log("PWCoreBank is ready.");
        //     })
        //     .catch(() => {
        //         console.log("Some error occured when PWCoreBank is initializing!");
        //     })
        //     .finally(() =>{
        //         Metro.activity.close(activityDialog);
        //     });
        vm.keyperingBank = new KeyperingBank();
        vm.tryLoad().then(() =>{});
    }

    async tryLoad() {
        const r = await this.keyperingBank.load();
        console.log(r);
        console.log(this.keyperingBank.account);
        if(r && this.keyperingBank.account){
            const addr = this.keyperingBank.account.address;
            this.app.visitorName = "You";
            this.app.visitorAvatar = `https://robohash.org/${addr}.png`;
            this.app.visitorAddress = addr;
            this.app.visitorCapacity = this.keyperingBank.capacity;
            this.app.visitorFree = this.keyperingBank.free;
        }
    }

    async connectKeypering(){
        await this.keyperingBank.connect();
        await this.tryLoad();
    }

    // connectKeypering(){
    //     this.connectKeyperingAsync().then(()=>{});
    // }

}