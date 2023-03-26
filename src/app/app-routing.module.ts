import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { FoodAppComponent } from './food-app-project/food-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: CurriculumVitaeComponent },
  { path: 'portfolio/projects/food-app-project', component: FoodAppComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
