import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioProjectComponent } from './portfolio-project.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioProjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioProjectRoutingModule {}
