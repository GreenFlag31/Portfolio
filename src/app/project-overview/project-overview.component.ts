import { Component, Input } from '@angular/core';
import { projectData } from '../shared/data-type';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css'],
})
export class ProjectOverviewComponent {
  @Input() projectsData!: projectData;
}
