import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    FormsModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  username: string = '';
  email: string ='';

  constructor(private router:Router) {
  }


  showProfile() {
    if (this.username.trim() === '' || this.email.trim() === '') {
      alert('Please fill in both fields.');
      return;
    }
    // Navigate to the profile page with the username and email as parameters
    this.router.navigate(['profile'], {queryParams:{name: this.username, email: this.email}});
  }
}
