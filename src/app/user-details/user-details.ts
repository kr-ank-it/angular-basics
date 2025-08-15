import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails {

    name= ''
    email= ''
    id=null
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit() {
      let params = this.route.snapshot.params;
    this.name = params['name'];
    this.email = params['email'];
    this.id = params['id'];
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['name'];
    //     this.email= params['email'];
    //     this.id= params['id'];
    // });
  }
}
