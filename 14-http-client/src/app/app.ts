import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post } from './models/Post.model';
import { Posts } from './services/posts';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('14-http-client');
  private postService = inject(Posts);

  posts: Post[] = [];

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe({
      next: (data: any) => {
        this.posts = data;
        this.posts = this.posts.slice(0, 10);
        console.log(this.posts);
      }
    });
  }
}
