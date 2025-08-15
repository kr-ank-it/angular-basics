import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  onSubmit(value: NgForm) {
    // Here you can handle the form submission, e.g., send the data to a server
    console.log('Form submitted:', value);

  }
}
