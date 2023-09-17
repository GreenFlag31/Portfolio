import {
  OnInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  OnDestroy,
  Output,
} from '@angular/core';
import { fromEvent, debounceTime, Subscription } from 'rxjs';

@Directive({
  selector: '[ngTab]',
  standalone: true,
  host: { class: 'tabs' },
})
export class Tab {
  @Output() visibilityChange = new EventEmitter<boolean>();
  openTab = false;

  constructor() {}

  @HostListener('click', ['$event'])
  onClick() {
    this.openTab = !this.openTab;
    this.visibilityChange.emit(this.openTab);
  }
}

@Directive({
  selector: '[ngTabLabel]',
  standalone: true,
  host: { class: 'tab-label' },
})
export class TabLabel implements OnInit {
  openTab = false;
  constructor(private tab: Tab) {}
  ngOnInit() {
    this.tab.visibilityChange.subscribe((visible) => {
      this.openTab = visible;
    });
  }

  @HostBinding('class.open')
  get rotate() {
    return this.openTab;
  }
}

@Directive({
  selector: '[ngTabContent]',
  standalone: true,
  host: { class: 'tab-content' },
})
export class TabContent implements OnInit, OnDestroy {
  maxHeightOfContent = 0;
  openTab = false;
  resizeEventSub!: Subscription;

  constructor(private element: ElementRef<HTMLDivElement>, private tab: Tab) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.stopImmediatePropagation();
  }

  ngOnInit() {
    this.resizeEventSub = fromEvent(window, 'resize')
      .pipe(debounceTime(300))
      .subscribe(() => {
        this.computeHeight();
        this.applyMaxHeight();
      });

    this.tab.visibilityChange.subscribe((visible) => {
      this.openTab = visible;
      if (this.maxHeightOfContent === 0) {
        this.computeHeight();
      }
      this.applyMaxHeight();
    });
  }

  computeHeight() {
    const children = Array.from(this.element.nativeElement.children);

    const heightOfContent = children.reduce(
      (acc, current) => acc + current.clientHeight,
      0
    );

    const padding =
      parseInt(getComputedStyle(this.element.nativeElement).paddingLeft, 10) *
      2;

    this.maxHeightOfContent = heightOfContent + padding;
  }

  applyMaxHeight() {
    this.element.nativeElement.style.maxHeight = this.openTab
      ? this.maxHeightOfContent + 'px'
      : '0px';
    this.element.nativeElement.style.padding = this.openTab ? '1em' : '0 1em';
  }

  @HostBinding('style.maxHeight')
  get opened() {
    return this.openTab ? this.maxHeightOfContent + 'px' : 0;
  }

  ngOnDestroy() {
    this.resizeEventSub.unsubscribe();
  }
}
