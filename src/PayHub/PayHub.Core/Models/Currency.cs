using Newtonsoft.Json;

namespace PayHub.Models {
  public class Currency {
    [JsonProperty( PropertyName = "id" )]
    public string Id { get; set; }

    /// <summary>
    /// Name: Bitcoin
    /// </summary>
    [JsonProperty( PropertyName = "name" )]
    public string Name { get; set; }

    /// <summary>
    /// Unit: BTC
    /// </summary>
    [JsonProperty( PropertyName = "unit" )]
    public string Unit { get; set; }


  }

}
