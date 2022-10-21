import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Request } from 'src/app/models/request';
import { AuthService } from 'src/app/services/auth.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.css']
})

export class PostRequestComponent implements OnInit {
  request: Request = {} as Request;
  //  TO ADD IMG 
  //imgs:string[] = [];
 // imgs = this.request.details.split(',');
 responsedata:any;
 now = new Date();
  newRequest = new FormGroup({
    title: new FormControl("", Validators.required),
    categoryId: new FormControl("", Validators.required),
    details: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    dificulty: new FormControl("", Validators.required)
  });
 

  constructor(private requestService:RequestsService, private route: Router, private authService: AuthService, public currentUser: CurrentUserService){}

  ngOnInit(): void {
  }

  proceedPost(){
     
    //if(this.newRequest != null || this.newRequest != undefined ){
    
    this.request.requestorId = this.currentUser.userLogged.id;
    this.request.tutorId = 0;
    this.request.title = this.newRequest.value.title?.toString();
    this.request.categoryId = Number(this.newRequest.value.categoryId);
    this.request.subCategoryId = 0;
    this.request.details = this.newRequest.value.details?.toString();
    this.request.price = Number(this.newRequest.value.price);
    this.request.dificulty = Number(this.newRequest.value.dificulty);
    this.request.publishDate = this.now;
    this.request.deleted = false;
    this.requestService.postRequest(this.request).subscribe(result=> {

      if (result != null) {
        this.responsedata = result;
        if (this.responsedata['statusCode'] != '200') return;

        this.route.navigate(['']);

    }})

  
  }
}

