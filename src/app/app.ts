import {Component, effect, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Login} from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Products');
  userDetails = "Ankit";
  // counter: number = 0;
  counter= signal(10);
  inputValue: string = '';

  constructor() {
    effect(() => {
      console.log('Signal received:', this.counter());
    });
  }

  increment() {
    this.counter.set(this.counter() + 1);
  }
  decrement() {
    this.counter.set(this.counter() - 1);
  }
  reset() {
    this.counter.set(0);
  }

  handleInputPress(event: Event) {
    const inputElementValue = (event.target as HTMLInputElement).value;
    console.log(inputElementValue)
    this.inputValue = inputElementValue;
  }

  handleEmailPress(value: string) {
    console.log(value);
  }
}
