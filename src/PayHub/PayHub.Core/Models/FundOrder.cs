using System;
using System.Collections.Generic;
using System.Text;

namespace PayHub.Core.Models {
  public class FundOrder {
  }

  public class P2PFundOrder {
    public string Id { get; set; }

    // From
    public string FromUserId { get; set; }
    public string FromAddress { get; set; }

    // To
    public string ToUserId { get; set; }
    public string ToAddress { get; set; }


    public string CurrencyId { get; set; }


    public float Amount { get; set; }

    public string Transaction { get; set; }
  }

}
