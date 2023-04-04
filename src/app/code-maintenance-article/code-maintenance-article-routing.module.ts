import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeMaintenanceArticleComponent } from './code-maintenance-article.component';

const routes: Routes = [
  {
    path: '',
    component: CodeMaintenanceArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeMaintenanceArticleRoutingModule {}
