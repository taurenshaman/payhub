using PayHub.Models;

namespace PayHub.ViewModels {
  public class UserViewModel: ViewModelBase {

    #region Account

    /// <summary>
    /// The user of the account of some page/document.
    /// Used to display/show.
    /// </summary>
    public User Account { get; set; }

    public string AvatarUri { get; set; }

    #endregion Account

    /// <summary>
    /// CurrentUser == Account?
    /// </summary>
    public bool IsGuest { get; set; }

    
    
  }
}
