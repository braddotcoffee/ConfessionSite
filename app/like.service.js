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
require("rxjs/add/operator/map");
var LikeService = (function () {
    function LikeService(http) {
        this.http = http;
        this.likePostURL = "/likePost";
        this.unlikePostURL = "/unlikePost";
        this.deletePostURL = "/deletePost";
    }
    LikeService.prototype.likePost = function (pid) {
        var _this = this;
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_2.RequestOptions({ headers: headers });
        this.http.post(this.likePostURL, { "pid": pid }, options).subscribe(function (val) { return _this.res = val; });
    };
    LikeService.prototype.unlikePost = function (pid) {
        var _this = this;
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_2.RequestOptions({ headers: headers });
        this.http.post(this.unlikePostURL, { "pid": pid }, options).subscribe(function (val) { return _this.res = val; });
    };
    LikeService.prototype.deletePost = function (pid) {
        var _this = this;
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_2.RequestOptions({ headers: headers });
        this.http.post(this.deletePostURL, { "pid": pid }, options).subscribe(function (val) { return _this.res = val; });
    };
    LikeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LikeService);
    return LikeService;
}());
exports.LikeService = LikeService;
//# sourceMappingURL=like.service.js.map