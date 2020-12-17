using System;
using System.Collections.Generic;
using System.Text;

namespace PayHub.DB.Data {
  public static class ModelConverter {
    public static Models.WithdrawAccount ConvertWithdrawAccount(WithdrawAccount source) {
      var result = new Models.WithdrawAccount() {
        Id = source.Id,
        UserId = source.UserId,
        Name = source.Name,
        Account = source.Account,
        CurrencyId = source.CurrencyId,
        QRCode = source.QRCode
      };
      return result;
    }

    public static Models.Currency ConvertCurrency(Currency source) {
      var result = new Models.Currency() {
        Id = source.Id,
        Name = source.Name,
        Unit = source.Unit
      };
      return result;
    }

  }

}
