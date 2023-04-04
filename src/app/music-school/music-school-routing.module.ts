import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicSchoolComponent } from './music-school.component';

const routes: Routes = [
  {
    path: '',
    component: MusicSchoolComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicSchoolRoutingModule {}
