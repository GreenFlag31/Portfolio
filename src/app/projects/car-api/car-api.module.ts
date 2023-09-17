import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarApiRoutingModule } from './car-api-routing.module';
import { CarApiComponent } from './car-api.component';
import { SharedModule } from '../../shared/shared-module.module';

@NgModule({
  declarations: [CarApiComponent],
  imports: [CommonModule, CarApiRoutingModule, SharedModule],
})
export class CarApiModule {}
