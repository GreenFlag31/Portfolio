import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { navigation } from '../shared/data-type';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit, OnDestroy {
  navigation: navigation = {
    previous: {
      name: 'Home',
      link: '/portfolio',
    },
    // next: {
    //   name: 'Next project: Demand',
    //   link: '../Demand-project',
    // },
  };
  constructor(private scrollToTop: ScrollToTopService) {}

  ngOnInit(): void {
    this.scrollToTop.scrollToTopWithDelay();
  }

  ngOnDestroy(): void {}
}
