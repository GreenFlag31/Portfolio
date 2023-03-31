import { Component, Input, OnInit } from '@angular/core';
import { description, navigation, project } from '../shared/data-type';

@Component({
  selector: 'app-pro-contra',
  templateUrl: './pro-contra.component.html',
  styleUrls: ['./pro-contra.component.css'],
})
export class ProContraComponent implements OnInit {
  @Input() description!: description;
  @Input() project!: project;
  @Input() navigation!: navigation;

  constructor() {}

  ngOnInit(): void {}
}
