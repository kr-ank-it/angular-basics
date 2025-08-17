import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class Productservice {
  private serviceUrl: string;

  constructor(private http: HttpClient) {
    // Initialize any necessary properties or services here
    this.serviceUrl = "http://localhost:8080/products/";
  }

  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.serviceUrl);
  }
}
