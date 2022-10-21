import { useAnimation } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//npm install ngx-cookie-service@14.0.1
import { CookieService } from 'ngx-cookie-service';
//npm install @auth0/angular-jwt
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';
import { BehaviorSubject, map } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl: string = '';
  apiurl = 'https://localhost:7260/api/Authentication/';
  private _isLogged$ = new BehaviorSubject<boolean>(false);
  isLogged$ = this._isLogged$.asObservable();

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private userService: UserService
  ) {
    console.log('Auth Logged service works!');
    this._isLogged$.next(!!this.isLoggedIn());
  }
  deleteCookie() {
    this.cookie.delete('token');
  }

  setCookie(token: string) {
    this.cookie.delete('token');
    this.cookie.set('token', token);
    this._isLogged$.next(true);
  }
  getCookie() {
    return this.cookie.get('token');
  }
  proceedLogin(UserCred: any) {
    console.log(UserCred);
    return this.http.post(this.apiurl + 'Login' + UserCred, null);
  }

  proceedRegister(UserCred: any) {
    return this.http.post(this.apiurl + 'Register' + UserCred, null);
  }
  isLoggedIn(): boolean {
    console.log('check is log in: ' + this.cookie.check('token'));
    return this.cookie.check('token');
  }
  logOut() {
    this._isLogged$.next(false);
  }
  getToken() {
    return localStorage.getItem('token') || '';
  }

  haveAccess() {
    if (this.isLoggedIn() == false) return false;
    var loggintoken = this.getCookie();

    var _extractedtoken = loggintoken.split('.')[1];
    var _atobdata = window.atob(_extractedtoken);
    var _finaldata = JSON.parse(_atobdata);

    if (
      _finaldata[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ] == 'Admin'
    ) {
      return true;
    } else {
      alert('no access');

      return false;
    }
  }
}
