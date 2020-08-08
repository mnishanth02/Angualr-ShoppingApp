import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.isFetching = true;
    this.http
      .post<{ name: string, content: string }>(
        'https://angular-complete-guide2020.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        this.isFetching = false;
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.fetchPosts();
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true;
    this.http.get<{ [key: string]: Post }>('https://angular-complete-guide2020.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postarray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postarray.push({ ...responseData[key], id: key });
          }
        }
        return postarray;
      }))
      .subscribe(post => {
        this.isFetching = false;
        this.loadedPosts = post;
      });
  }
}
