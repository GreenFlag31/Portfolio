import { NgModule } from '@angular/core';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { SharedModule } from '../shared/shared-module.module';
import { CalculatorComponent } from './calculator.component';

@NgModule({
  declarations: [CalculatorComponent],
  imports: [CalculatorRoutingModule, SharedModule],
})
export class CalculatorModule {}
