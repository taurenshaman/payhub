using System;
using System.Collections.Generic;
using System.Text;

namespace PayHub.Core.Models {
  public class Fund {
    public string Id { get; set; }

    public string UserId { get; set; }


    public string CurrencyId { get; set; }


    public float Balance { get; set; }

  }
}
