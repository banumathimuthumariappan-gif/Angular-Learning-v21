import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post.model';

@Injectable({
  providedIn: 'root',
})
export class Posts {
  private http = inject(HttpClient);
  private url = 'https://jsonplaceholder.typicode.com/posts';

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
}
