using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using PayHub.DB.EF.BusinessLogic;
using PayHub.ViewModels;

namespace PayHub.Controllers {
  public class ManageController : BaseController {
    public ManageController(IConfiguration config, ILogger<DefaultController> logger) : base( config, logger ) {
    }

    [Route( "manage/currency" )]
    public async Task<IActionResult> Currency() {
      var user = Tools.BizUtility.LoadUserFromCookie( Request, _config["ConnectionStrings:Chuci"] );
      if(user == null) {
        ViewModelBase vmEmpty = new ViewModelBase();
        ViewBag.Error = "You are not the Creator of the website.";
        return View( "Currency", vmEmpty );
      }

      ViewData["Title"] = "@" + user.UserName + " - PayHub";

      CreatorDataStore creatorData = new CreatorDataStore( _config["Creator:UserName"], user );
      bool isCreator = creatorData.IsCreator();
      ManagementViewModel vm = new ManagementViewModel( user, isCreator );
      if (isCreator) {
        return View( "Currency", vm );
      }
      ViewBag.Error = "You are not the Creator of the website.";
      return View( "Currency", vm );
    }

    [Route( "manage/wallet" )]
    public IActionResult Wallet() {
      UserViewModel vm = new UserViewModel();
      vm.CurrentUser = Tools.BizUtility.LoadUserFromCookie( Request, _config["ConnectionStrings:Chuci"] );
      if (vm.CurrentUser == null) {
        return View( "Wallet", vm );
      }

      ViewData["Title"] = "@" + vm.CurrentUser.UserName + " - PayHub";
      return View( "Wallet", vm );
    }

  }

}
