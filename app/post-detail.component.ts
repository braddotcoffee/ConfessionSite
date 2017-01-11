import { Component      }  from  '@angular/core';
import { OnInit         }  from  '@angular/core';
import { Input          }  from  '@angular/core';
import { ActivatedRoute }  from  '@angular/router';
import { Params         }  from  '@angular/router';
import { Location       }  from  '@angular/common';

import { Post           }  from  './post';
import { PostService    }  from  './post.service';
import { PostComponent  }  from  './post.component';

import 'rxjs/add/operator/switchMap';

@Component({
  selector:'detail',
  providers: [ PostService ],
  template: `
  <ul class="postsList">
    <li *ngIf="this.post">
      <post [post]="this.post"></post>
    </li>
  </ul>
  `
})

export class PostDetailComponent implements OnInit {
  post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location
  ) {  } // Inject PostService

  // Get Posts on Init //
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.postService.getPostById(params["pid"]))
      .subscribe(posts => this.post = posts[0]);
  }
}
