import { useAnimation } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//npm install ngx-cookie-service@14.0.1
import { CookieService } from 'ngx-cookie-service';
//npm install @auth0/angular-jwt
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string = "";
  apiurl='https://localhost:7260/api/Authentication/';
  private _isLogged$ = new BehaviorSubject<boolean>(false);
  private _loggedUser$ = new BehaviorSubject<string>('');
  isLogged$ = this._isLogged$.asObservable();
  loggedUser$ = this._loggedUser$.asObservable().subscribe(value=> this.userLogged = value);
  userLogged: string = '';
  constructor(private http:HttpClient, private cookie:CookieService){//,private jwtService: JwtHelperService ) {}

    this._isLogged$.next(!!this.isLoggedIn());
    this._loggedUser$.next(this.getLoggedUser());
  } 
   deleteCookie(){
    this.cookie.delete("token");
   }
   setCookie(token: string){
    this.cookie.delete("token");
    this.cookie.set("token", token);
    this._isLogged$.next(true);
    this._loggedUser$.next(this.getLoggedUser());

   }
   getCookie(){
    
    return this.cookie.get("token");
    
   }
   proceedLogin(UserCred:any){
    console.log(UserCred);
     return this.http.post(this.apiurl + "Login" + UserCred, null);
   }

   proceedRegister(UserCred:any){
    return this.http.post(this.apiurl + "Register" + UserCred, null);
   }
   isLoggedIn(): boolean{
    console.log("check is log in: "+this.cookie.check("token") );
    return this.cookie.check("token");
    console.log("check is log in: " )
     //return localStorage.getItem('token')!=null;
   }
   logOut(){
    this._isLogged$.next(false);
   }
   getToken(){
    return localStorage.getItem('token')||'';
   }
   getLoggedUser():string{
    if(this.isLoggedIn() == false) return '';
    var loggintoken= this.getCookie();

   var _extractedtoken=loggintoken.split('.')[1];
   var _atobdata=window.atob(_extractedtoken);
   var _finaldata=JSON.parse(_atobdata);
   
   return _finaldata['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

   }
   haveAccess(){
    if(this.isLoggedIn() == false) return  false;
      var loggintoken= this.getCookie();

     var _extractedtoken=loggintoken.split('.')[1];
     var _atobdata=window.atob(_extractedtoken);
     var _finaldata=JSON.parse(_atobdata);
      
     if(_finaldata['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']=='Admin'){
       return true
     }else{
       alert('no access');
     
       return false
     }
   }
}