# payhub
Pay Hub for decentralized web. Bring payment to every website without redirecting to a payment center.


## Target
1. Create a sub domain and prepare the server.
2. Upload the PayHub files like deploy a blog system.
3. Set something in the configuration: address, API keys, .etc.
4. Run & Tell your customers.


## Features
- Pay with wallet plugins of you browser. So **No need to redirect to the payment platform**. #decentralized


## Roadmap (v2020)
- [ ] Creator mode: for owner/creator of the website
   - [ ] Add currency with address: the address will contains all money including consumed and locked (users will consume in the future).
      - consumed money: already blonged to the website owner/creator
      - locked: users' balance
   - [ ] withdraw deposit( transfer the consumed money to other addresses): platform -> the chain
- [ ] User mode: for normal users
   - [ ] add address of some currency, set tooltip name
   - [ ] recharge: the chain -> platform
   - [ ] withdraw deposit( transfer to this address from payhub): platform -> the chain
   - [ ] transfer: flows in platform
- [ ] ETH support: web3.js
   - [ ] recharge
   - [ ] withdraw deposit
   - [ ] parse trasaction to restore the recharge action if the balance in PayHub didn't update.
- [ ] Bitcoin support
   - [ ] recharge
   - [ ] withdraw deposit
   - [ ] parse trasaction to restore the recharge action if the balance in PayHub didn't update.


## Ready?
- [ ] A simple roadmap
- [ ] Create a DAO: molochdao || aragon
