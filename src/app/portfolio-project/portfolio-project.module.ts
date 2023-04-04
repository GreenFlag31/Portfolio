import { NgModule } from '@angular/core';

import { PortfolioProjectRoutingModule } from './portfolio-project-routing.module';
import { PortfolioProjectComponent } from './portfolio-project.component';
import { SharedModule } from '../shared/shared-module.module';

@NgModule({
  declarations: [PortfolioProjectComponent],
  imports: [PortfolioProjectRoutingModule, SharedModule],
})
export class PortfolioProjectModule {}
