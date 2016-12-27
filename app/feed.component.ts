import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { PostService } from './post.service';

@Component({
  selector:'feed',
  providers: [ PostService ],
  template: `
  <h1>TEST MOFO!</h1>
  <ul class="postsList">
    <li *ngFor='let post of posts'>
      <div class="postDiv">
        {{post}}
      </div>
    </li>
  </ul>
  `
})

export class FeedComponent implements OnInit {
  posts: string[];

  constructor(private postService: PostService){  } // Inject PostService

  // Get Posts on Init //
  ngOnInit(): void {
    this.getPosts();
  }

  // Get Posts from PostService //
  getPosts(): void {
    this.postService.getPosts().then(posts => this.posts = posts);
  }
}
