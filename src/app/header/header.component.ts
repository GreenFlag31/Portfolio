import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpened = false;
  isHamburgerOpen = false;
  responsiveSub!: Subscription;
  isResponsiveMode = window.innerWidth < 500;

  routesID = {
    'Food-App': 1,
    EcoActions: 2,
    MusicSchool: 3,
    Demand: 4,
    Calculator: 5,
    Game: 6,
    Portfolio: 7,
  };

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.responsiveSub = fromEvent(window, 'resize')
      .pipe(debounceTime(300))
      .subscribe(() => {
        this.isResponsiveMode = window.innerWidth < 500;
        this.isHamburgerOpen = false;
        this.isMenuOpened = false;
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

  ngOnDestroy() {
    this.responsiveSub.unsubscribe();
  }
}
