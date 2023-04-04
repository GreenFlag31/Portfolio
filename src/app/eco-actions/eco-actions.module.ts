import { NgModule } from '@angular/core';

import { EcoActionsRoutingModule } from './eco-actions-routing.module';
import { EcoActionsComponent } from './eco-actions.component';
import { SharedModule } from '../shared/shared-module.module';

@NgModule({
  declarations: [EcoActionsComponent],
  imports: [EcoActionsRoutingModule, SharedModule],
})
export class EcoActionsModule {}
