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
var post_service_1 = require('./post.service');
var MyPostsComponent = (function () {
    function MyPostsComponent(postService) {
        this.postService = postService;
    } // Inject PostService
    // Get Posts on Init //
    MyPostsComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    // Get Posts from PostService //
    MyPostsComponent.prototype.getPosts = function () {
        var _this = this;
        this.postService.getMyPosts().then(function (posts) { return _this.posts = posts; });
    };
    MyPostsComponent = __decorate([
        core_1.Component({
            selector: 'myposts',
            providers: [post_service_1.PostService],
            template: "\n  <ul class=\"postsList\">\n    <li *ngFor='let post of posts'>\n      <personalpost [post]=\"post\"></personalpost>\n    </li>\n  </ul>\n  "
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], MyPostsComponent);
    return MyPostsComponent;
}());
exports.MyPostsComponent = MyPostsComponent;
//# sourceMappingURL=myposts.component.js.map