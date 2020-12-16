using Newtonsoft.Json;

namespace PayHub.Models {
  public class AuthUser {
    [JsonProperty( PropertyName = "id" )]
    public string Id { get; set; }

    /// <summary>
    /// Used to access the user's page/profile
    /// </summary>
    [JsonProperty( PropertyName = "userName" )]
    public string UserName { get; set; }

    /// <summary>
    /// Display name
    /// </summary>
    [JsonProperty( PropertyName = "nickName" )]
    public string NickName { get; set; }
  }

  public class User : AuthUser {
    
  }

}
