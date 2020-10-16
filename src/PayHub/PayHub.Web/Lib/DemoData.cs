using PayHub.Core.Models;
using PayHub.Core.Extensions;
using PayHub.Models;
using PayHub.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PayHub.Web.Lib {
  public static class DemoData {

    public static UserViewModel TestAuthenticate(
      string usernameAccount = "taurenshaman",
      string nicknameAccount = "Jerin Lee",
      string usernameVisitor = "taurenshaman",
      string nicknameVisitior = "Jerin Lee") {
      UserViewModel vm = new UserViewModel() {
        IsGuest = usernameAccount == usernameVisitor
      };
      vm.Account = new User() {
        Id = "account001",
        UserName = usernameAccount,
        NickName = nicknameAccount
      };
      vm.AvatarUri = "https://robohash.org/" + vm.Account.UserName + ".png";
      if (!string.IsNullOrEmpty( usernameVisitor )) {
        vm.CurrentUser = new User() {
          Id = "guest001",
          UserName = usernameVisitor,
          NickName = nicknameVisitior
        };
      }
      return vm;
    }

    public static List<WithdrawAccount> TestWithdrawAccounts1(string userId, List<Currency> currencies) {
      List<WithdrawAccount> data = new List<WithdrawAccount>();
      data.Add( new WithdrawAccount() { Id = "001",
        Name = "Bitcoin",
        Account = "17KYrfoipSWsjDNDdDsovANvDdvyRWV2Kg",
        CurrencyId = "001",
        TheCurrency = currencies.GetById( "001" ),
        UserId = userId } );
      return data;
    }
    public static List<WithdrawAccount> TestWithdrawAccounts2(string userId, List<Currency> currencies) {
      List<WithdrawAccount> data = new List<WithdrawAccount>();
      data.Add( new WithdrawAccount() { Id = "001",
        Name = "Bitcoin",
        Account = "17KYrfoipSWsjDNDdDsovANvDdvyRWV2Kg",
        CurrencyId = "001",
        TheCurrency = currencies.GetById( "001" ),
        UserId = userId } );
      data.Add( new WithdrawAccount() { Id = "002",
        Name = "ETH",
        Account = "0x309dDffb87f07AfBA6B69cFeD4BdfaEA774f6ABb",
        CurrencyId = "002",
        TheCurrency = currencies.GetById( "002" ),
        UserId = userId } );
      return data;
    }

    public static List<Currency> TestCurrencies() {
      List<Currency> data = new List<Currency>();
      data.Add( new Currency() { Id = "001", Name = "Bitcoin", Unit = "BTC" } );
      data.Add( new Currency() { Id = "002", Name = "ETH", Unit = "ETH" } );
      return data;
    }

  }

}
