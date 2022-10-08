import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
//import { UserRootObject, UserRootObjects } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //id: number = 3;
 // auth_token: string = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImp0aSI6ImVmYmJlOGU2LTNkZGUtNDg5OS04YWExLTNmZDhmZTZiNzU3ZCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNjAvYXBpIiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI2MC9hcGkiLCJleHAiOjE2NjUxNzM3NDZ9.0xndqA7nwh4ssa8zuWwNNO2LcWesSneEaI2SnH5nOa4InYgesHCL0rf0DuEVUHxiK9TV_Fpw7qLL-p7wxJJlVA";
  constructor(private http: HttpClient) { }
  // headers: HttpHeaders = new HttpHeaders({
  //   'Referrer-Policy': 'no-referrer',
  //   //'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
  //   'Authorization': `Bearer ${this.auth_token}`
  // } )
   // Get all the users
  public getUsers(){
     return this.http.get<any>('https://localhost:7260/api/Admin/Users')//, {headers: this.headers} )
  }
  // Get a specific user by Id
  public getUser(id:any){
    return this.http.get<any>( 'https://localhost:7260/api/Admin/Users/' + id)
  .pipe(map(p => p["value"]));

  }
}
