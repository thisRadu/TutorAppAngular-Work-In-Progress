import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserComponent } from '../../users/user/user.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  cmessageclass = ''
  message = ''
  Customerid: any;
  editdata: any;
  responsedata: any;
  errorMessage = "";

  constructor(private service: AuthService,private route:Router) {
    localStorage.clear();
  }
 
  login = new FormGroup({
    userName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    checkPassword: new FormControl("", Validators.required)
  });
 

  ngOnInit(): void {
    console.log(this.service.isLoggedIn());
  }
  proceedReqister() {
    this.errorMessage = "";
    if(this.login.value.password != this.login.value.checkPassword) {this.errorMessage = "Password doesn't match!"; return;}
    if (this.login.valid) {
      const querry = "?userName="+this.login.value.userName + "&password=" +this.login.value.password+"&email=" + this.login.value.email;
      this.service.proceedRegister(querry).subscribe(result => {
        if(result!=null){
          this.responsedata=result;
          if (this.responsedata["statusCode"] != "200")  {
            this.errorMessage = this.responsedata["value"];
            return;};
            
            this.service.proceedLogin(querry).subscribe(result => {
              if(result!=null){
                this.responsedata=result;
                if (this.responsedata["statusCode"] != "200") return;
                console.log(this.responsedata["value"]);
                this.service.setCookie(this.responsedata["value"]);
              
                console.log(this.service.isLoggedIn());
              }
            })
          
         // this.service.setCookie(this.responsedata["value"]);
         // console.log(this.service.isLoggedIn());
         //localStorage.setItem('token',this.responsedata["value"].jwtToken);
          this.route.navigate([''])
        }

      });
    }
  }
}
