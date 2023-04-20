import { NgModule } from '@angular/core';
import { CoffeeApiRoutingModule } from './coffee-api-routing.module';
import { SharedModule } from '../shared/shared-module.module';
import { CoffeeAPIComponent } from './coffee-api.component';

@NgModule({
  declarations: [CoffeeAPIComponent],
  imports: [CoffeeApiRoutingModule, SharedModule],
})
export class CoffeeApiModule {}
