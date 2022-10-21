import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
//import { UserRootObject, UserRootObjects } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Get all the users
  public getUsers() {
    return this.http.get<any>('https://localhost:7260/api/Admin/Users');
  }
  // Get a specific user by Id
  public getUser(id: number) {
    return this.http
      .get<any>('https://localhost:7260/api/Admin/Users/' + id)
      .pipe(map((p) => p['value']));
  }
}
