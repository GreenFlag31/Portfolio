import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, debounceTime, fromEvent } from 'rxjs';
import { opacityTransition } from '../shared/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [opacityTransition],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpened = false;
  isHamburgerOpen = false;
  responsiveSub!: Subscription;
  scrollSub!: Subscription;
  isResponsiveMode = window.innerWidth < 500;
  scrollingTopEnabled = window.scrollY > 300;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.responsiveSub = fromEvent(window, 'resize')
      .pipe(debounceTime(300))
      .subscribe(() => {
        this.isResponsiveMode = window.innerWidth < 500;
        this.isHamburgerOpen = false;
        this.isMenuOpened = false;
      });

    this.scrollSub = fromEvent(window, 'scroll').subscribe(() => {
      if (window.scrollY > 300) {
        this.scrollingTopEnabled = true;
      } else {
        this.scrollingTopEnabled = false;
      }
    });
  }

  clickedOutsideMenu() {
    this.isMenuOpened = false;
  }

  clickedOutsideHamburger() {
    this.isHamburgerOpen = false;
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  toggleHamburgerIcon() {
    this.isHamburgerOpen = !this.isHamburgerOpen;
  }

  unExpandNavigationMenu() {
    this.isHamburgerOpen = false;
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  ngOnDestroy() {
    this.responsiveSub.unsubscribe();
    this.scrollSub.unsubscribe();
  }
}
