import { JsonpInterceptor } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request';
import { Observable } from 'rxjs/internal/Observable';
import { RequestsService } from 'src/app/services/requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
})
export class RequestsComponent implements OnInit {

  querry: string = '';
  noRequestsFound = false;
  requests: Request[] = [];
  dificulty: string = '';

  private sub: any;
  constructor(
    private requestService: RequestsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }


  ngOnInit(): void {
   
    this.querry = this.router.url.split('?')[1];
    this.get();
  }

  get() {
    this.requestService.getRequests(this.querry).subscribe((r) => {
      if (r['statusCode'] == '204') this.noRequestsFound = true;
      else {
        this.noRequestsFound = false;
        this.requests = r['value'];
      }
    });
    console.log('requests ');
    console.log(+this.requests);
  }
}
