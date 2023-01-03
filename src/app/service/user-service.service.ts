import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseURL = "http://localhost:9090/api/"
  constructor(private http:HttpClient) { }
   private _currentUser : User | undefined;
  getUsers(user: User) : Observable<User>{
  return this.http.post<User>(this.baseURL + "login", user).pipe(
    map(
      response => response
    )
  )
  }

  get currentUser(): any {
    return this._currentUser;
  }

  set currentUser(value: any) {
    this._currentUser = value;
  }

  saveUsers(user: User) : Observable<User>{
    return this.http.post<User>(this.baseURL + "users", user).pipe(
      map(
        response => response
      )
    )
  }
}
