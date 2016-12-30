import { Injectable } from '@angular/core';

import { POSTS } from './mock-posts';
import { Post } from './post';

@Injectable()
export class PostService {
  getPosts(): Promise<Post[]>{
    return Promise.resolve(POSTS);
  }
}
