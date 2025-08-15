import { Component } from '@angular/core';
import {Productservice} from '../services/productservice';
import {CurrencyPipe} from '@angular/common';
import {Commentsservice} from '../services/commentsservice';
import {Comments} from '../interfaces/comments';

@Component({
  selector: 'app-products',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  comments:Comments[]=[];
  products:any;
  constructor(private productService: Productservice,
              private commentsService:Commentsservice) {
  }
  ngOnInit() {
    this.productService.getAllProducts().subscribe((response:any)=>{
      // console.log(response.products);
      this.products = response.products || []; // Ensure products is an array
    });

    this.commentsService.getAllComments().subscribe((response:{comments:Comments[]})=> {
      this.comments = response.comments;
      // You can process the comments here if needed
      // For example, you might want to store them in a property
      // this.comments = response.comments || [];
    });

  }
}
