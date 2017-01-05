import { NgModule        }  from  '@angular/core';
import { BrowserModule   }  from  '@angular/platform-browser';
import { FormsModule     }  from  '@angular/forms';
import { RouterModule    }  from  '@angular/router';
import { HttpModule      }  from  '@angular/http';

import { MasonryModule   }  from  'angular2-masonry';

import { AppComponent    }  from  './app.component';
import { FeedComponent   }  from  './feed.component';
import { PostComponent   }  from  './post.component';
import { BrowseComponent }  from  './browse.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MasonryModule,
    RouterModule.forRoot([
      {
        path: 'browse',
        component: BrowseComponent
      },

      {
        path: 'top',
        component: FeedComponent
      },

      {
        path: 'new',
        component: FeedComponent
      },

      {
        path: 'posts',
        component: FeedComponent
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
    FeedComponent,
    PostComponent,
    BrowseComponent,
    AppComponent
  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {  }
