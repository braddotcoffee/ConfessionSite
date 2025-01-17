import { Component      }  from  '@angular/core';
import { OnInit         }  from  '@angular/core';
import { MasonryOptions }  from  'angular2-masonry';

import { Post           }  from  './post';
import { PostService    }  from  './post.service';
import { PostComponent  }  from  './post.component';

import { Options        }  from  './masonry.options';

@Component({
  selector: 'browse',
  providers: [ PostService ],
  template: `
  <masonry [options]="options">
    <div class="grid-sizer"></div>
    <div *ngFor="let post of posts">
      <masonry-brick *ngIf="post.pid">
        <post class="brick" [post]="post"></post>
      </masonry-brick>
    </div>
  </masonry>
  `
})

export class BrowseComponent implements OnInit {
  posts: Post[];
  options: MasonryOptions;
  columns: string;

  constructor(private postService: PostService){  } // Inject PostService

  // Get Posts on Init //
  ngOnInit(): void {
    this.options = Options;
    this.getPosts();
  }

  // Get Posts from PostService //
  getPosts(): void {
    this.postService.getBrowsePosts().then(posts => this.posts = posts);
  }
}
