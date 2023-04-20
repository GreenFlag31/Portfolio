import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeAPIComponent } from './coffee-api.component';

const routes: Routes = [
  {
    path: '',
    component: CoffeeAPIComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoffeeApiRoutingModule {}
