import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private _loggedUser$ = new BehaviorSubject<User>({} as User);
  loggedUser$ = this._loggedUser$.asObservable();
  userLogged: User = {};
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    console.log('user Logged service works!');
    this.updateLoggedUser();
  }

  getLoggedUser(): User {
    if (this.authService.isLoggedIn() == false) return {};
    var loggintoken = this.authService.getCookie();

    var _extractedtoken = loggintoken.split('.')[1];
    var _atobdata = window.atob(_extractedtoken);
    var _finaldata = JSON.parse(_atobdata);
    console.log(_finaldata['id']);
    this.userService
      .getUser(_finaldata['id'])
      .subscribe((r: User) => (this.userLogged = r));
    console.log(this.userLogged == null ? this.userLogged : 'user logged null');
    return this.userLogged;
  }

  updateLoggedUser() {
    this._loggedUser$.next(this.getLoggedUser());
  }
}
