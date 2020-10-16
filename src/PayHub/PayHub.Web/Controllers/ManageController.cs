using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PayHub.ViewModels;

namespace PayHub.Controllers {
  public class ManageController : BaseController {
    public ManageController(ILogger<DefaultController> logger) : base( logger ){
    }

    [Route( "manage/currency" )]
    public IActionResult Currency() {
      var user = Web.Lib.DemoData.TestAuthenticate();

      ViewData["Title"] = "@" + user.Account.UserName + " - PayHub";
      return View( "Currency", user );
    }

    [Route( "manage/wallet" )]
    public IActionResult Wallet() {
      var user = Web.Lib.DemoData.TestAuthenticate();

      ViewData["Title"] = "@" + user.Account.UserName + " - PayHub";
      return View( "Wallet", user );
    }

  }

}
