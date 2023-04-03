import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollToTopService {
  subscriptionWithDelay!: Subscription;
  subscriptionProjects!: Subscription;

  constructor(private router: Router) {}

  scrollToTopWithDelay() {
    this.subscriptionWithDelay = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        delay(450)
      )
      .subscribe(() => {
        window.scrollTo(0, 0);
        this.subscriptionWithDelay.unsubscribe();
      });
  }

  scrollToTopProjects() {
    this.subscriptionProjects = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
        this.subscriptionProjects.unsubscribe();
      });
  }

  // unSubSubProjects() {
  //   this.subscriptionProjects.unsubscribe();
  // }
  // unSubSubWithDelay() {
  //   setTimeout(() => {
  //     this.subscriptionWithDelay?.unsubscribe();
  //   }, 500);
  // }
}
