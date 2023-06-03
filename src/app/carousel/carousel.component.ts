import {
  Component,
  ElementRef,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { projectData } from '../shared/data-type';
import { Subscription, fromEvent } from 'rxjs';

type visibilityEvent = {
  target: {
    visibilityState: 'visible' | 'hidden';
  };
};

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() projectsData!: projectData[];
  currentSlide = 0;
  totalProjectsSlide = 0;
  numberBullets!: number[];
  dragging = false;
  startX = 0;
  startStrechingX!: number | undefined;
  translationAfterLimit!: number | undefined;
  positionChange = 0;
  transformation = 0;
  elementTransformationPercent = 0;
  readonly slidingLimit = 30;
  readonly strechingLimit = 60;
  draggingTranslation = false;
  mouseupSubscription!: Subscription;
  VChangeSubscription!: Subscription;

  @ViewChild('projects') projects!: ElementRef<HTMLDivElement>;
  @ViewChild('card') card!: ElementRef<HTMLDivElement>;

  ngOnInit() {
    this.totalProjectsSlide = this.projectsData.length;
    this.numberBullets = [...Array(this.totalProjectsSlide).keys()];
    this.elementTransformationPercent = (1 / this.totalProjectsSlide) * 100;
  }

  ngAfterViewInit() {
    this.mouseupSubscription = fromEvent(window, 'mouseup').subscribe(() => {
      if (!this.dragging) return;

      this.onDragStop();
    });
    this.VChangeSubscription = fromEvent(
      document,
      'visibilitychange'
    ).subscribe((event: any) => {
      this.unActiveTab(event);
    });
  }

  onDragStart(event: MouseEvent | TouchEvent) {
    this.dragging = true;
    this.startX =
      event instanceof MouseEvent ? event.screenX : event.touches[0].screenX;

    this.projects.nativeElement.style.transition = 'none';
  }

  onDragMove(event: MouseEvent | TouchEvent) {
    if (!this.dragging) return;

    const XCoordinate =
      event instanceof MouseEvent
        ? event.screenX
        : event.changedTouches[0].screenX;
    this.positionChange = XCoordinate - this.startX;

    const previousTranslation =
      this.projects.nativeElement.clientWidth *
      ((this.currentSlide * this.elementTransformationPercent) / 100);

    const currentTranslation = this.positionChange - previousTranslation;

    // First or last slide
    if (
      (currentTranslation > this.strechingLimit && this.currentSlide === 0) ||
      (this.positionChange < -this.strechingLimit &&
        this.currentSlide === this.totalProjectsSlide - 1)
    ) {
      this.applyStreching(XCoordinate, previousTranslation);
      return;
    }

    this.applyTransformation(currentTranslation, 'px');
    this.translationAfterLimit = this.startStrechingX = undefined;

    const translateX =
      (this.positionChange / this.card.nativeElement.offsetWidth) * 100;
    this.draggingTranslation = true;

    if (translateX < -this.slidingLimit) {
      // Going right, next slide
      this.changeSlide(++this.currentSlide);
    } else if (translateX > this.slidingLimit) {
      this.changeSlide(--this.currentSlide);
    }
  }

  applyStreching(coordinate: number, previousTranslation: number) {
    this.startStrechingX = this.startStrechingX || coordinate;
    const mvmtAfterLimit = coordinate - this.startStrechingX;
    this.translationAfterLimit =
      this.translationAfterLimit || mvmtAfterLimit - previousTranslation;

    this.currentSlide === 0
      ? this.applyTransformation(
          this.strechingLimit + mvmtAfterLimit / 10,
          'px'
        )
      : this.applyTransformation(
          this.translationAfterLimit -
            this.strechingLimit +
            mvmtAfterLimit / 10,
          'px'
        );
  }

  onDragStop() {
    this.dragging = false;

    if (this.draggingTranslation) {
      this.changeSlide(this.currentSlide);
    }
  }

  unActiveTab(event: visibilityEvent) {
    if (
      event.target.visibilityState === 'visible' &&
      this.draggingTranslation
    ) {
      this.onDragStop();
    }
  }

  onPreviousProject() {
    this.changeSlide(--this.currentSlide);
  }

  onNextProject() {
    this.changeSlide(++this.currentSlide);
  }

  changeSlide(slide: number) {
    this.projects.nativeElement.style.transition = `transform 0.3s ease-out`;

    this.transformation = (slide / this.totalProjectsSlide) * 100;
    this.applyTransformation(-this.transformation, '%');

    this.dragging = this.draggingTranslation = false;
    this.translationAfterLimit = this.startStrechingX = undefined;
  }

  goTo(bullet: number) {
    this.currentSlide = bullet;
    this.changeSlide(bullet);
  }

  applyTransformation(transformation: number, unit: string) {
    this.projects.nativeElement.style.transform = `translate3d(${transformation}${unit}, 0, 0)`;
  }

  ngOnDestroy() {
    this.mouseupSubscription.unsubscribe();
    this.VChangeSubscription.unsubscribe();
  }
}
