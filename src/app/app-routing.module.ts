import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { DemandComponent } from './demand/demand.component';
import { EcoActionsComponent } from './eco-actions/eco-actions.component';
import { FoodAppComponent } from './food-app-project/food-app.component';
import { MusicSchoolComponent } from './music-school/music-school.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: CurriculumVitaeComponent },
  { path: 'portfolio/projects/food-app-project', component: FoodAppComponent },
  {
    path: 'portfolio/projects/EcoActions-project',
    component: EcoActionsComponent,
  },
  {
    path: 'portfolio/projects/MusicSchool-project',
    component: MusicSchoolComponent,
  },
  {
    path: 'portfolio/projects/Demand-project',
    component: DemandComponent,
  },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
