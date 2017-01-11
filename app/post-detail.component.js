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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var post_service_1 = require('./post.service');
require('rxjs/add/operator/switchMap');
var PostDetailComponent = (function () {
    function PostDetailComponent(postService, route, location) {
        this.postService = postService;
        this.route = route;
        this.location = location;
    } // Inject PostService
    // Get Posts on Init //
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.postService.getPostById(params["pid"]); })
            .subscribe(function (posts) { return _this.post = posts[0]; });
    };
    PostDetailComponent = __decorate([
        core_1.Component({
            selector: 'detail',
            providers: [post_service_1.PostService],
            template: "\n  <ul class=\"postsList\">\n    <li *ngIf=\"this.post\">\n      <post [post]=\"this.post\"></post>\n    </li>\n  </ul>\n  "
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, router_1.ActivatedRoute, common_1.Location])
    ], PostDetailComponent);
    return PostDetailComponent;
}());
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=post-detail.component.js.map