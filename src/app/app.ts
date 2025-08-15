import {Component, effect, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Login} from './login/login';
import {FormsModule} from '@angular/forms';
import {HomeToolbar} from './home-toolbar/home-toolbar';
import {Home} from './home/home';
import {UserDetails} from './user-details/user-details';
import {User} from './user/user';
import {Posts} from './posts/posts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, FormsModule, RouterOutlet, RouterLink, HomeToolbar, Home, UserDetails, User, Posts],
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
  username: string='';
  useremail: string='';
  posts: any[] = [];

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

  handleSubmit(username: string, useremail: string) {
    this.username= username;
    this.useremail= useremail;
  }

  getPosts(posts: any){
    // console.log(posts);
    this.posts = posts;
  }
}
