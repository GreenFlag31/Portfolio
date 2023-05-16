import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription, filter, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollToTopService {
  subscriptionWithDelay!: Subscription;
  subscriptionWithDelayNoFilter!: Subscription;
  subscriptionProjects!: Subscription;
  SubNavStart!: Subscription;

  routesID = {
    'food-app': 1,
    'roadster-api': 2,
    'eco-actions': 3,
    'coffee-api': 4,
    'music-school': 5,
    demand: 6,
    others: 7,
    allOtherRoutes: 100,
  };

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

  adjacentProjects() {
    this.subscriptionProjects = this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
      this.subscriptionProjects.unsubscribe();
    });
  }

  nonAdjacentProjects() {
    this.subscriptionWithDelayNoFilter = this.router.events
      .pipe(delay(450))
      .subscribe(() => {
        window.scrollTo(0, 0);
        this.subscriptionWithDelayNoFilter.unsubscribe();
      });
  }

  scroll() {
    this.SubNavStart = this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event: any) => {
        this.defineAnimation(event);

        this.SubNavStart.unsubscribe();
      });
  }

  defineAnimation(event: any) {
    const origin = this.getRouteName(
      this.router.url
    ) as keyof typeof this.routesID;
    let target = this.getRouteName(event.url) as keyof typeof this.routesID;

    if (!(target in this.routesID)) target = 'allOtherRoutes';
    if (Math.abs(this.routesID[target] - this.routesID[origin]) > 1) {
      this.nonAdjacentProjects();
    } else {
      this.adjacentProjects();
    }
  }

  getRouteName(completeRoute: string) {
    return completeRoute.split('/').at(-1)!.replace('-project', '');
  }
}
