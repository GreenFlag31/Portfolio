import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollToTopService {
  subscription!: Subscription;

  constructor(private router: Router) {}

  scrollToTop() {
    this.subscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        delay(450)
      )
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  unSub() {
    setTimeout(() => {
      this.subscription?.unsubscribe();
    }, 500);
  }
}
