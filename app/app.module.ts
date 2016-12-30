import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FeedComponent } from './feed.component';
import { PostComponent } from './post.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],

  declarations: [
    FeedComponent,
    PostComponent
  ],

  bootstrap: [
    FeedComponent
  ]
})

export class AppModule {  }
