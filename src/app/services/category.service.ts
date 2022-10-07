import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
// import { CategoryRootObject, CategoryRootObjects } from '../models/category';
// import { SubCategoryRootObject, SubCategoryRootObjects } from '../models/subCategory';
// import { UserRootObject, UserRootObjects } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  //id: number = 3;
  auth_token: string = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImp0aSI6ImU1ODAyMjJmLWUxOTItNDc5Ny05NGFlLWI4MzJhMDI4MDNiOCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNjAvYXBpIiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI2MC9hcGkiLCJleHAiOjE2NjUxNTk0MzJ9.T_MYa3Bw40KQNExmOyTWE_AaIsD-5NMVduZrFwU8EyWIARMzGYulZUfjZZDvh107xIneWpKGL9XcFF5MngyVuw';
  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    'Referrer-Policy': 'no-referrer',
    //'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
    'Authorization': `Bearer ${this.auth_token}`
  } )
   // Get all the requests
  public getCategories(){
  
     return this.http.get<any>('https://localhost:7260/api/Admin/Categories', {headers: this.headers} )
  }
  // Get a specific request by Id
  public getCategory(id:any){
    return this.http.get<any>( 'https://localhost:7260/api/Admin/Category/' + id, {headers: this.headers})
  .pipe(map(p => p["value"]));
}

  public getSubCategories(){
    return this.http.get<any>('https://localhost:7260/api/Admin/subCategories', {headers: this.headers} )
 }
 // Get a specific request by Id
 public getSubCategory(id:any){
   return this.http.get<any>( 'https://localhost:7260/api/Admin/subCategory/' + id, {headers: this.headers})
 .pipe(map(p => p["value"]));


  }
}
