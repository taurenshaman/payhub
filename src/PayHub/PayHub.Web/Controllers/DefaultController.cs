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
  public class DefaultController : BaseController {
    public DefaultController(IConfiguration config, ILogger<DefaultController> logger) : base( config, logger ){
    }

    [Route("")]
    public IActionResult Index() {
      ViewModelBase vm = new ViewModelBase();
      vm.CurrentUser = Tools.BizUtility.LoadUserFromCookie( Request, ConnChuci );
      if(vm.CurrentUser == null)
        return View( "Intro", vm );
      return View( "Index", vm );
    }

    [Route( "privacy" )]
    public IActionResult Privacy() {
      ViewModelBase vm = new ViewModelBase();
      vm.CurrentUser = Tools.BizUtility.LoadUserFromCookie( Request, ConnChuci );
      return View( vm );
    }

    [ResponseCache( Duration = 0, Location = ResponseCacheLocation.None, NoStore = true )]
    public IActionResult Error() {
      return View( new ViewModels.ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier } );
    }
  }
}
