using PayHub.Interfaces;
using PayHub.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PayHub.DB.BusinessLogic {
  public class UserDataStore : IUserDataStore {
    public AuthUser Authenticate(string account, string secret) {
      return null;
    }

    public bool AddAccount(string currencyId, string accountName, string accountAddress) {
      return false;
    }

    public float Recharge(string currencyId, float amount, string accountAddress) {
      return 0;
    }

    public float WithdrawDeposit(string currencyId, float amount, string accountAddress) {
      return 0;
    }

    public bool Transfer(string targetUserId, string targetAccountAddress, string currencyId, float amount) {
      return false;
    }

  }

}
