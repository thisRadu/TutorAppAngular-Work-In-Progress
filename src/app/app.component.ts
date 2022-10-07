import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private authService: AuthService){}
  title = 'TutorApp';
   isLoggedIn:boolean = false;
   isRequestsDisabled: string = "";
   isHomeDisabled: string = "disabled active";
   isHome: boolean = true;
   ngOnInit(): void {
    this.checkIsLoggedIn();
   }

 checkIsLoggedIn(){

this.isLoggedIn = this.authService.isLoggedIn();
console.log(this.isLoggedIn);
console.log(" has acces?: "+ this.authService.haveAccess());
 }
}
