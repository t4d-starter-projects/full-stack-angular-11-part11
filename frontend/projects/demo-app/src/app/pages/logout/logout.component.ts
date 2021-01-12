import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '@t4d-wnow/user-lib';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private usersSvc: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersSvc.logoutUser();
    this.router.navigateByUrl('/');
  }

}
