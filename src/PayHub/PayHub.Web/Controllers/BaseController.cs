using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using PayHub.Models;
using PayHub.ViewModels;

namespace PayHub.Controllers {
  public class BaseController : Controller {
    protected readonly IConfiguration _config;
    private readonly ILogger<DefaultController> _logger;

    protected readonly string ConnChuci;
    
    public BaseController(IConfiguration config, ILogger<DefaultController> logger) {
      _config = config;
      _logger = logger;
      ConnChuci = _config["ConnectionStrings:Chuci"];
    }

  }

}
