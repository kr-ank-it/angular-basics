import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Authservice} from '../services/authservice';
import {UserDetails} from '../interfaces/user';

@Component({
  selector: 'app-signup',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private authService:Authservice) {
  }

  get name() {
    return this.signupForm.get("name");
  }
  get email() {
    return this.signupForm.get("email");
  }
  onSubmit() {
    console.log(this.signupForm.value);
    const user:UserDetails = this.signupForm.value as UserDetails;
    this.authService.signup(user).subscribe({
      next: (response) => {
        console.log('User signed up successfully', response);
      },
      error: (error) => {
        console.error('Error signing up user', error);
      }
    });

  }
}
