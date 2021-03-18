export interface UnderscoreScript {
  code_hash: string;
  hash_type: 'data' | 'type';
  args: string;
}

export interface UnderscoreCell {
  output: {
    capacity: string;
    lock: UnderscoreScript;
    type: UnderscoreScript | null;
  }
  output_data: string;
  out_point: {
    tx_hash: string;
    index: string;
  };
  block_number: string;
  tx_index: string;
}

export interface LockScriptMeta {
  name: string;
  cellDeps: Array<CKBComponents.CellDep>;
  headerDeps: Array<string>;
}

export interface Account {
  address: string;
  lockHash: string;
  lockScript: CKBComponents.Script;
  lockScriptMeta: LockScriptMeta;
  publicKey: string;
}

export interface AccountList {
  addresses: Array<Account>;
  userId: string;
}