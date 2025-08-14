import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  username: string | null = '';
  email: string | null = '';
  constructor(private router:ActivatedRoute){}

  ngOnInit() {
    // Simulate fetching user data from a service or API
    // let response = this.router.snapshot.paramMap;
    // // console.log(response);
    // this.username = response.get('name');
    // this.email =response.get('email');

    // Routing using query parameters
    let params = this.router.queryParams.subscribe(params =>{
      console.log(params);
      this.username = params['name'] || '';
      this.email = params['email'] || '';
      // console.log('Email:', this.email);
    });

  }
}
