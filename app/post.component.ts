import { Component , Input, OnInit } from '@angular/core';

import { Post        }  from  './post';
import { LikeService }  from  './like.service';

declare var bootbox: any;
declare var $: any;

@Component({
  selector: 'post',
  providers: [ LikeService ],
  template: `
    <div class="panel post {{this.hidden}}">
      <div class="panel-heading">
        {{this.hour}}:{{this.minute}} {{this.mer}}
        <span class="time-left"> {{rem}} </span>
      </div>
      <div class="panel-body">
        {{post.body}}
      </div>
      <div class="divider"></div>
      <div class="panel-footer">
        <button class="clipboard" (click)="clipboard()">
          <i class="fa fa-share-alt" aria-hidden="true"></i>
        </button>
        <button class="like" (click)="handleLike()">
          <i class="fa {{this.liked}}" aria-hidden="true"></i>
        </button>
        <button class="inappropriate" (click)="inappropriate()">
          <i class="fa fa-times" aria-hidden="true"></i>
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
  hidden: string;

  constructor(private likeService: LikeService){  }

  ngOnInit(): void {
    this.hidden = "";
    var likedPosts = JSON.parse(localStorage.getItem("likedPosts"));

    if (likedPosts === null)
      likedPosts = []
    if(likedPosts.indexOf(this.post.pid) === -1)
      this.liked = "fa-heart-o";
    else
      this.liked = "fa-heart";

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
      this.liked = "fa-heart";

      likedPosts.push(pid);
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));

      this.likeService.likePost(pid);
    }  
    else {
      this.liked = "fa-heart-o";

      likedPosts.splice(index,1);
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));

      this.likeService.unlikePost(pid);
    }
  }

  inappropriate(): void {
    bootbox.confirm("Are you sure you want to mark this post as inappropriate?", (result: boolean)=>{
      if(result === true){
        this.likeService.unlikePost(this.post.pid);
        var hidden = JSON.parse(localStorage.getItem("hidden"));

        if (hidden === null)
          hidden = [];

        hidden.push(this.post.pid);
        localStorage.setItem("hidden", JSON.stringify(hidden));

        this.post.pid = null;
      }

    }); 
  }

  clipboard(): void {
    bootbox.dialog({
      title: "Direct Link to Post!",
      message: "<form class='bootbox-form' onsubmit='return false'><input type='text' id='directLink' class='bootbox-input bootbox-input-text form-control' value='www.tempfession.com/post/"+this.post.pid+"'></form>",
      closeButton: true,
      onEscape: true,
      buttons: {
        ok: {
          label: "Done",
          className: "btn-primary",
          callback: function(){ return; }
        }
      },
      callback: function(result:string){ return; }
    })

    $(".modal").on("shown.bs.modal", function(){
      console.log("HERE");
      $("#directLink").select();
    });
  }
}
