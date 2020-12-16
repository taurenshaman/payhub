using Newtonsoft.Json;

namespace PayHub.Models {
  public class Fund {
    [JsonProperty( PropertyName = "id" )]
    public string Id { get; set; }

    [JsonProperty( PropertyName = "userId" )]
    public string UserId { get; set; }

    [JsonProperty( PropertyName = "currencyId" )]
    public string CurrencyId { get; set; }

    [JsonProperty( PropertyName = "balance" )]
    public float Balance { get; set; }

  }
}
