import { Injectable     }  from  '@angular/core';
import { Headers, Http  }  from  '@angular/http';
import { RequestOptions }  from  '@angular/http';

import { POSTS          }  from  './mock-posts';
import { Post           }  from  './post';

import  'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
  browsePosts = "/browsePosts";
  newPosts    = "/newPosts";
  topPosts    = "/topPosts";
  myPosts     = "/myPosts";

  constructor(private http: Http){  }

  getBrowsePosts(): Promise<Post[]>{
    return this.http.get(this.browsePosts)
    .toPromise()
    .then(response => response.json() as Post[])
    .catch(this.handleError);
  }

  getNewPosts(): Promise<Post[]>{
    return this.http.get(this.newPosts)
    .toPromise()
    .then(response => response.json() as Post[])
    .catch(this.handleError);
  }

  getTopPosts(): Promise<Post[]>{
    return this.http.get(this.topPosts)
    .toPromise()
    .then(response => response.json() as Post[])
    .catch(this.handleError);
  }

  getMyPosts(): Promise<Post[]>{
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.myPosts, {"uid": localStorage.getItem("UID")}, options)
    .toPromise()
    .then(response => response.json() as Post[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error("An error has occurred retrieving posts");
    return Promise.reject(error.message || error);
  }
}
