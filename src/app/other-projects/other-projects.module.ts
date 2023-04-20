import { NgModule } from '@angular/core';
import { OtherProjectsRoutingModule } from './other-projects-routing.module';
import { OtherProjectsComponent } from './other-projects.component';
import { SharedModule } from '../shared/shared-module.module';

@NgModule({
  declarations: [OtherProjectsComponent],
  imports: [OtherProjectsRoutingModule, SharedModule],
})
export class OtherProjectsModule {}
