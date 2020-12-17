using System;
using System.Collections.Generic;
using System.Diagnostics;
using PayHub.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using PayHub.Web.Lib;

namespace PayHub.Tools {
  public class BizUtility {

    public static AuthUser LoadUserFromCookie(HttpRequest request, string connChuci) {
      // Chuci Project:
      // 1. Check cookies
      // 2. Authenticate and get a User model
      // 3. init a AuthUser model

      throw new NotImplementedException();

      //if (request == null ||
      //  request.Cookies[ChuciBizKeys.StorageKey_AccountID] == null || request.Cookies[ChuciBizKeys.StorageKey_AccountPassword] == null)
      //  return null;

      //var cookieAccount = request.Cookies[ChuciBizKeys.StorageKey_AccountID];
      //var cookiePwd = request.Cookies[ChuciBizKeys.StorageKey_AccountPassword];

      //var helper = new Chuci.Business.BizHelper( connChuci );
      //var user = helper.Authenticate( cookieAccount, cookiePwd  );
      //if (user == null)
      //  return null;

      //AuthUser authUser = new AuthUser() {
      //  Id = user.Id,
      //  UserName = user.UserName,
      //  NickName = user.NickName
      //};
      //return authUser;
    }

  }

}
