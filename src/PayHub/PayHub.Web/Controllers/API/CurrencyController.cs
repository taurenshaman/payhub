using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using PayHub.DB.Data;
using PayHub.DB.EF.BusinessLogic;

namespace PayHub.Web.Controllers {
  [ApiController]
  [Route( "api/v0/currency" )]
  public class CurrencyController : ControllerBase {
    IConfiguration _config;
    PayHubDb _db;

    public CurrencyController(IConfiguration config, PayHubDb db) {
      _config = config;
      _db = db;
    }

    [HttpGet]
    [Route( "all" )]
    public async Task<ActionResult<IEnumerable<Models.Currency>>> ListCurrencies() {
      // authenticate
      var user = Tools.BizUtility.LoadUserFromCookie( Request, _config["ConnectionStrings:Chuci"] );
      if (user == null)
        return NotFound();

      CreatorDataStore dataStore = new CreatorDataStore( _config["Creator:UserName"], user, _db );
      var currencies = await dataStore.ListAllCurrencies();
      return currencies;
    }

  }

}
