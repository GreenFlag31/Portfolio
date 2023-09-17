import { NgModule } from '@angular/core';
import { CodeMaintenanceArticleRoutingModule } from './code-maintenance-article-routing.module';
import { CodeMaintenanceArticleComponent } from './code-maintenance-article.component';
import { SharedModule } from '../../../shared/shared-module.module';

@NgModule({
  declarations: [CodeMaintenanceArticleComponent],
  imports: [CodeMaintenanceArticleRoutingModule, SharedModule],
})
export class CodeMaintenanceArticleModule {}
