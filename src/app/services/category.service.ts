import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
// import { CategoryRootObject, CategoryRootObjects } from '../models/category';
// import { SubCategoryRootObject, SubCategoryRootObjects } from '../models/subCategory';
// import { UserRootObject, UserRootObjects } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  //auth_token: string = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMTIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImp0aSI6ImM1MWFmNDFiLTlhMzQtNGY5ZS1hMWQ3LTM4ODU2ZmVhNGMyZiIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNjAvYXBpIiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI2MC9hcGkiLCJleHAiOjE2NjUzMTAwOTF9.haFHrinJ2rKQApttryEWBFQgdLkf6Jot8vNau8mYj79lKneuBVGJ25qPqgXFhHxc9GUOS7ePCPvVMl1EKdtGww';
  constructor(private http: HttpClient) {}
  // headers: HttpHeaders = new HttpHeaders({
  //   'Referrer-Policy': 'no-referrer',
  //   'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
  //   'Authorization': `Bearer ${this.auth_token}`
  // } )
  // Get all the categories
  public getCategories() {
    //https://45.141.37.199:5001
    //https://localhost:7260
    return this.http.get<any>('https://localhost:7260/api/Admin/Categories'); //, {headers: this.headers} )
  }
  // Get a specific category by Id
  public getCategory(id: any) {
    return this.http
      .get<any>('https://localhost:7260/api/Admin/Category/' + id)
      .pipe(map((p) => p['value']));
  }
  // Get all the sub-categories
  public getSubCategories() {
    return this.http.get<any>('https://localhost:7260/api/Admin/subCategories');
  }
  // Get a specific sub-category by Id
  public getSubCategory(id: any) {
    return this.http
      .get<any>('https://localhost:7260/api/Admin/subCategory/' + id)
      .pipe(map((p) => p['value']));
  }
}
