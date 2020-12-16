using PayHub.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PayHub.Interfaces {
  /// <summary>
  /// for normal users
  /// </summary>
  public interface IUserDataStore {
    /// <summary>
    /// Authenticate and return the user.
    /// </summary>
    /// <param name="account">username/email</param>
    /// <param name="secret">password/token</param>
    /// <returns></returns>
    AuthUser Authenticate(string account, string secret);

    /// <summary>
    /// Get WithdrawAccounts of current user
    /// </summary>
    /// <returns></returns>
    List<WithdrawAccount> GetWithdrawAccounts();

    Task<bool> AddAccount(string currencyId, string accountName, string accountAddress);

    /// <summary>
    /// Recharge to current user's account. From the chain to the platform.
    /// </summary>
    /// <param name="currencyId"></param>
    /// <param name="amount"></param>
    /// <param name="accountAddress"></param>
    /// <returns></returns>
    float Recharge(string currencyId, float amount, string accountAddress);

    /// <summary>
    /// Withdraw from the platform to the chain
    /// 1. get ballance of the currency
    /// 2. check: the balance is greater than or equal to amount
    /// 3. withdraw
    /// </summary>
    /// <param name="currencyId"></param>
    /// <param name="amount"></param>
    /// <param name="accountAddress"></param>
    /// <returns>the new ballance of the currency</returns>
    float WithdrawDeposit(string currencyId, float amount, string accountAddress);

    /// <summary>
    /// 0. the money flowed in the platform, not on the chain.
    /// 1. check: target user has the account address of the currency
    /// 2. check: the current user's balance of the currency is greater than amount
    /// 3. transfer.
    /// </summary>
    /// <param name="targetUserId"></param>
    /// <param name="targetUserAccount"></param>
    /// <param name="amount"></param>
    /// <returns></returns>
    bool Transfer(string targetUserId, string targetAccountAddress, string currencyId, float amount );

  }

}
