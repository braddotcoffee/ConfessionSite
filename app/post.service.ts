import { Injectable    }  from  '@angular/core';
import { Headers, Http }  from  '@angular/http';

import { POSTS         }  from  './mock-posts';
import { Post          }  from  './post';

import  'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
  newPosts = "/newPosts";

  constructor(private http: Http){  }

  getPosts(): Promise<Post[]>{
    return this.http.get(this.newPosts)
            .toPromise()
            .then(response => response.json() as Post[])
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error("An error has occurred retrieving posts");
    return Promise.reject(error.message || error);
  }
}
