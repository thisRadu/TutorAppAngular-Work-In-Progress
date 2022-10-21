import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';  
import { User } from './models/user';
import { CurrentUserService } from './services/current-user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(public authService: AuthService, public currentUser: CurrentUserService){}
  title = 'TutorApp';
   ngOnInit(): void {
   }
logOut(){
  console.log("logout");
this.authService.deleteCookie();
this.authService.logOut();
}

}
