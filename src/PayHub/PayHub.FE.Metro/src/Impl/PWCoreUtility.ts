import { DepType, OutPoint, RawTransaction } from "@lay2/pw-core";
import { getRawTxTemplate } from "./NervosParsers";

export class PWCoreUtility {
    static readonly CKB_Chains = [
        {
            provider: "CKB.Dev",
            name: "Testnet: Aggon",
            network_uri: "https://testnet.ckb.dev",
            indexer_collector_uri: "https://testnet.ckb.dev/indexer"
        },
        {
            provider: "PW",
            name: "Testnet: Aggon",
            network_uri: "https://testnet.ckb.dev",
            indexer_collector_uri: "https://cellapitest.ckb.pw"
        },
        {
            provider: "CKB.Dev",
            name: "Mainnet",
            network_uri: "https://mainnet.ckb.dev",
            indexer_collector_uri: "https://mainnet.ckb.dev/indexer"
        }
    ];
    // static readonly Node_Testnet_Aggron = "https://testnet.ckb.dev";
    // static readonly Node_Testnet_Aggron_IndexCollector = "https://testnet.ckb.dev/indexer";

    // static readonly Node_Mainnet = "https://mainnet.ckb.dev";
    // static readonly Node_Mainnet_IndexCollector = "https://mainnet.ckb.dev/indexer";

    // static readonly Node_Testnet_PW = "https://testnet.ckb.dev";
    // static readonly Node_PW_API_Test = "https://cellapitest.ckb.pw";

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

    static ConvertToRawTransactionToSign(tx: RawTransaction): CKBComponents.RawTransactionToSign {
        const tx2Sign: CKBComponents.RawTransactionToSign = getRawTxTemplate();
        tx2Sign.headerDeps = [...tx.headerDeps];
        tx.cellDeps.forEach(cd => {
            tx2Sign.cellDeps.push({
                outPoint: cd.outPoint ? new OutPoint(cd.outPoint.txHash, cd.outPoint.index) : null,
                depType: cd.depType === DepType.code ? 'code' : 'depGroup'
            });
        });
        //tx.inputCells.forEach(ic =>{});
        tx.inputs.forEach(ic => {
            tx2Sign.inputs.push({
                previousOutput: ic.previousOutput ? new OutPoint(ic.previousOutput.txHash, ic.previousOutput.index) : null,
                since: ic.since
            });
        });
        tx.outputs.forEach(output => {
            tx2Sign.outputs.push({
                capacity: output.capacity.toString(),
                lock: output.lock,
                type: output.type
            });
        });
        tx2Sign.outputsData = [...tx.outputsData];

        return tx2Sign;
    }

}
