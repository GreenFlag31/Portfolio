import { NgModule } from '@angular/core';
import { FoodAppProjectRoutingModule } from './food-app-project-routing.module';
import { FoodAppComponent } from './food-app.component';
import { SharedModule } from '../shared/shared-module.module';

@NgModule({
  declarations: [FoodAppComponent],
  imports: [FoodAppProjectRoutingModule, SharedModule],
})
export class FoodAppProjectModule {}
