import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FeedComponent } from './feed.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],

  declarations: [
    FeedComponent
  ],

  bootstrap: [
    FeedComponent
  ]
})

export class AppModule {  }
