import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import './../assets/smtp.js';
import { AuthServiceService } from './service/auth-service.service.js';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  location: any;
  routerSubscription: any;

  constructor(private router: Router,
    private ap:AuthServiceService) {
this.ap.getCoffeeOrders();
     }

  ngOnInit(){
      this.recallJsFuntions();
  }

  recallJsFuntions() {
      this.router.events
      .subscribe((event) => {
          if ( event instanceof NavigationStart ) {
              $('.preloader').fadeIn('slow');
          }
      });
      this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe(event => {
          $.getScript('assets/js/custom.js');
          $('.preloader').fadeOut('slow');
          this.location = this.router.url;
          if (!(event instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
      });
  }
//   onActive(event){
//     window.scrollTo(0, 0);
//   }
}


