using Newtonsoft.Json;

namespace PayHub.Models {
  public class FundOrder {
  }

  public class P2PFundOrder {
    [JsonProperty( PropertyName = "id" )]
    public string Id { get; set; }

    // From
    [JsonProperty( PropertyName = "fromUserId" )]
    public string FromUserId { get; set; }

    [JsonProperty( PropertyName = "fromAddress" )]
    public string FromAddress { get; set; }

    // To
    [JsonProperty( PropertyName = "toUserId" )]
    public string ToUserId { get; set; }

    [JsonProperty( PropertyName = "toAddress" )]
    public string ToAddress { get; set; }

    [JsonProperty( PropertyName = "currencyId" )]
    public string CurrencyId { get; set; }

    [JsonProperty( PropertyName = "amount" )]
    public float Amount { get; set; }

    [JsonProperty( PropertyName = "transaction" )]
    public string Transaction { get; set; }
  }

}
