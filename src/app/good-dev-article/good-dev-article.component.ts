import { Component, OnInit } from '@angular/core';
import { navigation } from '../shared/data-type';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-good-dev-article',
  templateUrl: './good-dev-article.component.html',
  styleUrls: ['./good-dev-article.component.css'],
})
export class GoodDevArticleComponent implements OnInit {
  navigation: navigation = {
    next: {
      name: 'Next article: Clean Code',
      link: '../clean-code',
    },
  };
  constructor(private scrollToTop: ScrollToTopService) {}

  ngOnInit(): void {
    this.scrollToTop.scrollToTopWithDelay();
  }
}
