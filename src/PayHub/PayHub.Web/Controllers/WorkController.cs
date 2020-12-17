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
  public class WorkController : BaseController {
    public WorkController(IConfiguration config, ILogger<DefaultController> logger) : base( config, logger ) {
    }

    
  }

}
