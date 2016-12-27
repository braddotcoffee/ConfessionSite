import { Injectable } from '@angular/core';

import { POSTS } from './mock-posts';

@Injectable()
export class PostService {
  getPosts(): Promise<string[]>{
    return Promise.resolve(POSTS);
  }
}
