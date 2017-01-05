"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var post_1 = require('./post');
var PostComponent = (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
        this.calculateDate();
    };
    PostComponent.prototype.calculateDate = function () {
        this.postDate = new Date(this.post.time);
        this.hour = this.postDate.getHours();
        var minute = this.postDate.getMinutes();
        if (minute < 10)
            this.minute = "0" + minute.toString();
        else
            this.minute = minute.toString();
        if (this.hour > 12) {
            this.hour -= 12;
            this.mer = "PM";
        }
        else if (this.hour === 12)
            this.mer = "PM";
        else
            this.mer = "AM";
        this.calculateTimeRemaining();
    };
    PostComponent.prototype.calculateTimeRemaining = function () {
        var currentDate = new Date(this.post.currentdate);
        var diffDate = currentDate.getTime() - this.postDate.getTime();
        var minutes = Math.floor(diffDate / 60000);
        minutes = 1440 - minutes;
        this.hoursLeft = Math.floor(minutes / 60);
        this.minutesLeft = minutes - (this.hoursLeft * 60);
        console.log(this.minutesLeft);
        var hourString = this.hoursLeft.toString();
        var minuteString = '';
        if (this.minutesLeft < 10)
            minuteString = "0" + this.minutesLeft.toString();
        else
            minuteString = this.minutesLeft.toString();
        this.rem = hourString + ":" + minuteString + " remaining";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', post_1.Post)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        core_1.Component({
            selector: 'post',
            template: "\n    <div class=\"panel post\">\n      <div class=\"panel-heading\">\n        {{this.hour}}:{{this.minute}} {{this.mer}}\n        <span class=\"time-left\"> {{rem}} </span>\n      </div>\n      <div class=\"panel-body\">\n        {{post.body}}\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map