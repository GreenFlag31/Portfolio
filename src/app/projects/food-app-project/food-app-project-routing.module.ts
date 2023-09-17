import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodAppComponent } from './food-app.component';

const routes: Routes = [
  {
    path: '',
    component: FoodAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodAppProjectRoutingModule {}
