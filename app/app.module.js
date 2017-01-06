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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var angular2_masonry_1 = require('angular2-masonry');
var app_component_1 = require('./app.component');
var top_component_1 = require('./top.component');
var new_component_1 = require('./new.component');
var post_component_1 = require('./post.component');
var browse_component_1 = require('./browse.component');
var myposts_component_1 = require('./myposts.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                angular2_masonry_1.MasonryModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'browse',
                        component: browse_component_1.BrowseComponent
                    },
                    {
                        path: 'top',
                        component: top_component_1.TopComponent
                    },
                    {
                        path: 'new',
                        component: new_component_1.NewComponent
                    },
                    {
                        path: 'posts',
                        component: myposts_component_1.MyPostsComponent
                    },
                    {
                        path: '',
                        redirectTo: '/browse',
                        pathMatch: 'full'
                    },
                    {
                        path: '**',
                        redirectTo: '/browse',
                        pathMatch: 'full'
                    },
                ]),
            ],
            declarations: [
                new_component_1.NewComponent,
                top_component_1.TopComponent,
                post_component_1.PostComponent,
                browse_component_1.BrowseComponent,
                myposts_component_1.MyPostsComponent,
                app_component_1.AppComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map