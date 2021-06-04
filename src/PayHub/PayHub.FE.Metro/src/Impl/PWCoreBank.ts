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
  DefaultSigner,
  IndexerCollector
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
import { PWCoreUtility } from './PWCoreUtility';



// https://github.com/lay2dev/pw-core
export class PWCoreBank {
  worker: PWCore;

  providerName: string;
  provider: any = null;
  web3Modal: any = null;
  visitorAddress: Address = null;
  //balance = Amount.ZERO;
  pwbtcBalance = Amount.ZERO;

  // ethAddress: string;
  ckbAddress: string;
  ckbBalance = Amount.ZERO;

  networkChainId = 1;

  network: any = {
    network: "n/a",
    name: "n/a"
  };
  ckbNetwork: any = {
    network: "n/a",
    name: "n/a"
  };

  constructor() {
    this.init();
  }

  async init() {
    if (!this.web3Modal) {
      this.web3Modal = new Web3Modal({
        network: this.getChainData(this.networkChainId).network,
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
          // You can create a account at https://infura.io/ to use your own id
          infuraId: "5a41e14da5ef449fbf12157f6736178f",
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
    if (provider === 'ETH') return AddressType.eth;
    if (provider === 'TRON') return AddressType.tron;
    if (provider === 'EOS') return AddressType.eos;
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
    switch (provider) {
      // case 'ETH': this.provider = new EthProvider(); break
      case 'ETH':
        try {
          const p = await this.web3Modal.connect();
          this.provider = new Web3ModalProvider(new Web3(p));
          //this.provider = new EthProvider();
          const tmp = this.getChainData(this.networkChainId);
          this.network = {
            network: tmp.network,
            name: tmp.name
          };
        } catch (err) {
          console.log('connect err', err);
        }
        break;
      case 'EOS':
        this.provider = new EosProvider(PWCoreUtility.EOS_NETWORK);
        // todo
        this.network = {
          network: "n/a",
          name: "EOS"
        };
        break;
      case 'TRON':
        this.provider = new TronProvider();
        // todo
        this.network = {
          network: "n/a",
          name: "TRON"
        };
        break;
      default:
        throw new Error('Unsupported Provider');
    }
    const activityDialog = Metro.activity.open({
      type: "cycle"
    });
    try {
      // Node_Testnet_Aggron, Node_Testnet_Aggron_IndexCollector
      // Node_Mainnet, Node_Mainnet_IndexCollector
      const chainIndex = 0;
      this.worker = await new PWCore(PWCoreUtility.CKB_Chains[chainIndex].network_uri).init(
        this.provider,
        new IndexerCollector(PWCoreUtility.CKB_Chains[chainIndex].indexer_collector_uri)
      );
      this.ckbNetwork = {
        network: PWCoreUtility.CKB_Chains[chainIndex].name,
        name: PWCoreUtility.CKB_Chains[chainIndex].name
      };
      this.visitorAddress = PWCore.provider.address;
      this.ckbAddress = this.visitorAddress.toCKBAddress();
    }
    finally {
      Metro.activity.close(activityDialog);
    }
  }

  async load(): Promise<boolean> {
    try {
      this.ckbBalance = await PWCore.defaultCollector.getBalance(this.visitorAddress);
      return true;
    }
    catch (error) {
      UIHelper.ToastError(error);
      return false;
    }
  }

  async transfer(bank: PWCoreBank, tokenName: string, toAddress: Address, amount: Amount): Promise<Array<any>> {
    const activityDialog = Metro.activity.open({
      type: "cycle"
    });
    try {
      const txs = [];
      let txHash;
      if (tokenName === 'CKB') {
        txHash = await bank.worker.send(toAddress, amount);
      }
      // else{
      //   /**
      //    when createAcp is true, pw-core will create a acp cell for receiver.
      //    when createAcp is false, pw-core will not create acp cell for receiver. sudt will be transfered only if receiver already has acp cell.
      //    */
      //   const createAcp = true;
      //   txHash = await this.pw.sendSUDT(new SUDT(PWBTC_ISSURER_LOCKHASH), toAddress, amount, createAcp);
      // }
      txs.unshift(txHash);
      Metro.activity.close(activityDialog);
      return txs;
    } catch (err) {
      Metro.activity.close(activityDialog);
      UIHelper.ToastError("Error! Please view the console log.");
      console.error('send tx error', err);
    }
  }

  async transferCKBUsingEthAddress(targetAddress: string, amount: string, feeRate?: number, memo?: string): Promise<string> {
    const ethAddress = new Address(targetAddress, AddressType.eth);
    const ckbAddress = ethAddress.toCKBAddress();
    const signer = new EthSigner(this.visitorAddress.addressString);
    return await this.transferCKB(signer, ckbAddress, amount, feeRate, memo);
  }

  async transferCKB(singer: Signer, targetAddress: string, amount: string, feeRate?: number, memo?: string): Promise<string> {
    const address = new Address(targetAddress, AddressType.ckb);
    const theAmount = new Amount(amount);
    const buiderOptions = {
      feeRate: feeRate
    };
    const simpleBuilder = new SimpleBuilder(address, theAmount, buiderOptions);
    const fee = simpleBuilder.getFee();
    const ckbBalance = await PWCore.defaultCollector.getBalance(address);
    const cost = theAmount.add(fee);
    if (ckbBalance.lt(cost)) {
      UIHelper.ToastError("The balance is not enough: balance < amount + fee");
      return;
    }

    if (!singer)
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
