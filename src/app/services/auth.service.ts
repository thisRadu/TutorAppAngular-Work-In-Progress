import { useAnimation } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//npm install ngx-cookie-service@14.0.1
import { CookieService } from 'ngx-cookie-service';
//npm install @auth0/angular-jwt
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl='https://localhost:7260/api/Authentication/';
  constructor(private http:HttpClient, private cookie:CookieService){//,private jwtService: JwtHelperService ) {

   }
   setCookie(token: string){
    this.cookie.delete("token");
    this.cookie.set("token", token);

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
    return this.cookie.check("token");
     //return localStorage.getItem('token')!=null;
   }
   getToken(){
    return localStorage.getItem('token')||'';
   }
   haveAccess(){
    // if(this.isLoggedIn() == false) return false;
    //  var loggintoken= this.getCookie();
    //  var token = JSON.parse(loggintoken);
    // // to add methode to check if cookie is expired

    // var userInfo = this.jwtService.decodeToken(token);
    // console.log(userInfo[0]);
    // console.log(userInfo[0]);
    // console.log(userInfo[0]);
return true;
    //  var _extractedtoken=loggintoken.split('.')[1];
    //  var _atobdata=atob(_extractedtoken);
    //  var _finaldata=JSON.parse(_atobdata);
    //  if(_finaldata.role=='admin'){
    //    return true
    //  }else{
    //    alert('you not having access');
    //    return false
    //  }
   }
}