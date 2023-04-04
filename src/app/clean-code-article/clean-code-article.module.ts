import { NgModule } from '@angular/core';

import { CleanCodeArticleRoutingModule } from './clean-code-article-routing.module';
import { CleanCodeArticleComponent } from './clean-code-article.component';
import { SharedModule } from '../shared/shared-module.module';

@NgModule({
  declarations: [CleanCodeArticleComponent],
  imports: [CleanCodeArticleRoutingModule, SharedModule],
})
export class CleanCodeArticleModule {}
