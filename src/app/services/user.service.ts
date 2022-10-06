import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UserRootObject, UserRootObjects } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //id: number = 3;
  auth_token: string = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImp0aSI6Ijg3Yzg0ZDkzLTAxZmQtNGE3MC1hYzVkLTI1YzQxYjE4NDliYSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNjAvYXBpIiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI2MC9hcGkiLCJleHAiOjE2NjQ4MDAwNzZ9.FXMGrK5ccSMXvT4T3pMNd0RKUEw02XqPdL9HBelCYu8dPAF8_bzGBMZ1f6JhIl2YWO4nQ3FdjZWj_pnS47cDqg';
  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    'Referrer-Policy': 'no-referrer',
    //'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
    'Authorization': `Bearer ${this.auth_token}`
  } )
   // Get all the requests
  public getRequests(){
     return this.http.get<UserRootObjects>('https://localhost:7260/api/Admin/Users', {headers: this.headers} )
  }
  // Get a specific request by Id
  public getRequest(id:any){
    return this.http.get<UserRootObject>( 'https://localhost:7260/api/Admin/Users/' + id, {headers: this.headers})
  .pipe(map((p: UserRootObject) => p.value));

  }
}
