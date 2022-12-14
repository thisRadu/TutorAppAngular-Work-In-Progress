import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private service:AuthService,private route:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let url: string = state.url;
    this.service.redirectUrl = url;
    if(this.service.isLoggedIn()) return true;
    this.route.navigate(['login'])
    return false;
  }

}
