using System;

namespace PayHub.ViewModels {
  public class ErrorViewModel {
    public string RequestId { get; set; }

    public bool ShowRequestId => !string.IsNullOrEmpty( RequestId );
  }
}
