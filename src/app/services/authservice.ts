import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDetails} from '../interfaces/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Authservice {

  constructor(private http:HttpClient) {
  }
  signup(user: UserDetails):Observable<UserDetails> {
    return this.http.post<UserDetails>('http://localhost:8090/auth/signup', user);
  }

}
