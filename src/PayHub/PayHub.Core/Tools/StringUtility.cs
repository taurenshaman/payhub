using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace PayHub.Tools {
  public class StringUtility {
    public static string Base64Encode(string plainText) {
      var plainTextBytes = System.Text.Encoding.UTF8.GetBytes( plainText );
      return System.Convert.ToBase64String( plainTextBytes );
    }

    public static string Base64Decode(string base64EncodedData) {
      var base64EncodedBytes = System.Convert.FromBase64String( base64EncodedData );
      return System.Text.Encoding.UTF8.GetString( base64EncodedBytes );
    }

    public static string BytesToString(byte[] bytes, string byteFormat = "x2") {
      StringBuilder sb = new StringBuilder();
      foreach (byte b in bytes)
        sb.Append( b.ToString( "x2" ) );
      return sb.ToString();
    }

    /// <summary>
    /// Compute MD5 Hash of the text
    /// </summary>
    /// <param name="text"></param>
    /// <returns></returns>
    public static string ComputeMD5(string text) {
      return CryptographyUtility.MD5Encrypt( text );
    }

  }

}
