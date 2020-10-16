using PayHub.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PayHub.Core.Extensions {
  public static class CurrencyExtensions {
    public static Currency GetById(this IEnumerable<Currency> currencies, string currencyId) {
      return currencies.Where( c => c.Id == currencyId )
        .FirstOrDefault();
    }
  }

}
