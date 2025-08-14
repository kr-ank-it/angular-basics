import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-users-list',
  imports: [
    RouterLink
  ],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList {

  users = [
    { id: 1, name: 'Ankit', email: 'ank@gmail.com' },
    { id: 2, name: 'John', email: 'john@test.com' },
    { id: 3, name: 'Jane', email: 'jane@test.com'},
    { id: 4, name: 'Doe', email: 'doe@another.com'},
    { id: 5, name: 'Alice', email: 'alice@google.com' }
  ];

  constructor(private router:Router) { }

  ngOnInit() {

  }

}
