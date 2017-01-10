import { Component     }  from  '@angular/core';
import { OnInit        }  from  '@angular/core';

import { Post          }  from  './post';
import { PostService   }  from  './post.service';
import { PostComponent }  from  './post.component';

@Component({
  selector:'top',
  providers: [ PostService ],
  template: `
  <ul class="postsList">
    <li *ngFor='let post of posts'>
      <post *ngIf="post.pid" [post]="post"></post>
    </li>
  </ul>
  `
})

export class TopComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService){  } // Inject PostService

  // Get Posts on Init //
  ngOnInit(): void {
    this.getPosts();
  }

  // Get Posts from PostService //
  getPosts(): void {
    this.postService.getTopPosts().then(posts => this.posts = posts);
  }
}
