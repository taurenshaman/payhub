using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace PayHub.Tools {
  public class CommonUtility {
    const string enUS = "en-us";
    const string zhHans = "zh-hans";
    const string zhHant = "zh-hant";
    const string zhCN = "zh-cn";
    const string zhTW = "zh-tw";

    /// <summary>
    /// 创建一个Guid字符串，去掉了所有符号，只剩32位数字或小写字母，如bea8b23f69574b0c8832b5723c3aae71
    /// </summary>
    /// <returns></returns>
    public static string NewGuid_PlainLower() {
      return Guid.NewGuid().ToString().Replace( "-", "" ).ToLower();
    }

    //public static string GetAppSetting( string key ) {
    //  return System.Configuration.ConfigurationManager.AppSettings[key];
    //}

    ///// <summary>
    ///// 将URL链接转换为唯一的文件名。
    ///// </summary>
    ///// <param name="url">URL链接</param>
    //public static string GetFileNameFromURL( string url ) {
    //  if ( string.IsNullOrWhiteSpace( url ) )
    //    return null;
    //  //url.Replace( "https://www.", "" ).Replace( "http://www.", "" ).Replace( "https://", "" );
    //  string tmp = Regex.Replace( url, @"^http(s)?://(www.)?", "", RegexOptions.IgnoreCase );
    //  return System.Web.HttpUtility.UrlEncode( tmp );
    //}


    public static bool LanguagesAreSimilar( string langA, string langB ) {
      if ( string.IsNullOrWhiteSpace( langA ) || string.IsNullOrWhiteSpace( langB ) )
        return false;
      langA = GetSupportedLanguage( langA );
      langB = GetSupportedLanguage( langB );
      return langA == langB;
    }

    /// <summary>
    /// en-us, zh-hans, zh-hant
    /// </summary>
    /// <param name="lang"></param>
    /// <returns></returns>
    public static string GetSupportedLanguage( string lang ) {
      if ( string.IsNullOrWhiteSpace( lang ) )
        return enUS;

      string langLower = lang.ToLowerInvariant().Trim();
      if ( langLower.StartsWith( "zh" ) ) { // 中文
        if ( langLower.Contains( "cn" ) || langLower.Contains( "hans" ) ) // 简体
          return zhHans;
        // 默认：繁体
        return zhHant;
      }
      // 默认：英语
      return enUS;
    }

  }

}
