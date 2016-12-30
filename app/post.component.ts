import { Component , Input } from '@angular/core';

import { Post } from './post';

@Component({
  selector: 'post',
  template: `
   <div class="panel post">
    <div class="panel-heading">
      {{post.hour}}:{{post.minute}} {{post.mer}}
    </div>
    <div class="panel-body">
      {{post.body}}
    </div>
  </div>
  `
})

export class PostComponent {
  @Input()
  post: Post;
}
