import { Component, OnInit, OnDestroy } from '@angular/core';
import { navigation } from '../shared/data-type';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-good-dev-article',
  templateUrl: './good-dev-article.component.html',
  styleUrls: ['./good-dev-article.component.css'],
})
export class GoodDevArticleComponent implements OnInit, OnDestroy {
  navigation: navigation = {
    // previous: {
    //   name: 'Previous article: EcoActions',
    //   link: '../EcoActions-project',
    // },
    next: {
      name: 'Next article: Clean Code',
      link: '../clean-code',
    },
  };
  constructor(private scrollToTop: ScrollToTopService) {}

  ngOnInit(): void {
    // this.scrollToTop.unSubSubProject();
    this.scrollToTop.scrollToTopWithDelay();
  }

  ngOnDestroy(): void {
    // this.scrollToTop.unSubSubWithDelay();
  }
}
