import { NgModule } from '@angular/core';
import { MusicSchoolRoutingModule } from './music-school-routing.module';
import { MusicSchoolComponent } from './music-school.component';
import { SharedModule } from '../shared/shared-module.module';

@NgModule({
  declarations: [MusicSchoolComponent],
  imports: [MusicSchoolRoutingModule, SharedModule],
})
export class MusicSchoolModule {}
