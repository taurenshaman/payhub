using System;
using PayHub.Models;

namespace PayHub.ViewModels {
  public class UserViewModel {

    #region Visitor

    /// <summary>
    /// The user logged in. Load from cookie/session.
    /// And should be validated before actions.
    /// </summary>
    public User CurrentUser { get; set; }

    #endregion Visitor

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
