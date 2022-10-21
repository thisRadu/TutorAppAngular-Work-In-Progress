import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
//import { Request, RequestRootObject, RequestRootObjects } from '../models/request';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Request } from '../models/request';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  url = 'https://localhost:7260/';
  now = new Date();
  constructor(private http: HttpClient) {}
  // Get all the requests
  public getRequests(querry?: string) {
    return this.http.get<any>(this.url + 'GetRequests' + '?' + querry);
  }
  // Get a specific request by Id
  public getRequest(id: any) {
    return this.http
      .get<any>(this.url + 'Request/' + id)
      .pipe(map((p) => p['value']));
  }
  postRequest(request: Request) {
    return this.http.post(this.url + 'CreateRequest', request);
  }
}
