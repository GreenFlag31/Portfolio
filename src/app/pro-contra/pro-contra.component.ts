import { Component, Input } from '@angular/core';
import { description, navigation, project } from '../shared/data-type';

@Component({
  selector: 'app-pro-contra',
  templateUrl: './pro-contra.component.html',
  styleUrls: ['./pro-contra.component.css'],
})
export class ProContraComponent {
  @Input() description!: description;
  @Input() project!: project;
  @Input() navigation!: navigation;
}
