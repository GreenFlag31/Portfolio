import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumVitaeComponent } from './curriculum-vitae.component';

const routes: Routes = [
  {
    path: '',
    component: CurriculumVitaeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurriculumVitaeRoutingModule {}
