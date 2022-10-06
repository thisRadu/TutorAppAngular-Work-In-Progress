import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Request, RequestRootObject, RequestRootObjects } from '../models/request';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

   // Get all the requests
  public getRequests(){
     return this.http.get<RequestRootObjects>('https://localhost:7260/GetRequests');
   }
  // Get a specific request by Id
  public getRequest(id:any){
    return this.http.get<RequestRootObject>('https://localhost:7260/Request/' + id)
  .pipe(map((p: RequestRootObject) => p.value));

  }


}
