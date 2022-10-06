import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TutorApp';
   isRequestsDisabled: string = "";
   isHomeDisabled: string = "disabled active";
   isHome: boolean = true;


   disableHome(){
    this.isRequestsDisabled = "";
    this.isHomeDisabled = "disabled active";
    

   }
   disableReqiests(){
    this.isRequestsDisabled = "disabled active";
    this.isHomeDisabled = "";
  }
}
