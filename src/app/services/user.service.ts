// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080'; // Replace with your Spring Boot backend URL

  constructor(private http: HttpClient) {}

  back:string;

  ngOnInite(){
    return this.http.get(`${this.baseUrl}/message`, );
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, user);
  }
  loginUser(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, user);
  }
}
