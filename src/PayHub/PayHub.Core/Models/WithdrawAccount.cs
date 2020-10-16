using PayHub.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PayHub.Models {
  public class WithdrawAccount {
    public string Id { get; set; }

    public string UserId { get; set; }


    public string CurrencyId { get; set; }
    /// <summary>
    /// cache
    /// </summary>
    public Currency TheCurrency { get; set; }

    /// <summary>
    /// Address of the account: Withdraw.
    /// </summary>
    public string Account { get; set; }

    /// <summary>
    /// Tooltip Name of the account
    /// </summary>
    public string Name { get; set; }
  }

}
