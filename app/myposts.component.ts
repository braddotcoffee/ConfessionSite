import { Component     }  from  '@angular/core';
import { OnInit        }  from  '@angular/core';

import { Post          }  from  './post';
import { PostService   }  from  './post.service';
import { PostComponent }  from  './post.component';

@Component({
  selector:'myposts',
  providers: [ PostService ],
  template: `
  <ul class="postsList">
    <li *ngFor='let post of posts'>
      <post [post]="post"></post>
    </li>
  </ul>
  `
})

export class MyPostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService){  } // Inject PostService

  // Get Posts on Init //
  ngOnInit(): void {
    this.getPosts();
  }

  // Get Posts from PostService //
  getPosts(): void {
    this.postService.getMyPosts().then(posts => this.posts = posts);
  }
}
