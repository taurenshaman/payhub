using System;
using System.Collections.Generic;
using PayHub.Models;

namespace PayHub.ViewModels {
  public class ManagementViewModel : ViewModelBase {

    public bool IsCreator = false;

    public ManagementViewModel(AuthUser currentUser, bool isCreator) {
      CurrentUser = currentUser;
      IsCreator = isCreator;
    }

  }
}
