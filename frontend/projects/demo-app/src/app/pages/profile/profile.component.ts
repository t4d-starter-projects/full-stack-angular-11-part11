import { Component, OnInit } from '@angular/core';

import { UsersService } from '@t4d-wnow/user-lib';
import { ChangePasswordForm } from '@t4d-wnow/user-lib';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public usersSvc: UsersService) { }

  ngOnInit(): void {
  }

  public doChangePassword(changePasswordForm: ChangePasswordForm) {
    const { username, userKind } = this.usersSvc.getCurrentUser()!;

    this.usersSvc.changePassword(
      username, userKind,
      changePasswordForm.currentPassword,
      changePasswordForm.newPassword).subscribe();
  }

}
