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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.browsePosts = "/browsePosts";
        this.newPosts = "/newPosts";
        this.topPosts = "/topPosts";
        this.myPosts = "/myPosts";
    }
    PostService.prototype.getBrowsePosts = function () {
        var _this = this;
        return this.http.get(this.browsePosts)
            .toPromise()
            .then(function (response) { return _this.filterPosts(response.json()); })
            .catch(this.handleError);
    };
    PostService.prototype.getNewPosts = function () {
        var _this = this;
        return this.http.get(this.newPosts)
            .toPromise()
            .then(function (response) { return _this.filterPosts(response.json()); })
            .catch(this.handleError);
    };
    PostService.prototype.getTopPosts = function () {
        var _this = this;
        return this.http.get(this.topPosts)
            .toPromise()
            .then(function (response) { return _this.filterPosts(response.json()); })
            .catch(this.handleError);
    };
    PostService.prototype.getMyPosts = function () {
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.myPosts, { "uid": localStorage.getItem("UID") }, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PostService.prototype.handleError = function (error) {
        console.error("An error has occurred retrieving posts");
        return Promise.reject(error.message || error);
    };
    PostService.prototype.filterPosts = function (posts) {
        var hidden = JSON.parse(localStorage.getItem("hidden"));
        if (hidden === null)
            hidden = [];
        for (var i = 0; i < posts.length; i++) {
            var index = hidden.indexOf(posts[i].pid);
            if (index != -1)
                posts[i].pid = null;
        }
        return posts;
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map