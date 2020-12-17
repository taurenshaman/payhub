using PayHub.Models;

namespace PayHub.ViewModels {
  public class ViewModelBase {
    public string AvatarUri {
      get {
        return CurrentUser != null ? "https://robohash.org/" + CurrentUser.UserName + ".png" : "";
      }
    }

    #region Visitor

    /// <summary>
    /// The user logged in. Load from cookie/session.
    /// And should be validated before actions.
    /// </summary>
    public AuthUser CurrentUser { get; set; }

    #endregion Visitor

  }


}