import { Component, OnInit } from '@angular/core';
import { navigation } from '../../shared/data-type';
import { ScrollToTopService } from '../../shared/scroll-to-top.service';
import { Meta } from '@angular/platform-browser';

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
  constructor(private scrollToTop: ScrollToTopService, private meta: Meta) {}

  ngOnInit() {
    this.meta.addTag({
      name: 'description',
      content:
        'Web Developer - Manu Claeys - Portfolio - Project Other projects - Part of online formation',
    });
    this.scrollToTop.scroll();
  }

  scrollToTarget(target: HTMLDivElement) {
    target.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
