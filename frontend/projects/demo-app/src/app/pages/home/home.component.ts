import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { UsersService } from '@t4d-wnow/user-lib';
import { CurrentUser } from '@t4d-wnow/user-lib';
import { LoginForm } from '@t4d-wnow/user-lib';
import { AppState } from '../../models/AppState';

import { setErrorMessage, clearErrorMessage } from '../../actions/error-message.actions';
import { selectErrorMessage } from '../../selectors/error-message.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public errorMessage$: Observable<string> = this.store.pipe(select(selectErrorMessage));

  get currentUser(): CurrentUser | null {
    return this.usersSvc.getCurrentUser();
  }

  constructor(
    private usersSvc: UsersService,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

  doLogin(loginForm: LoginForm): void {
    this.usersSvc.loginEmployee(loginForm.username, loginForm.password).subscribe({
      next: () => {
        // this.errorMessage = '';
        this.store.dispatch(clearErrorMessage());
      },
      error: (err) => {
        if (err.status === 404) {
          // this.errorMessage = 'Username and password not found.';
          this.store.dispatch(setErrorMessage({ errorMessage: 'Username and password not found.' }));
        } else {
          // this.errorMessage = 'Unknown login error.';
          this.store.dispatch(setErrorMessage({ errorMessage: 'Unknown login error.' }));
        }
      }
    });
  }

  doClear(): void {
    console.log('clicked clear');
    // this.errorMessage = '';
    this.store.dispatch(clearErrorMessage());
  }

}
