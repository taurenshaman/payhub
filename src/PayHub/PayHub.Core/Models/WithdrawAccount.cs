using Newtonsoft.Json;

namespace PayHub.Models {
  public class WithdrawAccount {
    [JsonProperty( PropertyName = "id" )]
    public string Id { get; set; }

    [JsonProperty( PropertyName = "userId" )]
    public string UserId { get; set; }

    [JsonProperty( PropertyName = "currencyId" )]
    public string CurrencyId { get; set; }
    /// <summary>
    /// cache
    /// </summary>
    [JsonProperty( PropertyName = "theCurrency" )]
    public Currency TheCurrency { get; set; }

    /// <summary>
    /// Address of the account: Withdraw.
    /// </summary>
    [JsonProperty( PropertyName = "account" )]
    public string Account { get; set; }

    /// <summary>
    /// Tooltip Name of the account
    /// </summary>
    [JsonProperty( PropertyName = "name" )]
    public string Name { get; set; }
  }

}
