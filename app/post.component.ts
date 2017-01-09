import { Component , Input, OnInit } from '@angular/core';

import { Post        }  from  './post';
import { LikeService }  from  './like.service';

@Component({
  selector: 'post',
  providers: [ LikeService ],
  template: `
    <div class="panel post">
      <div class="panel-heading">
        {{this.hour}}:{{this.minute}} {{this.mer}}
        <span class="time-left"> {{rem}} </span>
      </div>
      <div class="panel-body">
        {{post.body}}
      </div>
      <div class="divider"></div>
      <div class="panel-footer">
        <button class="{{this.liked}}" (click)="handleLike()">
          {{this.liked}}
        </button>
      </div>
    </div>
  `
})

export class PostComponent implements OnInit{
  @Input()
  post: Post;

  rem: string;
  hour: number;
  minute: string;
  mer: string;
  postDate: Date;
  hoursLeft: number;
  minutesLeft: number;
  liked: string;

  constructor(private likeService: LikeService){  }

  ngOnInit(): void {
    var likedPosts = JSON.parse(localStorage.getItem("likedPosts"));

    if (likedPosts === null)
      likedPosts = []
    if(likedPosts.indexOf(this.post.pid) === -1)
      this.liked = "Like";
    else
      this.liked = "Liked";

    this.calculateDate();
  }

  calculateDate(): void {
    this.postDate = new Date(this.post.time); 
    this.hour = this.postDate.getHours();
    var minute = this.postDate.getMinutes();
    if(minute < 10)
      this.minute = "0" + minute.toString();
    else
      this.minute = minute.toString();

    if(this.hour > 12){
      this.hour -= 12;
      this.mer = "PM";
    }
    else if (this.hour === 12)
      this.mer = "PM";
    else
      this.mer = "AM";

    this.calculateTimeRemaining();
  }

  calculateTimeRemaining(): void {
    var currentDate = new Date(this.post.currentdate);
    var diffDate: number = currentDate.getTime() - this.postDate.getTime();

    var minutes: number = Math.floor(diffDate / 60000);
    minutes = 1440 - minutes;
    this.hoursLeft = Math.floor(minutes/60);
    this.minutesLeft = minutes - (this.hoursLeft * 60);
    console.log(this.minutesLeft);

    var hourString = this.hoursLeft.toString();
    var minuteString = '';
    if (this.minutesLeft < 10)
      minuteString = "0" + this.minutesLeft.toString();
    else
      minuteString = this.minutesLeft.toString();

    this.rem = hourString + ":" + minuteString + " remaining";
  }

  handleLike(): void {
    var pid = this.post.pid;
    var likedPosts = JSON.parse(localStorage.getItem("likedPosts"));

    if (likedPosts === null)
      likedPosts = [];

    var index = likedPosts.indexOf(pid);
    if(index === -1){
      this.liked = "Liked";

      likedPosts.push(pid);
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
      
      this.likeService.likePost(pid);
    }  
    else {
      this.liked = "Like";

      likedPosts.splice(index,1);
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));

      this.likeService.unlikePost(pid);
    }
  }
}
