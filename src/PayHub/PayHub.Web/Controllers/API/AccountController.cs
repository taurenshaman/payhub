using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace PayHub.Web.Controllers.API {
  [ApiController]
  [Route( "api/v0/account" )]
  public class AccountController : ControllerBase {

    [HttpGet]
    [Route( "all" )]
    public IEnumerable<Models.WithdrawAccount> GetAccounts(string username) {
      // TODO: get user info from cookie/session, authenticate

      // test
      if (string.IsNullOrEmpty( username ))
        username = "jerin";
      var user = Web.Lib.DemoData.TestAuthenticate( username, username, username, username );
      var currencies = Web.Lib.DemoData.TestCurrencies();
      var accounts = Web.Lib.DemoData.TestWithdrawAccounts2( user.Account.Id, currencies );
      return accounts;
    }

  }

}
