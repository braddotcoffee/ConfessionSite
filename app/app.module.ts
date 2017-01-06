import { NgModule        }  from  '@angular/core';
import { BrowserModule   }  from  '@angular/platform-browser';
import { FormsModule     }  from  '@angular/forms';
import { RouterModule    }  from  '@angular/router';
import { HttpModule      }  from  '@angular/http';

import { MasonryModule   }  from  'angular2-masonry';

import { AppComponent    }  from  './app.component';
import { TopComponent    }  from  './top.component';
import { NewComponent     }  from  './new.component';
import { PostComponent    }  from  './post.component';
import { BrowseComponent  }  from  './browse.component';
import { MyPostsComponent }  from  './myposts.component';

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
        component: TopComponent
      },

      {
        path: 'new',
        component: NewComponent
      },

      {
        path: 'posts',
        component: MyPostsComponent
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
    NewComponent,
    TopComponent,
    PostComponent,
    BrowseComponent,
    MyPostsComponent,
    AppComponent
  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {  }
