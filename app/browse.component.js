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
var masonry_options_1 = require('./masonry.options');
var BrowseComponent = (function () {
    function BrowseComponent(postService) {
        this.postService = postService;
    } // Inject PostService
    // Get Posts on Init //
    BrowseComponent.prototype.ngOnInit = function () {
        this.options = masonry_options_1.Options;
        this.getPosts();
    };
    // Get Posts from PostService //
    BrowseComponent.prototype.getPosts = function () {
        var _this = this;
        this.postService.getBrowsePosts().then(function (posts) { return _this.posts = posts; });
    };
    BrowseComponent = __decorate([
        core_1.Component({
            selector: 'browse',
            providers: [post_service_1.PostService],
            template: "\n  <masonry [options]=\"options\">\n    <div class=\"grid-sizer\"></div>\n    <div *ngFor=\"let post of posts\">\n      <masonry-brick *ngIf=\"post.pid\">\n        <post class=\"brick\" [post]=\"post\"></post>\n      </masonry-brick>\n    </div>\n  </masonry>\n  "
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], BrowseComponent);
    return BrowseComponent;
}());
exports.BrowseComponent = BrowseComponent;
//# sourceMappingURL=browse.component.js.map