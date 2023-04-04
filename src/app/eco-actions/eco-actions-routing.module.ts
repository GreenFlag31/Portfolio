import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcoActionsComponent } from './eco-actions.component';

const routes: Routes = [
  {
    path: '',
    component: EcoActionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcoActionsRoutingModule {}
