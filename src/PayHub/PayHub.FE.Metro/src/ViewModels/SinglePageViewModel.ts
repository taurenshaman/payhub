import { InputUtility, UIHelper } from "../Tools";
import { ViewModelBase } from "./ViewModelBase";
//import { PWCoreBank } from "../Impl/CKBBank";
import { createApp } from "vue";

export class SinglePageViewModel extends ViewModelBase {
    bank: any;//PWCoreBank;
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
                    username: "payhub",
                    nickname: "PayHub",
                    avatar: "https://robohash.org/payhub.png",
                    accounts: ctx.data.accounts
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
        // this.bank = new PWCoreBank();
        // this.bank.init()
        //     .then(() =>{
        //         console.log("PWCoreBank is ready.");
        //     })
        //     .catch(() => {
        //         console.log("Some error occured when PWCoreBank is initializing!");
        //     })
        //     .finally(() =>{
        //         Metro.activity.close(activityDialog);
        //     });
        //
    }

}