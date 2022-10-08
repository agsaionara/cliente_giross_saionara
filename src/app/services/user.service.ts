import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs'

import {User} from '../interfaces/User'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL: string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{
   return this.http.get<User[]>(`${this.BASE_URL}/users`);
  }

  getUser(id: string): Observable<User>{
    return this.http.get<User>(`${this.BASE_URL}/users/${id}`);
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.BASE_URL}/users/create`, user)   
  }

  deleteUser(id: string): Observable<User>{
    return this.http.delete<User>(`${this.BASE_URL}/users/${id}`);
  }
  
  updateUser(id: string, user: User): Observable<User>{
    return this.http.patch<User>(`${this.BASE_URL}/users/${id}`, user);
  }
    
}
