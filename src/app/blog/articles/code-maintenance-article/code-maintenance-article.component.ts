import { Component, OnInit } from '@angular/core';
import { navigation } from '../../../shared/data-type';
import { ScrollToTopService } from '../../../shared/scroll-to-top.service';

@Component({
  selector: 'app-code-maintenance-article',
  templateUrl: './code-maintenance-article.component.html',
  styleUrls: ['./code-maintenance-article.component.css'],
})
export class CodeMaintenanceArticleComponent implements OnInit {
  navigation: navigation = {
    previous: {
      name: 'Previous article: Clean Code',
      link: '../clean-code',
    },
  };

  constructor(private scrollToTop: ScrollToTopService) {}

  ngOnInit(): void {
    this.scrollToTop.scrollToTopWithDelay();
  }
}
