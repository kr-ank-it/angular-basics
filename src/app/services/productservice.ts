import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Productservice {
  private serviceUrl: string;

  constructor(private http: HttpClient) {
    // Initialize any necessary properties or services here
    this.serviceUrl = "https://dummyjson.com/products";
  }

  getAllProducts(){
    return this.http.get(this.serviceUrl);
  }
}
