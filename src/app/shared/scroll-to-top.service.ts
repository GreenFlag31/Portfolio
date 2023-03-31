import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollToTopService {
  subscriptionWithDelay!: Subscription;
  subscriptionProjects!: Subscription;
  activeSubscriptionWithDelay = 0;
  activeSubscriptionProjects = 0;

  constructor(private router: Router) {}

  scrollToTopWithDelay() {
    // if (this.activeSubscriptionWithDelay > 0) return;
    this.subscriptionWithDelay = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        delay(450)
      )
      .subscribe(() => {
        this.activeSubscriptionWithDelay += 1;
        window.scrollTo(0, 0);
        this.subscriptionWithDelay.unsubscribe();
      });
  }

  scrollToTopProjects() {
    this.subscriptionProjects = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activeSubscriptionProjects += 1;
        window.scrollTo(0, 0);
        this.subscriptionProjects.unsubscribe();
      });
  }

  unSubSubProjects() {
    this.subscriptionProjects.unsubscribe();
    this.activeSubscriptionProjects = 0;
  }
  unSubSubWithDelay() {
    setTimeout(() => {
      this.subscriptionWithDelay?.unsubscribe();
      this.activeSubscriptionWithDelay = 0;
    }, 500);
  }
}
