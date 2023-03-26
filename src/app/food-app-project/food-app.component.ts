import { Component, OnInit } from '@angular/core';
import { project } from '../shared/data';

@Component({
  selector: 'app-food-app',
  templateUrl: './food-app.component.html',
  styleUrls: ['./food-app.component.css'],
})
export class FoodAppComponent implements OnInit {
  project: project = {
    pros: {
      arg1: 'A complete view of Angular',
      arg2: 'Usage of a backend & database, requiring http conversation',
      arg3: 'A more complex structure due to Angular architecture compared to classical project',
      arg4: 'Functional Reactive Programming, RxJs',
      arg5: 'Typescript',
    },
    cons: {
      arg1: 'A more extensive use of RxJs',
      arg2: 'A better structure, ie. "smart and dumb component"',
      arg3: 'Deeper view of Typescript',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
