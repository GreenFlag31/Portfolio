import { Component, OnInit } from '@angular/core';
import { navigation } from '../shared/data-type';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.css'],
})
export class OtherProjectsComponent implements OnInit {
  navigation: navigation = {
    previous: {
      name: 'Previous project: Demand',
      link: '../demand-project',
    },
  };
  constructor(private scrollToTop: ScrollToTopService) {}
  ngOnInit() {
    this.scrollToTop.scroll();
  }

  scrollToTarget(target: HTMLDivElement) {
    target.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
