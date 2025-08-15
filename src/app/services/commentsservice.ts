import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comments} from '../interfaces/comments';

@Injectable({
  providedIn: 'root'
})
export class Commentsservice {

  private serviceUrl: string;

  constructor(private http:HttpClient) {
    // Initialize any necessary properties or services here
    this.serviceUrl = "https://dummyjson.com/comments";
  }

  getAllComments():Observable<{comments:Comments[]}> {
    return this.http.get<{comments:Comments[]}>(this.serviceUrl);
    // return fetch(this.serviceUrl)
    //   .then(response => response.json())
    //   .catch(error => console.error('Error fetching comments:', error));
  }

}
