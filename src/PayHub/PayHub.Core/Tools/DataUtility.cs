using PayHub.Core.Extensions;
using PayHub.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PayHub.Core.Tools {
  public static class DataUtility {
    public static void FillWithdrawAccounts(IEnumerable<WithdrawAccount> data, IEnumerable<Currency> currencies) {
      foreach(var wa in data) {
        wa.TheCurrency = currencies.GetById( wa.CurrencyId );
      }
    }

  }

}
