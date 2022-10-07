
import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request';
import { Observable } from 'rxjs/internal/Observable';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})

export class RequestsComponent implements OnInit {
  requests: Request[] = [];
  constructor(private requestService:RequestsService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
  this.requestService
      .getRequests()
      .subscribe(r=> this.requests = r["value"]);
      console.log("requests " );
      console.log(+this.requests);
  }

}

