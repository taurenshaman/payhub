using System;
using System.Collections.Generic;
using System.Text;

namespace PayHub.Models {
  public class AuthUser {
    public string Id { get; set; }

    /// <summary>
    /// Used to access the user's page/profile
    /// </summary>
    public string UserName { get; set; }

    /// <summary>
    /// Display name
    /// </summary>
    public string NickName { get; set; }
  }

  public class User : AuthUser {
    
  }

}
