import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { routesAnimation } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routesAnimation],
})
export class AppComponent {
  title = 'Manu-Claeys-Portfolio';
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
