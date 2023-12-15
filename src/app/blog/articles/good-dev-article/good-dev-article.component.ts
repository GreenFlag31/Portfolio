import { Component, OnInit } from '@angular/core';
import { navigation } from '../../../shared/data-type';
import { ScrollToTopService } from '../../../shared/scroll-to-top.service';
import { Meta } from '@angular/platform-browser';

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
  constructor(private scrollToTop: ScrollToTopService, private meta: Meta) {}

  ngOnInit() {
    this.meta.addTag({
      name: 'description',
      content:
        'Web Developer - Manu Claeys - Portfolio - Blog Good Developer article',
    });
    this.scrollToTop.scrollToTopWithDelay();
  }
}
