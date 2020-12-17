using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using PayHub.DB.Data;
using PayHub.DB.EF.BusinessLogic;

namespace PayHub.Web.Controllers {
  [ApiController]
  [Route( "api/v0/account" )]
  public class AccountController : ControllerBase {
    IConfiguration _config;
    PayHubDb _db;

    public AccountController(IConfiguration config, PayHubDb db) {
      _config = config;
      _db = db;
    }

    [HttpGet]
    [Route( "all" )]
    public ActionResult<IEnumerable<Models.WithdrawAccount>> GetAccounts(string username) {
      // authenticate
      var user = Tools.BizUtility.LoadUserFromCookie( Request, _config["ConnectionStrings:Chuci"] );
      if (user == null)
        return new StatusCodeResult( Microsoft.AspNetCore.Http.StatusCodes.Status401Unauthorized );

      UserDataStore dataStore = new UserDataStore( user, _db );
      var accounts = dataStore.GetWithdrawAccounts();

      Response.StatusCode = StatusCodes.Status200OK;
      return accounts;
    }

    [HttpPost]
    [Route( "save" )]
    public async Task<ActionResult<dynamic>> SaveAccount(string currencyId, string name, string address, string qrcode) {
      if (string.IsNullOrEmpty( currencyId ) || string.IsNullOrEmpty( address )) {
        this.Request.EnableBuffering();
        var bodyReader = new System.IO.StreamReader( this.Request.Body );
        if (bodyReader != null) {
          string bodyContent = await bodyReader.ReadToEndAsync();
          var reqToken = JToken.Parse( bodyContent );
          bodyReader.Close();

          currencyId = (string)reqToken["currencyId"];
          name = (string)reqToken["name"];
          address = (string)reqToken["address"];
          qrcode = (string)reqToken["qrcode"];
        }
      }
      if (string.IsNullOrEmpty( currencyId ) || string.IsNullOrEmpty( address )) {
        return new StatusCodeResult( StatusCodes.Status400BadRequest );
      }
      // authenticate
      var user = Tools.BizUtility.LoadUserFromCookie( Request, _config["ConnectionStrings:Chuci"] );
      if (user == null) {
        return new StatusCodeResult( StatusCodes.Status401Unauthorized );
      }

      UserDataStore dataStore = new UserDataStore( user, _db );
      string id = await dataStore.SaveAccount( currencyId, name, address, qrcode );

      Response.StatusCode = StatusCodes.Status200OK;

      dynamic result = new {
        id = id,
        success = true
      };
      return result;
    }

  }

}
