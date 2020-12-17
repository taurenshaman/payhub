using Microsoft.EntityFrameworkCore;
using PayHub.DB.Data;
using PayHub.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PayHub.DB.EF.BusinessLogic {
  public class CreatorDataStore: ICreatorDataStore {
    string creatorUserName;
    PayHub.Models.AuthUser currentUser;
    PayHubDb db;

    public CreatorDataStore(string creatorUserName, PayHub.Models.AuthUser user) {
      this.creatorUserName = creatorUserName;
      this.currentUser = user;

      var options = new DbContextOptions<PayHubDb>();
      this.db = new PayHubDb( options );
    }

    public CreatorDataStore(string creatorUserName, PayHub.Models.AuthUser user, PayHubDb hubDb) {
      this.creatorUserName = creatorUserName;
      this.currentUser = user;

      this.db = hubDb;
    }

    public bool IsCreator() {
      return currentUser != null && currentUser.UserName == creatorUserName && !string.IsNullOrEmpty( creatorUserName );
    }

    public async Task<List<Models.Currency>> ListCurrencies(int pageIndex, int count) {
      List<Models.Currency> result = new List<Models.Currency>();
      if (pageIndex < 0)
        pageIndex = 0;
      if (count < 0)
        count = Core.Common.BizConstants.CountPerPage;

      var data = await db.Currency.Skip( pageIndex * count )
        .Take( count )
        .ToListAsync();
      // convert
      foreach(var d in data) {
        var dbItem = ModelConverter.ConvertCurrency( d );
        result.Add( dbItem );
      }
      return result;
    }

    public async Task<List<Models.Currency>> ListAllCurrencies() {
      List<Models.Currency> result = new List<Models.Currency>();
      var data = await db.Currency.ToListAsync();
      // convert
      foreach (var d in data) {
        var dbItem = ModelConverter.ConvertCurrency( d );
        result.Add( dbItem );
      }
      return result;
    }

    public async Task<bool> AddCurrency(string name, string unit) {
      string id = Tools.CommonUtility.NewGuid_PlainLower();
      var item = new Currency( id, name, unit );
      db.Currency.Add( item );
      int r = await db.SaveChangesAsync();
      return r > 0;
    }

    public async Task<bool> UpdateCurrency(string id, string name, string unit) {
      var data = db.Currency.Where( i => i.Id == id ).FirstOrDefault();
      data.Name = name;
      data.Unit = unit;
      db.Update( data );
      int r = await db.SaveChangesAsync();
      return r > 0;
    }

  }

}
