//import { IBank } from "../Core";
import { transformers } from 'ckb-js-toolkit'
import PWCore, {
    EthProvider,
    EosProvider, TronProvider, 
    PwCollector, AmountUnit, Web3ModalProvider, SUDT,
    ChainID,
    Address,
    Amount,
    AddressType,
    Builder,
    Signer,
    SimpleBuilder,
    EthSigner,
    DefaultSigner
  } from '@lay2/pw-core';
// import Web3 from "web3";
// import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import Torus from "@toruslabs/torus-embed";
const Web3 = (window as any).Web3;
const Web3Modal = (window as any).Web3Modal.default;
const WalletConnectProvider = (window as any).WalletConnectProvider.default;
const Fortmatic = (window as any).Fortmatic;
const Torus = (window as any).Torus;
//const evmChains = (window as any).evmChains;

import { UIHelper } from "../Tools";

export class PWCoreUtility{
    static readonly Node_Testnet_Aggron = "https://aggron.ckb.dev";
    static readonly Node_Mainnet = "https://mainnet.ckb.dev";
    static readonly Node_PW_API = "https://cellapitest.ckb.pw";
    static readonly Node_Testnet_PW = "https://testnet.ckb.dev";

    static readonly EOS_NETWORK = {
        blockchain: 'eos',
        chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
        host: 'eospush.tokenpocket.pro',
        port: 443,
        protocol: 'https',
    };

    static readonly PWBTC_ISSURER_LOCKHASH = '0xc369a6fc6f0f907e46de96f668d986b8e4b52ea832da213f864eda805d34c932';

    static readonly SupportedChains = [
        {
          name: "Ethereum Mainnet",
          short_name: "eth",
          chain: "ETH",
          network: "mainnet",
          chain_id: 1,
          network_id: 1,
          rpc_url: "https://mainnet.infura.io/v3/%API_KEY%",
          native_currency: {
            symbol: "ETH",
            name: "Ethereum",
            decimals: "18",
            contractAddress: "",
            balance: ""
          }
        },
        {
          name: "Ethereum Ropsten",
          short_name: "rop",
          chain: "ETH",
          network: "ropsten",
          chain_id: 3,
          network_id: 3,
          rpc_url: "https://ropsten.infura.io/v3/%API_KEY%",
          native_currency: {
            symbol: "ETH",
            name: "Ethereum",
            decimals: "18",
            contractAddress: "",
            balance: ""
          }
        },
        {
          name: "Ethereum Rinkeby",
          short_name: "rin",
          chain: "ETH",
          network: "rinkeby",
          chain_id: 4,
          network_id: 4,
          rpc_url: "https://rinkeby.infura.io/v3/%API_KEY%",
          native_currency: {
            symbol: "ETH",
            name: "Ethereum",
            decimals: "18",
            contractAddress: "",
            balance: ""
          }
        },
        {
          name: "Ethereum Görli",
          short_name: "gor",
          chain: "ETH",
          network: "goerli",
          chain_id: 5,
          network_id: 5,
          rpc_url: "https://goerli.infura.io/v3/%API_KEY%",
          native_currency: {
            symbol: "ETH",
            name: "Ethereum",
            decimals: "18",
            contractAddress: "",
            balance: ""
          }
        },
        {
          name: "RSK Mainnet",
          short_name: "rsk",
          chain: "RSK",
          network: "mainnet",
          chain_id: 30,
          network_id: 30,
          rpc_url: "https://public-node.rsk.co",
          native_currency: {
            symbol: "RSK",
            name: "RSK",
            decimals: "18",
            contractAddress: "",
            balance: ""
          }
        },
        {
          name: "Ethereum Kovan",
          short_name: "kov",
          chain: "ETH",
          network: "kovan",
          chain_id: 42,
          network_id: 42,
          rpc_url: "https://kovan.infura.io/v3/%API_KEY%",
          native_currency: {
            symbol: "ETH",
            name: "Ethereum",
            decimals: "18",
            contractAddress: "",
            balance: ""
          }
        },
        {
          name: "Ethereum Classic Mainnet",
          short_name: "etc",
          chain: "ETC",
          network: "mainnet",
          chain_id: 61,
          network_id: 1,
          rpc_url: "https://ethereumclassic.network",
          native_currency: {
            symbol: "ETH",
            name: "Ethereum",
            decimals: "18",
            contractAddress: "",
            balance: ""
          }
        },
        {
          name: "POA Network Sokol",
          short_name: "poa",
          chain: "POA",
          network: "sokol",
          chain_id: 77,
          network_id: 77,
          rpc_url: "https://sokol.poa.network",
          native_currency: {
            symbol: "POA",
            name: "POA",
            decimals: "18",
            contractAddress: "",
            balance: ""
          }
        },
        {
          name: "POA Network Core",
          short_name: "skl",
          chain: "POA",
          network: "core",
          chain_id: 99,
          network_id: 99,
          rpc_url: "https://core.poa.network",
          native_currency: {
            symbol: "POA",
            name: "POA",
            decimals: "18",
            contractAddress: "",
            balance: ""
          }
        },
        {
          name: "xDAI Chain",
          short_name: "xdai",
          chain: "POA",
          network: "dai",
          chain_id: 100,
          network_id: 100,
          rpc_url: "https://dai.poa.network",
          native_currency: {
            symbol: "xDAI",
            name: "xDAI",
            decimals: "18",
            contractAddress: "",
            balance: ""
          }
        },
        {
          name: "Callisto Mainnet",
          short_name: "clo",
          chain: "callisto",
          network: "mainnet",
          chain_id: 820,
          network_id: 1,
          rpc_url: "https://clo-geth.0xinfra.com/",
          native_currency: {
            symbol: "CLO",
            name: "CLO",
            decimals: "18",
            contractAddress: "",
            balance: ""
          }
        }
    ];
}

// https://github.com/lay2dev/pw-core
export class PWCoreBank {
    worker: PWCore;

    providerName: string;
    provider: any = null;
    pw: PWCore;
    web3Modal: any = null;
    visitorAddress: Address = null;
    balance = Amount.ZERO;
    toAddressString = "";
    pwbtcBalance = Amount.ZERO;
    tokenName: 'CKB';
    options = ['CKB', 'PW-BTC'];
    toAddress: Address = null;
    minAmount = new Amount('61');
    amountValue: 0;
    amount = Amount.ZERO;
    txs = [] as Array<any>;

    // ethAddress: string;
    ckbAddress: string;
    ckbBalance: Amount;

    constructor(){
        this.init();
    }

    async init(){
        if(!this.web3Modal){
            this.web3Modal = new Web3Modal({
                network: this.getChainData(1).network,
                cacheProvider: false,
                disableInjectedProvider: false,
                providerOptions: this.getProviderOptions(),
            });
            await this.web3Modal.clearCachedProvider();
            if (this.web3Modal.cachedProvider) {
                await this.connect();
            }
        }
    }

    getProviderOptions() {
        return {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              // infuraId: process.env.REACT_APP_INFURA_ID
              infuraId: "89a648e271d54224ba4827d348cbaa54",
            },
          },
        //   fortmatic: {
        //     package: Fortmatic,
        //     options: {
        //       // Mikko's TESTNET api key
        //       key: "pk_test_391E26A3B43A3350"
        //     }
        //   },
        //   torus: {
        //     package: Torus,
        //   },
        };
    }

    getAddressType(provider: string) {
        if(provider === 'ETH') return AddressType.eth;
        if(provider === 'TRON') return AddressType.tron;
        if(provider === 'EOS') return AddressType.eos;
        throw new Error('unknow provider');
    }

    getChainData(chainId: number) {
        const chainData = PWCoreUtility.SupportedChains.filter(
          (chain: any) => chain.chain_id === chainId
        )[0];
        if (!chainData) {
          throw new Error("ChainId missing or not supported");
        }
        // const API_KEY = process.env.REACT_APP_INFURA_ID;
        const API_KEY = "89a648e271d54224ba4827d348cbaa54";
        if (
          chainData.rpc_url.includes("infura.io") &&
          chainData.rpc_url.includes("%API_KEY%") &&
          API_KEY
        ) {
          const rpcUrl = chainData.rpc_url.replace("%API_KEY%", API_KEY);
          return {
            ...chainData,
            rpc_url: rpcUrl,
          };
        }
        return chainData;
    }

    async connect(provider: string = "") {
        // if(this.providerName === provider)
        //     return;
        
        this.providerName = provider;
        switch(provider) {
            // case 'ETH': this.provider = new EthProvider(); break
            case 'ETH': 
                try{
                    const p = await this.web3Modal.connect(); 
                    console.log('Web3 Provider: ', p); 
                    this.provider = new Web3ModalProvider(new Web3(p)); 
                }catch(err){
                    console.log('connect err', err);
                }
                break;
            case 'EOS': 
                //this.provider = new EosProvider(PWCoreUtility.EOS_NETWORK);
                throw new Error('EosProvider: Not implemented.');
                break;
            case 'TRON':
                //this.provider = new TronProvider();
                throw new Error('EosProvider: Not implemented.');
                break;
            default:
                throw new Error('Unsupported Provider');
        }
        const activityDialog = Metro.activity.open({
            type: "cycle"
        });
        try{
            this.worker = await new PWCore(PWCoreUtility.Node_Testnet_PW).init(
                this.provider,
                new PwCollector(PWCoreUtility.Node_PW_API)
            );
            this.visitorAddress = PWCore.provider.address;
            this.ckbAddress = this.visitorAddress.toCKBAddress();
        }
        finally{
            Metro.activity.close(activityDialog);
        }
    }

    async load(): Promise<boolean>{
        try{
            this.ckbBalance = await PWCore.defaultCollector.getBalance(this.visitorAddress);
            return true;
        }
        catch {
            return false;
        }
    }

    async transferCKBUsingEthAddress(targetAddress: string, amount: string, feeRate?: number, memo?: string): Promise<string>{
        const ethAddress = new Address(targetAddress, AddressType.eth);
        const ckbAddress = ethAddress.toCKBAddress();
        const signer = new EthSigner(this.visitorAddress.addressString);
        return await this.transferCKB(signer, ckbAddress, amount, feeRate, memo);
    }

    async transferCKB(singer: Signer, targetAddress: string, amount: string, feeRate?: number, memo?: string): Promise<string>{
        const address = new Address(targetAddress, AddressType.ckb);
        const theAmount = new Amount(amount);
        const buiderOptions = {
            feeRate: feeRate
        };
        const simpleBuilder = new SimpleBuilder(address, theAmount, buiderOptions);
        const fee = simpleBuilder.getFee();
        const ckbBalance = await PWCore.defaultCollector.getBalance(address);
        const cost = theAmount.add(fee);
        if(ckbBalance.lt(cost)){
            UIHelper.ToastError("The balance is not enough: balance < amount + fee");
            return;
        }

        if(!singer)
            singer = new DefaultSigner(new EthProvider());
        return this.sendTransaction(simpleBuilder, singer);
    }

    // async transferETH(targetAddress: string, amount: string, feeRate?: number, memo?: string): Promise<string>{
    // }

    async sendTransaction(builder: Builder, signer: Signer): Promise<string> {
        return this.worker.rpc.send_transaction(
            transformers.TransformTransaction(
            await signer.sign((await builder.build()).validate())
            )
        );
    }


}
