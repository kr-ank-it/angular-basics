import {Component, effect, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Login} from './login/login';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Products');
  userDetails = "Ankit";
  // counter: number = 0;
  counter= signal(10);
  inputValue: string = '';
  taskName: string = '';
  taskList: {id:number, name:string}[]=[];

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


  createTask() {
    if(this.taskName.trim() === '') {
      return;
    }
    const newTask = {
      id: this.taskList.length + 1,
      name: this.taskName
    };
    this.taskList.push(newTask);
    this.taskName = ''; // Clear the input field after adding the task
  }

  removeTask(taskId: number) {
    this.taskList = this.taskList.filter(task => task.id !== taskId);

  }

}
