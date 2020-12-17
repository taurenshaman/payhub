using Microsoft.EntityFrameworkCore;
using PayHub.DB.Data;
using PayHub.Interfaces;
using PayHub.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PayHub.DB.EF.BusinessLogic {
  public class UserDataStore : IUserDataStore {
    AuthUser currentUser;
    PayHubDb db;

    // 1. siteLogic is the business logic of your original site;
    //    Should implement Authenticate method.
    public UserDataStore(object siteLogic, string account, string secret) {
      this.currentUser = Authenticate( account, secret );

      var options = new DbContextOptions<PayHubDb>();
      this.db = new PayHubDb( options );
    }

    // 2. no need to implement Authenticate method
    public UserDataStore(AuthUser currentUser) {
      this.currentUser = currentUser;

      var options = new DbContextOptions<PayHubDb>();
      this.db = new PayHubDb( options );
    }

    public UserDataStore(AuthUser user, PayHubDb hubDb) {
      this.currentUser = user;
      this.db = hubDb;
    }

    public AuthUser Authenticate(string account, string secret) {
      //initialize currentUser
      return null;
    }

    public List<Models.WithdrawAccount> GetWithdrawAccounts() {
      var data = db.WithdrawAccount.Where( i => i.UserId == currentUser.Id ).ToList();
      List<Models.WithdrawAccount> result = new List<Models.WithdrawAccount>();
      foreach(var item in data) {
        var currency = db.Currency.Where( i => i.Id == item.CurrencyId ).FirstOrDefault();
        var resultItem = ModelConverter.ConvertWithdrawAccount( item );
        //resultItem.TheCurrency = ModelConverter.ConvertCurrency( currency );

        result.Add( resultItem );
      }
      return result;
    }

    //public async Task<List<Models.Currency>> ListCurrencies(IEnumerable<string> ids) {
    //  var data = await db.Currency.Where( i => ids.Contains(i.Id) ).ToListAsync();
    //  List<Models.Currency> result = new List<Models.Currency>();
    //  foreach(var item in data) {
    //    var currency = ModelConverter.ConvertCurrency( item );
    //    result.Add( currency );
    //  }
    //  return result;
    //}

    public async Task<string> SaveAccount(string currencyId, string accountName, string accountAddress, string qrcode) {
      var item = db.WithdrawAccount.Where( i => i.CurrencyId == currencyId && i.UserId == currentUser.Id ).FirstOrDefault();
      if(item == null) {
        string id = Tools.CommonUtility.NewGuid_PlainLower();
        item = new Data.WithdrawAccount( id, currentUser.Id, currencyId, accountAddress, accountName );
        item.QRCode = qrcode;
        db.WithdrawAccount.Add( item );
      }
      else {
        item.Name = accountName;
        item.Account = accountAddress;
        item.QRCode = qrcode;
        db.WithdrawAccount.Update( item );
      }
      
      int r = await db.SaveChangesAsync();
      return r > 0 ? item.Id : string.Empty;
    }

    public float Recharge(string currencyId, float amount, string accountAddress) {
      return 0;
    }

    public float WithdrawDeposit(string currencyId, float amount, string accountAddress) {
      return 0;
    }

    public bool Transfer(string targetUserId, string targetAccountAddress, string currencyId, float amount) {
      try {
        using (var transaction = db.Database.BeginTransaction()) {
          // TODO: ...

          transaction.Commit();
        };
        return true;
      }
      catch {
        return false;
      }
    }

  }

}
