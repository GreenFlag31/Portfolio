import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherProjectsComponent } from './other-projects.component';

const routes: Routes = [
  {
    path: '',
    component: OtherProjectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherProjectsRoutingModule {}
