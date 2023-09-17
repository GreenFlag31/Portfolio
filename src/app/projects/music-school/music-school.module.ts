import { NgModule } from '@angular/core';
import { MusicSchoolRoutingModule } from './music-school-routing.module';

import { SharedModule } from '../../shared/shared-module.module';
import { MusicSchoolComponent } from './music-school.component';

@NgModule({
  declarations: [MusicSchoolComponent],
  imports: [MusicSchoolRoutingModule, SharedModule],
})
export class MusicSchoolModule {}
