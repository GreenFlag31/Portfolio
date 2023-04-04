import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodDevArticleComponent } from './good-dev-article.component';

const routes: Routes = [
  {
    path: '',
    component: GoodDevArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodDevArticleRoutingModule {}
