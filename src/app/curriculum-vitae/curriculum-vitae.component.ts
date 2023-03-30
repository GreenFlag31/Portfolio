import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, delay } from 'rxjs';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css'],
})
export class CurriculumVitaeComponent implements OnInit {
  currentYear = new Date().getFullYear();
  totalProjectsSlide = 3;
  counter = 0;

  subscription!: Subscription;
  constructor(private scrollToTop: ScrollToTopService) {}

  ngOnInit(): void {
    // this.scrollToTop.unSub();
    this.scrollToTop.scrollToTop();
  }

  onPreviousProject(projects: HTMLDivElement) {
    if (this.counter <= 0) return;

    this.counter -= 1;
    const currentSlide = (this.counter / this.totalProjectsSlide) * 100;

    projects.style.transform = `translate3d(-${currentSlide}%, 0px, 0px)`;
  }

  onNextProject(projects: HTMLDivElement) {
    if (this.counter >= this.totalProjectsSlide - 1) return;

    this.counter += 1;
    const currentSlide = (this.counter / this.totalProjectsSlide) * 100;

    projects.style.transform = `translate3d(-${currentSlide}%, 0px, 0px)`;
  }
}
