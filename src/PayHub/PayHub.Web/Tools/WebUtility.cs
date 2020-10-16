using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PayHub.Tools {
  public static class WebUtility {
    const string enUS = "en-us";
    const string zhHans = "zh-hans";
    const string zhHant = "zh-hant";
    const string zhCN = "zh-cn";
    const string zhTW = "zh-tw";

    //public static string GetLanguageCodeFromCookie(System.Web.HttpCookie cultureCookie) {
    //  if (cultureCookie != null)
    //    return cultureCookie.Value;
    //  return enUS;
    //}

    //public static string GetLanguageCodeFromCookie(System.Web.HttpRequestBase request) {
    //  if (request != null && request.Cookies["_culture"] != null)
    //    return GetLanguageCodeFromCookie( request.Cookies["_culture"] );
    //  else if (request.UserLanguages != null && request.UserLanguages.Length > 0) {
    //    return request.UserLanguages[0].ToLowerInvariant();
    //  }
    //  return enUS;
    //}

    ///// <summary>
    ///// en-us, zh-cn, zh-tw
    ///// </summary>
    ///// <param name="lang"></param>
    ///// <returns></returns>
    //public static string GetCompatibleLanguage(string lang) {
    //  string code = GetSupportedLanguage( lang );
    //  if (code.StartsWith( "zh" )) { // 中文
    //    if (code.Contains( "cn" ) || code.Contains( "hans" )) // 简体
    //      return zhCN;
    //    // 默认：繁体
    //    return zhTW;
    //  }
    //  return enUS;
    //}

    ///// <summary>
    ///// en-us, zh-cn, zh-tw
    ///// </summary>
    ///// <param name="lang"></param>
    ///// <returns></returns>
    //public static string GetCompatibleLanguage(System.Web.HttpRequestBase request) {
    //  string code = GetLanguageCodeFromCookie( request );
    //  if (code.StartsWith( "zh" )) { // 中文
    //    if (code.Contains( "cn" ) || code.Contains( "hans" )) // 简体
    //      return zhCN;
    //    // 默认：繁体
    //    return zhTW;
    //  }
    //  return enUS;
    //}
    ///// <summary>
    ///// en-us, zh-cn, zh-tw
    ///// </summary>
    ///// <param name="lang"></param>
    ///// <returns></returns>
    //public static string GetCompatibleLanguage(System.Web.HttpCookieCollection cookies) {
    //  string code = GetLanguageCodeFromCookie( cookies["_culture"] );
    //  code = GetCompatibleLanguage( code );
    //  return code;
    //}


  }

}