using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using PayHub.ViewModels;

namespace PayHub.Controllers {
  public class AccountController : BaseController {
    public AccountController(IConfiguration config, ILogger<DefaultController> logger) : base( config, logger ) {
    }

    [Route( "{username}" )]
    public IActionResult Index(string username) {
      UserViewModel vm = new UserViewModel();
      vm.CurrentUser = Tools.BizUtility.LoadUserFromCookie( Request, ConnChuci );
      // TODO
      // test
      if (string.IsNullOrEmpty( username ))
        username = "jerin";
      var user = Web.Lib.DemoData.TestAuthenticate( username, username, username, username );
      var currencies = Web.Lib.DemoData.TestCurrencies();
      ViewBag.Currencies = currencies;
      ViewBag.Accounts = Web.Lib.DemoData.TestWithdrawAccounts2( user.Account.Id, currencies );

      ViewData["Title"] = "@" + user.Account.UserName + " - PayHub";
      return View( "Index", user );
    }

  }

}
