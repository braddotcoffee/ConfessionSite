import { Component             }  from  '@angular/core';
import { Router                }  from  '@angular/router';
import { Event as RouterEvent  }  from  '@angular/router';
import { NavigationStart       }  from  '@angular/router';
import { NavigationEnd         }  from  '@angular/router';
import { NavigationCancel      }  from  '@angular/router';
import { NavigationError       }  from  '@angular/router';

@Component({
  selector: 'app',
  template: `
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
  
}
