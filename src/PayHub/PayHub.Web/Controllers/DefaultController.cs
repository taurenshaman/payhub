using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PayHub.ViewModels;

namespace PayHub.Controllers {
  public class DefaultController : BaseController {
    public DefaultController(ILogger<DefaultController> logger) : base( logger ){
      
    }

    [Route("")]
    public IActionResult Index() {
      var user = Web.Lib.DemoData.TestAuthenticate();
      if(user.IsGuest)
        return View( "Intro", user );
      return View( "Index", user );
    }

    [Route( "privacy" )]
    public IActionResult Privacy() {
      var user = Web.Lib.DemoData.TestAuthenticate();
      return View( user );
    }

    [ResponseCache( Duration = 0, Location = ResponseCacheLocation.None, NoStore = true )]
    public IActionResult Error() {
      return View( new ViewModels.ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier } );
    }
  }
}
