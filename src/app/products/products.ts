import { Component } from '@angular/core';
import {Productservice} from '../services/productservice';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {Commentsservice} from '../services/commentsservice';
import {Comments} from '../interfaces/comments';
import {Product} from '../interfaces/Product';

@Component({
  selector: 'app-products',
  imports: [
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  comments:Comments[]=[];
  products:Product[] = [];
  constructor(private productService: Productservice,
              private commentsService:Commentsservice) {
  }
  ngOnInit() {
    this.productService.getAllProducts().subscribe((response:Product[])=>{
      // console.log(response.products);
      this.products = response || []; // Ensure products is an array
    });

    this.commentsService.getAllComments().subscribe((response:{comments:Comments[]})=> {
      this.comments = response.comments;
      // You can process the comments here if needed
      // For example, you might want to store them in a property
      // this.comments = response.comments || [];
    });

  }
}
