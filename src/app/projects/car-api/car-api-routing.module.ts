import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarApiComponent } from './car-api.component';

const routes: Routes = [
  {
    path: '',
    component: CarApiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarApiRoutingModule {}
