import { Component, OnInit } from '@angular/core';
import { navigation } from '../../../shared/data-type';
import { ScrollToTopService } from '../../../shared/scroll-to-top.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-clean-code-article',
  templateUrl: './clean-code-article.component.html',
  styleUrls: ['./clean-code-article.component.css'],
})
export class CleanCodeArticleComponent implements OnInit {
  navigation: navigation = {
    previous: {
      name: 'Previous article: What makes a good developer ?',
      link: '../what-makes-a-good-dev',
    },
    next: {
      name: 'Next article: Code Maintenance ',
      link: '../code-maintenance',
    },
  };

  constructor(private scrollToTop: ScrollToTopService, private meta: Meta) {}

  ngOnInit() {
    this.meta.addTag({
      name: 'description',
      content:
        'Web Developer - Manu Claeys - Portfolio - Blog Clean Code article',
    });
    this.scrollToTop.scrollToTopWithDelay();
  }
}
