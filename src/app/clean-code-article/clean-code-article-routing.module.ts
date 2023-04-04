import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CleanCodeArticleComponent } from './clean-code-article.component';

const routes: Routes = [
  {
    path: '',
    component: CleanCodeArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CleanCodeArticleRoutingModule {}
