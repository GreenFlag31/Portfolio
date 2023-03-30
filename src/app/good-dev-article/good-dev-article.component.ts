import { Component, OnInit } from '@angular/core';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-good-dev-article',
  templateUrl: './good-dev-article.component.html',
  styleUrls: ['./good-dev-article.component.css'],
})
export class GoodDevArticleComponent implements OnInit {
  constructor(private scrollToTop: ScrollToTopService) {}

  ngOnInit(): void {
    this.scrollToTop.scrollToTop();
  }
}
