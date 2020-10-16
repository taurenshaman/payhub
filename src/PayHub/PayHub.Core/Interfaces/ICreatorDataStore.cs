using System;
using System.Collections.Generic;
using System.Text;

namespace PayHub.Interfaces {
  /// <summary>
  /// For Owner or Super Administrator
  /// </summary>
  public interface ICreatorDataStore {
    /// <summary>
    /// Add currency.
    /// </summary>
    /// <returns></returns>
    bool AddCurrency(string currencyName, string address);
  }

}
