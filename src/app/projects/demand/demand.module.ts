import { NgModule } from '@angular/core';
import { DemandRoutingModule } from './demand-routing.module';

import { DemandComponent } from './demand.component';
import { SharedModule } from 'src/app/shared/shared-module.module';

@NgModule({
  declarations: [DemandComponent],
  imports: [DemandRoutingModule, SharedModule],
})
export class DemandModule {}
