import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  subscription!: Subscription;
  constructor(private scrollToTop: ScrollToTopService) {}

  ngOnInit(): void {
    this.scrollToTop.scrollToTop();
  }
}
