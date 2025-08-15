import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {

  @Output() fetchPosts = new EventEmitter<unknown>();

  posts = [
    { id: 1, title: 'Post 1', content: 'Content of Post 1' },
    { id: 2, title: 'Post 2', content: 'Content of Post 2' },
    { id: 3, title: 'Post 3', content: 'Content of Post 3' },
    { id: 4, title: 'Post 4', content: 'Content of Post 4' },
    { id: 5, title: 'Post 5', content: 'Content of Post 5' },
    { id: 6, title: 'Post 6', content: 'Content of Post 6' },
    { id: 7, title: 'Post 7', content: 'Content of Post 7' },
    { id: 8, title: 'Post 8', content: 'Content of Post 8' },
    { id: 9, title: 'Post 9', content: 'Content of Post 9' },
    { id: 10, title: 'Post 10', content: 'Content of Post 10' }
  ];

  ngOnInit() {
    this.fetchPosts.emit(this.posts);
  }
}
