import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  url = '';
  cmessageclass = ''
  message = ''
  Customerid: any;
  editdata: any;
  responsedata: any;

  constructor(private service: AuthService,private route:Router) {
    localStorage.clear();
  }
  login = new FormGroup({
    userName: new FormControl(localStorage.getItem('username'), Validators.required),
    password: new FormControl("", Validators.required),
    rememberMe: new FormControl("")

  });
 

  ngOnInit(): void {
    console.log(this.service.isLoggedIn());
  }
  proceedLogin() {
    
    if (this.login.valid) {
      console.log("remember me: " +this.login.value.rememberMe )
      const querry = "?userName="+this.login.value.userName + "&password=" +this.login.value.password ;
      this.service.proceedLogin(querry).subscribe(result => {
        if(result!=null){
          this.responsedata=result;
          if (this.responsedata["statusCode"] != "200") return;
       
          this.service.setCookie(this.responsedata["value"]);
          if(this.login.value.rememberMe){
            var localUser: any = this.login.value.userName;
            localStorage.setItem('username', localUser)
          }
         
         //localStorage.setItem('token',this.responsedata["value"].jwtToken);
          this.route.navigate([this.service.redirectUrl])
        }

      });
    }
  }

}
