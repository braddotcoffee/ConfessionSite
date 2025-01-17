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
var like_service_1 = require('./like.service');
var PersonalPostComponent = (function () {
    function PersonalPostComponent(likeService) {
        this.likeService = likeService;
    }
    PersonalPostComponent.prototype.ngOnInit = function () {
        var likedPosts = JSON.parse(localStorage.getItem("likedPosts"));
        if (likedPosts === null)
            likedPosts = [];
        if (likedPosts.indexOf(this.post.pid) === -1)
            this.liked = "fa-heart-o";
        else
            this.liked = "fa-heart";
        this.calculateDate();
    };
    PersonalPostComponent.prototype.calculateDate = function () {
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
    PersonalPostComponent.prototype.calculateTimeRemaining = function () {
        var currentDate = new Date(this.post.currentdate);
        var diffDate = currentDate.getTime() - this.postDate.getTime();
        var minutes = Math.floor(diffDate / 60000);
        minutes = 1440 - minutes;
        this.hoursLeft = Math.floor(minutes / 60);
        this.minutesLeft = minutes - (this.hoursLeft * 60);
        var hourString = this.hoursLeft.toString();
        var minuteString = '';
        if (this.minutesLeft < 10)
            minuteString = "0" + this.minutesLeft.toString();
        else
            minuteString = this.minutesLeft.toString();
        this.rem = hourString + ":" + minuteString + " remaining";
    };
    PersonalPostComponent.prototype.handleLike = function () {
        var pid = this.post.pid;
        var likedPosts = JSON.parse(localStorage.getItem("likedPosts"));
        if (likedPosts === null)
            likedPosts = [];
        var index = likedPosts.indexOf(pid);
        if (index === -1) {
            this.liked = "fa-heart";
            likedPosts.push(pid);
            localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
            this.likeService.likePost(pid);
        }
        else {
            this.liked = "fa-heart-o";
            likedPosts.splice(index, 1);
            localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
            this.likeService.unlikePost(pid);
        }
    };
    PersonalPostComponent.prototype.deletePost = function () {
        var _this = this;
        bootbox.confirm("Are you sure you want to delete?", function (result) {
            if (result === true) {
                _this.likeService.deletePost(_this.post.pid);
                window.location.reload(true);
            }
        });
    };
    PersonalPostComponent.prototype.clipboard = function () {
        bootbox.dialog({
            title: "Direct Link to Post!",
            message: "<form class='bootbox-form' onsubmit='return false;'><input type='text' id='directLink' class='bootbox-input bootbox-input-text form-control' value='www.tempfession.com/post/" + this.post.pid + "' READONLY></form>",
            closeButton: true,
            onEscape: true,
            buttons: {
                ok: {
                    label: "Done",
                    className: "btn-primary",
                    callback: function () { return; }
                }
            },
            callback: function (result) { return; }
        });
        $(".modal").on("shown.bs.modal", function () {
            $("#directLink").focus();
            $("#directLink").select();
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', post_1.Post)
    ], PersonalPostComponent.prototype, "post", void 0);
    PersonalPostComponent = __decorate([
        core_1.Component({
            selector: 'personalpost',
            providers: [like_service_1.LikeService],
            template: "\n    <div class=\"panel post\">\n      <div class=\"panel-heading\">\n        {{this.hour}}:{{this.minute}} {{this.mer}}\n        <span class=\"time-left\"> {{rem}} </span>\n      </div>\n      <div class=\"panel-body\">\n        {{post.body}}\n      </div>\n      <div class=\"divider\"></div>\n      <div class=\"panel-footer\">\n        <button class=\"clipboard\" (click)=\"clipboard()\">\n          <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"like\" (click)=\"handleLike()\">\n          <i class=\"fa {{this.liked}}\" alt=\"Like\" title=\"Like\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"trash\" (click)=\"deletePost()\">\n          <i class=\"fa fa-trash\" alt=\"Delete\" title=\"Delete\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [like_service_1.LikeService])
    ], PersonalPostComponent);
    return PersonalPostComponent;
}());
exports.PersonalPostComponent = PersonalPostComponent;
//# sourceMappingURL=personalPost.component.js.map