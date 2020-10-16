using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using PayHub.ViewModels;

namespace PayHub.Tools {
  public class BizUtility {

    ///// <summary>
    ///// 根据Cookie信息读取用户数据。
    ///// </summary>
    ///// <returns></returns>
    //public static void LoadUserFromCookieAndLogin( HttpRequestBase request, ref ViewModelBase vm ) {
    //  if ( request == null ||
    //    request.Cookies[UserManagement.StorageKey_AccountID] == null || request.Cookies[UserManagement.StorageKey_AccountPassword] == null )
    //    return;
    //  BizHelper helper = BizHelper.CreateBizHelper();
    //  var cookieAccount = request.Cookies[UserManagement.StorageKey_AccountID];
    //  var cookiePwd = request.Cookies[UserManagement.StorageKey_AccountPassword];

    //  UserGroup group = null;
    //  vm.User = helper.Login( cookieAccount.Value, cookiePwd.Value, request.UserHostAddress, out group );
    //  vm.UserGroup = group;
    //  if (vm.User == null)
    //    return;

    //  AuthUserInfo authUser = new AuthUserInfo() {
    //    Id = vm.User.Id,
    //    UserName = vm.User.UserName,
    //    Password = cookiePwd.Value
    //  };
    //  vm.AuthUser = authUser;
    //}

    //public static AuthUserInfo LoadUserFromCookie(HttpRequestBase request) {
    //  if (request == null ||
    //    request.Cookies[UserManagement.StorageKey_AccountID] == null || request.Cookies[UserManagement.StorageKey_AccountPassword] == null)
    //    return null;
      
    //  var cookieAccount = request.Cookies[UserManagement.StorageKey_AccountID];
    //  var cookiePwd = request.Cookies[UserManagement.StorageKey_AccountPassword];

    //  BizHelper helper = BizHelper.CreateBizHelper();
    //  var user = helper.SelectUserByAccount( cookieAccount.Value );
    //  if (user == null)
    //    return null;

    //  AuthUserInfo authUser = new AuthUserInfo() {
    //    Id = user.Id,
    //    UserName = user.UserName,
    //    Password = cookiePwd.Value
    //  };
    //  return authUser;
    //}

    //public static AuthUserInfo LoadUserFromRequest(HttpRequestBase request) {
    //  string account = null;
    //  string pwd = null;

    //  var appId = request.QueryString[UserManagement.StorageKey_AppID];
    //  if (string.IsNullOrWhiteSpace( appId )) { // 默认：本站
    //    account = request.Params[UserManagement.StorageKey_AccountID];
    //    pwd = request.Params[UserManagement.StorageKey_AccountPassword];
    //  }
    //  else {
    //    // TODO：检查来源Host是否与注册AppID的Host一致

    //    account = request.QueryString[UserManagement.StorageKey_AccountID];
    //    pwd = request.QueryString[UserManagement.StorageKey_AccountPassword];

    //    if (string.IsNullOrWhiteSpace( account ) || string.IsNullOrWhiteSpace( pwd )) {
    //      account = request.Headers[UserManagement.StorageKey_AccountID];
    //      pwd = request.Headers[UserManagement.StorageKey_AccountPassword];
    //    }

    //    if (string.IsNullOrWhiteSpace( account ) || string.IsNullOrWhiteSpace( pwd )) {
    //      account = request.Params[UserManagement.StorageKey_AccountID];
    //      pwd = request.Params[UserManagement.StorageKey_AccountPassword];
    //    }

    //  }

    //  if (string.IsNullOrWhiteSpace( account ) || string.IsNullOrWhiteSpace( pwd )) {
    //    return null;
    //  }

    //  UserGroup userGroup = null;
    //  BizHelper helper = BizHelper.CreateBizHelper();
    //  var user = helper.Login( account, pwd, request.UserHostAddress, out userGroup );
    //  if (user == null)
    //    return null;

    //  AuthUserInfo authUser = new AuthUserInfo() {
    //    Id = user.Id,
    //    UserName = user.UserName,
    //    Password = pwd
    //  };
    //  return authUser;
    //}

    //public static bool AuthApiFromRequest(HttpRequestBase request) {
    //  string appid = null;
    //  string appkey = null;

    //  appid = request.QueryString[UserManagement.StorageKey_AppID];
    //  if (string.IsNullOrWhiteSpace( appid )) { // 默认：本站
    //    return true;
    //  }
    //  else {
    //    // TODO：检查来源Host是否与注册AppID的Host一致
    //  }
    //  return false;
    //}

    //public static List<User> GetUsers(IEnumerable<string> ids) {
    //  BizHelper helper = BizHelper.CreateBizHelper();
    //  var r = helper.SelectUsers( ids );
    //  return r;
    //}

    //public static string GetUserId(string username) {
    //  BizHelper helper = BizHelper.CreateBizHelper();
    //  var r = helper.SelectUserByUserName( username );
    //  return r == null ? String.Empty : r.Id;
    //}

    //public static string GetTemplatePath( string language ) {
    //  string templatePath = AppDomain.CurrentDomain.BaseDirectory + @"Resources\Data\JsonTemplates\" + language + @"\";
    //  return templatePath;
    //}

  }

}
