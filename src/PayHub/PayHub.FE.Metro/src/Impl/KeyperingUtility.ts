import { UIHelper } from "../Tools";
import { getCells, getTransaction, queryAddresses } from "./KeyperingRPC";
import { compareScript, underscoreScriptKey, getNetworkConst, parseSudtInfoData } from './NervosParsers'
import { UnderscoreScript, UnderscoreCell, Account } from './NervosInterfaces';

export class KeyperingUtility{
    static readonly Key_AuthToken = "keypering.authToken";
    static readonly Key_NetworkId = "keypering.networkId";

    static readonly Key_Address = "keypering.address";
    static readonly Key_LockHash = "keypering.lockHash";
    static readonly Key_LockScript = "keypering.lockScript";
}

export const combineInputCells = async (): Promise<Array<UnderscoreCell> | []> => {
    const lockScript: UnderscoreScript = JSON.parse(window.localStorage.getItem("lockScript") as string);
    const cells = await getCells('lock', lockScript);
    if (cells.length === 0) {
        return [];
    }
    const biggestCapacityCell = cells.filter(
        (cell: UnderscoreCell) => cell.output.type === null).sort(
            (cell1: UnderscoreCell, cell2: UnderscoreCell) => Number(BigInt(cell2.output.capacity) - BigInt(cell1.output.capacity))
        )[0];

    const sudtTypeScript = getNetworkConst("SUDT_TYPE_SCRIPT") as CKBComponents.Script;
    sudtTypeScript.args = window.localStorage.getItem('lockHash') || '';
    const sudtCells = cells.filter((cell: UnderscoreCell) => { return compareScript(cell.output.type, underscoreScriptKey(sudtTypeScript)) });
    if (sudtCells.length > 0) {
        return [biggestCapacityCell].concat(sudtCells);
    } else {
        return [];
    }
}

export const getBiggestCapacityCell = async (lockScript: UnderscoreScript): Promise<UnderscoreCell> => {
    const cells: Array<UnderscoreCell> = await getCells('lock', lockScript);
    return cells.filter(
        (cell: UnderscoreCell) => cell.output.type === null).sort(
            (cell1: UnderscoreCell, cell2: UnderscoreCell) => Number(BigInt(cell2.output.capacity) - BigInt(cell1.output.capacity))
        )[0];
}

export const groupCells = (cells: Array<UnderscoreCell>) => {
    return {
        emptyCells: cells.filter(cell => !cell.output_data || cell.output_data === '0x'),
        filledCells: cells.filter(cell => cell.output_data !== '0x'),
    }
}

export const getSummary = (cells: Array<UnderscoreCell>) => {
    const inuse = cells
      .filter(cell => cell.output_data !== '0x')
      .map(cell => parseInt(cell.output.capacity))
      .reduce((acc, curr) => acc + curr, 0)
  
    const free = cells
      .filter(cell => cell.output_data === '0x')
      .map(cell => parseInt(cell.output.capacity))
      .reduce((acc, curr) => acc + curr, 0)
  
    const capacity = inuse + free
    return {
      inuse,
      capacity,
      free,
    }
  }

export const showTransactionModal = async (tx: string): Promise<void> => {
    const txLink = getNetworkConst("EXPLORER_URL") + tx;
    const content = `<p><a href="${txLink}" target="_blank">View the transaction: ${tx}</a></p>`;
    
    const updateInfoBox = async (theInfoBox: any) =>{
        const response = await getTransaction(tx);
        if (response !== undefined && response?.tx_status?.status === "committed") {
            theInfoBox.setContent("<h3>Completed!</h3>" + content);
            theInfoBox.setType("success");
        }
        else{
            setTimeout(() => { updateInfoBox(theInfoBox) }, 2000);
        }
    };
    const infoBox = Metro.infobox.create(
        "<h3>Pending...</h3>" + content,
        "info",
        {
            onOpen: function () {
                var ib = $(this).data("infobox");
                setTimeout(function () {
                    updateInfoBox(ib);
                }, 2000);
            }
        }
    );
}

export const isKeyperingConnected = async (): Promise<Account> => {
    try {
        const addresses = await (await queryAddresses(window.localStorage.getItem(KeyperingUtility.Key_AuthToken) || "")).addresses;
        // if (address === undefined) {
        //     UIHelper.ToastError("isKeyperingConnected: errors.noAddress");
        //     return false;
        // } else {
        //     return true;
        // }
        if (addresses && addresses.length > 0){
            return addresses[0];
        }
        return undefined;
    } catch (error) {
        UIHelper.ToastError(error.message);
        return undefined;
    }
}

export const setLocalStorageDecimal = async (): Promise<void> => {
    if (window.localStorage.getItem("decimal") === null) {
        const sudtInfoTypeScript = getNetworkConst("SUDT_INFO_TYPE_SCRIPT") as CKBComponents.Script;
        sudtInfoTypeScript.args = window.localStorage.getItem("lockHash") || "";

        const sudtInfoCells = await getCells('type', underscoreScriptKey(sudtInfoTypeScript));
        if (sudtInfoCells.length > 0) {
            const data = parseSudtInfoData(sudtInfoCells[0].output_data);
            window.localStorage.setItem('decimal', data.decimal.toString());
        }
    }
}