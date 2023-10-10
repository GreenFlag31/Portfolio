import { Component, OnInit } from '@angular/core';
import { navigation } from '../shared/data-type';
import { ScrollToTopService } from '../shared/scroll-to-top.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  navigation: navigation = {
    previous: {
      name: 'Home',
      link: '/portfolio',
    },
  };
  constructor(private scrollToTop: ScrollToTopService, private meta: Meta) {}

  ngOnInit() {
    this.meta.addTag({
      name: 'description',
      content:
        'Front-End Web Developer - Manu Claeys - Portfolio - Blog articles',
    });
    this.scrollToTop.scrollToTopWithDelay();
  }
}
