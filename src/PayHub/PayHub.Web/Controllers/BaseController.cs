using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PayHub.Models;
using PayHub.ViewModels;

namespace PayHub.Controllers {
  public class BaseController : Controller {
    private readonly ILogger<DefaultController> _logger;
    
    public BaseController(ILogger<DefaultController> logger) {
      _logger = logger;
      //this.HttpContext.Request.Cookies
    }

    #region authenticate

    /// <summary>
    /// get info from cookie and authenticate
    /// </summary>
    /// <returns></returns>
    protected async Task AuthenticateFromCookie() {
    }

    /// <summary>
    /// get info from session and authenticate
    /// </summary>
    /// <returns></returns>
    protected async Task AuthenticateFromSession() {
    }

    #endregion authenticate

  }

}
