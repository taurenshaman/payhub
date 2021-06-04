import CKBComponents from '@nervosnetwork/ckb-sdk-core'
import { KEYPERING_URL, SECP256K1_BLAKE160_CODE_HASH } from './NervosConstants'
import { compareScript, underscoreScriptKey, getNetworkConst, calCapacityAmount, parseBigIntStringNumber } from './NervosParsers'
import { UnderscoreScript, AccountList, UnderscoreCell, Account } from './NervosInterfaces';
import { getCells, queryAddresses, requestAuth } from './KeyperingRPC';
import { KeyperingUtility } from './KeyperingUtility';
import { UIHelper } from '../Tools';



export class KeyperingBank {
    account: Account;
    free = "0";
    capacity = "0";
    loading = false;
    tokenAmount = "0";

    ckbBalance = 0;


    network: any = {
        network: "n/a",
        name: "n/a"
    };

    constructor() { }

    async connect() {
        try {
            const req = await requestAuth("PayHub");
            window.localStorage.setItem(KeyperingUtility.Key_AuthToken, req.token);
            window.localStorage.setItem(KeyperingUtility.Key_NetworkId, req.networkId);
            console.log("Connected with Keypering wallet ^0^");
        } catch (error) {
            console.log("Failed to connect with Keypering wallet :(");
            UIHelper.ToastError(error);
        }
    }

    async load(): Promise<boolean> {
        const authToken = window.localStorage.getItem(KeyperingUtility.Key_AuthToken);
        if (!authToken) {
            UIHelper.ToastMessage("Keypering.noAuth");
            return false;
        }
        // load info by authToken
        try {
            const results: AccountList | undefined = await queryAddresses(authToken);
            if (results === undefined) {
                UIHelper.ToastError("Keypering.noAddress");
                return false;
            }
            const addresses: Array<Account> = results.addresses;
            const address = addresses.filter(
                (address: Account) =>
                    address.lockScriptMeta.name === "Secp256k1"
            );
            if (address.length === 0) {
                UIHelper.ToastError("Keypering.no256k1Address");
                return false;
            }
            this.account = address[0];
            // 需要缓存吗？
            window.localStorage.setItem(KeyperingUtility.Key_Address, this.account.address)
            window.localStorage.setItem(KeyperingUtility.Key_LockHash, this.account.lockHash)

            const lockScript: UnderscoreScript = {
                code_hash: SECP256K1_BLAKE160_CODE_HASH,
                hash_type: 'type',
                args: this.account.lockScript.args
            };
            window.localStorage.setItem(
                KeyperingUtility.Key_LockScript,
                JSON.stringify(lockScript || {})
            );

            const cells = await getCells('lock', lockScript);
            if (cells.length > 0) {
                const summary = calCapacityAmount(cells);
                this.free = parseBigIntStringNumber(summary.free) || "0";
                this.capacity = parseBigIntStringNumber(summary.capacity) || "0";
            }
            UIHelper.ToastMessage("Keypering: success.auth");
            return true;
        }
        catch (error) {
            UIHelper.ToastError(error);
            return false;
        }
    }
}