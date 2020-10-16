using System.Text;

namespace PayHub.Tools {
  public class CryptographyUtility {
    /// <summary>
    /// SHA512加密。字符串编码使用UTF8。
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    public static string SHA512Encrypt( string input ) {
      if ( input == null || input.Length == 0 )
        return string.Empty;

      byte[] inputBytes = System.Text.UTF8Encoding.UTF8.GetBytes( input );
      System.Security.Cryptography.SHA512Managed algorithm = new System.Security.Cryptography.SHA512Managed();
      byte[] bytes = algorithm.ComputeHash( inputBytes );
      var result = StringUtility.BytesToString( bytes );

      algorithm.Clear();
      return result;
    }

    public static string MD5Encrypt(string input) {
      if (input == null || input.Length == 0)
        return string.Empty;

      byte[] inputBytes = System.Text.UTF8Encoding.UTF8.GetBytes( input );
      System.Security.Cryptography.MD5 algorithm = System.Security.Cryptography.MD5.Create();
      byte[] bytes = algorithm.ComputeHash( inputBytes );
      var result = StringUtility.BytesToString( bytes );

      algorithm.Clear();
      return result;
    }

  }

}
