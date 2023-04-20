import { Component, Input, OnInit } from '@angular/core';
import { navigation } from '../shared/data-type';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.css'],
})
export class OtherProjectsComponent implements OnInit {
  @Input() navigation!: navigation;
  constructor() {}

  ngOnInit() {}
}
