import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { description, navigation, project } from '../shared/data-type';

@Component({
  selector: 'app-pro-contra',
  templateUrl: './pro-contra.component.html',
  styleUrls: ['./pro-contra.component.css'],
})
export class ProContraComponent implements OnInit, AfterViewInit {
  @Input() description!: description;
  @Input() project!: project;
  @Input() navigation!: navigation;
  @ViewChild('navigate') navigate!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (!this.navigation.previous) {
      this.navigate.nativeElement.style.justifyContent = 'flex-end';
    }
    if (!this.navigation.next) {
      this.navigate.nativeElement.style.justifyContent = 'flex-start';
    }
  }
}
