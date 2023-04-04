import { Component, OnInit } from '@angular/core';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private scrollToTop: ScrollToTopService) {}
  ngOnInit() {
    this.scrollToTop.scrollToTopWithDelay();
  }
}
