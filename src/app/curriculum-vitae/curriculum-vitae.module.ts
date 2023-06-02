import { NgModule } from '@angular/core';
import { CurriculumVitaeRoutingModule } from './curriculum-vitae-routing.module';
import { CarouselComponent } from '../carousel/carousel.component';
import { CurriculumVitaeComponent } from './curriculum-vitae.component';
import { SharedModule } from '../shared/shared-module.module';

@NgModule({
  declarations: [CurriculumVitaeComponent, CarouselComponent],
  imports: [CurriculumVitaeRoutingModule, SharedModule],
})
export class CurriculumVitaeModule {}
