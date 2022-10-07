import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request';
import { Observable } from 'rxjs/internal/Observable';
import { RequestsService } from 'src/app/services/requests.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})

export class RequestComponent implements OnInit {
  id?: number;
  private sub: any;
  requestById: Request = {};
  constructor(private requestService:RequestsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.getById();

  })
}
ngOnDestroy() {
  this.sub.unsubscribe();
}

  getById(){
    
    this.requestService.getRequest(this.id).subscribe((r:Request)=> this.requestById = r);
  }

}
