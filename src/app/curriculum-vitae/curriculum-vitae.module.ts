import { NgModule } from '@angular/core';
import { CurriculumVitaeRoutingModule } from './curriculum-vitae-routing.module';
import { ProjectOverviewComponent } from '../project-overview/project-overview.component';
import { CurriculumVitaeComponent } from './curriculum-vitae.component';
import { SharedModule } from '../shared/shared-module.module';

@NgModule({
  declarations: [CurriculumVitaeComponent, ProjectOverviewComponent],
  imports: [CurriculumVitaeRoutingModule, SharedModule],
})
export class CurriculumVitaeModule {}
