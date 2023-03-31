import { Component, Input, OnInit } from '@angular/core';
import { navigation } from '../shared/data-type';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css'],
})
export class NavigateComponent implements OnInit {
  @Input() navigation!: navigation;

  constructor() {}

  ngOnInit(): void {}
}
