import { Injectable      }  from  '@angular/core';
import { Headers, Http   }  from  '@angular/http';
import { RequestOptions  }  from  '@angular/http';
import { Observable      }  from  'rxjs/Observable';

import "rxjs/add/operator/map";

@Injectable()
export class LikeService {
  likePostURL   = "/likePost";
  unlikePostURL = "/unlikePost";
  deletePostURL = "/deletePost";
  res: any;

  constructor(private http: Http){  }

  likePost(pid: string): void {
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers});

    this.http.post(this.likePostURL, {"pid": pid}, options).subscribe(val => this.res = val);
  }

  unlikePost(pid: string): void {
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers});

    this.http.post(this.unlikePostURL, {"pid": pid}, options).subscribe(val => this.res = val);
  }

  deletePost(pid: string): void {
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers});

    this.http.post(this.deletePostURL, {"pid": pid}, options).subscribe(val => this.res = val);
  }

}
