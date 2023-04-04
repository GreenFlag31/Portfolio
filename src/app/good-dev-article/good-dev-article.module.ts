import { NgModule } from '@angular/core';
import { GoodDevArticleRoutingModule } from './good-dev-article-routing.module';
import { GoodDevArticleComponent } from './good-dev-article.component';
import { SharedModule } from '../shared/shared-module.module';

@NgModule({
  declarations: [GoodDevArticleComponent],
  imports: [GoodDevArticleRoutingModule, SharedModule],
})
export class GoodDevArticleModule {}
