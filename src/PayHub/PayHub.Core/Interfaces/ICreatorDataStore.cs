using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PayHub.Interfaces {
  /// <summary>
  /// For Owner or Super Administrator
  /// </summary>
  public interface ICreatorDataStore {
    /// <summary>
    /// Check the current user is the creator or not
    /// </summary>
    /// <returns></returns>
    bool IsCreator();

    //Task<int> GetCountOfCurrency();

    /// <summary>
    /// Add currency.
    /// </summary>
    /// <returns></returns>
    Task<bool> AddCurrency(string name, string unit);

    /// <summary>
    /// Update currency.
    /// </summary>
    /// <returns></returns>
    Task<bool> UpdateCurrency(string id, string name, string unit);

    /// <summary>
    /// List all currencies
    /// </summary>
    /// <returns></returns>
    Task<List<Models.Currency>> ListAllCurrencies();

    /// <summary>
    /// List currencies
    /// </summary>
    /// <param name="pageIndex">start from 0</param>
    /// <param name="count">Items count per page.</param>
    /// <returns></returns>
    Task<List<Models.Currency>> ListCurrencies(int pageIndex, int count);

  }

}
