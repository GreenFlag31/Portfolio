import { Component, Input, OnInit } from '@angular/core';
import { project } from '../shared/data';

@Component({
  selector: 'app-pro-contra',
  templateUrl: './pro-contra.component.html',
  styleUrls: ['./pro-contra.component.css'],
})
export class ProContraComponent implements OnInit {
  @Input() project!: project;
  constructor() {}

  ngOnInit(): void {}
}
